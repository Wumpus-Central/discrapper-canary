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
    f = n(857250),
    A = n(97483),
    x = n(38021),
    g = n(228366),
    C = n(367513),
    y = n(442433),
    j = n(730852),
    I = n(401843),
    v = n(817281),
    N = n(820284),
    E = n(765671),
    b = n(475743),
    _ = n(646865),
    T = n(10716),
    R = n(795816),
    S = n(933958),
    L = n(47294),
    O = n(793574),
    P = n(95561),
    M = n(688810),
    w = n(139286),
    D = n(587895),
    U = n(235986),
    V = n(558845),
    k = n(643501),
    G = n(857253),
    B = n(652896),
    F = n(279250),
    z = n(558076),
    H = n(360729),
    W = n(700948),
    $ = n(267102),
    Y = n(574172),
    K = n(869146),
    q = n(976860),
    X = n(326567),
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
    ef = n(696451),
    eA = n(71393),
    ex = n(576705),
    eg = n(309010),
    eC = n(287809),
    ey = n(977997),
    ej = n(174459),
    eI = n(871237),
    ev = n(625494),
    eN = n(723702),
    eE = n(19575),
    eb = n(475815),
    e_ = n(198052),
    eT = n(520698),
    eR = n(43189),
    eS = n(518530),
    eL = n(681281),
    eO = n(587837),
    eP = n(675853),
    eM = n(384059),
    ew = n(480890),
    eD = n(806931),
    eU = n(652215),
    eV = n(375708),
    ek = n(880162);
let eG = 2e3,
    eB = { [eU.DUB.NORMAL]: ek.qb, [eU.DUB.MINIMUM]: ek.Bp, [eU.DUB.NO_CHAT]: ek.Oo, [eU.DUB.FULL_SCREEN]: ek.iy },
    eF = { [eU.BRT.POPOUT]: ek.SW, [eU.BRT.APP]: null, [eU.BRT.OVERLAY]: null, [eU.BRT.CALL_TILE_POPOUT]: null };
function ez(e) {
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
        u = (0, d.bG)([D.A], () => (l?.type === eD.lp.ACTIVITY ? D.A.getApplication(l.applicationId) : void 0)),
        h = t === eU.DUB.NO_CHAT ? ea.A.Directions.UP : ea.A.Directions.DOWN,
        p = [eU.DUB.FULL_SCREEN, eU.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < en.vs.NO_INVITE
                ? (0, i.jsx)(er.A, {
                      channel: n,
                      stream: l?.type === eD.lp.STREAM ? (0, B.Iy)(l.id) : void 0,
                      className: ek.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eU.rbe.GUILD_VOICE ? eU.liQ.GUILD_CHANNEL : eU.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(U.A, {
                      className: ek.P0,
                      align: U.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ea.A, {
                          label: p ? eV.intl.string(eV.t.kkKapG) : eV.intl.string(eV.t["5MstTl"]),
                          direction: h,
                          className: ek.jZ,
                          onClick: () => {
                              (0, eM.X)(O.A.VOICE_CONTROL_TRAY, eM.O.CHAT, p), r();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eH extends l.PureComponent {
    _prevLayout = eU.DUB.MINIMUM;
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
            ej.default.track(eU.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, P.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eb.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eN.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        null != a &&
            e.mode === eU._Of.VIDEO &&
            i === eU._Of.VOICE &&
            (0, eb._U)(a, this.currentDocument) &&
            (0, eb.sP)(a, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && g.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eN.isPlatformEmbedded && eE.Ay.supportsFeature(eU.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eN.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.props.appContext === eU.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eU._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eU._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eU._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eU.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eU.DUB.MINIMUM || e === eU.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eU.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eU.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eU.DUB.NO_CHAT:
            case eU.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eb._U)(e, this.currentDocument) ||
                this.props.layout !== eU.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eU.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eU.DUB.FULL_SCREEN), (0, eb.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eU.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eb.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eU.DUB.NORMAL ? eU.DUB.NO_CHAT : eU.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (C.A.updateLayout(t.id, e, n),
            e === eU.DUB.FULL_SCREEN && t.isPrivate() && ev._.dispatch(eU.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eU.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, w.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eD.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eD.GK.CONTEXT_MENU;
        return (0, ew.s)(e, O.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eD.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eD.lp.HIDDEN_STREAM:
            case eD.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eD.qs.STREAM),
                    (0, y.L3)(
                        t,
                        async () => {
                            let { default: t } = await Promise.all([
                                n.e("189673"),
                                n.e("245996"),
                                n.e("529422"),
                                n.e("58315"),
                                n.e("766692"),
                            ]).then(n.bind(n, 796175));
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
                                        eD.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case eD.lp.USER:
                this.trackCallTileContextMenuImpression(e, eD.qs.USER);
                let u = eC.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, X.r)(t, u, s, d, (e, t) =>
                            (0, ew.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eD.GK.THREE_DOT,
                                tileType: eD.qs.USER,
                                targetUserId: u.id,
                                location: O.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eU.rbe.DM:
                            return (0, y.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("924697"),
                                        n.e("866038"),
                                        n.e("926132"),
                                        n.e("146652"),
                                        n.e("893190"),
                                        n.e("391763"),
                                        n.e("708757"),
                                        n.e("585968"),
                                        n.e("189673"),
                                        n.e("238730"),
                                        n.e("229787"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("576665"),
                                        n.e("776273"),
                                        n.e("947502"),
                                        n.e("245996"),
                                        n.e("965789"),
                                        n.e("823427"),
                                        n.e("529422"),
                                        n.e("172883"),
                                        n.e("307059"),
                                        n.e("21106"),
                                        n.e("187048"),
                                        n.e("171375"),
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
                                                eD.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eU.rbe.GROUP_DM:
                            return (0, y.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("924697"),
                                        n.e("866038"),
                                        n.e("926132"),
                                        n.e("146652"),
                                        n.e("893190"),
                                        n.e("708757"),
                                        n.e("585968"),
                                        n.e("189673"),
                                        n.e("229787"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("576665"),
                                        n.e("776273"),
                                        n.e("624198"),
                                        n.e("245996"),
                                        n.e("823427"),
                                        n.e("529422"),
                                        n.e("172883"),
                                        n.e("307059"),
                                        n.e("528864"),
                                    ]).then(n.bind(n, 778595));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === eU.DUB.MINIMUM || c === eU.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eD.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eU.rbe.GUILD_VOICE:
                        case eU.rbe.PUBLIC_THREAD:
                        case eU.rbe.PRIVATE_THREAD:
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
                                            n.e("708757"),
                                            n.e("585968"),
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
                                                    eD.qs.USER,
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
        (0, eD.Ay)(e) &&
            (0, F.eo)(n, ey.A, eA.A, ex.A, k.default)[0] &&
            (j.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, B._z)(t) === e.id && t.state !== eU.XYD.ENDED).length &&
                (0, I.A9)((0, B.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eU._Of.VIDEO &&
                (i?.id === e.id ? C.A.selectParticipant(n.id, null) : C.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, R.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            null == n || ef.Ay.isCurrentUserGuest(n) || (0, q.pX)((0, eI.vJ)(n)), Y.openChannelCallPopout(e);
        }
        null == t || (0, _.f)() ? n() : (0, L.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eM.X)(O.A.VOICE_CONTROL_TRAY, eM.O.STAY_ON_TOP, e), Y.setAlwaysOnTop(eU.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        Y.close(eU.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eU.DUB.FULL_SCREEN;
        ((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eU.DUB.MINIMUM || n === eU.DUB.NORMAL
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
                e === eU.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eU.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(ez, {
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
                null != l && l.type !== eD.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(ed.A, {
                          context: (0, eT.A)(l.type),
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
                              (0, eM.X)(O.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eM.X)(O.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !1), this.handleClosePopout();
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
                              (0, eM.X)(
                                  O.A.VOICE_CONTROL_TRAY,
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
                awaitingRemoteSessionInfo: f,
                currentChannelActivities: A,
                callContainerDimensions: x,
                guildRoomVisible: g,
                isPlacingNote: C,
            } = this.props,
            y = p === eU.DUB.MINIMUM,
            j = y || p === eU.DUB.NORMAL,
            I = l && s === eU._Of.VIDEO,
            v = (A?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let N = !l || !(this.popoutOpen && !this.inPopout),
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
                      showParticipants: r && (!j || v),
                      popoutType: t,
                      awaitingRemoteSessionInfo: f,
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
            children: N && b,
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
            h = l === eU._Of.VIDEO,
            m = e !== eU.DUB.NO_CHAT && e !== eU.DUB.FULL_SCREEN && null != c,
            f = eU.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: s()(ek.iE, eB[e], eF[r], {
                [ek.XW]: this.popoutOpen && !this.inPopout && e !== eU.DUB.NO_CHAT && t.isPrivate(),
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
                    theme: f,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(ek.ik, a || e !== eU.DUB.FULL_SCREEN ? void 0 : ek.iy, t),
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
            participants: _,
            filteredParticipants: R,
            participantsVersion: L,
            mode: P,
            layout: w,
            participantsOpen: D,
            chatOpen: U,
            selectedParticipant: B,
        } = (0, d.cf)([e_.A], () => {
            let e = y === eU.BRT.POPOUT,
                n = e_.A.getMode(t.id),
                i = e_.A.getLayout(t.id, y);
            e && (n = eU._Of.VIDEO);
            let l = n === eU._Of.VIDEO ? i : eU.DUB.MINIMUM;
            return (
                e && l !== eU.DUB.FULL_SCREEN && (l = eU.DUB.NO_CHAT),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== eU._Of.VOICE ? e_.A.getSelectedParticipant(t.id) : null,
                    participants: e_.A.getParticipants(t.id),
                    filteredParticipants: e_.A.getFilteredParticipants(t.id),
                    participantsOpen: e_.A.getParticipantsOpen(t.id),
                    chatOpen: e_.A.getChatOpen(t.id),
                    participantsVersion: e_.A.getParticipantsVersion(t.id),
                }
            );
        }, [y, t.id]),
        F = (0, d.yK)([eh.A], () => eh.A.getAllActiveStreams()),
        { selectedStream: W } = (0, d.cf)(
            [eh.A],
            () => ({ selectedStream: null != B ? eh.A.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        Y = (0, d.bG)([eA.A], () => eA.A.getGuild(t.getGuildId())),
        q = (0, d.bG)([ep.default], () => ep.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: Q } = (0, d.cf)([K.A], () => ({
            popoutWindow: K.A.getWindow(eU.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: K.A.getIsAlwaysOnTop(eU.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([ex.A], () => ex.A.can(eU.xBc.CONNECT, t)),
        ee = (0, d.bG)([em.A], () => em.A.getToastsEnabled(t.id)),
        et = (0, d.bG)([k.default], () => k.default.getAwaitingRemoteSessionInfo()),
        en = (0, d.bG)([Z.Ay], () => Z.Ay.callHeaderHeight),
        ei = l.useCallback((e) => {
            v.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = (0, d.bG)([T.A], () => T.A.getFetchState(), []),
        ea = (0, b.Ay)(el);
    l.useEffect(() => {
        el === T.$.ERROR && ea !== T.$.ERROR && (0, m.P0)((0, f.o)(eV.intl.string(eV.t["AlJyI+"]), A.Ck.FAILURE));
    }, [el, ea]);
    let es = (0, d.bG)([S.Ay], () => S.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        er = (0, V.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eo } = (0, M.Ay)(O.A.CHANNEL_CALL),
        ec = S.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: ed } = H.A.useExperiment({ guildId: t.guild_id, location: "ChannelCall" }),
        eu = (0, d.bG)([z.A], () => z.A.isVisible(t.id)),
        ef = (0, d.bG)([z.A], () => {
            let e = z.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        { theme: eC } = (0, x.wR)();
    return (0, i.jsx)(M.f5, {
        value: eo,
        children: (0, i.jsx)(N.A, {
            page: eU.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eR.qh, {
                children: (0, i.jsxs)(eP.CB, {
                    children: [
                        (0, i.jsx)(eH, {
                            channel: t,
                            guild: Y,
                            hasConnectPermission: J,
                            participantsOpen: D,
                            renderExternalHeader: n,
                            appContext: y,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: Q,
                            selectedStream: W,
                            mode: P,
                            inCall: I,
                            participants: _,
                            filteredParticipants: R,
                            participantsVersion: L,
                            layout: w,
                            chatOpen: U,
                            maxSidebarWidth: o - 550,
                            currentUserId: q,
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
                            isPlacingNote: ef,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eP.wQ, {}),
                        (0, i.jsx)(eR.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
