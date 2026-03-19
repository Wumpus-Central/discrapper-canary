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
    m = n(296216),
    g = n(685399),
    p = n(271683),
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
    U = n(591346),
    P = n(734057),
    w = n(71393),
    k = n(834942),
    V = n(576705),
    B = n(222823),
    H = n(543465),
    F = n(977997),
    K = n(147036),
    W = n(338234),
    Y = n(557534),
    z = n(68437),
    q = n(166444),
    X = n(439282),
    J = n(850457),
    Q = n(469178),
    $ = n(562991),
    Z = n(588224);
n(281405);
var ee = n(652215),
    et = n(349828),
    en = n(985018),
    ei = n(719550);
class es extends Y.Ay {
    state = { popoutToShow: null, shouldShowGuildVerificationPopout: !1, hovered: !1 };
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
            s = w.A.getGuild(t.getGuildId());
        null != s &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("30997")]).then(
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
            { enableHistoryHover: t } = (0, U.NH)({ guildId: this.props.channel.guild_id, location: "VoiceChannel" }),
            n = this.getVoiceStatesCount(),
            i = null;
        t && n > 0 ? (i = "history") : e || (i = "activities"),
            this.activitiesHideTimeout.stop(),
            this.setState({ hovered: !0, popoutToShow: i });
    };
    handleMouseLeave = () => {
        this.activitiesHideTimeout.start(100, () => this.setState({ popoutToShow: null, hovered: !1 }));
    };
    closePopout = () => {
        this.activitiesHideTimeout.stop(), this.setState({ popoutToShow: null });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, K.Pd)(e, F.A, w.A);
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
        null != t && (0, T.V)(t) && (0, S.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, p.A)({ channel: n }));
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
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n } = this.props;
        return null != n && n.length > 0 ? (0, i.jsx)(O.A, { channel: e, isConnected: t }) : null;
    }
    renderPopout = () => {
        let { channel: e, voiceStates: t, sorting: n, isUserOver: s, selected: l, guild: a } = this.props,
            { popoutToShow: r, shouldShowGuildVerificationPopout: o } = this.state,
            { enableUserHoverActivities: c } = (0, W.Uw)({ guildId: e.guild_id, location: "VoiceChannel" });
        if (o)
            return (0, i.jsx)(j.A, {
                type: j.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        if (n || s) return null;
        if ("history" === r) {
            let t = this.getVoiceStatesCount();
            if (t > 0) return (0, i.jsx)(J.A, { channel: e, isChannelSelected: l, voiceStatesCount: t });
        }
        if (!c && "activities" === r) {
            let n = G.JG.getSetting().includes(a.id);
            return (0, i.jsx)(X.A, {
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
                text: en.intl.string(en.t.ZXxLQg),
                children: (0, i.jsx)(d.DUT, {
                    className: a()(ei.Xs, n ? ei.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), (0, M.iN)(e.id);
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
                connectChannelDragSource: m,
                connectUserDropTarget: g,
                connectDragPreview: p,
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
            { enableUserHoverActivities: L } = (0, W.Uw)({ guildId: e.guild_id, location: "VoiceChannel" }),
            { enableHistoryHover: M } = (0, U.NH)({
                guildId: e.guild_id,
                location: "VoiceChannel",
                autoTrackExposure: !1,
            }),
            G = y || j,
            P = u || h,
            w = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [ei.r9]: this.isDisabled(), [ei.fy]: y }),
                "data-dnd-name": e.name,
                children: [
                    M && this.getVoiceStatesCount() > 0 && (0, i.jsx)(Q.A, { channel: e }),
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
                            spacing: 17,
                            shouldShow:
                                O ||
                                ("history" === this.state.popoutToShow && !P) ||
                                (!L && "activities" === this.state.popoutToShow && !P),
                            children: () =>
                                (0, i.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(q.Ay, {
                                        ref: this.channelItemRef,
                                        className: ei.Ki,
                                        iconClassName: a()({ [ei.Gj]: I || v || G }),
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
                                        connectDragPreview: p,
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
            f && (w = g(w)),
            _ && (w = A(m(w))),
            E &&
                (w = (0, i.jsx)(D.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: w,
                })),
            w
        );
    }
}
let el = (0, A.a)((0, m.F)(es));
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
        d = (0, r.cf)([B.Ay], () => ({ unread: B.Ay.hasUnread(n.id), mentionCount: B.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([H.Ay], () => H.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([P.A, k.A, V.A], () => {
            let e = P.A.getChannel(n.parent_id),
                i = k.A.getCheck(n.guild_id);
            return {
                canManageChannel: V.A.can(ee.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === et.Vc ||
                        (null != e ? V.A.can(ee.xBc.MANAGE_CHANNELS, e) : V.A.can(ee.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: V.A.can(ee.xBc.MOVE_MEMBERS, n),
                locked: !V.A.can(ee.xBc.CONNECT, n),
                bypassLimit: V.A.can(ee.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([F.A], () => F.A.hasVideo(n.id)),
        m = (0, g.Ay)(n),
        p = (0, E.Ay)(n),
        x = (0, y.Qs)(n.id),
        C = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, v.A)(n.id),
        S = (0, b.A)(),
        T = (0, r.bG)([H.Ay], () => H.Ay.isFavorite(t.id, n.id)),
        j = e.connected || S?.channelId === n.id,
        { enableHangStatus: O, showEmptyChannelTopic: M } = (0, R.$j)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: D } = L.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: G, enableWaveformIcon: U } = (0, _.b)(t.id, "VoiceChannel"),
        w = null != c && c.length > 0,
        K = G && w,
        W = U && w,
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
        channelName: p,
        embeddedApps: m,
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
        enableHangStatus: O,
        showEmptyChannelTopic: M,
        enableOpenTIVForPing: D,
        hasChannelInfo: null != Y,
        hasStartTime: C,
        shouldHighlightChannel: K,
        shouldUseAnimatedWaveform: W,
    });
}
