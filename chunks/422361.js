n.d(t, { A: () => ea });
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
    x = n(963027),
    E = n(844262),
    I = n(47167),
    C = n(262763),
    N = n(5932),
    T = n(857253),
    S = n(202384),
    b = n(51758),
    y = n(721592),
    v = n(508654),
    j = n(214660),
    R = n(140547),
    O = n(303333),
    L = n(159426),
    M = n(824865),
    D = n(378570),
    U = n(728321),
    G = n(591346),
    P = n(734057),
    k = n(71393),
    w = n(834942),
    B = n(576705),
    V = n(222823),
    H = n(994500),
    F = n(543465),
    W = n(287809),
    K = n(977997),
    Y = n(147036),
    z = n(557534),
    q = n(68437),
    X = n(166444),
    $ = n(850457),
    J = n(469178),
    Q = n(562991),
    Z = n(588224);
n(281405);
var ee = n(652215),
    et = n(349828),
    en = n(985018),
    ei = n(99566);
class el extends z.Ay {
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
                transitionExtras: r ? { source: M.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = k.A.getGuild(t.getGuildId());
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
        let { enableHistoryHover: e } = (0, G.NH)({ guildId: this.props.channel.guild_id, location: "VoiceChannel" });
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
        return (0, Y.Pd)(e, K.A, k.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ei.ZS;
        if (null != t)
            if (e > t) return ei.mU;
            else return ei.TR;
        return ei.fx;
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
        let { channel: e, connected: t, showEmptyChannelTopic: n } = this.props,
            l = (0, N.M)(this.props.subtitle)?.subtitle,
            { hovered: s } = this.state;
        return (0, i.jsx)(Q.A, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: l,
            hovered: s,
            showEmptyChannelTopic: n,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: s } = this.props;
        return (0, i.jsx)(Z.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: s,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n } = this.props;
        return null != n && n.length > 0 ? (0, i.jsx)(O.A, { channel: e, isConnected: t }) : null;
    }
    renderPopout = () => {
        let { channel: e, sorting: t, isUserOver: n } = this.props,
            { popoutToShow: l, shouldShowGuildVerificationPopout: s } = this.state;
        return s
            ? (0, i.jsx)(j.A, { type: j.H.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : t || n
              ? null
              : "history" === l && this.getVoiceStatesCount() > 0
                ? (0, i.jsx)($.A, {
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
                text: en.intl.string(en.t.ZXxLQg),
                children: (0, i.jsx)(c.DUT, {
                    className: a()(ei.Xs, n ? ei.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0),
                            (0, D.iN)(e.id, l ? { source: M.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": en.intl.string(en.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: ei.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: ei.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? en.intl.string(en.t.rZfiNq) : null;
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
                shouldHighlightChannel: j,
                shouldUseAnimatedWaveform: R,
                voiceStates: O,
            } = this.props,
            { shouldShowGuildVerificationPopout: L } = this.state,
            { enableHistoryHover: M } = (0, G.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
            D = j || R,
            P = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [ei.r9]: this.isDisabled(), [ei.fy]: j }),
                "data-dnd-name": (0, I.m1)(e, W.default, H.A),
                children: [
                    M && this.getVoiceStatesCount() > 0 && (0, i.jsx)(J.A, { channel: e }),
                    j &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: ei.UQ }),
                                (0, i.jsx)("div", { className: ei.l0 }),
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
                                        className: ei.Ki,
                                        iconClassName: a()({ [ei.Gj]: N || v || D }),
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
                                        "aria-label": (0, x.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: O,
                                            embeddedActivitiesCount: T.length,
                                            isSubscriptionGated: S,
                                        }),
                                        "aria-describedby": (0, E.A)({ channel: e, embeddedApps: T }),
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
                (P = (0, i.jsx)(U.A, {
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
let es = (0, A.a)((0, _.F)(el));
function ea(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: s,
            selected: a,
            collapsed: o,
            voiceStates: d,
        } = e,
        c = (0, r.cf)([V.Ay], () => ({ unread: V.Ay.hasUnread(n.id), mentionCount: V.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([F.Ay], () => F.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([P.A, w.A, B.A], () => {
            let e = P.A.getChannel(n.parent_id),
                i = w.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(ee.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === et.Vc ||
                        (null != e ? B.A.can(ee.xBc.MANAGE_CHANNELS, e) : B.A.can(ee.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(ee.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(ee.xBc.CONNECT, n),
                bypassLimit: B.A.can(ee.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([K.A], () => K.A.hasVideo(n.id)),
        _ = (0, m.Ay)(n),
        p = (0, I.Ay)(n),
        x = (0, v.Qs)(n.id),
        E = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: C, needSubscriptionToAccess: N } = (0, y.A)(n.id),
        S = (0, T.A)(),
        b = (0, r.bG)([F.Ay], () => F.Ay.isFavorite(t.id, n.id)),
        j = e.connected || S?.channelId === n.id,
        { enableHangStatus: O, showEmptyChannelTopic: M } = (0, R.$j)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: D } = L.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: U, enableWaveformIcon: G } = (0, g.b)(t.id, "VoiceChannel"),
        k = null != d && d.length > 0,
        H = U && k,
        W = G && k,
        Y = (0, q.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: d,
            isSubscriptionGated: C,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        z = j && null == Y;
    return (0, i.jsx)(es, {
        channelName: p,
        embeddedApps: _,
        embeddedActivityType: ee.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != x,
        isSubscriptionGated: C,
        needSubscriptionToAccess: N,
        ...c,
        ...h,
        ...e,
        connected: j,
        isFavoriteSuggestion: s && !b,
        forceShowButtons: z,
        channelInfo: Y,
        resolvedUnreadSetting: u,
        enableHangStatus: O,
        showEmptyChannelTopic: M,
        enableOpenTIVForPing: D,
        hasChannelInfo: null != Y,
        hasStartTime: E,
        shouldHighlightChannel: H,
        shouldUseAnimatedWaveform: W,
    });
}
