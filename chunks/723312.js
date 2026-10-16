(n.r(t),
    n.d(t, {
        default: () => ei,
        prepareTemplate: () => V,
        resetHistoryPaging: () => en,
        closeConnection: () => er,
        loadOlderHistory: () => et,
        stageModelSettings: () => X,
        closeAllConnections: () => es,
        ensureConnection: () => F,
        withdrawUserMessage: () => Y,
        interruptTurn: () => Q,
        sendUserMessage: () => z,
        subscribeDebugBacklog: () => q,
        showUserMessage: () => K,
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
    f = n(788493),
    _ = n(223347),
    g = n(392739),
    E = n(463660),
    S = n(260498),
    m = n(371169),
    O = n(962998),
    y = n(525530),
    T = n(743082),
    N = n(385081),
    k = n(1371);
(n(323874), n(14289), n(35956));
class w {
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
var b = n(382541),
    C = n(649121),
    R = n(975189);
(n(643210), n(285411), n(933294), n(944142), n(557744), n(714917), n(722701), n(894443), n(442331));
let U = new Map(),
    A = new Map(),
    v = new Set();
function J(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
function P(e) {
    return `optimistic:${e}`;
}
let I = new Map();
function D(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    (I.set(r, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: P(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        }));
}
function M(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (D(e, s), (0, d.Gu)(e, n));
}
let L = { ...a.m, ...d.NW, ...h.eI, ...f.U, ..._.p, ...E.VY, ...O.qy, ...y.ow, ...T.WO, ...u.V5 },
    G = {
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
                r = S.Ay.getProject(n);
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
                (0, m.Ru)(n, s)
                    .then((e) => {
                        (e.ok || console.error("[conjure] icon from agent rejected", n, e.status),
                            o(e.ok ? "applied" : "failed"));
                    })
                    .catch((e) => {
                        (console.error("[conjure] icon from agent failed", n, e), o("failed"));
                    });
            }
        },
        app_cover_set(e, t) {
            let { projectId: n } = t;
            void 0 !== e.cover_image &&
                (0, m.Vl)(n, e.cover_image)
                    .then((e) => {
                        e.ok || console.error("[conjure] cover from agent rejected", n, e.status);
                    })
                    .catch((e) => {
                        console.error("[conjure] cover from agent failed", n, e);
                    });
        },
        ...O.rS,
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
    ]);
async function x(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await (0, b.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            templateId: t.warmTemplateId ?? void 0,
            onEvent: (n) =>
                (function e(t, n, r) {
                    if ((console.debug("[conjure] ws event", r.type), !j.has(r.type) && "open" !== A.get(t)))
                        return void n.pendingEvents.push(r);
                    let s = { projectId: t, ws: n.ws };
                    switch (r.type) {
                        case "history_page":
                            if (r.requested !== ee.get(t) || (ee.delete(t), !0 === r.failed)) return;
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
                                ee.delete(t));
                            let i = n.pendingEvents;
                            for (let r of ((n.pendingEvents = []), J(t, "open"), i)) e(t, n, r);
                            (W.get(t) ?? 0) > 0 && H(t, n);
                            let l = n.pendingModelSettings;
                            if (((n.pendingModelSettings = null), null != l))
                                try {
                                    n.ws.sendModelSettings(l);
                                } catch (e) {
                                    console.error("[conjure] staged model settings send failed", e);
                                }
                            let a = n.pendingTemplatePrep;
                            ((n.pendingTemplatePrep = null), null != a && Z(n, a));
                            let c = n.pendingSends;
                            for (let e of ((n.pendingSends = []), c)) {
                                D(t, e);
                                try {
                                    n.ws.sendUserMessage(
                                        e.content,
                                        e.nonce,
                                        e.attachments?.map((e) => e.id),
                                        S.Ay.getProject(t)?.name,
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
                            ((l = (i = null != r.nonce && I.has(r.nonce)) && null != r.nonce ? I.get(r.nonce) : void 0),
                                (a = i && (null == l || null == r.user_id || l === r.user_id)) &&
                                    null != r.nonce &&
                                    I.delete(r.nonce),
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_APPEND",
                                    projectId: t,
                                    content: r.content,
                                    id: r.id,
                                    ...(a && null != r.nonce ? { optimisticId: P(r.nonce) } : {}),
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
                                        v.delete(n) &&
                                            "cancelled" === e.result &&
                                            o.h.dispatch({ type: "CONJURE_CHAT_INTERRUPTED", projectId: n }));
                                    return;
                                }
                                let r = G[e.kind];
                                null != r ? r(e, t) : (0, d.OA)(n, e);
                            })(r, s);
                            return;
                        default:
                            (L[r.type] ?? L.log)?.(r, s);
                    }
                })(e, t, n),
            onClose: () => {
                ((0, O.Mz)(e, "Connection closed before the publish result arrived"),
                (0, O.BC)(e, "Connection closed before the draft arrived"),
                (0, g.RP)(e),
                t.disposed)
                    ? J(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), J(e, "connecting"), t.backoff.fail(() => B(e)))
                      : (J(e, "closed"),
                        M(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null),
                        (t.pendingTemplatePrep = null));
            },
            onError: (e) => {
                console.error("[conjure] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[conjure] ws open failed", n), t.disposed)) return;
        (J(e, "failed"),
            M(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            (t.pendingTemplatePrep = null),
            (0, O.Mz)(e, "Connection failed before the publish result arrived"),
            (0, O.BC)(e, "Connection failed before the draft arrived"),
            (0, N.Hy)(e, {
                location: "connection",
                code: N.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = U.get(e);
    null == n &&
        ((n = {
            ws: new w(),
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
        U.set(e, n),
        (0, R.Sm)(e, n.ws));
    let s = n;
    ((s.warmTemplateId = t ?? s.warmTemplateId),
        (s.pendingEvents = []),
        (s.helloSeen = !1),
        (s.debugOnDemand = !1),
        (s.disposed = !1),
        (s.reconnectPending = !1),
        J(e, "connecting"),
        x(e, s));
}
let W = new Map();
function H(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function q(e) {
    let t = W.get(e) ?? 0;
    W.set(e, t + 1);
    let n = U.get(e);
    return (
        0 === t && null != n && "open" === A.get(e) && H(e, n),
        () => {
            let t = (W.get(e) ?? 1) - 1;
            t > 0 ? W.set(e, t) : W.delete(e);
        }
    );
}
function $(e) {
    let t = U.get(e);
    return (
        null != t &&
        ((t.disposed = !0),
        t.backoff.cancel(),
        (0, O.Mz)(e, "Connection closed before the publish result arrived"),
        (0, O.BC)(e, "Connection closed before the draft arrived"),
        t.ws.close(),
        U.delete(e),
        (0, R.ng)(e),
        en(e),
        k.A.releasePreviewControl(e),
        (0, g.RP)(e),
        J(e, "closed"),
        !0)
    );
}
function F(e) {
    let { templateId: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = U.get(e);
    if (null == n) return void B(e, t ?? null);
    let r = A.get(e);
    ("closed" !== r && "failed" !== r) || n.reconnectPending || B(e);
}
function z(e, t, n) {
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
        p = U.get(e);
    if (null != p && ("connecting" === A.get(e) || p.reconnectPending)) return (p.pendingSends.push(u), !0);
    D(e, u);
    try {
        if (null == p) throw Error("Not connected");
        return (
            p.ws.sendUserMessage(
                u.content,
                u.nonce,
                u.attachments?.map((e) => e.id),
                S.Ay.getProject(e)?.name,
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
function K(e, t, n) {
    let r = (0, i.m)();
    return (
        D(e, { content: t.trim(), nonce: r, attachments: null != n && n.length > 0 ? n : void 0 }),
        { nonce: r, messageKey: P(r) }
    );
}
function Y(e, t) {
    (I.delete(t), o.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: e, id: P(t), withdrawn: !0 }));
}
function Q(e) {
    let t = U.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (v.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[conjure] interrupt send failed", e);
    }
}
function X(e, t) {
    let n = U.get(e);
    null == n
        ? console.error("[conjure] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function V(e, t) {
    let n = U.get(e);
    null == n
        ? console.error("[conjure] prepareTemplate with no connection \u2014 call ensureConnection first")
        : "open" === A.get(e)
          ? Z(n, t)
          : (n.pendingTemplatePrep = t);
}
function Z(e, t) {
    try {
        e.ws.sendPrepareTemplate(t);
    } catch (e) {
        console.error("[conjure] template prepare send failed", e);
    }
}
let ee = new Map();
function et(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (ee.get(e) === t) return !0;
    let n = U.get(e);
    return null != n && "open" === A.get(e) && (ee.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function en(e) {
    ee.delete(e);
}
function er(e) {
    $(e);
}
function es() {
    for (let e of Array.from(U.keys())) $(e);
    (I.clear(), (0, C.j_)());
}
class eo extends s.Ay.Store {
    initialize() {
        this.waitFor(c.A, p.A, S.Ay, l.default);
    }
    getConnState(e) {
        return A.get(e) ?? "connecting";
    }
}
let ei = new eo(o.h, {
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (A.get(t) === n) return !1;
        (A.set(t, n), ("closed" === n || "failed" === n) && v.delete(t));
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!$(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(U.keys())) null == S.Ay.getProject(e) && $(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (0 === U.size) return !1;
        es();
    },
});
