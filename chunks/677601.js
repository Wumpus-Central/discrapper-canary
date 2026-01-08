n.d(t, { Z: () => eW }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(990547),
    u = n(442837),
    d = n(704215),
    p = n(846519),
    f = n(481060),
    h = n(570140),
    g = n(475179),
    m = n(239091),
    b = n(287734),
    y = n(872810),
    v = n(153867),
    O = n(410575),
    j = n(393238),
    x = n(110924),
    C = n(636449),
    E = n(115130),
    S = n(566620),
    _ = n(317381),
    I = n(596040),
    P = n(617552),
    Z = n(100527),
    N = n(367907),
    T = n(906732),
    A = n(213609),
    w = n(600164),
    R = n(211644),
    D = n(258609),
    M = n(446226),
    k = n(569545),
    L = n(102172),
    U = n(785925),
    G = n(521506),
    B = n(728285),
    F = n(788983),
    H = n(928518),
    V = n(703656),
    z = n(880395),
    W = n(740492),
    K = n(793319),
    Y = n(3861),
    q = n(493754),
    X = n(937995),
    Q = n(618158),
    J = n(880831),
    $ = n(73563),
    ee = n(751843),
    et = n(268353),
    en = n(786915),
    er = n(800965),
    ei = n(107169),
    el = n(742714),
    ea = n(488785),
    eo = n(199902),
    es = n(314897),
    ec = n(979696),
    eu = n(430824),
    ed = n(496675),
    ep = n(306680),
    ef = n(944486),
    eh = n(594174),
    eg = n(979651),
    em = n(626135),
    eb = n(934415),
    ey = n(585483),
    ev = n(358085),
    eO = n(998502),
    ej = n(228488),
    ex = n(358221),
    eC = n(414910),
    eE = n(887012),
    eS = n(909820),
    e_ = n(493010),
    eI = n(742603),
    eP = n(71127),
    eZ = n(221888),
    eN = n(185935),
    eT = n(900211),
    eA = n(18759),
    ew = n(522651),
    eR = n(795318),
    eD = n(878752),
    eM = n(354459),
    ek = n(981631),
    eL = n(388032),
    eU = n(94720);
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
        [ek.AEg.NORMAL]: eU.normal,
        [ek.AEg.MINIMUM]: eU.minimum,
        [ek.AEg.NO_CHAT]: eU.noChat,
        [ek.AEg.FULL_SCREEN]: eU.fullScreen,
        [ek.AEg.HAVEN]: eU.haven,
    },
    eV = {
        [ek.IlC.POPOUT]: eU.popout,
        [ek.IlC.APP]: null,
        [ek.IlC.OVERLAY]: null,
        [ek.IlC.CALL_TILE_POPOUT]: null,
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
        this.currentDocument.addEventListener(ej.NO, this.handleFullScreenChange),
            em.default.track(
                ek.rMx.VIDEO_LAYOUT_TOGGLED,
                eB({ video_layout: this.inPopout ? "popout" : t }, (0, N.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ej.NO, this.handleFullScreenChange),
            (this.inPopout && (0, ev.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === ek.WtW.VIDEO &&
                r === ek.WtW.VOICE &&
                (0, ej.rB)(l, this.currentDocument) &&
                (0, ej.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || i !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && h.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ev.isPlatformEmbedded && eO.ZP.supportsFeature(ek.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ev.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.props.appContext === ek.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r, canPopout: i } = this.props,
            l = t === ek.WtW.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            a = t === ek.WtW.VIDEO && r && this.popoutSupported && i,
            o = t !== ek.WtW.VOICE && n.isPrivate() && !this.inPopout && r,
            s = n.type === ek.d4z.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === ek.AEg.MINIMUM || e === ek.AEg.NORMAL,
                canInvite: s,
                canPopout: a,
                canFullscreen: l,
                canChangeLayout: o,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!r)
            return eF(eB({}, c), {
                canFullscreen: l,
                useTheme: !0,
            });
        switch (e) {
            case ek.AEg.FULL_SCREEN:
                return eF(eB({}, c), { canPopout: !this.inPopout && this.popoutOpen && c.canPopout });
            case ek.AEg.MINIMUM:
                return eF(eB({}, c), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case ek.AEg.HAVEN:
            case ek.AEg.NO_CHAT:
            case ek.AEg.NORMAL:
                return eB({}, c);
        }
    }
    renderContent(e) {
        var t;
        let {
                popoutType: n,
                selectedParticipant: i,
                inCall: l,
                hasConnectPermission: a,
                mode: o,
                participantsOpen: s,
                participants: c,
                filteredParticipants: u,
                participantsVersion: d,
                channel: p,
                guild: f,
                layout: h,
                forceShowControls: g,
                awaitingRemoteSessionInfo: m,
                currentChannelActivities: b,
                callContainerDimensions: y,
            } = this.props,
            v = h === ek.AEg.MINIMUM,
            O = v || h === ek.AEg.NORMAL,
            j = l && o === ek.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                $.Z,
                eF(
                    eB(
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
                        disableGradients: !l || v,
                        idle: !g && l && !v && e.idle,
                        children:
                            l && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsx)(Y.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      channel: p,
                                      hasConnectPermission: a,
                                      guild: f,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: j ? i : null,
                                      layout: h,
                                      idle: e.idle,
                                      mode: o,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: s && (!O || x),
                                      popoutType: n,
                                      awaitingRemoteSessionInfo: m,
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
            h = i === ek.WtW.VIDEO,
            g = e !== ek.AEg.HAVEN && e !== ek.AEg.NO_CHAT && e !== ek.AEg.FULL_SCREEN && null != c,
            m = ek.BRd.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: a()(eU.wrapper, eH[e], eV[o], {
                [eU.poppedOut]: this.popoutOpen && !this.inPopout && e !== ek.AEg.NO_CHAT && t.isPrivate(),
                [eU.video]: h,
                [eU.sidebarOpen]: l || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                g && null != p
                    ? {
                          minHeight: eM._i,
                          maxHeight: c,
                          height: p,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(f.f6W, {
                    theme: m,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: a()(eU.callContainer, l || e !== ek.AEg.FULL_SCREEN ? void 0 : eU.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(X.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                g &&
                    (0, r.jsx)(eT.Z, {
                        minHeight: eM._i,
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
                                    (0, r.jsx)(e_.Z, {
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
                    ((0, ej.rB)(e, this.currentDocument) ||
                        this.props.layout !== ek.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eG(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== ek.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(ek.AEg.FULL_SCREEN),
                          (0, ej.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eG(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === ek.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ej.Pr)(e, this.currentDocument));
            }),
            eG(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === ek.AEg.NORMAL ? ek.AEg.NO_CHAT : ek.AEg.NORMAL);
            }),
            eG(this, "handleHaven", () => {
                this.props.layout === ek.AEg.HAVEN
                    ? (this.handleChangeLayout(ek.AEg.NO_CHAT), U.ZP.disconnect(this.props.channel.id))
                    : this.handleChangeLayout(ek.AEg.HAVEN);
            }),
            eG(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (g.Z.updateLayout(t.id, e, n),
                    e === ek.AEg.FULL_SCREEN && t.isPrivate() && ey.S.dispatch(ek.CkL.TEXTAREA_BLUR));
            }),
            eG(this, "handleDisconnect", () => {
                this.props.layout === ek.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eG(this, "trackCallTileContextMenuImpression", (e, t) => {
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
            eG(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eM.A5.CONTEXT_MENU;
                return (0, eR.u)(e, Z.Z.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eM.fO.ACTIVITY ? t.user.id : void 0,
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
                        let f = eh.default.getUser(e.id);
                        if (null != f) {
                            if (i)
                                return (0, z.D)(t, f, c, p, (e, t) =>
                                    (0, eR.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eM.A5.THREE_DOT,
                                        tileType: eM.TH.USER,
                                        targetUserId: f.id,
                                        location: Z.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case ek.d4z.DM:
                                    return (0, m.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("4040"),
                                                n.e("56826"),
                                                n.e("87120"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eF(eB({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: f,
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
                                    return (0, m.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("4040"),
                                                n.e("60677"),
                                                n.e("60655"),
                                            ]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eF(eB({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === ek.AEg.MINIMUM || d === ek.AEg.NORMAL,
                                                        user: f,
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
                                        (0, m.jW)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([
                                                    n.e("79695"),
                                                    n.e("4040"),
                                                    n.e("92524"),
                                                    n.e("7717"),
                                                    n.e("96253"),
                                                ]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eF(eB({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: f,
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
            eG(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eG(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: i, inCall: l, mode: a } = this.props;
                (0, eM._5)(e) &&
                    (0, L.p9)(n, eg.Z, eu.Z, ed.Z, D.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === i.filter((t) => (0, k.V9)(t) === e.id && t.state !== ek.jm8.ENDED).length &&
                        (0, y.rn)((0, k.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === ek.WtW.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? g.Z.selectParticipant(n.id, null)
                            : g.Z.selectParticipant(n.id, e.id));
            }),
            eG(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, S.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, V.uL)((0, eb.LY)(n)), F.openChannelCallPopout(e);
                    };
                null == t || (0, C.R)() ? n() : (0, P.Z)({ onConfirm: n });
            }),
            eG(this, "handleStayOnTop", (e) => {
                (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.STAY_ON_TOP, e), F.setAlwaysOnTop(ek.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eG(this, "handleClosePopout", () => {
                F.close(ek.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eG(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === ek.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eG(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ek.AEg.MINIMUM || n === ek.AEg.NORMAL
                    ? (0, r.jsx)(K.ZP, {
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
                    h = u.some((e) => e.type === eM.fO.STREAM),
                    g =
                        e === ek.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ek.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: m, canInvite: b } = this.viewProperties,
                    y = l
                        ? (0, r.jsx)(q.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eM.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eM.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          })
                        : (0, r.jsx)(en.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eM.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.d4z.GUILD_VOICE ? ek.ZY5.GUILD_CHANNEL : ek.ZY5.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !s ? y : null,
                        m
                            ? (0, r.jsxs)(w.Z, {
                                  className: eU.iconWrapper,
                                  align: w.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ee.Z, {
                                          label: p ? eL.intl.string(eL.t.kkKapG) : eL.intl.string(eL.t["5MstTl"]),
                                          direction: d,
                                          className: eU.leftTrayIcon,
                                          onClick: () => {
                                              (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.CHAT, p), g();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, r.jsx)(f.mAB, {
                                                className: eU.badge,
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
                            : (0, r.jsx)(Q.Z, {
                                  children: (0, r.jsx)(eZ.Z, {
                                      className: a()(eU.leftTrayIcon, eU.viewersButton),
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
                                hasActiveStream: h,
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
                        inCall: l,
                        canUseHaven: a,
                    } = this.props,
                    { canFullscreen: o, canStayOnTop: s, canPopout: c, useTheme: u } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== eM.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(el.Z, {
                                  context: (0, eC.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eU.volumeSlider,
                                  className: eU.rightTrayIcon,
                                  location: Z.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        s
                            ? (0, r.jsx)(ei.Z, {
                                  className: eU.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        a &&
                            l &&
                            (0, r.jsx)(f.hU, {
                                variant: "icon-only",
                                "aria-label": "Haven",
                                icon: f.YqE,
                                onClick: this.handleHaven,
                            }),
                        c
                            ? (0, r.jsx)(er.Z, {
                                  themeable: u,
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
                        o
                            ? (0, r.jsx)(et.Z, {
                                  themeable: u,
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
            eG(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: i } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && i)
                    ? null
                    : (0, r.jsx)(eS.ZP, {
                          children: (0, r.jsx)(J.Z, {
                              className: eU.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eG(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eA.ZP, {
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
                    { useExternalHeader: o, renderHeader: s } = this.viewProperties;
                return s
                    ? (0, r.jsx)(Q.Z, {
                          children: (0, r.jsx)("div", {
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
                      })
                    : null;
            });
    }
}
let eW = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a, canPopout: o = !0, popoutType: s } = e,
        { width: c = 0, ref: p } = (0, j.ZP)(),
        { width: h = 0, height: g = 0, ref: m } = (0, j.ZP)(),
        { ref: b } = (0, j.ZP)(),
        y = (0, B.bp)(),
        C = (0, M.Z)(),
        S = (0, u.e7)([ef.Z], () => {
            var e;
            return (null != (e = null == C ? void 0 : C.channelId) ? e : ef.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: P,
            filteredParticipants: N,
            participantsVersion: A,
            mode: w,
            layout: k,
            participantsOpen: L,
            participantsListOpen: U,
            chatOpen: F,
            selectedParticipant: V,
        } = (0, u.cj)([ex.Z], () => {
            let e = y === ek.IlC.POPOUT,
                t = ex.Z.getMode(n.id),
                r = ex.Z.getLayout(n.id, y);
            e && (t = ek.WtW.VIDEO);
            let i = t === ek.WtW.VIDEO ? r : ek.AEg.MINIMUM;
            return (
                e && i !== ek.AEg.FULL_SCREEN && (i = ek.AEg.NO_CHAT),
                r === ek.AEg.HAVEN && (i = r),
                {
                    mode: t,
                    layout: i,
                    selectedParticipant: t !== ek.WtW.VOICE ? ex.Z.getSelectedParticipant(n.id) : null,
                    participants: ex.Z.getParticipants(n.id),
                    filteredParticipants: ex.Z.getFilteredParticipants(n.id),
                    participantsOpen: ex.Z.getParticipantsOpen(n.id),
                    chatOpen: ex.Z.getChatOpen(n.id),
                    participantsListOpen: ex.Z.getParticipantsListOpen(n.id),
                    participantsVersion: ex.Z.getParticipantsVersion(n.id),
                }
            );
        }, [y, n.id]),
        z = (0, u.Wu)([eo.Z], () => eo.Z.getAllActiveStreams()),
        { selectedStream: K } = (0, u.cj)(
            [eo.Z],
            () => ({ selectedStream: null != V ? eo.Z.getActiveStreamForStreamKey(V.id) : null }),
            [V],
        ),
        Y = (0, u.e7)([eu.Z], () => eu.Z.getGuild(n.getGuildId())),
        q = (0, u.e7)([ep.ZP], () => ep.ZP.getMentionCount(n.id), [n.id]),
        X = (0, u.e7)([es.default], () => es.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: J } = (0, u.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(ek.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(ek.KJ3.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, u.e7)([ed.Z], () => ed.Z.can(ek.Plq.CONNECT, n)),
        ee = (0, u.e7)([ec.Z], () => ec.Z.getToastsEnabled(n.id)),
        et = (0, u.e7)([D.default], () => D.default.getAwaitingRemoteSessionInfo()),
        en = (0, u.e7)([W.ZP], () => W.ZP.callHeaderHeight),
        er = i.useCallback((e) => {
            v.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null != (t = null == Y ? void 0 : Y.id) ? t : null,
        el = (0, I.Z)(ei, n.id),
        ea = (0, u.e7)([E.Z], () => E.Z.getFetchState(), []),
        eh = (0, x.Z)(ea);
    i.useEffect(() => {
        ea === E.O.ERROR &&
            eh !== E.O.ERROR &&
            (0, f.showToast)((0, f.createToast)(eL.intl.string(eL.t["AlJyI+"]), f.ToastType.FAILURE));
    }, [ea, eh]);
    let eg = (0, u.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                S &&
                    w === ek.WtW.VIDEO &&
                    ((t = await eO.ZP.blockDisplaySleep()), e && null != t && eO.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eO.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [S, w]);
    let em = (0, eE.Z)(n, !0),
        { hasParticipantsPanel: eb } = (0, eN.Z)({ location: "ChannelCall" }),
        ey = (0, R.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ev } = (0, T.ZP)(Z.Z.CHANNEL_CALL),
        ej = c - eM.oo,
        eC = _.ZP.getEmbeddedActivitiesForChannel(n.id),
        { enabled: e_ } = G.t.useConfig({ location: "ChannelCall" }),
        { theme: eI } = (0, f.TCT)();
    return (0, r.jsx)(T.Gt, {
        value: ev,
        children: (0, r.jsx)(O.Z, {
            page: ek.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(eS.B2, {
                children: (0, r.jsxs)(eA._A, {
                    children: [
                        (0, r.jsx)(ez, {
                            channel: n,
                            guild: Y,
                            hasConnectPermission: $,
                            participantsOpen: L,
                            participantsListOpen: U && eb,
                            renderExternalHeader: l,
                            appContext: y,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: J,
                            mentionCount: q,
                            selectedStream: K,
                            mode: w,
                            inCall: S,
                            participants: P,
                            filteredParticipants: N,
                            participantsVersion: A,
                            layout: k,
                            chatOpen: F,
                            maxSidebarWidth: ej,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: X,
                            selectedParticipant: V,
                            allActiveStreams: z,
                            useNewInviteButton: el,
                            connectedEmbeddedActivity: null != eg ? eg : void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: er,
                            wrapperRef: p,
                            callContainerDimensions: {
                                width: h,
                                height: g,
                            },
                            callContainerRef: m,
                            channelChatRef: b,
                            width: c,
                            maxHeight: a,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eC,
                            theme: eI,
                            canPopout: o,
                            popoutType: s,
                            canUseHaven: e_,
                        }),
                        !n.isPrivate() && (0, r.jsx)(eA.YR, {}),
                        (0, r.jsx)(eS.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
