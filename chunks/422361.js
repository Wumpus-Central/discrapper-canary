"use strict";
n.d(t, { A: () => en });
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
    S = n(857253),
    b = n(202384),
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
    F = n(338234),
    K = n(557534),
    W = n(68437),
    Y = n(166444),
    z = n(439282),
    q = n(562991),
    X = n(588224);
n(281405);
var J = n(652215),
    Q = n(349828),
    $ = n(985018),
    Z = n(728444);
class ee extends K.Ay {
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
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("18159")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
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
        if (n) return Z.ZS;
        if (null != t)
            if (e > t) return Z.mU;
            else return Z.TR;
        return Z.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, T.V)(t) && (0, b.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, g.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t, showEmptyChannelTopic: n } = this.props,
            s = (0, N.M)(this.props.subtitle)?.subtitle,
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
        return (0, i.jsx)(X.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: s,
            tabIndex: l,
            location: J.ThZ.GUILD_CHANNEL_LIST,
        });
    }
    renderPopout = () => {
        let { channel: e, voiceStates: t, sorting: n, isUserOver: s, selected: l, guild: r } = this.props,
            { shouldShowActivities: a, shouldShowGuildVerificationPopout: o } = this.state,
            { enableUserHoverActivities: c } = (0, F.Uw)({ guildId: e.guild_id, location: "VoiceChannel" });
        if (o)
            return (0, i.jsx)(j.A, {
                type: j.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        if (!c && a && !n && !s) {
            let n = D.JG.getSetting().includes(r.id);
            return (0, i.jsx)(z.A, {
                onAction: this.closePopout,
                guild: r,
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
                text: $.intl.string($.t.ZXxLQg),
                children: (0, i.jsx)(d.DUT, {
                    className: r()(Z.Xs, n ? Z.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), (0, L.iN)(e.id);
                    },
                    "aria-label": $.intl.string($.t.ZXxLQg),
                    children: (0, i.jsx)(d.oyn, { size: "xs", color: "currentColor", className: Z.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: Z.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? $.intl.string($.t.rZfiNq) : null;
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
                connectChannelDragSource: m,
                connectUserDropTarget: p,
                connectDragPreview: g,
                canReorderChannel: _,
                canMoveMembers: f,
                showTutorial: E,
                hasActiveEvent: I,
                embeddedApps: N,
                isSubscriptionGated: S,
                isFavoriteSuggestion: b,
                withGuildIcon: T,
                hasStartTime: v,
                shouldHighlightChannel: y,
                shouldUseAnimatedWaveform: j,
            } = this.props,
            { shouldShowGuildVerificationPopout: R } = this.state,
            { enableUserHoverActivities: O } = (0, F.Uw)({ guildId: e.guild_id, location: "VoiceChannel" }),
            L = y || j,
            D = this.getVoiceStatesCount(),
            G = (0, i.jsxs)("li", {
                ref: this.ref,
                className: r()(this.getModeClass(), { [Z.r9]: this.isDisabled(), [Z.fy]: y }),
                "data-dnd-name": e.name,
                children: [
                    y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", { className: Z.UQ }), (0, i.jsx)("div", { className: Z.l0 })],
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
                            shouldShow: R || (!O && this.state.shouldShowActivities && !u && !h),
                            children: () =>
                                (0, i.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(Y.Ay, {
                                        ref: this.channelItemRef,
                                        className: Z.Ki,
                                        iconClassName: r()({ [Z.Gj]: I || v || L }),
                                        hasActiveEvent: I,
                                        channel: e,
                                        selected: !b && t,
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
                                        connectDragPreview: g,
                                        isFavoriteSuggestion: b,
                                        "aria-label": (0, x.Ay)({
                                            channel: e,
                                            unread: s,
                                            mentionCount: a,
                                            userCount: D,
                                            embeddedActivitiesCount: N.length,
                                            isSubscriptionGated: S,
                                        }),
                                        "aria-describedby": (0, C.A)({ channel: e, embeddedApps: N }),
                                        withGuildIcon: T,
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
                    this.renderVoiceUsers(),
                ],
            });
        return (
            f && (G = p(G)),
            _ && (G = A(m(G))),
            E &&
                (G = (0, i.jsx)(M.A, {
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
let et = (0, A.a)((0, m.F)(ee));
function en(e) {
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
                canManageChannel: w.A.can(J.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === Q.Vc ||
                        (null != e ? w.A.can(J.xBc.MANAGE_CHANNELS, e) : w.A.can(J.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: w.A.can(J.xBc.MOVE_MEMBERS, n),
                locked: !w.A.can(J.xBc.CONNECT, n),
                bypassLimit: w.A.can(J.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, a.bG)([B.A], () => B.A.hasVideo(n.id)),
        m = (0, p.Ay)(n),
        g = (0, E.Ay)(n),
        x = (0, y.Qs)(n.id),
        C = (0, a.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, v.A)(n.id),
        b = (0, S.A)(),
        T = (0, a.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        j = e.connected || b?.channelId === n.id,
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
        Y = H && F,
        z = (0, W.A)({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: I,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        q = j && null == z;
    return (0, i.jsx)(et, {
        channelName: g,
        embeddedApps: m,
        embeddedActivityType: J.$pd.PLAYING,
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
        enableHangStatus: L,
        showEmptyChannelTopic: M,
        enableOpenTIVForPing: D,
        hasChannelInfo: null != z,
        hasStartTime: C,
        shouldHighlightChannel: K,
        shouldUseAnimatedWaveform: Y,
    });
}
