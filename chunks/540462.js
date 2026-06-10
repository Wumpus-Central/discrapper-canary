n.r(t), n.d(t, { IDLE_TIMEOUT: () => eH, default: () => eY });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(562708),
    d = n(17928),
    u = n(554146),
    h = n(451988),
    p = n(408278),
    m = n(825860),
    A = n(43990),
    x = n(691540),
    g = n(857250),
    C = n(97483),
    f = n(38021),
    E = n(228366),
    y = n(367513),
    N = n(442433),
    j = n(730852),
    v = n(401843),
    I = n(817281),
    T = n(820284),
    _ = n(765671),
    R = n(475743),
    S = n(646865),
    P = n(10716),
    O = n(795816),
    b = n(933958),
    L = n(47294),
    M = n(793574),
    D = n(95561),
    U = n(688810),
    w = n(139286),
    V = n(587895),
    B = n(235986),
    k = n(558845),
    H = n(643501),
    F = n(857253),
    G = n(652896),
    z = n(279250),
    W = n(418126),
    Y = n(266626),
    K = n(267102),
    X = n(574172),
    Z = n(869146),
    q = n(976860),
    Q = n(326567),
    $ = n(742023),
    J = n(105225),
    ee = n(874739),
    et = n(461782),
    en = n(447404),
    ei = n(401685),
    el = n(20465),
    ea = n(156652),
    es = n(622770),
    er = n(423562),
    eo = n(520006),
    ec = n(128286),
    ed = n(619344),
    eu = n(821747),
    eh = n(125248),
    ep = n(616356),
    em = n(495544),
    eA = n(249288),
    ex = n(696451),
    eg = n(71393),
    eC = n(576705),
    ef = n(309010),
    eE = n(287809),
    ey = n(977997),
    eN = n(174459),
    ej = n(871237),
    ev = n(625494),
    eI = n(723702),
    eT = n(19575),
    e_ = n(475815),
    eR = n(313961),
    eS = n(520698),
    eP = n(43189),
    eO = n(518530),
    eb = n(681281),
    eL = n(587837),
    eM = n(675853),
    eD = n(384059),
    eU = n(480890),
    ew = n(806931),
    eV = n(652215),
    eB = n(375708),
    ek = n(761673);
let eH = 2e3,
    eF = {
        [eV.DUB.NORMAL]: ek.qb,
        [eV.DUB.MINIMUM]: ek.Bp,
        [eV.DUB.NO_CHAT]: ek.Oo,
        [eV.DUB.FULL_SCREEN]: ek.iy,
        [eV.DUB.HAVEN]: ek.VT,
    },
    eG = { [eV.BRT.POPOUT]: ek.SW, [eV.BRT.APP]: null, [eV.BRT.OVERLAY]: null, [eV.BRT.CALL_TILE_POPOUT]: null };
function ez(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, ei.Bx)(),
        u = (0, d.bG)([V.A], () => (l?.type === ew.lp.ACTIVITY ? V.A.getApplication(l.applicationId) : void 0)),
        h = t === eV.DUB.NO_CHAT ? es.A.Directions.UP : es.A.Directions.DOWN,
        p = [eV.DUB.FULL_SCREEN, eV.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < ei.vs.NO_INVITE
                ? (0, i.jsx)(eo.A, {
                      channel: n,
                      stream: l?.type === ew.lp.STREAM ? (0, G.Iy)(l.id) : void 0,
                      className: ek.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eV.rbe.GUILD_VOICE ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(B.A, {
                      className: ek.P0,
                      align: B.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(es.A, {
                          label: p ? eB.intl.string(eB.t.kkKapG) : eB.intl.string(eB.t["5MstTl"]),
                          direction: h,
                          className: ek.jZ,
                          onClick: () => {
                              (0, eD.X)(M.A.VOICE_CONTROL_TRAY, eD.O.CHAT, p), r();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eW extends l.PureComponent {
    _prevLayout = eV.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: $.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(e_.Wb, this.handleFullScreenChange),
            eN.default.track(eV.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, D.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(e_.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eI.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        null != a &&
            e.mode === eV._Of.VIDEO &&
            i === eV._Of.VOICE &&
            (0, e_._U)(a, this.currentDocument) &&
            (0, e_.sP)(a, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && E.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eI.isPlatformEmbedded && eT.Ay.supportsFeature(eV.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eI.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eB.intl.string(eB.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eV.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eV._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eV._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eV._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eV.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eV.DUB.MINIMUM || e === eV.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eV.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eV.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eV.DUB.HAVEN:
            case eV.DUB.NO_CHAT:
            case eV.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, e_._U)(e, this.currentDocument) ||
                this.props.layout !== eV.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eV.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eV.DUB.FULL_SCREEN), (0, e_.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eV.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, e_.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eV.DUB.NORMAL ? eV.DUB.NO_CHAT : eV.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eV.DUB.HAVEN
            ? (this.handleChangeLayout(eV.DUB.NO_CHAT), W.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eV.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (y.A.updateLayout(t.id, e, n),
            e === eV.DUB.FULL_SCREEN && t.isPrivate() && ev._.dispatch(eV.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eV.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, w.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== ew.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ew.GK.CONTEXT_MENU;
        return (0, eU.s)(e, M.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== ew.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case ew.lp.HIDDEN_STREAM:
            case ew.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, ew.qs.STREAM),
                    (0, N.L3)(
                        t,
                        async () => {
                            let { default: t } = await Promise.all([
                                n.e("89673"),
                                n.e("45996"),
                                n.e("29422"),
                                n.e("58315"),
                                n.e("66692"),
                            ]).then(n.bind(n, 796175));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    stream: e.stream,
                                    exitFullscreen: this.maybeLeaveFullScreen,
                                    appContext: r,
                                    minimal: l,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        ew.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case ew.lp.USER:
                this.trackCallTileContextMenuImpression(e, ew.qs.USER);
                let u = eE.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, Q.r)(t, u, s, d, (e, t) =>
                            (0, eU.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: ew.GK.THREE_DOT,
                                tileType: ew.qs.USER,
                                targetUserId: u.id,
                                location: M.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eV.rbe.DM:
                            return (0, N.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("84738"),
                                        n.e("12697"),
                                        n.e("26132"),
                                        n.e("46652"),
                                        n.e("93190"),
                                        n.e("91763"),
                                        n.e("8757"),
                                        n.e("85968"),
                                        n.e("89673"),
                                        n.e("29787"),
                                        n.e("38730"),
                                        n.e("82073"),
                                        n.e("97558"),
                                        n.e("91994"),
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("34971"),
                                        n.e("45996"),
                                        n.e("23427"),
                                        n.e("29422"),
                                        n.e("7059"),
                                        n.e("72883"),
                                        n.e("42339"),
                                        n.e("21106"),
                                        n.e("40175"),
                                        n.e("43746"),
                                        n.e("90554"),
                                        n.e("17244"),
                                        n.e("98199"),
                                        n.e("41175"),
                                        n.e("39778"),
                                    ]).then(n.bind(n, 385913));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "DMUserContextMenu",
                                                e,
                                                ew.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eV.rbe.GROUP_DM:
                            return (0, N.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("84738"),
                                        n.e("12697"),
                                        n.e("26132"),
                                        n.e("46652"),
                                        n.e("93190"),
                                        n.e("8757"),
                                        n.e("85968"),
                                        n.e("89673"),
                                        n.e("29787"),
                                        n.e("82073"),
                                        n.e("97558"),
                                        n.e("91994"),
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("24198"),
                                        n.e("45996"),
                                        n.e("23427"),
                                        n.e("29422"),
                                        n.e("7059"),
                                        n.e("72883"),
                                        n.e("28864"),
                                    ]).then(n.bind(n, 778595));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === eV.DUB.MINIMUM || c === eV.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                ew.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eV.rbe.GUILD_VOICE:
                        case eV.rbe.PUBLIC_THREAD:
                        case eV.rbe.PRIVATE_THREAD:
                            let a = s.getGuildId();
                            return (
                                o()(null != a, "GuildID null for guild voice channel"),
                                (0, N.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("12697"),
                                            n.e("84738"),
                                            n.e("26132"),
                                            n.e("46652"),
                                            n.e("93190"),
                                            n.e("8757"),
                                            n.e("85968"),
                                            n.e("89673"),
                                            n.e("29787"),
                                            n.e("82073"),
                                            n.e("97558"),
                                            n.e("91994"),
                                            n.e("76665"),
                                            n.e("24198"),
                                            n.e("45996"),
                                            n.e("23427"),
                                            n.e("49145"),
                                            n.e("29422"),
                                            n.e("7059"),
                                            n.e("43116"),
                                            n.e("70314"),
                                            n.e("70515"),
                                            n.e("27435"),
                                            n.e("66939"),
                                            n.e("17334"),
                                            n.e("84841"),
                                        ]).then(n.bind(n, 107632));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                showMediaItems: !0,
                                                showChannelCallItems: !0,
                                                showChatItems: !1,
                                                user: u,
                                                channel: s,
                                                guildId: a,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    ew.qs.USER,
                                                ),
                                            });
                                    },
                                    d,
                                )
                            );
                    }
                }
        }
    };
    handleCallResize = (e) => {
        this.setState({ resizedHeight: e });
    };
    handleSelectParticipant = (e, t) => {
        let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: a, mode: s } = this.props;
        (0, ew.Ay)(e) &&
            (0, z.eo)(n, ey.A, eg.A, eC.A, H.default)[0] &&
            (j.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== eV.XYD.ENDED).length &&
                (0, v.A9)((0, G.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eV._Of.VIDEO &&
                (i?.id === e.id ? y.A.selectParticipant(n.id, null) : y.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, O.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || ex.Ay.isCurrentUserGuest(n) || (0, q.pX)((0, ej.vJ)(n)), X.openChannelCallPopout(e);
            };
        null == t || (0, S.f)() ? n() : (0, L.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eD.X)(M.A.VOICE_CONTROL_TRAY, eD.O.STAY_ON_TOP, e), X.setAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        X.close(eV.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eV.DUB.FULL_SCREEN;
        ((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eV.DUB.MINIMUM || n === eV.DUB.NORMAL
            ? (0, i.jsx)(J.Ay, {
                  exitFullScreen: this.maybeLeaveFullScreen,
                  channel: e,
                  onDisconnectCall: this.handleDisconnect,
                  idleProps: this._lastIdleProps,
              })
            : null;
    };
    renderBottomLeft = () => {
        let { layout: e, channel: t, selectedParticipant: n, inCall: l } = this.props,
            { canChangeLayout: a, canInvite: s } = this.viewProperties,
            r =
                e === eV.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eV.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(ez, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: a,
                  canInvite: s,
                  onToggleChat: r,
                  maybeLeaveFullScreen: this.maybeLeaveFullScreen,
              })
            : null;
    };
    renderBottomRight = () => {
        let {
                popoutWindow: e,
                popoutWindowAlwaysOnTop: t,
                currentUserId: n,
                selectedParticipant: l,
                inCall: a,
                canUseHaven: s,
            } = this.props,
            { canFullscreen: r, canStayOnTop: o, canPopout: c, useTheme: d } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != l && l.type !== ew.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(eu.A, {
                          context: (0, eS.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: ek.MQ,
                          className: ek.iq,
                          location: M.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(ed.A, {
                          className: ek.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                s &&
                    a &&
                    (0, i.jsx)(p.K, {
                        variant: "icon-only",
                        "aria-label": "Haven",
                        icon: m.Y,
                        onClick: this.handleHaven,
                    }),
                c
                    ? (0, i.jsx)(ec.A, {
                          themeable: d,
                          popoutOpen: this.popoutOpen,
                          className: ek.iq,
                          onOpenPopout: () => {
                              (0, eD.X)(M.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eD.X)(M.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                r
                    ? (0, i.jsx)(er.A, {
                          themeable: d,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: ek.iq,
                          onClick: () => {
                              (0, eD.X)(
                                  M.A.VOICE_CONTROL_TRAY,
                                  eD.O.FULL_SCREEN,
                                  this.props.layout !== eV.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen();
                          },
                      })
                    : null,
            ],
        });
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && l)
            ? null
            : (0, i.jsx)(eP.Ay, { children: (0, i.jsx)(el.A, { className: ek.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eM.Ay, { children: (0, i.jsx)(eh.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: a, inCall: s } = this.props,
            { useExternalHeader: r, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)(en.A, {
                  children: (0, i.jsx)("div", {
                      className: ek.dL,
                      children: r
                          ? e?.()
                          : (0, i.jsx)(eb.A, {
                                channel: t,
                                guild: n,
                                appContext: l,
                                inCall: s,
                                isChatOpen: a || (this.popoutOpen && !this.inPopout && s),
                                exitFullScreen: this.maybeLeaveFullScreen,
                            }),
                  }),
              })
            : null;
    };
    renderContent(e) {
        let {
                popoutType: t,
                selectedParticipant: n,
                inCall: l,
                hasConnectPermission: a,
                mode: s,
                participantsOpen: r,
                participants: o,
                filteredParticipants: c,
                participantsVersion: d,
                channel: u,
                guild: h,
                layout: p,
                forceShowControls: m,
                awaitingRemoteSessionInfo: A,
                currentChannelActivities: x,
                callContainerDimensions: g,
            } = this.props,
            C = p === eV.DUB.MINIMUM,
            f = C || p === eV.DUB.NORMAL,
            E = l && s === eV._Of.VIDEO,
            y = (x?.length ?? 0) > 0 && u.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(ea.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !l || C,
                idle: !m && l && !C && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(ee.A, {
                              ref: this._contentRef,
                              inCall: l,
                              channel: u,
                              hasConnectPermission: a,
                              guild: h,
                              participants: o,
                              filteredParticipants: c,
                              participantsVersion: d,
                              selectedParticipant: E ? n : null,
                              layout: p,
                              idle: e.idle,
                              mode: s,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: r && (!f || y),
                              popoutType: t,
                              awaitingRemoteSessionInfo: A,
                              callContainerDimensions: g,
                          }),
            })
        );
    }
    render() {
        let {
                layout: e,
                channel: t,
                guild: n,
                mode: l,
                chatOpen: a,
                appContext: r,
                maxSidebarWidth: o,
                maxHeight: c,
                inCall: d,
            } = this.props,
            { resizedHeight: u } = this.state,
            h = l === eV._Of.VIDEO,
            p = e !== eV.DUB.HAVEN && e !== eV.DUB.NO_CHAT && e !== eV.DUB.FULL_SCREEN && null != c,
            m = eV.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: s()(ek.iE, eF[e], eG[r], {
                [ek.XW]: this.popoutOpen && !this.inPopout && e !== eV.DUB.NO_CHAT && t.isPrivate(),
                [ek.Ki]: h,
                [ek.vc]: a,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: p && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(A.N, {
                    theme: m,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(ek.ik, a || e !== eV.DUB.FULL_SCREEN ? void 0 : ek.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(et.Ay, { timeout: eH, children: (e) => this.renderContent(e) }),
                        }),
                }),
                p &&
                    (0, i.jsx)(eL.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: ek.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        a &&
                        (0, i.jsx)(eO.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eY = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, _.Ay)(),
        { width: h = 0, height: p = 0, ref: m } = (0, _.Ay)(),
        { ref: A } = (0, _.Ay)(),
        E = (0, K.Us)(),
        y = (0, F.A)(),
        N = (0, d.bG)([ef.A], () => (y?.channelId ?? ef.A.getVoiceChannelId()) === t.id),
        {
            participants: j,
            filteredParticipants: v,
            participantsVersion: S,
            mode: O,
            layout: L,
            participantsOpen: D,
            chatOpen: w,
            selectedParticipant: V,
        } = (0, d.cf)([eR.A], () => {
            let e = E === eV.BRT.POPOUT,
                n = eR.A.getMode(t.id),
                i = eR.A.getLayout(t.id, E);
            e && (n = eV._Of.VIDEO);
            let l = n === eV._Of.VIDEO ? i : eV.DUB.MINIMUM;
            return (
                e && l !== eV.DUB.FULL_SCREEN && (l = eV.DUB.NO_CHAT),
                i === eV.DUB.HAVEN && (l = i),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== eV._Of.VOICE ? eR.A.getSelectedParticipant(t.id) : null,
                    participants: eR.A.getParticipants(t.id),
                    filteredParticipants: eR.A.getFilteredParticipants(t.id),
                    participantsOpen: eR.A.getParticipantsOpen(t.id),
                    chatOpen: eR.A.getChatOpen(t.id),
                    participantsVersion: eR.A.getParticipantsVersion(t.id),
                }
            );
        }, [E, t.id]),
        B = (0, d.yK)([ep.A], () => ep.A.getAllActiveStreams()),
        { selectedStream: G } = (0, d.cf)(
            [ep.A],
            () => ({ selectedStream: null != V ? ep.A.getActiveStreamForStreamKey(V.id) : null }),
            [V],
        ),
        z = (0, d.bG)([eg.A], () => eg.A.getGuild(t.getGuildId())),
        W = (0, d.bG)([em.default], () => em.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: q } = (0, d.cf)([Z.A], () => ({
            popoutWindow: Z.A.getWindow(eV.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: Z.A.getIsAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT),
        })),
        Q = (0, d.bG)([eC.A], () => eC.A.can(eV.xBc.CONNECT, t)),
        J = (0, d.bG)([eA.A], () => eA.A.getToastsEnabled(t.id)),
        ee = (0, d.bG)([H.default], () => H.default.getAwaitingRemoteSessionInfo()),
        et = (0, d.bG)([$.Ay], () => $.Ay.callHeaderHeight),
        en = l.useCallback((e) => {
            I.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ei = (0, d.bG)([P.A], () => P.A.getFetchState(), []),
        el = (0, R.A)(ei);
    l.useEffect(() => {
        ei === P.$.ERROR && el !== P.$.ERROR && (0, x.P0)((0, g.o)(eB.intl.string(eB.t["AlJyI+"]), C.Ck.FAILURE));
    }, [ei, el]);
    let ea = (0, d.bG)([b.Ay], () => b.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                N &&
                    O === eV._Of.VIDEO &&
                    ((t = await eT.Ay.blockDisplaySleep()), e && null != t && eT.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eT.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [N, O]);
    let es = (0, k.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: er } = (0, U.Ay)(M.A.CHANNEL_CALL),
        eo = b.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: ec } = Y.s.useConfig({ location: "ChannelCall" }),
        { theme: ed } = (0, f.wR)();
    return (0, i.jsx)(U.f5, {
        value: er,
        children: (0, i.jsx)(T.A, {
            page: eV.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eP.qh, {
                children: (0, i.jsxs)(eM.CB, {
                    children: [
                        (0, i.jsx)(eW, {
                            channel: t,
                            guild: z,
                            hasConnectPermission: Q,
                            participantsOpen: D,
                            renderExternalHeader: n,
                            appContext: E,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: q,
                            selectedStream: G,
                            mode: O,
                            inCall: N,
                            participants: j,
                            filteredParticipants: v,
                            participantsVersion: S,
                            layout: L,
                            chatOpen: w,
                            maxSidebarWidth: o - 550,
                            currentUserId: W,
                            selectedParticipant: V,
                            allActiveStreams: B,
                            connectedEmbeddedActivity: ea ?? void 0,
                            showChatToasts: J,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: p },
                            callContainerRef: m,
                            channelChatRef: A,
                            width: o,
                            maxHeight: a,
                            forceShowControls: es,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: eo,
                            theme: ed,
                            canPopout: s,
                            popoutType: r,
                            canUseHaven: ec,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eM.wQ, {}),
                        (0, i.jsx)(eP.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
