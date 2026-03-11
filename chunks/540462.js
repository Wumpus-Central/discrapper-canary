"use strict";
n.d(t, { A: () => eH });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(110259),
    d = n(311907),
    u = n(554146),
    h = n(451988),
    A = n(397927),
    m = n(73153),
    p = n(367513),
    g = n(442433),
    _ = n(956793),
    f = n(401843),
    x = n(817281),
    C = n(820284),
    E = n(765671),
    I = n(475743),
    N = n(646865),
    b = n(10716),
    S = n(795816),
    T = n(933958),
    v = n(967812),
    y = n(47294),
    j = n(793574),
    R = n(58149),
    O = n(688810),
    L = n(139286),
    M = n(235986),
    D = n(771781),
    G = n(643501),
    U = n(857253),
    P = n(652896),
    w = n(279250),
    k = n(418126),
    V = n(266626),
    B = n(267102),
    H = n(574172),
    F = n(869146),
    K = n(976860),
    W = n(326567),
    Y = n(964404),
    z = n(105225),
    q = n(874739),
    X = n(993952),
    J = n(461782),
    Q = n(447404),
    $ = n(20465),
    Z = n(156652),
    ee = n(622770),
    et = n(423562),
    en = n(520006),
    ei = n(128286),
    es = n(619344),
    el = n(821747),
    ea = n(125248),
    er = n(616356),
    eo = n(961350),
    ec = n(249288),
    ed = n(696451),
    eu = n(71393),
    eh = n(576705),
    eA = n(222823),
    em = n(309010),
    ep = n(287809),
    eg = n(977997),
    e_ = n(954571),
    ef = n(743898),
    ex = n(147036),
    eC = n(203982),
    eE = n(723702),
    eI = n(837921),
    eN = n(475815),
    eb = n(134047),
    eS = n(313961),
    eT = n(520698),
    ev = n(43189),
    ey = n(518530),
    ej = n(681281),
    eR = n(525788),
    eO = n(587837),
    eL = n(675853),
    eM = n(384059),
    eD = n(480890),
    eG = n(806931),
    eU = n(652215),
    eP = n(985018),
    ew = n(354972);
let ek = {
        [eU.DUB.NORMAL]: ew.qb,
        [eU.DUB.MINIMUM]: ew.Bp,
        [eU.DUB.NO_CHAT]: ew.Oo,
        [eU.DUB.FULL_SCREEN]: ew.iy,
        [eU.DUB.HAVEN]: ew.VT,
    },
    eV = { [eU.BRT.POPOUT]: ew.SW, [eU.BRT.APP]: null, [eU.BRT.OVERLAY]: null, [eU.BRT.CALL_TILE_POPOUT]: null };
class eB extends s.PureComponent {
    _prevLayout = eU.DUB.MINIMUM;
    _wrapperRef = s.createRef();
    _callContainerRef = s.createRef();
    _channelChatRef = s.createRef();
    _contentRef = s.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: Y.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eN.Wb, this.handleFullScreenChange),
            e_.default.track(eU.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, R.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eN.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eE.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: s } = this.props,
            l = this.getRootNode();
        null != l &&
            e.mode === eU._Of.VIDEO &&
            i === eU._Of.VOICE &&
            (0, eN._U)(l, this.currentDocument) &&
            (0, eN.sP)(l, this.currentDocument),
            (e.participantsOpen !== t || s !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && m.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eE.isPlatformEmbedded && eI.Ay.supportsFeature(eU.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eE.isPlatformEmbedded || this.nativePopoutSupported;
    }
    get popoutOpen() {
        let { popoutWindow: e } = this.props;
        return null != e && !e.closed;
    }
    get currentDocument() {
        let { popoutWindow: e } = this.props;
        return null != e && this.popoutOpen && this.inPopout ? e.document : document;
    }
    get screenMessage() {
        return this.popoutOpen && !this.inPopout && this.props.inCall
            ? { mainText: eP.intl.string(eP.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eU.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: s } = this.props,
            l = t === eU._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eU._Of.VIDEO && i && this.popoutSupported && s,
            r = t !== eU._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eU.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eU.DUB.MINIMUM || e === eU.DUB.NORMAL,
                canInvite: o,
                canPopout: a,
                canFullscreen: l,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: l, useTheme: !0 };
        switch (e) {
            case eU.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eU.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eU.DUB.HAVEN:
            case eU.DUB.NO_CHAT:
            case eU.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eN._U)(e, this.currentDocument) ||
                this.props.layout !== eU.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eU.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eU.DUB.FULL_SCREEN), (0, eN.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eU.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eN.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eU.DUB.NORMAL ? eU.DUB.NO_CHAT : eU.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eU.DUB.HAVEN
            ? (this.handleChangeLayout(eU.DUB.NO_CHAT), k.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eU.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (p.A.updateLayout(t.id, e, n),
            e === eU.DUB.FULL_SCREEN && t.isPrivate() && eC._.dispatch(eU.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eU.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, L.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eG.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eG.GK.CONTEXT_MENU;
        return (0, eD.s)(e, j.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eG.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, s, l) => {
        let { channel: a, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eG.lp.HIDDEN_STREAM:
            case eG.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eG.qs.STREAM),
                    (0, g.L3)(
                        t,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    stream: e.stream,
                                    exitFullscreen: this.maybeLeaveFullScreen,
                                    appContext: r,
                                    minimal: s,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        eG.qs.STREAM,
                                        l,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case eG.lp.USER:
                this.trackCallTileContextMenuImpression(e, eG.qs.USER);
                let u = ep.default.getUser(e.id);
                if (null != u) {
                    if (s)
                        return (0, W.r)(t, u, a, d, (e, t) =>
                            (0, eD.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eG.GK.THREE_DOT,
                                tileType: eG.qs.USER,
                                targetUserId: u.id,
                                location: j.A.CHANNEL_CALL,
                            }),
                        );
                    switch (a.type) {
                        case eU.rbe.DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("39778"),
                                        n.e("41073"),
                                    ]).then(n.bind(n, 385913));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            user: u,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "DMUserContextMenu",
                                                e,
                                                eG.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eU.rbe.GROUP_DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("62891"),
                                        n.e("77473"),
                                    ]).then(n.bind(n, 228006));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === eU.DUB.MINIMUM || c === eU.DUB.NORMAL,
                                            user: u,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eG.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eU.rbe.GUILD_VOICE:
                        case eU.rbe.PUBLIC_THREAD:
                        case eU.rbe.PRIVATE_THREAD:
                            let l = a.getGuildId();
                            return (
                                o()(null != l, "GuildID null for guild voice channel"),
                                (0, g.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("84841"),
                                            n.e("38389"),
                                        ]).then(n.bind(n, 107632));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                showMediaItems: !0,
                                                showChannelCallItems: !0,
                                                showChatItems: !1,
                                                user: u,
                                                channel: a,
                                                guildId: l,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    eG.qs.USER,
                                                ),
                                            });
                                    },
                                    d,
                                )
                            );
                    }
                }
        }
    };
    handleCallResize = (e) => {
        this.setState({ resizedHeight: e });
    };
    handleSelectParticipant = (e, t) => {
        let { channel: n, selectedParticipant: i, allActiveStreams: s, inCall: l, mode: a } = this.props;
        (0, eG.Ay)(e) &&
            (0, w.eo)(n, eg.A, eu.A, eh.A, G.default)[0] &&
            (_.default.selectVoiceChannel(n.id),
            0 === s.filter((t) => (0, P._z)(t) === e.id && t.state !== eU.XYD.ENDED).length &&
                (0, f.A9)((0, P.Iy)(e.id), { forceMultiple: t.shiftKey })),
            l &&
                a === eU._Of.VIDEO &&
                (i?.id === e.id ? p.A.selectParticipant(n.id, null) : p.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || ed.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, ex.vJ)(n)), H.openChannelCallPopout(e);
            };
        null == t || (0, N.f)() ? n() : (0, y.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eM.X)(j.A.VOICE_CONTROL_TRAY, eM.O.STAY_ON_TOP, e), H.setAlwaysOnTop(eU.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        H.close(eU.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            s = n === eU.DUB.FULL_SCREEN;
        ((!s && i?.id !== e.id) || (s && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eU.DUB.MINIMUM || n === eU.DUB.NORMAL
            ? (0, i.jsx)(z.Ay, {
                  exitFullScreen: this.maybeLeaveFullScreen,
                  channel: e,
                  onDisconnectCall: this.handleDisconnect,
                  idleProps: this._lastIdleProps,
              })
            : null;
    };
    renderBottomLeft = () => {
        let {
            layout: e,
            mentionCount: t,
            channel: n,
            appContext: s,
            useNewInviteButton: l,
            selectedParticipant: r,
            inCall: o,
        } = this.props;
        if (!o) return null;
        let c = e === eU.DUB.NO_CHAT ? ee.A.Directions.UP : ee.A.Directions.DOWN,
            d = [eU.DUB.FULL_SCREEN, eU.DUB.NO_CHAT].includes(e),
            u =
                e === eU.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eU.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout,
            { canChangeLayout: h, canInvite: m } = this.viewProperties,
            p = l
                ? (0, i.jsx)(X.A, {
                      channel: n,
                      stream: r?.type === eG.lp.STREAM ? (0, P.Iy)(r.id) : void 0,
                      applicationId: r?.type === eG.lp.ACTIVITY ? r.applicationId : void 0,
                      appContext: s,
                      className: ew.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === eU.rbe.GUILD_VOICE ? eU.liQ.GUILD_CHANNEL : eU.liQ.DM_CHANNEL,
                  })
                : (0, i.jsx)(en.A, {
                      channel: n,
                      stream: r?.type === eG.lp.STREAM ? (0, P.Iy)(r.id) : void 0,
                      className: ew.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === eU.rbe.GUILD_VOICE ? eU.liQ.GUILD_CHANNEL : eU.liQ.DM_CHANNEL,
                  });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                m ? p : null,
                h
                    ? (0, i.jsxs)(M.A, {
                          className: ew.P0,
                          align: M.A.Align.CENTER,
                          grow: 0,
                          children: [
                              (0, i.jsx)(ee.A, {
                                  label: d ? eP.intl.string(eP.t.kkKapG) : eP.intl.string(eP.t["5MstTl"]),
                                  direction: c,
                                  className: ew.jZ,
                                  onClick: () => {
                                      (0, eM.X)(j.A.VOICE_CONTROL_TRAY, eM.O.CHAT, d), u();
                                  },
                              }),
                              d && t > 0 ? (0, i.jsx)(A.hVq, { className: ew.qS, count: t }) : null,
                          ],
                      })
                    : null,
                r?.type === eG.lp.STREAM || r?.type === eG.lp.ACTIVITY
                    ? (0, i.jsx)(Q.A, {
                          children: (0, i.jsx)(eR.A, {
                              className: a()(ew.jZ, ew.Wi),
                              participant: r,
                              maxVisibleUsers: 4,
                              guildId: n.getGuildId(),
                              channelId: n.id,
                              disableInteraction: this.inPopout || e === eU.DUB.FULL_SCREEN,
                          }),
                      })
                    : null,
            ],
        });
    };
    renderBottomRight = () => {
        let {
                popoutWindow: e,
                popoutWindowAlwaysOnTop: t,
                currentUserId: n,
                selectedParticipant: s,
                inCall: l,
                canUseHaven: a,
            } = this.props,
            { canFullscreen: r, canStayOnTop: o, canPopout: c, useTheme: d } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != s && s.type !== eG.lp.ACTIVITY && s.user.id !== n
                    ? (0, i.jsx)(el.A, {
                          context: (0, eT.A)(s.type),
                          userId: s.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: ew.MQ,
                          className: ew.iq,
                          location: j.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(es.A, {
                          className: ew.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                a &&
                    l &&
                    (0, i.jsx)(A.K0, {
                        variant: "icon-only",
                        "aria-label": "Haven",
                        icon: A.Y3C,
                        onClick: this.handleHaven,
                    }),
                c
                    ? (0, i.jsx)(ei.A, {
                          themeable: d,
                          popoutOpen: this.popoutOpen,
                          className: ew.iq,
                          onOpenPopout: () => {
                              (0, eM.X)(j.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eM.X)(j.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                r
                    ? (0, i.jsx)(et.A, {
                          themeable: d,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: ew.iq,
                          onClick: () => {
                              (0, eM.X)(
                                  j.A.VOICE_CONTROL_TRAY,
                                  eM.O.FULL_SCREEN,
                                  this.props.layout !== eU.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen();
                          },
                      })
                    : null,
            ],
        });
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: s } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && s)
            ? null
            : (0, i.jsx)(ev.Ay, { children: (0, i.jsx)($.A, { className: ew.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eL.Ay, { children: (0, i.jsx)(ea.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: s, chatOpen: l, inCall: a } = this.props,
            { useExternalHeader: r, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)(Q.A, {
                  children: (0, i.jsx)("div", {
                      className: ew.dL,
                      children: r
                          ? e?.()
                          : (0, i.jsx)(ej.A, {
                                channel: t,
                                guild: n,
                                appContext: s,
                                inCall: a,
                                isChatOpen: l || (this.popoutOpen && !this.inPopout && a),
                                exitFullScreen: this.maybeLeaveFullScreen,
                            }),
                  }),
              })
            : null;
    };
    renderContent(e) {
        let {
                popoutType: t,
                selectedParticipant: n,
                inCall: s,
                hasConnectPermission: l,
                mode: a,
                participantsOpen: r,
                participants: o,
                filteredParticipants: c,
                participantsVersion: d,
                channel: u,
                guild: h,
                layout: A,
                forceShowControls: m,
                awaitingRemoteSessionInfo: p,
                currentChannelActivities: g,
                callContainerDimensions: _,
            } = this.props,
            f = A === eU.DUB.MINIMUM,
            x = f || A === eU.DUB.NORMAL,
            C = s && a === eU._Of.VIDEO,
            E = (g?.length ?? 0) > 0 && u.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(Z.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !s || f,
                idle: !m && s && !f && e.idle,
                children:
                    s && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(q.A, {
                              ref: this._contentRef,
                              inCall: s,
                              channel: u,
                              hasConnectPermission: l,
                              guild: h,
                              participants: o,
                              filteredParticipants: c,
                              participantsVersion: d,
                              selectedParticipant: C ? n : null,
                              layout: A,
                              idle: e.idle,
                              mode: a,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: r && (!x || E),
                              popoutType: t,
                              awaitingRemoteSessionInfo: p,
                              callContainerDimensions: _,
                          }),
            })
        );
    }
    render() {
        let {
                layout: e,
                channel: t,
                guild: n,
                mode: s,
                chatOpen: l,
                appContext: r,
                maxSidebarWidth: o,
                maxHeight: c,
                inCall: d,
            } = this.props,
            { resizedHeight: u } = this.state,
            h = s === eU._Of.VIDEO,
            m = e !== eU.DUB.HAVEN && e !== eU.DUB.NO_CHAT && e !== eU.DUB.FULL_SCREEN && null != c,
            p = eU.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(ew.iE, ek[e], eV[r], {
                [ew.XW]: this.popoutOpen && !this.inPopout && e !== eU.DUB.NO_CHAT && t.isPrivate(),
                [ew.Ki]: h,
                [ew.vc]: l,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: m && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(A.NPJ, {
                    theme: p,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(ew.ik, l || e !== eU.DUB.FULL_SCREEN ? void 0 : ew.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(J.Ay, { timeout: 2e3, children: (e) => this.renderContent(e) }),
                        }),
                }),
                m &&
                    (0, i.jsx)(eO.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: ew.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        l &&
                        (0, i.jsx)(ey.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eH = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: l, canPopout: a = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, E.Ay)(),
        { width: h = 0, height: m = 0, ref: g } = (0, E.Ay)(),
        { ref: _ } = (0, E.Ay)(),
        f = (0, B.Us)(),
        N = (0, U.A)(),
        S = (0, d.bG)([em.A], () => (N?.channelId ?? em.A.getVoiceChannelId()) === t.id),
        {
            participants: y,
            filteredParticipants: R,
            participantsVersion: L,
            mode: M,
            layout: P,
            participantsOpen: w,
            chatOpen: k,
            selectedParticipant: H,
        } = (0, d.cf)([eS.A], () => {
            let e = f === eU.BRT.POPOUT,
                n = eS.A.getMode(t.id),
                i = eS.A.getLayout(t.id, f);
            e && (n = eU._Of.VIDEO);
            let s = n === eU._Of.VIDEO ? i : eU.DUB.MINIMUM;
            return (
                e && s !== eU.DUB.FULL_SCREEN && (s = eU.DUB.NO_CHAT),
                i === eU.DUB.HAVEN && (s = i),
                {
                    mode: n,
                    layout: s,
                    selectedParticipant: n !== eU._Of.VOICE ? eS.A.getSelectedParticipant(t.id) : null,
                    participants: eS.A.getParticipants(t.id),
                    filteredParticipants: eS.A.getFilteredParticipants(t.id),
                    participantsOpen: eS.A.getParticipantsOpen(t.id),
                    chatOpen: eS.A.getChatOpen(t.id),
                    participantsVersion: eS.A.getParticipantsVersion(t.id),
                }
            );
        }, [f, t.id]),
        K = (0, d.yK)([er.A], () => er.A.getAllActiveStreams()),
        { selectedStream: W } = (0, d.cf)(
            [er.A],
            () => ({ selectedStream: null != H ? er.A.getActiveStreamForStreamKey(H.id) : null }),
            [H],
        ),
        z = (0, d.bG)([eu.A], () => eu.A.getGuild(t.getGuildId())),
        q = (0, d.bG)([eA.Ay], () => eA.Ay.getMentionCount(t.id), [t.id]),
        X = (0, d.bG)([eo.default], () => eo.default.getId()),
        { popoutWindow: J, popoutWindowAlwaysOnTop: Q } = (0, d.cf)([F.A], () => ({
            popoutWindow: F.A.getWindow(eU.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.A.getIsAlwaysOnTop(eU.MLl.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, d.bG)([eh.A], () => eh.A.can(eU.xBc.CONNECT, t)),
        Z = (0, d.bG)([ec.A], () => ec.A.getToastsEnabled(t.id)),
        ee = (0, d.bG)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
        et = (0, d.bG)([Y.Ay], () => Y.Ay.callHeaderHeight),
        en = s.useCallback((e) => {
            x.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = z?.id ?? null,
        es = (0, v.A)(ei, t.id),
        el = (0, d.bG)([b.A], () => b.A.getFetchState(), []),
        ea = (0, I.A)(el);
    s.useEffect(() => {
        el === b.$.ERROR &&
            ea !== b.$.ERROR &&
            (0, A.showToast)((0, A.createToast)(eP.intl.string(eP.t["AlJyI+"]), A.ToastType.FAILURE));
    }, [el, ea]);
    let ed = (0, d.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    s.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                S &&
                    M === eU._Of.VIDEO &&
                    ((t = await eI.Ay.blockDisplaySleep()), e && null != t && eI.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eI.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [S, M]);
    let ep = (0, D.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eg } = (0, O.Ay)(j.A.CHANNEL_CALL),
        e_ = o - 550,
        ex = T.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eC } = V.s.useConfig({ location: "ChannelCall" }),
        eE = (0, eb.T)({ channel: t, location: "ChannelCall" });
    s.useEffect(() => {
        if (!eE || !S || null != eS.A.getAllChatOpen()[t.id] || o <= 0) return;
        let e = !(0, ef.P)({ maxWidth: e_, minWidth: 450 });
        p.A.updateChatOpen(t.id, e, "auto open screen width");
    }, [eE, e_, o, t.id, S]);
    let { theme: eN } = (0, A.wRf)();
    return (0, i.jsx)(O.f5, {
        value: eg,
        children: (0, i.jsx)(C.A, {
            page: eU.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(ev.qh, {
                children: (0, i.jsxs)(eL.CB, {
                    children: [
                        (0, i.jsx)(eB, {
                            channel: t,
                            guild: z,
                            hasConnectPermission: $,
                            participantsOpen: w,
                            renderExternalHeader: n,
                            appContext: f,
                            popoutWindow: J,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: q,
                            selectedStream: W,
                            mode: M,
                            inCall: S,
                            participants: y,
                            filteredParticipants: R,
                            participantsVersion: L,
                            layout: P,
                            chatOpen: k,
                            maxSidebarWidth: e_,
                            currentUserId: X,
                            selectedParticipant: H,
                            allActiveStreams: K,
                            useNewInviteButton: es,
                            connectedEmbeddedActivity: ed ?? void 0,
                            showChatToasts: Z,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: m },
                            callContainerRef: g,
                            channelChatRef: _,
                            width: o,
                            maxHeight: l,
                            forceShowControls: ep,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: ex,
                            theme: eN,
                            canPopout: a,
                            popoutType: r,
                            canUseHaven: eC,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eL.wQ, {}),
                        (0, i.jsx)(ev.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
