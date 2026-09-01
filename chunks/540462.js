n.r(t), n.d(t, { IDLE_TIMEOUT: () => eG, default: () => eW });
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
    T = n(646865),
    _ = n(10716),
    R = n(795816),
    S = n(933958),
    L = n(47294),
    O = n(793574),
    P = n(95561),
    w = n(688810),
    M = n(139286),
    U = n(587895),
    D = n(235986),
    V = n(558845),
    k = n(643501),
    G = n(857253),
    B = n(652896),
    F = n(279250),
    H = n(558076),
    z = n(360729),
    W = n(700948),
    $ = n(267102),
    Y = n(574172),
    K = n(869146),
    X = n(976860),
    q = n(326567),
    Z = n(742023),
    Q = n(105225),
    J = n(874739),
    ee = n(461782),
    et = n(447404),
    en = n(401685),
    ei = n(20465),
    el = n(156652),
    ea = n(622770),
    es = n(423562),
    er = n(520006),
    eo = n(128286),
    ec = n(619344),
    ed = n(821747),
    eu = n(125248),
    eh = n(616356),
    ep = n(280450),
    em = n(249288),
    eA = n(696451),
    ef = n(71393),
    ex = n(576705),
    eg = n(309010),
    eC = n(287809),
    ey = n(977997),
    ej = n(174459),
    eI = n(147036),
    eN = n(625494),
    ev = n(723702),
    eE = n(19575),
    eb = n(475815),
    eT = n(198052),
    e_ = n(520698),
    eR = n(43189),
    eS = n(518530),
    eL = n(681281),
    eO = n(587837),
    eP = n(675853),
    ew = n(384059),
    eM = n(480890),
    eU = n(806931),
    eD = n(652215),
    eV = n(375708),
    ek = n(880162);
let eG = 2e3,
    eB = { [eD.DUB.NORMAL]: ek.qb, [eD.DUB.MINIMUM]: ek.Bp, [eD.DUB.NO_CHAT]: ek.Oo, [eD.DUB.FULL_SCREEN]: ek.iy },
    eF = { [eD.BRT.POPOUT]: ek.SW, [eD.BRT.APP]: null, [eD.BRT.OVERLAY]: null, [eD.BRT.CALL_TILE_POPOUT]: null };
function eH(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, en.Bx)(),
        u = (0, d.bG)([U.A], () => (l?.type === eU.lp.ACTIVITY ? U.A.getApplication(l.applicationId) : void 0)),
        h = t === eD.DUB.NO_CHAT ? ea.A.Directions.UP : ea.A.Directions.DOWN,
        p = [eD.DUB.FULL_SCREEN, eD.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < en.vs.NO_INVITE
                ? (0, i.jsx)(er.A, {
                      channel: n,
                      stream: l?.type === eU.lp.STREAM ? (0, B.Iy)(l.id) : void 0,
                      className: ek.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eD.rbe.GUILD_VOICE ? eD.liQ.GUILD_CHANNEL : eD.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(D.A, {
                      className: ek.P0,
                      align: D.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ea.A, {
                          label: p ? eV.intl.string(eV.t.kkKapG) : eV.intl.string(eV.t["5MstTl"]),
                          direction: h,
                          className: ek.jZ,
                          onClick: () => {
                              (0, ew.X)(O.A.VOICE_CONTROL_TRAY, ew.O.CHAT, p), r();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class ez extends l.PureComponent {
    _prevLayout = eD.DUB.MINIMUM;
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
        this.currentDocument.addEventListener(eb.Wb, this.handleFullScreenChange),
            ej.default.track(eD.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, P.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eb.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, ev.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        null != a &&
            e.mode === eD._Of.VIDEO &&
            i === eD._Of.VOICE &&
            (0, eb._U)(a, this.currentDocument) &&
            (0, eb.sP)(a, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && g.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ev.isPlatformEmbedded && eE.Ay.supportsFeature(eD.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ev.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eV.intl.string(eV.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eD.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eD._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eD._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eD._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eD.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eD.DUB.MINIMUM || e === eD.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eD.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eD.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eD.DUB.NO_CHAT:
            case eD.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eb._U)(e, this.currentDocument) ||
                this.props.layout !== eD.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eD.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eD.DUB.FULL_SCREEN), (0, eb.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eD.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eb.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eD.DUB.NORMAL ? eD.DUB.NO_CHAT : eD.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (C.A.updateLayout(t.id, e, n),
            e === eD.DUB.FULL_SCREEN && t.isPrivate() && eN._.dispatch(eD.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eD.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, M.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eU.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eU.GK.CONTEXT_MENU;
        return (0, eM.s)(e, O.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eU.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eU.lp.HIDDEN_STREAM:
            case eU.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eU.qs.STREAM),
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
                                        eU.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case eU.lp.USER:
                this.trackCallTileContextMenuImpression(e, eU.qs.USER);
                let u = eC.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, q.r)(t, u, s, d, (e, t) =>
                            (0, eM.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eU.GK.THREE_DOT,
                                tileType: eU.qs.USER,
                                targetUserId: u.id,
                                location: O.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eD.rbe.DM:
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
                                        n.e("187048"),
                                        n.e("341154"),
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
                                                eU.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eD.rbe.GROUP_DM:
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
                                            showChatItems: c === eD.DUB.MINIMUM || c === eD.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eU.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eD.rbe.GUILD_VOICE:
                        case eD.rbe.PUBLIC_THREAD:
                        case eD.rbe.PRIVATE_THREAD:
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
                                                    eU.qs.USER,
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
        (0, eU.Ay)(e) &&
            (0, F.eo)(n, ey.A, ef.A, ex.A, k.default)[0] &&
            (j.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, B._z)(t) === e.id && t.state !== eD.XYD.ENDED).length &&
                (0, I.A9)((0, B.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eD._Of.VIDEO &&
                (i?.id === e.id ? C.A.selectParticipant(n.id, null) : C.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, R.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            null == n || eA.Ay.isCurrentUserGuest(n) || (0, X.pX)((0, eI.vJ)(n)), Y.openChannelCallPopout(e);
        }
        null == t || (0, T.f)() ? n() : (0, L.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, ew.X)(O.A.VOICE_CONTROL_TRAY, ew.O.STAY_ON_TOP, e), Y.setAlwaysOnTop(eD.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        Y.close(eD.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eD.DUB.FULL_SCREEN;
        ((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eD.DUB.MINIMUM || n === eD.DUB.NORMAL
            ? (0, i.jsx)(Q.Ay, {
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
                e === eD.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eD.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(eH, {
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
                null != l && l.type !== eU.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(ed.A, {
                          context: (0, e_.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: ek.MQ,
                          className: ek.iq,
                          location: O.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                s
                    ? (0, i.jsx)(ec.A, {
                          className: ek.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r
                    ? (0, i.jsx)(eo.A, {
                          themeable: o,
                          popoutOpen: this.popoutOpen,
                          className: ek.iq,
                          onOpenPopout: () => {
                              (0, ew.X)(O.A.VOICE_CONTROL_TRAY, ew.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, ew.X)(O.A.VOICE_CONTROL_TRAY, ew.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(es.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: ek.iq,
                          onClick: () => {
                              (0, ew.X)(
                                  O.A.VOICE_CONTROL_TRAY,
                                  ew.O.FULL_SCREEN,
                                  this.props.layout !== eD.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen();
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
            : (0, i.jsx)(eR.Ay, { children: (0, i.jsx)(ei.A, { className: ek.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eP.Ay, { children: (0, i.jsx)(eu.A, { callHeight: t.height, channelId: e.id }) });
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
            ? (0, i.jsx)(et.A, {
                  children: (0, i.jsx)("div", {
                      className: ek.dL,
                      children: o
                          ? e?.()
                          : (0, i.jsx)(eL.A, {
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
            y = p === eD.DUB.MINIMUM,
            j = y || p === eD.DUB.NORMAL,
            I = l && s === eD._Of.VIDEO,
            N = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let v = !l || !(this.popoutOpen && !this.inPopout),
            E = !m && l && !y && e.idle,
            b = g
                ? (0, i.jsx)(W.A, { channelId: u.id, popoutType: t, idle: e.idle })
                : (0, i.jsx)(J.A, {
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
        return (0, i.jsx)(el.A, {
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
            children: v && b,
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
            h = l === eD._Of.VIDEO,
            m = e !== eD.DUB.NO_CHAT && e !== eD.DUB.FULL_SCREEN && null != c,
            A = eD.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: s()(ek.iE, eB[e], eF[r], {
                [ek.XW]: this.popoutOpen && !this.inPopout && e !== eD.DUB.NO_CHAT && t.isPrivate(),
                [ek.Ki]: h,
                [ek.vc]: a,
                [ek.ty]: m,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: m && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(p.N, {
                    theme: A,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(ek.ik, a || e !== eD.DUB.FULL_SCREEN ? void 0 : ek.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(ee.Ay, { timeout: eG, children: (e) => this.renderContent(e) }),
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
                    className: ek.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        a &&
                        (0, i.jsx)(eS.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eW = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, E.Ay)(),
        { width: h = 0, height: p = 0, ref: g } = (0, E.Ay)(),
        { ref: C } = (0, E.Ay)(),
        y = (0, $.Us)(),
        j = (0, G.A)(),
        I = (0, d.bG)([eg.Ay], () => (j?.channelId ?? eg.Ay.getVoiceChannelId()) === t.id),
        {
            participants: T,
            filteredParticipants: R,
            participantsVersion: L,
            mode: P,
            layout: M,
            participantsOpen: U,
            chatOpen: D,
            selectedParticipant: B,
        } = (0, d.cf)([eT.A], () => {
            let e = y === eD.BRT.POPOUT,
                n = eT.A.getMode(t.id),
                i = eT.A.getLayout(t.id, y);
            e && (n = eD._Of.VIDEO);
            let l = n === eD._Of.VIDEO ? i : eD.DUB.MINIMUM;
            return (
                e && l !== eD.DUB.FULL_SCREEN && (l = eD.DUB.NO_CHAT),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== eD._Of.VOICE ? eT.A.getSelectedParticipant(t.id) : null,
                    participants: eT.A.getParticipants(t.id),
                    filteredParticipants: eT.A.getFilteredParticipants(t.id),
                    participantsOpen: eT.A.getParticipantsOpen(t.id),
                    chatOpen: eT.A.getChatOpen(t.id),
                    participantsVersion: eT.A.getParticipantsVersion(t.id),
                }
            );
        }, [y, t.id]),
        F = (0, d.yK)([eh.A], () => eh.A.getAllActiveStreams()),
        { selectedStream: W } = (0, d.cf)(
            [eh.A],
            () => ({ selectedStream: null != B ? eh.A.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        Y = (0, d.bG)([ef.A], () => ef.A.getGuild(t.getGuildId())),
        X = (0, d.bG)([ep.default], () => ep.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: Q } = (0, d.cf)([K.A], () => ({
            popoutWindow: K.A.getWindow(eD.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: K.A.getIsAlwaysOnTop(eD.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([ex.A], () => ex.A.can(eD.xBc.CONNECT, t)),
        ee = (0, d.bG)([em.A], () => em.A.getToastsEnabled(t.id)),
        et = (0, d.bG)([k.default], () => k.default.getAwaitingRemoteSessionInfo()),
        en = (0, d.bG)([Z.Ay], () => Z.Ay.callHeaderHeight),
        ei = l.useCallback((e) => {
            N.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = (0, d.bG)([_.A], () => _.A.getFetchState(), []),
        ea = (0, b.Ay)(el);
    l.useEffect(() => {
        el === _.$.ERROR && ea !== _.$.ERROR && (0, m.P0)((0, A.o)(eV.intl.string(eV.t["AlJyI+"]), f.Ck.FAILURE));
    }, [el, ea]);
    let es = (0, d.bG)([S.Ay], () => S.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        er = (0, V.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eo } = (0, w.Ay)(O.A.CHANNEL_CALL),
        ec = S.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: ed } = (0, z.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        eu = (0, d.bG)([H.A], () => H.A.isVisible(t.id)),
        eA = (0, d.bG)([H.A], () => {
            let e = H.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        { theme: eC } = (0, x.wR)();
    return (0, i.jsx)(w.f5, {
        value: eo,
        children: (0, i.jsx)(v.A, {
            page: eD.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eR.qh, {
                children: (0, i.jsxs)(eP.CB, {
                    children: [
                        (0, i.jsx)(ez, {
                            channel: t,
                            guild: Y,
                            hasConnectPermission: J,
                            participantsOpen: U,
                            renderExternalHeader: n,
                            appContext: y,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: Q,
                            selectedStream: W,
                            mode: P,
                            inCall: I,
                            participants: T,
                            filteredParticipants: R,
                            participantsVersion: L,
                            layout: M,
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
                            theme: eC,
                            canPopout: s,
                            popoutType: r,
                            guildRoomVisible: ed && eu,
                            isPlacingNote: eA,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eP.wQ, {}),
                        (0, i.jsx)(eR.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
