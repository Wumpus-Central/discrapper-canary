(n.d(t, {
    DM: () => eU,
    tp: () => ep,
    r2: () => e_,
    gm: () => eL,
    n6: () => e2,
    ss: () => eF,
    $S: () => eW,
    Mg: () => e3,
    cS: () => ej,
    R7: () => ey,
    aF: () => eX,
    Lj: () => eE,
    Y1: () => eS,
    JI: () => eK,
    Vm: () => eV,
    oX: () => eG,
    ms: () => eA,
    TV: () => eh,
    dv: () => ed,
    Hc: () => ec,
    Og: () => e1,
    Bn: () => e5,
    XZ: () => eb,
    bq: () => em,
    oB: () => ev,
    ho: () => ez,
    $D: () => eI,
    fu: () => eu,
    Ay: () => e7,
    $C: () => ef,
    Rw: () => ea,
    vX: () => e$,
    c9: () => eH,
    ct: () => ew,
    dz: () => eD,
    PK: () => eZ,
    Qe: () => eB,
    TP: () => eg,
    M$: () => e0,
    y_: () => eQ,
    xE: () => ex,
    nU: () => eq,
    P6: () => eT,
    _m: () => eP,
    Du: () => eN,
}),
    n(321073),
    n(508300),
    n(323874),
    n(14289),
    n(35956));
var r = n(158390),
    s = n(17928),
    o = n(73153),
    i = n(195880),
    a = n(287809),
    l = n(245179),
    c = n(616e3),
    d = n(667931),
    u = n(785389);
let p = new Map(),
    h = new Map(),
    f = new Map();
function _(e, t, n) {
    g(e, t);
    let r = setTimeout(() => e.delete(t), 1e4);
    e.set(t, { ...n, timer: r });
}
function g(e, t) {
    let n = e.get(t);
    null != n && (clearTimeout(n.timer), e.delete(t));
}
function y(e, t) {
    _(f, t, { projectId: e });
}
function E(e, t) {
    let n = p.get(t);
    null != n && (clearTimeout(n.timer), n.resolve(null));
    let r = h.get(t);
    return null != r
        ? (g(h, t), y(e, t), Promise.resolve({ uploadToken: r.uploadToken }))
        : new Promise((n) => {
              let r = setTimeout(() => {
                  (p.delete(t), n(null));
              }, 5e3);
              p.set(t, { resolve: n, timer: r, projectId: e });
          });
}
function m(e) {
    for (let [t, n] of [...p]) n.projectId === e && (p.delete(t), clearTimeout(n.timer), n.resolve(null));
    for (let t of [h, f]) for (let [n, r] of [...t]) r.projectId === e && g(t, n);
}
var S = n(573083),
    w = n(855859),
    b = n(371169),
    k = n(42766),
    T = n(385081),
    C = n(28480);
class O {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: r, onClose: s, onError: o } = e;
        this.close();
        let i = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            a = new WebSocket(`${i}/agent/ws?ticket=${encodeURIComponent(n)}&debug=on_demand`);
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
                this.socket === a && o?.(e);
            }),
            a.addEventListener("close", () => {
                this.socket === a && s?.();
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
    sendRestartSandbox() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "restart_sandbox" }));
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
var R = n(382541);
(n(643210), n(944142), n(714917));
var N = n(248675),
    v = n(660183);
function U(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
function A(e, t) {
    let n = e.pendingPatchNotesDraft;
    null != n && ((e.pendingPatchNotesDraft = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let P = new Map(),
    J = new Set(["activity", "automod", "widget", "bot"]);
function I(e) {
    return null != e && J.has(e) ? e : null;
}
let D = new Map(),
    M = new Map(),
    $ = new Set(),
    L = new Map(),
    H = new Map();
function x(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
let j = { location: "connection", code: T.xf.SEND_FAILED },
    B = { location: "agent", code: T.xf.AGENT_ERROR };
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j;
    (o.h.dispatch({
        type: "CONJURE_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, T.Hy)(e, { ...n, message: t }));
}
function W(e) {
    return `optimistic:${e}`;
}
let q = new Map();
function F(e, t) {
    let { content: n, nonce: r, attachments: s } = t;
    (q.set(r, a.default.getCurrentUser()?.id),
        o.h.dispatch({
            type: "CONJURE_CHAT_MESSAGE_APPEND",
            projectId: e,
            content: n,
            id: W(r),
            userId: a.default.getCurrentUser()?.id,
            timestamp: new Date().toISOString(),
            attachments: s,
        }));
}
let z = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function Q(e, t, n) {
    let r = t.pendingSends;
    for (let s of ((t.pendingSends = []), r)) (F(e, s), G(e, n));
}
function K(e, t) {
    if (!0 === M.get(e)) return;
    let n = t.pendingSends;
    for (let r of ((t.pendingSends = []), n)) {
        F(e, r);
        try {
            t.ws.sendUserMessage(
                r.content,
                r.nonce,
                r.attachments?.map((e) => e.id),
                k.Ay.getProject(e)?.name,
                { templateId: r.templateId, remix: r.remix, clarificationAnswers: r.clarificationAnswers },
            );
        } catch (t) {
            (console.error("[vibegrations] queued send failed", t),
                G(e, t instanceof Error ? t.message : "send failed"));
        }
    }
}
async function V(e, t, n) {
    try {
        let { ticket: r } = await (0, R.g)(n);
        e.ws.sendUpstreamTicketAck(t, r);
    } catch (r) {
        let n = r?.status;
        e.ws.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
let X = {
        build_error: { location: "build", code: T.xf.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: T.xf.HEALTHCHECK_FAILED },
        error: { location: "agent", code: T.xf.AGENT_ERROR },
    },
    Y = {
        web: { location: "runtime_frame", code: T.xf.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: T.xf.RUNTIME_WORKER_ERROR },
    },
    Z = new Map(),
    ee = new Set();
async function et(e, t, n) {
    let r,
        s = Date.now();
    (console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, w.b)(e, "widget"));
    try {
        r = await C.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await E(e, n.id)),
            resolveUploadUrl: () => eY(e),
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
async function en(e, t, n) {
    let r = Date.now();
    console.debug("[vibegrations] control request received", {
        id: n.id,
        build: n.build,
        steps: n.request?.steps?.length,
    });
    try {
        let s = await C.A.relayPreviewControl(
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
async function er(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: r } = await (0, R.d)(e);
        if (t.disposed) return;
        t.ws.open({
            url: r,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, r) {
                    var s, i, a;
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
                            "open" !== D.get(t))
                    )
                        return void n.pendingEvents.push(r);
                    if ("history_page" === r.type) {
                        if (r.requested !== ek.get(t) || (ek.delete(t), !0 === r.failed)) return;
                        o.h.dispatch({
                            type: "CONJURE_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (r.messages ?? []).slice(),
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                        });
                        return;
                    }
                    if ("hello" === r.type)
                        ((n.helloSeen = !0), (n.debugOnDemand = !0 === r.debug_on_demand), n.backoff.succeed());
                    else if ("history" === r.type) {
                        let s = (r.messages ?? []).slice();
                        (o.h.dispatch({
                            type: "CONJURE_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: s,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                            degraded: !0 === r.degraded,
                        }),
                            ek.delete(t));
                        let i = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), x(t, "open"), i)) e(t, n, r);
                        (eo.get(t) ?? 0) > 0 && ei(t, n);
                        let a = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != a))
                            try {
                                n.ws.sendModelSettings(a);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        K(t, n);
                    } else if ("chat_state" === r.type)
                        (o.h.dispatch({ type: "CONJURE_CHAT_STOPPED_SET", projectId: t, stopped: r.stopped }),
                            r.stopped || "open" !== D.get(t) || K(t, n));
                    else if ("user_message" === r.type) {
                        let e, n, s;
                        ((n = (e = null != r.nonce && q.has(r.nonce)) && null != r.nonce ? q.get(r.nonce) : void 0),
                            (s = e && (null == n || null == r.user_id || n === r.user_id)) &&
                                null != r.nonce &&
                                q.delete(r.nonce),
                            o.h.dispatch({
                                type: "CONJURE_CHAT_MESSAGE_APPEND",
                                projectId: t,
                                content: r.content,
                                id: r.id,
                                ...(s && null != r.nonce ? { optimisticId: W(r.nonce) } : {}),
                                userId: r.user_id,
                                timestamp: r.ts,
                                attachments: r.attachments,
                            }));
                    } else if ("message_disposition" === r.type)
                        ((s = r.disposition),
                            Object.prototype.hasOwnProperty.call(z, s) &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: r.id,
                                    activeTurnId: r.active_turn_id,
                                    disposition: r.disposition,
                                }));
                    else if ("message_cancelled" === r.type)
                        o.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: t, id: r.id });
                    else if ("publish_notice" === r.type)
                        o.h.dispatch({
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
                        (o.h.dispatch({ type: "CONJURE_CHAT_PROJECT_EVENT", projectId: t, event: r }),
                            "app_channel_deleted" !== r.type && (0, b.GO)(t));
                    else if ("side_reply" === r.type)
                        o.h.dispatch({
                            type: "CONJURE_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: r.id,
                            inReplyTo: r.in_reply_to,
                            content: r.content,
                            timestamp: r.ts,
                        });
                    else if ("source_checkpoint" === r.type)
                        o.h.dispatch({
                            type: "CONJURE_CHAT_SOURCE_CHECKPOINT",
                            projectId: t,
                            turnId: r.turn_id,
                            sourceSha: r.source_sha,
                        });
                    else if ("turn_notification" === r.type)
                        o.h.dispatch({
                            type: "CONJURE_TURN_NOTIFICATION",
                            projectId: t,
                            body: r.summary,
                            nonce: r.nonce,
                        });
                    else if ("provisional_todo" === r.type)
                        o.h.dispatch({
                            type: "CONJURE_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: r.turn_id,
                            text: r.text,
                        });
                    else if ("step" === r.type)
                        if ("reply" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e
                                ? o.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : G(t, v.intl.string(N.default["913RMa"]), B);
                        } else if ("thinking_lifecycle" === r.kind) {
                            let { phase: e, session: n, seq: s, ticks: i, elapsed_ms: a, text: l } = r;
                            null != e &&
                                null != s &&
                                null != n &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_THINKING_SET",
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
                                    type: "CONJURE_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === r.phase,
                                });
                        else if ("saving" === r.kind)
                            ("start" === r.phase || "end" === r.phase) &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_SAVING_SET",
                                    projectId: t,
                                    saving: "start" === r.phase,
                                });
                        else if ("debug_compaction_declined" === r.kind)
                            null != r.projected &&
                                null != r.threshold &&
                                o.h.dispatch({
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
                                o.h.dispatch({
                                    type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
                                    projectId: t,
                                    outcome: e,
                                    reason: r.reason,
                                    ...(!0 === r.pending_turn ? { pendingTurn: !0 } : {}),
                                    observedAt: new Date().toISOString(),
                                });
                        } else if ("restart_sandbox_result" === r.kind)
                            ("restarted" === r.outcome || "failed" === r.outcome) &&
                                o.h.dispatch({
                                    type: "CONJURE_SANDBOX_RESTART_RESULT",
                                    projectId: t,
                                    outcome: r.outcome,
                                    reason: r.reason,
                                    observedAt: new Date().toISOString(),
                                });
                        else if ("debug_compaction_report" === r.kind)
                            null != r.tokens_before &&
                                null != r.tokens_after &&
                                o.h.dispatch({
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
                                (o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { todos: e },
                                }),
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    step: r,
                                }));
                        } else if ("plan_proposed" === r.kind)
                            null != r.proposal
                                ? o.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      patch: { proposal: r.proposal, kind: "proposal" },
                                  })
                                : G(t, v.intl.string(N.default["0+RUWx"]), B);
                        else if ("ideas" === r.kind)
                            null != r.ideas &&
                                r.ideas.length > 0 &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { ideas: r.ideas },
                                });
                        else if ("restore_proposal" === r.kind)
                            null != r.restore_proposal &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { restoreProposal: r.restore_proposal },
                                });
                        else if ("publish_cta" === r.kind)
                            null != r.publish_cta &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { publishCta: { surface: I(r.publish_cta.surface) } },
                                });
                        else if ("publish_status" === r.kind)
                            o.h.dispatch({
                                type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                                projectId: t,
                                published: !0 === r.published,
                                hasUnpublishedChanges: !0 === r.has_unpublished_changes,
                                surface: I(r.surface),
                                previewAppChannels: Array.isArray(r.preview_app_channels)
                                    ? r.preview_app_channels.filter((e) => "string" == typeof e)
                                    : [],
                            });
                        else if ("clarification" === r.kind)
                            null != r.clarification &&
                                (r.clarification.questions?.length ?? 0) > 0 &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { clarification: r.clarification },
                                });
                        else if ("attachment" === r.kind)
                            null != r.attachments &&
                                r.attachments.length > 0 &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { attachments: r.attachments },
                                });
                        else if ("collect_secrets" === r.kind) {
                            let e = r.fields ?? [];
                            e.length > 0 &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { secretRequest: { fields: e, note: r.note, copy_values: r.copy_values } },
                                });
                        } else if ("collect_settings" === r.kind)
                            o.h.dispatch({
                                type: "CONJURE_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: r.turn_id,
                                patch: { settingsRequest: { keys: r.keys, note: r.note } },
                            });
                        else if ("awaiting_user" === r.kind)
                            "secrets" === r.action &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { awaitingUser: { action: r.action } },
                                });
                        else if ("intake" === r.kind)
                            null != r.intake &&
                                (r.intake.questions?.length ?? 0) > 0 &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: r.turn_id,
                                    patch: { intake: r.intake },
                                });
                        else if ("usage" === r.kind)
                            null != r.turn &&
                                null != r.project &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: r.turn,
                                    project: r.project,
                                });
                        else if ("project_named" === r.kind) {
                            let e = k.Ay.getProject(t);
                            null != e &&
                                null != r.name &&
                                o.h.dispatch({
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
                                (0, b.Is)(t, r.error ?? "publish_result not ok", !1);
                            else {
                                let e = k.Ay.getPublishStatus(t);
                                null != e &&
                                    o.h.dispatch({
                                        type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                                        projectId: t,
                                        published: !0,
                                        hasUnpublishedChanges: !1,
                                        surface: e.surface,
                                        previewAppChannels: e.previewAppChannels,
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
                                function l(e) {
                                    null != s && "" !== s && n.ws.sendAppIconAck(s, e);
                                }
                                (0, b.Ru)(t, e)
                                    .then((e) => {
                                        (e.ok || console.error("[vibegrations] icon from agent rejected", t, e.status),
                                            l(e.ok ? "applied" : "failed"));
                                    })
                                    .catch((e) => {
                                        (console.error("[vibegrations] icon from agent failed", t, e), l("failed"));
                                    });
                            }
                        } else
                            "turn_result" === r.kind
                                ? ((0, T.hV)(t, r),
                                  "deployed" === r.result &&
                                      o.h.dispatch({
                                          type: "CONJURE_CHAT_TURN_PATCH",
                                          projectId: t,
                                          turnId: r.turn_id,
                                          patch: { kind: "plan_implemented" },
                                      }),
                                  o.h.dispatch({
                                      type: "CONJURE_CHAT_TURN_FINISHED",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      summary: r.summary,
                                  }),
                                  $.delete(t) &&
                                      "cancelled" === r.result &&
                                      o.h.dispatch({ type: "CONJURE_CHAT_INTERRUPTED", projectId: t }))
                                : (o.h.dispatch({
                                      type: "CONJURE_CHAT_STEP_APPEND",
                                      projectId: t,
                                      turnId: r.turn_id,
                                      step: r,
                                  }),
                                  ("build_error" === r.kind || "healthcheck_failed" === r.kind || "error" === r.kind) &&
                                      (0, T.Hy)(t, {
                                          ...X[r.kind],
                                          message: r.message,
                                          details: "build_error" === r.kind ? r.stderr_tail : void 0,
                                      }),
                                  "preview_ready" === r.kind &&
                                      (0, b.tZ)(t, { isPreview: !0 }).catch((e) => {
                                          console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                      }));
                    else {
                        let e;
                        "capture_preview" === r.type
                            ? et(t, n, r).catch(() => {})
                            : "control_preview" === r.type
                              ? en(t, n, r).catch(() => {})
                              : "control_abort" === r.type
                                ? C.A.abortPreviewControl(t)
                                : "control_claim" === r.type || "capture_claim" === r.type
                                  ? (function (e, t, n) {
                                        let r = p.get(t);
                                        if (null == r) {
                                            f.has(t) || _(h, t, { uploadToken: n, projectId: e });
                                            return;
                                        }
                                        (p.delete(t), clearTimeout(r.timer), y(e, t), r.resolve({ uploadToken: n }));
                                    })(t, r.id, "capture_claim" === r.type ? r.upload_token : void 0)
                                  : "preview_operation" === r.type
                                    ? "begin" === r.phase
                                        ? ((0, S.pF)(t, "tuning" === r.mode), C.A.beginPreviewOperation(t))
                                        : ((0, S.pF)(t, !1), C.A.endPreviewOperation(t))
                                    : "browser_sessions" === r.type
                                      ? o.h.dispatch({
                                            type: "CONJURE_BROWSER_SESSIONS_SET",
                                            projectId: t,
                                            sessions: r.sessions,
                                        })
                                      : "live_reload" === r.type
                                        ? o.h.dispatch({
                                              type: "CONJURE_LIVE_RELOAD_SET",
                                              projectId: t,
                                              enabled: r.enabled,
                                              error: r.error ?? null,
                                              phase: r.phase ?? null,
                                              step: r.step ?? null,
                                          })
                                        : "overlay_background" === r.type
                                          ? o.h.dispatch({
                                                type: "CONJURE_OVERLAY_BACKGROUND_SET",
                                                projectId: t,
                                                blur: r.blur,
                                                imageEtag: r.image_etag,
                                            })
                                          : "model_settings" === r.type
                                            ? o.h.dispatch({
                                                  type: "CONJURE_MODEL_SETTINGS_SET",
                                                  projectId: t,
                                                  settings: r.settings,
                                                  tierSettings: r.tier_settings ?? null,
                                                  tiers: r.tiers ?? null,
                                                  choices: r.choices,
                                              })
                                            : "debug_status" === r.type
                                              ? o.h.dispatch({
                                                    type: "CONJURE_DEBUG_STATUS_SET",
                                                    projectId: t,
                                                    status: r.status ?? null,
                                                    failed: !0 === r.failed || null == r.status,
                                                })
                                              : "settings" === r.type
                                                ? o.h.dispatch({
                                                      type: "CONJURE_SETTINGS_SET",
                                                      projectId: t,
                                                      settings: {
                                                          schema: r.schema,
                                                          values: r.values,
                                                          secrets: r.secrets,
                                                          connections: r.connections,
                                                      },
                                                  })
                                                : "debug_backlog" === r.type
                                                  ? o.h.dispatch({
                                                        type: "CONJURE_DEBUG_BACKLOG",
                                                        projectId: t,
                                                        backlog: r,
                                                        observedAt: new Date().toISOString(),
                                                    })
                                                  : "timing_trace_events" === r.type
                                                    ? (o.h.dispatch({
                                                          type: "CONJURE_DEBUG_TIMING_TRACE",
                                                          projectId: t,
                                                          batch: r.batch,
                                                          live: r.live,
                                                      }),
                                                      (i = t),
                                                      (a = r.batch.trace_id),
                                                      (e = c.A.getTimingTrace(i, a)),
                                                      null == e ||
                                                          !(0, d.JQ)(e) ||
                                                          ee.has(a) ||
                                                          (ee.add(a),
                                                          console.log(
                                                              "[vibegrations] timing trace",
                                                              JSON.stringify(e),
                                                          )))
                                                    : "request_upstream_ticket" === r.type
                                                      ? V(n, r.id, r.project_id)
                                                      : "debug_history_state" === r.type
                                                        ? o.h.dispatch({
                                                              type: "CONJURE_HISTORY_LOAD_SETTLE",
                                                              projectId: t,
                                                              scope: r.scope,
                                                              status: r.status,
                                                              count: r.count,
                                                              truncated: !0 === r.truncated,
                                                          })
                                                        : (o.h.dispatch({
                                                              type: "CONJURE_LOG_APPEND",
                                                              projectId: t,
                                                              log: r,
                                                          }),
                                                          (function (e, t) {
                                                              if (!0 === t.historical || "error" !== t.level) return;
                                                              let n = null != t.source ? Y[t.source] : void 0;
                                                              if (null == n) return;
                                                              let r = Z.get(e);
                                                              null == r && ((r = new Set()), Z.set(e, r));
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
                    }
                })(e, t, n),
            onClose: () => {
                (U(t, "Connection closed before the publish result arrived"),
                A(t, "Connection closed before the draft arrived"),
                m(e),
                t.disposed)
                    ? x(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), x(e, "connecting"), t.backoff.fail(() => es(e)))
                      : (x(e, "closed"),
                        Q(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        (x(e, "failed"),
            Q(e, t, n instanceof Error ? n.message : "ws open failed"),
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
function es(e) {
    let t = P.get(e);
    null == t &&
        ((t = {
            ws: new O(),
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
        x(e, "connecting"),
        er(e, n));
}
let eo = new Map();
function ei(e, t) {
    t.debugOnDemand && t.ws.sendDebugSubscribe();
}
function ea(e) {
    let t = eo.get(e) ?? 0;
    eo.set(e, t + 1);
    let n = P.get(e);
    return (
        0 === t && null != n && "open" === D.get(e) && ei(e, n),
        () => {
            let t = (eo.get(e) ?? 1) - 1;
            t > 0 ? eo.set(e, t) : eo.delete(e);
        }
    );
}
function el(e) {
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
        ek.delete(t),
        C.A.releasePreviewControl(e),
        m(e),
        x(e, "closed"),
        !0)
    );
}
function ec(e) {
    let t = P.get(e);
    if (null == t) return void es(e);
    let n = D.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || es(e);
}
function ed(e, t, n) {
    let {
            templateId: r,
            remix: s,
            clarificationAnswers: o,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = t.trim(),
        l = null != n && n.length > 0 ? n : void 0;
    if ("" === a && null == l) return;
    let c = {
            content: a,
            nonce: (0, i.m)(),
            attachments: l,
            templateId: r,
            remix: s,
            ...(null != o ? { clarificationAnswers: o } : {}),
        },
        d = P.get(e);
    if (null != d && ("connecting" === D.get(e) || d.reconnectPending)) return void d.pendingSends.push(c);
    F(e, c);
    try {
        if (null == d) throw Error("Not connected");
        d.ws.sendUserMessage(
            c.content,
            c.nonce,
            c.attachments?.map((e) => e.id),
            k.Ay.getProject(e)?.name,
            { templateId: c.templateId, remix: c.remix, clarificationAnswers: c.clarificationAnswers },
        );
    } catch (t) {
        (console.error("[vibegrations] send failed", t), G(e, t instanceof Error ? t.message : "send failed"));
    }
}
function eu(e) {
    let t = P.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            l.Ay.isThinking(e) && ($.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function ep(e, t, n) {
    try {
        let r = P.get(e);
        if (null == r) throw Error("Not connected");
        r.ws.sendQueuedMessageAction(n, t);
    } catch (e) {
        console.error(`[vibegrations] ${n} queued message failed`, e);
    }
}
function eh(e) {
    let t = !1;
    return new Promise((n, r) => {
        let s = P.get(e);
        if (null == s) return void r(Error("Not connected"));
        if (null != s.pendingPublish) return void r(Error("Publish already in flight"));
        let i = setTimeout(() => {
            U(s, "Publish timed out");
        }, 9e5);
        ((s.pendingPublish = { resolve: n, reject: r, timeout: i }),
            (t = !0),
            o.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            s.ws.sendPublish();
        } catch (e) {
            ((s.pendingPublish = null), clearTimeout(i), r(e instanceof Error ? e : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, b.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && o.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function ef(e) {
    return new Promise((t, n) => {
        let r = P.get(e);
        if (null == r) return void n(Error("Not connected"));
        A(r, "Superseded by a newer draft request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            o = setTimeout(() => {
                A(r, "Draft timed out");
            }, 45e3);
        r.pendingPatchNotesDraft = { resolve: t, reject: n, timeout: o, nonce: s };
        try {
            r.ws.sendDraftPatchNotes(s, k.Ay.getProject(e)?.name);
        } catch (e) {
            ((r.pendingPatchNotesDraft = null),
                clearTimeout(o),
                n(e instanceof Error ? e : Error("draft send failed")));
        }
    });
}
function e_(e, t) {
    let n = P.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function eg(e) {
    P.get(e)?.ws.sendRefreshBrowserSessions();
}
function ey(e) {
    o.h.dispatch({ type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId: e });
    let t = P.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendDebugStatusRequest();
    } catch (t) {
        (console.error("[vibegrations] debug status request failed", t),
            o.h.dispatch({ type: "CONJURE_DEBUG_STATUS_SET", projectId: e, status: null, failed: !0 }));
    }
}
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    o.h.dispatch({ type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId: e });
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendForceCompaction(t);
    } catch (t) {
        (console.error("[vibegrations] force compaction request failed", t),
            o.h.dispatch({
                type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT",
                projectId: e,
                outcome: "failed",
                reason: "Not connected",
                observedAt: new Date().toISOString(),
            }));
    }
}
function em(e) {
    o.h.dispatch({ type: "CONJURE_SANDBOX_RESTART_REQUESTED", projectId: e });
    let t = P.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendRestartSandbox();
    } catch (t) {
        (console.error("[vibegrations] restart sandbox request failed", t),
            o.h.dispatch({
                type: "CONJURE_SANDBOX_RESTART_RESULT",
                projectId: e,
                outcome: "failed",
                reason: "Not connected",
                observedAt: new Date().toISOString(),
            }));
    }
}
function eS(e, t) {
    let n = P.get(e);
    if (null == n) return !1;
    try {
        return (n.ws.sendOverlayBackgroundBlur(t), !0);
    } catch {
        return !1;
    }
}
function ew(e, t) {
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        return (n.ws.sendLiveReload(t), !0);
    } catch (e) {
        return (console.error("[vibegrations] live reload send failed", e), !1);
    }
}
function eb(e, t) {
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let ek = new Map();
function eT(e) {
    let t = (0, l.bi)(e);
    if (null == t) return !1;
    if (ek.get(e) === t) return !0;
    let n = P.get(e);
    return null != n && "open" === D.get(e) && (ek.set(e, t), n.ws.sendLoadHistory(t), !0);
}
let eC = new Map(),
    eO = new Map();
function eR(e) {
    let t = eC.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = eO.get(e);
    if (null != n) return n;
    let r = (0, R.d)(e)
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
            return (null != n && eC.set(e, { ticket: t, expiresAt: n - 3e4 }), t);
        })
        .finally(() => {
            eO.delete(e);
        });
    return (eO.set(e, r), r);
}
async function eN(e) {
    let { ticket: t, baseUrl: n } = await (0, R.d)(e),
        r = new URLSearchParams({ ticket: t }),
        s = await fetch(`${n}/agent/source-history?${r}`);
    if (!s.ok) throw Error(`version history failed (${s.status})`);
    let o = await s.json();
    return {
        entries: Array.isArray(o.entries) ? o.entries : [],
        previewSha: "string" == typeof o.previewSha ? o.previewSha : null,
        publishedSha: "string" == typeof o.publishedSha ? o.publishedSha : null,
    };
}
async function ev(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n }),
        o = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${s}`, { method: "POST" });
    if (!o.ok) {
        let e = (await o.text()).trim();
        throw Error(`version restore failed (${o.status})${"" === e ? "" : `: ${e}`}`);
    }
    let i = await o.json();
    if (null == i.entry) throw Error("version restore returned no commit");
    return (
        !0 === i.live ||
            (0, b.tZ)(e, { isPreview: !0 }).catch((t) => {
                console.error("[vibegrations] post-version-restore refresh failed", e, t);
            }),
        i.entry
    );
}
async function eU(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n, environment: t }),
        o = await fetch(`${r}/agent/database/restore-points?${s}`);
    if (!o.ok) throw Error(`restore points failed (${o.status})`);
    let i = await o.json();
    return Array.isArray(i.restorePoints) ? i.restorePoints : [];
}
async function eA(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n, environment: t }),
        o = await fetch(`${r}/agent/database/restore-window?${s}`);
    if (!o.ok) throw Error(`restore window failed (${o.status})`);
    return await o.json();
}
async function eP(e, t, n) {
    let { ticket: r, baseUrl: s } = await (0, R.d)(e),
        o = new URLSearchParams({ ticket: r }),
        i = await fetch(`${s}/agent/database/restore-points?${o}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(null != n && "" !== n.trim() ? { environment: t, label: n } : { environment: t }),
        });
    if (!i.ok) throw Error(`restore point create failed (${i.status})`);
    let a = await i.json();
    if (null == a.restorePoint) throw Error("restore point create returned nothing");
    return a.restorePoint;
}
async function eJ(e, t) {
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
            (0, b.BD)(e);
        } catch (t) {
            console.error("[vibegrations] post-data-restore frame reload failed", e, t);
        }
    return s;
}
async function eI(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n });
    return eJ(
        e,
        await fetch(`${r}/agent/database/restore-points/${encodeURIComponent(t)}/restore?${s}`, { method: "POST" }),
    );
}
async function eD(e, t, n) {
    let { ticket: r, baseUrl: s } = await (0, R.d)(e),
        o = new URLSearchParams({ ticket: r });
    return eJ(
        e,
        await fetch(`${s}/agent/database/restore?${o}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ environment: t, timestampMs: n }),
        }),
    );
}
function eM(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function e$(e, t) {
    return eH(e, t, t.name, t.type);
}
async function eL(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = await fetch(`${eM(r, "from-url")}?${new URLSearchParams({ ticket: n })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ url: t }),
        }),
        o = await s.json().catch(() => null);
    if (!s.ok || null == o || !("id" in o))
        throw Error(null != o && "error" in o && "string" == typeof o.error ? o.error : "");
    return o;
}
async function eH(e, t, n, r) {
    let { ticket: s, baseUrl: o } = await (0, R.d)(e),
        i = new URLSearchParams({ ticket: s, name: n }),
        a = await fetch(`${eM(o)}?${i}`, {
            method: "POST",
            headers: { "content-type": "" !== r ? r : "application/octet-stream" },
            body: t,
        });
    if (!a.ok) throw Error(`attachment upload failed (${a.status})`);
    return await a.json();
}
class ex extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function ej(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n, name: t }),
        o = await fetch(`${r}/agent/export?${s}`);
    if (!o.ok) throw new ex(o.status);
    return await o.blob();
}
class eB extends Error {
    status;
    constructor(e) {
        (super(`remix failed (${e})`), (this.status = e));
    }
}
async function eG(e, t) {
    let [n, r] = await Promise.all([(0, R.g)(e), (0, R.d)(t)]),
        s = new URLSearchParams({ ticket: n.ticket }),
        o = await fetch(`${n.baseUrl}/agent/fork?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!o.ok) throw new eB(o.status);
}
async function eW(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n }),
        o = await fetch(`${r}/agent/secrets?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!o.ok) throw Error(`secret submission failed (${o.status})`);
}
async function eq(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n }),
        o = await fetch(`${r}/agent/settings?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!o.ok) throw Error(`settings submission failed (${o.status})`);
    let i = await o.json().catch(() => null);
    return { rebuildRequired: i?.rebuild_required === !0 };
}
function eF(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await (0, R.d)(e),
            r = new URLSearchParams({ ticket: t }),
            s = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        s.ok || console.warn("[vibegrations] settings rebuild request failed", e, s.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
function ez(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function eQ(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n });
    t && s.set("regenerate", "1");
    let o = await fetch(`${r}/agent/mcp-token?${s}`, { method: "POST" });
    if (!o.ok) throw Error(`mcp token failed (${o.status})`);
    let i = await o.json(),
        a = "number" == typeof i.expires_in ? Date.now() + 1e3 * i.expires_in : Date.parse(i.expires_at);
    return { url: i.url, expiresAtMs: a };
}
async function eK(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: s } = await (0, R.d)(e);
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
            e = (0, u.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, u.ls)(n.status, e) };
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
async function eV(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = new URLSearchParams({ ticket: n }),
        o = await fetch(`${eM(r, t)}?${s}`, { method: "DELETE", keepalive: !0 });
    if (!o.ok) throw Error(`attachment cleanup failed (${o.status})`);
}
async function eX(e, t) {
    let { ticket: n, baseUrl: r } = await eR(e),
        s = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${s}`;
}
async function eY(e) {
    let { ticket: t, baseUrl: n } = await eR(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
async function eZ(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: s } = await eR(e),
        o = new URLSearchParams({ ticket: r });
    return (n && o.set("download", "1"), `${eM(s, t)}?${o}`);
}
async function e0(e, t) {
    let { ticket: n, baseUrl: r } = await (0, R.d)(e),
        s = await fetch(`${r}/agent/overlay-background?${new URLSearchParams({ ticket: n })}`, {
            method: "PUT",
            body: t,
        });
    if (!s.ok) throw Error(`overlay background upload failed (${s.status})`);
}
async function e1(e) {
    let { ticket: t, baseUrl: n } = await (0, R.d)(e),
        r = await fetch(`${n}/agent/overlay-background?${new URLSearchParams({ ticket: t })}`, { method: "DELETE" });
    if (!r.ok) throw Error(`overlay background reset failed (${r.status})`);
}
async function e3(e, t) {
    let { ticket: n, baseUrl: r } = await eR(e);
    return `${r}/agent/overlay-background?${new URLSearchParams({ ticket: n, v: t })}`;
}
async function e2(e, t) {
    async function n() {
        return fetch(await eZ(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (eC.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function e5(e) {
    el(e);
}
class e4 extends s.Ay.Store {
    initialize() {
        this.waitFor(l.Ay, c.A, k.Ay, a.default);
    }
    getConnState(e) {
        return D.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return M.get(e) ?? !1;
    }
    getModelSettings(e) {
        return L.get(e) ?? null;
    }
    getSettings(e) {
        return H.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return H.get(e)?.connections ?? e8;
    }
}
let e8 = [],
    e7 = new e4(o.h, {
        CONJURE_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (D.get(t) === n) return !1;
            (D.set(t, n), ("closed" === n || "failed" === n) && $.delete(t));
        },
        CONJURE_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((M.get(t) ?? !1) === n) return !1;
            M.set(t, n);
        },
        CONJURE_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, tierSettings: r, tiers: s, choices: o } = e;
            L.set(t, { settings: n, tierSettings: r, tiers: s, choices: o });
        },
        CONJURE_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n } = e;
            H.set(t, n);
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!el(t)) return !1;
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of Array.from(P.keys())) null == k.Ay.getProject(e) && el(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === P.size) return !1;
            for (let e of Array.from(P.keys())) el(e);
            (M.clear(), q.clear(), eC.clear());
        },
    });
