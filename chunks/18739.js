n.d(t, {
    r2: () => Y,
    $S: () => eg,
    _v: () => ep,
    n6: () => ek,
    ss: () => eS,
    fu: () => K,
    cS: () => eh,
    Ay: () => eP,
    aF: () => em,
    Xk: () => ef,
    JI: () => eE,
    Vm: () => eT,
    oX: () => e_,
    dv: () => Z,
    TV: () => z,
    vX: () => ed,
    Hc: () => X,
    ST: () => eo,
    PK: () => eA,
    Bn: () => eI,
    y_: () => ew,
    XZ: () => Q,
    nU: () => ey,
    oB: () => ea,
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
    c = n(948230),
    d = n(927899),
    u = n(105810);
class p {
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
    sendUserMessage(e, t, n, r) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({ type: "user_message", content: e, nonce: t, attachment_ids: n, project_name: r }),
        );
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
    sendAppIconAck(e, t) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "app_icon_ack", id: e, status: t }));
            } catch {}
    }
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var h = n(208137);
let f = new Map();
function _(e, t) {
    let n = f.get(t);
    return (
        null != n && (clearTimeout(n.timer), n.resolve(null)),
        new Promise((n) => {
            let r = setTimeout(() => {
                f.delete(t), n(null);
            }, 5e3);
            f.set(t, { resolve: n, timer: r, projectId: e });
        })
    );
}
function g(e) {
    for (let [t, n] of [...f]) n.projectId === e && (f.delete(t), clearTimeout(n.timer), n.resolve(null));
}
var y = n(557875),
    S = n(783791),
    w = n(972786),
    E = n(652215),
    T = n(295813),
    m = n(375708);
function A(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let k = new Map(),
    I = new Map(),
    b = new Map(),
    v = new Set(),
    N = new Map(),
    P = new Map();
function R(e, t) {
    o.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let O = { location: "connection", code: d.xA.SEND_FAILED },
    C = { location: "agent", code: d.xA.AGENT_ERROR };
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O;
    o.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, d.Z0)(e, { ...n, message: t });
}
function H(e) {
    return `optimistic:${e}`;
}
let $ = new Map();
function U(e, t) {
    let { content: n, nonce: r, attachments: i } = t;
    $.set(r, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: H(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: i,
        });
}
let B = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function V(e, t, n) {
    let r = t.pendingSends;
    for (let i of ((t.pendingSends = []), r)) U(e, i), G(e, n);
}
function M(e, t) {
    if (!0 === b.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        U(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
                w.A.getProject(e)?.name,
            );
        } catch (t) {
            console.error("[vibegrations] queued send failed", t), G(e, t instanceof Error ? t.message : "send failed");
        }
    }
}
let D = {
        build_error: { location: "build", code: d.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: d.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: d.xA.AGENT_ERROR },
    },
    L = {
        web: { location: "runtime_frame", code: d.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: d.xA.RUNTIME_WORKER_ERROR },
    },
    j = new Map();
async function x(e, t, n) {
    let r,
        i = Date.now();
    console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe });
    try {
        r = await u.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await _(e, n.id)),
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
async function J(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let i = await u.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await _(e, n.id)) != null),
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
async function W(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await en(e);
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
                            "open" !== I.get(t))
                    )
                        return void n.pendingEvents.push(r);
                    if ("history_page" === r.type) {
                        let e = ee.get(t);
                        if ((null != e && r.requested !== e) || (ee.delete(t), !0 === r.failed)) return;
                        o.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (r.messages ?? []).slice(),
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        }),
                            et(t);
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
                            ee.delete(t),
                            (l = t),
                            et(l);
                        let s = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), R(t, "open"), s)) e(t, n, r);
                        let a = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != a))
                            try {
                                n.ws.sendModelSettings(a);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        M(t, n);
                    } else if ("chat_state" === r.type)
                        o.h.dispatch({ type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId: t, stopped: r.stopped }),
                            r.stopped || "open" !== I.get(t) || M(t, n);
                    else if ("user_message" === r.type) {
                        let e, n, i;
                        (n = (e = null != r.nonce && $.has(r.nonce)) && null != r.nonce ? $.get(r.nonce) : void 0),
                            (i = e && (null == n || null == r.user_id || n === r.user_id)) &&
                                null != r.nonce &&
                                $.delete(r.nonce),
                            o.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(i && null != r.nonce ? { optimisticId: H(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            });
                    } else if ("message_disposition" === r.type)
                        (i = r.disposition),
                            Object.prototype.hasOwnProperty.call(B, i) &&
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
                                : G(t, m.intl.string(T.default.Z8Eo8I), C);
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
                                : G(t, m.intl.string(T.default.IHCafX), C);
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
                            let e = r.name;
                            null != e &&
                                "" !== e &&
                                (0, c.oB)(t, e).catch((e) => {
                                    console.error("[vibegrations] rename from agent failed", t, e);
                                });
                        } else if ("publish_result" === r.kind) {
                            let e = n.pendingPublish;
                            (n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(r)),
                                !0 !== r.ok && (0, c.Is)(t, r.error ?? "publish_result not ok", !1);
                        } else if ("app_icon_set" === r.kind) {
                            let e = r.icon;
                            if (null != e && "" !== e) {
                                let i = r.attachment_id;
                                function p(e) {
                                    null != i && "" !== i && n.ws.sendAppIconAck(i, e);
                                }
                                (0, c.Ru)(t, e)
                                    .then((e) => {
                                        e.ok || console.error("[vibegrations] icon from agent rejected", t, e.status),
                                            p(e.ok ? "applied" : "failed");
                                    })
                                    .catch((e) => {
                                        console.error("[vibegrations] icon from agent failed", t, e), p("failed");
                                    });
                            }
                        } else
                            "turn_result" === r.kind
                                ? ((0, d.Xv)(t, r),
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
                                  v.delete(t) &&
                                      "cancelled" === r.result &&
                                      o.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t }))
                                : (o.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      step: r,
                                  }),
                                  ("build_error" === r.kind || "healthcheck_failed" === r.kind || "error" === r.kind) &&
                                      (0, d.Z0)(t, {
                                          ...D[r.kind],
                                          message: r.message,
                                          details: "build_error" === r.kind ? r.stderr_tail : void 0,
                                      }),
                                  "preview_ready" === r.kind &&
                                      (0, c.tZ)(t, { isPreview: !0 }).catch((e) => {
                                          console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                      }));
                    else if ("capture_preview" === r.type) x(t, n, r).catch(() => {});
                    else if ("control_preview" === r.type) J(t, n, r).catch(() => {});
                    else if ("control_claim" === r.type || "capture_claim" === r.type) {
                        let e;
                        (s = r.id),
                            (a = "capture_claim" === r.type ? r.upload_token : void 0),
                            (e = f.get(s)),
                            null != e && (f.delete(s), clearTimeout(e.timer), e.resolve({ uploadToken: a }));
                    } else
                        "preview_operation" === r.type
                            ? "begin" === r.phase
                                ? u.A.beginPreviewOperation(t)
                                : u.A.endPreviewOperation(t)
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
                                      let n = null != t.source ? L[t.source] : void 0;
                                      if (null == n) return;
                                      let r = j.get(e);
                                      null == r && ((r = new Set()), j.set(e, r));
                                      let i = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                      r.has(i) ||
                                          r.size >= 10 ||
                                          (r.add(i),
                                          (0, d.Z0)(e, {
                                              location: n.location,
                                              code: n.code,
                                              message: t.message,
                                              details: t.source,
                                          }));
                                  })(t, r));
                })(e, t, n),
            onClose: () => {
                (A(t, "Connection closed before the publish result arrived"), g(e), t.disposed)
                    ? R(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), R(e, "connecting"), t.backoff.fail(() => q(e)))
                      : (R(e, "closed"),
                        V(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        R(e, "failed"),
            V(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            A(t, "Connection failed before the publish result arrived"),
            (0, d.Z0)(e, {
                location: "connection",
                code: d.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function q(e) {
    let t = k.get(e);
    null == t &&
        ((t = {
            ws: new p(),
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
        R(e, "connecting"),
        W(e, n);
}
function F(e) {
    var t;
    let n = k.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        A(n, "Connection closed before the publish result arrived"),
        n.ws.close(),
        k.delete(e),
        (t = e),
        ee.delete(t),
        u.A.releasePreviewControl(e),
        g(e),
        R(e, "closed"),
        !0)
    );
}
function X(e) {
    let t = k.get(e);
    if (null == t) return void q(e);
    let n = I.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || q(e);
}
function Z(e, t, n) {
    let r = t.trim(),
        i = null != n && n.length > 0 ? n : void 0;
    if ("" === r && null == i) return;
    let s = { content: r, nonce: (0, a.m)(), attachments: i },
        o = k.get(e);
    if (null != o && ("connecting" === I.get(e) || o.reconnectPending)) return void o.pendingSends.push(s);
    U(e, s);
    try {
        if (null == o) throw Error("Not connected");
        o.ws.sendUserMessage(
            s.content,
            s.nonce,
            s.attachments?.map((e) => e.id),
            w.A.getProject(e)?.name,
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), G(e, t instanceof Error ? t.message : "send failed");
    }
}
function K(e) {
    let t = k.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), S.Ay.isThinking(e) && v.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function z(e) {
    return new Promise((t, n) => {
        let r = k.get(e);
        if (null == r) return void n(Error("Not connected"));
        if (null != r.pendingPublish) return void n(Error("Publish already in flight"));
        let i = setTimeout(() => {
            A(r, "Publish timed out");
        }, 12e4);
        r.pendingPublish = { resolve: t, reject: n, timeout: i };
        try {
            r.ws.sendPublish();
        } catch (e) {
            (r.pendingPublish = null), clearTimeout(i), n(e instanceof Error ? e : Error("publish send failed"));
        }
    }).catch((t) => {
        throw ((0, c.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
    });
}
function Y(e, t) {
    let n = k.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function Q(e, t) {
    let n = k.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let ee = new Map();
function et(e) {
    let t = (0, S.bi)(e);
    if (null == t) return !1;
    if (ee.get(e) === t) return !0;
    let n = k.get(e);
    return null != n && (ee.set(e, t), n.ws.sendLoadHistory(t), !0);
}
async function en(e) {
    let { body: t } = await s.Bo.post({ url: E.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, h.C)() ?? t.url };
}
let er = new Map(),
    ei = new Map();
function es(e) {
    let t = er.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = ei.get(e);
    if (null != n) return n;
    let r = en(e)
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
            return null != n && er.set(e, { ticket: t, expiresAt: n - 3e4 }), t;
        })
        .finally(() => {
            ei.delete(e);
        });
    return ei.set(e, r), r;
}
async function eo(e) {
    let { ticket: t, baseUrl: n } = await en(e),
        r = new URLSearchParams({ ticket: t }),
        i = await fetch(`${n}/agent/source-history?${r}`);
    if (!i.ok) throw Error(`version history failed (${i.status})`);
    let s = await i.json();
    return Array.isArray(s.entries) ? s.entries : [];
}
async function ea(e, t) {
    let { ticket: n, baseUrl: r } = await en(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${i}`, { method: "POST" });
    if (!s.ok) {
        let e = (await s.text()).trim();
        throw Error(`version restore failed (${s.status})${"" === e ? "" : `: ${e}`}`);
    }
    let o = await s.json();
    if (null == o.entry) throw Error("version restore returned no commit");
    return (
        (0, c.tZ)(e, { isPreview: !0 }).catch((t) => {
            console.error("[vibegrations] post-version-restore refresh failed", e, t);
        }),
        o.entry
    );
}
async function el(e) {
    let { body: t } = await s.Bo.post({ url: E.Rsh.VIBEGRATIONS_PROJECT_REMIX_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, h.C)() ?? t.url };
}
function ec(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function ed(e, t) {
    return eu(e, t, t.name, t.type);
}
async function eu(e, t, n, r) {
    let { ticket: i, baseUrl: s } = await en(e),
        o = new URLSearchParams({ ticket: i, name: n }),
        a = await fetch(`${ec(s)}?${o}`, {
            method: "POST",
            headers: { "content-type": "" !== r ? r : "application/octet-stream" },
            body: t,
        });
    if (!a.ok) throw Error(`attachment upload failed (${a.status})`);
    return await a.json();
}
class ep extends Error {
    status;
    constructor(e) {
        super(`export failed (${e})`), (this.status = e);
    }
}
async function eh(e, t) {
    let { ticket: n, baseUrl: r } = await en(e),
        i = new URLSearchParams({ ticket: n, name: t }),
        s = await fetch(`${r}/agent/export?${i}`);
    if (!s.ok) throw new ep(s.status);
    return await s.blob();
}
class ef extends Error {
    status;
    constructor(e) {
        super(`remix failed (${e})`), (this.status = e);
    }
}
async function e_(e, t) {
    let [n, r] = await Promise.all([el(e), en(t)]),
        i = new URLSearchParams({ ticket: n.ticket }),
        s = await fetch(`${n.baseUrl}/agent/fork?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!s.ok) throw new ef(s.status);
}
async function eg(e, t) {
    let { ticket: n, baseUrl: r } = await en(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/secrets?${i}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!s.ok) throw Error(`secret submission failed (${s.status})`);
}
async function ey(e, t) {
    let { ticket: n, baseUrl: r } = await en(e),
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
function eS(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await en(e),
            r = new URLSearchParams({ ticket: t }),
            i = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        i.ok || console.warn("[vibegrations] settings rebuild request failed", e, i.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
async function ew(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await en(e),
        i = new URLSearchParams({ ticket: n });
    t && i.set("regenerate", "1");
    let s = await fetch(`${r}/agent/mcp-token?${i}`, { method: "POST" });
    if (!s.ok) throw Error(`mcp token failed (${s.status})`);
    let o = await s.json();
    return { url: o.url, token: o.token, expiresAt: o.expires_at };
}
async function eE(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: i } = await en(e);
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
            e = (0, y.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, y.ls)(n.status, e) };
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
async function eT(e, t) {
    let { ticket: n, baseUrl: r } = await en(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${ec(r, t)}?${i}`, { method: "DELETE", keepalive: !0 });
    if (!s.ok) throw Error(`attachment cleanup failed (${s.status})`);
}
async function em(e, t) {
    let { ticket: n, baseUrl: r } = await es(e),
        i = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${i}`;
}
async function eA(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: i } = await es(e),
        s = new URLSearchParams({ ticket: r });
    return n && s.set("download", "1"), `${ec(i, t)}?${s}`;
}
async function ek(e, t) {
    async function n() {
        return fetch(await eA(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (er.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eI(e) {
    F(e);
}
class eb extends i.Ay.Store {
    initialize() {
        this.waitFor(l.default, S.Ay, w.A);
    }
    getConnState(e) {
        return I.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return b.get(e) ?? !1;
    }
    getModelSettings(e) {
        return N.get(e) ?? null;
    }
    getSettings(e) {
        return P.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return P.get(e)?.connections ?? ev;
    }
}
let ev = [],
    eN = new eb(o.h, {
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (I.get(t) === n) return !1;
            I.set(t, n), ("closed" === n || "failed" === n) && v.delete(t);
        },
        VIBEGRATIONS_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((b.get(t) ?? !1) === n) return !1;
            b.set(t, n);
        },
        VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, choices: r } = e;
            N.set(t, { settings: n, choices: r });
        },
        VIBEGRATIONS_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            P.set(t, n);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!F(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(k.keys())) null == w.A.getProject(e) && F(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === k.size) return !1;
            for (let e of Array.from(k.keys())) F(e);
            b.clear(), $.clear(), er.clear();
        },
    }),
    eP = 221552 == n.j ? eN : null;
