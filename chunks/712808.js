(n.d(t, {
    DM: () => eR,
    tp: () => ep,
    r2: () => e_,
    gm: () => eM,
    n6: () => eX,
    ss: () => eW,
    $S: () => eG,
    cS: () => eH,
    R7: () => ey,
    aF: () => eK,
    Lj: () => em,
    JI: () => ez,
    Vm: () => eQ,
    oX: () => ex,
    ms: () => eU,
    TV: () => eh,
    dv: () => ed,
    Hc: () => ec,
    Bn: () => eZ,
    XZ: () => ew,
    oB: () => eN,
    ho: () => eq,
    $D: () => eP,
    fu: () => eu,
    Ay: () => e2,
    $C: () => ef,
    Rw: () => ea,
    vX: () => eD,
    c9: () => eL,
    ct: () => eE,
    dz: () => eJ,
    PK: () => eY,
    Qe: () => ej,
    TP: () => eg,
    y_: () => eF,
    xE: () => e$,
    nU: () => eB,
    P6: () => ek,
    _m: () => eA,
    Du: () => eO,
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
function m(e, t) {
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
function E(e) {
    for (let [t, n] of [...p]) n.projectId === e && (p.delete(t), clearTimeout(n.timer), n.resolve(null));
    for (let t of [h, f]) for (let [n, r] of [...t]) r.projectId === e && g(t, n);
}
var w = n(573083),
    S = n(855859),
    k = n(371169),
    C = n(260498),
    T = n(385081),
    b = n(28480);
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
var N = n(382541);
(n(643210), n(944142));
var R = n(248675),
    U = n(660183);
function A(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
function v(e, t) {
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
    L = new Set(),
    $ = new Map(),
    H = new Map();
function j(e, t) {
    o.h.dispatch({ type: "CONJURE_CHAT_CONN_STATE", projectId: e, connState: t });
}
let x = { location: "connection", code: T.xf.SEND_FAILED },
    G = { location: "agent", code: T.xf.AGENT_ERROR };
function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x;
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
    for (let s of ((t.pendingSends = []), r)) (F(e, s), B(e, n));
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
                C.Ay.getProject(e)?.name,
                { templateId: r.templateId, remix: r.remix, clarificationAnswers: r.clarificationAnswers },
            );
        } catch (t) {
            (console.error("[vibegrations] queued send failed", t),
                B(e, t instanceof Error ? t.message : "send failed"));
        }
    }
}
async function V(e, t, n) {
    try {
        let { ticket: r } = await (0, N.g)(n);
        e.ws.sendUpstreamTicketAck(t, r);
    } catch (r) {
        let n = r?.status;
        e.ws.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
let Y = {
        build_error: { location: "build", code: T.xf.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: T.xf.HEALTHCHECK_FAILED },
        error: { location: "agent", code: T.xf.AGENT_ERROR },
    },
    X = {
        web: { location: "runtime_frame", code: T.xf.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: T.xf.RUNTIME_WORKER_ERROR },
    },
    Z = new Map(),
    ee = new Set();
async function et(e, t, n) {
    let r,
        s = Date.now();
    (console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe }),
        !0 !== n.probe && n.spec?.mode === "widget" && (0, S.b)(e, "widget"));
    try {
        r = await b.A.relayPreviewCapture(e, n.id, {
            probe: n.probe,
            spec: n.spec,
            build: n.build,
            onAccepted: async () => (t.ws.sendCaptureAck(n.id, "accepted"), await m(e, n.id)),
            resolveUploadUrl: () => eV(e),
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
        let s = await b.A.relayPreviewControl(
            e,
            n.id,
            n.request,
            async () => (t.ws.sendControlAck(n.id, "accepted"), (await m(e, n.id)) != null),
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
        let { ticket: n, baseUrl: r } = await (0, N.d)(e);
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
                        if (r.requested !== eS.get(t) || (eS.delete(t), !0 === r.failed)) return;
                        o.h.dispatch({
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
                            n.debugOnDemand || o.h.dispatch({ type: "CONJURE_TRACE_REPLAY_STARTING", projectId: t }),
                            n.backoff.succeed());
                    else if ("history" === r.type) {
                        let s = (r.messages ?? []).slice();
                        (o.h.dispatch({
                            type: "CONJURE_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: s,
                            cursor: !0 === r.has_more ? (r.cursor ?? null) : null,
                            degraded: !0 === r.degraded,
                        }),
                            eS.delete(t));
                        let i = n.pendingEvents;
                        for (let r of ((n.pendingEvents = []), j(t, "open"), i)) e(t, n, r);
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
                            "app_channel_deleted" !== r.type && (0, k.GO)(t));
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
                                : B(t, U.intl.string(R.default["913RMa"]), G);
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
                        } else if ("debug_compaction_report" === r.kind)
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
                                : B(t, U.intl.string(R.default["0+RUWx"]), G);
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
                        else if ("reaction" === r.kind)
                            null != r.message_id &&
                                null != r.emoji &&
                                "" !== r.emoji &&
                                o.h.dispatch({
                                    type: "CONJURE_CHAT_MESSAGE_REACTION",
                                    projectId: t,
                                    id: r.message_id,
                                    emoji: r.emoji,
                                });
                        else if ("project_named" === r.kind) {
                            let e = C.Ay.getProject(t);
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
                                (0, k.Is)(t, r.error ?? "publish_result not ok", !1);
                            else {
                                let e = C.Ay.getPublishStatus(t);
                                null != e &&
                                    o.h.dispatch({
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
                                function l(e) {
                                    null != s && "" !== s && n.ws.sendAppIconAck(s, e);
                                }
                                (0, k.Ru)(t, e)
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
                                  L.delete(t) &&
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
                                          ...Y[r.kind],
                                          message: r.message,
                                          details: "build_error" === r.kind ? r.stderr_tail : void 0,
                                      }),
                                  "preview_ready" === r.kind &&
                                      (0, k.tZ)(t, { isPreview: !0 }).catch((e) => {
                                          console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                      }));
                    else {
                        let e;
                        "capture_preview" === r.type
                            ? et(t, n, r).catch(() => {})
                            : "control_preview" === r.type
                              ? en(t, n, r).catch(() => {})
                              : "control_abort" === r.type
                                ? b.A.abortPreviewControl(t)
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
                                        ? ((0, w.pF)(t, "tuning" === r.mode), b.A.beginPreviewOperation(t))
                                        : ((0, w.pF)(t, !1), b.A.endPreviewOperation(t))
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
                                              : "debug_model_call" === r.type
                                                ? (o.h.dispatch({
                                                      type: "CONJURE_MODEL_CALL_APPEND",
                                                      projectId: t,
                                                      modelCall: r,
                                                  }),
                                                  "started" !== r.status &&
                                                      o.h.dispatch({
                                                          type: "CONJURE_DEBUG_MODEL_CALL",
                                                          projectId: t,
                                                          ...(0, c.c)(r),
                                                          observedAt: new Date().toISOString(),
                                                      }))
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
                                                    : "debug_tool_call" === r.type
                                                      ? o.h.dispatch({
                                                            type: "CONJURE_TOOL_CALL_APPEND",
                                                            projectId: t,
                                                            toolCall: r,
                                                        })
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
                                                                let n = null != t.source ? X[t.source] : void 0;
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
                (A(t, "Connection closed before the publish result arrived"),
                v(t, "Connection closed before the draft arrived"),
                E(e),
                t.disposed)
                    ? j(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), j(e, "connecting"), t.backoff.fail(() => es(e)))
                      : (j(e, "closed"),
                        Q(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        (j(e, "failed"),
            Q(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            A(t, "Connection failed before the publish result arrived"),
            v(t, "Connection failed before the draft arrived"),
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
        j(e, "connecting"),
        er(e, n));
}
let eo = new Map();
function ei(e, t) {
    t.debugOnDemand &&
        (o.h.dispatch({ type: "CONJURE_TRACE_REPLAY_STARTING", projectId: e }), t.ws.sendDebugSubscribe());
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
        A(n, "Connection closed before the publish result arrived"),
        v(n, "Connection closed before the draft arrived"),
        n.ws.close(),
        P.delete(e),
        (t = e),
        eS.delete(t),
        b.A.releasePreviewControl(e),
        E(e),
        j(e, "closed"),
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
            C.Ay.getProject(e)?.name,
            { templateId: c.templateId, remix: c.remix, clarificationAnswers: c.clarificationAnswers },
        );
    } catch (t) {
        (console.error("[vibegrations] send failed", t), B(e, t instanceof Error ? t.message : "send failed"));
    }
}
function eu(e) {
    let t = P.get(e);
    try {
        if (null == t) throw Error("Not connected");
        (t.ws.sendInterrupt(),
            l.Ay.isThinking(e) && (L.add(e), o.h.dispatch({ type: "CONJURE_CHAT_STOP_REQUESTED", projectId: e })));
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
            A(s, "Publish timed out");
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
            throw ((0, k.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && o.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function ef(e) {
    return new Promise((t, n) => {
        let r = P.get(e);
        if (null == r) return void n(Error("Not connected"));
        v(r, "Superseded by a newer draft request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            o = setTimeout(() => {
                v(r, "Draft timed out");
            }, 45e3);
        r.pendingPatchNotesDraft = { resolve: t, reject: n, timeout: o, nonce: s };
        try {
            r.ws.sendDraftPatchNotes(s);
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
function em(e) {
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
function eE(e, t) {
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        return (n.ws.sendLiveReload(t), !0);
    } catch (e) {
        return (console.error("[vibegrations] live reload send failed", e), !1);
    }
}
function ew(e, t) {
    let n = P.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let eS = new Map();
function ek(e) {
    let t = (0, l.bi)(e);
    if (null == t) return !1;
    if (eS.get(e) === t) return !0;
    let n = P.get(e);
    return null != n && "open" === D.get(e) && (eS.set(e, t), n.ws.sendLoadHistory(t), !0);
}
let eC = new Map(),
    eT = new Map();
function eb(e) {
    let t = eC.get(e);
    if (null != t && t.expiresAt > Date.now()) return Promise.resolve(t.ticket);
    let n = eT.get(e);
    if (null != n) return n;
    let r = (0, N.d)(e)
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
            eT.delete(e);
        });
    return (eT.set(e, r), r);
}
async function eO(e) {
    let { ticket: t, baseUrl: n } = await (0, N.d)(e),
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
async function eN(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
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
            (0, k.tZ)(e, { isPreview: !0 }).catch((t) => {
                console.error("[vibegrations] post-version-restore refresh failed", e, t);
            }),
        i.entry
    );
}
async function eR(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = new URLSearchParams({ ticket: n, environment: t }),
        o = await fetch(`${r}/agent/database/restore-points?${s}`);
    if (!o.ok) throw Error(`restore points failed (${o.status})`);
    let i = await o.json();
    return Array.isArray(i.restorePoints) ? i.restorePoints : [];
}
async function eU(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = new URLSearchParams({ ticket: n, environment: t }),
        o = await fetch(`${r}/agent/database/restore-window?${s}`);
    if (!o.ok) throw Error(`restore window failed (${o.status})`);
    return await o.json();
}
async function eA(e, t, n) {
    let { ticket: r, baseUrl: s } = await (0, N.d)(e),
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
async function ev(e, t) {
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
            (0, k.BD)(e);
        } catch (t) {
            console.error("[vibegrations] post-data-restore frame reload failed", e, t);
        }
    return s;
}
async function eP(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = new URLSearchParams({ ticket: n });
    return ev(
        e,
        await fetch(`${r}/agent/database/restore-points/${encodeURIComponent(t)}/restore?${s}`, { method: "POST" }),
    );
}
async function eJ(e, t, n) {
    let { ticket: r, baseUrl: s } = await (0, N.d)(e),
        o = new URLSearchParams({ ticket: r });
    return ev(
        e,
        await fetch(`${s}/agent/database/restore?${o}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ environment: t, timestampMs: n }),
        }),
    );
}
function eI(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function eD(e, t) {
    return eL(e, t, t.name, t.type);
}
async function eM(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = await fetch(`${eI(r, "from-url")}?${new URLSearchParams({ ticket: n })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ url: t }),
        }),
        o = await s.json().catch(() => null);
    if (!s.ok || null == o || !("id" in o))
        throw Error(null != o && "error" in o && "string" == typeof o.error ? o.error : "");
    return o;
}
async function eL(e, t, n, r) {
    let { ticket: s, baseUrl: o } = await (0, N.d)(e),
        i = new URLSearchParams({ ticket: s, name: n }),
        a = await fetch(`${eI(o)}?${i}`, {
            method: "POST",
            headers: { "content-type": "" !== r ? r : "application/octet-stream" },
            body: t,
        });
    if (!a.ok) throw Error(`attachment upload failed (${a.status})`);
    return await a.json();
}
class e$ extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function eH(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = new URLSearchParams({ ticket: n, name: t }),
        o = await fetch(`${r}/agent/export?${s}`);
    if (!o.ok) throw new e$(o.status);
    return await o.blob();
}
class ej extends Error {
    status;
    constructor(e) {
        (super(`remix failed (${e})`), (this.status = e));
    }
}
async function ex(e, t) {
    let [n, r] = await Promise.all([(0, N.g)(e), (0, N.d)(t)]),
        s = new URLSearchParams({ ticket: n.ticket }),
        o = await fetch(`${n.baseUrl}/agent/fork?${s}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!o.ok) throw new ej(o.status);
}
async function eG(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = new URLSearchParams({ ticket: n }),
        o = await fetch(`${r}/agent/secrets?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!o.ok) throw Error(`secret submission failed (${o.status})`);
}
async function eB(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
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
function eW(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await (0, N.d)(e),
            r = new URLSearchParams({ ticket: t }),
            s = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        s.ok || console.warn("[vibegrations] settings rebuild request failed", e, s.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
function eq(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function eF(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = new URLSearchParams({ ticket: n });
    t && s.set("regenerate", "1");
    let o = await fetch(`${r}/agent/mcp-token?${s}`, { method: "POST" });
    if (!o.ok) throw Error(`mcp token failed (${o.status})`);
    let i = await o.json(),
        a = "number" == typeof i.expires_in ? Date.now() + 1e3 * i.expires_in : Date.parse(i.expires_at);
    return { url: i.url, expiresAtMs: a };
}
async function ez(e, t) {
    let n, r;
    try {
        let { ticket: r, baseUrl: s } = await (0, N.d)(e);
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
async function eQ(e, t) {
    let { ticket: n, baseUrl: r } = await (0, N.d)(e),
        s = new URLSearchParams({ ticket: n }),
        o = await fetch(`${eI(r, t)}?${s}`, { method: "DELETE", keepalive: !0 });
    if (!o.ok) throw Error(`attachment cleanup failed (${o.status})`);
}
async function eK(e, t) {
    let { ticket: n, baseUrl: r } = await eb(e),
        s = new URLSearchParams({ ticket: n });
    return `${r}/agent/screenshots/${encodeURIComponent(t)}?${s}`;
}
async function eV(e) {
    let { ticket: t, baseUrl: n } = await eb(e);
    return `${n}/agent/screenshots?${new URLSearchParams({ ticket: t })}`;
}
async function eY(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: s } = await eb(e),
        o = new URLSearchParams({ ticket: r });
    return (n && o.set("download", "1"), `${eI(s, t)}?${o}`);
}
async function eX(e, t) {
    async function n() {
        return fetch(await eY(e, t), { method: "HEAD" });
    }
    let r = await n();
    if ((401 === r.status && (eC.delete(e), (r = await n())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function eZ(e) {
    el(e);
}
class e0 extends s.Ay.Store {
    initialize() {
        this.waitFor(l.Ay, c.A, C.Ay, a.default);
    }
    getConnState(e) {
        return D.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return M.get(e) ?? !1;
    }
    getModelSettings(e) {
        return $.get(e) ?? null;
    }
    getSettings(e) {
        return H.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return H.get(e)?.connections ?? e1;
    }
}
let e1 = [],
    e2 = new e0(o.h, {
        CONJURE_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if (D.get(t) === n) return !1;
            (D.set(t, n), ("closed" === n || "failed" === n) && L.delete(t));
        },
        CONJURE_CHAT_STOPPED_SET: function (e) {
            let { projectId: t, stopped: n } = e;
            if ((M.get(t) ?? !1) === n) return !1;
            M.set(t, n);
        },
        CONJURE_MODEL_SETTINGS_SET: function (e) {
            let { projectId: t, settings: n, tierSettings: r, tiers: s, choices: o } = e;
            $.set(t, { settings: n, tierSettings: r, tiers: s, choices: o });
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
            for (let e of Array.from(P.keys())) null == C.Ay.getProject(e) && el(e) && (t = !0);
            if (!t) return !1;
        },
        LOGOUT: function () {
            if (0 === P.size) return !1;
            for (let e of Array.from(P.keys())) el(e);
            (M.clear(), q.clear(), eC.clear());
        },
    });
