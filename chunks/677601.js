n.d(t, { Z: () => eQ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(990547),
    u = n(252258),
    d = n(442837),
    p = n(704215),
    h = n(846519),
    f = n(780384),
    m = n(481060),
    g = n(570140),
    b = n(475179),
    _ = n(239091),
    y = n(287734),
    C = n(872810),
    x = n(153867),
    v = n(944543),
    j = n(410575),
    O = n(393238),
    E = n(110924),
    I = n(40851),
    P = n(636449),
    S = n(115130),
    Z = n(317381),
    N = n(596040),
    T = n(349619),
    A = n(100527),
    w = n(367907),
    R = n(906732),
    k = n(213609),
    M = n(600164),
    L = n(540059),
    D = n(211644),
    U = n(258609),
    B = n(446226),
    G = n(203341),
    F = n(569545),
    H = n(102172),
    V = n(788983),
    z = n(928518),
    W = n(191302),
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
    ey = n(594174),
    eC = n(979651),
    ex = n(626135),
    ev = n(934415),
    ej = n(585483),
    eO = n(358085),
    eE = n(998502),
    eI = n(228488),
    eP = n(358221),
    eS = n(414910),
    eZ = n(887012),
    eN = n(909820),
    eT = n(493010),
    eA = n(742603),
    ew = n(71127),
    eR = n(221888),
    ek = n(185935),
    eM = n(900211),
    eL = n(18759),
    eD = n(522651),
    eU = n(795318),
    eB = n(878752),
    eG = n(354459),
    eF = n(981631),
    eH = n(388032),
    eV = n(971182);
function ez(e, t, n) {
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
function eW(e) {
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
                ez(e, t, n[t]);
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
        [eF.AEg.NORMAL]: eV.normal,
        [eF.AEg.MINIMUM]: eV.minimum,
        [eF.AEg.NO_CHAT]: eV.noChat,
        [eF.AEg.FULL_SCREEN]: eV.fullScreen
    },
    eK = {
        [eF.IlC.POPOUT]: eV.popout,
        [eF.IlC.APP]: null,
        [eF.IlC.OVERLAY]: null
    };
class eX extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eI.NO, this.handleFullScreenChange), ex.default.track(eF.rMx.VIDEO_LAYOUT_TOGGLED, eW({ video_layout: this.inPopout ? 'popout' : t }, (0, w.AB)(e.id)));
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eI.NO, this.handleFullScreenChange), (this.inPopout && (0, eO.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === eF.WtW.VIDEO && r === eF.WtW.VOICE && (0, eI.rB)(l, this.currentDocument) && (0, eI.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var o;
            null == (o = this._contentRef.current) || o.triggerResize();
        }
        e.inCall && !n && this.inPopout && g.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eO.isPlatformEmbedded && eE.ZP.supportsFeature(eF.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eH.intl.string(eH.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eF.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eF.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eF.WtW.VIDEO && r && this.popoutSupported,
            o = t !== eF.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            a = n.type === eF.d4z.GUILD_VOICE,
            s = e === eF.AEg.MINIMUM || e === eF.AEg.NORMAL,
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
            return eY(eW({}, u), {
                canFullscreen: i,
                useTheme: !0
            });
        switch (e) {
            case eF.AEg.FULL_SCREEN:
                return eY(eW({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case eF.AEg.MINIMUM:
                return eY(eW({}, u), {
                    canPopout: !1,
                    useTheme: !0
                });
            case eF.AEg.NO_CHAT:
            case eF.AEg.NORMAL:
                return eW({}, u);
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: o, popoutWindow: a, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            { isDesktopVisualRefreshEnabled: y } = this.state,
            C = f === eF.AEg.MINIMUM,
            x = C || f === eF.AEg.NORMAL,
            v = i && o === eF.WtW.VIDEO,
            j = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                er.Z,
                eY(
                    eW(
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
                        disableGradients: (y && !i) || C,
                        idle: !m && i && !C && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(W.Z, { channel: p }),
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
                                              selectedParticipant: v ? n : null,
                                              layout: f,
                                              idle: e.idle,
                                              mode: o,
                                              onSelectParticipant: this.handleSelectParticipant,
                                              onContextMenuParticipant: this.handleContextMenu,
                                              showParticipants: s && (!x || j),
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
            { layout: t, channel: n, guild: i, mode: l, chatOpen: a, appContext: s, maxSidebarWidth: c, maxHeight: u, inCall: d, participantsListOpen: p, theme: h, isRefreshEnabled: g } = this.props,
            { resizedHeight: b } = this.state,
            _ = l === eF.WtW.VIDEO,
            y = t !== eF.AEg.NO_CHAT && t !== eF.AEg.FULL_SCREEN && null != u;
        return (
            (e = g ? eF.BRd.MIDNIGHT : _ ? ((0, f.ap)(h) ? eF.BRd.DARK : h) : void 0),
            (0, r.jsxs)('div', {
                className: o()(eV.wrapper, eq[t], eK[s], {
                    [eV.poppedOut]: this.popoutOpen && !this.inPopout && t !== eF.AEg.NO_CHAT && n.isPrivate(),
                    [eV.video]: _,
                    [eV.sidebarOpen]: a || p
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
                    (0, r.jsx)(m.f6W, {
                        theme: e,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: o()(eV.callContainer, e),
                                ref: (e) => {
                                    (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                                },
                                children: (0, r.jsx)(ee.ZP, {
                                    timeout: 2000,
                                    children: (e) => this.renderContent(e)
                                })
                            })
                    }),
                    y &&
                        (0, r.jsx)(eM.Z, {
                            minHeight: 230,
                            maxHeight: u,
                            resizableNode: this._wrapperRef,
                            onResize: this.handleCallResize,
                            onResizeEnd: this.props.updateStoredCallHeaderHeight
                        }),
                    (0, r.jsx)('div', {
                        className: eV.channelChatWrapper,
                        ref: (e) => {
                            (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                        },
                        children:
                            (!d || !this.popoutOpen || this.inPopout) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    a &&
                                        (0, r.jsx)(eT.Z, {
                                            channel: n,
                                            guild: i,
                                            maxWidth: c
                                        }),
                                    p &&
                                        (0, r.jsx)(ew.Z, {
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
            ez(this, '_prevLayout', eF.AEg.MINIMUM),
            ez(this, '_wrapperRef', i.createRef()),
            ez(this, '_callContainerRef', i.createRef()),
            ez(this, '_channelChatRef', i.createRef()),
            ez(this, '_contentRef', i.createRef()),
            ez(this, '_videoBackgroundTooltipTimeout', new h.V7()),
            ez(this, '_lastIdleProps', null),
            ez(this, 'state', {
                resizedHeight: K.ZP.callHeaderHeight,
                isDesktopVisualRefreshEnabled: (0, L.i9)('ChannelCall')
            }),
            ez(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && ((0, eI.rB)(e, this.currentDocument) || this.props.layout !== eF.AEg.FULL_SCREEN || this.handleFullScreen());
            }),
            ez(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eF.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eF.AEg.FULL_SCREEN), (0, eI.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            ez(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eF.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eI.Pr)(e, this.currentDocument));
            }),
            ez(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eF.AEg.NORMAL ? eF.AEg.NO_CHAT : eF.AEg.NORMAL);
            }),
            ez(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (b.Z.updateLayout(t.id, e, n), e === eF.AEg.FULL_SCREEN && t.isPrivate() && ej.S.dispatch(eF.CkL.TEXTAREA_BLUR));
            }),
            ez(this, 'handleDisconnect', () => {
                this.props.layout === eF.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            ez(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, k.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'ChannelCall',
                        is_tile_owner: e.type !== eG.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            ez(this, 'getCallTileMenuActionHandler', function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eG.A5.CONTEXT_MENU;
                return (0, eU.u)(e, A.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eG.fO.ACTIVITY ? t.user.id : void 0
                });
            }),
            ez(this, 'handleContextMenu', (e, t, i, l) => {
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
                    case eG.fO.HIDDEN_STREAM:
                    case eG.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eG.TH.STREAM),
                            (0, _.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eY(eW({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                simplified: i,
                                                onInteraction: this.getCallTileMenuActionHandler('StreamContextMenu', e, eG.TH.STREAM, l)
                                            })
                                        );
                                },
                                p
                            );
                        return;
                    case eG.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eG.TH.USER);
                        let h = ey.default.getUser(e.id);
                        if (null != h) {
                            if (this.props.enableSimplifiedCallSettings && i)
                                return (0, q.D)(t, h, c, p, (e, t) =>
                                    (0, eU.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eG.A5.THREE_DOT,
                                        tileType: eG.TH.USER,
                                        targetUserId: h.id,
                                        location: A.Z.CHANNEL_CALL
                                    })
                                );
                            switch (c.type) {
                                case eF.d4z.DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('20875'), n.e('70205'), n.e('4040'), n.e('53912'), n.e('56826'), n.e('31084')]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eY(eW({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('DMUserContextMenu', e, eG.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eF.d4z.GROUP_DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('4040'), n.e('60677'), n.e('40835')]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eY(eW({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eF.AEg.MINIMUM || d === eF.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('GroupDMUserContextMenu', e, eG.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eF.d4z.GUILD_VOICE:
                                case eF.d4z.PUBLIC_THREAD:
                                case eF.d4z.PRIVATE_THREAD:
                                    let l = c.getGuildId();
                                    return (
                                        s()(null != l, 'GuildID null for guild voice channel'),
                                        (0, _.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([n.e('79695'), n.e('4040'), n.e('98693'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eY(eW({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: h,
                                                            channel: c,
                                                            guildId: l,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler('GuildChannelUserContextMenu', e, eG.TH.USER)
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
            ez(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            ez(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: o } = this.props;
                (0, eG._5)(e) && (0, H.p9)(n, eC.Z, em.Z, eg.Z, U.Z)[0] && (y.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, F.V9)(t) === e.id && t.state !== eF.jm8.ENDED).length && (0, C.rn)((0, F.my)(e.id), { forceMultiple: t.shiftKey })), l && o === eF.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? b.Z.selectParticipant(n.id, null) : b.Z.selectParticipant(n.id, e.id));
            }),
            ez(this, 'handleOpenPopout', () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, Y.uL)((0, ev.LY)(t)), V.hP(e);
                    };
                null == t || (0, P.R)({ isContextless: t.location.kind === u.E.CONTEXTLESS }) ? n() : (0, T.Z)(n);
            }),
            ez(this, 'handleStayOnTop', (e) => {
                (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.STAY_ON_TOP, e), V.hY(eF.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            ez(this, 'handleClosePopout', () => {
                V.xv(eF.KJ3.CHANNEL_CALL_POPOUT);
            }),
            ez(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eF.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            ez(this, 'renderRegionSelect', () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === eF.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(v.Z, { call: t })),
                    (0, r.jsx)(M.Z, {
                        justify: M.Z.Justify.END,
                        children: e
                    })
                );
            }),
            ez(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eF.AEg.MINIMUM || n === eF.AEg.NORMAL
                    ? (0, r.jsx)(Q.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            ez(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: i, useNewInviteButton: l, selectedParticipant: a, shouldUseVoiceEffectsActionBar: s, showGameConsoleCallButton: c, inCall: u, participants: d, enableSimplifiedCallSettings: p } = this.props;
                if (!u) return null;
                let h = e === eF.AEg.NO_CHAT ? ei.Z.Directions.UP : ei.Z.Directions.DOWN,
                    f = [eF.AEg.FULL_SCREEN, eF.AEg.NO_CHAT].includes(e),
                    g = d.some((e) => e.type === eG.fO.STREAM),
                    b =
                        e === eF.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eF.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: _, canInvite: y } = this.viewProperties,
                    C = l
                        ? (0, r.jsx)($.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eG.fO.STREAM ? (0, F.my)(a.id) : void 0,
                              applicationId: (null == a ? void 0 : a.type) === eG.fO.ACTIVITY ? a.applicationId : void 0,
                              appContext: i,
                              className: eV.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eF.d4z.GUILD_VOICE ? eF.ZY5.GUILD_CHANNEL : eF.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(eo.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eG.fO.STREAM ? (0, F.my)(a.id) : void 0,
                              className: eV.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eF.d4z.GUILD_VOICE ? eF.ZY5.GUILD_CHANNEL : eF.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        y && !s ? C : null,
                        _
                            ? (0, r.jsxs)(M.Z, {
                                  className: eV.iconWrapper,
                                  align: M.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ei.Z, {
                                          label: f ? eH.intl.string(eH.t.kkKapK) : eH.intl.string(eH.t['5MstTk']),
                                          direction: h,
                                          className: eV.leftTrayIcon,
                                          onClick: () => {
                                              (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.CHAT, f), b();
                                          }
                                      }),
                                      f && t > 0
                                          ? (0, r.jsx)(m.mAB, {
                                                className: eV.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == a ? void 0 : a.type) !== eG.fO.STREAM && (null == a ? void 0 : a.type) !== eG.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)(et.Z, {
                                  children: (0, r.jsx)(eR.Z, {
                                      className: o()(eV.leftTrayIcon, eV.viewersButton),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eF.AEg.FULL_SCREEN
                                  })
                              }),
                        s &&
                            (0, r.jsx)(eB.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: g,
                                themeable: this.viewProperties.useTheme
                            }),
                        c &&
                            !p &&
                            (0, r.jsx)(G.Z, {
                                themeable: this.viewProperties.useTheme,
                                className: eV.leftTrayIcon,
                                channel: n
                            })
                    ]
                });
            }),
            ez(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: i } = this.props,
                    { canFullscreen: l, canStayOnTop: o, canPopout: a, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eG.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(ec.Z, {
                                  context: (0, eS.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eV.volumeSlider,
                                  className: eV.rightTrayIcon,
                                  location: A.Z.VOICE_CONTROL_TRAY
                              })
                            : null,
                        o
                            ? (0, r.jsx)(es.Z, {
                                  className: eV.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        a
                            ? (0, r.jsx)(ea.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eV.rightTrayIcon,
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
                                  className: eV.rightTrayIcon,
                                  onClick: () => {
                                      (0, eD.v)(A.Z.VOICE_CONTROL_TRAY, eD.d.FULL_SCREEN, this.props.layout !== eF.AEg.FULL_SCREEN), this.handleFullScreen();
                                  }
                              })
                            : null
                    ]
                });
            }),
            ez(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eN.ZP, {
                          children: (0, r.jsx)(en.Z, {
                              className: eV.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            ez(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eL.ZP, {
                    children: (0, r.jsx)(eu.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            ez(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: i, chatOpen: l, inCall: o } = this.props,
                    { useExternalHeader: a, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)(et.Z, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eV.headerWrapper,
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
        { width: a = 0, ref: s } = (0, O.ZP)(),
        { width: c = 0, height: u = 0, ref: h } = (0, O.ZP)(),
        { ref: f } = (0, O.ZP)(),
        g = (0, I.bp)(),
        b = (0, B.Z)(),
        _ = (0, d.e7)([e_.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : e_.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: y,
            filteredParticipants: C,
            participantsVersion: v,
            mode: P,
            layout: T,
            participantsOpen: w,
            participantsListOpen: k,
            chatOpen: M,
            selectedParticipant: F
        } = (0, d.cj)(
            [eP.Z],
            () => {
                let e = g === eF.IlC.POPOUT,
                    t = eP.Z.getMode(n.id);
                e && (t = eF.WtW.VIDEO);
                let r = t === eF.WtW.VIDEO ? eP.Z.getLayout(n.id, g) : eF.AEg.MINIMUM;
                return (
                    e && r !== eF.AEg.FULL_SCREEN && (r = eF.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== eF.WtW.VOICE ? eP.Z.getSelectedParticipant(n.id) : null,
                        participants: eP.Z.getParticipants(n.id),
                        filteredParticipants: eP.Z.getFilteredParticipants(n.id),
                        participantsOpen: eP.Z.getParticipantsOpen(n.id),
                        chatOpen: eP.Z.getChatOpen(n.id),
                        participantsListOpen: eP.Z.getParticipantsListOpen(n.id),
                        participantsVersion: eP.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, d.Wu)([ed.Z], () => ed.Z.getAllActiveStreams()),
        { selectedStream: V } = (0, d.cj)([ed.Z], () => ({ selectedStream: null != F ? ed.Z.getActiveStreamForStreamKey(F.id) : null }), [F]),
        W = (0, d.e7)([em.Z], () => em.Z.getGuild(n.getGuildId())),
        Y = (0, d.e7)([ef.Z], () => ef.Z.getCall(n.id), [n.id]),
        q = (0, d.e7)([eb.ZP], () => eb.ZP.getMentionCount(n.id), [n.id]),
        Q = (0, d.e7)([ep.default], () => ep.default.getId()),
        { popoutWindow: J, popoutWindowAlwaysOnTop: $ } = (0, d.cj)([z.Z], () => ({
            popoutWindow: z.Z.getWindow(eF.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: z.Z.getIsAlwaysOnTop(eF.KJ3.CHANNEL_CALL_POPOUT)
        })),
        ee = (0, d.e7)([eg.Z], () => eg.Z.can(eF.Plq.CONNECT, n)),
        et = (0, d.e7)([eh.Z], () => eh.Z.getToastsEnabled(n.id)),
        en = (0, d.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
        er = (0, d.e7)([K.ZP], () => K.ZP.callHeaderHeight),
        ei = i.useCallback((e) => {
            x.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = null != (t = null == W ? void 0 : W.id) ? t : null,
        eo = (0, N.Z)(el, n.id),
        ea = (0, d.e7)([S.Z], () => S.Z.getFetchState(), []),
        es = (0, E.Z)(ea);
    i.useEffect(() => {
        ea === S.O.ERROR && es !== S.O.ERROR && (0, m.showToast)((0, m.createToast)(eH.intl.string(eH.t.AlJyIy), m.ToastType.FAILURE));
    }, [ea, es]);
    let ec = (0, d.e7)([Z.ZP], () => Z.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && P === eF.WtW.VIDEO && ((t = await eE.ZP.blockDisplaySleep()), e && null != t && eE.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eE.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, P]);
    let eu = (0, G.S)(),
        ey = (0, eZ.Z)(n, !0),
        { hasParticipantsPanel: eC } = (0, ek.Z)({ location: 'ChannelCall' }),
        { simplifiedSettingsEnabled: ex } = (0, X.Z)({ location: 'ChannelCall' }),
        ev = (0, D.bn)(p.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ej } = (0, R.ZP)(A.Z.CHANNEL_CALL),
        eO = Z.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eI } = (0, m.TCT)(),
        eS = (0, L.Q3)('ChannelCall');
    return (0, r.jsx)(R.Gt, {
        value: ej,
        children: (0, r.jsx)(j.Z, {
            page: eF.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eN.B2, {
                children: (0, r.jsxs)(eL._A, {
                    children: [
                        (0, r.jsx)(eX, {
                            channel: n,
                            guild: W,
                            hasConnectPermission: ee,
                            participantsOpen: w,
                            participantsListOpen: k && eC,
                            enableSimplifiedCallSettings: ex,
                            renderExternalHeader: l,
                            appContext: g,
                            call: Y,
                            popoutWindow: J,
                            popoutWindowAlwaysOnTop: $,
                            mentionCount: q,
                            selectedStream: V,
                            mode: P,
                            inCall: _,
                            participants: y,
                            filteredParticipants: C,
                            participantsVersion: v,
                            layout: T,
                            chatOpen: M,
                            maxSidebarWidth: a - 550,
                            shouldUseVoiceEffectsActionBar: ey,
                            showGameConsoleCallButton: eu,
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
                                height: u
                            },
                            callContainerRef: h,
                            channelChatRef: f,
                            width: a,
                            maxHeight: o,
                            forceShowControls: ev,
                            awaitingRemoteSessionInfo: en,
                            currentChannelActivities: eO,
                            theme: eI,
                            isRefreshEnabled: eS
                        }),
                        !n.isPrivate() && (0, r.jsx)(eL.YR, {}),
                        (0, r.jsx)(eN.H_, {})
                    ]
                })
            })
        })
    });
};
