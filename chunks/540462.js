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
    g = n(73153),
    m = n(367513),
    p = n(442433),
    _ = n(956793),
    x = n(401843),
    f = n(817281),
    E = n(820284),
    C = n(765671),
    I = n(475743),
    S = n(646865),
    b = n(10716),
    N = n(795816),
    T = n(933958),
    j = n(967812),
    v = n(47294),
    y = n(793574),
    R = n(58149),
    O = n(688810),
    L = n(139286),
    D = n(235986),
    M = n(771781),
    G = n(643501),
    U = n(857253),
    P = n(652896),
    k = n(279250),
    w = n(418126),
    V = n(266626),
    B = n(267102),
    H = n(574172),
    F = n(869146),
    Y = n(976860),
    W = n(326567),
    K = n(964404),
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
    ei = n(128286),
    el = n(619344),
    es = n(821747),
    ea = n(125248),
    er = n(616356),
    eo = n(961350),
    ed = n(249288),
    ec = n(696451),
    eu = n(71393),
    eh = n(576705),
    eA = n(222823),
    eg = n(309010),
    em = n(287809),
    ep = n(977997),
    e_ = n(954571),
    ex = n(743898),
    ef = n(147036),
    eE = n(203982),
    eC = n(723702),
    eI = n(837921),
    eS = n(475815),
    eb = n(134047),
    eN = n(313961),
    eT = n(520698),
    ej = n(780642),
    ev = n(43189),
    ey = n(518530),
    eR = n(681281),
    eO = n(264250),
    eL = n(525788),
    eD = n(261718),
    eM = n(587837),
    eG = n(675853),
    eU = n(384059),
    eP = n(480890),
    ek = n(462675),
    ew = n(806931),
    eV = n(652215),
    eB = n(985018),
    eH = n(354972);
let eF = {
        [eV.DUB.NORMAL]: eH.qb,
        [eV.DUB.MINIMUM]: eH.Bp,
        [eV.DUB.NO_CHAT]: eH.Oo,
        [eV.DUB.FULL_SCREEN]: eH.iy,
        [eV.DUB.HAVEN]: eH.VT,
    },
    eY = { [eV.BRT.POPOUT]: eH.SW, [eV.BRT.APP]: null, [eV.BRT.OVERLAY]: null, [eV.BRT.CALL_TILE_POPOUT]: null };
class eW extends l.PureComponent {
    _prevLayout = eV.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: K.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eS.Wb, this.handleFullScreenChange),
            e_.default.track(eV.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, R.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eS.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eC.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            s = this.getRootNode();
        null != s &&
            e.mode === eV._Of.VIDEO &&
            i === eV._Of.VOICE &&
            (0, eS._U)(s, this.currentDocument) &&
            (0, eS.sP)(s, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && g.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eC.isPlatformEmbedded && eI.Ay.supportsFeature(eV.BYE.POPOUT_WINDOWS);
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
            ? { mainText: eB.intl.string(eB.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eV.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            s = t === eV._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eV._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eV._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eV.rbe.GUILD_VOICE,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eV.DUB.MINIMUM || e === eV.DUB.NORMAL,
                canInvite: o,
                canPopout: a,
                canFullscreen: s,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...d, canFullscreen: s, useTheme: !0 };
        switch (e) {
            case eV.DUB.FULL_SCREEN:
                return { ...d, canPopout: !this.inPopout && this.popoutOpen && d.canPopout };
            case eV.DUB.MINIMUM:
                return { ...d, canPopout: !1, useTheme: !0 };
            case eV.DUB.HAVEN:
            case eV.DUB.NO_CHAT:
            case eV.DUB.NORMAL:
                return { ...d };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eS._U)(e, this.currentDocument) ||
                this.props.layout !== eV.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eV.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eV.DUB.FULL_SCREEN), (0, eS.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eV.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eS.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eV.DUB.NORMAL ? eV.DUB.NO_CHAT : eV.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eV.DUB.HAVEN
            ? (this.handleChangeLayout(eV.DUB.NO_CHAT), w.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eV.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (m.A.updateLayout(t.id, e, n),
            e === eV.DUB.FULL_SCREEN && t.isPrivate() && eE._.dispatch(eV.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eV.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, L.x)({
            type: d.ImpressionTypes.MENU,
            name: d.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== ew.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ew.GK.CONTEXT_MENU;
        return (0, eP.s)(e, y.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== ew.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, s) => {
        let { channel: a, appContext: r, layout: d } = this.props,
            c = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case ew.lp.HIDDEN_STREAM:
            case ew.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, ew.qs.STREAM),
                    (0, p.L3)(
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
                                        ew.qs.STREAM,
                                        s,
                                    ),
                                });
                        },
                        c,
                    );
                return;
            case ew.lp.USER:
                this.trackCallTileContextMenuImpression(e, ew.qs.USER);
                let u = em.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, W.r)(t, u, a, c, (e, t) =>
                            (0, eP.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: ew.GK.THREE_DOT,
                                tileType: ew.qs.USER,
                                targetUserId: u.id,
                                location: y.A.CHANNEL_CALL,
                            }),
                        );
                    switch (a.type) {
                        case eV.rbe.DM:
                            return (0, p.L3)(
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
                                                ew.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case eV.rbe.GROUP_DM:
                            return (0, p.L3)(
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
                                            showChatItems: d === eV.DUB.MINIMUM || d === eV.DUB.NORMAL,
                                            user: u,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                ew.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case eV.rbe.GUILD_VOICE:
                        case eV.rbe.PUBLIC_THREAD:
                        case eV.rbe.PRIVATE_THREAD:
                            let s = a.getGuildId();
                            return (
                                o()(null != s, "GuildID null for guild voice channel"),
                                (0, p.L3)(
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
                                                    ew.qs.USER,
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
        (0, ew.Ay)(e) &&
            (0, k.eo)(n, ep.A, eu.A, eh.A, G.default)[0] &&
            (_.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, P._z)(t) === e.id && t.state !== eV.XYD.ENDED).length &&
                (0, x.A9)((0, P.Iy)(e.id), { forceMultiple: t.shiftKey })),
            s &&
                a === eV._Of.VIDEO &&
                (i?.id === e.id ? m.A.selectParticipant(n.id, null) : m.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, N.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || ec.Ay.isCurrentUserGuest(n) || (0, Y.pX)((0, ef.vJ)(n)), H.openChannelCallPopout(e);
            };
        null == t || (0, S.f)() ? n() : (0, v.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eU.X)(y.A.VOICE_CONTROL_TRAY, eU.O.STAY_ON_TOP, e), H.setAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        H.close(eV.MLl.CHANNEL_CALL_POPOUT);
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
            ? (0, i.jsx)(z.Ay, {
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
            participants: c,
        } = this.props;
        if (!d) return null;
        let u = e === eV.DUB.NO_CHAT ? ee.A.Directions.UP : ee.A.Directions.DOWN,
            h = [eV.DUB.FULL_SCREEN, eV.DUB.NO_CHAT].includes(e),
            g = c.some((e) => e.type === ew.lp.STREAM),
            m =
                e === eV.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eV.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout,
            { canChangeLayout: p, canInvite: _ } = this.viewProperties,
            x = s
                ? (0, i.jsx)(q.A, {
                      channel: n,
                      stream: r?.type === ew.lp.STREAM ? (0, P.Iy)(r.id) : void 0,
                      applicationId: r?.type === ew.lp.ACTIVITY ? r.applicationId : void 0,
                      appContext: l,
                      className: eH.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === eV.rbe.GUILD_VOICE ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                  })
                : (0, i.jsx)(en.A, {
                      channel: n,
                      stream: r?.type === ew.lp.STREAM ? (0, P.Iy)(r.id) : void 0,
                      className: eH.jZ,
                      exitFullScreen: this.maybeLeaveFullScreen,
                      analyticsLocation: n.type === eV.rbe.GUILD_VOICE ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                  });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                _ && !o ? x : null,
                p
                    ? (0, i.jsxs)(D.A, {
                          className: eH.P0,
                          align: D.A.Align.CENTER,
                          grow: 0,
                          children: [
                              (0, i.jsx)(ee.A, {
                                  label: h ? eB.intl.string(eB.t.kkKapG) : eB.intl.string(eB.t["5MstTl"]),
                                  direction: u,
                                  className: eH.jZ,
                                  onClick: () => {
                                      (0, eU.X)(y.A.VOICE_CONTROL_TRAY, eU.O.CHAT, h), m();
                                  },
                              }),
                              h && t > 0 ? (0, i.jsx)(A.hVq, { className: eH.qS, count: t }) : null,
                          ],
                      })
                    : null,
                (r?.type !== ew.lp.STREAM && r?.type !== ew.lp.ACTIVITY) || o
                    ? null
                    : (0, i.jsx)(Q.A, {
                          children: (0, i.jsx)(eL.A, {
                              className: a()(eH.jZ, eH.Wi),
                              participant: r,
                              maxVisibleUsers: 4,
                              guildId: n.getGuildId(),
                              channelId: n.id,
                              disableInteraction: this.inPopout || e === eV.DUB.FULL_SCREEN,
                          }),
                      }),
                o && (0, i.jsx)(ek.A, { channel: n, hasActiveStream: g }),
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
                null != l && l.type !== ew.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(es.A, {
                          context: (0, eT.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eH.MQ,
                          className: eH.iq,
                          location: y.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(el.A, {
                          className: eH.iq,
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
                    ? (0, i.jsx)(ei.A, {
                          themeable: c,
                          popoutOpen: this.popoutOpen,
                          className: eH.iq,
                          onOpenPopout: () => {
                              (0, eU.X)(y.A.VOICE_CONTROL_TRAY, eU.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eU.X)(y.A.VOICE_CONTROL_TRAY, eU.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                r
                    ? (0, i.jsx)(et.A, {
                          themeable: c,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eH.iq,
                          onClick: () => {
                              (0, eU.X)(
                                  y.A.VOICE_CONTROL_TRAY,
                                  eU.O.FULL_SCREEN,
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
            : (0, i.jsx)(ev.Ay, { children: (0, i.jsx)(Z.A, { className: eH.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eG.Ay, { children: (0, i.jsx)(ea.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: s, inCall: a } = this.props,
            { useExternalHeader: r, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)(Q.A, {
                  children: (0, i.jsx)("div", {
                      className: eH.dL,
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
                forceShowControls: g,
                awaitingRemoteSessionInfo: m,
                currentChannelActivities: p,
                callContainerDimensions: _,
            } = this.props,
            x = A === eV.DUB.MINIMUM,
            f = x || A === eV.DUB.NORMAL,
            E = l && a === eV._Of.VIDEO,
            C = (p?.length ?? 0) > 0 && u.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)($.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !l || x,
                idle: !g && l && !x && e.idle,
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
                              selectedParticipant: E ? n : null,
                              layout: A,
                              idle: e.idle,
                              mode: a,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: r && (!f || C),
                              popoutType: t,
                              awaitingRemoteSessionInfo: m,
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
                participantsListOpen: u,
            } = this.props,
            { resizedHeight: h } = this.state,
            g = l === eV._Of.VIDEO,
            m = e !== eV.DUB.HAVEN && e !== eV.DUB.NO_CHAT && e !== eV.DUB.FULL_SCREEN && null != d,
            p = eV.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(eH.iE, eF[e], eY[r], {
                [eH.XW]: this.popoutOpen && !this.inPopout && e !== eV.DUB.NO_CHAT && t.isPrivate(),
                [eH.Ki]: g,
                [eH.vc]: s || u,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: m && null != h ? { minHeight: 230, maxHeight: d, height: h } : void 0,
            children: [
                (0, i.jsx)(A.NPJ, {
                    theme: p,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(eH.ik, s || e !== eV.DUB.FULL_SCREEN ? void 0 : eH.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(J.Ay, { timeout: 2e3, children: (e) => this.renderContent(e) }),
                        }),
                }),
                m &&
                    (0, i.jsx)(eM.A, {
                        minHeight: 230,
                        maxHeight: d,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eH.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!c || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                s && (0, i.jsx)(ey.A, { channel: t, guild: n, maxWidth: o }),
                                u && (0, i.jsx)(eO.A, { channel: t, maxWidth: o }),
                            ],
                        }),
                }),
            ],
        });
    }
}
let eK = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: s, canPopout: a = !0, popoutType: r } = e,
        { width: o = 0, ref: d } = (0, C.Ay)(),
        { width: h = 0, height: g = 0, ref: p } = (0, C.Ay)(),
        { ref: _ } = (0, C.Ay)(),
        x = (0, B.Us)(),
        S = (0, U.A)(),
        N = (0, c.bG)([eg.A], () => (S?.channelId ?? eg.A.getVoiceChannelId()) === t.id),
        {
            participants: v,
            filteredParticipants: R,
            participantsVersion: L,
            mode: D,
            layout: P,
            participantsOpen: k,
            participantsListOpen: w,
            chatOpen: H,
            selectedParticipant: Y,
        } = (0, c.cf)([eN.A], () => {
            let e = x === eV.BRT.POPOUT,
                n = eN.A.getMode(t.id),
                i = eN.A.getLayout(t.id, x);
            e && (n = eV._Of.VIDEO);
            let l = n === eV._Of.VIDEO ? i : eV.DUB.MINIMUM;
            return (
                e && l !== eV.DUB.FULL_SCREEN && (l = eV.DUB.NO_CHAT),
                i === eV.DUB.HAVEN && (l = i),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== eV._Of.VOICE ? eN.A.getSelectedParticipant(t.id) : null,
                    participants: eN.A.getParticipants(t.id),
                    filteredParticipants: eN.A.getFilteredParticipants(t.id),
                    participantsOpen: eN.A.getParticipantsOpen(t.id),
                    chatOpen: eN.A.getChatOpen(t.id),
                    participantsListOpen: eN.A.getParticipantsListOpen(t.id),
                    participantsVersion: eN.A.getParticipantsVersion(t.id),
                }
            );
        }, [x, t.id]),
        W = (0, c.yK)([er.A], () => er.A.getAllActiveStreams()),
        { selectedStream: z } = (0, c.cf)(
            [er.A],
            () => ({ selectedStream: null != Y ? er.A.getActiveStreamForStreamKey(Y.id) : null }),
            [Y],
        ),
        X = (0, c.bG)([eu.A], () => eu.A.getGuild(t.getGuildId())),
        q = (0, c.bG)([eA.Ay], () => eA.Ay.getMentionCount(t.id), [t.id]),
        J = (0, c.bG)([eo.default], () => eo.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: Z } = (0, c.cf)([F.A], () => ({
            popoutWindow: F.A.getWindow(eV.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.A.getIsAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, c.bG)([eh.A], () => eh.A.can(eV.xBc.CONNECT, t)),
        ee = (0, c.bG)([ed.A], () => ed.A.getToastsEnabled(t.id)),
        et = (0, c.bG)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
        en = (0, c.bG)([K.Ay], () => K.Ay.callHeaderHeight),
        ei = l.useCallback((e) => {
            f.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        el = X?.id ?? null,
        es = (0, j.A)(el, t.id),
        ea = (0, c.bG)([b.A], () => b.A.getFetchState(), []),
        ec = (0, I.A)(ea);
    l.useEffect(() => {
        ea === b.$.ERROR &&
            ec !== b.$.ERROR &&
            (0, A.showToast)((0, A.createToast)(eB.intl.string(eB.t["AlJyI+"]), A.ToastType.FAILURE));
    }, [ea, ec]);
    let em = (0, c.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                N &&
                    D === eV._Of.VIDEO &&
                    ((t = await eI.Ay.blockDisplaySleep()), e && null != t && eI.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eI.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [N, D]);
    let ep = (0, ej.A)(t, !0),
        { hasParticipantsPanel: e_ } = (0, eD.A)({ location: "ChannelCall" }),
        ef = (0, M.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eE } = (0, O.Ay)(y.A.CHANNEL_CALL),
        eC = o - 550,
        eS = T.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eT } = V.s.useConfig({ location: "ChannelCall" }),
        ey = (0, eb.T)({ channel: t, location: "ChannelCall" });
    l.useEffect(() => {
        if (!ey || !N || null != eN.A.getAllChatOpen()[t.id] || o <= 0) return;
        let e = !(0, ex.P)({ maxWidth: eC, minWidth: 450 });
        m.A.updateChatOpen(t.id, e, "auto open screen width");
    }, [ey, eC, o, t.id, N]);
    let { theme: eR } = (0, A.wRf)();
    return (0, i.jsx)(O.f5, {
        value: eE,
        children: (0, i.jsx)(E.A, {
            page: eV.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(ev.qh, {
                children: (0, i.jsxs)(eG.CB, {
                    children: [
                        (0, i.jsx)(eW, {
                            channel: t,
                            guild: X,
                            hasConnectPermission: $,
                            participantsOpen: k,
                            participantsListOpen: w && e_,
                            renderExternalHeader: n,
                            appContext: x,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: Z,
                            mentionCount: q,
                            selectedStream: z,
                            mode: D,
                            inCall: N,
                            participants: v,
                            filteredParticipants: R,
                            participantsVersion: L,
                            layout: P,
                            chatOpen: H,
                            maxSidebarWidth: eC,
                            shouldUseVoiceEffectsActionBar: ep,
                            currentUserId: J,
                            selectedParticipant: Y,
                            allActiveStreams: W,
                            useNewInviteButton: es,
                            connectedEmbeddedActivity: em ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: d,
                            callContainerDimensions: { width: h, height: g },
                            callContainerRef: p,
                            channelChatRef: _,
                            width: o,
                            maxHeight: s,
                            forceShowControls: ef,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: eS,
                            theme: eR,
                            canPopout: a,
                            popoutType: r,
                            canUseHaven: eT,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eG.wQ, {}),
                        (0, i.jsx)(ev.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
