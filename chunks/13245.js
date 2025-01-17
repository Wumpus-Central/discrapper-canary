var i = r(411104);
var a = r(47120);
var s = r(772848),
    o = r(570140),
    l = r(318885),
    u = r(355863),
    c = r(449224),
    d = r(451478),
    f = r(434529),
    _ = r(145597),
    h = r(765250),
    p = r(981631);
let m = {
    track(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, l.Q)(e, n, r);
    },
    overlayReady(e) {
        o.Z.dispatch({
            type: 'OVERLAY_READY',
            pid: e
        });
    },
    overlayMounted() {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        o.Z.dispatch({
            type: 'OVERLAY_MOUNTED',
            nudges: n
        });
    },
    setFocusedPID(e) {
        o.Z.dispatch({
            type: 'OVERLAY_FOCUSED',
            pid: e
        });
    },
    setInputLocked(e, n) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_INPUT_LOCKED',
            locked: e,
            pid: n
        });
    },
    setClickZoneDebugMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_CLICK_ZONE_DEBUG_MODE',
            enabled: e
        });
    },
    setRenderDebugMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_RENDER_DEBUG_MODE',
            enabled: e
        });
    },
    setInstanceLocked(e) {
        if (!__OVERLAY__) throw Error('OverlayActionCreators.setInstanceLocked: Must be called within Overlay context');
        m.setInputLocked(e, (0, _.QF)());
    },
    setEnabled(e, n, r) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_ENABLED',
            enabled: e,
            legacyEnabled: n,
            global: r
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
    setShowKeybindIndicators(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
            shouldShow: e
        });
    },
    callPrivateChannel(e, n) {
        o.Z.dispatch({
            type: 'OVERLAY_CALL_PRIVATE_CHANNEL',
            channelId: e,
            ring: n
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
        if (!__OVERLAY__) throw Error('Attempting to start an overlay session outside of the overlay context');
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
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p._1z.DISMISSED;
        o.Z.dispatch({
            type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
            notificationId: e,
            status: n
        });
    },
    notificationEvent(e, n) {
        var r, i;
        let a = c.Z.getGame();
        o.Z.dispatch({
            type: 'OVERLAY_NOTIFICATION_EVENT',
            notificationType: e,
            action: n,
            gameName: null !== (r = null == a ? void 0 : a.name) && void 0 !== r ? r : null,
            gameId: null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : null
        });
    },
    setPinChat(e) {
        let n = _.qU,
            r = u.Z.getWidgetsForLayout(n),
            i = u.Z.getWidgetConfig(p.Odu.GUILDS),
            a = u.Z.getWidgetConfig(p.Odu.TEXT),
            o = u.Z.getWidgetConfig(p.Odu.GUILDS_TEXT);
        if (0 === r.length || null == i || null == a || null == o) return;
        let l = d.Z.windowSize(),
            c = {
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
            (r.forEach((e) => {
                let { type: n, id: r, anchor: i, size: a } = e;
                switch (n) {
                    case p.Odu.TEXT:
                        (c = (0, f.w_)(a, l)), (0, h.E9)(r);
                        break;
                    case p.Odu.GUILDS:
                        (m = (0, f.vS)(i, a, l)), (g = (0, f.w_)(a, l)), (0, h.E9)(r);
                        break;
                    case p.Odu.GUILDS_TEXT:
                        (E = (0, f.vS)(i, a, l)), (v = (0, f.w_)(a, l)), (0, h.E9)(r);
                }
            }),
            e)
        ) {
            let e = 'auto' === v.width ? o.minSize.width : v.width;
            e -= i.minSize.width;
            let [r, a] = (0, f.o4)(
                    E,
                    {
                        ...v,
                        width: i.minSize.width
                    },
                    l
                ),
                [c, d] = (0, f.uq)(
                    E,
                    {
                        ...v,
                        width: e
                    },
                    l,
                    {
                        x: 10,
                        y: 10
                    }
                ),
                _ = u.Z.getWidgetDefaultSettings(p.Odu.TEXT);
            if (null == _) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
            (0, h.A4)({
                ..._,
                type: p.Odu.TEXT,
                id: (0, s.Z)(),
                size: d,
                anchor: c,
                layoutId: n
            });
            let m = u.Z.getWidgetDefaultSettings(p.Odu.GUILDS);
            if (null == m) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
            (0, h.A4)({
                ...m,
                type: p.Odu.GUILDS,
                id: (0, s.Z)(),
                size: a,
                anchor: r,
                layoutId: n
            });
        } else {
            let e = 'auto' === c.width ? a.minSize.width : c.width;
            e += i.minSize.width;
            let [r, o] = (0, f.o4)(
                    m,
                    {
                        height: g.height,
                        width: e
                    },
                    l
                ),
                d = u.Z.getWidgetDefaultSettings(p.Odu.GUILDS_TEXT);
            if (null == d) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
            (0, h.A4)({
                ...d,
                type: p.Odu.GUILDS_TEXT,
                id: (0, s.Z)(),
                layoutId: n,
                anchor: r,
                size: o
            });
        }
    },
    resetDefaultLayout(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (null != u.Z.getLayout(e)) (0, h.sz)(e), (0, h.jx)(u.Z.getDefaultLayout(e, n));
    },
    setClickZones(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_CLICK_ZONES',
            zones: e
        });
    },
    relayClickZoneClicked(e, n, r) {
        o.Z.dispatch({
            type: 'OVERLAY_RELAY_CLICK_ZONE_CLICKED',
            zoneName: e,
            normalizedMouseX: n,
            normalizedMouseY: r
        });
    },
    setAssociatedGame(e, n, r) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_ASSOCIATED_GAME',
            previousAssociatedGamePID: e,
            associatedGamePID: n,
            associatedGame: r
        });
    },
    forceRenderMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_FORCE_RENDER_MODE',
            mode: e
        });
    },
    updateOverlayMethod: (e, n) =>
        o.Z.dispatch({
            type: 'OVERLAY_UPDATE_OVERLAY_METHOD',
            pid: e,
            overlayMethod: n
        }),
    updateOverlayState(e, n) {
        o.Z.dispatch({
            type: 'OVERLAY_UPDATE_OVERLAY_STATE',
            pid: e,
            overlayState: n
        });
    },
    notifyReadyToShow(e) {
        o.Z.dispatch({
            type: 'OVERLAY_NOTIFY_READY_TO_SHOW',
            pid: e
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
    setGpuBoostRequested(e, n) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_GPU_BOOST_REQUESTED',
            reason: e,
            enabled: n
        });
    }
};
n.Z = m;
