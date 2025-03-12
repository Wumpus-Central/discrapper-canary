n.d(t, { Z: () => eQ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(990547),
    u = n(115911),
    d = n(442837),
    p = n(704215),
    h = n(846519),
    f = n(780384),
    m = n(481060),
    g = n(570140),
    b = n(475179),
    _ = n(239091),
    C = n(287734),
    v = n(872810),
    y = n(153867),
    x = n(944543),
    j = n(410575),
    O = n(393238),
    E = n(110924),
    N = n(40851),
    I = n(636449),
    P = n(115130),
    S = n(317381),
    Z = n(596040),
    T = n(349619),
    A = n(100527),
    w = n(367907),
    R = n(906732),
    M = n(213609),
    k = n(600164),
    L = n(540059),
    D = n(211644),
    W = n(258609),
    U = n(446226),
    B = n(203341),
    H = n(569545),
    F = n(102172),
    G = n(788983),
    V = n(928518),
    z = n(191302),
    Y = n(703656),
    q = n(880395),
    K = n(740492),
    X = n(221241),
    Q = n(793319),
    J = n(3861),
    $ = n(493754),
    ee = n(937995),
    et = n(618158),
    en = n(880831),
    er = n(73563),
    ei = n(751843),
    el = n(268353),
    eo = n(786915),
    ea = n(800965),
    es = n(107169),
    ec = n(891551),
    eu = n(488785),
    ed = n(199902),
    ep = n(314897),
    eh = n(979696),
    ef = n(523746),
    em = n(430824),
    eg = n(496675),
    eb = n(306680),
    e_ = n(944486),
    eC = n(594174),
    ev = n(979651),
    ey = n(626135),
    ex = n(934415),
    ej = n(585483),
    eO = n(358085),
    eE = n(998502),
    eN = n(228488),
    eI = n(358221),
    eP = n(414910),
    eS = n(887012),
    eZ = n(909820),
    eT = n(493010),
    eA = n(742603),
    ew = n(71127),
    eR = n(221888),
    eM = n(185935),
    ek = n(900211),
    eL = n(18759),
    eD = n(522651),
    eW = n(795318),
    eU = n(878752),
    eB = n(354459),
    eH = n(981631),
    eF = n(388032),
    eG = n(108103);
function eV(e, t, n) {
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
function ez(e) {
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
                eV(e, t, n[t]);
            });
    }
    return e;
}
function eY(e, t) {
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
let eq = {
        [eH.AEg.NORMAL]: eG.normal,
        [eH.AEg.MINIMUM]: eG.minimum,
        [eH.AEg.NO_CHAT]: eG.noChat,
        [eH.AEg.FULL_SCREEN]: eG.fullScreen
    },
    eK = {
        [eH.IlC.POPOUT]: eG.popout,
        [eH.IlC.APP]: null,
        [eH.IlC.OVERLAY]: null
    };
class eX extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eN.NO, this.handleFullScreenChange), ey.default.track(eH.rMx.VIDEO_LAYOUT_TOGGLED, ez({ video_layout: this.inPopout ? 'popout' : t }, (0, w.AB)(e.id)));
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eN.NO, this.handleFullScreenChange), (this.inPopout && (0, eO.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === eH.WtW.VIDEO && r === eH.WtW.VOICE && (0, eN.rB)(l, this.currentDocument) && (0, eN.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var o;
            null === (o = this._contentRef.current) || void 0 === o || o.triggerResize();
        }
        e.inCall && !n && this.inPopout && g.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eO.isPlatformEmbedded && eE.ZP.supportsFeature(eH.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eF.NW.string(eF.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eH.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eH.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eH.WtW.VIDEO && r && this.popoutSupported,
            o = t !== eH.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            a = n.type === eH.d4z.GUILD_VOICE,
            s = e === eH.AEg.MINIMUM || e === eH.AEg.NORMAL,
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
            return eY(ez({}, u), {
                canFullscreen: i,
                useTheme: !0
            });
        switch (e) {
            case eH.AEg.FULL_SCREEN:
                return eY(ez({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case eH.AEg.MINIMUM:
                return eY(ez({}, u), {
                    canPopout: !1,
                    useTheme: !0
                });
            case eH.AEg.NO_CHAT:
            case eH.AEg.NORMAL:
                return ez({}, u);
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: o, popoutWindow: a, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            { isDesktopVisualRefreshEnabled: C, isStaff: v } = this.state,
            y = f === eH.AEg.MINIMUM,
            x = y || f === eH.AEg.NORMAL,
            j = i && o === eH.WtW.VIDEO,
            O = (null !== (t = null == b ? void 0 : b.length) && void 0 !== t ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                er.Z,
                eY(
                    ez(
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
                                          (0, r.jsx)(z.Z, { channel: p }),
                                          (0, r.jsx)(J.Z, {
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
            { resizedHeight: h } = this.state,
            g = i === eH.WtW.VIDEO,
            b = e !== eH.AEg.NO_CHAT && e !== eH.AEg.FULL_SCREEN && null != c,
            _ = g ? ((0, f.ap)(p) ? eH.BRd.DARK : p) : void 0;
        return (0, r.jsxs)('div', {
            className: o()(eG.wrapper, eq[e], eK[a], {
                [eG.poppedOut]: this.popoutOpen && !this.inPopout && e !== eH.AEg.NO_CHAT && t.isPrivate(),
                [eG.video]: g,
                [eG.sidebarOpen]: l || d
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                b && null != h
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: h
                      }
                    : void 0,
            children: [
                (0, r.jsx)(m.f6W, {
                    theme: _,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: o()(eG.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(ee.ZP, {
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
                    className: eG.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                l &&
                                    (0, r.jsx)(eT.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s
                                    }),
                                d &&
                                    (0, r.jsx)(ew.Z, {
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
            eV(this, '_prevLayout', eH.AEg.MINIMUM),
            eV(this, '_wrapperRef', i.createRef()),
            eV(this, '_callContainerRef', i.createRef()),
            eV(this, '_channelChatRef', i.createRef()),
            eV(this, '_contentRef', i.createRef()),
            eV(this, '_videoBackgroundTooltipTimeout', new h.V7()),
            eV(this, '_lastIdleProps', null),
            eV(this, 'state', {
                resizedHeight: K.ZP.callHeaderHeight,
                isDesktopVisualRefreshEnabled: (0, L.i9)('ChannelCall'),
                isStaff: null !== (l = null === (t = eC.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== l && l
            }),
            eV(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null == e || (0, eN.rB)(e, this.currentDocument) || this.props.layout !== eH.AEg.FULL_SCREEN || this.handleFullScreen();
            }),
            eV(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eH.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eH.AEg.FULL_SCREEN), (0, eN.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eV(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eH.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eN.Pr)(e, this.currentDocument));
            }),
            eV(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eH.AEg.NORMAL ? eH.AEg.NO_CHAT : eH.AEg.NORMAL);
            }),
            eV(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (b.Z.updateLayout(t.id, e, n), e === eH.AEg.FULL_SCREEN && t.isPrivate() && ej.S.dispatch(eH.CkL.TEXTAREA_BLUR));
            }),
            eV(this, 'handleDisconnect', () => {
                this.props.layout === eH.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eV(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, M.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'ChannelCall',
                        is_tile_owner: e.type !== eB.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            eV(this, 'getCallTileMenuActionHandler', function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eB.A5.CONTEXT_MENU;
                return (0, eW.u)(e, A.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eB.fO.ACTIVITY ? t.user.id : void 0
                });
            }),
            eV(this, 'handleContextMenu', (e, t, i, l) => {
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
                    case eB.fO.HIDDEN_STREAM:
                    case eB.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eB.TH.STREAM),
                            (0, _.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eY(ez({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                simplified: i,
                                                onInteraction: this.getCallTileMenuActionHandler('StreamContextMenu', e, eB.TH.STREAM, l)
                                            })
                                        );
                                },
                                p
                            );
                        return;
                    case eB.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eB.TH.USER);
                        let h = eC.default.getUser(e.id);
                        if (null != h) {
                            if (this.props.enableSimplifiedCallSettings && i)
                                return (0, q.D)(t, h, c, p, (e, t) =>
                                    (0, eW.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eB.A5.THREE_DOT,
                                        tileType: eB.TH.USER,
                                        targetUserId: h.id,
                                        location: A.Z.CHANNEL_CALL
                                    })
                                );
                            switch (c.type) {
                                case eH.d4z.DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('86024')]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eY(ez({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('DMUserContextMenu', e, eB.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eH.d4z.GROUP_DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('31823')]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eY(ez({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eH.AEg.MINIMUM || d === eH.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('GroupDMUserContextMenu', e, eB.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eH.d4z.GUILD_VOICE:
                                case eH.d4z.PUBLIC_THREAD:
                                case eH.d4z.PRIVATE_THREAD:
                                    let l = c.getGuildId();
                                    return (
                                        s()(null != l, 'GuildID null for guild voice channel'),
                                        (0, _.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('29618')]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eY(ez({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: h,
                                                            channel: c,
                                                            guildId: l,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler('GuildChannelUserContextMenu', e, eB.TH.USER)
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
            eV(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eV(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: o } = this.props;
                (0, eB._5)(e) && (0, F.p9)(n, ev.Z, em.Z, eg.Z, W.Z)[0] && (C.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, H.V9)(t) === e.id && t.state !== eH.jm8.ENDED).length && (0, v.rn)((0, H.my)(e.id), { forceMultiple: t.shiftKey })), l && o === eH.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? b.Z.selectParticipant(n.id, null) : b.Z.selectParticipant(n.id, e.id));
            }),
            eV(this, 'handleOpenPopout', () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, Y.uL)((0, ex.LY)(t)), G.hP(e);
                    };
                null == t || (0, I.R)({ isContextless: t.location.kind === u.X.CONTEXTLESS }) ? n() : (0, T.Z)(n);
            }),
            eV(this, 'handleStayOnTop', (e) => {
                (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.STAY_ON_TOP, e), G.hY(eH.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eV(this, 'handleClosePopout', () => {
                G.xv(eH.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eV(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eH.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eV(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === eH.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(x.Z, { call: t })),
                    (0, r.jsx)(k.Z, {
                        justify: k.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eV(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eH.AEg.MINIMUM || n === eH.AEg.NORMAL
                    ? (0, r.jsx)(Q.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eV(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: i, useNewInviteButton: l, selectedParticipant: a, shouldUseVoiceEffectsActionBar: s, showGameConsoleCallButton: c, inCall: u, participants: d, enableSimplifiedCallSettings: p } = this.props;
                if (!u) return null;
                let h = e === eH.AEg.NO_CHAT ? ei.Z.Directions.UP : ei.Z.Directions.DOWN,
                    f = [eH.AEg.FULL_SCREEN, eH.AEg.NO_CHAT].includes(e),
                    g = d.some((e) => e.type === eB.fO.STREAM),
                    b =
                        e === eH.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eH.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: _, canInvite: C } = this.viewProperties,
                    v = l
                        ? (0, r.jsx)($.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eB.fO.STREAM ? (0, H.my)(a.id) : void 0,
                              applicationId: (null == a ? void 0 : a.type) === eB.fO.ACTIVITY ? a.applicationId : void 0,
                              appContext: i,
                              className: eG.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eH.d4z.GUILD_VOICE ? eH.ZY5.GUILD_CHANNEL : eH.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(eo.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eB.fO.STREAM ? (0, H.my)(a.id) : void 0,
                              className: eG.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eH.d4z.GUILD_VOICE ? eH.ZY5.GUILD_CHANNEL : eH.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        C && !s ? v : null,
                        _
                            ? (0, r.jsxs)(k.Z, {
                                  className: eG.iconWrapper,
                                  align: k.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ei.Z, {
                                          label: f ? eF.NW.string(eF.t.kkKapK) : eF.NW.string(eF.t['5MstTk']),
                                          direction: h,
                                          className: eG.leftTrayIcon,
                                          onClick: () => {
                                              (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.CHAT, f), b();
                                          }
                                      }),
                                      f && t > 0
                                          ? (0, r.jsx)(m.mAB, {
                                                className: eG.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == a ? void 0 : a.type) !== eB.fO.STREAM && (null == a ? void 0 : a.type) !== eB.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)(et.Z, {
                                  children: (0, r.jsx)(eR.Z, {
                                      className: o()(eG.leftTrayIcon, eG.viewersButton),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eH.AEg.FULL_SCREEN
                                  })
                              }),
                        s &&
                            (0, r.jsx)(eU.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: g,
                                themeable: this.viewProperties.useTheme
                            }),
                        c &&
                            !p &&
                            (0, r.jsx)(B.Z, {
                                themeable: this.viewProperties.useTheme,
                                className: eG.leftTrayIcon,
                                channel: n
                            })
                    ]
                });
            }),
            eV(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: i } = this.props,
                    { canFullscreen: l, canStayOnTop: o, canPopout: a, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eB.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(ec.Z, {
                                  context: (0, eP.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eG.volumeSlider,
                                  className: eG.rightTrayIcon,
                                  location: A.Z.VOICE_CONTROL_TRAY
                              })
                            : null,
                        o
                            ? (0, r.jsx)(es.Z, {
                                  className: eG.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        a
                            ? (0, r.jsx)(ea.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eG.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.POPOUT, !1), this.handleClosePopout();
                                  }
                              })
                            : null,
                        l
                            ? (0, r.jsx)(el.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eG.rightTrayIcon,
                                  onClick: () => {
                                      (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.FULL_SCREEN, this.props.layout !== eH.AEg.FULL_SCREEN), this.handleFullScreen();
                                  }
                              })
                            : null
                    ]
                });
            }),
            eV(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eZ.ZP, {
                          children: (0, r.jsx)(en.Z, {
                              className: eG.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eV(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eL.ZP, {
                    children: (0, r.jsx)(eu.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eV(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: i, chatOpen: l, inCall: o } = this.props,
                    { useExternalHeader: a, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)(et.Z, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eG.headerWrapper,
                                  children: a
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, r.jsx)(eA.Z, {
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
let eQ = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: o } = e,
        { width: a = 0, ref: s } = (0, O.Z)(),
        { width: c = 0, height: u = 0, ref: h } = (0, O.Z)(),
        { ref: f } = (0, O.Z)(),
        g = (0, N.bp)(),
        b = (0, U.Z)(),
        _ = (0, d.e7)([e_.Z], () => {
            var e;
            return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : e_.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: v,
            participantsVersion: x,
            mode: I,
            layout: T,
            participantsOpen: w,
            participantsListOpen: M,
            chatOpen: k,
            selectedParticipant: L
        } = (0, d.cj)(
            [eI.Z],
            () => {
                let e = g === eH.IlC.POPOUT,
                    t = eI.Z.getMode(n.id);
                e && (t = eH.WtW.VIDEO);
                let r = t === eH.WtW.VIDEO ? eI.Z.getLayout(n.id, g) : eH.AEg.MINIMUM;
                return (
                    e && r !== eH.AEg.FULL_SCREEN && (r = eH.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== eH.WtW.VOICE ? eI.Z.getSelectedParticipant(n.id) : null,
                        participants: eI.Z.getParticipants(n.id),
                        filteredParticipants: eI.Z.getFilteredParticipants(n.id),
                        participantsOpen: eI.Z.getParticipantsOpen(n.id),
                        chatOpen: eI.Z.getChatOpen(n.id),
                        participantsListOpen: eI.Z.getParticipantsListOpen(n.id),
                        participantsVersion: eI.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, d.Wu)([ed.Z], () => ed.Z.getAllActiveStreams()),
        { selectedStream: F } = (0, d.cj)([ed.Z], () => ({ selectedStream: null != L ? ed.Z.getActiveStreamForStreamKey(L.id) : null }), [L]),
        G = (0, d.e7)([em.Z], () => em.Z.getGuild(n.getGuildId())),
        z = (0, d.e7)([ef.Z], () => ef.Z.getCall(n.id), [n.id]),
        Y = (0, d.e7)([eb.ZP], () => eb.ZP.getMentionCount(n.id), [n.id]),
        q = (0, d.e7)([ep.default], () => ep.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: J } = (0, d.cj)([V.Z], () => ({
            popoutWindow: V.Z.getWindow(eH.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: V.Z.getIsAlwaysOnTop(eH.KJ3.CHANNEL_CALL_POPOUT)
        })),
        $ = (0, d.e7)([eg.Z], () => eg.Z.can(eH.Plq.CONNECT, n)),
        ee = (0, d.e7)([eh.Z], () => eh.Z.getToastsEnabled(n.id)),
        et = (0, d.e7)([W.Z], () => W.Z.getAwaitingRemoteSessionInfo()),
        en = (0, d.e7)([K.ZP], () => K.ZP.callHeaderHeight),
        er = i.useCallback((e) => {
            y.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null !== (t = null == G ? void 0 : G.id) && void 0 !== t ? t : null,
        el = (0, Z.Z)(ei, n.id),
        eo = (0, d.e7)([P.Z], () => P.Z.getFetchState(), []),
        ea = (0, E.Z)(eo);
    i.useEffect(() => {
        eo === P.O.ERROR && ea !== P.O.ERROR && (0, m.showToast)((0, m.createToast)(eF.NW.string(eF.t.AlJyIy), m.ToastType.FAILURE));
    }, [eo, ea]);
    let es = (0, d.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && I === eH.WtW.VIDEO && ((t = await eE.ZP.blockDisplaySleep()), e && null != t && eE.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eE.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, I]);
    let ec = (0, B.S)(),
        eu = (0, eS.Z)(n, !0),
        { hasParticipantsPanel: eC } = (0, eM.Z)({ location: 'ChannelCall' }),
        { simplifiedSettingsEnabled: ev } = (0, X.Z)({ location: 'ChannelCall' }),
        ey = (0, D.bn)(p.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ex } = (0, R.ZP)(A.Z.CHANNEL_CALL),
        ej = S.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eO } = (0, m.TCT)();
    return (0, r.jsx)(R.Gt, {
        value: ex,
        children: (0, r.jsx)(j.Z, {
            page: eH.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eZ.B2, {
                children: (0, r.jsxs)(eL._A, {
                    children: [
                        (0, r.jsx)(eX, {
                            channel: n,
                            guild: G,
                            hasConnectPermission: $,
                            participantsOpen: w,
                            participantsListOpen: M && eC,
                            enableSimplifiedCallSettings: ev,
                            renderExternalHeader: l,
                            appContext: g,
                            call: z,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: J,
                            mentionCount: Y,
                            selectedStream: F,
                            mode: I,
                            inCall: _,
                            participants: C,
                            filteredParticipants: v,
                            participantsVersion: x,
                            layout: T,
                            chatOpen: k,
                            maxSidebarWidth: a - 550,
                            shouldUseVoiceEffectsActionBar: eu,
                            showGameConsoleCallButton: ec,
                            currentUserId: q,
                            selectedParticipant: L,
                            allActiveStreams: H,
                            useNewInviteButton: el,
                            connectedEmbeddedActivity: null != es ? es : void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: er,
                            wrapperRef: s,
                            callContainerDimensions: {
                                width: c,
                                height: u
                            },
                            callContainerRef: h,
                            channelChatRef: f,
                            width: a,
                            maxHeight: o,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: ej,
                            theme: eO
                        }),
                        !n.isPrivate() && (0, r.jsx)(eL.YR, {}),
                        (0, r.jsx)(eZ.H_, {})
                    ]
                })
            })
        })
    });
};
