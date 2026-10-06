(n.d(t, {
    DM: () => ew,
    r2: () => el,
    $S: () => eI,
    gm: () => eR,
    n6: () => eq,
    ss: () => eH,
    cS: () => eA,
    R7: () => ec,
    aF: () => ex,
    Lj: () => ed,
    JI: () => eM,
    Vm: () => ej,
    oX: () => eJ,
    ms: () => eS,
    TV: () => eo,
    dv: () => ei,
    Hc: () => er,
    Bn: () => eB,
    XZ: () => ep,
    oB: () => em,
    ho: () => e$,
    $D: () => eT,
    fu: () => es,
    Ay: () => ez,
    $C: () => ea,
    vX: () => eN,
    c9: () => eP,
    ct: () => eu,
    dz: () => eb,
    PK: () => eG,
    Qe: () => ev,
    y_: () => eL,
    xE: () => eU,
    nU: () => eD,
    P6: () => ef,
    _m: () => ek,
    Du: () => eE,
}),
    n(321073),
    n(508300),
    n(323874),
    n(14289),
    n(35956));
var r = n(158390),
    i = n(17928),
    s = n(73153),
    o = n(195880),
    a = n(287809),
    l = n(245179),
    c = n(785389);
let d = new Map(),
    u = new Map(),
    p = new Map();
function h(e, t, n) {
    f(e, t);
    let r = setTimeout(() => e.delete(t), 1e4);
    e.set(t, { ...n, timer: r });
}
function f(e, t) {
    let n = e.get(t);
    null != n && (clearTimeout(n.timer), e.delete(t));
}
function _(e, t) {
    h(p, t, { projectId: e });
}
function g(e, t) {
    let n = d.get(t);
    null != n && (clearTimeout(n.timer), n.resolve(null));
    let r = u.get(t);
    return null != r
        ? (f(u, t), _(e, t), Promise.resolve({ uploadToken: r.uploadToken }))
        : new Promise((n) => {
              let r = setTimeout(() => {
                  (d.delete(t), n(null));
              }, 5e3);
              d.set(t, { resolve: n, timer: r, projectId: e });
          });
}
function y(e) {
    for (let [t, n] of [...d]) n.projectId === e && (d.delete(t), clearTimeout(n.timer), n.resolve(null));
    for (let t of [u, p]) for (let [n, r] of [...t]) r.projectId === e && f(t, n);
}
var E = n(573083),
    m = n(855859),
    w = n(371169),
    S = n(260498),
    k = n(385081),
    C = n(89505);
class T {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: r, onClose: i, onError: s } = e;
        this.close();
        let o = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            a = new WebSocket(`${o}/agent/ws?ticket=${encodeURIComponent(n)}`);
        ((this.socket = a),
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
            }));
    }
    sendUserMessage(e, t, n, r) {
        let {
            templateId: i,
            remix: s,
            clarificationAnswers: o,
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({
                type: "user_message",
                content: e,
                nonce: t,
                attachment_ids: n,
                project_name: r,
                template_id: i,
                remix: s,
                clarification_answers: o,
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
    sendPublish() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "publish" }));
    }
    sendDraftPatchNotes(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "draft_patch_notes", nonce: e }));
    }
    sendLiveReload(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_live_reload", enabled: e }));
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
    sendForceCompaction() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "force_compaction", ...(e ? { settle_pending: !0 } : {}) }));
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
var b = n(382541);
n(944142);
var O = n(248675),
    N = n(375708);
function R(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
function P(e, t) {
    let n = e.pendingPatchNotesDraft;
    null != n && ((e.pendingPatchNotesDraft = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let U = new Map(),
    A = new Set(["activity", "automod", "widget", "bot"]);
function v(e) {
    return null != e && A.has(e) ? e : null;
}
let J = new Map(),
    I = new Map(),
    D = new Set(),
    H = new Map(),
    $ = new Map();
function L(e, t) {
    s.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
let M = { location: "connection", code: k.xf.SEND_FAILED },
    j = { location: "agent", code: k.xf.AGENT_ERROR };
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : M;
    (s.h.dispatch({
        type: "CONJURE_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, k.Hy)(e, { ...n, message: t }));
}
function W(e) {
    return `optimistic:${e}`;
}
let G = new Map();
function q(e, t) {
    let { content: n, nonce: r, attachments: i } = t;
    (G.set(r, a.default.getCurrentUser()?.id),
        s.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: W(r),
            userId: a.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: i,
        }));
}
let B = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function F(e, t, n) {
    let r = t.pendingSends;
    for (let i of ((t.pendingSends = []), r)) (q(e, i), x(e, n));
}
function K(e, t) {
    if (!0 === I.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        q(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
                S.Ay.getProject(e)?.name,
                { templateId: r.templateId, remix: r.remix, clarificationAnswers: r.clarificationAnswers },
            );
        } catch (t) {
            (console.error("[vibegrations] queued send failed", t),
                x(e, t instanceof Error ? t.message : "send failed"));
        }
    }
}
async function z(e, t, n) {
    try {
        let { ticket: r } = await (0, b.g)(n);
        e.ws.sendUpstreamTicketAck(t, r);
    } catch (r) {
        let n = r?.status;
        e.ws.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
let V = {
        build_error: { location: "build", code: k.xf.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: k.xf.HEALTHCHECK_FAILED },
        error: { location: "agent", code: k.xf.AGENT_ERROR },
    },
    Q = {
        web: { location: "runtime_frame", code: k.xf.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: k.xf.RUNTIME_WORKER_ERROR },
    },
    X = new Map();
async function Y(e, t, n) {
    let r,
        i = Date.now();
    (console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, m.b)(e, "widget"));
    try {
        r = await C.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await g(e, n.id)),
            resolveUploadUrl: () => eW(e),
        });
    } catch (e) {
        (console.error("[vibegrations] preview capture relay failed", e), (r = { status: "failed" }));
    }
    (console.debug("[vibegrations] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - i,
    }),
        t.ws.sendCaptureAck(n.id, r.status, r.code, r.message));
}
async function Z(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let i = await C.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await g(e, n.id)) != null),
        );
        (console.debug("[vibegrations] control relay answered", { id: n.id, status: i.status, ms: Date.now() - r }),
            "completed" === i.status
                ? t.ws.sendControlAck(n.id, "completed", i.response)
                : "failed" === i.status
                  ? t.ws.sendControlAck(n.id, "failed", void 0, i.message)
                  : t.ws.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[vibegrations] preview control relay failed", e),
            t.ws.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function ee(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await (0, b.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    var i;
                    if (
                        (console.debug("[vibegrations] ws event", r.type),
                        "hello" !== r.type &&
                            "history" !== r.type &&
                            "capture_preview" !== r.type &&
                            "control_preview" !== r.type &&
                            "control_claim" !== r.type &&
                            "control_abort" !== r.type &&
                            "capture_claim" !== r.type &&
                            "preview_operation" !== r.type &&
                            "request_upstream_ticket" !== r.type &&
                            "open" !== J.get(t))
                    )
                        return void n.pendingEvents.push(r);
                    if ("history_page" === r.type) {
                        if (r.requested !== eh.get(t) || (eh.delete(t), !0 === r.failed)) return;
                        s.h.dispatch({
                            type: "CONJURE_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (r.messages ?? []).slice(),
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        });
                        return;
                    }
                    if ("hello" === r.type) ((n.helloSeen = !0), n.backoff.succeed());
                    else if ("history" === r.type) {
                        let i = (r.messages ?? []).slice();
                        (s.h.dispatch({
                            type: "CONJURE_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: i,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                            degraded: !0 === r.degraded,
                        }),
                            eh.delete(t));
                        let o = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), L(t, "open"), o)) e(t, n, r);
                        let a = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != a))
                            try {
                                n.ws.sendModelSettings(a);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        K(t, n);
                    } else if ("chat_state" === r.type)
                        (s.h.dispatch({ type: "CONJURE_CHAT_STOPPED_SET", projectId: t, stopped: r.stopped }),
                            r.stopped || "open" !== J.get(t) || K(t, n));
                    else if ("user_message" === r.type) {
                        let e, n, i;
                        ((n = (e = null != r.nonce && G.has(r.nonce)) && null != r.nonce ? G.get(r.nonce) : void 0),
                            (i = e && (null == n || null == r.user_id || n === r.user_id)) &&
                                null != r.nonce &&
                                G.delete(r.nonce),
                            s.h.dispatch({
                                type: "CONJURE_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(i && null != r.nonce ? { optimisticId: W(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            }));
                    } else if ("message_disposition" === r.type)
                        ((i = r.disposition),
                            Object.prototype.hasOwnProperty.call(B, i) &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: r.id,
                                    activeTurnId: r.active_turn_id,
                                    disposition: r.disposition,
                                }));
                    else if ("publish_notice" === r.type)
                        s.h.dispatch({
                            type: "CONJURE_CHAT_PUBLISH_NOTICE",
                            projectId: t,
                            id: r.id,
                            content: r.content,
                            timestamp: r.ts,
                            publishNotice: r.publish_notice,
                        });
                    else if ("side_reply" === r.type)
                        s.h.dispatch({
                            type: "CONJURE_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: r.id,
                            inReplyTo: r.in_reply_to,
                            content: r.content,
                            timestamp: r.ts,
                        });
                    else if ("source_checkpoint" === r.type)
                        s.h.dispatch({
                            type: "CONJURE_CHAT_SOURCE_CHECKPOINT",
                            projectId: t,
                            turnId: r.turn_id,
                            sourceSha: r.source_sha,
                        });
                    else if ("turn_notification" === r.type)
                        s.h.dispatch({
                            type: "CONJURE_TURN_NOTIFICATION",
                            projectId: t,
                            body: r.summary,
                            nonce: r.nonce,
                        });
                    else if ("provisional_todo" === r.type)
                        s.h.dispatch({
                            type: "CONJURE_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: r.turn_id,
                            text: r.text,
                        });
                    else if ("step" === r.type)
                        if ("reply" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e
                                ? s.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : x(t, N.intl.string(O.default["913RMa"]), j);
                        } else if ("thinking_lifecycle" === r.kind) {
                            let { phase: e, session: n, seq: i, ticks: o, elapsed_ms: a, text: l } = r;
                            null != e &&
                                null != i &&
                                null != n &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_THINKING_SET",
                                    projectId: t,
                                    activity: {
                                        phase: e,
                                        session: n,
                                        seq: i,
                                        ticks: o ?? 0,
                                        elapsedMs: a ?? 0,
                                        text: l ?? "",
                                    },
                                });
                        } else if ("compaction" === r.kind)
                            ("start" === r.phase || "end" === r.phase) &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === r.phase,
                                });
                        else if ("debug_compaction_declined" === r.kind)
                            null != r.projected &&
                                null != r.threshold &&
                                s.h.dispatch({
                                    type: "CONJURE_DEBUG_COMPACTION_DECLINED",
                                    projectId: t,
                                    promptCeiling: r.prompt_ceiling ?? 0,
                                    threshold: r.threshold,
                                    projected: r.projected,
                                    headroom: r.headroom ?? r.threshold - r.projected,
                                    retainedMessages: r.retained_messages ?? 0,
                                    observedAt: new Date().toISOString(),
                                });
                        else if ("force_compaction_result" === r.kind) {
                            let e = r.outcome;
                            ("compacted" === e || "declined" === e || "failed" === e || "busy" === e) &&
                                s.h.dispatch({
                                    type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
                                    projectId: t,
                                    outcome: e,
                                    reason: r.reason,
                                    ...(!0 === r.pending_turn ? { pendingTurn: !0 } : {}),
                                    observedAt: new Date().toISOString(),
                                });
                        } else if ("debug_compaction_report" === r.kind)
                            null != r.tokens_before &&
                                null != r.tokens_after &&
                                s.h.dispatch({
                                    type: "CONJURE_DEBUG_COMPACTION_REPORT",
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
                                (s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { todos: e },
                                }),
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("plan_proposed" === r.kind)
                            null != r.proposal
                                ? s.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { proposal: r.proposal, kind: "proposal" },
                                  })
                                : x(t, N.intl.string(O.default["0+RUWx"]), j);
                        else if ("ideas" === r.kind)
                            null != r.ideas &&
                                r.ideas.length > 0 &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { ideas: r.ideas },
                                });
                        else if ("restore_proposal" === r.kind)
                            null != r.restore_proposal &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { restoreProposal: r.restore_proposal },
                                });
                        else if ("publish_cta" === r.kind)
                            null != r.publish_cta &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { publishCta: { surface: v(r.publish_cta.surface) } },
                                });
                        else if ("publish_status" === r.kind)
                            s.h.dispatch({
                                type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                                projectId: t,
                                published: !0 === r.published,
                                hasUnpublishedChanges: !0 === r.has_unpublished_changes,
                                surface: v(r.surface),
                            });
                        else if ("clarification" === r.kind)
                            null != r.clarification &&
                                (r.clarification.questions?.length ?? 0) > 0 &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { clarification: r.clarification },
                                });
                        else if ("attachment" === r.kind)
                            null != r.attachments &&
                                r.attachments.length > 0 &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { attachments: r.attachments },
                                });
                        else if ("collect_secrets" === r.kind) {
                            let e = r.fields ?? [];
                            e.length > 0 &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { secretRequest: { fields: e, note: r.note, copy_values: r.copy_values } },
                                });
                        } else if ("collect_settings" === r.kind)
                            s.h.dispatch({
                                type: "CONJURE_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: r.turn_id,
                                patch: { settingsRequest: { keys: r.keys, note: r.note } },
                            });
                        else if ("awaiting_user" === r.kind)
                            "secrets" === r.action &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { awaitingUser: { action: r.action } },
                                });
                        else if ("intake" === r.kind)
                            null != r.intake &&
                                (r.intake.questions?.length ?? 0) > 0 &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { intake: r.intake },
                                });
                        else if ("usage" === r.kind)
                            null != r.turn &&
                                null != r.project &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: r.turn,
                                    project: r.project,
                                });
                        else if ("reaction" === r.kind)
                            null != r.message_id &&
                                null != r.emoji &&
                                "" !== r.emoji &&
                                s.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_REACTION",
                                    projectId: t,
                                    id: r.message_id,
                                    emoji: r.emoji,
                                });
                        else if ("project_named" === r.kind) {
                            let e = S.Ay.getProject(t);
                            null != e &&
                                null != r.name &&
                                s.h.dispatch({
                                    type: "CONJURE_PROJECT_UPDATE_SUCCESS",
                                    project: { ...e, name: r.name },
                                });
                        } else if ("publish_result" === r.kind) {
                            let e = n.pendingPublish;
                            if (
                                ((n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(r)),
                                !0 !== r.ok)
                            )
                                (0, w.Is)(t, r.error ?? "publish_result not ok", !1);
                            else {
                                let e = S.Ay.getPublishStatus(t);
                                null != e &&
                                    s.h.dispatch({
                                        type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                                        projectId: t,
                                        published: !0,
                                        hasUnpublishedChanges: !1,
                                        surface: e.surface,
                                    });
                            }
                        } else if ("patch_notes_draft" === r.kind) {
                            let e = n.pendingPatchNotesDraft;
                            null != e &&
                                e.nonce === r.nonce &&
                                ((n.pendingPatchNotesDraft = null), clearTimeout(e.timeout), e.resolve(r));
                        } else if ("app_icon_set" === r.kind) {
                            let e = r.icon;
                            if (null != e && "" !== e) {
                                let i = r.attachment_id;
                                function o(e) {
                                    null != i && "" !== i && n.ws.sendAppIconAck(i, e);
                                }
                                (0, w.Ru)(t, e)
                                    .then((e) => {
                                        (e.ok || console.error("[vibegrations] icon from agent rejected", t, e.status),
                                            o(e.ok ? "applied" : "failed"));
                                    })
                                    .catch((e) => {
                                        (console.error("[vibegrations] icon from agent failed", t, e), o("failed"));
                                    });
                            }
                        } else
                            "turn_result" === r.kind
                                ? ((0, k.hV)(t, r),
                                  "deployed" === r.result &&
                                      s.h.dispatch({
                                          type: "CONJURE_CHAT_TURN_PATCH",
                                          projectId: t,
                                          turnId: r.turn_id,
                                          patch: { kind: "plan_implemented" },
                                      }),
                                  s.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_FINISHED",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      summary: r.summary,
                                  }),
                                  D.delete(t) &&
                                      "cancelled" === r.result &&
                                      s.h.dispatch({ type: "CONJURE_CHAT_INTERRUPTED", projectId: t }))
                                : (s.h.dispatch({
                                      type: "CONJURE_CHAT_STEP_APPEND",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      step: r,
                                  }),
                                  ("build_error" === r.kind || "healthcheck_failed" === r.kind || "error" === r.kind) &&
                                      (0, k.Hy)(t, {
                                          ...V[r.kind],
                                          message: r.message,
                                          details: "build_error" === r.kind ? r.stderr_tail : void 0,
                                      }),
                                  "preview_ready" === r.kind &&
                                      (0, w.tZ)(t, { isPreview: !0 }).catch((e) => {
                                          console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                      }));
                    else
                        "capture_preview" === r.type
                            ? Y(t, n, r).catch(() => {})
                            : "control_preview" === r.type
                              ? Z(t, n, r).catch(() => {})
                              : "control_abort" === r.type
                                ? C.A.abortPreviewControl(t)
                                : "control_claim" === r.type || "capture_claim" === r.type
                                  ? (function (e, t, n) {
                                        let r = d.get(t);
                                        if (null == r) {
                                            p.has(t) || h(u, t, { uploadToken: n, projectId: e });
                                            return;
                                        }
                                        (d.delete(t), clearTimeout(r.timer), _(e, t), r.resolve({ uploadToken: n }));
                                    })(t, r.id, "capture_claim" === r.type ? r.upload_token : void 0)
                                  : "preview_operation" === r.type
                                    ? "begin" === r.phase
                                        ? ((0, E.pF)(t, "tuning" === r.mode), C.A.beginPreviewOperation(t))
                                        : ((0, E.pF)(t, !1), C.A.endPreviewOperation(t))
                                    : "live_reload" === r.type
                                      ? s.h.dispatch({
                                            type: "CONJURE_LIVE_RELOAD_SET",
                                            projectId: t,
                                            enabled: r.enabled,
                                            error: r.error ?? null,
                                            phase: r.phase ?? null,
                                            step: r.step ?? null,
                                        })
                                      : "model_settings" === r.type
                                        ? s.h.dispatch({
                                              type: "CONJURE_MODEL_SETTINGS_SET",
                                              projectId: t,
                                              settings: r.settings,
                                              tierSettings: r.tier_settings ?? null,
                                              tiers: r.tiers ?? null,
                                              choices: r.choices,
                                          })
                                        : "debug_status" === r.type
                                          ? s.h.dispatch({
                                                type: "CONJURE_DEBUG_STATUS_SET",
                                                projectId: t,
                                                status: r.status ?? null,
                                                failed: !0 === r.failed || null == r.status,
                                            })
                                          : "settings" === r.type
                                            ? s.h.dispatch({
                                                  type: "CONJURE_SETTINGS_SET",
                                                  projectId: t,
                                                  settings: {
                                                      schema: r.schema,
                                                      values: r.values,
                                                      secrets: r.secrets,
                                                      connections: r.connections,
                                                  },
                                              })
                                            : "debug_model_call" === r.type
                                              ? (s.h.dispatch({
                                                    type: "CONJURE_MODEL_CALL_APPEND",
                                                    projectId: t,
                                                    modelCall: r,
                                                }),
                                                "started" !== r.status &&
                                                    s.h.dispatch({
                                                        type: "CONJURE_DEBUG_MODEL_CALL",
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
                                                            "error" === r.status
                                                                ? (r.stop_reason ?? "error")
                                                                : r.stop_reason,
                                                        durationMs: r.duration_ms,
                                                        inputTokens: r.input_tokens ?? 0,
                                                        outputTokens: r.output_tokens ?? 0,
                                                        cacheReadTokens: r.cache_read_tokens ?? 0,
                                                        cacheWriteTokens: r.cache_write_tokens ?? 0,
                                                        observedAt: new Date().toISOString(),
                                                    }))
                                              : "debug_tool_call" === r.type
                                                ? s.h.dispatch({
                                                      type: "CONJURE_TOOL_CALL_APPEND",
                                                      projectId: t,
                                                      toolCall: r,
                                                  })
                                                : "request_upstream_ticket" === r.type
                                                  ? z(n, r.id, r.project_id)
                                                  : "debug_history_state" === r.type
                                                    ? s.h.dispatch({
                                                          type: "CONJURE_HISTORY_LOAD_SETTLE",
                                                          projectId: t,
                                                          scope: r.scope,
                                                          status: r.status,
                                                          count: r.count,
                                                          truncated: !0 === r.truncated,
                                                      })
                                                    : (s.h.dispatch({
                                                          type: "CONJURE_LOG_APPEND",
                                                          projectId: t,
                                                          log: r,
                                                      }),
                                                      (function (e, t) {
                                                          if (!0 === t.historical || "error" !== t.level) return;
                                                          let n = null != t.source ? Q[t.source] : void 0;
                                                          if (null == n) return;
                                                          let r = X.get(e);
                                                          null == r && ((r = new Set()), X.set(e, r));
                                                          let i = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                                          r.has(i) ||
                                                              r.size >= 10 ||
                                                              (r.add(i),
                                                              (0, k.Hy)(e, {
                                                                  location: n.location,
                                                                  code: n.code,
                                                                  message: t.message,
                                                                  details: t.source,
                                                              }));
                                                      })(t, r));
                })(e, t, n),
            onClose: () => {
                (R(t, "Connection closed before the publish result arrived"),
                P(t, "Connection closed before the draft arrived"),
                y(e),
                t.disposed)
                    ? L(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), L(e, "connecting"), t.backoff.fail(() => et(e)))
                      : (L(e, "closed"),
                        F(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        (L(e, "failed"),
            F(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            R(t, "Connection failed before the publish result arrived"),
            P(t, "Connection failed before the draft arrived"),
            (0, k.Hy)(e, {
                location: "connection",
                code: k.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function et(e) {
    let t = U.get(e);
    null == t &&
        ((t = {
            ws: new T(),
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
        U.set(e, t));
    let n = t;
    ((n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        L(e, "connecting"),
        s.h.dispatch({ type: "CONJURE_TRACE_REPLAY_STARTING", projectId: e }),
        ee(e, n));
}
function en(e) {
    var t;
    let n = U.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        R(n, "Connection closed before the publish result arrived"),
        P(n, "Connection closed before the draft arrived"),
        n.ws.close(),
        U.delete(e),
        (t = e),
        eh.delete(t),
        C.A.releasePreviewControl(e),
        y(e),
        L(e, "closed"),
        !0)
    );
}
function er(e) {
    let t = U.get(e);
    if (null == t) return void et(e);
    let n = J.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || et(e);
}
function ei(e, t, n) {
    let {
            templateId: r,
            remix: i,
            clarificationAnswers: s,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = t.trim(),
        l = null != n && n.length > 0 ? n : void 0;
    if ("" === a && null == l) return;
    let c = {
            content: a,
            nonce: (0, o.m)(),
            attachments: l,
            templateId: r,
            remix: i,
            ...(null != s ? { clarificationAnswers: s } : {}),
        },
        d = U.get(e);
    if (null != d && ("connecting" === J.get(e) || d.reconnectPending)) return void d.pendingSends.push(c);
    q(e, c);
    try {
        if (null == d) throw Error("Not connected");
        d.ws.sendUserMessage(
            c.content,
            c.nonce,
            c.attachments?.map((e) => e.id),
            S.Ay.getProject(e)?.name,
            { templateId: c.templateId, remix: c.remix, clarificationAnswers: c.clarificationAnswers },
        );
    } catch (t) {
        (console.error("[vibegrations] send failed", t), x(e, t instanceof Error ? t.message : "send failed"));
    }
}
function es(e) {
    let t = U.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            l.Ay.isThinking(e) && (D.add(e), s.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function eo(e) {
    let t = !1;
    return new Promise((n, r) => {
        let i = U.get(e);
        if (null == i) return void r(Error("Not connected"));
        if (null != i.pendingPublish) return void r(Error("Publish already in flight"));
        let o = setTimeout(() => {
            R(i, "Publish timed out");
        }, 9e5);
        ((i.pendingPublish = { resolve: n, reject: r, timeout: o }),
            (t = !0),
            s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            i.ws.sendPublish();
        } catch (e) {
            ((i.pendingPublish = null), clearTimeout(o), r(e instanceof Error ? e : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, w.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function ea(e) {
    return new Promise((t, n) => {
        let r = U.get(e);
        if (null == r) return void n(Error("Not connected"));
        P(r, "Superseded by a newer draft request");
        let i = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            s = setTimeout(() => {
                P(r, "Draft timed out");
            }, 45e3);
        r.pendingPatchNotesDraft = { resolve: t, reject: n, timeout: s, nonce: i };
        try {
            r.ws.sendDraftPatchNotes(i);
        } catch (e) {
            ((r.pendingPatchNotesDraft = null),
                clearTimeout(s),
                n(e instanceof Error ? e : Error("draft send failed")));
        }
    });
}
function el(e, t) {
    let n = U.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function ec(e) {
    s.h.dispatch({ type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId: e });
    let t = U.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendDebugStatusRequest();
    } catch (t) {
        (console.error("[vibegrations] debug status request failed", t),
            s.h.dispatch({ type: "CONJURE_DEBUG_STATUS_SET", projectId: e, status: null, failed: !0 }));
    }
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    s.h.dispatch({ type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId: e });
    let n = U.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendForceCompaction(t);
    } catch (t) {
        (console.error("[vibegrations] force compaction request failed", t),
            s.h.dispatch({
                type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
                projectId: e,
                outcome: "failed",
                reason: "Not connected",
                observedAt: new Date().toISOString(),
            }));
    }
}
function eu(e, t) {
    let n = U.get(e);
    try {
        if (null == n) throw Error("Not connected");
        return (n.ws.sendLiveReload(t), !0);
    } catch (e) {
        return (console.error("[vibegrations] live reload send failed", e), !1);
    }
}
function ep(e, t) {
    let n = U.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let eh = new Map();
function ef(e) {
    let t = (0, l.bi)(e);
    if (null == t) return !1;
    if (eh.get(e) === t) return !0;
    let n = U.get(e);
    return null != n && "open" === J.get(e) && (eh.set(e, t), n.ws.sendLoadHistory(t), !0);
}
let e_ = new Map(),
    eg = new Map();
function ey(e) {
    let t = e_.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = eg.get(e);
    if (null != n) return n;
    let r = (0, b.d)(e)
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
            return (null != n && e_.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            eg.delete(e);
        });
    return (eg.set(e, r), r);
}
async function eE(e) {
    let { ticket: t, baseUrl: n } = await (0, b.d)(e),
        r = new URLSearchParams({ ticket: t }),
        i = await fetch(`${n}/agent/source-history?${r}`);
    if (!i.ok) throw Error(`version history failed (${i.status})`);
    let s = await i.json();
    return {
        entries: Array.isArray(s.entries) ? s.entries : [],
        previewSha: "string" == typeof s.previewSha ? s.previewSha : null,
        publishedSha: "string" == typeof s.publishedSha ? s.publishedSha : null,
    };
}
async function em(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${i}`, { method: "POST" });
    if (!s.ok) {
        let e = (await s.text()).trim();
        throw Error(`version restore failed (${s.status})${"" === e ? "" : `: ${e}`}`);
    }
    let o = await s.json();
    if (null == o.entry) throw Error("version restore returned no commit");
    return (
        !0 === o.live ||
            (0, w.tZ)(e, { isPreview: !0 }).catch((t) => {
                console.error("[vibegrations] post-version-restore refresh failed", e, t);
            }),
        o.entry
    );
}
async function ew(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n, environment: t }),
        s = await fetch(`${r}/agent/database/restore-points?${i}`);
    if (!s.ok) throw Error(`restore points failed (${s.status})`);
    let o = await s.json();
    return Array.isArray(o.restorePoints) ? o.restorePoints : [];
}
async function eS(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n, environment: t }),
        s = await fetch(`${r}/agent/database/restore-window?${i}`);
    if (!s.ok) throw Error(`restore window failed (${s.status})`);
    return await s.json();
}
async function ek(e, t, n) {
    let { ticket: r, baseUrl: i } = await (0, b.d)(e),
        s = new URLSearchParams({ ticket: r }),
        o = await fetch(`${i}/agent/database/restore-points?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(null != n && "" !== n.trim() ? { environment: t, label: n } : { environment: t }),
        });
    if (!o.ok) throw Error(`restore point create failed (${o.status})`);
    let a = await o.json();
    if (null == a.restorePoint) throw Error("restore point create returned nothing");
    return a.restorePoint;
}
async function eC(e, t) {
    var n;
    let r = t.ok && 202 !== t.status ? "" : (await t.text()).trim(),
        i =
            ((n = t.status),
            202 === n
                ? { ok: !1, code: "unconfirmed", message: r }
                : n >= 200 && n < 300
                  ? { ok: !0 }
                  : { ok: !1, code: 410 === n ? "expired" : "failed", message: r });
    if (i.ok)
        try {
            (0, w.BD)(e);
        } catch (t) {
            console.error("[vibegrations] post-data-restore frame reload failed", e, t);
        }
    return i;
}
async function eT(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n });
    return eC(
        e,
        await fetch(`${r}/agent/database/restore-points/${encodeURIComponent(t)}/restore?${i}`, { method: "POST" }),
    );
}
async function eb(e, t, n) {
    let { ticket: r, baseUrl: i } = await (0, b.d)(e),
        s = new URLSearchParams({ ticket: r });
    return eC(
        e,
        await fetch(`${i}/agent/database/restore?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ environment: t, timestampMs: n }),
        }),
    );
}
function eO(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function eN(e, t) {
    return eP(e, t, t.name, t.type);
}
async function eR(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = await fetch(`${eO(r, "from-url")}?${new URLSearchParams({ ticket: n })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ url: t }),
        }),
        s = await i.json().catch(() => null);
    if (!i.ok || null == s || !("id" in s))
        throw Error(null != s && "error" in s && "string" == typeof s.error ? s.error : "");
    return s;
}
async function eP(e, t, n, r) {
    let { ticket: i, baseUrl: s } = await (0, b.d)(e),
        o = new URLSearchParams({ ticket: i, name: n }),
        a = await fetch(`${eO(s)}?${o}`, {
            method: "POST",
            headers: { "content-type": "" !== r ? r : "application/octet-stream" },
            body: t,
        });
    if (!a.ok) throw Error(`attachment upload failed (${a.status})`);
    return await a.json();
}
class eU extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function eA(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n, name: t }),
        s = await fetch(`${r}/agent/export?${i}`);
    if (!s.ok) throw new eU(s.status);
    return await s.blob();
}
class ev extends Error {
    status;
    constructor(e) {
        (super(`remix failed (${e})`), (this.status = e));
    }
}
async function eJ(e, t) {
    let [n, r] = await Promise.all([(0, b.g)(e), (0, b.d)(t)]),
        i = new URLSearchParams({ ticket: n.ticket }),
        s = await fetch(`${n.baseUrl}/agent/fork?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!s.ok) throw new ev(s.status);
}
async function eI(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/secrets?${i}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!s.ok) throw Error(`secret submission failed (${s.status})`);
}
async function eD(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
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
function eH(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await (0, b.d)(e),
            r = new URLSearchParams({ ticket: t }),
            i = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        i.ok || console.warn("[vibegrations] settings rebuild request failed", e, i.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
function e$(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function eL(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n });
    t && i.set("regenerate", "1");
    let s = await fetch(`${r}/agent/mcp-token?${i}`, { method: "POST" });
    if (!s.ok) throw Error(`mcp token failed (${s.status})`);
    let o = await s.json(),
        a = "number" == typeof o.expires_in ? Date.now() + 1e3 * o.expires_in : Date.parse(o.expires_at);
    return { url: o.url, expiresAtMs: a };
}
async function eM(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: i } = await (0, b.d)(e);
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
            e = (0, c.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, c.ls)(n.status, e) };
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
async function ej(e, t) {
    let { ticket: n, baseUrl: r } = await (0, b.d)(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${eO(r, t)}?${i}`, { method: "DELETE", keepalive: !0 });
    if (!s.ok) throw Error(`attachment cleanup failed (${s.status})`);
}
async function ex(e, t) {
    let { ticket: n, baseUrl: r } = await ey(e),
        i = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${i}`;
}
async function eW(e) {
    let { ticket: t, baseUrl: n } = await ey(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
async function eG(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: i } = await ey(e),
        s = new URLSearchParams({ ticket: r });
    return (n && s.set("download", "1"), `${eO(i, t)}?${s}`);
}
async function eq(e, t) {
    async function n() {
        return fetch(await eG(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (e_.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eB(e) {
    en(e);
}
class eF extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default, l.Ay, S.Ay);
    }
    getConnState(e) {
        return J.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return I.get(e) ?? !1;
    }
    getModelSettings(e) {
        return H.get(e) ?? null;
    }
    getSettings(e) {
        return $.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return $.get(e)?.connections ?? eK;
    }
}
let eK = [],
    ez = new eF(s.h, {
        CONJURE_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (J.get(t) === n) return !1;
            (J.set(t, n), ("closed" === n || "failed" === n) && D.delete(t));
        },
        CONJURE_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((I.get(t) ?? !1) === n) return !1;
            I.set(t, n);
        },
        CONJURE_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, tierSettings: r, tiers: i, choices: s } = e;
            H.set(t, { settings: n, tierSettings: r, tiers: i, choices: s });
        },
        CONJURE_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            $.set(t, n);
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!en(t)) return !1;
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(U.keys())) null == S.Ay.getProject(e) && en(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === U.size) return !1;
            for (let e of Array.from(U.keys())) en(e);
            (I.clear(), G.clear(), e_.clear());
        },
    });
