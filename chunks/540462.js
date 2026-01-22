n.d(t, {
    A: () => eY,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(110259),
    u = n(311907),
    d = n(554146),
    f = n(451988),
    p = n(397927),
    h = n(73153),
    b = n(367513),
    g = n(442433),
    m = n(956793),
    A = n(401843),
    y = n(817281),
    O = n(820284),
    j = n(765671),
    v = n(475743),
    x = n(646865),
    E = n(10716),
    _ = n(795816),
    C = n(933958),
    S = n(967812),
    I = n(47294),
    N = n(793574),
    T = n(58149),
    P = n(688810),
    w = n(139286),
    R = n(235986),
    D = n(771781),
    M = n(643501),
    L = n(857253),
    G = n(652896),
    k = n(279250),
    U = n(418126),
    V = n(266626),
    F = n(267102),
    H = n(574172),
    B = n(869146),
    K = n(976860),
    W = n(326567),
    z = n(964404),
    Y = n(105225),
    q = n(874739),
    X = n(993952),
    J = n(461782),
    Q = n(447404),
    Z = n(20465),
    $ = n(156652),
    ee = n(622770),
    et = n(423562),
    en = n(520006),
    er = n(128286),
    el = n(619344),
    ei = n(821747),
    ea = n(125248),
    es = n(616356),
    eo = n(961350),
    ec = n(249288),
    eu = n(696451),
    ed = n(71393),
    ef = n(576705),
    ep = n(222823),
    eh = n(309010),
    eb = n(287809),
    eg = n(977997),
    em = n(954571),
    eA = n(147036),
    ey = n(203982),
    eO = n(723702),
    ej = n(837921),
    ev = n(475815),
    ex = n(313961),
    eE = n(520698),
    e_ = n(780642),
    eC = n(43189),
    eS = n(518530),
    eI = n(681281),
    eN = n(264250),
    eT = n(525788),
    eP = n(261718),
    ew = n(587837),
    eR = n(675853),
    eD = n(384059),
    eM = n(480890),
    eL = n(462675),
    eG = n(806931),
    ek = n(652215),
    eU = n(985018),
    eV = n(354972);

function eF(e, t, n) {
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
                eF(e, t, n[t]);
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
let eK = {
        [ek.DUB.NORMAL]: eV.qb,
        [ek.DUB.MINIMUM]: eV.Bp,
        [ek.DUB.NO_CHAT]: eV.Oo,
        [ek.DUB.FULL_SCREEN]: eV.iy,
        [ek.DUB.HAVEN]: eV.VT,
    },
    eW = {
        [ek.BRT.POPOUT]: eV.SW,
        [ek.BRT.APP]: null,
        [ek.BRT.OVERLAY]: null,
        [ek.BRT.CALL_TILE_POPOUT]: null,
    };
class ez extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (e = null == (t = this.props.popoutWindow) ? void 0 : t.window) ? e : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.Wb, this.handleFullScreenChange),
            em.default.track(
                ek.HAw.VIDEO_LAYOUT_TOGGLED,
                eH(
                    {
                        video_layout: this.inPopout ? "popout" : t,
                    },
                    (0, T.QS)(e.id),
                ),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ev.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eO.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: l } = this.props,
            i = this.getRootNode();
        if (
            (null != i &&
                e.mode === ek._Of.VIDEO &&
                r === ek._Of.VOICE &&
                (0, ev._U)(i, this.currentDocument) &&
                (0, ev.sP)(i, this.currentDocument),
            e.participantsOpen !== t || l !== e.layout)
        ) {
            var a;
            null == (a = this._contentRef.current) || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && h.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eO.isPlatformEmbedded && ej.Ay.supportsFeature(ek.BYE.POPOUT_WINDOWS);
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
            ? {
                  mainText: eU.intl.string(eU.t.J5bXZU),
              }
            : null;
    }
    get inPopout() {
        return this.props.appContext === ek.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r, canPopout: l } = this.props,
            i = t === ek._Of.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            a = t === ek._Of.VIDEO && r && this.popoutSupported && l,
            s = t !== ek._Of.VOICE && n.isPrivate() && !this.inPopout && r,
            o = n.type === ek.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === ek.DUB.MINIMUM || e === ek.DUB.NORMAL,
                canInvite: o,
                canPopout: a,
                canFullscreen: i,
                canChangeLayout: s,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!r)
            return eB(eH({}, c), {
                canFullscreen: i,
                useTheme: !0,
            });
        switch (e) {
            case ek.DUB.FULL_SCREEN:
                return eB(eH({}, c), {
                    canPopout: !this.inPopout && this.popoutOpen && c.canPopout,
                });
            case ek.DUB.MINIMUM:
                return eB(eH({}, c), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case ek.DUB.HAVEN:
            case ek.DUB.NO_CHAT:
            case ek.DUB.NORMAL:
                return eH({}, c);
        }
    }
    renderContent(e) {
        var t;
        let {
                popoutType: n,
                selectedParticipant: l,
                inCall: i,
                hasConnectPermission: a,
                mode: s,
                participantsOpen: o,
                participants: c,
                filteredParticipants: u,
                participantsVersion: d,
                channel: f,
                guild: p,
                layout: h,
                forceShowControls: b,
                awaitingRemoteSessionInfo: g,
                currentChannelActivities: m,
                callContainerDimensions: A,
            } = this.props,
            y = h === ek.DUB.MINIMUM,
            O = y || h === ek.DUB.NORMAL,
            j = i && s === ek._Of.VIDEO,
            v = (null != (t = null == m ? void 0 : m.length) ? t : 0) > 0 && f.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                $.A,
                eB(
                    eH(
                        {
                            renderHeader: this.renderHeader,
                            renderBottomLeft: this.renderBottomLeft,
                            renderBottomCenter: this.renderBottomCenter,
                            renderBottomRight: this.renderBottomRight,
                            renderChatToasts: f.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                            renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                        },
                        e,
                    ),
                    {
                        screenMessage: this.screenMessage,
                        disableGradients: !i || y,
                        idle: !b && i && !y && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsx)(q.A, {
                                      ref: this._contentRef,
                                      inCall: i,
                                      channel: f,
                                      hasConnectPermission: a,
                                      guild: p,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: j ? l : null,
                                      layout: h,
                                      idle: e.idle,
                                      mode: s,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: o && (!O || v),
                                      popoutType: n,
                                      awaitingRemoteSessionInfo: g,
                                      callContainerDimensions: A,
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
                mode: l,
                chatOpen: i,
                appContext: s,
                maxSidebarWidth: o,
                maxHeight: c,
                inCall: u,
                participantsListOpen: d,
            } = this.props,
            { resizedHeight: f } = this.state,
            h = l === ek._Of.VIDEO,
            b = e !== ek.DUB.HAVEN && e !== ek.DUB.NO_CHAT && e !== ek.DUB.FULL_SCREEN && null != c,
            g = ek.NJ8.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: a()(eV.iE, eK[e], eW[s], {
                [eV.XW]: this.popoutOpen && !this.inPopout && e !== ek.DUB.NO_CHAT && t.isPrivate(),
                [eV.Ki]: h,
                [eV.vc]: i || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                b && null != f
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: f,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(p.NPJ, {
                    theme: g,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: a()(eV.ik, i || e !== ek.DUB.FULL_SCREEN ? void 0 : eV.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(J.Ay, {
                                timeout: 2e3,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                b &&
                    (0, r.jsx)(ew.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, r.jsx)("div", {
                    className: eV.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                i &&
                                    (0, r.jsx)(eS.A, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: o,
                                    }),
                                d &&
                                    (0, r.jsx)(eN.A, {
                                        channel: t,
                                        maxWidth: o,
                                    }),
                            ],
                        }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            eF(this, "_prevLayout", ek.DUB.MINIMUM),
            eF(this, "_wrapperRef", l.createRef()),
            eF(this, "_callContainerRef", l.createRef()),
            eF(this, "_channelChatRef", l.createRef()),
            eF(this, "_contentRef", l.createRef()),
            eF(this, "_videoBackgroundTooltipTimeout", new f.Ep()),
            eF(this, "_lastIdleProps", null),
            eF(this, "state", {
                resizedHeight: z.Ay.callHeaderHeight,
            }),
            eF(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ev._U)(e, this.currentDocument) ||
                        this.props.layout !== ek.DUB.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eF(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== ek.DUB.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(ek.DUB.FULL_SCREEN),
                          (0, ev.tl)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eF(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null == e ||
                    (this.props.layout === ek.DUB.FULL_SCREEN &&
                        (this.handleChangeLayout(this._prevLayout), (0, ev.sP)(e, this.currentDocument)));
            }),
            eF(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === ek.DUB.NORMAL ? ek.DUB.NO_CHAT : ek.DUB.NORMAL);
            }),
            eF(this, "handleHaven", () => {
                this.props.layout === ek.DUB.HAVEN
                    ? (this.handleChangeLayout(ek.DUB.NO_CHAT), U.Ay.disconnect(this.props.channel.id))
                    : this.handleChangeLayout(ek.DUB.HAVEN);
            }),
            eF(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (b.A.updateLayout(t.id, e, n),
                    e === ek.DUB.FULL_SCREEN && t.isPrivate() && ey._.dispatch(ek.jej.TEXTAREA_BLUR));
            }),
            eF(this, "handleDisconnect", () => {
                this.props.layout === ek.DUB.FULL_SCREEN && this.handleFullScreen();
            }),
            eF(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, w.x)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eG.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eF(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eG.GK.CONTEXT_MENU;
                return (0, eM.s)(e, N.A.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eG.lp.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eF(this, "handleContextMenu", (e, t, l, i) => {
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
                    case eG.lp.HIDDEN_STREAM:
                    case eG.lp.STREAM:
                        this.trackCallTileContextMenuImpression(e, eG.qs.STREAM),
                            (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eB(eH({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: l,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "StreamContextMenu",
                                                    e,
                                                    eG.qs.STREAM,
                                                    i,
                                                ),
                                            }),
                                        );
                                },
                                f,
                            );
                        return;
                    case eG.lp.USER:
                        this.trackCallTileContextMenuImpression(e, eG.qs.USER);
                        let p = eb.default.getUser(e.id);
                        if (null != p) {
                            if (l)
                                return (0, W.r)(t, p, c, f, (e, t) =>
                                    (0, eM.Y)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eG.GK.THREE_DOT,
                                        tileType: eG.qs.USER,
                                        targetUserId: p.id,
                                        location: N.A.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case ek.rbe.DM:
                                    return (0, g.L3)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("97262"),
                                                n.e("29534"),
                                                n.e("39778"),
                                                n.e("88962"),
                                            ]).then(n.bind(n, 385913));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eB(eH({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: p,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "DMUserContextMenu",
                                                            e,
                                                            eG.qs.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        f,
                                    );
                                case ek.rbe.GROUP_DM:
                                    return (0, g.L3)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("97262"),
                                                n.e("29534"),
                                                n.e("62891"),
                                                n.e("42296"),
                                            ]).then(n.bind(n, 228006));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eB(eH({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === ek.DUB.MINIMUM || d === ek.DUB.NORMAL,
                                                        user: p,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "GroupDMUserContextMenu",
                                                            e,
                                                            eG.qs.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        f,
                                    );
                                case ek.rbe.GUILD_VOICE:
                                case ek.rbe.PUBLIC_THREAD:
                                case ek.rbe.PRIVATE_THREAD:
                                    let i = c.getGuildId();
                                    return (
                                        o()(null != i, "GuildID null for guild voice channel"),
                                        (0, g.L3)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([
                                                    n.e("97262"),
                                                    n.e("29534"),
                                                    n.e("55296"),
                                                    n.e("84841"),
                                                    n.e("61641"),
                                                ]).then(n.bind(n, 107632));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eB(eH({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: p,
                                                            channel: c,
                                                            guildId: i,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler(
                                                                "GuildChannelUserContextMenu",
                                                                e,
                                                                eG.qs.USER,
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
            eF(this, "handleCallResize", (e) => {
                this.setState({
                    resizedHeight: e,
                });
            }),
            eF(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: l, inCall: i, mode: a } = this.props;
                (0, eG.Ay)(e) &&
                    (0, k.eo)(n, eg.A, ed.A, ef.A, M.default)[0] &&
                    (m.default.selectVoiceChannel(n.id),
                    0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== ek.XYD.ENDED).length &&
                        (0, A.A9)((0, G.Iy)(e.id), {
                            forceMultiple: t.shiftKey,
                        })),
                    i &&
                        a === ek._Of.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? b.A.selectParticipant(n.id, null)
                            : b.A.selectParticipant(n.id, e.id));
            }),
            eF(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, _.od)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null == n || eu.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, eA.vJ)(n)),
                            H.openChannelCallPopout(e);
                    };
                null == t || (0, x.f)()
                    ? n()
                    : (0, I.A)({
                          onConfirm: n,
                      });
            }),
            eF(this, "handleStayOnTop", (e) => {
                (0, eD.X)(N.A.VOICE_CONTROL_TRAY, eD.O.STAY_ON_TOP, e), H.setAlwaysOnTop(ek.MLl.CHANNEL_CALL_POPOUT, e);
            }),
            eF(this, "handleClosePopout", () => {
                H.close(ek.MLl.CHANNEL_CALL_POPOUT);
            }),
            eF(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    l = n === ek.DUB.FULL_SCREEN;
                ((!l && (null == r ? void 0 : r.id) !== e.id) || (l && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eF(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ek.DUB.MINIMUM || n === ek.DUB.NORMAL
                    ? (0, r.jsx)(Y.Ay, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps,
                      })
                    : null;
            }),
            eF(this, "renderBottomLeft", () => {
                let {
                    layout: e,
                    mentionCount: t,
                    channel: n,
                    appContext: l,
                    useNewInviteButton: i,
                    selectedParticipant: s,
                    shouldUseVoiceEffectsActionBar: o,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === ek.DUB.NO_CHAT ? ee.A.Directions.UP : ee.A.Directions.DOWN,
                    f = [ek.DUB.FULL_SCREEN, ek.DUB.NO_CHAT].includes(e),
                    h = u.some((e) => e.type === eG.lp.STREAM),
                    b =
                        e === ek.DUB.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ek.DUB.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: m } = this.viewProperties,
                    A = i
                        ? (0, r.jsx)(X.A, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eG.lp.STREAM ? (0, G.Iy)(s.id) : void 0,
                              applicationId:
                                  (null == s ? void 0 : s.type) === eG.lp.ACTIVITY ? s.applicationId : void 0,
                              appContext: l,
                              className: eV.jZ,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.rbe.GUILD_VOICE ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                          })
                        : (0, r.jsx)(en.A, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eG.lp.STREAM ? (0, G.Iy)(s.id) : void 0,
                              className: eV.jZ,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === ek.rbe.GUILD_VOICE ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        m && !o ? A : null,
                        g
                            ? (0, r.jsxs)(R.A, {
                                  className: eV.P0,
                                  align: R.A.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ee.A, {
                                          label: f ? eU.intl.string(eU.t.kkKapG) : eU.intl.string(eU.t["5MstTl"]),
                                          direction: d,
                                          className: eV.jZ,
                                          onClick: () => {
                                              (0, eD.X)(N.A.VOICE_CONTROL_TRAY, eD.O.CHAT, f), b();
                                          },
                                      }),
                                      f && t > 0
                                          ? (0, r.jsx)(p.hVq, {
                                                className: eV.qS,
                                                count: t,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== eG.lp.STREAM &&
                            (null == s ? void 0 : s.type) !== eG.lp.ACTIVITY) ||
                        o
                            ? null
                            : (0, r.jsx)(Q.A, {
                                  children: (0, r.jsx)(eT.A, {
                                      className: a()(eV.jZ, eV.Wi),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ek.DUB.FULL_SCREEN,
                                  }),
                              }),
                        o &&
                            (0, r.jsx)(eL.A, {
                                channel: n,
                                hasActiveStream: h,
                            }),
                    ],
                });
            }),
            eF(this, "renderBottomRight", () => {
                let {
                        popoutWindow: e,
                        popoutWindowAlwaysOnTop: t,
                        currentUserId: n,
                        selectedParticipant: l,
                        inCall: i,
                        canUseHaven: a,
                    } = this.props,
                    { canFullscreen: s, canStayOnTop: o, canPopout: c, useTheme: u } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != l && l.type !== eG.lp.ACTIVITY && l.user.id !== n
                            ? (0, r.jsx)(ei.A, {
                                  context: (0, eE.A)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eV.MQ,
                                  className: eV.iq,
                                  location: N.A.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        o
                            ? (0, r.jsx)(el.A, {
                                  className: eV.iq,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        a &&
                            i &&
                            (0, r.jsx)(p.K0, {
                                variant: "icon-only",
                                "aria-label": "Haven",
                                icon: p.Y3C,
                                onClick: this.handleHaven,
                            }),
                        c
                            ? (0, r.jsx)(er.A, {
                                  themeable: u,
                                  popoutOpen: this.popoutOpen,
                                  className: eV.iq,
                                  onOpenPopout: () => {
                                      (0, eD.X)(N.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eD.X)(N.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        s
                            ? (0, r.jsx)(et.A, {
                                  themeable: u,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eV.iq,
                                  onClick: () => {
                                      (0, eD.X)(
                                          N.A.VOICE_CONTROL_TRAY,
                                          eD.O.FULL_SCREEN,
                                          this.props.layout !== ek.DUB.FULL_SCREEN,
                                      ),
                                          this.handleFullScreen();
                                  },
                              })
                            : null,
                    ],
                });
            }),
            eF(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, r.jsx)(eC.Ay, {
                          children: (0, r.jsx)(Z.A, {
                              className: eV.T6,
                              channelId: n.id,
                          }),
                      });
            }),
            eF(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eR.Ay, {
                    children: (0, r.jsx)(ea.A, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eF(this, "renderHeader", () => {
                let {
                        renderExternalHeader: e,
                        channel: t,
                        guild: n,
                        appContext: l,
                        chatOpen: i,
                        inCall: a,
                    } = this.props,
                    { useExternalHeader: s, renderHeader: o } = this.viewProperties;
                return o
                    ? (0, r.jsx)(Q.A, {
                          children: (0, r.jsx)("div", {
                              className: eV.dL,
                              children: s
                                  ? null == e
                                      ? void 0
                                      : e()
                                  : (0, r.jsx)(eI.A, {
                                        channel: t,
                                        guild: n,
                                        appContext: l,
                                        inCall: a,
                                        isChatOpen: i || (this.popoutOpen && !this.inPopout && a),
                                        exitFullScreen: this.maybeLeaveFullScreen,
                                    }),
                          }),
                      })
                    : null;
            });
    }
}
let eY = function (e) {
    var t;
    let { channel: n, renderExternalHeader: i, maxHeight: a, canPopout: s = !0, popoutType: o } = e,
        { width: c = 0, ref: f } = (0, j.Ay)(),
        { width: h = 0, height: b = 0, ref: g } = (0, j.Ay)(),
        { ref: m } = (0, j.Ay)(),
        A = (0, F.Us)(),
        x = (0, L.A)(),
        _ = (0, u.bG)([eh.A], () => {
            var e;
            return (null != (e = null == x ? void 0 : x.channelId) ? e : eh.A.getVoiceChannelId()) === n.id;
        }),
        {
            participants: I,
            filteredParticipants: T,
            participantsVersion: w,
            mode: R,
            layout: G,
            participantsOpen: k,
            participantsListOpen: U,
            chatOpen: H,
            selectedParticipant: K,
        } = (0, u.cf)([ex.A], () => {
            let e = A === ek.BRT.POPOUT,
                t = ex.A.getMode(n.id),
                r = ex.A.getLayout(n.id, A);
            e && (t = ek._Of.VIDEO);
            let l = t === ek._Of.VIDEO ? r : ek.DUB.MINIMUM;
            return (
                e && l !== ek.DUB.FULL_SCREEN && (l = ek.DUB.NO_CHAT),
                r === ek.DUB.HAVEN && (l = r),
                {
                    mode: t,
                    layout: l,
                    selectedParticipant: t !== ek._Of.VOICE ? ex.A.getSelectedParticipant(n.id) : null,
                    participants: ex.A.getParticipants(n.id),
                    filteredParticipants: ex.A.getFilteredParticipants(n.id),
                    participantsOpen: ex.A.getParticipantsOpen(n.id),
                    chatOpen: ex.A.getChatOpen(n.id),
                    participantsListOpen: ex.A.getParticipantsListOpen(n.id),
                    participantsVersion: ex.A.getParticipantsVersion(n.id),
                }
            );
        }, [A, n.id]),
        W = (0, u.yK)([es.A], () => es.A.getAllActiveStreams()),
        { selectedStream: Y } = (0, u.cf)(
            [es.A],
            () => ({
                selectedStream: null != K ? es.A.getActiveStreamForStreamKey(K.id) : null,
            }),
            [K],
        ),
        q = (0, u.bG)([ed.A], () => ed.A.getGuild(n.getGuildId())),
        X = (0, u.bG)([ep.Ay], () => ep.Ay.getMentionCount(n.id), [n.id]),
        J = (0, u.bG)([eo.default], () => eo.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: Z } = (0, u.cf)([B.A], () => ({
            popoutWindow: B.A.getWindow(ek.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: B.A.getIsAlwaysOnTop(ek.MLl.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, u.bG)([ef.A], () => ef.A.can(ek.xBc.CONNECT, n)),
        ee = (0, u.bG)([ec.A], () => ec.A.getToastsEnabled(n.id)),
        et = (0, u.bG)([M.default], () => M.default.getAwaitingRemoteSessionInfo()),
        en = (0, u.bG)([z.Ay], () => z.Ay.callHeaderHeight),
        er = l.useCallback((e) => {
            y.Ay.updatedUnsyncedSettings({
                callHeaderHeight: e,
            });
        }, []),
        el = null != (t = null == q ? void 0 : q.id) ? t : null,
        ei = (0, S.A)(el, n.id),
        ea = (0, u.bG)([E.A], () => E.A.getFetchState(), []),
        eu = (0, v.A)(ea);
    l.useEffect(() => {
        ea === E.$.ERROR &&
            eu !== E.$.ERROR &&
            (0, p.showToast)((0, p.createToast)(eU.intl.string(eU.t["AlJyI+"]), p.ToastType.FAILURE));
    }, [ea, eu]);
    let eb = (0, u.bG)([C.Ay], () => C.Ay.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ &&
                    R === ek._Of.VIDEO &&
                    ((t = await ej.Ay.blockDisplaySleep()), e && null != t && ej.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ej.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, R]);
    let eg = (0, e_.A)(n, !0),
        { hasParticipantsPanel: em } = (0, eP.A)({
            location: "ChannelCall",
        }),
        eA = (0, D.mB)(d.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ey } = (0, P.Ay)(N.A.CHANNEL_CALL),
        eO = C.Ay.getEmbeddedActivitiesForChannel(n.id),
        { enabled: ev } = V.s.useConfig({
            location: "ChannelCall",
        }),
        { theme: eE } = (0, p.wRf)();
    return (0, r.jsx)(P.f5, {
        value: ey,
        children: (0, r.jsx)(O.A, {
            page: ek.liQ.CHANNEL_CALL,
            children: (0, r.jsx)(eC.qh, {
                children: (0, r.jsxs)(eR.CB, {
                    children: [
                        (0, r.jsx)(ez, {
                            channel: n,
                            guild: q,
                            hasConnectPermission: $,
                            participantsOpen: k,
                            participantsListOpen: U && em,
                            renderExternalHeader: i,
                            appContext: A,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: Z,
                            mentionCount: X,
                            selectedStream: Y,
                            mode: R,
                            inCall: _,
                            participants: I,
                            filteredParticipants: T,
                            participantsVersion: w,
                            layout: G,
                            chatOpen: H,
                            maxSidebarWidth: c - 550,
                            shouldUseVoiceEffectsActionBar: eg,
                            currentUserId: J,
                            selectedParticipant: K,
                            allActiveStreams: W,
                            useNewInviteButton: ei,
                            connectedEmbeddedActivity: null != eb ? eb : void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: er,
                            wrapperRef: f,
                            callContainerDimensions: {
                                width: h,
                                height: b,
                            },
                            callContainerRef: g,
                            channelChatRef: m,
                            width: c,
                            maxHeight: a,
                            forceShowControls: eA,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eO,
                            theme: eE,
                            canPopout: s,
                            popoutType: o,
                            canUseHaven: ev,
                        }),
                        !n.isPrivate() && (0, r.jsx)(eR.wQ, {}),
                        (0, r.jsx)(eC.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
