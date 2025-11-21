n.d(t, { Z: () => eG }), n(388685);
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
    F = n(703656),
    V = n(880395),
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
    es = n(430824),
    ec = n(496675),
    eu = n(306680),
    ed = n(944486),
    ep = n(594174),
    eh = n(979651),
    ef = n(626135),
    em = n(934415),
    eg = n(585483),
    eb = n(358085),
    ey = n(998502),
    eC = n(228488),
    ev = n(358221),
    e_ = n(414910),
    ex = n(887012),
    ej = n(909820),
    eO = n(493010),
    eE = n(742603),
    eS = n(71127),
    eP = n(221888),
    eI = n(185935),
    eZ = n(900211),
    eT = n(18759),
    eN = n(522651),
    eA = n(795318),
    ew = n(878752),
    eM = n(354459),
    eR = n(981631),
    eL = n(388032),
    ek = n(598411);
function eD(e, t, n) {
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
function eU(e) {
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
                eD(e, t, n[t]);
            });
    }
    return e;
}
function eB(e, t) {
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
let eH = {
        [eR.AEg.NORMAL]: ek.normal,
        [eR.AEg.MINIMUM]: ek.minimum,
        [eR.AEg.NO_CHAT]: ek.noChat,
        [eR.AEg.FULL_SCREEN]: ek.fullScreen,
    },
    eF = {
        [eR.IlC.POPOUT]: ek.popout,
        [eR.IlC.APP]: null,
        [eR.IlC.OVERLAY]: null,
        [eR.IlC.CALL_TILE_POPOUT]: null,
    };
class eV extends r.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eC.NO, this.handleFullScreenChange),
            ef.default.track(
                eR.rMx.VIDEO_LAYOUT_TOGGLED,
                eU({ video_layout: this.inPopout ? "popout" : t }, (0, T.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eC.NO, this.handleFullScreenChange),
            (this.inPopout && (0, eb.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: r } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === eR.WtW.VIDEO &&
                i === eR.WtW.VOICE &&
                (0, eC.rB)(l, this.currentDocument) &&
                (0, eC.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || r !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eb.isPlatformEmbedded && ey.ZP.supportsFeature(eR.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eb.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eL.intl.string(eL.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eR.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: r } = this.props,
            l = t === eR.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eR.WtW.VIDEO && i && this.popoutSupported && r,
            o = t !== eR.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eR.d4z.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eR.AEg.MINIMUM || e === eR.AEg.NORMAL,
                canInvite: s,
                canPopout: a,
                canFullscreen: l,
                canChangeLayout: o,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i)
            return eB(eU({}, c), {
                canFullscreen: l,
                useTheme: !0,
            });
        switch (e) {
            case eR.AEg.FULL_SCREEN:
                return eB(eU({}, c), { canPopout: !this.inPopout && this.popoutOpen && c.canPopout });
            case eR.AEg.MINIMUM:
                return eB(eU({}, c), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eR.AEg.NO_CHAT:
            case eR.AEg.NORMAL:
                return eU({}, c);
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
            C = f === eR.AEg.MINIMUM,
            v = C || f === eR.AEg.NORMAL,
            _ = l && o === eR.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(
                J.Z,
                eB(
                    eU(
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
            f = r === eR.WtW.VIDEO,
            m = e !== eR.AEg.NO_CHAT && e !== eR.AEg.FULL_SCREEN && null != c,
            g = eR.BRd.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(ek.wrapper, eH[e], eF[o], {
                [ek.poppedOut]: this.popoutOpen && !this.inPopout && e !== eR.AEg.NO_CHAT && t.isPrivate(),
                [ek.video]: f,
                [ek.sidebarOpen]: l || d,
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
                (0, i.jsx)(h.f6W, {
                    theme: g,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(ek.callContainer, l || e !== eR.AEg.FULL_SCREEN ? void 0 : ek.fullScreen, t),
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
                    (0, i.jsx)(eZ.Z, {
                        minHeight: eM._i,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: ek.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                l &&
                                    (0, i.jsx)(eO.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: s,
                                    }),
                                d &&
                                    (0, i.jsx)(eS.Z, {
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
            eD(this, "_prevLayout", eR.AEg.MINIMUM),
            eD(this, "_wrapperRef", r.createRef()),
            eD(this, "_callContainerRef", r.createRef()),
            eD(this, "_channelChatRef", r.createRef()),
            eD(this, "_contentRef", r.createRef()),
            eD(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eD(this, "_lastIdleProps", null),
            eD(this, "state", { resizedHeight: G.ZP.callHeaderHeight }),
            eD(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, eC.rB)(e, this.currentDocument) ||
                        this.props.layout !== eR.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eD(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== eR.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(eR.AEg.FULL_SCREEN),
                          (0, eC.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eD(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === eR.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, eC.Pr)(e, this.currentDocument));
            }),
            eD(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === eR.AEg.NORMAL ? eR.AEg.NO_CHAT : eR.AEg.NORMAL);
            }),
            eD(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e &&
                    (m.Z.updateLayout(t.id, e, n),
                    e === eR.AEg.FULL_SCREEN && t.isPrivate() && eg.S.dispatch(eR.CkL.TEXTAREA_BLUR));
            }),
            eD(this, "handleDisconnect", () => {
                this.props.layout === eR.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eD(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, A.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eM.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eD(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eM.A5.CONTEXT_MENU;
                return (0, eA.u)(e, Z.Z.CHANNEL_CALL, {
                    entrypoint: i,
                    tileType: n,
                    targetUserId: t.type !== eM.fO.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eD(this, "handleContextMenu", (e, t, r, l) => {
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
                                        (0, i.jsx)(
                                            t,
                                            eB(eU({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: r,
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
                        let h = ep.default.getUser(e.id);
                        if (null != h) {
                            if (r)
                                return (0, V.D)(t, h, c, p, (e, t) =>
                                    (0, eA.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eM.A5.THREE_DOT,
                                        tileType: eM.TH.USER,
                                        targetUserId: h.id,
                                        location: Z.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case eR.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("66165"),
                                                n.e("56826"),
                                                n.e("31589"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    t,
                                                    eB(eU({}, n), {
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
                                case eR.d4z.GROUP_DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("66165"),
                                                n.e("49062"),
                                            ]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    t,
                                                    eB(eU({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eR.AEg.MINIMUM || d === eR.AEg.NORMAL,
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
                                case eR.d4z.GUILD_VOICE:
                                case eR.d4z.PUBLIC_THREAD:
                                case eR.d4z.PRIVATE_THREAD:
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
                                                    n.e("96306"),
                                                ]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, i.jsx)(
                                                        t,
                                                        eB(eU({}, n), {
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
            eD(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eD(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: r, inCall: l, mode: a } = this.props;
                (0, eM._5)(e) &&
                    (0, D.p9)(n, eh.Z, es.Z, ec.Z, R.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === r.filter((t) => (0, k.V9)(t) === e.id && t.state !== eR.jm8.ENDED).length &&
                        (0, y.rn)((0, k.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === eR.WtW.VIDEO &&
                        ((null == i ? void 0 : i.id) === e.id
                            ? m.Z.selectParticipant(n.id, null)
                            : m.Z.selectParticipant(n.id, e.id));
            }),
            eD(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, E.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, F.uL)((0, em.LY)(n)), B.hP(e);
                    };
                null == t || (0, j.R)() ? n() : (0, I.Z)({ onConfirm: n });
            }),
            eD(this, "handleStayOnTop", (e) => {
                (0, eN.v)(Z.Z.VOICE_CONTROL_TRAY, eN.d.STAY_ON_TOP, e), B.hY(eR.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eD(this, "handleClosePopout", () => {
                B.xv(eR.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eD(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    r = n === eR.AEg.FULL_SCREEN;
                ((!r && (null == i ? void 0 : i.id) !== e.id) || (r && (null == i ? void 0 : i.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eD(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eR.AEg.MINIMUM || n === eR.AEg.NORMAL
                    ? (0, i.jsx)(z.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps,
                      })
                    : null;
            }),
            eD(this, "renderBottomLeft", () => {
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
                let d = e === eR.AEg.NO_CHAT ? Q.Z.Directions.UP : Q.Z.Directions.DOWN,
                    p = [eR.AEg.FULL_SCREEN, eR.AEg.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === eM.fO.STREAM),
                    m =
                        e === eR.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eR.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: b } = this.viewProperties,
                    y = l
                        ? (0, i.jsx)(q.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eM.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eM.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: r,
                              className: ek.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eR.d4z.GUILD_VOICE ? eR.ZY5.GUILD_CHANNEL : eR.ZY5.DM_CHANNEL,
                          })
                        : (0, i.jsx)(ee.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eM.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              className: ek.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eR.d4z.GUILD_VOICE ? eR.ZY5.GUILD_CHANNEL : eR.ZY5.DM_CHANNEL,
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        b && !s ? y : null,
                        g
                            ? (0, i.jsxs)(w.Z, {
                                  className: ek.iconWrapper,
                                  align: w.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(Q.Z, {
                                          label: p ? eL.intl.string(eL.t.kkKapG) : eL.intl.string(eL.t["5MstTl"]),
                                          direction: d,
                                          className: ek.leftTrayIcon,
                                          onClick: () => {
                                              (0, eN.v)(Z.Z.VOICE_CONTROL_TRAY, eN.d.CHAT, p), m();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.mAB, {
                                                className: ek.badge,
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
                            : (0, i.jsx)(Y.Z, {
                                  children: (0, i.jsx)(eP.Z, {
                                      className: a()(ek.leftTrayIcon, ek.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eR.AEg.FULL_SCREEN,
                                  }),
                              }),
                        s &&
                            (0, i.jsx)(ew.Z, {
                                channel: n,
                                hasActiveStream: f,
                            }),
                    ],
                });
            }),
            eD(this, "renderBottomRight", () => {
                let {
                        popoutWindow: e,
                        popoutWindowAlwaysOnTop: t,
                        currentUserId: n,
                        selectedParticipant: r,
                    } = this.props,
                    { canFullscreen: l, canStayOnTop: a, canPopout: o, useTheme: s } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != r && r.type !== eM.fO.ACTIVITY && r.user.id !== n
                            ? (0, i.jsx)(ei.Z, {
                                  context: (0, e_.Z)(r.type),
                                  userId: r.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: ek.volumeSlider,
                                  className: ek.rightTrayIcon,
                                  location: Z.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        a
                            ? (0, i.jsx)(en.Z, {
                                  className: ek.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        o
                            ? (0, i.jsx)(et.Z, {
                                  themeable: s,
                                  popoutOpen: this.popoutOpen,
                                  className: ek.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eN.v)(Z.Z.VOICE_CONTROL_TRAY, eN.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eN.v)(Z.Z.VOICE_CONTROL_TRAY, eN.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        l
                            ? (0, i.jsx)($.Z, {
                                  themeable: s,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: ek.rightTrayIcon,
                                  onClick: () => {
                                      (0, eN.v)(
                                          Z.Z.VOICE_CONTROL_TRAY,
                                          eN.d.FULL_SCREEN,
                                          this.props.layout !== eR.AEg.FULL_SCREEN,
                                      ),
                                          this.handleFullScreen();
                                  },
                              })
                            : null,
                    ],
                });
            }),
            eD(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: r } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && r)
                    ? null
                    : (0, i.jsx)(ej.ZP, {
                          children: (0, i.jsx)(X.Z, {
                              className: ek.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eD(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eT.ZP, {
                    children: (0, i.jsx)(er.Z, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eD(this, "renderHeader", () => {
                let {
                        renderExternalHeader: e,
                        channel: t,
                        guild: n,
                        appContext: r,
                        chatOpen: l,
                        inCall: a,
                    } = this.props,
                    { useExternalHeader: o, renderHeader: s } = this.viewProperties;
                return s
                    ? (0, i.jsx)(Y.Z, {
                          children: (0, i.jsx)("div", {
                              className: ek.headerWrapper,
                              children: o
                                  ? null == e
                                      ? void 0
                                      : e()
                                  : (0, i.jsx)(eE.Z, {
                                        channel: t,
                                        guild: n,
                                        appContext: r,
                                        inCall: a,
                                        isChatOpen: l || (this.popoutOpen && !this.inPopout && a),
                                        exitFullScreen: this.maybeLeaveFullScreen,
                                    }),
                          }),
                      })
                    : null;
            });
    }
}
let eG = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a, canPopout: o = !0, popoutType: s } = e,
        { width: c = 0, ref: p } = (0, _.ZP)(),
        { width: f = 0, height: m = 0, ref: g } = (0, _.ZP)(),
        { ref: b } = (0, _.ZP)(),
        y = (0, U.bp)(),
        j = (0, L.Z)(),
        E = (0, u.e7)([ed.Z], () => {
            var e;
            return (null != (e = null == j ? void 0 : j.channelId) ? e : ed.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: I,
            filteredParticipants: T,
            participantsVersion: A,
            mode: w,
            layout: k,
            participantsOpen: D,
            participantsListOpen: B,
            chatOpen: F,
            selectedParticipant: V,
        } = (0, u.cj)([ev.Z], () => {
            let e = y === eR.IlC.POPOUT,
                t = ev.Z.getMode(n.id);
            e && (t = eR.WtW.VIDEO);
            let i = t === eR.WtW.VIDEO ? ev.Z.getLayout(n.id, y) : eR.AEg.MINIMUM;
            return (
                e && i !== eR.AEg.FULL_SCREEN && (i = eR.AEg.NO_CHAT),
                {
                    mode: t,
                    layout: i,
                    selectedParticipant: t !== eR.WtW.VOICE ? ev.Z.getSelectedParticipant(n.id) : null,
                    participants: ev.Z.getParticipants(n.id),
                    filteredParticipants: ev.Z.getFilteredParticipants(n.id),
                    participantsOpen: ev.Z.getParticipantsOpen(n.id),
                    chatOpen: ev.Z.getChatOpen(n.id),
                    participantsListOpen: ev.Z.getParticipantsListOpen(n.id),
                    participantsVersion: ev.Z.getParticipantsVersion(n.id),
                }
            );
        }, [y, n.id]),
        z = (0, u.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        { selectedStream: W } = (0, u.cj)(
            [el.Z],
            () => ({ selectedStream: null != V ? el.Z.getActiveStreamForStreamKey(V.id) : null }),
            [V],
        ),
        q = (0, u.e7)([es.Z], () => es.Z.getGuild(n.getGuildId())),
        K = (0, u.e7)([eu.ZP], () => eu.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, u.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: J } = (0, u.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(eR.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(eR.KJ3.CHANNEL_CALL_POPOUT),
        })),
        Q = (0, u.e7)([ec.Z], () => ec.Z.can(eR.Plq.CONNECT, n)),
        $ = (0, u.e7)([eo.Z], () => eo.Z.getToastsEnabled(n.id)),
        ee = (0, u.e7)([R.default], () => R.default.getAwaitingRemoteSessionInfo()),
        et = (0, u.e7)([G.ZP], () => G.ZP.callHeaderHeight),
        en = r.useCallback((e) => {
            C.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null != (t = null == q ? void 0 : q.id) ? t : null,
        er = (0, P.Z)(ei, n.id),
        ep = (0, u.e7)([O.Z], () => O.Z.getFetchState(), []),
        eh = (0, x.Z)(ep);
    r.useEffect(() => {
        ep === O.O.ERROR &&
            eh !== O.O.ERROR &&
            (0, h.showToast)((0, h.createToast)(eL.intl.string(eL.t["AlJyI+"]), h.ToastType.FAILURE));
    }, [ep, eh]);
    let ef = (0, u.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    r.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                E &&
                    w === eR.WtW.VIDEO &&
                    ((t = await ey.ZP.blockDisplaySleep()), e && null != t && ey.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ey.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [E, w]);
    let em = (0, ex.Z)(n, !0),
        { hasParticipantsPanel: eg } = (0, eI.Z)({ location: "ChannelCall" }),
        eb = (0, M.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eC } = (0, N.ZP)(Z.Z.CHANNEL_CALL),
        e_ = c - eM.oo,
        eO = S.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eE } = (0, h.TCT)();
    return (0, i.jsx)(N.Gt, {
        value: eC,
        children: (0, i.jsx)(v.Z, {
            page: eR.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(ej.B2, {
                children: (0, i.jsxs)(eT._A, {
                    children: [
                        (0, i.jsx)(eV, {
                            channel: n,
                            guild: q,
                            hasConnectPermission: Q,
                            participantsOpen: D,
                            participantsListOpen: B && eg,
                            renderExternalHeader: l,
                            appContext: y,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: J,
                            mentionCount: K,
                            selectedStream: W,
                            mode: w,
                            inCall: E,
                            participants: I,
                            filteredParticipants: T,
                            participantsVersion: A,
                            layout: k,
                            chatOpen: F,
                            maxSidebarWidth: e_,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: Y,
                            selectedParticipant: V,
                            allActiveStreams: z,
                            useNewInviteButton: er,
                            connectedEmbeddedActivity: null != ef ? ef : void 0,
                            showChatToasts: $,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: p,
                            callContainerDimensions: {
                                width: f,
                                height: m,
                            },
                            callContainerRef: g,
                            channelChatRef: b,
                            width: c,
                            maxHeight: a,
                            forceShowControls: eb,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: eO,
                            theme: eE,
                            canPopout: o,
                            popoutType: s,
                        }),
                        !n.isPrivate() && (0, i.jsx)(eT.YR, {}),
                        (0, i.jsx)(ej.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
