n.d(t, {
    r2: () => Q,
    $S: () => eg,
    _v: () => ep,
    n6: () => eA,
    ss: () => eS,
    fu: () => K,
    cS: () => eh,
    R7: () => ee,
    aF: () => ew,
    Ay: () => eP,
    $C: () => Y,
    Xk: () => ef,
    JI: () => eT,
    Vm: () => em,
    oX: () => e_,
    dv: () => Z,
    TV: () => z,
    vX: () => ed,
    Hc: () => X,
    ST: () => ea,
    PK: () => ek,
    Bn: () => eI,
    y_: () => eE,
    XZ: () => et,
    nU: () => ey,
    oB: () => el,
}),
    n(321073),
    n(508300),
    n(323874),
    n(14289),
    n(35956);
var r = n(158390),
    s = n(17928),
    i = n(228366),
    o = n(195880),
    a = n(287809),
    l = n(948230),
    c = n(927899),
    d = n(692200);
class u {
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
    sendUpstreamTicketAck(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "upstream_ticket_ack", id: e, ticket: t, error: n }));
    }
    sendInterrupt() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "interrupt" }));
    }
    sendPublish() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "publish" }));
    }
    sendDraftPatchNotes(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "draft_patch_notes", nonce: e }));
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
var p = n(977129);
let h = new Map();
function f(e, t) {
    let n = h.get(t);
    return (
        null != n && (clearTimeout(n.timer), n.resolve(null)),
        new Promise((n) => {
            let r = setTimeout(() => {
                h.delete(t), n(null);
            }, 5e3);
            h.set(t, { resolve: n, timer: r, projectId: e });
        })
    );
}
function _(e) {
    for (let [t, n] of [...h]) n.projectId === e && (h.delete(t), clearTimeout(n.timer), n.resolve(null));
}
var g = n(557875),
    y = n(783791),
    S = n(972786),
    E = n(759967),
    T = n(375708);
function m(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
function w(e, t) {
    let n = e.pendingPatchNotesDraft;
    null != n && ((e.pendingPatchNotesDraft = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let k = new Map(),
    A = new Map(),
    I = new Map(),
    b = new Set(),
    N = new Map(),
    O = new Map();
function P(e, t) {
    i.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let R = { location: "connection", code: c.xA.SEND_FAILED },
    v = { location: "agent", code: c.xA.AGENT_ERROR };
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : R;
    i.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, c.Z0)(e, { ...n, message: t });
}
function G(e) {
    return `optimistic:${e}`;
}
let D = new Map();
function B(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    D.set(r, a.default.getCurrentUser()?.id),
        i.h.dispatch({
            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: G(r),
            userId: a.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        });
}
let U = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function H(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) B(e, s), C(e, n);
}
function V(e, t) {
    if (!0 === I.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        B(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
                S.Ay.getProject(e)?.name,
            );
        } catch (t) {
            console.error("[vibegrations] queued send failed", t), C(e, t instanceof Error ? t.message : "send failed");
        }
    }
}
async function $(e, t, n) {
    try {
        let { ticket: r } = await (0, p.g)(n);
        e.ws.sendUpstreamTicketAck(t, r);
    } catch (r) {
        let n = r?.status;
        e.ws.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
let L = {
        build_error: { location: "build", code: c.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: c.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: c.xA.AGENT_ERROR },
    },
    M = {
        web: { location: "runtime_frame", code: c.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: c.xA.RUNTIME_WORKER_ERROR },
    },
    j = new Map();
async function W(e, t, n) {
    let r,
        s = Date.now();
    console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe });
    try {
        r = await d.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await f(e, n.id)),
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
        let s = await d.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await f(e, n.id)) != null),
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
async function x(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await (0, p.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    var s, o, a, u;
                    if (
                        (console.debug("[vibegrations] ws event", r.type),
                        "hello" !== r.type &&
                            "history" !== r.type &&
                            "capture_preview" !== r.type &&
                            "control_preview" !== r.type &&
                            "control_claim" !== r.type &&
                            "capture_claim" !== r.type &&
                            "preview_operation" !== r.type &&
                            "request_upstream_ticket" !== r.type &&
                            "open" !== A.get(t))
                    )
                        return void n.pendingEvents.push(r);
                    if ("history_page" === r.type) {
                        let e = en.get(t);
                        if ((null != e && r.requested !== e) || (en.delete(t), !0 === r.failed)) return;
                        i.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (r.messages ?? []).slice(),
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        }),
                            er(t);
                        return;
                    }
                    if ("hello" === r.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === r.type) {
                        let s = (r.messages ?? []).slice();
                        i.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: s,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        }),
                            en.delete(t),
                            (u = t),
                            er(u);
                        let o = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), P(t, "open"), o)) e(t, n, r);
                        let a = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != a))
                            try {
                                n.ws.sendModelSettings(a);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        V(t, n);
                    } else if ("chat_state" === r.type)
                        i.h.dispatch({ type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId: t, stopped: r.stopped }),
                            r.stopped || "open" !== A.get(t) || V(t, n);
                    else if ("user_message" === r.type) {
                        let e, n, s;
                        (n = (e = null != r.nonce && D.has(r.nonce)) && null != r.nonce ? D.get(r.nonce) : void 0),
                            (s = e && (null == n || null == r.user_id || n === r.user_id)) &&
                                null != r.nonce &&
                                D.delete(r.nonce),
                            i.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(s && null != r.nonce ? { optimisticId: G(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            });
                    } else if ("message_disposition" === r.type)
                        (s = r.disposition),
                            Object.prototype.hasOwnProperty.call(U, s) &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: r.id,
                                    activeTurnId: r.active_turn_id,
                                    disposition: r.disposition,
                                });
                    else if ("side_reply" === r.type)
                        i.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: r.id,
                            inReplyTo: r.in_reply_to,
                            content: r.content,
                            timestamp: r.ts,
                        });
                    else if ("provisional_todo" === r.type)
                        i.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: r.turn_id,
                            text: r.text,
                        });
                    else if ("step" === r.type)
                        if ("reply" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e
                                ? i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : C(t, T.intl.string(E.default.Z8Eo8I), v);
                        } else if ("announcement" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e &&
                                (i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { announcement: e },
                                }),
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("thinking_lifecycle" === r.kind) {
                            let { phase: e, session: n, seq: s, ticks: o, elapsed_ms: a, text: l } = r;
                            null != e &&
                                null != s &&
                                null != n &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_THINKING_SET",
                                    projectId: t,
                                    activity: {
                                        phase: e,
                                        session: n,
                                        seq: s,
                                        ticks: o ?? 0,
                                        elapsedMs: a ?? 0,
                                        text: l ?? "",
                                    },
                                });
                        } else if ("compaction" === r.kind)
                            ("start" === r.phase || "end" === r.phase) &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === r.phase,
                                });
                        else if ("debug_compaction_declined" === r.kind)
                            null != r.projected &&
                                null != r.threshold &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_DEBUG_COMPACTION_DECLINED",
                                    projectId: t,
                                    promptCeiling: r.prompt_ceiling ?? 0,
                                    threshold: r.threshold,
                                    projected: r.projected,
                                    headroom: r.headroom ?? r.threshold - r.projected,
                                    retainedMessages: r.retained_messages ?? 0,
                                    observedAt: new Date().toISOString(),
                                });
                        else if ("debug_compaction_report" === r.kind)
                            null != r.tokens_before &&
                                null != r.tokens_after &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_DEBUG_COMPACTION_REPORT",
                                    projectId: t,
                                    tokensBefore: r.tokens_before,
                                    tokensAfter: r.tokens_after,
                                    retainedMessages: r.retained_messages ?? 0,
                                    promptCeiling: r.prompt_ceiling ?? 0,
                                    observedAt: new Date().toISOString(),
                                });
                        else if ("todos" === r.kind) {
                            let e = r.items ?? [];
                            e.length > 0 &&
                                (i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { todos: e },
                                }),
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("plan_proposed" === r.kind)
                            null != r.proposal
                                ? i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { proposal: r.proposal, kind: "proposal" },
                                  })
                                : C(t, T.intl.string(E.default.IHCafX), v);
                        else if ("ideas" === r.kind)
                            null != r.ideas &&
                                r.ideas.length > 0 &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { ideas: r.ideas },
                                });
                        else if ("clarification" === r.kind)
                            null != r.clarification &&
                                (r.clarification.questions?.length ?? 0) > 0 &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { clarification: r.clarification },
                                });
                        else if ("attachment" === r.kind)
                            null != r.attachments &&
                                r.attachments.length > 0 &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { attachments: r.attachments },
                                });
                        else if ("collect_secrets" === r.kind) {
                            let e = r.fields ?? [];
                            e.length > 0 &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { secretRequest: { fields: e, note: r.note, copy_values: r.copy_values } },
                                });
                        } else if ("collect_settings" === r.kind)
                            i.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: r.turn_id,
                                patch: { settingsRequest: { keys: r.keys, note: r.note } },
                            });
                        else if ("usage" === r.kind)
                            null != r.turn &&
                                null != r.project &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: r.turn,
                                    project: r.project,
                                });
                        else if ("project_named" === r.kind) {
                            let e = r.name;
                            null != e &&
                                "" !== e &&
                                (0, l.oB)(t, e).catch((e) => {
                                    console.error("[vibegrations] rename from agent failed", t, e);
                                });
                        } else if ("publish_result" === r.kind) {
                            let e = n.pendingPublish;
                            (n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(r)),
                                !0 !== r.ok && (0, l.Is)(t, r.error ?? "publish_result not ok", !1);
                        } else if ("patch_notes_draft" === r.kind) {
                            let e = n.pendingPatchNotesDraft;
                            null != e &&
                                e.nonce === r.nonce &&
                                ((n.pendingPatchNotesDraft = null), clearTimeout(e.timeout), e.resolve(r));
                        } else if ("app_icon_set" === r.kind) {
                            let e = r.icon;
                            if (null != e && "" !== e) {
                                let s = r.attachment_id;
                                function p(e) {
                                    null != s && "" !== s && n.ws.sendAppIconAck(s, e);
                                }
                                (0, l.Ru)(t, e)
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
                                ? ((0, c.Xv)(t, r),
                                  "deployed" === r.result &&
                                      i.h.dispatch({
                                          type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                          projectId: t,
                                          turnId: r.turn_id,
                                          patch: { kind: "plan_implemented" },
                                      }),
                                  i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      summary: r.summary,
                                  }),
                                  b.delete(t) &&
                                      "cancelled" === r.result &&
                                      i.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t }))
                                : (i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      step: r,
                                  }),
                                  ("build_error" === r.kind || "healthcheck_failed" === r.kind || "error" === r.kind) &&
                                      (0, c.Z0)(t, {
                                          ...L[r.kind],
                                          message: r.message,
                                          details: "build_error" === r.kind ? r.stderr_tail : void 0,
                                      }),
                                  "preview_ready" === r.kind &&
                                      (0, l.tZ)(t, { isPreview: !0 }).catch((e) => {
                                          console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                      }));
                    else if ("capture_preview" === r.type) W(t, n, r).catch(() => {});
                    else if ("control_preview" === r.type) q(t, n, r).catch(() => {});
                    else if ("control_claim" === r.type || "capture_claim" === r.type) {
                        let e;
                        (o = r.id),
                            (a = "capture_claim" === r.type ? r.upload_token : void 0),
                            (e = h.get(o)),
                            null != e && (h.delete(o), clearTimeout(e.timer), e.resolve({ uploadToken: a }));
                    } else
                        "preview_operation" === r.type
                            ? "begin" === r.phase
                                ? d.A.beginPreviewOperation(t)
                                : d.A.endPreviewOperation(t)
                            : "model_settings" === r.type
                              ? i.h.dispatch({
                                    type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                    projectId: t,
                                    settings: r.settings,
                                    choices: r.choices,
                                })
                              : "debug_status" === r.type
                                ? i.h.dispatch({
                                      type: "VIBEGRATIONS_DEBUG_STATUS_SET",
                                      projectId: t,
                                      status: r.status ?? null,
                                      failed: !0 === r.failed || null == r.status,
                                  })
                                : "settings" === r.type
                                  ? i.h.dispatch({
                                        type: "VIBEGRATIONS_SETTINGS_SET",
                                        projectId: t,
                                        settings: {
                                            schema: r.schema,
                                            values: r.values,
                                            secrets: r.secrets,
                                            connections: r.connections,
                                        },
                                    })
                                  : "debug_model_call" === r.type
                                    ? (i.h.dispatch({
                                          type: "VIBEGRATIONS_MODEL_CALL_APPEND",
                                          projectId: t,
                                          modelCall: r,
                                      }),
                                      "started" !== r.status &&
                                          i.h.dispatch({
                                              type: "VIBEGRATIONS_DEBUG_MODEL_CALL",
                                              projectId: t,
                                              id: r.id,
                                              role:
                                                  "compaction" === r.agent
                                                      ? "compaction"
                                                      : "subagent" === r.agent
                                                        ? "codegen"
                                                        : "orchestrator",
                                              model: r.model,
                                              stopReason:
                                                  "error" === r.status ? (r.stop_reason ?? "error") : r.stop_reason,
                                              durationMs: r.duration_ms,
                                              inputTokens: r.input_tokens ?? 0,
                                              outputTokens: r.output_tokens ?? 0,
                                              cacheReadTokens: r.cache_read_tokens ?? 0,
                                              cacheWriteTokens: r.cache_write_tokens ?? 0,
                                              observedAt: new Date().toISOString(),
                                          }))
                                    : "debug_tool_call" === r.type
                                      ? i.h.dispatch({
                                            type: "VIBEGRATIONS_TOOL_CALL_APPEND",
                                            projectId: t,
                                            toolCall: r,
                                        })
                                      : "request_upstream_ticket" === r.type
                                        ? $(n, r.id, r.project_id)
                                        : "debug_history_state" === r.type
                                          ? i.h.dispatch({
                                                type: "VIBEGRATIONS_HISTORY_LOAD_SETTLE",
                                                projectId: t,
                                                scope: r.scope,
                                                status: r.status,
                                                count: r.count,
                                                truncated: !0 === r.truncated,
                                            })
                                          : (i.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: r }),
                                            (function (e, t) {
                                                if (!0 === t.historical || "error" !== t.level) return;
                                                let n = null != t.source ? M[t.source] : void 0;
                                                if (null == n) return;
                                                let r = j.get(e);
                                                null == r && ((r = new Set()), j.set(e, r));
                                                let s = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                                r.has(s) ||
                                                    r.size >= 10 ||
                                                    (r.add(s),
                                                    (0, c.Z0)(e, {
                                                        location: n.location,
                                                        code: n.code,
                                                        message: t.message,
                                                        details: t.source,
                                                    }));
                                            })(t, r));
                })(e, t, n),
            onClose: () => {
                (m(t, "Connection closed before the publish result arrived"),
                w(t, "Connection closed before the draft arrived"),
                _(e),
                t.disposed)
                    ? P(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), P(e, "connecting"), t.backoff.fail(() => J(e)))
                      : (P(e, "closed"),
                        H(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        P(e, "failed"),
            H(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            m(t, "Connection failed before the publish result arrived"),
            w(t, "Connection failed before the draft arrived"),
            (0, c.Z0)(e, {
                location: "connection",
                code: c.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function J(e) {
    let t = k.get(e);
    null == t &&
        ((t = {
            ws: new u(),
            backoff: new r.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingPublish: null,
            pendingPatchNotesDraft: null,
        }),
        k.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        P(e, "connecting"),
        i.h.dispatch({ type: "VIBEGRATIONS_TRACE_REPLAY_STARTING", projectId: e }),
        x(e, n);
}
function F(e) {
    var t;
    let n = k.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        m(n, "Connection closed before the publish result arrived"),
        w(n, "Connection closed before the draft arrived"),
        n.ws.close(),
        k.delete(e),
        (t = e),
        en.delete(t),
        d.A.releasePreviewControl(e),
        _(e),
        P(e, "closed"),
        !0)
    );
}
function X(e) {
    let t = k.get(e);
    if (null == t) return void J(e);
    let n = A.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || J(e);
}
function Z(e, t, n) {
    let r = t.trim(),
        s = null != n && n.length > 0 ? n : void 0;
    if ("" === r && null == s) return;
    let i = { content: r, nonce: (0, o.m)(), attachments: s },
        a = k.get(e);
    if (null != a && ("connecting" === A.get(e) || a.reconnectPending)) return void a.pendingSends.push(i);
    B(e, i);
    try {
        if (null == a) throw Error("Not connected");
        a.ws.sendUserMessage(
            i.content,
            i.nonce,
            i.attachments?.map((e) => e.id),
            S.Ay.getProject(e)?.name,
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), C(e, t instanceof Error ? t.message : "send failed");
    }
}
function K(e) {
    let t = k.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), y.Ay.isThinking(e) && b.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function z(e) {
    return new Promise((t, n) => {
        let r = k.get(e);
        if (null == r) return void n(Error("Not connected"));
        if (null != r.pendingPublish) return void n(Error("Publish already in flight"));
        let s = setTimeout(() => {
            m(r, "Publish timed out");
        }, 12e4);
        r.pendingPublish = { resolve: t, reject: n, timeout: s };
        try {
            r.ws.sendPublish();
        } catch (e) {
            (r.pendingPublish = null), clearTimeout(s), n(e instanceof Error ? e : Error("publish send failed"));
        }
    }).catch((t) => {
        throw ((0, l.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
    });
}
function Y(e) {
    return new Promise((t, n) => {
        let r = k.get(e);
        if (null == r) return void n(Error("Not connected"));
        w(r, "Superseded by a newer draft request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => {
                w(r, "Draft timed out");
            }, 1e4);
        r.pendingPatchNotesDraft = { resolve: t, reject: n, timeout: i, nonce: s };
        try {
            r.ws.sendDraftPatchNotes(s);
        } catch (e) {
            (r.pendingPatchNotesDraft = null), clearTimeout(i), n(e instanceof Error ? e : Error("draft send failed"));
        }
    });
}
function Q(e, t) {
    let n = k.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function ee(e) {
    i.h.dispatch({ type: "VIBEGRATIONS_DEBUG_STATUS_REQUESTED", projectId: e });
    let t = k.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendDebugStatusRequest();
    } catch (t) {
        console.error("[vibegrations] debug status request failed", t),
            i.h.dispatch({ type: "VIBEGRATIONS_DEBUG_STATUS_SET", projectId: e, status: null, failed: !0 });
    }
}
function et(e, t) {
    let n = k.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let en = new Map();
function er(e) {
    let t = (0, y.bi)(e);
    if (null == t) return !1;
    if (en.get(e) === t) return !0;
    let n = k.get(e);
    return null != n && (en.set(e, t), n.ws.sendLoadHistory(t), !0);
}
let es = new Map(),
    ei = new Map();
function eo(e) {
    let t = es.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = ei.get(e);
    if (null != n) return n;
    let r = (0, p.d)(e)
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
    let { ticket: t, baseUrl: n } = await (0, p.d)(e),
        r = new URLSearchParams({ ticket: t }),
        s = await fetch(`${n}/agent/source-history?${r}`);
    if (!s.ok) throw Error(`version history failed (${s.status})`);
    let i = await s.json();
    return Array.isArray(i.entries) ? i.entries : [];
}
async function el(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${s}`, { method: "POST" });
    if (!i.ok) {
        let e = (await i.text()).trim();
        throw Error(`version restore failed (${i.status})${"" === e ? "" : `: ${e}`}`);
    }
    let o = await i.json();
    if (null == o.entry) throw Error("version restore returned no commit");
    return (
        (0, l.tZ)(e, { isPreview: !0 }).catch((t) => {
            console.error("[vibegrations] post-version-restore refresh failed", e, t);
        }),
        o.entry
    );
}
function ec(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function ed(e, t) {
    return eu(e, t, t.name, t.type);
}
async function eu(e, t, n, r) {
    let { ticket: s, baseUrl: i } = await (0, p.d)(e),
        o = new URLSearchParams({ ticket: s, name: n }),
        a = await fetch(`${ec(i)}?${o}`, {
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
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        s = new URLSearchParams({ ticket: n, name: t }),
        i = await fetch(`${r}/agent/export?${s}`);
    if (!i.ok) throw new ep(i.status);
    return await i.blob();
}
class ef extends Error {
    status;
    constructor(e) {
        super(`remix failed (${e})`), (this.status = e);
    }
}
async function e_(e, t) {
    let [n, r] = await Promise.all([(0, p.g)(e), (0, p.d)(t)]),
        s = new URLSearchParams({ ticket: n.ticket }),
        i = await fetch(`${n.baseUrl}/agent/fork?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!i.ok) throw new ef(i.status);
}
async function eg(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/secrets?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`secret submission failed (${i.status})`);
}
async function ey(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
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
function eS(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await (0, p.d)(e),
            r = new URLSearchParams({ ticket: t }),
            s = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        s.ok || console.warn("[vibegrations] settings rebuild request failed", e, s.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
async function eE(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await (0, p.d)(e),
        s = new URLSearchParams({ ticket: n });
    t && s.set("regenerate", "1");
    let i = await fetch(`${r}/agent/mcp-token?${s}`, { method: "POST" });
    if (!i.ok) throw Error(`mcp token failed (${i.status})`);
    let o = await i.json();
    return { url: o.url, token: o.token, expiresAt: o.expires_at };
}
async function eT(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: s } = await (0, p.d)(e);
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
            e = (0, g.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, g.ls)(n.status, e) };
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
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${ec(r, t)}?${s}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
async function ew(e, t) {
    let { ticket: n, baseUrl: r } = await eo(e),
        s = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${s}`;
}
async function ek(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: s } = await eo(e),
        i = new URLSearchParams({ ticket: r });
    return n && i.set("download", "1"), `${ec(s, t)}?${i}`;
}
async function eA(e, t) {
    async function n() {
        return fetch(await ek(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (es.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eI(e) {
    F(e);
}
class eb extends s.Ay.Store {
    initialize() {
        this.waitFor(a.default, y.Ay, S.Ay);
    }
    getConnState(e) {
        return A.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return I.get(e) ?? !1;
    }
    getModelSettings(e) {
        return N.get(e) ?? null;
    }
    getSettings(e) {
        return O.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return O.get(e)?.connections ?? eN;
    }
}
let eN = [],
    eO = new eb(i.h, {
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (A.get(t) === n) return !1;
            A.set(t, n), ("closed" === n || "failed" === n) && b.delete(t);
        },
        VIBEGRATIONS_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((I.get(t) ?? !1) === n) return !1;
            I.set(t, n);
        },
        VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, choices: r } = e;
            N.set(t, { settings: n, choices: r });
        },
        VIBEGRATIONS_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            O.set(t, n);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!F(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(k.keys())) null == S.Ay.getProject(e) && F(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === k.size) return !1;
            for (let e of Array.from(k.keys())) F(e);
            I.clear(), D.clear(), es.clear();
        },
    }),
    eP = 221552 == n.j ? eO : null;
