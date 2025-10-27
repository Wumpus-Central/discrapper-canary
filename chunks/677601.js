n.d(t, { Z: () => eW }), n(388685);
var i = n(951288),
    r = n(647438),
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
    C = n(872810),
    y = n(153867),
    _ = n(944543),
    v = n(410575),
    x = n(393238),
    O = n(110924),
    j = n(636449),
    E = n(115130),
    S = n(566620),
    P = n(317381),
    I = n(596040),
    Z = n(617552),
    T = n(100527),
    N = n(367907),
    A = n(906732),
    w = n(213609),
    M = n(600164),
    R = n(211644),
    L = n(258609),
    D = n(446226),
    k = n(569545),
    U = n(102172),
    B = n(728285),
    H = n(788983),
    F = n(928518),
    V = n(703656),
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
    ei = n(107169),
    er = n(891551),
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
    eC = n(585483),
    ey = n(358085),
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
    eL = n(354459),
    eD = n(981631),
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
function eF(e, t) {
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
let eV = {
        [eD.AEg.NORMAL]: eU.normal,
        [eD.AEg.MINIMUM]: eU.minimum,
        [eD.AEg.NO_CHAT]: eU.noChat,
        [eD.AEg.FULL_SCREEN]: eU.fullScreen,
    },
    eG = {
        [eD.IlC.POPOUT]: eU.popout,
        [eD.IlC.APP]: null,
        [eD.IlC.OVERLAY]: null,
        [eD.IlC.CALL_TILE_POPOUT]: null,
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
            eg.default.track(
                eD.rMx.VIDEO_LAYOUT_TOGGLED,
                eH({ video_layout: this.inPopout ? "popout" : t }, (0, N.AB)(e.id)),
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
                e.mode === eD.WtW.VIDEO &&
                i === eD.WtW.VOICE &&
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
        return ey.isPlatformEmbedded && e_.ZP.supportsFeature(eD.eRX.POPOUT_WINDOWS);
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
            ? { mainText: ek.intl.string(ek.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eD.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: r } = this.props,
            l = t === eD.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eD.WtW.VIDEO && i && this.popoutSupported && r,
            o = t !== eD.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eD.d4z.GUILD_VOICE,
            c = e === eD.AEg.MINIMUM || e === eD.AEg.NORMAL,
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
            return eF(eH({}, d), {
                canFullscreen: l,
                useTheme: !0,
            });
        switch (e) {
            case eD.AEg.FULL_SCREEN:
                return eF(eH({}, d), { canPopout: !this.inPopout && this.popoutOpen && d.canPopout });
            case eD.AEg.MINIMUM:
                return eF(eH({}, d), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eD.AEg.NO_CHAT:
            case eD.AEg.NORMAL:
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
                callContainerDimensions: C,
            } = this.props,
            y = f === eD.AEg.MINIMUM,
            _ = y || f === eD.AEg.NORMAL,
            v = l && o === eD.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(
                Q.Z,
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
                        disableGradients: !l || y,
                        idle: !m && l && !y && e.idle,
                        children:
                            l && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, i.jsx)(q.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      channel: p,
                                      hasConnectPermission: a,
                                      guild: h,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: v ? r : null,
                                      layout: f,
                                      idle: e.idle,
                                      mode: o,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: s && (!_ || x),
                                      popoutType: n,
                                      awaitingRemoteSessionInfo: g,
                                      callContainerDimensions: C,
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
            f = r === eD.WtW.VIDEO,
            m = e !== eD.AEg.NO_CHAT && e !== eD.AEg.FULL_SCREEN && null != c,
            g = eD.BRd.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(eU.wrapper, eV[e], eG[o], {
                [eU.poppedOut]: this.popoutOpen && !this.inPopout && e !== eD.AEg.NO_CHAT && t.isPrivate(),
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
                            className: a()(eU.callContainer, l || e !== eD.AEg.FULL_SCREEN ? void 0 : eU.fullScreen, t),
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
                                    (0, i.jsx)(eS.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s,
                                    }),
                                d &&
                                    (0, i.jsx)(eI.Z, {
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
            eB(this, "_prevLayout", eD.AEg.MINIMUM),
            eB(this, "_wrapperRef", r.createRef()),
            eB(this, "_callContainerRef", r.createRef()),
            eB(this, "_channelChatRef", r.createRef()),
            eB(this, "_contentRef", r.createRef()),
            eB(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eB(this, "_lastIdleProps", null),
            eB(this, "state", { resizedHeight: z.ZP.callHeaderHeight }),
            eB(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ev.rB)(e, this.currentDocument) ||
                        this.props.layout !== eD.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eB(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== eD.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(eD.AEg.FULL_SCREEN),
                          (0, ev.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eB(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === eD.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ev.Pr)(e, this.currentDocument));
            }),
            eB(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === eD.AEg.NORMAL ? eD.AEg.NO_CHAT : eD.AEg.NORMAL);
            }),
            eB(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e &&
                    (m.Z.updateLayout(t.id, e, n),
                    e === eD.AEg.FULL_SCREEN && t.isPrivate() && eC.S.dispatch(eD.CkL.TEXTAREA_BLUR));
            }),
            eB(this, "handleDisconnect", () => {
                this.props.layout === eD.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eB(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, w.h)({
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
                return (0, eM.u)(e, T.Z.CHANNEL_CALL, {
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
                                            eF(eH({}, n), {
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
                        let h = ef.default.getUser(e.id);
                        if (null != h) {
                            if (r)
                                return (0, G.D)(t, h, c, p, (e, t) =>
                                    (0, eM.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eL.A5.THREE_DOT,
                                        tileType: eL.TH.USER,
                                        targetUserId: h.id,
                                        location: T.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case eD.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("98783"),
                                                n.e("56826"),
                                                n.e("31589"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, i.jsx)(
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
                                case eD.d4z.GROUP_DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("98783"),
                                                n.e("49062"),
                                            ]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    t,
                                                    eF(eH({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eD.AEg.MINIMUM || d === eD.AEg.NORMAL,
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
                                case eD.d4z.GUILD_VOICE:
                                case eD.d4z.PUBLIC_THREAD:
                                case eD.d4z.PRIVATE_THREAD:
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
                                                    (0, i.jsx)(
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
            eB(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eB(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: r, inCall: l, mode: a } = this.props;
                (0, eL._5)(e) &&
                    (0, U.p9)(n, em.Z, eu.Z, ed.Z, L.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === r.filter((t) => (0, k.V9)(t) === e.id && t.state !== eD.jm8.ENDED).length &&
                        (0, C.rn)((0, k.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === eD.WtW.VIDEO &&
                        ((null == i ? void 0 : i.id) === e.id
                            ? m.Z.selectParticipant(n.id, null)
                            : m.Z.selectParticipant(n.id, e.id));
            }),
            eB(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, S.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, V.uL)((0, eb.LY)(n)), H.hP(e);
                    };
                null == t || (0, j.R)() ? n() : (0, Z.Z)({ onConfirm: n });
            }),
            eB(this, "handleStayOnTop", (e) => {
                (0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.STAY_ON_TOP, e), H.hY(eD.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eB(this, "handleClosePopout", () => {
                H.xv(eD.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eB(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    r = n === eD.AEg.FULL_SCREEN;
                ((!r && (null == i ? void 0 : i.id) !== e.id) || (r && (null == i ? void 0 : i.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eB(this, "renderRegionSelect", () => {
                let e,
                    { call: t, channel: n, layout: r } = this.props;
                return (
                    this.inPopout ||
                        r === eD.AEg.FULL_SCREEN ||
                        null == t ||
                        n.isManaged() ||
                        (e = (0, i.jsx)(_.Z, { call: t })),
                    (0, i.jsx)(M.Z, {
                        justify: M.Z.Justify.END,
                        children: e,
                    })
                );
            }),
            eB(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eD.AEg.MINIMUM || n === eD.AEg.NORMAL
                    ? (0, i.jsx)(W.ZP, {
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
                let d = e === eD.AEg.NO_CHAT ? $.Z.Directions.UP : $.Z.Directions.DOWN,
                    p = [eD.AEg.FULL_SCREEN, eD.AEg.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === eL.fO.STREAM),
                    m =
                        e === eD.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eD.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: b } = this.viewProperties,
                    C = l
                        ? (0, i.jsx)(Y.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eL.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eL.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: r,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eD.d4z.GUILD_VOICE ? eD.ZY5.GUILD_CHANNEL : eD.ZY5.DM_CHANNEL,
                          })
                        : (0, i.jsx)(et.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eL.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eD.d4z.GUILD_VOICE ? eD.ZY5.GUILD_CHANNEL : eD.ZY5.DM_CHANNEL,
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        b && !s ? C : null,
                        g
                            ? (0, i.jsxs)(M.Z, {
                                  className: eU.iconWrapper,
                                  align: M.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)($.Z, {
                                          label: p ? ek.intl.string(ek.t.kkKapG) : ek.intl.string(ek.t["5MstTl"]),
                                          direction: d,
                                          className: eU.leftTrayIcon,
                                          onClick: () => {
                                              (0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.CHAT, p), m();
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
                            : (0, i.jsx)(X.Z, {
                                  children: (0, i.jsx)(eZ.Z, {
                                      className: a()(eU.leftTrayIcon, eU.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eD.AEg.FULL_SCREEN,
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
                            ? (0, i.jsx)(er.Z, {
                                  context: (0, eO.Z)(r.type),
                                  userId: r.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eU.volumeSlider,
                                  className: eU.rightTrayIcon,
                                  location: T.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        a
                            ? (0, i.jsx)(ei.Z, {
                                  className: eU.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        o
                            ? (0, i.jsx)(en.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: eU.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, ew.v)(T.Z.VOICE_CONTROL_TRAY, ew.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        l
                            ? (0, i.jsx)(ee.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eU.rightTrayIcon,
                                  onClick: () => {
                                      (0, ew.v)(
                                          T.Z.VOICE_CONTROL_TRAY,
                                          ew.d.FULL_SCREEN,
                                          this.props.layout !== eD.AEg.FULL_SCREEN,
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
                    : (0, i.jsx)(eE.ZP, {
                          children: (0, i.jsx)(J.Z, {
                              className: eU.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eB(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eA.ZP, {
                    children: (0, i.jsx)(el.Z, {
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
                    ? (0, i.jsxs)(X.Z, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: eU.headerWrapper,
                                  children: o
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eP.Z, {
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
        { width: c = 0, ref: p } = (0, x.ZP)(),
        { width: f = 0, height: m = 0, ref: g } = (0, x.ZP)(),
        { ref: b } = (0, x.ZP)(),
        C = (0, B.bp)(),
        _ = (0, D.Z)(),
        j = (0, u.e7)([eh.Z], () => {
            var e;
            return (null != (e = null == _ ? void 0 : _.channelId) ? e : eh.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: S,
            filteredParticipants: Z,
            participantsVersion: N,
            mode: w,
            layout: M,
            participantsOpen: k,
            participantsListOpen: U,
            chatOpen: H,
            selectedParticipant: V,
        } = (0, u.cj)([ex.Z], () => {
            let e = C === eD.IlC.POPOUT,
                t = ex.Z.getMode(n.id);
            e && (t = eD.WtW.VIDEO);
            let i = t === eD.WtW.VIDEO ? ex.Z.getLayout(n.id, C) : eD.AEg.MINIMUM;
            return (
                e && i !== eD.AEg.FULL_SCREEN && (i = eD.AEg.NO_CHAT),
                {
                    mode: t,
                    layout: i,
                    selectedParticipant: t !== eD.WtW.VOICE ? ex.Z.getSelectedParticipant(n.id) : null,
                    participants: ex.Z.getParticipants(n.id),
                    filteredParticipants: ex.Z.getFilteredParticipants(n.id),
                    participantsOpen: ex.Z.getParticipantsOpen(n.id),
                    chatOpen: ex.Z.getChatOpen(n.id),
                    participantsListOpen: ex.Z.getParticipantsListOpen(n.id),
                    participantsVersion: ex.Z.getParticipantsVersion(n.id),
                }
            );
        }, [C, n.id]),
        G = (0, u.Wu)([ea.Z], () => ea.Z.getAllActiveStreams()),
        { selectedStream: W } = (0, u.cj)(
            [ea.Z],
            () => ({ selectedStream: null != V ? ea.Z.getActiveStreamForStreamKey(V.id) : null }),
            [V],
        ),
        q = (0, u.e7)([eu.Z], () => eu.Z.getGuild(n.getGuildId())),
        Y = (0, u.e7)([ec.Z], () => ec.Z.getCall(n.id), [n.id]),
        K = (0, u.e7)([ep.ZP], () => ep.ZP.getMentionCount(n.id), [n.id]),
        X = (0, u.e7)([eo.default], () => eo.default.getId()),
        { popoutWindow: J, popoutWindowAlwaysOnTop: Q } = (0, u.cj)([F.Z], () => ({
            popoutWindow: F.Z.getWindow(eD.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.Z.getIsAlwaysOnTop(eD.KJ3.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, u.e7)([ed.Z], () => ed.Z.can(eD.Plq.CONNECT, n)),
        ee = (0, u.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        et = (0, u.e7)([L.default], () => L.default.getAwaitingRemoteSessionInfo()),
        en = (0, u.e7)([z.ZP], () => z.ZP.callHeaderHeight),
        ei = r.useCallback((e) => {
            y.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        er = null != (t = null == q ? void 0 : q.id) ? t : null,
        el = (0, I.Z)(er, n.id),
        ef = (0, u.e7)([E.Z], () => E.Z.getFetchState(), []),
        em = (0, O.Z)(ef);
    r.useEffect(() => {
        ef === E.O.ERROR &&
            em !== E.O.ERROR &&
            (0, h.showToast)((0, h.createToast)(ek.intl.string(ek.t["AlJyI+"]), h.ToastType.FAILURE));
    }, [ef, em]);
    let eg = (0, u.e7)([P.ZP], () => P.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    r.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                j &&
                    w === eD.WtW.VIDEO &&
                    ((t = await e_.ZP.blockDisplaySleep()), e && null != t && e_.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? e_.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [j, w]);
    let eb = (0, ej.Z)(n, !0),
        { hasParticipantsPanel: eC } = (0, eT.Z)({ location: "ChannelCall" }),
        ey = (0, R.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ev } = (0, A.ZP)(T.Z.CHANNEL_CALL),
        eO = c - eL.oo,
        eS = P.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eP } = (0, h.TCT)();
    return (0, i.jsx)(A.Gt, {
        value: ev,
        children: (0, i.jsx)(v.Z, {
            page: eD.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eE.B2, {
                children: (0, i.jsxs)(eA._A, {
                    children: [
                        (0, i.jsx)(ez, {
                            channel: n,
                            guild: q,
                            hasConnectPermission: $,
                            participantsOpen: k,
                            participantsListOpen: U && eC,
                            renderExternalHeader: l,
                            appContext: C,
                            call: Y,
                            popoutWindow: J,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: K,
                            selectedStream: W,
                            mode: w,
                            inCall: j,
                            participants: S,
                            filteredParticipants: Z,
                            participantsVersion: N,
                            layout: M,
                            chatOpen: H,
                            maxSidebarWidth: eO,
                            shouldUseVoiceEffectsActionBar: eb,
                            currentUserId: X,
                            selectedParticipant: V,
                            allActiveStreams: G,
                            useNewInviteButton: el,
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
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eS,
                            theme: eP,
                            canPopout: o,
                            popoutType: s,
                        }),
                        !n.isPrivate() && (0, i.jsx)(eA.YR, {}),
                        (0, i.jsx)(eE.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
