(n.r(t), n.d(t, { IDLE_TIMEOUT: () => eW, default: () => eq }));
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
    m = n(376357),
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
    B = n(558076),
    F = n(360729),
    z = n(700948),
    H = n(267102),
    W = n(574172),
    Y = n(869146),
    $ = n(976860),
    K = n(75139),
    X = n(410828),
    q = n(940518),
    Z = n(326567),
    Q = n(964404),
    J = n(306852),
    ee = n(105225),
    et = n(874739),
    en = n(461782),
    ei = n(447404),
    el = n(401685),
    ea = n(20465),
    es = n(156652),
    er = n(622770),
    eo = n(423562),
    ec = n(520006),
    ed = n(128286),
    eu = n(619344),
    eh = n(821747),
    ep = n(488947),
    em = n(12830),
    eA = n(637443),
    ef = n(125248),
    ex = n(616356),
    eg = n(280450),
    eC = n(249288),
    ej = n(696451),
    ey = n(71393),
    eI = n(576705),
    eN = n(309010),
    eE = n(287809),
    ev = n(977997),
    eb = n(174459),
    e_ = n(147036),
    eS = n(625494),
    eT = n(723702),
    eR = n(19575),
    eO = n(475815),
    eL = n(198052),
    eP = n(520698),
    eM = n(43189),
    ew = n(518530),
    eU = n(681281),
    eD = n(587837),
    eV = n(675853),
    eG = n(384059),
    ek = n(480890),
    eB = n(806931),
    eF = n(652215),
    ez = n(660183),
    eH = n(880162);
let eW = 2e3,
    eY = { [eF.DUB.NORMAL]: eH.qb, [eF.DUB.MINIMUM]: eH.Bp, [eF.DUB.NO_CHAT]: eH.Oo, [eF.DUB.FULL_SCREEN]: eH.iy },
    e$ = { [eF.BRT.POPOUT]: eH.SW, [eF.BRT.APP]: null, [eF.BRT.OVERLAY]: null, [eF.BRT.CALL_TILE_POPOUT]: null };
function eK(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, el.Bx)(),
        u = (0, d.bG)([M.A], () => (l?.type === eB.lp.ACTIVITY ? M.A.getApplication(l.applicationId) : void 0)),
        h = t === eF.DUB.NO_CHAT ? er.A.Directions.UP : er.A.Directions.DOWN,
        p = [eF.DUB.FULL_SCREEN, eF.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < el.vs.NO_INVITE
                ? (0, i.jsx)(ec.A, {
                      channel: n,
                      stream: l?.type === eB.lp.STREAM ? (0, G.Iy)(l.id) : void 0,
                      className: eH.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eF.rbe.GUILD_VOICE ? eF.liQ.GUILD_CHANNEL : eF.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(w.A, {
                      className: eH.P0,
                      align: w.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(er.A, {
                          label: p ? ez.intl.string(ez.t.kkKapG) : ez.intl.string(ez.t["5MstTl"]),
                          direction: h,
                          className: eH.jZ,
                          onClick: () => {
                              ((0, eG.X)(R.A.VOICE_CONTROL_TRAY, eG.O.CHAT, p), r());
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eX extends l.PureComponent {
    _prevLayout = eF.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: Q.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        (this.currentDocument.addEventListener(eO.Wb, this.handleFullScreenChange),
            eb.default.track(eF.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, O.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eO.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eT.isMac)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l, stageAudienceSidebarOpen: a } = this.props,
            s = this.getRootNode();
        (null != s &&
            e.mode === eF._Of.VIDEO &&
            i === eF._Of.VOICE &&
            (0, eO._U)(s, this.currentDocument) &&
            (0, eO.sP)(s, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout || e.stageAudienceSidebarOpen !== a) &&
                this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eT.isPlatformEmbedded && eR.Ay.supportsFeature(eF.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eT.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: ez.intl.string(ez.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eF.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eF._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eF._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eF._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eF.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eF.DUB.MINIMUM || e === eF.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eF.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eF.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eF.DUB.NO_CHAT:
            case eF.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eO._U)(e, this.currentDocument) ||
                this.props.layout !== eF.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eF.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eF.DUB.FULL_SCREEN), (0, eO.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eF.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eO.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eF.DUB.NORMAL ? eF.DUB.NO_CHAT : eF.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (f.A.updateLayout(t.id, e, n),
            e === eF.DUB.FULL_SCREEN && t.isPrivate() && eS._.dispatch(eF.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eF.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, P.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eB.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eB.GK.CONTEXT_MENU;
        return (0, ek.s)(e, R.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eB.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eB.lp.HIDDEN_STREAM:
            case eB.lp.STREAM:
                (this.trackCallTileContextMenuImpression(e, eB.qs.STREAM),
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
                                        eB.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    ));
                return;
            case eB.lp.USER:
                this.trackCallTileContextMenuImpression(e, eB.qs.USER);
                let u = eE.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, Z.r)(t, u, s, d, (e, t) =>
                            (0, ek.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eB.GK.THREE_DOT,
                                tileType: eB.qs.USER,
                                targetUserId: u.id,
                                location: R.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eF.rbe.DM:
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
                                                eB.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eF.rbe.GROUP_DM:
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
                                            showChatItems: c === eF.DUB.MINIMUM || c === eF.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eB.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eF.rbe.GUILD_VOICE:
                        case eF.rbe.GUILD_STAGE_VOICE:
                        case eF.rbe.PUBLIC_THREAD:
                        case eF.rbe.PRIVATE_THREAD:
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
                                                    eB.qs.USER,
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
        ((0, eB.Ay)(e) &&
            (0, k.eo)(n, ev.A, ey.A, eI.A, D.default)[0] &&
            (C.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== eF.XYD.ENDED).length &&
                (0, j.A9)((0, G.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eF._Of.VIDEO &&
                (i?.id === e.id ? f.A.selectParticipant(n.id, null) : f.A.selectParticipant(n.id, e.id)));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, _.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            (null == n || ej.Ay.isCurrentUserGuest(n) || (0, $.pX)((0, e_.vJ)(n)), W.openChannelCallPopout(e));
        }
        null == t || (0, v.f)() ? n() : (0, T.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, eG.X)(R.A.VOICE_CONTROL_TRAY, eG.O.STAY_ON_TOP, e), W.setAlwaysOnTop(eF.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        W.close(eF.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eF.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return e.isGuildStageVoice()
            ? t
                ? (0, i.jsx)(X.Ti, { channel: e })
                : null
            : t || n === eF.DUB.MINIMUM || n === eF.DUB.NORMAL
              ? (0, i.jsx)(ee.Ay, {
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
                e === eF.DUB.FULL_SCREEN
                    ? () => {
                          ((this._prevLayout = eF.DUB.NORMAL), this.handleFullScreen());
                      }
                    : this.handleToggleLayout;
        return !l || t.isGuildStageVoice()
            ? null
            : (0, i.jsx)(eK, {
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
                null != l && l.type !== eB.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(eh.A, {
                          context: (0, eP.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eH.MQ,
                          className: eH.iq,
                          location: R.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                s
                    ? (0, i.jsx)(eu.A, {
                          className: eH.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r
                    ? (0, i.jsx)(ed.A, {
                          themeable: o,
                          popoutOpen: this.popoutOpen,
                          className: eH.iq,
                          onOpenPopout: () => {
                              ((0, eG.X)(R.A.VOICE_CONTROL_TRAY, eG.O.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, eG.X)(R.A.VOICE_CONTROL_TRAY, eG.O.POPOUT, !1), this.handleClosePopout());
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(eo.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eH.iq,
                          onClick: () => {
                              ((0, eG.X)(
                                  R.A.VOICE_CONTROL_TRAY,
                                  eG.O.FULL_SCREEN,
                                  this.props.layout !== eF.DUB.FULL_SCREEN,
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
            : (0, i.jsx)(eM.Ay, {
                  children: (0, i.jsx)(ea.A, {
                      className: eH.T6,
                      channelId: n.id,
                      onToastClick: this.handleToastClick,
                  }),
              });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eV.Ay, { children: (0, i.jsx)(ef.A, { callHeight: t.height, channelId: e.id }) });
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
            ? (0, i.jsx)(ei.A, {
                  children: (0, i.jsx)("div", {
                      className: eH.dL,
                      children: c
                          ? e?.()
                          : (0, i.jsx)(eU.A, {
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
            y = p === eF.DUB.MINIMUM,
            I = y || p === eF.DUB.NORMAL,
            N = l && s === eF._Of.VIDEO,
            E = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let v = !l || !(this.popoutOpen && !this.inPopout),
            b = !m && l && !y && e.idle,
            _ = (0, i.jsx)(et.A, {
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
                ? (S = (0, i.jsx)(z.A, { channelId: u.id, popoutType: t, idle: e.idle }))
                : j &&
                  (S = (0, i.jsx)(X.nM, {
                      channel: u,
                      inCall: l,
                      hasConnectPermission: a,
                      hasSpeakers: o.length > 0,
                      children: _,
                  })),
            (0, i.jsx)(es.A, {
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
            : (0, i.jsx)(em.A, {
                  applicationId: t,
                  channelId: e.id,
                  guildId: e.guild_id ?? void 0,
                  renderPipOverlay: (t, n) => {
                      let { width: l, height: a } = n;
                      return (0, i.jsx)(J.A, {
                          channel: e,
                          participants: t,
                          width: l,
                          height: a,
                          onSelectParticipant: this.handleSelectParticipant,
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
            m = l === eF._Of.VIDEO,
            A = e !== eF.DUB.NO_CHAT && e !== eF.DUB.FULL_SCREEN && null != c,
            f = eF.NJ8.ONYX,
            x = !d || !this.popoutOpen || this.inPopout,
            g = t.getGuildId(),
            C = u && x && null != g;
        return (0, i.jsxs)("div", {
            className: s()(eH.iE, eY[e], e$[r], {
                [eH.XW]: this.popoutOpen && !this.inPopout && e !== eF.DUB.NO_CHAT && t.isPrivate(),
                [eH.Ki]: m,
                [eH.vc]: a || C,
                [eH.ty]: A,
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
                            className: s()(eH.ik, a || C || e !== eF.DUB.FULL_SCREEN ? void 0 : eH.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(en.Ay, { timeout: eW, children: (e) => this.renderContent(e) }),
                        }),
                }),
                A &&
                    (0, i.jsx)(eD.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsxs)("div", {
                    className: eH.B2,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children: [
                        C && (0, i.jsx)(K.A, { channel: t, guildId: g, maxWidth: o }),
                        x && a && (0, i.jsx)(ew.A, { channel: t, guild: n, maxWidth: o }),
                    ],
                }),
            ],
        });
    }
}
let eq = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, N.Ay)(),
        { width: h = 0, height: p = 0, ref: f } = (0, N.Ay)(),
        { ref: x } = (0, N.Ay)(),
        g = (0, H.Us)(),
        C = (0, V.A)(),
        j = (0, d.bG)([eN.Ay], () => (C?.channelId ?? eN.Ay.getVoiceChannelId()) === t.id),
        v = t.isGuildStageVoice();
    (0, q.A)(v);
    let {
            participants: _,
            filteredParticipants: T,
            participantsVersion: O,
            mode: P,
            layout: M,
            participantsOpen: w,
            chatOpen: G,
            stageAudienceSidebarOpen: k,
            selectedParticipant: z,
        } = (0, d.cf)(
            [eL.A],
            () => {
                let e = g === eF.BRT.POPOUT,
                    n = eL.A.getMode(t.id),
                    i = eL.A.getLayout(t.id, g);
                e && (n = eF._Of.VIDEO);
                let l = n === eF._Of.VIDEO ? i : eF.DUB.MINIMUM;
                e && l !== eF.DUB.FULL_SCREEN && (l = eF.DUB.NO_CHAT);
                let a = v ? eL.A.getStageSpeakerParticipants(t.id) : null,
                    s = n !== eF._Of.VOICE ? eL.A.getSelectedParticipant(t.id) : null;
                return (
                    null == s || null == a || a.includes(s) || (s = null),
                    {
                        mode: n,
                        layout: l,
                        selectedParticipant: s,
                        participants: a ?? eL.A.getParticipants(t.id),
                        filteredParticipants: a ?? eL.A.getFilteredParticipants(t.id),
                        participantsOpen: eL.A.getParticipantsOpen(t.id),
                        chatOpen: eL.A.getChatOpen(t.id),
                        stageAudienceSidebarOpen: v && eL.A.getStageAudienceSidebarOpen(t.id),
                        participantsVersion: eL.A.getParticipantsVersion(t.id),
                    }
                );
            },
            [g, t.id, v],
        ),
        W = (0, d.yK)([ex.A], () => ex.A.getAllActiveStreams()),
        { selectedStream: $ } = (0, d.cf)(
            [ex.A],
            () => ({ selectedStream: null != z ? ex.A.getActiveStreamForStreamKey(z.id) : null }),
            [z],
        ),
        K = (0, d.bG)([ey.A], () => ey.A.getGuild(t.getGuildId())),
        X = (0, d.bG)([eg.default], () => eg.default.getId()),
        { popoutWindow: Z, popoutWindowAlwaysOnTop: J } = (0, d.cf)([Y.A], () => ({
            popoutWindow: Y.A.getWindow(eF.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: Y.A.getIsAlwaysOnTop(eF.MLl.CHANNEL_CALL_POPOUT),
        })),
        ee = (0, d.bG)([eI.A], () => eI.A.can(eF.xBc.CONNECT, t)),
        et = (0, d.bG)([eC.A], () => eC.A.getToastsEnabled(t.id)),
        en = (0, d.bG)([D.default], () => D.default.getAwaitingRemoteSessionInfo()),
        ei = (0, d.bG)([Q.Ay], () => Q.Ay.callHeaderHeight),
        el = l.useCallback((e) => {
            y.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ea = (0, d.bG)([b.A], () => b.A.getFetchState(), []),
        es = (0, E.Ay)(ea);
    l.useEffect(() => {
        ea === b.$.ERROR && es !== b.$.ERROR && (0, m.P0)((0, m.ox)(ez.intl.string(ez.t["AlJyI+"]), m.Ck.FAILURE));
    }, [ea, es]);
    let er = (0, d.bG)([S.Ay], () => S.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        eo = (0, U.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ec } = (0, L.Ay)(R.A.CHANNEL_CALL),
        ed = S.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eu } = (0, F.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        eh = (0, d.bG)([B.A], () => B.A.isVisible(t.id)),
        em = (0, d.bG)([B.A], () => {
            let e = B.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        ef = (0, eA.d7)(t, j),
        ej = (0, eA.kM)(t),
        eE = (0, ep.F)(g) && ej ? ef : null,
        { theme: ev } = (0, A.wR)();
    return (0, i.jsx)(L.f5, {
        value: ec,
        children: (0, i.jsx)(I.A, {
            page: eF.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eM.qh, {
                children: (0, i.jsxs)(eV.CB, {
                    children: [
                        (0, i.jsx)(eX, {
                            channel: t,
                            guild: K,
                            hasConnectPermission: ee,
                            participantsOpen: w,
                            renderExternalHeader: n,
                            appContext: g,
                            popoutWindow: Z,
                            popoutWindowAlwaysOnTop: J,
                            selectedStream: $,
                            mode: P,
                            inCall: j,
                            participants: _,
                            filteredParticipants: T,
                            participantsVersion: O,
                            layout: M,
                            chatOpen: G,
                            maxSidebarWidth: o - 550,
                            currentUserId: X,
                            selectedParticipant: z,
                            allActiveStreams: W,
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
                            theme: ev,
                            canPopout: s,
                            popoutType: r,
                            guildRoomVisible: eu && eh && !v,
                            isPlacingNote: em,
                            currentVoiceChannelApplicationId: eE,
                            stageAudienceSidebarOpen: k,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eV.wQ, {}),
                        (0, i.jsx)(eM.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
