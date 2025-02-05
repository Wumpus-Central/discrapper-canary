n.d(t, { Z: () => ez }), n(47120);
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
    O = n(211644),
    D = n(258609),
    w = n(446226),
    U = n(203341),
    B = n(569545),
    F = n(102172),
    H = n(788983),
    G = n(928518),
    V = n(191302),
    z = n(703656),
    W = n(648384),
    q = n(740492),
    Y = n(793319),
    K = n(3861),
    X = n(493754),
    Q = n(937995),
    J = n(618158),
    $ = n(880831),
    ee = n(73563),
    et = n(751843),
    en = n(268353),
    ei = n(786915),
    el = n(800965),
    ea = n(107169),
    er = n(891551),
    es = n(488785),
    eo = n(199902),
    ec = n(314897),
    ed = n(979696),
    eu = n(523746),
    eh = n(430824),
    ep = n(496675),
    em = n(306680),
    ef = n(944486),
    eg = n(594174),
    e_ = n(979651),
    eC = n(626135),
    ex = n(934415),
    ev = n(585483),
    eE = n(358085),
    eI = n(998502),
    eb = n(228488),
    eZ = n(358221),
    eN = n(682901),
    eT = n(414910),
    eS = n(887012),
    ej = n(909820),
    ey = n(493010),
    eA = n(742603),
    eP = n(71127),
    eR = n(221888),
    eM = n(185935),
    eL = n(900211),
    ek = n(18759),
    eO = n(878752),
    eD = n(354459),
    ew = n(981631),
    eU = n(388032),
    eB = n(965676);
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
let eH = {
        [ew.AEg.NORMAL]: eB.normal,
        [ew.AEg.MINIMUM]: eB.minimum,
        [ew.AEg.NO_CHAT]: eB.noChat,
        [ew.AEg.FULL_SCREEN]: eB.fullScreen
    },
    eG = {
        [ew.IlC.POPOUT]: eB.popout,
        [ew.IlC.APP]: null,
        [ew.IlC.OVERLAY]: null
    };
class eV extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eb.NO, this.handleFullScreenChange),
            eC.default.track(ew.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, R.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eb.NO, this.handleFullScreenChange), (this.inPopout && (0, eE.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        if ((null != a && e.mode === ew.WtW.VIDEO && i === ew.WtW.VOICE && (0, eb.rB)(a, this.currentDocument) && (0, eb.Pr)(a, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var r;
            null === (r = this._contentRef.current) || void 0 === r || r.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eE.isPlatformEmbedded && eI.ZP.supportsFeature(ew.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eE.isPlatformEmbedded || this.nativePopoutSupported;
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
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === ew.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === ew.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === ew.WtW.VIDEO && i && this.popoutSupported,
            r = t !== ew.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === ew.d4z.GUILD_VOICE,
            o = e === ew.AEg.MINIMUM || e === ew.AEg.NORMAL,
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
            case ew.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case ew.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case ew.AEg.NO_CHAT:
            case ew.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: a, mode: r, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: _, callContainerDimensions: C } = this.props,
            x = m === ew.AEg.MINIMUM,
            v = x || m === ew.AEg.NORMAL,
            E = l && r === ew.WtW.VIDEO,
            I = (null !== (t = null == _ ? void 0 : _.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(ee.Z, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: x,
                idle: !f && l && !x && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V.Z, { channel: h }),
                                  (0, i.jsx)(K.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      paused: this.paused,
                                      channel: h,
                                      hasConnectPermission: a,
                                      guild: p,
                                      participants: c,
                                      filteredParticipants: d,
                                      participantsVersion: u,
                                      selectedParticipant: E ? n : null,
                                      layout: m,
                                      idle: e.idle,
                                      mode: r,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: o && (!v || I),
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
            g = l === ew.WtW.VIDEO,
            _ = e !== ew.AEg.NO_CHAT && e !== ew.AEg.FULL_SCREEN && null != c,
            C = g ? ((0, p.ap)(h) ? ew.BRd.DARK : h) : void 0;
        return (0, i.jsxs)('div', {
            className: r()(eB.wrapper, eH[e], eG[s], {
                [eB.poppedOut]: this.popoutOpen && !this.inPopout && e !== ew.AEg.NO_CHAT && t.isPrivate(),
                [eB.video]: g,
                [eB.sidebarOpen]: a || u
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
                            className: r()(eB.callContainer, e),
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
                    (0, i.jsx)(eL.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: eB.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                a &&
                                    (0, i.jsx)(ey.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: o
                                    }),
                                u &&
                                    (0, i.jsx)(eP.Z, {
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
        super(...e),
            eF(this, '_prevLayout', ew.AEg.MINIMUM),
            eF(this, '_wrapperRef', l.createRef()),
            eF(this, '_callContainerRef', l.createRef()),
            eF(this, '_channelChatRef', l.createRef()),
            eF(this, '_contentRef', l.createRef()),
            eF(this, '_videoBackgroundTooltipTimeout', new h.V7()),
            eF(this, '_lastIdleProps', null),
            eF(this, 'state', { resizedHeight: q.ZP.callHeaderHeight }),
            eF(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null == e || (0, eb.rB)(e, this.currentDocument) || this.props.layout !== ew.AEg.FULL_SCREEN || this.handleFullScreen();
            }),
            eF(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== ew.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(ew.AEg.FULL_SCREEN), (0, eb.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eF(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                null != e && this.props.layout === ew.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eb.Pr)(e, this.currentDocument));
            }),
            eF(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === ew.AEg.NORMAL ? ew.AEg.NO_CHAT : ew.AEg.NORMAL);
            }),
            eF(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (g.Z.updateLayout(t.id, e, n), e === ew.AEg.FULL_SCREEN && t.isPrivate() && ev.S.dispatch(ew.CkL.TEXTAREA_BLUR));
            }),
            eF(this, 'handleDisconnect', () => {
                this.props.layout === ew.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eF(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, L.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'ChannelCall',
                        is_tile_owner: e.type !== eD.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            eF(this, 'handleContextMenu', (e, t, l) => {
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
                    case eD.fO.HIDDEN_STREAM:
                    case eD.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eD.TH.STREAM),
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
                    case eD.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eD.TH.USER);
                        let h = eg.default.getUser(e.id);
                        if (null != h)
                            switch (s.type) {
                                case ew.d4z.DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('56826'), n.e('95324')]).then(n.bind(n, 131404));
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
                                case ew.d4z.GROUP_DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('8634')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: d === ew.AEg.MINIMUM || d === ew.AEg.NORMAL,
                                                    user: h,
                                                    channel: s,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                                case ew.d4z.GUILD_VOICE:
                                case ew.d4z.PUBLIC_THREAD:
                                case ew.d4z.PRIVATE_THREAD:
                                    let p = s.getGuildId();
                                    if ((o()(null != p, 'GuildID null for guild voice channel'), this.props.enableSimplifiedCallSettings && l)) return (0, W.p)(t, h, s, p, u);
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('7717'), n.e('11875')]).then(n.bind(n, 757387));
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
            eF(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eF(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: a, mode: r } = this.props;
                (0, eD._5)(e) && (0, F.p9)(n, e_.Z, eh.Z, ep.Z, D.Z)[0] && (C.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, B.V9)(t) === e.id && t.state !== ew.jm8.ENDED).length && (0, x.rn)((0, B.my)(e.id), { forceMultiple: t.shiftKey })), a && r === ew.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? g.Z.selectParticipant(n.id, null) : g.Z.selectParticipant(n.id, e.id));
            }),
            eF(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, z.uL)((0, ex.LY)(t)), H.hP(e);
                    };
                !t || (0, T.R)() ? n() : (0, A.Z)(n);
            }),
            eF(this, 'handleStayOnTop', (e) => {
                H.hY(ew.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eF(this, 'handleClosePopout', () => {
                H.xv(ew.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eF(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === ew.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eF(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    this.inPopout || l === ew.AEg.FULL_SCREEN || null == t || n.isManaged() || (e = (0, i.jsx)(E.Z, { call: t })),
                    (0, i.jsx)(k.Z, {
                        justify: k.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eF(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ew.AEg.MINIMUM || n === ew.AEg.NORMAL
                    ? (0, i.jsx)(Y.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eF(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: a, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, showGameConsoleCallButton: c, inCall: d, participants: u } = this.props;
                if (!d) return null;
                let h = e === ew.AEg.NO_CHAT ? et.Z.Directions.UP : et.Z.Directions.DOWN,
                    p = [ew.AEg.FULL_SCREEN, ew.AEg.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === eD.fO.STREAM),
                    g =
                        e === ew.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ew.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: _, canInvite: C } = this.viewProperties,
                    x = a
                        ? (0, i.jsx)(X.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eD.fO.STREAM ? (0, B.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === eD.fO.ACTIVITY ? s.applicationId : void 0,
                              appContext: l,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === ew.d4z.GUILD_VOICE ? ew.ZY5.GUILD_CHANNEL : ew.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(ei.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eD.fO.STREAM ? (0, B.my)(s.id) : void 0,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === ew.d4z.GUILD_VOICE ? ew.ZY5.GUILD_CHANNEL : ew.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        _
                            ? (0, i.jsxs)(k.Z, {
                                  className: eB.iconWrapper,
                                  align: k.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(et.Z, {
                                          label: p ? eU.intl.string(eU.t.kkKapK) : eU.intl.string(eU.t['5MstTk']),
                                          direction: h,
                                          className: eB.leftTrayIcon,
                                          onClick: g
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(m.mAB, {
                                                className: eB.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== eD.fO.STREAM && (null == s ? void 0 : s.type) !== eD.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(J.Z, {
                                  children: (0, i.jsx)(eR.Z, {
                                      className: r()(eB.leftTrayIcon, eB.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ew.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eO.Z, {
                                showRightDivider: c,
                                channel: n,
                                hasActiveStream: f,
                                themeable: this.viewProperties.useTheme
                            }),
                        c &&
                            (0, i.jsx)(U.Z, {
                                themeable: this.viewProperties.useTheme,
                                className: eB.leftTrayIcon,
                                channel: n
                            })
                    ]
                });
            }),
            eF(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: a, canStayOnTop: r, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== eD.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(er.Z, {
                                  context: (0, eT.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eB.volumeSlider,
                                  className: eB.rightTrayIcon
                              })
                            : null,
                        r
                            ? (0, i.jsx)(ea.Z, {
                                  className: eB.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)(el.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: eB.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        a
                            ? (0, i.jsx)(en.Z, {
                                  themeable: o,
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
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(ej.ZP, {
                          children: (0, i.jsx)($.Z, {
                              className: eB.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eF(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(ek.ZP, {
                    children: (0, i.jsx)(es.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eF(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: a, inCall: r } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(J.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: eB.headerWrapper,
                                  children: s
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eA.Z, {
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
let ez = function (e) {
    var t;
    let { channel: n, renderExternalHeader: a, maxHeight: r } = e,
        { width: s = 0, ref: o } = (0, b.Z)(),
        { width: c = 0, height: h = 0, ref: p } = (0, b.Z)(),
        { ref: f } = (0, b.Z)(),
        g = (0, N.bp)(),
        _ = (0, w.Z)(),
        C = (0, d.e7)([ef.Z], () => {
            var e;
            return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : ef.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: x,
            filteredParticipants: E,
            participantsVersion: T,
            mode: A,
            layout: R,
            participantsOpen: L,
            participantsListOpen: k,
            chatOpen: B,
            selectedParticipant: F
        } = (0, d.cj)(
            [eZ.Z],
            () => {
                let e = g === ew.IlC.POPOUT,
                    t = eZ.Z.getMode(n.id);
                e && (t = ew.WtW.VIDEO);
                let i = t === ew.WtW.VIDEO ? eZ.Z.getLayout(n.id, g) : ew.AEg.MINIMUM;
                return (
                    e && i !== ew.AEg.FULL_SCREEN && (i = ew.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== ew.WtW.VOICE ? eZ.Z.getSelectedParticipant(n.id) : null,
                        participants: eZ.Z.getParticipants(n.id),
                        filteredParticipants: eZ.Z.getFilteredParticipants(n.id),
                        participantsOpen: eZ.Z.getParticipantsOpen(n.id),
                        chatOpen: eZ.Z.getChatOpen(n.id),
                        participantsListOpen: eZ.Z.getParticipantsListOpen(n.id),
                        participantsVersion: eZ.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, d.Wu)([eo.Z], () => eo.Z.getAllActiveStreams()),
        { selectedStream: V } = (0, d.cj)([eo.Z], () => ({ selectedStream: null != F ? eo.Z.getActiveStreamForStreamKey(F.id) : null }), [F]),
        z = (0, d.e7)([eh.Z], () => eh.Z.getGuild(n.getGuildId())),
        W = (0, d.e7)([eu.Z], () => eu.Z.getCall(n.id), [n.id]),
        Y = (0, d.e7)([em.ZP], () => em.ZP.getMentionCount(n.id), [n.id]),
        K = (0, d.e7)([ec.default], () => ec.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: Q } = (0, d.cj)([G.Z], () => ({
            popoutWindow: G.Z.getWindow(ew.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: G.Z.getIsAlwaysOnTop(ew.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, d.e7)([ep.Z], () => ep.Z.can(ew.Plq.CONNECT, n)),
        $ = (0, d.e7)([ed.Z], () => ed.Z.getToastsEnabled(n.id)),
        ee = (0, d.e7)([D.Z], () => D.Z.getAwaitingRemoteSessionInfo()),
        et = (0, d.e7)([q.ZP], () => q.ZP.callHeaderHeight),
        en = l.useCallback((e) => {
            v.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null !== (t = null == z ? void 0 : z.id) && void 0 !== t ? t : null,
        el = (0, y.Z)(ei, n.id),
        ea = (0, d.e7)([S.Z], () => S.Z.getFetchState(), []),
        er = (0, Z.Z)(ea);
    l.useEffect(() => {
        ea === S.O.ERROR && er !== S.O.ERROR && (0, m.showToast)((0, m.createToast)(eU.intl.string(eU.t.AlJyIy), m.ToastType.FAILURE));
    }, [ea, er]);
    let es = (0, d.e7)([j.ZP], () => j.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                C && A === ew.WtW.VIDEO && ((t = await eI.ZP.blockDisplaySleep()), e && null != t && eI.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eI.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [C, A]);
    let eg = (0, U.S)(),
        e_ = (0, eS.Z)(n, !0),
        { hasParticipantsPanel: eC } = (0, eM.Z)({ location: 'ChannelCall' }),
        { enabled: ex } = (0, eN.Z)({ location: 'ChannelCall' }),
        ev = (0, O.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eE } = (0, M.ZP)(P.Z.CHANNEL_CALL),
        eb = j.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eT } = (0, m.TCT)();
    return (0, i.jsx)(M.Gt, {
        value: eE,
        children: (0, i.jsx)(I.Z, {
            page: ew.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(ej.B2, {
                children: (0, i.jsxs)(ek._A, {
                    children: [
                        (0, i.jsx)(eV, {
                            channel: n,
                            guild: z,
                            hasConnectPermission: J,
                            participantsOpen: L,
                            participantsListOpen: k && eC,
                            enableSimplifiedCallSettings: ex,
                            renderExternalHeader: a,
                            appContext: g,
                            call: W,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: Y,
                            selectedStream: V,
                            mode: A,
                            inCall: C,
                            participants: x,
                            filteredParticipants: E,
                            participantsVersion: T,
                            layout: R,
                            chatOpen: B,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: e_,
                            showGameConsoleCallButton: eg,
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
                            currentChannelActivities: eb,
                            theme: eT
                        }),
                        !n.isPrivate() && (0, i.jsx)(ek.YR, {}),
                        (0, i.jsx)(ej.H_, {})
                    ]
                })
            })
        })
    });
};
