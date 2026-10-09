(n.r(t), n.d(t, { IDLE_TIMEOUT: () => eY, default: () => eZ }));
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
    f = n(73153),
    x = n(367513),
    g = n(442433),
    C = n(148494),
    j = n(730852),
    y = n(401843),
    I = n(817281),
    N = n(820284),
    E = n(765671),
    v = n(475743),
    b = n(646865),
    _ = n(10716),
    S = n(795816),
    T = n(933958),
    R = n(47294),
    O = n(793574),
    L = n(666860),
    P = n(688810),
    M = n(139286),
    w = n(587895),
    U = n(235986),
    D = n(47899),
    V = n(643501),
    G = n(857253),
    k = n(652896),
    B = n(279250),
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
    eA = n(12830),
    ef = n(637443),
    ex = n(125248),
    eg = n(616356),
    eC = n(280450),
    ej = n(249288),
    ey = n(696451),
    eI = n(71393),
    eN = n(576705),
    eE = n(309010),
    ev = n(287809),
    eb = n(977997),
    e_ = n(174459),
    eS = n(147036),
    eT = n(625494),
    eR = n(723702),
    eO = n(19575),
    eL = n(475815),
    eP = n(198052),
    eM = n(520698),
    ew = n(43189),
    eU = n(518530),
    eD = n(681281),
    eV = n(587837),
    eG = n(675853),
    ek = n(384059),
    eB = n(480890),
    eF = n(806931),
    ez = n(652215),
    eH = n(660183),
    eW = n(880162);
let eY = 2e3,
    e$ = { [ez.DUB.NORMAL]: eW.qb, [ez.DUB.MINIMUM]: eW.Bp, [ez.DUB.NO_CHAT]: eW.Oo, [ez.DUB.FULL_SCREEN]: eW.iy },
    eK = { [ez.BRT.POPOUT]: eW.SW, [ez.BRT.APP]: null, [ez.BRT.OVERLAY]: null, [ez.BRT.CALL_TILE_POPOUT]: null };
function eX(e) {
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
        u = (0, d.bG)([w.A], () => (l?.type === eF.lp.ACTIVITY ? w.A.getApplication(l.applicationId) : void 0)),
        h = t === ez.DUB.NO_CHAT ? eo.A.Directions.UP : eo.A.Directions.DOWN,
        p = [ez.DUB.FULL_SCREEN, ez.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < ea.vs.NO_INVITE
                ? (0, i.jsx)(ed.A, {
                      channel: n,
                      stream: l?.type === eF.lp.STREAM ? (0, k.Iy)(l.id) : void 0,
                      className: eW.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === ez.rbe.GUILD_VOICE ? ez.liQ.GUILD_CHANNEL : ez.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(U.A, {
                      className: eW.P0,
                      align: U.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(eo.A, {
                          label: p ? eH.intl.string(eH.t.kkKapG) : eH.intl.string(eH.t["5MstTl"]),
                          direction: h,
                          className: eW.jZ,
                          onClick: () => {
                              ((0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.CHAT, p), r());
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eq extends l.PureComponent {
    _prevLayout = ez.DUB.MINIMUM;
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
        (this.currentDocument.addEventListener(eL.Wb, this.handleFullScreenChange),
            e_.default.track(ez.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, L.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eL.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eR.isMac)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l, stageAudienceSidebarOpen: a } = this.props,
            s = this.getRootNode();
        (null != s &&
            e.mode === ez._Of.VIDEO &&
            i === ez._Of.VOICE &&
            (0, eL._U)(s, this.currentDocument) &&
            (0, eL.sP)(s, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout || e.stageAudienceSidebarOpen !== a) &&
                this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && f.h.wait(() => this.handleClosePopout()));
    }
    get nativePopoutSupported() {
        return eR.isPlatformEmbedded && eO.Ay.supportsFeature(ez.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eR.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eH.intl.string(eH.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === ez.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === ez._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === ez._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== ez._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === ez.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === ez.DUB.MINIMUM || e === ez.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case ez.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case ez.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case ez.DUB.NO_CHAT:
            case ez.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eL._U)(e, this.currentDocument) ||
                this.props.layout !== ez.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== ez.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(ez.DUB.FULL_SCREEN), (0, eL.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === ez.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eL.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === ez.DUB.NORMAL ? ez.DUB.NO_CHAT : ez.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (x.A.updateLayout(t.id, e, n),
            e === ez.DUB.FULL_SCREEN && t.isPrivate() && eT._.dispatch(ez.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === ez.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, M.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eF.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eF.GK.CONTEXT_MENU;
        return (0, eB.s)(e, O.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eF.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eF.lp.HIDDEN_STREAM:
            case eF.lp.STREAM:
                (this.trackCallTileContextMenuImpression(e, eF.qs.STREAM),
                    (0, g.L3)(
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
                                        eF.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    ));
                return;
            case eF.lp.USER:
                this.trackCallTileContextMenuImpression(e, eF.qs.USER);
                let u = ev.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, Q.r)(t, u, s, d, (e, t) =>
                            (0, eB.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eF.GK.THREE_DOT,
                                tileType: eF.qs.USER,
                                targetUserId: u.id,
                                location: O.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case ez.rbe.DM:
                            return (0, g.L3)(
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
                                                eF.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case ez.rbe.GROUP_DM:
                            return (0, g.L3)(
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
                                            showChatItems: c === ez.DUB.MINIMUM || c === ez.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eF.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case ez.rbe.GUILD_VOICE:
                        case ez.rbe.GUILD_STAGE_VOICE:
                        case ez.rbe.PUBLIC_THREAD:
                        case ez.rbe.PRIVATE_THREAD:
                            let a = s.getGuildId();
                            return (
                                o()(null != a, "GuildID null for guild voice channel"),
                                (0, g.L3)(
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
                                                    eF.qs.USER,
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
        ((0, eF.Ay)(e) &&
            (0, B.eo)(n, eb.A, eI.A, eN.A, V.default)[0] &&
            (j.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, k._z)(t) === e.id && t.state !== ez.XYD.ENDED).length &&
                (0, y.A9)((0, k.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === ez._Of.VIDEO &&
                (i?.id === e.id ? x.A.selectParticipant(n.id, null) : x.A.selectParticipant(n.id, e.id)));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            (null == n || ey.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, eS.vJ)(n)), Y.openChannelCallPopout(e));
        }
        null == t || (0, b.f)() ? n() : (0, R.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.STAY_ON_TOP, e), Y.setAlwaysOnTop(ez.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        Y.close(ez.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === ez.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return e.isGuildStageVoice()
            ? t
                ? (0, i.jsx)(q.Ti, { channel: e })
                : null
            : t || n === ez.DUB.MINIMUM || n === ez.DUB.NORMAL
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
                e === ez.DUB.FULL_SCREEN
                    ? () => {
                          ((this._prevLayout = ez.DUB.NORMAL), this.handleFullScreen());
                      }
                    : this.handleToggleLayout;
        return !l || t.isGuildStageVoice()
            ? null
            : (0, i.jsx)(eX, {
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
                null != l && l.type !== eF.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(ep.A, {
                          context: (0, eM.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eW.MQ,
                          className: eW.iq,
                          location: O.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                s
                    ? (0, i.jsx)(eh.A, {
                          className: eW.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r
                    ? (0, i.jsx)(eu.A, {
                          themeable: o,
                          popoutOpen: this.popoutOpen,
                          className: eW.iq,
                          onOpenPopout: () => {
                              ((0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.POPOUT, !1), this.handleClosePopout());
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(ec.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eW.iq,
                          onClick: () => {
                              ((0, ek.X)(
                                  O.A.VOICE_CONTROL_TRAY,
                                  ek.O.FULL_SCREEN,
                                  this.props.layout !== ez.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen());
                          },
                      })
                    : null,
            ],
        });
    };
    handleToastClick = (e) => {
        (x.A.updateChatOpen(e.channel_id, !0),
            C.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && l)
            ? null
            : (0, i.jsx)(ew.Ay, {
                  children: (0, i.jsx)(es.A, {
                      className: eW.T6,
                      channelId: n.id,
                      onToastClick: this.handleToastClick,
                  }),
              });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eG.Ay, { children: (0, i.jsx)(ex.A, { callHeight: t.height, channelId: e.id }) });
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
                      className: eW.dL,
                      children: c
                          ? e?.()
                          : (0, i.jsx)(eD.A, {
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
            y = p === ez.DUB.MINIMUM,
            I = y || p === ez.DUB.NORMAL,
            N = l && s === ez._Of.VIDEO,
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
            : (0, i.jsx)(eA.A, {
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
            m = l === ez._Of.VIDEO,
            A = e !== ez.DUB.NO_CHAT && e !== ez.DUB.FULL_SCREEN && null != c,
            f = ez.NJ8.ONYX,
            x = !d || !this.popoutOpen || this.inPopout,
            g = t.getGuildId(),
            C = u && x && null != g;
        return (0, i.jsxs)("div", {
            className: s()(eW.iE, e$[e], eK[r], {
                [eW.XW]: this.popoutOpen && !this.inPopout && e !== ez.DUB.NO_CHAT && t.isPrivate(),
                [eW.Ki]: m,
                [eW.vc]: a || C,
                [eW.ty]: A,
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
                            className: s()(eW.ik, a || C || e !== ez.DUB.FULL_SCREEN ? void 0 : eW.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(ei.Ay, { timeout: eY, children: (e) => this.renderContent(e) }),
                        }),
                }),
                A &&
                    (0, i.jsx)(eV.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsxs)("div", {
                    className: eW.B2,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children: [
                        C && (0, i.jsx)(X.A, { channel: t, guildId: g, maxWidth: o }),
                        x && a && (0, i.jsx)(eU.A, { channel: t, guild: n, maxWidth: o }),
                    ],
                }),
            ],
        });
    }
}
let eZ = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, E.Ay)(),
        { width: h = 0, height: p = 0, ref: f } = (0, E.Ay)(),
        { ref: x } = (0, E.Ay)(),
        g = (0, W.Us)(),
        C = (0, G.A)(),
        j = (0, d.bG)([eE.Ay], () => (C?.channelId ?? eE.Ay.getVoiceChannelId()) === t.id),
        y = t.isGuildStageVoice();
    (0, Z.A)(y);
    let {
            participants: b,
            filteredParticipants: S,
            participantsVersion: R,
            mode: L,
            layout: M,
            participantsOpen: w,
            chatOpen: U,
            stageAudienceSidebarOpen: k,
            selectedParticipant: B,
        } = (0, d.cf)(
            [eP.A],
            () => {
                let e = g === ez.BRT.POPOUT,
                    n = eP.A.getMode(t.id),
                    i = eP.A.getLayout(t.id, g);
                e && (n = ez._Of.VIDEO);
                let l = n === ez._Of.VIDEO ? i : ez.DUB.MINIMUM;
                e && l !== ez.DUB.FULL_SCREEN && (l = ez.DUB.NO_CHAT);
                let a = y ? eP.A.getStageSpeakerParticipants(t.id) : null,
                    s = n !== ez._Of.VOICE ? eP.A.getSelectedParticipant(t.id) : null;
                return (
                    null == s || null == a || a.includes(s) || (s = null),
                    {
                        mode: n,
                        layout: l,
                        selectedParticipant: s,
                        participants: a ?? eP.A.getParticipants(t.id),
                        filteredParticipants: a ?? eP.A.getFilteredParticipants(t.id),
                        participantsOpen: eP.A.getParticipantsOpen(t.id),
                        chatOpen: eP.A.getChatOpen(t.id),
                        stageAudienceSidebarOpen: y && eP.A.getStageAudienceSidebarOpen(t.id),
                        participantsVersion: eP.A.getParticipantsVersion(t.id),
                    }
                );
            },
            [g, t.id, y],
        ),
        H = (0, d.yK)([eg.A], () => eg.A.getAllActiveStreams()),
        { selectedStream: Y } = (0, d.cf)(
            [eg.A],
            () => ({ selectedStream: null != B ? eg.A.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        K = (0, d.bG)([eI.A], () => eI.A.getGuild(t.getGuildId())),
        X = (0, d.bG)([eC.default], () => eC.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: Q } = (0, d.cf)([$.A], () => ({
            popoutWindow: $.A.getWindow(ez.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: $.A.getIsAlwaysOnTop(ez.MLl.CHANNEL_CALL_POPOUT),
        })),
        ee = (0, d.bG)([eN.A], () => eN.A.can(ez.xBc.CONNECT, t)),
        et = (0, d.bG)([ej.A], () => ej.A.getToastsEnabled(t.id)),
        en = (0, d.bG)([V.default], () => V.default.getAwaitingRemoteSessionInfo()),
        ei = (0, d.bG)([J.Ay], () => J.Ay.callHeaderHeight),
        el = l.useCallback((e) => {
            I.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ea = (0, d.bG)([_.A], () => _.A.getFetchState(), []),
        es = (0, v.Ay)(ea);
    l.useEffect(() => {
        ea === _.$.ERROR && es !== _.$.ERROR && (0, m.P0)((0, m.ox)(eH.intl.string(eH.t["AlJyI+"]), m.Ck.FAILURE));
    }, [ea, es]);
    let er = (0, d.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        eo = (0, D.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ec } = (0, P.Ay)(O.A.CHANNEL_CALL),
        ed = T.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eu } = (0, z.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        eh = (0, d.bG)([F.A], () => F.A.isVisible(t.id)),
        ep = (0, d.bG)([F.A], () => {
            let e = F.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        eA = (0, ef.d7)(t, j),
        ex = (0, ef.kM)(t),
        ey = (0, em.F)(g) && ex ? eA : null,
        { theme: ev } = (0, A.wR)();
    return (0, i.jsx)(P.f5, {
        value: ec,
        children: (0, i.jsx)(N.A, {
            page: ez.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(ew.qh, {
                children: (0, i.jsxs)(eG.CB, {
                    children: [
                        (0, i.jsx)(eq, {
                            channel: t,
                            guild: K,
                            hasConnectPermission: ee,
                            participantsOpen: w,
                            renderExternalHeader: n,
                            appContext: g,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: Q,
                            selectedStream: Y,
                            mode: L,
                            inCall: j,
                            participants: b,
                            filteredParticipants: S,
                            participantsVersion: R,
                            layout: M,
                            chatOpen: U,
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
                            theme: ev,
                            canPopout: s,
                            popoutType: r,
                            guildRoomVisible: eu && eh && !y,
                            isPlacingNote: ep,
                            currentVoiceChannelApplicationId: ey,
                            stageAudienceSidebarOpen: k,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eG.wQ, {}),
                        (0, i.jsx)(ew.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
