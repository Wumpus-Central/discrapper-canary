n.r(t), n.d(t, { IDLE_TIMEOUT: () => ez, default: () => eX });
var i = n(477900),
    l = n(582128),
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
    f = n(691540),
    x = n(857250),
    g = n(97483),
    y = n(38021),
    C = n(228366),
    j = n(367513),
    v = n(442433),
    E = n(730852),
    N = n(401843),
    I = n(817281),
    b = n(820284),
    T = n(765671),
    _ = n(475743),
    R = n(646865),
    S = n(10716),
    L = n(795816),
    P = n(933958),
    w = n(47294),
    O = n(793574),
    M = n(95561),
    D = n(688810),
    U = n(139286),
    k = n(587895),
    V = n(235986),
    G = n(558845),
    B = n(643501),
    H = n(857253),
    F = n(652896),
    z = n(279250),
    W = n(558076),
    $ = n(360729),
    K = n(700948),
    Y = n(418126),
    X = n(266626),
    q = n(267102),
    Z = n(574172),
    Q = n(869146),
    J = n(976860),
    ee = n(326567),
    et = n(742023),
    en = n(105225),
    ei = n(874739),
    el = n(461782),
    ea = n(447404),
    es = n(401685),
    er = n(20465),
    eo = n(156652),
    ec = n(622770),
    ed = n(423562),
    eu = n(520006),
    eh = n(128286),
    ep = n(619344),
    em = n(821747),
    eA = n(125248),
    ef = n(616356),
    ex = n(280450),
    eg = n(249288),
    ey = n(696451),
    eC = n(71393),
    ej = n(576705),
    ev = n(309010),
    eE = n(287809),
    eN = n(977997),
    eI = n(174459),
    eb = n(871237),
    eT = n(625494),
    e_ = n(723702),
    eR = n(19575),
    eS = n(475815),
    eL = n(313961),
    eP = n(520698),
    ew = n(43189),
    eO = n(518530),
    eM = n(681281),
    eD = n(587837),
    eU = n(675853),
    ek = n(384059),
    eV = n(480890),
    eG = n(806931),
    eB = n(652215),
    eH = n(375708),
    eF = n(448449);
let ez = 2e3,
    eW = {
        [eB.DUB.NORMAL]: eF.qb,
        [eB.DUB.MINIMUM]: eF.Bp,
        [eB.DUB.NO_CHAT]: eF.Oo,
        [eB.DUB.FULL_SCREEN]: eF.iy,
        [eB.DUB.HAVEN]: eF.VT,
    },
    e$ = { [eB.BRT.POPOUT]: eF.SW, [eB.BRT.APP]: null, [eB.BRT.OVERLAY]: null, [eB.BRT.CALL_TILE_POPOUT]: null };
function eK(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, es.Bx)(),
        u = (0, d.bG)([k.A], () => (l?.type === eG.lp.ACTIVITY ? k.A.getApplication(l.applicationId) : void 0)),
        h = t === eB.DUB.NO_CHAT ? ec.A.Directions.UP : ec.A.Directions.DOWN,
        p = [eB.DUB.FULL_SCREEN, eB.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < es.vs.NO_INVITE
                ? (0, i.jsx)(eu.A, {
                      channel: n,
                      stream: l?.type === eG.lp.STREAM ? (0, F.Iy)(l.id) : void 0,
                      className: eF.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eB.rbe.GUILD_VOICE ? eB.liQ.GUILD_CHANNEL : eB.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(V.A, {
                      className: eF.P0,
                      align: V.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ec.A, {
                          label: p ? eH.intl.string(eH.t.kkKapG) : eH.intl.string(eH.t["5MstTl"]),
                          direction: h,
                          className: eF.jZ,
                          onClick: () => {
                              (0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.CHAT, p), r();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eY extends l.PureComponent {
    _prevLayout = eB.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: et.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eS.Wb, this.handleFullScreenChange),
            eI.default.track(eB.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, M.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eS.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, e_.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        null != a &&
            e.mode === eB._Of.VIDEO &&
            i === eB._Of.VOICE &&
            (0, eS._U)(a, this.currentDocument) &&
            (0, eS.sP)(a, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && C.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return e_.isPlatformEmbedded && eR.Ay.supportsFeature(eB.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !e_.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eH.intl.string(eH.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eB.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eB._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eB._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eB._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eB.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eB.DUB.MINIMUM || e === eB.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eB.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eB.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eB.DUB.HAVEN:
            case eB.DUB.NO_CHAT:
            case eB.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eS._U)(e, this.currentDocument) ||
                this.props.layout !== eB.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eB.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eB.DUB.FULL_SCREEN), (0, eS.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eB.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eS.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eB.DUB.NORMAL ? eB.DUB.NO_CHAT : eB.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eB.DUB.HAVEN
            ? (this.handleChangeLayout(eB.DUB.NO_CHAT), Y.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eB.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (j.A.updateLayout(t.id, e, n),
            e === eB.DUB.FULL_SCREEN && t.isPrivate() && eT._.dispatch(eB.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eB.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, U.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eG.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eG.GK.CONTEXT_MENU;
        return (0, eV.s)(e, O.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eG.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eG.lp.HIDDEN_STREAM:
            case eG.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eG.qs.STREAM),
                    (0, v.L3)(
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
                                        eG.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case eG.lp.USER:
                this.trackCallTileContextMenuImpression(e, eG.qs.USER);
                let u = eE.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, ee.r)(t, u, s, d, (e, t) =>
                            (0, eV.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eG.GK.THREE_DOT,
                                tileType: eG.qs.USER,
                                targetUserId: u.id,
                                location: O.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eB.rbe.DM:
                            return (0, v.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97422"),
                                        n.e("97705"),
                                        n.e("26132"),
                                        n.e("46652"),
                                        n.e("93190"),
                                        n.e("91763"),
                                        n.e("8757"),
                                        n.e("38730"),
                                        n.e("85968"),
                                        n.e("89673"),
                                        n.e("29787"),
                                        n.e("82073"),
                                        n.e("97558"),
                                        n.e("91994"),
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("92997"),
                                        n.e("47502"),
                                        n.e("45996"),
                                        n.e("23427"),
                                        n.e("29422"),
                                        n.e("7059"),
                                        n.e("72883"),
                                        n.e("21106"),
                                        n.e("87048"),
                                        n.e("90434"),
                                        n.e("98199"),
                                        n.e("17244"),
                                        n.e("64464"),
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
                                                eG.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eB.rbe.GROUP_DM:
                            return (0, v.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97422"),
                                        n.e("97705"),
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
                                            showChatItems: c === eB.DUB.MINIMUM || c === eB.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eG.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eB.rbe.GUILD_VOICE:
                        case eB.rbe.PUBLIC_THREAD:
                        case eB.rbe.PRIVATE_THREAD:
                            let a = s.getGuildId();
                            return (
                                o()(null != a, "GuildID null for guild voice channel"),
                                (0, v.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("97705"),
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
                                            n.e("4524"),
                                            n.e("54148"),
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
                                                    eG.qs.USER,
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
        (0, eG.Ay)(e) &&
            (0, z.eo)(n, eN.A, eC.A, ej.A, B.default)[0] &&
            (E.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, F._z)(t) === e.id && t.state !== eB.XYD.ENDED).length &&
                (0, N.A9)((0, F.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eB._Of.VIDEO &&
                (i?.id === e.id ? j.A.selectParticipant(n.id, null) : j.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, L.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            null == n || ey.Ay.isCurrentUserGuest(n) || (0, J.pX)((0, eb.vJ)(n)), Z.openChannelCallPopout(e);
        }
        null == t || (0, R.f)() ? n() : (0, w.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.STAY_ON_TOP, e), Z.setAlwaysOnTop(eB.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        Z.close(eB.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eB.DUB.FULL_SCREEN;
        ((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eB.DUB.MINIMUM || n === eB.DUB.NORMAL
            ? (0, i.jsx)(en.Ay, {
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
                e === eB.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eB.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(eK, {
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
                null != l && l.type !== eG.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(em.A, {
                          context: (0, eP.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eF.MQ,
                          className: eF.iq,
                          location: O.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(ep.A, {
                          className: eF.iq,
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
                    ? (0, i.jsx)(eh.A, {
                          themeable: d,
                          popoutOpen: this.popoutOpen,
                          className: eF.iq,
                          onOpenPopout: () => {
                              (0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, ek.X)(O.A.VOICE_CONTROL_TRAY, ek.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                r
                    ? (0, i.jsx)(ed.A, {
                          themeable: d,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eF.iq,
                          onClick: () => {
                              (0, ek.X)(
                                  O.A.VOICE_CONTROL_TRAY,
                                  ek.O.FULL_SCREEN,
                                  this.props.layout !== eB.DUB.FULL_SCREEN,
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
            : (0, i.jsx)(ew.Ay, { children: (0, i.jsx)(er.A, { className: eF.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eU.Ay, { children: (0, i.jsx)(eA.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: a, inCall: s } = this.props,
            { useExternalHeader: r, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)(ea.A, {
                  children: (0, i.jsx)("div", {
                      className: eF.dL,
                      children: r
                          ? e?.()
                          : (0, i.jsx)(eM.A, {
                                channel: t,
                                guild: n,
                                appContext: l,
                                inCall: s,
                                isChatOpen: a || (this.popoutOpen && !this.inPopout && s),
                                exitFullScreen: this.maybeLeaveFullScreen,
                                guildRoomVisible: this.props.guildRoomVisible,
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
                currentChannelActivities: f,
                callContainerDimensions: x,
                guildRoomVisible: g,
                isPlacingNote: y,
            } = this.props,
            C = p === eB.DUB.MINIMUM,
            j = C || p === eB.DUB.NORMAL,
            v = l && s === eB._Of.VIDEO,
            E = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let N = !l || !(this.popoutOpen && !this.inPopout),
            I = !m && l && !C && e.idle,
            b = g
                ? (0, i.jsx)(K.A, { channelId: u.id, popoutType: t, controlsIdle: I })
                : (0, i.jsx)(ei.A, {
                      ref: this._contentRef,
                      inCall: l,
                      channel: u,
                      hasConnectPermission: a,
                      guild: h,
                      participants: o,
                      filteredParticipants: c,
                      participantsVersion: d,
                      selectedParticipant: v ? n : null,
                      layout: p,
                      idle: e.idle,
                      mode: s,
                      onSelectParticipant: this.handleSelectParticipant,
                      onContextMenuParticipant: this.handleContextMenu,
                      showParticipants: r && (!j || E),
                      popoutType: t,
                      awaitingRemoteSessionInfo: A,
                      callContainerDimensions: x,
                  });
        return (0, i.jsx)(eo.A, {
            renderHeader: this.renderHeader,
            renderBottomLeft: this.renderBottomLeft,
            renderBottomCenter: this.renderBottomCenter,
            renderBottomRight: this.renderBottomRight,
            renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
            renderVoiceChannelEffects: this.renderVoiceChannelEffects,
            ...e,
            screenMessage: this.screenMessage,
            disableGradients: !l || C,
            hideControls: y,
            idle: I,
            children: N && b,
        });
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
            h = l === eB._Of.VIDEO,
            p = e !== eB.DUB.HAVEN && e !== eB.DUB.NO_CHAT && e !== eB.DUB.FULL_SCREEN && null != c,
            m = eB.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: s()(eF.iE, eW[e], e$[r], {
                [eF.XW]: this.popoutOpen && !this.inPopout && e !== eB.DUB.NO_CHAT && t.isPrivate(),
                [eF.Ki]: h,
                [eF.vc]: a,
                [eF.ty]: p,
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
                            className: s()(eF.ik, a || e !== eB.DUB.FULL_SCREEN ? void 0 : eF.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(el.Ay, { timeout: ez, children: (e) => this.renderContent(e) }),
                        }),
                }),
                p &&
                    (0, i.jsx)(eD.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eF.B2,
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
let eX = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, T.Ay)(),
        { width: h = 0, height: p = 0, ref: m } = (0, T.Ay)(),
        { ref: A } = (0, T.Ay)(),
        C = (0, q.Us)(),
        j = (0, H.A)(),
        v = (0, d.bG)([ev.Ay], () => (j?.channelId ?? ev.Ay.getVoiceChannelId()) === t.id),
        {
            participants: E,
            filteredParticipants: N,
            participantsVersion: R,
            mode: L,
            layout: w,
            participantsOpen: M,
            chatOpen: U,
            selectedParticipant: k,
        } = (0, d.cf)([eL.A], () => {
            let e = C === eB.BRT.POPOUT,
                n = eL.A.getMode(t.id),
                i = eL.A.getLayout(t.id, C);
            e && (n = eB._Of.VIDEO);
            let l = n === eB._Of.VIDEO ? i : eB.DUB.MINIMUM;
            return (
                e && l !== eB.DUB.FULL_SCREEN && (l = eB.DUB.NO_CHAT),
                i === eB.DUB.HAVEN && (l = i),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== eB._Of.VOICE ? eL.A.getSelectedParticipant(t.id) : null,
                    participants: eL.A.getParticipants(t.id),
                    filteredParticipants: eL.A.getFilteredParticipants(t.id),
                    participantsOpen: eL.A.getParticipantsOpen(t.id),
                    chatOpen: eL.A.getChatOpen(t.id),
                    participantsVersion: eL.A.getParticipantsVersion(t.id),
                }
            );
        }, [C, t.id]),
        V = (0, d.yK)([ef.A], () => ef.A.getAllActiveStreams()),
        { selectedStream: F } = (0, d.cf)(
            [ef.A],
            () => ({ selectedStream: null != k ? ef.A.getActiveStreamForStreamKey(k.id) : null }),
            [k],
        ),
        z = (0, d.bG)([eC.A], () => eC.A.getGuild(t.getGuildId())),
        K = (0, d.bG)([ex.default], () => ex.default.getId()),
        { popoutWindow: Y, popoutWindowAlwaysOnTop: Z } = (0, d.cf)([Q.A], () => ({
            popoutWindow: Q.A.getWindow(eB.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: Q.A.getIsAlwaysOnTop(eB.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([ej.A], () => ej.A.can(eB.xBc.CONNECT, t)),
        ee = (0, d.bG)([eg.A], () => eg.A.getToastsEnabled(t.id)),
        en = (0, d.bG)([B.default], () => B.default.getAwaitingRemoteSessionInfo()),
        ei = (0, d.bG)([et.Ay], () => et.Ay.callHeaderHeight),
        el = l.useCallback((e) => {
            I.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ea = (0, d.bG)([S.A], () => S.A.getFetchState(), []),
        es = (0, _.Ay)(ea);
    l.useEffect(() => {
        ea === S.$.ERROR && es !== S.$.ERROR && (0, f.P0)((0, x.o)(eH.intl.string(eH.t["AlJyI+"]), g.Ck.FAILURE));
    }, [ea, es]);
    let er = (0, d.bG)([P.Ay], () => P.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        eo = (0, G.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ec } = (0, D.Ay)(O.A.CHANNEL_CALL),
        ed = P.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eu } = X.s.useConfig({ location: "ChannelCall" }),
        { enabled: eh } = $.A.useExperiment({ guildId: t.guild_id, location: "ChannelCall" }),
        ep = (0, d.bG)([W.A], () => W.A.isVisible(t.id)),
        em = (0, d.bG)([W.A], () => {
            let e = W.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        { theme: eA } = (0, y.wR)();
    return (0, i.jsx)(D.f5, {
        value: ec,
        children: (0, i.jsx)(b.A, {
            page: eB.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(ew.qh, {
                children: (0, i.jsxs)(eU.CB, {
                    children: [
                        (0, i.jsx)(eY, {
                            channel: t,
                            guild: z,
                            hasConnectPermission: J,
                            participantsOpen: M,
                            renderExternalHeader: n,
                            appContext: C,
                            popoutWindow: Y,
                            popoutWindowAlwaysOnTop: Z,
                            selectedStream: F,
                            mode: L,
                            inCall: v,
                            participants: E,
                            filteredParticipants: N,
                            participantsVersion: R,
                            layout: w,
                            chatOpen: U,
                            maxSidebarWidth: o - 550,
                            currentUserId: K,
                            selectedParticipant: k,
                            allActiveStreams: V,
                            connectedEmbeddedActivity: er ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: ei,
                            updateStoredCallHeaderHeight: el,
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: p },
                            callContainerRef: m,
                            channelChatRef: A,
                            width: o,
                            maxHeight: a,
                            forceShowControls: eo,
                            awaitingRemoteSessionInfo: en,
                            currentChannelActivities: ed,
                            theme: eA,
                            canPopout: s,
                            popoutType: r,
                            canUseHaven: eu,
                            guildRoomVisible: eh && ep,
                            isPlacingNote: em,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eU.wQ, {}),
                        (0, i.jsx)(ew.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
