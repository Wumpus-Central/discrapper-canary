(n.r(t), n.d(t, { IDLE_TIMEOUT: () => e$, default: () => eQ }));
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
    j = n(401843),
    y = n(817281),
    I = n(820284),
    N = n(765671),
    E = n(475743),
    v = n(646865),
    b = n(10716),
    _ = n(795816),
    S = n(933958),
    T = n(47294),
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
    X = n(75139),
    q = n(410828),
    Z = n(940518),
    Q = n(326567),
    J = n(964404),
    ee = n(306852),
    et = n(105225),
    en = n(874739),
    ei = n(461782),
    el = n(447404),
    ea = n(401685),
    es = n(20465),
    er = n(156652),
    eo = n(622770),
    ec = n(423562),
    ed = n(520006),
    eu = n(128286),
    eh = n(619344),
    ep = n(821747),
    em = n(488947),
    eA = n(291706),
    ef = n(12830),
    ex = n(637443),
    eg = n(125248),
    eC = n(616356),
    ej = n(280450),
    ey = n(249288),
    eI = n(696451),
    eN = n(71393),
    eE = n(576705),
    ev = n(309010),
    eb = n(287809),
    e_ = n(977997),
    eS = n(174459),
    eT = n(147036),
    eR = n(625494),
    eO = n(723702),
    eL = n(19575),
    eP = n(475815),
    eM = n(198052),
    ew = n(520698),
    eU = n(43189),
    eD = n(518530),
    eV = n(681281),
    eG = n(587837),
    ek = n(675853),
    eB = n(384059),
    eF = n(480890),
    ez = n(806931),
    eH = n(652215),
    eW = n(660183),
    eY = n(880162);
let e$ = 2e3,
    eK = { [eH.DUB.NORMAL]: eY.qb, [eH.DUB.MINIMUM]: eY.Bp, [eH.DUB.NO_CHAT]: eY.Oo, [eH.DUB.FULL_SCREEN]: eY.iy },
    eX = { [eH.BRT.POPOUT]: eY.SW, [eH.BRT.APP]: null, [eH.BRT.OVERLAY]: null, [eH.BRT.CALL_TILE_POPOUT]: null };
function eq(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, ea.Bx)(),
        u = (0, d.bG)([M.A], () => (l?.type === ez.lp.ACTIVITY ? M.A.getApplication(l.applicationId) : void 0)),
        h = t === eH.DUB.NO_CHAT ? eo.A.Directions.UP : eo.A.Directions.DOWN,
        p = [eH.DUB.FULL_SCREEN, eH.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < ea.vs.NO_INVITE
                ? (0, i.jsx)(ed.A, {
                      channel: n,
                      stream: l?.type === ez.lp.STREAM ? (0, G.Iy)(l.id) : void 0,
                      className: eY.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eH.rbe.GUILD_VOICE ? eH.liQ.GUILD_CHANNEL : eH.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(w.A, {
                      className: eY.P0,
                      align: w.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(eo.A, {
                          label: p ? eW.intl.string(eW.t.kkKapG) : eW.intl.string(eW.t["5MstTl"]),
                          direction: h,
                          className: eY.jZ,
                          onClick: () => {
                              ((0, eB.X)(R.A.VOICE_CONTROL_TRAY, eB.O.CHAT, p), r());
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eZ extends l.PureComponent {
    _prevLayout = eH.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: J.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        (this.currentDocument.addEventListener(eP.Wb, this.handleFullScreenChange),
            eS.default.track(eH.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, O.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eP.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eO.isMac)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l, stageAudienceSidebarOpen: a } = this.props,
            s = this.getRootNode();
        (null != s &&
            e.mode === eH._Of.VIDEO &&
            i === eH._Of.VOICE &&
            (0, eP._U)(s, this.currentDocument) &&
            (0, eP.sP)(s, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout || e.stageAudienceSidebarOpen !== a) &&
                this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eO.isPlatformEmbedded && eL.Ay.supportsFeature(eH.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eO.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eW.intl.string(eW.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eH.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eH._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eH._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eH._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eH.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eH.DUB.MINIMUM || e === eH.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eH.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eH.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eH.DUB.NO_CHAT:
            case eH.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eP._U)(e, this.currentDocument) ||
                this.props.layout !== eH.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eH.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eH.DUB.FULL_SCREEN), (0, eP.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eH.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eP.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eH.DUB.NORMAL ? eH.DUB.NO_CHAT : eH.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (f.A.updateLayout(t.id, e, n),
            e === eH.DUB.FULL_SCREEN && t.isPrivate() && eR._.dispatch(eH.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eH.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, P.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== ez.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ez.GK.CONTEXT_MENU;
        return (0, eF.s)(e, R.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== ez.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case ez.lp.HIDDEN_STREAM:
            case ez.lp.STREAM:
                (this.trackCallTileContextMenuImpression(e, ez.qs.STREAM),
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
                                        ez.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    ));
                return;
            case ez.lp.USER:
                this.trackCallTileContextMenuImpression(e, ez.qs.USER);
                let u = eb.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, Q.r)(t, u, s, d, (e, t) =>
                            (0, eF.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: ez.GK.THREE_DOT,
                                tileType: ez.qs.USER,
                                targetUserId: u.id,
                                location: R.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eH.rbe.DM:
                            return (0, x.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("463317"),
                                        n.e("926132"),
                                        n.e("146652"),
                                        n.e("893190"),
                                        n.e("391763"),
                                        n.e("189673"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("955557"),
                                        n.e("691994"),
                                        n.e("229787"),
                                        n.e("576665"),
                                        n.e("715038"),
                                        n.e("947502"),
                                        n.e("245996"),
                                        n.e("529422"),
                                        n.e("823427"),
                                        n.e("965789"),
                                        n.e("242204"),
                                        n.e("307059"),
                                        n.e("198415"),
                                        n.e("935483"),
                                        n.e("21106"),
                                        n.e("368358"),
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
                                                ez.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eH.rbe.GROUP_DM:
                            return (0, x.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("463317"),
                                        n.e("926132"),
                                        n.e("146652"),
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
                                        n.e("528864"),
                                    ]).then(n.bind(n, 778595));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === eH.DUB.MINIMUM || c === eH.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                ez.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eH.rbe.GUILD_VOICE:
                        case eH.rbe.GUILD_STAGE_VOICE:
                        case eH.rbe.PUBLIC_THREAD:
                        case eH.rbe.PRIVATE_THREAD:
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
                                            n.e("717334"),
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
                                                    ez.qs.USER,
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
        ((0, ez.Ay)(e) &&
            (0, k.eo)(n, e_.A, eN.A, eE.A, D.default)[0] &&
            (C.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== eH.XYD.ENDED).length &&
                (0, j.A9)((0, G.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eH._Of.VIDEO &&
                (i?.id === e.id ? f.A.selectParticipant(n.id, null) : f.A.selectParticipant(n.id, e.id)));
    };
    handleSelectVoiceChannelAppPipParticipant = (e, t) => {
        let { channel: n, selectedParticipant: i, guildRoomVisible: l } = this.props;
        ((0, eA.s)(n.id), l && (0, B.zD)(n.id), i?.id !== e.id && this.handleSelectParticipant(e, t));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, _.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            (null == n || eI.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, eT.vJ)(n)), Y.openChannelCallPopout(e));
        }
        null == t || (0, v.f)() ? n() : (0, T.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, eB.X)(R.A.VOICE_CONTROL_TRAY, eB.O.STAY_ON_TOP, e), Y.setAlwaysOnTop(eH.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        Y.close(eH.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eH.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return e.isGuildStageVoice()
            ? t
                ? (0, i.jsx)(q.Ti, { channel: e })
                : null
            : t || n === eH.DUB.MINIMUM || n === eH.DUB.NORMAL
              ? (0, i.jsx)(et.Ay, {
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
                e === eH.DUB.FULL_SCREEN
                    ? () => {
                          ((this._prevLayout = eH.DUB.NORMAL), this.handleFullScreen());
                      }
                    : this.handleToggleLayout;
        return !l || t.isGuildStageVoice()
            ? null
            : (0, i.jsx)(eq, {
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
                null != l && l.type !== ez.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(ep.A, {
                          context: (0, ew.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eY.MQ,
                          className: eY.iq,
                          location: R.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                s
                    ? (0, i.jsx)(eh.A, {
                          className: eY.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r
                    ? (0, i.jsx)(eu.A, {
                          themeable: o,
                          popoutOpen: this.popoutOpen,
                          className: eY.iq,
                          onOpenPopout: () => {
                              ((0, eB.X)(R.A.VOICE_CONTROL_TRAY, eB.O.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, eB.X)(R.A.VOICE_CONTROL_TRAY, eB.O.POPOUT, !1), this.handleClosePopout());
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(ec.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eY.iq,
                          onClick: () => {
                              ((0, eB.X)(
                                  R.A.VOICE_CONTROL_TRAY,
                                  eB.O.FULL_SCREEN,
                                  this.props.layout !== eH.DUB.FULL_SCREEN,
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
            : (0, i.jsx)(eU.Ay, {
                  children: (0, i.jsx)(es.A, {
                      className: eY.T6,
                      channelId: n.id,
                      onToastClick: this.handleToastClick,
                  }),
              });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(ek.Ay, { children: (0, i.jsx)(eg.A, { callHeight: t.height, channelId: e.id }) });
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
            ? (0, i.jsx)(el.A, {
                  children: (0, i.jsx)("div", {
                      className: eY.dL,
                      children: c
                          ? e?.()
                          : (0, i.jsx)(eV.A, {
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
            j = u.isGuildStageVoice(),
            y = p === eH.DUB.MINIMUM,
            I = y || p === eH.DUB.NORMAL,
            N = l && s === eH._Of.VIDEO,
            E = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let v = !l || !(this.popoutOpen && !this.inPopout),
            b = !m && l && !y && e.idle,
            _ = (0, i.jsx)(en.A, {
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
                showParticipants: r && (!I || E),
                popoutType: t,
                awaitingRemoteSessionInfo: A,
                callContainerDimensions: x,
            }),
            S = _;
        return (
            g
                ? (S = (0, i.jsx)(H.A, { channelId: u.id, popoutType: t, idle: e.idle }))
                : j &&
                  (S = (0, i.jsx)(q.nM, {
                      channel: u,
                      inCall: l,
                      hasConnectPermission: a,
                      hasSpeakers: o.length > 0,
                      children: _,
                  })),
            (0, i.jsx)(er.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() || j ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !l || y,
                hideControls: C,
                idle: b,
                children: v && (this.renderVoiceChannelAppSurface() ?? S),
            })
        );
    }
    renderVoiceChannelAppSurface() {
        let { channel: e, currentVoiceChannelApplicationId: t } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(ef.A, {
                  applicationId: t,
                  channelId: e.id,
                  guildId: e.guild_id ?? void 0,
                  renderPipOverlay: (t, n) => {
                      let { width: l, height: a } = n;
                      return (0, i.jsx)(ee.A, {
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
            m = l === eH._Of.VIDEO,
            A = e !== eH.DUB.NO_CHAT && e !== eH.DUB.FULL_SCREEN && null != c,
            f = eH.NJ8.ONYX,
            x = !d || !this.popoutOpen || this.inPopout,
            g = t.getGuildId(),
            C = u && x && null != g;
        return (0, i.jsxs)("div", {
            className: s()(eY.iE, eK[e], eX[r], {
                [eY.XW]: this.popoutOpen && !this.inPopout && e !== eH.DUB.NO_CHAT && t.isPrivate(),
                [eY.Ki]: m,
                [eY.vc]: a || C,
                [eY.ty]: A,
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
                            className: s()(eY.ik, a || C || e !== eH.DUB.FULL_SCREEN ? void 0 : eY.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(ei.Ay, { timeout: e$, children: (e) => this.renderContent(e) }),
                        }),
                }),
                A &&
                    (0, i.jsx)(eG.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsxs)("div", {
                    className: eY.B2,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children: [
                        C && (0, i.jsx)(X.A, { channel: t, guildId: g, maxWidth: o }),
                        x && a && (0, i.jsx)(eD.A, { channel: t, guild: n, maxWidth: o }),
                    ],
                }),
            ],
        });
    }
}
let eQ = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, N.Ay)(),
        { width: h = 0, height: p = 0, ref: f } = (0, N.Ay)(),
        { ref: x } = (0, N.Ay)(),
        g = (0, W.Us)(),
        C = (0, V.A)(),
        j = (0, d.bG)([ev.Ay], () => (C?.channelId ?? ev.Ay.getVoiceChannelId()) === t.id),
        v = t.isGuildStageVoice();
    (0, Z.A)(v);
    let {
            participants: _,
            filteredParticipants: T,
            participantsVersion: O,
            mode: P,
            layout: M,
            participantsOpen: w,
            chatOpen: G,
            stageAudienceSidebarOpen: k,
            selectedParticipant: B,
        } = (0, d.cf)(
            [eM.A],
            () => {
                let e = g === eH.BRT.POPOUT,
                    n = eM.A.getMode(t.id),
                    i = eM.A.getLayout(t.id, g);
                e && (n = eH._Of.VIDEO);
                let l = n === eH._Of.VIDEO ? i : eH.DUB.MINIMUM;
                e && l !== eH.DUB.FULL_SCREEN && (l = eH.DUB.NO_CHAT);
                let a = v ? eM.A.getStageSpeakerParticipants(t.id) : null,
                    s = n !== eH._Of.VOICE ? eM.A.getSelectedParticipant(t.id) : null;
                return (
                    null == s || null == a || a.includes(s) || (s = null),
                    {
                        mode: n,
                        layout: l,
                        selectedParticipant: s,
                        participants: a ?? eM.A.getParticipants(t.id),
                        filteredParticipants: a ?? eM.A.getFilteredParticipants(t.id),
                        participantsOpen: eM.A.getParticipantsOpen(t.id),
                        chatOpen: eM.A.getChatOpen(t.id),
                        stageAudienceSidebarOpen: v && eM.A.getStageAudienceSidebarOpen(t.id),
                        participantsVersion: eM.A.getParticipantsVersion(t.id),
                    }
                );
            },
            [g, t.id, v],
        ),
        H = (0, d.yK)([eC.A], () => eC.A.getAllActiveStreams()),
        { selectedStream: Y } = (0, d.cf)(
            [eC.A],
            () => ({ selectedStream: null != B ? eC.A.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        K = (0, d.bG)([eN.A], () => eN.A.getGuild(t.getGuildId())),
        X = (0, d.bG)([ej.default], () => ej.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: Q } = (0, d.cf)([$.A], () => ({
            popoutWindow: $.A.getWindow(eH.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: $.A.getIsAlwaysOnTop(eH.MLl.CHANNEL_CALL_POPOUT),
        })),
        ee = (0, d.bG)([eE.A], () => eE.A.can(eH.xBc.CONNECT, t)),
        et = (0, d.bG)([ey.A], () => ey.A.getToastsEnabled(t.id)),
        en = (0, d.bG)([D.default], () => D.default.getAwaitingRemoteSessionInfo()),
        ei = (0, d.bG)([J.Ay], () => J.Ay.callHeaderHeight),
        el = l.useCallback((e) => {
            y.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ea = (0, d.bG)([b.A], () => b.A.getFetchState(), []),
        es = (0, E.Ay)(ea);
    l.useEffect(() => {
        ea === b.$.ERROR &&
            es !== b.$.ERROR &&
            (0, m.P0)({ text: eW.intl.string(eW.t["AlJyI+"]), variant: "critical" });
    }, [ea, es]);
    let er = (0, d.bG)([S.Ay], () => S.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        eo = (0, U.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ec } = (0, L.Ay)(R.A.CHANNEL_CALL),
        ed = S.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eu } = (0, z.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        eh = (0, d.bG)([F.A], () => F.A.isVisible(t.id)),
        ep = (0, d.bG)([F.A], () => {
            let e = F.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        eA = (0, ex.d7)(t, j),
        ef = (0, ex.kM)(t),
        eg = (0, em.F)(g) && ef ? eA : null,
        { theme: eI } = (0, A.wR)();
    return (0, i.jsx)(L.f5, {
        value: ec,
        children: (0, i.jsx)(I.A, {
            page: eH.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eU.qh, {
                children: (0, i.jsxs)(ek.CB, {
                    children: [
                        (0, i.jsx)(eZ, {
                            channel: t,
                            guild: K,
                            hasConnectPermission: ee,
                            participantsOpen: w,
                            renderExternalHeader: n,
                            appContext: g,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: Q,
                            selectedStream: Y,
                            mode: P,
                            inCall: j,
                            participants: _,
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
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: p },
                            callContainerRef: f,
                            channelChatRef: x,
                            width: o,
                            maxHeight: a,
                            forceShowControls: eo,
                            awaitingRemoteSessionInfo: en,
                            currentChannelActivities: ed,
                            theme: eI,
                            canPopout: s,
                            popoutType: r,
                            guildRoomVisible: eu && eh && !v,
                            isPlacingNote: ep,
                            currentVoiceChannelApplicationId: eg,
                            stageAudienceSidebarOpen: k,
                        }),
                        !t.isPrivate() && (0, i.jsx)(ek.wQ, {}),
                        (0, i.jsx)(eU.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
