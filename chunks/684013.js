"use strict";
n.d(t, { A: () => I });
var i = n(132500),
    r = n(228366),
    s = n(815706),
    a = n(626584),
    o = n(810412),
    l = n(93465),
    d = n(41984),
    _ = n(592598),
    u = n(38502),
    c = n(157257),
    E = n(531685),
    h = n(5463),
    m = n(9302),
    f = n(391973),
    g = n(652215);
let p = new a.A("OverlayActionCreators"),
    A = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, s.z)(e, t, n);
        },
        overlayReady(e) {
            r.h.dispatch({ type: "OVERLAY_READY", pid: e });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            r.h.dispatch({ type: "OVERLAY_MOUNTED", nudges: t });
        },
        setFocusedPID(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = n ? d.su.UNTRACK_FOCUS : d.su.TRACK_FOCUS;
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
                ? A.setInputLocked(e, (0, m.getPID)())
                : p.error("Attempting to start an overlay session outside of the overlay context");
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
        setNotificationDisabledSetting(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return (
                e === l.M.GAME_ACTIVITY && n && this.track(g.HAw.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: t }),
                r.h.dispatch({
                    type: "OVERLAY_SET_NOTIFICATION_DISABLED_SETTING",
                    setting: e,
                    disabled: t,
                    shouldTrack: n,
                })
            );
        },
        setNotificationDisabled(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = _.A.getDisabledSettingByNotificationType(e);
            if (null != i) return this.setNotificationDisabledSetting(i, t, n);
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
                : p.error("Attempting to start an overlay session outside of the overlay context");
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
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.yFH.DISMISSED;
            r.h.dispatch({ type: "OVERLAY_UPDATE_NOTIFICATION_STATUS", notificationId: e, status: t });
        },
        setModuleLogging(e) {
            r.h.dispatch({ type: "OVERLAY_SET_MODULE_LOGGING", enabled: e });
        },
        setStateDebugging(e) {
            r.h.dispatch({ type: "OVERLAY_SET_STATE_DEBUGGING", enabled: e });
        },
        notificationEvent(e, t) {
            let n = c.A.getGame();
            r.h.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: n?.name ?? null,
                gameId: n?.id ?? null,
            });
        },
        setPinChat(e) {
            let t = m.OVERLAY_LAYOUT_ID,
                n = u.A.getWidgetsForLayout(t),
                r = u.A.getWidgetConfig(g.uss.GUILDS),
                s = u.A.getWidgetConfig(g.uss.TEXT),
                a = u.A.getWidgetConfig(g.uss.GUILDS_TEXT),
                l = u.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT),
                d = u.A.getWidgetDefaultSettings(g.uss.GUILDS),
                _ = u.A.getWidgetDefaultSettings(g.uss.TEXT);
            if (
                ((0, o.xp)(g.uss.TEXT, { pinned: e }),
                0 === n.length || null == r || null == s || null == a || null == l || null == d || null == _)
            )
                return;
            let c = E.A.windowSize(),
                p = { width: 0, height: 0 },
                A = { top: 0, left: 0, right: 0, bottom: 0 },
                I = { width: 312, height: 0 },
                T = { top: 0, left: 0, right: 0, bottom: 0 },
                S = { width: 0, height: 0 };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: i, size: r } = e;
                    switch (t) {
                        case g.uss.TEXT:
                            (p = (0, h.fd)(r, c)), (0, f.uv)(n);
                            break;
                        case g.uss.GUILDS:
                            (A = (0, h.NR)(i, r, c)), (I = (0, h.fd)(r, c)), (0, f.uv)(n);
                            break;
                        case g.uss.GUILDS_TEXT:
                            (T = (0, h.NR)(i, r, c)), (S = (0, h.fd)(r, c)), (0, f.uv)(n);
                    }
                }),
                e)
            ) {
                let e = "auto" === S.width ? l.minSize.width : S.width;
                e -= d.minSize.width;
                let [n, r] = (0, h.M4)(T, { ...S, width: d.minSize.width }, c),
                    [s, a] = (0, h.n7)(T, { ...S, width: e }, c, { x: 10, y: 10 }),
                    o = u.A.getWidgetDefaultSettings(g.uss.TEXT);
                if (null == o) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, f.jn)({ ...o, type: g.uss.TEXT, id: (0, i.A)(), size: a, anchor: s, layoutId: t });
                let _ = u.A.getWidgetDefaultSettings(g.uss.GUILDS);
                if (null == _) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, f.jn)({ ..._, type: g.uss.GUILDS, id: (0, i.A)(), size: r, anchor: n, layoutId: t });
            } else {
                let e = "auto" === p.width ? _.minSize.width : p.width;
                e += d.minSize.width;
                let [n, r] = (0, h.M4)(A, { height: I.height, width: e }, c),
                    s = u.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT);
                if (null == s) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, f.jn)({ ...s, type: g.uss.GUILDS_TEXT, id: (0, i.A)(), layoutId: t, anchor: n, size: r });
            }
        },
        resetDefaultLayout(e, t) {
            null != u.A.getLayout(e) && ((0, f.IC)(e), (0, f.uF)(u.A.getDefaultLayout(e, t)));
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
    I = A;
