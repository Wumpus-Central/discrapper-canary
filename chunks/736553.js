(n.d(t, { u: () => r }), n(323874), n(14289), n(35956));
class r {
    socket = null;
    supportsPublishOptions = !1;
    open(e) {
        let { url: t, ticket: n, templateId: r, onEvent: s, onClose: o, onError: i } = e;
        this.close();
        let l = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            a = new URLSearchParams({ ticket: n, debug: "on_demand", ...(null != r ? { template: r } : {}) }),
            c = new WebSocket(`${l}/agent/ws?${a}`);
        ((this.socket = c),
            c.addEventListener("message", (e) => {
                let t;
                if (this.socket === c) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[conjure] ws frame parse failed", e);
                        return;
                    }
                    ("hello" === t.type && (this.supportsPublishOptions = !0 === t.publish_options), s(t));
                }
            }),
            c.addEventListener("error", (e) => {
                this.socket === c && i?.(e);
            }),
            c.addEventListener("close", () => {
                this.socket === c && o?.();
            }));
    }
    sendPublishScheduleMessage(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify(e));
    }
    sendUserMessage(e, t, n) {
        let {
            templateId: r,
            remix: s,
            clarificationAnswers: o,
            linkEmbeds: i,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({
                type: "user_message",
                content: e,
                nonce: t,
                attachment_ids: n,
                template_id: r,
                remix: s,
                clarification_answers: o,
                link_embeds: i,
            }),
        );
    }
    sendUpstreamTicketAck(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "upstream_ticket_ack", id: e, ticket: t, error: n }));
    }
    sendRetryRemix() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "retry_remix" }));
    }
    sendKeepInstallScope() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "keep_install_scope" }));
    }
    sendInterrupt() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "interrupt" }));
    }
    sendQueuedMessageAction(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: `${e}_queued_message`, id: t }));
    }
    sendPublishOptions(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("Not connected");
        this.socket.send(JSON.stringify({ type: "publish_options", nonce: e }));
    }
    sendPublish(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "publish", destination_id: e }));
    }
    sendPreparePublish() {
        null != this.socket &&
            this.socket.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify({ type: "prepare_publish" }));
    }
    sendDraftPatchNotes(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "draft_patch_notes", nonce: e }));
    }
    sendPatchNotesSent(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(
            JSON.stringify({
                type: "patch_notes_sent",
                published_revision: e.publishedRevision,
                guild_id: e.guildId,
                channel_id: e.channelId,
                message_id: e.messageId,
                ...(null != t ? { source_sha: t } : {}),
            }),
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
    sendPrepareTemplate(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "prepare_template", template_id: e }));
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
    sendUndoContextSwitch(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "undo_context_switch", id: e }));
    }
    sendSmartContext(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_smart_context", enabled: e }));
    }
    sendHostAccess(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify(e));
    }
    sendRestartSandbox() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "restart_sandbox" }));
    }
    sendDebugGitInfoRequest() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "debug_git_info_request", ...(e ? { lite: !0 } : {}) }));
    }
    sendRestartAgent(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "restart_agent", clear_alarm: e }));
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
        ((this.supportsPublishOptions = !1), this.socket?.close(), (this.socket = null));
    }
}
