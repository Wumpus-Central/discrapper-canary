n.d(t, { Z: () => eX }), n(47120);
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
    E = n(40851),
    N = n(636449),
    I = n(115130),
    P = n(317381),
    S = n(596040),
    Z = n(349619),
    T = n(100527),
    A = n(367907),
    w = n(906732),
    R = n(213609),
    M = n(600164),
    k = n(540059),
    L = n(211644),
    D = n(258609),
    W = n(446226),
    U = n(203341),
    B = n(569545),
    H = n(102172),
    F = n(788983),
    G = n(928518),
    V = n(191302),
    z = n(703656),
    Y = n(880395),
    q = n(740492),
    K = n(221241),
    X = n(793319),
    Q = n(3861),
    J = n(493754),
    $ = n(937995),
    ee = n(618158),
    et = n(880831),
    en = n(73563),
    er = n(751843),
    ei = n(268353),
    el = n(786915),
    eo = n(800965),
    ea = n(107169),
    es = n(891551),
    ec = n(488785),
    eu = n(199902),
    ed = n(314897),
    ep = n(979696),
    eh = n(523746),
    ef = n(430824),
    em = n(496675),
    eg = n(306680),
    eb = n(944486),
    e_ = n(594174),
    eC = n(979651),
    ev = n(626135),
    ey = n(934415),
    ex = n(585483),
    ej = n(358085),
    eO = n(998502),
    eE = n(228488),
    eN = n(358221),
    eI = n(414910),
    eP = n(887012),
    eS = n(909820),
    eZ = n(493010),
    eT = n(742603),
    eA = n(71127),
    ew = n(221888),
    eR = n(185935),
    eM = n(900211),
    ek = n(18759),
    eL = n(522651),
    eD = n(795318),
    eW = n(878752),
    eU = n(354459),
    eB = n(981631),
    eH = n(388032),
    eF = n(108103);
function eG(e, t, n) {
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
function eV(e) {
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
                eG(e, t, n[t]);
            });
    }
    return e;
}
function ez(e, t) {
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
let eY = {
        [eB.AEg.NORMAL]: eF.normal,
        [eB.AEg.MINIMUM]: eF.minimum,
        [eB.AEg.NO_CHAT]: eF.noChat,
        [eB.AEg.FULL_SCREEN]: eF.fullScreen
    },
    eq = {
        [eB.IlC.POPOUT]: eF.popout,
        [eB.IlC.APP]: null,
        [eB.IlC.OVERLAY]: null
    };
class eK extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eE.NO, this.handleFullScreenChange), ev.default.track(eB.rMx.VIDEO_LAYOUT_TOGGLED, eV({ video_layout: this.inPopout ? 'popout' : t }, (0, A.AB)(e.id)));
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eE.NO, this.handleFullScreenChange), (this.inPopout && (0, ej.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === eB.WtW.VIDEO && r === eB.WtW.VOICE && (0, eE.rB)(l, this.currentDocument) && (0, eE.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var o;
            null === (o = this._contentRef.current) || void 0 === o || o.triggerResize();
        }
        e.inCall && !n && this.inPopout && m.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ej.isPlatformEmbedded && eO.ZP.supportsFeature(eB.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ej.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eH.NW.string(eH.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eB.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eB.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eB.WtW.VIDEO && r && this.popoutSupported,
            o = t !== eB.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            a = n.type === eB.d4z.GUILD_VOICE,
            s = e === eB.AEg.MINIMUM || e === eB.AEg.NORMAL,
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
            return ez(eV({}, u), {
                canFullscreen: i,
                useTheme: !0
            });
        switch (e) {
            case eB.AEg.FULL_SCREEN:
                return ez(eV({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case eB.AEg.MINIMUM:
                return ez(eV({}, u), {
                    canPopout: !1,
                    useTheme: !0
                });
            case eB.AEg.NO_CHAT:
            case eB.AEg.NORMAL:
                return eV({}, u);
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: o, popoutWindow: a, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            { isDesktopVisualRefreshEnabled: C, isStaff: v } = this.state,
            y = f === eB.AEg.MINIMUM,
            x = y || f === eB.AEg.NORMAL,
            j = i && o === eB.WtW.VIDEO,
            O = (null !== (t = null == b ? void 0 : b.length) && void 0 !== t ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                en.Z,
                ez(
                    eV(
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
                                          (0, r.jsx)(Q.Z, {
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
            g = i === eB.WtW.VIDEO,
            b = e !== eB.AEg.NO_CHAT && e !== eB.AEg.FULL_SCREEN && null != c,
            _ = g ? ((0, h.ap)(p) ? eB.BRd.DARK : p) : void 0;
        return (0, r.jsxs)('div', {
            className: o()(eF.wrapper, eY[e], eq[a], {
                [eF.poppedOut]: this.popoutOpen && !this.inPopout && e !== eB.AEg.NO_CHAT && t.isPrivate(),
                [eF.video]: g,
                [eF.sidebarOpen]: l || d
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
                            className: o()(eF.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)($.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                b &&
                    (0, r.jsx)(eM.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, r.jsx)('div', {
                    className: eF.channelChatWrapper,
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
            eG(this, '_prevLayout', eB.AEg.MINIMUM),
            eG(this, '_wrapperRef', i.createRef()),
            eG(this, '_callContainerRef', i.createRef()),
            eG(this, '_channelChatRef', i.createRef()),
            eG(this, '_contentRef', i.createRef()),
            eG(this, '_videoBackgroundTooltipTimeout', new p.V7()),
            eG(this, '_lastIdleProps', null),
            eG(this, 'state', {
                resizedHeight: q.ZP.callHeaderHeight,
                isDesktopVisualRefreshEnabled: (0, k.i9)('ChannelCall'),
                isStaff: null !== (l = null === (t = e_.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== l && l
            }),
            eG(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null == e || (0, eE.rB)(e, this.currentDocument) || this.props.layout !== eB.AEg.FULL_SCREEN || this.handleFullScreen();
            }),
            eG(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eB.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eB.AEg.FULL_SCREEN), (0, eE.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eG(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eB.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eE.Pr)(e, this.currentDocument));
            }),
            eG(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eB.AEg.NORMAL ? eB.AEg.NO_CHAT : eB.AEg.NORMAL);
            }),
            eG(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (g.Z.updateLayout(t.id, e, n), e === eB.AEg.FULL_SCREEN && t.isPrivate() && ex.S.dispatch(eB.CkL.TEXTAREA_BLUR));
            }),
            eG(this, 'handleDisconnect', () => {
                this.props.layout === eB.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eG(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, R.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'ChannelCall',
                        is_tile_owner: e.type !== eU.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            eG(this, 'getCallTileMenuActionHandler', function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eU.A5.CONTEXT_MENU;
                return (0, eD.u)(e, 'ChannelCall', {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eU.fO.ACTIVITY ? t.user.id : void 0
                });
            }),
            eG(this, 'handleContextMenu', (e, t, i, l) => {
                var o, a;
                let { channel: c, appContext: u, layout: d } = this.props,
                    p = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: u
                    };
                switch ((null === (o = this._lastIdleProps) || void 0 === o || o.onPreventIdle('menu'), null === (a = this._lastIdleProps) || void 0 === a || a.onActive(), e.type)) {
                    case eU.fO.HIDDEN_STREAM:
                    case eU.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eU.TH.STREAM),
                            (0, b.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            ez(eV({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                simplified: i,
                                                onInteraction: this.getCallTileMenuActionHandler('StreamContextMenu', e, eU.TH.STREAM, l)
                                            })
                                        );
                                },
                                p
                            );
                        return;
                    case eU.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eU.TH.USER);
                        let h = e_.default.getUser(e.id);
                        if (null != h) {
                            if (this.props.enableSimplifiedCallSettings && i)
                                return (0, Y.D)(t, h, c, p, (e, t) =>
                                    (0, eD.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eU.A5.THREE_DOT,
                                        tileType: eU.TH.USER,
                                        targetUserId: h.id,
                                        location: 'ChannelCall'
                                    })
                                );
                            switch (c.type) {
                                case eB.d4z.DM:
                                    return (0, b.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('56826'), n.e('29836')]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    ez(eV({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('DMUserContextMenu', e, eU.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eB.d4z.GROUP_DM:
                                    return (0, b.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('59479')]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    ez(eV({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eB.AEg.MINIMUM || d === eB.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('GroupDMUserContextMenu', e, eU.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eB.d4z.GUILD_VOICE:
                                case eB.d4z.PUBLIC_THREAD:
                                case eB.d4z.PRIVATE_THREAD:
                                    let l = c.getGuildId();
                                    return (
                                        s()(null != l, 'GuildID null for guild voice channel'),
                                        (0, b.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('22685')]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        ez(eV({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: h,
                                                            channel: c,
                                                            guildId: l,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler('GuildChannelUserContextMenu', e, eU.TH.USER)
                                                        })
                                                    );
                                            },
                                            p
                                        )
                                    );
                            }
                        }
                }
            }),
            eG(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eG(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: o } = this.props;
                (0, eU._5)(e) && (0, H.p9)(n, eC.Z, ef.Z, em.Z, D.Z)[0] && (_.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, B.V9)(t) === e.id && t.state !== eB.jm8.ENDED).length && (0, C.rn)((0, B.my)(e.id), { forceMultiple: t.shiftKey })), l && o === eB.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? g.Z.selectParticipant(n.id, null) : g.Z.selectParticipant(n.id, e.id));
            }),
            eG(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, z.uL)((0, ey.LY)(t)), F.hP(e);
                    };
                !t || (0, N.R)() ? n() : (0, Z.Z)(n);
            }),
            eG(this, 'handleStayOnTop', (e) => {
                (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.STAY_ON_TOP, e), F.hY(eB.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eG(this, 'handleClosePopout', () => {
                F.xv(eB.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eG(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eB.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eG(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === eB.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(y.Z, { call: t })),
                    (0, r.jsx)(M.Z, {
                        justify: M.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eG(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eB.AEg.MINIMUM || n === eB.AEg.NORMAL
                    ? (0, r.jsx)(X.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eG(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: i, useNewInviteButton: l, selectedParticipant: a, shouldUseVoiceEffectsActionBar: s, showGameConsoleCallButton: c, inCall: u, participants: d, enableSimplifiedCallSettings: p } = this.props;
                if (!u) return null;
                let h = e === eB.AEg.NO_CHAT ? er.Z.Directions.UP : er.Z.Directions.DOWN,
                    m = [eB.AEg.FULL_SCREEN, eB.AEg.NO_CHAT].includes(e),
                    g = d.some((e) => e.type === eU.fO.STREAM),
                    b =
                        e === eB.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eB.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: _, canInvite: C } = this.viewProperties,
                    v = l
                        ? (0, r.jsx)(J.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eU.fO.STREAM ? (0, B.my)(a.id) : void 0,
                              applicationId: (null == a ? void 0 : a.type) === eU.fO.ACTIVITY ? a.applicationId : void 0,
                              appContext: i,
                              className: eF.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eB.d4z.GUILD_VOICE ? eB.ZY5.GUILD_CHANNEL : eB.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(el.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eU.fO.STREAM ? (0, B.my)(a.id) : void 0,
                              className: eF.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eB.d4z.GUILD_VOICE ? eB.ZY5.GUILD_CHANNEL : eB.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        C && !s ? v : null,
                        _
                            ? (0, r.jsxs)(M.Z, {
                                  className: eF.iconWrapper,
                                  align: M.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(er.Z, {
                                          label: m ? eH.NW.string(eH.t.kkKapK) : eH.NW.string(eH.t['5MstTk']),
                                          direction: h,
                                          className: eF.leftTrayIcon,
                                          onClick: () => {
                                              (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.CHAT, m), b();
                                          }
                                      }),
                                      m && t > 0
                                          ? (0, r.jsx)(f.mAB, {
                                                className: eF.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == a ? void 0 : a.type) !== eU.fO.STREAM && (null == a ? void 0 : a.type) !== eU.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)(ee.Z, {
                                  children: (0, r.jsx)(ew.Z, {
                                      className: o()(eF.leftTrayIcon, eF.viewersButton),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eB.AEg.FULL_SCREEN
                                  })
                              }),
                        s &&
                            (0, r.jsx)(eW.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: g,
                                themeable: this.viewProperties.useTheme
                            }),
                        c &&
                            !p &&
                            (0, r.jsx)(U.Z, {
                                themeable: this.viewProperties.useTheme,
                                className: eF.leftTrayIcon,
                                channel: n
                            })
                    ]
                });
            }),
            eG(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: i } = this.props,
                    { canFullscreen: l, canStayOnTop: o, canPopout: a, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eU.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(es.Z, {
                                  context: (0, eI.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eF.volumeSlider,
                                  className: eF.rightTrayIcon,
                                  location: T.Z.VOICE_CONTROL_TRAY
                              })
                            : null,
                        o
                            ? (0, r.jsx)(ea.Z, {
                                  className: eF.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        a
                            ? (0, r.jsx)(eo.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eF.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.POPOUT, !1), this.handleClosePopout();
                                  }
                              })
                            : null,
                        l
                            ? (0, r.jsx)(ei.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eF.rightTrayIcon,
                                  onClick: () => {
                                      (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.FULL_SCREEN, this.props.layout !== eB.AEg.FULL_SCREEN), this.handleFullScreen();
                                  }
                              })
                            : null
                    ]
                });
            }),
            eG(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eS.ZP, {
                          children: (0, r.jsx)(et.Z, {
                              className: eF.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eG(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(ek.ZP, {
                    children: (0, r.jsx)(ec.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eG(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: i, chatOpen: l, inCall: o } = this.props,
                    { useExternalHeader: a, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)(ee.Z, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eF.headerWrapper,
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
let eX = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: o } = e,
        { width: a = 0, ref: s } = (0, j.Z)(),
        { width: c = 0, height: p = 0, ref: h } = (0, j.Z)(),
        { ref: m } = (0, j.Z)(),
        g = (0, E.bp)(),
        b = (0, W.Z)(),
        _ = (0, u.e7)([eb.Z], () => {
            var e;
            return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : eb.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: y,
            participantsVersion: N,
            mode: Z,
            layout: A,
            participantsOpen: R,
            participantsListOpen: M,
            chatOpen: k,
            selectedParticipant: B
        } = (0, u.cj)(
            [eN.Z],
            () => {
                let e = g === eB.IlC.POPOUT,
                    t = eN.Z.getMode(n.id);
                e && (t = eB.WtW.VIDEO);
                let r = t === eB.WtW.VIDEO ? eN.Z.getLayout(n.id, g) : eB.AEg.MINIMUM;
                return (
                    e && r !== eB.AEg.FULL_SCREEN && (r = eB.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== eB.WtW.VOICE ? eN.Z.getSelectedParticipant(n.id) : null,
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
        H = (0, u.Wu)([eu.Z], () => eu.Z.getAllActiveStreams()),
        { selectedStream: F } = (0, u.cj)([eu.Z], () => ({ selectedStream: null != B ? eu.Z.getActiveStreamForStreamKey(B.id) : null }), [B]),
        V = (0, u.e7)([ef.Z], () => ef.Z.getGuild(n.getGuildId())),
        z = (0, u.e7)([eh.Z], () => eh.Z.getCall(n.id), [n.id]),
        Y = (0, u.e7)([eg.ZP], () => eg.ZP.getMentionCount(n.id), [n.id]),
        X = (0, u.e7)([ed.default], () => ed.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: J } = (0, u.cj)([G.Z], () => ({
            popoutWindow: G.Z.getWindow(eB.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: G.Z.getIsAlwaysOnTop(eB.KJ3.CHANNEL_CALL_POPOUT)
        })),
        $ = (0, u.e7)([em.Z], () => em.Z.can(eB.Plq.CONNECT, n)),
        ee = (0, u.e7)([ep.Z], () => ep.Z.getToastsEnabled(n.id)),
        et = (0, u.e7)([D.Z], () => D.Z.getAwaitingRemoteSessionInfo()),
        en = (0, u.e7)([q.ZP], () => q.ZP.callHeaderHeight),
        er = i.useCallback((e) => {
            v.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null,
        el = (0, S.Z)(ei, n.id),
        eo = (0, u.e7)([I.Z], () => I.Z.getFetchState(), []),
        ea = (0, O.Z)(eo);
    i.useEffect(() => {
        eo === I.O.ERROR && ea !== I.O.ERROR && (0, f.showToast)((0, f.createToast)(eH.NW.string(eH.t.AlJyIy), f.ToastType.FAILURE));
    }, [eo, ea]);
    let es = (0, u.e7)([P.ZP], () => P.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && Z === eB.WtW.VIDEO && ((t = await eO.ZP.blockDisplaySleep()), e && null != t && eO.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eO.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, Z]);
    let ec = (0, U.S)(),
        e_ = (0, eP.Z)(n, !0),
        { hasParticipantsPanel: eC } = (0, eR.Z)({ location: 'ChannelCall' }),
        { simplifiedSettingsEnabled: ev } = (0, K.Z)({ location: 'ChannelCall' }),
        ey = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ex } = (0, w.ZP)(T.Z.CHANNEL_CALL),
        ej = P.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eE } = (0, f.TCT)();
    return (0, r.jsx)(w.Gt, {
        value: ex,
        children: (0, r.jsx)(x.Z, {
            page: eB.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eS.B2, {
                children: (0, r.jsxs)(ek._A, {
                    children: [
                        (0, r.jsx)(eK, {
                            channel: n,
                            guild: V,
                            hasConnectPermission: $,
                            participantsOpen: R,
                            participantsListOpen: M && eC,
                            enableSimplifiedCallSettings: ev,
                            renderExternalHeader: l,
                            appContext: g,
                            call: z,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: J,
                            mentionCount: Y,
                            selectedStream: F,
                            mode: Z,
                            inCall: _,
                            participants: C,
                            filteredParticipants: y,
                            participantsVersion: N,
                            layout: A,
                            chatOpen: k,
                            maxSidebarWidth: a - 550,
                            shouldUseVoiceEffectsActionBar: e_,
                            showGameConsoleCallButton: ec,
                            currentUserId: X,
                            selectedParticipant: B,
                            allActiveStreams: H,
                            useNewInviteButton: el,
                            connectedToEmbeddedActivity: null != es,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: er,
                            wrapperRef: s,
                            callContainerDimensions: {
                                width: c,
                                height: p
                            },
                            callContainerRef: h,
                            channelChatRef: m,
                            width: a,
                            maxHeight: o,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: ej,
                            theme: eE
                        }),
                        !n.isPrivate() && (0, r.jsx)(ek.YR, {}),
                        (0, r.jsx)(eS.H_, {})
                    ]
                })
            })
        })
    });
};
