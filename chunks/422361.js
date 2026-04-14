n.d(t, { A: () => es });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(451988),
    d = n(990078),
    c = n(397927),
    u = n(367513),
    h = n(442433),
    A = n(676002),
    _ = n(296216),
    m = n(685399),
    p = n(271683),
    g = n(186369),
    f = n(725613),
    E = n(963027),
    x = n(844262),
    I = n(47167),
    C = n(262763),
    N = n(5932),
    T = n(857253),
    S = n(202384),
    b = n(51758),
    y = n(721592),
    v = n(508654),
    R = n(214660),
    j = n(303333),
    O = n(159426),
    L = n(824865),
    M = n(378570),
    D = n(728321),
    U = n(591346),
    G = n(734057),
    P = n(71393),
    k = n(834942),
    w = n(576705),
    B = n(222823),
    V = n(994500),
    H = n(543465),
    F = n(287809),
    W = n(977997),
    K = n(147036),
    Y = n(557534),
    z = n(68437),
    X = n(166444),
    q = n(850457),
    $ = n(469178),
    J = n(562991),
    Q = n(588224);
n(281405);
var Z = n(652215),
    ee = n(349828),
    et = n(985018),
    en = n(928409);
class ei extends Y.Ay {
    state = { popoutToShow: null, shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = l.createRef();
    channelItemRef = l.createRef();
    activitiesHoverTimeout = new o.Ep();
    componentWillUnmount() {
        this.activitiesHoverTimeout.stop();
    }
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    handleVoiceConnect = () => {
        let {
            locked: e,
            connected: t,
            channel: n,
            unverifiedAccount: i,
            needSubscriptionToAccess: l,
            enableOpenTIVForPing: s,
            mentionCount: a,
            isSuggestedSection: r,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s && a > 0;
        o && u.A.updateChatOpen(n.id, !0),
            C.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o,
                locked: e,
                transitionExtras: r ? { source: L.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = P.A.getGuild(t.getGuildId());
        null != l &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("2381"), n.e("40394"), n.e("30997")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleMouseEnter = () => {
        this.activitiesHoverTimeout.stop(), this.setState({ hovered: !0 });
        let { enableHistoryHover: e } = (0, U.NH)({ guildId: this.props.channel.guild_id, location: "VoiceChannel" });
        this.activitiesHoverTimeout.start(100, () => {
            e && this.getVoiceStatesCount() > 0 && this.setState({ popoutToShow: "history" });
        });
    };
    handleMouseLeave = () => {
        this.activitiesHoverTimeout.start(100, () => this.setState({ popoutToShow: null, hovered: !1 }));
    };
    closePopout = () => {
        this.activitiesHoverTimeout.stop(), this.setState({ popoutToShow: null });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, K.Pd)(e, W.A, P.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return en.ZS;
        if (null != t)
            if (e > t) return en.mU;
            else return en.TR;
        return en.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, b.V)(t) && (0, S.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, p.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = (0, N.M)(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, i.jsx)(J.A, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: s } = this.props;
        return (0, i.jsx)(Q.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: s,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: l } = this.props;
        return !(null != n && n.length > 0) || l ? null : (0, i.jsx)(j.A, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e, sorting: t, isUserOver: n } = this.props,
            { popoutToShow: l, shouldShowGuildVerificationPopout: s } = this.state;
        return s
            ? (0, i.jsx)(R.A, { type: R.H.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : t || n
              ? null
              : "history" === l && this.getVoiceStatesCount() > 0
                ? (0, i.jsx)(q.A, {
                      channel: e,
                      source: "voice_channel",
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                  })
                : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, i.jsx)(d.m, {
                asContainer: !0,
                text: et.intl.string(et.t.ZXxLQg),
                children: (0, i.jsx)(c.DUT, {
                    className: a()(en.Xs, n ? en.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0),
                            (0, M.iN)(e.id, l ? { source: L.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": et.intl.string(et.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: en.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: en.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? et.intl.string(et.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: l,
                resolvedUnreadSetting: s,
                mentionCount: r,
                locked: o,
                sorting: u,
                isUserOver: h,
                connectChannelDropTarget: A,
                connectChannelDragSource: _,
                connectUserDropTarget: m,
                connectDragPreview: p,
                canReorderChannel: g,
                canMoveMembers: f,
                showTutorial: C,
                hasActiveEvent: N,
                embeddedApps: T,
                isSubscriptionGated: S,
                isFavoriteSuggestion: b,
                withGuildIcon: y,
                hasStartTime: v,
                shouldHighlightChannel: R,
                shouldUseAnimatedWaveform: j,
                voiceStates: O,
            } = this.props,
            { shouldShowGuildVerificationPopout: L } = this.state,
            { enableHistoryHover: M } = (0, U.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
            G = R || j,
            P = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [en.r9]: this.isDisabled(), [en.fy]: R }),
                "data-dnd-name": (0, I.m1)(e, F.default, V.A),
                children: [
                    M && this.getVoiceStatesCount() > 0 && (0, i.jsx)($.A, { channel: e }),
                    R &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: en.UQ }),
                                (0, i.jsx)("div", { className: en.l0 }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(c.YNO, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: L || ("history" === this.state.popoutToShow && !(u || h)),
                            children: () =>
                                (0, i.jsx)(d.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(X.Ay, {
                                        ref: this.channelItemRef,
                                        className: en.Ki,
                                        iconClassName: a()({ [en.Gj]: N || v || G }),
                                        hasActiveEvent: N,
                                        channel: e,
                                        selected: !b && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: s,
                                        mentionCount: r,
                                        locked: o,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: p,
                                        isFavoriteSuggestion: b,
                                        "aria-label": (0, E.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: O,
                                            embeddedActivitiesCount: T.length,
                                            isSubscriptionGated: S,
                                        }),
                                        "aria-describedby": (0, x.A)({ channel: e, embeddedApps: T }),
                                        withGuildIcon: y,
                                        children: [
                                            b &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !b &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        this.renderOpenChatButton(),
                                                        this.renderInviteButton(),
                                                        this.renderEditButton(),
                                                        this.renderChannelInfo(),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                        }),
                    }),
                    this.renderHangoutWindow(),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            f && (P = m(P)),
            g && (P = A(_(P))),
            C &&
                (P = (0, i.jsx)(D.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: P,
                })),
            P
        );
    }
}
let el = (0, A.a)((0, _.F)(ei));
function es(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: s,
            selected: a,
            collapsed: o,
            voiceStates: d,
        } = e,
        c = (0, r.cf)([B.Ay], () => ({ unread: B.Ay.hasUnread(n.id), mentionCount: B.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([H.Ay], () => H.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([G.A, k.A, w.A], () => {
            let e = G.A.getChannel(n.parent_id),
                i = k.A.getCheck(n.guild_id);
            return {
                canManageChannel: w.A.can(Z.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === ee.Vc ||
                        (null != e ? w.A.can(Z.xBc.MANAGE_CHANNELS, e) : w.A.can(Z.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: w.A.can(Z.xBc.MOVE_MEMBERS, n),
                locked: !w.A.can(Z.xBc.CONNECT, n),
                bypassLimit: w.A.can(Z.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([W.A], () => W.A.hasVideo(n.id)),
        _ = (0, m.Ay)(n),
        p = (0, I.Ay)(n),
        E = (0, v.Qs)(n.id),
        x = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: C, needSubscriptionToAccess: N } = (0, y.A)(n.id),
        S = (0, T.A)(),
        b = (0, r.bG)([H.Ay], () => H.Ay.isFavorite(t.id, n.id)),
        R = e.connected || S?.channelId === n.id,
        { enableOpenTIVForPing: j } = O.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: L, enableWaveformIcon: M } = (0, g.b)(t.id, "VoiceChannel"),
        D = null != d && d.length > 0,
        U = L && D,
        P = M && D,
        V = (0, z.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: d,
            isSubscriptionGated: C,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        F = R && null == V;
    return (0, i.jsx)(el, {
        channelName: p,
        embeddedApps: _,
        embeddedActivityType: Z.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != E,
        isSubscriptionGated: C,
        needSubscriptionToAccess: N,
        ...c,
        ...h,
        ...e,
        connected: R,
        isFavoriteSuggestion: s && !b,
        forceShowButtons: F,
        channelInfo: V,
        resolvedUnreadSetting: u,
        enableOpenTIVForPing: j,
        hasChannelInfo: null != V,
        hasStartTime: x,
        shouldHighlightChannel: U,
        shouldUseAnimatedWaveform: P,
    });
}
