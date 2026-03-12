"use strict";
n.d(t, { A: () => ei });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(451988),
    c = n(990078),
    d = n(397927),
    u = n(367513),
    h = n(442433),
    A = n(676002),
    m = n(296216),
    p = n(685399),
    g = n(271683),
    _ = n(186369),
    f = n(725613),
    x = n(963027),
    C = n(844262),
    E = n(47167),
    I = n(262763),
    N = n(5932),
    b = n(857253),
    S = n(202384),
    T = n(51758),
    v = n(721592),
    y = n(508654),
    j = n(214660),
    R = n(140547),
    O = n(303333),
    L = n(159426),
    M = n(378570),
    D = n(728321),
    G = n(253932),
    U = n(734057),
    P = n(71393),
    w = n(834942),
    k = n(576705),
    V = n(222823),
    B = n(543465),
    H = n(977997),
    F = n(147036),
    K = n(338234),
    W = n(557534),
    Y = n(68437),
    z = n(166444),
    q = n(439282),
    X = n(562991),
    J = n(588224);
n(281405);
var Q = n(652215),
    $ = n(349828),
    Z = n(985018),
    ee = n(719550);
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
            mentionCount: a,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let r = l && a > 0;
        r && u.A.updateChatOpen(n.id, !0),
            I.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: s,
                routeDirectlyToChannel: r,
                locked: e,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            s = P.A.getGuild(t.getGuildId());
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
        return (0, F.Pd)(e, H.A, P.A);
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
        t && (e.stopPropagation(), (0, g.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t, showEmptyChannelTopic: n } = this.props,
            s = (0, N.M)(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, i.jsx)(X.A, {
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
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n } = this.props;
        return null != n && n.length > 0 ? (0, i.jsx)(O.A, { channel: e, isConnected: t }) : null;
    }
    renderPopout = () => {
        let { channel: e, voiceStates: t, sorting: n, isUserOver: s, selected: l, guild: a } = this.props,
            { shouldShowActivities: r, shouldShowGuildVerificationPopout: o } = this.state,
            { enableUserHoverActivities: c } = (0, K.Uw)({ guildId: e.guild_id, location: "VoiceChannel" });
        if (o)
            return (0, i.jsx)(j.A, {
                type: j.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        if (!c && r && !n && !s) {
            let n = G.JG.getSetting().includes(a.id);
            return (0, i.jsx)(q.A, {
                onAction: this.closePopout,
                guild: a,
                channel: e,
                voiceStates: t,
                isChannelSelected: l,
                shouldShowSettingNudge: n,
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
                    className: a()(ee.Xs, n ? ee.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), (0, M.iN)(e.id);
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
                mentionCount: r,
                locked: o,
                sorting: u,
                isUserOver: h,
                connectChannelDropTarget: A,
                connectChannelDragSource: m,
                connectUserDropTarget: p,
                connectDragPreview: g,
                canReorderChannel: _,
                canMoveMembers: f,
                showTutorial: E,
                hasActiveEvent: I,
                embeddedApps: N,
                isSubscriptionGated: b,
                isFavoriteSuggestion: S,
                withGuildIcon: T,
                hasStartTime: v,
                shouldHighlightChannel: y,
                shouldUseAnimatedWaveform: j,
                voiceStates: R,
            } = this.props,
            { shouldShowGuildVerificationPopout: O } = this.state,
            { enableUserHoverActivities: L } = (0, K.Uw)({ guildId: e.guild_id, location: "VoiceChannel" }),
            M = y || j,
            G = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [ee.r9]: this.isDisabled(), [ee.fy]: y }),
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
                            spacing: 17,
                            shouldShow: O || (!L && this.state.shouldShowActivities && !u && !h),
                            children: () =>
                                (0, i.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(z.Ay, {
                                        ref: this.channelItemRef,
                                        className: ee.Ki,
                                        iconClassName: a()({ [ee.Gj]: I || v || M }),
                                        hasActiveEvent: I,
                                        channel: e,
                                        selected: !S && t,
                                        connected: n,
                                        unread: n ? s : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: r,
                                        locked: o,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: g,
                                        isFavoriteSuggestion: S,
                                        "aria-label": (0, x.Ay)({
                                            channel: e,
                                            unread: s,
                                            mentionCount: r,
                                            voiceStates: R,
                                            embeddedActivitiesCount: N.length,
                                            isSubscriptionGated: b,
                                        }),
                                        "aria-describedby": (0, C.A)({ channel: e, embeddedApps: N }),
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
                    this.renderHangoutWindow(),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            f && (G = p(G)),
            _ && (G = A(m(G))),
            E &&
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
let en = (0, A.a)((0, m.F)(et));
function ei(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: s,
            isFavoriteCategory: l,
            selected: a,
            collapsed: o,
            voiceStates: c,
        } = e,
        d = (0, r.cf)([V.Ay], () => ({ unread: V.Ay.hasUnread(n.id), mentionCount: V.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([B.Ay], () => B.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([U.A, w.A, k.A], () => {
            let e = U.A.getChannel(n.parent_id),
                i = w.A.getCheck(n.guild_id);
            return {
                canManageChannel: k.A.can(Q.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === $.Vc ||
                        (null != e ? k.A.can(Q.xBc.MANAGE_CHANNELS, e) : k.A.can(Q.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: k.A.can(Q.xBc.MOVE_MEMBERS, n),
                locked: !k.A.can(Q.xBc.CONNECT, n),
                bypassLimit: k.A.can(Q.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([H.A], () => H.A.hasVideo(n.id)),
        m = (0, p.Ay)(n),
        g = (0, E.Ay)(n),
        x = (0, y.Qs)(n.id),
        C = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, v.A)(n.id),
        S = (0, b.A)(),
        T = (0, r.bG)([B.Ay], () => B.Ay.isFavorite(t.id, n.id)),
        j = e.connected || S?.channelId === n.id,
        { enableHangStatus: O, showEmptyChannelTopic: M } = (0, R.$j)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: D } = L.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: G, enableWaveformIcon: P } = (0, _.b)(t.id, "VoiceChannel"),
        F = null != c && c.length > 0,
        K = G && F,
        W = P && F,
        z = (0, Y.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: I,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        q = j && null == z;
    return (0, i.jsx)(en, {
        channelName: g,
        embeddedApps: m,
        embeddedActivityType: Q.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != x,
        isSubscriptionGated: I,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: j,
        isFavoriteSuggestion: l && !T,
        forceShowButtons: q,
        channelInfo: z,
        resolvedUnreadSetting: u,
        enableHangStatus: O,
        showEmptyChannelTopic: M,
        enableOpenTIVForPing: D,
        hasChannelInfo: null != z,
        hasStartTime: C,
        shouldHighlightChannel: K,
        shouldUseAnimatedWaveform: W,
    });
}
