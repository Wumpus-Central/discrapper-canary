n.d(t, { Z: () => eY }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    I = n(115130),
    S = n(317381),
    P = n(596040),
    Z = n(617552),
    N = n(100527),
    T = n(367907),
    A = n(906732),
    w = n(213609),
    R = n(600164),
    k = n(211644),
    M = n(258609),
    D = n(446226),
    L = n(203341),
    U = n(569545),
    B = n(102172),
    F = n(788983),
    G = n(928518),
    H = n(191302),
    V = n(703656),
    z = n(880395),
    W = n(740492),
    Y = n(793319),
    q = n(3861),
    K = n(493754),
    X = n(937995),
    Q = n(618158),
    J = n(880831),
    $ = n(73563),
    ee = n(751843),
    et = n(268353),
    en = n(786915),
    er = n(800965),
    ei = n(107169),
    el = n(891551),
    eo = n(488785),
    ea = n(199902),
    es = n(314897),
    ec = n(979696),
    eu = n(523746),
    ed = n(430824),
    ep = n(496675),
    eh = n(306680),
    ef = n(944486),
    em = n(594174),
    eg = n(979651),
    eb = n(626135),
    e_ = n(934415),
    ey = n(585483),
    eC = n(358085),
    ex = n(998502),
    ev = n(228488),
    ej = n(358221),
    eO = n(414910),
    eE = n(887012),
    eI = n(909820),
    eS = n(493010),
    eP = n(742603),
    eZ = n(71127),
    eN = n(221888),
    eT = n(185935),
    eA = n(900211),
    ew = n(18759),
    eR = n(522651),
    ek = n(795318),
    eM = n(878752),
    eD = n(354459),
    eL = n(981631),
    eU = n(388032),
    eB = n(971182);
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
function eG(e) {
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
let eV = {
        [eL.AEg.NORMAL]: eB.normal,
        [eL.AEg.MINIMUM]: eB.minimum,
        [eL.AEg.NO_CHAT]: eB.noChat,
        [eL.AEg.FULL_SCREEN]: eB.fullScreen
    },
    ez = {
        [eL.IlC.POPOUT]: eB.popout,
        [eL.IlC.APP]: null,
        [eL.IlC.OVERLAY]: null
    };
class eW extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.NO, this.handleFullScreenChange), eb.default.track(eL.rMx.VIDEO_LAYOUT_TOGGLED, eG({ video_layout: this.inPopout ? 'popout' : t }, (0, T.AB)(e.id)));
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(ev.NO, this.handleFullScreenChange), (this.inPopout && (0, eC.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if ((null != l && e.mode === eL.WtW.VIDEO && r === eL.WtW.VOICE && (0, ev.rB)(l, this.currentDocument) && (0, ev.Pr)(l, this.currentDocument), e.participantsOpen !== t || i !== e.layout)) {
            var o;
            null == (o = this._contentRef.current) || o.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eC.isPlatformEmbedded && ex.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eC.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eU.intl.string(eU.t.J5bXZW) } : null;
    }
    get inPopout() {
        return this.props.appContext === eL.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eL.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eL.WtW.VIDEO && r && this.popoutSupported,
            o = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            a = n.type === eL.d4z.GUILD_VOICE,
            s = e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL,
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
            return eH(eG({}, u), {
                canFullscreen: i,
                useTheme: !0
            });
        switch (e) {
            case eL.AEg.FULL_SCREEN:
                return eH(eG({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case eL.AEg.MINIMUM:
                return eH(eG({}, u), {
                    canPopout: !1,
                    useTheme: !0
                });
            case eL.AEg.NO_CHAT:
            case eL.AEg.NORMAL:
                return eG({}, u);
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: i, hasConnectPermission: l, mode: o, popoutWindow: a, participantsOpen: s, participants: c, filteredParticipants: u, participantsVersion: d, channel: p, guild: h, layout: f, forceShowControls: m, awaitingRemoteSessionInfo: g, currentChannelActivities: b, callContainerDimensions: _ } = this.props,
            y = f === eL.AEg.MINIMUM,
            C = y || f === eL.AEg.NORMAL,
            x = i && o === eL.WtW.VIDEO,
            v = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                $.Z,
                eH(
                    eG(
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
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(H.Z, { channel: p }),
                                          (0, r.jsx)(q.Z, {
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
                                              mode: o,
                                              onSelectParticipant: this.handleSelectParticipant,
                                              onContextMenuParticipant: this.handleContextMenu,
                                              showParticipants: s && (!C || v),
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
        let { layout: e, channel: t, guild: n, mode: i, chatOpen: l, appContext: a, maxSidebarWidth: s, maxHeight: c, inCall: u, participantsListOpen: d } = this.props,
            { resizedHeight: p } = this.state,
            f = i === eL.WtW.VIDEO,
            m = e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c,
            g = eL.BRd.MIDNIGHT;
        return (0, r.jsxs)('div', {
            className: o()(eB.wrapper, eV[e], ez[a], {
                [eB.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
                [eB.video]: f,
                [eB.sidebarOpen]: l || d
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
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
                            className: o()(eB.callContainer, l || e !== eL.AEg.FULL_SCREEN ? void 0 : eB.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(X.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                m &&
                    (0, r.jsx)(eA.Z, {
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
                                    (0, r.jsx)(eS.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s
                                    }),
                                d &&
                                    (0, r.jsx)(eZ.Z, {
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
        super(...e),
            eF(this, '_prevLayout', eL.AEg.MINIMUM),
            eF(this, '_wrapperRef', i.createRef()),
            eF(this, '_callContainerRef', i.createRef()),
            eF(this, '_channelChatRef', i.createRef()),
            eF(this, '_contentRef', i.createRef()),
            eF(this, '_videoBackgroundTooltipTimeout', new p.V7()),
            eF(this, '_lastIdleProps', null),
            eF(this, 'state', { resizedHeight: W.ZP.callHeaderHeight }),
            eF(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && ((0, ev.rB)(e, this.currentDocument) || this.props.layout !== eL.AEg.FULL_SCREEN || this.handleFullScreen());
            }),
            eF(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eL.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eL.AEg.FULL_SCREEN), (0, ev.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eF(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eL.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, ev.Pr)(e, this.currentDocument));
            }),
            eF(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eL.AEg.NORMAL ? eL.AEg.NO_CHAT : eL.AEg.NORMAL);
            }),
            eF(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e && (m.Z.updateLayout(t.id, e, n), e === eL.AEg.FULL_SCREEN && t.isPrivate() && ey.S.dispatch(eL.CkL.TEXTAREA_BLUR));
            }),
            eF(this, 'handleDisconnect', () => {
                this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eF(this, 'trackCallTileContextMenuImpression', (e, t) => {
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
            eF(this, 'getCallTileMenuActionHandler', function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eD.A5.CONTEXT_MENU;
                return (0, ek.u)(e, N.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eD.fO.ACTIVITY ? t.user.id : void 0
                });
            }),
            eF(this, 'handleContextMenu', (e, t, i, l) => {
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
                    case eD.fO.HIDDEN_STREAM:
                    case eD.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eD.TH.STREAM),
                            (0, g.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eH(eG({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: i,
                                                onInteraction: this.getCallTileMenuActionHandler('StreamContextMenu', e, eD.TH.STREAM, l)
                                            })
                                        );
                                },
                                p
                            );
                        return;
                    case eD.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eD.TH.USER);
                        let h = em.default.getUser(e.id);
                        if (null != h) {
                            if (i)
                                return (0, z.D)(t, h, c, p, (e, t) =>
                                    (0, ek.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eD.A5.THREE_DOT,
                                        tileType: eD.TH.USER,
                                        targetUserId: h.id,
                                        location: N.Z.CHANNEL_CALL
                                    })
                                );
                            switch (c.type) {
                                case eL.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('56399')]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eH(eG({}, n), {
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
                                case eL.d4z.GROUP_DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eH(eG({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eL.AEg.MINIMUM || d === eL.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler('GroupDMUserContextMenu', e, eD.TH.USER)
                                                    })
                                                );
                                        },
                                        p
                                    );
                                case eL.d4z.GUILD_VOICE:
                                case eL.d4z.PUBLIC_THREAD:
                                case eL.d4z.PRIVATE_THREAD:
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
                                                        eH(eG({}, n), {
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
            eF(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eF(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: o } = this.props;
                (0, eD._5)(e) && (0, B.p9)(n, eg.Z, ed.Z, ep.Z, M.Z)[0] && (b.default.selectVoiceChannel(n.id), 0 === i.filter((t) => (0, U.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length && (0, _.rn)((0, U.my)(e.id), { forceMultiple: t.shiftKey })), l && o === eL.WtW.VIDEO && ((null == r ? void 0 : r.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
            }),
            eF(this, 'handleOpenPopout', () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, V.uL)((0, e_.LY)(t)), F.hP(e);
                    };
                null == t || (0, E.R)() ? n() : (0, Z.Z)({ onConfirm: n });
            }),
            eF(this, 'handleStayOnTop', (e) => {
                (0, eR.v)(N.Z.VOICE_CONTROL_TRAY, eR.d.STAY_ON_TOP, e), F.hY(eL.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eF(this, 'handleClosePopout', () => {
                F.xv(eL.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eF(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eL.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eF(this, 'renderRegionSelect', () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout || i === eL.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, r.jsx)(C.Z, { call: t })),
                    (0, r.jsx)(R.Z, {
                        justify: R.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eF(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL
                    ? (0, r.jsx)(Y.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eF(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: i, useNewInviteButton: l, selectedParticipant: a, shouldUseVoiceEffectsActionBar: s, showGameConsoleCallButton: c, inCall: u, participants: d } = this.props;
                if (!u) return null;
                let p = e === eL.AEg.NO_CHAT ? ee.Z.Directions.UP : ee.Z.Directions.DOWN,
                    f = [eL.AEg.FULL_SCREEN, eL.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === eD.fO.STREAM),
                    g =
                        e === eL.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eL.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: b, canInvite: _ } = this.viewProperties,
                    y = l
                        ? (0, r.jsx)(K.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eD.fO.STREAM ? (0, U.my)(a.id) : void 0,
                              applicationId: (null == a ? void 0 : a.type) === eD.fO.ACTIVITY ? a.applicationId : void 0,
                              appContext: i,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
                          })
                        : (0, r.jsx)(en.Z, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eD.fO.STREAM ? (0, U.my)(a.id) : void 0,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        _ && !s ? y : null,
                        b
                            ? (0, r.jsxs)(R.Z, {
                                  className: eB.iconWrapper,
                                  align: R.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ee.Z, {
                                          label: f ? eU.intl.string(eU.t.kkKapK) : eU.intl.string(eU.t['5MstTk']),
                                          direction: p,
                                          className: eB.leftTrayIcon,
                                          onClick: () => {
                                              (0, eR.v)(N.Z.VOICE_CONTROL_TRAY, eR.d.CHAT, f), g();
                                          }
                                      }),
                                      f && t > 0
                                          ? (0, r.jsx)(h.mAB, {
                                                className: eB.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == a ? void 0 : a.type) !== eD.fO.STREAM && (null == a ? void 0 : a.type) !== eD.fO.ACTIVITY) || s
                            ? null
                            : (0, r.jsx)(Q.Z, {
                                  children: (0, r.jsx)(eN.Z, {
                                      className: o()(eB.leftTrayIcon, eB.viewersButton),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eL.AEg.FULL_SCREEN
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
            eF(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: i } = this.props,
                    { canFullscreen: l, canStayOnTop: o, canPopout: a, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eD.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(el.Z, {
                                  context: (0, eO.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eB.volumeSlider,
                                  className: eB.rightTrayIcon,
                                  location: N.Z.VOICE_CONTROL_TRAY
                              })
                            : null,
                        o
                            ? (0, r.jsx)(ei.Z, {
                                  className: eB.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        a
                            ? (0, r.jsx)(er.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eB.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eR.v)(N.Z.VOICE_CONTROL_TRAY, eR.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eR.v)(N.Z.VOICE_CONTROL_TRAY, eR.d.POPOUT, !1), this.handleClosePopout();
                                  }
                              })
                            : null,
                        l
                            ? (0, r.jsx)(et.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eB.rightTrayIcon,
                                  onClick: () => {
                                      (0, eR.v)(N.Z.VOICE_CONTROL_TRAY, eR.d.FULL_SCREEN, this.props.layout !== eL.AEg.FULL_SCREEN), this.handleFullScreen();
                                  }
                              })
                            : null
                    ]
                });
            }),
            eF(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eI.ZP, {
                          children: (0, r.jsx)(J.Z, {
                              className: eB.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eF(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(ew.ZP, {
                    children: (0, r.jsx)(eo.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eF(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: i, chatOpen: l, inCall: o } = this.props,
                    { useExternalHeader: a, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)(Q.Z, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eB.headerWrapper,
                                  children: a
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, r.jsx)(eP.Z, {
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
        { width: a = 0, ref: s } = (0, v.ZP)(),
        { width: c = 0, height: p = 0, ref: f } = (0, v.ZP)(),
        { ref: m } = (0, v.ZP)(),
        g = (0, O.bp)(),
        b = (0, D.Z)(),
        _ = (0, u.e7)([ef.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : ef.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: E,
            participantsVersion: Z,
            mode: T,
            layout: w,
            participantsOpen: R,
            participantsListOpen: U,
            chatOpen: B,
            selectedParticipant: F
        } = (0, u.cj)(
            [ej.Z],
            () => {
                let e = g === eL.IlC.POPOUT,
                    t = ej.Z.getMode(n.id);
                e && (t = eL.WtW.VIDEO);
                let r = t === eL.WtW.VIDEO ? ej.Z.getLayout(n.id, g) : eL.AEg.MINIMUM;
                return (
                    e && r !== eL.AEg.FULL_SCREEN && (r = eL.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: r,
                        selectedParticipant: t !== eL.WtW.VOICE ? ej.Z.getSelectedParticipant(n.id) : null,
                        participants: ej.Z.getParticipants(n.id),
                        filteredParticipants: ej.Z.getFilteredParticipants(n.id),
                        participantsOpen: ej.Z.getParticipantsOpen(n.id),
                        chatOpen: ej.Z.getChatOpen(n.id),
                        participantsListOpen: ej.Z.getParticipantsListOpen(n.id),
                        participantsVersion: ej.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, u.Wu)([ea.Z], () => ea.Z.getAllActiveStreams()),
        { selectedStream: V } = (0, u.cj)([ea.Z], () => ({ selectedStream: null != F ? ea.Z.getActiveStreamForStreamKey(F.id) : null }), [F]),
        z = (0, u.e7)([ed.Z], () => ed.Z.getGuild(n.getGuildId())),
        Y = (0, u.e7)([eu.Z], () => eu.Z.getCall(n.id), [n.id]),
        q = (0, u.e7)([eh.ZP], () => eh.ZP.getMentionCount(n.id), [n.id]),
        K = (0, u.e7)([es.default], () => es.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: Q } = (0, u.cj)([G.Z], () => ({
            popoutWindow: G.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: G.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, u.e7)([ep.Z], () => ep.Z.can(eL.Plq.CONNECT, n)),
        $ = (0, u.e7)([ec.Z], () => ec.Z.getToastsEnabled(n.id)),
        ee = (0, u.e7)([M.Z], () => M.Z.getAwaitingRemoteSessionInfo()),
        et = (0, u.e7)([W.ZP], () => W.ZP.callHeaderHeight),
        en = i.useCallback((e) => {
            y.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        er = null != (t = null == z ? void 0 : z.id) ? t : null,
        ei = (0, P.Z)(er, n.id),
        el = (0, u.e7)([I.Z], () => I.Z.getFetchState(), []),
        eo = (0, j.Z)(el);
    i.useEffect(() => {
        el === I.O.ERROR && eo !== I.O.ERROR && (0, h.showToast)((0, h.createToast)(eU.intl.string(eU.t.AlJyIy), h.ToastType.FAILURE));
    }, [el, eo]);
    let em = (0, u.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && T === eL.WtW.VIDEO && ((t = await ex.ZP.blockDisplaySleep()), e && null != t && ex.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ex.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, T]);
    let eg = (0, L.S)(),
        eb = (0, eE.Z)(n, !0),
        { hasParticipantsPanel: e_ } = (0, eT.Z)({ location: 'ChannelCall' }),
        ey = (0, k.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eC } = (0, A.ZP)(N.Z.CHANNEL_CALL),
        ev = S.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eO } = (0, h.TCT)();
    return (0, r.jsx)(A.Gt, {
        value: eC,
        children: (0, r.jsx)(x.Z, {
            page: eL.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eI.B2, {
                children: (0, r.jsxs)(ew._A, {
                    children: [
                        (0, r.jsx)(eW, {
                            channel: n,
                            guild: z,
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
                            mode: T,
                            inCall: _,
                            participants: C,
                            filteredParticipants: E,
                            participantsVersion: Z,
                            layout: w,
                            chatOpen: B,
                            maxSidebarWidth: a - 550,
                            shouldUseVoiceEffectsActionBar: eb,
                            showGameConsoleCallButton: eg,
                            currentUserId: K,
                            selectedParticipant: F,
                            allActiveStreams: H,
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
                            width: a,
                            maxHeight: o,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: ev,
                            theme: eO
                        }),
                        !n.isPrivate() && (0, r.jsx)(ew.YR, {}),
                        (0, r.jsx)(eI.H_, {})
                    ]
                })
            })
        })
    });
};
