(n.r(t),
    n.d(t, {
        default: () => ea,
        prepareTemplate: () => ee,
        resetHistoryPaging: () => es,
        closeConnection: () => eo,
        loadOlderHistory: () => er,
        stageModelSettings: () => Z,
        closeAllConnections: () => ei,
        ensureConnection: () => K,
        withdrawUserMessage: () => V,
        interruptTurn: () => X,
        sendUserMessage: () => Y,
        subscribeDebugBacklog: () => $,
        showUserMessage: () => Q,
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
    f = n(709753),
    _ = n(788493),
    g = n(223347),
    S = n(392739),
    E = n(463660),
    m = n(260498),
    O = n(371169),
    y = n(962998),
    T = n(416473),
    N = n(525530),
    b = n(743082),
    k = n(385081),
    w = n(1371);
(n(323874), n(14289), n(35956));
class C {
    socket = null;
    open(e) {
        let { url: t, ticket: n, templateId: r, onEvent: s, onClose: o, onError: i } = e;
        this.close();
        let l = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            a = new URLSearchParams({ ticket: n, debug: "on_demand", ...(null != r ? { template: r } : {}) }),
            c = new WebSocket(`${l}/agent/ws?${a}`);
        ((this.socket = c),
            c.addEventListener("message", (e) => {
                let t;
                if (this.socket === c) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[conjure] ws frame parse failed", e);
                        return;
                    }
                    s(t);
                }
            }),
            c.addEventListener("error", (e) => {
                this.socket === c && i?.(e);
            }),
            c.addEventListener("close", () => {
                this.socket === c && o?.();
            }));
    }
    sendPublishScheduleMessage(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify(e));
    }
    sendUserMessage(e, t, n, r) {
        let {
            templateId: s,
            remix: o,
            clarificationAnswers: i,
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({
                type: "user_message",
                content: e,
                nonce: t,
                attachment_ids: n,
                project_name: r,
                template_id: s,
                remix: o,
                clarification_answers: i,
            }),
        );
    }
    sendUpstreamTicketAck(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "upstream_ticket_ack", id: e, ticket: t, error: n }));
    }
    sendRetryRemix() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "retry_remix" }));
    }
    sendInterrupt() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "interrupt" }));
    }
    sendQueuedMessageAction(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: `${e}_queued_message`, id: t }));
    }
    sendPublish() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "publish" }));
    }
    sendPreparePublish() {
        null != this.socket &&
            this.socket.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify({ type: "prepare_publish" }));
    }
    sendDraftPatchNotes(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({ type: "draft_patch_notes", nonce: e, ...(null != t ? { project_name: t } : {}) }),
        );
    }
    sendPatchNotesSent(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({
                type: "patch_notes_sent",
                published_revision: e.publishedRevision,
                guild_id: e.guildId,
                channel_id: e.channelId,
                message_id: e.messageId,
                ...(null != t ? { source_sha: t } : {}),
            }),
        );
    }
    sendLiveReload(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_live_reload", enabled: e }));
    }
    sendOverlayBackgroundBlur(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_overlay_background_blur", enabled: e }));
    }
    sendPrepareTemplate(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "prepare_template", template_id: e }));
    }
    sendModelSettings(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_model_settings", settings: e }));
    }
    sendLoadHistory(e) {
        null != this.socket &&
            this.socket.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify({ type: "load_history", cursor: e }));
    }
    sendDebugSubscribe() {
        null != this.socket &&
            this.socket.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify({ type: "debug_subscribe" }));
    }
    sendRefreshBrowserSessions() {
        null != this.socket &&
            this.socket.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify({ type: "refresh_browser_sessions" }));
    }
    sendDebugStatusRequest() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "debug_status_request" }));
    }
    sendForceCompaction() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "force_compaction", ...(e ? { settle_pending: !0 } : {}) }));
    }
    sendUndoContextSwitch(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "undo_context_switch", id: e }));
    }
    sendSmartContext(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_smart_context", enabled: e }));
    }
    sendHostAccess(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify(e));
    }
    sendRestartSandbox() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "restart_sandbox" }));
    }
    sendDebugGitInfoRequest() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "debug_git_info_request", ...(e ? { lite: !0 } : {}) }));
    }
    sendRestartAgent(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "restart_agent", clear_alarm: e }));
    }
    sendCaptureAck(e, t, n, r) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "capture_ack", id: e, status: t, code: n, message: r }));
            } catch {}
    }
    sendControlAck(e, t, n, r) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "control_ack", id: e, status: t, response: n, message: r }));
            } catch {}
    }
    sendAppIconAck(e, t) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "app_icon_ack", id: e, status: t }));
            } catch {}
    }
    close() {
        (this.socket?.close(), (this.socket = null));
    }
}
var R = n(382541),
    A = n(649121),
    U = n(975189);
(n(643210), n(285411), n(933294), n(944142), n(557744), n(714917), n(722701), n(894443), n(442331));
let v = new Map(),
    P = new Map(),
    J = new Set();
function I(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
function M(e) {
    return `optimistic:${e}`;
}
let D = new Map();
function L(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    (D.set(r, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: M(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        }));
}
function G(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (L(e, s), (0, d.Gu)(e, n));
}
let x = { ...a.m, ...d.NW, ...h.eI, ...f.x9, ..._.U, ...g.p, ...E.VY, ...y.qy, ...T.Rd, ...N.ow, ...b.WO, ...u.V5 },
    j = {
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
            null != r &&
                null != e.name &&
                o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: { ...r, name: e.name } });
        },
        app_icon_set(e, t) {
            let { projectId: n, ws: r } = t,
                s = e.icon;
            if (null != s && "" !== s) {
                let t = e.attachment_id;
                function o(e) {
                    null != t && "" !== t && r.sendAppIconAck(t, e);
                }
                (0, O.Ru)(n, s)
                    .then(() => o("applied"))
                    .catch((e) => {
                        (console.error("[conjure] icon from agent failed", n, e), o("failed"));
                    });
            }
        },
        app_cover_set(e, t) {
            let { projectId: n } = t;
            void 0 !== e.cover_image &&
                (0, O.Vl)(n, e.cover_image).catch((e) => {
                    console.error("[conjure] cover from agent failed", n, e);
                });
        },
        ...y.rS,
    },
    W = new Set([
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
async function B(e, t) {
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
                    if ((console.debug("[conjure] ws event", r.type), !W.has(r.type) && "open" !== P.get(t)))
                        return void n.pendingEvents.push(r);
                    let s = { projectId: t, ws: n.ws };
                    switch (r.type) {
                        case "history_page":
                            if (r.requested !== en.get(t) || (en.delete(t), !0 === r.failed)) return;
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
                                en.delete(t));
                            let i = n.pendingEvents;
                            for (let r of ((n.pendingEvents = []), I(t, "open"), i)) e(t, n, r);
                            (q.get(t) ?? 0) > 0 && F(t, n);
                            let l = n.pendingModelSettings;
                            if (((n.pendingModelSettings = null), null != l))
                                try {
                                    n.ws.sendModelSettings(l);
                                } catch (e) {
                                    console.error("[conjure] staged model settings send failed", e);
                                }
                            let a = n.pendingTemplatePrep;
                            ((n.pendingTemplatePrep = null), null != a && et(n, a));
                            let c = n.pendingSends;
                            for (let e of ((n.pendingSends = []), c)) {
                                L(t, e);
                                try {
                                    n.ws.sendUserMessage(
                                        e.content,
                                        e.nonce,
                                        e.attachments?.map((e) => e.id),
                                        m.Ay.getProject(t)?.name,
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
                            ((l = (i = null != r.nonce && D.has(r.nonce)) && null != r.nonce ? D.get(r.nonce) : void 0),
                                (a = i && (null == l || null == r.user_id || l === r.user_id)) &&
                                    null != r.nonce &&
                                    D.delete(r.nonce),
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_APPEND",
                                    projectId: t,
                                    content: r.content,
                                    id: r.id,
                                    ...(a && null != r.nonce ? { optimisticId: M(r.nonce) } : {}),
                                    userId: r.user_id,
                                    timestamp: r.ts,
                                    attachments: r.attachments,
                                }));
                            return;
                        case "step":
                            !(function (e, t) {
                                let { projectId: n } = t;
                                if ("turn_result" === e.kind) {
                                    ((0, k.hV)(n, e),
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
                                        J.delete(n) &&
                                            "cancelled" === e.result &&
                                            o.h.dispatch({ type: "CONJURE_CHAT_INTERRUPTED", projectId: n }));
                                    return;
                                }
                                let r = j[e.kind];
                                null != r ? r(e, t) : (0, d.OA)(n, e);
                            })(r, s);
                            return;
                        default:
                            (x[r.type] ?? x.log)?.(r, s);
                    }
                })(e, t, n),
            onClose: () => {
                ((0, y.Mz)(e, "Connection closed before the publish result arrived"),
                (0, T.Fc)(e),
                (0, y.BC)(e, "Connection closed before the draft arrived"),
                (0, S.RP)(e),
                t.disposed)
                    ? I(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), I(e, "connecting"), t.backoff.fail(() => H(e)))
                      : (I(e, "closed"),
                        G(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null),
                        (t.pendingTemplatePrep = null));
            },
            onError: (e) => {
                console.error("[conjure] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[conjure] ws open failed", n), t.disposed)) return;
        (I(e, "failed"),
            G(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            (t.pendingTemplatePrep = null),
            (0, y.Mz)(e, "Connection failed before the publish result arrived"),
            (0, T.Fc)(e),
            (0, y.BC)(e, "Connection failed before the draft arrived"),
            (0, k.Hy)(e, {
                location: "connection",
                code: k.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = v.get(e);
    null == n &&
        ((n = {
            ws: new C(),
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
        v.set(e, n),
        (0, U.Sm)(e, n.ws));
    let s = n;
    ((s.warmTemplateId = t ?? s.warmTemplateId),
        (s.pendingEvents = []),
        (s.helloSeen = !1),
        (s.debugOnDemand = !1),
        (s.disposed = !1),
        (s.reconnectPending = !1),
        I(e, "connecting"),
        B(e, s));
}
let q = new Map();
function F(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function $(e) {
    let t = q.get(e) ?? 0;
    q.set(e, t + 1);
    let n = v.get(e);
    return (
        0 === t && null != n && "open" === P.get(e) && F(e, n),
        () => {
            let t = (q.get(e) ?? 1) - 1;
            t > 0 ? q.set(e, t) : q.delete(e);
        }
    );
}
function z(e) {
    let t = v.get(e);
    return (
        null != t &&
        ((t.disposed = !0),
        t.backoff.cancel(),
        (0, y.Mz)(e, "Connection closed before the publish result arrived"),
        (0, T.Fc)(e),
        (0, y.BC)(e, "Connection closed before the draft arrived"),
        t.ws.close(),
        v.delete(e),
        (0, U.ng)(e),
        es(e),
        w.A.releasePreviewControl(e),
        (0, S.RP)(e),
        I(e, "closed"),
        !0)
    );
}
function K(e) {
    let { templateId: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = v.get(e);
    if (null == n) return void H(e, t ?? null);
    let r = P.get(e);
    ("closed" !== r && "failed" !== r) || n.reconnectPending || H(e);
}
function Y(e, t, n) {
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
        p = v.get(e);
    if (null != p && ("connecting" === P.get(e) || p.reconnectPending)) return (p.pendingSends.push(u), !0);
    L(e, u);
    try {
        if (null == p) throw Error("Not connected");
        return (
            p.ws.sendUserMessage(
                u.content,
                u.nonce,
                u.attachments?.map((e) => e.id),
                m.Ay.getProject(e)?.name,
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
function Q(e, t, n) {
    let r = (0, i.m)();
    return (
        L(e, { content: t.trim(), nonce: r, attachments: null != n && n.length > 0 ? n : void 0 }),
        { nonce: r, messageKey: M(r) }
    );
}
function V(e, t) {
    (D.delete(t), o.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: e, id: M(t), withdrawn: !0 }));
}
function X(e) {
    let t = v.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (J.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[conjure] interrupt send failed", e);
    }
}
function Z(e, t) {
    let n = v.get(e);
    null == n
        ? console.error("[conjure] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function ee(e, t) {
    let n = v.get(e);
    null == n
        ? console.error("[conjure] prepareTemplate with no connection \u2014 call ensureConnection first")
        : "open" === P.get(e)
          ? et(n, t)
          : (n.pendingTemplatePrep = t);
}
function et(e, t) {
    try {
        e.ws.sendPrepareTemplate(t);
    } catch (e) {
        console.error("[conjure] template prepare send failed", e);
    }
}
let en = new Map();
function er(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (en.get(e) === t) return !0;
    let n = v.get(e);
    return null != n && "open" === P.get(e) && (en.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function es(e) {
    en.delete(e);
}
function eo(e) {
    z(e);
}
function ei() {
    for (let e of Array.from(v.keys())) z(e);
    (D.clear(), (0, A.j_)());
}
class el extends s.Ay.Store {
    initialize() {
        this.waitFor(c.A, p.A, m.Ay, l.default);
    }
    getConnState(e) {
        return P.get(e) ?? "connecting";
    }
}
let ea = new el(o.h, {
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (P.get(t) === n) return !1;
        (P.set(t, n), ("closed" === n || "failed" === n) && J.delete(t));
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!z(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(v.keys())) null == m.Ay.getProject(e) && z(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (((0, A.j_)(), 0 === v.size)) return !1;
        ei();
    },
});
