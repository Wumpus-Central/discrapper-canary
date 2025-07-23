(n.d(t, { Z: () => I }), n(388685), n(415506));
var r = n(772848),
    i = n(570140),
    a = n(615287),
    o = n(318885),
    s = n(710845),
    l = n(444295),
    c = n(486016),
    u = n(355863),
    d = n(449224),
    _ = n(451478),
    f = n(434529),
    p = n(145597),
    h = n(765250),
    m = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new s.Z('OverlayActionCreators'),
    v = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, o.Q)(e, t, n);
        },
        overlayReady(e) {
            i.Z.dispatch({
                type: 'OVERLAY_READY',
                pid: e
            });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            i.Z.dispatch({
                type: 'OVERLAY_MOUNTED',
                nudges: t
            });
        },
        setFocusedPID(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t ? a.d5.UNTRACK_FOCUS : a.d5.TRACK_FOCUS;
            i.Z.dispatch({
                type: 'OVERLAY_FOCUSED',
                pid: e,
                trackMode: n
            });
        },
        setInputLocked(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: e,
                pid: t
            });
        },
        setOverlayCrashed(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_CRASHED',
                pid: e,
                error: t
            });
        },
        setReloadOverlay(e) {
            i.Z.dispatch({
                type: 'OVERLAY_RELOAD',
                pid: e
            });
        },
        setRenderDebugMode(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_RENDER_DEBUG_MODE',
                enabled: e,
                mode: t
            });
        },
        clearTrackedPids() {
            i.Z.dispatch({ type: 'OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS' });
        },
        setInstanceLocked(e) {
            if (!__OVERLAY__) return void O.error('Attempting to start an overlay session outside of the overlay context');
            v.setInputLocked(e, (0, p.getPID)());
        },
        setEnabled(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_ENABLED',
                legacyEnabled: e,
                oopEnabled: t
            });
        },
        selectCall(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SELECT_CALL',
                callId: e
            });
        },
        setDisplayNameMode(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_NAME_MODE',
                mode: e
            });
        },
        setDisplayUserMode(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_USER_MODE',
                mode: e
            });
        },
        setAvatarSizeMode(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_AVATAR_SIZE_MODE',
                mode: e
            });
        },
        setNotificationPositionMode(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_NOTIFICATION_POSITION_MODE',
                mode: e
            });
        },
        setDisableClickableRegions(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_DISABLE_CLICKABLE_REGIONS',
                disable: e
            });
        },
        setShowKeybindIndicators(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
                shouldShow: e
            });
        },
        setNotificationDisabledSetting(e, t) {
            (e === c.OverlayNotificationDisabledSetting.GAME_ACTIVITY && this.track(m.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: t }),
                i.Z.dispatch({
                    type: 'OVERLAY_SET_NOTIFICATION_DISABLED_SETTING',
                    setting: e,
                    disabled: t
                }));
        },
        setInviteMessage(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_INVITE_MESSAGE',
                message: e
            });
        },
        callPrivateChannel(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_CALL_PRIVATE_CHANNEL',
                channelId: e,
                ring: t
            });
        },
        setTextWidgetOpacity(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_TEXT_WIDGET_OPACITY',
                opacity: e
            });
        },
        disableExternalLinkAlert() {
            i.Z.dispatch({ type: 'OVERLAY_DISABLE_EXTERNAL_LINK_ALERT' });
        },
        startSession() {
            if (!__OVERLAY__) return void O.error('Attempting to start an overlay session outside of the overlay context');
            i.Z.dispatch({ type: 'OVERLAY_START_SESSION' });
        },
        activateRegion(e) {
            i.Z.dispatch({
                type: 'OVERLAY_ACTIVATE_REGION',
                region: e
            });
        },
        deactivateAllRegions() {
            i.Z.dispatch({ type: 'OVERLAY_DEACTIVATE_ALL_REGIONS' });
        },
        setPreviewInGameMode(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_PREVIEW_IN_GAME_MODE',
                isPreviewingInGame: e
            });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m._1z.DISMISSED;
            i.Z.dispatch({
                type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
                notificationId: e,
                status: t
            });
        },
        notificationEvent(e, t) {
            var n, r;
            let a = d.Z.getGame();
            i.Z.dispatch({
                type: 'OVERLAY_NOTIFICATION_EVENT',
                notificationType: e,
                action: t,
                gameName: null != (n = null == a ? void 0 : a.name) ? n : null,
                gameId: null != (r = null == a ? void 0 : a.id) ? r : null
            });
        },
        setPinChat(e) {
            let t = p.OVERLAY_LAYOUT_ID,
                n = u.Z.getWidgetsForLayout(t),
                i = u.Z.getWidgetConfig(m.Odu.GUILDS),
                a = u.Z.getWidgetConfig(m.Odu.TEXT),
                o = u.Z.getWidgetConfig(m.Odu.GUILDS_TEXT),
                s = u.Z.getWidgetDefaultSettings(m.Odu.GUILDS_TEXT),
                c = u.Z.getWidgetDefaultSettings(m.Odu.GUILDS),
                d = u.Z.getWidgetDefaultSettings(m.Odu.TEXT);
            if (((0, l.JS)(m.Odu.TEXT, { pinned: e }), 0 === n.length || null == i || null == a || null == o || null == s || null == c || null == d)) return;
            let g = _.Z.windowSize(),
                b = {
                    width: 0,
                    height: 0
                },
                O = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                v = {
                    width: 312,
                    height: 0
                },
                I = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                T = {
                    width: 0,
                    height: 0
                };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: r, size: i } = e;
                    switch (t) {
                        case m.Odu.TEXT:
                            ((b = (0, f.w_)(i, g)), (0, h.E9)(n));
                            break;
                        case m.Odu.GUILDS:
                            ((O = (0, f.vS)(r, i, g)), (v = (0, f.w_)(i, g)), (0, h.E9)(n));
                            break;
                        case m.Odu.GUILDS_TEXT:
                            ((I = (0, f.vS)(r, i, g)), (T = (0, f.w_)(i, g)), (0, h.E9)(n));
                    }
                }),
                e)
            ) {
                let e = 'auto' === T.width ? s.minSize.width : T.width;
                e -= c.minSize.width;
                let [n, i] = (0, f.o4)(I, y(E({}, T), { width: c.minSize.width }), g),
                    [a, o] = (0, f.uq)(I, y(E({}, T), { width: e }), g, {
                        x: 10,
                        y: 10
                    }),
                    l = u.Z.getWidgetDefaultSettings(m.Odu.TEXT);
                if (null == l) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
                (0, h.A4)(
                    y(E({}, l), {
                        type: m.Odu.TEXT,
                        id: (0, r.Z)(),
                        size: o,
                        anchor: a,
                        layoutId: t
                    })
                );
                let d = u.Z.getWidgetDefaultSettings(m.Odu.GUILDS);
                if (null == d) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
                (0, h.A4)(
                    y(E({}, d), {
                        type: m.Odu.GUILDS,
                        id: (0, r.Z)(),
                        size: i,
                        anchor: n,
                        layoutId: t
                    })
                );
            } else {
                let e = 'auto' === b.width ? d.minSize.width : b.width;
                e += c.minSize.width;
                let [n, i] = (0, f.o4)(
                        O,
                        {
                            height: v.height,
                            width: e
                        },
                        g
                    ),
                    a = u.Z.getWidgetDefaultSettings(m.Odu.GUILDS_TEXT);
                if (null == a) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
                (0, h.A4)(
                    y(E({}, a), {
                        type: m.Odu.GUILDS_TEXT,
                        id: (0, r.Z)(),
                        layoutId: t,
                        anchor: n,
                        size: i
                    })
                );
            }
        },
        resetDefaultLayout(e, t) {
            null != u.Z.getLayout(e) && ((0, h.sz)(e), (0, h.jx)(u.Z.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_CLICK_ZONES',
                zones: e
            });
        },
        relayClickZoneClicked(e, t, n) {
            i.Z.dispatch({
                type: 'OVERLAY_RELAY_CLICK_ZONE_CLICKED',
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n
            });
        },
        setAssociatedGame(e, t, n) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_ASSOCIATED_GAME',
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n
            });
        },
        forceRenderMode(e) {
            i.Z.dispatch({
                type: 'OVERLAY_FORCE_RENDER_MODE',
                mode: e
            });
        },
        updateOverlayMethod: (e, t) =>
            i.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_METHOD',
                pid: e,
                overlayMethod: t
            }),
        updateOverlayState(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_STATE',
                pid: e,
                overlayState: t
            });
        },
        setLimitedInteractionOverride(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE',
                applicationId: e,
                enabled: t
            });
        },
        successfullyShown(e) {
            i.Z.dispatch({
                type: 'OVERLAY_SUCCESSFULLY_SHOWN',
                pid: e
            });
        },
        setGpuBoostRequested(e, t) {
            i.Z.dispatch({
                type: 'OVERLAY_SET_GPU_BOOST_REQUESTED',
                reason: e,
                enabled: t
            });
        }
    },
    I = v;
