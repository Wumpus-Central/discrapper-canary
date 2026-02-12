n.d(t, { A: () => eK });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(110259),
    c = n(311907),
    u = n(554146),
    h = n(451988),
    A = n(397927),
    m = n(73153),
    p = n(367513),
    g = n(442433),
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
    q = n(105225),
    X = n(874739),
    J = n(993952),
    Q = n(461782),
    $ = n(447404),
    Z = n(20465),
    ee = n(156652),
    et = n(622770),
    en = n(423562),
    ei = n(520006),
    el = n(128286),
    es = n(619344),
    ea = n(821747),
    er = n(125248),
    eo = n(616356),
    ed = n(961350),
    ec = n(249288),
    eu = n(696451),
    eh = n(71393),
    eA = n(576705),
    em = n(222823),
    ep = n(309010),
    eg = n(287809),
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
class eF extends l.PureComponent {
    _prevLayout = ew.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
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
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            s = this.getRootNode();
        null != s &&
            e.mode === ew._Of.VIDEO &&
            i === ew._Of.VOICE &&
            (0, eN._U)(s, this.currentDocument) &&
            (0, eN.sP)(s, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && m.h.wait(() => this.handleClosePopout());
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
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            s = t === ew._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === ew._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== ew._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === ew.rbe.GUILD_VOICE,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === ew.DUB.MINIMUM || e === ew.DUB.NORMAL,
                canInvite: o,
                canPopout: a,
                canFullscreen: s,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...d, canFullscreen: s, useTheme: !0 };
        switch (e) {
            case ew.DUB.FULL_SCREEN:
                return { ...d, canPopout: !this.inPopout && this.popoutOpen && d.canPopout };
            case ew.DUB.MINIMUM:
                return { ...d, canPopout: !1, useTheme: !0 };
            case ew.DUB.HAVEN:
            case ew.DUB.NO_CHAT:
            case ew.DUB.NORMAL:
                return { ...d };
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
            (p.A.updateLayout(t.id, e, n),
            e === ew.DUB.FULL_SCREEN && t.isPrivate() && eE._.dispatch(ew.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === ew.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, L.x)({
            type: d.ImpressionTypes.MENU,
            name: d.ImpressionNames.CALL_TILE_CONTEXT_MENU,
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
    handleContextMenu = (e, t, l, s) => {
        let { channel: a, appContext: r, layout: d } = this.props,
            c = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eP.lp.HIDDEN_STREAM:
            case eP.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eP.qs.STREAM),
                    (0, g.L3)(
                        t,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
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
                                        eP.qs.STREAM,
                                        s,
                                    ),
                                });
                        },
                        c,
                    );
                return;
            case eP.lp.USER:
                this.trackCallTileContextMenuImpression(e, eP.qs.USER);
                let u = eg.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, Y.r)(t, u, a, c, (e, t) =>
                            (0, eG.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eP.GK.THREE_DOT,
                                tileType: eP.qs.USER,
                                targetUserId: u.id,
                                location: j.A.CHANNEL_CALL,
                            }),
                        );
                    switch (a.type) {
                        case ew.rbe.DM:
                            return (0, g.L3)(
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
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "DMUserContextMenu",
                                                e,
                                                eP.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case ew.rbe.GROUP_DM:
                            return (0, g.L3)(
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
                                            showChatItems: d === ew.DUB.MINIMUM || d === ew.DUB.NORMAL,
                                            user: u,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eP.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case ew.rbe.GUILD_VOICE:
                        case ew.rbe.PUBLIC_THREAD:
                        case ew.rbe.PRIVATE_THREAD:
                            let s = a.getGuildId();
                            return (
                                o()(null != s, "GuildID null for guild voice channel"),
                                (0, g.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("84841"),
                                            n.e("52458"),
                                        ]).then(n.bind(n, 107632));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                showMediaItems: !0,
                                                showChannelCallItems: !0,
                                                showChatItems: !1,
                                                user: u,
                                                channel: a,
                                                guildId: s,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    eP.qs.USER,
                                                ),
                                            });
                                    },
                                    c,
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
        (0, eP.Ay)(e) &&
            (0, w.eo)(n, e_.A, eh.A, eA.A, G.default)[0] &&
            (_.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, P._z)(t) === e.id && t.state !== ew.XYD.ENDED).length &&
                (0, f.A9)((0, P.Iy)(e.id), { forceMultiple: t.shiftKey })),
            s &&
                a === ew._Of.VIDEO &&
                (i?.id === e.id ? p.A.selectParticipant(n.id, null) : p.A.selectParticipant(n.id, e.id));
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
            l = n === ew.DUB.FULL_SCREEN;
        ((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === ew.DUB.MINIMUM || n === ew.DUB.NORMAL
            ? (0, i.jsx)(q.Ay, {
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
            appContext: l,
            useNewInviteButton: s,
            selectedParticipant: r,
            shouldUseVoiceEffectsActionBar: o,
            inCall: d,
        } = this.props;
        if (!d) return null;
        let c = e === ew.DUB.NO_CHAT ? et.A.Directions.UP : et.A.Directions.DOWN,
            u = [ew.DUB.FULL_SCREEN, ew.DUB.NO_CHAT].includes(e),
            h =
                e === ew.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = ew.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout,
            { canChangeLayout: m, canInvite: p } = this.viewProperties,
            g = s
                ? (0, i.jsx)(J.A, {
                      channel: n,
                      stream: r?.type === eP.lp.STREAM ? (0, P.Iy)(r.id) : void 0,
                      applicationId: r?.type === eP.lp.ACTIVITY ? r.applicationId : void 0,
                      appContext: l,
                      className: eV.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === ew.rbe.GUILD_VOICE ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                  })
                : (0, i.jsx)(ei.A, {
                      channel: n,
                      stream: r?.type === eP.lp.STREAM ? (0, P.Iy)(r.id) : void 0,
                      className: eV.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === ew.rbe.GUILD_VOICE ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                  });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                p && !o ? g : null,
                m
                    ? (0, i.jsxs)(M.A, {
                          className: eV.P0,
                          align: M.A.Align.CENTER,
                          grow: 0,
                          children: [
                              (0, i.jsx)(et.A, {
                                  label: u ? ek.intl.string(ek.t.kkKapG) : ek.intl.string(ek.t["5MstTl"]),
                                  direction: c,
                                  className: eV.jZ,
                                  onClick: () => {
                                      (0, eD.X)(j.A.VOICE_CONTROL_TRAY, eD.O.CHAT, u), h();
                                  },
                              }),
                              u && t > 0 ? (0, i.jsx)(A.hVq, { className: eV.qS, count: t }) : null,
                          ],
                      })
                    : null,
                (r?.type !== eP.lp.STREAM && r?.type !== eP.lp.ACTIVITY) || o
                    ? null
                    : (0, i.jsx)($.A, {
                          children: (0, i.jsx)(eO.A, {
                              className: a()(eV.jZ, eV.Wi),
                              participant: r,
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
                selectedParticipant: l,
                inCall: s,
                canUseHaven: a,
            } = this.props,
            { canFullscreen: r, canStayOnTop: o, canPopout: d, useTheme: c } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != l && l.type !== eP.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(ea.A, {
                          context: (0, ev.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eV.MQ,
                          className: eV.iq,
                          location: j.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(es.A, {
                          className: eV.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                a &&
                    s &&
                    (0, i.jsx)(A.K0, {
                        variant: "icon-only",
                        "aria-label": "Haven",
                        icon: A.Y3C,
                        onClick: this.handleHaven,
                    }),
                d
                    ? (0, i.jsx)(el.A, {
                          themeable: c,
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
                r
                    ? (0, i.jsx)(en.A, {
                          themeable: c,
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
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && l)
            ? null
            : (0, i.jsx)(ey.Ay, { children: (0, i.jsx)(Z.A, { className: eV.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eM.Ay, { children: (0, i.jsx)(er.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: s, inCall: a } = this.props,
            { useExternalHeader: r, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)($.A, {
                  children: (0, i.jsx)("div", {
                      className: eV.dL,
                      children: r
                          ? e?.()
                          : (0, i.jsx)(eR.A, {
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
                participantsOpen: r,
                participants: o,
                filteredParticipants: d,
                participantsVersion: c,
                channel: u,
                guild: h,
                layout: A,
                forceShowControls: m,
                awaitingRemoteSessionInfo: p,
                currentChannelActivities: g,
                callContainerDimensions: _,
            } = this.props,
            f = A === ew.DUB.MINIMUM,
            x = f || A === ew.DUB.NORMAL,
            C = l && a === ew._Of.VIDEO,
            E = (g?.length ?? 0) > 0 && u.isPrivate();
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
                disableGradients: !l || f,
                idle: !m && l && !f && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(X.A, {
                              ref: this._contentRef,
                              inCall: l,
                              channel: u,
                              hasConnectPermission: s,
                              guild: h,
                              participants: o,
                              filteredParticipants: d,
                              participantsVersion: c,
                              selectedParticipant: C ? n : null,
                              layout: A,
                              idle: e.idle,
                              mode: a,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: r && (!x || E),
                              popoutType: t,
                              awaitingRemoteSessionInfo: p,
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
                mode: l,
                chatOpen: s,
                appContext: r,
                maxSidebarWidth: o,
                maxHeight: d,
                inCall: c,
            } = this.props,
            { resizedHeight: u } = this.state,
            h = l === ew._Of.VIDEO,
            m = e !== ew.DUB.HAVEN && e !== ew.DUB.NO_CHAT && e !== ew.DUB.FULL_SCREEN && null != d,
            p = ew.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(eV.iE, eB[e], eH[r], {
                [eV.XW]: this.popoutOpen && !this.inPopout && e !== ew.DUB.NO_CHAT && t.isPrivate(),
                [eV.Ki]: h,
                [eV.vc]: s,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: m && null != u ? { minHeight: 230, maxHeight: d, height: u } : void 0,
            children: [
                (0, i.jsx)(A.NPJ, {
                    theme: p,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(eV.ik, s || e !== ew.DUB.FULL_SCREEN ? void 0 : eV.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(Q.Ay, { timeout: 2e3, children: (e) => this.renderContent(e) }),
                        }),
                }),
                m &&
                    (0, i.jsx)(eL.A, {
                        minHeight: 230,
                        maxHeight: d,
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
                        (!c || !this.popoutOpen || this.inPopout) &&
                        s &&
                        (0, i.jsx)(ej.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eK = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: s, canPopout: a = !0, popoutType: r } = e,
        { width: o = 0, ref: d } = (0, E.Ay)(),
        { width: h = 0, height: m = 0, ref: g } = (0, E.Ay)(),
        { ref: _ } = (0, E.Ay)(),
        f = (0, B.Us)(),
        b = (0, U.A)(),
        S = (0, c.bG)([ep.A], () => (b?.channelId ?? ep.A.getVoiceChannelId()) === t.id),
        {
            participants: y,
            filteredParticipants: R,
            participantsVersion: L,
            mode: M,
            layout: P,
            participantsOpen: w,
            chatOpen: k,
            selectedParticipant: H,
        } = (0, c.cf)([eT.A], () => {
            let e = f === ew.BRT.POPOUT,
                n = eT.A.getMode(t.id),
                i = eT.A.getLayout(t.id, f);
            e && (n = ew._Of.VIDEO);
            let l = n === ew._Of.VIDEO ? i : ew.DUB.MINIMUM;
            return (
                e && l !== ew.DUB.FULL_SCREEN && (l = ew.DUB.NO_CHAT),
                i === ew.DUB.HAVEN && (l = i),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== ew._Of.VOICE ? eT.A.getSelectedParticipant(t.id) : null,
                    participants: eT.A.getParticipants(t.id),
                    filteredParticipants: eT.A.getFilteredParticipants(t.id),
                    participantsOpen: eT.A.getParticipantsOpen(t.id),
                    chatOpen: eT.A.getChatOpen(t.id),
                    participantsVersion: eT.A.getParticipantsVersion(t.id),
                }
            );
        }, [f, t.id]),
        K = (0, c.yK)([eo.A], () => eo.A.getAllActiveStreams()),
        { selectedStream: Y } = (0, c.cf)(
            [eo.A],
            () => ({ selectedStream: null != H ? eo.A.getActiveStreamForStreamKey(H.id) : null }),
            [H],
        ),
        q = (0, c.bG)([eh.A], () => eh.A.getGuild(t.getGuildId())),
        X = (0, c.bG)([em.Ay], () => em.Ay.getMentionCount(t.id), [t.id]),
        J = (0, c.bG)([ed.default], () => ed.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: $ } = (0, c.cf)([F.A], () => ({
            popoutWindow: F.A.getWindow(ew.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.A.getIsAlwaysOnTop(ew.MLl.CHANNEL_CALL_POPOUT),
        })),
        Z = (0, c.bG)([eA.A], () => eA.A.can(ew.xBc.CONNECT, t)),
        ee = (0, c.bG)([ec.A], () => ec.A.getToastsEnabled(t.id)),
        et = (0, c.bG)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
        en = (0, c.bG)([z.Ay], () => z.Ay.callHeaderHeight),
        ei = l.useCallback((e) => {
            x.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = q?.id ?? null,
        es = (0, v.A)(el, t.id),
        ea = (0, c.bG)([N.A], () => N.A.getFetchState(), []),
        er = (0, I.A)(ea);
    l.useEffect(() => {
        ea === N.$.ERROR &&
            er !== N.$.ERROR &&
            (0, A.showToast)((0, A.createToast)(ek.intl.string(ek.t["AlJyI+"]), A.ToastType.FAILURE));
    }, [ea, er]);
    let eu = (0, c.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    l.useEffect(() => {
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
    let eg = (0, W.$F)(t),
        e_ = (0, D.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ef } = (0, O.Ay)(j.A.CHANNEL_CALL),
        eC = o - 550,
        eE = T.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eI } = V.s.useConfig({ location: "ChannelCall" }),
        eN = (0, eS.T)({ channel: t, location: "ChannelCall" });
    l.useEffect(() => {
        if (!eN || !S || null != eT.A.getAllChatOpen()[t.id] || o <= 0) return;
        let e = !(0, ex.P)({ maxWidth: eC, minWidth: 450 });
        p.A.updateChatOpen(t.id, e, "auto open screen width");
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
                            guild: q,
                            hasConnectPermission: Z,
                            participantsOpen: w,
                            renderExternalHeader: n,
                            appContext: f,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: $,
                            mentionCount: X,
                            selectedStream: Y,
                            mode: M,
                            inCall: S,
                            participants: y,
                            filteredParticipants: R,
                            participantsVersion: L,
                            layout: P,
                            chatOpen: k,
                            maxSidebarWidth: eC,
                            shouldUseVoiceEffectsActionBar: eg,
                            currentUserId: J,
                            selectedParticipant: H,
                            allActiveStreams: K,
                            useNewInviteButton: es,
                            connectedEmbeddedActivity: eu ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: d,
                            callContainerDimensions: { width: h, height: m },
                            callContainerRef: g,
                            channelChatRef: _,
                            width: o,
                            maxHeight: s,
                            forceShowControls: e_,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eE,
                            theme: ev,
                            canPopout: a,
                            popoutType: r,
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
