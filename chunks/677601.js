n.d(t, { Z: () => ez }), n(388685);
var r = n(951288),
    i = n(647438),
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
    y = n(872810),
    _ = n(153867),
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
    k = n(258609),
    D = n(446226),
    L = n(569545),
    U = n(102172),
    B = n(788983),
    F = n(928518),
    H = n(703656),
    G = n(880395),
    V = n(740492),
    z = n(793319),
    W = n(3861),
    q = n(493754),
    Y = n(937995),
    K = n(618158),
    X = n(880831),
    Q = n(73563),
    J = n(751843),
    $ = n(268353),
    ee = n(786915),
    et = n(800965),
    en = n(107169),
    er = n(891551),
    ei = n(488785),
    el = n(199902),
    ea = n(314897),
    eo = n(979696),
    es = n(523746),
    ec = n(430824),
    eu = n(496675),
    ed = n(306680),
    ep = n(944486),
    eh = n(594174),
    ef = n(979651),
    em = n(626135),
    eg = n(934415),
    eb = n(585483),
    ey = n(358085),
    e_ = n(998502),
    eC = n(228488),
    ex = n(358221),
    ev = n(414910),
    ej = n(887012),
    eO = n(909820),
    eE = n(493010),
    eS = n(742603),
    eP = n(71127),
    eI = n(221888),
    eZ = n(185935),
    eT = n(900211),
    eN = n(18759),
    eA = n(522651),
    ew = n(795318),
    eR = n(878752),
    eM = n(354459),
    ek = n(981631),
    eD = n(388032),
    eL = n(598411);
function eU(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eB(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eU(e, t, n[t]);
            });
    }
    return e;
}
function eF(e, t) {
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
let eH = {
        [ek.AEg.NORMAL]: eL.normal,
        [ek.AEg.MINIMUM]: eL.minimum,
        [ek.AEg.NO_CHAT]: eL.noChat,
        [ek.AEg.FULL_SCREEN]: eL.fullScreen,
    },
    eG = {
        [ek.IlC.POPOUT]: eL.popout,
        [ek.IlC.APP]: null,
        [ek.IlC.OVERLAY]: null,
    };
class eV extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eC.NO, this.handleFullScreenChange),
            em.default.track(
                ek.rMx.VIDEO_LAYOUT_TOGGLED,
                eB({ video_layout: this.inPopout ? "popout" : t }, (0, N.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eC.NO, this.handleFullScreenChange),
            (this.inPopout && (0, ey.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === ek.WtW.VIDEO &&
                r === ek.WtW.VOICE &&
                (0, eC.rB)(l, this.currentDocument) &&
                (0, eC.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || i !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ey.isPlatformEmbedded && e_.ZP.supportsFeature(ek.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall
            ? { mainText: eD.intl.string(eD.t.J5bXZW) }
            : null;
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
                canStayOnTop: c,
            };
        if (!r)
            return eF(eB({}, u), {
                canFullscreen: i,
                useTheme: !0,
            });
        switch (e) {
            case ek.AEg.FULL_SCREEN:
                return eF(eB({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case ek.AEg.MINIMUM:
                return eF(eB({}, u), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case ek.AEg.NO_CHAT:
            case ek.AEg.NORMAL:
                return eB({}, u);
        }
    }
    renderContent(e) {
        var t;
        let {
                selectedParticipant: n,
                inCall: i,
                hasConnectPermission: l,
                mode: a,
                popoutWindow: o,
                participantsOpen: s,
                participants: c,
                filteredParticipants: u,
                participantsVersion: d,
                channel: p,
                guild: h,
                layout: f,
                forceShowControls: m,
                awaitingRemoteSessionInfo: g,
                currentChannelActivities: b,
                callContainerDimensions: y,
            } = this.props,
            _ = f === ek.AEg.MINIMUM,
            C = _ || f === ek.AEg.NORMAL,
            x = i && a === ek.WtW.VIDEO,
            v = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                Q.Z,
                eF(
                    eB(
                        {
                            renderHeader: this.renderHeader,
                            renderBottomLeft: this.renderBottomLeft,
                            renderBottomCenter: this.renderBottomCenter,
                            renderBottomRight: this.renderBottomRight,
                            renderChatToasts: p.isGuildVoice() ? this.renderChatToasts : void 0,
                            renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                        },
                        e,
                    ),
                    {
                        screenMessage: this.screenMessage,
                        disableGradients: !i || _,
                        idle: !m && i && !_ && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsx)(W.Z, {
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
                                      callContainerDimensions: y,
                                  }),
                    },
                ),
            )
        );
    }
    render() {
        let {
                layout: e,
                channel: t,
                guild: n,
                mode: i,
                chatOpen: l,
                appContext: o,
                maxSidebarWidth: s,
                maxHeight: c,
                inCall: u,
                participantsListOpen: d,
            } = this.props,
            { resizedHeight: p } = this.state,
            f = i === ek.WtW.VIDEO,
            m = e !== ek.AEg.NO_CHAT && e !== ek.AEg.FULL_SCREEN && null != c,
            g = ek.BRd.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: a()(eL.wrapper, eH[e], eG[o], {
                [eL.poppedOut]: this.popoutOpen && !this.inPopout && e !== ek.AEg.NO_CHAT && t.isPrivate(),
                [eL.video]: f,
                [eL.sidebarOpen]: l || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                m && null != p
                    ? {
                          minHeight: eM._i,
                          maxHeight: c,
                          height: p,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(h.f6W, {
                    theme: g,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: a()(eL.callContainer, l || e !== ek.AEg.FULL_SCREEN ? void 0 : eL.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(Y.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                m &&
                    (0, r.jsx)(eT.Z, {
                        minHeight: eM._i,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, r.jsx)("div", {
                    className: eL.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                l &&
                                    (0, r.jsx)(eE.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s,
                                    }),
                                d &&
                                    (0, r.jsx)(eP.Z, {
                                        channel: t,
                                        maxWidth: s,
                                    }),
                            ],
                        }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            eU(this, "_prevLayout", ek.AEg.MINIMUM),
            eU(this, "_wrapperRef", i.createRef()),
            eU(this, "_callContainerRef", i.createRef()),
            eU(this, "_channelChatRef", i.createRef()),
            eU(this, "_contentRef", i.createRef()),
            eU(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eU(this, "_lastIdleProps", null),
            eU(this, "state", { resizedHeight: V.ZP.callHeaderHeight }),
            eU(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, eC.rB)(e, this.currentDocument) ||
                        this.props.layout !== ek.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eU(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== ek.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(ek.AEg.FULL_SCREEN),
                          (0, eC.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eU(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === ek.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, eC.Pr)(e, this.currentDocument));
            }),
            eU(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === ek.AEg.NORMAL ? ek.AEg.NO_CHAT : ek.AEg.NORMAL);
            }),
            eU(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (m.Z.updateLayout(t.id, e, n),
                    e === ek.AEg.FULL_SCREEN && t.isPrivate() && eb.S.dispatch(ek.CkL.TEXTAREA_BLUR));
            }),
            eU(this, "handleDisconnect", () => {
                this.props.layout === ek.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eU(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, w.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eM.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eU(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eM.A5.CONTEXT_MENU;
                return (0, ew.u)(e, T.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eM.fO.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eU(this, "handleContextMenu", (e, t, i, l) => {
                var a, o;
                let { channel: c, appContext: u, layout: d } = this.props,
                    p = {
                        onClose: () => {
                            var e;
                            return null == (e = this._lastIdleProps) ? void 0 : e.onAllowIdle("menu");
                        },
                        context: u,
                    };
                switch (
                    (null == (a = this._lastIdleProps) || a.onPreventIdle("menu"),
                    null == (o = this._lastIdleProps) || o.onActive(),
                    e.type)
                ) {
                    case eM.fO.HIDDEN_STREAM:
                    case eM.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eM.TH.STREAM),
                            (0, g.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eF(eB({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: i,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "StreamContextMenu",
                                                    e,
                                                    eM.TH.STREAM,
                                                    l,
                                                ),
                                            }),
                                        );
                                },
                                p,
                            );
                        return;
                    case eM.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eM.TH.USER);
                        let h = eh.default.getUser(e.id);
                        if (null != h) {
                            if (i)
                                return (0, G.D)(t, h, c, p, (e, t) =>
                                    (0, ew.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eM.A5.THREE_DOT,
                                        tileType: eM.TH.USER,
                                        targetUserId: h.id,
                                        location: T.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case ek.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("70205"),
                                                n.e("98783"),
                                                n.e("57789"),
                                                n.e("56826"),
                                                n.e("36658"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eF(eB({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "DMUserContextMenu",
                                                            e,
                                                            eM.TH.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        p,
                                    );
                                case ek.d4z.GROUP_DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("98783"),
                                                n.e("49062"),
                                            ]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eF(eB({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === ek.AEg.MINIMUM || d === ek.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "GroupDMUserContextMenu",
                                                            e,
                                                            eM.TH.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        p,
                                    );
                                case ek.d4z.GUILD_VOICE:
                                case ek.d4z.PUBLIC_THREAD:
                                case ek.d4z.PRIVATE_THREAD:
                                    let l = c.getGuildId();
                                    return (
                                        s()(null != l, "GuildID null for guild voice channel"),
                                        (0, g.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([
                                                    n.e("79695"),
                                                    n.e("98783"),
                                                    n.e("8982"),
                                                    n.e("7717"),
                                                    n.e("52021"),
                                                ]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eF(eB({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: h,
                                                            channel: c,
                                                            guildId: l,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler(
                                                                "GuildChannelUserContextMenu",
                                                                e,
                                                                eM.TH.USER,
                                                            ),
                                                        }),
                                                    );
                                            },
                                            p,
                                        )
                                    );
                            }
                        }
                }
            }),
            eU(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eU(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: a } = this.props;
                (0, eM._5)(e) &&
                    (0, U.p9)(n, ef.Z, ec.Z, eu.Z, k.Z)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === i.filter((t) => (0, L.V9)(t) === e.id && t.state !== ek.jm8.ENDED).length &&
                        (0, y.rn)((0, L.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === ek.WtW.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? m.Z.selectParticipant(n.id, null)
                            : m.Z.selectParticipant(n.id, e.id));
            }),
            eU(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, H.uL)((0, eg.LY)(t)), B.hP(e);
                    };
                null == t || (0, E.R)() ? n() : (0, Z.Z)({ onConfirm: n });
            }),
            eU(this, "handleStayOnTop", (e) => {
                (0, eA.v)(T.Z.VOICE_CONTROL_TRAY, eA.d.STAY_ON_TOP, e), B.hY(ek.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eU(this, "handleClosePopout", () => {
                B.xv(ek.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eU(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === ek.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eU(this, "renderRegionSelect", () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout ||
                        i === ek.AEg.FULL_SCREEN ||
                        null == t ||
                        n.isManaged() ||
                        (e = (0, r.jsx)(C.Z, { call: t })),
                    (0, r.jsx)(R.Z, {
                        justify: R.Z.Justify.END,
                        children: e,
                    })
                );
            }),
            eU(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ek.AEg.MINIMUM || n === ek.AEg.NORMAL
                    ? (0, r.jsx)(z.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps,
                      })
                    : null;
            }),
            eU(this, "renderBottomLeft", () => {
                let {
                    layout: e,
                    mentionCount: t,
                    channel: n,
                    appContext: i,
                    useNewInviteButton: l,
                    selectedParticipant: o,
                    shouldUseVoiceEffectsActionBar: s,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === ek.AEg.NO_CHAT ? J.Z.Directions.UP : J.Z.Directions.DOWN,
                    p = [ek.AEg.FULL_SCREEN, ek.AEg.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === eM.fO.STREAM),
                    m =
                        e === ek.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ek.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: b } = this.viewProperties,
                    y = l
                        ? (0, r.jsx)(q.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eM.fO.STREAM ? (0, L.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eM.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eL.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          })
                        : (0, r.jsx)(ee.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eM.fO.STREAM ? (0, L.my)(o.id) : void 0,
                              className: eL.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !s ? y : null,
                        g
                            ? (0, r.jsxs)(R.Z, {
                                  className: eL.iconWrapper,
                                  align: R.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(J.Z, {
                                          label: p ? eD.intl.string(eD.t.kkKapK) : eD.intl.string(eD.t["5MstTk"]),
                                          direction: d,
                                          className: eL.leftTrayIcon,
                                          onClick: () => {
                                              (0, eA.v)(T.Z.VOICE_CONTROL_TRAY, eA.d.CHAT, p), m();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, r.jsx)(h.mAB, {
                                                className: eL.badge,
                                                count: t,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        ((null == o ? void 0 : o.type) !== eM.fO.STREAM &&
                            (null == o ? void 0 : o.type) !== eM.fO.ACTIVITY) ||
                        s
                            ? null
                            : (0, r.jsx)(K.Z, {
                                  children: (0, r.jsx)(eI.Z, {
                                      className: a()(eL.leftTrayIcon, eL.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ek.AEg.FULL_SCREEN,
                                  }),
                              }),
                        s &&
                            (0, r.jsx)(eR.Z, {
                                channel: n,
                                hasActiveStream: f,
                            }),
                    ],
                });
            }),
            eU(this, "renderBottomRight", () => {
                let {
                        popoutWindow: e,
                        popoutWindowAlwaysOnTop: t,
                        currentUserId: n,
                        selectedParticipant: i,
                    } = this.props,
                    { canFullscreen: l, canStayOnTop: a, canPopout: o, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eM.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(er.Z, {
                                  context: (0, ev.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eL.volumeSlider,
                                  className: eL.rightTrayIcon,
                                  location: T.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        a
                            ? (0, r.jsx)(en.Z, {
                                  className: eL.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        o
                            ? (0, r.jsx)(et.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eL.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eA.v)(T.Z.VOICE_CONTROL_TRAY, eA.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eA.v)(T.Z.VOICE_CONTROL_TRAY, eA.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        l
                            ? (0, r.jsx)($.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eL.rightTrayIcon,
                                  onClick: () => {
                                      (0, eA.v)(
                                          T.Z.VOICE_CONTROL_TRAY,
                                          eA.d.FULL_SCREEN,
                                          this.props.layout !== ek.AEg.FULL_SCREEN,
                                      ),
                                          this.handleFullScreen();
                                  },
                              })
                            : null,
                    ],
                });
            }),
            eU(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eO.ZP, {
                          children: (0, r.jsx)(X.Z, {
                              className: eL.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eU(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eN.ZP, {
                    children: (0, r.jsx)(ei.Z, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eU(this, "renderHeader", () => {
                var e, t;
                let {
                        renderExternalHeader: n,
                        channel: i,
                        guild: l,
                        appContext: a,
                        chatOpen: o,
                        inCall: s,
                    } = this.props,
                    { useExternalHeader: c, canSelectRegion: u, renderHeader: d } = this.viewProperties;
                if (!d) return null;
                let p = null != (t = null == (e = this._lastIdleProps) ? void 0 : e.idle) && t;
                return (0, r.jsxs)(K.Z, {
                    children: [
                        (0, r.jsx)("div", {
                            className: eL.headerWrapper,
                            children: c
                                ? null == n
                                    ? void 0
                                    : n(p)
                                : (0, r.jsx)(eS.Z, {
                                      channel: i,
                                      guild: l,
                                      appContext: a,
                                      inCall: s,
                                      isChatOpen: o || (this.popoutOpen && !this.inPopout && s),
                                      exitFullScreen: this.maybeLeaveFullScreen,
                                  }),
                        }),
                        u ? this.renderRegionSelect() : null,
                    ],
                });
            });
    }
}
let ez = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a } = e,
        { width: o = 0, ref: s } = (0, v.ZP)(),
        { width: c = 0, height: p = 0, ref: f } = (0, v.ZP)(),
        { ref: m } = (0, v.ZP)(),
        g = (0, O.bp)(),
        b = (0, D.Z)(),
        y = (0, u.e7)([ep.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : ep.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: E,
            participantsVersion: Z,
            mode: N,
            layout: w,
            participantsOpen: R,
            participantsListOpen: L,
            chatOpen: U,
            selectedParticipant: B,
        } = (0, u.cj)([ex.Z], () => {
            let e = g === ek.IlC.POPOUT,
                t = ex.Z.getMode(n.id);
            e && (t = ek.WtW.VIDEO);
            let r = t === ek.WtW.VIDEO ? ex.Z.getLayout(n.id, g) : ek.AEg.MINIMUM;
            return (
                e && r !== ek.AEg.FULL_SCREEN && (r = ek.AEg.NO_CHAT),
                {
                    mode: t,
                    layout: r,
                    selectedParticipant: t !== ek.WtW.VOICE ? ex.Z.getSelectedParticipant(n.id) : null,
                    participants: ex.Z.getParticipants(n.id),
                    filteredParticipants: ex.Z.getFilteredParticipants(n.id),
                    participantsOpen: ex.Z.getParticipantsOpen(n.id),
                    chatOpen: ex.Z.getChatOpen(n.id),
                    participantsListOpen: ex.Z.getParticipantsListOpen(n.id),
                    participantsVersion: ex.Z.getParticipantsVersion(n.id),
                }
            );
        }, [g, n.id]),
        H = (0, u.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        { selectedStream: G } = (0, u.cj)(
            [el.Z],
            () => ({ selectedStream: null != B ? el.Z.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        z = (0, u.e7)([ec.Z], () => ec.Z.getGuild(n.getGuildId())),
        W = (0, u.e7)([es.Z], () => es.Z.getCall(n.id), [n.id]),
        q = (0, u.e7)([ed.ZP], () => ed.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, u.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: K, popoutWindowAlwaysOnTop: X } = (0, u.cj)([F.Z], () => ({
            popoutWindow: F.Z.getWindow(ek.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.Z.getIsAlwaysOnTop(ek.KJ3.CHANNEL_CALL_POPOUT),
        })),
        Q = (0, u.e7)([eu.Z], () => eu.Z.can(ek.Plq.CONNECT, n)),
        J = (0, u.e7)([eo.Z], () => eo.Z.getToastsEnabled(n.id)),
        $ = (0, u.e7)([k.Z], () => k.Z.getAwaitingRemoteSessionInfo()),
        ee = (0, u.e7)([V.ZP], () => V.ZP.callHeaderHeight),
        et = i.useCallback((e) => {
            _.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = null != (t = null == z ? void 0 : z.id) ? t : null,
        er = (0, I.Z)(en, n.id),
        ei = (0, u.e7)([S.Z], () => S.Z.getFetchState(), []),
        eh = (0, j.Z)(ei);
    i.useEffect(() => {
        ei === S.O.ERROR &&
            eh !== S.O.ERROR &&
            (0, h.showToast)((0, h.createToast)(eD.intl.string(eD.t.AlJyIy), h.ToastType.FAILURE));
    }, [ei, eh]);
    let ef = (0, u.e7)([P.ZP], () => P.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                y &&
                    N === ek.WtW.VIDEO &&
                    ((t = await e_.ZP.blockDisplaySleep()), e && null != t && e_.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? e_.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [y, N]);
    let em = (0, ej.Z)(n, !0),
        { hasParticipantsPanel: eg } = (0, eZ.Z)({ location: "ChannelCall" }),
        eb = (0, M.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ey } = (0, A.ZP)(T.Z.CHANNEL_CALL),
        eC = o - eM.oo,
        ev = P.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eE } = (0, h.TCT)();
    return (0, r.jsx)(A.Gt, {
        value: ey,
        children: (0, r.jsx)(x.Z, {
            page: ek.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eO.B2, {
                children: (0, r.jsxs)(eN._A, {
                    children: [
                        (0, r.jsx)(eV, {
                            channel: n,
                            guild: z,
                            hasConnectPermission: Q,
                            participantsOpen: R,
                            participantsListOpen: L && eg,
                            renderExternalHeader: l,
                            appContext: g,
                            call: W,
                            popoutWindow: K,
                            popoutWindowAlwaysOnTop: X,
                            mentionCount: q,
                            selectedStream: G,
                            mode: N,
                            inCall: y,
                            participants: C,
                            filteredParticipants: E,
                            participantsVersion: Z,
                            layout: w,
                            chatOpen: U,
                            maxSidebarWidth: eC,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: Y,
                            selectedParticipant: B,
                            allActiveStreams: H,
                            useNewInviteButton: er,
                            connectedEmbeddedActivity: null != ef ? ef : void 0,
                            showChatToasts: J,
                            storedCallHeaderHeight: ee,
                            updateStoredCallHeaderHeight: et,
                            wrapperRef: s,
                            callContainerDimensions: {
                                width: c,
                                height: p,
                            },
                            callContainerRef: f,
                            channelChatRef: m,
                            width: o,
                            maxHeight: a,
                            forceShowControls: eb,
                            awaitingRemoteSessionInfo: $,
                            currentChannelActivities: ev,
                            theme: eE,
                        }),
                        !n.isPrivate() && (0, r.jsx)(eN.YR, {}),
                        (0, r.jsx)(eO.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
