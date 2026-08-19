"use strict";
n.d(t, { A: () => m });
var i = n(132500),
    r = n(228366),
    a = n(815706),
    s = n(626584),
    l = n(810412),
    o = n(93465),
    d = n(41984),
    c = n(592598),
    u = n(38502),
    _ = n(157257),
    E = n(531685),
    A = n(5463),
    h = n(9302),
    I = n(391973),
    f = n(652215);
let p = new s.A("OverlayActionCreators"),
    T = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, a.z)(e, t, n);
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
                ? T.setInputLocked(e, (0, h.getPID)())
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
                e === o.M.GAME_ACTIVITY && n && this.track(f.HAw.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: t }),
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
                i = c.A.getDisabledSettingByNotificationType(e);
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
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.yFH.DISMISSED;
            r.h.dispatch({ type: "OVERLAY_UPDATE_NOTIFICATION_STATUS", notificationId: e, status: t });
        },
        setModuleLogging(e) {
            r.h.dispatch({ type: "OVERLAY_SET_MODULE_LOGGING", enabled: e });
        },
        setStateDebugging(e) {
            r.h.dispatch({ type: "OVERLAY_SET_STATE_DEBUGGING", enabled: e });
        },
        notificationEvent(e, t) {
            let n = _.A.getGame();
            r.h.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: n?.name ?? null,
                gameId: n?.id ?? null,
            });
        },
        setPinChat(e) {
            let t = h.OVERLAY_LAYOUT_ID,
                n = u.A.getWidgetsForLayout(t),
                r = u.A.getWidgetConfig(f.uss.GUILDS),
                a = u.A.getWidgetConfig(f.uss.TEXT),
                s = u.A.getWidgetConfig(f.uss.GUILDS_TEXT),
                o = u.A.getWidgetDefaultSettings(f.uss.GUILDS_TEXT),
                d = u.A.getWidgetDefaultSettings(f.uss.GUILDS),
                c = u.A.getWidgetDefaultSettings(f.uss.TEXT);
            if (
                ((0, l.xp)(f.uss.TEXT, { pinned: e }),
                0 === n.length || null == r || null == a || null == s || null == o || null == d || null == c)
            )
                return;
            let _ = E.A.windowSize(),
                p = { width: 0, height: 0 },
                T = { top: 0, left: 0, right: 0, bottom: 0 },
                m = { width: 312, height: 0 },
                g = { top: 0, left: 0, right: 0, bottom: 0 },
                S = { width: 0, height: 0 };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: i, size: r } = e;
                    switch (t) {
                        case f.uss.TEXT:
                            (p = (0, A.fd)(r, _)), (0, I.uv)(n);
                            break;
                        case f.uss.GUILDS:
                            (T = (0, A.NR)(i, r, _)), (m = (0, A.fd)(r, _)), (0, I.uv)(n);
                            break;
                        case f.uss.GUILDS_TEXT:
                            (g = (0, A.NR)(i, r, _)), (S = (0, A.fd)(r, _)), (0, I.uv)(n);
                    }
                }),
                e)
            ) {
                let e = "auto" === S.width ? o.minSize.width : S.width;
                e -= d.minSize.width;
                let [n, r] = (0, A.M4)(g, { ...S, width: d.minSize.width }, _),
                    [a, s] = (0, A.n7)(g, { ...S, width: e }, _, { x: 10, y: 10 }),
                    l = u.A.getWidgetDefaultSettings(f.uss.TEXT);
                if (null == l) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, I.jn)({ ...l, type: f.uss.TEXT, id: (0, i.A)(), size: s, anchor: a, layoutId: t });
                let c = u.A.getWidgetDefaultSettings(f.uss.GUILDS);
                if (null == c) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, I.jn)({ ...c, type: f.uss.GUILDS, id: (0, i.A)(), size: r, anchor: n, layoutId: t });
            } else {
                let e = "auto" === p.width ? c.minSize.width : p.width;
                e += d.minSize.width;
                let [n, r] = (0, A.M4)(T, { height: m.height, width: e }, _),
                    a = u.A.getWidgetDefaultSettings(f.uss.GUILDS_TEXT);
                if (null == a) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, I.jn)({ ...a, type: f.uss.GUILDS_TEXT, id: (0, i.A)(), layoutId: t, anchor: n, size: r });
            }
        },
        resetDefaultLayout(e, t) {
            null != u.A.getLayout(e) && ((0, I.IC)(e), (0, I.uF)(u.A.getDefaultLayout(e, t)));
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
    m = T;
