(n.r(t),
    n.d(t, {
        default: () => ec,
        prepareTemplate: () => et,
        resetHistoryPaging: () => eo,
        closeConnection: () => ei,
        loadOlderHistory: () => es,
        stageModelSettings: () => ee,
        closeAllConnections: () => el,
        ensureConnection: () => z,
        withdrawUserMessage: () => X,
        interruptTurn: () => Z,
        sendUserMessage: () => Q,
        subscribeDebugBacklog: () => K,
        showUserMessage: () => V,
    }),
    n(321073));
var r = n(158390),
    s = n(17928),
    o = n(73153),
    i = n(195880),
    l = n(287809),
    a = n(308081),
    c = n(245179),
    d = n(940874),
    u = n(805330),
    p = n(616e3),
    h = n(207438),
    _ = n(709753),
    f = n(788493),
    g = n(223347),
    S = n(392739),
    E = n(463660),
    m = n(260498),
    O = n(371169),
    y = n(962998),
    b = n(416473),
    T = n(525530),
    w = n(743082),
    N = n(385081),
    k = n(1371),
    C = n(736553),
    R = n(382541);
n(205816);
let A = {
    app_build_request: !0,
    app_profile_updated: !0,
    assistant_delta: !0,
    attachment: !0,
    awaiting_user: !0,
    build_error: !0,
    clarification: !0,
    collect_secrets: !0,
    collect_settings: !0,
    compaction: !0,
    debug_compaction_declined: !0,
    debug_compaction_report: !0,
    deploying: !0,
    error: !0,
    force_compaction_result: !0,
    healthcheck_deferred: !0,
    healthcheck_failed: !0,
    ideas: !0,
    intake: !0,
    node: !0,
    patch_notes_draft: !0,
    plan_proposed: !0,
    preview_app_published: !0,
    preview_ready: !0,
    project_named: !0,
    publish_cta: !0,
    publish_result: !0,
    publish_schedule_proposal: !0,
    publish_status: !0,
    reply: !0,
    restart_sandbox_result: !0,
    reaction: !0,
    restore_proposal: !0,
    saving: !0,
    segment_settled: !0,
    terminal_error: !0,
    thinking: !0,
    thinking_lifecycle: !0,
    todos: !0,
    turn_result: !0,
    usage: !0,
};
var U = n(649121),
    v = n(975189);
(n(643210), n(285411), n(933294), n(944142), n(557744), n(714917), n(722701), n(894443), n(442331));
let P = new Map(),
    J = new Map(),
    D = new Set();
function M(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
function I(e) {
    return `optimistic:${e}`;
}
let L = new Map();
function G(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    (L.set(r, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: I(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        }));
}
function x(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (G(e, s), (0, d.Gu)(e, n));
}
let W = { ...a.m, ...d.NW, ...h.eI, ..._.x9, ...f.U, ...g.p, ...E.VY, ...y.qy, ...b.Rd, ...T.ow, ...w.WO, ...u.V5 },
    B = {
        app_build_request(e, t) {
            let { projectId: n } = t;
            null != e.app_build_request &&
                o.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { appBuildRequest: e.app_build_request },
                });
        },
        ...d.Un,
        ...h.d5,
        ...E.uk,
        project_named(e, t) {
            let { projectId: n } = t,
                r = m.Ay.getProject(n);
            (null != r &&
                null != e.name &&
                o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: { ...r, name: e.name } }),
                (0, O._b)(n).catch(() => {}));
        },
        app_profile_updated(e, t) {
            let { projectId: n } = t;
            (0, O._b)(n).catch(() => {});
        },
        ...y.rS,
    },
    j = new Set([
        "hello",
        "history",
        "capture_preview",
        "control_preview",
        "control_claim",
        "control_abort",
        "capture_claim",
        "preview_operation",
        "request_upstream_ticket",
        "host_approvals",
    ]);
async function H(e, t) {
    (t.ws.close(), t.helloSeen && (0, R.$Y)(e));
    try {
        let { ticket: n, baseUrl: r } = await (0, R.dv)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            templateId: t.warmTemplateId ?? void 0,
            onEvent: (n) =>
                (function e(t, n, r) {
                    if ((console.debug("[conjure] ws event", r.type), !j.has(r.type) && "open" !== J.get(t)))
                        return void n.pendingEvents.push(r);
                    let s = { projectId: t, ws: n.ws };
                    switch (r.type) {
                        case "history_page":
                            if (r.requested !== er.get(t) || (er.delete(t), !0 === r.failed)) return;
                            o.h.dispatch({
                                type: "CONJURE_CHAT_HISTORY_PREPEND",
                                projectId: t,
                                entries: (r.messages ?? []).slice(),
                                cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                            });
                            return;
                        case "hello":
                            ((n.helloSeen = !0),
                                (n.warmTemplateId = null),
                                (n.debugOnDemand = !0 === r.debug_on_demand),
                                n.backoff.succeed());
                            return;
                        case "history": {
                            let s = (r.messages ?? []).slice();
                            (o.h.dispatch({
                                type: "CONJURE_CHAT_HISTORY_SET",
                                projectId: t,
                                entries: s,
                                cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                                degraded: !0 === r.degraded,
                            }),
                                er.delete(t));
                            let i = n.pendingEvents;
                            for (let r of ((n.pendingEvents = []), M(t, "open"), i)) e(t, n, r);
                            (F.get(t) ?? 0) > 0 && $(t, n);
                            let l = n.pendingModelSettings;
                            if (((n.pendingModelSettings = null), null != l))
                                try {
                                    n.ws.sendModelSettings(l);
                                } catch (e) {
                                    console.error("[conjure] staged model settings send failed", e);
                                }
                            let a = n.pendingTemplatePrep;
                            ((n.pendingTemplatePrep = null), null != a && en(n, a));
                            let c = n.pendingSends;
                            for (let e of ((n.pendingSends = []), c)) {
                                G(t, e);
                                try {
                                    n.ws.sendUserMessage(
                                        e.content,
                                        e.nonce,
                                        e.attachments?.map((e) => e.id),
                                        {
                                            templateId: e.templateId,
                                            remix: e.remix,
                                            clarificationAnswers: e.clarificationAnswers,
                                        },
                                    );
                                } catch (n) {
                                    console.error("[conjure] queued send failed", n);
                                    let e = n instanceof Error ? n.message : "send failed";
                                    (0, d.Gu)(t, e);
                                }
                            }
                            return;
                        }
                        case "user_message":
                            let i, l, a;
                            ((l = (i = null != r.nonce && L.has(r.nonce)) && null != r.nonce ? L.get(r.nonce) : void 0),
                                (a = i && (null == l || null == r.user_id || l === r.user_id)) &&
                                    null != r.nonce &&
                                    L.delete(r.nonce),
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_APPEND",
                                    projectId: t,
                                    content: r.content,
                                    id: r.id,
                                    ...(a && null != r.nonce ? { optimisticId: I(r.nonce) } : {}),
                                    userId: r.user_id,
                                    timestamp: r.ts,
                                    attachments: r.attachments,
                                }));
                            return;
                        case "step":
                            !(function (e, t) {
                                let { projectId: n } = t;
                                if ("turn_result" === e.kind) {
                                    ((0, N.hV)(n, e),
                                        "deployed" === e.result &&
                                            o.h.dispatch({
                                                type: "CONJURE_CHAT_TURN_PATCH",
                                                projectId: n,
                                                turnId: e.turn_id,
                                                patch: { kind: "plan_implemented" },
                                            }),
                                        o.h.dispatch({
                                            type: "CONJURE_CHAT_TURN_FINISHED",
                                            projectId: n,
                                            turnId: e.turn_id,
                                            summary: e.summary,
                                        }),
                                        D.delete(n) &&
                                            "cancelled" === e.result &&
                                            o.h.dispatch({ type: "CONJURE_CHAT_INTERRUPTED", projectId: n }));
                                    return;
                                }
                                let r = B[e.kind];
                                null != r ? r(e, t) : Object.hasOwn(A, e.kind) && (0, d.OA)(n, e);
                            })(r, s);
                            return;
                        default:
                            (W[r.type] ?? W.log)?.(r, s);
                    }
                })(e, t, n),
            onClose: () => {
                ((0, y.Mz)(e, "Connection closed before the publish result arrived"),
                (0, b.Fc)(e),
                (0, y.BC)(e, "Connection closed before the draft arrived"),
                (0, S.RP)(e),
                t.disposed)
                    ? M(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), M(e, "connecting"), t.backoff.fail(() => q(e)))
                      : (M(e, "closed"),
                        x(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null),
                        (t.pendingTemplatePrep = null));
            },
            onError: (e) => {
                console.error("[conjure] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[conjure] ws open failed", n), t.disposed)) return;
        (M(e, "failed"),
            x(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            (t.pendingTemplatePrep = null),
            (0, y.Mz)(e, "Connection failed before the publish result arrived"),
            (0, b.Fc)(e),
            (0, y.BC)(e, "Connection failed before the draft arrived"),
            (0, N.Hy)(e, {
                location: "connection",
                code: N.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = P.get(e);
    null == n &&
        ((n = {
            ws: new C.u(),
            backoff: new r.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingTemplatePrep: null,
            warmTemplateId: null,
            debugOnDemand: !1,
        }),
        P.set(e, n),
        (0, v.Sm)(e, n.ws));
    let s = n;
    ((s.warmTemplateId = t ?? s.warmTemplateId),
        (s.pendingEvents = []),
        (s.helloSeen = !1),
        (s.debugOnDemand = !1),
        (s.disposed = !1),
        (s.reconnectPending = !1),
        M(e, "connecting"),
        H(e, s));
}
let F = new Map();
function $(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function K(e) {
    let t = F.get(e) ?? 0;
    F.set(e, t + 1);
    let n = P.get(e);
    return (
        0 === t && null != n && "open" === J.get(e) && $(e, n),
        () => {
            let t = (F.get(e) ?? 1) - 1;
            t > 0 ? F.set(e, t) : F.delete(e);
        }
    );
}
function Y(e) {
    let t = P.get(e);
    return (
        null != t &&
        ((t.disposed = !0),
        t.backoff.cancel(),
        (0, y.Mz)(e, "Connection closed before the publish result arrived"),
        (0, b.Fc)(e),
        (0, y.BC)(e, "Connection closed before the draft arrived"),
        t.ws.close(),
        P.delete(e),
        (0, v.ng)(e),
        eo(e),
        k.A.releasePreviewControl(e),
        (0, S.RP)(e),
        M(e, "closed"),
        !0)
    );
}
function z(e) {
    let { templateId: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = P.get(e);
    if (null == n) return void q(e, t ?? null);
    let r = J.get(e);
    ("closed" !== r && "failed" !== r) || n.reconnectPending || q(e);
}
function Q(e, t, n) {
    let {
            templateId: r,
            remix: s,
            clarificationAnswers: o,
            nonce: l,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = t.trim(),
        c = null != n && n.length > 0 ? n : void 0;
    if ("" === a && null == c) return !1;
    let u = {
            content: a,
            nonce: l ?? (0, i.m)(),
            attachments: c,
            templateId: r,
            remix: s,
            ...(null != o ? { clarificationAnswers: o } : {}),
        },
        p = P.get(e);
    if (null != p && ("connecting" === J.get(e) || p.reconnectPending)) return (p.pendingSends.push(u), !0);
    G(e, u);
    try {
        if (null == p) throw Error("Not connected");
        return (
            p.ws.sendUserMessage(
                u.content,
                u.nonce,
                u.attachments?.map((e) => e.id),
                { templateId: u.templateId, remix: u.remix, clarificationAnswers: u.clarificationAnswers },
            ),
            !0
        );
    } catch (n) {
        console.error("[conjure] send failed", n);
        let t = n instanceof Error ? n.message : "send failed";
        return (null == l && (0, d.Gu)(e, t), !1);
    }
}
function V(e, t, n) {
    let r = (0, i.m)();
    return (
        G(e, { content: t.trim(), nonce: r, attachments: null != n && n.length > 0 ? n : void 0 }),
        { nonce: r, messageKey: I(r) }
    );
}
function X(e, t) {
    (L.delete(t), o.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: e, id: I(t), withdrawn: !0 }));
}
function Z(e) {
    let t = P.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (D.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[conjure] interrupt send failed", e);
    }
}
function ee(e, t) {
    let n = P.get(e);
    null == n
        ? console.error("[conjure] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function et(e, t) {
    let n = P.get(e);
    null == n
        ? console.error("[conjure] prepareTemplate with no connection \u2014 call ensureConnection first")
        : "open" === J.get(e)
          ? en(n, t)
          : (n.pendingTemplatePrep = t);
}
function en(e, t) {
    try {
        e.ws.sendPrepareTemplate(t);
    } catch (e) {
        console.error("[conjure] template prepare send failed", e);
    }
}
let er = new Map();
function es(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (er.get(e) === t) return !0;
    let n = P.get(e);
    return null != n && "open" === J.get(e) && (er.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function eo(e) {
    er.delete(e);
}
function ei(e) {
    Y(e);
}
function el() {
    for (let e of Array.from(P.keys())) Y(e);
    (L.clear(), (0, U.j_)());
}
class ea extends s.Ay.Store {
    initialize() {
        this.waitFor(c.A, p.A, m.Ay, l.default);
    }
    getConnState(e) {
        return J.get(e) ?? "connecting";
    }
}
let ec = new ea(o.h, {
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (J.get(t) === n) return !1;
        (J.set(t, n), ("closed" === n || "failed" === n) && D.delete(t));
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!Y(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(P.keys())) null == m.Ay.getProject(e) && Y(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (((0, U.j_)(), 0 === P.size)) return !1;
        el();
    },
});
