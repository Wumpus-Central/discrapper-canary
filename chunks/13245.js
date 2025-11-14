n.d(t, { Z: () => T }), n(388685), n(415506);
var r = n(772848),
    i = n(570140),
    a = n(318885),
    o = n(710845),
    s = n(444295),
    l = n(486016),
    c = n(837268),
    u = n(624864),
    d = n(355863),
    f = n(449224),
    _ = n(451478),
    p = n(434529),
    h = n(145597),
    m = n(765250),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = new o.Z("OverlayActionCreators"),
    I = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, a.Q)(e, t, n);
        },
        overlayReady(e) {
            i.Z.dispatch({
                type: "OVERLAY_READY",
                pid: e,
            });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            i.Z.dispatch({
                type: "OVERLAY_MOUNTED",
                nudges: t,
            });
        },
        setFocusedPID(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = n ? c.d5.UNTRACK_FOCUS : c.d5.TRACK_FOCUS;
            i.Z.dispatch({
                type: "OVERLAY_FOCUSED",
                pid: e,
                windowHandle: t,
                trackMode: r,
            });
        },
        setInputLocked(e, t) {
            i.Z.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t,
            });
        },
        setOverlayCrashed(e, t) {
            i.Z.dispatch({
                type: "OVERLAY_CRASHED",
                pid: e,
                error: t,
            });
        },
        setReloadOverlay(e) {
            i.Z.dispatch({
                type: "OVERLAY_RELOAD",
                pid: e,
            });
        },
        setRenderDebugMode(e, t) {
            i.Z.dispatch({
                type: "OVERLAY_RENDER_DEBUG_MODE",
                enabled: e,
                mode: t,
            });
        },
        clearTrackedPids() {
            i.Z.dispatch({ type: "OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS" });
        },
        setInstanceLocked(e) {
            if (!__OVERLAY__)
                return void v.error("Attempting to start an overlay session outside of the overlay context");
            I.setInputLocked(e, (0, h.getPID)());
        },
        setEnabled(e, t) {
            i.Z.dispatch({
                type: "OVERLAY_SET_ENABLED",
                legacyEnabled: e,
                oopEnabled: t,
            });
        },
        selectCall(e) {
            i.Z.dispatch({
                type: "OVERLAY_SELECT_CALL",
                callId: e,
            });
        },
        setDisplayNameMode(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                mode: e,
            });
        },
        setDisplayUserMode(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_DISPLAY_USER_MODE",
                mode: e,
            });
        },
        setAvatarSizeMode(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                mode: e,
            });
        },
        setNotificationPositionMode(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                mode: e,
            });
        },
        setDisableClickableRegions(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS",
                disable: e,
            });
        },
        setShowKeybindIndicators(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
                shouldShow: e,
            });
        },
        setNotificationDisabledSetting(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return (
                e === l.i.GAME_ACTIVITY && n && this.track(g.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: t }),
                i.Z.dispatch({
                    type: "OVERLAY_SET_NOTIFICATION_DISABLED_SETTING",
                    setting: e,
                    disabled: t,
                    shouldTrack: n,
                })
            );
        },
        setNotificationDisabled(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = u.Z.getDisabledSettingByNotificationType(e);
            if (null != r) return this.setNotificationDisabledSetting(r, t, n);
        },
        setInviteMessage(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_INVITE_MESSAGE",
                message: e,
            });
        },
        callPrivateChannel(e, t) {
            i.Z.dispatch({
                type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                channelId: e,
                ring: t,
            });
        },
        setTextWidgetOpacity(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                opacity: e,
            });
        },
        disableExternalLinkAlert() {
            i.Z.dispatch({ type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT" });
        },
        startSession() {
            if (!__OVERLAY__)
                return void v.error("Attempting to start an overlay session outside of the overlay context");
            i.Z.dispatch({ type: "OVERLAY_START_SESSION" });
        },
        activateRegion(e) {
            i.Z.dispatch({
                type: "OVERLAY_ACTIVATE_REGION",
                region: e,
            });
        },
        deactivateAllRegions() {
            i.Z.dispatch({ type: "OVERLAY_DEACTIVATE_ALL_REGIONS" });
        },
        setPreviewInGameMode(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                isPreviewingInGame: e,
            });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g._1z.DISMISSED;
            i.Z.dispatch({
                type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                notificationId: e,
                status: t,
            });
        },
        setModuleLogging(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_MODULE_LOGGING",
                enabled: e,
            });
        },
        setStateDebugging(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_STATE_DEBUGGING",
                enabled: e,
            });
        },
        notificationEvent(e, t) {
            var n, r;
            let a = f.Z.getGame();
            i.Z.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: null != (n = null == a ? void 0 : a.name) ? n : null,
                gameId: null != (r = null == a ? void 0 : a.id) ? r : null,
            });
        },
        setPinChat(e) {
            let t = h.OVERLAY_LAYOUT_ID,
                n = d.Z.getWidgetsForLayout(t),
                i = d.Z.getWidgetConfig(g.Odu.GUILDS),
                a = d.Z.getWidgetConfig(g.Odu.TEXT),
                o = d.Z.getWidgetConfig(g.Odu.GUILDS_TEXT),
                l = d.Z.getWidgetDefaultSettings(g.Odu.GUILDS_TEXT),
                c = d.Z.getWidgetDefaultSettings(g.Odu.GUILDS),
                u = d.Z.getWidgetDefaultSettings(g.Odu.TEXT);
            if (
                ((0, s.JS)(g.Odu.TEXT, { pinned: e }),
                0 === n.length || null == i || null == a || null == o || null == l || null == c || null == u)
            )
                return;
            let f = _.Z.windowSize(),
                E = {
                    width: 0,
                    height: 0,
                },
                y = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
                v = {
                    width: 312,
                    height: 0,
                },
                I = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
                T = {
                    width: 0,
                    height: 0,
                };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: r, size: i } = e;
                    switch (t) {
                        case g.Odu.TEXT:
                            (E = (0, p.w_)(i, f)), (0, m.E9)(n);
                            break;
                        case g.Odu.GUILDS:
                            (y = (0, p.vS)(r, i, f)), (v = (0, p.w_)(i, f)), (0, m.E9)(n);
                            break;
                        case g.Odu.GUILDS_TEXT:
                            (I = (0, p.vS)(r, i, f)), (T = (0, p.w_)(i, f)), (0, m.E9)(n);
                    }
                }),
                e)
            ) {
                let e = "auto" === T.width ? l.minSize.width : T.width;
                e -= c.minSize.width;
                let [n, i] = (0, p.o4)(I, O(b({}, T), { width: c.minSize.width }), f),
                    [a, o] = (0, p.uq)(I, O(b({}, T), { width: e }), f, {
                        x: 10,
                        y: 10,
                    }),
                    s = d.Z.getWidgetDefaultSettings(g.Odu.TEXT);
                if (null == s) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, m.A4)(
                    O(b({}, s), {
                        type: g.Odu.TEXT,
                        id: (0, r.Z)(),
                        size: o,
                        anchor: a,
                        layoutId: t,
                    }),
                );
                let u = d.Z.getWidgetDefaultSettings(g.Odu.GUILDS);
                if (null == u) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, m.A4)(
                    O(b({}, u), {
                        type: g.Odu.GUILDS,
                        id: (0, r.Z)(),
                        size: i,
                        anchor: n,
                        layoutId: t,
                    }),
                );
            } else {
                let e = "auto" === E.width ? u.minSize.width : E.width;
                e += c.minSize.width;
                let [n, i] = (0, p.o4)(
                        y,
                        {
                            height: v.height,
                            width: e,
                        },
                        f,
                    ),
                    a = d.Z.getWidgetDefaultSettings(g.Odu.GUILDS_TEXT);
                if (null == a) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, m.A4)(
                    O(b({}, a), {
                        type: g.Odu.GUILDS_TEXT,
                        id: (0, r.Z)(),
                        layoutId: t,
                        anchor: n,
                        size: i,
                    }),
                );
            }
        },
        resetDefaultLayout(e, t) {
            null != d.Z.getLayout(e) && ((0, m.sz)(e), (0, m.jx)(d.Z.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            i.Z.dispatch({
                type: "OVERLAY_SET_CLICK_ZONES",
                zones: e,
            });
        },
        relayClickZoneClicked(e, t, n) {
            i.Z.dispatch({
                type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n,
            });
        },
        setAssociatedGame(e, t, n) {
            i.Z.dispatch({
                type: "OVERLAY_SET_ASSOCIATED_GAME",
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n,
            });
        },
        forceRenderMode(e) {
            i.Z.dispatch({
                type: "OVERLAY_FORCE_RENDER_MODE",
                mode: e,
            });
        },
        updateOverlayMethod: (e, t) =>
            i.Z.dispatch({
                type: "OVERLAY_UPDATE_OVERLAY_METHOD",
                pid: e,
                overlayMethod: t,
            }),
        updateOverlayState(e, t, n) {
            i.Z.dispatch({
                type: "OVERLAY_UPDATE_OVERLAY_STATE",
                pid: e,
                overlayState: t,
                reason: n,
            });
        },
        successfullyShown(e) {
            i.Z.dispatch({
                type: "OVERLAY_SUCCESSFULLY_SHOWN",
                pid: e,
            });
        },
        setGpuBoostRequested(e, t) {
            i.Z.dispatch({
                type: "OVERLAY_SET_GPU_BOOST_REQUESTED",
                reason: e,
                enabled: t,
            });
        },
        updateTrackedGame: (e, t) =>
            i.Z.dispatch({
                type: "OVERLAY_TRACKED_GAME_UPDATE",
                pid: e,
                trackedGame: t,
            }),
        trackOverlayStateChanged(e, t, n, r) {
            i.Z.dispatch({
                type: "OVERLAY_TRACK_STATE_CHANGED",
                pid: e,
                oldState: t,
                newState: n,
                reason: r,
            });
        },
        overlayUIFocusedPid(e, t) {
            i.Z.dispatch({
                type: "OVERLAY_UI_FOCUSED_PID",
                pid: e,
                windowHandle: t,
            });
        },
    },
    T = I;
