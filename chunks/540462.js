n.r(t), n.d(t, { IDLE_TIMEOUT: () => eG, default: () => eX });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    r = n.n(o),
    p = n(110259),
    h = n(17928),
    d = n(554146),
    u = n(451988),
    c = n(408278),
    C = n(825860),
    A = n(43990),
    O = n(691540),
    E = n(857250),
    L = n(97483),
    _ = n(38021),
    T = n(228366),
    m = n(367513),
    I = n(442433),
    U = n(956793),
    g = n(401843),
    N = n(817281),
    P = n(820284),
    y = n(765671),
    R = n(475743),
    D = n(646865),
    f = n(10716),
    S = n(795816),
    M = n(933958),
    B = n(47294),
    x = n(793574),
    w = n(58149),
    H = n(688810),
    v = n(139286),
    b = n(587895),
    F = n(235986),
    V = n(771781),
    j = n(643501),
    G = n(857253),
    k = n(652896),
    W = n(279250),
    Y = n(418126),
    q = n(266626),
    X = n(267102),
    z = n(574172),
    K = n(869146),
    Q = n(976860),
    J = n(326567),
    Z = n(964404),
    $ = n(105225),
    ee = n(22522),
    et = n(461782),
    en = n(447404),
    ei = n(401685),
    el = n(20465),
    es = n(156652),
    ea = n(622770),
    eo = n(201181),
    er = n(520006),
    ep = n(128286),
    eh = n(619344),
    ed = n(821747),
    eu = n(125248),
    ec = n(616356),
    eC = n(495544),
    eA = n(249288),
    eO = n(696451),
    eE = n(71393),
    eL = n(576705),
    e_ = n(309010),
    eT = n(287809),
    em = n(977997),
    eI = n(954571),
    eU = n(147036),
    eg = n(625494),
    eN = n(723702),
    eP = n(19575),
    ey = n(475815),
    eR = n(134047),
    eD = n(313961),
    ef = n(520698),
    eS = n(43189),
    eM = n(518530),
    eB = n(342520),
    ex = n(587837),
    ew = n(675853),
    eH = n(384059),
    ev = n(480890),
    eb = n(806931),
    eF = n(652215),
    eV = n(985018),
    ej = n(761673);
let eG = 2e3,
    ek = {
        [eF.DUB.NORMAL]: ej.qb,
        [eF.DUB.MINIMUM]: ej.Bp,
        [eF.DUB.NO_CHAT]: ej.Oo,
        [eF.DUB.FULL_SCREEN]: ej.iy,
        [eF.DUB.HAVEN]: ej.VT,
    },
    eW = { [eF.BRT.POPOUT]: ej.SW, [eF.BRT.APP]: null, [eF.BRT.OVERLAY]: null, [eF.BRT.CALL_TILE_POPOUT]: null };
function eY(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: s,
            canInvite: a,
            onToggleChat: o,
            maybeLeaveFullScreen: r,
        } = e,
        p = (0, ei.Bx)(),
        d = (0, h.bG)([b.A], () => (l?.type === eb.lp.ACTIVITY ? b.A.getApplication(l.applicationId) : void 0)),
        u = t === eF.DUB.NO_CHAT ? ea.A.Directions.UP : ea.A.Directions.DOWN,
        c = [eF.DUB.FULL_SCREEN, eF.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a && p < ei.vs.NO_INVITE
                ? (0, i.jsx)(er.A, {
                      channel: n,
                      stream: l?.type === eb.lp.STREAM ? (0, k.Iy)(l.id) : void 0,
                      className: ej.jZ,
                      exitFullScreen: r,
                      analyticsLocation: n.type === eF.rbe.GUILD_VOICE ? eF.liQ.GUILD_CHANNEL : eF.liQ.DM_CHANNEL,
                      applicationId: d?.id,
                  })
                : null,
            s
                ? (0, i.jsx)(F.A, {
                      className: ej.P0,
                      align: F.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ea.A, {
                          label: c ? eV.intl.string(eV.t.kkKapG) : eV.intl.string(eV.t["5MstTl"]),
                          direction: u,
                          className: ej.jZ,
                          onClick: () => {
                              (0, eH.X)(x.A.VOICE_CONTROL_TRAY, eH.O.CHAT, c), o();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eq extends l.PureComponent {
    _prevLayout = eF.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new u.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: Z.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ey.Wb, this.handleFullScreenChange),
            eI.default.track(eF.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, w.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(ey.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eN.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            s = this.getRootNode();
        null != s &&
            e.mode === eF._Of.VIDEO &&
            i === eF._Of.VOICE &&
            (0, ey._U)(s, this.currentDocument) &&
            (0, ey.sP)(s, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && T.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eN.isPlatformEmbedded && eP.Ay.supportsFeature(eF.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eN.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eV.intl.string(eV.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eF.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            s = t === eF._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eF._Of.VIDEO && i && this.popoutSupported && l,
            o = t !== eF._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            r = n.type === eF.rbe.GUILD_VOICE,
            p = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eF.DUB.MINIMUM || e === eF.DUB.NORMAL,
                canInvite: r,
                canPopout: a,
                canFullscreen: s,
                canChangeLayout: o,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...p, canFullscreen: s, useTheme: !0 };
        switch (e) {
            case eF.DUB.FULL_SCREEN:
                return { ...p, canPopout: !this.inPopout && this.popoutOpen && p.canPopout };
            case eF.DUB.MINIMUM:
                return { ...p, canPopout: !1, useTheme: !0 };
            case eF.DUB.HAVEN:
            case eF.DUB.NO_CHAT:
            case eF.DUB.NORMAL:
                return { ...p };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, ey._U)(e, this.currentDocument) ||
                this.props.layout !== eF.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eF.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eF.DUB.FULL_SCREEN), (0, ey.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eF.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, ey.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eF.DUB.NORMAL ? eF.DUB.NO_CHAT : eF.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eF.DUB.HAVEN
            ? (this.handleChangeLayout(eF.DUB.NO_CHAT), Y.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eF.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (m.A.updateLayout(t.id, e, n),
            e === eF.DUB.FULL_SCREEN && t.isPrivate() && eg._.dispatch(eF.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eF.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, v.x)({
            type: p.ImpressionTypes.MENU,
            name: p.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eb.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eb.GK.CONTEXT_MENU;
        return (0, ev.s)(e, x.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eb.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, s) => {
        let { channel: a, appContext: o, layout: p } = this.props,
            h = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: o };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eb.lp.HIDDEN_STREAM:
            case eb.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eb.qs.STREAM),
                    (0, I.L3)(
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
                                    appContext: o,
                                    minimal: l,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        eb.qs.STREAM,
                                        s,
                                    ),
                                });
                        },
                        h,
                    );
                return;
            case eb.lp.USER:
                this.trackCallTileContextMenuImpression(e, eb.qs.USER);
                let d = eT.default.getUser(e.id);
                if (null != d) {
                    if (l)
                        return (0, J.r)(t, d, a, h, (e, t) =>
                            (0, ev.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eb.GK.THREE_DOT,
                                tileType: eb.qs.USER,
                                targetUserId: d.id,
                                location: x.A.CHANNEL_CALL,
                            }),
                        );
                    switch (a.type) {
                        case eF.rbe.DM:
                            return (0, I.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("91388"),
                                        n.e("61748"),
                                        n.e("26132"),
                                        n.e("46652"),
                                        n.e("93190"),
                                        n.e("91763"),
                                        n.e("8757"),
                                        n.e("89673"),
                                        n.e("85968"),
                                        n.e("60195"),
                                        n.e("29787"),
                                        n.e("97558"),
                                        n.e("94000"),
                                        n.e("91994"),
                                        n.e("38730"),
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("86169"),
                                        n.e("34971"),
                                        n.e("45996"),
                                        n.e("23427"),
                                        n.e("29422"),
                                        n.e("14224"),
                                        n.e("72883"),
                                        n.e("7059"),
                                        n.e("42339"),
                                        n.e("98725"),
                                        n.e("40175"),
                                        n.e("43746"),
                                        n.e("90554"),
                                        n.e("98199"),
                                        n.e("41175"),
                                        n.e("39778"),
                                    ]).then(n.bind(n, 385913));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            user: d,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "DMUserContextMenu",
                                                e,
                                                eb.qs.USER,
                                            ),
                                        });
                                },
                                h,
                            );
                        case eF.rbe.GROUP_DM:
                            return (0, I.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("91388"),
                                        n.e("61748"),
                                        n.e("26132"),
                                        n.e("46652"),
                                        n.e("93190"),
                                        n.e("8757"),
                                        n.e("89673"),
                                        n.e("85968"),
                                        n.e("60195"),
                                        n.e("29787"),
                                        n.e("97558"),
                                        n.e("94000"),
                                        n.e("91994"),
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("24198"),
                                        n.e("86169"),
                                        n.e("45996"),
                                        n.e("23427"),
                                        n.e("29422"),
                                        n.e("14224"),
                                        n.e("72883"),
                                        n.e("7059"),
                                        n.e("28864"),
                                    ]).then(n.bind(n, 778595));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: p === eF.DUB.MINIMUM || p === eF.DUB.NORMAL,
                                            user: d,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eb.qs.USER,
                                            ),
                                        });
                                },
                                h,
                            );
                        case eF.rbe.GUILD_VOICE:
                        case eF.rbe.PUBLIC_THREAD:
                        case eF.rbe.PRIVATE_THREAD:
                            let s = a.getGuildId();
                            return (
                                r()(null != s, "GuildID null for guild voice channel"),
                                (0, I.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("91388"),
                                            n.e("26132"),
                                            n.e("46652"),
                                            n.e("93190"),
                                            n.e("8757"),
                                            n.e("89673"),
                                            n.e("85968"),
                                            n.e("60195"),
                                            n.e("29787"),
                                            n.e("97558"),
                                            n.e("94000"),
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
                                                user: d,
                                                channel: a,
                                                guildId: s,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    eb.qs.USER,
                                                ),
                                            });
                                    },
                                    h,
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
        let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: s, mode: a } = this.props;
        (0, eb.Ay)(e) &&
            (0, W.eo)(n, em.A, eE.A, eL.A, j.default)[0] &&
            (U.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, k._z)(t) === e.id && t.state !== eF.XYD.ENDED).length &&
                (0, g.A9)((0, k.Iy)(e.id), { forceMultiple: t.shiftKey })),
            s &&
                a === eF._Of.VIDEO &&
                (i?.id === e.id ? m.A.selectParticipant(n.id, null) : m.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || eO.Ay.isCurrentUserGuest(n) || (0, Q.pX)((0, eU.vJ)(n)), z.openChannelCallPopout(e);
            };
        null == t || (0, D.f)() ? n() : (0, B.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eH.X)(x.A.VOICE_CONTROL_TRAY, eH.O.STAY_ON_TOP, e), z.setAlwaysOnTop(eF.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        z.close(eF.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eF.DUB.FULL_SCREEN;
        ((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eF.DUB.MINIMUM || n === eF.DUB.NORMAL
            ? (0, i.jsx)($.Ay, {
                  exitFullScreen: this.maybeLeaveFullScreen,
                  channel: e,
                  onDisconnectCall: this.handleDisconnect,
                  idleProps: this._lastIdleProps,
              })
            : null;
    };
    renderBottomLeft = () => {
        let { layout: e, channel: t, selectedParticipant: n, inCall: l } = this.props,
            { canChangeLayout: s, canInvite: a } = this.viewProperties,
            o =
                e === eF.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eF.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(eY, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: s,
                  canInvite: a,
                  onToggleChat: o,
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
                inCall: s,
                canUseHaven: a,
            } = this.props,
            { canFullscreen: o, canStayOnTop: r, canPopout: p, useTheme: h } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != l && l.type !== eb.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(ed.A, {
                          context: (0, ef.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: ej.MQ,
                          className: ej.iq,
                          location: x.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                r
                    ? (0, i.jsx)(eh.A, {
                          className: ej.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                a &&
                    s &&
                    (0, i.jsx)(c.K, {
                        variant: "icon-only",
                        "aria-label": "Haven",
                        icon: C.Y,
                        onClick: this.handleHaven,
                    }),
                p
                    ? (0, i.jsx)(ep.A, {
                          themeable: h,
                          popoutOpen: this.popoutOpen,
                          className: ej.iq,
                          onOpenPopout: () => {
                              (0, eH.X)(x.A.VOICE_CONTROL_TRAY, eH.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eH.X)(x.A.VOICE_CONTROL_TRAY, eH.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                o
                    ? (0, i.jsx)(eo.A, {
                          themeable: h,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: ej.iq,
                          onClick: () => {
                              (0, eH.X)(
                                  x.A.VOICE_CONTROL_TRAY,
                                  eH.O.FULL_SCREEN,
                                  this.props.layout !== eF.DUB.FULL_SCREEN,
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
            : (0, i.jsx)(eS.Ay, { children: (0, i.jsx)(el.A, { className: ej.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(ew.Ay, { children: (0, i.jsx)(eu.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: s, inCall: a } = this.props,
            { useExternalHeader: o, renderHeader: r } = this.viewProperties;
        return r
            ? (0, i.jsx)(en.A, {
                  children: (0, i.jsx)("div", {
                      className: ej.dL,
                      children: o
                          ? e?.()
                          : (0, i.jsx)(eB.A, {
                                channel: t,
                                guild: n,
                                appContext: l,
                                inCall: a,
                                isChatOpen: s || (this.popoutOpen && !this.inPopout && a),
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
                hasConnectPermission: s,
                mode: a,
                participantsOpen: o,
                participants: r,
                filteredParticipants: p,
                participantsVersion: h,
                channel: d,
                guild: u,
                layout: c,
                forceShowControls: C,
                awaitingRemoteSessionInfo: A,
                currentChannelActivities: O,
                callContainerDimensions: E,
            } = this.props,
            L = c === eF.DUB.MINIMUM,
            _ = L || c === eF.DUB.NORMAL,
            T = l && a === eF._Of.VIDEO,
            m = (O?.length ?? 0) > 0 && d.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(es.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: d.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !l || L,
                idle: !C && l && !L && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(ee.A, {
                              ref: this._contentRef,
                              inCall: l,
                              channel: d,
                              hasConnectPermission: s,
                              guild: u,
                              participants: r,
                              filteredParticipants: p,
                              participantsVersion: h,
                              selectedParticipant: T ? n : null,
                              layout: c,
                              idle: e.idle,
                              mode: a,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: o && (!_ || m),
                              popoutType: t,
                              awaitingRemoteSessionInfo: A,
                              callContainerDimensions: E,
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
                chatOpen: s,
                appContext: o,
                maxSidebarWidth: r,
                maxHeight: p,
                inCall: h,
            } = this.props,
            { resizedHeight: d } = this.state,
            u = l === eF._Of.VIDEO,
            c = e !== eF.DUB.HAVEN && e !== eF.DUB.NO_CHAT && e !== eF.DUB.FULL_SCREEN && null != p,
            C = eF.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(ej.iE, ek[e], eW[o], {
                [ej.XW]: this.popoutOpen && !this.inPopout && e !== eF.DUB.NO_CHAT && t.isPrivate(),
                [ej.Ki]: u,
                [ej.vc]: s,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: c && null != d ? { minHeight: 230, maxHeight: p, height: d } : void 0,
            children: [
                (0, i.jsx)(A.N, {
                    theme: C,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(ej.ik, s || e !== eF.DUB.FULL_SCREEN ? void 0 : ej.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(et.Ay, { timeout: eG, children: (e) => this.renderContent(e) }),
                        }),
                }),
                c &&
                    (0, i.jsx)(ex.A, {
                        minHeight: 230,
                        maxHeight: p,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: ej.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!h || !this.popoutOpen || this.inPopout) &&
                        s &&
                        (0, i.jsx)(eM.A, { channel: t, guild: n, maxWidth: r }),
                }),
            ],
        });
    }
}
let eX = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: s, canPopout: a = !0, popoutType: o } = e,
        { width: r = 0, ref: p } = (0, y.Ay)(),
        { width: u = 0, height: c = 0, ref: C } = (0, y.Ay)(),
        { ref: A } = (0, y.Ay)(),
        T = (0, X.Us)(),
        I = (0, G.A)(),
        U = (0, h.bG)([e_.A], () => (I?.channelId ?? e_.A.getVoiceChannelId()) === t.id),
        {
            participants: g,
            filteredParticipants: D,
            participantsVersion: S,
            mode: B,
            layout: w,
            participantsOpen: v,
            chatOpen: b,
            selectedParticipant: F,
        } = (0, h.cf)([eD.A], () => {
            let e = T === eF.BRT.POPOUT,
                n = eD.A.getMode(t.id),
                i = eD.A.getLayout(t.id, T);
            e && (n = eF._Of.VIDEO);
            let l = n === eF._Of.VIDEO ? i : eF.DUB.MINIMUM;
            return (
                e && l !== eF.DUB.FULL_SCREEN && (l = eF.DUB.NO_CHAT),
                i === eF.DUB.HAVEN && (l = i),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== eF._Of.VOICE ? eD.A.getSelectedParticipant(t.id) : null,
                    participants: eD.A.getParticipants(t.id),
                    filteredParticipants: eD.A.getFilteredParticipants(t.id),
                    participantsOpen: eD.A.getParticipantsOpen(t.id),
                    chatOpen: eD.A.getChatOpen(t.id),
                    participantsVersion: eD.A.getParticipantsVersion(t.id),
                }
            );
        }, [T, t.id]),
        k = (0, h.yK)([ec.A], () => ec.A.getAllActiveStreams()),
        { selectedStream: W } = (0, h.cf)(
            [ec.A],
            () => ({ selectedStream: null != F ? ec.A.getActiveStreamForStreamKey(F.id) : null }),
            [F],
        ),
        Y = (0, h.bG)([eE.A], () => eE.A.getGuild(t.getGuildId())),
        z = (0, h.bG)([eC.default], () => eC.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: J } = (0, h.cf)([K.A], () => ({
            popoutWindow: K.A.getWindow(eF.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: K.A.getIsAlwaysOnTop(eF.MLl.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, h.bG)([eL.A], () => eL.A.can(eF.xBc.CONNECT, t)),
        ee = (0, h.bG)([eA.A], () => eA.A.getToastsEnabled(t.id)),
        et = (0, h.bG)([j.default], () => j.default.getAwaitingRemoteSessionInfo()),
        en = (0, h.bG)([Z.Ay], () => Z.Ay.callHeaderHeight),
        ei = l.useCallback((e) => {
            N.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = (0, h.bG)([f.A], () => f.A.getFetchState(), []),
        es = (0, R.A)(el);
    l.useEffect(() => {
        el === f.$.ERROR && es !== f.$.ERROR && (0, O.P0)((0, E.o)(eV.intl.string(eV.t["AlJyI+"]), L.Ck.FAILURE));
    }, [el, es]);
    let ea = (0, h.bG)([M.Ay], () => M.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                U &&
                    B === eF._Of.VIDEO &&
                    ((t = await eP.Ay.blockDisplaySleep()), e && null != t && eP.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eP.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [U, B]);
    let eo = (0, V.mB)(d.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: er } = (0, H.Ay)(x.A.CHANNEL_CALL),
        ep = r - 550,
        eh = M.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: ed } = q.s.useConfig({ location: "ChannelCall" }),
        eu = (0, eR.T)({ channel: t, location: "ChannelCall" });
    l.useEffect(() => {
        eu &&
            U &&
            null == eD.A.getAllChatOpen()[t.id] &&
            (r <= 0 || m.A.updateChatOpen(t.id, !0, "auto open screen width"));
    }, [eu, ep, r, t.id, U]);
    let { theme: eO } = (0, _.wR)();
    return (0, i.jsx)(H.f5, {
        value: er,
        children: (0, i.jsx)(P.A, {
            page: eF.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eS.qh, {
                children: (0, i.jsxs)(ew.CB, {
                    children: [
                        (0, i.jsx)(eq, {
                            channel: t,
                            guild: Y,
                            hasConnectPermission: $,
                            participantsOpen: v,
                            renderExternalHeader: n,
                            appContext: T,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: J,
                            selectedStream: W,
                            mode: B,
                            inCall: U,
                            participants: g,
                            filteredParticipants: D,
                            participantsVersion: S,
                            layout: w,
                            chatOpen: b,
                            maxSidebarWidth: ep,
                            currentUserId: z,
                            selectedParticipant: F,
                            allActiveStreams: k,
                            connectedEmbeddedActivity: ea ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: p,
                            callContainerDimensions: { width: u, height: c },
                            callContainerRef: C,
                            channelChatRef: A,
                            width: r,
                            maxHeight: s,
                            forceShowControls: eo,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eh,
                            theme: eO,
                            canPopout: a,
                            popoutType: o,
                            canUseHaven: ed,
                        }),
                        !t.isPrivate() && (0, i.jsx)(ew.wQ, {}),
                        (0, i.jsx)(eS.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
