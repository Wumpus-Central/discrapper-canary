(n.d(t, {
    Bn: () => ef,
    Ay: () => eE,
    ensureConnection: () => el,
    fu: () => eu,
    P6: () => e_,
    dv: () => ea,
    Wx: () => ec,
    r2: () => ep,
    Rw: () => es,
    re: () => ed,
}),
    n(321073));
var r = n(158390),
    s = n(855986),
    o = n(73153),
    i = n(195880),
    l = n(287809),
    a = n(308081),
    c = n(513425),
    d = n(940874),
    u = n(120234),
    p = n(805330),
    h = n(990779),
    _ = n(207438),
    f = n(709753),
    g = n(788493),
    E = n(821759),
    S = n(223347),
    m = n(392739),
    y = n(463660),
    T = n(141299),
    O = n(260498),
    b = n(233470),
    N = n(962998),
    C = n(991238),
    k = n(416473),
    A = n(525530),
    w = n(743082),
    R = n(385081),
    v = n(519325);
class U {
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
var P = n(736553),
    I = n(382541);
n(205816);
let J = {
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
    safety_recheck: !0,
    saving: !0,
    segment_settled: !0,
    server_change: !0,
    spend_limit: !0,
    terminal_error: !0,
    thinking: !0,
    thinking_lifecycle: !0,
    todos: !0,
    turn_result: !0,
    usage: !0,
};
var D = n(649121),
    M = n(975189),
    L = n(77729),
    H = n(209489),
    x = n(723702);
let j = !1;
(n(643210),
    n(285411),
    n(209695),
    n(944142),
    n(782068),
    n(557744),
    n(714917),
    n(485104),
    n(722701),
    n(894443),
    n(442331),
    n(427123),
    n(677683));
let G = new Map(),
    W = new Map(),
    B = new Set();
function q(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
function $(e) {
    return `optimistic:${e}`;
}
let Y = new Map();
function F(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    (Y.set(r, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: $(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        }));
}
function V(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (F(e, s), (0, d.Gu)(e, n));
}
let K = {
        ...a.m,
        ...d.NW,
        ..._.eI,
        ...f.x9,
        ...g.U,
        ...E.j,
        ...S.p,
        ...y.VY,
        ...T.lD,
        ...N.qy,
        ...C.Wh,
        ...k.Rd,
        ...A.ow,
        ...w.WO,
        ...p.V5,
    },
    z = {
        ...{
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
        },
        ...d.Un,
        ..._.d5,
        ...y.uk,
        ...{
            project_named(e, t) {
                let { projectId: n } = t,
                    r = O.Ay.getProject(n);
                (null != r &&
                    null != e.name &&
                    o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: { ...r, name: e.name } }),
                    (0, b._b)(n).catch(() => {}));
            },
            app_profile_updated(e, t) {
                let { projectId: n } = t;
                (0, b._b)(n).catch(() => {});
            },
        },
        ...N.rS,
        ...{
            spend_limit(e, t) {
                let { projectId: n } = t;
                o.h.dispatch({
                    type: "CONJURE_SPEND_LIMIT_SET",
                    projectId: n,
                    spendLimit:
                        "ok" === e.state ? null : { state: e.state, spentUsd: e.spent_usd, limitUsd: e.limit_usd },
                });
            },
        },
    },
    Q = new Set([
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
        "preview_add_bot_prompt",
    ]);
function X(e, t, n) {
    ((t.runningTurnId = n), o.h.dispatch({ type: "CONJURE_CHAT_RUNNING_TURN_SET", projectId: e, turnId: n }));
}
function Z(e, t) {
    (t.heartbeat.stop(),
    (0, N.Mz)(e, "Connection closed before the publish result arrived"),
    (0, k.Fc)(e),
    (0, C.yv)(e),
    (0, N.BC)(e, "Connection closed before the draft arrived"),
    (0, N.Nc)(e),
    (0, m.RP)(e),
    t.disposed)
        ? q(e, "closed")
        : t.helloSeen
          ? ((t.reconnectPending = !0), q(e, "connecting"), t.backoff.fail(() => ee(e)))
          : (q(e, "closed"),
            V(e, t, "Connection closed before the message was sent"),
            (t.pendingModelSettings = null),
            (t.pendingTemplatePrep = null));
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = G.get(e);
    if (null == n) {
        var s;
        let t = new P.u();
        ((n = {
            ws: t,
            backoff: new r.A(1e3, 3e4),
            heartbeat: new U(
                () => t.sendPing(),
                () => {
                    let t = G.get(e);
                    null != t && (t.ws.close(), Z(e, t));
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
            endedTurnIds: new Set(),
            accessRefusedUserId: null,
        }),
            G.set(e, n),
            (0, M.Sm)(e, n.ws),
            (s = et),
            !j &&
                ((j = !0),
                (0, x.xl)() && L.A.powerMonitor.on("resume", s),
                H.A.addOnlineCallback(s),
                "u" > typeof document &&
                    document.addEventListener("visibilitychange", () => {
                        "visible" === document.visibilityState && s();
                    })));
    }
    let i = n;
    ((i.warmTemplateId = t ?? i.warmTemplateId),
        (i.pendingEvents = []),
        (i.helloSeen = !1),
        (i.debugOnDemand = !1),
        (i.runningTurnId = void 0),
        i.endedTurnIds.clear(),
        (i.disposed = !1),
        (i.reconnectPending = !1),
        i.heartbeat.stop(),
        q(e, "connecting"),
        (async function (e, t) {
            (t.ws.close(), t.helloSeen && (0, I.$Y)(e));
            let n = l.default.getCurrentUser()?.id ?? null;
            try {
                let { ticket: n, baseUrl: r } = await (0, I.dv)(e);
                if (t.disposed) return;
                t.ws.open({
                    url: r,
                    ticket: n,
                    templateId: t.warmTemplateId ?? void 0,
                    onEvent: (n) => {
                        (t.heartbeat.received(),
                            (function e(t, n, r) {
                                if (
                                    (console.debug("[conjure] ws event", r.type), !Q.has(r.type) && "open" !== W.get(t))
                                )
                                    return void n.pendingEvents.push(r);
                                let s = { projectId: t, ws: n.ws };
                                switch (r.type) {
                                    case "history_page":
                                        if (r.requested !== eh.get(t) || (eh.delete(t), !0 === r.failed)) return;
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
                                            void 0 !== r.active_turn_id && X(t, n, r.active_turn_id),
                                            eh.delete(t));
                                        let i = n.pendingEvents;
                                        for (let r of ((n.pendingEvents = []), q(t, "open"), i)) e(t, n, r);
                                        (en.get(t) ?? 0) > 0 && er(t, n);
                                        let l = n.pendingModelSettings;
                                        if (((n.pendingModelSettings = null), null != l))
                                            try {
                                                n.ws.sendModelSettings(l);
                                            } catch (e) {
                                                console.error("[conjure] staged model settings send failed", e);
                                            }
                                        let a = n.pendingTemplatePrep;
                                        ((n.pendingTemplatePrep = null),
                                            null != a &&
                                                (function (e, t) {
                                                    try {
                                                        e.ws.sendPrepareTemplate(t);
                                                    } catch (e) {
                                                        console.error("[conjure] template prepare send failed", e);
                                                    }
                                                })(n, a));
                                        let c = n.pendingSends;
                                        for (let e of ((n.pendingSends = []), c)) {
                                            F(t, e);
                                            try {
                                                n.ws.sendUserMessage(
                                                    e.content,
                                                    e.nonce,
                                                    e.attachments?.map((e) => e.id),
                                                    {
                                                        templateId: e.templateId,
                                                        remix: e.remix,
                                                        copy: e.copy,
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
                                            (i = null != r.nonce && Y.has(r.nonce)) && null != r.nonce
                                                ? Y.get(r.nonce)
                                                : void 0),
                                            (a = i && (null == l || null == r.user_id || l === r.user_id)) &&
                                                null != r.nonce &&
                                                Y.delete(r.nonce),
                                            o.h.dispatch({
                                                type: "CONJURE_CHAT_MESSAGE_APPEND",
                                                projectId: t,
                                                content: r.content,
                                                id: r.id,
                                                ...(a && null != r.nonce ? { optimisticId: $(r.nonce) } : {}),
                                                userId: r.user_id,
                                                timestamp: r.ts,
                                                attachments: r.attachments,
                                            }));
                                        return;
                                    case "step": {
                                        !(function (e, t) {
                                            let { projectId: n } = t;
                                            if (("error" === e.kind && (0, N.Nc)(n), "turn_result" === e.kind)) {
                                                ((0, R.hV)(n, e),
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
                                                    B.delete(n) &&
                                                        "cancelled" === e.result &&
                                                        o.h.dispatch({
                                                            type: "CONJURE_CHAT_INTERRUPTED",
                                                            projectId: n,
                                                        }));
                                                return;
                                            }
                                            let r = z[e.kind];
                                            null != r ? r(e, t) : Object.hasOwn(J, e.kind) && (0, d.OA)(n, e);
                                        })(r, s);
                                        let e = r.turn_id;
                                        if (void 0 === n.runningTurnId || null == e) return;
                                        "turn_result" === r.kind
                                            ? (n.endedTurnIds.add(e), e === n.runningTurnId && X(t, n, null))
                                            : e === n.runningTurnId || n.endedTurnIds.has(e) || X(t, n, e);
                                        return;
                                    }
                                    default:
                                        (K[r.type] ?? K.log)?.(r, s);
                                }
                            })(e, t, n));
                    },
                    onPong: () => t.heartbeat.pong(),
                    onClose: () => Z(e, t),
                    onError: (e) => {
                        console.error("[conjure] ws error", e);
                    },
                });
            } catch (r) {
                if ((console.error("[conjure] ws open failed", r), t.disposed)) return;
                ((t.accessRefusedUserId = r?.status === 403 ? n : null),
                    q(e, "failed"),
                    V(e, t, r instanceof Error ? r.message : "ws open failed"),
                    (t.pendingModelSettings = null),
                    (t.pendingTemplatePrep = null),
                    (0, N.Mz)(e, "Connection failed before the publish result arrived"),
                    (0, k.Fc)(e),
                    (0, C.yv)(e),
                    (0, C.OB)(e, r),
                    (0, N.BC)(e, "Connection failed before the draft arrived"),
                    (0, N.Nc)(e),
                    (0, R.Hy)(e, {
                        location: "connection",
                        code: R.xf.WS_OPEN_FAILED,
                        message: r instanceof Error ? r.message : "ws open failed",
                    }));
            }
        })(e, i));
}
function et() {
    for (let [e, t] of Array.from(G.entries()))
        t.reconnectPending ? (t.backoff.succeed(), ee(e)) : t.heartbeat.expedite();
}
let en = new Map();
function er(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function es(e) {
    let t = en.get(e) ?? 0;
    en.set(e, t + 1);
    let n = G.get(e);
    return (
        0 === t && null != n && "open" === W.get(e) && er(e, n),
        () => {
            let t = (en.get(e) ?? 1) - 1;
            t > 0 ? en.set(e, t) : en.delete(e);
        }
    );
}
function eo(e) {
    var t;
    let n = G.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        n.heartbeat.stop(),
        (0, N.Mz)(e, "Connection closed before the publish result arrived"),
        (0, k.Fc)(e),
        (0, C.yv)(e),
        (0, N.BC)(e, "Connection closed before the draft arrived"),
        (0, N.Nc)(e),
        n.ws.close(),
        G.delete(e),
        (0, M.ng)(e),
        (t = e),
        eh.delete(t),
        v.A.releasePreviewControl(e),
        (0, m.RP)(e),
        q(e, "closed"),
        !0)
    );
}
function ei(e, t) {
    return e?.accessRefusedUserId != null && e.accessRefusedUserId === t;
}
function el(e) {
    let { templateId: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = G.get(e);
    if (null == n) return void ee(e, t ?? null);
    let r = W.get(e);
    ("closed" !== r && "failed" !== r) || n.reconnectPending || ei(n, l.default.getCurrentUser()?.id) || ee(e);
}
function ea(e, t, n) {
    let {
            templateId: r,
            remix: s,
            copy: o,
            clarificationAnswers: l,
            nonce: a,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        c = t.trim(),
        p = null != n && n.length > 0 ? n : void 0;
    if ("" === c && null == p && !0 !== o) return !1;
    let h = (0, u.aN)(c),
        _ = {
            content: c,
            nonce: a ?? (0, i.m)(),
            attachments: p,
            templateId: r,
            remix: s,
            copy: o,
            ...(null != l ? { clarificationAnswers: l } : {}),
            ...(null != h ? { linkEmbeds: h } : {}),
        },
        f = G.get(e);
    if (null != f && ("connecting" === W.get(e) || f.reconnectPending)) return (f.pendingSends.push(_), !0);
    F(e, _);
    try {
        if (null == f) throw Error("Not connected");
        return (
            f.ws.sendUserMessage(
                _.content,
                _.nonce,
                _.attachments?.map((e) => e.id),
                {
                    templateId: _.templateId,
                    remix: _.remix,
                    copy: _.copy,
                    clarificationAnswers: _.clarificationAnswers,
                    linkEmbeds: _.linkEmbeds,
                },
            ),
            !0
        );
    } catch (n) {
        console.error("[conjure] send failed", n);
        let t = n instanceof Error ? n.message : "send failed";
        return (null == a && (0, d.Gu)(e, t), !1);
    }
}
function ec(e, t, n) {
    let r = (0, i.m)();
    return (
        F(e, { content: t.trim(), nonce: r, attachments: null != n && n.length > 0 ? n : void 0 }),
        { nonce: r, messageKey: $(r) }
    );
}
function ed(e, t) {
    (Y.delete(t), o.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: e, id: $(t), withdrawn: !0 }));
}
function eu(e) {
    let t = G.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (B.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[conjure] interrupt send failed", e);
    }
}
function ep(e, t) {
    let n = G.get(e);
    null == n
        ? console.error("[conjure] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
let eh = new Map();
function e_(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (eh.get(e) === t) return !0;
    let n = G.get(e);
    return null != n && "open" === W.get(e) && (eh.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function ef(e) {
    eo(e);
}
class eg extends s.Ay.Store {
    initialize() {
        this.waitFor(c.A, h.A, O.Ay, l.default);
    }
    getConnState(e) {
        return W.get(e) ?? "connecting";
    }
    isAccessRefused(e, t) {
        return ei(G.get(e), t);
    }
}
let eE = new eg(o.h, {
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return ("active" === t && et(), !1);
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (W.get(t) === n) return !1;
        (W.set(t, n), ("closed" === n || "failed" === n) && B.delete(t));
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!eo(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(G.keys())) null == O.Ay.getProject(e) && eo(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (((0, D.j_)(), 0 === G.size)) return !1;
        for (let e of Array.from(G.keys())) eo(e);
        (Y.clear(), (0, D.j_)());
    },
});
