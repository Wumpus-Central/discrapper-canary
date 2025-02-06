n.d(t, { Z: () => m }), n(47120), n(411104);
var i = n(772848),
    r = n(259443),
    a = n(570140),
    s = n(318885),
    o = n(355863),
    l = n(449224),
    u = n(451478),
    c = n(434529),
    d = n(145597),
    f = n(765250),
    _ = n(981631);
let p = new r.Yd('OverlayActionCreators'),
    h = {
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
            });
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
                p.error('Attempting to start an overlay session outside of the overlay context');
                return;
            }
            h.setInputLocked(e, (0, d.QF)());
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
            this.track(_.rMx.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: !e }),
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
                p.error('Attempting to start an overlay session outside of the overlay context');
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
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _._1z.DISMISSED;
            a.Z.dispatch({
                type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
                notificationId: e,
                status: t
            });
        },
        notificationEvent(e, t) {
            var n, i;
            let r = l.Z.getGame();
            a.Z.dispatch({
                type: 'OVERLAY_NOTIFICATION_EVENT',
                notificationType: e,
                action: t,
                gameName: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : null,
                gameId: null !== (i = null == r ? void 0 : r.id) && void 0 !== i ? i : null
            });
        },
        setPinChat(e) {
            let t = d.qU,
                n = o.Z.getWidgetsForLayout(t),
                r = o.Z.getWidgetConfig(_.Odu.GUILDS),
                a = o.Z.getWidgetConfig(_.Odu.TEXT),
                s = o.Z.getWidgetConfig(_.Odu.GUILDS_TEXT);
            if (0 === n.length || null == r || null == a || null == s) return;
            let l = u.Z.windowSize(),
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
                        case _.Odu.TEXT:
                            (p = (0, c.w_)(r, l)), (0, f.E9)(n);
                            break;
                        case _.Odu.GUILDS:
                            (h = (0, c.vS)(i, r, l)), (m = (0, c.w_)(r, l)), (0, f.E9)(n);
                            break;
                        case _.Odu.GUILDS_TEXT:
                            (g = (0, c.vS)(i, r, l)), (E = (0, c.w_)(r, l)), (0, f.E9)(n);
                    }
                }),
                e)
            ) {
                let e = 'auto' === E.width ? s.minSize.width : E.width;
                e -= r.minSize.width;
                let [n, a] = (0, c.o4)(
                        g,
                        {
                            ...E,
                            width: r.minSize.width
                        },
                        l
                    ),
                    [u, d] = (0, c.uq)(
                        g,
                        {
                            ...E,
                            width: e
                        },
                        l,
                        {
                            x: 10,
                            y: 10
                        }
                    ),
                    p = o.Z.getWidgetDefaultSettings(_.Odu.TEXT);
                if (null == p) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
                (0, f.A4)({
                    ...p,
                    type: _.Odu.TEXT,
                    id: (0, i.Z)(),
                    size: d,
                    anchor: u,
                    layoutId: t
                });
                let h = o.Z.getWidgetDefaultSettings(_.Odu.GUILDS);
                if (null == h) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
                (0, f.A4)({
                    ...h,
                    type: _.Odu.GUILDS,
                    id: (0, i.Z)(),
                    size: a,
                    anchor: n,
                    layoutId: t
                });
            } else {
                let e = 'auto' === p.width ? a.minSize.width : p.width;
                e += r.minSize.width;
                let [n, s] = (0, c.o4)(
                        h,
                        {
                            height: m.height,
                            width: e
                        },
                        l
                    ),
                    u = o.Z.getWidgetDefaultSettings(_.Odu.GUILDS_TEXT);
                if (null == u) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
                (0, f.A4)({
                    ...u,
                    type: _.Odu.GUILDS_TEXT,
                    id: (0, i.Z)(),
                    layoutId: t,
                    anchor: n,
                    size: s
                });
            }
        },
        resetDefaultLayout(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            null != o.Z.getLayout(e) && ((0, f.sz)(e), (0, f.jx)(o.Z.getDefaultLayout(e, t)));
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
    m = h;
