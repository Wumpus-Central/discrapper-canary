(n.d(t, { Z: () => eW }), n(388685));
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
    h = n(481060),
    f = n(570140),
    m = n(475179),
    g = n(239091),
    b = n(287734),
    _ = n(872810),
    y = n(153867),
    C = n(944543),
    x = n(410575),
    v = n(393238),
    j = n(110924),
    O = n(40851),
    E = n(636449),
    S = n(115130),
    P = n(317381),
    I = n(596040),
    Z = n(617552),
    T = n(100527),
    N = n(367907),
    A = n(906732),
    w = n(213609),
    R = n(600164),
    M = n(211644),
    D = n(258609),
    k = n(446226),
    L = n(203341),
    U = n(569545),
    B = n(102172),
    F = n(788983),
    H = n(928518),
    G = n(703656),
    V = n(880395),
    z = n(740492),
    W = n(793319),
    Y = n(3861),
    q = n(493754),
    K = n(937995),
    X = n(618158),
    Q = n(880831),
    J = n(73563),
    $ = n(751843),
    ee = n(268353),
    et = n(786915),
    en = n(800965),
    er = n(107169),
    ei = n(891551),
    el = n(488785),
    ea = n(199902),
    eo = n(314897),
    es = n(979696),
    ec = n(523746),
    eu = n(430824),
    ed = n(496675),
    ep = n(306680),
    eh = n(944486),
    ef = n(594174),
    em = n(979651),
    eg = n(626135),
    eb = n(934415),
    e_ = n(585483),
    ey = n(358085),
    eC = n(998502),
    ex = n(228488),
    ev = n(358221),
    ej = n(414910),
    eO = n(887012),
    eE = n(909820),
    eS = n(493010),
    eP = n(742603),
    eI = n(71127),
    eZ = n(221888),
    eT = n(185935),
    eN = n(900211),
    eA = n(18759),
    ew = n(522651),
    eR = n(795318),
    eM = n(878752),
    eD = n(354459),
    ek = n(981631),
    eL = n(388032),
    eU = n(971182);
function eB(e, t, n) {
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
function eF(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eB(e, t, n[t]);
            }));
    }
    return e;
}
function eH(e, t) {
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
let eG = {
        [ek.AEg.NORMAL]: eU.normal,
        [ek.AEg.MINIMUM]: eU.minimum,
        [ek.AEg.NO_CHAT]: eU.noChat,
        [ek.AEg.FULL_SCREEN]: eU.fullScreen
    },
    eV = {
        [ek.IlC.POPOUT]: eU.popout,
        [ek.IlC.APP]: null,
        [ek.IlC.OVERLAY]: null
    };
class ez extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        (this.currentDocument.addEventListener(ex.NO, this.handleFullScreenChange), eg.default.track(ek.rMx.VIDEO_LAYOUT_TOGGLED, eF({ video_layout: this.inPopout ? 'popout' : t }, (0, N.AB)(e.id))));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(ex.NO, this.handleFullScreenChange), (this.inPopout && (0, ey.isMac)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === ek.WtW.VIDEO && r === ek.WtW.VOICE && (0, ex.rB)(l, this.currentDocument) && (0, ex.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ey.isPlatformEmbedded && eC.ZP.supportsFeature(ek.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ey.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eL.intl.string(eL.t.J5bXZW) } : null;
    }
    get inPopout() {
        return this.props.appContext === ek.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === ek.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === ek.WtW.VIDEO && r && this.popoutSupported,
            a = t !== ek.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            o = n.type === ek.d4z.GUILD_VOICE,
            s = e === ek.AEg.MINIMUM || e === ek.AEg.NORMAL,
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
            return eH(eF({}, u), {
                canFullscreen: i,
                useTheme: !0
            });
        switch (e) {
            case ek.AEg.FULL_SCREEN:
                return eH(eF({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case ek.AEg.MINIMUM:
                return eH(eF({}, u), {
                    canPopout: !1,
                    useTheme: !0
                });
            case ek.AEg.NO_CHAT:
            case ek.AEg.NORMAL:
                return eF({}, u);
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: a, popoutWindow: o, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            y = f === ek.AEg.MINIMUM,
            C = y || f === ek.AEg.NORMAL,
            x = i && a === ek.WtW.VIDEO,
            v = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                J.Z,
                eH(
                    eF(
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
                        disableGradients: !i || y,
                        idle: !m && i && !y && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsx)(Y.Z, {
                                      ref: this._contentRef,
                                      inCall: i,
                                      channel: p,
                                      hasConnectPermission: l,
                                      guild: h,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: x ? n : null,
                                      layout: f,
                                      idle: e.idle,
                                      mode: a,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: s && (!C || v),
                                      popoutWindow: this.inPopout ? o : null,
                                      awaitingRemoteSessionInfo: g,
                                      callContainerDimensions: _
                                  })
                    }
                )
            )
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: i, chatOpen: l, appContext: o, maxSidebarWidth: s, maxHeight: c, inCall: u, participantsListOpen: d } = this.props,
            { resizedHeight: p } = this.state,
            f = i === ek.WtW.VIDEO,
            m = e !== ek.AEg.NO_CHAT && e !== ek.AEg.FULL_SCREEN && null != c,
            g = ek.BRd.MIDNIGHT;
        return (0, r.jsxs)('div', {
            className: a()(eU.wrapper, eG[e], eV[o], {
                [eU.poppedOut]: this.popoutOpen && !this.inPopout && e !== ek.AEg.NO_CHAT && t.isPrivate(),
                [eU.video]: f,
                [eU.sidebarOpen]: l || d
            }),
            ref: (e) => {
                ((this._wrapperRef.current = e), (this.props.wrapperRef.current = e));
            },
            style:
                m && null != p
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: p
                      }
                    : void 0,
            children: [
                (0, r.jsx)(h.f6W, {
                    theme: g,
                    children: (t) =>
                        (0, r.jsx)('div', {
                            className: a()(eU.callContainer, l || e !== ek.AEg.FULL_SCREEN ? void 0 : eU.fullScreen, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, r.jsx)(K.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                m &&
                    (0, r.jsx)(eN.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, r.jsx)('div', {
                    className: eU.channelChatWrapper,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                l &&
                                    (0, r.jsx)(eS.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s
                                    }),
                                d &&
                                    (0, r.jsx)(eI.Z, {
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
        (super(...e),
            eB(this, '_prevLayout', ek.AEg.MINIMUM),
            eB(this, '_wrapperRef', i.createRef()),
            eB(this, '_callContainerRef', i.createRef()),
            eB(this, '_channelChatRef', i.createRef()),
            eB(this, '_contentRef', i.createRef()),
            eB(this, '_videoBackgroundTooltipTimeout', new p.V7()),
            eB(this, '_lastIdleProps', null),
            eB(this, 'state', { resizedHeight: z.ZP.callHeaderHeight }),
            eB(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && ((0, ex.rB)(e, this.currentDocument) || this.props.layout !== ek.AEg.FULL_SCREEN || this.handleFullScreen());
            }),
            eB(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== ek.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(ek.AEg.FULL_SCREEN), (0, ex.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eB(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === ek.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, ex.Pr)(e, this.currentDocument));
            }),
            eB(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === ek.AEg.NORMAL ? ek.AEg.NO_CHAT : ek.AEg.NORMAL);
            }),
            eB(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (m.Z.updateLayout(t.id, e, n), e === ek.AEg.FULL_SCREEN && t.isPrivate() && e_.S.dispatch(ek.CkL.TEXTAREA_BLUR));
            }),
            eB(this, 'handleDisconnect', () => {
                this.props.layout === ek.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eB(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, w.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'ChannelCall',
                        is_tile_owner: e.type !== eD.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            eB(this, 'getCallTileMenuActionHandler', function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eD.A5.CONTEXT_MENU;
                return (0, eR.u)(e, T.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eD.fO.ACTIVITY ? t.user.id : void 0
                });
            }),
            eB(this, 'handleContextMenu', (e, t, i, l) => {
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
                    case eD.fO.HIDDEN_STREAM:
                    case eD.fO.STREAM:
                        (this.trackCallTileContextMenuImpression(e, eD.TH.STREAM),
                            (0, g.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eH(eF({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: i,
                                                onInteraction: this.getCallTileMenuActionHandler('StreamContextMenu', e, eD.TH.STREAM, l)
                                            })
                                        );
                                },
                                p
                            ));
                        return;
                    case eD.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eD.TH.USER);
                        let h = ef.default.getUser(e.id);
                        if (null != h) {
                            if (i)
                                return (0, V.D)(t, h, c, p, (e, t) =>
                                    (0, eR.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eD.A5.THREE_DOT,
                                        tileType: eD.TH.USER,
                                        targetUserId: h.id,
                                        location: T.Z.CHANNEL_CALL
                                    })
                                );
                            switch (c.type) {
                                case ek.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('56399')]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eH(eF({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('DMUserContextMenu', e, eD.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case ek.d4z.GROUP_DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eH(eF({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === ek.AEg.MINIMUM || d === ek.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('GroupDMUserContextMenu', e, eD.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case ek.d4z.GUILD_VOICE:
                                case ek.d4z.PUBLIC_THREAD:
                                case ek.d4z.PRIVATE_THREAD:
                                    let l = c.getGuildId();
                                    return (
                                        s()(null != l, 'GuildID null for guild voice channel'),
                                        (0, g.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eH(eF({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: h,
                                                            channel: c,
                                                            guildId: l,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler('GuildChannelUserContextMenu', e, eD.TH.USER)
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
            eB(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eB(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: a } = this.props;
                ((0, eD._5)(e) && (0, B.p9)(n, em.Z, eu.Z, ed.Z, D.Z)[0] && (b.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, U.V9)(t) === e.id && t.state !== ek.jm8.ENDED).length && (0, _.rn)((0, U.my)(e.id), { forceMultiple: t.shiftKey })), l && a === ek.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id)));
            }),
            eB(this, 'handleOpenPopout', () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        (null != t && (0, G.uL)((0, eb.LY)(t)), F.hP(e));
                    };
                null == t || (0, E.R)() ? n() : (0, Z.Z)({ onConfirm: n });
            }),
            eB(this, 'handleStayOnTop', (e) => {
                ((0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.STAY_ON_TOP, e), F.hY(ek.KJ3.CHANNEL_CALL_POPOUT, e));
            }),
            eB(this, 'handleClosePopout', () => {
                F.xv(ek.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eB(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === ek.AEg.FULL_SCREEN;
                (((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen());
            }),
            eB(this, 'renderRegionSelect', () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === ek.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(C.Z, { call: t })),
                    (0, r.jsx)(R.Z, {
                        justify: R.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eB(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ek.AEg.MINIMUM || n === ek.AEg.NORMAL
                    ? (0, r.jsx)(W.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eB(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: i, useNewInviteButton: l, selectedParticipant: o, shouldUseVoiceEffectsActionBar: s, showGameConsoleCallButton: c, inCall: u, participants: d } = this.props;
                if (!u) return null;
                let p = e === ek.AEg.NO_CHAT ? $.Z.Directions.UP : $.Z.Directions.DOWN,
                    f = [ek.AEg.FULL_SCREEN, ek.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === eD.fO.STREAM),
                    g =
                        e === ek.AEg.FULL_SCREEN
                            ? () => {
                                  ((this._prevLayout = ek.AEg.NORMAL), this.handleFullScreen());
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: b, canInvite: _ } = this.viewProperties,
                    y = l
                        ? (0, r.jsx)(q.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eD.fO.STREAM ? (0, U.my)(o.id) : void 0,
                              applicationId: (null == o ? void 0 : o.type) === eD.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(et.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eD.fO.STREAM ? (0, U.my)(o.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        _ && !s ? y : null,
                        b
                            ? (0, r.jsxs)(R.Z, {
                                  className: eU.iconWrapper,
                                  align: R.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)($.Z, {
                                          label: f ? eL.intl.string(eL.t.kkKapK) : eL.intl.string(eL.t['5MstTk']),
                                          direction: p,
                                          className: eU.leftTrayIcon,
                                          onClick: () => {
                                              ((0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.CHAT, f), g());
                                          }
                                      }),
                                      f && t > 0
                                          ? (0, r.jsx)(h.mAB, {
                                                className: eU.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == o ? void 0 : o.type) !== eD.fO.STREAM && (null == o ? void 0 : o.type) !== eD.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)(X.Z, {
                                  children: (0, r.jsx)(eZ.Z, {
                                      className: a()(eU.leftTrayIcon, eU.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ek.AEg.FULL_SCREEN
                                  })
                              }),
                        s &&
                            (0, r.jsx)(eM.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: m
                            })
                    ]
                });
            }),
            eB(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: i } = this.props,
                    { canFullscreen: l, canStayOnTop: a, canPopout: o, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eD.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(ei.Z, {
                                  context: (0, ej.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eU.volumeSlider,
                                  className: eU.rightTrayIcon,
                                  location: T.Z.VOICE_CONTROL_TRAY
                              })
                            : null,
                        a
                            ? (0, r.jsx)(er.Z, {
                                  className: eU.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        o
                            ? (0, r.jsx)(en.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eU.rightTrayIcon,
                                  onOpenPopout: () => {
                                      ((0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !0), this.handleOpenPopout());
                                  },
                                  onClosePopout: () => {
                                      ((0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !1), this.handleClosePopout());
                                  }
                              })
                            : null,
                        l
                            ? (0, r.jsx)(ee.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eU.rightTrayIcon,
                                  onClick: () => {
                                      ((0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.FULL_SCREEN, this.props.layout !== ek.AEg.FULL_SCREEN), this.handleFullScreen());
                                  }
                              })
                            : null
                    ]
                });
            }),
            eB(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eE.ZP, {
                          children: (0, r.jsx)(Q.Z, {
                              className: eU.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eB(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eA.ZP, {
                    children: (0, r.jsx)(el.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eB(this, 'renderHeader', () => {
                var e, t;
                let { renderExternalHeader: n, channel: i, guild: l, appContext: a, chatOpen: o, inCall: s } = this.props,
                    { useExternalHeader: c, canSelectRegion: u, renderHeader: d } = this.viewProperties;
                if (!d) return null;
                let p = null != (t = null == (e = this._lastIdleProps) ? void 0 : e.idle) && t;
                return (0, r.jsxs)(X.Z, {
                    children: [
                        (0, r.jsx)('div', {
                            className: eU.headerWrapper,
                            children: c
                                ? null == n
                                    ? void 0
                                    : n(p)
                                : (0, r.jsx)(eP.Z, {
                                      channel: i,
                                      guild: l,
                                      appContext: a,
                                      inCall: s,
                                      isChatOpen: o || (this.popoutOpen && !this.inPopout && s),
                                      exitFullScreen: this.maybeLeaveFullScreen
                                  })
                        }),
                        u ? this.renderRegionSelect() : null
                    ]
                });
            }));
    }
}
let eW = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a } = e,
        { width: o = 0, ref: s } = (0, v.ZP)(),
        { width: c = 0, height: p = 0, ref: f } = (0, v.ZP)(),
        { ref: m } = (0, v.ZP)(),
        g = (0, O.bp)(),
        b = (0, k.Z)(),
        _ = (0, u.e7)([eh.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : eh.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: E,
            participantsVersion: Z,
            mode: N,
            layout: w,
            participantsOpen: R,
            participantsListOpen: U,
            chatOpen: B,
            selectedParticipant: F
        } = (0, u.cj)(
            [ev.Z],
            () => {
                let e = g === ek.IlC.POPOUT,
                    t = ev.Z.getMode(n.id);
                e && (t = ek.WtW.VIDEO);
                let r = t === ek.WtW.VIDEO ? ev.Z.getLayout(n.id, g) : ek.AEg.MINIMUM;
                return (
                    e && r !== ek.AEg.FULL_SCREEN && (r = ek.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== ek.WtW.VOICE ? ev.Z.getSelectedParticipant(n.id) : null,
                        participants: ev.Z.getParticipants(n.id),
                        filteredParticipants: ev.Z.getFilteredParticipants(n.id),
                        participantsOpen: ev.Z.getParticipantsOpen(n.id),
                        chatOpen: ev.Z.getChatOpen(n.id),
                        participantsListOpen: ev.Z.getParticipantsListOpen(n.id),
                        participantsVersion: ev.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        G = (0, u.Wu)([ea.Z], () => ea.Z.getAllActiveStreams()),
        { selectedStream: V } = (0, u.cj)([ea.Z], () => ({ selectedStream: null != F ? ea.Z.getActiveStreamForStreamKey(F.id) : null }), [F]),
        W = (0, u.e7)([eu.Z], () => eu.Z.getGuild(n.getGuildId())),
        Y = (0, u.e7)([ec.Z], () => ec.Z.getCall(n.id), [n.id]),
        q = (0, u.e7)([ep.ZP], () => ep.ZP.getMentionCount(n.id), [n.id]),
        K = (0, u.e7)([eo.default], () => eo.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: Q } = (0, u.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(ek.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(ek.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, u.e7)([ed.Z], () => ed.Z.can(ek.Plq.CONNECT, n)),
        $ = (0, u.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        ee = (0, u.e7)([D.Z], () => D.Z.getAwaitingRemoteSessionInfo()),
        et = (0, u.e7)([z.ZP], () => z.ZP.callHeaderHeight),
        en = i.useCallback((e) => {
            y.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        er = null != (t = null == W ? void 0 : W.id) ? t : null,
        ei = (0, I.Z)(er, n.id),
        el = (0, u.e7)([S.Z], () => S.Z.getFetchState(), []),
        ef = (0, j.Z)(el);
    i.useEffect(() => {
        el === S.O.ERROR && ef !== S.O.ERROR && (0, h.showToast)((0, h.createToast)(eL.intl.string(eL.t.AlJyIy), h.ToastType.FAILURE));
    }, [el, ef]);
    let em = (0, u.e7)([P.ZP], () => P.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && N === ek.WtW.VIDEO && ((t = await eC.ZP.blockDisplaySleep()), e && null != t && eC.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eC.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, N]);
    let eg = (0, L.S)(),
        eb = (0, eO.Z)(n, !0),
        { hasParticipantsPanel: e_ } = (0, eT.Z)({ location: 'ChannelCall' }),
        ey = (0, M.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ex } = (0, A.ZP)(T.Z.CHANNEL_CALL),
        ej = P.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eS } = (0, h.TCT)();
    return (0, r.jsx)(A.Gt, {
        value: ex,
        children: (0, r.jsx)(x.Z, {
            page: ek.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eE.B2, {
                children: (0, r.jsxs)(eA._A, {
                    children: [
                        (0, r.jsx)(ez, {
                            channel: n,
                            guild: W,
                            hasConnectPermission: J,
                            participantsOpen: R,
                            participantsListOpen: U && e_,
                            renderExternalHeader: l,
                            appContext: g,
                            call: Y,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: q,
                            selectedStream: V,
                            mode: N,
                            inCall: _,
                            participants: C,
                            filteredParticipants: E,
                            participantsVersion: Z,
                            layout: w,
                            chatOpen: B,
                            maxSidebarWidth: o - 550,
                            shouldUseVoiceEffectsActionBar: eb,
                            showGameConsoleCallButton: eg,
                            currentUserId: K,
                            selectedParticipant: F,
                            allActiveStreams: G,
                            useNewInviteButton: ei,
                            connectedEmbeddedActivity: null != em ? em : void 0,
                            showChatToasts: $,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: s,
                            callContainerDimensions: {
                                width: c,
                                height: p
                            },
                            callContainerRef: f,
                            channelChatRef: m,
                            width: o,
                            maxHeight: a,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: ej,
                            theme: eS
                        }),
                        !n.isPrivate() && (0, r.jsx)(eA.YR, {}),
                        (0, r.jsx)(eE.H_, {})
                    ]
                })
            })
        })
    });
};
