n.d(t, { A: () => I });
var i = n(132500),
    r = n(73153),
    a = n(626584),
    s = n(810412),
    l = n(41984),
    o = n(32584),
    d = n(157257),
    c = n(531685),
    u = n(5463),
    _ = n(9302),
    E = n(391973),
    A = n(652215);
let h = new a.A("OverlayActionCreators"),
    f = {
        overlayReady(e) {
            r.h.dispatch({ type: "OVERLAY_READY", pid: e });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            r.h.dispatch({ type: "OVERLAY_MOUNTED", nudges: t });
        },
        setFocusedPID(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = n ? l.su.UNTRACK_FOCUS : l.su.TRACK_FOCUS;
            r.h.dispatch({ type: "OVERLAY_FOCUSED", pid: e, windowHandle: t, trackMode: i });
        },
        setInputLocked(e, t) {
            r.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: e, pid: t });
        },
        setOverlayCrashed(e, t) {
            r.h.dispatch({ type: "OVERLAY_CRASHED", pid: e, error: t });
        },
        setReloadOverlay(e) {
            r.h.dispatch({ type: "OVERLAY_RELOAD", pid: e });
        },
        setRenderDebugMode(e, t) {
            r.h.dispatch({ type: "OVERLAY_RENDER_DEBUG_MODE", enabled: e, mode: t });
        },
        clearTrackedPids() {
            r.h.dispatch({ type: "OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS" });
        },
        setInstanceLocked(e) {
            __OVERLAY__
                ? f.setInputLocked(e, (0, _.getPID)())
                : h.error("Attempting to start an overlay session outside of the overlay context");
        },
        setEnabled(e, t) {
            r.h.dispatch({ type: "OVERLAY_SET_ENABLED", legacyEnabled: e, oopEnabled: t });
        },
        selectCall(e) {
            r.h.dispatch({ type: "OVERLAY_SELECT_CALL", callId: e });
        },
        setDisplayNameMode(e) {
            r.h.dispatch({ type: "OVERLAY_SET_DISPLAY_NAME_MODE", mode: e });
        },
        setDisplayUserMode(e) {
            r.h.dispatch({ type: "OVERLAY_SET_DISPLAY_USER_MODE", mode: e });
        },
        setAvatarSizeMode(e) {
            r.h.dispatch({ type: "OVERLAY_SET_AVATAR_SIZE_MODE", mode: e });
        },
        setNotificationPositionMode(e) {
            r.h.dispatch({ type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE", mode: e });
        },
        setDisableClickableRegions(e) {
            r.h.dispatch({ type: "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS", disable: e });
        },
        setInviteMessage(e) {
            r.h.dispatch({ type: "OVERLAY_SET_INVITE_MESSAGE", message: e });
        },
        callPrivateChannel(e, t) {
            r.h.dispatch({ type: "OVERLAY_CALL_PRIVATE_CHANNEL", channelId: e, ring: t });
        },
        setTextWidgetOpacity(e) {
            r.h.dispatch({ type: "OVERLAY_SET_TEXT_WIDGET_OPACITY", opacity: e });
        },
        disableExternalLinkAlert() {
            r.h.dispatch({ type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT" });
        },
        startSession() {
            __OVERLAY__
                ? r.h.dispatch({ type: "OVERLAY_START_SESSION" })
                : h.error("Attempting to start an overlay session outside of the overlay context");
        },
        activateRegion(e) {
            r.h.dispatch({ type: "OVERLAY_ACTIVATE_REGION", region: e });
        },
        deactivateAllRegions() {
            r.h.dispatch({ type: "OVERLAY_DEACTIVATE_ALL_REGIONS" });
        },
        setPreviewInGameMode(e) {
            r.h.dispatch({ type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE", isPreviewingInGame: e });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.yFH.DISMISSED;
            r.h.dispatch({ type: "OVERLAY_UPDATE_NOTIFICATION_STATUS", notificationId: e, status: t });
        },
        setModuleLogging(e) {
            r.h.dispatch({ type: "OVERLAY_SET_MODULE_LOGGING", enabled: e });
        },
        setStateDebugging(e) {
            r.h.dispatch({ type: "OVERLAY_SET_STATE_DEBUGGING", enabled: e });
        },
        notificationEvent(e, t) {
            let n = d.A.getGame();
            r.h.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: n?.name ?? null,
                gameId: n?.id ?? null,
            });
        },
        setPinChat(e) {
            let t = _.OVERLAY_LAYOUT_ID,
                n = o.A.getWidgetsForLayout(t),
                r = o.A.getWidgetConfig(A.uss.GUILDS),
                a = o.A.getWidgetConfig(A.uss.TEXT),
                l = o.A.getWidgetConfig(A.uss.GUILDS_TEXT),
                d = o.A.getWidgetDefaultSettings(A.uss.GUILDS_TEXT),
                h = o.A.getWidgetDefaultSettings(A.uss.GUILDS),
                f = o.A.getWidgetDefaultSettings(A.uss.TEXT);
            if (
                ((0, s.xp)(A.uss.TEXT, { pinned: e }),
                0 === n.length || null == r || null == a || null == l || null == d || null == h || null == f)
            )
                return;
            let I = c.A.windowSize(),
                p = { width: 0, height: 0 },
                T = { top: 0, left: 0, right: 0, bottom: 0 },
                m = { width: 312, height: 0 },
                g = { top: 0, left: 0, right: 0, bottom: 0 },
                S = { width: 0, height: 0 };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: i, size: r } = e;
                    switch (t) {
                        case A.uss.TEXT:
                            ((p = (0, u.fd)(r, I)), (0, E.uv)(n));
                            break;
                        case A.uss.GUILDS:
                            ((T = (0, u.NR)(i, r, I)), (m = (0, u.fd)(r, I)), (0, E.uv)(n));
                            break;
                        case A.uss.GUILDS_TEXT:
                            ((g = (0, u.NR)(i, r, I)), (S = (0, u.fd)(r, I)), (0, E.uv)(n));
                    }
                }),
                e)
            ) {
                let e = "auto" === S.width ? d.minSize.width : S.width;
                e -= h.minSize.width;
                let [n, r] = (0, u.M4)(g, { ...S, width: h.minSize.width }, I),
                    [a, s] = (0, u.n7)(g, { ...S, width: e }, I, { x: 10, y: 10 }),
                    l = o.A.getWidgetDefaultSettings(A.uss.TEXT);
                if (null == l) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, E.jn)({ ...l, type: A.uss.TEXT, id: (0, i.A)(), size: s, anchor: a, layoutId: t });
                let c = o.A.getWidgetDefaultSettings(A.uss.GUILDS);
                if (null == c) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, E.jn)({ ...c, type: A.uss.GUILDS, id: (0, i.A)(), size: r, anchor: n, layoutId: t });
            } else {
                let e = "auto" === p.width ? f.minSize.width : p.width;
                e += h.minSize.width;
                let [n, r] = (0, u.M4)(T, { height: m.height, width: e }, I),
                    a = o.A.getWidgetDefaultSettings(A.uss.GUILDS_TEXT);
                if (null == a) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, E.jn)({ ...a, type: A.uss.GUILDS_TEXT, id: (0, i.A)(), layoutId: t, anchor: n, size: r });
            }
        },
        resetDefaultLayout(e, t) {
            null != o.A.getLayout(e) && ((0, E.IC)(e), (0, E.uF)(o.A.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            r.h.dispatch({ type: "OVERLAY_SET_CLICK_ZONES", zones: e });
        },
        relayClickZoneClicked(e, t, n) {
            r.h.dispatch({
                type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n,
            });
        },
        setAssociatedGame(e, t, n) {
            r.h.dispatch({
                type: "OVERLAY_SET_ASSOCIATED_GAME",
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n,
            });
        },
        forceRenderMode(e) {
            r.h.dispatch({ type: "OVERLAY_FORCE_RENDER_MODE", mode: e });
        },
        updateOverlayMethod: (e, t) =>
            r.h.dispatch({ type: "OVERLAY_UPDATE_OVERLAY_METHOD", pid: e, overlayMethod: t }),
        updateOverlayState(e, t, n) {
            r.h.dispatch({ type: "OVERLAY_UPDATE_OVERLAY_STATE", pid: e, overlayState: t, reason: n });
        },
        successfullyShown(e) {
            r.h.dispatch({ type: "OVERLAY_SUCCESSFULLY_SHOWN", pid: e });
        },
        setGpuBoostRequested(e, t) {
            r.h.dispatch({ type: "OVERLAY_SET_GPU_BOOST_REQUESTED", reason: e, enabled: t });
        },
        updateTrackedGame: (e, t) => r.h.dispatch({ type: "OVERLAY_TRACKED_GAME_UPDATE", pid: e, trackedGame: t }),
        trackOverlayStateChanged(e, t, n, i) {
            r.h.dispatch({ type: "OVERLAY_TRACK_STATE_CHANGED", pid: e, oldState: t, newState: n, reason: i });
        },
        overlayUIFocusedPid(e, t) {
            r.h.dispatch({ type: "OVERLAY_UI_FOCUSED_PID", pid: e, windowHandle: t });
        },
        ackTextChatChannel(e) {
            r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_ACK_CHANNEL", channelId: e });
        },
    },
    I = f;
