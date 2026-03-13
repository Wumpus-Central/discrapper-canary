"use strict";
n.d(t, { A: () => eV });
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
    m = n(73153),
    p = n(367513),
    g = n(442433),
    _ = n(956793),
    f = n(401843),
    x = n(817281),
    C = n(820284),
    E = n(765671),
    I = n(475743),
    N = n(646865),
    b = n(10716),
    S = n(795816),
    T = n(933958),
    v = n(47294),
    y = n(793574),
    j = n(58149),
    R = n(688810),
    O = n(139286),
    L = n(587895),
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
    es = n(619344),
    el = n(821747),
    er = n(125248),
    ea = n(616356),
    eo = n(961350),
    ec = n(249288),
    ed = n(696451),
    eu = n(71393),
    eh = n(576705),
    eA = n(309010),
    em = n(287809),
    ep = n(977997),
    eg = n(954571),
    e_ = n(147036),
    ef = n(203982),
    ex = n(723702),
    eC = n(837921),
    eE = n(475815),
    eI = n(134047),
    eN = n(313961),
    eb = n(520698),
    eS = n(43189),
    eT = n(518530),
    ev = n(681281),
    ey = n(587837),
    ej = n(675853),
    eR = n(384059),
    eO = n(480890),
    eL = n(806931),
    eM = n(652215),
    eD = n(985018),
    eG = n(304718);
let eU = {
        [eM.DUB.NORMAL]: eG.qb,
        [eM.DUB.MINIMUM]: eG.Bp,
        [eM.DUB.NO_CHAT]: eG.Oo,
        [eM.DUB.FULL_SCREEN]: eG.iy,
        [eM.DUB.HAVEN]: eG.VT,
    },
    eP = { [eM.BRT.POPOUT]: eG.SW, [eM.BRT.APP]: null, [eM.BRT.OVERLAY]: null, [eM.BRT.CALL_TILE_POPOUT]: null };
function ew(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: s,
            canChangeLayout: l,
            canInvite: r,
            onToggleChat: a,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, Q.Bx)(),
        u = (0, d.bG)([L.A], () => (s?.type === eL.lp.ACTIVITY ? L.A.getApplication(s.applicationId) : void 0)),
        h = t === eM.DUB.NO_CHAT ? ee.A.Directions.UP : ee.A.Directions.DOWN,
        A = [eM.DUB.FULL_SCREEN, eM.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r && c < Q.vs.NO_INVITE
                ? (0, i.jsx)(en.A, {
                      channel: n,
                      stream: s?.type === eL.lp.STREAM ? (0, P.Iy)(s.id) : void 0,
                      className: eG.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eM.rbe.GUILD_VOICE ? eM.liQ.GUILD_CHANNEL : eM.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            l
                ? (0, i.jsx)(M.A, {
                      className: eG.P0,
                      align: M.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ee.A, {
                          label: A ? eD.intl.string(eD.t.kkKapG) : eD.intl.string(eD.t["5MstTl"]),
                          direction: h,
                          className: eG.jZ,
                          onClick: () => {
                              (0, eR.X)(y.A.VOICE_CONTROL_TRAY, eR.O.CHAT, A), a();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class ek extends s.PureComponent {
    _prevLayout = eM.DUB.MINIMUM;
    _wrapperRef = s.createRef();
    _callContainerRef = s.createRef();
    _channelChatRef = s.createRef();
    _contentRef = s.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: Y.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eE.Wb, this.handleFullScreenChange),
            eg.default.track(eM.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, j.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eE.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, ex.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: s } = this.props,
            l = this.getRootNode();
        null != l &&
            e.mode === eM._Of.VIDEO &&
            i === eM._Of.VOICE &&
            (0, eE._U)(l, this.currentDocument) &&
            (0, eE.sP)(l, this.currentDocument),
            (e.participantsOpen !== t || s !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && m.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ex.isPlatformEmbedded && eC.Ay.supportsFeature(eM.BYE.POPOUT_WINDOWS);
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
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: s } = this.props,
            l = t === eM._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            r = t === eM._Of.VIDEO && i && this.popoutSupported && s,
            a = t !== eM._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eM.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eM.DUB.MINIMUM || e === eM.DUB.NORMAL,
                canInvite: o,
                canPopout: r,
                canFullscreen: l,
                canChangeLayout: a,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: l, useTheme: !0 };
        switch (e) {
            case eM.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eM.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eM.DUB.HAVEN:
            case eM.DUB.NO_CHAT:
            case eM.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eE._U)(e, this.currentDocument) ||
                this.props.layout !== eM.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eM.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eM.DUB.FULL_SCREEN), (0, eE.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eM.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eE.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eM.DUB.NORMAL ? eM.DUB.NO_CHAT : eM.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eM.DUB.HAVEN
            ? (this.handleChangeLayout(eM.DUB.NO_CHAT), k.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eM.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (p.A.updateLayout(t.id, e, n),
            e === eM.DUB.FULL_SCREEN && t.isPrivate() && ef._.dispatch(eM.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eM.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, O.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eL.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eL.GK.CONTEXT_MENU;
        return (0, eO.s)(e, y.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eL.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, s, l) => {
        let { channel: r, appContext: a, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: a };
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
                                    appContext: a,
                                    minimal: s,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        eL.qs.STREAM,
                                        l,
                                    ),
                                });
                        },
                        d,
                    );
                return;
            case eL.lp.USER:
                this.trackCallTileContextMenuImpression(e, eL.qs.USER);
                let u = em.default.getUser(e.id);
                if (null != u) {
                    if (s)
                        return (0, W.r)(t, u, r, d, (e, t) =>
                            (0, eO.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eL.GK.THREE_DOT,
                                tileType: eL.qs.USER,
                                targetUserId: u.id,
                                location: y.A.CHANNEL_CALL,
                            }),
                        );
                    switch (r.type) {
                        case eM.rbe.DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("39778"),
                                        n.e("40225"),
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
                                                eL.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eM.rbe.GROUP_DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("42128"),
                                        n.e("62891"),
                                        n.e("92105"),
                                    ]).then(n.bind(n, 228006));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === eM.DUB.MINIMUM || c === eM.DUB.NORMAL,
                                            user: u,
                                            channel: r,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eL.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eM.rbe.GUILD_VOICE:
                        case eM.rbe.PUBLIC_THREAD:
                        case eM.rbe.PRIVATE_THREAD:
                            let l = r.getGuildId();
                            return (
                                o()(null != l, "GuildID null for guild voice channel"),
                                (0, g.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("84841"),
                                            n.e("49783"),
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
                                                    eL.qs.USER,
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
        (0, eL.Ay)(e) &&
            (0, w.eo)(n, ep.A, eu.A, eh.A, G.default)[0] &&
            (_.default.selectVoiceChannel(n.id),
            0 === s.filter((t) => (0, P._z)(t) === e.id && t.state !== eM.XYD.ENDED).length &&
                (0, f.A9)((0, P.Iy)(e.id), { forceMultiple: t.shiftKey })),
            l &&
                r === eM._Of.VIDEO &&
                (i?.id === e.id ? p.A.selectParticipant(n.id, null) : p.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, S.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || ed.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, e_.vJ)(n)), H.openChannelCallPopout(e);
            };
        null == t || (0, N.f)() ? n() : (0, v.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eR.X)(y.A.VOICE_CONTROL_TRAY, eR.O.STAY_ON_TOP, e), H.setAlwaysOnTop(eM.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        H.close(eM.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            s = n === eM.DUB.FULL_SCREEN;
        ((!s && i?.id !== e.id) || (s && i?.id === e.id)) && this.handleSelectParticipant(e, t),
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
        let { layout: e, channel: t, selectedParticipant: n, inCall: s } = this.props,
            { canChangeLayout: l, canInvite: r } = this.viewProperties,
            a =
                e === eM.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eM.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return s
            ? (0, i.jsx)(ew, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: l,
                  canInvite: r,
                  onToggleChat: a,
                  maybeLeaveFullScreen: this.maybeLeaveFullScreen,
              })
            : null;
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
                null != s && s.type !== eL.lp.ACTIVITY && s.user.id !== n
                    ? (0, i.jsx)(el.A, {
                          context: (0, eb.A)(s.type),
                          userId: s.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eG.MQ,
                          className: eG.iq,
                          location: y.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                o
                    ? (0, i.jsx)(es.A, {
                          className: eG.iq,
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
                    ? (0, i.jsx)(ei.A, {
                          themeable: d,
                          popoutOpen: this.popoutOpen,
                          className: eG.iq,
                          onOpenPopout: () => {
                              (0, eR.X)(y.A.VOICE_CONTROL_TRAY, eR.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eR.X)(y.A.VOICE_CONTROL_TRAY, eR.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(et.A, {
                          themeable: d,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eG.iq,
                          onClick: () => {
                              (0, eR.X)(
                                  y.A.VOICE_CONTROL_TRAY,
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
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: s } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && s)
            ? null
            : (0, i.jsx)(eS.Ay, { children: (0, i.jsx)($.A, { className: eG.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(ej.Ay, { children: (0, i.jsx)(er.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: s, chatOpen: l, inCall: r } = this.props,
            { useExternalHeader: a, renderHeader: o } = this.viewProperties;
        return o
            ? (0, i.jsx)(J.A, {
                  children: (0, i.jsx)("div", {
                      className: eG.dL,
                      children: a
                          ? e?.()
                          : (0, i.jsx)(ev.A, {
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
                forceShowControls: m,
                awaitingRemoteSessionInfo: p,
                currentChannelActivities: g,
                callContainerDimensions: _,
            } = this.props,
            f = A === eM.DUB.MINIMUM,
            x = f || A === eM.DUB.NORMAL,
            C = s && r === eM._Of.VIDEO,
            E = (g?.length ?? 0) > 0 && u.isPrivate();
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
                disableGradients: !s || f,
                idle: !m && s && !f && e.idle,
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
                mode: s,
                chatOpen: l,
                appContext: a,
                maxSidebarWidth: o,
                maxHeight: c,
                inCall: d,
            } = this.props,
            { resizedHeight: u } = this.state,
            h = s === eM._Of.VIDEO,
            m = e !== eM.DUB.HAVEN && e !== eM.DUB.NO_CHAT && e !== eM.DUB.FULL_SCREEN && null != c,
            p = eM.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: r()(eG.iE, eU[e], eP[a], {
                [eG.XW]: this.popoutOpen && !this.inPopout && e !== eM.DUB.NO_CHAT && t.isPrivate(),
                [eG.Ki]: h,
                [eG.vc]: l,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: m && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(A.NPJ, {
                    theme: p,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: r()(eG.ik, l || e !== eM.DUB.FULL_SCREEN ? void 0 : eG.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(X.Ay, { timeout: 2e3, children: (e) => this.renderContent(e) }),
                        }),
                }),
                m &&
                    (0, i.jsx)(ey.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eG.B2,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        l &&
                        (0, i.jsx)(eT.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eV = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: l, canPopout: r = !0, popoutType: a } = e,
        { width: o = 0, ref: c } = (0, E.Ay)(),
        { width: h = 0, height: m = 0, ref: g } = (0, E.Ay)(),
        { ref: _ } = (0, E.Ay)(),
        f = (0, B.Us)(),
        N = (0, U.A)(),
        S = (0, d.bG)([eA.A], () => (N?.channelId ?? eA.A.getVoiceChannelId()) === t.id),
        {
            participants: v,
            filteredParticipants: j,
            participantsVersion: O,
            mode: L,
            layout: M,
            participantsOpen: P,
            chatOpen: w,
            selectedParticipant: k,
        } = (0, d.cf)([eN.A], () => {
            let e = f === eM.BRT.POPOUT,
                n = eN.A.getMode(t.id),
                i = eN.A.getLayout(t.id, f);
            e && (n = eM._Of.VIDEO);
            let s = n === eM._Of.VIDEO ? i : eM.DUB.MINIMUM;
            return (
                e && s !== eM.DUB.FULL_SCREEN && (s = eM.DUB.NO_CHAT),
                i === eM.DUB.HAVEN && (s = i),
                {
                    mode: n,
                    layout: s,
                    selectedParticipant: n !== eM._Of.VOICE ? eN.A.getSelectedParticipant(t.id) : null,
                    participants: eN.A.getParticipants(t.id),
                    filteredParticipants: eN.A.getFilteredParticipants(t.id),
                    participantsOpen: eN.A.getParticipantsOpen(t.id),
                    chatOpen: eN.A.getChatOpen(t.id),
                    participantsVersion: eN.A.getParticipantsVersion(t.id),
                }
            );
        }, [f, t.id]),
        H = (0, d.yK)([ea.A], () => ea.A.getAllActiveStreams()),
        { selectedStream: K } = (0, d.cf)(
            [ea.A],
            () => ({ selectedStream: null != k ? ea.A.getActiveStreamForStreamKey(k.id) : null }),
            [k],
        ),
        W = (0, d.bG)([eu.A], () => eu.A.getGuild(t.getGuildId())),
        z = (0, d.bG)([eo.default], () => eo.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: X } = (0, d.cf)([F.A], () => ({
            popoutWindow: F.A.getWindow(eM.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: F.A.getIsAlwaysOnTop(eM.MLl.CHANNEL_CALL_POPOUT),
        })),
        J = (0, d.bG)([eh.A], () => eh.A.can(eM.xBc.CONNECT, t)),
        Q = (0, d.bG)([ec.A], () => ec.A.getToastsEnabled(t.id)),
        $ = (0, d.bG)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
        Z = (0, d.bG)([Y.Ay], () => Y.Ay.callHeaderHeight),
        ee = s.useCallback((e) => {
            x.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        et = (0, d.bG)([b.A], () => b.A.getFetchState(), []),
        en = (0, I.A)(et);
    s.useEffect(() => {
        et === b.$.ERROR &&
            en !== b.$.ERROR &&
            (0, A.showToast)((0, A.createToast)(eD.intl.string(eD.t["AlJyI+"]), A.ToastType.FAILURE));
    }, [et, en]);
    let ei = (0, d.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    s.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                S &&
                    L === eM._Of.VIDEO &&
                    ((t = await eC.Ay.blockDisplaySleep()), e && null != t && eC.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eC.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [S, L]);
    let es = (0, D.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: el } = (0, R.Ay)(y.A.CHANNEL_CALL),
        er = o - 550,
        ed = T.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: em } = V.s.useConfig({ location: "ChannelCall" }),
        ep = (0, eI.T)({ channel: t, location: "ChannelCall" });
    s.useEffect(() => {
        ep &&
            S &&
            null == eN.A.getAllChatOpen()[t.id] &&
            (o <= 0 || p.A.updateChatOpen(t.id, !0, "auto open screen width"));
    }, [ep, er, o, t.id, S]);
    let { theme: eg } = (0, A.wRf)();
    return (0, i.jsx)(R.f5, {
        value: el,
        children: (0, i.jsx)(C.A, {
            page: eM.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eS.qh, {
                children: (0, i.jsxs)(ej.CB, {
                    children: [
                        (0, i.jsx)(ek, {
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
                            participants: v,
                            filteredParticipants: j,
                            participantsVersion: O,
                            layout: M,
                            chatOpen: w,
                            maxSidebarWidth: er,
                            currentUserId: z,
                            selectedParticipant: k,
                            allActiveStreams: H,
                            connectedEmbeddedActivity: ei ?? void 0,
                            showChatToasts: Q,
                            storedCallHeaderHeight: Z,
                            updateStoredCallHeaderHeight: ee,
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: m },
                            callContainerRef: g,
                            channelChatRef: _,
                            width: o,
                            maxHeight: l,
                            forceShowControls: es,
                            awaitingRemoteSessionInfo: $,
                            currentChannelActivities: ed,
                            theme: eg,
                            canPopout: r,
                            popoutType: a,
                            canUseHaven: em,
                        }),
                        !t.isPrivate() && (0, i.jsx)(ej.wQ, {}),
                        (0, i.jsx)(eS.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
