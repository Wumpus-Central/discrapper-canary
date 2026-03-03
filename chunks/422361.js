"use strict";
n.d(t, { A: () => ea });
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
    p = n(296216),
    m = n(685399),
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
    F = n(644836),
    K = n(376947),
    W = n(338234),
    Y = n(557534),
    z = n(68437),
    q = n(166444),
    X = n(439282),
    J = n(850457),
    Q = n(469178),
    $ = n(562991),
    Z = n(588224),
    ee = n(652215),
    et = n(349828),
    en = n(985018),
    ei = n(728444);
class es extends Y.Ay {
    state = { shouldShowActivities: !1, shouldShowGuildVerificationPopout: !1, hovered: !1, shouldShowHistory: !1 };
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
        let { enableUserHoverActivities: e } = (0, W.Uw)({
                guildId: this.props.channel.guild_id,
                location: "VoiceChannel",
            }),
            { enableHistoryHover: t } = (0, K.NH)({ guildId: this.props.channel.guild_id, location: "VoiceChannel" }),
            n = this.getVoiceStatesCount();
        this.activitiesHideTimeout.stop(),
            this.setState({ hovered: !0, shouldShowActivities: !e, shouldShowHistory: t && n > 0 });
    };
    handleMouseLeave = () => {
        let { enableUserHoverActivities: e } = (0, W.Uw)({
            guildId: this.props.channel.guild_id,
            location: "VoiceChannel",
        });
        e
            ? this.activitiesHideTimeout.start(100, () => this.setState({ hovered: !1, shouldShowHistory: !1 }))
            : this.activitiesHideTimeout.start(100, () =>
                  this.setState({ shouldShowActivities: !1, hovered: !1, shouldShowHistory: !1 }),
              );
    };
    handlePopoutMouseEnter = () => {
        this.activitiesHideTimeout.stop(), this.setState({ shouldShowHistory: !0 });
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
        if (n) return ei.ZS;
        if (null != t)
            if (e > t) return ei.mU;
            else return ei.TR;
        return ei.fx;
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
        return (0, i.jsx)($.A, {
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
        return (0, i.jsx)(Z.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: s,
            tabIndex: l,
            location: ee.ThZ.GUILD_CHANNEL_LIST,
        });
    }
    renderPopout = () => {
        let { channel: e, voiceStates: t, sorting: n, isUserOver: s, selected: l, guild: a } = this.props,
            { shouldShowActivities: r, shouldShowGuildVerificationPopout: o, shouldShowHistory: c } = this.state,
            { enableUserHoverActivities: d } = (0, W.Uw)({ guildId: e.guild_id, location: "VoiceChannel" });
        if (o)
            return (0, i.jsx)(j.A, {
                type: j.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        if (c && !n && !s) {
            let { standardPopoverGap: t } = (0, F.eP)({ guildId: e.guild_id, location: "VoiceChannel" }),
                n = this.getVoiceStatesCount();
            if (n > 0)
                return (0, i.jsx)("div", {
                    onMouseEnter: this.handlePopoutMouseEnter,
                    children: (0, i.jsx)(J.A, {
                        channel: e,
                        isChannelSelected: l,
                        voiceStatesCount: n,
                        isStandardGap: null != t,
                    }),
                });
        }
        if (!d && r && !n && !s) {
            let n = D.JG.getSetting().includes(a.id),
                { standardPopoverGap: s } = (0, F.eP)({ guildId: e.guild_id, location: "VoiceChannel" });
            return (0, i.jsx)(X.A, {
                onAction: this.closePopout,
                guild: a,
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
                text: en.intl.string(en.t.ZXxLQg),
                children: (0, i.jsx)(d.DUT, {
                    className: a()(ei.Xs, n ? ei.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), (0, L.iN)(e.id);
                    },
                    "aria-label": en.intl.string(en.t.ZXxLQg),
                    children: (0, i.jsx)(d.oyn, { size: "xs", color: "currentColor", className: ei.gE }),
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
                unread: s,
                resolvedUnreadSetting: l,
                mentionCount: r,
                locked: o,
                sorting: u,
                isUserOver: h,
                connectChannelDropTarget: A,
                connectChannelDragSource: p,
                connectUserDropTarget: m,
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
            { enableUserHoverActivities: O } = (0, W.Uw)({ guildId: e.guild_id, location: "VoiceChannel" }),
            { standardPopoverGap: L } = (0, F.eP)({ guildId: e.guild_id, location: "VoiceChannel" }),
            D = y || j,
            G = this.getVoiceStatesCount(),
            U = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [ei.r9]: this.isDisabled(), [ei.fy]: y }),
                "data-dnd-name": e.name,
                children: [
                    (0, i.jsx)(Q.A, { channel: e }),
                    y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: ei.UQ }),
                                (0, i.jsx)("div", { className: ei.l0 }),
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
                            shouldShow:
                                R ||
                                (this.state.shouldShowHistory && !u && !h) ||
                                (!O && this.state.shouldShowActivities && !u && !h),
                            children: () =>
                                (0, i.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(q.Ay, {
                                        ref: this.channelItemRef,
                                        className: ei.Ki,
                                        iconClassName: a()({ [ei.Gj]: I || v || D }),
                                        hasActiveEvent: I,
                                        channel: e,
                                        selected: !b && t,
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
                                        isFavoriteSuggestion: b,
                                        "aria-label": (0, x.Ay)({
                                            channel: e,
                                            unread: s,
                                            mentionCount: r,
                                            userCount: G,
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
            f && (U = m(U)),
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
let el = (0, A.a)((0, p.F)(es));
function ea(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: s,
            isFavoriteCategory: l,
            selected: a,
            collapsed: o,
            voiceStates: c,
        } = e,
        d = (0, r.cf)([k.Ay], () => ({ unread: k.Ay.hasUnread(n.id), mentionCount: k.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([G.A, P.A, w.A], () => {
            let e = G.A.getChannel(n.parent_id),
                i = P.A.getCheck(n.guild_id);
            return {
                canManageChannel: w.A.can(ee.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === et.Vc ||
                        (null != e ? w.A.can(ee.xBc.MANAGE_CHANNELS, e) : w.A.can(ee.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: w.A.can(ee.xBc.MOVE_MEMBERS, n),
                locked: !w.A.can(ee.xBc.CONNECT, n),
                bypassLimit: w.A.can(ee.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([B.A], () => B.A.hasVideo(n.id)),
        p = (0, m.Ay)(n),
        g = (0, E.Ay)(n),
        x = (0, y.Qs)(n.id),
        C = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, v.A)(n.id),
        b = (0, S.A)(),
        T = (0, r.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
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
        W = H && F,
        Y = (0, z.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: I,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        q = j && null == Y;
    return (0, i.jsx)(el, {
        channelName: g,
        embeddedApps: p,
        embeddedActivityType: ee.$pd.PLAYING,
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
        channelInfo: Y,
        resolvedUnreadSetting: u,
        enableHangStatus: L,
        showEmptyChannelTopic: M,
        enableOpenTIVForPing: D,
        hasChannelInfo: null != Y,
        hasStartTime: C,
        shouldHighlightChannel: K,
        shouldUseAnimatedWaveform: W,
    });
}
