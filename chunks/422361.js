n.d(t, { A: () => er });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(451988),
    d = n(990078),
    c = n(939249),
    u = n(534890),
    h = n(265872),
    A = n(367513),
    _ = n(442433),
    m = n(676002),
    g = n(296216),
    p = n(685399),
    f = n(271683),
    E = n(186369),
    x = n(725613),
    I = n(963027),
    C = n(844262),
    b = n(47167),
    N = n(262763),
    S = n(5932),
    v = n(857253),
    T = n(202384),
    y = n(51758),
    R = n(721592),
    j = n(508654),
    L = n(214660),
    O = n(303333),
    G = n(159426),
    D = n(824865),
    M = n(378570),
    U = n(728321),
    P = n(591346),
    w = n(734057),
    k = n(71393),
    V = n(834942),
    B = n(576705),
    H = n(222823),
    F = n(994500),
    W = n(543465),
    Y = n(287809),
    K = n(977997),
    z = n(147036),
    q = n(557534),
    X = n(68437),
    Q = n(166444),
    J = n(850457),
    Z = n(469178),
    $ = n(562991),
    ee = n(588224);
n(281405);
var et = n(652215),
    en = n(349828),
    ei = n(985018),
    el = n(907305);
class es extends q.Ay {
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
        o && A.A.updateChatOpen(n.id, !0),
            N.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o,
                locked: e,
                transitionExtras: r ? { source: D.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = k.A.getGuild(t.getGuildId());
        null != l &&
            (0, _.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("2381"), n.e("40394"), n.e("53378")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleMouseEnter = () => {
        this.activitiesHoverTimeout.stop(), this.setState({ hovered: !0 });
        let { enableHistoryHover: e } = (0, P.NH)({ guildId: this.props.channel.guild_id, location: "VoiceChannel" });
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
        return (0, z.Pd)(e, K.A, k.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return el.ZS;
        if (null != t)
            if (e > t) return el.mU;
            else return el.TR;
        return el.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, y.V)(t) && (0, T.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, f.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = (0, S.M)(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, i.jsx)($.A, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: s } = this.props;
        return (0, i.jsx)(ee.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: s,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: l } = this.props;
        return !(null != n && n.length > 0) || l ? null : (0, i.jsx)(O.A, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e, sorting: t, isUserOver: n } = this.props,
            { popoutToShow: l, shouldShowGuildVerificationPopout: s } = this.state;
        return s
            ? (0, i.jsx)(L.A, { type: L.H.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : t || n
              ? null
              : "history" === l && this.getVoiceStatesCount() > 0
                ? (0, i.jsx)(J.A, {
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
                text: ei.intl.string(ei.t.ZXxLQg),
                children: (0, i.jsx)(c.D, {
                    className: a()(el.Xs, n ? el.Tf : null),
                    onClick: () => {
                        A.A.updateChatOpen(e.id, !0),
                            (0, M.iN)(e.id, l ? { source: D.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": ei.intl.string(ei.t.ZXxLQg),
                    children: (0, i.jsx)(u.o, { size: "xs", color: "currentColor", className: el.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: el.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ei.intl.string(ei.t.rZfiNq) : null;
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
                sorting: c,
                isUserOver: u,
                connectChannelDropTarget: A,
                connectChannelDragSource: _,
                connectUserDropTarget: m,
                connectDragPreview: g,
                canReorderChannel: p,
                canMoveMembers: f,
                showTutorial: E,
                hasActiveEvent: x,
                embeddedApps: N,
                isSubscriptionGated: S,
                isFavoriteSuggestion: v,
                withGuildIcon: T,
                hasStartTime: y,
                shouldHighlightChannel: R,
                shouldUseAnimatedWaveform: j,
                voiceStates: L,
            } = this.props,
            { shouldShowGuildVerificationPopout: O } = this.state,
            { enableHistoryHover: G } = (0, P.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
            D = R || j,
            M = (0, i.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), { [el.r9]: this.isDisabled(), [el.fy]: R }),
                "data-dnd-name": (0, b.m1)(e, Y.default, F.A),
                children: [
                    G && this.getVoiceStatesCount() > 0 && (0, i.jsx)(Z.A, { channel: e }),
                    R &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: el.UQ }),
                                (0, i.jsx)("div", { className: el.l0 }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(h.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: O || ("history" === this.state.popoutToShow && !(c || u)),
                            children: () =>
                                (0, i.jsx)(d.m, {
                                    text: this.getTooltipText(),
                                    children: (0, i.jsxs)(Q.Ay, {
                                        ref: this.channelItemRef,
                                        className: el.Ki,
                                        iconClassName: a()({ [el.Gj]: x || y || D }),
                                        hasActiveEvent: x,
                                        channel: e,
                                        selected: !v && t,
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
                                        isFavoriteSuggestion: v,
                                        "aria-label": (0, I.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: L,
                                            embeddedActivitiesCount: N.length,
                                            isSubscriptionGated: S,
                                        }),
                                        "aria-describedby": (0, C.A)({ channel: e, embeddedApps: N }),
                                        withGuildIcon: T,
                                        children: [
                                            v &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !v &&
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
            f && (M = m(M)),
            p && (M = A(_(M))),
            E &&
                (M = (0, i.jsx)(U.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: M,
                })),
            M
        );
    }
}
let ea = (0, m.a)((0, g.F)(es));
function er(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: s,
            selected: a,
            collapsed: o,
            voiceStates: d,
        } = e,
        c = (0, r.cf)([H.Ay], () => ({ unread: H.Ay.hasUnread(n.id), mentionCount: H.Ay.getMentionCount(n.id) })),
        u = (0, r.bG)([W.Ay], () => W.Ay.resolveUnreadSetting(n)),
        h = (0, r.cf)([w.A, V.A, B.A], () => {
            let e = w.A.getChannel(n.parent_id),
                i = V.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(et.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === en.Vc ||
                        (null != e ? B.A.can(et.xBc.MANAGE_CHANNELS, e) : B.A.can(et.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(et.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(et.xBc.CONNECT, n),
                bypassLimit: B.A.can(et.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, r.bG)([K.A], () => K.A.hasVideo(n.id)),
        _ = (0, p.Ay)(n),
        m = (0, b.Ay)(n),
        g = (0, j.Qs)(n.id),
        f = (0, r.bG)([x.A], () => null != x.A.getStartTime(n), [n]),
        { isSubscriptionGated: I, needSubscriptionToAccess: C } = (0, R.A)(n.id),
        N = (0, v.A)(),
        S = (0, r.bG)([W.Ay], () => W.Ay.isFavorite(t.id, n.id)),
        T = e.connected || N?.channelId === n.id,
        { enableOpenTIVForPing: y } = G.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: L, enableWaveformIcon: O } = (0, E.b)(t.id, "VoiceChannel"),
        D = null != d && d.length > 0,
        M = L && D,
        U = O && D,
        P = (0, X.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: d,
            isSubscriptionGated: I,
            needSubscriptionToAccess: C,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        k = T && null == P;
    return (0, i.jsx)(ea, {
        channelName: m,
        embeddedApps: _,
        embeddedActivityType: et.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != g,
        isSubscriptionGated: I,
        needSubscriptionToAccess: C,
        ...c,
        ...h,
        ...e,
        connected: T,
        isFavoriteSuggestion: s && !S,
        forceShowButtons: k,
        channelInfo: P,
        resolvedUnreadSetting: u,
        enableOpenTIVForPing: y,
        hasChannelInfo: null != P,
        hasStartTime: f,
        shouldHighlightChannel: M,
        shouldUseAnimatedWaveform: U,
    });
}
