n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(239091),
    x = n(287734),
    v = n(872810),
    _ = n(153867),
    I = n(944543),
    E = n(410575),
    b = n(393238),
    Z = n(110924),
    N = n(40851),
    S = n(636449),
    T = n(115130),
    j = n(317381),
    A = n(596040),
    y = n(349619),
    P = n(100527),
    M = n(367907),
    R = n(906732),
    L = n(213609),
    k = n(560861),
    O = n(600164),
    D = n(211644),
    w = n(258609),
    B = n(446226),
    U = n(203341),
    H = n(569545),
    G = n(102172),
    F = n(788983),
    V = n(928518),
    z = n(703656),
    W = n(740492),
    K = n(793319),
    Y = n(3861),
    q = n(493754),
    X = n(937995),
    J = n(618158),
    Q = n(880831),
    $ = n(73563),
    ee = n(751843),
    et = n(268353),
    en = n(786915),
    ei = n(800965),
    el = n(107169),
    er = n(891551),
    ea = n(488785),
    es = n(199902),
    eo = n(314897),
    ec = n(979696),
    ed = n(523746),
    eu = n(430824),
    eh = n(496675),
    ep = n(306680),
    em = n(944486),
    ef = n(594174),
    eg = n(979651),
    eC = n(626135),
    ex = n(934415),
    ev = n(585483),
    e_ = n(358085),
    eI = n(998502),
    eE = n(228488),
    eb = n(358221),
    eZ = n(414910),
    eN = n(887012),
    eS = n(909820),
    eT = n(493010),
    ej = n(742603),
    eA = n(71127),
    ey = n(221888),
    eP = n(185935),
    eM = n(900211),
    eR = n(18759),
    eL = n(878752),
    ek = n(354459),
    eO = n(981631),
    eD = n(388032),
    ew = n(965676);
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
let eU = {
        [eO.AEg.NORMAL]: ew.normal,
        [eO.AEg.MINIMUM]: ew.minimum,
        [eO.AEg.NO_CHAT]: ew.noChat,
        [eO.AEg.FULL_SCREEN]: ew.fullScreen
    },
    eH = {
        [eO.IlC.POPOUT]: ew.popout,
        [eO.IlC.APP]: null,
        [eO.IlC.OVERLAY]: null
    };
class eG extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eE.NO, this.handleFullScreenChange),
            eC.default.track(eO.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, M.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eE.NO, this.handleFullScreenChange), !(this.inPopout && (0, e_.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            r = this.getRootNode();
        if ((null != r && e.mode === eO.WtW.VIDEO && i === eO.WtW.VOICE && (0, eE.rB)(r, this.currentDocument) && (0, eE.Pr)(r, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var a;
            null === (a = this._contentRef.current) || void 0 === a || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return e_.isPlatformEmbedded && eI.ZP.supportsFeature(eO.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !e_.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eD.intl.string(eD.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eO.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === eO.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            r = t === eO.WtW.VIDEO && i && this.popoutSupported,
            a = t !== eO.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eO.d4z.GUILD_VOICE,
            o = e === eO.AEg.MINIMUM || e === eO.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: o,
                canInvite: s,
                canPopout: r,
                canFullscreen: l,
                canSelectRegion: n.isPrivate(),
                canChangeLayout: a,
                canStayOnTop: c
            };
        if (!i)
            return {
                ...d,
                canFullscreen: l,
                useTheme: !0
            };
        switch (e) {
            case eO.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case eO.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case eO.AEg.NO_CHAT:
            case eO.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: r, mode: a, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: C, callContainerDimensions: x } = this.props,
            v = m === eO.AEg.MINIMUM,
            _ = v || m === eO.AEg.NORMAL,
            I = l && a === eO.WtW.VIDEO,
            E = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)($.Z, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: v,
                idle: !f && l && !v && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(k.Z, { channel: h }),
                                  (0, i.jsx)(Y.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      paused: this.paused,
                                      channel: h,
                                      hasConnectPermission: r,
                                      guild: p,
                                      participants: c,
                                      filteredParticipants: d,
                                      participantsVersion: u,
                                      selectedParticipant: I ? n : null,
                                      layout: m,
                                      idle: e.idle,
                                      mode: a,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: o && (!_ || E),
                                      popoutWindow: this.inPopout ? s : null,
                                      awaitingRemoteSessionInfo: g,
                                      callContainerDimensions: x
                                  })
                              ]
                          })
            })
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: l, chatOpen: r, appContext: s, maxSidebarWidth: o, maxHeight: c, inCall: d, participantsListOpen: u, theme: h } = this.props,
            { resizedHeight: f } = this.state,
            g = l === eO.WtW.VIDEO,
            C = e !== eO.AEg.NO_CHAT && e !== eO.AEg.FULL_SCREEN && null != c,
            x = g ? ((0, p.ap)(h) ? eO.BRd.DARK : h) : void 0;
        return (0, i.jsxs)('div', {
            className: a()(ew.wrapper, eU[e], eH[s], {
                [ew.poppedOut]: this.popoutOpen && !this.inPopout && e !== eO.AEg.NO_CHAT && t.isPrivate(),
                [ew.video]: g,
                [ew.sidebarOpen]: r || u
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                C && null != f
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: f
                      }
                    : void 0,
            children: [
                (0, i.jsx)(m.ThemeProvider, {
                    theme: x,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: a()(ew.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(X.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                C &&
                    (0, i.jsx)(eM.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: ew.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                r &&
                                    (0, i.jsx)(eT.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: o
                                    }),
                                u &&
                                    (0, i.jsx)(eA.Z, {
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
            eB(this, '_prevLayout', eO.AEg.MINIMUM),
            eB(this, '_wrapperRef', l.createRef()),
            eB(this, '_callContainerRef', l.createRef()),
            eB(this, '_channelChatRef', l.createRef()),
            eB(this, '_contentRef', l.createRef()),
            eB(this, '_videoBackgroundTooltipTimeout', new h.V7()),
            eB(this, '_lastIdleProps', null),
            eB(this, 'state', { resizedHeight: W.ZP.callHeaderHeight }),
            eB(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, eE.rB)(e, this.currentDocument) && this.props.layout === eO.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eB(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eO.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eO.AEg.FULL_SCREEN), (0, eE.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eB(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === eO.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eE.Pr)(e, this.currentDocument));
            }),
            eB(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eO.AEg.NORMAL ? eO.AEg.NO_CHAT : eO.AEg.NORMAL);
            }),
            eB(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (g.Z.updateLayout(t.id, e, n), e === eO.AEg.FULL_SCREEN && t.isPrivate() && ev.S.dispatch(eO.CkL.TEXTAREA_BLUR));
            }),
            eB(this, 'handleDisconnect', () => {
                this.props.layout === eO.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eB(this, 'trackCallTileContextMenuImpression', (e, t) => {
                (0, L.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        is_tile_owner: e.type !== ek.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t
                    }
                });
            }),
            eB(this, 'handleContextMenu', (e, t) => {
                var l, r;
                let { channel: a, appContext: s, layout: c } = this.props,
                    d = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: s
                    };
                switch ((null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle('menu'), null === (r = this._lastIdleProps) || void 0 === r || r.onActive(), e.type)) {
                    case ek.fO.HIDDEN_STREAM:
                    case ek.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, ek.TH.STREAM),
                            (0, C.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            stream: e.stream,
                                            exitFullscreen: this.maybeLeaveFullScreen,
                                            appContext: s
                                        });
                                },
                                d
                            );
                        return;
                    case ek.fO.USER:
                        this.trackCallTileContextMenuImpression(e, ek.TH.USER);
                        let u = ef.default.getUser(e.id);
                        if (null != u)
                            switch (a.type) {
                                case eO.d4z.DM:
                                    return (0, C.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('92453'), n.e('56826'), n.e('95324')]).then(n.bind(n, 131404));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: u,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case eO.d4z.GROUP_DM:
                                    return (0, C.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('8634')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === eO.AEg.MINIMUM || c === eO.AEg.NORMAL,
                                                    user: u,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case eO.d4z.GUILD_VOICE:
                                case eO.d4z.PUBLIC_THREAD:
                                case eO.d4z.PRIVATE_THREAD:
                                    let h = a.getGuildId();
                                    return (
                                        o()(null != h, 'GuildID null for guild voice channel'),
                                        (0, C.jW)(
                                            t,
                                            async () => {
                                                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                                                return (t) =>
                                                    (0, i.jsx)(e, {
                                                        ...t,
                                                        showMediaItems: !0,
                                                        showChannelCallItems: !0,
                                                        showChatItems: !1,
                                                        user: u,
                                                        channel: a,
                                                        guildId: h,
                                                        showModalItems: !0
                                                    });
                                            },
                                            d
                                        )
                                    );
                            }
                }
            }),
            eB(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eB(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: r, mode: a } = this.props;
                (0, ek._5)(e) && (0, G.p9)(n, eg.Z, eu.Z, eh.Z, w.Z)[0] && (x.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, H.V9)(t) === e.id && t.state !== eO.jm8.ENDED).length && (0, v.rn)((0, H.my)(e.id), { forceMultiple: t.shiftKey })), r && a === eO.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? g.Z.selectParticipant(n.id, null) : g.Z.selectParticipant(n.id, e.id));
            }),
            eB(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, z.uL)((0, ex.LY)(t)), F.hP(e);
                    };
                !t || (0, S.R)() ? n() : (0, y.Z)(n);
            }),
            eB(this, 'handleStayOnTop', (e) => {
                F.hY(eO.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eB(this, 'handleClosePopout', () => {
                F.xv(eO.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eB(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === eO.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eB(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    !this.inPopout && l !== eO.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(I.Z, { call: t })),
                    (0, i.jsx)(O.Z, {
                        justify: O.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eB(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eO.AEg.MINIMUM || n === eO.AEg.NORMAL
                    ? (0, i.jsx)(K.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eB(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: r, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: d } = this.props;
                if (!c) return null;
                let u = e === eO.AEg.NO_CHAT ? ee.Z.Directions.UP : ee.Z.Directions.DOWN,
                    h = [eO.AEg.FULL_SCREEN, eO.AEg.NO_CHAT].includes(e),
                    p = d.some((e) => e.type === ek.fO.STREAM),
                    f =
                        e === eO.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eO.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: C } = this.viewProperties,
                    x = r
                        ? (0, i.jsx)(q.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === ek.fO.STREAM ? (0, H.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === ek.fO.ACTIVITY ? s.id : void 0,
                              appContext: l,
                              className: ew.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eO.d4z.GUILD_VOICE ? eO.ZY5.GUILD_CHANNEL : eO.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(en.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === ek.fO.STREAM ? (0, H.my)(s.id) : void 0,
                              className: ew.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eO.d4z.GUILD_VOICE ? eO.ZY5.GUILD_CHANNEL : eO.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        g
                            ? (0, i.jsxs)(O.Z, {
                                  className: ew.iconWrapper,
                                  align: O.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(ee.Z, {
                                          label: h ? eD.intl.string(eD.t.kkKapK) : eD.intl.string(eD.t['5MstTk']),
                                          direction: u,
                                          className: ew.leftTrayIcon,
                                          onClick: f
                                      }),
                                      h && t > 0
                                          ? (0, i.jsx)(m.NumberBadge, {
                                                className: ew.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== ek.fO.STREAM && (null == s ? void 0 : s.type) !== ek.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(J.Z, {
                                  children: (0, i.jsx)(ey.Z, {
                                      className: a()(ew.leftTrayIcon, ew.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eO.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eL.Z, {
                                channel: n,
                                hasActiveStream: p,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(U.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: ew.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            eB(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: r, canStayOnTop: a, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== ek.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(er.Z, {
                                  context: (0, eZ.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: ew.volumeSlider,
                                  className: ew.rightTrayIcon
                              })
                            : null,
                        a
                            ? (0, i.jsx)(el.Z, {
                                  className: ew.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)(ei.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: ew.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        r
                            ? (0, i.jsx)(et.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: ew.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eB(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(eS.ZP, {
                          children: (0, i.jsx)(Q.Z, {
                              className: ew.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eB(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eR.ZP, {
                    children: (0, i.jsx)(ea.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eB(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: r, inCall: a } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(J.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: ew.headerWrapper,
                                  children: s
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(ej.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: l,
                                            inCall: a,
                                            isChatOpen: r || (this.popoutOpen && !this.inPopout && a),
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
t.Z = function (e) {
    var t;
    let { channel: n, renderExternalHeader: r, maxHeight: a } = e,
        { width: s = 0, ref: o } = (0, b.Z)(),
        { width: c = 0, height: h = 0, ref: p } = (0, b.Z)(),
        { ref: f } = (0, b.Z)(),
        g = (0, N.bp)(),
        C = (0, B.Z)(),
        x = (0, d.e7)([em.Z], () => {
            var e;
            return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : em.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: v,
            filteredParticipants: I,
            participantsVersion: S,
            mode: y,
            layout: M,
            participantsOpen: L,
            participantsListOpen: k,
            chatOpen: O,
            selectedParticipant: U
        } = (0, d.cj)(
            [eb.Z],
            () => {
                let e = g === eO.IlC.POPOUT,
                    t = eb.Z.getMode(n.id);
                e && (t = eO.WtW.VIDEO);
                let i = t === eO.WtW.VIDEO ? eb.Z.getLayout(n.id, g) : eO.AEg.MINIMUM;
                return (
                    e && i !== eO.AEg.FULL_SCREEN && (i = eO.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== eO.WtW.VOICE ? eb.Z.getSelectedParticipant(n.id) : null,
                        participants: eb.Z.getParticipants(n.id),
                        filteredParticipants: eb.Z.getFilteredParticipants(n.id),
                        participantsOpen: eb.Z.getParticipantsOpen(n.id),
                        chatOpen: eb.Z.getChatOpen(n.id),
                        participantsListOpen: eb.Z.getParticipantsListOpen(n.id),
                        participantsVersion: eb.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, d.Wu)([es.Z], () => es.Z.getAllActiveStreams()),
        { selectedStream: G } = (0, d.cj)([es.Z], () => ({ selectedStream: null != U ? es.Z.getActiveStreamForStreamKey(U.id) : null }), [U]),
        F = (0, d.e7)([eu.Z], () => eu.Z.getGuild(n.getGuildId())),
        z = (0, d.e7)([ed.Z], () => ed.Z.getCall(n.id), [n.id]),
        K = (0, d.e7)([ep.ZP], () => ep.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, d.e7)([eo.default], () => eo.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: X } = (0, d.cj)([V.Z], () => ({
            popoutWindow: V.Z.getWindow(eO.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: V.Z.getIsAlwaysOnTop(eO.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, d.e7)([eh.Z], () => eh.Z.can(eO.Plq.CONNECT, n)),
        Q = (0, d.e7)([ec.Z], () => ec.Z.getToastsEnabled(n.id)),
        $ = (0, d.e7)([w.Z], () => w.Z.getAwaitingRemoteSessionInfo()),
        ee = (0, d.e7)([W.ZP], () => W.ZP.callHeaderHeight),
        et = l.useCallback((e) => {
            _.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : null,
        ei = (0, A.Z)(en, n.id),
        el = (0, d.e7)([T.Z], () => T.Z.getFetchState(), []),
        er = (0, Z.Z)(el);
    l.useEffect(() => {
        el === T.O.ERROR && er !== T.O.ERROR && (0, m.showToast)((0, m.createToast)(eD.intl.string(eD.t.AlJyIy), m.ToastType.FAILURE));
    }, [el, er]);
    let ea = (0, d.e7)([j.ZP], () => j.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                x && y === eO.WtW.VIDEO && ((t = await eI.ZP.blockDisplaySleep()), e && null != t && eI.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eI.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [x, y]);
    let ef = (0, eN.Z)(n, !0),
        { hasParticipantsPanel: eg } = (0, eP.Z)({ location: 'ChannelCall' }),
        eC = (0, D.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ex } = (0, R.ZP)(P.Z.CHANNEL_CALL),
        ev = j.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: e_ } = (0, m.useThemeContext)();
    return (0, i.jsx)(R.Gt, {
        value: ex,
        children: (0, i.jsx)(E.Z, {
            page: eO.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eS.B2, {
                children: (0, i.jsxs)(eR._A, {
                    children: [
                        (0, i.jsx)(eG, {
                            channel: n,
                            guild: F,
                            hasConnectPermission: J,
                            participantsOpen: L,
                            participantsListOpen: k && eg,
                            renderExternalHeader: r,
                            appContext: g,
                            call: z,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: X,
                            mentionCount: K,
                            selectedStream: G,
                            mode: y,
                            inCall: x,
                            participants: v,
                            filteredParticipants: I,
                            participantsVersion: S,
                            layout: M,
                            chatOpen: O,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: ef,
                            currentUserId: Y,
                            selectedParticipant: U,
                            allActiveStreams: H,
                            useNewInviteButton: ei,
                            connectedToEmbeddedActivity: null != ea,
                            showChatToasts: Q,
                            storedCallHeaderHeight: ee,
                            updateStoredCallHeaderHeight: et,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: c,
                                height: h
                            },
                            callContainerRef: p,
                            channelChatRef: f,
                            width: s,
                            maxHeight: a,
                            forceShowControls: eC,
                            awaitingRemoteSessionInfo: $,
                            currentChannelActivities: ev,
                            theme: e_
                        }),
                        !n.isPrivate() && (0, i.jsx)(eR.YR, {}),
                        (0, i.jsx)(eS.H_, {})
                    ]
                })
            })
        })
    });
};
