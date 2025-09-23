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
    C = n(153867),
    _ = n(944543),
    v = n(410575),
    x = n(393238),
    O = n(110924),
    j = n(40851),
    E = n(636449),
    S = n(115130),
    P = n(566620),
    I = n(317381),
    Z = n(596040),
    T = n(617552),
    N = n(100527),
    A = n(367907),
    w = n(906732),
    M = n(213609),
    R = n(600164),
    k = n(211644),
    L = n(258609),
    D = n(446226),
    U = n(569545),
    B = n(102172),
    F = n(788983),
    V = n(928518),
    H = n(703656),
    G = n(880395),
    z = n(740492),
    W = n(793319),
    q = n(3861),
    Y = n(493754),
    K = n(937995),
    X = n(618158),
    J = n(880831),
    Q = n(73563),
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
    eC = n(358085),
    e_ = n(998502),
    ev = n(228488),
    ex = n(358221),
    eO = n(414910),
    ej = n(887012),
    eE = n(909820),
    eS = n(493010),
    eP = n(742603),
    eI = n(71127),
    eZ = n(221888),
    eT = n(185935),
    eN = n(900211),
    eA = n(18759),
    ew = n(522651),
    eM = n(795318),
    eR = n(878752),
    ek = n(354459),
    eL = n(981631),
    eD = n(388032),
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
function eF(e) {
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
function eV(e, t) {
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
        [eL.AEg.NORMAL]: eU.normal,
        [eL.AEg.MINIMUM]: eU.minimum,
        [eL.AEg.NO_CHAT]: eU.noChat,
        [eL.AEg.FULL_SCREEN]: eU.fullScreen,
    },
    eG = {
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
                eF({ video_layout: this.inPopout ? "popout" : t }, (0, A.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ev.NO, this.handleFullScreenChange),
            (this.inPopout && (0, eC.isMac)()) || this.maybeLeaveFullScreen();
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
        return eC.isPlatformEmbedded && e_.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
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
            ? { mainText: eD.intl.string(eD.t.J5bXZW) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eL.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r, canPopout: i } = this.props,
            l = t === eL.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            a = t === eL.WtW.VIDEO && r && this.popoutSupported && i,
            o = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            s = n.type === eL.d4z.GUILD_VOICE,
            c = e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL,
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
        if (!r)
            return eV(eF({}, d), {
                canFullscreen: l,
                useTheme: !0,
            });
        switch (e) {
            case eL.AEg.FULL_SCREEN:
                return eV(eF({}, d), { canPopout: !this.inPopout && this.popoutOpen && d.canPopout });
            case eL.AEg.MINIMUM:
                return eV(eF({}, d), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eL.AEg.NO_CHAT:
            case eL.AEg.NORMAL:
                return eF({}, d);
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
            C = f === eL.AEg.MINIMUM,
            _ = C || f === eL.AEg.NORMAL,
            v = i && a === eL.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                Q.Z,
                eV(
                    eF(
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
                        disableGradients: !i || C,
                        idle: !m && i && !C && e.idle,
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
                                      showParticipants: s && (!_ || x),
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
            className: a()(eU.wrapper, eH[e], eG[o], {
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
                          minHeight: ek._i,
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
                        minHeight: ek._i,
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
                                    (0, r.jsx)(eI.Z, {
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
                (0, M.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== ek.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eB(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ek.A5.CONTEXT_MENU;
                return (0, eM.u)(e, N.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== ek.fO.ACTIVITY ? t.user.id : void 0,
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
                    case ek.fO.HIDDEN_STREAM:
                    case ek.fO.STREAM:
                        this.trackCallTileContextMenuImpression(e, ek.TH.STREAM),
                            (0, g.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eV(eF({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: i,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "StreamContextMenu",
                                                    e,
                                                    ek.TH.STREAM,
                                                    l,
                                                ),
                                            }),
                                        );
                                },
                                p,
                            );
                        return;
                    case ek.fO.USER:
                        this.trackCallTileContextMenuImpression(e, ek.TH.USER);
                        let h = ef.default.getUser(e.id);
                        if (null != h) {
                            if (i)
                                return (0, G.D)(t, h, c, p, (e, t) =>
                                    (0, eM.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: ek.A5.THREE_DOT,
                                        tileType: ek.TH.USER,
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
                                                n.e("68085"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eV(eF({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "DMUserContextMenu",
                                                            e,
                                                            ek.TH.USER,
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
                                                    eV(eF({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eL.AEg.MINIMUM || d === eL.AEg.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "GroupDMUserContextMenu",
                                                            e,
                                                            ek.TH.USER,
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
                                                    n.e("96306"),
                                                ]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eV(eF({}, n), {
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
                                                                ek.TH.USER,
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
                (0, ek._5)(e) &&
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
                        (null == t ? void 0 : t.applicationId) != null && (await (0, P.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, H.uL)((0, eb.LY)(n)), F.hP(e);
                    };
                null == t || (0, E.R)() ? n() : (0, T.Z)({ onConfirm: n });
            }),
            eB(this, "handleStayOnTop", (e) => {
                (0, ew.v)(N.Z.VOICE_CONTROL_TRAY, ew.d.STAY_ON_TOP, e), F.hY(eL.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eB(this, "handleClosePopout", () => {
                F.xv(eL.KJ3.CHANNEL_CALL_POPOUT);
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
                        (e = (0, r.jsx)(_.Z, { call: t })),
                    (0, r.jsx)(R.Z, {
                        justify: R.Z.Justify.END,
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
                    f = u.some((e) => e.type === ek.fO.STREAM),
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
                              stream: (null == o ? void 0 : o.type) === ek.fO.STREAM ? (0, U.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === ek.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
                          })
                        : (0, r.jsx)(et.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === ek.fO.STREAM ? (0, U.my)(o.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !s ? y : null,
                        g
                            ? (0, r.jsxs)(R.Z, {
                                  className: eU.iconWrapper,
                                  align: R.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)($.Z, {
                                          label: p ? eD.intl.string(eD.t.kkKapK) : eD.intl.string(eD.t["5MstTk"]),
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
                        ((null == o ? void 0 : o.type) !== ek.fO.STREAM &&
                            (null == o ? void 0 : o.type) !== ek.fO.ACTIVITY) ||
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
                            (0, r.jsx)(eR.Z, {
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
                        null != i && i.type !== ek.fO.ACTIVITY && i.user.id !== n
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
                          children: (0, r.jsx)(J.Z, {
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
let eW = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a, canPopout: o = !0 } = e,
        { width: s = 0, ref: c } = (0, x.ZP)(),
        { width: p = 0, height: f = 0, ref: m } = (0, x.ZP)(),
        { ref: g } = (0, x.ZP)(),
        b = (0, j.bp)(),
        y = (0, D.Z)(),
        _ = (0, u.e7)([eh.Z], () => {
            var e;
            return (null != (e = null == y ? void 0 : y.channelId) ? e : eh.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: E,
            filteredParticipants: P,
            participantsVersion: T,
            mode: A,
            layout: M,
            participantsOpen: R,
            participantsListOpen: U,
            chatOpen: B,
            selectedParticipant: F,
        } = (0, u.cj)([ex.Z], () => {
            let e = b === eL.IlC.POPOUT,
                t = ex.Z.getMode(n.id);
            e && (t = eL.WtW.VIDEO);
            let r = t === eL.WtW.VIDEO ? ex.Z.getLayout(n.id, b) : eL.AEg.MINIMUM;
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
        }, [b, n.id]),
        H = (0, u.Wu)([ea.Z], () => ea.Z.getAllActiveStreams()),
        { selectedStream: G } = (0, u.cj)(
            [ea.Z],
            () => ({ selectedStream: null != F ? ea.Z.getActiveStreamForStreamKey(F.id) : null }),
            [F],
        ),
        W = (0, u.e7)([eu.Z], () => eu.Z.getGuild(n.getGuildId())),
        q = (0, u.e7)([ec.Z], () => ec.Z.getCall(n.id), [n.id]),
        Y = (0, u.e7)([ep.ZP], () => ep.ZP.getMentionCount(n.id), [n.id]),
        K = (0, u.e7)([eo.default], () => eo.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: J } = (0, u.cj)([V.Z], () => ({
            popoutWindow: V.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: V.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT),
        })),
        Q = (0, u.e7)([ed.Z], () => ed.Z.can(eL.Plq.CONNECT, n)),
        $ = (0, u.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        ee = (0, u.e7)([L.Z], () => L.Z.getAwaitingRemoteSessionInfo()),
        et = (0, u.e7)([z.ZP], () => z.ZP.callHeaderHeight),
        en = i.useCallback((e) => {
            C.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        er = null != (t = null == W ? void 0 : W.id) ? t : null,
        ei = (0, Z.Z)(er, n.id),
        el = (0, u.e7)([S.Z], () => S.Z.getFetchState(), []),
        ef = (0, O.Z)(el);
    i.useEffect(() => {
        el === S.O.ERROR &&
            ef !== S.O.ERROR &&
            (0, h.showToast)((0, h.createToast)(eD.intl.string(eD.t.AlJyIy), h.ToastType.FAILURE));
    }, [el, ef]);
    let em = (0, u.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ &&
                    A === eL.WtW.VIDEO &&
                    ((t = await e_.ZP.blockDisplaySleep()), e && null != t && e_.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? e_.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, A]);
    let eg = (0, ej.Z)(n, !0),
        { hasParticipantsPanel: eb } = (0, eT.Z)({ location: "ChannelCall" }),
        ey = (0, k.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eC } = (0, w.ZP)(N.Z.CHANNEL_CALL),
        ev = s - ek.oo,
        eO = I.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eS } = (0, h.TCT)();
    return (0, r.jsx)(w.Gt, {
        value: eC,
        children: (0, r.jsx)(v.Z, {
            page: eL.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eE.B2, {
                children: (0, r.jsxs)(eA._A, {
                    children: [
                        (0, r.jsx)(ez, {
                            channel: n,
                            guild: W,
                            hasConnectPermission: Q,
                            participantsOpen: R,
                            participantsListOpen: U && eb,
                            renderExternalHeader: l,
                            appContext: b,
                            call: q,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: J,
                            mentionCount: Y,
                            selectedStream: G,
                            mode: A,
                            inCall: _,
                            participants: E,
                            filteredParticipants: P,
                            participantsVersion: T,
                            layout: M,
                            chatOpen: B,
                            maxSidebarWidth: ev,
                            shouldUseVoiceEffectsActionBar: eg,
                            currentUserId: K,
                            selectedParticipant: F,
                            allActiveStreams: H,
                            useNewInviteButton: ei,
                            connectedEmbeddedActivity: null != em ? em : void 0,
                            showChatToasts: $,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: c,
                            callContainerDimensions: {
                                width: p,
                                height: f,
                            },
                            callContainerRef: m,
                            channelChatRef: g,
                            width: s,
                            maxHeight: a,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: eO,
                            theme: eS,
                            canPopout: o,
                        }),
                        !n.isPrivate() && (0, r.jsx)(eA.YR, {}),
                        (0, r.jsx)(eE.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
