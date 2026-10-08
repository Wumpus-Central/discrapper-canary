(n.d(t, { A: () => w, c: () => S }), n(134528), n(947204));
var r = n(17928),
    s = n(73153),
    i = n(164892),
    o = n(746524);
let a = [],
    l = [],
    c = new Map(),
    d = new Map(),
    u = new Map(),
    p = new Map(),
    h = new Map(),
    _ = new Map(),
    f = new Map(),
    g = new Map();
class E extends r.Ay.Store {
    getStatus(e) {
        return c.get(e) ?? null;
    }
    getFetchState(e) {
        return d.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return p.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return _.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return h.get(e) ?? null;
    }
    getModelCalls(e) {
        return f.get(e)?.snapshot() ?? a;
    }
    getForceCompactionState(e) {
        return u.get(e) ?? "idle";
    }
    getTimingTraces(e) {
        return g.get(e) ?? l;
    }
    getTimingTrace(e, t) {
        return g.get(e)?.find((e) => e.id === t) ?? null;
    }
}
function y(e) {
    let t = f.get(e.projectId);
    null == t && ((t = new o.g((e) => e.seq)), f.set(e.projectId, t));
    let n = t.findIndex((t) => t.id === e.id),
        r = -1 === n ? null : t.at(n);
    if (null != r && (null == e.seq || (null != r.seq && r.seq <= e.seq))) return !1;
    let s = {
        id: e.id,
        ...(null != e.seq ? { seq: e.seq } : {}),
        role: e.role,
        model: e.model,
        stopReason: e.stopReason,
        durationMs: e.durationMs,
        inputTokens: e.inputTokens,
        outputTokens: e.outputTokens,
        cacheReadTokens: e.cacheReadTokens,
        cacheWriteTokens: e.cacheWriteTokens,
        taskId: e.taskId,
        observedAt: r?.observedAt ?? e.observedAt,
    };
    (null != r ? t.replace(n, s) : t.insert(s), t.trim(200));
}
function S(e) {
    let t = e.call_seq ?? e.entry_seq;
    return {
        id: e.id,
        ...(null != t ? { seq: t } : {}),
        role: "compaction" === e.agent ? "compaction" : "subagent" === e.agent ? "codegen" : "orchestrator",
        model: e.model,
        stopReason: "error" === e.status ? (e.stop_reason ?? "error") : e.stop_reason,
        durationMs: e.duration_ms,
        inputTokens: e.input_tokens ?? 0,
        outputTokens: e.output_tokens ?? 0,
        cacheReadTokens: e.cache_read_tokens ?? 0,
        cacheWriteTokens: e.cache_write_tokens ?? 0,
    };
}
let m = new E(s.h, {
        LOGOUT: function () {
            if (
                0 === c.size &&
                0 === d.size &&
                0 === u.size &&
                0 === p.size &&
                0 === h.size &&
                0 === _.size &&
                0 === f.size &&
                0 === g.size
            )
                return !1;
            (c.clear(), d.clear(), u.clear(), p.clear(), h.clear(), _.clear(), f.clear(), g.clear());
        },
        CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
            let { projectId: t } = e;
            d.set(t, "loading");
        },
        CONJURE_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if ("open" === n) return !1;
            let r = "pending" === u.get(t);
            r &&
                u.set(t, {
                    outcome: "failed",
                    reason: "Connection lost before the worker answered",
                    observedAt: new Date().toISOString(),
                });
            let s = "loading" === d.get(t);
            if ((s && d.set(t, "failed"), !r && !s)) return !1;
        },
        CONJURE_DEBUG_STATUS_SET: function (e) {
            let { projectId: t, status: n, failed: r } = e;
            r || null == n ? d.set(t, "failed") : (c.set(t, n), d.set(t, "loaded"));
        },
        CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
            p.set(e.projectId, {
                tokensBefore: e.tokensBefore,
                tokensAfter: e.tokensAfter,
                retainedMessages: e.retainedMessages,
                promptCeiling: e.promptCeiling,
                observedAt: e.observedAt,
            });
        },
        CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
            h.set(e.projectId, {
                promptCeiling: e.promptCeiling,
                threshold: e.threshold,
                projected: e.projected,
                headroom: e.headroom,
                retainedMessages: e.retainedMessages,
                observedAt: e.observedAt,
            });
        },
        CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
            let { projectId: t } = e;
            u.set(t, "pending");
        },
        CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
            u.set(e.projectId, {
                outcome: e.outcome,
                reason: e.reason,
                ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
                observedAt: e.observedAt,
            });
        },
        CONJURE_DEBUG_MODEL_CALL: y,
        CONJURE_DEBUG_BACKLOG: function (e) {
            let { projectId: t, backlog: n, observedAt: r } = e,
                s = !1;
            for (let e of n.trace)
                "debug_model_call" === e.type &&
                    "started" !== e.status &&
                    !1 !== y({ type: "CONJURE_DEBUG_MODEL_CALL", projectId: t, ...S(e), observedAt: r }) &&
                    (s = !0);
            return s;
        },
        CONJURE_DEBUG_TIMING_TRACE: function (e) {
            let { projectId: t, trace: n } = e,
                r = (g.get(t) ?? [])
                    .filter((e) => e.id !== n.id)
                    .concat(n)
                    .sort((e, t) => e.started_at - t.started_at);
            g.set(t, r.slice(-100));
        },
        CONJURE_CHAT_USAGE_SET: function (e) {
            let { projectId: t, turn: n } = e;
            if (0 === (0, i.aM)(n.total)) return !1;
            _.set(t, n);
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (c.delete(t), d.delete(t), u.delete(t), p.delete(t), h.delete(t), _.delete(t), f.delete(t), g.delete(t));
        },
    }),
    w = 221552 == n.j ? m : null;
