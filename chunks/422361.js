"use strict";
n.d(t, { A: () => ei });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(451988),
    c = n(990078),
    d = n(397927),
    u = n(367513),
    h = n(442433),
    A = n(676002),
    p = n(296216),
    g = n(685399),
    m = n(271683),
    _ = n(186369),
    f = n(725613),
    x = n(963027),
    C = n(844262),
    E = n(47167),
    I = n(262763),
    b = n(5932),
    N = n(857253),
    S = n(202384),
    T = n(51758),
    v = n(721592),
    y = n(508654),
    j = n(214660),
    R = n(140547),
    O = n(159426),
    L = n(378570),
    M = n(728321),
    D = n(253932),
    G = n(734057),
    U = n(71393),
    P = n(834942),
    w = n(576705),
    k = n(222823),
    V = n(543465),
    B = n(977997),
    H = n(147036),
    F = n(644836),
    K = n(338234),
    W = n(557534),
    Y = n(68437),
    z = n(166444),
    X = n(439282),
    q = n(562991),
    J = n(588224),
    Q = n(652215),
    $ = n(349828),
    Z = n(985018),
    ee = n(728444);
class et extends W.Ay {
    state = { shouldShowActivities: !1, shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = s.createRef();
    channelItemRef = s.createRef();
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
            needSubscriptionToAccess: s,
            enableOpenTIVForPing: l,
            mentionCount: r,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let a = l && r > 0;
        a && u.A.updateChatOpen(n.id, !0),
            I.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: s,
                routeDirectlyToChannel: a,
                locked: e,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            s = U.A.getGuild(t.getGuildId());
        null != s &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("30997")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
            });
    };
    handleMouseEnter = () => {
        let { enableUserHoverActivities: e } = (0, K.Uw)({
            guildId: this.props.channel.guild_id,
            location: "VoiceChannel",
        });
        e
            ? this.setState({ hovered: !0 })
            : (this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !0, hovered: !0 }));
    };
    handleMouseLeave = () => {
        let { enableUserHoverActivities: e } = (0, K.Uw)({
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
        if (n) return ee.ZS;
        if (null != t)
            if (e > t) return ee.mU;
            else return ee.TR;
        return ee.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, T.V)(t) && (0, S.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, m.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t, showEmptyChannelTopic: n } = this.props,
            s = (0, b.M)(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, i.jsx)(q.A, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: s,
            hovered: l,
            showEmptyChannelTopic: n,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: s, tabIndex: l } = this.props;
        return (0, i.jsx)(J.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: s,
            tabIndex: l,
            location: Q.ThZ.GUILD_CHANNEL_LIST,
        });
    }
    renderPopout = () => {
        let { channel: e, voiceStates: t, sorting: n, isUserOver: s, selected: l, guild: r } = this.props,
            { shouldShowActivities: a, shouldShowGuildVerificationPopout: o } = this.state,
            { enableUserHoverActivities: c } = (0, K.Uw)({ guildId: e.guild_id, location: "VoiceChannel" });
        if (o)
            return (0, i.jsx)(j.A, {
                type: j.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        if (!c && a && !n && !s) {
            let n = D.JG.getSetting().includes(r.id),
                { standardPopoverGap: s } = (0, F.eP)({ guildId: e.guild_id, location: "VoiceChannel" });
            return (0, i.jsx)(X.A, {
                onAction: this.closePopout,
                guild: r,
                channel: e,
                voiceStates: t,
                isChannelSelected: l,
                shouldShowSettingNudge: n,
                isStandardGap: null != s,
            });
        }
        return null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, i.jsx)(c.m, {
                asContainer: !0,
                text: Z.intl.string(Z.t.ZXxLQg),
                children: (0, i.jsx)(d.DUT, {
                    className: r()(ee.Xs, n ? ee.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), (0, L.iN)(e.id);
                    },
                    "aria-label": Z.intl.string(Z.t.ZXxLQg),
                    children: (0, i.jsx)(d.oyn, { size: "xs", color: "currentColor", className: ee.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: ee.yW, children: e });
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
                unread: s,
                resolvedUnreadSetting: l,
                mentionCount: a,
                locked: o,
                sorting: u,
                isUserOver: h,
                connectChannelDropTarget: A,
                connectChannelDragSource: p,
                connectUserDropTarget: g,
                connectDragPreview: m,
                canReorderChannel: _,
                canMoveMembers: f,
                showTutorial: E,
                hasActiveEvent: I,
                embeddedApps: b,
                isSubscriptionGated: N,
                isFavoriteSuggestion: S,
                withGuildIcon: T,
                hasStartTime: v,
                shouldHighlightChannel: y,
                shouldUseAnimatedWaveform: j,
            } = this.props,
            { shouldShowGuildVerificationPopout: R } = this.state,
            { enableUserHoverActivities: O } = (0, K.Uw)({ guildId: e.guild_id, location: "VoiceChannel" }),
            { standardPopoverGap: L } = (0, F.eP)({ guildId: e.guild_id, location: "VoiceChannel" }),
            D = y || j,
            G = this.getVoiceStatesCount(),
            U = (0, i.jsxs)("li", {
                ref: this.ref,
                className: r()(this.getModeClass(), { [ee.r9]: this.isDisabled(), [ee.fy]: y }),
                "data-dnd-name": e.name,
                children: [
                    y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: ee.UQ }),
                                (0, i.jsx)("div", { className: ee.l0 }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(d.YNO, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: L ?? void 0,
                            shouldShow: R || (!O && this.state.shouldShowActivities && !u && !h),
                            children: () =>
                                (0, i.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(z.Ay, {
                                        ref: this.channelItemRef,
                                        className: ee.Ki,
                                        iconClassName: r()({ [ee.Gj]: I || v || D }),
                                        hasActiveEvent: I,
                                        channel: e,
                                        selected: !S && t,
                                        connected: n,
                                        unread: n ? s : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: a,
                                        locked: o,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: m,
                                        isFavoriteSuggestion: S,
                                        "aria-label": (0, x.Ay)({
                                            channel: e,
                                            unread: s,
                                            mentionCount: a,
                                            userCount: G,
                                            embeddedActivitiesCount: b.length,
                                            isSubscriptionGated: N,
                                        }),
                                        "aria-describedby": (0, C.A)({ channel: e, embeddedApps: b }),
                                        withGuildIcon: T,
                                        children: [
                                            S &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !S &&
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
            f && (U = g(U)),
            _ && (U = A(p(U))),
            E &&
                (U = (0, i.jsx)(M.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: U,
                })),
            U
        );
    }
}
let en = (0, A.a)((0, p.F)(et));
function ei(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: s,
            isFavoriteCategory: l,
            selected: r,
            collapsed: o,
            voiceStates: c,
        } = e,
        d = (0, a.cf)([k.Ay], () => ({ unread: k.Ay.hasUnread(n.id), mentionCount: k.Ay.getMentionCount(n.id) })),
        u = (0, a.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, a.cf)([G.A, P.A, w.A], () => {
            let e = G.A.getChannel(n.parent_id),
                i = P.A.getCheck(n.guild_id);
            return {
                canManageChannel: w.A.can(Q.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === $.Vc ||
                        (null != e ? w.A.can(Q.xBc.MANAGE_CHANNELS, e) : w.A.can(Q.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: w.A.can(Q.xBc.MOVE_MEMBERS, n),
                locked: !w.A.can(Q.xBc.CONNECT, n),
                bypassLimit: w.A.can(Q.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, a.bG)([B.A], () => B.A.hasVideo(n.id)),
        p = (0, g.Ay)(n),
        m = (0, E.Ay)(n),
        x = (0, y.Qs)(n.id),
        C = (0, a.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: b } = (0, v.A)(n.id),
        S = (0, N.A)(),
        T = (0, a.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        j = e.connected || S?.channelId === n.id,
        { enableHangStatus: L, showEmptyChannelTopic: M } = (0, R.$j)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: D } = O.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: U, enableWaveformIcon: H } = (0, _.b)(t.id, "VoiceChannel"),
        F = null != c && c.length > 0,
        K = U && F,
        W = H && F,
        z = (0, Y.A)({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: I,
            needSubscriptionToAccess: b,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        X = j && null == z;
    return (0, i.jsx)(en, {
        channelName: m,
        embeddedApps: p,
        embeddedActivityType: Q.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != x,
        isSubscriptionGated: I,
        needSubscriptionToAccess: b,
        ...d,
        ...h,
        ...e,
        connected: j,
        isFavoriteSuggestion: l && !T,
        forceShowButtons: X,
        channelInfo: z,
        resolvedUnreadSetting: u,
        enableHangStatus: L,
        showEmptyChannelTopic: M,
        enableOpenTIVForPing: D,
        hasChannelInfo: null != z,
        hasStartTime: C,
        shouldHighlightChannel: K,
        shouldUseAnimatedWaveform: W,
    });
}
