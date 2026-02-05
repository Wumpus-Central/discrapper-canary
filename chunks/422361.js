n.d(t, { A: () => en });
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
    g = n(296216),
    m = n(685399),
    p = n(271683),
    _ = n(186369),
    x = n(725613),
    f = n(963027),
    E = n(844262),
    C = n(47167),
    I = n(262763),
    S = n(5932),
    b = n(857253),
    N = n(202384),
    T = n(51758),
    j = n(721592),
    v = n(508654),
    y = n(214660),
    R = n(140547),
    O = n(159426),
    L = n(378570),
    D = n(728321),
    M = n(253932),
    G = n(734057),
    U = n(71393),
    P = n(834942),
    k = n(576705),
    w = n(222823),
    V = n(543465),
    B = n(977997),
    H = n(147036),
    F = n(338234),
    Y = n(557534),
    W = n(68437),
    K = n(166444),
    z = n(439282),
    X = n(562991),
    q = n(588224),
    J = n(652215),
    Q = n(349828),
    Z = n(985018),
    $ = n(728444);
class ee extends Y.Ay {
    state = { shouldShowActivities: !1, shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = l.createRef();
    channelItemRef = l.createRef();
    activitiesHideTimeout = new o.Ep();
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
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
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let r = s && a > 0;
        r && u.A.updateChatOpen(n.id, !0),
            I.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: r,
                locked: e,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = U.A.getGuild(t.getGuildId());
        null != l &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("30997")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleMouseEnter = () => {
        let { enableUserHoverActivities: e } = (0, F.Uw)({
            guildId: this.props.channel.guild_id,
            location: "VoiceChannel",
        });
        e
            ? this.setState({ hovered: !0 })
            : (this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !0, hovered: !0 }));
    };
    handleMouseLeave = () => {
        let { enableUserHoverActivities: e } = (0, F.Uw)({
            guildId: this.props.channel.guild_id,
            location: "VoiceChannel",
        });
        e
            ? this.setState({ hovered: !1 })
            : this.activitiesHideTimeout.start(100, () => this.setState({ shouldShowActivities: !1, hovered: !1 }));
    };
    closePopout = () => {
        this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, H.Pd)(e, B.A, U.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return $.ZS;
        if (null != t)
            if (e > t) return $.mU;
            else return $.TR;
        return $.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, T.V)(t) && (0, N.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, p.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t, showEmptyChannelTopic: n } = this.props,
            l = (0, S.M)(this.props.subtitle)?.subtitle,
            { hovered: s } = this.state;
        return (0, i.jsx)(X.A, {
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
        return (0, i.jsx)(q.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: s,
            location: J.ThZ.GUILD_CHANNEL_LIST,
        });
    }
    renderPopout = () => {
        let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: s, guild: a } = this.props,
            { shouldShowActivities: r, shouldShowGuildVerificationPopout: o } = this.state,
            { enableUserHoverActivities: d } = (0, F.Uw)({ guildId: e.guild_id, location: "VoiceChannel" });
        if (o)
            return (0, i.jsx)(y.A, {
                type: y.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        if (!d && r && !n && !l) {
            let n = M.JG.getSetting().includes(a.id);
            return (0, i.jsx)(z.A, {
                onAction: this.closePopout,
                guild: a,
                channel: e,
                voiceStates: t,
                isChannelSelected: s,
                shouldShowSettingNudge: n,
            });
        }
        return null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, i.jsx)(d.m, {
                asContainer: !0,
                text: Z.intl.string(Z.t.ZXxLQg),
                children: (0, i.jsx)(c.DUT, {
                    className: a()($.Xs, n ? $.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), (0, L.iN)(e.id);
                    },
                    "aria-label": Z.intl.string(Z.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: $.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: $.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? Z.intl.string(Z.t.rZfiNq) : null;
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
                connectChannelDragSource: g,
                connectUserDropTarget: m,
                connectDragPreview: p,
                canReorderChannel: _,
                canMoveMembers: x,
                showTutorial: C,
                hasActiveEvent: I,
                embeddedApps: S,
                isSubscriptionGated: b,
                isFavoriteSuggestion: N,
                withGuildIcon: T,
                hasStartTime: j,
                shouldHighlightChannel: v,
                shouldUseAnimatedWaveform: y,
            } = this.props,
            { shouldShowGuildVerificationPopout: R } = this.state,
            { enableUserHoverActivities: O } = (0, F.Uw)({ guildId: e.guild_id, location: "VoiceChannel" }),
            L = v || y,
            M = this.getVoiceStatesCount(),
            G = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [$.r9]: this.isDisabled(), [$.fy]: v }),
                "data-dnd-name": e.name,
                children: [
                    v &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", { className: $.UQ }), (0, i.jsx)("div", { className: $.l0 })],
                        }),
                    (0, i.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(c.YNO, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: R || (!O && this.state.shouldShowActivities && !u && !h),
                            children: () =>
                                (0, i.jsx)(d.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(K.Ay, {
                                        ref: this.channelItemRef,
                                        className: $.Ki,
                                        iconClassName: a()({ [$.Gj]: I || j || L }),
                                        hasActiveEvent: I,
                                        channel: e,
                                        selected: !N && t,
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
                                        isFavoriteSuggestion: N,
                                        "aria-label": (0, f.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            userCount: M,
                                            embeddedActivitiesCount: S.length,
                                            isSubscriptionGated: b,
                                        }),
                                        "aria-describedby": (0, E.A)({ channel: e, embeddedApps: S }),
                                        withGuildIcon: T,
                                        children: [
                                            N &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !N &&
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
                    this.renderVoiceUsers(),
                ],
            });
        return (
            x && (G = m(G)),
            _ && (G = A(g(G))),
            C &&
                (G = (0, i.jsx)(D.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: G,
                })),
            G
        );
    }
}
let et = (0, A.a)((0, g.F)(ee));
function en(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: s,
            selected: a,
            collapsed: o,
            voiceStates: d,
        } = e,
        c = (0, r.cf)([w.Ay], () => ({ unread: w.Ay.hasUnread(n.id), mentionCount: w.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([G.A, P.A, k.A], () => {
            let e = G.A.getChannel(n.parent_id),
                i = P.A.getCheck(n.guild_id);
            return {
                canManageChannel: k.A.can(J.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === Q.V ||
                        (null != e ? k.A.can(J.xBc.MANAGE_CHANNELS, e) : k.A.can(J.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: k.A.can(J.xBc.MOVE_MEMBERS, n),
                locked: !k.A.can(J.xBc.CONNECT, n),
                bypassLimit: k.A.can(J.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([B.A], () => B.A.hasVideo(n.id)),
        g = (0, m.Ay)(n),
        p = (0, C.Ay)(n),
        f = (0, v.Qs)(n.id),
        E = (0, r.bG)([x.A], () => null != x.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: S } = (0, j.A)(n.id),
        N = (0, b.A)(),
        T = (0, r.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        y = e.connected || N?.channelId === n.id,
        { enableHangStatus: L, showEmptyChannelTopic: D } = (0, R.$j)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: M } = O.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: U, enableWaveformIcon: H } = (0, _.b)(t.id, "VoiceChannel"),
        F = null != d && d.length > 0,
        Y = U && F,
        K = H && F,
        z = (0, W.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: d,
            isSubscriptionGated: I,
            needSubscriptionToAccess: S,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        X = y && null == z;
    return (0, i.jsx)(et, {
        channelName: p,
        embeddedApps: g,
        embeddedActivityType: J.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != f,
        isSubscriptionGated: I,
        needSubscriptionToAccess: S,
        ...c,
        ...h,
        ...e,
        connected: y,
        isFavoriteSuggestion: s && !T,
        forceShowButtons: X,
        channelInfo: z,
        resolvedUnreadSetting: u,
        enableHangStatus: L,
        showEmptyChannelTopic: D,
        enableOpenTIVForPing: M,
        hasChannelInfo: null != z,
        hasStartTime: E,
        shouldHighlightChannel: Y,
        shouldUseAnimatedWaveform: K,
    });
}
