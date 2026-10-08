(n.r(t), n.d(t, { IDLE_TIMEOUT: () => ez, default: () => eK }));
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
    p = n(43990),
    m = n(376357),
    A = n(38021),
    f = n(73153),
    x = n(367513),
    g = n(442433),
    C = n(148494),
    y = n(730852),
    j = n(401843),
    I = n(817281),
    N = n(820284),
    v = n(765671),
    E = n(475743),
    b = n(646865),
    _ = n(10716),
    T = n(795816),
    S = n(933958),
    R = n(47294),
    L = n(793574),
    O = n(666860),
    P = n(688810),
    M = n(139286),
    w = n(587895),
    U = n(235986),
    D = n(47899),
    V = n(643501),
    k = n(857253),
    G = n(652896),
    B = n(279250),
    F = n(558076),
    z = n(360729),
    H = n(700948),
    W = n(267102),
    Y = n(574172),
    $ = n(869146),
    K = n(976860),
    X = n(326567),
    q = n(964404),
    Z = n(306852),
    Q = n(105225),
    J = n(874739),
    ee = n(461782),
    et = n(447404),
    en = n(401685),
    ei = n(20465),
    el = n(156652),
    ea = n(622770),
    es = n(423562),
    er = n(520006),
    eo = n(128286),
    ec = n(619344),
    ed = n(821747),
    eu = n(488947),
    eh = n(12830),
    ep = n(637443),
    em = n(125248),
    eA = n(616356),
    ef = n(280450),
    ex = n(249288),
    eg = n(696451),
    eC = n(71393),
    ey = n(576705),
    ej = n(309010),
    eI = n(287809),
    eN = n(977997),
    ev = n(174459),
    eE = n(147036),
    eb = n(625494),
    e_ = n(723702),
    eT = n(19575),
    eS = n(475815),
    eR = n(198052),
    eL = n(520698),
    eO = n(43189),
    eP = n(518530),
    eM = n(681281),
    ew = n(587837),
    eU = n(675853),
    eD = n(384059),
    eV = n(480890),
    ek = n(806931),
    eG = n(652215),
    eB = n(660183),
    eF = n(880162);
let ez = 2e3,
    eH = { [eG.DUB.NORMAL]: eF.qb, [eG.DUB.MINIMUM]: eF.Bp, [eG.DUB.NO_CHAT]: eF.Oo, [eG.DUB.FULL_SCREEN]: eF.iy },
    eW = { [eG.BRT.POPOUT]: eF.SW, [eG.BRT.APP]: null, [eG.BRT.OVERLAY]: null, [eG.BRT.CALL_TILE_POPOUT]: null };
function eY(e) {
    let {
            layout: t,
            channel: n,
            selectedParticipant: l,
            canChangeLayout: a,
            canInvite: s,
            onToggleChat: r,
            maybeLeaveFullScreen: o,
        } = e,
        c = (0, en.Bx)(),
        u = (0, d.bG)([w.A], () => (l?.type === ek.lp.ACTIVITY ? w.A.getApplication(l.applicationId) : void 0)),
        h = t === eG.DUB.NO_CHAT ? ea.A.Directions.UP : ea.A.Directions.DOWN,
        p = [eG.DUB.FULL_SCREEN, eG.DUB.NO_CHAT].includes(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && c < en.vs.NO_INVITE
                ? (0, i.jsx)(er.A, {
                      channel: n,
                      stream: l?.type === ek.lp.STREAM ? (0, G.Iy)(l.id) : void 0,
                      className: eF.jZ,
                      exitFullScreen: o,
                      analyticsLocation: n.type === eG.rbe.GUILD_VOICE ? eG.liQ.GUILD_CHANNEL : eG.liQ.DM_CHANNEL,
                      applicationId: u?.id,
                  })
                : null,
            a
                ? (0, i.jsx)(U.A, {
                      className: eF.P0,
                      align: U.A.Align.CENTER,
                      grow: 0,
                      children: (0, i.jsx)(ea.A, {
                          label: p ? eB.intl.string(eB.t.kkKapG) : eB.intl.string(eB.t["5MstTl"]),
                          direction: h,
                          className: eF.jZ,
                          onClick: () => {
                              ((0, eD.X)(L.A.VOICE_CONTROL_TRAY, eD.O.CHAT, p), r());
                          },
                      }),
                  })
                : null,
        ],
    });
}
class e$ extends l.PureComponent {
    _prevLayout = eG.DUB.MINIMUM;
    _wrapperRef = l.createRef();
    _callContainerRef = l.createRef();
    _channelChatRef = l.createRef();
    _contentRef = l.createRef();
    _videoBackgroundTooltipTimeout = new h.Ep();
    _lastIdleProps = null;
    state = { resizedHeight: q.Ay.callHeaderHeight };
    getRootNode() {
        return (this.props.popoutWindow?.window ?? window).document.getElementById("app-mount");
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        (this.currentDocument.addEventListener(eS.Wb, this.handleFullScreenChange),
            ev.default.track(eG.HAw.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? "popout" : t,
                ...(0, O.QS)(e.id),
            }));
    }
    componentWillUnmount() {
        (this._videoBackgroundTooltipTimeout.stop(),
            this.currentDocument.removeEventListener(eS.Wb, this.handleFullScreenChange),
            (this.inPopout && (0, e_.isMac)()) || this.maybeLeaveFullScreen());
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        (null != a &&
            e.mode === eG._Of.VIDEO &&
            i === eG._Of.VOICE &&
            (0, eS._U)(a, this.currentDocument) &&
            (0, eS.sP)(a, this.currentDocument),
            (e.participantsOpen !== t || l !== e.layout) && this._contentRef.current?.triggerResize(),
            e.inCall && !n && this.inPopout && f.h.wait(() => this.handleClosePopout()));
    }
    get nativePopoutSupported() {
        return e_.isPlatformEmbedded && eT.Ay.supportsFeature(eG.BYE.POPOUT_WINDOWS);
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
            ? { mainText: eB.intl.string(eB.t.J5bXZU) }
            : null;
    }
    get inPopout() {
        return this.props.appContext === eG.BRT.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i, canPopout: l } = this.props,
            a = t === eG._Of.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eG._Of.VIDEO && i && this.popoutSupported && l,
            r = t !== eG._Of.VOICE && n.isPrivate() && !this.inPopout && i,
            o = n.type === eG.rbe.GUILD_VOICE,
            c = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: e === eG.DUB.MINIMUM || e === eG.DUB.NORMAL,
                canInvite: o,
                canPopout: s,
                canFullscreen: a,
                canChangeLayout: r,
                canStayOnTop: this.inPopout && this.nativePopoutSupported,
            };
        if (!i) return { ...c, canFullscreen: a, useTheme: !0 };
        switch (e) {
            case eG.DUB.FULL_SCREEN:
                return { ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout };
            case eG.DUB.MINIMUM:
                return { ...c, canPopout: !1, useTheme: !0 };
            case eG.DUB.NO_CHAT:
            case eG.DUB.NORMAL:
                return { ...c };
        }
    }
    handleFullScreenChange = () => {
        let e = this.getRootNode();
        null != e &&
            ((0, eS._U)(e, this.currentDocument) ||
                this.props.layout !== eG.DUB.FULL_SCREEN ||
                this.handleFullScreen());
    };
    handleFullScreen = () => {
        let e = this.getRootNode();
        null != e &&
            (this.props.layout !== eG.DUB.FULL_SCREEN
                ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eG.DUB.FULL_SCREEN), (0, eS.tl)(e))
                : this.maybeLeaveFullScreen());
    };
    maybeLeaveFullScreen = () => {
        let e = this.getRootNode();
        null == e ||
            (this.props.layout === eG.DUB.FULL_SCREEN &&
                (this.handleChangeLayout(this._prevLayout), (0, eS.sP)(e, this.currentDocument)));
    };
    handleToggleLayout = () => {
        this.handleChangeLayout(this.props.layout === eG.DUB.NORMAL ? eG.DUB.NO_CHAT : eG.DUB.NORMAL);
    };
    handleChangeLayout = (e) => {
        let { channel: t, appContext: n, layout: i } = this.props;
        i !== e &&
            (x.A.updateLayout(t.id, e, n),
            e === eG.DUB.FULL_SCREEN && t.isPrivate() && eb._.dispatch(eG.jej.TEXTAREA_BLUR));
    };
    handleDisconnect = () => {
        this.props.layout === eG.DUB.FULL_SCREEN && this.handleFullScreen();
    };
    trackCallTileContextMenuImpression = (e, t) => {
        (0, M.x)({
            type: c.ImpressionTypes.MENU,
            name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
            properties: {
                location: "ChannelCall",
                is_tile_owner: e.type !== ek.lp.ACTIVITY && e.user.id === this.props.currentUserId,
                tile_type: t,
            },
        });
    };
    getCallTileMenuActionHandler = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ek.GK.CONTEXT_MENU;
        return (0, eV.s)(e, L.A.CHANNEL_CALL, {
            entrypoint: i,
            tileType: n,
            targetUserId: t.type !== ek.lp.ACTIVITY ? t.user.id : void 0,
        });
    };
    handleContextMenu = (e, t, l, a) => {
        let { channel: s, appContext: r, layout: c } = this.props,
            d = { onClose: () => this._lastIdleProps?.onAllowIdle("menu"), context: r };
        switch ((this._lastIdleProps?.onPreventIdle("menu"), this._lastIdleProps?.onActive(), e.type)) {
            case ek.lp.HIDDEN_STREAM:
            case ek.lp.STREAM:
                (this.trackCallTileContextMenuImpression(e, ek.qs.STREAM),
                    (0, g.L3)(
                        t,
                        async () => {
                            let { default: t } = await Promise.all([
                                n.e("189673"),
                                n.e("245996"),
                                n.e("529422"),
                                n.e("58315"),
                                n.e("870553"),
                            ]).then(n.bind(n, 744960));
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
                                        ek.qs.STREAM,
                                        a,
                                    ),
                                });
                        },
                        d,
                    ));
                return;
            case ek.lp.USER:
                this.trackCallTileContextMenuImpression(e, ek.qs.USER);
                let u = eI.default.getUser(e.id);
                if (null != u) {
                    if (l)
                        return (0, X.r)(t, u, s, d, (e, t) =>
                            (0, eV.Y)({
                                menuItemProps: t,
                                menuName: e,
                                entrypoint: ek.GK.THREE_DOT,
                                tileType: ek.qs.USER,
                                targetUserId: u.id,
                                location: L.A.CHANNEL_CALL,
                            }),
                        );
                    switch (s.type) {
                        case eG.rbe.DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("463317"),
                                        n.e("926132"),
                                        n.e("146652"),
                                        n.e("893190"),
                                        n.e("391763"),
                                        n.e("189673"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("955557"),
                                        n.e("691994"),
                                        n.e("229787"),
                                        n.e("576665"),
                                        n.e("947502"),
                                        n.e("715038"),
                                        n.e("245996"),
                                        n.e("965789"),
                                        n.e("529422"),
                                        n.e("823427"),
                                        n.e("242204"),
                                        n.e("198415"),
                                        n.e("307059"),
                                        n.e("935483"),
                                        n.e("21106"),
                                        n.e("368358"),
                                        n.e("17244"),
                                        n.e("298199"),
                                        n.e("864464"),
                                        n.e("439778"),
                                        n.e("996028"),
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
                                                ek.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eG.rbe.GROUP_DM:
                            return (0, g.L3)(
                                t,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("463317"),
                                        n.e("926132"),
                                        n.e("146652"),
                                        n.e("893190"),
                                        n.e("189673"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("229787"),
                                        n.e("576665"),
                                        n.e("624198"),
                                        n.e("715038"),
                                        n.e("245996"),
                                        n.e("529422"),
                                        n.e("823427"),
                                        n.e("242204"),
                                        n.e("307059"),
                                        n.e("528864"),
                                    ]).then(n.bind(n, 778595));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            showChannelCallItems: !0,
                                            showMediaItems: !0,
                                            showChatItems: c === eG.DUB.MINIMUM || c === eG.DUB.NORMAL,
                                            user: u,
                                            channel: s,
                                            showModalItems: !0,
                                            onInteraction: this.getCallTileMenuActionHandler(
                                                "GroupDMUserContextMenu",
                                                e,
                                                ek.qs.USER,
                                            ),
                                        });
                                },
                                d,
                            );
                        case eG.rbe.GUILD_VOICE:
                        case eG.rbe.PUBLIC_THREAD:
                        case eG.rbe.PRIVATE_THREAD:
                            let a = s.getGuildId();
                            return (
                                o()(null != a, "GuildID null for guild voice channel"),
                                (0, g.L3)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("463317"),
                                            n.e("893190"),
                                            n.e("189673"),
                                            n.e("882073"),
                                            n.e("797558"),
                                            n.e("691994"),
                                            n.e("229787"),
                                            n.e("576665"),
                                            n.e("624198"),
                                            n.e("715038"),
                                            n.e("245996"),
                                            n.e("529422"),
                                            n.e("823427"),
                                            n.e("242204"),
                                            n.e("307059"),
                                            n.e("449145"),
                                            n.e("343116"),
                                            n.e("470314"),
                                            n.e("70515"),
                                            n.e("404524"),
                                            n.e("654148"),
                                            n.e("666939"),
                                            n.e("717334"),
                                            n.e("184841"),
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
                                                    ek.qs.USER,
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
        ((0, ek.Ay)(e) &&
            (0, B.eo)(n, eN.A, eC.A, ey.A, V.default)[0] &&
            (y.default.selectVoiceChannel(n.id),
            0 === l.filter((t) => (0, G._z)(t) === e.id && t.state !== eG.XYD.ENDED).length &&
                (0, j.A9)((0, G.Iy)(e.id), { forceMultiple: t.shiftKey })),
            a &&
                s === eG._Of.VIDEO &&
                (i?.id === e.id ? x.A.selectParticipant(n.id, null) : x.A.selectParticipant(n.id, e.id)));
    };
    handleOpenPopout = () => {
        let { channel: e, connectedEmbeddedActivity: t } = this.props;
        async function n() {
            t?.applicationId != null && (await (0, T.od)(t.applicationId, e.id));
            let n = e.getGuildId();
            (null == n || eg.Ay.isCurrentUserGuest(n) || (0, K.pX)((0, eE.vJ)(n)), Y.openChannelCallPopout(e));
        }
        null == t || (0, b.f)() ? n() : (0, R.A)({ onConfirm: n });
    };
    handleStayOnTop = (e) => {
        ((0, eD.X)(L.A.VOICE_CONTROL_TRAY, eD.O.STAY_ON_TOP, e), Y.setAlwaysOnTop(eG.MLl.CHANNEL_CALL_POPOUT, e));
    };
    handleClosePopout = () => {
        Y.close(eG.MLl.CHANNEL_CALL_POPOUT);
    };
    handleFullscreenParticipant = (e, t) => {
        let { layout: n, selectedParticipant: i } = this.props,
            l = n === eG.DUB.FULL_SCREEN;
        (((!l && i?.id !== e.id) || (l && i?.id === e.id)) && this.handleSelectParticipant(e, t),
            this.handleFullScreen());
    };
    renderBottomCenter = () => {
        let { channel: e, inCall: t, layout: n } = this.props;
        return t || n === eG.DUB.MINIMUM || n === eG.DUB.NORMAL
            ? (0, i.jsx)(Q.Ay, {
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
                e === eG.DUB.FULL_SCREEN
                    ? () => {
                          ((this._prevLayout = eG.DUB.NORMAL), this.handleFullScreen());
                      }
                    : this.handleToggleLayout;
        return l
            ? (0, i.jsx)(eY, {
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
        let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
            { canFullscreen: a, canStayOnTop: s, canPopout: r, useTheme: o } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != l && l.type !== ek.lp.ACTIVITY && l.user.id !== n
                    ? (0, i.jsx)(ed.A, {
                          context: (0, eL.A)(l.type),
                          userId: l.user.id,
                          currentWindow: this.inPopout ? (e ?? void 0) : window,
                          sliderClassName: eF.MQ,
                          className: eF.iq,
                          location: L.A.VOICE_CONTROL_TRAY,
                      })
                    : null,
                s
                    ? (0, i.jsx)(ec.A, {
                          className: eF.iq,
                          popoutWindowAlwaysOnTop: t,
                          onToggleStayOnTop: this.handleStayOnTop,
                      })
                    : null,
                r
                    ? (0, i.jsx)(eo.A, {
                          themeable: o,
                          popoutOpen: this.popoutOpen,
                          className: eF.iq,
                          onOpenPopout: () => {
                              ((0, eD.X)(L.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !0), this.handleOpenPopout());
                          },
                          onClosePopout: () => {
                              ((0, eD.X)(L.A.VOICE_CONTROL_TRAY, eD.O.POPOUT, !1), this.handleClosePopout());
                          },
                      })
                    : null,
                a
                    ? (0, i.jsx)(es.A, {
                          themeable: o,
                          node: this.getRootNode(),
                          guestWindow: e,
                          className: eF.iq,
                          onClick: () => {
                              ((0, eD.X)(
                                  L.A.VOICE_CONTROL_TRAY,
                                  eD.O.FULL_SCREEN,
                                  this.props.layout !== eG.DUB.FULL_SCREEN,
                              ),
                                  this.handleFullScreen());
                          },
                      })
                    : null,
            ],
        });
    };
    handleToastClick = (e) => {
        (x.A.updateChatOpen(e.channel_id, !0),
            C.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
    };
    renderChatToasts = () => {
        let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
        return !e || t || (this.popoutOpen && !this.inPopout && l)
            ? null
            : (0, i.jsx)(eO.Ay, {
                  children: (0, i.jsx)(ei.A, {
                      className: eF.T6,
                      channelId: n.id,
                      onToastClick: this.handleToastClick,
                  }),
              });
    };
    renderVoiceChannelEffects = () => {
        let { channel: e, callContainerDimensions: t } = this.props;
        return (0, i.jsx)(eU.Ay, { children: (0, i.jsx)(em.A, { callHeight: t.height, channelId: e.id }) });
    };
    renderHeader = () => {
        let {
                renderExternalHeader: e,
                channel: t,
                guild: n,
                appContext: l,
                chatOpen: a,
                inCall: s,
                guildRoomVisible: r,
            } = this.props,
            { useExternalHeader: o, renderHeader: c } = this.viewProperties;
        return c
            ? (0, i.jsx)(et.A, {
                  children: (0, i.jsx)("div", {
                      className: eF.dL,
                      children: o
                          ? e?.()
                          : (0, i.jsx)(eM.A, {
                                channel: t,
                                guild: n,
                                appContext: l,
                                inCall: s,
                                isChatOpen: a || (this.popoutOpen && !this.inPopout && s),
                                exitFullScreen: this.maybeLeaveFullScreen,
                                guildRoomVisible: r,
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
                isPlacingNote: C,
            } = this.props,
            y = p === eG.DUB.MINIMUM,
            j = y || p === eG.DUB.NORMAL,
            I = l && s === eG._Of.VIDEO,
            N = (f?.length ?? 0) > 0 && u.isPrivate();
        this._lastIdleProps = e;
        let v = !l || !(this.popoutOpen && !this.inPopout),
            E = !m && l && !y && e.idle,
            b = g
                ? (0, i.jsx)(H.A, { channelId: u.id, popoutType: t, idle: e.idle })
                : (0, i.jsx)(J.A, {
                      ref: this._contentRef,
                      inCall: l,
                      channel: u,
                      hasConnectPermission: a,
                      guild: h,
                      participants: o,
                      filteredParticipants: c,
                      participantsVersion: d,
                      selectedParticipant: I ? n : null,
                      layout: p,
                      idle: e.idle,
                      mode: s,
                      onSelectParticipant: this.handleSelectParticipant,
                      onContextMenuParticipant: this.handleContextMenu,
                      showParticipants: r && (!j || N),
                      popoutType: t,
                      awaitingRemoteSessionInfo: A,
                      callContainerDimensions: x,
                  });
        return (0, i.jsx)(el.A, {
            renderHeader: this.renderHeader,
            renderBottomLeft: this.renderBottomLeft,
            renderBottomCenter: this.renderBottomCenter,
            renderBottomRight: this.renderBottomRight,
            renderChatToasts: u.isGuildVoiceOrThread() ? this.renderChatToasts : void 0,
            renderVoiceChannelEffects: this.renderVoiceChannelEffects,
            ...e,
            screenMessage: this.screenMessage,
            disableGradients: !l || y,
            hideControls: C,
            idle: E,
            children: v && (this.renderVoiceChannelAppSurface() ?? b),
        });
    }
    renderVoiceChannelAppSurface() {
        let { channel: e, currentVoiceChannelApplicationId: t } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(eh.A, {
                  applicationId: t,
                  channelId: e.id,
                  guildId: e.guild_id ?? void 0,
                  renderPipOverlay: (t, n) => {
                      let { width: l, height: a } = n;
                      return (0, i.jsx)(Z.A, {
                          channel: e,
                          participants: t,
                          width: l,
                          height: a,
                          onSelectParticipant: this.handleSelectParticipant,
                          onContextMenuParticipant: this.handleContextMenu,
                      });
                  },
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
            h = l === eG._Of.VIDEO,
            m = e !== eG.DUB.NO_CHAT && e !== eG.DUB.FULL_SCREEN && null != c,
            A = eG.NJ8.ONYX;
        return (0, i.jsxs)("div", {
            className: s()(eF.iE, eH[e], eW[r], {
                [eF.XW]: this.popoutOpen && !this.inPopout && e !== eG.DUB.NO_CHAT && t.isPrivate(),
                [eF.Ki]: h,
                [eF.vc]: a,
                [eF.ty]: m,
            }),
            ref: (e) => {
                ((this._wrapperRef.current = e), (this.props.wrapperRef.current = e));
            },
            style: m && null != u ? { minHeight: 230, maxHeight: c, height: u } : void 0,
            children: [
                (0, i.jsx)(p.N, {
                    theme: A,
                    children: (t) =>
                        (0, i.jsx)("div", {
                            className: s()(eF.ik, a || e !== eG.DUB.FULL_SCREEN ? void 0 : eF.iy, t),
                            ref: (e) => {
                                ((this._callContainerRef.current = e), (this.props.callContainerRef.current = e));
                            },
                            children: (0, i.jsx)(ee.Ay, { timeout: ez, children: (e) => this.renderContent(e) }),
                        }),
                }),
                m &&
                    (0, i.jsx)(ew.A, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight,
                    }),
                (0, i.jsx)("div", {
                    className: eF.B2,
                    ref: (e) => {
                        ((this._channelChatRef.current = e), (this.props.channelChatRef.current = e));
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        a &&
                        (0, i.jsx)(eP.A, { channel: t, guild: n, maxWidth: o }),
                }),
            ],
        });
    }
}
let eK = function (e) {
    let { channel: t, renderExternalHeader: n, maxHeight: a, canPopout: s = !0, popoutType: r } = e,
        { width: o = 0, ref: c } = (0, v.Ay)(),
        { width: h = 0, height: p = 0, ref: f } = (0, v.Ay)(),
        { ref: x } = (0, v.Ay)(),
        g = (0, W.Us)(),
        C = (0, k.A)(),
        y = (0, d.bG)([ej.Ay], () => (C?.channelId ?? ej.Ay.getVoiceChannelId()) === t.id),
        {
            participants: j,
            filteredParticipants: b,
            participantsVersion: T,
            mode: R,
            layout: O,
            participantsOpen: M,
            chatOpen: w,
            selectedParticipant: U,
        } = (0, d.cf)(
            [eR.A],
            () => {
                let e = g === eG.BRT.POPOUT,
                    n = eR.A.getMode(t.id),
                    i = eR.A.getLayout(t.id, g);
                e && (n = eG._Of.VIDEO);
                let l = n === eG._Of.VIDEO ? i : eG.DUB.MINIMUM;
                return (
                    e && l !== eG.DUB.FULL_SCREEN && (l = eG.DUB.NO_CHAT),
                    {
                        mode: n,
                        layout: l,
                        selectedParticipant: n !== eG._Of.VOICE ? eR.A.getSelectedParticipant(t.id) : null,
                        participants: eR.A.getParticipants(t.id),
                        filteredParticipants: eR.A.getFilteredParticipants(t.id),
                        participantsOpen: eR.A.getParticipantsOpen(t.id),
                        chatOpen: eR.A.getChatOpen(t.id),
                        participantsVersion: eR.A.getParticipantsVersion(t.id),
                    }
                );
            },
            [g, t.id],
        ),
        G = (0, d.yK)([eA.A], () => eA.A.getAllActiveStreams()),
        { selectedStream: B } = (0, d.cf)(
            [eA.A],
            () => ({ selectedStream: null != U ? eA.A.getActiveStreamForStreamKey(U.id) : null }),
            [U],
        ),
        H = (0, d.bG)([eC.A], () => eC.A.getGuild(t.getGuildId())),
        Y = (0, d.bG)([ef.default], () => ef.default.getId()),
        { popoutWindow: K, popoutWindowAlwaysOnTop: X } = (0, d.cf)([$.A], () => ({
            popoutWindow: $.A.getWindow(eG.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: $.A.getIsAlwaysOnTop(eG.MLl.CHANNEL_CALL_POPOUT),
        })),
        Z = (0, d.bG)([ey.A], () => ey.A.can(eG.xBc.CONNECT, t)),
        Q = (0, d.bG)([ex.A], () => ex.A.getToastsEnabled(t.id)),
        J = (0, d.bG)([V.default], () => V.default.getAwaitingRemoteSessionInfo()),
        ee = (0, d.bG)([q.Ay], () => q.Ay.callHeaderHeight),
        et = l.useCallback((e) => {
            I.Ay.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = (0, d.bG)([_.A], () => _.A.getFetchState(), []),
        ei = (0, E.Ay)(en);
    l.useEffect(() => {
        en === _.$.ERROR && ei !== _.$.ERROR && (0, m.P0)((0, m.ox)(eB.intl.string(eB.t["AlJyI+"]), m.Ck.FAILURE));
    }, [en, ei]);
    let el = (0, d.bG)([S.Ay], () => S.Ay.getSelfEmbeddedActivityForChannel(t.id), [t]),
        ea = (0, D.mB)(u.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: es } = (0, P.Ay)(L.A.CHANNEL_CALL),
        er = S.Ay.getEmbeddedActivitiesForChannel(t.id),
        { enabled: eo } = (0, z.mf)({ guildId: t.guild_id, location: "ChannelCall" }),
        ec = (0, d.bG)([F.A], () => F.A.isVisible(t.id)),
        ed = (0, d.bG)([F.A], () => {
            let e = F.A.getPendingNote(t.id);
            return null != e && null == e.position;
        }),
        eh = (0, ep.d7)(t, y),
        em = (0, ep.kM)(t),
        eg = (0, eu.F)(g) && em ? eh : null,
        { theme: eI } = (0, A.wR)();
    return (0, i.jsx)(P.f5, {
        value: es,
        children: (0, i.jsx)(N.A, {
            page: eG.liQ.CHANNEL_CALL,
            children: (0, i.jsx)(eO.qh, {
                children: (0, i.jsxs)(eU.CB, {
                    children: [
                        (0, i.jsx)(e$, {
                            channel: t,
                            guild: H,
                            hasConnectPermission: Z,
                            participantsOpen: M,
                            renderExternalHeader: n,
                            appContext: g,
                            popoutWindow: K,
                            popoutWindowAlwaysOnTop: X,
                            selectedStream: B,
                            mode: R,
                            inCall: y,
                            participants: j,
                            filteredParticipants: b,
                            participantsVersion: T,
                            layout: O,
                            chatOpen: w,
                            maxSidebarWidth: o - 550,
                            currentUserId: Y,
                            selectedParticipant: U,
                            allActiveStreams: G,
                            connectedEmbeddedActivity: el ?? void 0,
                            showChatToasts: Q,
                            storedCallHeaderHeight: ee,
                            updateStoredCallHeaderHeight: et,
                            wrapperRef: c,
                            callContainerDimensions: { width: h, height: p },
                            callContainerRef: f,
                            channelChatRef: x,
                            width: o,
                            maxHeight: a,
                            forceShowControls: ea,
                            awaitingRemoteSessionInfo: J,
                            currentChannelActivities: er,
                            theme: eI,
                            canPopout: s,
                            popoutType: r,
                            guildRoomVisible: eo && ec,
                            isPlacingNote: ed,
                            currentVoiceChannelApplicationId: eg,
                        }),
                        !t.isPrivate() && (0, i.jsx)(eU.wQ, {}),
                        (0, i.jsx)(eO.WD, {}),
                    ],
                }),
            }),
        }),
    });
};
