(n.r(t),
    n.d(t, {
        subscribeDebugBacklog: () => et,
        default: () => eE,
        prepareTemplate: () => ec,
        resetHistoryPaging: () => eh,
        closeConnection: () => e_,
        loadOlderHistory: () => ep,
        stageModelSettings: () => ea,
        closeAllConnections: () => ef,
        ensureConnection: () => er,
        withdrawUserMessage: () => ei,
        interruptTurn: () => el,
        sendUserMessage: () => es,
        optimisticMessageId: () => B,
        showUserMessage: () => eo,
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
    u = n(120234),
    p = n(805330),
    h = n(616e3),
    _ = n(207438),
    f = n(709753),
    g = n(788493),
    E = n(223347),
    S = n(392739),
    m = n(463660),
    y = n(260498),
    O = n(371169),
    b = n(962998),
    T = n(416473),
    C = n(525530),
    k = n(743082),
    N = n(385081),
    w = n(545503);
class A {
    sendPing;
    onDead;
    interval = null;
    expeditedTimeout = null;
    acked = !0;
    pongSeen = !1;
    constructor(e, t) {
        ((this.sendPing = e), (this.onDead = t));
    }
    start() {
        (this.stop(),
            (this.acked = !0),
            (this.pongSeen = !1),
            (this.interval = setInterval(() => this.beat(), 3e4)),
            this.beat());
    }
    stop() {
        (null != this.interval && clearInterval(this.interval), (this.interval = null), this.clearExpedited());
    }
    received() {
        ((this.acked = !0), this.clearExpedited());
    }
    pong() {
        ((this.pongSeen = !0), this.received());
    }
    expedite() {
        null != this.interval &&
            this.pongSeen &&
            ((this.acked = !1),
            this.sendPing(),
            this.clearExpedited(),
            (this.expeditedTimeout = setTimeout(() => {
                ((this.expeditedTimeout = null), this.acked || this.dead());
            }, 5e3)));
    }
    beat() {
        this.acked || !this.pongSeen
            ? ((this.acked = !1), this.sendPing())
            : null == this.expeditedTimeout && this.dead();
    }
    dead() {
        (this.stop(), this.onDead());
    }
    clearExpedited() {
        (null != this.expeditedTimeout && clearTimeout(this.expeditedTimeout), (this.expeditedTimeout = null));
    }
}
var R = n(736553),
    v = n(642785);
n(205816);
let U = {
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
    publish_approval_required: !0,
    publish_cta: !0,
    publish_options: !0,
    publish_progress: !0,
    publish_result: !0,
    publish_schedule_proposal: !0,
    publish_status: !0,
    reply: !0,
    restart_sandbox_result: !0,
    reaction: !0,
    restore_proposal: !0,
    saving: !0,
    segment_settled: !0,
    spend_limit: !0,
    terminal_error: !0,
    thinking: !0,
    thinking_lifecycle: !0,
    todos: !0,
    turn_result: !0,
    usage: !0,
};
var P = n(649121),
    I = n(975189),
    J = n(77729),
    D = n(209489),
    M = n(723702);
let L = !1;
(n(643210),
    n(285411),
    n(933294),
    n(944142),
    n(557744),
    n(714917),
    n(722701),
    n(894443),
    n(442331),
    n(427123),
    n(677683));
let H = new Map(),
    x = new Map(),
    j = new Set();
function G(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
function B(e) {
    return `optimistic:${e}`;
}
let W = new Map();
function q(e, t, n) {
    let { content: r, nonce: s, attachments: i } = t;
    (W.set(s, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: r,
            id: B(s),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: i,
            held: n,
        }));
}
function $(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (q(e, s), (0, d.Gu)(e, n));
}
let F = { ...a.m, ...d.NW, ..._.eI, ...f.x9, ...g.U, ...E.p, ...m.VY, ...b.qy, ...T.Rd, ...C.ow, ...k.WO, ...p.V5 },
    K = {
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
        ..._.d5,
        ...m.uk,
        project_named(e, t) {
            let { projectId: n } = t,
                r = y.Ay.getProject(n);
            (null != r &&
                null != e.name &&
                o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: { ...r, name: e.name } }),
                (0, O._b)(n).catch(() => {}));
        },
        app_profile_updated(e, t) {
            let { projectId: n } = t;
            (0, O._b)(n).catch(() => {});
        },
        ...b.rS,
        spend_limit(e, t) {
            let { projectId: n } = t;
            o.h.dispatch({
                type: "CONJURE_SPEND_LIMIT_SET",
                projectId: n,
                spendLimit: "ok" === e.state ? null : { state: e.state, spentUsd: e.spent_usd, limitUsd: e.limit_usd },
            });
        },
    },
    V = new Set([
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
function Y(e, t) {
    (t.heartbeat.stop(),
    (0, b.Mz)(e, "Connection closed before the publish result arrived"),
    (0, T.Fc)(e),
    (0, b.BC)(e, "Connection closed before the draft arrived"),
    (0, S.RP)(e),
    t.disposed)
        ? G(e, "closed")
        : t.helloSeen
          ? ((t.reconnectPending = !0), G(e, "connecting"), t.backoff.fail(() => Q(e)))
          : (G(e, "closed"),
            $(e, t, "Connection closed before the message was sent"),
            (t.pendingModelSettings = null),
            (t.pendingTemplatePrep = null));
}
async function z(e, t) {
    (t.ws.close(), t.helloSeen && (0, v.$Y)(e));
    try {
        let { ticket: n, baseUrl: r } = await (0, v.dv)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            templateId: t.warmTemplateId ?? void 0,
            onEvent: (n) => {
                (t.heartbeat.received(),
                    (function e(t, n, r) {
                        if ((console.debug("[conjure] ws event", r.type), !V.has(r.type) && "open" !== x.get(t)))
                            return void n.pendingEvents.push(r);
                        let s = { projectId: t, ws: n.ws };
                        switch (r.type) {
                            case "history_page":
                                if (r.requested !== eu.get(t) || (eu.delete(t), !0 === r.failed)) return;
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
                                    n.backoff.succeed(),
                                    !0 === r.heartbeat && n.heartbeat.start());
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
                                    eu.delete(t));
                                let i = n.pendingEvents;
                                for (let r of ((n.pendingEvents = []), G(t, "open"), i)) e(t, n, r);
                                (Z.get(t) ?? 0) > 0 && ee(t, n);
                                let l = n.pendingModelSettings;
                                if (((n.pendingModelSettings = null), null != l))
                                    try {
                                        n.ws.sendModelSettings(l);
                                    } catch (e) {
                                        console.error("[conjure] staged model settings send failed", e);
                                    }
                                let a = n.pendingTemplatePrep;
                                ((n.pendingTemplatePrep = null), null != a && ed(n, a));
                                let c = n.pendingSends;
                                for (let e of ((n.pendingSends = []), c)) {
                                    q(t, e);
                                    try {
                                        n.ws.sendUserMessage(
                                            e.content,
                                            e.nonce,
                                            e.attachments?.map((e) => e.id),
                                            {
                                                templateId: e.templateId,
                                                remix: e.remix,
                                                clarificationAnswers: e.clarificationAnswers,
                                                linkEmbeds: e.linkEmbeds,
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
                                ((l =
                                    (i = null != r.nonce && W.has(r.nonce)) && null != r.nonce
                                        ? W.get(r.nonce)
                                        : void 0),
                                    (a = i && (null == l || null == r.user_id || l === r.user_id)) &&
                                        null != r.nonce &&
                                        W.delete(r.nonce),
                                    o.h.dispatch({
                                        type: "CONJURE_CHAT_MESSAGE_APPEND",
                                        projectId: t,
                                        content: r.content,
                                        id: r.id,
                                        ...(a && null != r.nonce ? { optimisticId: B(r.nonce) } : {}),
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
                                            j.delete(n) &&
                                                "cancelled" === e.result &&
                                                o.h.dispatch({ type: "CONJURE_CHAT_INTERRUPTED", projectId: n }));
                                        return;
                                    }
                                    let r = K[e.kind];
                                    null != r ? r(e, t) : Object.hasOwn(U, e.kind) && (0, d.OA)(n, e);
                                })(r, s);
                                return;
                            default:
                                (F[r.type] ?? F.log)?.(r, s);
                        }
                    })(e, t, n));
            },
            onPong: () => t.heartbeat.pong(),
            onClose: () => Y(e, t),
            onError: (e) => {
                console.error("[conjure] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[conjure] ws open failed", n), t.disposed)) return;
        (G(e, "failed"),
            $(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            (t.pendingTemplatePrep = null),
            (0, b.Mz)(e, "Connection failed before the publish result arrived"),
            (0, T.Fc)(e),
            (0, b.BC)(e, "Connection failed before the draft arrived"),
            (0, N.Hy)(e, {
                location: "connection",
                code: N.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = H.get(e);
    if (null == n) {
        var s;
        let t = new R.u();
        ((n = {
            ws: t,
            backoff: new r.A(1e3, 3e4),
            heartbeat: new A(
                () => t.sendPing(),
                () => {
                    let t = H.get(e);
                    null != t && (t.ws.close(), Y(e, t));
                },
            ),
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
            H.set(e, n),
            (0, I.Sm)(e, n.ws),
            (s = X),
            !L &&
                ((L = !0),
                (0, M.isDesktop)() && J.A.powerMonitor.on("resume", s),
                D.A.addOnlineCallback(s),
                "u" > typeof document &&
                    document.addEventListener("visibilitychange", () => {
                        "visible" === document.visibilityState && s();
                    })));
    }
    let o = n;
    ((o.warmTemplateId = t ?? o.warmTemplateId),
        (o.pendingEvents = []),
        (o.helloSeen = !1),
        (o.debugOnDemand = !1),
        (o.disposed = !1),
        (o.reconnectPending = !1),
        o.heartbeat.stop(),
        G(e, "connecting"),
        z(e, o));
}
function X() {
    for (let [e, t] of Array.from(H.entries()))
        t.reconnectPending ? (t.backoff.succeed(), Q(e)) : t.heartbeat.expedite();
}
let Z = new Map();
function ee(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function et(e) {
    let t = Z.get(e) ?? 0;
    Z.set(e, t + 1);
    let n = H.get(e);
    return (
        0 === t && null != n && "open" === x.get(e) && ee(e, n),
        () => {
            let t = (Z.get(e) ?? 1) - 1;
            t > 0 ? Z.set(e, t) : Z.delete(e);
        }
    );
}
function en(e) {
    let t = H.get(e);
    return (
        null != t &&
        ((t.disposed = !0),
        t.backoff.cancel(),
        t.heartbeat.stop(),
        (0, b.Mz)(e, "Connection closed before the publish result arrived"),
        (0, T.Fc)(e),
        (0, b.BC)(e, "Connection closed before the draft arrived"),
        t.ws.close(),
        H.delete(e),
        (0, I.ng)(e),
        eh(e),
        w.A.releasePreviewControl(e),
        (0, S.RP)(e),
        G(e, "closed"),
        !0)
    );
}
function er(e) {
    let { templateId: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = H.get(e);
    if (null == n) return void Q(e, t ?? null);
    let r = x.get(e);
    ("closed" !== r && "failed" !== r) || n.reconnectPending || Q(e);
}
function es(e, t, n) {
    let {
            templateId: r,
            remix: s,
            clarificationAnswers: o,
            nonce: l,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = t.trim(),
        c = null != n && n.length > 0 ? n : void 0;
    if ("" === a && null == c) return !1;
    let p = (0, u.aN)(a),
        h = {
            content: a,
            nonce: l ?? (0, i.m)(),
            attachments: c,
            templateId: r,
            remix: s,
            ...(null != o ? { clarificationAnswers: o } : {}),
            ...(null != p ? { linkEmbeds: p } : {}),
        },
        _ = H.get(e);
    if (null != _ && ("connecting" === x.get(e) || _.reconnectPending)) return (_.pendingSends.push(h), !0);
    q(e, h);
    try {
        if (null == _) throw Error("Not connected");
        return (
            _.ws.sendUserMessage(
                h.content,
                h.nonce,
                h.attachments?.map((e) => e.id),
                {
                    templateId: h.templateId,
                    remix: h.remix,
                    clarificationAnswers: h.clarificationAnswers,
                    linkEmbeds: h.linkEmbeds,
                },
            ),
            !0
        );
    } catch (n) {
        console.error("[conjure] send failed", n);
        let t = n instanceof Error ? n.message : "send failed";
        return (null == l && (0, d.Gu)(e, t), !1);
    }
}
function eo(e, t, n) {
    let { held: r, nonce: s = (0, i.m)() } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (
        q(e, { content: t.trim(), nonce: s, attachments: null != n && n.length > 0 ? n : void 0 }, r),
        { nonce: s, messageKey: B(s) }
    );
}
function ei(e, t) {
    (W.delete(t), o.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: e, id: B(t), withdrawn: !0 }));
}
function el(e) {
    let t = H.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (j.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[conjure] interrupt send failed", e);
    }
}
function ea(e, t) {
    let n = H.get(e);
    null == n
        ? console.error("[conjure] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function ec(e, t) {
    let n = H.get(e);
    null == n
        ? console.error("[conjure] prepareTemplate with no connection \u2014 call ensureConnection first")
        : "open" === x.get(e)
          ? ed(n, t)
          : (n.pendingTemplatePrep = t);
}
function ed(e, t) {
    try {
        e.ws.sendPrepareTemplate(t);
    } catch (e) {
        console.error("[conjure] template prepare send failed", e);
    }
}
let eu = new Map();
function ep(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (eu.get(e) === t) return !0;
    let n = H.get(e);
    return null != n && "open" === x.get(e) && (eu.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function eh(e) {
    eu.delete(e);
}
function e_(e) {
    en(e);
}
function ef() {
    for (let e of Array.from(H.keys())) en(e);
    (W.clear(), (0, P.j_)());
}
class eg extends s.Ay.Store {
    initialize() {
        this.waitFor(c.A, h.A, y.Ay, l.default);
    }
    getConnState(e) {
        return x.get(e) ?? "connecting";
    }
}
let eE = new eg(o.h, {
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return ("active" === t && X(), !1);
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (x.get(t) === n) return !1;
        (x.set(t, n), ("closed" === n || "failed" === n) && j.delete(t));
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!en(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(H.keys())) null == y.Ay.getProject(e) && en(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (((0, P.j_)(), 0 === H.size)) return !1;
        ef();
    },
});
