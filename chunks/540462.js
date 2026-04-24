n.r(t), n.d(t, { IDLE_TIMEOUT: () => eG, default: () => eX });
var i = n(627968),
    o = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    l = n.n(s),
    d = n(110259),
    p = n(17928),
    c = n(554146),
    u = n(451988),
    h = n(408278),
    A = n(825860),
    C = n(43990),
    g = n(691540),
    E = n(857250),
    f = n(97483),
    O = n(38021),
    m = n(228366),
    I = n(367513),
    _ = n(442433),
    T = n(956793),
    y = n(401843),
    L = n(817281),
    N = n(820284),
    U = n(765671),
    R = n(475743),
    v = n(646865),
    D = n(10716),
    P = n(795816),
    S = n(933958),
    M = n(47294),
    b = n(793574),
    w = n(58149),
    H = n(688810),
    x = n(139286),
    B = n(587895),
    V = n(235986),
    F = n(771781),
    j = n(643501),
    G = n(857253),
    k = n(652896),
    W = n(279250),
    Y = n(418126),
    q = n(266626),
    X = n(267102),
    K = n(574172),
    z = n(869146),
    Q = n(976860),
    J = n(326567),
    Z = n(964404),
    $ = n(105225),
    ee = n(22522),
    et = n(461782),
    en = n(447404),
    ei = n(401685),
    eo = n(20465),
    er = n(156652),
    ea = n(622770),
    es = n(201181),
    el = n(520006),
    ed = n(128286),
    ep = n(619344),
    ec = n(821747),
    eu = n(125248),
    eh = n(616356),
    eA = n(495544),
    eC = n(249288),
    eg = n(696451),
    eE = n(71393),
    ef = n(576705),
    eO = n(309010),
    em = n(287809),
    eI = n(977997),
    e_ = n(954571),
    eT = n(147036),
    ey = n(625494),
    eL = n(723702),
    eN = n(19575),
    eU = n(475815),
    eR = n(134047),
    ev = n(313961),
    eD = n(520698),
    eP = n(43189),
    eS = n(518530),
    eM = n(342520),
    eb = n(587837),
    ew = n(675853),
    eH = n(384059),
    ex = n(480890),
    eB = n(806931),
    eV = n(652215),
    eF = n(985018),
    ej = n(761673);
let eG = 2e3,
    ek = {
        [eV.DUB.NORMAL]: ej.qb,
        [eV.DUB.MINIMUM]: ej.Bp,
        [eV.DUB.NO_CHAT]: ej.Oo,
        [eV.DUB.FULL_SCREEN]: ej.iy,
        [eV.DUB.HAVEN]: ej.VT,
    },
    eW = { [eV.BRT.POPOUT]: ej.SW, [eV.BRT.APP]: null, [eV.BRT.OVERLAY]: null, [eV.BRT.CALL_TILE_POPOUT]: null };
function eY(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: o,
            canChangeLayout: r,
            canInvite: a,
            onToggleChat: s,
            maybeLeaveFullScreen: l,
        } = e,
        d = (0, ei.Bx)(),
        c = (0, p.bG)([B.A], () => (o?.type === eB.lp.ACTIVITY ? B.A.getApplication(o.applicationId) : void 0)),
        u = t === eV.DUB.NO_CHAT ? ea.A.Directions.UP : ea.A.Directions.DOWN,
        h = [eV.DUB.FULL_SCREEN, eV.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a && d < ei.vs.NO_INVITE
                ? (0, i.jsx)(el.A, {
                      channel: n,
                      stream: o?.type === eB.lp.STREAM ? (0, k.Iy)(o.id) : void 0,
                      className: ej.jZ,
                      exitFullScreen: l,
                      analyticsLocation: n.type === eV.rbe.GUILD_VOICE ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                      applicationId: c?.id,
                  })
                : null,
            r
                ? (0, i.jsx)(V.A, {
                      className: ej.P0,
                      align: V.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ea.A, {
                          label: h ? eF.intl.string(eF.t.kkKapG) : eF.intl.string(eF.t["5MstTl"]),
                          direction: u,
                          className: ej.jZ,
                          onClick: () => {
                              (0, eH.X)(b.A.VOICE_CONTROL_TRAY, eH.O.CHAT, h), s();
                          },
                      }),
                  })
                : null,
        ],
    });
}
class eq extends o.PureComponent {
    _prevLayout = eV.DUB.MINIMUM;
    _wrapperRef = o.createRef();
    _callContainerRef = o.createRef();
    _channelChatRef = o.createRef();
    _contentRef = o.createRef();
    _videoBackgroundTooltipTimeout = new u.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: Z.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eU.Wb, this.handleFullScreenChange),
            e_.default.track(eV.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, w.QS)(e.id),
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eU.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, eL.isMac)()) || this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: o } = this.props,
            r = this.getRootNode();
        null != r &&
            e.mode === eV._Of.VIDEO &&
            i === eV._Of.VOICE &&
            (0, eU._U)(r, this.currentDocument) &&
            (0, eU.sP)(r, this.currentDocument),
            (e.participantsOpen !== t || o !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && m.h.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eL.isPlatformEmbedded && eN.Ay.supportsFeature(eV.BYE.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eL.isPlatformEmbedded || this.nativePopoutSupported;
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
            ? { mainText: eF.intl.string(eF.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eV.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: o } = this.props,
            r = t === eV._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === eV._Of.VIDEO && i && this.popoutSupported && o,
            s = t !== eV._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            l = n.type === eV.rbe.GUILD_VOICE,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eV.DUB.MINIMUM || e === eV.DUB.NORMAL,
                canInvite: l,
                canPopout: a,
                canFullscreen: r,
                canChangeLayout: s,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...d, canFullscreen: r, useTheme: !0 };
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
            ((0, eU._U)(e, this.currentDocument) ||
                this.props.layout !== eV.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eV.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eV.DUB.FULL_SCREEN), (0, eU.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eV.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eU.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eV.DUB.NORMAL ? eV.DUB.NO_CHAT : eV.DUB.NORMAL);
    };
    handleHaven = () => {
        this.props.layout === eV.DUB.HAVEN
            ? (this.handleChangeLayout(eV.DUB.NO_CHAT), Y.Ay.disconnect(this.props.channel.id))
            : this.handleChangeLayout(eV.DUB.HAVEN);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (I.A.updateLayout(t.id, e, n),
            e === eV.DUB.FULL_SCREEN && t.isPrivate() && ey._.dispatch(eV.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eV.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, x.x)({
            type: d.ImpressionTypes.MENU,
            name: d.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== eB.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eB.GK.CONTEXT_MENU;
        return (0, ex.s)(e, b.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== eB.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, o, r) => {
        let { channel: a, appContext: s, layout: d } = this.props,
            p = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: s };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case eB.lp.HIDDEN_STREAM:
            case eB.lp.STREAM:
                this.trackCallTileContextMenuImpression(e, eB.qs.STREAM),
                    (0, _.L3)(
                        t,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    stream: e.stream,
                                    exitFullscreen: this.maybeLeaveFullScreen,
                                    appContext: s,
                                    minimal: o,
                                    onInteraction: this.getCallTileMenuActionHandler(
                                        "StreamContextMenu",
                                        e,
                                        eB.qs.STREAM,
                                        r,
                                    ),
                                });
                        },
                        p,
                    );
                return;
            case eB.lp.USER:
                this.trackCallTileContextMenuImpression(e, eB.qs.USER);
                let c = em.default.getUser(e.id);
                if (null != c) {
                    if (o)
                        return (0, J.r)(t, c, a, p, (e, t) =>
                            (0, ex.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: eB.GK.THREE_DOT,
                                tileType: eB.qs.USER,
                                targetUserId: c.id,
                                location: b.A.CHANNEL_CALL,
                            }),
                        );
                    switch (a.type) {
                        case eV.rbe.DM:
                            return (0, _.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("84442"),
                                        n.e("35327"),
                                        n.e("39778"),
                                        n.e("57876"),
                                    ]).then(n.bind(n, 385913));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            user: c,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "DMUserContextMenu",
                                                e,
                                                eB.qs.USER,
                                            ),
                                        });
                                },
                                p,
                            );
                        case eV.rbe.GROUP_DM:
                            return (0, _.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("97262"),
                                        n.e("84442"),
                                        n.e("28864"),
                                        n.e("40164"),
                                    ]).then(n.bind(n, 778595));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: d === eV.DUB.MINIMUM || d === eV.DUB.NORMAL,
                                            user: c,
                                            channel: a,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                eB.qs.USER,
                                            ),
                                        });
                                },
                                p,
                            );
                        case eV.rbe.GUILD_VOICE:
                        case eV.rbe.PUBLIC_THREAD:
                        case eV.rbe.PRIVATE_THREAD:
                            let r = a.getGuildId();
                            return (
                                l()(null != r, "GuildID null for guild voice channel"),
                                (0, _.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("97262"),
                                            n.e("84442"),
                                            n.e("78178"),
                                            n.e("92456"),
                                            n.e("79842"),
                                        ]).then(n.bind(n, 107632));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                showMediaItems: !0,
                                                showChannelCallItems: !0,
                                                showChatItems: !1,
                                                user: c,
                                                channel: a,
                                                guildId: r,
                                                showModalItems: !0,
                                                onInteraction: this.getCallTileMenuActionHandler(
                                                    "GuildChannelUserContextMenu",
                                                    e,
                                                    eB.qs.USER,
                                                ),
                                            });
                                    },
                                    p,
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
        let { channel: n, selectedParticipant: i, allActiveStreams: o, inCall: r, mode: a } = this.props;
        (0, eB.Ay)(e) &&
            (0, W.eo)(n, eI.A, eE.A, ef.A, j.default)[0] &&
            (T.default.selectVoiceChannel(n.id),
            0 === o.filter((t) => (0, k._z)(t) === e.id && t.state !== eV.XYD.ENDED).length &&
                (0, y.A9)((0, k.Iy)(e.id), { forceMultiple: t.shiftKey })),
            r &&
                a === eV._Of.VIDEO &&
                (i?.id === e.id ? I.A.selectParticipant(n.id, null) : I.A.selectParticipant(n.id, e.id));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props,
            n = async () => {
                t?.applicationId != null && (await (0, P.od)(t.applicationId, e.id));
                let n = e.getGuildId();
                null == n || eg.Ay.isCurrentUserGuest(n) || (0, Q.pX)((0, eT.vJ)(n)), K.openChannelCallPopout(e);
            };
        null == t || (0, v.f)() ? n() : (0, M.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        (0, eH.X)(b.A.VOICE_CONTROL_TRAY, eH.O.STAY_ON_TOP, e), K.setAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT, e);
    };
    handleClosePopout = () => {
        K.close(eV.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            o = n === eV.DUB.FULL_SCREEN;
        ((!o && i?.id !== e.id) || (o && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen();
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eV.DUB.MINIMUM || n === eV.DUB.NORMAL
            ? (0, i.jsx)($.Ay, {
                  exitFullScreen: this.maybeLeaveFullScreen,
                  channel: e,
                  onDisconnectCall: this.handleDisconnect,
                  idleProps: this._lastIdleProps,
              })
            : null;
    };
    renderBottomLeft = () => {
        let { layout: e, channel: t, selectedParticipant: n, inCall: o } = this.props,
            { canChangeLayout: r, canInvite: a } = this.viewProperties,
            s =
                e === eV.DUB.FULL_SCREEN
                    ? () => {
                          (this._prevLayout = eV.DUB.NORMAL), this.handleFullScreen();
                      }
                    : this.handleToggleLayout;
        return o
            ? (0, i.jsx)(eY, {
                  layout: e,
                  channel: t,
                  selectedParticipant: n,
                  canChangeLayout: r,
                  canInvite: a,
                  onToggleChat: s,
                  maybeLeaveFullScreen: this.maybeLeaveFullScreen,
              })
            : null;
    };
    renderBottomRight = () => {
        let {
                popoutWindow: e,
                popoutWindowAlwaysOnTop: t,
                currentUserId: n,
                selectedParticipant: o,
                inCall: r,
                canUseHaven: a,
            } = this.props,
            { canFullscreen: s, canStayOnTop: l, canPopout: d, useTheme: p } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != o && o.type !== eB.lp.ACTIVITY && o.user.id !== n
                    ? (0, i.jsx)(ec.A, {
                          context: (0, eD.A)(o.type),
                          userId: o.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: ej.MQ,
                          className: ej.iq,
                          location: b.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                l
                    ? (0, i.jsx)(ep.A, {
                          className: ej.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                a &&
                    r &&
                    (0, i.jsx)(h.K, {
                        variant: "icon-only",
                        "aria-label": "Haven",
                        icon: A.Y,
                        onClick: this.handleHaven,
                    }),
                d
                    ? (0, i.jsx)(ed.A, {
                          themeable: p,
                          popoutOpen: this.popoutOpen,
                          className: ej.iq,
                          onOpenPopout: () => {
                              (0, eH.X)(b.A.VOICE_CONTROL_TRAY, eH.O.POPOUT, !0), this.handleOpenPopout();
                          },
                          onClosePopout: () => {
                              (0, eH.X)(b.A.VOICE_CONTROL_TRAY, eH.O.POPOUT, !1), this.handleClosePopout();
                          },
                      })
                    : null,
                s
                    ? (0, i.jsx)(es.A, {
                          themeable: p,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: ej.iq,
                          onClick: () => {
                              (0, eH.X)(
                                  b.A.VOICE_CONTROL_TRAY,
                                  eH.O.FULL_SCREEN,
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
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: o } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && o)
            ? null
            : (0, i.jsx)(eP.Ay, { children: (0, i.jsx)(eo.A, { className: ej.T6, channelId: n.id }) });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(ew.Ay, { children: (0, i.jsx)(eu.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let { renderExternalHeader: e, channel: t, guild: n, appContext: o, chatOpen: r, inCall: a } = this.props,
            { useExternalHeader: s, renderHeader: l } = this.viewProperties;
        return l
            ? (0, i.jsx)(en.A, {
                  children: (0, i.jsx)("div", {
                      className: ej.dL,
                      children: s
                          ? e?.()
                          : (0, i.jsx)(eM.A, {
                                channel: t,
                                guild: n,
                                appContext: o,
                                inCall: a,
                                isChatOpen: r || (this.popoutOpen && !this.inPopout && a),
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
                inCall: o,
                hasConnectPermission: r,
                mode: a,
                participantsOpen: s,
                participants: l,
                filteredParticipants: d,
                participantsVersion: p,
                channel: c,
                guild: u,
                layout: h,
                forceShowControls: A,
                awaitingRemoteSessionInfo: C,
                currentChannelActivities: g,
                callContainerDimensions: E,
            } = this.props,
            f = h === eV.DUB.MINIMUM,
            O = f || h === eV.DUB.NORMAL,
            m = o && a === eV._Of.VIDEO,
            I = (g?.length ?? 0) > 0 && c.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(er.A, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatToasts: c.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: !o || f,
                idle: !A && o && !f && e.idle,
                children:
                    o && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(ee.A, {
                              ref: this._contentRef,
                              inCall: o,
                              channel: c,
                              hasConnectPermission: r,
                              guild: u,
                              participants: l,
                              filteredParticipants: d,
                              participantsVersion: p,
                              selectedParticipant: m ? n : null,
                              layout: h,
                              idle: e.idle,
                              mode: a,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: s && (!O || I),
                              popoutType: t,
                              awaitingRemoteSessionInfo: C,
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
                mode: o,
                chatOpen: r,
                appContext: s,
                maxSidebarWidth: l,
                maxHeight: d,
                inCall: p,
            } = this.props,
            { resizedHeight: c } = this.state,
            u = o === eV._Of.VIDEO,
            h = e !== eV.DUB.HAVEN && e !== eV.DUB.NO_CHAT && e !== eV.DUB.FULL_SCREEN && null != d,
            A = eV.NJ8.MIDNIGHT;
        return (0, i.jsxs)("div", {
            className: a()(ej.iE, ek[e], eW[s], {
                [ej.XW]: this.popoutOpen && !this.inPopout && e !== eV.DUB.NO_CHAT && t.isPrivate(),
                [ej.Ki]: u,
                [ej.vc]: r,
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style: h && null != c ? { minHeight: 230, maxHeight: d, height: c } : void 0,
            children: [
                (0, i.jsx)(C.N, {
                    theme: A,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: a()(ej.ik, r || e !== eV.DUB.FULL_SCREEN ? void 0 : ej.iy, t),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(et.Ay, { timeout: eG, children: (e) => this.renderContent(e) }),
                        }),
                }),
                h &&
                    (0, i.jsx)(eb.A, {
                        minHeight: 230,
                        maxHeight: d,
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
                        (!p || !this.popoutOpen || this.inPopout) &&
                        r &&
                        (0, i.jsx)(eS.A, { channel: t, guild: n, maxWidth: l }),
                }),
            ],
        });
    }
}
let eX = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: r, canPopout: a = !0, popoutType: s } = e,
        { width: l = 0, ref: d } = (0, U.Ay)(),
        { width: u = 0, height: h = 0, ref: A } = (0, U.Ay)(),
        { ref: C } = (0, U.Ay)(),
        m = (0, X.Us)(),
        _ = (0, G.A)(),
        T = (0, p.bG)([eO.A], () => (_?.channelId ?? eO.A.getVoiceChannelId()) === t.id),
        {
            participants: y,
            filteredParticipants: v,
            participantsVersion: P,
            mode: M,
            layout: w,
            participantsOpen: x,
            chatOpen: B,
            selectedParticipant: V,
        } = (0, p.cf)([ev.A], () => {
            let e = m === eV.BRT.POPOUT,
                n = ev.A.getMode(t.id),
                i = ev.A.getLayout(t.id, m);
            e && (n = eV._Of.VIDEO);
            let o = n === eV._Of.VIDEO ? i : eV.DUB.MINIMUM;
            return (
                e && o !== eV.DUB.FULL_SCREEN && (o = eV.DUB.NO_CHAT),
                i === eV.DUB.HAVEN && (o = i),
                {
                    mode: n,
                    layout: o,
                    selectedParticipant: n !== eV._Of.VOICE ? ev.A.getSelectedParticipant(t.id) : null,
                    participants: ev.A.getParticipants(t.id),
                    filteredParticipants: ev.A.getFilteredParticipants(t.id),
                    participantsOpen: ev.A.getParticipantsOpen(t.id),
                    chatOpen: ev.A.getChatOpen(t.id),
                    participantsVersion: ev.A.getParticipantsVersion(t.id),
                }
            );
        }, [m, t.id]),
        k = (0, p.yK)([eh.A], () => eh.A.getAllActiveStreams()),
        { selectedStream: W } = (0, p.cf)(
            [eh.A],
            () => ({ selectedStream: null != V ? eh.A.getActiveStreamForStreamKey(V.id) : null }),
            [V],
        ),
        Y = (0, p.bG)([eE.A], () => eE.A.getGuild(t.getGuildId())),
        K = (0, p.bG)([eA.default], () => eA.default.getId()),
        { popoutWindow: Q, popoutWindowAlwaysOnTop: J } = (0, p.cf)([z.A], () => ({
            popoutWindow: z.A.getWindow(eV.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: z.A.getIsAlwaysOnTop(eV.MLl.CHANNEL_CALL_POPOUT),
        })),
        $ = (0, p.bG)([ef.A], () => ef.A.can(eV.xBc.CONNECT, t)),
        ee = (0, p.bG)([eC.A], () => eC.A.getToastsEnabled(t.id)),
        et = (0, p.bG)([j.default], () => j.default.getAwaitingRemoteSessionInfo()),
        en = (0, p.bG)([Z.Ay], () => Z.Ay.callHeaderHeight),
        ei = o.useCallback((e) => {
            L.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        eo = (0, p.bG)([D.A], () => D.A.getFetchState(), []),
        er = (0, R.A)(eo);
    o.useEffect(() => {
        eo === D.$.ERROR && er !== D.$.ERROR && (0, g.P0)((0, E.o)(eF.intl.string(eF.t["AlJyI+"]), f.Ck.FAILURE));
    }, [eo, er]);
    let ea = (0, p.bG)([S.Ay], () => S.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]);
    o.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                T &&
                    M === eV._Of.VIDEO &&
                    ((t = await eN.Ay.blockDisplaySleep()), e && null != t && eN.Ay.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eN.Ay.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [T, M]);
    let es = (0, F.mB)(c.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: el } = (0, H.Ay)(b.A.CHANNEL_CALL),
        ed = l - 550,
        ep = S.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: ec } = q.s.useConfig({ location: "ChannelCall" }),
        eu = (0, eR.T)({ channel: t, location: "ChannelCall" });
    o.useEffect(() => {
        eu &&
            T &&
            null == ev.A.getAllChatOpen()[t.id] &&
            (l <= 0 || I.A.updateChatOpen(t.id, !0, "auto open screen width"));
    }, [eu, ed, l, t.id, T]);
    let { theme: eg } = (0, O.wR)();
    return (0, i.jsx)(H.f5, {
        value: el,
        children: (0, i.jsx)(N.A, {
            page: eV.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eP.qh, {
                children: (0, i.jsxs)(ew.CB, {
                    children: [
                        (0, i.jsx)(eq, {
                            channel: t,
                            guild: Y,
                            hasConnectPermission: $,
                            participantsOpen: x,
                            renderExternalHeader: n,
                            appContext: m,
                            popoutWindow: Q,
                            popoutWindowAlwaysOnTop: J,
                            selectedStream: W,
                            mode: M,
                            inCall: T,
                            participants: y,
                            filteredParticipants: v,
                            participantsVersion: P,
                            layout: w,
                            chatOpen: B,
                            maxSidebarWidth: ed,
                            currentUserId: K,
                            selectedParticipant: V,
                            allActiveStreams: k,
                            connectedEmbeddedActivity: ea ?? void 0,
                            showChatToasts: ee,
                            storedCallHeaderHeight: en,
                            updateStoredCallHeaderHeight: ei,
                            wrapperRef: d,
                            callContainerDimensions: { width: u, height: h },
                            callContainerRef: A,
                            channelChatRef: C,
                            width: l,
                            maxHeight: r,
                            forceShowControls: es,
                            awaitingRemoteSessionInfo: et,
                            currentChannelActivities: ep,
                            theme: eg,
                            canPopout: a,
                            popoutType: s,
                            canUseHaven: ec,
                        }),
                        !t.isPrivate() && (0, i.jsx)(ew.wQ, {}),
                        (0, i.jsx)(eP.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
