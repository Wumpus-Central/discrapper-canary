n.d(t, { Z: () => y }), n(47120), n(411104);
var r = n(772848),
    i = n(259443),
    o = n(570140),
    a = n(318885),
    s = n(444295),
    l = n(355863),
    c = n(449224),
    u = n(451478),
    d = n(434529),
    f = n(145597),
    p = n(765250),
    _ = n(981631);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = new i.Yd('OverlayActionCreators'),
    b = {
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
            if (!__OVERLAY__) {
                v.error('Attempting to start an overlay session outside of the overlay context');
                return;
            }
            b.setInputLocked(e, (0, f.QF)());
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
        setTextChatNotificationMode(e) {
            o.Z.dispatch({
                type: 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE',
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
        setShowGameInviteNotification(e) {
            this.track(_.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: !e }),
                o.Z.dispatch({
                    type: 'OVERLAY_SET_GAME_INVITE_NOTIFICATION',
                    shouldShow: e
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
            if (!__OVERLAY__) {
                v.error('Attempting to start an overlay session outside of the overlay context');
                return;
            }
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
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _._1z.DISMISSED;
            o.Z.dispatch({
                type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
                notificationId: e,
                status: t
            });
        },
        notificationEvent(e, t) {
            var n, r;
            let i = c.Z.getGame();
            o.Z.dispatch({
                type: 'OVERLAY_NOTIFICATION_EVENT',
                notificationType: e,
                action: t,
                gameName: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null,
                gameId: null !== (r = null == i ? void 0 : i.id) && void 0 !== r ? r : null
            });
        },
        setPinChat(e) {
            let t = f.qU,
                n = l.Z.getWidgetsForLayout(t),
                i = l.Z.getWidgetConfig(_.Odu.GUILDS),
                o = l.Z.getWidgetConfig(_.Odu.TEXT),
                a = l.Z.getWidgetConfig(_.Odu.GUILDS_TEXT);
            if (((0, s.JS)(_.Odu.TEXT, { pinned: e }), 0 === n.length || null == i || null == o || null == a)) return;
            let c = u.Z.windowSize(),
                h = {
                    width: 0,
                    height: 0
                },
                g = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                v = {
                    width: 312,
                    height: 0
                },
                b = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                y = {
                    width: 0,
                    height: 0
                };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: r, size: i } = e;
                    switch (t) {
                        case _.Odu.TEXT:
                            (h = (0, d.w_)(i, c)), (0, p.E9)(n);
                            break;
                        case _.Odu.GUILDS:
                            (g = (0, d.vS)(r, i, c)), (v = (0, d.w_)(i, c)), (0, p.E9)(n);
                            break;
                        case _.Odu.GUILDS_TEXT:
                            (b = (0, d.vS)(r, i, c)), (y = (0, d.w_)(i, c)), (0, p.E9)(n);
                    }
                }),
                e)
            ) {
                let e = 'auto' === y.width ? a.minSize.width : y.width;
                e -= i.minSize.width;
                let [n, o] = (0, d.o4)(b, E(m({}, y), { width: i.minSize.width }), c),
                    [s, u] = (0, d.uq)(b, E(m({}, y), { width: e }), c, {
                        x: 10,
                        y: 10
                    }),
                    f = l.Z.getWidgetDefaultSettings(_.Odu.TEXT);
                if (null == f) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
                (0, p.A4)(
                    E(m({}, f), {
                        type: _.Odu.TEXT,
                        id: (0, r.Z)(),
                        size: u,
                        anchor: s,
                        layoutId: t
                    })
                );
                let h = l.Z.getWidgetDefaultSettings(_.Odu.GUILDS);
                if (null == h) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
                (0, p.A4)(
                    E(m({}, h), {
                        type: _.Odu.GUILDS,
                        id: (0, r.Z)(),
                        size: o,
                        anchor: n,
                        layoutId: t
                    })
                );
            } else {
                let e = 'auto' === h.width ? o.minSize.width : h.width;
                e += i.minSize.width;
                let [n, a] = (0, d.o4)(
                        g,
                        {
                            height: v.height,
                            width: e
                        },
                        c
                    ),
                    s = l.Z.getWidgetDefaultSettings(_.Odu.GUILDS_TEXT);
                if (null == s) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
                (0, p.A4)(
                    E(m({}, s), {
                        type: _.Odu.GUILDS_TEXT,
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
            null != l.Z.getLayout(e) && ((0, p.sz)(e), (0, p.jx)(l.Z.getDefaultLayout(e, t)));
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
    y = b;
