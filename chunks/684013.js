n.d(t, { A: () => S }), n(896048), n(65821);
var r = n(835245),
    i = n(73153),
    a = n(815706),
    s = n(626584),
    o = n(810412),
    l = n(93465),
    c = n(41984),
    u = n(592598),
    d = n(555528),
    f = n(157257),
    p = n(531685),
    _ = n(5463),
    h = n(9302),
    m = n(391973),
    g = n(652215);
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
let A = new s.A("OverlayActionCreators"),
    v = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, a.z)(e, t, n);
        },
        overlayReady(e) {
            i.h.dispatch({
                type: "OVERLAY_READY",
                pid: e,
            });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            i.h.dispatch({
                type: "OVERLAY_MOUNTED",
                nudges: t,
            });
        },
        setFocusedPID(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = n ? c.su.UNTRACK_FOCUS : c.su.TRACK_FOCUS;
            i.h.dispatch({
                type: "OVERLAY_FOCUSED",
                pid: e,
                windowHandle: t,
                trackMode: r,
            });
        },
        setInputLocked(e, t) {
            i.h.dispatch({
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: e,
                pid: t,
            });
        },
        setOverlayCrashed(e, t) {
            i.h.dispatch({
                type: "OVERLAY_CRASHED",
                pid: e,
                error: t,
            });
        },
        setReloadOverlay(e) {
            i.h.dispatch({
                type: "OVERLAY_RELOAD",
                pid: e,
            });
        },
        setRenderDebugMode(e, t) {
            i.h.dispatch({
                type: "OVERLAY_RENDER_DEBUG_MODE",
                enabled: e,
                mode: t,
            });
        },
        clearTrackedPids() {
            i.h.dispatch({ type: "OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS" });
        },
        setInstanceLocked(e) {
            __OVERLAY__
                ? v.setInputLocked(e, (0, h.getPID)())
                : A.error("Attempting to start an overlay session outside of the overlay context");
        },
        setEnabled(e, t) {
            i.h.dispatch({
                type: "OVERLAY_SET_ENABLED",
                legacyEnabled: e,
                oopEnabled: t,
            });
        },
        selectCall(e) {
            i.h.dispatch({
                type: "OVERLAY_SELECT_CALL",
                callId: e,
            });
        },
        setDisplayNameMode(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                mode: e,
            });
        },
        setDisplayUserMode(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_DISPLAY_USER_MODE",
                mode: e,
            });
        },
        setAvatarSizeMode(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                mode: e,
            });
        },
        setNotificationPositionMode(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                mode: e,
            });
        },
        setDisableClickableRegions(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS",
                disable: e,
            });
        },
        setShowKeybindIndicators(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
                shouldShow: e,
            });
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
                r = u.A.getDisabledSettingByNotificationType(e);
            if (null != r) return this.setNotificationDisabledSetting(r, t, n);
        },
        setInviteMessage(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_INVITE_MESSAGE",
                message: e,
            });
        },
        callPrivateChannel(e, t) {
            i.h.dispatch({
                type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                channelId: e,
                ring: t,
            });
        },
        setTextWidgetOpacity(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                opacity: e,
            });
        },
        disableExternalLinkAlert() {
            i.h.dispatch({ type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT" });
        },
        startSession() {
            __OVERLAY__
                ? i.h.dispatch({ type: "OVERLAY_START_SESSION" })
                : A.error("Attempting to start an overlay session outside of the overlay context");
        },
        activateRegion(e) {
            i.h.dispatch({
                type: "OVERLAY_ACTIVATE_REGION",
                region: e,
            });
        },
        deactivateAllRegions() {
            i.h.dispatch({ type: "OVERLAY_DEACTIVATE_ALL_REGIONS" });
        },
        setPreviewInGameMode(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                isPreviewingInGame: e,
            });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.yFH.DISMISSED;
            i.h.dispatch({
                type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                notificationId: e,
                status: t,
            });
        },
        setModuleLogging(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_MODULE_LOGGING",
                enabled: e,
            });
        },
        setStateDebugging(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_STATE_DEBUGGING",
                enabled: e,
            });
        },
        notificationEvent(e, t) {
            var n, r;
            let a = f.A.getGame();
            i.h.dispatch({
                type: "OVERLAY_NOTIFICATION_EVENT",
                notificationType: e,
                action: t,
                gameName: null != (n = null == a ? void 0 : a.name) ? n : null,
                gameId: null != (r = null == a ? void 0 : a.id) ? r : null,
            });
        },
        setPinChat(e) {
            let t = h.OVERLAY_LAYOUT_ID,
                n = d.A.getWidgetsForLayout(t),
                i = d.A.getWidgetConfig(g.uss.GUILDS),
                a = d.A.getWidgetConfig(g.uss.TEXT),
                s = d.A.getWidgetConfig(g.uss.GUILDS_TEXT),
                l = d.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT),
                c = d.A.getWidgetDefaultSettings(g.uss.GUILDS),
                u = d.A.getWidgetDefaultSettings(g.uss.TEXT);
            if (
                ((0, o.xp)(g.uss.TEXT, { pinned: e }),
                0 === n.length || null == i || null == a || null == s || null == l || null == c || null == u)
            )
                return;
            let f = p.A.windowSize(),
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
                A = {
                    width: 312,
                    height: 0,
                },
                v = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
                S = {
                    width: 0,
                    height: 0,
                };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: r, size: i } = e;
                    switch (t) {
                        case g.uss.TEXT:
                            (E = (0, _.fd)(i, f)), (0, m.uv)(n);
                            break;
                        case g.uss.GUILDS:
                            (y = (0, _.NR)(r, i, f)), (A = (0, _.fd)(i, f)), (0, m.uv)(n);
                            break;
                        case g.uss.GUILDS_TEXT:
                            (v = (0, _.NR)(r, i, f)), (S = (0, _.fd)(i, f)), (0, m.uv)(n);
                    }
                }),
                e)
            ) {
                let e = "auto" === S.width ? l.minSize.width : S.width;
                e -= c.minSize.width;
                let [n, i] = (0, _.M4)(v, O(b({}, S), { width: c.minSize.width }), f),
                    [a, s] = (0, _.n7)(v, O(b({}, S), { width: e }), f, {
                        x: 10,
                        y: 10,
                    }),
                    o = d.A.getWidgetDefaultSettings(g.uss.TEXT);
                if (null == o) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                (0, m.jn)(
                    O(b({}, o), {
                        type: g.uss.TEXT,
                        id: (0, r.A)(),
                        size: s,
                        anchor: a,
                        layoutId: t,
                    }),
                );
                let u = d.A.getWidgetDefaultSettings(g.uss.GUILDS);
                if (null == u) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                (0, m.jn)(
                    O(b({}, u), {
                        type: g.uss.GUILDS,
                        id: (0, r.A)(),
                        size: i,
                        anchor: n,
                        layoutId: t,
                    }),
                );
            } else {
                let e = "auto" === E.width ? u.minSize.width : E.width;
                e += c.minSize.width;
                let [n, i] = (0, _.M4)(
                        y,
                        {
                            height: A.height,
                            width: e,
                        },
                        f,
                    ),
                    a = d.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT);
                if (null == a) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                (0, m.jn)(
                    O(b({}, a), {
                        type: g.uss.GUILDS_TEXT,
                        id: (0, r.A)(),
                        layoutId: t,
                        anchor: n,
                        size: i,
                    }),
                );
            }
        },
        resetDefaultLayout(e, t) {
            null != d.A.getLayout(e) && ((0, m.IC)(e), (0, m.uF)(d.A.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            i.h.dispatch({
                type: "OVERLAY_SET_CLICK_ZONES",
                zones: e,
            });
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
            i.h.dispatch({
                type: "OVERLAY_FORCE_RENDER_MODE",
                mode: e,
            });
        },
        updateOverlayMethod: (e, t) =>
            i.h.dispatch({
                type: "OVERLAY_UPDATE_OVERLAY_METHOD",
                pid: e,
                overlayMethod: t,
            }),
        updateOverlayState(e, t, n) {
            i.h.dispatch({
                type: "OVERLAY_UPDATE_OVERLAY_STATE",
                pid: e,
                overlayState: t,
                reason: n,
            });
        },
        successfullyShown(e) {
            i.h.dispatch({
                type: "OVERLAY_SUCCESSFULLY_SHOWN",
                pid: e,
            });
        },
        setGpuBoostRequested(e, t) {
            i.h.dispatch({
                type: "OVERLAY_SET_GPU_BOOST_REQUESTED",
                reason: e,
                enabled: t,
            });
        },
        updateTrackedGame: (e, t) =>
            i.h.dispatch({
                type: "OVERLAY_TRACKED_GAME_UPDATE",
                pid: e,
                trackedGame: t,
            }),
        trackOverlayStateChanged(e, t, n, r) {
            i.h.dispatch({
                type: "OVERLAY_TRACK_STATE_CHANGED",
                pid: e,
                oldState: t,
                newState: n,
                reason: r,
            });
        },
        overlayUIFocusedPid(e, t) {
            i.h.dispatch({
                type: "OVERLAY_UI_FOCUSED_PID",
                pid: e,
                windowHandle: t,
            });
        },
    },
    S = v;
