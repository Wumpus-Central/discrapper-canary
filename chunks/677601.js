n.d(t, { Z: () => eW }), n(388685);
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
    Z = n(596040),
    T = n(617552),
    N = n(100527),
    A = n(367907),
    w = n(906732),
    R = n(213609),
    M = n(600164),
    D = n(211644),
    L = n(258609),
    k = n(446226),
    U = n(569545),
    B = n(102172),
    G = n(788983),
    H = n(928518),
    F = n(703656),
    V = n(880395),
    z = n(740492),
    W = n(793319),
    q = n(3861),
    Y = n(493754),
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
    ey = n(585483),
    e_ = n(358085),
    eC = n(998502),
    ev = n(228488),
    ex = n(358221),
    eO = n(414910),
    ej = n(887012),
    eE = n(909820),
    eS = n(493010),
    eI = n(742603),
    eP = n(71127),
    eZ = n(221888),
    eT = n(185935),
    eN = n(900211),
    eA = n(18759),
    ew = n(522651),
    eR = n(795318),
    eM = n(878752),
    eD = n(354459),
    eL = n(981631),
    ek = n(388032),
    eU = n(598411);
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
function eG(e) {
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
                eB(e, t, n[t]);
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
let eF = {
        [eL.AEg.NORMAL]: eU.normal,
        [eL.AEg.MINIMUM]: eU.minimum,
        [eL.AEg.NO_CHAT]: eU.noChat,
        [eL.AEg.FULL_SCREEN]: eU.fullScreen,
    },
    eV = {
        [eL.IlC.POPOUT]: eU.popout,
        [eL.IlC.APP]: null,
        [eL.IlC.OVERLAY]: null,
    };
class ez extends i.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.NO, this.handleFullScreenChange),
            eg.default.track(
                eL.rMx.VIDEO_LAYOUT_TOGGLED,
                eG({ video_layout: this.inPopout ? "popout" : t }, (0, A.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ev.NO, this.handleFullScreenChange),
            (this.inPopout && (0, e_.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === eL.WtW.VIDEO &&
                r === eL.WtW.VOICE &&
                (0, ev.rB)(l, this.currentDocument) &&
                (0, ev.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || i !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return e_.isPlatformEmbedded && eC.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall
            ? { mainText: ek.intl.string(ek.t.J5bXZW) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eL.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r } = this.props,
            i = t === eL.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            l = t === eL.WtW.VIDEO && r && this.popoutSupported,
            a = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            o = n.type === eL.d4z.GUILD_VOICE,
            s = e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL,
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
            return eH(eG({}, u), {
                canFullscreen: i,
                useTheme: !0,
            });
        switch (e) {
            case eL.AEg.FULL_SCREEN:
                return eH(eG({}, u), { canPopout: !this.inPopout && this.popoutOpen && u.canPopout });
            case eL.AEg.MINIMUM:
                return eH(eG({}, u), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eL.AEg.NO_CHAT:
            case eL.AEg.NORMAL:
                return eG({}, u);
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
            _ = f === eL.AEg.MINIMUM,
            C = _ || f === eL.AEg.NORMAL,
            v = i && a === eL.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                J.Z,
                eH(
                    eG(
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
                                : (0, r.jsx)(q.Z, {
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
            f = i === eL.WtW.VIDEO,
            m = e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c,
            g = eL.BRd.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: a()(eU.wrapper, eF[e], eV[o], {
                [eU.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
                [eU.video]: f,
                [eU.sidebarOpen]: l || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                m && null != p
                    ? {
                          minHeight: eD._i,
                          maxHeight: c,
                          height: p,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(h.f6W, {
                    theme: g,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: a()(eU.callContainer, l || e !== eL.AEg.FULL_SCREEN ? void 0 : eU.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(K.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                m &&
                    (0, r.jsx)(eN.Z, {
                        minHeight: eD._i,
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
                                l &&
                                    (0, r.jsx)(eS.Z, {
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
            eB(this, "_prevLayout", eL.AEg.MINIMUM),
            eB(this, "_wrapperRef", i.createRef()),
            eB(this, "_callContainerRef", i.createRef()),
            eB(this, "_channelChatRef", i.createRef()),
            eB(this, "_contentRef", i.createRef()),
            eB(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eB(this, "_lastIdleProps", null),
            eB(this, "state", { resizedHeight: z.ZP.callHeaderHeight }),
            eB(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ev.rB)(e, this.currentDocument) ||
                        this.props.layout !== eL.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eB(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== eL.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(eL.AEg.FULL_SCREEN),
                          (0, ev.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eB(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === eL.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ev.Pr)(e, this.currentDocument));
            }),
            eB(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === eL.AEg.NORMAL ? eL.AEg.NO_CHAT : eL.AEg.NORMAL);
            }),
            eB(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (m.Z.updateLayout(t.id, e, n),
                    e === eL.AEg.FULL_SCREEN && t.isPrivate() && ey.S.dispatch(eL.CkL.TEXTAREA_BLUR));
            }),
            eB(this, "handleDisconnect", () => {
                this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eB(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, R.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eD.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eB(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eD.A5.CONTEXT_MENU;
                return (0, eR.u)(e, N.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eD.fO.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eB(this, "handleContextMenu", (e, t, i, l) => {
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
                    case eD.fO.HIDDEN_STREAM:
                    case eD.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, eD.TH.STREAM),
                            (0, g.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eH(eG({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: i,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "StreamContextMenu",
                                                    e,
                                                    eD.TH.STREAM,
                                                    l,
                                                ),
                                            }),
                                        );
                                },
                                p,
                            );
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
                                        location: N.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case eL.d4z.DM:
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
                                                    eH(eG({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "DMUserContextMenu",
                                                            e,
                                                            eD.TH.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        p,
                                    );
                                case eL.d4z.GROUP_DM:
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
                                                    eH(eG({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eL.AEg.MINIMUM || d === eL.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "GroupDMUserContextMenu",
                                                            e,
                                                            eD.TH.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        p,
                                    );
                                case eL.d4z.GUILD_VOICE:
                                case eL.d4z.PUBLIC_THREAD:
                                case eL.d4z.PRIVATE_THREAD:
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
                                                        eH(eG({}, n), {
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
                                                                eD.TH.USER,
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
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: a } = this.props;
                (0, eD._5)(e) &&
                    (0, B.p9)(n, em.Z, eu.Z, ed.Z, L.Z)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === i.filter((t) => (0, U.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length &&
                        (0, y.rn)((0, U.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === eL.WtW.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? m.Z.selectParticipant(n.id, null)
                            : m.Z.selectParticipant(n.id, e.id));
            }),
            eB(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, I.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, F.uL)((0, eb.LY)(n)), G.hP(e);
                    };
                null == t || (0, E.R)() ? n() : (0, T.Z)({ onConfirm: n });
            }),
            eB(this, "handleStayOnTop", (e) => {
                (0, ew.v)(N.Z.VOICE_CONTROL_TRAY, ew.d.STAY_ON_TOP, e), G.hY(eL.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eB(this, "handleClosePopout", () => {
                G.xv(eL.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eB(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eL.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eB(this, "renderRegionSelect", () => {
                let e,
                    { call: t, channel: n, layout: i } = this.props;
                return (
                    this.inPopout ||
                        i === eL.AEg.FULL_SCREEN ||
                        null == t ||
                        n.isManaged() ||
                        (e = (0, r.jsx)(C.Z, { call: t })),
                    (0, r.jsx)(M.Z, {
                        justify: M.Z.Justify.END,
                        children: e,
                    })
                );
            }),
            eB(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL
                    ? (0, r.jsx)(W.ZP, {
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
                    appContext: i,
                    useNewInviteButton: l,
                    selectedParticipant: o,
                    shouldUseVoiceEffectsActionBar: s,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === eL.AEg.NO_CHAT ? $.Z.Directions.UP : $.Z.Directions.DOWN,
                    p = [eL.AEg.FULL_SCREEN, eL.AEg.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === eD.fO.STREAM),
                    m =
                        e === eL.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eL.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: b } = this.viewProperties,
                    y = l
                        ? (0, r.jsx)(Y.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eD.fO.STREAM ? (0, U.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eD.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
                          })
                        : (0, r.jsx)(et.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eD.fO.STREAM ? (0, U.my)(o.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !s ? y : null,
                        g
                            ? (0, r.jsxs)(M.Z, {
                                  className: eU.iconWrapper,
                                  align: M.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)($.Z, {
                                          label: p ? ek.intl.string(ek.t.kkKapK) : ek.intl.string(ek.t["5MstTk"]),
                                          direction: d,
                                          className: eU.leftTrayIcon,
                                          onClick: () => {
                                              (0, ew.v)(N.Z.VOICE_CONTROL_TRAY, ew.d.CHAT, p), m();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, r.jsx)(h.mAB, {
                                                className: eU.badge,
                                                count: t,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        ((null == o ? void 0 : o.type) !== eD.fO.STREAM &&
                            (null == o ? void 0 : o.type) !== eD.fO.ACTIVITY) ||
                        s
                            ? null
                            : (0, r.jsx)(X.Z, {
                                  children: (0, r.jsx)(eZ.Z, {
                                      className: a()(eU.leftTrayIcon, eU.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eL.AEg.FULL_SCREEN,
                                  }),
                              }),
                        s &&
                            (0, r.jsx)(eM.Z, {
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
                        selectedParticipant: i,
                    } = this.props,
                    { canFullscreen: l, canStayOnTop: a, canPopout: o, useTheme: s } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eD.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(ei.Z, {
                                  context: (0, eO.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eU.volumeSlider,
                                  className: eU.rightTrayIcon,
                                  location: N.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        a
                            ? (0, r.jsx)(er.Z, {
                                  className: eU.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        o
                            ? (0, r.jsx)(en.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eU.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, ew.v)(N.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, ew.v)(N.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        l
                            ? (0, r.jsx)(ee.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eU.rightTrayIcon,
                                  onClick: () => {
                                      (0, ew.v)(
                                          N.Z.VOICE_CONTROL_TRAY,
                                          ew.d.FULL_SCREEN,
                                          this.props.layout !== eL.AEg.FULL_SCREEN,
                                      ),
                                          this.handleFullScreen();
                                  },
                              })
                            : null,
                    ],
                });
            }),
            eB(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eE.ZP, {
                          children: (0, r.jsx)(Q.Z, {
                              className: eU.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eB(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eA.ZP, {
                    children: (0, r.jsx)(el.Z, {
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
                        appContext: i,
                        chatOpen: l,
                        inCall: a,
                    } = this.props,
                    { useExternalHeader: o, canSelectRegion: s, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, r.jsxs)(X.Z, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: eU.headerWrapper,
                                  children: o
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, r.jsx)(eI.Z, {
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
let eW = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a } = e,
        { width: o = 0, ref: s } = (0, x.ZP)(),
        { width: c = 0, height: p = 0, ref: f } = (0, x.ZP)(),
        { ref: m } = (0, x.ZP)(),
        g = (0, j.bp)(),
        b = (0, k.Z)(),
        y = (0, u.e7)([eh.Z], () => {
            var e;
            return (null != (e = null == b ? void 0 : b.channelId) ? e : eh.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: C,
            filteredParticipants: E,
            participantsVersion: I,
            mode: T,
            layout: A,
            participantsOpen: R,
            participantsListOpen: M,
            chatOpen: U,
            selectedParticipant: B,
        } = (0, u.cj)([ex.Z], () => {
            let e = g === eL.IlC.POPOUT,
                t = ex.Z.getMode(n.id);
            e && (t = eL.WtW.VIDEO);
            let r = t === eL.WtW.VIDEO ? ex.Z.getLayout(n.id, g) : eL.AEg.MINIMUM;
            return (
                e && r !== eL.AEg.FULL_SCREEN && (r = eL.AEg.NO_CHAT),
                {
                    mode: t,
                    layout: r,
                    selectedParticipant: t !== eL.WtW.VOICE ? ex.Z.getSelectedParticipant(n.id) : null,
                    participants: ex.Z.getParticipants(n.id),
                    filteredParticipants: ex.Z.getFilteredParticipants(n.id),
                    participantsOpen: ex.Z.getParticipantsOpen(n.id),
                    chatOpen: ex.Z.getChatOpen(n.id),
                    participantsListOpen: ex.Z.getParticipantsListOpen(n.id),
                    participantsVersion: ex.Z.getParticipantsVersion(n.id),
                }
            );
        }, [g, n.id]),
        G = (0, u.Wu)([ea.Z], () => ea.Z.getAllActiveStreams()),
        { selectedStream: F } = (0, u.cj)(
            [ea.Z],
            () => ({ selectedStream: null != B ? ea.Z.getActiveStreamForStreamKey(B.id) : null }),
            [B],
        ),
        V = (0, u.e7)([eu.Z], () => eu.Z.getGuild(n.getGuildId())),
        W = (0, u.e7)([ec.Z], () => ec.Z.getCall(n.id), [n.id]),
        q = (0, u.e7)([ep.ZP], () => ep.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, u.e7)([eo.default], () => eo.default.getId()),
        { popoutWindow: K, popoutWindowAlwaysOnTop: X } = (0, u.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT),
        })),
        Q = (0, u.e7)([ed.Z], () => ed.Z.can(eL.Plq.CONNECT, n)),
        J = (0, u.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        $ = (0, u.e7)([L.Z], () => L.Z.getAwaitingRemoteSessionInfo()),
        ee = (0, u.e7)([z.ZP], () => z.ZP.callHeaderHeight),
        et = i.useCallback((e) => {
            _.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = null != (t = null == V ? void 0 : V.id) ? t : null,
        er = (0, Z.Z)(en, n.id),
        ei = (0, u.e7)([S.Z], () => S.Z.getFetchState(), []),
        el = (0, O.Z)(ei);
    i.useEffect(() => {
        ei === S.O.ERROR &&
            el !== S.O.ERROR &&
            (0, h.showToast)((0, h.createToast)(ek.intl.string(ek.t.AlJyIy), h.ToastType.FAILURE));
    }, [ei, el]);
    let ef = (0, u.e7)([P.ZP], () => P.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                y &&
                    T === eL.WtW.VIDEO &&
                    ((t = await eC.ZP.blockDisplaySleep()), e && null != t && eC.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eC.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [y, T]);
    let em = (0, ej.Z)(n, !0),
        { hasParticipantsPanel: eg } = (0, eT.Z)({ location: "ChannelCall" }),
        eb = (0, D.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ey } = (0, w.ZP)(N.Z.CHANNEL_CALL),
        e_ = o - eD.oo,
        ev = P.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eO } = (0, h.TCT)();
    return (0, r.jsx)(w.Gt, {
        value: ey,
        children: (0, r.jsx)(v.Z, {
            page: eL.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eE.B2, {
                children: (0, r.jsxs)(eA._A, {
                    children: [
                        (0, r.jsx)(ez, {
                            channel: n,
                            guild: V,
                            hasConnectPermission: Q,
                            participantsOpen: R,
                            participantsListOpen: M && eg,
                            renderExternalHeader: l,
                            appContext: g,
                            call: W,
                            popoutWindow: K,
                            popoutWindowAlwaysOnTop: X,
                            mentionCount: q,
                            selectedStream: F,
                            mode: T,
                            inCall: y,
                            participants: C,
                            filteredParticipants: E,
                            participantsVersion: I,
                            layout: A,
                            chatOpen: U,
                            maxSidebarWidth: e_,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: Y,
                            selectedParticipant: B,
                            allActiveStreams: G,
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
                            theme: eO,
                        }),
                        !n.isPrivate() && (0, r.jsx)(eA.YR, {}),
                        (0, r.jsx)(eE.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
