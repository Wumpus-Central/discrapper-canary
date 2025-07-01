(n.d(t, { Z: () => v }), n(388685), n(415506));
var r = n(772848),
    i = n(570140),
    a = n(318885),
    o = n(710845),
    s = n(444295),
    l = n(486016),
    c = n(355863),
    u = n(449224),
    d = n(451478),
    f = n(434529),
    _ = n(145597),
    p = n(765250),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = new o.Z('OverlayActionCreators'),
    O = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, a.Q)(e, t, n);
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
            i.Z.dispatch({
                type: 'OVERLAY_FOCUSED',
                pid: e
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
            if (!__OVERLAY__) return void y.error('Attempting to start an overlay session outside of the overlay context');
            O.setInputLocked(e, (0, _.getPID)());
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
            (e === l.OverlayNotificationDisabledSetting.GAME_ACTIVITY && this.track(h.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: t }),
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
            if (!__OVERLAY__) return void y.error('Attempting to start an overlay session outside of the overlay context');
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
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h._1z.DISMISSED;
            i.Z.dispatch({
                type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
                notificationId: e,
                status: t
            });
        },
        notificationEvent(e, t) {
            var n, r;
            let a = u.Z.getGame();
            i.Z.dispatch({
                type: 'OVERLAY_NOTIFICATION_EVENT',
                notificationType: e,
                action: t,
                gameName: null != (n = null == a ? void 0 : a.name) ? n : null,
                gameId: null != (r = null == a ? void 0 : a.id) ? r : null
            });
        },
        setPinChat(e) {
            let t = _.OVERLAY_LAYOUT_ID,
                n = c.Z.getWidgetsForLayout(t),
                i = c.Z.getWidgetConfig(h.Odu.GUILDS),
                a = c.Z.getWidgetConfig(h.Odu.TEXT),
                o = c.Z.getWidgetConfig(h.Odu.GUILDS_TEXT),
                l = c.Z.getWidgetDefaultSettings(h.Odu.GUILDS_TEXT),
                u = c.Z.getWidgetDefaultSettings(h.Odu.GUILDS),
                m = c.Z.getWidgetDefaultSettings(h.Odu.TEXT);
            if (((0, s.JS)(h.Odu.TEXT, { pinned: e }), 0 === n.length || null == i || null == a || null == o || null == l || null == u || null == m)) return;
            let E = d.Z.windowSize(),
                y = {
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
                        case h.Odu.TEXT:
                            ((y = (0, f.w_)(i, E)), (0, p.E9)(n));
                            break;
                        case h.Odu.GUILDS:
                            ((O = (0, f.vS)(r, i, E)), (v = (0, f.w_)(i, E)), (0, p.E9)(n));
                            break;
                        case h.Odu.GUILDS_TEXT:
                            ((I = (0, f.vS)(r, i, E)), (T = (0, f.w_)(i, E)), (0, p.E9)(n));
                    }
                }),
                e)
            ) {
                let e = 'auto' === T.width ? l.minSize.width : T.width;
                e -= u.minSize.width;
                let [n, i] = (0, f.o4)(I, b(g({}, T), { width: u.minSize.width }), E),
                    [a, o] = (0, f.uq)(I, b(g({}, T), { width: e }), E, {
                        x: 10,
                        y: 10
                    }),
                    s = c.Z.getWidgetDefaultSettings(h.Odu.TEXT);
                if (null == s) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
                (0, p.A4)(
                    b(g({}, s), {
                        type: h.Odu.TEXT,
                        id: (0, r.Z)(),
                        size: o,
                        anchor: a,
                        layoutId: t
                    })
                );
                let d = c.Z.getWidgetDefaultSettings(h.Odu.GUILDS);
                if (null == d) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
                (0, p.A4)(
                    b(g({}, d), {
                        type: h.Odu.GUILDS,
                        id: (0, r.Z)(),
                        size: i,
                        anchor: n,
                        layoutId: t
                    })
                );
            } else {
                let e = 'auto' === y.width ? m.minSize.width : y.width;
                e += u.minSize.width;
                let [n, i] = (0, f.o4)(
                        O,
                        {
                            height: v.height,
                            width: e
                        },
                        E
                    ),
                    a = c.Z.getWidgetDefaultSettings(h.Odu.GUILDS_TEXT);
                if (null == a) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
                (0, p.A4)(
                    b(g({}, a), {
                        type: h.Odu.GUILDS_TEXT,
                        id: (0, r.Z)(),
                        layoutId: t,
                        anchor: n,
                        size: i
                    })
                );
            }
        },
        resetDefaultLayout(e, t) {
            null != c.Z.getLayout(e) && ((0, p.sz)(e), (0, p.jx)(c.Z.getDefaultLayout(e, t)));
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
    v = O;
