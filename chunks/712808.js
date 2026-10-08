(n.d(t, {
    DM: () => eO,
    tp: () => ed,
    r2: () => eh,
    gm: () => eI,
    n6: () => eV,
    ss: () => eB,
    $S: () => ej,
    cS: () => eM,
    R7: () => ef,
    aF: () => ez,
    Lj: () => eg,
    JI: () => eW,
    Vm: () => eF,
    oX: () => e$,
    ms: () => eR,
    TV: () => eu,
    dv: () => el,
    Hc: () => ea,
    Bn: () => eY,
    XZ: () => ey,
    oB: () => ek,
    ho: () => ex,
    $D: () => eA,
    fu: () => ec,
    Ay: () => e0,
    $C: () => ep,
    Rw: () => ei,
    vX: () => eJ,
    c9: () => eD,
    ct: () => eE,
    dz: () => eP,
    PK: () => eQ,
    Qe: () => eH,
    TP: () => e_,
    y_: () => eq,
    xE: () => eL,
    nU: () => eG,
    P6: () => em,
    _m: () => eN,
    Du: () => eb,
}),
    n(321073),
    n(508300),
    n(323874),
    n(14289),
    n(35956));
var r = n(158390),
    s = n(17928),
    i = n(73153),
    o = n(195880),
    a = n(287809),
    l = n(245179),
    c = n(278359),
    d = n(785389);
let u = new Map(),
    p = new Map(),
    h = new Map();
function _(e, t, n) {
    f(e, t);
    let r = setTimeout(() => e.delete(t), 1e4);
    e.set(t, { ...n, timer: r });
}
function f(e, t) {
    let n = e.get(t);
    null != n && (clearTimeout(n.timer), e.delete(t));
}
function g(e, t) {
    _(h, t, { projectId: e });
}
function E(e, t) {
    let n = u.get(t);
    null != n && (clearTimeout(n.timer), n.resolve(null));
    let r = p.get(t);
    return null != r
        ? (f(p, t), g(e, t), Promise.resolve({ uploadToken: r.uploadToken }))
        : new Promise((n) => {
              let r = setTimeout(() => {
                  (u.delete(t), n(null));
              }, 5e3);
              u.set(t, { resolve: n, timer: r, projectId: e });
          });
}
function y(e) {
    for (let [t, n] of [...u]) n.projectId === e && (u.delete(t), clearTimeout(n.timer), n.resolve(null));
    for (let t of [p, h]) for (let [n, r] of [...t]) r.projectId === e && f(t, n);
}
var S = n(573083),
    m = n(855859),
    w = n(371169),
    C = n(260498),
    T = n(385081),
    b = n(868695);
class k {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: r, onClose: s, onError: i } = e;
        this.close();
        let o = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            a = new WebSocket(`${o}/agent/ws?ticket=${encodeURIComponent(n)}&debug=on_demand`);
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
                this.socket === a && i?.(e);
            }),
            a.addEventListener("close", () => {
                this.socket === a && s?.();
            }));
    }
    sendUserMessage(e, t, n, r) {
        let {
            templateId: s,
            remix: i,
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
                template_id: s,
                remix: i,
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
    sendQueuedMessageAction(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: `${e}_queued_message`, id: t }));
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
var O = n(382541);
(n(643210), n(944142));
var R = n(248675),
    N = n(660183);
function U(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
function A(e, t) {
    let n = e.pendingPatchNotesDraft;
    null != n && ((e.pendingPatchNotesDraft = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let P = new Map(),
    v = new Set(["activity", "automod", "widget", "bot"]);
function J(e) {
    return null != e && v.has(e) ? e : null;
}
let I = new Map(),
    D = new Map(),
    L = new Set(),
    M = new Map(),
    H = new Map();
function $(e, t) {
    i.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
let j = { location: "connection", code: T.xf.SEND_FAILED },
    G = { location: "agent", code: T.xf.AGENT_ERROR };
function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j;
    (i.h.dispatch({
        type: "CONJURE_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, T.Hy)(e, { ...n, message: t }));
}
function x(e) {
    return `optimistic:${e}`;
}
let q = new Map();
function W(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    (q.set(r, a.default.getCurrentUser()?.id),
        i.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: x(r),
            userId: a.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        }));
}
let F = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function z(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (W(e, s), B(e, n));
}
function K(e, t) {
    if (!0 === D.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        W(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
                C.Ay.getProject(e)?.name,
                { templateId: r.templateId, remix: r.remix, clarificationAnswers: r.clarificationAnswers },
            );
        } catch (t) {
            (console.error("[vibegrations] queued send failed", t),
                B(e, t instanceof Error ? t.message : "send failed"));
        }
    }
}
async function Q(e, t, n) {
    try {
        let { ticket: r } = await (0, O.g)(n);
        e.ws.sendUpstreamTicketAck(t, r);
    } catch (r) {
        let n = r?.status;
        e.ws.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
let V = {
        build_error: { location: "build", code: T.xf.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: T.xf.HEALTHCHECK_FAILED },
        error: { location: "agent", code: T.xf.AGENT_ERROR },
    },
    Y = {
        web: { location: "runtime_frame", code: T.xf.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: T.xf.RUNTIME_WORKER_ERROR },
    },
    X = new Map();
async function Z(e, t, n) {
    let r,
        s = Date.now();
    (console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, m.b)(e, "widget"));
    try {
        r = await b.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await E(e, n.id)),
            resolveUploadUrl: () => eK(e),
        });
    } catch (e) {
        (console.error("[vibegrations] preview capture relay failed", e), (r = { status: "failed" }));
    }
    (console.debug("[vibegrations] capture relay answered", {
        id: n.id,
        status: r.status,
        code: r.code,
        ms: Date.now() - s,
    }),
        t.ws.sendCaptureAck(n.id, r.status, r.code, r.message));
}
async function ee(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let s = await b.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await E(e, n.id)) != null),
        );
        (console.debug("[vibegrations] control relay answered", { id: n.id, status: s.status, ms: Date.now() - r }),
            "completed" === s.status
                ? t.ws.sendControlAck(n.id, "completed", s.response)
                : "failed" === s.status
                  ? t.ws.sendControlAck(n.id, "failed", void 0, s.message)
                  : t.ws.sendControlAck(n.id, "unavailable"));
    } catch (e) {
        (console.error("[vibegrations] preview control relay failed", e),
            t.ws.sendControlAck(n.id, "failed", void 0, "the client could not drive the preview frame"));
    }
}
async function et(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await (0, O.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    var s;
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
                            "open" !== I.get(t))
                    )
                        return void n.pendingEvents.push(r);
                    if ("history_page" === r.type) {
                        if (r.requested !== eS.get(t) || (eS.delete(t), !0 === r.failed)) return;
                        i.h.dispatch({
                            type: "CONJURE_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (r.messages ?? []).slice(),
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        });
                        return;
                    }
                    if ("hello" === r.type)
                        ((n.helloSeen = !0),
                            (n.debugOnDemand = !0 === r.debug_on_demand),
                            n.debugOnDemand || i.h.dispatch({ type: "CONJURE_TRACE_REPLAY_STARTING", projectId: t }),
                            n.backoff.succeed());
                    else if ("history" === r.type) {
                        let s = (r.messages ?? []).slice();
                        (i.h.dispatch({
                            type: "CONJURE_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: s,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                            degraded: !0 === r.degraded,
                        }),
                            eS.delete(t));
                        let o = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), $(t, "open"), o)) e(t, n, r);
                        (er.get(t) ?? 0) > 0 && es(t, n);
                        let a = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != a))
                            try {
                                n.ws.sendModelSettings(a);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        K(t, n);
                    } else if ("chat_state" === r.type)
                        (i.h.dispatch({ type: "CONJURE_CHAT_STOPPED_SET", projectId: t, stopped: r.stopped }),
                            r.stopped || "open" !== I.get(t) || K(t, n));
                    else if ("user_message" === r.type) {
                        let e, n, s;
                        ((n = (e = null != r.nonce && q.has(r.nonce)) && null != r.nonce ? q.get(r.nonce) : void 0),
                            (s = e && (null == n || null == r.user_id || n === r.user_id)) &&
                                null != r.nonce &&
                                q.delete(r.nonce),
                            i.h.dispatch({
                                type: "CONJURE_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(s && null != r.nonce ? { optimisticId: x(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            }));
                    } else if ("message_disposition" === r.type)
                        ((s = r.disposition),
                            Object.prototype.hasOwnProperty.call(F, s) &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: r.id,
                                    activeTurnId: r.active_turn_id,
                                    disposition: r.disposition,
                                }));
                    else if ("message_cancelled" === r.type)
                        i.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: t, id: r.id });
                    else if ("publish_notice" === r.type)
                        i.h.dispatch({
                            type: "CONJURE_CHAT_PUBLISH_NOTICE",
                            projectId: t,
                            id: r.id,
                            content: r.content,
                            timestamp: r.ts,
                            publishNotice: r.publish_notice,
                        });
                    else if (
                        "app_removed" === r.type ||
                        "bot_removed" === r.type ||
                        "preview_bot_removed" === r.type ||
                        "app_channel_deleted" === r.type
                    )
                        (i.h.dispatch({ type: "CONJURE_CHAT_PROJECT_EVENT", projectId: t, event: r }),
                            "app_channel_deleted" !== r.type && (0, w.GO)(t));
                    else if ("side_reply" === r.type)
                        i.h.dispatch({
                            type: "CONJURE_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: r.id,
                            inReplyTo: r.in_reply_to,
                            content: r.content,
                            timestamp: r.ts,
                        });
                    else if ("source_checkpoint" === r.type)
                        i.h.dispatch({
                            type: "CONJURE_CHAT_SOURCE_CHECKPOINT",
                            projectId: t,
                            turnId: r.turn_id,
                            sourceSha: r.source_sha,
                        });
                    else if ("turn_notification" === r.type)
                        i.h.dispatch({
                            type: "CONJURE_TURN_NOTIFICATION",
                            projectId: t,
                            body: r.summary,
                            nonce: r.nonce,
                        });
                    else if ("provisional_todo" === r.type)
                        i.h.dispatch({
                            type: "CONJURE_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: r.turn_id,
                            text: r.text,
                        });
                    else if ("step" === r.type)
                        if ("reply" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e
                                ? i.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : B(t, N.intl.string(R.default["913RMa"]), G);
                        } else if ("thinking_lifecycle" === r.kind) {
                            let { phase: e, session: n, seq: s, ticks: o, elapsed_ms: a, text: l } = r;
                            null != e &&
                                null != s &&
                                null != n &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_THINKING_SET",
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
                                    type: "CONJURE_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === r.phase,
                                });
                        else if ("saving" === r.kind)
                            ("start" === r.phase || "end" === r.phase) &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_SAVING_SET",
                                    projectId: t,
                                    saving: "start" === r.phase,
                                });
                        else if ("debug_compaction_declined" === r.kind)
                            null != r.projected &&
                                null != r.threshold &&
                                i.h.dispatch({
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
                                i.h.dispatch({
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
                                i.h.dispatch({
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
                                (i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { todos: e },
                                }),
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("plan_proposed" === r.kind)
                            null != r.proposal
                                ? i.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { proposal: r.proposal, kind: "proposal" },
                                  })
                                : B(t, N.intl.string(R.default["0+RUWx"]), G);
                        else if ("ideas" === r.kind)
                            null != r.ideas &&
                                r.ideas.length > 0 &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { ideas: r.ideas },
                                });
                        else if ("restore_proposal" === r.kind)
                            null != r.restore_proposal &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { restoreProposal: r.restore_proposal },
                                });
                        else if ("publish_cta" === r.kind)
                            null != r.publish_cta &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { publishCta: { surface: J(r.publish_cta.surface) } },
                                });
                        else if ("publish_status" === r.kind)
                            i.h.dispatch({
                                type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                                projectId: t,
                                published: !0 === r.published,
                                hasUnpublishedChanges: !0 === r.has_unpublished_changes,
                                surface: J(r.surface),
                            });
                        else if ("clarification" === r.kind)
                            null != r.clarification &&
                                (r.clarification.questions?.length ?? 0) > 0 &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { clarification: r.clarification },
                                });
                        else if ("attachment" === r.kind)
                            null != r.attachments &&
                                r.attachments.length > 0 &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { attachments: r.attachments },
                                });
                        else if ("collect_secrets" === r.kind) {
                            let e = r.fields ?? [];
                            e.length > 0 &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { secretRequest: { fields: e, note: r.note, copy_values: r.copy_values } },
                                });
                        } else if ("collect_settings" === r.kind)
                            i.h.dispatch({
                                type: "CONJURE_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: r.turn_id,
                                patch: { settingsRequest: { keys: r.keys, note: r.note } },
                            });
                        else if ("awaiting_user" === r.kind)
                            "secrets" === r.action &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { awaitingUser: { action: r.action } },
                                });
                        else if ("intake" === r.kind)
                            null != r.intake &&
                                (r.intake.questions?.length ?? 0) > 0 &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { intake: r.intake },
                                });
                        else if ("usage" === r.kind)
                            null != r.turn &&
                                null != r.project &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: r.turn,
                                    project: r.project,
                                });
                        else if ("reaction" === r.kind)
                            null != r.message_id &&
                                null != r.emoji &&
                                "" !== r.emoji &&
                                i.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_REACTION",
                                    projectId: t,
                                    id: r.message_id,
                                    emoji: r.emoji,
                                });
                        else if ("project_named" === r.kind) {
                            let e = C.Ay.getProject(t);
                            null != e &&
                                null != r.name &&
                                i.h.dispatch({
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
                                let e = C.Ay.getPublishStatus(t);
                                null != e &&
                                    i.h.dispatch({
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
                                let s = r.attachment_id;
                                function o(e) {
                                    null != s && "" !== s && n.ws.sendAppIconAck(s, e);
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
                                ? ((0, T.hV)(t, r),
                                  "deployed" === r.result &&
                                      i.h.dispatch({
                                          type: "CONJURE_CHAT_TURN_PATCH",
                                          projectId: t,
                                          turnId: r.turn_id,
                                          patch: { kind: "plan_implemented" },
                                      }),
                                  i.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_FINISHED",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      summary: r.summary,
                                  }),
                                  L.delete(t) &&
                                      "cancelled" === r.result &&
                                      i.h.dispatch({ type: "CONJURE_CHAT_INTERRUPTED", projectId: t }))
                                : (i.h.dispatch({
                                      type: "CONJURE_CHAT_STEP_APPEND",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      step: r,
                                  }),
                                  ("build_error" === r.kind || "healthcheck_failed" === r.kind || "error" === r.kind) &&
                                      (0, T.Hy)(t, {
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
                            ? Z(t, n, r).catch(() => {})
                            : "control_preview" === r.type
                              ? ee(t, n, r).catch(() => {})
                              : "control_abort" === r.type
                                ? b.A.abortPreviewControl(t)
                                : "control_claim" === r.type || "capture_claim" === r.type
                                  ? (function (e, t, n) {
                                        let r = u.get(t);
                                        if (null == r) {
                                            h.has(t) || _(p, t, { uploadToken: n, projectId: e });
                                            return;
                                        }
                                        (u.delete(t), clearTimeout(r.timer), g(e, t), r.resolve({ uploadToken: n }));
                                    })(t, r.id, "capture_claim" === r.type ? r.upload_token : void 0)
                                  : "preview_operation" === r.type
                                    ? "begin" === r.phase
                                        ? ((0, S.pF)(t, "tuning" === r.mode), b.A.beginPreviewOperation(t))
                                        : ((0, S.pF)(t, !1), b.A.endPreviewOperation(t))
                                    : "browser_sessions" === r.type
                                      ? i.h.dispatch({
                                            type: "CONJURE_BROWSER_SESSIONS_SET",
                                            projectId: t,
                                            sessions: r.sessions,
                                        })
                                      : "live_reload" === r.type
                                        ? i.h.dispatch({
                                              type: "CONJURE_LIVE_RELOAD_SET",
                                              projectId: t,
                                              enabled: r.enabled,
                                              error: r.error ?? null,
                                              phase: r.phase ?? null,
                                              step: r.step ?? null,
                                          })
                                        : "model_settings" === r.type
                                          ? i.h.dispatch({
                                                type: "CONJURE_MODEL_SETTINGS_SET",
                                                projectId: t,
                                                settings: r.settings,
                                                tierSettings: r.tier_settings ?? null,
                                                tiers: r.tiers ?? null,
                                                choices: r.choices,
                                            })
                                          : "debug_status" === r.type
                                            ? i.h.dispatch({
                                                  type: "CONJURE_DEBUG_STATUS_SET",
                                                  projectId: t,
                                                  status: r.status ?? null,
                                                  failed: !0 === r.failed || null == r.status,
                                              })
                                            : "settings" === r.type
                                              ? i.h.dispatch({
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
                                                ? (i.h.dispatch({
                                                      type: "CONJURE_MODEL_CALL_APPEND",
                                                      projectId: t,
                                                      modelCall: r,
                                                  }),
                                                  "started" !== r.status &&
                                                      i.h.dispatch({
                                                          type: "CONJURE_DEBUG_MODEL_CALL",
                                                          projectId: t,
                                                          ...(0, c.c)(r),
                                                          observedAt: new Date().toISOString(),
                                                      }))
                                                : "debug_backlog" === r.type
                                                  ? i.h.dispatch({
                                                        type: "CONJURE_DEBUG_BACKLOG",
                                                        projectId: t,
                                                        backlog: r,
                                                        observedAt: new Date().toISOString(),
                                                    })
                                                  : "timing_trace" === r.type
                                                    ? (console.log(
                                                          "[vibegrations] timing trace",
                                                          JSON.stringify(r.trace),
                                                      ),
                                                      i.h.dispatch({
                                                          type: "CONJURE_DEBUG_TIMING_TRACE",
                                                          projectId: t,
                                                          trace: r.trace,
                                                      }))
                                                    : "debug_tool_call" === r.type
                                                      ? i.h.dispatch({
                                                            type: "CONJURE_TOOL_CALL_APPEND",
                                                            projectId: t,
                                                            toolCall: r,
                                                        })
                                                      : "request_upstream_ticket" === r.type
                                                        ? Q(n, r.id, r.project_id)
                                                        : "debug_history_state" === r.type
                                                          ? i.h.dispatch({
                                                                type: "CONJURE_HISTORY_LOAD_SETTLE",
                                                                projectId: t,
                                                                scope: r.scope,
                                                                status: r.status,
                                                                count: r.count,
                                                                truncated: !0 === r.truncated,
                                                            })
                                                          : (i.h.dispatch({
                                                                type: "CONJURE_LOG_APPEND",
                                                                projectId: t,
                                                                log: r,
                                                            }),
                                                            (function (e, t) {
                                                                if (!0 === t.historical || "error" !== t.level) return;
                                                                let n = null != t.source ? Y[t.source] : void 0;
                                                                if (null == n) return;
                                                                let r = X.get(e);
                                                                null == r && ((r = new Set()), X.set(e, r));
                                                                let s = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                                                r.has(s) ||
                                                                    r.size >= 10 ||
                                                                    (r.add(s),
                                                                    (0, T.Hy)(e, {
                                                                        location: n.location,
                                                                        code: n.code,
                                                                        message: t.message,
                                                                        details: t.source,
                                                                    }));
                                                            })(t, r));
                })(e, t, n),
            onClose: () => {
                (U(t, "Connection closed before the publish result arrived"),
                A(t, "Connection closed before the draft arrived"),
                y(e),
                t.disposed)
                    ? $(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), $(e, "connecting"), t.backoff.fail(() => en(e)))
                      : ($(e, "closed"),
                        z(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        ($(e, "failed"),
            z(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            U(t, "Connection failed before the publish result arrived"),
            A(t, "Connection failed before the draft arrived"),
            (0, T.Hy)(e, {
                location: "connection",
                code: T.xf.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            }));
    }
}
function en(e) {
    let t = P.get(e);
    null == t &&
        ((t = {
            ws: new k(),
            backoff: new r.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingPublish: null,
            pendingPatchNotesDraft: null,
            debugOnDemand: !1,
        }),
        P.set(e, t));
    let n = t;
    ((n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.debugOnDemand = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        $(e, "connecting"),
        et(e, n));
}
let er = new Map();
function es(e, t) {
    t.debugOnDemand &&
        (i.h.dispatch({ type: "CONJURE_TRACE_REPLAY_STARTING", projectId: e }), t.ws.sendDebugSubscribe());
}
function ei(e) {
    let t = er.get(e) ?? 0;
    er.set(e, t + 1);
    let n = P.get(e);
    return (
        0 === t && null != n && "open" === I.get(e) && es(e, n),
        () => {
            let t = (er.get(e) ?? 1) - 1;
            t > 0 ? er.set(e, t) : er.delete(e);
        }
    );
}
function eo(e) {
    var t;
    let n = P.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        U(n, "Connection closed before the publish result arrived"),
        A(n, "Connection closed before the draft arrived"),
        n.ws.close(),
        P.delete(e),
        (t = e),
        eS.delete(t),
        b.A.releasePreviewControl(e),
        y(e),
        $(e, "closed"),
        !0)
    );
}
function ea(e) {
    let t = P.get(e);
    if (null == t) return void en(e);
    let n = I.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || en(e);
}
function el(e, t, n) {
    let {
            templateId: r,
            remix: s,
            clarificationAnswers: i,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = t.trim(),
        l = null != n && n.length > 0 ? n : void 0;
    if ("" === a && null == l) return;
    let c = {
            content: a,
            nonce: (0, o.m)(),
            attachments: l,
            templateId: r,
            remix: s,
            ...(null != i ? { clarificationAnswers: i } : {}),
        },
        d = P.get(e);
    if (null != d && ("connecting" === I.get(e) || d.reconnectPending)) return void d.pendingSends.push(c);
    W(e, c);
    try {
        if (null == d) throw Error("Not connected");
        d.ws.sendUserMessage(
            c.content,
            c.nonce,
            c.attachments?.map((e) => e.id),
            C.Ay.getProject(e)?.name,
            { templateId: c.templateId, remix: c.remix, clarificationAnswers: c.clarificationAnswers },
        );
    } catch (t) {
        (console.error("[vibegrations] send failed", t), B(e, t instanceof Error ? t.message : "send failed"));
    }
}
function ec(e) {
    let t = P.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            l.Ay.isThinking(e) && (L.add(e), i.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function ed(e, t, n) {
    try {
        let r = P.get(e);
        if (null == r) throw Error("Not connected");
        r.ws.sendQueuedMessageAction(n, t);
    } catch (e) {
        console.error(`[vibegrations] ${n} queued message failed`, e);
    }
}
function eu(e) {
    let t = !1;
    return new Promise((n, r) => {
        let s = P.get(e);
        if (null == s) return void r(Error("Not connected"));
        if (null != s.pendingPublish) return void r(Error("Publish already in flight"));
        let o = setTimeout(() => {
            U(s, "Publish timed out");
        }, 9e5);
        ((s.pendingPublish = { resolve: n, reject: r, timeout: o }),
            (t = !0),
            i.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            s.ws.sendPublish();
        } catch (e) {
            ((s.pendingPublish = null), clearTimeout(o), r(e instanceof Error ? e : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, w.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && i.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function ep(e) {
    return new Promise((t, n) => {
        let r = P.get(e);
        if (null == r) return void n(Error("Not connected"));
        A(r, "Superseded by a newer draft request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => {
                A(r, "Draft timed out");
            }, 45e3);
        r.pendingPatchNotesDraft = { resolve: t, reject: n, timeout: i, nonce: s };
        try {
            r.ws.sendDraftPatchNotes(s);
        } catch (e) {
            ((r.pendingPatchNotesDraft = null),
                clearTimeout(i),
                n(e instanceof Error ? e : Error("draft send failed")));
        }
    });
}
function eh(e, t) {
    let n = P.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function e_(e) {
    P.get(e)?.ws.sendRefreshBrowserSessions();
}
function ef(e) {
    i.h.dispatch({ type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId: e });
    let t = P.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendDebugStatusRequest();
    } catch (t) {
        (console.error("[vibegrations] debug status request failed", t),
            i.h.dispatch({ type: "CONJURE_DEBUG_STATUS_SET", projectId: e, status: null, failed: !0 }));
    }
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    i.h.dispatch({ type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId: e });
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendForceCompaction(t);
    } catch (t) {
        (console.error("[vibegrations] force compaction request failed", t),
            i.h.dispatch({
                type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
                projectId: e,
                outcome: "failed",
                reason: "Not connected",
                observedAt: new Date().toISOString(),
            }));
    }
}
function eE(e, t) {
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        return (n.ws.sendLiveReload(t), !0);
    } catch (e) {
        return (console.error("[vibegrations] live reload send failed", e), !1);
    }
}
function ey(e, t) {
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let eS = new Map();
function em(e) {
    let t = (0, l.bi)(e);
    if (null == t) return !1;
    if (eS.get(e) === t) return !0;
    let n = P.get(e);
    return null != n && "open" === I.get(e) && (eS.set(e, t), n.ws.sendLoadHistory(t), !0);
}
let ew = new Map(),
    eC = new Map();
function eT(e) {
    let t = ew.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = eC.get(e);
    if (null != n) return n;
    let r = (0, O.d)(e)
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
            return (null != n && ew.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            eC.delete(e);
        });
    return (eC.set(e, r), r);
}
async function eb(e) {
    let { ticket: t, baseUrl: n } = await (0, O.d)(e),
        r = new URLSearchParams({ ticket: t }),
        s = await fetch(`${n}/agent/source-history?${r}`);
    if (!s.ok) throw Error(`version history failed (${s.status})`);
    let i = await s.json();
    return {
        entries: Array.isArray(i.entries) ? i.entries : [],
        previewSha: "string" == typeof i.previewSha ? i.previewSha : null,
        publishedSha: "string" == typeof i.publishedSha ? i.publishedSha : null,
    };
}
async function ek(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${s}`, { method: "POST" });
    if (!i.ok) {
        let e = (await i.text()).trim();
        throw Error(`version restore failed (${i.status})${"" === e ? "" : `: ${e}`}`);
    }
    let o = await i.json();
    if (null == o.entry) throw Error("version restore returned no commit");
    return (
        !0 === o.live ||
            (0, w.tZ)(e, { isPreview: !0 }).catch((t) => {
                console.error("[vibegrations] post-version-restore refresh failed", e, t);
            }),
        o.entry
    );
}
async function eO(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n, environment: t }),
        i = await fetch(`${r}/agent/database/restore-points?${s}`);
    if (!i.ok) throw Error(`restore points failed (${i.status})`);
    let o = await i.json();
    return Array.isArray(o.restorePoints) ? o.restorePoints : [];
}
async function eR(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n, environment: t }),
        i = await fetch(`${r}/agent/database/restore-window?${s}`);
    if (!i.ok) throw Error(`restore window failed (${i.status})`);
    return await i.json();
}
async function eN(e, t, n) {
    let { ticket: r, baseUrl: s } = await (0, O.d)(e),
        i = new URLSearchParams({ ticket: r }),
        o = await fetch(`${s}/agent/database/restore-points?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(null != n && "" !== n.trim() ? { environment: t, label: n } : { environment: t }),
        });
    if (!o.ok) throw Error(`restore point create failed (${o.status})`);
    let a = await o.json();
    if (null == a.restorePoint) throw Error("restore point create returned nothing");
    return a.restorePoint;
}
async function eU(e, t) {
    var n;
    let r = t.ok && 202 !== t.status ? "" : (await t.text()).trim(),
        s =
            ((n = t.status),
            202 === n
                ? { ok: !1, code: "unconfirmed", message: r }
                : n >= 200 && n < 300
                  ? { ok: !0 }
                  : { ok: !1, code: 410 === n ? "expired" : "failed", message: r });
    if (s.ok)
        try {
            (0, w.BD)(e);
        } catch (t) {
            console.error("[vibegrations] post-data-restore frame reload failed", e, t);
        }
    return s;
}
async function eA(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n });
    return eU(
        e,
        await fetch(`${r}/agent/database/restore-points/${encodeURIComponent(t)}/restore?${s}`, { method: "POST" }),
    );
}
async function eP(e, t, n) {
    let { ticket: r, baseUrl: s } = await (0, O.d)(e),
        i = new URLSearchParams({ ticket: r });
    return eU(
        e,
        await fetch(`${s}/agent/database/restore?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ environment: t, timestampMs: n }),
        }),
    );
}
function ev(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function eJ(e, t) {
    return eD(e, t, t.name, t.type);
}
async function eI(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = await fetch(`${ev(r, "from-url")}?${new URLSearchParams({ ticket: n })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ url: t }),
        }),
        i = await s.json().catch(() => null);
    if (!s.ok || null == i || !("id" in i))
        throw Error(null != i && "error" in i && "string" == typeof i.error ? i.error : "");
    return i;
}
async function eD(e, t, n, r) {
    let { ticket: s, baseUrl: i } = await (0, O.d)(e),
        o = new URLSearchParams({ ticket: s, name: n }),
        a = await fetch(`${ev(i)}?${o}`, {
            method: "POST",
            headers: { "content-type": "" !== r ? r : "application/octet-stream" },
            body: t,
        });
    if (!a.ok) throw Error(`attachment upload failed (${a.status})`);
    return await a.json();
}
class eL extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function eM(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n, name: t }),
        i = await fetch(`${r}/agent/export?${s}`);
    if (!i.ok) throw new eL(i.status);
    return await i.blob();
}
class eH extends Error {
    status;
    constructor(e) {
        (super(`remix failed (${e})`), (this.status = e));
    }
}
async function e$(e, t) {
    let [n, r] = await Promise.all([(0, O.g)(e), (0, O.d)(t)]),
        s = new URLSearchParams({ ticket: n.ticket }),
        i = await fetch(`${n.baseUrl}/agent/fork?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!i.ok) throw new eH(i.status);
}
async function ej(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/secrets?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`secret submission failed (${i.status})`);
}
async function eG(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
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
function eB(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await (0, O.d)(e),
            r = new URLSearchParams({ ticket: t }),
            s = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        s.ok || console.warn("[vibegrations] settings rebuild request failed", e, s.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
function ex(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function eq(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n });
    t && s.set("regenerate", "1");
    let i = await fetch(`${r}/agent/mcp-token?${s}`, { method: "POST" });
    if (!i.ok) throw Error(`mcp token failed (${i.status})`);
    let o = await i.json(),
        a = "number" == typeof o.expires_in ? Date.now() + 1e3 * o.expires_in : Date.parse(o.expires_at);
    return { url: o.url, expiresAtMs: a };
}
async function eW(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: s } = await (0, O.d)(e);
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
            e = (0, d.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, d.ls)(n.status, e) };
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
async function eF(e, t) {
    let { ticket: n, baseUrl: r } = await (0, O.d)(e),
        s = new URLSearchParams({ ticket: n }),
        i = await fetch(`${ev(r, t)}?${s}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
async function ez(e, t) {
    let { ticket: n, baseUrl: r } = await eT(e),
        s = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${s}`;
}
async function eK(e) {
    let { ticket: t, baseUrl: n } = await eT(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
async function eQ(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: s } = await eT(e),
        i = new URLSearchParams({ ticket: r });
    return (n && i.set("download", "1"), `${ev(s, t)}?${i}`);
}
async function eV(e, t) {
    async function n() {
        return fetch(await eQ(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (ew.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eY(e) {
    eo(e);
}
class eX extends s.Ay.Store {
    initialize() {
        this.waitFor(a.default, l.Ay, C.Ay);
    }
    getConnState(e) {
        return I.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return D.get(e) ?? !1;
    }
    getModelSettings(e) {
        return M.get(e) ?? null;
    }
    getSettings(e) {
        return H.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return H.get(e)?.connections ?? eZ;
    }
}
let eZ = [],
    e0 = new eX(i.h, {
        CONJURE_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (I.get(t) === n) return !1;
            (I.set(t, n), ("closed" === n || "failed" === n) && L.delete(t));
        },
        CONJURE_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((D.get(t) ?? !1) === n) return !1;
            D.set(t, n);
        },
        CONJURE_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, tierSettings: r, tiers: s, choices: i } = e;
            M.set(t, { settings: n, tierSettings: r, tiers: s, choices: i });
        },
        CONJURE_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            H.set(t, n);
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!eo(t)) return !1;
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(P.keys())) null == C.Ay.getProject(e) && eo(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === P.size) return !1;
            for (let e of Array.from(P.keys())) eo(e);
            (D.clear(), q.clear(), ew.clear());
        },
    });
