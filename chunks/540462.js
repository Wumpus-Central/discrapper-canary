"use strict";
n.d(t, { A: () => eK });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(110259),
    d = n(311907),
    u = n(554146),
    h = n(451988),
    A = n(397927),
    p = n(73153),
    g = n(367513),
    m = n(442433),
    _ = n(956793),
    f = n(401843),
    x = n(817281),
    C = n(820284),
    E = n(765671),
    I = n(475743),
    b = n(646865),
    N = n(10716),
    S = n(795816),
    T = n(933958),
    v = n(967812),
    y = n(47294),
    j = n(793574),
    R = n(58149),
    O = n(688810),
    L = n(139286),
    M = n(235986),
    D = n(771781),
    G = n(643501),
    U = n(857253),
    P = n(652896),
    w = n(279250),
    k = n(418126),
    V = n(266626),
    B = n(267102),
    H = n(574172),
    F = n(869146),
    K = n(976860),
    W = n(123973),
    Y = n(326567),
    z = n(964404),
    X = n(105225),
    q = n(874739),
    J = n(993952),
    Q = n(461782),
    $ = n(447404),
    Z = n(20465),
    ee = n(156652),
    et = n(622770),
    en = n(423562),
    ei = n(520006),
    es = n(128286),
    el = n(619344),
    er = n(821747),
    ea = n(125248),
    eo = n(616356),
    ec = n(961350),
    ed = n(249288),
    eu = n(696451),
    eh = n(71393),
    eA = n(576705),
    ep = n(222823),
    eg = n(309010),
    em = n(287809),
    e_ = n(977997),
    ef = n(954571),
    ex = n(743898),
    eC = n(147036),
    eE = n(203982),
    eI = n(723702),
    eb = n(837921),
    eN = n(475815),
    eS = n(134047),
    eT = n(313961),
    ev = n(520698),
    ey = n(43189),
    ej = n(518530),
    eR = n(681281),
    eO = n(525788),
    eL = n(587837),
    eM = n(675853),
    eD = n(384059),
    eG = n(480890),
    eU = n(462675),
    eP = n(806931),
    ew = n(652215),
    ek = n(985018),
    eV = n(354972);
let eB = {
        [ew.DUB.NORMAL]: eV.qb,
        [ew.DUB.MINIMUM]: eV.Bp,
        [ew.DUB.NO_CHAT]: eV.Oo,
        [ew.DUB.FULL_SCREEN]: eV.iy,
        [ew.DUB.HAVEN]: eV.VT,
    },
    eH = { [ew.BRT.POPOUT]: eV.SW, [ew.BRT.APP]: null, [ew.BRT.OVERLAY]: null, [ew.BRT.CALL_TILE_POPOUT]: null };
class eF extends s.PureComponent {
    _prevLayout = ew.DUB.MINIMUM;
    _wrapperRef = s.createRef();
    _callContainerRef = s.createRef();
    _channelChatRef = s.createRef();
    _contentRef = s.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: z.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eN.Wb, this.handleFullScreenChange),
            ef.default.track(ew.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, R.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eN.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eI.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: s } = this.props,
            l = this.getRootNode();
        null != l &&
            e.mode === ew._Of.VIDEO &&
            i === ew._Of.VOICE &&
            (0, eN._U)(l, this.currentDocument) &&
            (0, eN.sP)(l, this.currentDocument),
            (e.participantsOpen !== t || s !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && p.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eI.isPlatformEmbedded && eb.Ay.supportsFeature(ew.BYE.POPOUT_WINDOWS);
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
            ? { mainText: ek.intl.string(ek.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === ew.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: s } = this.props,
            l = t === ew._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            r = t === ew._Of.VIDEO && i && this.popoutSupported && s,
            a = t !== ew._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === ew.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === ew.DUB.MINIMUM || e === ew.DUB.NORMAL,
                canInvite: o,
                canPopout: r,
                canFullscreen: l,
                canChangeLayout: a,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: l, useTheme: !0 };
        switch (e) {
            case ew.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case ew.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case ew.DUB.HAVEN:
            case ew.DUB.NO_CHAT:
            case ew.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eN._U)(e, this.currentDocument) ||
                this.props.layout !== ew.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== ew.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(ew.DUB.FULL_SCREEN), (0, eN.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === ew.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eN.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === ew.DUB.NORMAL ? ew.DUB.NO_CHAT : ew.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === ew.DUB.HAVEN
            ? (this.handleChangeLayout(ew.DUB.NO_CHAT), k.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(ew.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (g.A.updateLayout(t.id, e, n),
            e === ew.DUB.FULL_SCREEN && t.isPrivate() && eE._.dispatch(ew.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === ew.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, L.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eP.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eP.GK.CONTEXT_MENU;
        return (0, eG.s)(e, j.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eP.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, s, l) => {
        let { channel: r, appContext: a, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: a };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eP.lp.HIDDEN_STREAM:
            case eP.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eP.qs.STREAM),
                    (0, m.L3)(
                        t,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    stream: e.stream,
                                    exitFullscreen: this.maybeLeaveFullScreen,
                                    appContext: a,
                                    minimal: s,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        eP.qs.STREAM,
                                        l,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case eP.lp.USER:
                this.trackCallTileContextMenuImpression(e, eP.qs.USER);
                let u = em.default.getUser(e.id);
                if (null != u) {
                    if (s)
                        return (0, Y.r)(t, u, r, d, (e, t) =>
                            (0, eG.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eP.GK.THREE_DOT,
                                tileType: eP.qs.USER,
                                targetUserId: u.id,
                                location: j.A.CHANNEL_CALL,
                            }),
                        );
                    switch (r.type) {
                        case ew.rbe.DM:
                            return (0, m.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("39778"),
                                        n.e("88962"),
                                    ]).then(n.bind(n, 385913));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            user: u,
                                            channel: r,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "DMUserContextMenu",
                                                e,
                                                eP.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case ew.rbe.GROUP_DM:
                            return (0, m.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("69293"),
                                    ]).then(n.bind(n, 228006));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === ew.DUB.MINIMUM || c === ew.DUB.NORMAL,
                                            user: u,
                                            channel: r,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eP.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case ew.rbe.GUILD_VOICE:
                        case ew.rbe.PUBLIC_THREAD:
                        case ew.rbe.PRIVATE_THREAD:
                            let l = r.getGuildId();
                            return (
                                o()(null != l, "GuildID null for guild voice channel"),
                                (0, m.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("84841"),
                                            n.e("54266"),
                                        ]).then(n.bind(n, 107632));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                showMediaItems: !0,
                                                showChannelCallItems: !0,
                                                showChatItems: !1,
                                                user: u,
                                                channel: r,
                                                guildId: l,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    eP.qs.USER,
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
        let { channel: n, selectedParticipant: i, allActiveStreams: s, inCall: l, mode: r } = this.props;
        (0, eP.Ay)(e) &&
            (0, w.eo)(n, e_.A, eh.A, eA.A, G.default)[0] &&
            (_.default.selectVoiceChannel(n.id),
            0 === s.filter((t) => (0, P._z)(t) === e.id && t.state !== ew.XYD.ENDED).length &&
                (0, f.A9)((0, P.Iy)(e.id), { forceMultiple: t.shiftKey })),
            l &&
                r === ew._Of.VIDEO &&
                (i?.id === e.id ? g.A.selectParticipant(n.id, null) : g.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || eu.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, eC.vJ)(n)), H.openChannelCallPopout(e);
            };
        null == t || (0, b.f)() ? n() : (0, y.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eD.X)(j.A.VOICE_CONTROL_TRAY, eD.O.STAY_ON_TOP, e), H.setAlwaysOnTop(ew.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        H.close(ew.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            s = n === ew.DUB.FULL_SCREEN;
        ((!s && i?.id !== e.id) || (s && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === ew.DUB.MINIMUM || n === ew.DUB.NORMAL
            ? (0, i.jsx)(X.Ay, {
                  exitFullScreen: this.maybeLeaveFullScreen,
                  channel: e,
                  onDisconnectCall: this.handleDisconnect,
                  idleProps: this._lastIdleProps,
              })
            : null;
    };
    renderBottomLeft = () => {
        let {
            layout: e,
            mentionCount: t,
            channel: n,
            appContext: s,
            useNewInviteButton: l,
            selectedParticipant: a,
            shouldUseVoiceEffectsActionBar: o,
            inCall: c,
        } = this.props;
        if (!c) return null;
        let d = e === ew.DUB.NO_CHAT ? et.A.Directions.UP : et.A.Directions.DOWN,
            u = [ew.DUB.FULL_SCREEN, ew.DUB.NO_CHAT].includes(e),
            h =
                e === ew.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = ew.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout,
            { canChangeLayout: p, canInvite: g } = this.viewProperties,
            m = l
                ? (0, i.jsx)(J.A, {
                      channel: n,
                      stream: a?.type === eP.lp.STREAM ? (0, P.Iy)(a.id) : void 0,
                      applicationId: a?.type === eP.lp.ACTIVITY ? a.applicationId : void 0,
                      appContext: s,
                      className: eV.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === ew.rbe.GUILD_VOICE ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                  })
                : (0, i.jsx)(ei.A, {
                      channel: n,
                      stream: a?.type === eP.lp.STREAM ? (0, P.Iy)(a.id) : void 0,
                      className: eV.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === ew.rbe.GUILD_VOICE ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                  });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                g && !o ? m : null,
                p
                    ? (0, i.jsxs)(M.A, {
                          className: eV.P0,
                          align: M.A.Align.CENTER,
                          grow: 0,
                          children: [
                              (0, i.jsx)(et.A, {
                                  label: u ? ek.intl.string(ek.t.kkKapG) : ek.intl.string(ek.t["5MstTl"]),
                                  direction: d,
                                  className: eV.jZ,
                                  onClick: () => {
                                      (0, eD.X)(j.A.VOICE_CONTROL_TRAY, eD.O.CHAT, u), h();
                                  },
                              }),
                              u && t > 0 ? (0, i.jsx)(A.hVq, { className: eV.qS, count: t }) : null,
                          ],
                      })
                    : null,
                (a?.type !== eP.lp.STREAM && a?.type !== eP.lp.ACTIVITY) || o
                    ? null
                    : (0, i.jsx)($.A, {
                          children: (0, i.jsx)(eO.A, {
                              className: r()(eV.jZ, eV.Wi),
                              participant: a,
                              maxVisibleUsers: 4,
                              guildId: n.getGuildId(),
                              channelId: n.id,
                              disableInteraction: this.inPopout || e === ew.DUB.FULL_SCREEN,
                          }),
                      }),
                o && (0, i.jsx)(eU.A, { channel: n }),
            ],
        });
    };
    renderBottomRight = () => {
        let {
                popoutWindow: e,
                popoutWindowAlwaysOnTop: t,
                currentUserId: n,
                selectedParticipant: s,
                inCall: l,
                canUseHaven: r,
            } = this.props,
            { canFullscreen: a, canStayOnTop: o, canPopout: c, useTheme: d } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != s && s.type !== eP.lp.ACTIVITY && s.user.id !== n
                    ? (0, i.jsx)(er.A, {
                          context: (0, ev.A)(s.type),
                          userId: s.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eV.MQ,
                          className: eV.iq,
                          location: j.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(el.A, {
                          className: eV.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r &&
                    l &&
                    (0, i.jsx)(A.K0, {
                        variant: "icon-only",
                        "aria-label": "Haven",
                        icon: A.Y3C,
                        onClick: this.handleHaven,
                    }),
                c
                    ? (0, i.jsx)(es.A, {
                          themeable: d,
                          popoutOpen: this.popoutOpen,
                          className: eV.iq,
                          onOpenPopout: () => {
                              (0, eD.X)(j.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eD.X)(j.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(en.A, {
                          themeable: d,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eV.iq,
                          onClick: () => {
                              (0, eD.X)(
                                  j.A.VOICE_CONTROL_TRAY,
                                  eD.O.FULL_SCREEN,
                                  this.props.layout !== ew.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen();
                          },
                      })
                    : null,
            ],
        });
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: s } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && s)
            ? null
            : (0, i.jsx)(ey.Ay, { children: (0, i.jsx)(Z.A, { className: eV.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eM.Ay, { children: (0, i.jsx)(ea.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: s, chatOpen: l, inCall: r } = this.props,
            { useExternalHeader: a, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)($.A, {
                  children: (0, i.jsx)("div", {
                      className: eV.dL,
                      children: a
                          ? e?.()
                          : (0, i.jsx)(eR.A, {
                                channel: t,
                                guild: n,
                                appContext: s,
                                inCall: r,
                                isChatOpen: l || (this.popoutOpen && !this.inPopout && r),
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
                inCall: s,
                hasConnectPermission: l,
                mode: r,
                participantsOpen: a,
                participants: o,
                filteredParticipants: c,
                participantsVersion: d,
                channel: u,
                guild: h,
                layout: A,
                forceShowControls: p,
                awaitingRemoteSessionInfo: g,
                currentChannelActivities: m,
                callContainerDimensions: _,
            } = this.props,
            f = A === ew.DUB.MINIMUM,
            x = f || A === ew.DUB.NORMAL,
            C = s && r === ew._Of.VIDEO,
            E = (m?.length ?? 0) > 0 && u.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(ee.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !s || f,
                idle: !p && s && !f && e.idle,
                children:
                    s && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(q.A, {
                              ref: this._contentRef,
                              inCall: s,
                              channel: u,
                              hasConnectPermission: l,
                              guild: h,
                              participants: o,
                              filteredParticipants: c,
                              participantsVersion: d,
                              selectedParticipant: C ? n : null,
                              layout: A,
                              idle: e.idle,
                              mode: r,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: a && (!x || E),
                              popoutType: t,
                              awaitingRemoteSessionInfo: g,
                              callContainerDimensions: _,
                          }),
            })
        );
    }
    render() {
        let {
                layout: e,
                channel: t,
                guild: n,
                mode: s,
                chatOpen: l,
                appContext: a,
                maxSidebarWidth: o,
                maxHeight: c,
                inCall: d,
            } = this.props,
            { resizedHeight: u } = this.state,
            h = s === ew._Of.VIDEO,
            p = e !== ew.DUB.HAVEN && e !== ew.DUB.NO_CHAT && e !== ew.DUB.FULL_SCREEN && null != c,
            g = ew.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: r()(eV.iE, eB[e], eH[a], {
                [eV.XW]: this.popoutOpen && !this.inPopout && e !== ew.DUB.NO_CHAT && t.isPrivate(),
                [eV.Ki]: h,
                [eV.vc]: l,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: p && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(A.NPJ, {
                    theme: g,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: r()(eV.ik, l || e !== ew.DUB.FULL_SCREEN ? void 0 : eV.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(Q.Ay, { timeout: 2e3, children: (e) => this.renderContent(e) }),
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
                    className: eV.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        l &&
                        (0, i.jsx)(ej.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eK = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: l, canPopout: r = !0, popoutType: a } = e,
        { width: o = 0, ref: c } = (0, E.Ay)(),
        { width: h = 0, height: p = 0, ref: m } = (0, E.Ay)(),
        { ref: _ } = (0, E.Ay)(),
        f = (0, B.Us)(),
        b = (0, U.A)(),
        S = (0, d.bG)([eg.A], () => (b?.channelId ?? eg.A.getVoiceChannelId()) === t.id),
        {
            participants: y,
            filteredParticipants: R,
            participantsVersion: L,
            mode: M,
            layout: P,
            participantsOpen: w,
            chatOpen: k,
            selectedParticipant: H,
        } = (0, d.cf)([eT.A], () => {
            let e = f === ew.BRT.POPOUT,
                n = eT.A.getMode(t.id),
                i = eT.A.getLayout(t.id, f);
            e && (n = ew._Of.VIDEO);
            let s = n === ew._Of.VIDEO ? i : ew.DUB.MINIMUM;
            return (
                e && s !== ew.DUB.FULL_SCREEN && (s = ew.DUB.NO_CHAT),
                i === ew.DUB.HAVEN && (s = i),
                {
                    mode: n,
                    layout: s,
                    selectedParticipant: n !== ew._Of.VOICE ? eT.A.getSelectedParticipant(t.id) : null,
                    participants: eT.A.getParticipants(t.id),
                    filteredParticipants: eT.A.getFilteredParticipants(t.id),
                    participantsOpen: eT.A.getParticipantsOpen(t.id),
                    chatOpen: eT.A.getChatOpen(t.id),
                    participantsVersion: eT.A.getParticipantsVersion(t.id),
                }
            );
        }, [f, t.id]),
        K = (0, d.yK)([eo.A], () => eo.A.getAllActiveStreams()),
        { selectedStream: Y } = (0, d.cf)(
            [eo.A],
            () => ({ selectedStream: null != H ? eo.A.getActiveStreamForStreamKey(H.id) : null }),
            [H],
        ),
        X = (0, d.bG)([eh.A], () => eh.A.getGuild(t.getGuildId())),
        q = (0, d.bG)([ep.Ay], () => ep.Ay.getMentionCount(t.id), [t.id]),
        J = (0, d.bG)([ec.default], () => ec.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: $ } = (0, d.cf)([F.A], () => ({
            popoutWindow: F.A.getWindow(ew.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.A.getIsAlwaysOnTop(ew.MLl.CHANNEL_CALL_POPOUT),
        })),
        Z = (0, d.bG)([eA.A], () => eA.A.can(ew.xBc.CONNECT, t)),
        ee = (0, d.bG)([ed.A], () => ed.A.getToastsEnabled(t.id)),
        et = (0, d.bG)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
        en = (0, d.bG)([z.Ay], () => z.Ay.callHeaderHeight),
        ei = s.useCallback((e) => {
            x.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        es = X?.id ?? null,
        el = (0, v.A)(es, t.id),
        er = (0, d.bG)([N.A], () => N.A.getFetchState(), []),
        ea = (0, I.A)(er);
    s.useEffect(() => {
        er === N.$.ERROR &&
            ea !== N.$.ERROR &&
            (0, A.showToast)((0, A.createToast)(ek.intl.string(ek.t["AlJyI+"]), A.ToastType.FAILURE));
    }, [er, ea]);
    let eu = (0, d.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    s.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                S &&
                    M === ew._Of.VIDEO &&
                    ((t = await eb.Ay.blockDisplaySleep()), e && null != t && eb.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eb.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [S, M]);
    let em = (0, W.$F)(t),
        e_ = (0, D.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ef } = (0, O.Ay)(j.A.CHANNEL_CALL),
        eC = o - 550,
        eE = T.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eI } = V.s.useConfig({ location: "ChannelCall" }),
        eN = (0, eS.T)({ channel: t, location: "ChannelCall" });
    s.useEffect(() => {
        if (!eN || !S || null != eT.A.getAllChatOpen()[t.id] || o <= 0) return;
        let e = !(0, ex.P)({ maxWidth: eC, minWidth: 450 });
        g.A.updateChatOpen(t.id, e, "auto open screen width");
    }, [eN, eC, o, t.id, S]);
    let { theme: ev } = (0, A.wRf)();
    return (0, i.jsx)(O.f5, {
        value: ef,
        children: (0, i.jsx)(C.A, {
            page: ew.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(ey.qh, {
                children: (0, i.jsxs)(eM.CB, {
                    children: [
                        (0, i.jsx)(eF, {
                            channel: t,
                            guild: X,
                            hasConnectPermission: Z,
                            participantsOpen: w,
                            renderExternalHeader: n,
                            appContext: f,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: $,
                            mentionCount: q,
                            selectedStream: Y,
                            mode: M,
                            inCall: S,
                            participants: y,
                            filteredParticipants: R,
                            participantsVersion: L,
                            layout: P,
                            chatOpen: k,
                            maxSidebarWidth: eC,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: J,
                            selectedParticipant: H,
                            allActiveStreams: K,
                            useNewInviteButton: el,
                            connectedEmbeddedActivity: eu ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: p },
                            callContainerRef: m,
                            channelChatRef: _,
                            width: o,
                            maxHeight: l,
                            forceShowControls: e_,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eE,
                            theme: ev,
                            canPopout: r,
                            popoutType: a,
                            canUseHaven: eI,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eM.wQ, {}),
                        (0, i.jsx)(ey.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
