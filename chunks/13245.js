n.d(t, { Z: () => p }), n(411104), n(47120);
var i = n(772848),
    r = n(570140),
    a = n(318885),
    s = n(355863),
    o = n(449224),
    l = n(451478),
    u = n(434529),
    c = n(145597),
    d = n(765250),
    f = n(981631);
let _ = {
        track(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, a.Q)(e, t, n);
        },
        overlayReady(e) {
            r.Z.dispatch({
                type: 'OVERLAY_READY',
                pid: e
            });
        },
        overlayMounted() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            r.Z.dispatch({
                type: 'OVERLAY_MOUNTED',
                nudges: t
            });
        },
        setFocusedPID(e) {
            r.Z.dispatch({
                type: 'OVERLAY_FOCUSED',
                pid: e
            });
        },
        setInputLocked(e, t) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: e,
                pid: t
            });
        },
        setOverlayCrashed(e, t) {
            r.Z.dispatch({
                type: 'OVERLAY_CRASHED',
                pid: e,
                error: t
            });
        },
        setReloadOverlay(e) {
            r.Z.dispatch({
                type: 'OVERLAY_RELOAD',
                pid: e
            });
        },
        setRenderDebugMode(e, t) {
            r.Z.dispatch({
                type: 'OVERLAY_RENDER_DEBUG_MODE',
                enabled: e,
                mode: t
            });
        },
        setInstanceLocked(e) {
            if (!__OVERLAY__) throw Error('OverlayActionCreators.setInstanceLocked: Must be called within Overlay context');
            _.setInputLocked(e, (0, c.QF)());
        },
        setEnabled(e, t, n) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_ENABLED',
                enabled: e,
                legacyEnabled: t,
                global: n
            });
        },
        selectCall(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SELECT_CALL',
                callId: e
            });
        },
        setDisplayNameMode(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_NAME_MODE',
                mode: e
            });
        },
        setDisplayUserMode(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_DISPLAY_USER_MODE',
                mode: e
            });
        },
        setAvatarSizeMode(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_AVATAR_SIZE_MODE',
                mode: e
            });
        },
        setNotificationPositionMode(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_NOTIFICATION_POSITION_MODE',
                mode: e
            });
        },
        setTextChatNotificationMode(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE',
                mode: e
            });
        },
        setShowKeybindIndicators(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
                shouldShow: e
            });
        },
        setShowGameInviteNotification(e) {
            this.track(f.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: !e }),
                r.Z.dispatch({
                    type: 'OVERLAY_SET_GAME_INVITE_NOTIFICATION',
                    shouldShow: e
                });
        },
        setInviteMessage(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_INVITE_MESSAGE',
                message: e
            });
        },
        callPrivateChannel(e, t) {
            r.Z.dispatch({
                type: 'OVERLAY_CALL_PRIVATE_CHANNEL',
                channelId: e,
                ring: t
            });
        },
        setTextWidgetOpacity(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_TEXT_WIDGET_OPACITY',
                opacity: e
            });
        },
        disableExternalLinkAlert() {
            r.Z.dispatch({ type: 'OVERLAY_DISABLE_EXTERNAL_LINK_ALERT' });
        },
        startSession() {
            if (!__OVERLAY__) throw Error('Attempting to start an overlay session outside of the overlay context');
            r.Z.dispatch({ type: 'OVERLAY_START_SESSION' });
        },
        activateRegion(e) {
            r.Z.dispatch({
                type: 'OVERLAY_ACTIVATE_REGION',
                region: e
            });
        },
        deactivateAllRegions() {
            r.Z.dispatch({ type: 'OVERLAY_DEACTIVATE_ALL_REGIONS' });
        },
        setPreviewInGameMode(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_PREVIEW_IN_GAME_MODE',
                isPreviewingInGame: e
            });
        },
        updateNotificationStatus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f._1z.DISMISSED;
            r.Z.dispatch({
                type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
                notificationId: e,
                status: t
            });
        },
        notificationEvent(e, t) {
            var n, i;
            let a = o.Z.getGame();
            r.Z.dispatch({
                type: 'OVERLAY_NOTIFICATION_EVENT',
                notificationType: e,
                action: t,
                gameName: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : null,
                gameId: null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : null
            });
        },
        setPinChat(e) {
            let t = c.qU,
                n = s.Z.getWidgetsForLayout(t),
                r = s.Z.getWidgetConfig(f.Odu.GUILDS),
                a = s.Z.getWidgetConfig(f.Odu.TEXT),
                o = s.Z.getWidgetConfig(f.Odu.GUILDS_TEXT);
            if (0 === n.length || null == r || null == a || null == o) return;
            let _ = l.Z.windowSize(),
                p = {
                    width: 0,
                    height: 0
                },
                h = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                m = {
                    width: 312,
                    height: 0
                },
                g = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                E = {
                    width: 0,
                    height: 0
                };
            if (
                (n.forEach((e) => {
                    let { type: t, id: n, anchor: i, size: r } = e;
                    switch (t) {
                        case f.Odu.TEXT:
                            (p = (0, u.w_)(r, _)), (0, d.E9)(n);
                            break;
                        case f.Odu.GUILDS:
                            (h = (0, u.vS)(i, r, _)), (m = (0, u.w_)(r, _)), (0, d.E9)(n);
                            break;
                        case f.Odu.GUILDS_TEXT:
                            (g = (0, u.vS)(i, r, _)), (E = (0, u.w_)(r, _)), (0, d.E9)(n);
                    }
                }),
                e)
            ) {
                let e = 'auto' === E.width ? o.minSize.width : E.width;
                e -= r.minSize.width;
                let [n, a] = (0, u.o4)(
                        g,
                        {
                            ...E,
                            width: r.minSize.width
                        },
                        _
                    ),
                    [l, c] = (0, u.uq)(
                        g,
                        {
                            ...E,
                            width: e
                        },
                        _,
                        {
                            x: 10,
                            y: 10
                        }
                    ),
                    p = s.Z.getWidgetDefaultSettings(f.Odu.TEXT);
                if (null == p) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
                (0, d.A4)({
                    ...p,
                    type: f.Odu.TEXT,
                    id: (0, i.Z)(),
                    size: c,
                    anchor: l,
                    layoutId: t
                });
                let h = s.Z.getWidgetDefaultSettings(f.Odu.GUILDS);
                if (null == h) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
                (0, d.A4)({
                    ...h,
                    type: f.Odu.GUILDS,
                    id: (0, i.Z)(),
                    size: a,
                    anchor: n,
                    layoutId: t
                });
            } else {
                let e = 'auto' === p.width ? a.minSize.width : p.width;
                e += r.minSize.width;
                let [n, o] = (0, u.o4)(
                        h,
                        {
                            height: m.height,
                            width: e
                        },
                        _
                    ),
                    l = s.Z.getWidgetDefaultSettings(f.Odu.GUILDS_TEXT);
                if (null == l) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
                (0, d.A4)({
                    ...l,
                    type: f.Odu.GUILDS_TEXT,
                    id: (0, i.Z)(),
                    layoutId: t,
                    anchor: n,
                    size: o
                });
            }
        },
        resetDefaultLayout(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            null != s.Z.getLayout(e) && ((0, d.sz)(e), (0, d.jx)(s.Z.getDefaultLayout(e, t)));
        },
        setClickZones(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_CLICK_ZONES',
                zones: e
            });
        },
        relayClickZoneClicked(e, t, n) {
            r.Z.dispatch({
                type: 'OVERLAY_RELAY_CLICK_ZONE_CLICKED',
                zoneName: e,
                normalizedMouseX: t,
                normalizedMouseY: n
            });
        },
        setAssociatedGame(e, t, n) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_ASSOCIATED_GAME',
                previousAssociatedGamePID: e,
                associatedGamePID: t,
                associatedGame: n
            });
        },
        forceRenderMode(e) {
            r.Z.dispatch({
                type: 'OVERLAY_FORCE_RENDER_MODE',
                mode: e
            });
        },
        updateOverlayMethod: (e, t) =>
            r.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_METHOD',
                pid: e,
                overlayMethod: t
            }),
        updateOverlayState(e, t) {
            r.Z.dispatch({
                type: 'OVERLAY_UPDATE_OVERLAY_STATE',
                pid: e,
                overlayState: t
            });
        },
        successfullyShown(e) {
            r.Z.dispatch({
                type: 'OVERLAY_SUCCESSFULLY_SHOWN',
                pid: e
            });
        },
        notifyContentInventoryReady(e) {
            r.Z.dispatch({
                type: 'OVERLAY_CONTENT_INVENTORY_READY',
                contentInventoryEntries: e
            });
        },
        setGpuBoostRequested(e, t) {
            r.Z.dispatch({
                type: 'OVERLAY_SET_GPU_BOOST_REQUESTED',
                reason: e,
                enabled: t
            });
        }
    },
    p = _;
