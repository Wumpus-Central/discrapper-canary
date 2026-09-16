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
    m = n(691540),
    A = n(857250),
    f = n(97483),
    x = n(38021),
    g = n(228366),
    C = n(367513),
    y = n(442433),
    j = n(148494),
    I = n(730852),
    N = n(401843),
    v = n(817281),
    E = n(820284),
    b = n(765671),
    _ = n(475743),
    T = n(646865),
    S = n(10716),
    R = n(795816),
    L = n(933958),
    O = n(47294),
    P = n(793574),
    M = n(95561),
    w = n(688810),
    U = n(139286),
    D = n(587895),
    V = n(235986),
    k = n(47899),
    G = n(643501),
    B = n(857253),
    F = n(652896),
    z = n(279250),
    H = n(558076),
    W = n(360729),
    Y = n(700948),
    $ = n(267102),
    K = n(574172),
    X = n(869146),
    q = n(976860),
    Z = n(326567),
    Q = n(742023),
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
    ey = n(696451),
    ej = n(71393),
    eI = n(576705),
    eN = n(309010),
    ev = n(287809),
    eE = n(977997),
    eb = n(174459),
    e_ = n(147036),
    eT = n(625494),
    eS = n(723702),
    eR = n(19575),
    eL = n(475815),
    eO = n(198052),
    eP = n(520698),
    eM = n(43189),
    ew = n(518530),
    eU = n(681281),
    eD = n(587837),
    eV = n(675853),
    ek = n(384059),
    eG = n(480890),
    eB = n(806931),
    eF = n(652215),
    ez = n(375708),
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
        u = (0, d.bG)([D.A], () => (l?.type === eB.lp.ACTIVITY ? D.A.getApplication(l.applicationId) : void 0)),
        h = t === eF.DUB.NO_CHAT ? er.A.Directions.UP : er.A.Directions.DOWN,
        p = [eF.DUB.FULL_SCREEN, eF.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < el.vs.NO_INVITE
                ? (0, i.jsx)(ec.A, {
                      channel: n,
                      stream: l?.type === eB.lp.STREAM ? (0, F.Iy)(l.id) : void 0,
                      className: eH.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eF.rbe.GUILD_VOICE ? eF.liQ.GUILD_CHANNEL : eF.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(V.A, {
                      className: eH.P0,
                      align: V.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(er.A, {
                          label: p ? ez.intl.string(ez.t.kkKapG) : ez.intl.string(ez.t["5MstTl"]),
                          direction: h,
                          className: eH.jZ,
                          onClick: () => {
                              ((0, ek.X)(P.A.VOICE_CONTROL_TRAY, ek.O.CHAT, p), r());
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
        (this.currentDocument.addEventListener(eL.Wb, this.handleFullScreenChange),
            eb.default.track(eF.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, M.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eL.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eS.isMac)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        (null != a &&
            e.mode === eF._Of.VIDEO &&
            i === eF._Of.VOICE &&
            (0, eL._U)(a, this.currentDocument) &&
            (0, eL.sP)(a, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && g.h.wait(() => this.handleClosePopout()));
    }
    get nativePopoutSupported() {
        return eS.isPlatformEmbedded && eR.Ay.supportsFeature(eF.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eS.isPlatformEmbedded || this.nativePopoutSupported;
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
            ((0, eL._U)(e, this.currentDocument) ||
                this.props.layout !== eF.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eF.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eF.DUB.FULL_SCREEN), (0, eL.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eF.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eL.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eF.DUB.NORMAL ? eF.DUB.NO_CHAT : eF.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (C.A.updateLayout(t.id, e, n),
            e === eF.DUB.FULL_SCREEN && t.isPrivate() && eT._.dispatch(eF.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eF.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, U.x)({
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
        return (0, eG.s)(e, P.A.CHANNEL_CALL, {
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
                    (0, y.L3)(
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
                let u = ev.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, Z.r)(t, u, s, d, (e, t) =>
                            (0, eG.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eB.GK.THREE_DOT,
                                tileType: eB.qs.USER,
                                targetUserId: u.id,
                                location: P.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eF.rbe.DM:
                            return (0, y.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("866038"),
                                        n.e("926132"),
                                        n.e("146652"),
                                        n.e("893190"),
                                        n.e("391763"),
                                        n.e("189673"),
                                        n.e("955557"),
                                        n.e("229787"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("576665"),
                                        n.e("947502"),
                                        n.e("245996"),
                                        n.e("965789"),
                                        n.e("823427"),
                                        n.e("529422"),
                                        n.e("307059"),
                                        n.e("21106"),
                                        n.e("537796"),
                                        n.e("368358"),
                                        n.e("298199"),
                                        n.e("17244"),
                                        n.e("864464"),
                                        n.e("439778"),
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
                            return (0, y.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("866038"),
                                        n.e("926132"),
                                        n.e("146652"),
                                        n.e("893190"),
                                        n.e("189673"),
                                        n.e("229787"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("576665"),
                                        n.e("624198"),
                                        n.e("245996"),
                                        n.e("823427"),
                                        n.e("529422"),
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
                        case eF.rbe.PUBLIC_THREAD:
                        case eF.rbe.PRIVATE_THREAD:
                            let a = s.getGuildId();
                            return (
                                o()(null != a, "GuildID null for guild voice channel"),
                                (0, y.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("866038"),
                                            n.e("926132"),
                                            n.e("146652"),
                                            n.e("893190"),
                                            n.e("189673"),
                                            n.e("229787"),
                                            n.e("882073"),
                                            n.e("797558"),
                                            n.e("691994"),
                                            n.e("576665"),
                                            n.e("624198"),
                                            n.e("245996"),
                                            n.e("823427"),
                                            n.e("449145"),
                                            n.e("529422"),
                                            n.e("307059"),
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
            (0, z.eo)(n, eE.A, ej.A, eI.A, G.default)[0] &&
            (I.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, F._z)(t) === e.id && t.state !== eF.XYD.ENDED).length &&
                (0, N.A9)((0, F.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eF._Of.VIDEO &&
                (i?.id === e.id ? C.A.selectParticipant(n.id, null) : C.A.selectParticipant(n.id, e.id)));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, R.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            (null == n || ey.Ay.isCurrentUserGuest(n) || (0, q.pX)((0, e_.vJ)(n)), K.openChannelCallPopout(e));
        }
        null == t || (0, T.f)() ? n() : (0, O.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, ek.X)(P.A.VOICE_CONTROL_TRAY, ek.O.STAY_ON_TOP, e), K.setAlwaysOnTop(eF.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        K.close(eF.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eF.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eF.DUB.MINIMUM || n === eF.DUB.NORMAL
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
        return l
            ? (0, i.jsx)(eK, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: a,
                  canInvite: s,
                  onToggleChat: r,
                  maybeLeaveFullScreen: this.maybeLeaveFullScreen,
              })
            : null;
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
                          location: P.A.VOICE_CONTROL_TRAY,
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
                              ((0, ek.X)(P.A.VOICE_CONTROL_TRAY, ek.O.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, ek.X)(P.A.VOICE_CONTROL_TRAY, ek.O.POPOUT, !1), this.handleClosePopout());
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
                              ((0, ek.X)(
                                  P.A.VOICE_CONTROL_TRAY,
                                  ek.O.FULL_SCREEN,
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
        (C.A.updateChatOpen(e.channel_id, !0),
            j.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
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
                inCall: s,
                guildRoomVisible: r,
            } = this.props,
            { useExternalHeader: o, renderHeader: c } = this.viewProperties;
        return c
            ? (0, i.jsx)(ei.A, {
                  children: (0, i.jsx)("div", {
                      className: eH.dL,
                      children: o
                          ? e?.()
                          : (0, i.jsx)(eU.A, {
                                channel: t,
                                guild: n,
                                appContext: l,
                                inCall: s,
                                isChatOpen: a || (this.popoutOpen && !this.inPopout && s),
                                exitFullScreen: this.maybeLeaveFullScreen,
                                guildRoomVisible: r,
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
            y = p === eF.DUB.MINIMUM,
            j = y || p === eF.DUB.NORMAL,
            I = l && s === eF._Of.VIDEO,
            N = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let v = !l || !(this.popoutOpen && !this.inPopout),
            E = !m && l && !y && e.idle,
            b = g
                ? (0, i.jsx)(Y.A, { channelId: u.id, popoutType: t, idle: e.idle })
                : (0, i.jsx)(et.A, {
                      ref: this._contentRef,
                      inCall: l,
                      channel: u,
                      hasConnectPermission: a,
                      guild: h,
                      participants: o,
                      filteredParticipants: c,
                      participantsVersion: d,
                      selectedParticipant: I ? n : null,
                      layout: p,
                      idle: e.idle,
                      mode: s,
                      onSelectParticipant: this.handleSelectParticipant,
                      onContextMenuParticipant: this.handleContextMenu,
                      showParticipants: r && (!j || N),
                      popoutType: t,
                      awaitingRemoteSessionInfo: A,
                      callContainerDimensions: x,
                  });
        return (0, i.jsx)(es.A, {
            renderHeader: this.renderHeader,
            renderBottomLeft: this.renderBottomLeft,
            renderBottomCenter: this.renderBottomCenter,
            renderBottomRight: this.renderBottomRight,
            renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
            renderVoiceChannelEffects: this.renderVoiceChannelEffects,
            ...e,
            screenMessage: this.screenMessage,
            disableGradients: !l || y,
            hideControls: C,
            idle: E,
            children: v && (this.renderVoiceChannelAppSurface() ?? b),
        });
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
            } = this.props,
            { resizedHeight: u } = this.state,
            h = l === eF._Of.VIDEO,
            m = e !== eF.DUB.NO_CHAT && e !== eF.DUB.FULL_SCREEN && null != c,
            A = eF.NJ8.ONYX;
        return (0, i.jsxs)("div", {
            className: s()(eH.iE, eY[e], e$[r], {
                [eH.XW]: this.popoutOpen && !this.inPopout && e !== eF.DUB.NO_CHAT && t.isPrivate(),
                [eH.Ki]: h,
                [eH.vc]: a,
                [eH.ty]: m,
            }),
            ref: (e) => {
                ((this._wrapperRef.current = e), (this.props.wrapperRef.current = e));
            },
            style: m && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(p.N, {
                    theme: A,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(eH.ik, a || e !== eF.DUB.FULL_SCREEN ? void 0 : eH.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(en.Ay, { timeout: eW, children: (e) => this.renderContent(e) }),
                        }),
                }),
                m &&
                    (0, i.jsx)(eD.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eH.B2,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        a &&
                        (0, i.jsx)(ew.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eq = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, b.Ay)(),
        { width: h = 0, height: p = 0, ref: g } = (0, b.Ay)(),
        { ref: C } = (0, b.Ay)(),
        y = (0, $.Us)(),
        j = (0, B.A)(),
        I = (0, d.bG)([eN.Ay], () => (j?.channelId ?? eN.Ay.getVoiceChannelId()) === t.id),
        {
            participants: N,
            filteredParticipants: T,
            participantsVersion: R,
            mode: O,
            layout: M,
            participantsOpen: U,
            chatOpen: D,
            selectedParticipant: V,
        } = (0, d.cf)(
            [eO.A],
            () => {
                let e = y === eF.BRT.POPOUT,
                    n = eO.A.getMode(t.id),
                    i = eO.A.getLayout(t.id, y);
                e && (n = eF._Of.VIDEO);
                let l = n === eF._Of.VIDEO ? i : eF.DUB.MINIMUM;
                return (
                    e && l !== eF.DUB.FULL_SCREEN && (l = eF.DUB.NO_CHAT),
                    {
                        mode: n,
                        layout: l,
                        selectedParticipant: n !== eF._Of.VOICE ? eO.A.getSelectedParticipant(t.id) : null,
                        participants: eO.A.getParticipants(t.id),
                        filteredParticipants: eO.A.getFilteredParticipants(t.id),
                        participantsOpen: eO.A.getParticipantsOpen(t.id),
                        chatOpen: eO.A.getChatOpen(t.id),
                        participantsVersion: eO.A.getParticipantsVersion(t.id),
                    }
                );
            },
            [y, t.id],
        ),
        F = (0, d.yK)([ex.A], () => ex.A.getAllActiveStreams()),
        { selectedStream: z } = (0, d.cf)(
            [ex.A],
            () => ({ selectedStream: null != V ? ex.A.getActiveStreamForStreamKey(V.id) : null }),
            [V],
        ),
        Y = (0, d.bG)([ej.A], () => ej.A.getGuild(t.getGuildId())),
        K = (0, d.bG)([eg.default], () => eg.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: Z } = (0, d.cf)([X.A], () => ({
            popoutWindow: X.A.getWindow(eF.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: X.A.getIsAlwaysOnTop(eF.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([eI.A], () => eI.A.can(eF.xBc.CONNECT, t)),
        ee = (0, d.bG)([eC.A], () => eC.A.getToastsEnabled(t.id)),
        et = (0, d.bG)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
        en = (0, d.bG)([Q.Ay], () => Q.Ay.callHeaderHeight),
        ei = l.useCallback((e) => {
            v.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = (0, d.bG)([S.A], () => S.A.getFetchState(), []),
        ea = (0, _.Ay)(el);
    l.useEffect(() => {
        el === S.$.ERROR && ea !== S.$.ERROR && (0, m.P0)((0, A.o)(ez.intl.string(ez.t["AlJyI+"]), f.Ck.FAILURE));
    }, [el, ea]);
    let es = (0, d.bG)([L.Ay], () => L.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        er = (0, k.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eo } = (0, w.Ay)(P.A.CHANNEL_CALL),
        ec = L.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: ed } = (0, W.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        eu = (0, d.bG)([H.A], () => H.A.isVisible(t.id)),
        eh = (0, d.bG)([H.A], () => {
            let e = H.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        em = (0, eA.d7)(t, I),
        ef = (0, eA.kM)(t),
        ey = (0, ep.F)(y) && ef ? em : null,
        { theme: ev } = (0, x.wR)();
    return (0, i.jsx)(w.f5, {
        value: eo,
        children: (0, i.jsx)(E.A, {
            page: eF.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eM.qh, {
                children: (0, i.jsxs)(eV.CB, {
                    children: [
                        (0, i.jsx)(eX, {
                            channel: t,
                            guild: Y,
                            hasConnectPermission: J,
                            participantsOpen: U,
                            renderExternalHeader: n,
                            appContext: y,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: Z,
                            selectedStream: z,
                            mode: O,
                            inCall: I,
                            participants: N,
                            filteredParticipants: T,
                            participantsVersion: R,
                            layout: M,
                            chatOpen: D,
                            maxSidebarWidth: o - 550,
                            currentUserId: K,
                            selectedParticipant: V,
                            allActiveStreams: F,
                            connectedEmbeddedActivity: es ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: p },
                            callContainerRef: g,
                            channelChatRef: C,
                            width: o,
                            maxHeight: a,
                            forceShowControls: er,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: ec,
                            theme: ev,
                            canPopout: s,
                            popoutType: r,
                            guildRoomVisible: ed && eu,
                            isPlacingNote: eh,
                            currentVoiceChannelApplicationId: ey,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eV.wQ, {}),
                        (0, i.jsx)(eM.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
