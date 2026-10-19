n.d(t, { DK: () => _, Lj: () => u, R7: () => d, VW: () => f, bq: () => p, d5: () => c, eI: () => a, gX: () => h });
var r = n(73153),
    s = n(975189),
    o = n(385081),
    l = n(616e3),
    i = n(667931);
let a = {
        log(e, t) {
            let { projectId: n } = t;
            (r.h.dispatch({ type: "CONJURE_LOG_APPEND", projectId: n, log: e }),
                (function (e, t) {
                    if (!0 === t.historical || "error" !== t.level) return;
                    let n = null != t.source ? g[t.source] : void 0;
                    if (null == n) return;
                    let r = S.get(e);
                    null == r && ((r = new Set()), S.set(e, r));
                    let s = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                    r.has(s) ||
                        r.size >= 10 ||
                        (r.add(s),
                        (0, o.Hy)(e, { location: n.location, code: n.code, message: t.message, details: t.source }));
                })(n, e));
        },
        debug_git_info(e, t) {
            let { projectId: n } = t;
            !0 === e.lite
                ? r.h.dispatch({
                      type: "CONJURE_DEBUG_INSTANCE_SEEN",
                      projectId: n,
                      instanceSince: e.instance_since,
                      observedAt: new Date().toISOString(),
                  })
                : r.h.dispatch({
                      type: "CONJURE_DEBUG_GIT_INFO_RESULT",
                      projectId: n,
                      info: e.info,
                      error: null == e.info ? (e.error ?? "No answer") : void 0,
                      instanceSince: e.instance_since,
                      observedAt: new Date().toISOString(),
                  });
        },
        restart_agent_result(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_RESTART_AGENT_RESULT",
                projectId: n,
                outcome: "restarting" === e.outcome ? "restarting" : "failed",
                reason: e.reason,
                instanceSince: e.instance_since,
                observedAt: new Date().toISOString(),
            });
        },
        debug_status(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_DEBUG_STATUS_SET",
                projectId: n,
                status: e.status ?? null,
                failed: !0 === e.failed || null == e.status,
            });
        },
        debug_backlog(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_DEBUG_BACKLOG",
                projectId: n,
                backlog: e,
                observedAt: new Date().toISOString(),
            });
        },
        timing_trace_events(e, t) {
            var n, s;
            let o,
                { projectId: a } = t;
            (r.h.dispatch({ type: "CONJURE_DEBUG_TIMING_TRACE", projectId: a, batch: e.batch, live: e.live }),
                (n = a),
                (s = e.batch.trace_id),
                null == (o = l.A.getTimingTrace(n, s)) ||
                    !(0, i.JQ)(o) ||
                    E.has(s) ||
                    (E.add(s), console.log("[conjure] timing trace", JSON.stringify(o))));
        },
        debug_history_state(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_HISTORY_LOAD_SETTLE",
                projectId: n,
                scope: e.scope,
                status: e.status,
                count: e.count,
                truncated: !0 === e.truncated,
            });
        },
    },
    c = {
        debug_compaction_declined(e, t) {
            let { projectId: n } = t;
            null != e.projected &&
                null != e.threshold &&
                r.h.dispatch({
                    type: "CONJURE_DEBUG_COMPACTION_DECLINED",
                    projectId: n,
                    promptCeiling: e.prompt_ceiling ?? 0,
                    threshold: e.threshold,
                    projected: e.projected,
                    headroom: e.headroom ?? e.threshold - e.projected,
                    retainedMessages: e.retained_messages ?? 0,
                    observedAt: new Date().toISOString(),
                });
        },
        force_compaction_result(e, t) {
            let { projectId: n } = t,
                s = e.outcome;
            ("compacted" === s || "declined" === s || "failed" === s || "busy" === s) &&
                r.h.dispatch({
                    type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
                    projectId: n,
                    outcome: s,
                    reason: e.reason,
                    ...(!0 === e.pending_turn ? { pendingTurn: !0 } : {}),
                    observedAt: new Date().toISOString(),
                });
        },
        restart_sandbox_result(e, t) {
            let { projectId: n } = t;
            ("restarted" === e.outcome || "failed" === e.outcome) &&
                r.h.dispatch({
                    type: "CONJURE_SANDBOX_RESTART_RESULT",
                    projectId: n,
                    outcome: e.outcome,
                    reason: e.reason,
                    observedAt: new Date().toISOString(),
                });
        },
        debug_compaction_report(e, t) {
            let { projectId: n } = t;
            null != e.tokens_before &&
                null != e.tokens_after &&
                r.h.dispatch({
                    type: "CONJURE_DEBUG_COMPACTION_REPORT",
                    projectId: n,
                    tokensBefore: e.tokens_before,
                    tokensAfter: e.tokens_after,
                    retainedMessages: e.retained_messages ?? 0,
                    promptCeiling: e.prompt_ceiling ?? 0,
                    observedAt: new Date().toISOString(),
                });
        },
    };
function d(e) {
    r.h.dispatch({ type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId: e });
    let t = (0, s.KY)(e);
    try {
        if (null == t) throw Error("Not connected");
        t.sendDebugStatusRequest();
    } catch (t) {
        (console.error("[conjure] debug status request failed", t),
            r.h.dispatch({ type: "CONJURE_DEBUG_STATUS_SET", projectId: e, status: null, failed: !0 }));
    }
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    r.h.dispatch({ type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId: e });
    let n = (0, s.KY)(e);
    try {
        if (null == n) throw Error("Not connected");
        n.sendForceCompaction(t);
    } catch (t) {
        (console.error("[conjure] force compaction request failed", t),
            r.h.dispatch({
                type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
                projectId: e,
                outcome: "failed",
                reason: "Not connected",
                observedAt: new Date().toISOString(),
            }));
    }
}
function p(e) {
    r.h.dispatch({ type: "CONJURE_SANDBOX_RESTART_REQUESTED", projectId: e });
    let t = (0, s.KY)(e);
    try {
        if (null == t) throw Error("Not connected");
        t.sendRestartSandbox();
    } catch (t) {
        (console.error("[conjure] restart sandbox request failed", t),
            r.h.dispatch({
                type: "CONJURE_SANDBOX_RESTART_RESULT",
                projectId: e,
                outcome: "failed",
                reason: "Not connected",
                observedAt: new Date().toISOString(),
            }));
    }
}
function h(e) {
    let t = (0, s.KY)(e);
    if (null != t) {
        try {
            t.sendDebugGitInfoRequest(!0);
        } catch {
            return;
        }
        r.h.dispatch({ type: "CONJURE_DEBUG_INSTANCE_POLL_REQUESTED", projectId: e, requestedAt: Date.now() });
    }
}
function _(e) {
    let t = (0, s.KY)(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.sendDebugGitInfoRequest(), r.h.dispatch({ type: "CONJURE_DEBUG_GIT_INFO_REQUESTED", projectId: e }));
    } catch {
        r.h.dispatch({
            type: "CONJURE_DEBUG_GIT_INFO_RESULT",
            projectId: e,
            error: "Not connected",
            observedAt: new Date().toISOString(),
        });
    }
}
function f(e, t) {
    r.h.dispatch({ type: "CONJURE_RESTART_AGENT_REQUESTED", projectId: e });
    let n = (0, s.KY)(e);
    try {
        if (null == n) throw Error("Not connected");
        n.sendRestartAgent(t);
    } catch {
        r.h.dispatch({
            type: "CONJURE_RESTART_AGENT_RESULT",
            projectId: e,
            outcome: "failed",
            reason: "Not connected",
            observedAt: new Date().toISOString(),
        });
    }
}
let g = {
        web: { location: "runtime_frame", code: o.xf.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: o.xf.RUNTIME_WORKER_ERROR },
    },
    S = new Map(),
    E = new Set();
