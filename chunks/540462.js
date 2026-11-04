n.r(t);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    d = n(613412),
    c = n(855986),
    u = n(554146),
    h = n(451988),
    p = n(43990),
    m = n(858899),
    A = n(38021),
    f = n(367513),
    g = n(442433),
    x = n(138399),
    C = n(597798),
    y = n(401843),
    j = n(817281),
    I = n(820284),
    N = n(765671),
    v = n(475743),
    E = n(646865),
    b = n(10716),
    S = n(795816),
    _ = n(933958),
    T = n(47294),
    R = n(793574),
    O = n(149468),
    P = n(688810),
    L = n(139286),
    M = n(587895),
    w = n(235986),
    U = n(517057),
    D = n(643501),
    V = n(857253),
    G = n(652896),
    k = n(279250),
    B = n(303227),
    F = n(558076),
    z = n(360729),
    H = n(700948),
    W = n(267102),
    $ = n(574172),
    Y = n(869146),
    K = n(976860),
    X = n(714736),
    q = n(75139),
    Z = n(410828),
    Q = n(940518),
    J = n(326567),
    ee = n(964404),
    et = n(306852),
    en = n(105225),
    ei = n(874739),
    el = n(461782),
    ea = n(447404),
    es = n(401685),
    er = n(20465),
    eo = n(156652),
    ed = n(622770),
    ec = n(423562),
    eu = n(520006),
    eh = n(128286),
    ep = n(619344),
    em = n(821747),
    eA = n(418241),
    ef = n(708416),
    eg = n(488947),
    ex = n(12830),
    eC = n(125248),
    ey = n(616356),
    ej = n(46653),
    eI = n(249288),
    eN = n(696451),
    ev = n(71393),
    eE = n(576705),
    eb = n(309010),
    eS = n(287809),
    e_ = n(977997),
    eT = n(129230),
    eR = n(147036),
    eO = n(188567),
    eP = n(723702),
    eL = n(253400),
    eM = n(475815),
    ew = n(218394),
    eU = n(628983),
    eD = n(520698),
    eV = n(43189),
    eG = n(518530),
    ek = n(681281),
    eB = n(587837),
    eF = n(675853),
    ez = n(384059),
    eH = n(480890),
    eW = n(806931),
    e$ = n(652215),
    eY = n(792996),
    eK = n(880162);
let eX = { [e$.DUB.NORMAL]: eK.qb, [e$.DUB.MINIMUM]: eK.Bp, [e$.DUB.NO_CHAT]: eK.Oo, [e$.DUB.FULL_SCREEN]: eK.iy },
    eq = { [e$.BRT.POPOUT]: eK.SW, [e$.BRT.APP]: null, [e$.BRT.OVERLAY]: null, [e$.BRT.CALL_TILE_POPOUT]: null };
function eZ(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        d = (0, es.Bx)(),
        u = (0, c.bG)([M.A], () => (l?.type === eW.lp.ACTIVITY ? M.A.getApplication(l.applicationId) : void 0)),
        h = t === e$.DUB.NO_CHAT ? ed.A.Directions.UP : ed.A.Directions.DOWN,
        p = [e$.DUB.FULL_SCREEN, e$.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && d < es.vs.NO_INVITE
                ? (0, i.jsx)(eu.A, {
                      channel: n,
                      stream: l?.type === eW.lp.STREAM ? (0, G.Iy)(l.id) : void 0,
                      className: eK.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === e$.rbe.GUILD_VOICE ? e$.liQ.GUILD_CHANNEL : e$.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(w.A, {
                      className: eK.P0,
                      align: w.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ed.A, {
                          label: p ? eY.intl.string(eY.t.kkKapG) : eY.intl.string(eY.t["5MstTl"]),
                          direction: h,
                          className: eK.jZ,
                          onClick: () => {
                              ((0, ez.XJ)(R.A.VOICE_CONTROL_TRAY, ez.OP.CHAT, p), r());
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eQ extends l.PureComponent {
    _prevLayout = e$.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: ee.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        (this.currentDocument.addEventListener(eM.Wb, this.handleFullScreenChange),
            eT.default.track(e$.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, O.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eM.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eP.cX)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let {
                participantsOpen: t,
                inCall: n,
                mode: i,
                layout: l,
                stageAudienceSidebarOpen: a,
                isWindowFocused: s,
                channel: r,
            } = this.props,
            { enabled: o } = (0, X.j)(r.guild_id, "ChannelCall");
        o && n && r.isGuildVoice() && s && !e.isWindowFocused && this._lastIdleProps?.onActive();
        let d = this.getRootNode();
        (null != d &&
            e.mode === e$._Of.VIDEO &&
            i === e$._Of.VOICE &&
            (0, eM._U)(d, this.currentDocument) &&
            (0, eM.sP)(d, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout || e.stageAudienceSidebarOpen !== a) &&
                this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eP.isPlatformEmbedded && eL.Ay.supportsFeature(e$.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eP.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eY.intl.string(eY.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === e$.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === e$._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === e$._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== e$._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === e$.rbe.GUILD_VOICE,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === e$.DUB.MINIMUM || e === e$.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...d, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case e$.DUB.FULL_SCREEN:
                return { ...d, canPopout: !this.inPopout && this.popoutOpen && d.canPopout };
            case e$.DUB.MINIMUM:
                return { ...d, canPopout: !1, useTheme: !0 };
            case e$.DUB.NO_CHAT:
            case e$.DUB.NORMAL:
                return { ...d };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eM._U)(e, this.currentDocument) ||
                this.props.layout !== e$.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== e$.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(e$.DUB.FULL_SCREEN), (0, eM.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === e$.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eM.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === e$.DUB.NORMAL ? e$.DUB.NO_CHAT : e$.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (f.A.updateLayout(t.id, e, n),
            e === e$.DUB.FULL_SCREEN && t.isPrivate() && eO._.dispatch(e$.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === e$.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, L.x)({
            type: d.ImpressionTypes.MENU,
            name: d.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eW.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eW.GK.CONTEXT_MENU;
        return (0, eH.s)(e, R.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eW.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: d } = this.props,
            c = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eW.lp.HIDDEN_STREAM:
            case eW.lp.STREAM:
                (this.trackCallTileContextMenuImpression(e, eW.qs.STREAM),
                    (0, g.L3)(
                        t,
                        async () => {
                            let { default: t } = await Promise.all([
                                n.e(189673),
                                n.e(245996),
                                n.e(529422),
                                n.e(58315),
                                n.e(338618),
                            ]).then(n.bind(n, 16001));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    stream: e.stream,
                                    exitFullscreen: this.maybeLeaveFullScreen,
                                    appContext: r,
                                    minimal: l,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        eW.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        c,
                    ));
                return;
            case eW.lp.USER:
                this.trackCallTileContextMenuImpression(e, eW.qs.USER);
                let u = eS.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, J.r)(t, u, s, c, (e, t) =>
                            (0, eH.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eW.GK.THREE_DOT,
                                tileType: eW.qs.USER,
                                targetUserId: u.id,
                                location: R.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case e$.rbe.DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e(463317),
                                        n.e(926132),
                                        n.e(893190),
                                        n.e(146652),
                                        n.e(391763),
                                        n.e(189673),
                                        n.e(576432),
                                        n.e(797558),
                                        n.e(491001),
                                        n.e(451162),
                                        n.e(229787),
                                        n.e(576665),
                                        n.e(382563),
                                        n.e(947502),
                                        n.e(715038),
                                        n.e(245996),
                                        n.e(965789),
                                        n.e(529422),
                                        n.e(823427),
                                        n.e(242204),
                                        n.e(307059),
                                        n.e(150773),
                                        n.e(935483),
                                        n.e(275289),
                                        n.e(17244),
                                        n.e(298199),
                                        n.e(861649),
                                        n.e(439778),
                                        n.e(996028),
                                    ]).then(n.bind(n, 385913));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "DMUserContextMenu",
                                                e,
                                                eW.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case e$.rbe.GROUP_DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e(463317),
                                        n.e(926132),
                                        n.e(893190),
                                        n.e(146652),
                                        n.e(189673),
                                        n.e(576432),
                                        n.e(797558),
                                        n.e(451162),
                                        n.e(229787),
                                        n.e(576665),
                                        n.e(624198),
                                        n.e(715038),
                                        n.e(245996),
                                        n.e(529422),
                                        n.e(823427),
                                        n.e(242204),
                                        n.e(307059),
                                        n.e(843326),
                                    ]).then(n.bind(n, 183245));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: d === e$.DUB.MINIMUM || d === e$.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eW.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case e$.rbe.GUILD_VOICE:
                        case e$.rbe.GUILD_STAGE_VOICE:
                        case e$.rbe.PUBLIC_THREAD:
                        case e$.rbe.PRIVATE_THREAD:
                            let a = s.getGuildId();
                            return (
                                o()(null != a, "GuildID null for guild voice channel"),
                                (0, g.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e(463317),
                                            n.e(893190),
                                            n.e(189673),
                                            n.e(576432),
                                            n.e(797558),
                                            n.e(451162),
                                            n.e(229787),
                                            n.e(576665),
                                            n.e(624198),
                                            n.e(715038),
                                            n.e(245996),
                                            n.e(529422),
                                            n.e(823427),
                                            n.e(242204),
                                            n.e(307059),
                                            n.e(495861),
                                            n.e(343116),
                                            n.e(470314),
                                            n.e(70515),
                                            n.e(404524),
                                            n.e(654148),
                                            n.e(666939),
                                            n.e(281165),
                                            n.e(184841),
                                        ]).then(n.bind(n, 107632));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                showMediaItems: !0,
                                                showChannelCallItems: !0,
                                                showStageChannelItems: s.isGuildStageVoice(),
                                                showChatItems: !1,
                                                user: u,
                                                channel: s,
                                                guildId: a,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    eW.qs.USER,
                                                ),
                                            });
                                    },
                                    c,
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
        let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: a, mode: s } = this.props;
        ((0, eW.Ay)(e) &&
            (0, k.eo)(n, e_.A, ev.A, eE.A, D.default)[0] &&
            (C.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== e$.XYD.ENDED).length &&
                (0, y.A9)((0, G.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === e$._Of.VIDEO &&
                (i?.id === e.id ? f.A.selectParticipant(n.id, null) : f.A.selectParticipant(n.id, e.id)));
    };
    handleSelectVoiceChannelAppPipParticipant = (e, t) => {
        let { channel: n, selectedParticipant: i, guildRoomVisible: l } = this.props;
        ((0, eA.s)(n.id), l && (0, B.zD)(n.id), i?.id !== e.id && this.handleSelectParticipant(e, t));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            (null == n || eN.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, eR.vJ)(n)), $.d8(e));
        }
        null == t || (0, E.f)() ? n() : (0, T.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, ez.XJ)(R.A.VOICE_CONTROL_TRAY, ez.OP.STAY_ON_TOP, e), $.uR(e$.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        $.close(e$.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === e$.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return e.isGuildStageVoice()
            ? t
                ? (0, i.jsx)(Z.Ti, { channel: e })
                : null
            : t || n === e$.DUB.MINIMUM || n === e$.DUB.NORMAL
              ? (0, i.jsx)(en.Ay, {
                    exitFullScreen: this.maybeLeaveFullScreen,
                    channel: e,
                    onDisconnectCall: this.handleDisconnect,
                    idleProps: this._lastIdleProps,
                })
              : null;
    };
    renderBottomLeft = () => {
        let { layout: e, channel: t, selectedParticipant: n, inCall: l } = this.props,
            { canChangeLayout: a, canInvite: s } = this.viewProperties,
            r =
                e === e$.DUB.FULL_SCREEN
                    ? () => {
                          ((this._prevLayout = e$.DUB.NORMAL), this.handleFullScreen());
                      }
                    : this.handleToggleLayout;
        return !l || t.isGuildStageVoice()
            ? null
            : (0, i.jsx)(eZ, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: a,
                  canInvite: s,
                  onToggleChat: r,
                  maybeLeaveFullScreen: this.maybeLeaveFullScreen,
              });
    };
    renderBottomRight = () => {
        let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
            { canFullscreen: a, canStayOnTop: s, canPopout: r, useTheme: o } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != l && l.type !== eW.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(em.A, {
                          context: (0, eD.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eK.MQ,
                          className: eK.iq,
                          location: R.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                s
                    ? (0, i.jsx)(ep.A, {
                          className: eK.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r
                    ? (0, i.jsx)(eh.A, {
                          themeable: o,
                          popoutOpen: this.popoutOpen,
                          className: eK.iq,
                          onOpenPopout: () => {
                              ((0, ez.XJ)(R.A.VOICE_CONTROL_TRAY, ez.OP.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, ez.XJ)(R.A.VOICE_CONTROL_TRAY, ez.OP.POPOUT, !1), this.handleClosePopout());
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(ec.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eK.iq,
                          onClick: () => {
                              ((0, ez.XJ)(
                                  R.A.VOICE_CONTROL_TRAY,
                                  ez.OP.FULL_SCREEN,
                                  this.props.layout !== e$.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen());
                          },
                      })
                    : null,
            ],
        });
    };
    handleToastClick = (e) => {
        (f.A.updateChatOpen(e.channel_id, !0),
            x.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && l)
            ? null
            : (0, i.jsx)(eV.Ay, {
                  children: (0, i.jsx)(er.A, {
                      className: eK.T6,
                      channelId: n.id,
                      onToastClick: this.handleToastClick,
                  }),
              });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eF.Ay, { children: (0, i.jsx)(eC.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let {
                renderExternalHeader: e,
                channel: t,
                guild: n,
                appContext: l,
                chatOpen: a,
                stageAudienceSidebarOpen: s,
                inCall: r,
                guildRoomVisible: o,
            } = this.props,
            { useExternalHeader: d, renderHeader: c } = this.viewProperties;
        return c
            ? (0, i.jsx)(ea.A, {
                  children: (0, i.jsx)("div", {
                      className: eK.dL,
                      children: d
                          ? e?.()
                          : (0, i.jsx)(ek.A, {
                                channel: t,
                                guild: n,
                                appContext: l,
                                inCall: r,
                                isChatOpen: a || (this.popoutOpen && !this.inPopout && r),
                                isStageAudienceSidebarOpen: s || (this.popoutOpen && !this.inPopout && r),
                                exitFullScreen: this.maybeLeaveFullScreen,
                                guildRoomVisible: o,
                            }),
                  }),
              })
            : null;
    };
    renderContent(e) {
        let {
                popoutType: t,
                selectedParticipant: n,
                inCall: l,
                hasConnectPermission: a,
                mode: s,
                participantsOpen: r,
                participants: o,
                filteredParticipants: d,
                participantsVersion: c,
                channel: u,
                guild: h,
                layout: p,
                forceShowControls: m,
                awaitingRemoteSessionInfo: A,
                currentChannelActivities: f,
                callContainerDimensions: g,
                guildRoomVisible: x,
                isPlacingNote: C,
            } = this.props,
            y = u.isGuildStageVoice(),
            j = p === e$.DUB.MINIMUM,
            I = j || p === e$.DUB.NORMAL,
            N = l && s === e$._Of.VIDEO,
            v = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let E = !l || !(this.popoutOpen && !this.inPopout),
            b = !m && l && !j && e.idle,
            S = (0, i.jsx)(ei.A, {
                ref: this._contentRef,
                inCall: l,
                channel: u,
                hasConnectPermission: a,
                guild: h,
                participants: o,
                filteredParticipants: d,
                participantsVersion: c,
                selectedParticipant: N ? n : null,
                layout: p,
                idle: e.idle,
                mode: s,
                onSelectParticipant: this.handleSelectParticipant,
                onContextMenuParticipant: this.handleContextMenu,
                showParticipants: r && (!I || v),
                popoutType: t,
                awaitingRemoteSessionInfo: A,
                callContainerDimensions: g,
            }),
            _ = S;
        return (
            x
                ? (_ = (0, i.jsx)(H.A, { channelId: u.id, popoutType: t, idle: e.idle }))
                : y &&
                  (_ = (0, i.jsx)(Z.nM, {
                      channel: u,
                      inCall: l,
                      hasConnectPermission: a,
                      hasSpeakers: o.length > 0,
                      children: S,
                  })),
            (0, i.jsx)(eo.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() || y ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !l || j,
                hideControls: C,
                idle: b,
                children: E && (this.renderVoiceChannelAppSurface() ?? _),
            })
        );
    }
    renderVoiceChannelAppSurface() {
        let { channel: e, currentVoiceChannelApplicationId: t } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(ex.A, {
                  applicationId: t,
                  channelId: e.id,
                  guildId: e.guild_id ?? void 0,
                  renderPipOverlay: (t, n) => {
                      let { width: l, height: a } = n;
                      return (0, i.jsx)(et.A, {
                          channel: e,
                          participants: t,
                          width: l,
                          height: a,
                          onSelectParticipant: this.handleSelectVoiceChannelAppPipParticipant,
                          onContextMenuParticipant: this.handleContextMenu,
                      });
                  },
              });
    }
    render() {
        let {
                layout: e,
                channel: t,
                guild: n,
                mode: l,
                chatOpen: a,
                appContext: r,
                maxSidebarWidth: o,
                maxHeight: d,
                inCall: c,
                stageAudienceSidebarOpen: u,
            } = this.props,
            { resizedHeight: h } = this.state,
            m = l === e$._Of.VIDEO,
            A = e !== e$.DUB.NO_CHAT && e !== e$.DUB.FULL_SCREEN && null != d,
            f = e$.NJ8.ONYX,
            g = !c || !this.popoutOpen || this.inPopout,
            x = t.getGuildId(),
            C = u && g && null != x;
        return (0, i.jsxs)("div", {
            className: s()(eK.iE, eX[e], eq[r], {
                [eK.XW]: this.popoutOpen && !this.inPopout && e !== e$.DUB.NO_CHAT && t.isPrivate(),
                [eK.Ki]: m,
                [eK.vc]: a || C,
                [eK.ty]: A,
            }),
            ref: (e) => {
                ((this._wrapperRef.current = e), (this.props.wrapperRef.current = e));
            },
            style: A && null != h ? { minHeight: 230, maxHeight: d, height: h } : void 0,
            children: [
                (0, i.jsx)(p.N, {
                    theme: f,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(eK.ik, a || C || e !== e$.DUB.FULL_SCREEN ? void 0 : eK.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(el.Ay, { timeout: 2e3, children: (e) => this.renderContent(e) }),
                        }),
                }),
                A &&
                    (0, i.jsx)(eB.A, {
                        minHeight: 230,
                        maxHeight: d,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsxs)("div", {
                    className: eK.B2,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children: [
                        C && (0, i.jsx)(q.A, { channel: t, guildId: x, maxWidth: o }),
                        g && a && (0, i.jsx)(eG.A, { channel: t, guild: n, maxWidth: o }),
                    ],
                }),
            ],
        });
    }
}
n.d(
    t,
    {},
    {
        IDLE_TIMEOUT: 2e3,
        default: function (e) {
            let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
                { width: o = 0, ref: d } = (0, N.Ay)(),
                { width: h = 0, height: p = 0, ref: f } = (0, N.Ay)(),
                { ref: g } = (0, N.Ay)(),
                x = (0, W.Us)(),
                C = (0, V.A)(),
                y = (0, c.bG)([eb.Ay], () => (C?.channelId ?? eb.Ay.getVoiceChannelId()) === t.id),
                E = t.isGuildStageVoice();
            (0, Q.A)(E);
            let {
                    participants: S,
                    filteredParticipants: T,
                    participantsVersion: O,
                    mode: L,
                    layout: M,
                    participantsOpen: w,
                    chatOpen: G,
                    stageAudienceSidebarOpen: k,
                    selectedParticipant: B,
                } = (0, c.cf)(
                    [eU.A],
                    () => {
                        let e = x === e$.BRT.POPOUT,
                            n = eU.A.getMode(t.id),
                            i = eU.A.getLayout(t.id, x);
                        e && (n = e$._Of.VIDEO);
                        let l = n === e$._Of.VIDEO ? i : e$.DUB.MINIMUM;
                        e && l !== e$.DUB.FULL_SCREEN && (l = e$.DUB.NO_CHAT);
                        let a = E ? eU.A.getStageSpeakerParticipants(t.id) : null,
                            s = n !== e$._Of.VOICE ? eU.A.getSelectedParticipant(t.id) : null;
                        return (
                            null == s || null == a || a.includes(s) || (s = null),
                            {
                                mode: n,
                                layout: l,
                                selectedParticipant: s,
                                participants: a ?? eU.A.getParticipants(t.id),
                                filteredParticipants: a ?? eU.A.getFilteredParticipants(t.id),
                                participantsOpen: eU.A.getParticipantsOpen(t.id),
                                chatOpen: eU.A.getChatOpen(t.id),
                                stageAudienceSidebarOpen: E && eU.A.getStageAudienceSidebarOpen(t.id),
                                participantsVersion: eU.A.getParticipantsVersion(t.id),
                            }
                        );
                    },
                    [x, t.id, E],
                ),
                H = (0, c.yK)([ey.A], () => ey.A.getAllActiveStreams()),
                { selectedStream: $ } = (0, c.cf)(
                    [ey.A],
                    () => ({ selectedStream: null != B ? ey.A.getActiveStreamForStreamKey(B.id) : null }),
                    [B],
                ),
                K = (0, c.bG)([ev.A], () => ev.A.getGuild(t.getGuildId())),
                X = (0, c.bG)([ej.default], () => ej.default.getId()),
                { popoutWindow: q, popoutWindowAlwaysOnTop: Z } = (0, c.cf)([Y.A], () => ({
                    popoutWindow: Y.A.getWindow(e$.MLl.CHANNEL_CALL_POPOUT),
                    popoutWindowAlwaysOnTop: Y.A.getIsAlwaysOnTop(e$.MLl.CHANNEL_CALL_POPOUT),
                })),
                J = (0, c.bG)([eE.A], () => eE.A.can(e$.xBc.CONNECT, t)),
                et = (0, c.bG)([eI.A], () => eI.A.getToastsEnabled(t.id)),
                en = (0, c.bG)([D.default], () => D.default.getAwaitingRemoteSessionInfo()),
                ei = (0, c.bG)([ee.Ay], () => ee.Ay.callHeaderHeight),
                el = l.useCallback((e) => {
                    j.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
                }, []),
                ea = (0, c.bG)([b.A], () => b.A.getFetchState(), []),
                es = (0, v.Ay)(ea);
            l.useEffect(() => {
                ea === b.$.ERROR &&
                    es !== b.$.ERROR &&
                    (0, m.P0)({ text: eY.intl.string(eY.t["AlJyI+"]), variant: "critical" });
            }, [ea, es]);
            let er = (0, c.bG)([_.Ay], () => _.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
                eo = (0, U.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
                { analyticsLocations: ed } = (0, P.Ay)(R.A.CHANNEL_CALL),
                ec = _.Ay.getEmbeddedActivitiesForChannel(t.id),
                { enabled: eu } = (0, z.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
                eh = (0, c.bG)([F.A], () => F.A.isVisible(t.id)),
                ep = (0, c.bG)([F.A], () => {
                    let e = F.A.getPendingNote(t.id);
                    return null != e && null == e.position;
                }),
                em = (0, ew.j)(),
                eA = (0, ef.d7)(t, y),
                ex = (0, ef.kM)(t),
                eC = (0, eg.F)(x) && ex ? eA : null,
                { theme: eN } = (0, A.wR)();
            return (0, i.jsx)(P.f5, {
                value: ed,
                children: (0, i.jsx)(I.A, {
                    page: e$.liQ.CHANNEL_CALL,
                    children: (0, i.jsx)(eV.qh, {
                        children: (0, i.jsxs)(eF.CB, {
                            children: [
                                (0, i.jsx)(eQ, {
                                    channel: t,
                                    guild: K,
                                    hasConnectPermission: J,
                                    participantsOpen: w,
                                    renderExternalHeader: n,
                                    appContext: x,
                                    popoutWindow: q,
                                    popoutWindowAlwaysOnTop: Z,
                                    selectedStream: $,
                                    mode: L,
                                    inCall: y,
                                    participants: S,
                                    filteredParticipants: T,
                                    participantsVersion: O,
                                    layout: M,
                                    chatOpen: G,
                                    maxSidebarWidth: o - 550,
                                    currentUserId: X,
                                    selectedParticipant: B,
                                    allActiveStreams: H,
                                    connectedEmbeddedActivity: er ?? void 0,
                                    showChatToasts: et,
                                    storedCallHeaderHeight: ei,
                                    updateStoredCallHeaderHeight: el,
                                    wrapperRef: d,
                                    callContainerDimensions: { width: h, height: p },
                                    callContainerRef: f,
                                    channelChatRef: g,
                                    width: o,
                                    maxHeight: a,
                                    forceShowControls: eo,
                                    awaitingRemoteSessionInfo: en,
                                    currentChannelActivities: ec,
                                    theme: eN,
                                    canPopout: s,
                                    popoutType: r,
                                    guildRoomVisible: eu && eh && !E,
                                    isPlacingNote: ep,
                                    isWindowFocused: em,
                                    currentVoiceChannelApplicationId: eC,
                                    stageAudienceSidebarOpen: k,
                                }),
                                !t.isPrivate() && (0, i.jsx)(eF.wQ, {}),
                                (0, i.jsx)(eV.WD, {}),
                            ],
                        }),
                    }),
                }),
            });
        },
    },
);
