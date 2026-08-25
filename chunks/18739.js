n.d(t, {
    r2: () => Q,
    $S: () => ey,
    _v: () => eh,
    n6: () => ek,
    ss: () => ew,
    fu: () => z,
    cS: () => ef,
    Ay: () => eR,
    aF: () => eA,
    Xk: () => e_,
    JI: () => eT,
    Vm: () => em,
    oX: () => eg,
    dv: () => K,
    TV: () => Y,
    vX: () => eu,
    Hc: () => Z,
    ST: () => ea,
    PK: () => eI,
    Bn: () => eb,
    y_: () => eE,
    XZ: () => ee,
    nU: () => eS,
    oB: () => el,
}),
    n(321073),
    n(508300),
    n(323874),
    n(14289),
    n(35956);
var r = n(158390),
    i = n(17928),
    s = n(636537),
    o = n(228366),
    a = n(195880),
    l = n(287809),
    c = n(673724),
    d = n(948230),
    u = n(927899),
    p = n(105810);
class h {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: r, onClose: i, onError: s } = e;
        this.close();
        let o = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            a = new WebSocket(`${o}/agent/ws?ticket=${encodeURIComponent(n)}`);
        (this.socket = a),
            a.addEventListener("message", (e) => {
                let t;
                if (this.socket === a) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[vibegrations] ws frame parse failed", e);
                        return;
                    }
                    r(t);
                }
            }),
            a.addEventListener("error", (e) => {
                this.socket === a && s?.(e);
            }),
            a.addEventListener("close", () => {
                this.socket === a && i?.();
            });
    }
    sendUserMessage(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "user_message", content: e, nonce: t, attachment_ids: n }));
    }
    sendInterrupt() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "interrupt" }));
    }
    sendPublish() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "publish" }));
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
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var f = n(208137);
let _ = new Map();
function g(e, t) {
    let n = _.get(t);
    return (
        null != n && (clearTimeout(n.timer), n.resolve(null)),
        new Promise((n) => {
            let r = setTimeout(() => {
                _.delete(t), n(null);
            }, 5e3);
            _.set(t, { resolve: n, timer: r, projectId: e });
        })
    );
}
function y(e) {
    for (let [t, n] of [..._]) n.projectId === e && (_.delete(t), clearTimeout(n.timer), n.resolve(null));
}
var S = n(557875),
    w = n(783791),
    E = n(972786),
    T = n(652215),
    m = n(295813),
    A = n(375708);
function I(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let k = new Map(),
    b = new Map(),
    v = new Map(),
    N = new Set(),
    P = new Map(),
    R = new Map();
function O(e, t) {
    o.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let C = { location: "connection", code: u.xA.SEND_FAILED },
    G = { location: "agent", code: u.xA.AGENT_ERROR };
function H(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
    o.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, u.Z0)(e, { ...n, message: t });
}
function $(e) {
    return `optimistic:${e}`;
}
let U = new Map();
function B(e, t) {
    let { content: n, nonce: r, attachments: i } = t;
    U.set(r, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: $(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: i,
        });
}
let V = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function M(e, t, n) {
    let r = t.pendingSends;
    for (let i of ((t.pendingSends = []), r)) B(e, i), H(e, n);
}
function D(e, t) {
    if (!0 === v.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        B(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
            );
        } catch (t) {
            console.error("[vibegrations] queued send failed", t), H(e, t instanceof Error ? t.message : "send failed");
        }
    }
}
let L = {
        build_error: { location: "build", code: u.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: u.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: u.xA.AGENT_ERROR },
    },
    j = {
        web: { location: "runtime_frame", code: u.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: u.xA.RUNTIME_WORKER_ERROR },
    },
    x = new Map();
async function J(e, t, n) {
    let r,
        i = Date.now();
    console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe });
    try {
        r = await p.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await g(e, n.id)),
        });
    } catch (e) {
        console.error("[vibegrations] preview capture relay failed", e), (r = { status: "failed" });
    }
    console.debug("[vibegrations] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - i,
    }),
        t.ws.sendCaptureAck(n.id, r.status, r.code, r.message);
}
async function W(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let i = await p.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await g(e, n.id)) != null),
        );
        console.debug("[vibegrations] control relay answered", { id: n.id, status: i.status, ms: Date.now() - r }),
            "completed" === i.status
                ? t.ws.sendControlAck(n.id, "completed", i.response)
                : "failed" === i.status
                  ? t.ws.sendControlAck(n.id, "failed", void 0, i.message)
                  : t.ws.sendControlAck(n.id, "unavailable");
    } catch (e) {
        console.error("[vibegrations] preview control relay failed", e),
            t.ws.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame");
    }
}
async function q(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await er(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    var i, s, a, l;
                    if (
                        (console.debug("[vibegrations] ws event", r.type),
                        "hello" !== r.type &&
                            "history" !== r.type &&
                            "capture_preview" !== r.type &&
                            "control_preview" !== r.type &&
                            "control_claim" !== r.type &&
                            "capture_claim" !== r.type &&
                            "preview_operation" !== r.type &&
                            "open" !== b.get(t))
                    )
                        return void n.pendingEvents.push(r);
                    if ("history_page" === r.type) {
                        let e = et.get(t);
                        if ((null != e && r.requested !== e) || (et.delete(t), !0 === r.failed)) return;
                        o.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (r.messages ?? []).slice(),
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        }),
                            en(t);
                        return;
                    }
                    if ("hello" === r.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === r.type) {
                        let i = (r.messages ?? []).slice();
                        o.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: i,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        }),
                            et.delete(t),
                            (l = t),
                            en(l);
                        let s = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), O(t, "open"), s)) e(t, n, r);
                        let a = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != a))
                            try {
                                n.ws.sendModelSettings(a);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        D(t, n);
                    } else if ("chat_state" === r.type)
                        o.h.dispatch({ type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId: t, stopped: r.stopped }),
                            r.stopped || "open" !== b.get(t) || D(t, n);
                    else if ("user_message" === r.type) {
                        let e;
                        (e = null != r.nonce && U.has(r.nonce) && U.get(r.nonce) === r.user_id) &&
                            null != r.nonce &&
                            U.delete(r.nonce),
                            o.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(e && null != r.nonce ? { optimisticId: $(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            });
                    } else if ("message_disposition" === r.type)
                        (i = r.disposition),
                            Object.prototype.hasOwnProperty.call(V, i) &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: r.id,
                                    activeTurnId: r.active_turn_id,
                                    disposition: r.disposition,
                                });
                    else if ("side_reply" === r.type)
                        o.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: r.id,
                            inReplyTo: r.in_reply_to,
                            content: r.content,
                            timestamp: r.ts,
                        });
                    else if ("provisional_todo" === r.type)
                        o.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: r.turn_id,
                            text: r.text,
                        });
                    else if ("step" === r.type)
                        if ("reply" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e
                                ? o.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : H(t, A.intl.string(m.default.Z8Eo8I), G);
                        } else if ("announcement" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e &&
                                (o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { announcement: e },
                                }),
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("thinking_lifecycle" === r.kind) {
                            let { phase: e, session: n, seq: i, ticks: s, elapsed_ms: a, text: l } = r;
                            null != e &&
                                null != i &&
                                null != n &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_THINKING_SET",
                                    projectId: t,
                                    activity: {
                                        phase: e,
                                        session: n,
                                        seq: i,
                                        ticks: s ?? 0,
                                        elapsedMs: a ?? 0,
                                        text: l ?? "",
                                    },
                                });
                        } else if ("compaction" === r.kind)
                            ("start" === r.phase || "end" === r.phase) &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === r.phase,
                                });
                        else if ("todos" === r.kind) {
                            let e = r.items ?? [];
                            e.length > 0 &&
                                (o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { todos: e },
                                }),
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("plan_proposed" === r.kind)
                            null != r.proposal
                                ? o.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { proposal: r.proposal, kind: "proposal" },
                                  })
                                : H(t, A.intl.string(m.default.IHCafX), G);
                        else if ("ideas" === r.kind)
                            null != r.ideas &&
                                r.ideas.length > 0 &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { ideas: r.ideas },
                                });
                        else if ("clarification" === r.kind)
                            null != r.clarification &&
                                (r.clarification.questions?.length ?? 0) > 0 &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { clarification: r.clarification },
                                });
                        else if ("attachment" === r.kind)
                            null != r.attachments &&
                                r.attachments.length > 0 &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { attachments: r.attachments },
                                });
                        else if ("collect_secrets" === r.kind) {
                            let e = r.fields ?? [];
                            e.length > 0 &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { secretRequest: { fields: e, note: r.note, copy_values: r.copy_values } },
                                });
                        } else if ("collect_settings" === r.kind)
                            o.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: r.turn_id,
                                patch: { settingsRequest: { keys: r.keys, note: r.note } },
                            });
                        else if ("usage" === r.kind)
                            null != r.turn &&
                                null != r.project &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: r.turn,
                                    project: r.project,
                                });
                        else if ("project_named" === r.kind) {
                            let e = r.name,
                                n = E.A.getProject(t)?.name?.trim(),
                                i = null == n || "" === n || n === c.Hz;
                            null != e &&
                                "" !== e &&
                                i &&
                                (0, d.oB)(t, e).catch((e) => {
                                    console.error("[vibegrations] rename from agent failed", t, e);
                                });
                        } else if ("publish_result" === r.kind) {
                            let e = n.pendingPublish;
                            (n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(r)),
                                !0 !== r.ok && (0, d.Is)(t, r.error ?? "publish_result not ok", !1);
                        } else if ("turn_result" === r.kind)
                            (0, u.Xv)(t, r),
                                "deployed" === r.result &&
                                    o.h.dispatch({
                                        type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                        projectId: t,
                                        turnId: r.turn_id,
                                        patch: { kind: "plan_implemented" },
                                    }),
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    summary: r.summary,
                                }),
                                N.delete(t) &&
                                    "cancelled" === r.result &&
                                    o.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t });
                        else {
                            o.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                projectId: t,
                                turnId: r.turn_id,
                                step: r,
                            });
                            let e = L[r.kind];
                            null != e && (0, u.Z0)(t, { ...e, message: r.message, details: r.stderr_tail }),
                                "preview_ready" === r.kind &&
                                    (0, d.tZ)(t, { isPreview: !0 }).catch((e) => {
                                        console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                    });
                        }
                    else if ("capture_preview" === r.type) J(t, n, r).catch(() => {});
                    else if ("control_preview" === r.type) W(t, n, r).catch(() => {});
                    else if ("control_claim" === r.type || "capture_claim" === r.type) {
                        let e;
                        (s = r.id),
                            (a = "capture_claim" === r.type ? r.upload_token : void 0),
                            (e = _.get(s)),
                            null != e && (_.delete(s), clearTimeout(e.timer), e.resolve({ uploadToken: a }));
                    } else
                        "preview_operation" === r.type
                            ? "begin" === r.phase
                                ? p.A.beginPreviewOperation(t)
                                : p.A.endPreviewOperation(t)
                            : "model_settings" === r.type
                              ? o.h.dispatch({
                                    type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                    projectId: t,
                                    settings: r.settings,
                                    choices: r.choices,
                                })
                              : "settings" === r.type
                                ? o.h.dispatch({
                                      type: "VIBEGRATIONS_SETTINGS_SET",
                                      projectId: t,
                                      settings: {
                                          schema: r.schema,
                                          values: r.values,
                                          secrets: r.secrets,
                                          connections: r.connections,
                                      },
                                  })
                                : (o.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: r }),
                                  (function (e, t) {
                                      if ("error" !== t.level) return;
                                      let n = null != t.source ? j[t.source] : void 0;
                                      if (null == n) return;
                                      let r = x.get(e);
                                      null == r && ((r = new Set()), x.set(e, r));
                                      let i = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                      r.has(i) ||
                                          r.size >= 10 ||
                                          (r.add(i),
                                          (0, u.Z0)(e, {
                                              location: n.location,
                                              code: n.code,
                                              message: t.message,
                                              details: t.source,
                                          }));
                                  })(t, r));
                })(e, t, n),
            onClose: () => {
                (I(t, "Connection closed before the publish result arrived"), y(e), t.disposed)
                    ? O(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), O(e, "connecting"), t.backoff.fail(() => F(e)))
                      : (O(e, "closed"),
                        M(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        O(e, "failed"),
            M(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            I(t, "Connection failed before the publish result arrived"),
            (0, u.Z0)(e, {
                location: "connection",
                code: u.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function F(e) {
    let t = k.get(e);
    null == t &&
        ((t = {
            ws: new h(),
            backoff: new r.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingPublish: null,
        }),
        k.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        O(e, "connecting"),
        q(e, n);
}
function X(e) {
    var t;
    let n = k.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        I(n, "Connection closed before the publish result arrived"),
        n.ws.close(),
        k.delete(e),
        (t = e),
        et.delete(t),
        p.A.releasePreviewControl(e),
        y(e),
        O(e, "closed"),
        !0)
    );
}
function Z(e) {
    let t = k.get(e);
    if (null == t) return void F(e);
    let n = b.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || F(e);
}
function K(e, t, n) {
    let r = t.trim(),
        i = null != n && n.length > 0 ? n : void 0;
    if ("" === r && null == i) return;
    let s = { content: r, nonce: (0, a.m)(), attachments: i },
        o = k.get(e);
    if (null != o && ("connecting" === b.get(e) || o.reconnectPending)) return void o.pendingSends.push(s);
    B(e, s);
    try {
        if (null == o) throw Error("Not connected");
        o.ws.sendUserMessage(
            s.content,
            s.nonce,
            s.attachments?.map((e) => e.id),
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), H(e, t instanceof Error ? t.message : "send failed");
    }
}
function z(e) {
    let t = k.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), w.Ay.isThinking(e) && N.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function Y(e) {
    return new Promise((t, n) => {
        let r = k.get(e);
        if (null == r) return void n(Error("Not connected"));
        if (null != r.pendingPublish) return void n(Error("Publish already in flight"));
        let i = setTimeout(() => {
            I(r, "Publish timed out");
        }, 12e4);
        r.pendingPublish = { resolve: t, reject: n, timeout: i };
        try {
            r.ws.sendPublish();
        } catch (e) {
            (r.pendingPublish = null), clearTimeout(i), n(e instanceof Error ? e : Error("publish send failed"));
        }
    }).catch((t) => {
        throw ((0, d.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
    });
}
function Q(e, t) {
    let n = k.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function ee(e, t) {
    let n = k.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let et = new Map();
function en(e) {
    let t = (0, w.bi)(e);
    if (null == t) return !1;
    if (et.get(e) === t) return !0;
    let n = k.get(e);
    return null != n && (et.set(e, t), n.ws.sendLoadHistory(t), !0);
}
async function er(e) {
    let { body: t } = await s.Bo.post({ url: T.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, f.C)() ?? t.url };
}
let ei = new Map(),
    es = new Map();
function eo(e) {
    let t = ei.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = es.get(e);
    if (null != n) return n;
    let r = er(e)
        .then((t) => {
            let n = (function (e) {
                try {
                    let t = atob(e.split(".")[0].replace(/-/g, "+").replace(/_/g, "/")),
                        n = JSON.parse(t).exp;
                    return "number" == typeof n && Number.isFinite(n) ? 1e3 * n : null;
                } catch {
                    return null;
                }
            })(t.ticket);
            return null != n && ei.set(e, { ticket: t, expiresAt: n - 3e4 }), t;
        })
        .finally(() => {
            es.delete(e);
        });
    return es.set(e, r), r;
}
async function ea(e) {
    let { ticket: t, baseUrl: n } = await er(e),
        r = new URLSearchParams({ ticket: t }),
        i = await fetch(`${n}/agent/source-history?${r}`);
    if (!i.ok) throw Error(`version history failed (${i.status})`);
    let s = await i.json();
    return Array.isArray(s.entries) ? s.entries : [];
}
async function el(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${i}`, { method: "POST" });
    if (!s.ok) {
        let e = (await s.text()).trim();
        throw Error(`version restore failed (${s.status})${"" === e ? "" : `: ${e}`}`);
    }
    let o = await s.json();
    if (null == o.entry) throw Error("version restore returned no commit");
    return (
        (0, d.tZ)(e, { isPreview: !0 }).catch((t) => {
            console.error("[vibegrations] post-version-restore refresh failed", e, t);
        }),
        o.entry
    );
}
async function ec(e) {
    let { body: t } = await s.Bo.post({ url: T.Rsh.VIBEGRATIONS_PROJECT_REMIX_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, f.C)() ?? t.url };
}
function ed(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function eu(e, t) {
    return ep(e, t, t.name, t.type);
}
async function ep(e, t, n, r) {
    let { ticket: i, baseUrl: s } = await er(e),
        o = new URLSearchParams({ ticket: i, name: n }),
        a = await fetch(`${ed(s)}?${o}`, {
            method: "POST",
            headers: { "content-type": "" !== r ? r : "application/octet-stream" },
            body: t,
        });
    if (!a.ok) throw Error(`attachment upload failed (${a.status})`);
    return await a.json();
}
class eh extends Error {
    status;
    constructor(e) {
        super(`export failed (${e})`), (this.status = e);
    }
}
async function ef(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        i = new URLSearchParams({ ticket: n, name: t }),
        s = await fetch(`${r}/agent/export?${i}`);
    if (!s.ok) throw new eh(s.status);
    return await s.blob();
}
class e_ extends Error {
    status;
    constructor(e) {
        super(`remix failed (${e})`), (this.status = e);
    }
}
async function eg(e, t) {
    let [n, r] = await Promise.all([ec(e), er(t)]),
        i = new URLSearchParams({ ticket: n.ticket }),
        s = await fetch(`${n.baseUrl}/agent/fork?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!s.ok) throw new e_(s.status);
}
async function ey(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/secrets?${i}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!s.ok) throw Error(`secret submission failed (${s.status})`);
}
async function eS(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/settings?${i}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!s.ok) throw Error(`settings submission failed (${s.status})`);
    let o = await s.json().catch(() => null);
    return { rebuildRequired: o?.rebuild_required === !0 };
}
function ew(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await er(e),
            r = new URLSearchParams({ ticket: t }),
            i = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        i.ok || console.warn("[vibegrations] settings rebuild request failed", e, i.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
async function eE(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await er(e),
        i = new URLSearchParams({ ticket: n });
    t && i.set("regenerate", "1");
    let s = await fetch(`${r}/agent/mcp-token?${i}`, { method: "POST" });
    if (!s.ok) throw Error(`mcp token failed (${s.status})`);
    let o = await s.json();
    return { url: o.url, token: o.token, expiresAt: o.expires_at };
}
async function eT(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: i } = await er(e);
        n = await fetch(`${i}/agent/external-auth/authorize-url?${new URLSearchParams({ ticket: r })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ connection_type: t }),
        });
    } catch {
        return { type: "error", error: "unavailable" };
    }
    if (!n.ok) {
        let e = null;
        try {
            e = (0, S.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, S.ls)(n.status, e) };
    }
    try {
        r = (await n.json())?.url;
    } catch {
        return { type: "error", error: "unavailable" };
    }
    return "string" == typeof r && r.startsWith("https://")
        ? { type: "url", url: r }
        : { type: "error", error: "unavailable" };
}
async function em(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${ed(r, t)}?${i}`, { method: "DELETE", keepalive: !0 });
    if (!s.ok) throw Error(`attachment cleanup failed (${s.status})`);
}
async function eA(e, t) {
    let { ticket: n, baseUrl: r } = await eo(e),
        i = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${i}`;
}
async function eI(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: i } = await eo(e),
        s = new URLSearchParams({ ticket: r });
    return n && s.set("download", "1"), `${ed(i, t)}?${s}`;
}
async function ek(e, t) {
    async function n() {
        return fetch(await eI(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (ei.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eb(e) {
    X(e);
}
class ev extends i.Ay.Store {
    initialize() {
        this.waitFor(l.default, w.Ay, E.A);
    }
    getConnState(e) {
        return b.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return v.get(e) ?? !1;
    }
    getModelSettings(e) {
        return P.get(e) ?? null;
    }
    getSettings(e) {
        return R.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return R.get(e)?.connections ?? eN;
    }
}
let eN = [],
    eP = new ev(o.h, {
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (b.get(t) === n) return !1;
            b.set(t, n), ("closed" === n || "failed" === n) && N.delete(t);
        },
        VIBEGRATIONS_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((v.get(t) ?? !1) === n) return !1;
            v.set(t, n);
        },
        VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, choices: r } = e;
            P.set(t, { settings: n, choices: r });
        },
        VIBEGRATIONS_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            R.set(t, n);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!X(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(k.keys())) null == E.A.getProject(e) && X(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === k.size) return !1;
            for (let e of Array.from(k.keys())) X(e);
            v.clear(), ei.clear();
        },
    }),
    eR = 221552 == n.j ? eP : null;
