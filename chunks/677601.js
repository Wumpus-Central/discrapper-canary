n.d(t, { Z: () => eW }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(704215),
    h = n(846519),
    p = n(780384),
    m = n(481060),
    f = n(570140),
    g = n(475179),
    _ = n(239091),
    C = n(287734),
    x = n(872810),
    v = n(153867),
    E = n(944543),
    I = n(410575),
    b = n(393238),
    Z = n(110924),
    N = n(40851),
    T = n(636449),
    S = n(115130),
    j = n(317381),
    y = n(596040),
    A = n(349619),
    P = n(100527),
    R = n(367907),
    M = n(906732),
    L = n(213609),
    k = n(600164),
    O = n(540059),
    D = n(211644),
    w = n(258609),
    U = n(446226),
    B = n(203341),
    F = n(569545),
    H = n(102172),
    G = n(788983),
    V = n(928518),
    z = n(191302),
    W = n(703656),
    Y = n(648384),
    q = n(740492),
    K = n(793319),
    X = n(3861),
    J = n(493754),
    Q = n(937995),
    $ = n(618158),
    ee = n(880831),
    et = n(73563),
    en = n(751843),
    ei = n(268353),
    el = n(786915),
    ea = n(800965),
    er = n(107169),
    es = n(891551),
    eo = n(488785),
    ec = n(199902),
    ed = n(314897),
    eu = n(979696),
    eh = n(523746),
    ep = n(430824),
    em = n(496675),
    ef = n(306680),
    eg = n(944486),
    e_ = n(594174),
    eC = n(979651),
    ex = n(626135),
    ev = n(934415),
    eE = n(585483),
    eI = n(358085),
    eb = n(998502),
    eZ = n(228488),
    eN = n(358221),
    eT = n(682901),
    eS = n(414910),
    ej = n(887012),
    ey = n(909820),
    eA = n(493010),
    eP = n(742603),
    eR = n(71127),
    eM = n(221888),
    eL = n(185935),
    ek = n(900211),
    eO = n(18759),
    eD = n(878752),
    ew = n(354459),
    eU = n(981631),
    eB = n(388032),
    eF = n(984199);
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
let eG = {
        [eU.AEg.NORMAL]: eF.normal,
        [eU.AEg.MINIMUM]: eF.minimum,
        [eU.AEg.NO_CHAT]: eF.noChat,
        [eU.AEg.FULL_SCREEN]: eF.fullScreen
    },
    eV = {
        [eU.IlC.POPOUT]: eF.popout,
        [eU.IlC.APP]: null,
        [eU.IlC.OVERLAY]: null
    };
class ez extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eZ.NO, this.handleFullScreenChange),
            ex.default.track(eU.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, R.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eZ.NO, this.handleFullScreenChange), (this.inPopout && (0, eI.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        if ((null != a && e.mode === eU.WtW.VIDEO && i === eU.WtW.VOICE && (0, eZ.rB)(a, this.currentDocument) && (0, eZ.Pr)(a, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var r;
            null === (r = this._contentRef.current) || void 0 === r || r.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eI.isPlatformEmbedded && eb.ZP.supportsFeature(eU.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eB.intl.string(eB.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eU.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === eU.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eU.WtW.VIDEO && i && this.popoutSupported,
            r = t !== eU.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eU.d4z.GUILD_VOICE,
            o = e === eU.AEg.MINIMUM || e === eU.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: o,
                canInvite: s,
                canPopout: a,
                canFullscreen: l,
                canSelectRegion: n.isPrivate(),
                canChangeLayout: r,
                canStayOnTop: c
            };
        if (!i)
            return {
                ...d,
                canFullscreen: l,
                useTheme: !0
            };
        switch (e) {
            case eU.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case eU.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case eU.AEg.NO_CHAT:
            case eU.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: a, mode: r, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: _, callContainerDimensions: C } = this.props,
            { isDesktopVisualRefreshEnabled: x, isStaff: v } = this.state,
            E = m === eU.AEg.MINIMUM,
            I = E || m === eU.AEg.NORMAL,
            b = l && r === eU.WtW.VIDEO,
            Z = (null !== (t = null == _ ? void 0 : _.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(et.Z, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: (x && v && !l) || E,
                idle: !f && l && !E && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(z.Z, { channel: h }),
                                  (0, i.jsx)(X.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      paused: this.paused,
                                      channel: h,
                                      hasConnectPermission: a,
                                      guild: p,
                                      participants: c,
                                      filteredParticipants: d,
                                      participantsVersion: u,
                                      selectedParticipant: b ? n : null,
                                      layout: m,
                                      idle: e.idle,
                                      mode: r,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: o && (!I || Z),
                                      popoutWindow: this.inPopout ? s : null,
                                      awaitingRemoteSessionInfo: g,
                                      callContainerDimensions: C
                                  })
                              ]
                          })
            })
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: l, chatOpen: a, appContext: s, maxSidebarWidth: o, maxHeight: c, inCall: d, participantsListOpen: u, theme: h } = this.props,
            { resizedHeight: f } = this.state,
            g = l === eU.WtW.VIDEO,
            _ = e !== eU.AEg.NO_CHAT && e !== eU.AEg.FULL_SCREEN && null != c,
            C = g ? ((0, p.ap)(h) ? eU.BRd.DARK : h) : void 0;
        return (0, i.jsxs)('div', {
            className: r()(eF.wrapper, eG[e], eV[s], {
                [eF.poppedOut]: this.popoutOpen && !this.inPopout && e !== eU.AEg.NO_CHAT && t.isPrivate(),
                [eF.video]: g,
                [eF.sidebarOpen]: a || u
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                _ && null != f
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: f
                      }
                    : void 0,
            children: [
                (0, i.jsx)(m.f6W, {
                    theme: C,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: r()(eF.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(Q.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                _ &&
                    (0, i.jsx)(ek.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: eF.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                a &&
                                    (0, i.jsx)(eA.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: o
                                    }),
                                u &&
                                    (0, i.jsx)(eR.Z, {
                                        channel: t,
                                        maxWidth: o
                                    })
                            ]
                        })
                })
            ]
        });
    }
    constructor(...e) {
        var t, a;
        super(...e),
            eH(this, '_prevLayout', eU.AEg.MINIMUM),
            eH(this, '_wrapperRef', l.createRef()),
            eH(this, '_callContainerRef', l.createRef()),
            eH(this, '_channelChatRef', l.createRef()),
            eH(this, '_contentRef', l.createRef()),
            eH(this, '_videoBackgroundTooltipTimeout', new h.V7()),
            eH(this, '_lastIdleProps', null),
            eH(this, 'state', {
                resizedHeight: q.ZP.callHeaderHeight,
                isDesktopVisualRefreshEnabled: (0, O.i9)('ChannelCall'),
                isStaff: null !== (a = null === (t = e_.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== a && a
            }),
            eH(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null == e || (0, eZ.rB)(e, this.currentDocument) || this.props.layout !== eU.AEg.FULL_SCREEN || this.handleFullScreen();
            }),
            eH(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eU.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eU.AEg.FULL_SCREEN), (0, eZ.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eH(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === eU.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eZ.Pr)(e, this.currentDocument));
            }),
            eH(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eU.AEg.NORMAL ? eU.AEg.NO_CHAT : eU.AEg.NORMAL);
            }),
            eH(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (g.Z.updateLayout(t.id, e, n), e === eU.AEg.FULL_SCREEN && t.isPrivate() && eE.S.dispatch(eU.CkL.TEXTAREA_BLUR));
            }),
            eH(this, 'handleDisconnect', () => {
                this.props.layout === eU.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eH(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, L.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'ChannelCall',
                        is_tile_owner: e.type !== ew.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            eH(this, 'handleContextMenu', (e, t, l) => {
                var a, r;
                let { channel: s, appContext: c, layout: d } = this.props,
                    u = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: c
                    };
                switch ((null === (a = this._lastIdleProps) || void 0 === a || a.onPreventIdle('menu'), null === (r = this._lastIdleProps) || void 0 === r || r.onActive(), e.type)) {
                    case ew.fO.HIDDEN_STREAM:
                    case ew.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, ew.TH.STREAM),
                            (0, _.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            stream: e.stream,
                                            exitFullscreen: this.maybeLeaveFullScreen,
                                            appContext: c
                                        });
                                },
                                u
                            );
                        return;
                    case ew.fO.USER:
                        this.trackCallTileContextMenuImpression(e, ew.TH.USER);
                        let h = e_.default.getUser(e.id);
                        if (null != h)
                            switch (s.type) {
                                case eU.d4z.DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('56826'), n.e('59787')]).then(n.bind(n, 131404));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: h,
                                                    channel: s,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                                case eU.d4z.GROUP_DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('31952')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: d === eU.AEg.MINIMUM || d === eU.AEg.NORMAL,
                                                    user: h,
                                                    channel: s,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                                case eU.d4z.GUILD_VOICE:
                                case eU.d4z.PUBLIC_THREAD:
                                case eU.d4z.PRIVATE_THREAD:
                                    let p = s.getGuildId();
                                    if ((o()(null != p, 'GuildID null for guild voice channel'), this.props.enableSimplifiedCallSettings && l)) return (0, Y.p)(t, h, s, p, u);
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('7717'), n.e('44475')]).then(n.bind(n, 757387));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showMediaItems: !0,
                                                    showChannelCallItems: !0,
                                                    showChatItems: !1,
                                                    user: h,
                                                    channel: s,
                                                    guildId: p,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                            }
                }
            }),
            eH(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eH(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: a, mode: r } = this.props;
                (0, ew._5)(e) && (0, H.p9)(n, eC.Z, ep.Z, em.Z, w.Z)[0] && (C.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, F.V9)(t) === e.id && t.state !== eU.jm8.ENDED).length && (0, x.rn)((0, F.my)(e.id), { forceMultiple: t.shiftKey })), a && r === eU.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? g.Z.selectParticipant(n.id, null) : g.Z.selectParticipant(n.id, e.id));
            }),
            eH(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, W.uL)((0, ev.LY)(t)), G.hP(e);
                    };
                !t || (0, T.R)() ? n() : (0, A.Z)(n);
            }),
            eH(this, 'handleStayOnTop', (e) => {
                G.hY(eU.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eH(this, 'handleClosePopout', () => {
                G.xv(eU.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eH(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === eU.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eH(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    this.inPopout || l === eU.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, i.jsx)(E.Z, { call: t })),
                    (0, i.jsx)(k.Z, {
                        justify: k.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eH(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eU.AEg.MINIMUM || n === eU.AEg.NORMAL
                    ? (0, i.jsx)(K.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eH(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: a, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, showGameConsoleCallButton: c, inCall: d, participants: u } = this.props;
                if (!d) return null;
                let h = e === eU.AEg.NO_CHAT ? en.Z.Directions.UP : en.Z.Directions.DOWN,
                    p = [eU.AEg.FULL_SCREEN, eU.AEg.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === ew.fO.STREAM),
                    g =
                        e === eU.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eU.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: _, canInvite: C } = this.viewProperties,
                    x = a
                        ? (0, i.jsx)(J.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === ew.fO.STREAM ? (0, F.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === ew.fO.ACTIVITY ? s.applicationId : void 0,
                              appContext: l,
                              className: eF.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eU.d4z.GUILD_VOICE ? eU.ZY5.GUILD_CHANNEL : eU.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(el.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === ew.fO.STREAM ? (0, F.my)(s.id) : void 0,
                              className: eF.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eU.d4z.GUILD_VOICE ? eU.ZY5.GUILD_CHANNEL : eU.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        _
                            ? (0, i.jsxs)(k.Z, {
                                  className: eF.iconWrapper,
                                  align: k.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(en.Z, {
                                          label: p ? eB.intl.string(eB.t.kkKapK) : eB.intl.string(eB.t['5MstTk']),
                                          direction: h,
                                          className: eF.leftTrayIcon,
                                          onClick: g
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(m.mAB, {
                                                className: eF.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== ew.fO.STREAM && (null == s ? void 0 : s.type) !== ew.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)($.Z, {
                                  children: (0, i.jsx)(eM.Z, {
                                      className: r()(eF.leftTrayIcon, eF.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eU.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eD.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: f,
                                themeable: this.viewProperties.useTheme
                            }),
                        c &&
                            (0, i.jsx)(B.Z, {
                                themeable: this.viewProperties.useTheme,
                                className: eF.leftTrayIcon,
                                channel: n
                            })
                    ]
                });
            }),
            eH(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: a, canStayOnTop: r, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== ew.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(es.Z, {
                                  context: (0, eS.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eF.volumeSlider,
                                  className: eF.rightTrayIcon
                              })
                            : null,
                        r
                            ? (0, i.jsx)(er.Z, {
                                  className: eF.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)(ea.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: eF.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        a
                            ? (0, i.jsx)(ei.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eF.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eH(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(ey.ZP, {
                          children: (0, i.jsx)(ee.Z, {
                              className: eF.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eH(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eO.ZP, {
                    children: (0, i.jsx)(eo.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eH(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: a, inCall: r } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)($.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: eF.headerWrapper,
                                  children: s
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eP.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: l,
                                            inCall: r,
                                            isChatOpen: a || (this.popoutOpen && !this.inPopout && r),
                                            exitFullScreen: this.maybeLeaveFullScreen
                                        })
                              }),
                              o ? this.renderRegionSelect() : null
                          ]
                      })
                    : null;
            });
    }
}
let eW = function (e) {
    var t;
    let { channel: n, renderExternalHeader: a, maxHeight: r } = e,
        { width: s = 0, ref: o } = (0, b.Z)(),
        { width: c = 0, height: h = 0, ref: p } = (0, b.Z)(),
        { ref: f } = (0, b.Z)(),
        g = (0, N.bp)(),
        _ = (0, U.Z)(),
        C = (0, d.e7)([eg.Z], () => {
            var e;
            return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : eg.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: x,
            filteredParticipants: E,
            participantsVersion: T,
            mode: A,
            layout: R,
            participantsOpen: L,
            participantsListOpen: k,
            chatOpen: O,
            selectedParticipant: F
        } = (0, d.cj)(
            [eN.Z],
            () => {
                let e = g === eU.IlC.POPOUT,
                    t = eN.Z.getMode(n.id);
                e && (t = eU.WtW.VIDEO);
                let i = t === eU.WtW.VIDEO ? eN.Z.getLayout(n.id, g) : eU.AEg.MINIMUM;
                return (
                    e && i !== eU.AEg.FULL_SCREEN && (i = eU.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== eU.WtW.VOICE ? eN.Z.getSelectedParticipant(n.id) : null,
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
        H = (0, d.Wu)([ec.Z], () => ec.Z.getAllActiveStreams()),
        { selectedStream: G } = (0, d.cj)([ec.Z], () => ({ selectedStream: null != F ? ec.Z.getActiveStreamForStreamKey(F.id) : null }), [F]),
        z = (0, d.e7)([ep.Z], () => ep.Z.getGuild(n.getGuildId())),
        W = (0, d.e7)([eh.Z], () => eh.Z.getCall(n.id), [n.id]),
        Y = (0, d.e7)([ef.ZP], () => ef.ZP.getMentionCount(n.id), [n.id]),
        K = (0, d.e7)([ed.default], () => ed.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: J } = (0, d.cj)([V.Z], () => ({
            popoutWindow: V.Z.getWindow(eU.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: V.Z.getIsAlwaysOnTop(eU.KJ3.CHANNEL_CALL_POPOUT)
        })),
        Q = (0, d.e7)([em.Z], () => em.Z.can(eU.Plq.CONNECT, n)),
        $ = (0, d.e7)([eu.Z], () => eu.Z.getToastsEnabled(n.id)),
        ee = (0, d.e7)([w.Z], () => w.Z.getAwaitingRemoteSessionInfo()),
        et = (0, d.e7)([q.ZP], () => q.ZP.callHeaderHeight),
        en = l.useCallback((e) => {
            v.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null !== (t = null == z ? void 0 : z.id) && void 0 !== t ? t : null,
        el = (0, y.Z)(ei, n.id),
        ea = (0, d.e7)([S.Z], () => S.Z.getFetchState(), []),
        er = (0, Z.Z)(ea);
    l.useEffect(() => {
        ea === S.O.ERROR && er !== S.O.ERROR && (0, m.showToast)((0, m.createToast)(eB.intl.string(eB.t.AlJyIy), m.ToastType.FAILURE));
    }, [ea, er]);
    let es = (0, d.e7)([j.ZP], () => j.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                C && A === eU.WtW.VIDEO && ((t = await eb.ZP.blockDisplaySleep()), e && null != t && eb.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eb.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [C, A]);
    let eo = (0, B.S)(),
        e_ = (0, ej.Z)(n, !0),
        { hasParticipantsPanel: eC } = (0, eL.Z)({ location: 'ChannelCall' }),
        { enabled: ex } = (0, eT.Z)({ location: 'ChannelCall' }),
        ev = (0, D.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eE } = (0, M.ZP)(P.Z.CHANNEL_CALL),
        eI = j.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eZ } = (0, m.TCT)();
    return (0, i.jsx)(M.Gt, {
        value: eE,
        children: (0, i.jsx)(I.Z, {
            page: eU.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(ey.B2, {
                children: (0, i.jsxs)(eO._A, {
                    children: [
                        (0, i.jsx)(ez, {
                            channel: n,
                            guild: z,
                            hasConnectPermission: Q,
                            participantsOpen: L,
                            participantsListOpen: k && eC,
                            enableSimplifiedCallSettings: ex,
                            renderExternalHeader: a,
                            appContext: g,
                            call: W,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: J,
                            mentionCount: Y,
                            selectedStream: G,
                            mode: A,
                            inCall: C,
                            participants: x,
                            filteredParticipants: E,
                            participantsVersion: T,
                            layout: R,
                            chatOpen: O,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: e_,
                            showGameConsoleCallButton: eo,
                            currentUserId: K,
                            selectedParticipant: F,
                            allActiveStreams: H,
                            useNewInviteButton: el,
                            connectedToEmbeddedActivity: null != es,
                            showChatToasts: $,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: c,
                                height: h
                            },
                            callContainerRef: p,
                            channelChatRef: f,
                            width: s,
                            maxHeight: r,
                            forceShowControls: ev,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: eI,
                            theme: eZ
                        }),
                        !n.isPrivate() && (0, i.jsx)(eO.YR, {}),
                        (0, i.jsx)(ey.H_, {})
                    ]
                })
            })
        })
    });
};
