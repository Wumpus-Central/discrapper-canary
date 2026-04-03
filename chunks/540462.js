n.d(t, { A: () => eB });
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
    _ = n(73153),
    m = n(367513),
    g = n(442433),
    p = n(956793),
    f = n(401843),
    x = n(817281),
    E = n(820284),
    I = n(765671),
    C = n(475743),
    N = n(646865),
    T = n(10716),
    S = n(795816),
    b = n(933958),
    y = n(47294),
    v = n(793574),
    j = n(58149),
    R = n(688810),
    O = n(139286),
    L = n(587895),
    M = n(235986),
    D = n(771781),
    U = n(643501),
    G = n(857253),
    P = n(652896),
    k = n(279250),
    w = n(418126),
    B = n(266626),
    V = n(267102),
    H = n(574172),
    F = n(869146),
    K = n(976860),
    W = n(326567),
    Y = n(964404),
    z = n(105225),
    q = n(874739),
    X = n(461782),
    J = n(447404),
    Q = n(401685),
    $ = n(20465),
    Z = n(156652),
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
    eA = n(309010),
    e_ = n(287809),
    em = n(977997),
    eg = n(954571),
    ep = n(147036),
    ef = n(203982),
    ex = n(723702),
    eE = n(837921),
    eI = n(475815),
    eC = n(134047),
    eN = n(313961),
    eT = n(520698),
    eS = n(43189),
    eb = n(518530),
    ey = n(681281),
    ev = n(587837),
    ej = n(675853),
    eR = n(384059),
    eO = n(480890),
    eL = n(806931),
    eM = n(652215),
    eD = n(985018),
    eU = n(507257);
let eG = {
        [eM.DUB.NORMAL]: eU.qb,
        [eM.DUB.MINIMUM]: eU.Bp,
        [eM.DUB.NO_CHAT]: eU.Oo,
        [eM.DUB.FULL_SCREEN]: eU.iy,
        [eM.DUB.HAVEN]: eU.VT,
    },
    eP = { [eM.BRT.POPOUT]: eU.SW, [eM.BRT.APP]: null, [eM.BRT.OVERLAY]: null, [eM.BRT.CALL_TILE_POPOUT]: null };
function ek(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: s,
            canInvite: a,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        d = (0, Q.Bx)(),
        u = (0, c.bG)([L.A], () => (l?.type === eL.lp.ACTIVITY ? L.A.getApplication(l.applicationId) : void 0)),
        h = t === eM.DUB.NO_CHAT ? ee.A.Directions.UP : ee.A.Directions.DOWN,
        A = [eM.DUB.FULL_SCREEN, eM.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a && d < Q.vs.NO_INVITE
                ? (0, i.jsx)(en.A, {
                      channel: n,
                      stream: l?.type === eL.lp.STREAM ? (0, P.Iy)(l.id) : void 0,
                      className: eU.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eM.rbe.GUILD_VOICE ? eM.liQ.GUILD_CHANNEL : eM.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            s
                ? (0, i.jsx)(M.A, {
                      className: eU.P0,
                      align: M.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ee.A, {
                          label: A ? eD.intl.string(eD.t.kkKapG) : eD.intl.string(eD.t["5MstTl"]),
                          direction: h,
                          className: eU.jZ,
                          onClick: () => {
                              (0, eR.X)(v.A.VOICE_CONTROL_TRAY, eR.O.CHAT, A), r();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class ew extends l.PureComponent {
    _prevLayout = eM.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: Y.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eI.Wb, this.handleFullScreenChange),
            eg.default.track(eM.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, j.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eI.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, ex.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            s = this.getRootNode();
        null != s &&
            e.mode === eM._Of.VIDEO &&
            i === eM._Of.VOICE &&
            (0, eI._U)(s, this.currentDocument) &&
            (0, eI.sP)(s, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && _.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ex.isPlatformEmbedded && eE.Ay.supportsFeature(eM.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ex.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eD.intl.string(eD.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eM.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            s = t === eM._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eM._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eM._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eM.rbe.GUILD_VOICE,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eM.DUB.MINIMUM || e === eM.DUB.NORMAL,
                canInvite: o,
                canPopout: a,
                canFullscreen: s,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...d, canFullscreen: s, useTheme: !0 };
        switch (e) {
            case eM.DUB.FULL_SCREEN:
                return { ...d, canPopout: !this.inPopout && this.popoutOpen && d.canPopout };
            case eM.DUB.MINIMUM:
                return { ...d, canPopout: !1, useTheme: !0 };
            case eM.DUB.HAVEN:
            case eM.DUB.NO_CHAT:
            case eM.DUB.NORMAL:
                return { ...d };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eI._U)(e, this.currentDocument) ||
                this.props.layout !== eM.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eM.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eM.DUB.FULL_SCREEN), (0, eI.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eM.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eI.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eM.DUB.NORMAL ? eM.DUB.NO_CHAT : eM.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eM.DUB.HAVEN
            ? (this.handleChangeLayout(eM.DUB.NO_CHAT), w.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eM.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (m.A.updateLayout(t.id, e, n),
            e === eM.DUB.FULL_SCREEN && t.isPrivate() && ef._.dispatch(eM.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eM.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, O.x)({
            type: d.ImpressionTypes.MENU,
            name: d.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eL.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eL.GK.CONTEXT_MENU;
        return (0, eO.s)(e, v.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eL.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, s) => {
        let { channel: a, appContext: r, layout: d } = this.props,
            c = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eL.lp.HIDDEN_STREAM:
            case eL.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eL.qs.STREAM),
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
                                        eL.qs.STREAM,
                                        s,
                                    ),
                                });
                        },
                        c,
                    );
                return;
            case eL.lp.USER:
                this.trackCallTileContextMenuImpression(e, eL.qs.USER);
                let u = e_.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, W.r)(t, u, a, c, (e, t) =>
                            (0, eO.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eL.GK.THREE_DOT,
                                tileType: eL.qs.USER,
                                targetUserId: u.id,
                                location: v.A.CHANNEL_CALL,
                            }),
                        );
                    switch (a.type) {
                        case eM.rbe.DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("39778"),
                                        n.e("63071"),
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
                                                eL.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case eM.rbe.GROUP_DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("62891"),
                                        n.e("30915"),
                                    ]).then(n.bind(n, 228006));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: d === eM.DUB.MINIMUM || d === eM.DUB.NORMAL,
                                            user: u,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eL.qs.USER,
                                            ),
                                        });
                                },
                                c,
                            );
                        case eM.rbe.GUILD_VOICE:
                        case eM.rbe.PUBLIC_THREAD:
                        case eM.rbe.PRIVATE_THREAD:
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
                                            n.e("50970"),
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
                                                    eL.qs.USER,
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
        (0, eL.Ay)(e) &&
            (0, k.eo)(n, em.A, eu.A, eh.A, U.default)[0] &&
            (p.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, P._z)(t) === e.id && t.state !== eM.XYD.ENDED).length &&
                (0, f.A9)((0, P.Iy)(e.id), { forceMultiple: t.shiftKey })),
            s &&
                a === eM._Of.VIDEO &&
                (i?.id === e.id ? m.A.selectParticipant(n.id, null) : m.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || ec.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, ep.vJ)(n)), H.openChannelCallPopout(e);
            };
        null == t || (0, N.f)() ? n() : (0, y.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eR.X)(v.A.VOICE_CONTROL_TRAY, eR.O.STAY_ON_TOP, e), H.setAlwaysOnTop(eM.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        H.close(eM.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eM.DUB.FULL_SCREEN;
        ((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eM.DUB.MINIMUM || n === eM.DUB.NORMAL
            ? (0, i.jsx)(z.Ay, {
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
            r =
                e === eM.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eM.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(ek, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: s,
                  canInvite: a,
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
                inCall: s,
                canUseHaven: a,
            } = this.props,
            { canFullscreen: r, canStayOnTop: o, canPopout: d, useTheme: c } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != l && l.type !== eL.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(es.A, {
                          context: (0, eT.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eU.MQ,
                          className: eU.iq,
                          location: v.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(el.A, {
                          className: eU.iq,
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
                          className: eU.iq,
                          onOpenPopout: () => {
                              (0, eR.X)(v.A.VOICE_CONTROL_TRAY, eR.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eR.X)(v.A.VOICE_CONTROL_TRAY, eR.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                r
                    ? (0, i.jsx)(et.A, {
                          themeable: c,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eU.iq,
                          onClick: () => {
                              (0, eR.X)(
                                  v.A.VOICE_CONTROL_TRAY,
                                  eR.O.FULL_SCREEN,
                                  this.props.layout !== eM.DUB.FULL_SCREEN,
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
            : (0, i.jsx)(eS.Ay, { children: (0, i.jsx)($.A, { className: eU.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(ej.Ay, { children: (0, i.jsx)(ea.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: s, inCall: a } = this.props,
            { useExternalHeader: r, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)(J.A, {
                  children: (0, i.jsx)("div", {
                      className: eU.dL,
                      children: r
                          ? e?.()
                          : (0, i.jsx)(ey.A, {
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
                forceShowControls: _,
                awaitingRemoteSessionInfo: m,
                currentChannelActivities: g,
                callContainerDimensions: p,
            } = this.props,
            f = A === eM.DUB.MINIMUM,
            x = f || A === eM.DUB.NORMAL,
            E = l && a === eM._Of.VIDEO,
            I = (g?.length ?? 0) > 0 && u.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(Z.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !l || f,
                idle: !_ && l && !f && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(q.A, {
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
                              showParticipants: r && (!x || I),
                              popoutType: t,
                              awaitingRemoteSessionInfo: m,
                              callContainerDimensions: p,
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
            h = l === eM._Of.VIDEO,
            _ = e !== eM.DUB.HAVEN && e !== eM.DUB.NO_CHAT && e !== eM.DUB.FULL_SCREEN && null != d,
            m = eM.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(eU.iE, eG[e], eP[r], {
                [eU.XW]: this.popoutOpen && !this.inPopout && e !== eM.DUB.NO_CHAT && t.isPrivate(),
                [eU.Ki]: h,
                [eU.vc]: s,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: _ && null != u ? { minHeight: 230, maxHeight: d, height: u } : void 0,
            children: [
                (0, i.jsx)(A.NPJ, {
                    theme: m,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(eU.ik, s || e !== eM.DUB.FULL_SCREEN ? void 0 : eU.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(X.Ay, { timeout: 2e3, children: (e) => this.renderContent(e) }),
                        }),
                }),
                _ &&
                    (0, i.jsx)(ev.A, {
                        minHeight: 230,
                        maxHeight: d,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eU.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!c || !this.popoutOpen || this.inPopout) &&
                        s &&
                        (0, i.jsx)(eb.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eB = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: s, canPopout: a = !0, popoutType: r } = e,
        { width: o = 0, ref: d } = (0, I.Ay)(),
        { width: h = 0, height: _ = 0, ref: g } = (0, I.Ay)(),
        { ref: p } = (0, I.Ay)(),
        f = (0, V.Us)(),
        N = (0, G.A)(),
        S = (0, c.bG)([eA.A], () => (N?.channelId ?? eA.A.getVoiceChannelId()) === t.id),
        {
            participants: y,
            filteredParticipants: j,
            participantsVersion: O,
            mode: L,
            layout: M,
            participantsOpen: P,
            chatOpen: k,
            selectedParticipant: w,
        } = (0, c.cf)([eN.A], () => {
            let e = f === eM.BRT.POPOUT,
                n = eN.A.getMode(t.id),
                i = eN.A.getLayout(t.id, f);
            e && (n = eM._Of.VIDEO);
            let l = n === eM._Of.VIDEO ? i : eM.DUB.MINIMUM;
            return (
                e && l !== eM.DUB.FULL_SCREEN && (l = eM.DUB.NO_CHAT),
                i === eM.DUB.HAVEN && (l = i),
                {
                    mode: n,
                    layout: l,
                    selectedParticipant: n !== eM._Of.VOICE ? eN.A.getSelectedParticipant(t.id) : null,
                    participants: eN.A.getParticipants(t.id),
                    filteredParticipants: eN.A.getFilteredParticipants(t.id),
                    participantsOpen: eN.A.getParticipantsOpen(t.id),
                    chatOpen: eN.A.getChatOpen(t.id),
                    participantsVersion: eN.A.getParticipantsVersion(t.id),
                }
            );
        }, [f, t.id]),
        H = (0, c.yK)([er.A], () => er.A.getAllActiveStreams()),
        { selectedStream: K } = (0, c.cf)(
            [er.A],
            () => ({ selectedStream: null != w ? er.A.getActiveStreamForStreamKey(w.id) : null }),
            [w],
        ),
        W = (0, c.bG)([eu.A], () => eu.A.getGuild(t.getGuildId())),
        z = (0, c.bG)([eo.default], () => eo.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: X } = (0, c.cf)([F.A], () => ({
            popoutWindow: F.A.getWindow(eM.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.A.getIsAlwaysOnTop(eM.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, c.bG)([eh.A], () => eh.A.can(eM.xBc.CONNECT, t)),
        Q = (0, c.bG)([ed.A], () => ed.A.getToastsEnabled(t.id)),
        $ = (0, c.bG)([U.default], () => U.default.getAwaitingRemoteSessionInfo()),
        Z = (0, c.bG)([Y.Ay], () => Y.Ay.callHeaderHeight),
        ee = l.useCallback((e) => {
            x.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        et = (0, c.bG)([T.A], () => T.A.getFetchState(), []),
        en = (0, C.A)(et);
    l.useEffect(() => {
        et === T.$.ERROR &&
            en !== T.$.ERROR &&
            (0, A.showToast)((0, A.createToast)(eD.intl.string(eD.t["AlJyI+"]), A.ToastType.FAILURE));
    }, [et, en]);
    let ei = (0, c.bG)([b.Ay], () => b.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                S &&
                    L === eM._Of.VIDEO &&
                    ((t = await eE.Ay.blockDisplaySleep()), e && null != t && eE.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eE.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [S, L]);
    let el = (0, D.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: es } = (0, R.Ay)(v.A.CHANNEL_CALL),
        ea = o - 550,
        ec = b.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: e_ } = B.s.useConfig({ location: "ChannelCall" }),
        em = (0, eC.T)({ channel: t, location: "ChannelCall" });
    l.useEffect(() => {
        em &&
            S &&
            null == eN.A.getAllChatOpen()[t.id] &&
            (o <= 0 || m.A.updateChatOpen(t.id, !0, "auto open screen width"));
    }, [em, ea, o, t.id, S]);
    let { theme: eg } = (0, A.wRf)();
    return (0, i.jsx)(R.f5, {
        value: es,
        children: (0, i.jsx)(E.A, {
            page: eM.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eS.qh, {
                children: (0, i.jsxs)(ej.CB, {
                    children: [
                        (0, i.jsx)(ew, {
                            channel: t,
                            guild: W,
                            hasConnectPermission: J,
                            participantsOpen: P,
                            renderExternalHeader: n,
                            appContext: f,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: X,
                            selectedStream: K,
                            mode: L,
                            inCall: S,
                            participants: y,
                            filteredParticipants: j,
                            participantsVersion: O,
                            layout: M,
                            chatOpen: k,
                            maxSidebarWidth: ea,
                            currentUserId: z,
                            selectedParticipant: w,
                            allActiveStreams: H,
                            connectedEmbeddedActivity: ei ?? void 0,
                            showChatToasts: Q,
                            storedCallHeaderHeight: Z,
                            updateStoredCallHeaderHeight: ee,
                            wrapperRef: d,
                            callContainerDimensions: { width: h, height: _ },
                            callContainerRef: g,
                            channelChatRef: p,
                            width: o,
                            maxHeight: s,
                            forceShowControls: el,
                            awaitingRemoteSessionInfo: $,
                            currentChannelActivities: ec,
                            theme: eg,
                            canPopout: a,
                            popoutType: r,
                            canUseHaven: e_,
                        }),
                        !t.isPrivate() && (0, i.jsx)(ej.wQ, {}),
                        (0, i.jsx)(eS.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
