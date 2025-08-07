n.d(t, {
    Z: () => eX,
    o: () => eK,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(990547),
    u = n(442837),
    d = n(704215),
    f = n(846519),
    _ = n(481060),
    p = n(570140),
    h = n(475179),
    m = n(239091),
    g = n(287734),
    E = n(872810),
    b = n(153867),
    y = n(944543),
    O = n(410575),
    v = n(393238),
    I = n(110924),
    T = n(40851),
    S = n(636449),
    A = n(115130),
    N = n(317381),
    C = n(596040),
    R = n(617552),
    P = n(100527),
    w = n(367907),
    D = n(906732),
    L = n(213609),
    x = n(600164),
    M = n(211644),
    k = n(258609),
    j = n(446226),
    U = n(569545),
    G = n(102172),
    B = n(788983),
    Z = n(928518),
    F = n(703656),
    V = n(880395),
    H = n(740492),
    Y = n(793319),
    W = n(3861),
    K = n(493754),
    z = n(937995),
    q = n(618158),
    X = n(880831),
    Q = n(73563),
    J = n(751843),
    $ = n(268353),
    ee = n(786915),
    et = n(800965),
    en = n(107169),
    er = n(891551),
    ei = n(488785),
    eo = n(199902),
    ea = n(314897),
    es = n(979696),
    el = n(523746),
    ec = n(430824),
    eu = n(496675),
    ed = n(306680),
    ef = n(944486),
    e_ = n(594174),
    ep = n(979651),
    eh = n(626135),
    em = n(934415),
    eg = n(585483),
    eE = n(358085),
    eb = n(998502),
    ey = n(228488),
    eO = n(358221),
    ev = n(414910),
    eI = n(887012),
    eT = n(909820),
    eS = n(493010),
    eA = n(742603),
    eN = n(71127),
    eC = n(221888),
    eR = n(185935),
    eP = n(900211),
    ew = n(18759),
    eD = n(522651),
    eL = n(795318),
    ex = n(878752),
    eM = n(354459),
    ek = n(981631),
    ej = n(388032),
    eU = n(971182);
function eG(e, t, n) {
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
                eG(e, t, n[t]);
            });
    }
    return e;
}
function eZ(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eF(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eZ(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eV = 2000,
    eH = 4,
    eY = {
        [ek.AEg.NORMAL]: eU.normal,
        [ek.AEg.MINIMUM]: eU.minimum,
        [ek.AEg.NO_CHAT]: eU.noChat,
        [ek.AEg.FULL_SCREEN]: eU.fullScreen,
    },
    eW = {
        [ek.IlC.POPOUT]: eU.popout,
        [ek.IlC.APP]: null,
        [ek.IlC.OVERLAY]: null,
    },
    eK = 550,
    ez = 230;
class eq extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ey.NO, this.handleFullScreenChange),
            eh.default.track(
                ek.rMx.VIDEO_LAYOUT_TOGGLED,
                eB({ video_layout: this.inPopout ? "popout" : t }, (0, w.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ey.NO, this.handleFullScreenChange),
            (this.inPopout && (0, eE.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            o = this.getRootNode();
        if (
            (null != o &&
                e.mode === ek.WtW.VIDEO &&
                r === ek.WtW.VOICE &&
                (0, ey.rB)(o, this.currentDocument) &&
                (0, ey.Pr)(o, this.currentDocument),
            e.participantsOpen !== t || i !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eE.isPlatformEmbedded && eb.ZP.supportsFeature(ek.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall
            ? { mainText: ej.intl.string(ej.t.J5bXZW) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === ek.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === ek.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            o = t === ek.WtW.VIDEO && r && this.popoutSupported,
            a = t !== ek.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            s = n.type === ek.d4z.GUILD_VOICE,
            l = e === ek.AEg.MINIMUM || e === ek.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            u = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: l,
                canInvite: s,
                canPopout: o,
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
                hasConnectPermission: o,
                mode: a,
                popoutWindow: s,
                participantsOpen: l,
                participants: c,
                filteredParticipants: u,
                participantsVersion: d,
                channel: f,
                guild: _,
                layout: p,
                forceShowControls: h,
                awaitingRemoteSessionInfo: m,
                currentChannelActivities: g,
                callContainerDimensions: E,
            } = this.props,
            b = p === ek.AEg.MINIMUM,
            y = b || p === ek.AEg.NORMAL,
            O = i && a === ek.WtW.VIDEO,
            v = (null != (t = null == g ? void 0 : g.length) ? t : 0) > 0 && f.isPrivate();
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
                            renderChatToasts: f.isGuildVoice() ? this.renderChatToasts : void 0,
                            renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                        },
                        e,
                    ),
                    {
                        screenMessage: this.screenMessage,
                        disableGradients: !i || b,
                        idle: !h && i && !b && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsx)(W.Z, {
                                      ref: this._contentRef,
                                      inCall: i,
                                      channel: f,
                                      hasConnectPermission: o,
                                      guild: _,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: O ? n : null,
                                      layout: p,
                                      idle: e.idle,
                                      mode: a,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: l && (!y || v),
                                      popoutWindow: this.inPopout ? s : null,
                                      awaitingRemoteSessionInfo: m,
                                      callContainerDimensions: E,
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
                chatOpen: o,
                appContext: s,
                maxSidebarWidth: l,
                maxHeight: c,
                inCall: u,
                participantsListOpen: d,
            } = this.props,
            { resizedHeight: f } = this.state,
            p = i === ek.WtW.VIDEO,
            h = e !== ek.AEg.NO_CHAT && e !== ek.AEg.FULL_SCREEN && null != c,
            m = ek.BRd.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: a()(eU.wrapper, eY[e], eW[s], {
                [eU.poppedOut]: this.popoutOpen && !this.inPopout && e !== ek.AEg.NO_CHAT && t.isPrivate(),
                [eU.video]: p,
                [eU.sidebarOpen]: o || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                h && null != f
                    ? {
                          minHeight: ez,
                          maxHeight: c,
                          height: f,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(_.f6W, {
                    theme: m,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: a()(eU.callContainer, o || e !== ek.AEg.FULL_SCREEN ? void 0 : eU.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(z.ZP, {
                                timeout: eV,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                h &&
                    (0, r.jsx)(eP.Z, {
                        minHeight: ez,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, r.jsx)("div", {
                    className: eU.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                o &&
                                    (0, r.jsx)(eS.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: l,
                                    }),
                                d &&
                                    (0, r.jsx)(eN.Z, {
                                        channel: t,
                                        maxWidth: l,
                                    }),
                            ],
                        }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            eG(this, "_prevLayout", ek.AEg.MINIMUM),
            eG(this, "_wrapperRef", i.createRef()),
            eG(this, "_callContainerRef", i.createRef()),
            eG(this, "_channelChatRef", i.createRef()),
            eG(this, "_contentRef", i.createRef()),
            eG(this, "_videoBackgroundTooltipTimeout", new f.V7()),
            eG(this, "_lastIdleProps", null),
            eG(this, "state", { resizedHeight: H.ZP.callHeaderHeight }),
            eG(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ey.rB)(e, this.currentDocument) ||
                        this.props.layout !== ek.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eG(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== ek.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(ek.AEg.FULL_SCREEN),
                          (0, ey.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eG(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === ek.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ey.Pr)(e, this.currentDocument));
            }),
            eG(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === ek.AEg.NORMAL ? ek.AEg.NO_CHAT : ek.AEg.NORMAL);
            }),
            eG(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (h.Z.updateLayout(t.id, e, n),
                    e === ek.AEg.FULL_SCREEN && t.isPrivate() && eg.S.dispatch(ek.CkL.TEXTAREA_BLUR));
            }),
            eG(this, "handleDisconnect", () => {
                this.props.layout === ek.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eG(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, L.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eM.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eG(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eM.A5.CONTEXT_MENU;
                return (0, eL.u)(e, P.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eM.fO.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eG(this, "handleContextMenu", (e, t, i, o) => {
                var a, s;
                let { channel: c, appContext: u, layout: d } = this.props,
                    f = {
                        onClose: () => {
                            var e;
                            return null == (e = this._lastIdleProps) ? void 0 : e.onAllowIdle("menu");
                        },
                        context: u,
                    };
                switch (
                    (null == (a = this._lastIdleProps) || a.onPreventIdle("menu"),
                    null == (s = this._lastIdleProps) || s.onActive(),
                    e.type)
                ) {
                    case eM.fO.HIDDEN_STREAM:
                    case eM.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eM.TH.STREAM),
                            (0, m.jW)(
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
                                                    o,
                                                ),
                                            }),
                                        );
                                },
                                f,
                            );
                        return;
                    case eM.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eM.TH.USER);
                        let _ = e_.default.getUser(e.id);
                        if (null != _) {
                            if (i)
                                return (0, V.D)(t, _, c, f, (e, t) =>
                                    (0, eL.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eM.A5.THREE_DOT,
                                        tileType: eM.TH.USER,
                                        targetUserId: _.id,
                                        location: P.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case ek.d4z.DM:
                                    return (0, m.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("70205"),
                                                n.e("98783"),
                                                n.e("57789"),
                                                n.e("56826"),
                                                n.e("4310"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eF(eB({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: _,
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
                                        f,
                                    );
                                case ek.d4z.GROUP_DM:
                                    return (0, m.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("98783"),
                                                n.e("14126"),
                                            ]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eF(eB({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === ek.AEg.MINIMUM || d === ek.AEg.NORMAL,
                                                        user: _,
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
                                        f,
                                    );
                                case ek.d4z.GUILD_VOICE:
                                case ek.d4z.PUBLIC_THREAD:
                                case ek.d4z.PRIVATE_THREAD:
                                    let o = c.getGuildId();
                                    return (
                                        l()(null != o, "GuildID null for guild voice channel"),
                                        (0, m.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([
                                                    n.e("79695"),
                                                    n.e("98783"),
                                                    n.e("8982"),
                                                    n.e("7717"),
                                                    n.e("12658"),
                                                ]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eF(eB({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: _,
                                                            channel: c,
                                                            guildId: o,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler(
                                                                "GuildChannelUserContextMenu",
                                                                e,
                                                                eM.TH.USER,
                                                            ),
                                                        }),
                                                    );
                                            },
                                            f,
                                        )
                                    );
                            }
                        }
                }
            }),
            eG(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eG(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: o, mode: a } = this.props;
                (0, eM._5)(e) &&
                    (0, G.p9)(n, ep.Z, ec.Z, eu.Z, k.Z)[0] &&
                    (g.default.selectVoiceChannel(n.id),
                    0 === i.filter((t) => (0, U.V9)(t) === e.id && t.state !== ek.jm8.ENDED).length &&
                        (0, E.rn)((0, U.my)(e.id), { forceMultiple: t.shiftKey })),
                    o &&
                        a === ek.WtW.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? h.Z.selectParticipant(n.id, null)
                            : h.Z.selectParticipant(n.id, e.id));
            }),
            eG(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, F.uL)((0, em.LY)(t)), B.hP(e);
                    };
                null == t || (0, S.R)() ? n() : (0, R.Z)({ onConfirm: n });
            }),
            eG(this, "handleStayOnTop", (e) => {
                (0, eD.v)(P.Z.VOICE_CONTROL_TRAY, eD.d.STAY_ON_TOP, e), B.hY(ek.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eG(this, "handleClosePopout", () => {
                B.xv(ek.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eG(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === ek.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eG(this, "renderRegionSelect", () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout ||
                        i === ek.AEg.FULL_SCREEN ||
                        null == t ||
                        n.isManaged() ||
                        (e = (0, r.jsx)(y.Z, { call: t })),
                    (0, r.jsx)(x.Z, {
                        justify: x.Z.Justify.END,
                        children: e,
                    })
                );
            }),
            eG(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ek.AEg.MINIMUM || n === ek.AEg.NORMAL
                    ? (0, r.jsx)(Y.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps,
                      })
                    : null;
            }),
            eG(this, "renderBottomLeft", () => {
                let {
                    layout: e,
                    mentionCount: t,
                    channel: n,
                    appContext: i,
                    useNewInviteButton: o,
                    selectedParticipant: s,
                    shouldUseVoiceEffectsActionBar: l,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === ek.AEg.NO_CHAT ? J.Z.Directions.UP : J.Z.Directions.DOWN,
                    f = [ek.AEg.FULL_SCREEN, ek.AEg.NO_CHAT].includes(e),
                    p = u.some((e) => e.type === eM.fO.STREAM),
                    h =
                        e === ek.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ek.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: m, canInvite: g } = this.viewProperties,
                    E = o
                        ? (0, r.jsx)(K.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eM.fO.STREAM ? (0, U.my)(s.id) : void 0,
                              applicationId:
                                  (null == s ? void 0 : s.type) === eM.fO.ACTIVITY ? s.applicationId : void 0,
                              appContext: i,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          })
                        : (0, r.jsx)(ee.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eM.fO.STREAM ? (0, U.my)(s.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        g && !l ? E : null,
                        m
                            ? (0, r.jsxs)(x.Z, {
                                  className: eU.iconWrapper,
                                  align: x.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(J.Z, {
                                          label: f ? ej.intl.string(ej.t.kkKapK) : ej.intl.string(ej.t["5MstTk"]),
                                          direction: d,
                                          className: eU.leftTrayIcon,
                                          onClick: () => {
                                              (0, eD.v)(P.Z.VOICE_CONTROL_TRAY, eD.d.CHAT, f), h();
                                          },
                                      }),
                                      f && t > 0
                                          ? (0, r.jsx)(_.mAB, {
                                                className: eU.badge,
                                                count: t,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== eM.fO.STREAM &&
                            (null == s ? void 0 : s.type) !== eM.fO.ACTIVITY) ||
                        l
                            ? null
                            : (0, r.jsx)(q.Z, {
                                  children: (0, r.jsx)(eC.Z, {
                                      className: a()(eU.leftTrayIcon, eU.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: eH,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ek.AEg.FULL_SCREEN,
                                  }),
                              }),
                        l &&
                            (0, r.jsx)(ex.Z, {
                                channel: n,
                                hasActiveStream: p,
                            }),
                    ],
                });
            }),
            eG(this, "renderBottomRight", () => {
                let {
                        popoutWindow: e,
                        popoutWindowAlwaysOnTop: t,
                        currentUserId: n,
                        selectedParticipant: i,
                    } = this.props,
                    { canFullscreen: o, canStayOnTop: a, canPopout: s, useTheme: l } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eM.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(er.Z, {
                                  context: (0, ev.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eU.volumeSlider,
                                  className: eU.rightTrayIcon,
                                  location: P.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        a
                            ? (0, r.jsx)(en.Z, {
                                  className: eU.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        s
                            ? (0, r.jsx)(et.Z, {
                                  themeable: l,
                                  popoutOpen: this.popoutOpen,
                                  className: eU.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eD.v)(P.Z.VOICE_CONTROL_TRAY, eD.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eD.v)(P.Z.VOICE_CONTROL_TRAY, eD.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        o
                            ? (0, r.jsx)($.Z, {
                                  themeable: l,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eU.rightTrayIcon,
                                  onClick: () => {
                                      (0, eD.v)(
                                          P.Z.VOICE_CONTROL_TRAY,
                                          eD.d.FULL_SCREEN,
                                          this.props.layout !== ek.AEg.FULL_SCREEN,
                                      ),
                                          this.handleFullScreen();
                                  },
                              })
                            : null,
                    ],
                });
            }),
            eG(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eT.ZP, {
                          children: (0, r.jsx)(X.Z, {
                              className: eU.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eG(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(ew.ZP, {
                    children: (0, r.jsx)(ei.Z, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eG(this, "renderHeader", () => {
                var e, t;
                let {
                        renderExternalHeader: n,
                        channel: i,
                        guild: o,
                        appContext: a,
                        chatOpen: s,
                        inCall: l,
                    } = this.props,
                    { useExternalHeader: c, canSelectRegion: u, renderHeader: d } = this.viewProperties;
                if (!d) return null;
                let f = null != (t = null == (e = this._lastIdleProps) ? void 0 : e.idle) && t;
                return (0, r.jsxs)(q.Z, {
                    children: [
                        (0, r.jsx)("div", {
                            className: eU.headerWrapper,
                            children: c
                                ? null == n
                                    ? void 0
                                    : n(f)
                                : (0, r.jsx)(eA.Z, {
                                      channel: i,
                                      guild: o,
                                      appContext: a,
                                      inCall: l,
                                      isChatOpen: s || (this.popoutOpen && !this.inPopout && l),
                                      exitFullScreen: this.maybeLeaveFullScreen,
                                  }),
                        }),
                        u ? this.renderRegionSelect() : null,
                    ],
                });
            });
    }
}
let eX = function (e) {
    var t;
    let { channel: n, renderExternalHeader: o, maxHeight: a } = e,
        { width: s = 0, ref: l } = (0, v.ZP)(),
        { width: c = 0, height: f = 0, ref: p } = (0, v.ZP)(),
        { ref: h } = (0, v.ZP)(),
        m = (0, T.bp)(),
        g = (0, j.Z)(),
        E = (0, u.e7)([ef.Z], () => {
            var e;
            return (null != (e = null == g ? void 0 : g.channelId) ? e : ef.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: y,
            filteredParticipants: S,
            participantsVersion: R,
            mode: w,
            layout: L,
            participantsOpen: x,
            participantsListOpen: U,
            chatOpen: G,
            selectedParticipant: B,
        } = (0, u.cj)([eO.Z], () => {
            let e = m === ek.IlC.POPOUT,
                t = eO.Z.getMode(n.id);
            e && (t = ek.WtW.VIDEO);
            let r = t === ek.WtW.VIDEO ? eO.Z.getLayout(n.id, m) : ek.AEg.MINIMUM;
            return (
                e && r !== ek.AEg.FULL_SCREEN && (r = ek.AEg.NO_CHAT),
                {
                    mode: t,
                    layout: r,
                    selectedParticipant: t !== ek.WtW.VOICE ? eO.Z.getSelectedParticipant(n.id) : null,
                    participants: eO.Z.getParticipants(n.id),
                    filteredParticipants: eO.Z.getFilteredParticipants(n.id),
                    participantsOpen: eO.Z.getParticipantsOpen(n.id),
                    chatOpen: eO.Z.getChatOpen(n.id),
                    participantsListOpen: eO.Z.getParticipantsListOpen(n.id),
                    participantsVersion: eO.Z.getParticipantsVersion(n.id),
                }
            );
        }, [m, n.id]),
        F = (0, u.Wu)([eo.Z], () => eo.Z.getAllActiveStreams()),
        { selectedStream: V } = (0, u.cj)(
            [eo.Z],
            () => ({ selectedStream: null != B ? eo.Z.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        Y = (0, u.e7)([ec.Z], () => ec.Z.getGuild(n.getGuildId())),
        W = (0, u.e7)([el.Z], () => el.Z.getCall(n.id), [n.id]),
        K = (0, u.e7)([ed.ZP], () => ed.ZP.getMentionCount(n.id), [n.id]),
        z = (0, u.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: X } = (0, u.cj)([Z.Z], () => ({
            popoutWindow: Z.Z.getWindow(ek.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: Z.Z.getIsAlwaysOnTop(ek.KJ3.CHANNEL_CALL_POPOUT),
        })),
        Q = (0, u.e7)([eu.Z], () => eu.Z.can(ek.Plq.CONNECT, n)),
        J = (0, u.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        $ = (0, u.e7)([k.Z], () => k.Z.getAwaitingRemoteSessionInfo()),
        ee = (0, u.e7)([H.ZP], () => H.ZP.callHeaderHeight),
        et = i.useCallback((e) => {
            b.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = null != (t = null == Y ? void 0 : Y.id) ? t : null,
        er = (0, C.Z)(en, n.id),
        ei = (0, u.e7)([A.Z], () => A.Z.getFetchState(), []),
        e_ = (0, I.Z)(ei);
    i.useEffect(() => {
        ei === A.O.ERROR &&
            e_ !== A.O.ERROR &&
            (0, _.showToast)((0, _.createToast)(ej.intl.string(ej.t.AlJyIy), _.ToastType.FAILURE));
    }, [ei, e_]);
    let ep = (0, u.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                E &&
                    w === ek.WtW.VIDEO &&
                    ((t = await eb.ZP.blockDisplaySleep()), e && null != t && eb.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eb.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [E, w]);
    let eh = (0, eI.Z)(n, !0),
        { hasParticipantsPanel: em } = (0, eR.Z)({ location: "ChannelCall" }),
        eg = (0, M.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eE } = (0, D.ZP)(P.Z.CHANNEL_CALL),
        ey = s - eK,
        ev = N.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eS } = (0, _.TCT)();
    return (0, r.jsx)(D.Gt, {
        value: eE,
        children: (0, r.jsx)(O.Z, {
            page: ek.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eT.B2, {
                children: (0, r.jsxs)(ew._A, {
                    children: [
                        (0, r.jsx)(eq, {
                            channel: n,
                            guild: Y,
                            hasConnectPermission: Q,
                            participantsOpen: x,
                            participantsListOpen: U && em,
                            renderExternalHeader: o,
                            appContext: m,
                            call: W,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: X,
                            mentionCount: K,
                            selectedStream: V,
                            mode: w,
                            inCall: E,
                            participants: y,
                            filteredParticipants: S,
                            participantsVersion: R,
                            layout: L,
                            chatOpen: G,
                            maxSidebarWidth: ey,
                            shouldUseVoiceEffectsActionBar: eh,
                            currentUserId: z,
                            selectedParticipant: B,
                            allActiveStreams: F,
                            useNewInviteButton: er,
                            connectedEmbeddedActivity: null != ep ? ep : void 0,
                            showChatToasts: J,
                            storedCallHeaderHeight: ee,
                            updateStoredCallHeaderHeight: et,
                            wrapperRef: l,
                            callContainerDimensions: {
                                width: c,
                                height: f,
                            },
                            callContainerRef: p,
                            channelChatRef: h,
                            width: s,
                            maxHeight: a,
                            forceShowControls: eg,
                            awaitingRemoteSessionInfo: $,
                            currentChannelActivities: ev,
                            theme: eS,
                        }),
                        !n.isPrivate() && (0, r.jsx)(ew.YR, {}),
                        (0, r.jsx)(eT.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
