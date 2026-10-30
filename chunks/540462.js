(n.r(t), n.d(t, { IDLE_TIMEOUT: () => eX, default: () => e0 }));
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(562708),
    d = n(17928),
    u = n(554146),
    h = n(451988),
    p = n(43990),
    m = n(858899),
    A = n(38021),
    f = n(367513),
    x = n(442433),
    g = n(148494),
    C = n(730852),
    y = n(401843),
    j = n(817281),
    I = n(820284),
    N = n(765671),
    v = n(475743),
    E = n(646865),
    b = n(10716),
    S = n(795816),
    T = n(933958),
    _ = n(47294),
    R = n(793574),
    O = n(666860),
    L = n(688810),
    P = n(139286),
    M = n(587895),
    w = n(235986),
    U = n(47899),
    D = n(643501),
    V = n(857253),
    G = n(652896),
    k = n(279250),
    B = n(446243),
    F = n(558076),
    z = n(360729),
    H = n(700948),
    W = n(267102),
    Y = n(574172),
    $ = n(869146),
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
    ec = n(622770),
    ed = n(423562),
    eu = n(520006),
    eh = n(128286),
    ep = n(619344),
    em = n(821747),
    eA = n(418241),
    ef = n(708416),
    ex = n(488947),
    eg = n(12830),
    eC = n(125248),
    ey = n(616356),
    ej = n(280450),
    eI = n(249288),
    eN = n(696451),
    ev = n(71393),
    eE = n(576705),
    eb = n(309010),
    eS = n(287809),
    eT = n(977997),
    e_ = n(174459),
    eR = n(147036),
    eO = n(625494),
    eL = n(723702),
    eP = n(19575),
    eM = n(475815),
    ew = n(218394),
    eU = n(198052),
    eD = n(520698),
    eV = n(43189),
    eG = n(518530),
    ek = n(681281),
    eB = n(587837),
    eF = n(675853),
    ez = n(384059),
    eH = n(480890),
    eW = n(806931),
    eY = n(652215),
    e$ = n(105292),
    eK = n(880162);
let eX = 2e3,
    eq = { [eY.DUB.NORMAL]: eK.qb, [eY.DUB.MINIMUM]: eK.Bp, [eY.DUB.NO_CHAT]: eK.Oo, [eY.DUB.FULL_SCREEN]: eK.iy },
    eZ = { [eY.BRT.POPOUT]: eK.SW, [eY.BRT.APP]: null, [eY.BRT.OVERLAY]: null, [eY.BRT.CALL_TILE_POPOUT]: null };
function eQ(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, es.Bx)(),
        u = (0, d.bG)([M.A], () => (l?.type === eW.lp.ACTIVITY ? M.A.getApplication(l.applicationId) : void 0)),
        h = t === eY.DUB.NO_CHAT ? ec.A.Directions.UP : ec.A.Directions.DOWN,
        p = [eY.DUB.FULL_SCREEN, eY.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < es.vs.NO_INVITE
                ? (0, i.jsx)(eu.A, {
                      channel: n,
                      stream: l?.type === eW.lp.STREAM ? (0, G.Iy)(l.id) : void 0,
                      className: eK.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eY.rbe.GUILD_VOICE ? eY.liQ.GUILD_CHANNEL : eY.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(w.A, {
                      className: eK.P0,
                      align: w.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ec.A, {
                          label: p ? e$.intl.string(e$.t.kkKapG) : e$.intl.string(e$.t["5MstTl"]),
                          direction: h,
                          className: eK.jZ,
                          onClick: () => {
                              ((0, ez.X)(R.A.VOICE_CONTROL_TRAY, ez.O.CHAT, p), r());
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eJ extends l.PureComponent {
    _prevLayout = eY.DUB.MINIMUM;
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
            e_.default.track(eY.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, O.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eM.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eL.isMac)()) || this.maybeLeaveFullScreen());
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
        let c = this.getRootNode();
        (null != c &&
            e.mode === eY._Of.VIDEO &&
            i === eY._Of.VOICE &&
            (0, eM._U)(c, this.currentDocument) &&
            (0, eM.sP)(c, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout || e.stageAudienceSidebarOpen !== a) &&
                this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eL.isPlatformEmbedded && eP.Ay.supportsFeature(eY.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eL.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: e$.intl.string(e$.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eY.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eY._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eY._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eY._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eY.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eY.DUB.MINIMUM || e === eY.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eY.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eY.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eY.DUB.NO_CHAT:
            case eY.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eM._U)(e, this.currentDocument) ||
                this.props.layout !== eY.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eY.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eY.DUB.FULL_SCREEN), (0, eM.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eY.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eM.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eY.DUB.NORMAL ? eY.DUB.NO_CHAT : eY.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (f.A.updateLayout(t.id, e, n),
            e === eY.DUB.FULL_SCREEN && t.isPrivate() && eO._.dispatch(eY.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eY.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, P.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
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
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eW.lp.HIDDEN_STREAM:
            case eW.lp.STREAM:
                (this.trackCallTileContextMenuImpression(e, eW.qs.STREAM),
                    (0, x.L3)(
                        t,
                        async () => {
                            let { default: t } = await Promise.all([
                                n.e("189673"),
                                n.e("245996"),
                                n.e("529422"),
                                n.e("58315"),
                                n.e("870553"),
                            ]).then(n.bind(n, 744960));
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
                        d,
                    ));
                return;
            case eW.lp.USER:
                this.trackCallTileContextMenuImpression(e, eW.qs.USER);
                let u = eS.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, J.r)(t, u, s, d, (e, t) =>
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
                        case eY.rbe.DM:
                            return (0, x.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("463317"),
                                        n.e("926132"),
                                        n.e("893190"),
                                        n.e("146652"),
                                        n.e("391763"),
                                        n.e("189673"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("955557"),
                                        n.e("691994"),
                                        n.e("229787"),
                                        n.e("576665"),
                                        n.e("591951"),
                                        n.e("947502"),
                                        n.e("715038"),
                                        n.e("245996"),
                                        n.e("965789"),
                                        n.e("529422"),
                                        n.e("823427"),
                                        n.e("242204"),
                                        n.e("307059"),
                                        n.e("198415"),
                                        n.e("935483"),
                                        n.e("275289"),
                                        n.e("17244"),
                                        n.e("298199"),
                                        n.e("864464"),
                                        n.e("439778"),
                                        n.e("996028"),
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
                                d,
                            );
                        case eY.rbe.GROUP_DM:
                            return (0, x.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("463317"),
                                        n.e("926132"),
                                        n.e("893190"),
                                        n.e("146652"),
                                        n.e("189673"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("229787"),
                                        n.e("576665"),
                                        n.e("624198"),
                                        n.e("715038"),
                                        n.e("245996"),
                                        n.e("529422"),
                                        n.e("823427"),
                                        n.e("242204"),
                                        n.e("307059"),
                                        n.e("528864"),
                                    ]).then(n.bind(n, 778595));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === eY.DUB.MINIMUM || c === eY.DUB.NORMAL,
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
                                d,
                            );
                        case eY.rbe.GUILD_VOICE:
                        case eY.rbe.GUILD_STAGE_VOICE:
                        case eY.rbe.PUBLIC_THREAD:
                        case eY.rbe.PRIVATE_THREAD:
                            let a = s.getGuildId();
                            return (
                                o()(null != a, "GuildID null for guild voice channel"),
                                (0, x.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("463317"),
                                            n.e("893190"),
                                            n.e("189673"),
                                            n.e("882073"),
                                            n.e("797558"),
                                            n.e("691994"),
                                            n.e("229787"),
                                            n.e("576665"),
                                            n.e("624198"),
                                            n.e("715038"),
                                            n.e("245996"),
                                            n.e("529422"),
                                            n.e("823427"),
                                            n.e("242204"),
                                            n.e("307059"),
                                            n.e("449145"),
                                            n.e("343116"),
                                            n.e("470314"),
                                            n.e("70515"),
                                            n.e("404524"),
                                            n.e("654148"),
                                            n.e("666939"),
                                            n.e("281165"),
                                            n.e("184841"),
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
        let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: a, mode: s } = this.props;
        ((0, eW.Ay)(e) &&
            (0, k.eo)(n, eT.A, ev.A, eE.A, D.default)[0] &&
            (C.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== eY.XYD.ENDED).length &&
                (0, y.A9)((0, G.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eY._Of.VIDEO &&
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
            (null == n || eN.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, eR.vJ)(n)), Y.openChannelCallPopout(e));
        }
        null == t || (0, E.f)() ? n() : (0, _.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, ez.X)(R.A.VOICE_CONTROL_TRAY, ez.O.STAY_ON_TOP, e), Y.setAlwaysOnTop(eY.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        Y.close(eY.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eY.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return e.isGuildStageVoice()
            ? t
                ? (0, i.jsx)(Z.Ti, { channel: e })
                : null
            : t || n === eY.DUB.MINIMUM || n === eY.DUB.NORMAL
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
                e === eY.DUB.FULL_SCREEN
                    ? () => {
                          ((this._prevLayout = eY.DUB.NORMAL), this.handleFullScreen());
                      }
                    : this.handleToggleLayout;
        return !l || t.isGuildStageVoice()
            ? null
            : (0, i.jsx)(eQ, {
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
                              ((0, ez.X)(R.A.VOICE_CONTROL_TRAY, ez.O.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, ez.X)(R.A.VOICE_CONTROL_TRAY, ez.O.POPOUT, !1), this.handleClosePopout());
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(ed.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eK.iq,
                          onClick: () => {
                              ((0, ez.X)(
                                  R.A.VOICE_CONTROL_TRAY,
                                  ez.O.FULL_SCREEN,
                                  this.props.layout !== eY.DUB.FULL_SCREEN,
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
            g.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
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
            { useExternalHeader: c, renderHeader: d } = this.viewProperties;
        return d
            ? (0, i.jsx)(ea.A, {
                  children: (0, i.jsx)("div", {
                      className: eK.dL,
                      children: c
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
                filteredParticipants: c,
                participantsVersion: d,
                channel: u,
                guild: h,
                layout: p,
                forceShowControls: m,
                awaitingRemoteSessionInfo: A,
                currentChannelActivities: f,
                callContainerDimensions: x,
                guildRoomVisible: g,
                isPlacingNote: C,
            } = this.props,
            y = u.isGuildStageVoice(),
            j = p === eY.DUB.MINIMUM,
            I = j || p === eY.DUB.NORMAL,
            N = l && s === eY._Of.VIDEO,
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
                filteredParticipants: c,
                participantsVersion: d,
                selectedParticipant: N ? n : null,
                layout: p,
                idle: e.idle,
                mode: s,
                onSelectParticipant: this.handleSelectParticipant,
                onContextMenuParticipant: this.handleContextMenu,
                showParticipants: r && (!I || v),
                popoutType: t,
                awaitingRemoteSessionInfo: A,
                callContainerDimensions: x,
            }),
            T = S;
        return (
            g
                ? (T = (0, i.jsx)(H.A, { channelId: u.id, popoutType: t, idle: e.idle }))
                : y &&
                  (T = (0, i.jsx)(Z.nM, {
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
                children: E && (this.renderVoiceChannelAppSurface() ?? T),
            })
        );
    }
    renderVoiceChannelAppSurface() {
        let { channel: e, currentVoiceChannelApplicationId: t } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(eg.A, {
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
                maxHeight: c,
                inCall: d,
                stageAudienceSidebarOpen: u,
            } = this.props,
            { resizedHeight: h } = this.state,
            m = l === eY._Of.VIDEO,
            A = e !== eY.DUB.NO_CHAT && e !== eY.DUB.FULL_SCREEN && null != c,
            f = eY.NJ8.ONYX,
            x = !d || !this.popoutOpen || this.inPopout,
            g = t.getGuildId(),
            C = u && x && null != g;
        return (0, i.jsxs)("div", {
            className: s()(eK.iE, eq[e], eZ[r], {
                [eK.XW]: this.popoutOpen && !this.inPopout && e !== eY.DUB.NO_CHAT && t.isPrivate(),
                [eK.Ki]: m,
                [eK.vc]: a || C,
                [eK.ty]: A,
            }),
            ref: (e) => {
                ((this._wrapperRef.current = e), (this.props.wrapperRef.current = e));
            },
            style: A && null != h ? { minHeight: 230, maxHeight: c, height: h } : void 0,
            children: [
                (0, i.jsx)(p.N, {
                    theme: f,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(eK.ik, a || C || e !== eY.DUB.FULL_SCREEN ? void 0 : eK.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(el.Ay, { timeout: eX, children: (e) => this.renderContent(e) }),
                        }),
                }),
                A &&
                    (0, i.jsx)(eB.A, {
                        minHeight: 230,
                        maxHeight: c,
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
                        C && (0, i.jsx)(q.A, { channel: t, guildId: g, maxWidth: o }),
                        x && a && (0, i.jsx)(eG.A, { channel: t, guild: n, maxWidth: o }),
                    ],
                }),
            ],
        });
    }
}
let e0 = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, N.Ay)(),
        { width: h = 0, height: p = 0, ref: f } = (0, N.Ay)(),
        { ref: x } = (0, N.Ay)(),
        g = (0, W.Us)(),
        C = (0, V.A)(),
        y = (0, d.bG)([eb.Ay], () => (C?.channelId ?? eb.Ay.getVoiceChannelId()) === t.id),
        E = t.isGuildStageVoice();
    (0, Q.A)(E);
    let {
            participants: S,
            filteredParticipants: _,
            participantsVersion: O,
            mode: P,
            layout: M,
            participantsOpen: w,
            chatOpen: G,
            stageAudienceSidebarOpen: k,
            selectedParticipant: B,
        } = (0, d.cf)(
            [eU.A],
            () => {
                let e = g === eY.BRT.POPOUT,
                    n = eU.A.getMode(t.id),
                    i = eU.A.getLayout(t.id, g);
                e && (n = eY._Of.VIDEO);
                let l = n === eY._Of.VIDEO ? i : eY.DUB.MINIMUM;
                e && l !== eY.DUB.FULL_SCREEN && (l = eY.DUB.NO_CHAT);
                let a = E ? eU.A.getStageSpeakerParticipants(t.id) : null,
                    s = n !== eY._Of.VOICE ? eU.A.getSelectedParticipant(t.id) : null;
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
            [g, t.id, E],
        ),
        H = (0, d.yK)([ey.A], () => ey.A.getAllActiveStreams()),
        { selectedStream: Y } = (0, d.cf)(
            [ey.A],
            () => ({ selectedStream: null != B ? ey.A.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        K = (0, d.bG)([ev.A], () => ev.A.getGuild(t.getGuildId())),
        X = (0, d.bG)([ej.default], () => ej.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: Z } = (0, d.cf)([$.A], () => ({
            popoutWindow: $.A.getWindow(eY.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: $.A.getIsAlwaysOnTop(eY.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([eE.A], () => eE.A.can(eY.xBc.CONNECT, t)),
        et = (0, d.bG)([eI.A], () => eI.A.getToastsEnabled(t.id)),
        en = (0, d.bG)([D.default], () => D.default.getAwaitingRemoteSessionInfo()),
        ei = (0, d.bG)([ee.Ay], () => ee.Ay.callHeaderHeight),
        el = l.useCallback((e) => {
            j.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ea = (0, d.bG)([b.A], () => b.A.getFetchState(), []),
        es = (0, v.Ay)(ea);
    l.useEffect(() => {
        ea === b.$.ERROR &&
            es !== b.$.ERROR &&
            (0, m.P0)({ text: e$.intl.string(e$.t["AlJyI+"]), variant: "critical" });
    }, [ea, es]);
    let er = (0, d.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        eo = (0, U.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ec } = (0, L.Ay)(R.A.CHANNEL_CALL),
        ed = T.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eu } = (0, z.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        eh = (0, d.bG)([F.A], () => F.A.isVisible(t.id)),
        ep = (0, d.bG)([F.A], () => {
            let e = F.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        em = (0, ew.j)(),
        eA = (0, ef.d7)(t, y),
        eg = (0, ef.kM)(t),
        eC = (0, ex.F)(g) && eg ? eA : null,
        { theme: eN } = (0, A.wR)();
    return (0, i.jsx)(L.f5, {
        value: ec,
        children: (0, i.jsx)(I.A, {
            page: eY.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eV.qh, {
                children: (0, i.jsxs)(eF.CB, {
                    children: [
                        (0, i.jsx)(eJ, {
                            channel: t,
                            guild: K,
                            hasConnectPermission: J,
                            participantsOpen: w,
                            renderExternalHeader: n,
                            appContext: g,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: Z,
                            selectedStream: Y,
                            mode: P,
                            inCall: y,
                            participants: S,
                            filteredParticipants: _,
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
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: p },
                            callContainerRef: f,
                            channelChatRef: x,
                            width: o,
                            maxHeight: a,
                            forceShowControls: eo,
                            awaitingRemoteSessionInfo: en,
                            currentChannelActivities: ed,
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
};
