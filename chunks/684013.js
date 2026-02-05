"use strict";
n.d(t, { A: () => I });
var r = n(835245),
    i = n(73153),
    a = n(815706),
    s = n(626584),
    o = n(810412),
    l = n(93465),
    u = n(41984),
    c = n(592598),
    d = n(555528),
    _ = n(157257),
    f = n(531685),
    p = n(5463),
    h = n(9302),
    m = n(391973),
    g = n(652215);
let E = new s.A("OverlayActionCreators"),
    A = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, a.z)(e, t, n);
        },
        overlayReady(e) {
            i.h.dispatch({ type: "OVERLAY_READY", pid: e });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            i.h.dispatch({ type: "OVERLAY_MOUNTED", nudges: t });
        },
        setFocusedPID(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = n ? u.su.UNTRACK_FOCUS : u.su.TRACK_FOCUS;
            i.h.dispatch({ type: "OVERLAY_FOCUSED", pid: e, windowHandle: t, trackMode: r });
        },
        setInputLocked(e, t) {
            i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: e, pid: t });
        },
        setOverlayCrashed(e, t) {
            i.h.dispatch({ type: "OVERLAY_CRASHED", pid: e, error: t });
        },
        setReloadOverlay(e) {
            i.h.dispatch({ type: "OVERLAY_RELOAD", pid: e });
        },
        setRenderDebugMode(e, t) {
            i.h.dispatch({ type: "OVERLAY_RENDER_DEBUG_MODE", enabled: e, mode: t });
        },
        clearTrackedPids() {
            i.h.dispatch({ type: "OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS" });
        },
        setInstanceLocked(e) {
            __OVERLAY__
                ? A.setInputLocked(e, (0, h.getPID)())
                : E.error("Attempting to start an overlay session outside of the overlay context");
        },
        setEnabled(e, t) {
            i.h.dispatch({ type: "OVERLAY_SET_ENABLED", legacyEnabled: e, oopEnabled: t });
        },
        selectCall(e) {
            i.h.dispatch({ type: "OVERLAY_SELECT_CALL", callId: e });
        },
        setDisplayNameMode(e) {
            i.h.dispatch({ type: "OVERLAY_SET_DISPLAY_NAME_MODE", mode: e });
        },
        setDisplayUserMode(e) {
            i.h.dispatch({ type: "OVERLAY_SET_DISPLAY_USER_MODE", mode: e });
        },
        setAvatarSizeMode(e) {
            i.h.dispatch({ type: "OVERLAY_SET_AVATAR_SIZE_MODE", mode: e });
        },
        setNotificationPositionMode(e) {
            i.h.dispatch({ type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE", mode: e });
        },
        setDisableClickableRegions(e) {
            i.h.dispatch({ type: "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS", disable: e });
        },
        setShowKeybindIndicators(e) {
            i.h.dispatch({ type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", shouldShow: e });
        },
        setNotificationDisabledSetting(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return (
                e === l.M.GAME_ACTIVITY && n && this.track(g.HAw.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: t }),
                i.h.dispatch({
                    type: "OVERLAY_SET_NOTIFICATION_DISABLED_SETTING",
                    setting: e,
                    disabled: t,
                    shouldTrack: n,
                })
            );
        },
        setNotificationDisabled(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = c.A.getDisabledSettingByNotificationType(e);
            if (null != r) return this.setNotificationDisabledSetting(r, t, n);
        },
        setInviteMessage(e) {
            i.h.dispatch({ type: "OVERLAY_SET_INVITE_MESSAGE", message: e });
        },
        callPrivateChannel(e, t) {
            i.h.dispatch({ type: "OVERLAY_CALL_PRIVATE_CHANNEL", channelId: e, ring: t });
        },
        setTextWidgetOpacity(e) {
            i.h.dispatch({ type: "OVERLAY_SET_TEXT_WIDGET_OPACITY", opacity: e });
        },
        disableExternalLinkAlert() {
            i.h.dispatch({ type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT" });
        },
        startSession() {
            __OVERLAY__
                ? i.h.dispatch({ type: "OVERLAY_START_SESSION" })
                : E.error("Attempting to start an overlay session outside of the overlay context");
        },
        activateRegion(e) {
            i.h.dispatch({ type: "OVERLAY_ACTIVATE_REGION", region: e });
        },
        deactivateAllRegions() {
            i.h.dispatch({ type: "OVERLAY_DEACTIVATE_ALL_REGIONS" });
        },
        setPreviewInGameMode(e) {
            i.h.dispatch({ type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE", isPreviewingInGame: e });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.yFH.DISMISSED;
            i.h.dispatch({ type: "OVERLAY_UPDATE_NOTIFICATION_STATUS", notificationId: e, status: t });
        },
        setModuleLogging(e) {
            i.h.dispatch({ type: "OVERLAY_SET_MODULE_LOGGING", enabled: e });
        },
        setStateDebugging(e) {
            i.h.dispatch({ type: "OVERLAY_SET_STATE_DEBUGGING", enabled: e });
        },
        notificationEvent(e, t) {
            let n = _.A.getGame();
            i.h.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: n?.name ?? null,
                gameId: n?.id ?? null,
            });
        },
        setPinChat(e) {
            let t = h.OVERLAY_LAYOUT_ID,
                n = d.A.getWidgetsForLayout(t),
                i = d.A.getWidgetConfig(g.uss.GUILDS),
                a = d.A.getWidgetConfig(g.uss.TEXT),
                s = d.A.getWidgetConfig(g.uss.GUILDS_TEXT),
                l = d.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT),
                u = d.A.getWidgetDefaultSettings(g.uss.GUILDS),
                c = d.A.getWidgetDefaultSettings(g.uss.TEXT);
            if (
                ((0, o.xp)(g.uss.TEXT, { pinned: e }),
                0 === n.length || null == i || null == a || null == s || null == l || null == u || null == c)
            )
                return;
            let _ = f.A.windowSize(),
                E = { width: 0, height: 0 },
                A = { top: 0, left: 0, right: 0, bottom: 0 },
                I = { width: 312, height: 0 },
                T = { top: 0, left: 0, right: 0, bottom: 0 },
                y = { width: 0, height: 0 };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: r, size: i } = e;
                    switch (t) {
                        case g.uss.TEXT:
                            (E = (0, p.fd)(i, _)), (0, m.uv)(n);
                            break;
                        case g.uss.GUILDS:
                            (A = (0, p.NR)(r, i, _)), (I = (0, p.fd)(i, _)), (0, m.uv)(n);
                            break;
                        case g.uss.GUILDS_TEXT:
                            (T = (0, p.NR)(r, i, _)), (y = (0, p.fd)(i, _)), (0, m.uv)(n);
                    }
                }),
                e)
            ) {
                let e = "auto" === y.width ? l.minSize.width : y.width;
                e -= u.minSize.width;
                let [n, i] = (0, p.M4)(T, { ...y, width: u.minSize.width }, _),
                    [a, s] = (0, p.n7)(T, { ...y, width: e }, _, { x: 10, y: 10 }),
                    o = d.A.getWidgetDefaultSettings(g.uss.TEXT);
                if (null == o) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, m.jn)({ ...o, type: g.uss.TEXT, id: (0, r.A)(), size: s, anchor: a, layoutId: t });
                let c = d.A.getWidgetDefaultSettings(g.uss.GUILDS);
                if (null == c) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, m.jn)({ ...c, type: g.uss.GUILDS, id: (0, r.A)(), size: i, anchor: n, layoutId: t });
            } else {
                let e = "auto" === E.width ? c.minSize.width : E.width;
                e += u.minSize.width;
                let [n, i] = (0, p.M4)(A, { height: I.height, width: e }, _),
                    a = d.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT);
                if (null == a) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, m.jn)({ ...a, type: g.uss.GUILDS_TEXT, id: (0, r.A)(), layoutId: t, anchor: n, size: i });
            }
        },
        resetDefaultLayout(e, t) {
            null != d.A.getLayout(e) && ((0, m.IC)(e), (0, m.uF)(d.A.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            i.h.dispatch({ type: "OVERLAY_SET_CLICK_ZONES", zones: e });
        },
        relayClickZoneClicked(e, t, n) {
            i.h.dispatch({
                type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n,
            });
        },
        setAssociatedGame(e, t, n) {
            i.h.dispatch({
                type: "OVERLAY_SET_ASSOCIATED_GAME",
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n,
            });
        },
        forceRenderMode(e) {
            i.h.dispatch({ type: "OVERLAY_FORCE_RENDER_MODE", mode: e });
        },
        updateOverlayMethod: (e, t) =>
            i.h.dispatch({ type: "OVERLAY_UPDATE_OVERLAY_METHOD", pid: e, overlayMethod: t }),
        updateOverlayState(e, t, n) {
            i.h.dispatch({ type: "OVERLAY_UPDATE_OVERLAY_STATE", pid: e, overlayState: t, reason: n });
        },
        successfullyShown(e) {
            i.h.dispatch({ type: "OVERLAY_SUCCESSFULLY_SHOWN", pid: e });
        },
        setGpuBoostRequested(e, t) {
            i.h.dispatch({ type: "OVERLAY_SET_GPU_BOOST_REQUESTED", reason: e, enabled: t });
        },
        updateTrackedGame: (e, t) => i.h.dispatch({ type: "OVERLAY_TRACKED_GAME_UPDATE", pid: e, trackedGame: t }),
        trackOverlayStateChanged(e, t, n, r) {
            i.h.dispatch({ type: "OVERLAY_TRACK_STATE_CHANGED", pid: e, oldState: t, newState: n, reason: r });
        },
        overlayUIFocusedPid(e, t) {
            i.h.dispatch({ type: "OVERLAY_UI_FOCUSED_PID", pid: e, windowHandle: t });
        },
    },
    I = A;
