n.d(t, {
    r2: () => Z,
    $S: () => ep,
    _v: () => ed,
    n6: () => ek,
    ss: () => ex,
    fu: () => K,
    cS: () => eh,
    Ay: () => ew,
    aF: () => ej,
    Xk: () => em,
    vX: () => eu,
    Vm: () => eb,
    oX: () => ef,
    dv: () => Y,
    TV: () => X,
    Hc: () => W,
    ST: () => ei,
    PK: () => ey,
    y_: () => ev,
    XZ: () => J,
    nU: () => eg,
    oB: () => es,
}),
    n(321073),
    n(508300),
    n(323874),
    n(14289),
    n(35956);
var l = n(158390),
    a = n(17928),
    i = n(636537),
    s = n(228366),
    r = n(195880),
    o = n(287809),
    u = n(673724),
    c = n(948230),
    d = n(927899),
    h = n(105810);
class m {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: l, onClose: a, onError: i } = e;
        this.close();
        let s = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            r = new WebSocket(`${s}/agent/ws?ticket=${encodeURIComponent(n)}`);
        (this.socket = r),
            r.addEventListener("message", (e) => {
                let t;
                if (this.socket === r) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[vibegrations] ws frame parse failed", e);
                        return;
                    }
                    l(t);
                }
            }),
            r.addEventListener("error", (e) => {
                this.socket === r && i?.(e);
            }),
            r.addEventListener("close", () => {
                this.socket === r && a?.();
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
    sendCaptureAck(e, t, n, l) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "capture_ack", id: e, status: t, code: n, message: l }));
            } catch {}
    }
    sendControlAck(e, t, n, l) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "control_ack", id: e, status: t, response: n, message: l }));
            } catch {}
    }
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var f = n(208137);
let p = new Map();
function g(e, t) {
    let n = p.get(t);
    return (
        null != n && (clearTimeout(n.timer), n.resolve(null)),
        new Promise((n) => {
            let l = setTimeout(() => {
                p.delete(t), n(null);
            }, 5e3);
            p.set(t, { resolve: n, timer: l, projectId: e });
        })
    );
}
function x(e) {
    for (let [t, n] of [...p]) n.projectId === e && (p.delete(t), clearTimeout(n.timer), n.resolve(null));
}
var v = n(783791),
    b = n(972786),
    j = n(652215),
    y = n(295813),
    k = n(375708);
function A(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let w = new Map(),
    S = new Map(),
    N = new Map(),
    E = new Set(),
    C = new Map(),
    I = new Map();
function T(e, t) {
    s.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let _ = { location: "connection", code: d.xA.SEND_FAILED },
    R = { location: "agent", code: d.xA.AGENT_ERROR };
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
    s.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, d.Z0)(e, { ...n, message: t });
}
function M(e) {
    return `optimistic:${e}`;
}
function O(e, t) {
    let { content: n, nonce: l, attachments: a } = t;
    s.h.dispatch({
        type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
        projectId: e,
        content: n,
        id: M(l),
        userId: o.default.getCurrentUser()?.id,
        timestamp: new Date().toISOString(),
        attachments: a,
    });
}
let L = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function $(e, t, n) {
    let l = t.pendingSends;
    for (let a of ((t.pendingSends = []), l)) O(e, a), P(e, n);
}
function D(e, t) {
    if (!0 === N.get(e)) return;
    let n = t.pendingSends;
    for (let l of ((t.pendingSends = []), n)) {
        O(e, l);
        try {
            t.ws.sendUserMessage(
                l.content,
                l.nonce,
                l.attachments?.map((e) => e.id),
            );
        } catch (t) {
            console.error("[vibegrations] queued send failed", t), P(e, t instanceof Error ? t.message : "send failed");
        }
    }
}
let F = {
        build_error: { location: "build", code: d.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: d.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: d.xA.AGENT_ERROR },
    },
    q = {
        web: { location: "runtime_frame", code: d.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: d.xA.RUNTIME_WORKER_ERROR },
    },
    U = new Map();
async function G(e, t, n) {
    let l,
        a = Date.now();
    console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe });
    try {
        l = await h.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await g(e, n.id)),
        });
    } catch (e) {
        console.error("[vibegrations] preview capture relay failed", e), (l = { status: "failed" });
    }
    console.debug("[vibegrations] capture relay answered", {
        id: n.id,
        status: l.status,
        code: l.code,
        ms: Date.now() - a,
    }),
        t.ws.sendCaptureAck(n.id, l.status, l.code, l.message);
}
async function H(e, t, n) {
    let l = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let a = await h.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await g(e, n.id)) != null),
        );
        console.debug("[vibegrations] control relay answered", { id: n.id, status: a.status, ms: Date.now() - l }),
            "completed" === a.status
                ? t.ws.sendControlAck(n.id, "completed", a.response)
                : "failed" === a.status
                  ? t.ws.sendControlAck(n.id, "failed", void 0, a.message)
                  : t.ws.sendControlAck(n.id, "unavailable");
    } catch (e) {
        console.error("[vibegrations] preview control relay failed", e),
            t.ws.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame");
    }
}
async function B(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: l } = await et(e);
        if (t.disposed) return;
        t.ws.open({
            url: l,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, l) {
                    var a, i, r, o;
                    if (
                        (console.debug("[vibegrations] ws event", l.type),
                        "hello" !== l.type &&
                            "history" !== l.type &&
                            "capture_preview" !== l.type &&
                            "control_preview" !== l.type &&
                            "control_claim" !== l.type &&
                            "capture_claim" !== l.type &&
                            "preview_operation" !== l.type &&
                            "open" !== S.get(t))
                    )
                        return void n.pendingEvents.push(l);
                    if ("history_page" === l.type) {
                        let e = Q.get(t);
                        if ((null != e && l.requested !== e) || (Q.delete(t), !0 === l.failed)) return;
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (l.messages ?? []).slice(),
                            cursor: !0 === l.has_more ? (l.cursor ?? null) : null,
                        }),
                            ee(t);
                        return;
                    }
                    if ("hello" === l.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === l.type) {
                        let a = (l.messages ?? []).slice();
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: a,
                            cursor: !0 === l.has_more ? (l.cursor ?? null) : null,
                        }),
                            Q.delete(t),
                            (o = t),
                            ee(o);
                        let i = n.pendingEvents;
                        for (let l of ((n.pendingEvents = []), T(t, "open"), i)) e(t, n, l);
                        let r = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != r))
                            try {
                                n.ws.sendModelSettings(r);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        D(t, n);
                    } else if ("chat_state" === l.type)
                        s.h.dispatch({ type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId: t, stopped: l.stopped }),
                            l.stopped || "open" !== S.get(t) || D(t, n);
                    else if ("user_message" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                            projectId: t,
                            content: l.content,
                            id: l.id,
                            ...(null != l.nonce ? { optimisticId: M(l.nonce) } : {}),
                            userId: l.user_id,
                            timestamp: l.ts,
                            attachments: l.attachments,
                        });
                    else if ("message_disposition" === l.type)
                        (a = l.disposition),
                            Object.prototype.hasOwnProperty.call(L, a) &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: l.id,
                                    activeTurnId: l.active_turn_id,
                                    disposition: l.disposition,
                                });
                    else if ("side_reply" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: l.id,
                            inReplyTo: l.in_reply_to,
                            content: l.content,
                            timestamp: l.ts,
                        });
                    else if ("provisional_todo" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: l.turn_id,
                            text: l.text,
                        });
                    else if ("step" === l.type)
                        if ("reply" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: l.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : P(t, k.intl.string(y.default.Z8Eo8I), R);
                        } else if ("announcement" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e &&
                                (s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { announcement: e },
                                }),
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    step: l,
                                }));
                        } else if ("thinking_lifecycle" === l.kind) {
                            let { phase: e, session: n, seq: a, ticks: i, elapsed_ms: r, text: o } = l;
                            null != e &&
                                null != a &&
                                null != n &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_THINKING_SET",
                                    projectId: t,
                                    activity: {
                                        phase: e,
                                        session: n,
                                        seq: a,
                                        ticks: i ?? 0,
                                        elapsedMs: r ?? 0,
                                        text: o ?? "",
                                    },
                                });
                        } else if ("compaction" === l.kind)
                            ("start" === l.phase || "end" === l.phase) &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === l.phase,
                                });
                        else if ("todos" === l.kind) {
                            let e = l.items ?? [];
                            e.length > 0 &&
                                (s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { todos: e },
                                }),
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    step: l,
                                }));
                        } else if ("plan_proposed" === l.kind)
                            null != l.proposal
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: l.turn_id,
                                      patch: { proposal: l.proposal, kind: "proposal" },
                                  })
                                : P(t, k.intl.string(y.default.IHCafX), R);
                        else if ("ideas" === l.kind)
                            null != l.ideas &&
                                l.ideas.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { ideas: l.ideas },
                                });
                        else if ("clarification" === l.kind)
                            null != l.clarification &&
                                (l.clarification.questions?.length ?? 0) > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { clarification: l.clarification },
                                });
                        else if ("attachment" === l.kind)
                            null != l.attachments &&
                                l.attachments.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { attachments: l.attachments },
                                });
                        else if ("collect_secrets" === l.kind) {
                            let e = l.fields ?? [];
                            e.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { secretRequest: { fields: e, note: l.note, copy_values: l.copy_values } },
                                });
                        } else if ("collect_settings" === l.kind)
                            s.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: l.turn_id,
                                patch: { settingsRequest: { keys: l.keys, note: l.note } },
                            });
                        else if ("usage" === l.kind)
                            null != l.turn &&
                                null != l.project &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: l.turn,
                                    project: l.project,
                                });
                        else if ("project_named" === l.kind) {
                            let e = l.name,
                                n = b.A.getProject(t)?.name?.trim(),
                                a = null == n || "" === n || n === u.Hz;
                            null != e &&
                                "" !== e &&
                                a &&
                                (0, c.oB)(t, e).catch((e) => {
                                    console.error("[vibegrations] rename from agent failed", t, e);
                                });
                        } else if ("publish_result" === l.kind) {
                            let e = n.pendingPublish;
                            (n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(l)),
                                !0 !== l.ok && (0, c.Is)(t, l.error ?? "publish_result not ok", !1);
                        } else if ("turn_result" === l.kind)
                            (0, d.Xv)(t, l),
                                "deployed" === l.result &&
                                    s.h.dispatch({
                                        type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                        projectId: t,
                                        turnId: l.turn_id,
                                        patch: { kind: "plan_implemented" },
                                    }),
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    summary: l.summary,
                                }),
                                E.delete(t) &&
                                    "cancelled" === l.result &&
                                    s.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t });
                        else {
                            s.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                projectId: t,
                                turnId: l.turn_id,
                                step: l,
                            });
                            let e = F[l.kind];
                            null != e && (0, d.Z0)(t, { ...e, message: l.message, details: l.stderr_tail }),
                                "preview_ready" === l.kind &&
                                    (0, c.tZ)(t, { isPreview: !0 }).catch((e) => {
                                        console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                    });
                        }
                    else if ("capture_preview" === l.type) G(t, n, l).catch(() => {});
                    else if ("control_preview" === l.type) H(t, n, l).catch(() => {});
                    else if ("control_claim" === l.type || "capture_claim" === l.type) {
                        let e;
                        (i = l.id),
                            (r = "capture_claim" === l.type ? l.upload_token : void 0),
                            (e = p.get(i)),
                            null != e && (p.delete(i), clearTimeout(e.timer), e.resolve({ uploadToken: r }));
                    } else
                        "preview_operation" === l.type
                            ? "begin" === l.phase
                                ? h.A.beginPreviewOperation(t)
                                : h.A.endPreviewOperation(t)
                            : "model_settings" === l.type
                              ? s.h.dispatch({
                                    type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                    projectId: t,
                                    settings: l.settings,
                                    choices: l.choices,
                                })
                              : "settings" === l.type
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_SETTINGS_SET",
                                      projectId: t,
                                      settings: { schema: l.schema, values: l.values, secrets: l.secrets },
                                  })
                                : (s.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: l }),
                                  (function (e, t) {
                                      if ("error" !== t.level) return;
                                      let n = null != t.source ? q[t.source] : void 0;
                                      if (null == n) return;
                                      let l = U.get(e);
                                      null == l && ((l = new Set()), U.set(e, l));
                                      let a = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                      l.has(a) ||
                                          l.size >= 10 ||
                                          (l.add(a),
                                          (0, d.Z0)(e, {
                                              location: n.location,
                                              code: n.code,
                                              message: t.message,
                                              details: t.source,
                                          }));
                                  })(t, l));
                })(e, t, n),
            onClose: () => {
                (A(t, "Connection closed before the publish result arrived"), x(e), t.disposed)
                    ? T(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), T(e, "connecting"), t.backoff.fail(() => V(e)))
                      : (T(e, "closed"),
                        $(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        T(e, "failed"),
            $(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            A(t, "Connection failed before the publish result arrived"),
            (0, d.Z0)(e, {
                location: "connection",
                code: d.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function V(e) {
    let t = w.get(e);
    null == t &&
        ((t = {
            ws: new m(),
            backoff: new l.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingPublish: null,
        }),
        w.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        T(e, "connecting"),
        B(e, n);
}
function z(e) {
    var t;
    let n = w.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        A(n, "Connection closed before the publish result arrived"),
        n.ws.close(),
        w.delete(e),
        (t = e),
        Q.delete(t),
        h.A.releasePreviewControl(e),
        x(e),
        T(e, "closed"),
        !0)
    );
}
function W(e) {
    let t = w.get(e);
    if (null == t) return void V(e);
    let n = S.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || V(e);
}
function Y(e, t, n) {
    let l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let i = { content: l, nonce: (0, r.m)(), attachments: a },
        s = w.get(e);
    if (null != s && ("connecting" === S.get(e) || s.reconnectPending)) return void s.pendingSends.push(i);
    O(e, i);
    try {
        if (null == s) throw Error("Not connected");
        s.ws.sendUserMessage(
            i.content,
            i.nonce,
            i.attachments?.map((e) => e.id),
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), P(e, t instanceof Error ? t.message : "send failed");
    }
}
function K(e) {
    let t = w.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), v.Ay.isThinking(e) && E.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function X(e) {
    return new Promise((t, n) => {
        let l = w.get(e);
        if (null == l) return void n(Error("Not connected"));
        if (null != l.pendingPublish) return void n(Error("Publish already in flight"));
        let a = setTimeout(() => {
            A(l, "Publish timed out");
        }, 12e4);
        l.pendingPublish = { resolve: t, reject: n, timeout: a };
        try {
            l.ws.sendPublish();
        } catch (e) {
            (l.pendingPublish = null), clearTimeout(a), n(e instanceof Error ? e : Error("publish send failed"));
        }
    }).catch((t) => {
        throw ((0, c.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
    });
}
function Z(e, t) {
    let n = w.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function J(e, t) {
    let n = w.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let Q = new Map();
function ee(e) {
    let t = (0, v.bi)(e);
    if (null == t) return !1;
    if (Q.get(e) === t) return !0;
    let n = w.get(e);
    return null != n && (Q.set(e, t), n.ws.sendLoadHistory(t), !0);
}
async function et(e) {
    let { body: t } = await i.Bo.post({ url: j.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, f.C)() ?? t.url };
}
let en = new Map(),
    el = new Map();
function ea(e) {
    let t = en.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = el.get(e);
    if (null != n) return n;
    let l = et(e)
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
            return null != n && en.set(e, { ticket: t, expiresAt: n - 3e4 }), t;
        })
        .finally(() => {
            el.delete(e);
        });
    return el.set(e, l), l;
}
async function ei(e) {
    let { ticket: t, baseUrl: n } = await et(e),
        l = new URLSearchParams({ ticket: t }),
        a = await fetch(`${n}/agent/source-history?${l}`);
    if (!a.ok) throw Error(`version history failed (${a.status})`);
    let i = await a.json();
    return Array.isArray(i.entries) ? i.entries : [];
}
async function es(e, t) {
    let { ticket: n, baseUrl: l } = await et(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${l}/agent/source-history/${encodeURIComponent(t)}/restore?${a}`, { method: "POST" });
    if (!i.ok) {
        let e = (await i.text()).trim();
        throw Error(`version restore failed (${i.status})${"" === e ? "" : `: ${e}`}`);
    }
    let s = await i.json();
    if (null == s.entry) throw Error("version restore returned no commit");
    return (
        (0, c.tZ)(e, { isPreview: !0 }).catch((t) => {
            console.error("[vibegrations] post-version-restore refresh failed", e, t);
        }),
        s.entry
    );
}
async function er(e) {
    let { body: t } = await i.Bo.post({ url: j.Rsh.VIBEGRATIONS_PROJECT_REMIX_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, f.C)() ?? t.url };
}
function eo(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function eu(e, t) {
    return ec(e, t, t.name, t.type);
}
async function ec(e, t, n, l) {
    let { ticket: a, baseUrl: i } = await et(e),
        s = new URLSearchParams({ ticket: a, name: n }),
        r = await fetch(`${eo(i)}?${s}`, {
            method: "POST",
            headers: { "content-type": "" !== l ? l : "application/octet-stream" },
            body: t,
        });
    if (!r.ok) throw Error(`attachment upload failed (${r.status})`);
    return await r.json();
}
class ed extends Error {
    status;
    constructor(e) {
        super(`export failed (${e})`), (this.status = e);
    }
}
async function eh(e, t) {
    let { ticket: n, baseUrl: l } = await et(e),
        a = new URLSearchParams({ ticket: n, name: t }),
        i = await fetch(`${l}/agent/export?${a}`);
    if (!i.ok) throw new ed(i.status);
    return await i.blob();
}
class em extends Error {
    status;
    constructor(e) {
        super(`remix failed (${e})`), (this.status = e);
    }
}
async function ef(e, t) {
    let [n, l] = await Promise.all([er(e), et(t)]),
        a = new URLSearchParams({ ticket: n.ticket }),
        i = await fetch(`${n.baseUrl}/agent/fork?${a}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: l.ticket }),
        });
    if (!i.ok) throw new em(i.status);
}
async function ep(e, t) {
    let { ticket: n, baseUrl: l } = await et(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${l}/agent/secrets?${a}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`secret submission failed (${i.status})`);
}
async function eg(e, t) {
    let { ticket: n, baseUrl: l } = await et(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${l}/agent/settings?${a}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`settings submission failed (${i.status})`);
    let s = await i.json().catch(() => null);
    return { rebuildRequired: s?.rebuild_required === !0 };
}
function ex(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await et(e),
            l = new URLSearchParams({ ticket: t }),
            a = await fetch(`${n}/agent/rebuild?${l}`, { method: "POST" });
        a.ok || console.warn("[vibegrations] settings rebuild request failed", e, a.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
async function ev(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: l } = await et(e),
        a = new URLSearchParams({ ticket: n });
    t && a.set("regenerate", "1");
    let i = await fetch(`${l}/agent/mcp-token?${a}`, { method: "POST" });
    if (!i.ok) throw Error(`mcp token failed (${i.status})`);
    let s = await i.json();
    return { url: s.url, token: s.token, expiresAt: s.expires_at };
}
async function eb(e, t) {
    let { ticket: n, baseUrl: l } = await et(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${eo(l, t)}?${a}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
async function ej(e, t) {
    let { ticket: n, baseUrl: l } = await ea(e),
        a = new URLSearchParams({ ticket: n });
    return `${l}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function ey(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: a } = await ea(e),
        i = new URLSearchParams({ ticket: l });
    return n && i.set("download", "1"), `${eo(a, t)}?${i}`;
}
async function ek(e, t) {
    async function n() {
        return fetch(await ey(e, t), { method: "HEAD" });
    }
    let l = await n();
    if ((401 === l.status && (en.delete(e), (l = await n())), 404 === l.status)) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
class eA extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default, v.Ay, b.A);
    }
    getConnState(e) {
        return S.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return N.get(e) ?? !1;
    }
    getModelSettings(e) {
        return C.get(e) ?? null;
    }
    getSettings(e) {
        return I.get(e) ?? null;
    }
}
let ew = new eA(s.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (S.get(t) === n) return !1;
        S.set(t, n), ("closed" === n || "failed" === n) && E.delete(t);
    },
    VIBEGRATIONS_CHAT_STOPPED_SET: function (e) {
        let { projectId: t, stopped: n } = e;
        if ((N.get(t) ?? !1) === n) return !1;
        N.set(t, n);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: l } = e;
        C.set(t, { settings: n, choices: l });
    },
    VIBEGRATIONS_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n } = e;
        I.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!z(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(w.keys())) null == b.A.getProject(e) && z(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (0 === w.size) return !1;
        for (let e of Array.from(w.keys())) z(e);
        N.clear(), en.clear();
    },
});
