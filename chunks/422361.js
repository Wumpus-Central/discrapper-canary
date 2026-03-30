"use strict";
n.d(t, { A: () => es });
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
    _ = n(685399),
    g = n(271683),
    p = n(186369),
    f = n(725613),
    x = n(963027),
    E = n(844262),
    C = n(47167),
    I = n(262763),
    N = n(5932),
    S = n(857253),
    b = n(202384),
    T = n(51758),
    v = n(721592),
    y = n(508654),
    j = n(214660),
    R = n(140547),
    O = n(303333),
    L = n(159426),
    M = n(824865),
    D = n(378570),
    G = n(728321),
    U = n(591346),
    P = n(734057),
    w = n(71393),
    k = n(834942),
    V = n(576705),
    B = n(222823),
    H = n(543465),
    F = n(977997),
    K = n(147036),
    W = n(557534),
    Y = n(68437),
    z = n(166444),
    q = n(850457),
    X = n(469178),
    Q = n(562991),
    J = n(588224);
n(281405);
var $ = n(652215),
    Z = n(349828),
    ee = n(985018),
    et = n(928409);
class en extends W.Ay {
    state = { popoutToShow: null, shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = s.createRef();
    channelItemRef = s.createRef();
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
            needSubscriptionToAccess: s,
            enableOpenTIVForPing: l,
            mentionCount: a,
            isSuggestedSection: r,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = l && a > 0;
        o && u.A.updateChatOpen(n.id, !0),
            I.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: s,
                routeDirectlyToChannel: o,
                locked: e,
                transitionExtras: r ? { source: M.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
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
        return (0, K.Pd)(e, F.A, w.A);
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
        return (0, i.jsx)(Q.A, {
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
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n } = this.props;
        return null != n && n.length > 0 ? (0, i.jsx)(O.A, { channel: e, isConnected: t }) : null;
    }
    renderPopout = () => {
        let { channel: e, sorting: t, isUserOver: n } = this.props,
            { popoutToShow: s, shouldShowGuildVerificationPopout: l } = this.state;
        return l
            ? (0, i.jsx)(j.A, { type: j.H.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : t || n
              ? null
              : "history" === s && this.getVoiceStatesCount() > 0
                ? (0, i.jsx)(q.A, {
                      channel: e,
                      source: "voice_channel",
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                  })
                : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: s } = this.props;
        if (!t)
            return (0, i.jsx)(c.m, {
                asContainer: !0,
                text: ee.intl.string(ee.t.ZXxLQg),
                children: (0, i.jsx)(d.DUT, {
                    className: a()(et.Xs, n ? et.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0),
                            (0, D.iN)(e.id, s ? { source: M.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": ee.intl.string(ee.t.ZXxLQg),
                    children: (0, i.jsx)(d.oyn, { size: "xs", color: "currentColor", className: et.gE }),
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
                unread: s,
                resolvedUnreadSetting: l,
                mentionCount: r,
                locked: o,
                sorting: u,
                isUserOver: h,
                connectChannelDropTarget: A,
                connectChannelDragSource: m,
                connectUserDropTarget: _,
                connectDragPreview: g,
                canReorderChannel: p,
                canMoveMembers: f,
                showTutorial: C,
                hasActiveEvent: I,
                embeddedApps: N,
                isSubscriptionGated: S,
                isFavoriteSuggestion: b,
                withGuildIcon: T,
                hasStartTime: v,
                shouldHighlightChannel: y,
                shouldUseAnimatedWaveform: j,
                voiceStates: R,
            } = this.props,
            { shouldShowGuildVerificationPopout: O } = this.state,
            { enableHistoryHover: L } = (0, U.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
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
                        children: (0, i.jsx)(d.YNO, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: O || ("history" === this.state.popoutToShow && !(u || h)),
                            children: () =>
                                (0, i.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(z.Ay, {
                                        ref: this.channelItemRef,
                                        className: et.Ki,
                                        iconClassName: a()({ [et.Gj]: I || v || M }),
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
                                            voiceStates: R,
                                            embeddedActivitiesCount: N.length,
                                            isSubscriptionGated: S,
                                        }),
                                        "aria-describedby": (0, E.A)({ channel: e, embeddedApps: N }),
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
                    this.renderHangoutWindow(),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            f && (D = _(D)),
            p && (D = A(m(D))),
            C &&
                (D = (0, i.jsx)(G.A, {
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
let ei = (0, A.a)((0, m.F)(en));
function es(e) {
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
                canManageChannel: V.A.can($.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === Z.Vc ||
                        (null != e ? V.A.can($.xBc.MANAGE_CHANNELS, e) : V.A.can($.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: V.A.can($.xBc.MOVE_MEMBERS, n),
                locked: !V.A.can($.xBc.CONNECT, n),
                bypassLimit: V.A.can($.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([F.A], () => F.A.hasVideo(n.id)),
        m = (0, _.Ay)(n),
        g = (0, C.Ay)(n),
        x = (0, y.Qs)(n.id),
        E = (0, r.bG)([f.A], () => null != f.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, v.A)(n.id),
        b = (0, S.A)(),
        T = (0, r.bG)([H.Ay], () => H.Ay.isFavorite(t.id, n.id)),
        j = e.connected || b?.channelId === n.id,
        { enableHangStatus: O, showEmptyChannelTopic: M } = (0, R.$j)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: D } = L.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: G, enableWaveformIcon: U } = (0, p.b)(t.id, "VoiceChannel"),
        w = null != c && c.length > 0,
        K = G && w,
        W = U && w,
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
    return (0, i.jsx)(ei, {
        channelName: g,
        embeddedApps: m,
        embeddedActivityType: $.$pd.PLAYING,
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
        hasStartTime: E,
        shouldHighlightChannel: K,
        shouldUseAnimatedWaveform: W,
    });
}
