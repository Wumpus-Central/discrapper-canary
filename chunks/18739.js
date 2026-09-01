n.d(t, {
    r2: () => Y,
    $S: () => ey,
    _v: () => eh,
    n6: () => ek,
    ss: () => eE,
    fu: () => K,
    cS: () => ef,
    R7: () => Q,
    Ay: () => eO,
    aF: () => eA,
    Xk: () => e_,
    JI: () => ew,
    Vm: () => em,
    oX: () => eg,
    dv: () => Z,
    TV: () => z,
    vX: () => eu,
    Hc: () => X,
    ST: () => ea,
    PK: () => eI,
    Bn: () => eb,
    y_: () => eT,
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
    s = n(17928),
    i = n(636537),
    o = n(228366),
    a = n(195880),
    l = n(287809),
    c = n(948230),
    d = n(927899),
    u = n(105810);
class p {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: r, onClose: s, onError: i } = e;
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
                this.socket === a && i?.(e);
            }),
            a.addEventListener("close", () => {
                this.socket === a && s?.();
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
    sendDebugStatusRequest() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "debug_status_request" }));
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
    E = n(972786),
    T = n(652215),
    w = n(295813),
    m = n(375708);
function A(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let I = new Map(),
    k = new Map(),
    b = new Map(),
    N = new Set(),
    R = new Map(),
    v = new Map();
function O(e, t) {
    o.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let P = { location: "connection", code: d.xA.SEND_FAILED },
    C = { location: "agent", code: d.xA.AGENT_ERROR };
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P;
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
let U = new Map();
function B(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    U.set(r, l.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: H(r),
            userId: l.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        });
}
let $ = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function V(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) B(e, s), G(e, n);
}
function D(e, t) {
    if (!0 === b.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        B(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
                E.A.getProject(e)?.name,
            );
        } catch (t) {
            console.error("[vibegrations] queued send failed", t), G(e, t instanceof Error ? t.message : "send failed");
        }
    }
}
let M = {
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
        s = Date.now();
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
        ms: Date.now() - s,
    }),
        t.ws.sendCaptureAck(n.id, r.status, r.code, r.message);
}
async function q(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let s = await u.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await _(e, n.id)) != null),
        );
        console.debug("[vibegrations] control relay answered", { id: n.id, status: s.status, ms: Date.now() - r }),
            "completed" === s.status
                ? t.ws.sendControlAck(n.id, "completed", s.response)
                : "failed" === s.status
                  ? t.ws.sendControlAck(n.id, "failed", void 0, s.message)
                  : t.ws.sendControlAck(n.id, "unavailable");
    } catch (e) {
        console.error("[vibegrations] preview control relay failed", e),
            t.ws.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame");
    }
}
async function W(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await er(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    var s, i, a, l;
                    if (
                        (console.debug("[vibegrations] ws event", r.type),
                        "hello" !== r.type &&
                            "history" !== r.type &&
                            "capture_preview" !== r.type &&
                            "control_preview" !== r.type &&
                            "control_claim" !== r.type &&
                            "capture_claim" !== r.type &&
                            "preview_operation" !== r.type &&
                            "open" !== k.get(t))
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
                        let s = (r.messages ?? []).slice();
                        o.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: s,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        }),
                            et.delete(t),
                            (l = t),
                            en(l);
                        let i = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), O(t, "open"), i)) e(t, n, r);
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
                            r.stopped || "open" !== k.get(t) || D(t, n);
                    else if ("user_message" === r.type) {
                        let e, n, s;
                        (n = (e = null != r.nonce && U.has(r.nonce)) && null != r.nonce ? U.get(r.nonce) : void 0),
                            (s = e && (null == n || null == r.user_id || n === r.user_id)) &&
                                null != r.nonce &&
                                U.delete(r.nonce),
                            o.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(s && null != r.nonce ? { optimisticId: H(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            });
                    } else if ("message_disposition" === r.type)
                        (s = r.disposition),
                            Object.prototype.hasOwnProperty.call($, s) &&
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
                                : G(t, m.intl.string(w.default.Z8Eo8I), C);
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
                            let { phase: e, session: n, seq: s, ticks: i, elapsed_ms: a, text: l } = r;
                            null != e &&
                                null != s &&
                                null != n &&
                                o.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_THINKING_SET",
                                    projectId: t,
                                    activity: {
                                        phase: e,
                                        session: n,
                                        seq: s,
                                        ticks: i ?? 0,
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
                                : G(t, m.intl.string(w.default.IHCafX), C);
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
                                let s = r.attachment_id;
                                function p(e) {
                                    null != s && "" !== s && n.ws.sendAppIconAck(s, e);
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
                                  N.delete(t) &&
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
                                          ...M[r.kind],
                                          message: r.message,
                                          details: "build_error" === r.kind ? r.stderr_tail : void 0,
                                      }),
                                  "preview_ready" === r.kind &&
                                      (0, c.tZ)(t, { isPreview: !0 }).catch((e) => {
                                          console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                      }));
                    else if ("capture_preview" === r.type) x(t, n, r).catch(() => {});
                    else if ("control_preview" === r.type) q(t, n, r).catch(() => {});
                    else if ("control_claim" === r.type || "capture_claim" === r.type) {
                        let e;
                        (i = r.id),
                            (a = "capture_claim" === r.type ? r.upload_token : void 0),
                            (e = f.get(i)),
                            null != e && (f.delete(i), clearTimeout(e.timer), e.resolve({ uploadToken: a }));
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
                              : "debug_status" === r.type
                                ? o.h.dispatch({
                                      type: "VIBEGRATIONS_DEBUG_STATUS_SET",
                                      projectId: t,
                                      status: r.status ?? null,
                                      failed: !0 === r.failed || null == r.status,
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
                                  : "debug_history_state" === r.type
                                    ? o.h.dispatch({
                                          type: "VIBEGRATIONS_HISTORY_LOAD_SETTLE",
                                          projectId: t,
                                          scope: r.scope,
                                          status: r.status,
                                          count: r.count,
                                          truncated: !0 === r.truncated,
                                      })
                                    : (o.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: r }),
                                      (function (e, t) {
                                          if (!0 === t.historical || "error" !== t.level) return;
                                          let n = null != t.source ? L[t.source] : void 0;
                                          if (null == n) return;
                                          let r = j.get(e);
                                          null == r && ((r = new Set()), j.set(e, r));
                                          let s = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                          r.has(s) ||
                                              r.size >= 10 ||
                                              (r.add(s),
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
                    ? O(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), O(e, "connecting"), t.backoff.fail(() => J(e)))
                      : (O(e, "closed"),
                        V(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        O(e, "failed"),
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
function J(e) {
    let t = I.get(e);
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
        I.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        O(e, "connecting"),
        W(e, n);
}
function F(e) {
    var t;
    let n = I.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        A(n, "Connection closed before the publish result arrived"),
        n.ws.close(),
        I.delete(e),
        (t = e),
        et.delete(t),
        u.A.releasePreviewControl(e),
        g(e),
        O(e, "closed"),
        !0)
    );
}
function X(e) {
    let t = I.get(e);
    if (null == t) return void J(e);
    let n = k.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || J(e);
}
function Z(e, t, n) {
    let r = t.trim(),
        s = null != n && n.length > 0 ? n : void 0;
    if ("" === r && null == s) return;
    let i = { content: r, nonce: (0, a.m)(), attachments: s },
        o = I.get(e);
    if (null != o && ("connecting" === k.get(e) || o.reconnectPending)) return void o.pendingSends.push(i);
    B(e, i);
    try {
        if (null == o) throw Error("Not connected");
        o.ws.sendUserMessage(
            i.content,
            i.nonce,
            i.attachments?.map((e) => e.id),
            E.A.getProject(e)?.name,
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), G(e, t instanceof Error ? t.message : "send failed");
    }
}
function K(e) {
    let t = I.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), S.Ay.isThinking(e) && N.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function z(e) {
    return new Promise((t, n) => {
        let r = I.get(e);
        if (null == r) return void n(Error("Not connected"));
        if (null != r.pendingPublish) return void n(Error("Publish already in flight"));
        let s = setTimeout(() => {
            A(r, "Publish timed out");
        }, 12e4);
        r.pendingPublish = { resolve: t, reject: n, timeout: s };
        try {
            r.ws.sendPublish();
        } catch (e) {
            (r.pendingPublish = null), clearTimeout(s), n(e instanceof Error ? e : Error("publish send failed"));
        }
    }).catch((t) => {
        throw ((0, c.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
    });
}
function Y(e, t) {
    let n = I.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function Q(e) {
    o.h.dispatch({ type: "VIBEGRATIONS_DEBUG_STATUS_REQUESTED", projectId: e });
    let t = I.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendDebugStatusRequest();
    } catch (t) {
        console.error("[vibegrations] debug status request failed", t),
            o.h.dispatch({ type: "VIBEGRATIONS_DEBUG_STATUS_SET", projectId: e, status: null, failed: !0 });
    }
}
function ee(e, t) {
    let n = I.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let et = new Map();
function en(e) {
    let t = (0, S.bi)(e);
    if (null == t) return !1;
    if (et.get(e) === t) return !0;
    let n = I.get(e);
    return null != n && (et.set(e, t), n.ws.sendLoadHistory(t), !0);
}
async function er(e) {
    let { body: t } = await i.Bo.post({ url: T.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, h.C)() ?? t.url };
}
let es = new Map(),
    ei = new Map();
function eo(e) {
    let t = es.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = ei.get(e);
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
            return null != n && es.set(e, { ticket: t, expiresAt: n - 3e4 }), t;
        })
        .finally(() => {
            ei.delete(e);
        });
    return ei.set(e, r), r;
}
async function ea(e) {
    let { ticket: t, baseUrl: n } = await er(e),
        r = new URLSearchParams({ ticket: t }),
        s = await fetch(`${n}/agent/source-history?${r}`);
    if (!s.ok) throw Error(`version history failed (${s.status})`);
    let i = await s.json();
    return Array.isArray(i.entries) ? i.entries : [];
}
async function el(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${s}`, { method: "POST" });
    if (!i.ok) {
        let e = (await i.text()).trim();
        throw Error(`version restore failed (${i.status})${"" === e ? "" : `: ${e}`}`);
    }
    let o = await i.json();
    if (null == o.entry) throw Error("version restore returned no commit");
    return (
        (0, c.tZ)(e, { isPreview: !0 }).catch((t) => {
            console.error("[vibegrations] post-version-restore refresh failed", e, t);
        }),
        o.entry
    );
}
async function ec(e) {
    let { body: t } = await i.Bo.post({ url: T.Rsh.VIBEGRATIONS_PROJECT_REMIX_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, h.C)() ?? t.url };
}
function ed(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function eu(e, t) {
    return ep(e, t, t.name, t.type);
}
async function ep(e, t, n, r) {
    let { ticket: s, baseUrl: i } = await er(e),
        o = new URLSearchParams({ ticket: s, name: n }),
        a = await fetch(`${ed(i)}?${o}`, {
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
        s = new URLSearchParams({ ticket: n, name: t }),
        i = await fetch(`${r}/agent/export?${s}`);
    if (!i.ok) throw new eh(i.status);
    return await i.blob();
}
class e_ extends Error {
    status;
    constructor(e) {
        super(`remix failed (${e})`), (this.status = e);
    }
}
async function eg(e, t) {
    let [n, r] = await Promise.all([ec(e), er(t)]),
        s = new URLSearchParams({ ticket: n.ticket }),
        i = await fetch(`${n.baseUrl}/agent/fork?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!i.ok) throw new e_(i.status);
}
async function ey(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/secrets?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`secret submission failed (${i.status})`);
}
async function eS(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/settings?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`settings submission failed (${i.status})`);
    let o = await i.json().catch(() => null);
    return { rebuildRequired: o?.rebuild_required === !0 };
}
function eE(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await er(e),
            r = new URLSearchParams({ ticket: t }),
            s = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        s.ok || console.warn("[vibegrations] settings rebuild request failed", e, s.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
async function eT(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await er(e),
        s = new URLSearchParams({ ticket: n });
    t && s.set("regenerate", "1");
    let i = await fetch(`${r}/agent/mcp-token?${s}`, { method: "POST" });
    if (!i.ok) throw Error(`mcp token failed (${i.status})`);
    let o = await i.json();
    return { url: o.url, token: o.token, expiresAt: o.expires_at };
}
async function ew(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: s } = await er(e);
        n = await fetch(`${s}/agent/external-auth/authorize-url?${new URLSearchParams({ ticket: r })}`, {
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
async function em(e, t) {
    let { ticket: n, baseUrl: r } = await er(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${ed(r, t)}?${s}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
async function eA(e, t) {
    let { ticket: n, baseUrl: r } = await eo(e),
        s = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${s}`;
}
async function eI(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: s } = await eo(e),
        i = new URLSearchParams({ ticket: r });
    return n && i.set("download", "1"), `${ed(s, t)}?${i}`;
}
async function ek(e, t) {
    async function n() {
        return fetch(await eI(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (es.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eb(e) {
    F(e);
}
class eN extends s.Ay.Store {
    initialize() {
        this.waitFor(l.default, S.Ay, E.A);
    }
    getConnState(e) {
        return k.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return b.get(e) ?? !1;
    }
    getModelSettings(e) {
        return R.get(e) ?? null;
    }
    getSettings(e) {
        return v.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return v.get(e)?.connections ?? eR;
    }
}
let eR = [],
    ev = new eN(o.h, {
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (k.get(t) === n) return !1;
            k.set(t, n), ("closed" === n || "failed" === n) && N.delete(t);
        },
        VIBEGRATIONS_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((b.get(t) ?? !1) === n) return !1;
            b.set(t, n);
        },
        VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, choices: r } = e;
            R.set(t, { settings: n, choices: r });
        },
        VIBEGRATIONS_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            v.set(t, n);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!F(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(I.keys())) null == E.A.getProject(e) && F(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === I.size) return !1;
            for (let e of Array.from(I.keys())) F(e);
            b.clear(), U.clear(), es.clear();
        },
    }),
    eO = 221552 == n.j ? ev : null;
