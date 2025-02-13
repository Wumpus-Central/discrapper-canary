n.d(t, { Z: () => E }), n(47120), n(411104);
var i = n(772848),
    r = n(259443),
    a = n(570140),
    s = n(318885),
    o = n(444295),
    l = n(355863),
    u = n(449224),
    c = n(451478),
    d = n(434529),
    f = n(145597),
    _ = n(239091),
    p = n(765250),
    h = n(981631);
let m = new r.Yd('OverlayActionCreators'),
    g = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, s.Q)(e, t, n);
        },
        overlayReady(e) {
            a.Z.dispatch({
                type: 'OVERLAY_READY',
                pid: e
            });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.Z.dispatch({
                type: 'OVERLAY_MOUNTED',
                nudges: t
            });
        },
        setFocusedPID(e) {
            a.Z.dispatch({
                type: 'OVERLAY_FOCUSED',
                pid: e
            });
        },
        setInputLocked(e, t) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: e,
                pid: t
            }),
                (0, _.Zy)();
        },
        setOverlayCrashed(e, t) {
            a.Z.dispatch({
                type: 'OVERLAY_CRASHED',
                pid: e,
                error: t
            });
        },
        setReloadOverlay(e) {
            a.Z.dispatch({
                type: 'OVERLAY_RELOAD',
                pid: e
            });
        },
        setRenderDebugMode(e, t) {
            a.Z.dispatch({
                type: 'OVERLAY_RENDER_DEBUG_MODE',
                enabled: e,
                mode: t
            });
        },
        setInstanceLocked(e) {
            if (!__OVERLAY__) {
                m.error('Attempting to start an overlay session outside of the overlay context');
                return;
            }
            g.setInputLocked(e, (0, f.QF)());
        },
        setEnabled(e, t) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_ENABLED',
                legacyEnabled: e,
                oopEnabled: t
            });
        },
        selectCall(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SELECT_CALL',
                callId: e
            });
        },
        setDisplayNameMode(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_NAME_MODE',
                mode: e
            });
        },
        setDisplayUserMode(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_USER_MODE',
                mode: e
            });
        },
        setAvatarSizeMode(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_AVATAR_SIZE_MODE',
                mode: e
            });
        },
        setNotificationPositionMode(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_NOTIFICATION_POSITION_MODE',
                mode: e
            });
        },
        setTextChatNotificationMode(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE',
                mode: e
            });
        },
        setDisableClickableRegions(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_DISABLE_CLICKABLE_REGIONS',
                disable: e
            });
        },
        setShowKeybindIndicators(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
                shouldShow: e
            });
        },
        setShowGameInviteNotification(e) {
            this.track(h.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: !e }),
                a.Z.dispatch({
                    type: 'OVERLAY_SET_GAME_INVITE_NOTIFICATION',
                    shouldShow: e
                });
        },
        setInviteMessage(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_INVITE_MESSAGE',
                message: e
            });
        },
        callPrivateChannel(e, t) {
            a.Z.dispatch({
                type: 'OVERLAY_CALL_PRIVATE_CHANNEL',
                channelId: e,
                ring: t
            });
        },
        setTextWidgetOpacity(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_TEXT_WIDGET_OPACITY',
                opacity: e
            });
        },
        disableExternalLinkAlert() {
            a.Z.dispatch({ type: 'OVERLAY_DISABLE_EXTERNAL_LINK_ALERT' });
        },
        startSession() {
            if (!__OVERLAY__) {
                m.error('Attempting to start an overlay session outside of the overlay context');
                return;
            }
            a.Z.dispatch({ type: 'OVERLAY_START_SESSION' });
        },
        activateRegion(e) {
            a.Z.dispatch({
                type: 'OVERLAY_ACTIVATE_REGION',
                region: e
            });
        },
        deactivateAllRegions() {
            a.Z.dispatch({ type: 'OVERLAY_DEACTIVATE_ALL_REGIONS' });
        },
        setPreviewInGameMode(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_PREVIEW_IN_GAME_MODE',
                isPreviewingInGame: e
            });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h._1z.DISMISSED;
            a.Z.dispatch({
                type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
                notificationId: e,
                status: t
            });
        },
        notificationEvent(e, t) {
            var n, i;
            let r = u.Z.getGame();
            a.Z.dispatch({
                type: 'OVERLAY_NOTIFICATION_EVENT',
                notificationType: e,
                action: t,
                gameName: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : null,
                gameId: null !== (i = null == r ? void 0 : r.id) && void 0 !== i ? i : null
            });
        },
        setPinChat(e) {
            let t = f.qU,
                n = l.Z.getWidgetsForLayout(t),
                r = l.Z.getWidgetConfig(h.Odu.GUILDS),
                a = l.Z.getWidgetConfig(h.Odu.TEXT),
                s = l.Z.getWidgetConfig(h.Odu.GUILDS_TEXT);
            if (((0, o.JS)(h.Odu.TEXT, { pinned: e }), 0 === n.length || null == r || null == a || null == s)) return;
            let u = c.Z.windowSize(),
                _ = {
                    width: 0,
                    height: 0
                },
                m = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                g = {
                    width: 312,
                    height: 0
                },
                E = {
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
                    let { type: t, id: n, anchor: i, size: r } = e;
                    switch (t) {
                        case h.Odu.TEXT:
                            (_ = (0, d.w_)(r, u)), (0, p.E9)(n);
                            break;
                        case h.Odu.GUILDS:
                            (m = (0, d.vS)(i, r, u)), (g = (0, d.w_)(r, u)), (0, p.E9)(n);
                            break;
                        case h.Odu.GUILDS_TEXT:
                            (E = (0, d.vS)(i, r, u)), (v = (0, d.w_)(r, u)), (0, p.E9)(n);
                    }
                }),
                e)
            ) {
                let e = 'auto' === v.width ? s.minSize.width : v.width;
                e -= r.minSize.width;
                let [n, a] = (0, d.o4)(
                        E,
                        {
                            ...v,
                            width: r.minSize.width
                        },
                        u
                    ),
                    [o, c] = (0, d.uq)(
                        E,
                        {
                            ...v,
                            width: e
                        },
                        u,
                        {
                            x: 10,
                            y: 10
                        }
                    ),
                    f = l.Z.getWidgetDefaultSettings(h.Odu.TEXT);
                if (null == f) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
                (0, p.A4)({
                    ...f,
                    type: h.Odu.TEXT,
                    id: (0, i.Z)(),
                    size: c,
                    anchor: o,
                    layoutId: t
                });
                let _ = l.Z.getWidgetDefaultSettings(h.Odu.GUILDS);
                if (null == _) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
                (0, p.A4)({
                    ..._,
                    type: h.Odu.GUILDS,
                    id: (0, i.Z)(),
                    size: a,
                    anchor: n,
                    layoutId: t
                });
            } else {
                let e = 'auto' === _.width ? a.minSize.width : _.width;
                e += r.minSize.width;
                let [n, s] = (0, d.o4)(
                        m,
                        {
                            height: g.height,
                            width: e
                        },
                        u
                    ),
                    o = l.Z.getWidgetDefaultSettings(h.Odu.GUILDS_TEXT);
                if (null == o) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
                (0, p.A4)({
                    ...o,
                    type: h.Odu.GUILDS_TEXT,
                    id: (0, i.Z)(),
                    layoutId: t,
                    anchor: n,
                    size: s
                });
            }
        },
        resetDefaultLayout(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            null != l.Z.getLayout(e) && ((0, p.sz)(e), (0, p.jx)(l.Z.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_CLICK_ZONES',
                zones: e
            });
        },
        relayClickZoneClicked(e, t, n) {
            a.Z.dispatch({
                type: 'OVERLAY_RELAY_CLICK_ZONE_CLICKED',
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n
            });
        },
        setAssociatedGame(e, t, n) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_ASSOCIATED_GAME',
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n
            });
        },
        forceRenderMode(e) {
            a.Z.dispatch({
                type: 'OVERLAY_FORCE_RENDER_MODE',
                mode: e
            });
        },
        updateOverlayMethod: (e, t) =>
            a.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_METHOD',
                pid: e,
                overlayMethod: t
            }),
        updateOverlayState(e, t) {
            a.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_STATE',
                pid: e,
                overlayState: t
            });
        },
        successfullyShown(e) {
            a.Z.dispatch({
                type: 'OVERLAY_SUCCESSFULLY_SHOWN',
                pid: e
            });
        },
        notifyContentInventoryReady(e) {
            a.Z.dispatch({
                type: 'OVERLAY_CONTENT_INVENTORY_READY',
                contentInventoryEntries: e
            });
        },
        setGpuBoostRequested(e, t) {
            a.Z.dispatch({
                type: 'OVERLAY_SET_GPU_BOOST_REQUESTED',
                reason: e,
                enabled: t
            });
        }
    },
    E = g;
