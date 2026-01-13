n.d(t, { Z: () => eK }), n(388685);
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
    eu = n(271383),
    ed = n(430824),
    ep = n(496675),
    ef = n(306680),
    eh = n(944486),
    eg = n(594174),
    em = n(979651),
    eb = n(626135),
    ey = n(934415),
    ev = n(585483),
    eO = n(358085),
    ej = n(998502),
    ex = n(228488),
    eC = n(358221),
    eE = n(414910),
    eS = n(887012),
    e_ = n(909820),
    eI = n(493010),
    eP = n(742603),
    eZ = n(71127),
    eN = n(221888),
    eT = n(185935),
    eA = n(900211),
    ew = n(18759),
    eR = n(522651),
    eD = n(795318),
    eM = n(878752),
    ek = n(354459),
    eL = n(981631),
    eU = n(388032),
    eG = n(94720);
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
let eV = {
        [eL.AEg.NORMAL]: eG.normal,
        [eL.AEg.MINIMUM]: eG.minimum,
        [eL.AEg.NO_CHAT]: eG.noChat,
        [eL.AEg.FULL_SCREEN]: eG.fullScreen,
        [eL.AEg.HAVEN]: eG.haven,
    },
    ez = {
        [eL.IlC.POPOUT]: eG.popout,
        [eL.IlC.APP]: null,
        [eL.IlC.OVERLAY]: null,
        [eL.IlC.CALL_TILE_POPOUT]: null,
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
                eL.rMx.VIDEO_LAYOUT_TOGGLED,
                eF({ video_layout: this.inPopout ? "popout" : t }, (0, N.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ex.NO, this.handleFullScreenChange),
            (this.inPopout && (0, eO.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: i } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === eL.WtW.VIDEO &&
                r === eL.WtW.VOICE &&
                (0, ex.rB)(l, this.currentDocument) &&
                (0, ex.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || i !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && h.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eO.isPlatformEmbedded && ej.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eO.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eU.intl.string(eU.t.J5bXZU) }
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
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL,
                canInvite: s,
                canPopout: a,
                canFullscreen: l,
                canChangeLayout: o,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!r)
            return eH(eF({}, c), {
                canFullscreen: l,
                useTheme: !0,
            });
        switch (e) {
            case eL.AEg.FULL_SCREEN:
                return eH(eF({}, c), { canPopout: !this.inPopout && this.popoutOpen && c.canPopout });
            case eL.AEg.MINIMUM:
                return eH(eF({}, c), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eL.AEg.HAVEN:
            case eL.AEg.NO_CHAT:
            case eL.AEg.NORMAL:
                return eF({}, c);
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
            v = h === eL.AEg.MINIMUM,
            O = v || h === eL.AEg.NORMAL,
            j = l && o === eL.WtW.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                $.Z,
                eH(
                    eF(
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
            h = i === eL.WtW.VIDEO,
            g = e !== eL.AEg.HAVEN && e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c,
            m = eL.BRd.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: a()(eG.wrapper, eV[e], ez[o], {
                [eG.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
                [eG.video]: h,
                [eG.sidebarOpen]: l || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                g && null != p
                    ? {
                          minHeight: ek._i,
                          maxHeight: c,
                          height: p,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(f.f6W, {
                    theme: m,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: a()(eG.callContainer, l || e !== eL.AEg.FULL_SCREEN ? void 0 : eG.fullScreen, t),
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
                    (0, r.jsx)(eA.Z, {
                        minHeight: ek._i,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, r.jsx)("div", {
                    className: eG.channelChatWrapper,
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
            eB(this, "_prevLayout", eL.AEg.MINIMUM),
            eB(this, "_wrapperRef", i.createRef()),
            eB(this, "_callContainerRef", i.createRef()),
            eB(this, "_channelChatRef", i.createRef()),
            eB(this, "_contentRef", i.createRef()),
            eB(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eB(this, "_lastIdleProps", null),
            eB(this, "state", { resizedHeight: W.ZP.callHeaderHeight }),
            eB(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ex.rB)(e, this.currentDocument) ||
                        this.props.layout !== eL.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eB(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== eL.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(eL.AEg.FULL_SCREEN),
                          (0, ex.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eB(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === eL.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ex.Pr)(e, this.currentDocument));
            }),
            eB(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === eL.AEg.NORMAL ? eL.AEg.NO_CHAT : eL.AEg.NORMAL);
            }),
            eB(this, "handleHaven", () => {
                this.props.layout === eL.AEg.HAVEN
                    ? (this.handleChangeLayout(eL.AEg.NO_CHAT), U.ZP.disconnect(this.props.channel.id))
                    : this.handleChangeLayout(eL.AEg.HAVEN);
            }),
            eB(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (g.Z.updateLayout(t.id, e, n),
                    e === eL.AEg.FULL_SCREEN && t.isPrivate() && ev.S.dispatch(eL.CkL.TEXTAREA_BLUR));
            }),
            eB(this, "handleDisconnect", () => {
                this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eB(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, A.h)({
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
                return (0, eD.u)(e, Z.Z.CHANNEL_CALL, {
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
                            (0, m.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eH(eF({}, n), {
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
                        let f = eg.default.getUser(e.id);
                        if (null != f) {
                            if (i)
                                return (0, z.D)(t, f, c, p, (e, t) =>
                                    (0, eD.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: ek.A5.THREE_DOT,
                                        tileType: ek.TH.USER,
                                        targetUserId: f.id,
                                        location: Z.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case eL.d4z.DM:
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
                                                    eH(eF({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: f,
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
                                                    eH(eF({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eL.AEg.MINIMUM || d === eL.AEg.NORMAL,
                                                        user: f,
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
                                                        eH(eF({}, n), {
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
                    (0, L.p9)(n, em.Z, ed.Z, ep.Z, D.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === i.filter((t) => (0, k.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length &&
                        (0, y.rn)((0, k.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === eL.WtW.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? g.Z.selectParticipant(n.id, null)
                            : g.Z.selectParticipant(n.id, e.id));
            }),
            eB(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, S.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null == n || eu.ZP.isCurrentUserGuest(n) || (0, V.uL)((0, ey.LY)(n)),
                            F.openChannelCallPopout(e);
                    };
                null == t || (0, C.R)() ? n() : (0, P.Z)({ onConfirm: n });
            }),
            eB(this, "handleStayOnTop", (e) => {
                (0, eR.v)(Z.Z.VOICE_CONTROL_TRAY, eR.d.STAY_ON_TOP, e), F.setAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eB(this, "handleClosePopout", () => {
                F.close(eL.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eB(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    i = n === eL.AEg.FULL_SCREEN;
                ((!i && (null == r ? void 0 : r.id) !== e.id) || (i && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eB(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL
                    ? (0, r.jsx)(K.ZP, {
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
                let d = e === eL.AEg.NO_CHAT ? ee.Z.Directions.UP : ee.Z.Directions.DOWN,
                    p = [eL.AEg.FULL_SCREEN, eL.AEg.NO_CHAT].includes(e),
                    h = u.some((e) => e.type === ek.fO.STREAM),
                    g =
                        e === eL.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eL.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: m, canInvite: b } = this.viewProperties,
                    y = l
                        ? (0, r.jsx)(q.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === ek.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === ek.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: i,
                              className: eG.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
                          })
                        : (0, r.jsx)(en.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === ek.fO.STREAM ? (0, k.my)(o.id) : void 0,
                              className: eG.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !s ? y : null,
                        m
                            ? (0, r.jsxs)(w.Z, {
                                  className: eG.iconWrapper,
                                  align: w.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ee.Z, {
                                          label: p ? eU.intl.string(eU.t.kkKapG) : eU.intl.string(eU.t["5MstTl"]),
                                          direction: d,
                                          className: eG.leftTrayIcon,
                                          onClick: () => {
                                              (0, eR.v)(Z.Z.VOICE_CONTROL_TRAY, eR.d.CHAT, p), g();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, r.jsx)(f.mAB, {
                                                className: eG.badge,
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
                            : (0, r.jsx)(Q.Z, {
                                  children: (0, r.jsx)(eN.Z, {
                                      className: a()(eG.leftTrayIcon, eG.viewersButton),
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
                                hasActiveStream: h,
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
                        inCall: l,
                        canUseHaven: a,
                    } = this.props,
                    { canFullscreen: o, canStayOnTop: s, canPopout: c, useTheme: u } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != i && i.type !== ek.fO.ACTIVITY && i.user.id !== n
                            ? (0, r.jsx)(el.Z, {
                                  context: (0, eE.Z)(i.type),
                                  userId: i.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eG.volumeSlider,
                                  className: eG.rightTrayIcon,
                                  location: Z.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        s
                            ? (0, r.jsx)(ei.Z, {
                                  className: eG.rightTrayIcon,
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
                                  className: eG.rightTrayIcon,
                                  onOpenPopout: () => {
                                      (0, eR.v)(Z.Z.VOICE_CONTROL_TRAY, eR.d.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eR.v)(Z.Z.VOICE_CONTROL_TRAY, eR.d.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        o
                            ? (0, r.jsx)(et.Z, {
                                  themeable: u,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eG.rightTrayIcon,
                                  onClick: () => {
                                      (0, eR.v)(
                                          Z.Z.VOICE_CONTROL_TRAY,
                                          eR.d.FULL_SCREEN,
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
                    : (0, r.jsx)(e_.ZP, {
                          children: (0, r.jsx)(J.Z, {
                              className: eG.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eB(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(ew.ZP, {
                    children: (0, r.jsx)(ea.Z, {
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
                    { useExternalHeader: o, renderHeader: s } = this.viewProperties;
                return s
                    ? (0, r.jsx)(Q.Z, {
                          children: (0, r.jsx)("div", {
                              className: eG.headerWrapper,
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
                      })
                    : null;
            });
    }
}
let eK = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a, canPopout: o = !0, popoutType: s } = e,
        { width: c = 0, ref: p } = (0, j.ZP)(),
        { width: h = 0, height: g = 0, ref: m } = (0, j.ZP)(),
        { ref: b } = (0, j.ZP)(),
        y = (0, B.bp)(),
        C = (0, M.Z)(),
        S = (0, u.e7)([eh.Z], () => {
            var e;
            return (null != (e = null == C ? void 0 : C.channelId) ? e : eh.Z.getVoiceChannelId()) === n.id;
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
        } = (0, u.cj)([eC.Z], () => {
            let e = y === eL.IlC.POPOUT,
                t = eC.Z.getMode(n.id),
                r = eC.Z.getLayout(n.id, y);
            e && (t = eL.WtW.VIDEO);
            let i = t === eL.WtW.VIDEO ? r : eL.AEg.MINIMUM;
            return (
                e && i !== eL.AEg.FULL_SCREEN && (i = eL.AEg.NO_CHAT),
                r === eL.AEg.HAVEN && (i = r),
                {
                    mode: t,
                    layout: i,
                    selectedParticipant: t !== eL.WtW.VOICE ? eC.Z.getSelectedParticipant(n.id) : null,
                    participants: eC.Z.getParticipants(n.id),
                    filteredParticipants: eC.Z.getFilteredParticipants(n.id),
                    participantsOpen: eC.Z.getParticipantsOpen(n.id),
                    chatOpen: eC.Z.getChatOpen(n.id),
                    participantsListOpen: eC.Z.getParticipantsListOpen(n.id),
                    participantsVersion: eC.Z.getParticipantsVersion(n.id),
                }
            );
        }, [y, n.id]),
        z = (0, u.Wu)([eo.Z], () => eo.Z.getAllActiveStreams()),
        { selectedStream: K } = (0, u.cj)(
            [eo.Z],
            () => ({ selectedStream: null != V ? eo.Z.getActiveStreamForStreamKey(V.id) : null }),
            [V],
        ),
        Y = (0, u.e7)([ed.Z], () => ed.Z.getGuild(n.getGuildId())),
        q = (0, u.e7)([ef.ZP], () => ef.ZP.getMentionCount(n.id), [n.id]),
        X = (0, u.e7)([es.default], () => es.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: J } = (0, u.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, u.e7)([ep.Z], () => ep.Z.can(eL.Plq.CONNECT, n)),
        ee = (0, u.e7)([ec.Z], () => ec.Z.getToastsEnabled(n.id)),
        et = (0, u.e7)([D.default], () => D.default.getAwaitingRemoteSessionInfo()),
        en = (0, u.e7)([W.ZP], () => W.ZP.callHeaderHeight),
        er = i.useCallback((e) => {
            v.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = null != (t = null == Y ? void 0 : Y.id) ? t : null,
        el = (0, I.Z)(ei, n.id),
        ea = (0, u.e7)([E.Z], () => E.Z.getFetchState(), []),
        eu = (0, x.Z)(ea);
    i.useEffect(() => {
        ea === E.O.ERROR &&
            eu !== E.O.ERROR &&
            (0, f.showToast)((0, f.createToast)(eU.intl.string(eU.t["AlJyI+"]), f.ToastType.FAILURE));
    }, [ea, eu]);
    let eg = (0, u.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    i.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                S &&
                    w === eL.WtW.VIDEO &&
                    ((t = await ej.ZP.blockDisplaySleep()), e && null != t && ej.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ej.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [S, w]);
    let em = (0, eS.Z)(n, !0),
        { hasParticipantsPanel: eb } = (0, eT.Z)({ location: "ChannelCall" }),
        ey = (0, R.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ev } = (0, T.ZP)(Z.Z.CHANNEL_CALL),
        eO = c - ek.oo,
        ex = _.ZP.getEmbeddedActivitiesForChannel(n.id),
        { enabled: eE } = G.t.useConfig({ location: "ChannelCall" }),
        { theme: eI } = (0, f.TCT)();
    return (0, r.jsx)(T.Gt, {
        value: ev,
        children: (0, r.jsx)(O.Z, {
            page: eL.ZY5.CHANNEL_CALL,
            children: (0, r.jsx)(e_.B2, {
                children: (0, r.jsxs)(ew._A, {
                    children: [
                        (0, r.jsx)(eW, {
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
                            maxSidebarWidth: eO,
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
                            currentChannelActivities: ex,
                            theme: eI,
                            canPopout: o,
                            popoutType: s,
                            canUseHaven: eE,
                        }),
                        !n.isPrivate() && (0, r.jsx)(ew.YR, {}),
                        (0, r.jsx)(e_.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
