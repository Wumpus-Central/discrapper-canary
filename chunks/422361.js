n.d(t, { A: () => ei });
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
    q = n(439282),
    X = n(562991),
    J = n(588224),
    Q = n(652215),
    $ = n(349828),
    Z = n(985018),
    ee = n(728444);
class et extends W.Ay {
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
        t && (e.stopPropagation(), (0, g.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t, showEmptyChannelTopic: n } = this.props,
            l = (0, N.M)(this.props.subtitle)?.subtitle,
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
        return (0, i.jsx)(J.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: s,
            location: Q.ThZ.GUILD_CHANNEL_LIST,
        });
    }
    renderPopout = () => {
        let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: s, guild: a } = this.props,
            { shouldShowActivities: r, shouldShowGuildVerificationPopout: o } = this.state,
            { enableUserHoverActivities: d } = (0, K.Uw)({ guildId: e.guild_id, location: "VoiceChannel" });
        if (o)
            return (0, i.jsx)(j.A, {
                type: j.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        if (!d && r && !n && !l) {
            let n = D.JG.getSetting().includes(a.id),
                { standardPopoverGap: l } = (0, F.eP)({ guildId: e.guild_id, location: "VoiceChannel" });
            return (0, i.jsx)(q.A, {
                onAction: this.closePopout,
                guild: a,
                channel: e,
                voiceStates: t,
                isChannelSelected: s,
                shouldShowSettingNudge: n,
                isStandardGap: null != l,
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
                    className: a()(ee.Xs, n ? ee.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), (0, L.iN)(e.id);
                    },
                    "aria-label": Z.intl.string(Z.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: ee.gE }),
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
                unread: l,
                resolvedUnreadSetting: s,
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
            } = this.props,
            { shouldShowGuildVerificationPopout: R } = this.state,
            { enableUserHoverActivities: O } = (0, K.Uw)({ guildId: e.guild_id, location: "VoiceChannel" }),
            { standardPopoverGap: L } = (0, F.eP)({ guildId: e.guild_id, location: "VoiceChannel" }),
            D = y || j,
            G = this.getVoiceStatesCount(),
            U = (0, i.jsxs)("li", {
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
                        children: (0, i.jsx)(c.YNO, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: L ?? void 0,
                            shouldShow: R || (!O && this.state.shouldShowActivities && !u && !h),
                            children: () =>
                                (0, i.jsx)(d.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(z.Ay, {
                                        ref: this.channelItemRef,
                                        className: ee.Ki,
                                        iconClassName: a()({ [ee.Gj]: I || v || D }),
                                        hasActiveEvent: I,
                                        channel: e,
                                        selected: !S && t,
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
                                        connectDragPreview: g,
                                        isFavoriteSuggestion: S,
                                        "aria-label": (0, x.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            userCount: G,
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
                    this.renderVoiceUsers(),
                ],
            });
        return (
            f && (U = p(U)),
            _ && (U = A(m(U))),
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
let en = (0, A.a)((0, m.F)(et));
function ei(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: s,
            selected: a,
            collapsed: o,
            voiceStates: d,
        } = e,
        c = (0, r.cf)([k.Ay], () => ({ unread: k.Ay.hasUnread(n.id), mentionCount: k.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([G.A, P.A, w.A], () => {
            let e = G.A.getChannel(n.parent_id),
                i = P.A.getCheck(n.guild_id);
            return {
                canManageChannel: w.A.can(Q.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === $.V ||
                        (null != e ? w.A.can(Q.xBc.MANAGE_CHANNELS, e) : w.A.can(Q.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: w.A.can(Q.xBc.MOVE_MEMBERS, n),
                locked: !w.A.can(Q.xBc.CONNECT, n),
                bypassLimit: w.A.can(Q.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([B.A], () => B.A.hasVideo(n.id)),
        m = (0, p.Ay)(n),
        g = (0, E.Ay)(n),
        x = (0, y.Qs)(n.id),
        C = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, v.A)(n.id),
        S = (0, b.A)(),
        T = (0, r.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
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
        F = null != d && d.length > 0,
        K = U && F,
        W = H && F,
        z = (0, Y.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: d,
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
        ...c,
        ...h,
        ...e,
        connected: j,
        isFavoriteSuggestion: s && !T,
        forceShowButtons: q,
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
