(n.d(t, { r2: () => X, Hc: () => Q, fu: () => Y, Bn: () => ee, Ay: () => en, Rw: () => z, P6: () => Z, dv: () => K }),
    n(321073));
var s = n(158390),
    r = n(17928),
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
    O = n(371169),
    m = n(962998),
    T = n(525530),
    y = n(743082),
    C = n(385081),
    N = n(28480);
class b {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: s, onClose: r, onError: o } = e;
        this.close();
        let i = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            l = new WebSocket(`${i}/agent/ws?ticket=${encodeURIComponent(n)}&debug=on_demand`);
        ((this.socket = l),
            l.addEventListener("message", (e) => {
                let t;
                if (this.socket === l) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[vibegrations] ws frame parse failed", e);
                        return;
                    }
                    s(t);
                }
            }),
            l.addEventListener("error", (e) => {
                this.socket === l && o?.(e);
            }),
            l.addEventListener("close", () => {
                this.socket === l && r?.();
            }));
    }
    sendUserMessage(e, t, n, s) {
        let {
            templateId: r,
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
                project_name: s,
                template_id: r,
                remix: o,
                clarification_answers: i,
            }),
        );
    }
    sendUpstreamTicketAck(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "upstream_ticket_ack", id: e, ticket: t, error: n }));
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
    sendDraftPatchNotes(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({ type: "draft_patch_notes", nonce: e, ...(null != t ? { project_name: t } : {}) }),
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
    sendCaptureAck(e, t, n, s) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "capture_ack", id: e, status: t, code: n, message: s }));
            } catch {}
    }
    sendControlAck(e, t, n, s) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "control_ack", id: e, status: t, response: n, message: s }));
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
    w = n(649121),
    k = n(975189);
(n(643210), n(285411), n(933294), n(944142), n(557744), n(714917), n(722701), n(442331));
let U = new Map(),
    A = new Map(),
    v = new Map(),
    J = new Set();
function P(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
function D(e) {
    return `optimistic:${e}`;
}
let I = new Map();
function M(e, t) {
    let { content: n, nonce: s, attachments: r } = t;
    (I.set(s, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: D(s),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: r,
        }));
}
function L(e, t, n) {
    let s = t.pendingSends;
    for (let r of ((t.pendingSends = []), s)) (M(e, r), (0, d.Gu)(e, n));
}
function G(e, t) {
    if (!0 === v.get(e)) return;
    let n = t.pendingSends;
    for (let s of ((t.pendingSends = []), n)) {
        M(e, s);
        try {
            t.ws.sendUserMessage(
                s.content,
                s.nonce,
                s.attachments?.map((e) => e.id),
                S.Ay.getProject(e)?.name,
                { templateId: s.templateId, remix: s.remix, clarificationAnswers: s.clarificationAnswers },
            );
        } catch (n) {
            console.error("[vibegrations] queued send failed", n);
            let t = n instanceof Error ? n.message : "send failed";
            (0, d.Gu)(e, t);
        }
    }
}
let B = { ...a.m, ...d.NW, ...h.eI, ...f.U, ..._.p, ...E.VY, ...m.qy, ...T.ow, ...y.WO, ...u.V5 },
    x = {
        ...d.Un,
        ...h.d5,
        ...E.uk,
        project_named(e, t) {
            let { projectId: n } = t,
                s = S.Ay.getProject(n);
            null != s &&
                null != e.name &&
                o.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: { ...s, name: e.name } });
        },
        app_icon_set(e, t) {
            let { projectId: n, ws: s } = t,
                r = e.icon;
            if (null != r && "" !== r) {
                let t = e.attachment_id;
                function o(e) {
                    null != t && "" !== t && s.sendAppIconAck(t, e);
                }
                (0, O.Ru)(n, r)
                    .then((e) => {
                        (e.ok || console.error("[vibegrations] icon from agent rejected", n, e.status),
                            o(e.ok ? "applied" : "failed"));
                    })
                    .catch((e) => {
                        (console.error("[vibegrations] icon from agent failed", n, e), o("failed"));
                    });
            }
        },
        ...m.rS,
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
    ]);
async function H(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: s } = await (0, R.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: s,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, s) {
                    if ((console.debug("[vibegrations] ws event", s.type), !W.has(s.type) && "open" !== A.get(t)))
                        return void n.pendingEvents.push(s);
                    let r = { projectId: t, ws: n.ws };
                    switch (s.type) {
                        case "history_page":
                            if (s.requested !== V.get(t) || (V.delete(t), !0 === s.failed)) return;
                            o.h.dispatch({
                                type: "CONJURE_CHAT_HISTORY_PREPEND",
                                projectId: t,
                                entries: (s.messages ?? []).slice(),
                                cursor: !0 === s.has_more ? (s.cursor ?? null) : null,
                            });
                            return;
                        case "hello":
                            ((n.helloSeen = !0), (n.debugOnDemand = !0 === s.debug_on_demand), n.backoff.succeed());
                            return;
                        case "history": {
                            let r = (s.messages ?? []).slice();
                            (o.h.dispatch({
                                type: "CONJURE_CHAT_HISTORY_SET",
                                projectId: t,
                                entries: r,
                                cursor: !0 === s.has_more ? (s.cursor ?? null) : null,
                                degraded: !0 === s.degraded,
                            }),
                                V.delete(t));
                            let i = n.pendingEvents;
                            for (let s of ((n.pendingEvents = []), P(t, "open"), i)) e(t, n, s);
                            (q.get(t) ?? 0) > 0 && $(t, n);
                            let l = n.pendingModelSettings;
                            if (((n.pendingModelSettings = null), null != l))
                                try {
                                    n.ws.sendModelSettings(l);
                                } catch (e) {
                                    console.error("[vibegrations] staged model settings send failed", e);
                                }
                            G(t, n);
                            return;
                        }
                        case "chat_state":
                            (o.h.dispatch({ type: "CONJURE_CHAT_STOPPED_SET", projectId: t, stopped: s.stopped }),
                                s.stopped || "open" !== A.get(t) || G(t, n));
                            return;
                        case "user_message":
                            let i, l, a;
                            ((l = (i = null != s.nonce && I.has(s.nonce)) && null != s.nonce ? I.get(s.nonce) : void 0),
                                (a = i && (null == l || null == s.user_id || l === s.user_id)) &&
                                    null != s.nonce &&
                                    I.delete(s.nonce),
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_APPEND",
                                    projectId: t,
                                    content: s.content,
                                    id: s.id,
                                    ...(a && null != s.nonce ? { optimisticId: D(s.nonce) } : {}),
                                    userId: s.user_id,
                                    timestamp: s.ts,
                                    attachments: s.attachments,
                                }));
                            return;
                        case "step":
                            !(function (e, t) {
                                let { projectId: n } = t;
                                if ("turn_result" === e.kind) {
                                    ((0, C.hV)(n, e),
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
                                let s = x[e.kind];
                                null != s ? s(e, t) : (0, d.OA)(n, e);
                            })(s, r);
                            return;
                        default:
                            (B[s.type] ?? B.log)?.(s, r);
                    }
                })(e, t, n),
            onClose: () => {
                ((0, m.Mz)(e, "Connection closed before the publish result arrived"),
                (0, m.BC)(e, "Connection closed before the draft arrived"),
                (0, g.RP)(e),
                t.disposed)
                    ? P(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), P(e, "connecting"), t.backoff.fail(() => j(e)))
                      : (P(e, "closed"),
                        L(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        (P(e, "failed"),
            L(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            (0, m.Mz)(e, "Connection failed before the publish result arrived"),
            (0, m.BC)(e, "Connection failed before the draft arrived"),
            (0, C.Hy)(e, {
                location: "connection",
                code: C.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function j(e) {
    let t = U.get(e);
    null == t &&
        ((t = {
            ws: new b(),
            backoff: new s.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            debugOnDemand: !1,
        }),
        U.set(e, t),
        (0, k.Sm)(e, t.ws));
    let n = t;
    ((n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.debugOnDemand = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        P(e, "connecting"),
        H(e, n));
}
let q = new Map();
function $(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function z(e) {
    let t = q.get(e) ?? 0;
    q.set(e, t + 1);
    let n = U.get(e);
    return (
        0 === t && null != n && "open" === A.get(e) && $(e, n),
        () => {
            let t = (q.get(e) ?? 1) - 1;
            t > 0 ? q.set(e, t) : q.delete(e);
        }
    );
}
function F(e) {
    var t;
    let n = U.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        (0, m.Mz)(e, "Connection closed before the publish result arrived"),
        (0, m.BC)(e, "Connection closed before the draft arrived"),
        n.ws.close(),
        U.delete(e),
        (0, k.ng)(e),
        (t = e),
        V.delete(t),
        N.A.releasePreviewControl(e),
        (0, g.RP)(e),
        P(e, "closed"),
        !0)
    );
}
function Q(e) {
    let t = U.get(e);
    if (null == t) return void j(e);
    let n = A.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || j(e);
}
function K(e, t, n) {
    let {
            templateId: s,
            remix: r,
            clarificationAnswers: o,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let c = {
            content: l,
            nonce: (0, i.m)(),
            attachments: a,
            templateId: s,
            remix: r,
            ...(null != o ? { clarificationAnswers: o } : {}),
        },
        u = U.get(e);
    if (null != u && ("connecting" === A.get(e) || u.reconnectPending)) return void u.pendingSends.push(c);
    M(e, c);
    try {
        if (null == u) throw Error("Not connected");
        u.ws.sendUserMessage(
            c.content,
            c.nonce,
            c.attachments?.map((e) => e.id),
            S.Ay.getProject(e)?.name,
            { templateId: c.templateId, remix: c.remix, clarificationAnswers: c.clarificationAnswers },
        );
    } catch (n) {
        console.error("[vibegrations] send failed", n);
        let t = n instanceof Error ? n.message : "send failed";
        (0, d.Gu)(e, t);
    }
}
function Y(e) {
    let t = U.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (J.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function X(e, t) {
    let n = U.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
let V = new Map();
function Z(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (V.get(e) === t) return !0;
    let n = U.get(e);
    return null != n && "open" === A.get(e) && (V.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function ee(e) {
    F(e);
}
class et extends r.Ay.Store {
    initialize() {
        this.waitFor(c.A, p.A, S.Ay, l.default);
    }
    getConnState(e) {
        return A.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return v.get(e) ?? !1;
    }
}
let en = new et(o.h, {
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (A.get(t) === n) return !1;
        (A.set(t, n), ("closed" === n || "failed" === n) && J.delete(t));
    },
    CONJURE_CHAT_STOPPED_SET: function (e) {
        let { projectId: t, stopped: n } = e;
        if ((v.get(t) ?? !1) === n) return !1;
        v.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!F(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(U.keys())) null == S.Ay.getProject(e) && F(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (0 === U.size) return !1;
        for (let e of Array.from(U.keys())) F(e);
        (v.clear(), I.clear(), (0, w.j_)());
    },
});
