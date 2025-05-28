n.d(t, { Z: () => eK }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
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
    x = n(872810),
    y = n(153867),
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
    ea = n(107169),
    eo = n(891551),
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
    ex = n(626135),
    ey = n(934415),
    eC = n(585483),
    ev = n(358085),
    ej = n(998502),
    eO = n(228488),
    eE = n(358221),
    eI = n(414910),
    eP = n(887012),
    eS = n(909820),
    eZ = n(493010),
    eN = n(742603),
    eT = n(71127),
    eA = n(221888),
    ew = n(185935),
    eR = n(900211),
    ek = n(18759),
    eM = n(522651),
    eL = n(795318),
    eD = n(878752),
    eU = n(354459),
    eB = n(981631),
    eG = n(388032),
    eF = n(971182);
function eH(e, t, n) {
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
                eH(e, t, n[t]);
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
let eW = {
        [eB.AEg.NORMAL]: eF.normal,
        [eB.AEg.MINIMUM]: eF.minimum,
        [eB.AEg.NO_CHAT]: eF.noChat,
        [eB.AEg.FULL_SCREEN]: eF.fullScreen
    },
    eY = {
        [eB.IlC.POPOUT]: eF.popout,
        [eB.IlC.APP]: null,
        [eB.IlC.OVERLAY]: null
    };
class eq extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eO.NO, this.handleFullScreenChange), ex.default.track(eB.rMx.VIDEO_LAYOUT_TOGGLED, eV({ video_layout: this.inPopout ? 'popout' : t }, (0, A.AB)(e.id)));
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eO.NO, this.handleFullScreenChange), (this.inPopout && (0, ev.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === eB.WtW.VIDEO && r === eB.WtW.VOICE && (0, eO.rB)(l, this.currentDocument) && (0, eO.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && m.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ev.isPlatformEmbedded && ej.ZP.supportsFeature(eB.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eG.intl.string(eG.t.J5bXZW) } : null;
    }
    get inPopout() {
        return this.props.appContext === eB.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eB.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eB.WtW.VIDEO && r && this.popoutSupported,
            a = t !== eB.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            o = n.type === eB.d4z.GUILD_VOICE,
            s = e === eB.AEg.MINIMUM || e === eB.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            u = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: s,
                canInvite: o,
                canPopout: l,
                canFullscreen: i,
                canSelectRegion: n.isPrivate(),
                canChangeLayout: a,
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
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: a, popoutWindow: o, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            { isDesktopVisualRefreshEnabled: x } = this.state,
            y = f === eB.AEg.MINIMUM,
            C = y || f === eB.AEg.NORMAL,
            v = i && a === eB.WtW.VIDEO,
            j = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                et.Z,
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
                        disableGradients: (x && !i) || y,
                        idle: !m && i && !y && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(z.Z, { channel: p }),
                                          (0, r.jsx)(X.Z, {
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
                                              mode: a,
                                              onSelectParticipant: this.handleSelectParticipant,
                                              onContextMenuParticipant: this.handleContextMenu,
                                              showParticipants: s && (!C || j),
                                              popoutWindow: this.inPopout ? o : null,
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
            { layout: t, channel: n, guild: i, mode: l, chatOpen: o, appContext: s, maxSidebarWidth: c, maxHeight: u, inCall: d, participantsListOpen: p, theme: m, isRefreshEnabled: g } = this.props,
            { resizedHeight: b } = this.state,
            _ = l === eB.WtW.VIDEO,
            x = t !== eB.AEg.NO_CHAT && t !== eB.AEg.FULL_SCREEN && null != u;
        return (
            (e = g ? eB.BRd.MIDNIGHT : _ ? ((0, h.ap)(m) ? eB.BRd.DARK : m) : void 0),
            (0, r.jsxs)('div', {
                className: a()(eF.wrapper, eW[t], eY[s], {
                    [eF.poppedOut]: this.popoutOpen && !this.inPopout && t !== eB.AEg.NO_CHAT && n.isPrivate(),
                    [eF.video]: _,
                    [eF.sidebarOpen]: o || p
                }),
                ref: (e) => {
                    (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
                },
                style:
                    x && null != b
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
                                className: a()(eF.callContainer, o || t !== eB.AEg.FULL_SCREEN ? void 0 : eF.fullScreen, e),
                                ref: (e) => {
                                    (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                                },
                                children: (0, r.jsx)(J.ZP, {
                                    timeout: 2000,
                                    children: (e) => this.renderContent(e)
                                })
                            })
                    }),
                    x &&
                        (0, r.jsx)(eR.Z, {
                            minHeight: 230,
                            maxHeight: u,
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
                            (!d || !this.popoutOpen || this.inPopout) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    o &&
                                        (0, r.jsx)(eZ.Z, {
                                            channel: n,
                                            guild: i,
                                            maxWidth: c
                                        }),
                                    p &&
                                        (0, r.jsx)(eT.Z, {
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
            eH(this, '_prevLayout', eB.AEg.MINIMUM),
            eH(this, '_wrapperRef', i.createRef()),
            eH(this, '_callContainerRef', i.createRef()),
            eH(this, '_channelChatRef', i.createRef()),
            eH(this, '_contentRef', i.createRef()),
            eH(this, '_videoBackgroundTooltipTimeout', new p.V7()),
            eH(this, '_lastIdleProps', null),
            eH(this, 'state', {
                resizedHeight: q.ZP.callHeaderHeight,
                isDesktopVisualRefreshEnabled: (0, M.i9)('ChannelCall')
            }),
            eH(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && ((0, eO.rB)(e, this.currentDocument) || this.props.layout !== eB.AEg.FULL_SCREEN || this.handleFullScreen());
            }),
            eH(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eB.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eB.AEg.FULL_SCREEN), (0, eO.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eH(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eB.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eO.Pr)(e, this.currentDocument));
            }),
            eH(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eB.AEg.NORMAL ? eB.AEg.NO_CHAT : eB.AEg.NORMAL);
            }),
            eH(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (g.Z.updateLayout(t.id, e, n), e === eB.AEg.FULL_SCREEN && t.isPrivate() && eC.S.dispatch(eB.CkL.TEXTAREA_BLUR));
            }),
            eH(this, 'handleDisconnect', () => {
                this.props.layout === eB.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eH(this, 'trackCallTileContextMenuImpression', (e, t) => {
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
            eH(this, 'getCallTileMenuActionHandler', function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eU.A5.CONTEXT_MENU;
                return (0, eL.u)(e, T.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eU.fO.ACTIVITY ? t.user.id : void 0
                });
            }),
            eH(this, 'handleContextMenu', (e, t, i, l) => {
                var a, o;
                let { channel: c, appContext: u, layout: d } = this.props,
                    p = {
                        onClose: () => {
                            var e;
                            return null == (e = this._lastIdleProps) ? void 0 : e.onAllowIdle('menu');
                        },
                        context: u
                    };
                switch ((null == (a = this._lastIdleProps) || a.onPreventIdle('menu'), null == (o = this._lastIdleProps) || o.onActive(), e.type)) {
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
                                                minimal: i,
                                                onInteraction: this.getCallTileMenuActionHandler('StreamContextMenu', e, eU.TH.STREAM, l)
                                            })
                                        );
                                },
                                p
                            );
                        return;
                    case eU.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eU.TH.USER);
                        let h = eb.default.getUser(e.id);
                        if (null != h) {
                            if (i)
                                return (0, Y.D)(t, h, c, p, (e, t) =>
                                    (0, eL.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eU.A5.THREE_DOT,
                                        tileType: eU.TH.USER,
                                        targetUserId: h.id,
                                        location: T.Z.CHANNEL_CALL
                                    })
                                );
                            switch (c.type) {
                                case eB.d4z.DM:
                                    return (0, b.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('23331')]).then(n.bind(n, 131404));
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
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
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
                                                let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
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
            eH(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eH(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: a } = this.props;
                (0, eU._5)(e) && (0, F.p9)(n, e_.Z, eh.Z, ef.Z, D.Z)[0] && (_.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, G.V9)(t) === e.id && t.state !== eB.jm8.ENDED).length && (0, x.rn)((0, G.my)(e.id), { forceMultiple: t.shiftKey })), l && a === eB.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? g.Z.selectParticipant(n.id, null) : g.Z.selectParticipant(n.id, e.id));
            }),
            eH(this, 'handleOpenPopout', () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, W.uL)((0, ey.LY)(t)), H.hP(e);
                    };
                null == t || (0, I.R)() ? n() : (0, N.Z)(n);
            }),
            eH(this, 'handleStayOnTop', (e) => {
                (0, eM.v)(T.Z.VOICE_CONTROL_TRAY, eM.d.STAY_ON_TOP, e), H.hY(eB.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eH(this, 'handleClosePopout', () => {
                H.xv(eB.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eH(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eB.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eH(this, 'renderRegionSelect', () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === eB.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(C.Z, { call: t })),
                    (0, r.jsx)(k.Z, {
                        justify: k.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eH(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eB.AEg.MINIMUM || n === eB.AEg.NORMAL
                    ? (0, r.jsx)(K.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eH(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: i, useNewInviteButton: l, selectedParticipant: o, shouldUseVoiceEffectsActionBar: s, showGameConsoleCallButton: c, inCall: u, participants: d } = this.props;
                if (!u) return null;
                let p = e === eB.AEg.NO_CHAT ? en.Z.Directions.UP : en.Z.Directions.DOWN,
                    h = [eB.AEg.FULL_SCREEN, eB.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === eU.fO.STREAM),
                    g =
                        e === eB.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eB.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: b, canInvite: _ } = this.viewProperties,
                    x = l
                        ? (0, r.jsx)(Q.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eU.fO.STREAM ? (0, G.my)(o.id) : void 0,
                              applicationId: (null == o ? void 0 : o.type) === eU.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eF.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eB.d4z.GUILD_VOICE ? eB.ZY5.GUILD_CHANNEL : eB.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(ei.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eU.fO.STREAM ? (0, G.my)(o.id) : void 0,
                              className: eF.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eB.d4z.GUILD_VOICE ? eB.ZY5.GUILD_CHANNEL : eB.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        _ && !s ? x : null,
                        b
                            ? (0, r.jsxs)(k.Z, {
                                  className: eF.iconWrapper,
                                  align: k.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(en.Z, {
                                          label: h ? eG.intl.string(eG.t.kkKapK) : eG.intl.string(eG.t['5MstTk']),
                                          direction: p,
                                          className: eF.leftTrayIcon,
                                          onClick: () => {
                                              (0, eM.v)(T.Z.VOICE_CONTROL_TRAY, eM.d.CHAT, h), g();
                                          }
                                      }),
                                      h && t > 0
                                          ? (0, r.jsx)(f.mAB, {
                                                className: eF.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == o ? void 0 : o.type) !== eU.fO.STREAM && (null == o ? void 0 : o.type) !== eU.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)($.Z, {
                                  children: (0, r.jsx)(eA.Z, {
                                      className: a()(eF.leftTrayIcon, eF.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eB.AEg.FULL_SCREEN
                                  })
                              }),
                        s &&
                            (0, r.jsx)(eD.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: m
                            })
                    ]
                });
            }),
            eH(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: i } = this.props,
                    { canFullscreen: l, canStayOnTop: a, canPopout: o, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eU.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(eo.Z, {
                                  context: (0, eI.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eF.volumeSlider,
                                  className: eF.rightTrayIcon,
                                  location: T.Z.VOICE_CONTROL_TRAY
                              })
                            : null,
                        a
                            ? (0, r.jsx)(ea.Z, {
                                  className: eF.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        o
                            ? (0, r.jsx)(el.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eF.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eM.v)(T.Z.VOICE_CONTROL_TRAY, eM.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eM.v)(T.Z.VOICE_CONTROL_TRAY, eM.d.POPOUT, !1), this.handleClosePopout();
                                  }
                              })
                            : null,
                        l
                            ? (0, r.jsx)(er.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eF.rightTrayIcon,
                                  onClick: () => {
                                      (0, eM.v)(T.Z.VOICE_CONTROL_TRAY, eM.d.FULL_SCREEN, this.props.layout !== eB.AEg.FULL_SCREEN), this.handleFullScreen();
                                  }
                              })
                            : null
                    ]
                });
            }),
            eH(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eS.ZP, {
                          children: (0, r.jsx)(ee.Z, {
                              className: eF.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eH(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(ek.ZP, {
                    children: (0, r.jsx)(es.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eH(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: i, chatOpen: l, inCall: a } = this.props,
                    { useExternalHeader: o, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)($.Z, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eF.headerWrapper,
                                  children: o
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, r.jsx)(eN.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: i,
                                            inCall: a,
                                            isChatOpen: l || (this.popoutOpen && !this.inPopout && a),
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
let eK = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a } = e,
        { width: o = 0, ref: s } = (0, j.ZP)(),
        { width: c = 0, height: p = 0, ref: h } = (0, j.ZP)(),
        { ref: m } = (0, j.ZP)(),
        g = (0, E.bp)(),
        b = (0, U.Z)(),
        _ = (0, u.e7)([eg.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : eg.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: x,
            filteredParticipants: C,
            participantsVersion: I,
            mode: N,
            layout: A,
            participantsOpen: R,
            participantsListOpen: k,
            chatOpen: G,
            selectedParticipant: F
        } = (0, u.cj)(
            [eE.Z],
            () => {
                let e = g === eB.IlC.POPOUT,
                    t = eE.Z.getMode(n.id);
                e && (t = eB.WtW.VIDEO);
                let r = t === eB.WtW.VIDEO ? eE.Z.getLayout(n.id, g) : eB.AEg.MINIMUM;
                return (
                    e && r !== eB.AEg.FULL_SCREEN && (r = eB.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== eB.WtW.VOICE ? eE.Z.getSelectedParticipant(n.id) : null,
                        participants: eE.Z.getParticipants(n.id),
                        filteredParticipants: eE.Z.getFilteredParticipants(n.id),
                        participantsOpen: eE.Z.getParticipantsOpen(n.id),
                        chatOpen: eE.Z.getChatOpen(n.id),
                        participantsListOpen: eE.Z.getParticipantsListOpen(n.id),
                        participantsVersion: eE.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, u.Wu)([ec.Z], () => ec.Z.getAllActiveStreams()),
        { selectedStream: z } = (0, u.cj)([ec.Z], () => ({ selectedStream: null != F ? ec.Z.getActiveStreamForStreamKey(F.id) : null }), [F]),
        W = (0, u.e7)([eh.Z], () => eh.Z.getGuild(n.getGuildId())),
        Y = (0, u.e7)([ep.Z], () => ep.Z.getCall(n.id), [n.id]),
        K = (0, u.e7)([em.ZP], () => em.ZP.getMentionCount(n.id), [n.id]),
        X = (0, u.e7)([eu.default], () => eu.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: J } = (0, u.cj)([V.Z], () => ({
            popoutWindow: V.Z.getWindow(eB.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: V.Z.getIsAlwaysOnTop(eB.KJ3.CHANNEL_CALL_POPOUT)
        })),
        $ = (0, u.e7)([ef.Z], () => ef.Z.can(eB.Plq.CONNECT, n)),
        ee = (0, u.e7)([ed.Z], () => ed.Z.getToastsEnabled(n.id)),
        et = (0, u.e7)([D.Z], () => D.Z.getAwaitingRemoteSessionInfo()),
        en = (0, u.e7)([q.ZP], () => q.ZP.callHeaderHeight),
        er = i.useCallback((e) => {
            y.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null != (t = null == W ? void 0 : W.id) ? t : null,
        el = (0, Z.Z)(ei, n.id),
        ea = (0, u.e7)([P.Z], () => P.Z.getFetchState(), []),
        eo = (0, O.Z)(ea);
    i.useEffect(() => {
        ea === P.O.ERROR && eo !== P.O.ERROR && (0, f.showToast)((0, f.createToast)(eG.intl.string(eG.t.AlJyIy), f.ToastType.FAILURE));
    }, [ea, eo]);
    let es = (0, u.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && N === eB.WtW.VIDEO && ((t = await ej.ZP.blockDisplaySleep()), e && null != t && ej.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ej.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, N]);
    let eb = (0, B.S)(),
        e_ = (0, eP.Z)(n, !0),
        { hasParticipantsPanel: ex } = (0, ew.Z)({ location: 'ChannelCall' }),
        ey = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eC } = (0, w.ZP)(T.Z.CHANNEL_CALL),
        ev = S.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eO } = (0, f.TCT)(),
        eI = (0, M.Q3)('ChannelCall');
    return (0, r.jsx)(w.Gt, {
        value: eC,
        children: (0, r.jsx)(v.Z, {
            page: eB.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eS.B2, {
                children: (0, r.jsxs)(ek._A, {
                    children: [
                        (0, r.jsx)(eq, {
                            channel: n,
                            guild: W,
                            hasConnectPermission: $,
                            participantsOpen: R,
                            participantsListOpen: k && ex,
                            renderExternalHeader: l,
                            appContext: g,
                            call: Y,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: J,
                            mentionCount: K,
                            selectedStream: z,
                            mode: N,
                            inCall: _,
                            participants: x,
                            filteredParticipants: C,
                            participantsVersion: I,
                            layout: A,
                            chatOpen: G,
                            maxSidebarWidth: o - 550,
                            shouldUseVoiceEffectsActionBar: e_,
                            showGameConsoleCallButton: eb,
                            currentUserId: X,
                            selectedParticipant: F,
                            allActiveStreams: H,
                            useNewInviteButton: el,
                            connectedEmbeddedActivity: null != es ? es : void 0,
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
                            width: o,
                            maxHeight: a,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: ev,
                            theme: eO,
                            isRefreshEnabled: eI
                        }),
                        !n.isPrivate() && (0, r.jsx)(ek.YR, {}),
                        (0, r.jsx)(eS.H_, {})
                    ]
                })
            })
        })
    });
};
