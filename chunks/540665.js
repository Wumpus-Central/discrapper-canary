(n.d(t, {
    Bn: () => eh,
    Ay: () => ef,
    ensureConnection: () => ei,
    fu: () => ec,
    P6: () => ep,
    dv: () => eo,
    Wx: () => el,
    r2: () => ed,
    Rw: () => er,
    re: () => ea,
}),
    n(321073));
var r = n(158390),
    s = n(855986),
    i = n(73153),
    o = n(195880),
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
    T = n(260498),
    O = n(233470),
    b = n(962998),
    N = n(768857),
    C = n(416473),
    k = n(525530),
    w = n(743082),
    R = n(385081),
    A = n(519325);
class v {
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
var U = n(736553),
    P = n(382541);
n(205816);
let I = {
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
    spend_limit: !0,
    terminal_error: !0,
    thinking: !0,
    thinking_lifecycle: !0,
    todos: !0,
    turn_result: !0,
    usage: !0,
};
var J = n(649121),
    D = n(975189),
    M = n(77729),
    L = n(209489),
    H = n(723702);
let x = !1;
(n(643210),
    n(285411),
    n(209695),
    n(944142),
    n(782068),
    n(557744),
    n(714917),
    n(722701),
    n(894443),
    n(442331),
    n(427123),
    n(677683));
let j = new Map(),
    G = new Map(),
    W = new Set();
function B(e, t) {
    i.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
function q(e) {
    return `optimistic:${e}`;
}
let $ = new Map();
function Y(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    ($.set(r, l.default.getCurrentUser()?.id),
        i.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: q(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        }));
}
function F(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (Y(e, s), (0, d.Gu)(e, n));
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
        ...b.qy,
        ...N.Wh,
        ...C.Rd,
        ...k.ow,
        ...w.WO,
        ...p.V5,
    },
    V = {
        ...{
            app_build_request(e, t) {
                let { projectId: n } = t;
                null != e.app_build_request &&
                    i.h.dispatch({
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
                    r = T.Ay.getProject(n);
                (null != r &&
                    null != e.name &&
                    i.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: { ...r, name: e.name } }),
                    (0, O._b)(n).catch(() => {}));
            },
            app_profile_updated(e, t) {
                let { projectId: n } = t;
                (0, O._b)(n).catch(() => {});
            },
        },
        ...b.rS,
        ...{
            spend_limit(e, t) {
                let { projectId: n } = t;
                i.h.dispatch({
                    type: "CONJURE_SPEND_LIMIT_SET",
                    projectId: n,
                    spendLimit:
                        "ok" === e.state ? null : { state: e.state, spentUsd: e.spent_usd, limitUsd: e.limit_usd },
                });
            },
        },
    },
    z = new Set([
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
function Q(e, t, n) {
    ((t.runningTurnId = n), i.h.dispatch({ type: "CONJURE_CHAT_RUNNING_TURN_SET", projectId: e, turnId: n }));
}
function X(e, t) {
    (t.heartbeat.stop(),
    (0, b.Mz)(e, "Connection closed before the publish result arrived"),
    (0, C.Fc)(e),
    (0, N.yv)(e),
    (0, b.BC)(e, "Connection closed before the draft arrived"),
    (0, b.Nc)(e),
    (0, m.RP)(e),
    t.disposed)
        ? B(e, "closed")
        : t.helloSeen
          ? ((t.reconnectPending = !0), B(e, "connecting"), t.backoff.fail(() => Z(e)))
          : (B(e, "closed"),
            F(e, t, "Connection closed before the message was sent"),
            (t.pendingModelSettings = null),
            (t.pendingTemplatePrep = null));
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = j.get(e);
    if (null == n) {
        var s;
        let t = new U.u();
        ((n = {
            ws: t,
            backoff: new r.A(1e3, 3e4),
            heartbeat: new v(
                () => t.sendPing(),
                () => {
                    let t = j.get(e);
                    null != t && (t.ws.close(), X(e, t));
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
        }),
            j.set(e, n),
            (0, D.Sm)(e, n.ws),
            (s = ee),
            !x &&
                ((x = !0),
                (0, H.xl)() && M.A.powerMonitor.on("resume", s),
                L.A.addOnlineCallback(s),
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
        (o.runningTurnId = void 0),
        o.endedTurnIds.clear(),
        (o.disposed = !1),
        (o.reconnectPending = !1),
        o.heartbeat.stop(),
        B(e, "connecting"),
        (async function (e, t) {
            (t.ws.close(), t.helloSeen && (0, P.$Y)(e));
            try {
                let { ticket: n, baseUrl: r } = await (0, P.dv)(e);
                if (t.disposed) return;
                t.ws.open({
                    url: r,
                    ticket: n,
                    templateId: t.warmTemplateId ?? void 0,
                    onEvent: (n) => {
                        (t.heartbeat.received(),
                            (function e(t, n, r) {
                                if (
                                    (console.debug("[conjure] ws event", r.type), !z.has(r.type) && "open" !== G.get(t))
                                )
                                    return void n.pendingEvents.push(r);
                                let s = { projectId: t, ws: n.ws };
                                switch (r.type) {
                                    case "history_page":
                                        if (r.requested !== eu.get(t) || (eu.delete(t), !0 === r.failed)) return;
                                        i.h.dispatch({
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
                                        (i.h.dispatch({
                                            type: "CONJURE_CHAT_HISTORY_SET",
                                            projectId: t,
                                            entries: s,
                                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                                            degraded: !0 === r.degraded,
                                        }),
                                            void 0 !== r.active_turn_id && Q(t, n, r.active_turn_id),
                                            eu.delete(t));
                                        let o = n.pendingEvents;
                                        for (let r of ((n.pendingEvents = []), B(t, "open"), o)) e(t, n, r);
                                        (et.get(t) ?? 0) > 0 && en(t, n);
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
                                            Y(t, e);
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
                                        let o, l, a;
                                        ((l =
                                            (o = null != r.nonce && $.has(r.nonce)) && null != r.nonce
                                                ? $.get(r.nonce)
                                                : void 0),
                                            (a = o && (null == l || null == r.user_id || l === r.user_id)) &&
                                                null != r.nonce &&
                                                $.delete(r.nonce),
                                            i.h.dispatch({
                                                type: "CONJURE_CHAT_MESSAGE_APPEND",
                                                projectId: t,
                                                content: r.content,
                                                id: r.id,
                                                ...(a && null != r.nonce ? { optimisticId: q(r.nonce) } : {}),
                                                userId: r.user_id,
                                                timestamp: r.ts,
                                                attachments: r.attachments,
                                            }));
                                        return;
                                    case "step": {
                                        !(function (e, t) {
                                            let { projectId: n } = t;
                                            if (("error" === e.kind && (0, b.Nc)(n), "turn_result" === e.kind)) {
                                                ((0, R.hV)(n, e),
                                                    "deployed" === e.result &&
                                                        i.h.dispatch({
                                                            type: "CONJURE_CHAT_TURN_PATCH",
                                                            projectId: n,
                                                            turnId: e.turn_id,
                                                            patch: { kind: "plan_implemented" },
                                                        }),
                                                    i.h.dispatch({
                                                        type: "CONJURE_CHAT_TURN_FINISHED",
                                                        projectId: n,
                                                        turnId: e.turn_id,
                                                        summary: e.summary,
                                                    }),
                                                    W.delete(n) &&
                                                        "cancelled" === e.result &&
                                                        i.h.dispatch({
                                                            type: "CONJURE_CHAT_INTERRUPTED",
                                                            projectId: n,
                                                        }));
                                                return;
                                            }
                                            let r = V[e.kind];
                                            null != r ? r(e, t) : Object.hasOwn(I, e.kind) && (0, d.OA)(n, e);
                                        })(r, s);
                                        let e = r.turn_id;
                                        if (void 0 === n.runningTurnId || null == e) return;
                                        "turn_result" === r.kind
                                            ? (n.endedTurnIds.add(e), e === n.runningTurnId && Q(t, n, null))
                                            : e === n.runningTurnId || n.endedTurnIds.has(e) || Q(t, n, e);
                                        return;
                                    }
                                    default:
                                        (K[r.type] ?? K.log)?.(r, s);
                                }
                            })(e, t, n));
                    },
                    onPong: () => t.heartbeat.pong(),
                    onClose: () => X(e, t),
                    onError: (e) => {
                        console.error("[conjure] ws error", e);
                    },
                });
            } catch (n) {
                if ((console.error("[conjure] ws open failed", n), t.disposed)) return;
                (B(e, "failed"),
                    F(e, t, n instanceof Error ? n.message : "ws open failed"),
                    (t.pendingModelSettings = null),
                    (t.pendingTemplatePrep = null),
                    (0, b.Mz)(e, "Connection failed before the publish result arrived"),
                    (0, C.Fc)(e),
                    (0, N.yv)(e),
                    (0, N.OB)(e, n),
                    (0, b.BC)(e, "Connection failed before the draft arrived"),
                    (0, b.Nc)(e),
                    (0, R.Hy)(e, {
                        location: "connection",
                        code: R.xf.WS_OPEN_FAILED,
                        message: n instanceof Error ? n.message : "ws open failed",
                    }));
            }
        })(e, o));
}
function ee() {
    for (let [e, t] of Array.from(j.entries()))
        t.reconnectPending ? (t.backoff.succeed(), Z(e)) : t.heartbeat.expedite();
}
let et = new Map();
function en(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function er(e) {
    let t = et.get(e) ?? 0;
    et.set(e, t + 1);
    let n = j.get(e);
    return (
        0 === t && null != n && "open" === G.get(e) && en(e, n),
        () => {
            let t = (et.get(e) ?? 1) - 1;
            t > 0 ? et.set(e, t) : et.delete(e);
        }
    );
}
function es(e) {
    var t;
    let n = j.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        n.heartbeat.stop(),
        (0, b.Mz)(e, "Connection closed before the publish result arrived"),
        (0, C.Fc)(e),
        (0, N.yv)(e),
        (0, b.BC)(e, "Connection closed before the draft arrived"),
        (0, b.Nc)(e),
        n.ws.close(),
        j.delete(e),
        (0, D.ng)(e),
        (t = e),
        eu.delete(t),
        A.A.releasePreviewControl(e),
        (0, m.RP)(e),
        B(e, "closed"),
        !0)
    );
}
function ei(e) {
    let { templateId: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = j.get(e);
    if (null == n) return void Z(e, t ?? null);
    let r = G.get(e);
    ("closed" !== r && "failed" !== r) || n.reconnectPending || Z(e);
}
function eo(e, t, n) {
    let {
            templateId: r,
            remix: s,
            copy: i,
            clarificationAnswers: l,
            nonce: a,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        c = t.trim(),
        p = null != n && n.length > 0 ? n : void 0;
    if ("" === c && null == p && !0 !== i) return !1;
    let h = (0, u.aN)(c),
        _ = {
            content: c,
            nonce: a ?? (0, o.m)(),
            attachments: p,
            templateId: r,
            remix: s,
            copy: i,
            ...(null != l ? { clarificationAnswers: l } : {}),
            ...(null != h ? { linkEmbeds: h } : {}),
        },
        f = j.get(e);
    if (null != f && ("connecting" === G.get(e) || f.reconnectPending)) return (f.pendingSends.push(_), !0);
    Y(e, _);
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
function el(e, t, n) {
    let r = (0, o.m)();
    return (
        Y(e, { content: t.trim(), nonce: r, attachments: null != n && n.length > 0 ? n : void 0 }),
        { nonce: r, messageKey: q(r) }
    );
}
function ea(e, t) {
    ($.delete(t), i.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: e, id: q(t), withdrawn: !0 }));
}
function ec(e) {
    let t = j.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (W.add(e), i.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[conjure] interrupt send failed", e);
    }
}
function ed(e, t) {
    let n = j.get(e);
    null == n
        ? console.error("[conjure] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
let eu = new Map();
function ep(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (eu.get(e) === t) return !0;
    let n = j.get(e);
    return null != n && "open" === G.get(e) && (eu.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function eh(e) {
    es(e);
}
class e_ extends s.Ay.Store {
    initialize() {
        this.waitFor(c.A, h.A, T.Ay, l.default);
    }
    getConnState(e) {
        return G.get(e) ?? "connecting";
    }
}
let ef = new e_(i.h, {
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e;
        return ("active" === t && ee(), !1);
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (G.get(t) === n) return !1;
        (G.set(t, n), ("closed" === n || "failed" === n) && W.delete(t));
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!es(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(j.keys())) null == T.Ay.getProject(e) && es(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (((0, J.j_)(), 0 === j.size)) return !1;
        for (let e of Array.from(j.keys())) es(e);
        ($.clear(), (0, J.j_)());
    },
});
