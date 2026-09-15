(n.r(t), n.d(t, { IDLE_TIMEOUT: () => eH, default: () => eX }));
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
    j = n(730852),
    I = n(401843),
    N = n(817281),
    v = n(820284),
    E = n(765671),
    b = n(475743),
    _ = n(646865),
    T = n(10716),
    S = n(795816),
    R = n(933958),
    L = n(47294),
    O = n(793574),
    P = n(95561),
    M = n(688810),
    w = n(139286),
    U = n(587895),
    D = n(235986),
    V = n(47899),
    k = n(643501),
    G = n(857253),
    B = n(652896),
    F = n(279250),
    z = n(558076),
    H = n(360729),
    W = n(700948),
    Y = n(267102),
    $ = n(574172),
    K = n(869146),
    X = n(976860),
    q = n(326567),
    Z = n(742023),
    Q = n(306852),
    J = n(105225),
    ee = n(874739),
    et = n(461782),
    en = n(447404),
    ei = n(401685),
    el = n(20465),
    ea = n(156652),
    es = n(622770),
    er = n(423562),
    eo = n(520006),
    ec = n(128286),
    ed = n(619344),
    eu = n(821747),
    eh = n(488947),
    ep = n(12830),
    em = n(637443),
    eA = n(125248),
    ef = n(616356),
    ex = n(280450),
    eg = n(249288),
    eC = n(696451),
    ey = n(71393),
    ej = n(576705),
    eI = n(309010),
    eN = n(287809),
    ev = n(977997),
    eE = n(174459),
    eb = n(147036),
    e_ = n(625494),
    eT = n(723702),
    eS = n(19575),
    eR = n(475815),
    eL = n(198052),
    eO = n(520698),
    eP = n(43189),
    eM = n(518530),
    ew = n(681281),
    eU = n(587837),
    eD = n(675853),
    eV = n(384059),
    ek = n(480890),
    eG = n(806931),
    eB = n(652215),
    eF = n(375708),
    ez = n(880162);
let eH = 2e3,
    eW = { [eB.DUB.NORMAL]: ez.qb, [eB.DUB.MINIMUM]: ez.Bp, [eB.DUB.NO_CHAT]: ez.Oo, [eB.DUB.FULL_SCREEN]: ez.iy },
    eY = { [eB.BRT.POPOUT]: ez.SW, [eB.BRT.APP]: null, [eB.BRT.OVERLAY]: null, [eB.BRT.CALL_TILE_POPOUT]: null };
function e$(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, ei.Bx)(),
        u = (0, d.bG)([U.A], () => (l?.type === eG.lp.ACTIVITY ? U.A.getApplication(l.applicationId) : void 0)),
        h = t === eB.DUB.NO_CHAT ? es.A.Directions.UP : es.A.Directions.DOWN,
        p = [eB.DUB.FULL_SCREEN, eB.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < ei.vs.NO_INVITE
                ? (0, i.jsx)(eo.A, {
                      channel: n,
                      stream: l?.type === eG.lp.STREAM ? (0, B.Iy)(l.id) : void 0,
                      className: ez.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eB.rbe.GUILD_VOICE ? eB.liQ.GUILD_CHANNEL : eB.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(D.A, {
                      className: ez.P0,
                      align: D.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(es.A, {
                          label: p ? eF.intl.string(eF.t.kkKapG) : eF.intl.string(eF.t["5MstTl"]),
                          direction: h,
                          className: ez.jZ,
                          onClick: () => {
                              ((0, eV.X)(O.A.VOICE_CONTROL_TRAY, eV.O.CHAT, p), r());
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eK extends l.PureComponent {
    _prevLayout = eB.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: Z.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        (this.currentDocument.addEventListener(eR.Wb, this.handleFullScreenChange),
            eE.default.track(eB.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, P.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eR.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eT.isMac)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        (null != a &&
            e.mode === eB._Of.VIDEO &&
            i === eB._Of.VOICE &&
            (0, eR._U)(a, this.currentDocument) &&
            (0, eR.sP)(a, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && g.h.wait(() => this.handleClosePopout()));
    }
    get nativePopoutSupported() {
        return eT.isPlatformEmbedded && eS.Ay.supportsFeature(eB.BYE.POPOUT_WINDOWS);
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
            ? { mainText: eF.intl.string(eF.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eB.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eB._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eB._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eB._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eB.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eB.DUB.MINIMUM || e === eB.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eB.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eB.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eB.DUB.NO_CHAT:
            case eB.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eR._U)(e, this.currentDocument) ||
                this.props.layout !== eB.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eB.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eB.DUB.FULL_SCREEN), (0, eR.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eB.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eR.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eB.DUB.NORMAL ? eB.DUB.NO_CHAT : eB.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (C.A.updateLayout(t.id, e, n),
            e === eB.DUB.FULL_SCREEN && t.isPrivate() && e_._.dispatch(eB.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eB.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, w.x)({
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
        return (0, ek.s)(e, O.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eG.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eG.lp.HIDDEN_STREAM:
            case eG.lp.STREAM:
                (this.trackCallTileContextMenuImpression(e, eG.qs.STREAM),
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
                                        eG.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    ));
                return;
            case eG.lp.USER:
                this.trackCallTileContextMenuImpression(e, eG.qs.USER);
                let u = eN.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, q.r)(t, u, s, d, (e, t) =>
                            (0, ek.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eG.GK.THREE_DOT,
                                tileType: eG.qs.USER,
                                targetUserId: u.id,
                                location: O.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eB.rbe.DM:
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
                                        n.e("400744"),
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
                                                eG.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eB.rbe.GROUP_DM:
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
                                            showChatItems: c === eB.DUB.MINIMUM || c === eB.DUB.NORMAL,
                                            user: u,
                                            channel: s,
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
                        case eB.rbe.GUILD_VOICE:
                        case eB.rbe.PUBLIC_THREAD:
                        case eB.rbe.PRIVATE_THREAD:
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
        let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: a, mode: s } = this.props;
        ((0, eG.Ay)(e) &&
            (0, F.eo)(n, ev.A, ey.A, ej.A, k.default)[0] &&
            (j.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, B._z)(t) === e.id && t.state !== eB.XYD.ENDED).length &&
                (0, I.A9)((0, B.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eB._Of.VIDEO &&
                (i?.id === e.id ? C.A.selectParticipant(n.id, null) : C.A.selectParticipant(n.id, e.id)));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            (null == n || eC.Ay.isCurrentUserGuest(n) || (0, X.pX)((0, eb.vJ)(n)), $.openChannelCallPopout(e));
        }
        null == t || (0, _.f)() ? n() : (0, L.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, eV.X)(O.A.VOICE_CONTROL_TRAY, eV.O.STAY_ON_TOP, e), $.setAlwaysOnTop(eB.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        $.close(eB.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eB.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eB.DUB.MINIMUM || n === eB.DUB.NORMAL
            ? (0, i.jsx)(J.Ay, {
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
                e === eB.DUB.FULL_SCREEN
                    ? () => {
                          ((this._prevLayout = eB.DUB.NORMAL), this.handleFullScreen());
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(e$, {
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
                null != l && l.type !== eG.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(eu.A, {
                          context: (0, eO.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: ez.MQ,
                          className: ez.iq,
                          location: O.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                s
                    ? (0, i.jsx)(ed.A, {
                          className: ez.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r
                    ? (0, i.jsx)(ec.A, {
                          themeable: o,
                          popoutOpen: this.popoutOpen,
                          className: ez.iq,
                          onOpenPopout: () => {
                              ((0, eV.X)(O.A.VOICE_CONTROL_TRAY, eV.O.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, eV.X)(O.A.VOICE_CONTROL_TRAY, eV.O.POPOUT, !1), this.handleClosePopout());
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(er.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: ez.iq,
                          onClick: () => {
                              ((0, eV.X)(
                                  O.A.VOICE_CONTROL_TRAY,
                                  eV.O.FULL_SCREEN,
                                  this.props.layout !== eB.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen());
                          },
                      })
                    : null,
            ],
        });
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && l)
            ? null
            : (0, i.jsx)(eP.Ay, { children: (0, i.jsx)(el.A, { className: ez.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eD.Ay, { children: (0, i.jsx)(eA.A, { callHeight: t.height, channelId: e.id }) });
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
            ? (0, i.jsx)(en.A, {
                  children: (0, i.jsx)("div", {
                      className: ez.dL,
                      children: o
                          ? e?.()
                          : (0, i.jsx)(ew.A, {
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
            y = p === eB.DUB.MINIMUM,
            j = y || p === eB.DUB.NORMAL,
            I = l && s === eB._Of.VIDEO,
            N = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let v = !l || !(this.popoutOpen && !this.inPopout),
            E = !m && l && !y && e.idle,
            b = g
                ? (0, i.jsx)(W.A, { channelId: u.id, popoutType: t, idle: e.idle })
                : (0, i.jsx)(ee.A, {
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
        return (0, i.jsx)(ea.A, {
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
            : (0, i.jsx)(ep.A, {
                  applicationId: t,
                  channelId: e.id,
                  guildId: e.guild_id ?? void 0,
                  renderPipOverlay: (t, n) => {
                      let { width: l, height: a } = n;
                      return (0, i.jsx)(Q.A, {
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
            h = l === eB._Of.VIDEO,
            m = e !== eB.DUB.NO_CHAT && e !== eB.DUB.FULL_SCREEN && null != c,
            A = eB.NJ8.ONYX;
        return (0, i.jsxs)("div", {
            className: s()(ez.iE, eW[e], eY[r], {
                [ez.XW]: this.popoutOpen && !this.inPopout && e !== eB.DUB.NO_CHAT && t.isPrivate(),
                [ez.Ki]: h,
                [ez.vc]: a,
                [ez.ty]: m,
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
                            className: s()(ez.ik, a || e !== eB.DUB.FULL_SCREEN ? void 0 : ez.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(et.Ay, { timeout: eH, children: (e) => this.renderContent(e) }),
                        }),
                }),
                m &&
                    (0, i.jsx)(eU.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: ez.B2,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        a &&
                        (0, i.jsx)(eM.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eX = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, E.Ay)(),
        { width: h = 0, height: p = 0, ref: g } = (0, E.Ay)(),
        { ref: C } = (0, E.Ay)(),
        y = (0, Y.Us)(),
        j = (0, G.A)(),
        I = (0, d.bG)([eI.Ay], () => (j?.channelId ?? eI.Ay.getVoiceChannelId()) === t.id),
        {
            participants: _,
            filteredParticipants: S,
            participantsVersion: L,
            mode: P,
            layout: w,
            participantsOpen: U,
            chatOpen: D,
            selectedParticipant: B,
        } = (0, d.cf)(
            [eL.A],
            () => {
                let e = y === eB.BRT.POPOUT,
                    n = eL.A.getMode(t.id),
                    i = eL.A.getLayout(t.id, y);
                e && (n = eB._Of.VIDEO);
                let l = n === eB._Of.VIDEO ? i : eB.DUB.MINIMUM;
                return (
                    e && l !== eB.DUB.FULL_SCREEN && (l = eB.DUB.NO_CHAT),
                    {
                        mode: n,
                        layout: l,
                        selectedParticipant: n !== eB._Of.VOICE ? eL.A.getSelectedParticipant(t.id) : null,
                        participants: eL.A.getParticipants(t.id),
                        filteredParticipants: eL.A.getFilteredParticipants(t.id),
                        participantsOpen: eL.A.getParticipantsOpen(t.id),
                        chatOpen: eL.A.getChatOpen(t.id),
                        participantsVersion: eL.A.getParticipantsVersion(t.id),
                    }
                );
            },
            [y, t.id],
        ),
        F = (0, d.yK)([ef.A], () => ef.A.getAllActiveStreams()),
        { selectedStream: W } = (0, d.cf)(
            [ef.A],
            () => ({ selectedStream: null != B ? ef.A.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        $ = (0, d.bG)([ey.A], () => ey.A.getGuild(t.getGuildId())),
        X = (0, d.bG)([ex.default], () => ex.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: Q } = (0, d.cf)([K.A], () => ({
            popoutWindow: K.A.getWindow(eB.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: K.A.getIsAlwaysOnTop(eB.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([ej.A], () => ej.A.can(eB.xBc.CONNECT, t)),
        ee = (0, d.bG)([eg.A], () => eg.A.getToastsEnabled(t.id)),
        et = (0, d.bG)([k.default], () => k.default.getAwaitingRemoteSessionInfo()),
        en = (0, d.bG)([Z.Ay], () => Z.Ay.callHeaderHeight),
        ei = l.useCallback((e) => {
            N.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = (0, d.bG)([T.A], () => T.A.getFetchState(), []),
        ea = (0, b.Ay)(el);
    l.useEffect(() => {
        el === T.$.ERROR && ea !== T.$.ERROR && (0, m.P0)((0, A.o)(eF.intl.string(eF.t["AlJyI+"]), f.Ck.FAILURE));
    }, [el, ea]);
    let es = (0, d.bG)([R.Ay], () => R.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        er = (0, V.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eo } = (0, M.Ay)(O.A.CHANNEL_CALL),
        ec = R.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: ed } = (0, H.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        eu = (0, d.bG)([z.A], () => z.A.isVisible(t.id)),
        ep = (0, d.bG)([z.A], () => {
            let e = z.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        eA = (0, em.d7)(t, I),
        eC = (0, em.kM)(t),
        eN = (0, eh.F)(y) && eC ? eA : null,
        { theme: ev } = (0, x.wR)();
    return (0, i.jsx)(M.f5, {
        value: eo,
        children: (0, i.jsx)(v.A, {
            page: eB.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eP.qh, {
                children: (0, i.jsxs)(eD.CB, {
                    children: [
                        (0, i.jsx)(eK, {
                            channel: t,
                            guild: $,
                            hasConnectPermission: J,
                            participantsOpen: U,
                            renderExternalHeader: n,
                            appContext: y,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: Q,
                            selectedStream: W,
                            mode: P,
                            inCall: I,
                            participants: _,
                            filteredParticipants: S,
                            participantsVersion: L,
                            layout: w,
                            chatOpen: D,
                            maxSidebarWidth: o - 550,
                            currentUserId: X,
                            selectedParticipant: B,
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
                            isPlacingNote: ep,
                            currentVoiceChannelApplicationId: eN,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eD.wQ, {}),
                        (0, i.jsx)(eP.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
