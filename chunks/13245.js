n.d(t, { Z: () => O }), n(47120), n(411104);
var r = n(772848),
    i = n(259443),
    o = n(570140),
    a = n(318885),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
let y = new i.Yd('OverlayActionCreators'),
    v = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, a.Q)(e, t, n);
        },
        overlayReady(e) {
            o.Z.dispatch({
                type: 'OVERLAY_READY',
                pid: e
            });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            o.Z.dispatch({
                type: 'OVERLAY_MOUNTED',
                nudges: t
            });
        },
        setFocusedPID(e) {
            o.Z.dispatch({
                type: 'OVERLAY_FOCUSED',
                pid: e
            });
        },
        setInputLocked(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: e,
                pid: t
            });
        },
        setOverlayCrashed(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_CRASHED',
                pid: e,
                error: t
            });
        },
        setReloadOverlay(e) {
            o.Z.dispatch({
                type: 'OVERLAY_RELOAD',
                pid: e
            });
        },
        setRenderDebugMode(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_RENDER_DEBUG_MODE',
                enabled: e,
                mode: t
            });
        },
        setInstanceLocked(e) {
            if (!__OVERLAY__) return void y.error('Attempting to start an overlay session outside of the overlay context');
            v.setInputLocked(e, (0, _.getPID)());
        },
        setEnabled(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_ENABLED',
                legacyEnabled: e,
                oopEnabled: t
            });
        },
        selectCall(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SELECT_CALL',
                callId: e
            });
        },
        setDisplayNameMode(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_NAME_MODE',
                mode: e
            });
        },
        setDisplayUserMode(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_USER_MODE',
                mode: e
            });
        },
        setAvatarSizeMode(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_AVATAR_SIZE_MODE',
                mode: e
            });
        },
        setNotificationPositionMode(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_NOTIFICATION_POSITION_MODE',
                mode: e
            });
        },
        setDisableClickableRegions(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_DISABLE_CLICKABLE_REGIONS',
                disable: e
            });
        },
        setShowKeybindIndicators(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
                shouldShow: e
            });
        },
        setNotificationDisabledSetting(e, t) {
            e === l.OverlayNotificationDisabledSetting.GAME_ACTIVITY && this.track(h.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: t }),
                o.Z.dispatch({
                    type: 'OVERLAY_SET_NOTIFICATION_DISABLED_SETTING',
                    setting: e,
                    disabled: t
                });
        },
        setInviteMessage(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_INVITE_MESSAGE',
                message: e
            });
        },
        callPrivateChannel(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_CALL_PRIVATE_CHANNEL',
                channelId: e,
                ring: t
            });
        },
        setTextWidgetOpacity(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_TEXT_WIDGET_OPACITY',
                opacity: e
            });
        },
        disableExternalLinkAlert() {
            o.Z.dispatch({ type: 'OVERLAY_DISABLE_EXTERNAL_LINK_ALERT' });
        },
        startSession() {
            if (!__OVERLAY__) return void y.error('Attempting to start an overlay session outside of the overlay context');
            o.Z.dispatch({ type: 'OVERLAY_START_SESSION' });
        },
        activateRegion(e) {
            o.Z.dispatch({
                type: 'OVERLAY_ACTIVATE_REGION',
                region: e
            });
        },
        deactivateAllRegions() {
            o.Z.dispatch({ type: 'OVERLAY_DEACTIVATE_ALL_REGIONS' });
        },
        setPreviewInGameMode(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_PREVIEW_IN_GAME_MODE',
                isPreviewingInGame: e
            });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h._1z.DISMISSED;
            o.Z.dispatch({
                type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
                notificationId: e,
                status: t
            });
        },
        notificationEvent(e, t) {
            var n, r;
            let i = u.Z.getGame();
            o.Z.dispatch({
                type: 'OVERLAY_NOTIFICATION_EVENT',
                notificationType: e,
                action: t,
                gameName: null != (n = null == i ? void 0 : i.name) ? n : null,
                gameId: null != (r = null == i ? void 0 : i.id) ? r : null
            });
        },
        setPinChat(e) {
            let t = _.OVERLAY_LAYOUT_ID,
                n = c.Z.getWidgetsForLayout(t),
                i = c.Z.getWidgetConfig(h.Odu.GUILDS),
                o = c.Z.getWidgetConfig(h.Odu.TEXT),
                a = c.Z.getWidgetConfig(h.Odu.GUILDS_TEXT);
            if (((0, s.JS)(h.Odu.TEXT, { pinned: e }), 0 === n.length || null == i || null == o || null == a)) return;
            let l = d.Z.windowSize(),
                u = {
                    width: 0,
                    height: 0
                },
                m = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                E = {
                    width: 312,
                    height: 0
                },
                y = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                v = {
                    width: 0,
                    height: 0
                };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: r, size: i } = e;
                    switch (t) {
                        case h.Odu.TEXT:
                            (u = (0, f.w_)(i, l)), (0, p.E9)(n);
                            break;
                        case h.Odu.GUILDS:
                            (m = (0, f.vS)(r, i, l)), (E = (0, f.w_)(i, l)), (0, p.E9)(n);
                            break;
                        case h.Odu.GUILDS_TEXT:
                            (y = (0, f.vS)(r, i, l)), (v = (0, f.w_)(i, l)), (0, p.E9)(n);
                    }
                }),
                e)
            ) {
                let e = 'auto' === v.width ? a.minSize.width : v.width;
                e -= i.minSize.width;
                let [n, o] = (0, f.o4)(y, b(g({}, v), { width: i.minSize.width }), l),
                    [s, u] = (0, f.uq)(y, b(g({}, v), { width: e }), l, {
                        x: 10,
                        y: 10
                    }),
                    d = c.Z.getWidgetDefaultSettings(h.Odu.TEXT);
                if (null == d) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
                (0, p.A4)(
                    b(g({}, d), {
                        type: h.Odu.TEXT,
                        id: (0, r.Z)(),
                        size: u,
                        anchor: s,
                        layoutId: t
                    })
                );
                let _ = c.Z.getWidgetDefaultSettings(h.Odu.GUILDS);
                if (null == _) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
                (0, p.A4)(
                    b(g({}, _), {
                        type: h.Odu.GUILDS,
                        id: (0, r.Z)(),
                        size: o,
                        anchor: n,
                        layoutId: t
                    })
                );
            } else {
                let e = 'auto' === u.width ? o.minSize.width : u.width;
                e += i.minSize.width;
                let [n, a] = (0, f.o4)(
                        m,
                        {
                            height: E.height,
                            width: e
                        },
                        l
                    ),
                    s = c.Z.getWidgetDefaultSettings(h.Odu.GUILDS_TEXT);
                if (null == s) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
                (0, p.A4)(
                    b(g({}, s), {
                        type: h.Odu.GUILDS_TEXT,
                        id: (0, r.Z)(),
                        layoutId: t,
                        anchor: n,
                        size: a
                    })
                );
            }
        },
        resetDefaultLayout(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            null != c.Z.getLayout(e) && ((0, p.sz)(e), (0, p.jx)(c.Z.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_CLICK_ZONES',
                zones: e
            });
        },
        relayClickZoneClicked(e, t, n) {
            o.Z.dispatch({
                type: 'OVERLAY_RELAY_CLICK_ZONE_CLICKED',
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n
            });
        },
        setAssociatedGame(e, t, n) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_ASSOCIATED_GAME',
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n
            });
        },
        forceRenderMode(e) {
            o.Z.dispatch({
                type: 'OVERLAY_FORCE_RENDER_MODE',
                mode: e
            });
        },
        updateOverlayMethod: (e, t) =>
            o.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_METHOD',
                pid: e,
                overlayMethod: t
            }),
        updateOverlayState(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_STATE',
                pid: e,
                overlayState: t
            });
        },
        setLimitedInteractionOverride(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE',
                applicationId: e,
                enabled: t
            });
        },
        successfullyShown(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SUCCESSFULLY_SHOWN',
                pid: e
            });
        },
        notifyContentInventoryReady(e) {
            o.Z.dispatch({
                type: 'OVERLAY_CONTENT_INVENTORY_READY',
                contentInventoryEntries: e
            });
        },
        setGpuBoostRequested(e, t) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_GPU_BOOST_REQUESTED',
                reason: e,
                enabled: t
            });
        }
    },
    O = v;
