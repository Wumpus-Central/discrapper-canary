n.d(t, { Z: () => eX }), n(388685);
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
    y = n(872810),
    x = n(153867),
    C = n(944543),
    v = n(410575),
    j = n(393238),
    O = n(110924),
    E = n(40851),
    I = n(636449),
    P = n(115130),
    S = n(317381),
    Z = n(596040),
    N = n(349619),
    T = n(100527),
    A = n(367907),
    w = n(906732),
    R = n(213609),
    k = n(600164),
    M = n(540059),
    L = n(211644),
    D = n(258609),
    U = n(446226),
    B = n(203341),
    G = n(569545),
    F = n(102172),
    H = n(788983),
    V = n(928518),
    z = n(191302),
    W = n(703656),
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
    ey = n(979651),
    ex = n(626135),
    eC = n(934415),
    ev = n(585483),
    ej = n(358085),
    eO = n(998502),
    eE = n(228488),
    eI = n(358221),
    eP = n(414910),
    eS = n(887012),
    eZ = n(909820),
    eN = n(493010),
    eT = n(742603),
    eA = n(71127),
    ew = n(221888),
    eR = n(185935),
    ek = n(900211),
    eM = n(18759),
    eL = n(522651),
    eD = n(795318),
    eU = n(878752),
    eB = n(354459),
    eG = n(981631),
    eF = n(388032),
    eH = n(971182);
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
function eW(e, t) {
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
        [eG.AEg.NORMAL]: eH.normal,
        [eG.AEg.MINIMUM]: eH.minimum,
        [eG.AEg.NO_CHAT]: eH.noChat,
        [eG.AEg.FULL_SCREEN]: eH.fullScreen
    },
    eq = {
        [eG.IlC.POPOUT]: eH.popout,
        [eG.IlC.APP]: null,
        [eG.IlC.OVERLAY]: null
    };
class eK extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eE.NO, this.handleFullScreenChange), ex.default.track(eG.rMx.VIDEO_LAYOUT_TOGGLED, ez({ video_layout: this.inPopout ? 'popout' : t }, (0, A.AB)(e.id)));
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eE.NO, this.handleFullScreenChange), (this.inPopout && (0, ej.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === eG.WtW.VIDEO && r === eG.WtW.VOICE && (0, eE.rB)(l, this.currentDocument) && (0, eE.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var o;
            null == (o = this._contentRef.current) || o.triggerResize();
        }
        e.inCall && !n && this.inPopout && m.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ej.isPlatformEmbedded && eO.ZP.supportsFeature(eG.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eF.intl.string(eF.t.J5bXZW) } : null;
    }
    get inPopout() {
        return this.props.appContext === eG.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eG.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eG.WtW.VIDEO && r && this.popoutSupported,
            o = t !== eG.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            a = n.type === eG.d4z.GUILD_VOICE,
            s = e === eG.AEg.MINIMUM || e === eG.AEg.NORMAL,
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
            return eW(ez({}, u), {
                canFullscreen: i,
                useTheme: !0
            });
        switch (e) {
            case eG.AEg.FULL_SCREEN:
                return eW(ez({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case eG.AEg.MINIMUM:
                return eW(ez({}, u), {
                    canPopout: !1,
                    useTheme: !0
                });
            case eG.AEg.NO_CHAT:
            case eG.AEg.NORMAL:
                return ez({}, u);
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: o, popoutWindow: a, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            { isDesktopVisualRefreshEnabled: y } = this.state,
            x = f === eG.AEg.MINIMUM,
            C = x || f === eG.AEg.NORMAL,
            v = i && o === eG.WtW.VIDEO,
            j = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                en.Z,
                eW(
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
                        disableGradients: (y && !i) || x,
                        idle: !m && i && !x && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(z.Z, { channel: p }),
                                          (0, r.jsx)(Q.Z, {
                                              ref: this._contentRef,
                                              inCall: i,
                                              channel: p,
                                              hasConnectPermission: l,
                                              guild: h,
                                              participants: c,
                                              filteredParticipants: u,
                                              participantsVersion: d,
                                              selectedParticipant: v ? n : null,
                                              layout: f,
                                              idle: e.idle,
                                              mode: o,
                                              onSelectParticipant: this.handleSelectParticipant,
                                              onContextMenuParticipant: this.handleContextMenu,
                                              showParticipants: s && (!C || j),
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
        let e,
            { layout: t, channel: n, guild: i, mode: l, chatOpen: a, appContext: s, maxSidebarWidth: c, maxHeight: u, inCall: d, participantsListOpen: p, theme: m, isRefreshEnabled: g } = this.props,
            { resizedHeight: b } = this.state,
            _ = l === eG.WtW.VIDEO,
            y = t !== eG.AEg.NO_CHAT && t !== eG.AEg.FULL_SCREEN && null != u;
        return (
            (e = g ? eG.BRd.MIDNIGHT : _ ? ((0, h.ap)(m) ? eG.BRd.DARK : m) : void 0),
            (0, r.jsxs)('div', {
                className: o()(eH.wrapper, eY[t], eq[s], {
                    [eH.poppedOut]: this.popoutOpen && !this.inPopout && t !== eG.AEg.NO_CHAT && n.isPrivate(),
                    [eH.video]: _,
                    [eH.sidebarOpen]: a || p
                }),
                ref: (e) => {
                    (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
                },
                style:
                    y && null != b
                        ? {
                              minHeight: 230,
                              maxHeight: u,
                              height: b
                          }
                        : void 0,
                children: [
                    (0, r.jsx)(f.f6W, {
                        theme: e,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: o()(eH.callContainer, a || t !== eG.AEg.FULL_SCREEN ? void 0 : eH.fullScreen, e),
                                ref: (e) => {
                                    (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                                },
                                children: (0, r.jsx)($.ZP, {
                                    timeout: 2000,
                                    children: (e) => this.renderContent(e)
                                })
                            })
                    }),
                    y &&
                        (0, r.jsx)(ek.Z, {
                            minHeight: 230,
                            maxHeight: u,
                            resizableNode: this._wrapperRef,
                            onResize: this.handleCallResize,
                            onResizeEnd: this.props.updateStoredCallHeaderHeight
                        }),
                    (0, r.jsx)('div', {
                        className: eH.channelChatWrapper,
                        ref: (e) => {
                            (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                        },
                        children:
                            (!d || !this.popoutOpen || this.inPopout) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    a &&
                                        (0, r.jsx)(eN.Z, {
                                            channel: n,
                                            guild: i,
                                            maxWidth: c
                                        }),
                                    p &&
                                        (0, r.jsx)(eA.Z, {
                                            channel: n,
                                            maxWidth: c
                                        })
                                ]
                            })
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            eV(this, '_prevLayout', eG.AEg.MINIMUM),
            eV(this, '_wrapperRef', i.createRef()),
            eV(this, '_callContainerRef', i.createRef()),
            eV(this, '_channelChatRef', i.createRef()),
            eV(this, '_contentRef', i.createRef()),
            eV(this, '_videoBackgroundTooltipTimeout', new p.V7()),
            eV(this, '_lastIdleProps', null),
            eV(this, 'state', {
                resizedHeight: q.ZP.callHeaderHeight,
                isDesktopVisualRefreshEnabled: (0, M.i9)('ChannelCall')
            }),
            eV(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && ((0, eE.rB)(e, this.currentDocument) || this.props.layout !== eG.AEg.FULL_SCREEN || this.handleFullScreen());
            }),
            eV(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eG.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eG.AEg.FULL_SCREEN), (0, eE.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eV(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eG.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eE.Pr)(e, this.currentDocument));
            }),
            eV(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eG.AEg.NORMAL ? eG.AEg.NO_CHAT : eG.AEg.NORMAL);
            }),
            eV(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (g.Z.updateLayout(t.id, e, n), e === eG.AEg.FULL_SCREEN && t.isPrivate() && ev.S.dispatch(eG.CkL.TEXTAREA_BLUR));
            }),
            eV(this, 'handleDisconnect', () => {
                this.props.layout === eG.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eV(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, R.h)({
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
                return (0, eD.u)(e, T.Z.CHANNEL_CALL, {
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
                            return null == (e = this._lastIdleProps) ? void 0 : e.onAllowIdle('menu');
                        },
                        context: u
                    };
                switch ((null == (o = this._lastIdleProps) || o.onPreventIdle('menu'), null == (a = this._lastIdleProps) || a.onActive(), e.type)) {
                    case eB.fO.HIDDEN_STREAM:
                    case eB.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eB.TH.STREAM),
                            (0, b.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eW(ez({}, n), {
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
                        let h = e_.default.getUser(e.id);
                        if (null != h) {
                            if (this.props.enableSimplifiedCallSettings && i)
                                return (0, Y.D)(t, h, c, p, (e, t) =>
                                    (0, eD.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eB.A5.THREE_DOT,
                                        tileType: eB.TH.USER,
                                        targetUserId: h.id,
                                        location: T.Z.CHANNEL_CALL
                                    })
                                );
                            switch (c.type) {
                                case eG.d4z.DM:
                                    return (0, b.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('20875'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('31084')]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eW(ez({}, n), {
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
                                case eG.d4z.GROUP_DM:
                                    return (0, b.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eW(ez({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eG.AEg.MINIMUM || d === eG.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('GroupDMUserContextMenu', e, eB.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eG.d4z.GUILD_VOICE:
                                case eG.d4z.PUBLIC_THREAD:
                                case eG.d4z.PRIVATE_THREAD:
                                    let l = c.getGuildId();
                                    return (
                                        s()(null != l, 'GuildID null for guild voice channel'),
                                        (0, b.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eW(ez({}, n), {
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
                (0, eB._5)(e) && (0, F.p9)(n, ey.Z, ef.Z, em.Z, D.Z)[0] && (_.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, G.V9)(t) === e.id && t.state !== eG.jm8.ENDED).length && (0, y.rn)((0, G.my)(e.id), { forceMultiple: t.shiftKey })), l && o === eG.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? g.Z.selectParticipant(n.id, null) : g.Z.selectParticipant(n.id, e.id));
            }),
            eV(this, 'handleOpenPopout', () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, W.uL)((0, eC.LY)(t)), H.hP(e);
                    };
                null == t || (0, I.R)() ? n() : (0, N.Z)(n);
            }),
            eV(this, 'handleStayOnTop', (e) => {
                (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.STAY_ON_TOP, e), H.hY(eG.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eV(this, 'handleClosePopout', () => {
                H.xv(eG.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eV(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eG.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eV(this, 'renderRegionSelect', () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === eG.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(C.Z, { call: t })),
                    (0, r.jsx)(k.Z, {
                        justify: k.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eV(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eG.AEg.MINIMUM || n === eG.AEg.NORMAL
                    ? (0, r.jsx)(X.ZP, {
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
                let h = e === eG.AEg.NO_CHAT ? er.Z.Directions.UP : er.Z.Directions.DOWN,
                    m = [eG.AEg.FULL_SCREEN, eG.AEg.NO_CHAT].includes(e),
                    g = d.some((e) => e.type === eB.fO.STREAM),
                    b =
                        e === eG.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eG.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: _, canInvite: y } = this.viewProperties,
                    x = l
                        ? (0, r.jsx)(J.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eB.fO.STREAM ? (0, G.my)(a.id) : void 0,
                              applicationId: (null == a ? void 0 : a.type) === eB.fO.ACTIVITY ? a.applicationId : void 0,
                              appContext: i,
                              className: eH.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eG.d4z.GUILD_VOICE ? eG.ZY5.GUILD_CHANNEL : eG.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(el.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eB.fO.STREAM ? (0, G.my)(a.id) : void 0,
                              className: eH.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eG.d4z.GUILD_VOICE ? eG.ZY5.GUILD_CHANNEL : eG.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        y && !s ? x : null,
                        _
                            ? (0, r.jsxs)(k.Z, {
                                  className: eH.iconWrapper,
                                  align: k.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(er.Z, {
                                          label: m ? eF.intl.string(eF.t.kkKapK) : eF.intl.string(eF.t['5MstTk']),
                                          direction: h,
                                          className: eH.leftTrayIcon,
                                          onClick: () => {
                                              (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.CHAT, m), b();
                                          }
                                      }),
                                      m && t > 0
                                          ? (0, r.jsx)(f.mAB, {
                                                className: eH.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == a ? void 0 : a.type) !== eB.fO.STREAM && (null == a ? void 0 : a.type) !== eB.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)(ee.Z, {
                                  children: (0, r.jsx)(ew.Z, {
                                      className: o()(eH.leftTrayIcon, eH.viewersButton),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eG.AEg.FULL_SCREEN
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
                                className: eH.leftTrayIcon,
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
                            ? (0, r.jsx)(es.Z, {
                                  context: (0, eP.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eH.volumeSlider,
                                  className: eH.rightTrayIcon,
                                  location: T.Z.VOICE_CONTROL_TRAY
                              })
                            : null,
                        o
                            ? (0, r.jsx)(ea.Z, {
                                  className: eH.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        a
                            ? (0, r.jsx)(eo.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eH.rightTrayIcon,
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
                                  className: eH.rightTrayIcon,
                                  onClick: () => {
                                      (0, eL.v)(T.Z.VOICE_CONTROL_TRAY, eL.d.FULL_SCREEN, this.props.layout !== eG.AEg.FULL_SCREEN), this.handleFullScreen();
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
                          children: (0, r.jsx)(et.Z, {
                              className: eH.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eV(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eM.ZP, {
                    children: (0, r.jsx)(ec.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eV(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: i, chatOpen: l, inCall: o } = this.props,
                    { useExternalHeader: a, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)(ee.Z, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eH.headerWrapper,
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
        { width: a = 0, ref: s } = (0, j.ZP)(),
        { width: c = 0, height: p = 0, ref: h } = (0, j.ZP)(),
        { ref: m } = (0, j.ZP)(),
        g = (0, E.bp)(),
        b = (0, U.Z)(),
        _ = (0, u.e7)([eb.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : eb.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: y,
            filteredParticipants: C,
            participantsVersion: I,
            mode: N,
            layout: A,
            participantsOpen: R,
            participantsListOpen: k,
            chatOpen: G,
            selectedParticipant: F
        } = (0, u.cj)(
            [eI.Z],
            () => {
                let e = g === eG.IlC.POPOUT,
                    t = eI.Z.getMode(n.id);
                e && (t = eG.WtW.VIDEO);
                let r = t === eG.WtW.VIDEO ? eI.Z.getLayout(n.id, g) : eG.AEg.MINIMUM;
                return (
                    e && r !== eG.AEg.FULL_SCREEN && (r = eG.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== eG.WtW.VOICE ? eI.Z.getSelectedParticipant(n.id) : null,
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
        H = (0, u.Wu)([eu.Z], () => eu.Z.getAllActiveStreams()),
        { selectedStream: z } = (0, u.cj)([eu.Z], () => ({ selectedStream: null != F ? eu.Z.getActiveStreamForStreamKey(F.id) : null }), [F]),
        W = (0, u.e7)([ef.Z], () => ef.Z.getGuild(n.getGuildId())),
        Y = (0, u.e7)([eh.Z], () => eh.Z.getCall(n.id), [n.id]),
        X = (0, u.e7)([eg.ZP], () => eg.ZP.getMentionCount(n.id), [n.id]),
        Q = (0, u.e7)([ed.default], () => ed.default.getId()),
        { popoutWindow: J, popoutWindowAlwaysOnTop: $ } = (0, u.cj)([V.Z], () => ({
            popoutWindow: V.Z.getWindow(eG.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: V.Z.getIsAlwaysOnTop(eG.KJ3.CHANNEL_CALL_POPOUT)
        })),
        ee = (0, u.e7)([em.Z], () => em.Z.can(eG.Plq.CONNECT, n)),
        et = (0, u.e7)([ep.Z], () => ep.Z.getToastsEnabled(n.id)),
        en = (0, u.e7)([D.Z], () => D.Z.getAwaitingRemoteSessionInfo()),
        er = (0, u.e7)([q.ZP], () => q.ZP.callHeaderHeight),
        ei = i.useCallback((e) => {
            x.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = null != (t = null == W ? void 0 : W.id) ? t : null,
        eo = (0, Z.Z)(el, n.id),
        ea = (0, u.e7)([P.Z], () => P.Z.getFetchState(), []),
        es = (0, O.Z)(ea);
    i.useEffect(() => {
        ea === P.O.ERROR && es !== P.O.ERROR && (0, f.showToast)((0, f.createToast)(eF.intl.string(eF.t.AlJyIy), f.ToastType.FAILURE));
    }, [ea, es]);
    let ec = (0, u.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && N === eG.WtW.VIDEO && ((t = await eO.ZP.blockDisplaySleep()), e && null != t && eO.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eO.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, N]);
    let e_ = (0, B.S)(),
        ey = (0, eS.Z)(n, !0),
        { hasParticipantsPanel: ex } = (0, eR.Z)({ location: 'ChannelCall' }),
        { simplifiedSettingsEnabled: eC } = (0, K.Z)({ location: 'ChannelCall' }),
        ev = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ej } = (0, w.ZP)(T.Z.CHANNEL_CALL),
        eE = S.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eP } = (0, f.TCT)(),
        eN = (0, M.Q3)('ChannelCall');
    return (0, r.jsx)(w.Gt, {
        value: ej,
        children: (0, r.jsx)(v.Z, {
            page: eG.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eZ.B2, {
                children: (0, r.jsxs)(eM._A, {
                    children: [
                        (0, r.jsx)(eK, {
                            channel: n,
                            guild: W,
                            hasConnectPermission: ee,
                            participantsOpen: R,
                            participantsListOpen: k && ex,
                            enableSimplifiedCallSettings: eC,
                            renderExternalHeader: l,
                            appContext: g,
                            call: Y,
                            popoutWindow: J,
                            popoutWindowAlwaysOnTop: $,
                            mentionCount: X,
                            selectedStream: z,
                            mode: N,
                            inCall: _,
                            participants: y,
                            filteredParticipants: C,
                            participantsVersion: I,
                            layout: A,
                            chatOpen: G,
                            maxSidebarWidth: a - 550,
                            shouldUseVoiceEffectsActionBar: ey,
                            showGameConsoleCallButton: e_,
                            currentUserId: Q,
                            selectedParticipant: F,
                            allActiveStreams: H,
                            useNewInviteButton: eo,
                            connectedEmbeddedActivity: null != ec ? ec : void 0,
                            showChatToasts: et,
                            storedCallHeaderHeight: er,
                            updateStoredCallHeaderHeight: ei,
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
                            awaitingRemoteSessionInfo: en,
                            currentChannelActivities: eE,
                            theme: eP,
                            isRefreshEnabled: eN
                        }),
                        !n.isPrivate() && (0, r.jsx)(eM.YR, {}),
                        (0, r.jsx)(eZ.H_, {})
                    ]
                })
            })
        })
    });
};
