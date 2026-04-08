n.d(t, { A: () => el });
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
    v = n(721592),
    y = n(508654),
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
    H = n(543465),
    F = n(977997),
    W = n(147036),
    K = n(557534),
    Y = n(68437),
    z = n(166444),
    q = n(850457),
    X = n(469178),
    $ = n(562991),
    J = n(588224);
n(281405);
var Q = n(652215),
    Z = n(349828),
    ee = n(985018),
    et = n(99566);
class en extends K.Ay {
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
        return (0, W.Pd)(e, F.A, k.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return et.ZS;
        if (null != t)
            if (e > t) return et.mU;
            else return et.TR;
        return et.fx;
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
        return (0, i.jsx)($.A, {
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
                text: ee.intl.string(ee.t.ZXxLQg),
                children: (0, i.jsx)(c.DUT, {
                    className: a()(et.Xs, n ? et.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0),
                            (0, D.iN)(e.id, l ? { source: M.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": ee.intl.string(ee.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: et.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: et.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ee.intl.string(ee.t.rZfiNq) : null;
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
                showTutorial: I,
                hasActiveEvent: C,
                embeddedApps: N,
                isSubscriptionGated: T,
                isFavoriteSuggestion: S,
                withGuildIcon: b,
                hasStartTime: v,
                shouldHighlightChannel: y,
                shouldUseAnimatedWaveform: j,
                voiceStates: R,
            } = this.props,
            { shouldShowGuildVerificationPopout: O } = this.state,
            { enableHistoryHover: L } = (0, G.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
            M = y || j,
            D = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [et.r9]: this.isDisabled(), [et.fy]: y }),
                "data-dnd-name": e.name,
                children: [
                    L && this.getVoiceStatesCount() > 0 && (0, i.jsx)(X.A, { channel: e }),
                    y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: et.UQ }),
                                (0, i.jsx)("div", { className: et.l0 }),
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
                            shouldShow: O || ("history" === this.state.popoutToShow && !(u || h)),
                            children: () =>
                                (0, i.jsx)(d.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(z.Ay, {
                                        ref: this.channelItemRef,
                                        className: et.Ki,
                                        iconClassName: a()({ [et.Gj]: C || v || M }),
                                        hasActiveEvent: C,
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
                                        connectDragPreview: p,
                                        isFavoriteSuggestion: S,
                                        "aria-label": (0, x.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: R,
                                            embeddedActivitiesCount: N.length,
                                            isSubscriptionGated: T,
                                        }),
                                        "aria-describedby": (0, E.A)({ channel: e, embeddedApps: N }),
                                        withGuildIcon: b,
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
            f && (D = m(D)),
            g && (D = A(_(D))),
            I &&
                (D = (0, i.jsx)(U.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: D,
                })),
            D
        );
    }
}
let ei = (0, A.a)((0, _.F)(en));
function el(e) {
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
        u = (0, r.bG)([H.Ay], () => H.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([P.A, w.A, B.A], () => {
            let e = P.A.getChannel(n.parent_id),
                i = w.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(Q.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === Z.Vc ||
                        (null != e ? B.A.can(Q.xBc.MANAGE_CHANNELS, e) : B.A.can(Q.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(Q.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(Q.xBc.CONNECT, n),
                bypassLimit: B.A.can(Q.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([F.A], () => F.A.hasVideo(n.id)),
        _ = (0, m.Ay)(n),
        p = (0, I.Ay)(n),
        x = (0, y.Qs)(n.id),
        E = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: C, needSubscriptionToAccess: N } = (0, v.A)(n.id),
        S = (0, T.A)(),
        b = (0, r.bG)([H.Ay], () => H.Ay.isFavorite(t.id, n.id)),
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
        W = U && k,
        K = G && k,
        z = (0, Y.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: d,
            isSubscriptionGated: C,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        q = j && null == z;
    return (0, i.jsx)(ei, {
        channelName: p,
        embeddedApps: _,
        embeddedActivityType: Q.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != x,
        isSubscriptionGated: C,
        needSubscriptionToAccess: N,
        ...c,
        ...h,
        ...e,
        connected: j,
        isFavoriteSuggestion: s && !b,
        forceShowButtons: q,
        channelInfo: z,
        resolvedUnreadSetting: u,
        enableHangStatus: O,
        showEmptyChannelTopic: M,
        enableOpenTIVForPing: D,
        hasChannelInfo: null != z,
        hasStartTime: E,
        shouldHighlightChannel: W,
        shouldUseAnimatedWaveform: K,
    });
}
