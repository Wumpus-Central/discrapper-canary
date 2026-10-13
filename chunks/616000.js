n.d(t, { A: () => T });
var r = n(17928),
    s = n(73153),
    o = n(242779);
(n(134528), n(947204));
let i = { pending: !1, info: null, error: null, observedAt: null },
    l = { phase: "idle" },
    a = [],
    c = new Map(),
    d = new Map(),
    u = new Map(),
    p = new Map(),
    h = new Map(),
    f = new Map(),
    _ = new Map(),
    g = new Map(),
    E = new Map(),
    S = new Map(),
    O = new Map();
class m extends r.Ay.Store {
    getStatus(e) {
        return c.get(e) ?? null;
    }
    getFetchState(e) {
        return d.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return g.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return S.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return E.get(e) ?? null;
    }
    getForceCompactionState(e) {
        return u.get(e) ?? "idle";
    }
    getSandboxRestartState(e) {
        return p.get(e) ?? "idle";
    }
    getGitInfoState(e) {
        return h.get(e) ?? i;
    }
    getRestartAgentState(e) {
        return f.get(e) ?? l;
    }
    getInstancePollRequestedAt(e) {
        return _.get(e) ?? null;
    }
    getTimingTraces(e) {
        return O.get(e) ?? a;
    }
    getTimingTrace(e, t) {
        return O.get(e)?.find((e) => e.id === t) ?? null;
    }
}
function y(e, t, n) {
    let r = f.get(e);
    r?.phase === "restarting" &&
        null != t &&
        t !== r.instanceSince &&
        f.set(e, { phase: "restarted", instanceSince: t, observedAt: n });
}
let T = new m(s.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === d.size &&
            0 === u.size &&
            0 === p.size &&
            0 === h.size &&
            0 === f.size &&
            0 === _.size &&
            0 === g.size &&
            0 === E.size &&
            0 === S.size &&
            0 === O.size
        )
            return !1;
        (c.clear(),
            d.clear(),
            u.clear(),
            p.clear(),
            h.clear(),
            f.clear(),
            _.clear(),
            g.clear(),
            E.clear(),
            S.clear(),
            O.clear());
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
        let s = "pending" === p.get(t);
        s &&
            p.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let o = "loading" === d.get(t);
        o && d.set(t, "failed");
        let i = h.get(t),
            l = i?.pending === !0;
        (l && h.set(t, { ...i, pending: !1, error: "Connection lost before the worker answered" }), _.delete(t));
        let a = f.get(t)?.phase === "pending";
        if (
            (a &&
                f.set(t, {
                    phase: "failed",
                    reason: "Connection lost before the worker answered",
                    observedAt: new Date().toISOString(),
                }),
            !r && !s && !o && !l && !a)
        )
            return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: r } = e;
        r || null == n ? d.set(t, "failed") : (c.set(t, n), d.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        g.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        E.set(e.projectId, {
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
    CONJURE_SANDBOX_RESTART_REQUESTED: function (e) {
        let { projectId: t } = e;
        p.set(t, "pending");
    },
    CONJURE_SANDBOX_RESTART_RESULT: function (e) {
        let { projectId: t, outcome: n, reason: r, observedAt: s } = e;
        p.set(t, { outcome: n, reason: r, observedAt: s });
    },
    CONJURE_DEBUG_GIT_INFO_REQUESTED: function (e) {
        let { projectId: t } = e;
        h.set(t, { ...(h.get(t) ?? i), pending: !0 });
    },
    CONJURE_DEBUG_GIT_INFO_RESULT: function (e) {
        let { projectId: t, info: n, error: r, instanceSince: s, observedAt: o } = e,
            l = h.get(t) ?? i;
        (h.set(
            t,
            null != n
                ? { pending: !1, info: n, error: null, observedAt: o }
                : { ...l, pending: !1, error: r ?? "No answer", observedAt: o },
        ),
            y(t, s, o));
    },
    CONJURE_DEBUG_INSTANCE_POLL_REQUESTED: function (e) {
        let { projectId: t, requestedAt: n } = e;
        return (_.set(t, n), !1);
    },
    CONJURE_DEBUG_INSTANCE_SEEN: function (e) {
        let { projectId: t, instanceSince: n, observedAt: r } = e;
        (_.delete(t), y(t, n, r));
    },
    CONJURE_RESTART_AGENT_REQUESTED: function (e) {
        let { projectId: t } = e;
        f.set(t, { phase: "pending" });
    },
    CONJURE_RESTART_AGENT_RESULT: function (e) {
        let { projectId: t, outcome: n, reason: r, instanceSince: s, observedAt: o } = e,
            i = f.get(t)?.phase;
        if ("restarting" === n) {
            if ("pending" !== i) return !1;
            f.set(t, { phase: "restarting", instanceSince: s ?? null, startedAt: Date.parse(o) });
        } else if ("timed_out" === n) {
            if ("restarting" !== i) return !1;
            f.set(t, { phase: "failed", reason: r ?? "No new agent instance answered in time", observedAt: o });
        } else f.set(t, { phase: "failed", reason: r ?? "no reason given", observedAt: o });
    },
    CONJURE_DEBUG_TIMING_TRACE: function (e) {
        let { projectId: t, batch: n, live: r } = e,
            s = O.get(t) ?? [],
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
        O.set(t, i);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, o.aM)(n.total)) return !1;
        S.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (c.delete(t),
            d.delete(t),
            u.delete(t),
            p.delete(t),
            h.delete(t),
            f.delete(t),
            _.delete(t),
            g.delete(t),
            E.delete(t),
            S.delete(t),
            O.delete(t));
    },
});
