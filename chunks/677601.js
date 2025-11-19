n.d(t, { Z: () => eW }), n(388685);
var i = n(54381),
    r = n(473749),
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
    C = n(153867),
    v = n(410575),
    _ = n(393238),
    x = n(110924),
    j = n(636449),
    O = n(115130),
    E = n(566620),
    S = n(317381),
    P = n(596040),
    I = n(617552),
    Z = n(100527),
    T = n(367907),
    N = n(906732),
    A = n(213609),
    w = n(600164),
    M = n(211644),
    R = n(258609),
    L = n(446226),
    k = n(569545),
    D = n(102172),
    U = n(728285),
    B = n(788983),
    H = n(928518),
    V = n(703656),
    F = n(880395),
    G = n(740492),
    z = n(793319),
    W = n(3861),
    q = n(493754),
    K = n(937995),
    Y = n(618158),
    X = n(880831),
    J = n(73563),
    Q = n(751843),
    $ = n(268353),
    ee = n(786915),
    et = n(800965),
    en = n(107169),
    ei = n(891551),
    er = n(488785),
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
    eC = n(998502),
    ev = n(228488),
    e_ = n(358221),
    ex = n(414910),
    ej = n(887012),
    eO = n(909820),
    eE = n(493010),
    eS = n(742603),
    eP = n(71127),
    eI = n(221888),
    eZ = n(185935),
    eT = n(191062),
    eN = n(900211),
    eA = n(18759),
    ew = n(522651),
    eM = n(795318),
    eR = n(878752),
    eL = n(354459),
    ek = n(981631),
    eD = n(388032),
    eU = n(563712);
function eB(e, t, n) {
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                eB(e, t, n[t]);
            });
    }
    return e;
}
function eV(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eF = {
        [ek.AEg.NORMAL]: eU.normal,
        [ek.AEg.MINIMUM]: eU.minimum,
        [ek.AEg.NO_CHAT]: eU.noChat,
        [ek.AEg.FULL_SCREEN]: eU.fullScreen,
    },
    eG = {
        [ek.IlC.POPOUT]: eU.popout,
        [ek.IlC.APP]: null,
        [ek.IlC.OVERLAY]: null,
        [ek.IlC.CALL_TILE_POPOUT]: null,
    };
class ez extends r.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.NO, this.handleFullScreenChange),
            em.default.track(
                ek.rMx.VIDEO_LAYOUT_TOGGLED,
                eH({ video_layout: this.inPopout ? "popout" : t }, (0, T.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ev.NO, this.handleFullScreenChange),
            (this.inPopout && (0, ey.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: r } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === ek.WtW.VIDEO &&
                i === ek.WtW.VOICE &&
                (0, ev.rB)(l, this.currentDocument) &&
                (0, ev.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || r !== e.layout)
        ) {
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
        return this.popoutOpen && !this.inPopout && this.props.inCall
            ? { mainText: eD.intl.string(eD.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === ek.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: r } = this.props,
            l = t === ek.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === ek.WtW.VIDEO && i && this.popoutSupported && r,
            o = t !== ek.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === ek.d4z.GUILD_VOICE,
            c = e === ek.AEg.MINIMUM || e === ek.AEg.NORMAL,
            u = this.inPopout && this.nativePopoutSupported,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: c,
                canInvite: s,
                canPopout: a,
                canFullscreen: l,
                canSelectRegion: n.isPrivate(),
                canChangeLayout: o,
                canStayOnTop: u,
            };
        if (!i)
            return eV(eH({}, d), {
                canFullscreen: l,
                useTheme: !0,
            });
        switch (e) {
            case ek.AEg.FULL_SCREEN:
                return eV(eH({}, d), { canPopout: !this.inPopout && this.popoutOpen && d.canPopout });
            case ek.AEg.MINIMUM:
                return eV(eH({}, d), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case ek.AEg.NO_CHAT:
            case ek.AEg.NORMAL:
                return eH({}, d);
        }
    }
    renderContent(e) {
        var t;
        let {
                popoutType: n,
                selectedParticipant: r,
                inCall: l,
                hasConnectPermission: a,
                mode: o,
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
            C = f === ek.AEg.MINIMUM,
            v = C || f === ek.AEg.NORMAL,
            _ = l && o === ek.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(
                J.Z,
                eV(
                    eH(
                        {
                            renderHeader: this.renderHeader,
                            renderBottomLeft: this.renderBottomLeft,
                            renderBottomCenter: this.renderBottomCenter,
                            renderBottomRight: this.renderBottomRight,
                            renderChatToasts: p.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                            renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                        },
                        e,
                    ),
                    {
                        screenMessage: this.screenMessage,
                        disableGradients: !l || C,
                        idle: !m && l && !C && e.idle,
                        children:
                            l && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, i.jsx)(W.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      channel: p,
                                      hasConnectPermission: a,
                                      guild: h,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: _ ? r : null,
                                      layout: f,
                                      idle: e.idle,
                                      mode: o,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: s && (!v || x),
                                      popoutType: n,
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
                mode: r,
                chatOpen: l,
                appContext: o,
                maxSidebarWidth: s,
                maxHeight: c,
                inCall: u,
                participantsListOpen: d,
            } = this.props,
            { resizedHeight: p } = this.state,
            f = r === ek.WtW.VIDEO,
            m = e !== ek.AEg.NO_CHAT && e !== ek.AEg.FULL_SCREEN && null != c,
            g = ek.BRd.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(eU.wrapper, eF[e], eG[o], {
                [eU.poppedOut]: this.popoutOpen && !this.inPopout && e !== ek.AEg.NO_CHAT && t.isPrivate(),
                [eU.video]: f,
                [eU.sidebarOpen]: l || d,
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
                (0, i.jsx)(h.f6W, {
                    theme: g,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(eU.callContainer, l || e !== ek.AEg.FULL_SCREEN ? void 0 : eU.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(K.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                m &&
                    (0, i.jsx)(eN.Z, {
                        minHeight: eL._i,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eU.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                l &&
                                    (0, i.jsx)(eE.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s,
                                    }),
                                d &&
                                    (0, i.jsx)(eP.Z, {
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
            eB(this, "_prevLayout", ek.AEg.MINIMUM),
            eB(this, "_wrapperRef", r.createRef()),
            eB(this, "_callContainerRef", r.createRef()),
            eB(this, "_channelChatRef", r.createRef()),
            eB(this, "_contentRef", r.createRef()),
            eB(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eB(this, "_lastIdleProps", null),
            eB(this, "state", { resizedHeight: G.ZP.callHeaderHeight }),
            eB(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ev.rB)(e, this.currentDocument) ||
                        this.props.layout !== ek.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eB(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== ek.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(ek.AEg.FULL_SCREEN),
                          (0, ev.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eB(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === ek.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ev.Pr)(e, this.currentDocument));
            }),
            eB(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === ek.AEg.NORMAL ? ek.AEg.NO_CHAT : ek.AEg.NORMAL);
            }),
            eB(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e &&
                    (m.Z.updateLayout(t.id, e, n),
                    e === ek.AEg.FULL_SCREEN && t.isPrivate() && eb.S.dispatch(ek.CkL.TEXTAREA_BLUR));
            }),
            eB(this, "handleDisconnect", () => {
                this.props.layout === ek.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eB(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, A.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eL.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eB(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eL.A5.CONTEXT_MENU;
                return (0, eM.u)(e, Z.Z.CHANNEL_CALL, {
                    entrypoint: i,
                    tileType: n,
                    targetUserId: t.type !== eL.fO.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eB(this, "handleContextMenu", (e, t, r, l) => {
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
                                        (0, i.jsx)(
                                            t,
                                            eV(eH({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: r,
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
                        let h = eh.default.getUser(e.id);
                        if (null != h) {
                            if (r)
                                return (0, F.D)(t, h, c, p, (e, t) =>
                                    (0, eM.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eL.A5.THREE_DOT,
                                        tileType: eL.TH.USER,
                                        targetUserId: h.id,
                                        location: Z.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case ek.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("66165"),
                                                n.e("56826"),
                                                n.e("10493"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    t,
                                                    eV(eH({}, n), {
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
                                                n.e("66165"),
                                                n.e("92775"),
                                            ]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    t,
                                                    eV(eH({}, n), {
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
                                                    n.e("66165"),
                                                    n.e("8982"),
                                                    n.e("7717"),
                                                    n.e("87157"),
                                                ]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, i.jsx)(
                                                        t,
                                                        eV(eH({}, n), {
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
            eB(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eB(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: r, inCall: l, mode: a } = this.props;
                (0, eL._5)(e) &&
                    (0, D.p9)(n, ef.Z, ec.Z, eu.Z, R.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === r.filter((t) => (0, k.V9)(t) === e.id && t.state !== ek.jm8.ENDED).length &&
                        (0, y.rn)((0, k.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === ek.WtW.VIDEO &&
                        ((null == i ? void 0 : i.id) === e.id
                            ? m.Z.selectParticipant(n.id, null)
                            : m.Z.selectParticipant(n.id, e.id));
            }),
            eB(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, E.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, V.uL)((0, eg.LY)(n)), B.hP(e);
                    };
                null == t || (0, j.R)() ? n() : (0, I.Z)({ onConfirm: n });
            }),
            eB(this, "handleStayOnTop", (e) => {
                (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.STAY_ON_TOP, e), B.hY(ek.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eB(this, "handleClosePopout", () => {
                B.xv(ek.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eB(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    r = n === ek.AEg.FULL_SCREEN;
                ((!r && (null == i ? void 0 : i.id) !== e.id) || (r && (null == i ? void 0 : i.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eB(this, "renderRegionSelect", () => {
                let e,
                    { call: t, channel: n, layout: r } = this.props;
                return (
                    this.inPopout ||
                        r === ek.AEg.FULL_SCREEN ||
                        null == t ||
                        n.isManaged() ||
                        (e = (0, i.jsx)(eT.Z, { call: t })),
                    (0, i.jsx)(w.Z, {
                        justify: w.Z.Justify.END,
                        children: e,
                    })
                );
            }),
            eB(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ek.AEg.MINIMUM || n === ek.AEg.NORMAL
                    ? (0, i.jsx)(z.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps,
                      })
                    : null;
            }),
            eB(this, "renderBottomLeft", () => {
                let {
                    layout: e,
                    mentionCount: t,
                    channel: n,
                    appContext: r,
                    useNewInviteButton: l,
                    selectedParticipant: o,
                    shouldUseVoiceEffectsActionBar: s,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === ek.AEg.NO_CHAT ? Q.Z.Directions.UP : Q.Z.Directions.DOWN,
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
                        ? (0, i.jsx)(q.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eL.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eL.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: r,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          })
                        : (0, i.jsx)(ee.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eL.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        b && !s ? y : null,
                        g
                            ? (0, i.jsxs)(w.Z, {
                                  className: eU.iconWrapper,
                                  align: w.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(Q.Z, {
                                          label: p ? eD.intl.string(eD.t.kkKapG) : eD.intl.string(eD.t["5MstTl"]),
                                          direction: d,
                                          className: eU.leftTrayIcon,
                                          onClick: () => {
                                              (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.CHAT, p), m();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.mAB, {
                                                className: eU.badge,
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
                            : (0, i.jsx)(Y.Z, {
                                  children: (0, i.jsx)(eI.Z, {
                                      className: a()(eU.leftTrayIcon, eU.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ek.AEg.FULL_SCREEN,
                                  }),
                              }),
                        s &&
                            (0, i.jsx)(eR.Z, {
                                channel: n,
                                hasActiveStream: f,
                            }),
                    ],
                });
            }),
            eB(this, "renderBottomRight", () => {
                let {
                        popoutWindow: e,
                        popoutWindowAlwaysOnTop: t,
                        currentUserId: n,
                        selectedParticipant: r,
                    } = this.props,
                    { canFullscreen: l, canStayOnTop: a, canPopout: o, useTheme: s } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != r && r.type !== eL.fO.ACTIVITY && r.user.id !== n
                            ? (0, i.jsx)(ei.Z, {
                                  context: (0, ex.Z)(r.type),
                                  userId: r.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eU.volumeSlider,
                                  className: eU.rightTrayIcon,
                                  location: Z.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        a
                            ? (0, i.jsx)(en.Z, {
                                  className: eU.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        o
                            ? (0, i.jsx)(et.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eU.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        l
                            ? (0, i.jsx)($.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eU.rightTrayIcon,
                                  onClick: () => {
                                      (0, ew.v)(
                                          Z.Z.VOICE_CONTROL_TRAY,
                                          ew.d.FULL_SCREEN,
                                          this.props.layout !== ek.AEg.FULL_SCREEN,
                                      ),
                                          this.handleFullScreen();
                                  },
                              })
                            : null,
                    ],
                });
            }),
            eB(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: r } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && r)
                    ? null
                    : (0, i.jsx)(eO.ZP, {
                          children: (0, i.jsx)(X.Z, {
                              className: eU.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eB(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eA.ZP, {
                    children: (0, i.jsx)(er.Z, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eB(this, "renderHeader", () => {
                let {
                        renderExternalHeader: e,
                        channel: t,
                        guild: n,
                        appContext: r,
                        chatOpen: l,
                        inCall: a,
                    } = this.props,
                    { useExternalHeader: o, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(Y.Z, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: eU.headerWrapper,
                                  children: o
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eS.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: r,
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
let eW = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a, canPopout: o = !0, popoutType: s } = e,
        { width: c = 0, ref: p } = (0, _.ZP)(),
        { width: f = 0, height: m = 0, ref: g } = (0, _.ZP)(),
        { ref: b } = (0, _.ZP)(),
        y = (0, U.bp)(),
        j = (0, L.Z)(),
        E = (0, u.e7)([ep.Z], () => {
            var e;
            return (null != (e = null == j ? void 0 : j.channelId) ? e : ep.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: I,
            filteredParticipants: T,
            participantsVersion: A,
            mode: w,
            layout: k,
            participantsOpen: D,
            participantsListOpen: B,
            chatOpen: V,
            selectedParticipant: F,
        } = (0, u.cj)([e_.Z], () => {
            let e = y === ek.IlC.POPOUT,
                t = e_.Z.getMode(n.id);
            e && (t = ek.WtW.VIDEO);
            let i = t === ek.WtW.VIDEO ? e_.Z.getLayout(n.id, y) : ek.AEg.MINIMUM;
            return (
                e && i !== ek.AEg.FULL_SCREEN && (i = ek.AEg.NO_CHAT),
                {
                    mode: t,
                    layout: i,
                    selectedParticipant: t !== ek.WtW.VOICE ? e_.Z.getSelectedParticipant(n.id) : null,
                    participants: e_.Z.getParticipants(n.id),
                    filteredParticipants: e_.Z.getFilteredParticipants(n.id),
                    participantsOpen: e_.Z.getParticipantsOpen(n.id),
                    chatOpen: e_.Z.getChatOpen(n.id),
                    participantsListOpen: e_.Z.getParticipantsListOpen(n.id),
                    participantsVersion: e_.Z.getParticipantsVersion(n.id),
                }
            );
        }, [y, n.id]),
        z = (0, u.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        { selectedStream: W } = (0, u.cj)(
            [el.Z],
            () => ({ selectedStream: null != F ? el.Z.getActiveStreamForStreamKey(F.id) : null }),
            [F],
        ),
        q = (0, u.e7)([ec.Z], () => ec.Z.getGuild(n.getGuildId())),
        K = (0, u.e7)([es.Z], () => es.Z.getCall(n.id), [n.id]),
        Y = (0, u.e7)([ed.ZP], () => ed.ZP.getMentionCount(n.id), [n.id]),
        X = (0, u.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: J, popoutWindowAlwaysOnTop: Q } = (0, u.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(ek.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(ek.KJ3.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, u.e7)([eu.Z], () => eu.Z.can(ek.Plq.CONNECT, n)),
        ee = (0, u.e7)([eo.Z], () => eo.Z.getToastsEnabled(n.id)),
        et = (0, u.e7)([R.default], () => R.default.getAwaitingRemoteSessionInfo()),
        en = (0, u.e7)([G.ZP], () => G.ZP.callHeaderHeight),
        ei = r.useCallback((e) => {
            C.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        er = null != (t = null == q ? void 0 : q.id) ? t : null,
        eh = (0, P.Z)(er, n.id),
        ef = (0, u.e7)([O.Z], () => O.Z.getFetchState(), []),
        em = (0, x.Z)(ef);
    r.useEffect(() => {
        ef === O.O.ERROR &&
            em !== O.O.ERROR &&
            (0, h.showToast)((0, h.createToast)(eD.intl.string(eD.t["AlJyI+"]), h.ToastType.FAILURE));
    }, [ef, em]);
    let eg = (0, u.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    r.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                E &&
                    w === ek.WtW.VIDEO &&
                    ((t = await eC.ZP.blockDisplaySleep()), e && null != t && eC.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eC.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [E, w]);
    let eb = (0, ej.Z)(n, !0),
        { hasParticipantsPanel: ey } = (0, eZ.Z)({ location: "ChannelCall" }),
        ev = (0, M.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ex } = (0, N.ZP)(Z.Z.CHANNEL_CALL),
        eE = c - eL.oo,
        eS = S.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eP } = (0, h.TCT)();
    return (0, i.jsx)(N.Gt, {
        value: ex,
        children: (0, i.jsx)(v.Z, {
            page: ek.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eO.B2, {
                children: (0, i.jsxs)(eA._A, {
                    children: [
                        (0, i.jsx)(ez, {
                            channel: n,
                            guild: q,
                            hasConnectPermission: $,
                            participantsOpen: D,
                            participantsListOpen: B && ey,
                            renderExternalHeader: l,
                            appContext: y,
                            call: K,
                            popoutWindow: J,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: Y,
                            selectedStream: W,
                            mode: w,
                            inCall: E,
                            participants: I,
                            filteredParticipants: T,
                            participantsVersion: A,
                            layout: k,
                            chatOpen: V,
                            maxSidebarWidth: eE,
                            shouldUseVoiceEffectsActionBar: eb,
                            currentUserId: X,
                            selectedParticipant: F,
                            allActiveStreams: z,
                            useNewInviteButton: eh,
                            connectedEmbeddedActivity: null != eg ? eg : void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: p,
                            callContainerDimensions: {
                                width: f,
                                height: m,
                            },
                            callContainerRef: g,
                            channelChatRef: b,
                            width: c,
                            maxHeight: a,
                            forceShowControls: ev,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eS,
                            theme: eP,
                            canPopout: o,
                            popoutType: s,
                        }),
                        !n.isPrivate() && (0, i.jsx)(eA.YR, {}),
                        (0, i.jsx)(eO.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
