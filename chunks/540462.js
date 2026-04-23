n.r(t), n.d(t, { IDLE_TIMEOUT: () => eF, default: () => eK });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(110259),
    d = n(311907),
    u = n(554146),
    p = n(451988),
    h = n(408278),
    _ = n(825860),
    m = n(43990),
    A = n(691540),
    x = n(857250),
    f = n(97483),
    g = n(38021),
    C = n(73153),
    y = n(367513),
    v = n(442433),
    E = n(956793),
    N = n(401843),
    I = n(817281),
    j = n(820284),
    T = n(765671),
    b = n(475743),
    S = n(646865),
    R = n(10716),
    P = n(795816),
    O = n(933958),
    w = n(47294),
    L = n(793574),
    D = n(58149),
    M = n(688810),
    U = n(139286),
    V = n(587895),
    k = n(235986),
    B = n(771781),
    H = n(643501),
    F = n(857253),
    G = n(652896),
    z = n(279250),
    W = n(418126),
    Y = n(266626),
    K = n(267102),
    X = n(574172),
    q = n(869146),
    Z = n(976860),
    Q = n(326567),
    $ = n(964404),
    J = n(105225),
    ee = n(874739),
    et = n(461782),
    en = n(447404),
    ei = n(401685),
    ea = n(20465),
    el = n(156652),
    es = n(622770),
    er = n(423562),
    eo = n(520006),
    ec = n(128286),
    ed = n(619344),
    eu = n(821747),
    ep = n(125248),
    eh = n(616356),
    e_ = n(961350),
    em = n(249288),
    eA = n(696451),
    ex = n(71393),
    ef = n(576705),
    eg = n(309010),
    eC = n(287809),
    ey = n(977997),
    ev = n(954571),
    eE = n(147036),
    eN = n(203982),
    eI = n(723702),
    ej = n(837921),
    eT = n(475815),
    eb = n(134047),
    eS = n(313961),
    eR = n(520698),
    eP = n(43189),
    eO = n(518530),
    ew = n(681281),
    eL = n(587837),
    eD = n(675853),
    eM = n(384059),
    eU = n(480890),
    eV = n(806931),
    ek = n(652215),
    eB = n(985018),
    eH = n(761673);
let eF = 2e3,
    eG = {
        [ek.DUB.NORMAL]: eH.qb,
        [ek.DUB.MINIMUM]: eH.Bp,
        [ek.DUB.NO_CHAT]: eH.Oo,
        [ek.DUB.FULL_SCREEN]: eH.iy,
        [ek.DUB.HAVEN]: eH.VT,
    },
    ez = { [ek.BRT.POPOUT]: eH.SW, [ek.BRT.APP]: null, [ek.BRT.OVERLAY]: null, [ek.BRT.CALL_TILE_POPOUT]: null };
function eW(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: a,
            canChangeLayout: l,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, ei.Bx)(),
        u = (0, d.bG)([V.A], () => (a?.type === eV.lp.ACTIVITY ? V.A.getApplication(a.applicationId) : void 0)),
        p = t === ek.DUB.NO_CHAT ? es.A.Directions.UP : es.A.Directions.DOWN,
        h = [ek.DUB.FULL_SCREEN, ek.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < ei.vs.NO_INVITE
                ? (0, i.jsx)(eo.A, {
                      channel: n,
                      stream: a?.type === eV.lp.STREAM ? (0, G.Iy)(a.id) : void 0,
                      className: eH.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === ek.rbe.GUILD_VOICE ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            l
                ? (0, i.jsx)(k.A, {
                      className: eH.P0,
                      align: k.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(es.A, {
                          label: h ? eB.intl.string(eB.t.kkKapG) : eB.intl.string(eB.t["5MstTl"]),
                          direction: p,
                          className: eH.jZ,
                          onClick: () => {
                              (0, eM.X)(L.A.VOICE_CONTROL_TRAY, eM.O.CHAT, h), r();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eY extends a.PureComponent {
    _prevLayout = ek.DUB.MINIMUM;
    _wrapperRef = a.createRef();
    _callContainerRef = a.createRef();
    _channelChatRef = a.createRef();
    _contentRef = a.createRef();
    _videoBackgroundTooltipTimeout = new p.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: $.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eT.Wb, this.handleFullScreenChange),
            ev.default.track(ek.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, D.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eT.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eI.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: a } = this.props,
            l = this.getRootNode();
        null != l &&
            e.mode === ek._Of.VIDEO &&
            i === ek._Of.VOICE &&
            (0, eT._U)(l, this.currentDocument) &&
            (0, eT.sP)(l, this.currentDocument),
            (e.participantsOpen !== t || a !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && C.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eI.isPlatformEmbedded && ej.Ay.supportsFeature(ek.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eI.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eB.intl.string(eB.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === ek.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: a } = this.props,
            l = t === ek._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === ek._Of.VIDEO && i && this.popoutSupported && a,
            r = t !== ek._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === ek.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === ek.DUB.MINIMUM || e === ek.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: l,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: l, useTheme: !0 };
        switch (e) {
            case ek.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case ek.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case ek.DUB.HAVEN:
            case ek.DUB.NO_CHAT:
            case ek.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eT._U)(e, this.currentDocument) ||
                this.props.layout !== ek.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== ek.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(ek.DUB.FULL_SCREEN), (0, eT.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === ek.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eT.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === ek.DUB.NORMAL ? ek.DUB.NO_CHAT : ek.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === ek.DUB.HAVEN
            ? (this.handleChangeLayout(ek.DUB.NO_CHAT), W.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(ek.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (y.A.updateLayout(t.id, e, n),
            e === ek.DUB.FULL_SCREEN && t.isPrivate() && eN._.dispatch(ek.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === ek.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, U.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eV.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eV.GK.CONTEXT_MENU;
        return (0, eU.s)(e, L.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eV.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, a, l) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eV.lp.HIDDEN_STREAM:
            case eV.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eV.qs.STREAM),
                    (0, v.L3)(
                        t,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    stream: e.stream,
                                    exitFullscreen: this.maybeLeaveFullScreen,
                                    appContext: r,
                                    minimal: a,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        eV.qs.STREAM,
                                        l,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case eV.lp.USER:
                this.trackCallTileContextMenuImpression(e, eV.qs.USER);
                let u = eC.default.getUser(e.id);
                if (null != u) {
                    if (a)
                        return (0, Q.r)(t, u, s, d, (e, t) =>
                            (0, eU.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eV.GK.THREE_DOT,
                                tileType: eV.qs.USER,
                                targetUserId: u.id,
                                location: L.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case ek.rbe.DM:
                            return (0, v.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("53635"),
                                        n.e("42128"),
                                        n.e("95834"),
                                        n.e("39778"),
                                        n.e("15104"),
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
                                                eV.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case ek.rbe.GROUP_DM:
                            return (0, v.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("53635"),
                                        n.e("42128"),
                                        n.e("62891"),
                                        n.e("62705"),
                                    ]).then(n.bind(n, 228006));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === ek.DUB.MINIMUM || c === ek.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eV.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case ek.rbe.GUILD_VOICE:
                        case ek.rbe.PUBLIC_THREAD:
                        case ek.rbe.PRIVATE_THREAD:
                            let l = s.getGuildId();
                            return (
                                o()(null != l, "GuildID null for guild voice channel"),
                                (0, v.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("84841"),
                                            n.e("49015"),
                                        ]).then(n.bind(n, 107632));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                showMediaItems: !0,
                                                showChannelCallItems: !0,
                                                showChatItems: !1,
                                                user: u,
                                                channel: s,
                                                guildId: l,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    eV.qs.USER,
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
        let { channel: n, selectedParticipant: i, allActiveStreams: a, inCall: l, mode: s } = this.props;
        (0, eV.Ay)(e) &&
            (0, z.eo)(n, ey.A, ex.A, ef.A, H.default)[0] &&
            (E.default.selectVoiceChannel(n.id),
            0 === a.filter((t) => (0, G._z)(t) === e.id && t.state !== ek.XYD.ENDED).length &&
                (0, N.A9)((0, G.Iy)(e.id), { forceMultiple: t.shiftKey })),
            l &&
                s === ek._Of.VIDEO &&
                (i?.id === e.id ? y.A.selectParticipant(n.id, null) : y.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, P.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || eA.Ay.isCurrentUserGuest(n) || (0, Z.pX)((0, eE.vJ)(n)), X.openChannelCallPopout(e);
            };
        null == t || (0, S.f)() ? n() : (0, w.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eM.X)(L.A.VOICE_CONTROL_TRAY, eM.O.STAY_ON_TOP, e), X.setAlwaysOnTop(ek.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        X.close(ek.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            a = n === ek.DUB.FULL_SCREEN;
        ((!a && i?.id !== e.id) || (a && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === ek.DUB.MINIMUM || n === ek.DUB.NORMAL
            ? (0, i.jsx)(J.Ay, {
                  exitFullScreen: this.maybeLeaveFullScreen,
                  channel: e,
                  onDisconnectCall: this.handleDisconnect,
                  idleProps: this._lastIdleProps,
              })
            : null;
    };
    renderBottomLeft = () => {
        let { layout: e, channel: t, selectedParticipant: n, inCall: a } = this.props,
            { canChangeLayout: l, canInvite: s } = this.viewProperties,
            r =
                e === ek.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = ek.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return a
            ? (0, i.jsx)(eW, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: l,
                  canInvite: s,
                  onToggleChat: r,
                  maybeLeaveFullScreen: this.maybeLeaveFullScreen,
              })
            : null;
    };
    renderBottomRight = () => {
        let {
                popoutWindow: e,
                popoutWindowAlwaysOnTop: t,
                currentUserId: n,
                selectedParticipant: a,
                inCall: l,
                canUseHaven: s,
            } = this.props,
            { canFullscreen: r, canStayOnTop: o, canPopout: c, useTheme: d } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != a && a.type !== eV.lp.ACTIVITY && a.user.id !== n
                    ? (0, i.jsx)(eu.A, {
                          context: (0, eR.A)(a.type),
                          userId: a.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eH.MQ,
                          className: eH.iq,
                          location: L.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(ed.A, {
                          className: eH.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                s &&
                    l &&
                    (0, i.jsx)(h.K, {
                        variant: "icon-only",
                        "aria-label": "Haven",
                        icon: _.Y,
                        onClick: this.handleHaven,
                    }),
                c
                    ? (0, i.jsx)(ec.A, {
                          themeable: d,
                          popoutOpen: this.popoutOpen,
                          className: eH.iq,
                          onOpenPopout: () => {
                              (0, eM.X)(L.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eM.X)(L.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                r
                    ? (0, i.jsx)(er.A, {
                          themeable: d,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eH.iq,
                          onClick: () => {
                              (0, eM.X)(
                                  L.A.VOICE_CONTROL_TRAY,
                                  eM.O.FULL_SCREEN,
                                  this.props.layout !== ek.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen();
                          },
                      })
                    : null,
            ],
        });
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: a } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && a)
            ? null
            : (0, i.jsx)(eP.Ay, { children: (0, i.jsx)(ea.A, { className: eH.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eD.Ay, { children: (0, i.jsx)(ep.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: a, chatOpen: l, inCall: s } = this.props,
            { useExternalHeader: r, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)(en.A, {
                  children: (0, i.jsx)("div", {
                      className: eH.dL,
                      children: r
                          ? e?.()
                          : (0, i.jsx)(ew.A, {
                                channel: t,
                                guild: n,
                                appContext: a,
                                inCall: s,
                                isChatOpen: l || (this.popoutOpen && !this.inPopout && s),
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
                inCall: a,
                hasConnectPermission: l,
                mode: s,
                participantsOpen: r,
                participants: o,
                filteredParticipants: c,
                participantsVersion: d,
                channel: u,
                guild: p,
                layout: h,
                forceShowControls: _,
                awaitingRemoteSessionInfo: m,
                currentChannelActivities: A,
                callContainerDimensions: x,
            } = this.props,
            f = h === ek.DUB.MINIMUM,
            g = f || h === ek.DUB.NORMAL,
            C = a && s === ek._Of.VIDEO,
            y = (A?.length ?? 0) > 0 && u.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(el.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !a || f,
                idle: !_ && a && !f && e.idle,
                children:
                    a && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(ee.A, {
                              ref: this._contentRef,
                              inCall: a,
                              channel: u,
                              hasConnectPermission: l,
                              guild: p,
                              participants: o,
                              filteredParticipants: c,
                              participantsVersion: d,
                              selectedParticipant: C ? n : null,
                              layout: h,
                              idle: e.idle,
                              mode: s,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: r && (!g || y),
                              popoutType: t,
                              awaitingRemoteSessionInfo: m,
                              callContainerDimensions: x,
                          }),
            })
        );
    }
    render() {
        let {
                layout: e,
                channel: t,
                guild: n,
                mode: a,
                chatOpen: l,
                appContext: r,
                maxSidebarWidth: o,
                maxHeight: c,
                inCall: d,
            } = this.props,
            { resizedHeight: u } = this.state,
            p = a === ek._Of.VIDEO,
            h = e !== ek.DUB.HAVEN && e !== ek.DUB.NO_CHAT && e !== ek.DUB.FULL_SCREEN && null != c,
            _ = ek.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: s()(eH.iE, eG[e], ez[r], {
                [eH.XW]: this.popoutOpen && !this.inPopout && e !== ek.DUB.NO_CHAT && t.isPrivate(),
                [eH.Ki]: p,
                [eH.vc]: l,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: h && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(m.N, {
                    theme: _,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(eH.ik, l || e !== ek.DUB.FULL_SCREEN ? void 0 : eH.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(et.Ay, { timeout: eF, children: (e) => this.renderContent(e) }),
                        }),
                }),
                h &&
                    (0, i.jsx)(eL.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eH.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        l &&
                        (0, i.jsx)(eO.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eK = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: l, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, T.Ay)(),
        { width: p = 0, height: h = 0, ref: _ } = (0, T.Ay)(),
        { ref: m } = (0, T.Ay)(),
        C = (0, K.Us)(),
        v = (0, F.A)(),
        E = (0, d.bG)([eg.A], () => (v?.channelId ?? eg.A.getVoiceChannelId()) === t.id),
        {
            participants: N,
            filteredParticipants: S,
            participantsVersion: P,
            mode: w,
            layout: D,
            participantsOpen: U,
            chatOpen: V,
            selectedParticipant: k,
        } = (0, d.cf)([eS.A], () => {
            let e = C === ek.BRT.POPOUT,
                n = eS.A.getMode(t.id),
                i = eS.A.getLayout(t.id, C);
            e && (n = ek._Of.VIDEO);
            let a = n === ek._Of.VIDEO ? i : ek.DUB.MINIMUM;
            return (
                e && a !== ek.DUB.FULL_SCREEN && (a = ek.DUB.NO_CHAT),
                i === ek.DUB.HAVEN && (a = i),
                {
                    mode: n,
                    layout: a,
                    selectedParticipant: n !== ek._Of.VOICE ? eS.A.getSelectedParticipant(t.id) : null,
                    participants: eS.A.getParticipants(t.id),
                    filteredParticipants: eS.A.getFilteredParticipants(t.id),
                    participantsOpen: eS.A.getParticipantsOpen(t.id),
                    chatOpen: eS.A.getChatOpen(t.id),
                    participantsVersion: eS.A.getParticipantsVersion(t.id),
                }
            );
        }, [C, t.id]),
        G = (0, d.yK)([eh.A], () => eh.A.getAllActiveStreams()),
        { selectedStream: z } = (0, d.cf)(
            [eh.A],
            () => ({ selectedStream: null != k ? eh.A.getActiveStreamForStreamKey(k.id) : null }),
            [k],
        ),
        W = (0, d.bG)([ex.A], () => ex.A.getGuild(t.getGuildId())),
        X = (0, d.bG)([e_.default], () => e_.default.getId()),
        { popoutWindow: Z, popoutWindowAlwaysOnTop: Q } = (0, d.cf)([q.A], () => ({
            popoutWindow: q.A.getWindow(ek.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: q.A.getIsAlwaysOnTop(ek.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([ef.A], () => ef.A.can(ek.xBc.CONNECT, t)),
        ee = (0, d.bG)([em.A], () => em.A.getToastsEnabled(t.id)),
        et = (0, d.bG)([H.default], () => H.default.getAwaitingRemoteSessionInfo()),
        en = (0, d.bG)([$.Ay], () => $.Ay.callHeaderHeight),
        ei = a.useCallback((e) => {
            I.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ea = (0, d.bG)([R.A], () => R.A.getFetchState(), []),
        el = (0, b.A)(ea);
    a.useEffect(() => {
        ea === R.$.ERROR && el !== R.$.ERROR && (0, A.P0)((0, x.o)(eB.intl.string(eB.t["AlJyI+"]), f.Ck.FAILURE));
    }, [ea, el]);
    let es = (0, d.bG)([O.Ay], () => O.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    a.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                E &&
                    w === ek._Of.VIDEO &&
                    ((t = await ej.Ay.blockDisplaySleep()), e && null != t && ej.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ej.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [E, w]);
    let er = (0, B.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eo } = (0, M.Ay)(L.A.CHANNEL_CALL),
        ec = o - 550,
        ed = O.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eu } = Y.s.useConfig({ location: "ChannelCall" }),
        ep = (0, eb.T)({ channel: t, location: "ChannelCall" });
    a.useEffect(() => {
        ep &&
            E &&
            null == eS.A.getAllChatOpen()[t.id] &&
            (o <= 0 || y.A.updateChatOpen(t.id, !0, "auto open screen width"));
    }, [ep, ec, o, t.id, E]);
    let { theme: eA } = (0, g.wR)();
    return (0, i.jsx)(M.f5, {
        value: eo,
        children: (0, i.jsx)(j.A, {
            page: ek.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eP.qh, {
                children: (0, i.jsxs)(eD.CB, {
                    children: [
                        (0, i.jsx)(eY, {
                            channel: t,
                            guild: W,
                            hasConnectPermission: J,
                            participantsOpen: U,
                            renderExternalHeader: n,
                            appContext: C,
                            popoutWindow: Z,
                            popoutWindowAlwaysOnTop: Q,
                            selectedStream: z,
                            mode: w,
                            inCall: E,
                            participants: N,
                            filteredParticipants: S,
                            participantsVersion: P,
                            layout: D,
                            chatOpen: V,
                            maxSidebarWidth: ec,
                            currentUserId: X,
                            selectedParticipant: k,
                            allActiveStreams: G,
                            connectedEmbeddedActivity: es ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: c,
                            callContainerDimensions: { width: p, height: h },
                            callContainerRef: _,
                            channelChatRef: m,
                            width: o,
                            maxHeight: l,
                            forceShowControls: er,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: ed,
                            theme: eA,
                            canPopout: s,
                            popoutType: r,
                            canUseHaven: eu,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eD.wQ, {}),
                        (0, i.jsx)(eP.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
