(n.d(t, {
    DM: () => ef,
    r2: () => en,
    $S: () => eO,
    _v: () => eI,
    n6: () => eD,
    ss: () => eR,
    cS: () => eA,
    R7: () => er,
    aF: () => eU,
    Lj: () => ei,
    JI: () => eC,
    Vm: () => eG,
    oX: () => eb,
    ms: () => e_,
    TV: () => ee,
    dv: () => z,
    Hc: () => Z,
    Bn: () => eV,
    XZ: () => eo,
    oB: () => eh,
    ho: () => eP,
    $D: () => ey,
    fu: () => Y,
    $C: () => et,
    Ay: () => e$,
    Xk: () => ek,
    vX: () => em,
    ct: () => es,
    dz: () => eE,
    ST: () => ep,
    PK: () => eB,
    y_: () => ev,
    nU: () => eN,
    _m: () => eg,
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
    l = n(948230),
    c = n(927899),
    d = n(933294);
class u {
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
var p = n(977129);
let h = new Map();
function f(e, t) {
    let n = h.get(t);
    return (
        null != n && (clearTimeout(n.timer), n.resolve(null)),
        new Promise((n) => {
            let r = setTimeout(() => {
                (h.delete(t), n(null));
            }, 5e3);
            h.set(t, { resolve: n, timer: r, projectId: e });
        })
    );
}
function _(e) {
    for (let [t, n] of [...h]) n.projectId === e && (h.delete(t), clearTimeout(n.timer), n.resolve(null));
}
var g = n(557875),
    S = n(783791),
    y = n(972786);
n(421690);
var E = n(50617),
    T = n(375708);
function m(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
function w(e, t) {
    let n = e.pendingPatchNotesDraft;
    null != n && ((e.pendingPatchNotesDraft = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let I = new Map(),
    A = new Set(["activity", "automod", "widget", "bot"]);
function k(e) {
    return null != e && A.has(e) ? e : null;
}
let b = new Map(),
    O = new Map(),
    N = new Set(),
    R = new Map(),
    P = new Map();
function v(e, t) {
    s.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let C = { location: "connection", code: c.xA.SEND_FAILED },
    G = { location: "agent", code: c.xA.AGENT_ERROR };
function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
    (s.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, c.Z0)(e, { ...n, message: t }));
}
function B(e) {
    return `optimistic:${e}`;
}
let D = new Map();
function V(e, t) {
    let { content: n, nonce: r, attachments: i } = t;
    (D.set(r, a.default.getCurrentUser()?.id),
        s.h.dispatch({
            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: B(r),
            userId: a.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: i,
        }));
}
let H = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function L(e, t, n) {
    let r = t.pendingSends;
    for (let i of ((t.pendingSends = []), r)) (V(e, i), U(e, n));
}
function $(e, t) {
    if (!0 === O.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        V(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
                y.Ay.getProject(e)?.name,
                { templateId: r.templateId, remix: r.remix, clarificationAnswers: r.clarificationAnswers },
            );
        } catch (t) {
            (console.error("[vibegrations] queued send failed", t),
                U(e, t instanceof Error ? t.message : "send failed"));
        }
    }
}
async function M(e, t, n) {
    try {
        let { ticket: r } = await (0, p.g)(n);
        e.ws.sendUpstreamTicketAck(t, r);
    } catch (r) {
        let n = r?.status;
        e.ws.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
let j = {
        build_error: { location: "build", code: c.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: c.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: c.xA.AGENT_ERROR },
    },
    x = {
        web: { location: "runtime_frame", code: c.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: c.xA.RUNTIME_WORKER_ERROR },
    },
    J = new Map();
async function W(e, t, n) {
    let r,
        i = Date.now();
    console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe });
    try {
        r = await d.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await f(e, n.id)),
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
async function q(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let i = await d.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await f(e, n.id)) != null),
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
async function F(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await (0, p.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    var i, o, a, u;
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
                            "open" !== b.get(t))
                    )
                        return void n.pendingEvents.push(r);
                    if ("history_page" === r.type) {
                        let e = ea.get(t);
                        if ((null != e && r.requested !== e) || (ea.delete(t), !0 === r.failed)) return;
                        (s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (r.messages ?? []).slice(),
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        }),
                            el(t));
                        return;
                    }
                    if ("hello" === r.type) ((n.helloSeen = !0), n.backoff.succeed());
                    else if ("history" === r.type) {
                        let i = (r.messages ?? []).slice();
                        (s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: i,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                            degraded: !0 === r.degraded,
                        }),
                            ea.delete(t),
                            (u = t),
                            el(u));
                        let o = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), v(t, "open"), o)) e(t, n, r);
                        let a = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != a))
                            try {
                                n.ws.sendModelSettings(a);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        $(t, n);
                    } else if ("chat_state" === r.type)
                        (s.h.dispatch({ type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId: t, stopped: r.stopped }),
                            r.stopped || "open" !== b.get(t) || $(t, n));
                    else if ("user_message" === r.type) {
                        let e, n, i;
                        ((n = (e = null != r.nonce && D.has(r.nonce)) && null != r.nonce ? D.get(r.nonce) : void 0),
                            (i = e && (null == n || null == r.user_id || n === r.user_id)) &&
                                null != r.nonce &&
                                D.delete(r.nonce),
                            s.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(i && null != r.nonce ? { optimisticId: B(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            }));
                    } else if ("message_disposition" === r.type)
                        ((i = r.disposition),
                            Object.prototype.hasOwnProperty.call(H, i) &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: r.id,
                                    activeTurnId: r.active_turn_id,
                                    disposition: r.disposition,
                                }));
                    else if ("publish_notice" === r.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_PUBLISH_NOTICE",
                            projectId: t,
                            id: r.id,
                            content: r.content,
                            timestamp: r.ts,
                            publishNotice: r.publish_notice,
                        });
                    else if ("side_reply" === r.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: r.id,
                            inReplyTo: r.in_reply_to,
                            content: r.content,
                            timestamp: r.ts,
                        });
                    else if ("source_checkpoint" === r.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT",
                            projectId: t,
                            turnId: r.turn_id,
                            sourceSha: r.source_sha,
                        });
                    else if ("turn_notification" === r.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_TURN_NOTIFICATION",
                            projectId: t,
                            body: r.summary,
                            nonce: r.nonce,
                        });
                    else if ("provisional_todo" === r.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: r.turn_id,
                            text: r.text,
                        });
                    else if ("step" === r.type)
                        if ("reply" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : U(t, T.intl.string(E.default.Z8Eo8I), G);
                        } else if ("thinking_lifecycle" === r.kind) {
                            let { phase: e, session: n, seq: i, ticks: o, elapsed_ms: a, text: l } = r;
                            null != e &&
                                null != i &&
                                null != n &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_THINKING_SET",
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
                                    type: "VIBEGRATIONS_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === r.phase,
                                });
                        else if ("debug_compaction_declined" === r.kind)
                            null != r.projected &&
                                null != r.threshold &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_DEBUG_COMPACTION_DECLINED",
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
                                    type: "VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT",
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
                                (s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { todos: e },
                                }),
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("plan_proposed" === r.kind)
                            null != r.proposal
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { proposal: r.proposal, kind: "proposal" },
                                  })
                                : U(t, T.intl.string(E.default.IHCafX), G);
                        else if ("ideas" === r.kind)
                            null != r.ideas &&
                                r.ideas.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { ideas: r.ideas },
                                });
                        else if ("restore_proposal" === r.kind)
                            null != r.restore_proposal &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { restoreProposal: r.restore_proposal },
                                });
                        else if ("publish_cta" === r.kind)
                            null != r.publish_cta &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { publishCta: { surface: k(r.publish_cta.surface) } },
                                });
                        else if ("publish_status" === r.kind)
                            s.h.dispatch({
                                type: "VIBEGRATIONS_PROJECT_PUBLISH_STATUS_UPDATE",
                                projectId: t,
                                published: !0 === r.published,
                                hasUnpublishedChanges: !0 === r.has_unpublished_changes,
                                surface: k(r.surface),
                            });
                        else if ("clarification" === r.kind)
                            null != r.clarification &&
                                (r.clarification.questions?.length ?? 0) > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { clarification: r.clarification },
                                });
                        else if ("attachment" === r.kind)
                            null != r.attachments &&
                                r.attachments.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { attachments: r.attachments },
                                });
                        else if ("collect_secrets" === r.kind) {
                            let e = r.fields ?? [];
                            e.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { secretRequest: { fields: e, note: r.note, copy_values: r.copy_values } },
                                });
                        } else if ("collect_settings" === r.kind)
                            s.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: r.turn_id,
                                patch: { settingsRequest: { keys: r.keys, note: r.note } },
                            });
                        else if ("awaiting_user" === r.kind)
                            "secrets" === r.action &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { awaitingUser: { action: r.action } },
                                });
                        else if ("intake" === r.kind)
                            null != r.intake &&
                                (r.intake.questions?.length ?? 0) > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { intake: r.intake },
                                });
                        else if ("usage" === r.kind)
                            null != r.turn &&
                                null != r.project &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: r.turn,
                                    project: r.project,
                                });
                        else if ("reaction" === r.kind)
                            null != r.message_id &&
                                null != r.emoji &&
                                "" !== r.emoji &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_MESSAGE_REACTION",
                                    projectId: t,
                                    id: r.message_id,
                                    emoji: r.emoji,
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
                            if (
                                ((n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(r)),
                                !0 !== r.ok)
                            )
                                (0, l.Is)(t, r.error ?? "publish_result not ok", !1);
                            else {
                                let e = y.Ay.getPublishStatus(t);
                                null != e &&
                                    s.h.dispatch({
                                        type: "VIBEGRATIONS_PROJECT_PUBLISH_STATUS_UPDATE",
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
                                function p(e) {
                                    null != i && "" !== i && n.ws.sendAppIconAck(i, e);
                                }
                                (0, l.Ru)(t, e)
                                    .then((e) => {
                                        (e.ok || console.error("[vibegrations] icon from agent rejected", t, e.status),
                                            p(e.ok ? "applied" : "failed"));
                                    })
                                    .catch((e) => {
                                        (console.error("[vibegrations] icon from agent failed", t, e), p("failed"));
                                    });
                            }
                        } else
                            "turn_result" === r.kind
                                ? ((0, c.Xv)(t, r),
                                  "deployed" === r.result &&
                                      s.h.dispatch({
                                          type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                          projectId: t,
                                          turnId: r.turn_id,
                                          patch: { kind: "plan_implemented" },
                                      }),
                                  s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      summary: r.summary,
                                  }),
                                  N.delete(t) &&
                                      "cancelled" === r.result &&
                                      s.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t }))
                                : (s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      step: r,
                                  }),
                                  ("build_error" === r.kind || "healthcheck_failed" === r.kind || "error" === r.kind) &&
                                      (0, c.Z0)(t, {
                                          ...j[r.kind],
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
                        ((o = r.id),
                            (a = "capture_claim" === r.type ? r.upload_token : void 0),
                            (e = h.get(o)),
                            null != e && (h.delete(o), clearTimeout(e.timer), e.resolve({ uploadToken: a })));
                    } else
                        "preview_operation" === r.type
                            ? "begin" === r.phase
                                ? d.A.beginPreviewOperation(t)
                                : d.A.endPreviewOperation(t)
                            : "live_reload" === r.type
                              ? s.h.dispatch({
                                    type: "VIBEGRATIONS_LIVE_RELOAD_SET",
                                    projectId: t,
                                    enabled: r.enabled,
                                    error: r.error ?? null,
                                    phase: r.phase ?? null,
                                    step: r.step ?? null,
                                })
                              : "model_settings" === r.type
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                      projectId: t,
                                      settings: r.settings,
                                      tierSettings: r.tier_settings ?? null,
                                      tiers: r.tiers ?? null,
                                      choices: r.choices,
                                  })
                                : "debug_status" === r.type
                                  ? s.h.dispatch({
                                        type: "VIBEGRATIONS_DEBUG_STATUS_SET",
                                        projectId: t,
                                        status: r.status ?? null,
                                        failed: !0 === r.failed || null == r.status,
                                    })
                                  : "settings" === r.type
                                    ? s.h.dispatch({
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
                                      ? (s.h.dispatch({
                                            type: "VIBEGRATIONS_MODEL_CALL_APPEND",
                                            projectId: t,
                                            modelCall: r,
                                        }),
                                        "started" !== r.status &&
                                            s.h.dispatch({
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
                                        ? s.h.dispatch({
                                              type: "VIBEGRATIONS_TOOL_CALL_APPEND",
                                              projectId: t,
                                              toolCall: r,
                                          })
                                        : "request_upstream_ticket" === r.type
                                          ? M(n, r.id, r.project_id)
                                          : "debug_history_state" === r.type
                                            ? s.h.dispatch({
                                                  type: "VIBEGRATIONS_HISTORY_LOAD_SETTLE",
                                                  projectId: t,
                                                  scope: r.scope,
                                                  status: r.status,
                                                  count: r.count,
                                                  truncated: !0 === r.truncated,
                                              })
                                            : (s.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: r }),
                                              (function (e, t) {
                                                  if (!0 === t.historical || "error" !== t.level) return;
                                                  let n = null != t.source ? x[t.source] : void 0;
                                                  if (null == n) return;
                                                  let r = J.get(e);
                                                  null == r && ((r = new Set()), J.set(e, r));
                                                  let i = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                                  r.has(i) ||
                                                      r.size >= 10 ||
                                                      (r.add(i),
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
                    ? v(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), v(e, "connecting"), t.backoff.fail(() => K(e)))
                      : (v(e, "closed"),
                        L(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        (v(e, "failed"),
            L(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            m(t, "Connection failed before the publish result arrived"),
            w(t, "Connection failed before the draft arrived"),
            (0, c.Z0)(e, {
                location: "connection",
                code: c.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function K(e) {
    let t = I.get(e);
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
        I.set(e, t));
    let n = t;
    ((n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        v(e, "connecting"),
        s.h.dispatch({ type: "VIBEGRATIONS_TRACE_REPLAY_STARTING", projectId: e }),
        F(e, n));
}
function X(e) {
    var t;
    let n = I.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        m(n, "Connection closed before the publish result arrived"),
        w(n, "Connection closed before the draft arrived"),
        n.ws.close(),
        I.delete(e),
        (t = e),
        ea.delete(t),
        d.A.releasePreviewControl(e),
        _(e),
        v(e, "closed"),
        !0)
    );
}
function Z(e) {
    let t = I.get(e);
    if (null == t) return void K(e);
    let n = b.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || K(e);
}
function z(e, t, n) {
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
        d = I.get(e);
    if (null != d && ("connecting" === b.get(e) || d.reconnectPending)) return void d.pendingSends.push(c);
    V(e, c);
    try {
        if (null == d) throw Error("Not connected");
        d.ws.sendUserMessage(
            c.content,
            c.nonce,
            c.attachments?.map((e) => e.id),
            y.Ay.getProject(e)?.name,
            { templateId: c.templateId, remix: c.remix, clarificationAnswers: c.clarificationAnswers },
        );
    } catch (t) {
        (console.error("[vibegrations] send failed", t), U(e, t instanceof Error ? t.message : "send failed"));
    }
}
function Y(e) {
    let t = I.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            S.Ay.isThinking(e) && (N.add(e), s.h.dispatch({ type: "VIBEGRATIONS_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
let Q = 221552 == n.j ? 9e5 : null;
function ee(e) {
    let t = !1;
    return new Promise((n, r) => {
        let i = I.get(e);
        if (null == i) return void r(Error("Not connected"));
        if (null != i.pendingPublish) return void r(Error("Publish already in flight"));
        let o = setTimeout(() => {
            m(i, "Publish timed out");
        }, Q);
        ((i.pendingPublish = { resolve: n, reject: r, timeout: o }),
            (t = !0),
            s.h.dispatch({ type: "VIBEGRATIONS_PROJECT_PUBLISH_START", projectId: e }));
        try {
            i.ws.sendPublish();
        } catch (e) {
            ((i.pendingPublish = null), clearTimeout(o), r(e instanceof Error ? e : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, l.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && s.h.dispatch({ type: "VIBEGRATIONS_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function et(e) {
    return new Promise((t, n) => {
        let r = I.get(e);
        if (null == r) return void n(Error("Not connected"));
        w(r, "Superseded by a newer draft request");
        let i = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            s = setTimeout(() => {
                w(r, "Draft timed out");
            }, 1e4);
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
function en(e, t) {
    let n = I.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function er(e) {
    s.h.dispatch({ type: "VIBEGRATIONS_DEBUG_STATUS_REQUESTED", projectId: e });
    let t = I.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendDebugStatusRequest();
    } catch (t) {
        (console.error("[vibegrations] debug status request failed", t),
            s.h.dispatch({ type: "VIBEGRATIONS_DEBUG_STATUS_SET", projectId: e, status: null, failed: !0 }));
    }
}
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    s.h.dispatch({ type: "VIBEGRATIONS_DEBUG_FORCE_COMPACTION_REQUESTED", projectId: e });
    let n = I.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendForceCompaction(t);
    } catch (t) {
        (console.error("[vibegrations] force compaction request failed", t),
            s.h.dispatch({
                type: "VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT",
                projectId: e,
                outcome: "failed",
                reason: "Not connected",
                observedAt: new Date().toISOString(),
            }));
    }
}
function es(e, t) {
    let n = I.get(e);
    try {
        if (null == n) throw Error("Not connected");
        return (n.ws.sendLiveReload(t), !0);
    } catch (e) {
        return (console.error("[vibegrations] live reload send failed", e), !1);
    }
}
function eo(e, t) {
    let n = I.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let ea = new Map();
function el(e) {
    let t = (0, S.bi)(e);
    if (null == t) return !1;
    if (ea.get(e) === t) return !0;
    let n = I.get(e);
    return null != n && (ea.set(e, t), n.ws.sendLoadHistory(t), !0);
}
let ec = new Map(),
    ed = new Map();
function eu(e) {
    let t = ec.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = ed.get(e);
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
            return (null != n && ec.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            ed.delete(e);
        });
    return (ed.set(e, r), r);
}
async function ep(e) {
    let { ticket: t, baseUrl: n } = await (0, p.d)(e),
        r = new URLSearchParams({ ticket: t }),
        i = await fetch(`${n}/agent/source-history?${r}`);
    if (!i.ok) throw Error(`version history failed (${i.status})`);
    let s = await i.json();
    return Array.isArray(s.entries) ? s.entries : [];
}
async function eh(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
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
            (0, l.tZ)(e, { isPreview: !0 }).catch((t) => {
                console.error("[vibegrations] post-version-restore refresh failed", e, t);
            }),
        o.entry
    );
}
async function ef(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        i = new URLSearchParams({ ticket: n, environment: t }),
        s = await fetch(`${r}/agent/database/restore-points?${i}`);
    if (!s.ok) throw Error(`restore points failed (${s.status})`);
    let o = await s.json();
    return Array.isArray(o.restorePoints) ? o.restorePoints : [];
}
async function e_(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        i = new URLSearchParams({ ticket: n, environment: t }),
        s = await fetch(`${r}/agent/database/restore-window?${i}`);
    if (!s.ok) throw Error(`restore window failed (${s.status})`);
    return await s.json();
}
async function eg(e, t, n) {
    let { ticket: r, baseUrl: i } = await (0, p.d)(e),
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
async function eS(e, t) {
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
            (0, l.Eo)(e);
        } catch (t) {
            console.error("[vibegrations] post-data-restore frame reload failed", e, t);
        }
    return i;
}
async function ey(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        i = new URLSearchParams({ ticket: n });
    return eS(
        e,
        await fetch(`${r}/agent/database/restore-points/${encodeURIComponent(t)}/restore?${i}`, { method: "POST" }),
    );
}
async function eE(e, t, n) {
    let { ticket: r, baseUrl: i } = await (0, p.d)(e),
        s = new URLSearchParams({ ticket: r });
    return eS(
        e,
        await fetch(`${i}/agent/database/restore?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ environment: t, timestampMs: n }),
        }),
    );
}
function eT(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function em(e, t) {
    return ew(e, t, t.name, t.type);
}
async function ew(e, t, n, r) {
    let { ticket: i, baseUrl: s } = await (0, p.d)(e),
        o = new URLSearchParams({ ticket: i, name: n }),
        a = await fetch(`${eT(s)}?${o}`, {
            method: "POST",
            headers: { "content-type": "" !== r ? r : "application/octet-stream" },
            body: t,
        });
    if (!a.ok) throw Error(`attachment upload failed (${a.status})`);
    return await a.json();
}
class eI extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function eA(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        i = new URLSearchParams({ ticket: n, name: t }),
        s = await fetch(`${r}/agent/export?${i}`);
    if (!s.ok) throw new eI(s.status);
    return await s.blob();
}
class ek extends Error {
    status;
    constructor(e) {
        (super(`remix failed (${e})`), (this.status = e));
    }
}
async function eb(e, t) {
    let [n, r] = await Promise.all([(0, p.g)(e), (0, p.d)(t)]),
        i = new URLSearchParams({ ticket: n.ticket }),
        s = await fetch(`${n.baseUrl}/agent/fork?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!s.ok) throw new ek(s.status);
}
async function eO(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/secrets?${i}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!s.ok) throw Error(`secret submission failed (${s.status})`);
}
async function eN(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
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
function eR(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await (0, p.d)(e),
            r = new URLSearchParams({ ticket: t }),
            i = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        i.ok || console.warn("[vibegrations] settings rebuild request failed", e, i.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
function eP(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function ev(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await (0, p.d)(e),
        i = new URLSearchParams({ ticket: n });
    t && i.set("regenerate", "1");
    let s = await fetch(`${r}/agent/mcp-token?${i}`, { method: "POST" });
    if (!s.ok) throw Error(`mcp token failed (${s.status})`);
    let o = await s.json(),
        a = "number" == typeof o.expires_in ? Date.now() + 1e3 * o.expires_in : Date.parse(o.expires_at);
    return { url: o.url, expiresAtMs: a };
}
async function eC(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: i } = await (0, p.d)(e);
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
async function eG(e, t) {
    let { ticket: n, baseUrl: r } = await (0, p.d)(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${eT(r, t)}?${i}`, { method: "DELETE", keepalive: !0 });
    if (!s.ok) throw Error(`attachment cleanup failed (${s.status})`);
}
async function eU(e, t) {
    let { ticket: n, baseUrl: r } = await eu(e),
        i = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${i}`;
}
async function eB(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: i } = await eu(e),
        s = new URLSearchParams({ ticket: r });
    return (n && s.set("download", "1"), `${eT(i, t)}?${s}`);
}
async function eD(e, t) {
    async function n() {
        return fetch(await eB(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (ec.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eV(e) {
    X(e);
}
class eH extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default, S.Ay, y.Ay);
    }
    getConnState(e) {
        return b.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return O.get(e) ?? !1;
    }
    getModelSettings(e) {
        return R.get(e) ?? null;
    }
    getSettings(e) {
        return P.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return P.get(e)?.connections ?? eL;
    }
}
let eL = [],
    e$ = new eH(s.h, {
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (b.get(t) === n) return !1;
            (b.set(t, n), ("closed" === n || "failed" === n) && N.delete(t));
        },
        VIBEGRATIONS_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((O.get(t) ?? !1) === n) return !1;
            O.set(t, n);
        },
        VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, tierSettings: r, tiers: i, choices: s } = e;
            R.set(t, { settings: n, tierSettings: r, tiers: i, choices: s });
        },
        VIBEGRATIONS_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            P.set(t, n);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!X(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(I.keys())) null == y.Ay.getProject(e) && X(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === I.size) return !1;
            for (let e of Array.from(I.keys())) X(e);
            (O.clear(), D.clear(), ec.clear());
        },
    });
