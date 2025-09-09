n.d(t, { Z: () => eq }), n(388685);
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
    v = n(410575),
    x = n(393238),
    O = n(110924),
    j = n(40851),
    E = n(636449),
    S = n(115130),
    I = n(566620),
    P = n(317381),
    Z = n(729200),
    T = n(596040),
    N = n(617552),
    A = n(100527),
    w = n(367907),
    R = n(906732),
    M = n(213609),
    D = n(600164),
    L = n(211644),
    k = n(258609),
    U = n(446226),
    B = n(569545),
    G = n(102172),
    H = n(788983),
    F = n(928518),
    V = n(703656),
    z = n(880395),
    W = n(740492),
    q = n(793319),
    Y = n(3861),
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
    ea = n(488785),
    eo = n(199902),
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
    ey = n(934415),
    e_ = n(585483),
    eC = n(358085),
    ev = n(998502),
    ex = n(228488),
    eO = n(358221),
    ej = n(414910),
    eE = n(887012),
    eS = n(909820),
    eI = n(493010),
    eP = n(742603),
    eZ = n(71127),
    eT = n(221888),
    eN = n(185935),
    eA = n(900211),
    ew = n(18759),
    eR = n(522651),
    eM = n(795318),
    eD = n(878752),
    eL = n(354459),
    ek = n(981631),
    eU = n(388032),
    eB = n(598411);
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
function eH(e) {
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
let eV = {
        [ek.AEg.NORMAL]: eB.normal,
        [ek.AEg.MINIMUM]: eB.minimum,
        [ek.AEg.NO_CHAT]: eB.noChat,
        [ek.AEg.FULL_SCREEN]: eB.fullScreen,
    },
    ez = {
        [ek.IlC.POPOUT]: eB.popout,
        [ek.IlC.APP]: null,
        [ek.IlC.OVERLAY]: null,
    };
class eW extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ex.NO, this.handleFullScreenChange),
            eb.default.track(
                ek.rMx.VIDEO_LAYOUT_TOGGLED,
                eH({ video_layout: this.inPopout ? "popout" : t }, (0, w.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ex.NO, this.handleFullScreenChange),
            (this.inPopout && (0, eC.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === ek.WtW.VIDEO &&
                r === ek.WtW.VOICE &&
                (0, ex.rB)(l, this.currentDocument) &&
                (0, ex.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || i !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eC.isPlatformEmbedded && ev.ZP.supportsFeature(ek.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall
            ? { mainText: eU.intl.string(eU.t.J5bXZW) }
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
            return eF(eH({}, u), {
                canFullscreen: i,
                useTheme: !0,
            });
        switch (e) {
            case ek.AEg.FULL_SCREEN:
                return eF(eH({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case ek.AEg.MINIMUM:
                return eF(eH({}, u), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case ek.AEg.NO_CHAT:
            case ek.AEg.NORMAL:
                return eH({}, u);
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
            v = i && a === ek.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                $.Z,
                eF(
                    eH(
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
                                : (0, r.jsx)(Y.Z, {
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
                                      showParticipants: s && (!C || x),
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
            className: a()(eB.wrapper, eV[e], ez[o], {
                [eB.poppedOut]: this.popoutOpen && !this.inPopout && e !== ek.AEg.NO_CHAT && t.isPrivate(),
                [eB.video]: f,
                [eB.sidebarOpen]: l || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                m && null != p
                    ? {
                          minHeight: eL._i,
                          maxHeight: c,
                          height: p,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(h.f6W, {
                    theme: g,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: a()(eB.callContainer, l || e !== ek.AEg.FULL_SCREEN ? void 0 : eB.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(X.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                m &&
                    (0, r.jsx)(eA.Z, {
                        minHeight: eL._i,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, r.jsx)("div", {
                    className: eB.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                l &&
                                    (0, r.jsx)(eI.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s,
                                    }),
                                d &&
                                    (0, r.jsx)(eZ.Z, {
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
            eG(this, "_prevLayout", ek.AEg.MINIMUM),
            eG(this, "_wrapperRef", i.createRef()),
            eG(this, "_callContainerRef", i.createRef()),
            eG(this, "_channelChatRef", i.createRef()),
            eG(this, "_contentRef", i.createRef()),
            eG(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eG(this, "_lastIdleProps", null),
            eG(this, "state", { resizedHeight: W.ZP.callHeaderHeight }),
            eG(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ex.rB)(e, this.currentDocument) ||
                        this.props.layout !== ek.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eG(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== ek.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(ek.AEg.FULL_SCREEN),
                          (0, ex.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eG(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === ek.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ex.Pr)(e, this.currentDocument));
            }),
            eG(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === ek.AEg.NORMAL ? ek.AEg.NO_CHAT : ek.AEg.NORMAL);
            }),
            eG(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (m.Z.updateLayout(t.id, e, n),
                    e === ek.AEg.FULL_SCREEN && t.isPrivate() && e_.S.dispatch(ek.CkL.TEXTAREA_BLUR));
            }),
            eG(this, "handleDisconnect", () => {
                this.props.layout === ek.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eG(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, M.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eL.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eG(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eL.A5.CONTEXT_MENU;
                return (0, eM.u)(e, A.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eL.fO.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eG(this, "handleContextMenu", (e, t, i, l) => {
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
                    case eL.fO.HIDDEN_STREAM:
                    case eL.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eL.TH.STREAM),
                            (0, g.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eF(eH({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: i,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "StreamContextMenu",
                                                    e,
                                                    eL.TH.STREAM,
                                                    l,
                                                ),
                                            }),
                                        );
                                },
                                p,
                            );
                        return;
                    case eL.fO.USER:
                        this.trackCallTileContextMenuImpression(e, eL.TH.USER);
                        let h = em.default.getUser(e.id);
                        if (null != h) {
                            if (i)
                                return (0, z.D)(t, h, c, p, (e, t) =>
                                    (0, eM.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eL.A5.THREE_DOT,
                                        tileType: eL.TH.USER,
                                        targetUserId: h.id,
                                        location: A.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case ek.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("98783"),
                                                n.e("56826"),
                                                n.e("31899"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eF(eH({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "DMUserContextMenu",
                                                            e,
                                                            eL.TH.USER,
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
                                                    eF(eH({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === ek.AEg.MINIMUM || d === ek.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "GroupDMUserContextMenu",
                                                            e,
                                                            eL.TH.USER,
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
                                                        eF(eH({}, n), {
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
                                                                eL.TH.USER,
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
            eG(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eG(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: a } = this.props;
                (0, eL._5)(e) &&
                    (0, G.p9)(n, eg.Z, ed.Z, ep.Z, k.Z)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === i.filter((t) => (0, B.V9)(t) === e.id && t.state !== ek.jm8.ENDED).length &&
                        (0, y.rn)((0, B.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === ek.WtW.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? m.Z.selectParticipant(n.id, null)
                            : m.Z.selectParticipant(n.id, e.id));
            }),
            eG(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null &&
                            (0, Z.g)() &&
                            (await (0, I.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, V.uL)((0, ey.LY)(n)), H.hP(e);
                    };
                null == t || (0, E.R)() ? n() : (0, N.Z)({ onConfirm: n });
            }),
            eG(this, "handleStayOnTop", (e) => {
                (0, eR.v)(A.Z.VOICE_CONTROL_TRAY, eR.d.STAY_ON_TOP, e), H.hY(ek.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eG(this, "handleClosePopout", () => {
                H.xv(ek.KJ3.CHANNEL_CALL_POPOUT);
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
                        (e = (0, r.jsx)(C.Z, { call: t })),
                    (0, r.jsx)(D.Z, {
                        justify: D.Z.Justify.END,
                        children: e,
                    })
                );
            }),
            eG(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ek.AEg.MINIMUM || n === ek.AEg.NORMAL
                    ? (0, r.jsx)(q.ZP, {
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
                    useNewInviteButton: l,
                    selectedParticipant: o,
                    shouldUseVoiceEffectsActionBar: s,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === ek.AEg.NO_CHAT ? ee.Z.Directions.UP : ee.Z.Directions.DOWN,
                    p = [ek.AEg.FULL_SCREEN, ek.AEg.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === eL.fO.STREAM),
                    m =
                        e === ek.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ek.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: b } = this.viewProperties,
                    y = l
                        ? (0, r.jsx)(K.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eL.fO.STREAM ? (0, B.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eL.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          })
                        : (0, r.jsx)(en.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eL.fO.STREAM ? (0, B.my)(o.id) : void 0,
                              className: eB.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !s ? y : null,
                        g
                            ? (0, r.jsxs)(D.Z, {
                                  className: eB.iconWrapper,
                                  align: D.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ee.Z, {
                                          label: p ? eU.intl.string(eU.t.kkKapK) : eU.intl.string(eU.t["5MstTk"]),
                                          direction: d,
                                          className: eB.leftTrayIcon,
                                          onClick: () => {
                                              (0, eR.v)(A.Z.VOICE_CONTROL_TRAY, eR.d.CHAT, p), m();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, r.jsx)(h.mAB, {
                                                className: eB.badge,
                                                count: t,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        ((null == o ? void 0 : o.type) !== eL.fO.STREAM &&
                            (null == o ? void 0 : o.type) !== eL.fO.ACTIVITY) ||
                        s
                            ? null
                            : (0, r.jsx)(Q.Z, {
                                  children: (0, r.jsx)(eT.Z, {
                                      className: a()(eB.leftTrayIcon, eB.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ek.AEg.FULL_SCREEN,
                                  }),
                              }),
                        s &&
                            (0, r.jsx)(eD.Z, {
                                channel: n,
                                hasActiveStream: f,
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
                    { canFullscreen: l, canStayOnTop: a, canPopout: o, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eL.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(el.Z, {
                                  context: (0, ej.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eB.volumeSlider,
                                  className: eB.rightTrayIcon,
                                  location: A.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        a
                            ? (0, r.jsx)(ei.Z, {
                                  className: eB.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        o
                            ? (0, r.jsx)(er.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eB.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eR.v)(A.Z.VOICE_CONTROL_TRAY, eR.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eR.v)(A.Z.VOICE_CONTROL_TRAY, eR.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        l
                            ? (0, r.jsx)(et.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eB.rightTrayIcon,
                                  onClick: () => {
                                      (0, eR.v)(
                                          A.Z.VOICE_CONTROL_TRAY,
                                          eR.d.FULL_SCREEN,
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
                    : (0, r.jsx)(eS.ZP, {
                          children: (0, r.jsx)(J.Z, {
                              className: eB.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eG(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(ew.ZP, {
                    children: (0, r.jsx)(ea.Z, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eG(this, "renderHeader", () => {
                let {
                        renderExternalHeader: e,
                        channel: t,
                        guild: n,
                        appContext: i,
                        chatOpen: l,
                        inCall: a,
                    } = this.props,
                    { useExternalHeader: o, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)(Q.Z, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: eB.headerWrapper,
                                  children: o
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, r.jsx)(eP.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: i,
                                            inCall: a,
                                            isChatOpen: l || (this.popoutOpen && !this.inPopout && a),
                                            exitFullScreen: this.maybeLeaveFullScreen,
                                        }),
                              }),
                              s ? this.renderRegionSelect() : null,
                          ],
                      })
                    : null;
            });
    }
}
let eq = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a } = e,
        { width: o = 0, ref: s } = (0, x.ZP)(),
        { width: c = 0, height: p = 0, ref: f } = (0, x.ZP)(),
        { ref: m } = (0, x.ZP)(),
        g = (0, j.bp)(),
        b = (0, U.Z)(),
        y = (0, u.e7)([ef.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : ef.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: E,
            participantsVersion: I,
            mode: Z,
            layout: N,
            participantsOpen: w,
            participantsListOpen: M,
            chatOpen: D,
            selectedParticipant: B,
        } = (0, u.cj)([eO.Z], () => {
            let e = g === ek.IlC.POPOUT,
                t = eO.Z.getMode(n.id);
            e && (t = ek.WtW.VIDEO);
            let r = t === ek.WtW.VIDEO ? eO.Z.getLayout(n.id, g) : ek.AEg.MINIMUM;
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
        }, [g, n.id]),
        G = (0, u.Wu)([eo.Z], () => eo.Z.getAllActiveStreams()),
        { selectedStream: H } = (0, u.cj)(
            [eo.Z],
            () => ({ selectedStream: null != B ? eo.Z.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        V = (0, u.e7)([ed.Z], () => ed.Z.getGuild(n.getGuildId())),
        z = (0, u.e7)([eu.Z], () => eu.Z.getCall(n.id), [n.id]),
        q = (0, u.e7)([eh.ZP], () => eh.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, u.e7)([es.default], () => es.default.getId()),
        { popoutWindow: K, popoutWindowAlwaysOnTop: X } = (0, u.cj)([F.Z], () => ({
            popoutWindow: F.Z.getWindow(ek.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.Z.getIsAlwaysOnTop(ek.KJ3.CHANNEL_CALL_POPOUT),
        })),
        Q = (0, u.e7)([ep.Z], () => ep.Z.can(ek.Plq.CONNECT, n)),
        J = (0, u.e7)([ec.Z], () => ec.Z.getToastsEnabled(n.id)),
        $ = (0, u.e7)([k.Z], () => k.Z.getAwaitingRemoteSessionInfo()),
        ee = (0, u.e7)([W.ZP], () => W.ZP.callHeaderHeight),
        et = i.useCallback((e) => {
            _.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = null != (t = null == V ? void 0 : V.id) ? t : null,
        er = (0, T.Z)(en, n.id),
        ei = (0, u.e7)([S.Z], () => S.Z.getFetchState(), []),
        el = (0, O.Z)(ei);
    i.useEffect(() => {
        ei === S.O.ERROR &&
            el !== S.O.ERROR &&
            (0, h.showToast)((0, h.createToast)(eU.intl.string(eU.t.AlJyIy), h.ToastType.FAILURE));
    }, [ei, el]);
    let ea = (0, u.e7)([P.ZP], () => P.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                y &&
                    Z === ek.WtW.VIDEO &&
                    ((t = await ev.ZP.blockDisplaySleep()), e && null != t && ev.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ev.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [y, Z]);
    let em = (0, eE.Z)(n, !0),
        { hasParticipantsPanel: eg } = (0, eN.Z)({ location: "ChannelCall" }),
        eb = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ey } = (0, R.ZP)(A.Z.CHANNEL_CALL),
        e_ = o - eL.oo,
        eC = P.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: ex } = (0, h.TCT)();
    return (0, r.jsx)(R.Gt, {
        value: ey,
        children: (0, r.jsx)(v.Z, {
            page: ek.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eS.B2, {
                children: (0, r.jsxs)(ew._A, {
                    children: [
                        (0, r.jsx)(eW, {
                            channel: n,
                            guild: V,
                            hasConnectPermission: Q,
                            participantsOpen: w,
                            participantsListOpen: M && eg,
                            renderExternalHeader: l,
                            appContext: g,
                            call: z,
                            popoutWindow: K,
                            popoutWindowAlwaysOnTop: X,
                            mentionCount: q,
                            selectedStream: H,
                            mode: Z,
                            inCall: y,
                            participants: C,
                            filteredParticipants: E,
                            participantsVersion: I,
                            layout: N,
                            chatOpen: D,
                            maxSidebarWidth: e_,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: Y,
                            selectedParticipant: B,
                            allActiveStreams: G,
                            useNewInviteButton: er,
                            connectedEmbeddedActivity: null != ea ? ea : void 0,
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
                            currentChannelActivities: eC,
                            theme: ex,
                        }),
                        !n.isPrivate() && (0, r.jsx)(ew.YR, {}),
                        (0, r.jsx)(eS.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
