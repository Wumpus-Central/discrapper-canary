n.d(t, { Z: () => eY }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(990547),
    u = n(442837),
    d = n(704215),
    p = n(846519),
    h = n(780384),
    f = n(481060),
    m = n(570140),
    g = n(475179),
    b = n(239091),
    _ = n(287734),
    C = n(872810),
    v = n(153867),
    y = n(944543),
    x = n(410575),
    j = n(393238),
    O = n(110924),
    N = n(40851),
    E = n(636449),
    P = n(115130),
    I = n(317381),
    S = n(596040),
    Z = n(349619),
    T = n(100527),
    A = n(367907),
    w = n(906732),
    R = n(213609),
    k = n(600164),
    M = n(540059),
    L = n(211644),
    D = n(258609),
    W = n(446226),
    U = n(203341),
    B = n(569545),
    F = n(102172),
    H = n(788983),
    G = n(928518),
    V = n(191302),
    z = n(703656),
    q = n(880395),
    Y = n(740492),
    K = n(793319),
    X = n(3861),
    Q = n(493754),
    J = n(937995),
    $ = n(618158),
    ee = n(880831),
    et = n(73563),
    en = n(751843),
    er = n(268353),
    ei = n(786915),
    el = n(800965),
    eo = n(107169),
    ea = n(891551),
    es = n(488785),
    ec = n(199902),
    eu = n(314897),
    ed = n(979696),
    ep = n(523746),
    eh = n(430824),
    ef = n(496675),
    em = n(306680),
    eg = n(944486),
    eb = n(594174),
    e_ = n(979651),
    eC = n(626135),
    ev = n(934415),
    ey = n(585483),
    ex = n(358085),
    ej = n(998502),
    eO = n(228488),
    eN = n(358221),
    eE = n(682901),
    eP = n(414910),
    eI = n(887012),
    eS = n(909820),
    eZ = n(493010),
    eT = n(742603),
    eA = n(71127),
    ew = n(221888),
    eR = n(185935),
    ek = n(900211),
    eM = n(18759),
    eL = n(878752),
    eD = n(354459),
    eW = n(981631),
    eU = n(388032),
    eB = n(441274);
function eF(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eH(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eF(e, t, n[t]);
            });
    }
    return e;
}
function eG(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eV = {
        [eW.AEg.NORMAL]: eB.normal,
        [eW.AEg.MINIMUM]: eB.minimum,
        [eW.AEg.NO_CHAT]: eB.noChat,
        [eW.AEg.FULL_SCREEN]: eB.fullScreen
    },
    ez = {
        [eW.IlC.POPOUT]: eB.popout,
        [eW.IlC.APP]: null,
        [eW.IlC.OVERLAY]: null
    };
class eq extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eO.NO, this.handleFullScreenChange), eC.default.track(eW.rMx.VIDEO_LAYOUT_TOGGLED, eH({ video_layout: this.inPopout ? 'popout' : t }, (0, A.AB)(e.id)));
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eO.NO, this.handleFullScreenChange), (this.inPopout && (0, ex.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === eW.WtW.VIDEO && r === eW.WtW.VOICE && (0, eO.rB)(l, this.currentDocument) && (0, eO.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var o;
            null === (o = this._contentRef.current) || void 0 === o || o.triggerResize();
        }
        e.inCall && !n && this.inPopout && m.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ex.isPlatformEmbedded && ej.ZP.supportsFeature(eW.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ex.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eU.NW.string(eU.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eW.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eW.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eW.WtW.VIDEO && r && this.popoutSupported,
            o = t !== eW.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            a = n.type === eW.d4z.GUILD_VOICE,
            s = e === eW.AEg.MINIMUM || e === eW.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            u = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: s,
                canInvite: a,
                canPopout: l,
                canFullscreen: i,
                canSelectRegion: n.isPrivate(),
                canChangeLayout: o,
                canStayOnTop: c
            };
        if (!r)
            return eG(eH({}, u), {
                canFullscreen: i,
                useTheme: !0
            });
        switch (e) {
            case eW.AEg.FULL_SCREEN:
                return eG(eH({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case eW.AEg.MINIMUM:
                return eG(eH({}, u), {
                    canPopout: !1,
                    useTheme: !0
                });
            case eW.AEg.NO_CHAT:
            case eW.AEg.NORMAL:
                return eH({}, u);
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: o, popoutWindow: a, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            { isDesktopVisualRefreshEnabled: C, isStaff: v } = this.state,
            y = f === eW.AEg.MINIMUM,
            x = y || f === eW.AEg.NORMAL,
            j = i && o === eW.WtW.VIDEO,
            O = (null !== (t = null == b ? void 0 : b.length) && void 0 !== t ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                et.Z,
                eG(
                    eH(
                        {
                            renderHeader: this.renderHeader,
                            renderBottomLeft: this.renderBottomLeft,
                            renderBottomCenter: this.renderBottomCenter,
                            renderBottomRight: this.renderBottomRight,
                            renderChatToasts: p.isGuildVoice() ? this.renderChatToasts : void 0,
                            renderVoiceChannelEffects: this.renderVoiceChannelEffects
                        },
                        e
                    ),
                    {
                        screenMessage: this.screenMessage,
                        disableGradients: (C && v && !i) || y,
                        idle: !m && i && !y && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(V.Z, { channel: p }),
                                          (0, r.jsx)(X.Z, {
                                              ref: this._contentRef,
                                              inCall: i,
                                              paused: this.paused,
                                              channel: p,
                                              hasConnectPermission: l,
                                              guild: h,
                                              participants: c,
                                              filteredParticipants: u,
                                              participantsVersion: d,
                                              selectedParticipant: j ? n : null,
                                              layout: f,
                                              idle: e.idle,
                                              mode: o,
                                              onSelectParticipant: this.handleSelectParticipant,
                                              onContextMenuParticipant: this.handleContextMenu,
                                              showParticipants: s && (!x || O),
                                              popoutWindow: this.inPopout ? a : null,
                                              awaitingRemoteSessionInfo: g,
                                              callContainerDimensions: _
                                          })
                                      ]
                                  })
                    }
                )
            )
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: i, chatOpen: l, appContext: a, maxSidebarWidth: s, maxHeight: c, inCall: u, participantsListOpen: d, theme: p } = this.props,
            { resizedHeight: m } = this.state,
            g = i === eW.WtW.VIDEO,
            b = e !== eW.AEg.NO_CHAT && e !== eW.AEg.FULL_SCREEN && null != c,
            _ = g ? ((0, h.ap)(p) ? eW.BRd.DARK : p) : void 0;
        return (0, r.jsxs)('div', {
            className: o()(eB.wrapper, eV[e], ez[a], {
                [eB.poppedOut]: this.popoutOpen && !this.inPopout && e !== eW.AEg.NO_CHAT && t.isPrivate(),
                [eB.video]: g,
                [eB.sidebarOpen]: l || d
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                b && null != m
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: m
                      }
                    : void 0,
            children: [
                (0, r.jsx)(f.f6W, {
                    theme: _,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: o()(eB.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(J.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                b &&
                    (0, r.jsx)(ek.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, r.jsx)('div', {
                    className: eB.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                l &&
                                    (0, r.jsx)(eZ.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s
                                    }),
                                d &&
                                    (0, r.jsx)(eA.Z, {
                                        channel: t,
                                        maxWidth: s
                                    })
                            ]
                        })
                })
            ]
        });
    }
    constructor(...e) {
        var t, l;
        super(...e),
            eF(this, '_prevLayout', eW.AEg.MINIMUM),
            eF(this, '_wrapperRef', i.createRef()),
            eF(this, '_callContainerRef', i.createRef()),
            eF(this, '_channelChatRef', i.createRef()),
            eF(this, '_contentRef', i.createRef()),
            eF(this, '_videoBackgroundTooltipTimeout', new p.V7()),
            eF(this, '_lastIdleProps', null),
            eF(this, 'state', {
                resizedHeight: Y.ZP.callHeaderHeight,
                isDesktopVisualRefreshEnabled: (0, M.i9)('ChannelCall'),
                isStaff: null !== (l = null === (t = eb.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== l && l
            }),
            eF(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null == e || (0, eO.rB)(e, this.currentDocument) || this.props.layout !== eW.AEg.FULL_SCREEN || this.handleFullScreen();
            }),
            eF(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eW.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eW.AEg.FULL_SCREEN), (0, eO.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eF(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eW.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eO.Pr)(e, this.currentDocument));
            }),
            eF(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eW.AEg.NORMAL ? eW.AEg.NO_CHAT : eW.AEg.NORMAL);
            }),
            eF(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (g.Z.updateLayout(t.id, e, n), e === eW.AEg.FULL_SCREEN && t.isPrivate() && ey.S.dispatch(eW.CkL.TEXTAREA_BLUR));
            }),
            eF(this, 'handleDisconnect', () => {
                this.props.layout === eW.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eF(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, R.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'ChannelCall',
                        is_tile_owner: e.type !== eD.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            eF(this, 'handleContextMenu', (e, t, i) => {
                var l, o;
                let { channel: a, appContext: c, layout: u } = this.props,
                    d = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: c
                    };
                switch ((null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle('menu'), null === (o = this._lastIdleProps) || void 0 === o || o.onActive(), e.type)) {
                    case eD.fO.HIDDEN_STREAM:
                    case eD.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eD.TH.STREAM),
                            (0, b.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eG(eH({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: c,
                                                simplified: i
                                            })
                                        );
                                },
                                d
                            );
                        return;
                    case eD.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eD.TH.USER);
                        let p = eb.default.getUser(e.id);
                        if (null != p) {
                            if (this.props.enableSimplifiedCallSettings && i) return (0, q.D)(t, p, a, d);
                            switch (a.type) {
                                case eW.d4z.DM:
                                    return (0, b.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('56826'), n.e('23284')]).then(n.bind(n, 131404));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    eG(eH({}, t), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: p,
                                                        channel: a,
                                                        showModalItems: !0
                                                    })
                                                );
                                        },
                                        d
                                    );
                                case eW.d4z.GROUP_DM:
                                    return (0, b.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('22905')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    eG(eH({}, t), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: u === eW.AEg.MINIMUM || u === eW.AEg.NORMAL,
                                                        user: p,
                                                        channel: a,
                                                        showModalItems: !0
                                                    })
                                                );
                                        },
                                        d
                                    );
                                case eW.d4z.GUILD_VOICE:
                                case eW.d4z.PUBLIC_THREAD:
                                case eW.d4z.PRIVATE_THREAD:
                                    let e = a.getGuildId();
                                    return (
                                        s()(null != e, 'GuildID null for guild voice channel'),
                                        (0, b.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eG(eH({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: p,
                                                            channel: a,
                                                            guildId: e,
                                                            showModalItems: !0
                                                        })
                                                    );
                                            },
                                            d
                                        )
                                    );
                            }
                        }
                }
            }),
            eF(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eF(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: o } = this.props;
                (0, eD._5)(e) && (0, F.p9)(n, e_.Z, eh.Z, ef.Z, D.Z)[0] && (_.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, B.V9)(t) === e.id && t.state !== eW.jm8.ENDED).length && (0, C.rn)((0, B.my)(e.id), { forceMultiple: t.shiftKey })), l && o === eW.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? g.Z.selectParticipant(n.id, null) : g.Z.selectParticipant(n.id, e.id));
            }),
            eF(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, z.uL)((0, ev.LY)(t)), H.hP(e);
                    };
                !t || (0, E.R)() ? n() : (0, Z.Z)(n);
            }),
            eF(this, 'handleStayOnTop', (e) => {
                H.hY(eW.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eF(this, 'handleClosePopout', () => {
                H.xv(eW.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eF(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eW.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eF(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === eW.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(y.Z, { call: t })),
                    (0, r.jsx)(k.Z, {
                        justify: k.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eF(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eW.AEg.MINIMUM || n === eW.AEg.NORMAL
                    ? (0, r.jsx)(K.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eF(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: i, useNewInviteButton: l, selectedParticipant: a, shouldUseVoiceEffectsActionBar: s, showGameConsoleCallButton: c, inCall: u, participants: d, enableSimplifiedCallSettings: p } = this.props;
                if (!u) return null;
                let h = e === eW.AEg.NO_CHAT ? en.Z.Directions.UP : en.Z.Directions.DOWN,
                    m = [eW.AEg.FULL_SCREEN, eW.AEg.NO_CHAT].includes(e),
                    g = d.some((e) => e.type === eD.fO.STREAM),
                    b =
                        e === eW.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eW.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: _, canInvite: C } = this.viewProperties,
                    v = l
                        ? (0, r.jsx)(Q.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eD.fO.STREAM ? (0, B.my)(a.id) : void 0,
                              applicationId: (null == a ? void 0 : a.type) === eD.fO.ACTIVITY ? a.applicationId : void 0,
                              appContext: i,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eW.d4z.GUILD_VOICE ? eW.ZY5.GUILD_CHANNEL : eW.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(ei.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eD.fO.STREAM ? (0, B.my)(a.id) : void 0,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eW.d4z.GUILD_VOICE ? eW.ZY5.GUILD_CHANNEL : eW.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        C && !s ? v : null,
                        _
                            ? (0, r.jsxs)(k.Z, {
                                  className: eB.iconWrapper,
                                  align: k.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(en.Z, {
                                          label: m ? eU.NW.string(eU.t.kkKapK) : eU.NW.string(eU.t['5MstTk']),
                                          direction: h,
                                          className: eB.leftTrayIcon,
                                          onClick: b
                                      }),
                                      m && t > 0
                                          ? (0, r.jsx)(f.mAB, {
                                                className: eB.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == a ? void 0 : a.type) !== eD.fO.STREAM && (null == a ? void 0 : a.type) !== eD.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)($.Z, {
                                  children: (0, r.jsx)(ew.Z, {
                                      className: o()(eB.leftTrayIcon, eB.viewersButton),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eW.AEg.FULL_SCREEN
                                  })
                              }),
                        s &&
                            (0, r.jsx)(eL.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: g,
                                themeable: this.viewProperties.useTheme
                            }),
                        c &&
                            !p &&
                            (0, r.jsx)(U.Z, {
                                themeable: this.viewProperties.useTheme,
                                className: eB.leftTrayIcon,
                                channel: n
                            })
                    ]
                });
            }),
            eF(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: i } = this.props,
                    { canFullscreen: l, canStayOnTop: o, canPopout: a, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eD.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(ea.Z, {
                                  context: (0, eP.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eB.volumeSlider,
                                  className: eB.rightTrayIcon
                              })
                            : null,
                        o
                            ? (0, r.jsx)(eo.Z, {
                                  className: eB.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        a
                            ? (0, r.jsx)(el.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eB.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        l
                            ? (0, r.jsx)(er.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eB.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eF(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eS.ZP, {
                          children: (0, r.jsx)(ee.Z, {
                              className: eB.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eF(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eM.ZP, {
                    children: (0, r.jsx)(es.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eF(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: i, chatOpen: l, inCall: o } = this.props,
                    { useExternalHeader: a, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)($.Z, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eB.headerWrapper,
                                  children: a
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, r.jsx)(eT.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: i,
                                            inCall: o,
                                            isChatOpen: l || (this.popoutOpen && !this.inPopout && o),
                                            exitFullScreen: this.maybeLeaveFullScreen
                                        })
                              }),
                              s ? this.renderRegionSelect() : null
                          ]
                      })
                    : null;
            });
    }
}
let eY = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: o } = e,
        { width: a = 0, ref: s } = (0, j.Z)(),
        { width: c = 0, height: p = 0, ref: h } = (0, j.Z)(),
        { ref: m } = (0, j.Z)(),
        g = (0, N.bp)(),
        b = (0, W.Z)(),
        _ = (0, u.e7)([eg.Z], () => {
            var e;
            return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : eg.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: y,
            participantsVersion: E,
            mode: Z,
            layout: A,
            participantsOpen: R,
            participantsListOpen: k,
            chatOpen: M,
            selectedParticipant: B
        } = (0, u.cj)(
            [eN.Z],
            () => {
                let e = g === eW.IlC.POPOUT,
                    t = eN.Z.getMode(n.id);
                e && (t = eW.WtW.VIDEO);
                let r = t === eW.WtW.VIDEO ? eN.Z.getLayout(n.id, g) : eW.AEg.MINIMUM;
                return (
                    e && r !== eW.AEg.FULL_SCREEN && (r = eW.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== eW.WtW.VOICE ? eN.Z.getSelectedParticipant(n.id) : null,
                        participants: eN.Z.getParticipants(n.id),
                        filteredParticipants: eN.Z.getFilteredParticipants(n.id),
                        participantsOpen: eN.Z.getParticipantsOpen(n.id),
                        chatOpen: eN.Z.getChatOpen(n.id),
                        participantsListOpen: eN.Z.getParticipantsListOpen(n.id),
                        participantsVersion: eN.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        F = (0, u.Wu)([ec.Z], () => ec.Z.getAllActiveStreams()),
        { selectedStream: H } = (0, u.cj)([ec.Z], () => ({ selectedStream: null != B ? ec.Z.getActiveStreamForStreamKey(B.id) : null }), [B]),
        V = (0, u.e7)([eh.Z], () => eh.Z.getGuild(n.getGuildId())),
        z = (0, u.e7)([ep.Z], () => ep.Z.getCall(n.id), [n.id]),
        q = (0, u.e7)([em.ZP], () => em.ZP.getMentionCount(n.id), [n.id]),
        K = (0, u.e7)([eu.default], () => eu.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: Q } = (0, u.cj)([G.Z], () => ({
            popoutWindow: G.Z.getWindow(eW.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: G.Z.getIsAlwaysOnTop(eW.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, u.e7)([ef.Z], () => ef.Z.can(eW.Plq.CONNECT, n)),
        $ = (0, u.e7)([ed.Z], () => ed.Z.getToastsEnabled(n.id)),
        ee = (0, u.e7)([D.Z], () => D.Z.getAwaitingRemoteSessionInfo()),
        et = (0, u.e7)([Y.ZP], () => Y.ZP.callHeaderHeight),
        en = i.useCallback((e) => {
            v.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        er = null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null,
        ei = (0, S.Z)(er, n.id),
        el = (0, u.e7)([P.Z], () => P.Z.getFetchState(), []),
        eo = (0, O.Z)(el);
    i.useEffect(() => {
        el === P.O.ERROR && eo !== P.O.ERROR && (0, f.showToast)((0, f.createToast)(eU.NW.string(eU.t.AlJyIy), f.ToastType.FAILURE));
    }, [el, eo]);
    let ea = (0, u.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && Z === eW.WtW.VIDEO && ((t = await ej.ZP.blockDisplaySleep()), e && null != t && ej.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ej.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, Z]);
    let es = (0, U.S)(),
        eb = (0, eI.Z)(n, !0),
        { hasParticipantsPanel: e_ } = (0, eR.Z)({ location: 'ChannelCall' }),
        { enabled: eC } = (0, eE.Z)({ location: 'ChannelCall' }),
        ev = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ey } = (0, w.ZP)(T.Z.CHANNEL_CALL),
        ex = I.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eO } = (0, f.TCT)();
    return (0, r.jsx)(w.Gt, {
        value: ey,
        children: (0, r.jsx)(x.Z, {
            page: eW.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eS.B2, {
                children: (0, r.jsxs)(eM._A, {
                    children: [
                        (0, r.jsx)(eq, {
                            channel: n,
                            guild: V,
                            hasConnectPermission: J,
                            participantsOpen: R,
                            participantsListOpen: k && e_,
                            enableSimplifiedCallSettings: eC,
                            renderExternalHeader: l,
                            appContext: g,
                            call: z,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: q,
                            selectedStream: H,
                            mode: Z,
                            inCall: _,
                            participants: C,
                            filteredParticipants: y,
                            participantsVersion: E,
                            layout: A,
                            chatOpen: M,
                            maxSidebarWidth: a - 550,
                            shouldUseVoiceEffectsActionBar: eb,
                            showGameConsoleCallButton: es,
                            currentUserId: K,
                            selectedParticipant: B,
                            allActiveStreams: F,
                            useNewInviteButton: ei,
                            connectedToEmbeddedActivity: null != ea,
                            showChatToasts: $,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: s,
                            callContainerDimensions: {
                                width: c,
                                height: p
                            },
                            callContainerRef: h,
                            channelChatRef: m,
                            width: a,
                            maxHeight: o,
                            forceShowControls: ev,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: ex,
                            theme: eO
                        }),
                        !n.isPrivate() && (0, r.jsx)(eM.YR, {}),
                        (0, r.jsx)(eS.H_, {})
                    ]
                })
            })
        })
    });
};
