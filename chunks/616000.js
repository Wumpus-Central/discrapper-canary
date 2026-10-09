n.d(t, { A: () => g });
var r = n(17928),
    s = n(73153),
    o = n(164892);
(n(134528), n(947204));
let i = [],
    a = new Map(),
    l = new Map(),
    c = new Map(),
    d = new Map(),
    u = new Map(),
    p = new Map(),
    h = new Map(),
    f = new Map();
class _ extends r.Ay.Store {
    getStatus(e) {
        return a.get(e) ?? null;
    }
    getFetchState(e) {
        return l.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return u.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return h.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return p.get(e) ?? null;
    }
    getForceCompactionState(e) {
        return c.get(e) ?? "idle";
    }
    getSandboxRestartState(e) {
        return d.get(e) ?? "idle";
    }
    getTimingTraces(e) {
        return f.get(e) ?? i;
    }
    getTimingTrace(e, t) {
        return f.get(e)?.find((e) => e.id === t) ?? null;
    }
}
let g = new _(s.h, {
    LOGOUT: function () {
        if (
            0 === a.size &&
            0 === l.size &&
            0 === c.size &&
            0 === d.size &&
            0 === u.size &&
            0 === p.size &&
            0 === h.size &&
            0 === f.size
        )
            return !1;
        (a.clear(), l.clear(), c.clear(), d.clear(), u.clear(), p.clear(), h.clear(), f.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        l.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let r = "pending" === c.get(t);
        r &&
            c.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let s = "pending" === d.get(t);
        s &&
            d.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let o = "loading" === l.get(t);
        if ((o && l.set(t, "failed"), !r && !s && !o)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: r } = e;
        r || null == n ? l.set(t, "failed") : (a.set(t, n), l.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        u.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        p.set(e.projectId, {
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
        c.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        c.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_SANDBOX_RESTART_REQUESTED: function (e) {
        let { projectId: t } = e;
        d.set(t, "pending");
    },
    CONJURE_SANDBOX_RESTART_RESULT: function (e) {
        let { projectId: t, outcome: n, reason: r, observedAt: s } = e;
        d.set(t, { outcome: n, reason: r, observedAt: s });
    },
    CONJURE_DEBUG_TIMING_TRACE: function (e) {
        let { projectId: t, batch: n, live: r } = e,
            s = f.get(t) ?? [],
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
        f.set(t, i);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, o.aM)(n.total)) return !1;
        h.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (a.delete(t), l.delete(t), c.delete(t), d.delete(t), u.delete(t), p.delete(t), h.delete(t), f.delete(t));
    },
});
