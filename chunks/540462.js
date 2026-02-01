n.d(t, {
    A: () => eq,
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
    g = n(73153),
    f = n(367513),
    m = n(442433),
    b = n(956793),
    A = n(401843),
    y = n(817281),
    O = n(820284),
    j = n(765671),
    x = n(475743),
    _ = n(646865),
    v = n(10716),
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
    L = n(643501),
    M = n(857253),
    G = n(652896),
    k = n(279250),
    U = n(418126),
    V = n(266626),
    B = n(267102),
    H = n(574172),
    F = n(869146),
    Y = n(976860),
    K = n(326567),
    W = n(964404),
    z = n(105225),
    X = n(874739),
    q = n(993952),
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
    eg = n(309010),
    ef = n(287809),
    em = n(977997),
    eb = n(954571),
    eA = n(743898),
    ey = n(147036),
    eO = n(203982),
    ej = n(723702),
    ex = n(837921),
    e_ = n(475815),
    ev = n(134047),
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
    eL = n(675853),
    eM = n(384059),
    eG = n(480890),
    ek = n(462675),
    eU = n(806931),
    eV = n(652215),
    eB = n(985018),
    eH = n(354972);

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

function eY(e) {
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

function eK(e, t) {
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
let eW = {
        [eV.DUB.NORMAL]: eH.qb,
        [eV.DUB.MINIMUM]: eH.Bp,
        [eV.DUB.NO_CHAT]: eH.Oo,
        [eV.DUB.FULL_SCREEN]: eH.iy,
        [eV.DUB.HAVEN]: eH.VT,
    },
    ez = {
        [eV.BRT.POPOUT]: eH.SW,
        [eV.BRT.APP]: null,
        [eV.BRT.OVERLAY]: null,
        [eV.BRT.CALL_TILE_POPOUT]: null,
    };
class eX extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (
            null != (e = null == (t = this.props.popoutWindow) ? void 0 : t.window) ? e : window
        ).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(e_.Wb, this.handleFullScreenChange),
            eb.default.track(
                eV.HAw.VIDEO_LAYOUT_TOGGLED,
                eY(
                    {
                        video_layout: this.inPopout ? "popout" : t,
                    },
                    (0, T.QS)(e.id),
                ),
            );
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(e_.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, ej.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: r, layout: l } = this.props,
            i = this.getRootNode();
        if (
            (null != i &&
                e.mode === eV._Of.VIDEO &&
                r === eV._Of.VOICE &&
                (0, e_._U)(i, this.currentDocument) &&
                (0, e_.sP)(i, this.currentDocument),
            e.participantsOpen !== t || l !== e.layout)
        ) {
            var s;
            null == (s = this._contentRef.current) || s.triggerResize();
        }
        e.inCall && !n && this.inPopout && g.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ej.isPlatformEmbedded && ex.Ay.supportsFeature(eV.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ej.isPlatformEmbedded || this.nativePopoutSupported;
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
                  mainText: eB.intl.string(eB.t.J5bXZU),
              }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eV.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: r, canPopout: l } = this.props,
            i = t === eV._Of.VIDEO && r && !(this.popoutOpen && !this.inPopout),
            s = t === eV._Of.VIDEO && r && this.popoutSupported && l,
            a = t !== eV._Of.VOICE && n.isPrivate() && !this.inPopout && r,
            o = n.type === eV.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eV.DUB.MINIMUM || e === eV.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: i,
                canChangeLayout: a,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!r)
            return eK(eY({}, c), {
                canFullscreen: i,
                useTheme: !0,
            });
        switch (e) {
            case eV.DUB.FULL_SCREEN:
                return eK(eY({}, c), {
                    canPopout: !this.inPopout && this.popoutOpen && c.canPopout,
                });
            case eV.DUB.MINIMUM:
                return eK(eY({}, c), {
                    canPopout: !1,
                    useTheme: !0,
                });
            case eV.DUB.HAVEN:
            case eV.DUB.NO_CHAT:
            case eV.DUB.NORMAL:
                return eY({}, c);
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
                layout: g,
                forceShowControls: f,
                awaitingRemoteSessionInfo: m,
                currentChannelActivities: b,
                callContainerDimensions: A,
            } = this.props,
            y = g === eV.DUB.MINIMUM,
            O = y || g === eV.DUB.NORMAL,
            j = i && a === eV._Of.VIDEO,
            x = (null != (t = null == b ? void 0 : b.length) ? t : 0) > 0 && p.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, r.jsx)(
                $.A,
                eK(
                    eY(
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
                        idle: !f && i && !y && e.idle,
                        children:
                            i && this.popoutOpen && !this.inPopout
                                ? null
                                : (0, r.jsx)(X.A, {
                                      ref: this._contentRef,
                                      inCall: i,
                                      channel: p,
                                      hasConnectPermission: s,
                                      guild: h,
                                      participants: c,
                                      filteredParticipants: u,
                                      participantsVersion: d,
                                      selectedParticipant: j ? l : null,
                                      layout: g,
                                      idle: e.idle,
                                      mode: a,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: o && (!O || x),
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
            g = l === eV._Of.VIDEO,
            f = e !== eV.DUB.HAVEN && e !== eV.DUB.NO_CHAT && e !== eV.DUB.FULL_SCREEN && null != c,
            m = eV.NJ8.MIDNIGHT;
        return (0, r.jsxs)("div", {
            className: s()(eH.iE, eW[e], ez[a], {
                [eH.XW]: this.popoutOpen && !this.inPopout && e !== eV.DUB.NO_CHAT && t.isPrivate(),
                [eH.Ki]: g,
                [eH.vc]: i || d,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                f && null != p
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
                            className: s()(eH.ik, i || e !== eV.DUB.FULL_SCREEN ? void 0 : eH.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, r.jsx)(J.Ay, {
                                timeout: 2e3,
                                children: (e) => this.renderContent(e),
                            }),
                        }),
                }),
                f &&
                    (0, r.jsx)(eD.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, r.jsx)("div", {
                    className: eH.B2,
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
            eF(this, "_prevLayout", eV.DUB.MINIMUM),
            eF(this, "_wrapperRef", l.createRef()),
            eF(this, "_callContainerRef", l.createRef()),
            eF(this, "_channelChatRef", l.createRef()),
            eF(this, "_contentRef", l.createRef()),
            eF(this, "_videoBackgroundTooltipTimeout", new p.Ep()),
            eF(this, "_lastIdleProps", null),
            eF(this, "state", {
                resizedHeight: W.Ay.callHeaderHeight,
            }),
            eF(this, "handleFullScreenChange", () => {
                let e = this.getRootNode();
                null != e &&
                    ((0, e_._U)(e, this.currentDocument) ||
                        this.props.layout !== eV.DUB.FULL_SCREEN ||
                        this.handleFullScreen());
            }),
            eF(this, "handleFullScreen", () => {
                let e = this.getRootNode();
                null != e &&
                    (this.props.layout !== eV.DUB.FULL_SCREEN
                        ? ((this._prevLayout = this.props.layout),
                          this.handleChangeLayout(eV.DUB.FULL_SCREEN),
                          (0, e_.tl)(e))
                        : this.maybeLeaveFullScreen());
            }),
            eF(this, "maybeLeaveFullScreen", () => {
                let e = this.getRootNode();
                null == e ||
                    (this.props.layout === eV.DUB.FULL_SCREEN &&
                        (this.handleChangeLayout(this._prevLayout), (0, e_.sP)(e, this.currentDocument)));
            }),
            eF(this, "handleToggleLayout", () => {
                this.handleChangeLayout(this.props.layout === eV.DUB.NORMAL ? eV.DUB.NO_CHAT : eV.DUB.NORMAL);
            }),
            eF(this, "handleHaven", () => {
                this.props.layout === eV.DUB.HAVEN
                    ? (this.handleChangeLayout(eV.DUB.NO_CHAT), U.Ay.disconnect(this.props.channel.id))
                    : this.handleChangeLayout(eV.DUB.HAVEN);
            }),
            eF(this, "handleChangeLayout", (e) => {
                let { channel: t, appContext: n, layout: r } = this.props;
                r !== e &&
                    (f.A.updateLayout(t.id, e, n),
                    e === eV.DUB.FULL_SCREEN && t.isPrivate() && eO._.dispatch(eV.jej.TEXTAREA_BLUR));
            }),
            eF(this, "handleDisconnect", () => {
                this.props.layout === eV.DUB.FULL_SCREEN && this.handleFullScreen();
            }),
            eF(this, "trackCallTileContextMenuImpression", (e, t) => {
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
            eF(this, "getCallTileMenuActionHandler", function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eU.GK.CONTEXT_MENU;
                return (0, eG.s)(e, N.A.CHANNEL_CALL, {
                    entrypoint: r,
                    tileType: n,
                    targetUserId: t.type !== eU.lp.ACTIVITY ? t.user.id : void 0,
                });
            }),
            eF(this, "handleContextMenu", (e, t, l, i) => {
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
                                            eK(eY({}, n), {
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
                        let h = ef.default.getUser(e.id);
                        if (null != h) {
                            if (l)
                                return (0, K.r)(t, h, c, p, (e, t) =>
                                    (0, eG.Y)({
                                        menuItemProps: t,
                                        menuName: e,
                                        entrypoint: eU.GK.THREE_DOT,
                                        tileType: eU.qs.USER,
                                        targetUserId: h.id,
                                        location: N.A.CHANNEL_CALL,
                                    }),
                                );
                            switch (c.type) {
                                case eV.rbe.DM:
                                    return (0, m.L3)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("97262"),
                                                n.e("29534"),
                                                n.e("93169"),
                                                n.e("39778"),
                                                n.e("88962"),
                                            ]).then(n.bind(n, 385913));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    eK(eY({}, n), {
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
                                case eV.rbe.GROUP_DM:
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
                                                    eK(eY({}, n), {
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: d === eV.DUB.MINIMUM || d === eV.DUB.NORMAL,
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
                                case eV.rbe.GUILD_VOICE:
                                case eV.rbe.PUBLIC_THREAD:
                                case eV.rbe.PRIVATE_THREAD:
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
                                                    n.e("52458"),
                                                ]).then(n.bind(n, 107632));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        t,
                                                        eK(eY({}, n), {
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
            eF(this, "handleCallResize", (e) => {
                this.setState({
                    resizedHeight: e,
                });
            }),
            eF(this, "handleSelectParticipant", (e, t) => {
                let { channel: n, selectedParticipant: r, allActiveStreams: l, inCall: i, mode: s } = this.props;
                (0, eU.Ay)(e) &&
                    (0, k.eo)(n, em.A, ed.A, ep.A, L.default)[0] &&
                    (b.default.selectVoiceChannel(n.id),
                    0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== eV.XYD.ENDED).length &&
                        (0, A.A9)((0, G.Iy)(e.id), {
                            forceMultiple: t.shiftKey,
                        })),
                    i &&
                        s === eV._Of.VIDEO &&
                        ((null == r ? void 0 : r.id) === e.id
                            ? f.A.selectParticipant(n.id, null)
                            : f.A.selectParticipant(n.id, e.id));
            }),
            eF(this, "handleOpenPopout", () => {
                let { channel: e, connectedEmbeddedActivity: t } = this.props,
                    n = async () => {
                        (null == t ? void 0 : t.applicationId) != null && (await (0, E.od)(t.applicationId, e.id));
                        let n = e.getGuildId();
                        null == n || eu.Ay.isCurrentUserGuest(n) || (0, Y.pX)((0, ey.vJ)(n)),
                            H.openChannelCallPopout(e);
                    };
                null == t || (0, _.f)()
                    ? n()
                    : (0, I.A)({
                          onConfirm: n,
                      });
            }),
            eF(this, "handleStayOnTop", (e) => {
                (0, eM.X)(N.A.VOICE_CONTROL_TRAY, eM.O.STAY_ON_TOP, e), H.setAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT, e);
            }),
            eF(this, "handleClosePopout", () => {
                H.close(eV.MLl.CHANNEL_CALL_POPOUT);
            }),
            eF(this, "handleFullscreenParticipant", (e, t) => {
                let { layout: n, selectedParticipant: r } = this.props,
                    l = n === eV.DUB.FULL_SCREEN;
                ((!l && (null == r ? void 0 : r.id) !== e.id) || (l && (null == r ? void 0 : r.id) === e.id)) &&
                    this.handleSelectParticipant(e, t),
                    this.handleFullScreen();
            }),
            eF(this, "renderBottomCenter", () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eV.DUB.MINIMUM || n === eV.DUB.NORMAL
                    ? (0, r.jsx)(z.Ay, {
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
                    selectedParticipant: a,
                    shouldUseVoiceEffectsActionBar: o,
                    inCall: c,
                    participants: u,
                } = this.props;
                if (!c) return null;
                let d = e === eV.DUB.NO_CHAT ? ee.A.Directions.UP : ee.A.Directions.DOWN,
                    p = [eV.DUB.FULL_SCREEN, eV.DUB.NO_CHAT].includes(e),
                    g = u.some((e) => e.type === eU.lp.STREAM),
                    f =
                        e === eV.DUB.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eV.DUB.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: m, canInvite: b } = this.viewProperties,
                    A = i
                        ? (0, r.jsx)(q.A, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eU.lp.STREAM ? (0, G.Iy)(a.id) : void 0,
                              applicationId:
                                  (null == a ? void 0 : a.type) === eU.lp.ACTIVITY ? a.applicationId : void 0,
                              appContext: l,
                              className: eH.jZ,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eV.rbe.GUILD_VOICE ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                          })
                        : (0, r.jsx)(en.A, {
                              channel: n,
                              stream: (null == a ? void 0 : a.type) === eU.lp.STREAM ? (0, G.Iy)(a.id) : void 0,
                              className: eH.jZ,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation:
                                  n.type === eV.rbe.GUILD_VOICE ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                          });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        b && !o ? A : null,
                        m
                            ? (0, r.jsxs)(R.A, {
                                  className: eH.P0,
                                  align: R.A.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, r.jsx)(ee.A, {
                                          label: p ? eB.intl.string(eB.t.kkKapG) : eB.intl.string(eB.t["5MstTl"]),
                                          direction: d,
                                          className: eH.jZ,
                                          onClick: () => {
                                              (0, eM.X)(N.A.VOICE_CONTROL_TRAY, eM.O.CHAT, p), f();
                                          },
                                      }),
                                      p && t > 0
                                          ? (0, r.jsx)(h.hVq, {
                                                className: eH.qS,
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
                                      className: s()(eH.jZ, eH.Wi),
                                      participant: a,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eV.DUB.FULL_SCREEN,
                                  }),
                              }),
                        o &&
                            (0, r.jsx)(ek.A, {
                                channel: n,
                                hasActiveStream: g,
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
                                  sliderClassName: eH.MQ,
                                  className: eH.iq,
                                  location: N.A.VOICE_CONTROL_TRAY,
                              })
                            : null,
                        o
                            ? (0, r.jsx)(el.A, {
                                  className: eH.iq,
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
                                  className: eH.iq,
                                  onOpenPopout: () => {
                                      (0, eM.X)(N.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !0), this.handleOpenPopout();
                                  },
                                  onClosePopout: () => {
                                      (0, eM.X)(N.A.VOICE_CONTROL_TRAY, eM.O.POPOUT, !1), this.handleClosePopout();
                                  },
                              })
                            : null,
                        a
                            ? (0, r.jsx)(et.A, {
                                  themeable: u,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eH.iq,
                                  onClick: () => {
                                      (0, eM.X)(
                                          N.A.VOICE_CONTROL_TRAY,
                                          eM.O.FULL_SCREEN,
                                          this.props.layout !== eV.DUB.FULL_SCREEN,
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
                    : (0, r.jsx)(eI.Ay, {
                          children: (0, r.jsx)(Z.A, {
                              className: eH.T6,
                              channelId: n.id,
                          }),
                      });
            }),
            eF(this, "renderVoiceChannelEffects", () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, r.jsx)(eL.Ay, {
                    children: (0, r.jsx)(es.A, {
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
                        inCall: s,
                    } = this.props,
                    { useExternalHeader: a, renderHeader: o } = this.viewProperties;
                return o
                    ? (0, r.jsx)(Q.A, {
                          children: (0, r.jsx)("div", {
                              className: eH.dL,
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
let eq = function (e) {
    var t;
    let { channel: n, renderExternalHeader: i, maxHeight: s, canPopout: a = !0, popoutType: o } = e,
        { width: c = 0, ref: p } = (0, j.Ay)(),
        { width: g = 0, height: m = 0, ref: b } = (0, j.Ay)(),
        { ref: A } = (0, j.Ay)(),
        _ = (0, B.Us)(),
        E = (0, M.A)(),
        I = (0, u.bG)([eg.A], () => {
            var e;
            return (null != (e = null == E ? void 0 : E.channelId) ? e : eg.A.getVoiceChannelId()) === n.id;
        }),
        {
            participants: T,
            filteredParticipants: w,
            participantsVersion: R,
            mode: G,
            layout: k,
            participantsOpen: U,
            participantsListOpen: H,
            chatOpen: Y,
            selectedParticipant: K,
        } = (0, u.cf)([eE.A], () => {
            let e = _ === eV.BRT.POPOUT,
                t = eE.A.getMode(n.id),
                r = eE.A.getLayout(n.id, _);
            e && (t = eV._Of.VIDEO);
            let l = t === eV._Of.VIDEO ? r : eV.DUB.MINIMUM;
            return (
                e && l !== eV.DUB.FULL_SCREEN && (l = eV.DUB.NO_CHAT),
                r === eV.DUB.HAVEN && (l = r),
                {
                    mode: t,
                    layout: l,
                    selectedParticipant: t !== eV._Of.VOICE ? eE.A.getSelectedParticipant(n.id) : null,
                    participants: eE.A.getParticipants(n.id),
                    filteredParticipants: eE.A.getFilteredParticipants(n.id),
                    participantsOpen: eE.A.getParticipantsOpen(n.id),
                    chatOpen: eE.A.getChatOpen(n.id),
                    participantsListOpen: eE.A.getParticipantsListOpen(n.id),
                    participantsVersion: eE.A.getParticipantsVersion(n.id),
                }
            );
        }, [_, n.id]),
        z = (0, u.yK)([ea.A], () => ea.A.getAllActiveStreams()),
        { selectedStream: X } = (0, u.cf)(
            [ea.A],
            () => ({
                selectedStream: null != K ? ea.A.getActiveStreamForStreamKey(K.id) : null,
            }),
            [K],
        ),
        q = (0, u.bG)([ed.A], () => ed.A.getGuild(n.getGuildId())),
        J = (0, u.bG)([eh.Ay], () => eh.Ay.getMentionCount(n.id), [n.id]),
        Q = (0, u.bG)([eo.default], () => eo.default.getId()),
        { popoutWindow: Z, popoutWindowAlwaysOnTop: $ } = (0, u.cf)([F.A], () => ({
            popoutWindow: F.A.getWindow(eV.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.A.getIsAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT),
        })),
        ee = (0, u.bG)([ep.A], () => ep.A.can(eV.xBc.CONNECT, n)),
        et = (0, u.bG)([ec.A], () => ec.A.getToastsEnabled(n.id)),
        en = (0, u.bG)([L.default], () => L.default.getAwaitingRemoteSessionInfo()),
        er = (0, u.bG)([W.Ay], () => W.Ay.callHeaderHeight),
        el = l.useCallback((e) => {
            y.Ay.updatedUnsyncedSettings({
                callHeaderHeight: e,
            });
        }, []),
        ei = null != (t = null == q ? void 0 : q.id) ? t : null,
        es = (0, S.A)(ei, n.id),
        eu = (0, u.bG)([v.A], () => v.A.getFetchState(), []),
        ef = (0, x.A)(eu);
    l.useEffect(() => {
        eu === v.$.ERROR &&
            ef !== v.$.ERROR &&
            (0, h.showToast)((0, h.createToast)(eB.intl.string(eB.t["AlJyI+"]), h.ToastType.FAILURE));
    }, [eu, ef]);
    let em = (0, u.bG)([C.Ay], () => C.Ay.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                I &&
                    G === eV._Of.VIDEO &&
                    ((t = await ex.Ay.blockDisplaySleep()), e && null != t && ex.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ex.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [I, G]);
    let eb = (0, eS.A)(n, !0),
        { hasParticipantsPanel: ey } = (0, eR.A)({
            location: "ChannelCall",
        }),
        eO = (0, D.mB)(d.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ej } = (0, P.Ay)(N.A.CHANNEL_CALL),
        e_ = c - 550,
        eC = C.Ay.getEmbeddedActivitiesForChannel(n.id),
        { enabled: eN } = V.s.useConfig({
            location: "ChannelCall",
        }),
        eT = (0, ev.T)({
            channel: n,
            location: "ChannelCall",
        });
    l.useEffect(() => {
        if (!eT || !I || null != eE.A.getAllChatOpen()[n.id] || c <= 0) return;
        let e = !(0, eA.P)({
            maxWidth: e_,
            minWidth: 450,
        });
        f.A.updateChatOpen(n.id, e, "auto open screen width");
    }, [eT, e_, c, n.id, I]);
    let { theme: eP } = (0, h.wRf)();
    return (0, r.jsx)(P.f5, {
        value: ej,
        children: (0, r.jsx)(O.A, {
            page: eV.liQ.CHANNEL_CALL,
            children: (0, r.jsx)(eI.qh, {
                children: (0, r.jsxs)(eL.CB, {
                    children: [
                        (0, r.jsx)(eX, {
                            channel: n,
                            guild: q,
                            hasConnectPermission: ee,
                            participantsOpen: U,
                            participantsListOpen: H && ey,
                            renderExternalHeader: i,
                            appContext: _,
                            popoutWindow: Z,
                            popoutWindowAlwaysOnTop: $,
                            mentionCount: J,
                            selectedStream: X,
                            mode: G,
                            inCall: I,
                            participants: T,
                            filteredParticipants: w,
                            participantsVersion: R,
                            layout: k,
                            chatOpen: Y,
                            maxSidebarWidth: e_,
                            shouldUseVoiceEffectsActionBar: eb,
                            currentUserId: Q,
                            selectedParticipant: K,
                            allActiveStreams: z,
                            useNewInviteButton: es,
                            connectedEmbeddedActivity: null != em ? em : void 0,
                            showChatToasts: et,
                            storedCallHeaderHeight: er,
                            updateStoredCallHeaderHeight: el,
                            wrapperRef: p,
                            callContainerDimensions: {
                                width: g,
                                height: m,
                            },
                            callContainerRef: b,
                            channelChatRef: A,
                            width: c,
                            maxHeight: s,
                            forceShowControls: eO,
                            awaitingRemoteSessionInfo: en,
                            currentChannelActivities: eC,
                            theme: eP,
                            canPopout: a,
                            popoutType: o,
                            canUseHaven: eN,
                        }),
                        !n.isPrivate() && (0, r.jsx)(eL.wQ, {}),
                        (0, r.jsx)(eI.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
