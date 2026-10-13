(n.d(t, { r2: () => Q, Hc: () => z, fu: () => K, Bn: () => V, Ay: () => ee, Rw: () => q, P6: () => X, dv: () => F }),
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
    O = n(371169),
    m = n(962998),
    y = n(525530),
    T = n(743082),
    b = n(385081),
    N = n(649162);
class C {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: r, onClose: s, onError: o } = e;
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
                    r(t);
                }
            }),
            l.addEventListener("error", (e) => {
                this.socket === l && o?.(e);
            }),
            l.addEventListener("close", () => {
                this.socket === l && s?.();
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
    w = n(649121),
    k = n(975189);
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
let D = new Map();
function I(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    (D.set(r, l.default.getCurrentUser()?.id),
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
    for (let s of ((t.pendingSends = []), r)) (I(e, s), (0, d.Gu)(e, n));
}
let L = { ...a.m, ...d.NW, ...h.eI, ...f.U, ..._.p, ...E.VY, ...m.qy, ...y.ow, ...T.WO, ...u.V5 },
    G = {
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
                (0, O.Ru)(n, s)
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
    x = new Set([
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
async function B(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await (0, R.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    if ((console.debug("[vibegrations] ws event", r.type), !x.has(r.type) && "open" !== A.get(t)))
                        return void n.pendingEvents.push(r);
                    let s = { projectId: t, ws: n.ws };
                    switch (r.type) {
                        case "history_page":
                            if (r.requested !== Y.get(t) || (Y.delete(t), !0 === r.failed)) return;
                            o.h.dispatch({
                                type: "CONJURE_CHAT_HISTORY_PREPEND",
                                projectId: t,
                                entries: (r.messages ?? []).slice(),
                                cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                            });
                            return;
                        case "hello":
                            ((n.helloSeen = !0), (n.debugOnDemand = !0 === r.debug_on_demand), n.backoff.succeed());
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
                                Y.delete(t));
                            let i = n.pendingEvents;
                            for (let r of ((n.pendingEvents = []), J(t, "open"), i)) e(t, n, r);
                            (H.get(t) ?? 0) > 0 && j(t, n);
                            let l = n.pendingModelSettings;
                            if (((n.pendingModelSettings = null), null != l))
                                try {
                                    n.ws.sendModelSettings(l);
                                } catch (e) {
                                    console.error("[vibegrations] staged model settings send failed", e);
                                }
                            let a = n.pendingSends;
                            for (let e of ((n.pendingSends = []), a)) {
                                I(t, e);
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
                                    console.error("[vibegrations] queued send failed", n);
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
                                    ((0, b.hV)(n, e),
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
                ((0, m.Mz)(e, "Connection closed before the publish result arrived"),
                (0, m.BC)(e, "Connection closed before the draft arrived"),
                (0, g.RP)(e),
                t.disposed)
                    ? J(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), J(e, "connecting"), t.backoff.fail(() => W(e)))
                      : (J(e, "closed"),
                        M(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        (J(e, "failed"),
            M(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            (0, m.Mz)(e, "Connection failed before the publish result arrived"),
            (0, m.BC)(e, "Connection failed before the draft arrived"),
            (0, b.Hy)(e, {
                location: "connection",
                code: b.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function W(e) {
    let t = U.get(e);
    null == t &&
        ((t = {
            ws: new C(),
            backoff: new r.A(1e3, 3e4),
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
        J(e, "connecting"),
        B(e, n));
}
let H = new Map();
function j(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function q(e) {
    let t = H.get(e) ?? 0;
    H.set(e, t + 1);
    let n = U.get(e);
    return (
        0 === t && null != n && "open" === A.get(e) && j(e, n),
        () => {
            let t = (H.get(e) ?? 1) - 1;
            t > 0 ? H.set(e, t) : H.delete(e);
        }
    );
}
function $(e) {
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
        Y.delete(t),
        N.A.releasePreviewControl(e),
        (0, g.RP)(e),
        J(e, "closed"),
        !0)
    );
}
function z(e) {
    let t = U.get(e);
    if (null == t) return void W(e);
    let n = A.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || W(e);
}
function F(e, t, n) {
    let {
            templateId: r,
            remix: s,
            clarificationAnswers: o,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let c = {
            content: l,
            nonce: (0, i.m)(),
            attachments: a,
            templateId: r,
            remix: s,
            ...(null != o ? { clarificationAnswers: o } : {}),
        },
        u = U.get(e);
    if (null != u && ("connecting" === A.get(e) || u.reconnectPending)) return void u.pendingSends.push(c);
    I(e, c);
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
function K(e) {
    let t = U.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            c.A.isThinking(e) && (v.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function Q(e, t) {
    let n = U.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
let Y = new Map();
function X(e) {
    let t = (0, c.b)(e);
    if (null == t) return !1;
    if (Y.get(e) === t) return !0;
    let n = U.get(e);
    return null != n && "open" === A.get(e) && (Y.set(e, t), n.ws.sendLoadHistory(t), !0);
}
function V(e) {
    $(e);
}
class Z extends s.Ay.Store {
    initialize() {
        this.waitFor(c.A, p.A, S.Ay, l.default);
    }
    getConnState(e) {
        return A.get(e) ?? "connecting";
    }
}
let ee = new Z(o.h, {
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
        for (let e of Array.from(U.keys())) $(e);
        (D.clear(), (0, w.j_)());
    },
});
