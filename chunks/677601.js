n.d(t, { Z: () => ez }), n(388685);
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
    f = n(481060),
    h = n(570140),
    m = n(475179),
    g = n(239091),
    b = n(287734),
    y = n(872810),
    C = n(153867),
    v = n(410575),
    x = n(393238),
    O = n(110924),
    E = n(636449),
    j = n(115130),
    S = n(566620),
    _ = n(317381),
    P = n(596040),
    I = n(617552),
    Z = n(100527),
    T = n(367907),
    N = n(906732),
    A = n(213609),
    w = n(600164),
    M = n(211644),
    R = n(258609),
    D = n(446226),
    L = n(569545),
    k = n(102172),
    U = n(785925),
    V = n(521506),
    H = n(728285),
    F = n(788983),
    B = n(928518),
    G = n(703656),
    W = n(880395),
    z = n(740492),
    q = n(793319),
    K = n(3861),
    Y = n(493754),
    X = n(937995),
    J = n(618158),
    Q = n(880831),
    $ = n(73563),
    ee = n(751843),
    et = n(268353),
    en = n(786915),
    ei = n(800965),
    er = n(107169),
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
    em = n(979651),
    eg = n(626135),
    eb = n(934415),
    ey = n(585483),
    eC = n(358085),
    ev = n(998502),
    ex = n(228488),
    eO = n(358221),
    eE = n(414910),
    ej = n(887012),
    eS = n(909820),
    e_ = n(493010),
    eP = n(742603),
    eI = n(71127),
    eZ = n(221888),
    eT = n(185935),
    eN = n(900211),
    eA = n(18759),
    ew = n(522651),
    eM = n(795318),
    eR = n(878752),
    eD = n(354459),
    eL = n(981631),
    ek = n(388032),
    eU = n(94720);
function eV(e, t, n) {
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
                eV(e, t, n[t]);
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
let eB = {
        [eL.AEg.NORMAL]: eU.normal,
        [eL.AEg.MINIMUM]: eU.minimum,
        [eL.AEg.NO_CHAT]: eU.noChat,
        [eL.AEg.FULL_SCREEN]: eU.fullScreen,
        [eL.AEg.HAVEN]: eU.haven,
    },
    eG = {
        [eL.IlC.POPOUT]: eU.popout,
        [eL.IlC.APP]: null,
        [eL.IlC.OVERLAY]: null,
        [eL.IlC.CALL_TILE_POPOUT]: null,
    };
class eW extends r.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (t = null == (e = this.props.popoutWindow) ? void 0 : e.window) ? t : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ex.NO, this.handleFullScreenChange),
            eg.default.track(
                eL.rMx.VIDEO_LAYOUT_TOGGLED,
                eH({ video_layout: this.inPopout ? "popout" : t }, (0, T.AB)(e.id)),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ex.NO, this.handleFullScreenChange),
            (this.inPopout && (0, eC.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: r } = this.props,
            l = this.getRootNode();
        if (
            (null != l &&
                e.mode === eL.WtW.VIDEO &&
                i === eL.WtW.VOICE &&
                (0, ex.rB)(l, this.currentDocument) &&
                (0, ex.Pr)(l, this.currentDocument),
            e.participantsOpen !== t || r !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && h.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eC.isPlatformEmbedded && ev.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
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
            ? { mainText: ek.intl.string(ek.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eL.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: r } = this.props,
            l = t === eL.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eL.WtW.VIDEO && i && this.popoutSupported && r,
            o = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
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
        if (!i)
            return eF(eH({}, c), {
                canFullscreen: l,
                useTheme: !0,
            });
        switch (e) {
            case eL.AEg.FULL_SCREEN:
                return eF(eH({}, c), { canPopout: !this.inPopout && this.popoutOpen && c.canPopout });
            case eL.AEg.MINIMUM:
                return eF(eH({}, c), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eL.AEg.HAVEN:
            case eL.AEg.NO_CHAT:
            case eL.AEg.NORMAL:
                return eH({}, c);
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
                guild: f,
                layout: h,
                forceShowControls: m,
                awaitingRemoteSessionInfo: g,
                currentChannelActivities: b,
                callContainerDimensions: y,
            } = this.props,
            C = h === eL.AEg.MINIMUM,
            v = C || h === eL.AEg.NORMAL,
            x = l && o === eL.WtW.VIDEO,
            O = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(
                $.Z,
                eF(
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
                                : (0, i.jsx)(K.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      channel: p,
                                      hasConnectPermission: a,
                                      guild: f,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: x ? r : null,
                                      layout: h,
                                      idle: e.idle,
                                      mode: o,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: s && (!v || O),
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
            h = r === eL.WtW.VIDEO,
            m = e !== eL.AEg.HAVEN && e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c,
            g = eL.BRd.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(eU.wrapper, eB[e], eG[o], {
                [eU.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
                [eU.video]: h,
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
                (0, i.jsx)(f.f6W, {
                    theme: g,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(eU.callContainer, l || e !== eL.AEg.FULL_SCREEN ? void 0 : eU.fullScreen, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(X.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                m &&
                    (0, i.jsx)(eN.Z, {
                        minHeight: eD._i,
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
                                    (0, i.jsx)(e_.Z, {
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
            eV(this, "_prevLayout", eL.AEg.MINIMUM),
            eV(this, "_wrapperRef", r.createRef()),
            eV(this, "_callContainerRef", r.createRef()),
            eV(this, "_channelChatRef", r.createRef()),
            eV(this, "_contentRef", r.createRef()),
            eV(this, "_videoBackgroundTooltipTimeout", new p.V7()),
            eV(this, "_lastIdleProps", null),
            eV(this, "state", { resizedHeight: z.ZP.callHeaderHeight }),
            eV(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ex.rB)(e, this.currentDocument) ||
                        this.props.layout !== eL.AEg.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eV(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== eL.AEg.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(eL.AEg.FULL_SCREEN),
                          (0, ex.Dj)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eV(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    this.props.layout === eL.AEg.FULL_SCREEN &&
                    (this.handleChangeLayout(this._prevLayout), (0, ex.Pr)(e, this.currentDocument));
            }),
            eV(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === eL.AEg.NORMAL ? eL.AEg.NO_CHAT : eL.AEg.NORMAL);
            }),
            eV(this, "handleHaven", () => {
                this.props.layout === eL.AEg.HAVEN
                    ? (this.handleChangeLayout(eL.AEg.NO_CHAT), U.ZP.disconnect(this.props.channel.id))
                    : this.handleChangeLayout(eL.AEg.HAVEN);
            }),
            eV(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e &&
                    (m.Z.updateLayout(t.id, e, n),
                    e === eL.AEg.FULL_SCREEN && t.isPrivate() && ey.S.dispatch(eL.CkL.TEXTAREA_BLUR));
            }),
            eV(this, "handleDisconnect", () => {
                this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eV(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, A.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eD.fO.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eV(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eD.A5.CONTEXT_MENU;
                return (0, eM.u)(e, Z.Z.CHANNEL_CALL, {
                    entrypoint: i,
                    tileType: n,
                    targetUserId: t.type !== eD.fO.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eV(this, "handleContextMenu", (e, t, r, l) => {
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
                        let f = eh.default.getUser(e.id);
                        if (null != f) {
                            if (r)
                                return (0, W.D)(t, f, c, p, (e, t) =>
                                    (0, eM.o)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eD.A5.THREE_DOT,
                                        tileType: eD.TH.USER,
                                        targetUserId: f.id,
                                        location: Z.Z.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case eL.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("66165"),
                                                n.e("56826"),
                                                n.e("43584"),
                                            ]).then(n.bind(n, 131404));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    t,
                                                    eF(eH({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: f,
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
                                                n.e("66165"),
                                                n.e("82456"),
                                            ]).then(n.bind(n, 354589));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    t,
                                                    eF(eH({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eL.AEg.MINIMUM || d === eL.AEg.NORMAL,
                                                        user: f,
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
                                                    n.e("66165"),
                                                    n.e("8982"),
                                                    n.e("7717"),
                                                    n.e("96253"),
                                                ]).then(n.bind(n, 757387));
                                                return (n) =>
                                                    (0, i.jsx)(
                                                        t,
                                                        eF(eH({}, n), {
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
            eV(this, "handleCallResize", (e) => {
                this.setState({ resizedHeight: e });
            }),
            eV(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: r, inCall: l, mode: a } = this.props;
                (0, eD._5)(e) &&
                    (0, k.p9)(n, em.Z, eu.Z, ed.Z, R.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === r.filter((t) => (0, L.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length &&
                        (0, y.rn)((0, L.my)(e.id), { forceMultiple: t.shiftKey })),
                    l &&
                        a === eL.WtW.VIDEO &&
                        ((null == i ? void 0 : i.id) === e.id
                            ? m.Z.selectParticipant(n.id, null)
                            : m.Z.selectParticipant(n.id, e.id));
            }),
            eV(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, S.nJ)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null != n && (0, G.uL)((0, eb.LY)(n)), F.openChannelCallPopout(e);
                    };
                null == t || (0, E.R)() ? n() : (0, I.Z)({ onConfirm: n });
            }),
            eV(this, "handleStayOnTop", (e) => {
                (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.STAY_ON_TOP, e), F.setAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eV(this, "handleClosePopout", () => {
                F.close(eL.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eV(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    r = n === eL.AEg.FULL_SCREEN;
                ((!r && (null == i ? void 0 : i.id) !== e.id) || (r && (null == i ? void 0 : i.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eV(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL
                    ? (0, i.jsx)(q.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps,
                      })
                    : null;
            }),
            eV(this, "renderBottomLeft", () => {
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
                let d = e === eL.AEg.NO_CHAT ? ee.Z.Directions.UP : ee.Z.Directions.DOWN,
                    p = [eL.AEg.FULL_SCREEN, eL.AEg.NO_CHAT].includes(e),
                    h = u.some((e) => e.type === eD.fO.STREAM),
                    m =
                        e === eL.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eL.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: b } = this.viewProperties,
                    y = l
                        ? (0, i.jsx)(Y.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eD.fO.STREAM ? (0, L.my)(o.id) : void 0,
                              applicationId:
                                  (null == o ? void 0 : o.type) === eD.fO.ACTIVITY ? o.applicationId : void 0,
                              appContext: r,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
                          })
                        : (0, i.jsx)(en.Z, {
                              channel: n,
                              stream: (null == o ? void 0 : o.type) === eD.fO.STREAM ? (0, L.my)(o.id) : void 0,
                              className: eU.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL,
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
                                      (0, i.jsx)(ee.Z, {
                                          label: p ? ek.intl.string(ek.t.kkKapG) : ek.intl.string(ek.t["5MstTl"]),
                                          direction: d,
                                          className: eU.leftTrayIcon,
                                          onClick: () => {
                                              (0, ew.v)(Z.Z.VOICE_CONTROL_TRAY, ew.d.CHAT, p), m();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(f.mAB, {
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
                            : (0, i.jsx)(J.Z, {
                                  children: (0, i.jsx)(eZ.Z, {
                                      className: a()(eU.leftTrayIcon, eU.viewersButton),
                                      participant: o,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eL.AEg.FULL_SCREEN,
                                  }),
                              }),
                        s &&
                            (0, i.jsx)(eR.Z, {
                                channel: n,
                                hasActiveStream: h,
                            }),
                    ],
                });
            }),
            eV(this, "renderBottomRight", () => {
                let {
                        popoutWindow: e,
                        popoutWindowAlwaysOnTop: t,
                        currentUserId: n,
                        selectedParticipant: r,
                        inCall: l,
                        canUseHaven: a,
                    } = this.props,
                    { canFullscreen: o, canStayOnTop: s, canPopout: c, useTheme: u } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != r && r.type !== eD.fO.ACTIVITY && r.user.id !== n
                            ? (0, i.jsx)(el.Z, {
                                  context: (0, eE.Z)(r.type),
                                  userId: r.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eU.volumeSlider,
                                  className: eU.rightTrayIcon,
                                  location: Z.Z.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        s
                            ? (0, i.jsx)(er.Z, {
                                  className: eU.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        a &&
                            l &&
                            (0, i.jsx)(f.hU, {
                                variant: "icon-only",
                                "aria-label": "Haven",
                                icon: f.YqE,
                                onClick: this.handleHaven,
                            }),
                        c
                            ? (0, i.jsx)(ei.Z, {
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
                            ? (0, i.jsx)(et.Z, {
                                  themeable: u,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eU.rightTrayIcon,
                                  onClick: () => {
                                      (0, ew.v)(
                                          Z.Z.VOICE_CONTROL_TRAY,
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
            eV(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: r } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && r)
                    ? null
                    : (0, i.jsx)(eS.ZP, {
                          children: (0, i.jsx)(Q.Z, {
                              className: eU.chatToasts,
                              channelId: n.id,
                          }),
                      });
            }),
            eV(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eA.ZP, {
                    children: (0, i.jsx)(ea.Z, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eV(this, "renderHeader", () => {
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
                    ? (0, i.jsx)(J.Z, {
                          children: (0, i.jsx)("div", {
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
                      })
                    : null;
            });
    }
}
let ez = function (e) {
    var t;
    let { channel: n, renderExternalHeader: l, maxHeight: a, canPopout: o = !0, popoutType: s } = e,
        { width: c = 0, ref: p } = (0, x.ZP)(),
        { width: h = 0, height: m = 0, ref: g } = (0, x.ZP)(),
        { ref: b } = (0, x.ZP)(),
        y = (0, H.bp)(),
        E = (0, D.Z)(),
        S = (0, u.e7)([ef.Z], () => {
            var e;
            return (null != (e = null == E ? void 0 : E.channelId) ? e : ef.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: I,
            filteredParticipants: T,
            participantsVersion: A,
            mode: w,
            layout: L,
            participantsOpen: k,
            participantsListOpen: U,
            chatOpen: F,
            selectedParticipant: G,
        } = (0, u.cj)([eO.Z], () => {
            let e = y === eL.IlC.POPOUT,
                t = eO.Z.getMode(n.id),
                i = eO.Z.getLayout(n.id, y);
            e && (t = eL.WtW.VIDEO);
            let r = t === eL.WtW.VIDEO ? i : eL.AEg.MINIMUM;
            return (
                e && r !== eL.AEg.FULL_SCREEN && (r = eL.AEg.NO_CHAT),
                i === eL.AEg.HAVEN && (r = i),
                {
                    mode: t,
                    layout: r,
                    selectedParticipant: t !== eL.WtW.VOICE ? eO.Z.getSelectedParticipant(n.id) : null,
                    participants: eO.Z.getParticipants(n.id),
                    filteredParticipants: eO.Z.getFilteredParticipants(n.id),
                    participantsOpen: eO.Z.getParticipantsOpen(n.id),
                    chatOpen: eO.Z.getChatOpen(n.id),
                    participantsListOpen: eO.Z.getParticipantsListOpen(n.id),
                    participantsVersion: eO.Z.getParticipantsVersion(n.id),
                }
            );
        }, [y, n.id]),
        W = (0, u.Wu)([eo.Z], () => eo.Z.getAllActiveStreams()),
        { selectedStream: q } = (0, u.cj)(
            [eo.Z],
            () => ({ selectedStream: null != G ? eo.Z.getActiveStreamForStreamKey(G.id) : null }),
            [G],
        ),
        K = (0, u.e7)([eu.Z], () => eu.Z.getGuild(n.getGuildId())),
        Y = (0, u.e7)([ep.ZP], () => ep.ZP.getMentionCount(n.id), [n.id]),
        X = (0, u.e7)([es.default], () => es.default.getId()),
        { popoutWindow: J, popoutWindowAlwaysOnTop: Q } = (0, u.cj)([B.Z], () => ({
            popoutWindow: B.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: B.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, u.e7)([ed.Z], () => ed.Z.can(eL.Plq.CONNECT, n)),
        ee = (0, u.e7)([ec.Z], () => ec.Z.getToastsEnabled(n.id)),
        et = (0, u.e7)([R.default], () => R.default.getAwaitingRemoteSessionInfo()),
        en = (0, u.e7)([z.ZP], () => z.ZP.callHeaderHeight),
        ei = r.useCallback((e) => {
            C.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        er = null != (t = null == K ? void 0 : K.id) ? t : null,
        el = (0, P.Z)(er, n.id),
        ea = (0, u.e7)([j.Z], () => j.Z.getFetchState(), []),
        eh = (0, O.Z)(ea);
    r.useEffect(() => {
        ea === j.O.ERROR &&
            eh !== j.O.ERROR &&
            (0, f.showToast)((0, f.createToast)(ek.intl.string(ek.t["AlJyI+"]), f.ToastType.FAILURE));
    }, [ea, eh]);
    let em = (0, u.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    r.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                S &&
                    w === eL.WtW.VIDEO &&
                    ((t = await ev.ZP.blockDisplaySleep()), e && null != t && ev.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ev.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [S, w]);
    let eg = (0, ej.Z)(n, !0),
        { hasParticipantsPanel: eb } = (0, eT.Z)({ location: "ChannelCall" }),
        ey = (0, M.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eC } = (0, N.ZP)(Z.Z.CHANNEL_CALL),
        ex = c - eD.oo,
        eE = _.ZP.getEmbeddedActivitiesForChannel(n.id),
        { enabled: e_ } = V.t.useConfig({ location: "ChannelCall" }),
        { theme: eP } = (0, f.TCT)();
    return (0, i.jsx)(N.Gt, {
        value: eC,
        children: (0, i.jsx)(v.Z, {
            page: eL.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eS.B2, {
                children: (0, i.jsxs)(eA._A, {
                    children: [
                        (0, i.jsx)(eW, {
                            channel: n,
                            guild: K,
                            hasConnectPermission: $,
                            participantsOpen: k,
                            participantsListOpen: U && eb,
                            renderExternalHeader: l,
                            appContext: y,
                            popoutWindow: J,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: Y,
                            selectedStream: q,
                            mode: w,
                            inCall: S,
                            participants: I,
                            filteredParticipants: T,
                            participantsVersion: A,
                            layout: L,
                            chatOpen: F,
                            maxSidebarWidth: ex,
                            shouldUseVoiceEffectsActionBar: eg,
                            currentUserId: X,
                            selectedParticipant: G,
                            allActiveStreams: W,
                            useNewInviteButton: el,
                            connectedEmbeddedActivity: null != em ? em : void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: p,
                            callContainerDimensions: {
                                width: h,
                                height: m,
                            },
                            callContainerRef: g,
                            channelChatRef: b,
                            width: c,
                            maxHeight: a,
                            forceShowControls: ey,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eE,
                            theme: eP,
                            canPopout: o,
                            popoutType: s,
                            canUseHaven: e_,
                        }),
                        !n.isPrivate() && (0, i.jsx)(eA.YR, {}),
                        (0, i.jsx)(eS.H_, {}),
                    ],
                }),
            }),
        }),
    });
};
