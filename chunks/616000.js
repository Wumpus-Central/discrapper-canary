(n.d(t, { c: () => E, A: () => w }), n(134528), n(947204));
var r = n(17928),
    s = n(73153),
    o = n(164892),
    i = n(746524);
let a = [],
    l = [],
    c = new Map(),
    d = new Map(),
    u = new Map(),
    p = new Map(),
    h = new Map(),
    f = new Map(),
    _ = new Map(),
    g = new Map();
class y extends r.Ay.Store {
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
        return f.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return h.get(e) ?? null;
    }
    getModelCalls(e) {
        return _.get(e)?.snapshot() ?? a;
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
function m(e) {
    let t = _.get(e.projectId);
    null == t && ((t = new i.g((e) => e.seq)), _.set(e.projectId, t));
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
function E(e) {
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
let w = new y(s.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === d.size &&
            0 === u.size &&
            0 === p.size &&
            0 === h.size &&
            0 === f.size &&
            0 === _.size &&
            0 === g.size
        )
            return !1;
        (c.clear(), d.clear(), u.clear(), p.clear(), h.clear(), f.clear(), _.clear(), g.clear());
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
    CONJURE_DEBUG_MODEL_CALL: m,
    CONJURE_DEBUG_BACKLOG: function (e) {
        let { projectId: t, backlog: n, observedAt: r } = e,
            s = !1;
        for (let e of n.trace)
            "debug_model_call" === e.type &&
                "started" !== e.status &&
                !1 !== m({ type: "CONJURE_DEBUG_MODEL_CALL", projectId: t, ...E(e), observedAt: r }) &&
                (s = !0);
        return s;
    },
    CONJURE_DEBUG_TIMING_TRACE: function (e) {
        let { projectId: t, batch: n, live: r } = e,
            s = g.get(t) ?? [],
            o = s.find((e) => e.id === n.trace_id) ?? null,
            i = s
                .filter((e) => e !== o)
                .concat(
                    (function (e, t, n) {
                        let r = new Map((e?.spans ?? []).map((e) => [e.id, e]));
                        for (let e of t.spans)
                            r.set(
                                e.id,
                                (function (e, t) {
                                    let n = e ?? { id: t.id, parent: null, name: "", start: 0, end: null };
                                    return {
                                        ...n,
                                        ...(void 0 !== t.parent ? { parent: t.parent } : {}),
                                        ...(null != t.name ? { name: t.name } : {}),
                                        ...(null != t.start ? { start: t.start } : {}),
                                        ...(null != t.end ? { end: t.end } : {}),
                                        ...(null != t.attrs ? { attrs: { ...n.attrs, ...t.attrs } } : {}),
                                        ...(null != t.details ? { details: { ...n.details, ...t.details } } : {}),
                                        ...(null != t.error ? { error: t.error } : {}),
                                        ...(null != t.waits_on ? { waits_on: t.waits_on } : {}),
                                    };
                                })(r.get(e.id), e),
                            );
                        let s = null == e || t.at >= e.as_of,
                            o = s ? t.name : e.name;
                        return {
                            id: t.trace_id,
                            name: o,
                            started_at: t.started_at,
                            as_of: s ? t.at : e.as_of,
                            started_by: t.started_by,
                            spans: [...r.values()]
                                .sort((e, t) => e.id - t.id)
                                .map((e) => (null == e.parent && e.name !== o ? { ...e, name: o } : e)),
                            dropped: Math.max(e?.dropped ?? 0, t.dropped),
                            live: s ? n : e.live,
                        };
                    })(o, n, r),
                )
                .sort((e, t) => t.started_at + t.as_of - (e.started_at + e.as_of))
                .slice(0, 100)
                .sort((e, t) => e.started_at - t.started_at);
        g.set(t, i);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, o.aM)(n.total)) return !1;
        f.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (c.delete(t), d.delete(t), u.delete(t), p.delete(t), h.delete(t), f.delete(t), _.delete(t), g.delete(t));
    },
});
