n.d(t, {
    A: () => eX,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(110259),
    u = n(311907),
    d = n(554146),
    p = n(451988),
    h = n(397927),
    f = n(73153),
    g = n(367513),
    m = n(442433),
    b = n(956793),
    A = n(401843),
    y = n(817281),
    _ = n(820284),
    O = n(765671),
    j = n(475743),
    v = n(646865),
    x = n(10716),
    E = n(795816),
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
    k = n(652896),
    G = n(279250),
    U = n(418126),
    B = n(266626),
    V = n(267102),
    F = n(574172),
    H = n(869146),
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
    es = n(125248),
    ea = n(616356),
    eo = n(961350),
    ec = n(249288),
    eu = n(696451),
    ed = n(71393),
    ep = n(576705),
    eh = n(222823),
    ef = n(309010),
    eg = n(287809),
    em = n(977997),
    eb = n(954571),
    eA = n(743898),
    ey = n(147036),
    e_ = n(203982),
    eO = n(723702),
    ej = n(837921),
    ev = n(475815),
    ex = n(134047),
    eE = n(313961),
    eC = n(520698),
    eS = n(780642),
    eI = n(43189),
    eN = n(518530),
    eT = n(681281),
    eP = n(264250),
    ew = n(525788),
    eR = n(261718),
    eD = n(587837),
    eM = n(675853),
    eL = n(384059),
    ek = n(480890),
    eG = n(462675),
    eU = n(806931),
    eB = n(652215),
    eV = n(985018),
    eF = n(354972);

function eH(e, t, n) {
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

function eK(e) {
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
                eH(e, t, n[t]);
            });
    }
    return e;
}

function eW(e, t) {
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
let ez = {
        [eB.DUB.NORMAL]: eF.qb,
        [eB.DUB.MINIMUM]: eF.Bp,
        [eB.DUB.NO_CHAT]: eF.Oo,
        [eB.DUB.FULL_SCREEN]: eF.iy,
        [eB.DUB.HAVEN]: eF.VT,
    },
    eY = {
        [eB.BRT.POPOUT]: eF.SW,
        [eB.BRT.APP]: null,
        [eB.BRT.OVERLAY]: null,
        [eB.BRT.CALL_TILE_POPOUT]: null,
    };
class eq extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (e = null == (t = this.props.popoutWindow) ? void 0 : t.window) ? e : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.Wb, this.handleFullScreenChange),
            eb.default.track(
                eB.HAw.VIDEO_LAYOUT_TOGGLED,
                eK(
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
                e.mode === eB._Of.VIDEO &&
                r === eB._Of.VOICE &&
                (0, ev._U)(i, this.currentDocument) &&
                (0, ev.sP)(i, this.currentDocument),
            e.participantsOpen !== t || l !== e.layout)
        ) {
            var s;
            null == (s = this._contentRef.current) || s.triggerResize();
        }
        e.inCall && !n && this.inPopout && f.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eO.isPlatformEmbedded && ej.Ay.supportsFeature(eB.BYE.POPOUT_WINDOWS);
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
                  mainText: eV.intl.string(eV.t.J5bXZU),
              }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eB.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r, canPopout: l } = this.props,
            i = t === eB._Of.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            s = t === eB._Of.VIDEO && r && this.popoutSupported && l,
            a = t !== eB._Of.VOICE && n.isPrivate() && !this.inPopout && r,
            o = n.type === eB.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eB.DUB.MINIMUM || e === eB.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: i,
                canChangeLayout: a,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!r)
            return eW(eK({}, c), {
                canFullscreen: i,
                useTheme: !0,
            });
        switch (e) {
            case eB.DUB.FULL_SCREEN:
                return eW(eK({}, c), {
                    canPopout: !this.inPopout && this.popoutOpen && c.canPopout,
                });
            case eB.DUB.MINIMUM:
                return eW(eK({}, c), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eB.DUB.HAVEN:
            case eB.DUB.NO_CHAT:
            case eB.DUB.NORMAL:
                return eK({}, c);
        }
    }
    renderContent(e) {
        var t;
        let {
                popoutType: n,
                selectedParticipant: l,
                inCall: i,
                hasConnectPermission: s,
                mode: a,
                participantsOpen: o,
                participants: c,
                filteredParticipants: u,
                participantsVersion: d,
                channel: p,
                guild: h,
                layout: f,
                forceShowControls: g,
                awaitingRemoteSessionInfo: m,
                currentChannelActivities: b,
                callContainerDimensions: A,
            } = this.props,
            y = f === eB.DUB.MINIMUM,
            _ = y || f === eB.DUB.NORMAL,
            O = i && a === eB._Of.VIDEO,
            j = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                $.A,
                eW(
                    eK(
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
                        disableGradients: !i || y,
                        idle: !g && i && !y && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsx)(q.A, {
                                      ref: this._contentRef,
                                      inCall: i,
                                      channel: p,
                                      hasConnectPermission: s,
                                      guild: h,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: O ? l : null,
                                      layout: f,
                                      idle: e.idle,
                                      mode: a,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: o && (!_ || j),
                                      popoutType: n,
                                      awaitingRemoteSessionInfo: m,
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
                appContext: a,
                maxSidebarWidth: o,
                maxHeight: c,
                inCall: u,
                participantsListOpen: d,
            } = this.props,
            { resizedHeight: p } = this.state,
            f = l === eB._Of.VIDEO,
            g = e !== eB.DUB.HAVEN && e !== eB.DUB.NO_CHAT && e !== eB.DUB.FULL_SCREEN && null != c,
            m = eB.NJ8.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: s()(eF.iE, ez[e], eY[a], {
                [eF.XW]: this.popoutOpen && !this.inPopout && e !== eB.DUB.NO_CHAT && t.isPrivate(),
                [eF.Ki]: f,
                [eF.vc]: i || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                g && null != p
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: p,
                      }
                    : void 0,
            children: [
                (0, r.jsx)(h.NPJ, {
                    theme: m,
                    children: (t) =>
                        (0, r.jsx)("div", {
                            className: s()(eF.ik, i || e !== eB.DUB.FULL_SCREEN ? void 0 : eF.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(J.Ay, {
                                timeout: 2e3,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                g &&
                    (0, r.jsx)(eD.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, r.jsx)("div", {
                    className: eF.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                i &&
                                    (0, r.jsx)(eN.A, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: o,
                                    }),
                                d &&
                                    (0, r.jsx)(eP.A, {
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
            eH(this, "_prevLayout", eB.DUB.MINIMUM),
            eH(this, "_wrapperRef", l.createRef()),
            eH(this, "_callContainerRef", l.createRef()),
            eH(this, "_channelChatRef", l.createRef()),
            eH(this, "_contentRef", l.createRef()),
            eH(this, "_videoBackgroundTooltipTimeout", new p.Ep()),
            eH(this, "_lastIdleProps", null),
            eH(this, "state", {
                resizedHeight: z.Ay.callHeaderHeight,
            }),
            eH(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, ev._U)(e, this.currentDocument) ||
                        this.props.layout !== eB.DUB.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eH(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== eB.DUB.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(eB.DUB.FULL_SCREEN),
                          (0, ev.tl)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eH(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null == e ||
                    (this.props.layout === eB.DUB.FULL_SCREEN &&
                        (this.handleChangeLayout(this._prevLayout), (0, ev.sP)(e, this.currentDocument)));
            }),
            eH(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === eB.DUB.NORMAL ? eB.DUB.NO_CHAT : eB.DUB.NORMAL);
            }),
            eH(this, "handleHaven", () => {
                this.props.layout === eB.DUB.HAVEN
                    ? (this.handleChangeLayout(eB.DUB.NO_CHAT), U.Ay.disconnect(this.props.channel.id))
                    : this.handleChangeLayout(eB.DUB.HAVEN);
            }),
            eH(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (g.A.updateLayout(t.id, e, n),
                    e === eB.DUB.FULL_SCREEN && t.isPrivate() && e_._.dispatch(eB.jej.TEXTAREA_BLUR));
            }),
            eH(this, "handleDisconnect", () => {
                this.props.layout === eB.DUB.FULL_SCREEN && this.handleFullScreen();
            }),
            eH(this, "trackCallTileContextMenuImpression", (e, t) => {
                (0, w.x)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "ChannelCall",
                        is_tile_owner: e.type !== eU.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                        tile_type: t,
                    },
                });
            }),
            eH(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eU.GK.CONTEXT_MENU;
                return (0, ek.s)(e, N.A.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eU.lp.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eH(this, "handleContextMenu", (e, t, l, i) => {
                var s, a;
                let { channel: c, appContext: u, layout: d } = this.props,
                    p = {
                        onClose: () => {
                            var e;
                            return null == (e = this._lastIdleProps) ? void 0 : e.onAllowIdle("menu");
                        },
                        context: u,
                    };
                switch (
                    (null == (s = this._lastIdleProps) || s.onPreventIdle("menu"),
                    null == (a = this._lastIdleProps) || a.onActive(),
                    e.type)
                ) {
                    case eU.lp.HIDDEN_STREAM:
                    case eU.lp.STREAM:
                        this.trackCallTileContextMenuImpression(e, eU.qs.STREAM),
                            (0, m.L3)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            eW(eK({}, n), {
                                                stream: e.stream,
                                                exitFullscreen: this.maybeLeaveFullScreen,
                                                appContext: u,
                                                minimal: l,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "StreamContextMenu",
                                                    e,
                                                    eU.qs.STREAM,
                                                    i,
                                                ),
                                            }),
                                        );
                                },
                                p,
                            );
                        return;
                    case eU.lp.USER:
                        this.trackCallTileContextMenuImpression(e, eU.qs.USER);
                        let h = eg.default.getUser(e.id);
                        if (null != h) {
                            if (l)
                                return (0, W.r)(t, h, c, p, (e, t) =>
                                    (0, ek.Y)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eU.GK.THREE_DOT,
                                        tileType: eU.qs.USER,
                                        targetUserId: h.id,
                                        location: N.A.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case eB.rbe.DM:
                                    return (0, m.L3)(
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
                                                    eW(eK({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "DMUserContextMenu",
                                                            e,
                                                            eU.qs.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        p,
                                    );
                                case eB.rbe.GROUP_DM:
                                    return (0, m.L3)(
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
                                                    eW(eK({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eB.DUB.MINIMUM || d === eB.DUB.NORMAL,
                                                        user: h,
                                                        channel: c,
                                                        showModalItems: !0,
                                                        onInteraction: this.getCallTileMenuActionHandler(
                                                            "GroupDMUserContextMenu",
                                                            e,
                                                            eU.qs.USER,
                                                        ),
                                                    }),
                                                );
                                        },
                                        p,
                                    );
                                case eB.rbe.GUILD_VOICE:
                                case eB.rbe.PUBLIC_THREAD:
                                case eB.rbe.PRIVATE_THREAD:
                                    let i = c.getGuildId();
                                    return (
                                        o()(null != i, "GuildID null for guild voice channel"),
                                        (0, m.L3)(
                                            t,
                                            async () => {
                                                let { default: t } = await Promise.all([
                                                    n.e("97262"),
                                                    n.e("29534"),
                                                    n.e("55296"),
                                                    n.e("84841"),
                                                    n.e("39271"),
                                                ]).then(n.bind(n, 107632));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eW(eK({}, n), {
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: h,
                                                            channel: c,
                                                            guildId: i,
                                                            showModalItems: !0,
                                                            onInteraction: this.getCallTileMenuActionHandler(
                                                                "GuildChannelUserContextMenu",
                                                                e,
                                                                eU.qs.USER,
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
            eH(this, "handleCallResize", (e) => {
                this.setState({
                    resizedHeight: e,
                });
            }),
            eH(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: l, inCall: i, mode: s } = this.props;
                (0, eU.Ay)(e) &&
                    (0, G.eo)(n, em.A, ed.A, ep.A, M.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === l.filter((t) => (0, k._z)(t) === e.id && t.state !== eB.XYD.ENDED).length &&
                        (0, A.A9)((0, k.Iy)(e.id), {
                            forceMultiple: t.shiftKey,
                        })),
                    i &&
                        s === eB._Of.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? g.A.selectParticipant(n.id, null)
                            : g.A.selectParticipant(n.id, e.id));
            }),
            eH(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, E.od)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null == n || eu.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, ey.vJ)(n)),
                            F.openChannelCallPopout(e);
                    };
                null == t || (0, v.f)()
                    ? n()
                    : (0, I.A)({
                          onConfirm: n,
                      });
            }),
            eH(this, "handleStayOnTop", (e) => {
                (0, eL.X)(N.A.VOICE_CONTROL_TRAY, eL.O.STAY_ON_TOP, e), F.setAlwaysOnTop(eB.MLl.CHANNEL_CALL_POPOUT, e);
            }),
            eH(this, "handleClosePopout", () => {
                F.close(eB.MLl.CHANNEL_CALL_POPOUT);
            }),
            eH(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    l = n === eB.DUB.FULL_SCREEN;
                ((!l && (null == r ? void 0 : r.id) !== e.id) || (l && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eH(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eB.DUB.MINIMUM || n === eB.DUB.NORMAL
                    ? (0, r.jsx)(Y.Ay, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps,
                      })
                    : null;
            }),
            eH(this, "renderBottomLeft", () => {
                let {
                    layout: e,
                    mentionCount: t,
                    channel: n,
                    appContext: l,
                    useNewInviteButton: i,
                    selectedParticipant: a,
                    shouldUseVoiceEffectsActionBar: o,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === eB.DUB.NO_CHAT ? ee.A.Directions.UP : ee.A.Directions.DOWN,
                    p = [eB.DUB.FULL_SCREEN, eB.DUB.NO_CHAT].includes(e),
                    f = u.some((e) => e.type === eU.lp.STREAM),
                    g =
                        e === eB.DUB.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eB.DUB.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: m, canInvite: b } = this.viewProperties,
                    A = i
                        ? (0, r.jsx)(X.A, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eU.lp.STREAM ? (0, k.Iy)(a.id) : void 0,
                              applicationId:
                                  (null == a ? void 0 : a.type) === eU.lp.ACTIVITY ? a.applicationId : void 0,
                              appContext: l,
                              className: eF.jZ,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eB.rbe.GUILD_VOICE ? eB.liQ.GUILD_CHANNEL : eB.liQ.DM_CHANNEL,
                          })
                        : (0, r.jsx)(en.A, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eU.lp.STREAM ? (0, k.Iy)(a.id) : void 0,
                              className: eF.jZ,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eB.rbe.GUILD_VOICE ? eB.liQ.GUILD_CHANNEL : eB.liQ.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !o ? A : null,
                        m
                            ? (0, r.jsxs)(R.A, {
                                  className: eF.P0,
                                  align: R.A.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ee.A, {
                                          label: p ? eV.intl.string(eV.t.kkKapG) : eV.intl.string(eV.t["5MstTl"]),
                                          direction: d,
                                          className: eF.jZ,
                                          onClick: () => {
                                              (0, eL.X)(N.A.VOICE_CONTROL_TRAY, eL.O.CHAT, p), g();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, r.jsx)(h.hVq, {
                                                className: eF.qS,
                                                count: t,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        ((null == a ? void 0 : a.type) !== eU.lp.STREAM &&
                            (null == a ? void 0 : a.type) !== eU.lp.ACTIVITY) ||
                        o
                            ? null
                            : (0, r.jsx)(Q.A, {
                                  children: (0, r.jsx)(ew.A, {
                                      className: s()(eF.jZ, eF.Wi),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eB.DUB.FULL_SCREEN,
                                  }),
                              }),
                        o &&
                            (0, r.jsx)(eG.A, {
                                channel: n,
                                hasActiveStream: f,
                            }),
                    ],
                });
            }),
            eH(this, "renderBottomRight", () => {
                let {
                        popoutWindow: e,
                        popoutWindowAlwaysOnTop: t,
                        currentUserId: n,
                        selectedParticipant: l,
                        inCall: i,
                        canUseHaven: s,
                    } = this.props,
                    { canFullscreen: a, canStayOnTop: o, canPopout: c, useTheme: u } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != l && l.type !== eU.lp.ACTIVITY && l.user.id !== n
                            ? (0, r.jsx)(ei.A, {
                                  context: (0, eC.A)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eF.MQ,
                                  className: eF.iq,
                                  location: N.A.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        o
                            ? (0, r.jsx)(el.A, {
                                  className: eF.iq,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop,
                              })
                            : null,
                        s &&
                            i &&
                            (0, r.jsx)(h.K0, {
                                variant: "icon-only",
                                "aria-label": "Haven",
                                icon: h.Y3C,
                                onClick: this.handleHaven,
                            }),
                        c
                            ? (0, r.jsx)(er.A, {
                                  themeable: u,
                                  popoutOpen: this.popoutOpen,
                                  className: eF.iq,
                                  onOpenPopout: () => {
                                      (0, eL.X)(N.A.VOICE_CONTROL_TRAY, eL.O.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eL.X)(N.A.VOICE_CONTROL_TRAY, eL.O.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        a
                            ? (0, r.jsx)(et.A, {
                                  themeable: u,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eF.iq,
                                  onClick: () => {
                                      (0, eL.X)(
                                          N.A.VOICE_CONTROL_TRAY,
                                          eL.O.FULL_SCREEN,
                                          this.props.layout !== eB.DUB.FULL_SCREEN,
                                      ),
                                          this.handleFullScreen();
                                  },
                              })
                            : null,
                    ],
                });
            }),
            eH(this, "renderChatToasts", () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, r.jsx)(eI.Ay, {
                          children: (0, r.jsx)(Z.A, {
                              className: eF.T6,
                              channelId: n.id,
                          }),
                      });
            }),
            eH(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eM.Ay, {
                    children: (0, r.jsx)(es.A, {
                        callHeight: t.height,
                        channelId: e.id,
                    }),
                });
            }),
            eH(this, "renderHeader", () => {
                let {
                        renderExternalHeader: e,
                        channel: t,
                        guild: n,
                        appContext: l,
                        chatOpen: i,
                        inCall: s,
                    } = this.props,
                    { useExternalHeader: a, renderHeader: o } = this.viewProperties;
                return o
                    ? (0, r.jsx)(Q.A, {
                          children: (0, r.jsx)("div", {
                              className: eF.dL,
                              children: a
                                  ? null == e
                                      ? void 0
                                      : e()
                                  : (0, r.jsx)(eT.A, {
                                        channel: t,
                                        guild: n,
                                        appContext: l,
                                        inCall: s,
                                        isChatOpen: i || (this.popoutOpen && !this.inPopout && s),
                                        exitFullScreen: this.maybeLeaveFullScreen,
                                    }),
                          }),
                      })
                    : null;
            });
    }
}
let eX = function (e) {
    var t;
    let { channel: n, renderExternalHeader: i, maxHeight: s, canPopout: a = !0, popoutType: o } = e,
        { width: c = 0, ref: p } = (0, O.Ay)(),
        { width: f = 0, height: m = 0, ref: b } = (0, O.Ay)(),
        { ref: A } = (0, O.Ay)(),
        v = (0, V.Us)(),
        E = (0, L.A)(),
        I = (0, u.bG)([ef.A], () => {
            var e;
            return (null != (e = null == E ? void 0 : E.channelId) ? e : ef.A.getVoiceChannelId()) === n.id;
        }),
        {
            participants: T,
            filteredParticipants: w,
            participantsVersion: R,
            mode: k,
            layout: G,
            participantsOpen: U,
            participantsListOpen: F,
            chatOpen: K,
            selectedParticipant: W,
        } = (0, u.cf)([eE.A], () => {
            let e = v === eB.BRT.POPOUT,
                t = eE.A.getMode(n.id),
                r = eE.A.getLayout(n.id, v);
            e && (t = eB._Of.VIDEO);
            let l = t === eB._Of.VIDEO ? r : eB.DUB.MINIMUM;
            return (
                e && l !== eB.DUB.FULL_SCREEN && (l = eB.DUB.NO_CHAT),
                r === eB.DUB.HAVEN && (l = r),
                {
                    mode: t,
                    layout: l,
                    selectedParticipant: t !== eB._Of.VOICE ? eE.A.getSelectedParticipant(n.id) : null,
                    participants: eE.A.getParticipants(n.id),
                    filteredParticipants: eE.A.getFilteredParticipants(n.id),
                    participantsOpen: eE.A.getParticipantsOpen(n.id),
                    chatOpen: eE.A.getChatOpen(n.id),
                    participantsListOpen: eE.A.getParticipantsListOpen(n.id),
                    participantsVersion: eE.A.getParticipantsVersion(n.id),
                }
            );
        }, [v, n.id]),
        Y = (0, u.yK)([ea.A], () => ea.A.getAllActiveStreams()),
        { selectedStream: q } = (0, u.cf)(
            [ea.A],
            () => ({
                selectedStream: null != W ? ea.A.getActiveStreamForStreamKey(W.id) : null,
            }),
            [W],
        ),
        X = (0, u.bG)([ed.A], () => ed.A.getGuild(n.getGuildId())),
        J = (0, u.bG)([eh.Ay], () => eh.Ay.getMentionCount(n.id), [n.id]),
        Q = (0, u.bG)([eo.default], () => eo.default.getId()),
        { popoutWindow: Z, popoutWindowAlwaysOnTop: $ } = (0, u.cf)([H.A], () => ({
            popoutWindow: H.A.getWindow(eB.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.A.getIsAlwaysOnTop(eB.MLl.CHANNEL_CALL_POPOUT),
        })),
        ee = (0, u.bG)([ep.A], () => ep.A.can(eB.xBc.CONNECT, n)),
        et = (0, u.bG)([ec.A], () => ec.A.getToastsEnabled(n.id)),
        en = (0, u.bG)([M.default], () => M.default.getAwaitingRemoteSessionInfo()),
        er = (0, u.bG)([z.Ay], () => z.Ay.callHeaderHeight),
        el = l.useCallback((e) => {
            y.Ay.updatedUnsyncedSettings({
                callHeaderHeight: e,
            });
        }, []),
        ei = null != (t = null == X ? void 0 : X.id) ? t : null,
        es = (0, S.A)(ei, n.id),
        eu = (0, u.bG)([x.A], () => x.A.getFetchState(), []),
        eg = (0, j.A)(eu);
    l.useEffect(() => {
        eu === x.$.ERROR &&
            eg !== x.$.ERROR &&
            (0, h.showToast)((0, h.createToast)(eV.intl.string(eV.t["AlJyI+"]), h.ToastType.FAILURE));
    }, [eu, eg]);
    let em = (0, u.bG)([C.Ay], () => C.Ay.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                I &&
                    k === eB._Of.VIDEO &&
                    ((t = await ej.Ay.blockDisplaySleep()), e && null != t && ej.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ej.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [I, k]);
    let eb = (0, eS.A)(n, !0),
        { hasParticipantsPanel: ey } = (0, eR.A)({
            location: "ChannelCall",
        }),
        e_ = (0, D.mB)(d.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eO } = (0, P.Ay)(N.A.CHANNEL_CALL),
        ev = c - 550,
        eC = C.Ay.getEmbeddedActivitiesForChannel(n.id),
        { enabled: eN } = B.s.useConfig({
            location: "ChannelCall",
        }),
        eT = (0, ex.T)({
            channel: n,
            location: "ChannelCall",
        });
    l.useEffect(() => {
        if (!eT || !I || null != eE.A.getAllChatOpen()[n.id] || c <= 0) return;
        let e = !(0, eA.P)({
            maxWidth: ev,
            minWidth: 450,
        });
        g.A.updateChatOpen(n.id, e, "auto open screen width");
    }, [eT, ev, c, n.id, I]);
    let { theme: eP } = (0, h.wRf)();
    return (0, r.jsx)(P.f5, {
        value: eO,
        children: (0, r.jsx)(_.A, {
            page: eB.liQ.CHANNEL_CALL,
            children: (0, r.jsx)(eI.qh, {
                children: (0, r.jsxs)(eM.CB, {
                    children: [
                        (0, r.jsx)(eq, {
                            channel: n,
                            guild: X,
                            hasConnectPermission: ee,
                            participantsOpen: U,
                            participantsListOpen: F && ey,
                            renderExternalHeader: i,
                            appContext: v,
                            popoutWindow: Z,
                            popoutWindowAlwaysOnTop: $,
                            mentionCount: J,
                            selectedStream: q,
                            mode: k,
                            inCall: I,
                            participants: T,
                            filteredParticipants: w,
                            participantsVersion: R,
                            layout: G,
                            chatOpen: K,
                            maxSidebarWidth: ev,
                            shouldUseVoiceEffectsActionBar: eb,
                            currentUserId: Q,
                            selectedParticipant: W,
                            allActiveStreams: Y,
                            useNewInviteButton: es,
                            connectedEmbeddedActivity: null != em ? em : void 0,
                            showChatToasts: et,
                            storedCallHeaderHeight: er,
                            updateStoredCallHeaderHeight: el,
                            wrapperRef: p,
                            callContainerDimensions: {
                                width: f,
                                height: m,
                            },
                            callContainerRef: b,
                            channelChatRef: A,
                            width: c,
                            maxHeight: s,
                            forceShowControls: e_,
                            awaitingRemoteSessionInfo: en,
                            currentChannelActivities: eC,
                            theme: eP,
                            canPopout: a,
                            popoutType: o,
                            canUseHaven: eN,
                        }),
                        !n.isPrivate() && (0, r.jsx)(eM.wQ, {}),
                        (0, r.jsx)(eI.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
