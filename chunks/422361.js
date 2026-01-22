n.d(t, {
    A: () => el,
}),
    n(896048),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    c = n(990078),
    u = n(397927),
    d = n(367513),
    f = n(442433),
    p = n(676002),
    h = n(296216),
    b = n(685399),
    g = n(271683),
    m = n(186369),
    A = n(725613),
    y = n(963027),
    O = n(844262),
    j = n(47167),
    v = n(262763),
    x = n(5932),
    E = n(857253),
    _ = n(202384),
    C = n(51758),
    S = n(721592),
    I = n(508654),
    N = n(214660),
    T = n(140547),
    P = n(159426),
    w = n(378570),
    R = n(728321),
    D = n(253932),
    M = n(734057),
    L = n(71393),
    G = n(834942),
    k = n(576705),
    U = n(222823),
    V = n(543465),
    F = n(977997),
    H = n(147036),
    B = n(557534),
    K = n(68437),
    W = n(166444),
    z = n(439282),
    Y = n(562991),
    q = n(588224),
    X = n(652215),
    J = n(349828),
    Q = n(985018),
    Z = n(728444);

function $(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                $(e, t, n[t]);
            });
    }
    return e;
}

function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class en extends B.Ay {
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
    }
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, H.Pd)(e, F.A, L.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return Z.ZS;
        if (null != t)
            if (e > t) return Z.mU;
            else return Z.TR;
        return Z.fx;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, showEmptyChannelTopic: l } = this.props,
            i = null == (e = (0, x.M)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: a } = this.state;
        return (0, r.jsx)(Y.A, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: a,
            showEmptyChannelTopic: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, r.jsx)(q.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: i,
            location: X.ThZ.GUILD_CHANNEL_LIST,
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)("div", {
                  className: Z.yW,
                  children: e,
              });
    }
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: l,
                resolvedUnreadSetting: i,
                mentionCount: s,
                locked: o,
                sorting: d,
                isUserOver: f,
                connectChannelDropTarget: p,
                connectChannelDragSource: h,
                connectUserDropTarget: b,
                connectDragPreview: g,
                canReorderChannel: m,
                canMoveMembers: A,
                showTutorial: j,
                hasActiveEvent: v,
                embeddedApps: x,
                isSubscriptionGated: E,
                isFavoriteSuggestion: _,
                withGuildIcon: C,
                hasStartTime: S,
                shouldHighlightChannel: I,
                shouldUseAnimatedWaveform: N,
            } = this.props,
            { shouldShowActivities: T, shouldShowGuildVerificationPopout: P } = this.state,
            w = I || N,
            D = this.getVoiceStatesCount(),
            M = (0, r.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), {
                    [Z.r9]: this.isDisabled(),
                    [Z.fy]: I,
                }),
                "data-dnd-name": e.name,
                children: [
                    I &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    className: Z.UQ,
                                }),
                                (0, r.jsx)("div", {
                                    className: Z.l0,
                                }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(u.YNO, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (T && !d && !f && !P) || P,
                            children: () =>
                                (0, r.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, r.jsxs)(W.Ay, {
                                        ref: this.channelItemRef,
                                        className: Z.Ki,
                                        iconClassName: a()({
                                            [Z.Gj]: v || S || w,
                                        }),
                                        hasActiveEvent: v,
                                        channel: e,
                                        selected: !_ && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: i,
                                        mentionCount: s,
                                        locked: o,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: g,
                                        isFavoriteSuggestion: _,
                                        "aria-label": (0, y.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: s,
                                            userCount: D,
                                            embeddedActivitiesCount: x.length,
                                            isSubscriptionGated: E,
                                        }),
                                        "aria-describedby": (0, O.A)({
                                            channel: e,
                                            embeddedApps: x,
                                        }),
                                        withGuildIcon: C,
                                        children: [
                                            _ &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !_ &&
                                                (0, r.jsxs)(r.Fragment, {
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
            A && (M = b(M)),
            m && (M = p(h(M))),
            j &&
                (M = (0, r.jsx)(R.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: M,
                })),
            M
        );
    }
    constructor(...e) {
        super(...e),
            $(this, "state", {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1,
            }),
            $(this, "ref", l.createRef()),
            $(this, "channelItemRef", l.createRef()),
            $(this, "activitiesHideTimeout", new o.Ep()),
            $(this, "closeGuildVerificationPopout", () => {
                this.setState({
                    shouldShowGuildVerificationPopout: !1,
                });
            }),
            $(this, "handleVoiceConnect", () => {
                let {
                    locked: e,
                    connected: t,
                    channel: n,
                    unverifiedAccount: r,
                    needSubscriptionToAccess: l,
                    enableOpenTIVForPing: i,
                    mentionCount: a,
                } = this.props;
                r &&
                    this.setState({
                        shouldShowGuildVerificationPopout: !0,
                    });
                let s = i && a > 0;
                s && d.A.updateChatOpen(n.id, !0),
                    v.A.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        routeDirectlyToChannel: s,
                        locked: e,
                    });
            }),
            $(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    l = L.A.getGuild(t.getGuildId());
                null != l &&
                    (0, f.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97262"),
                            n.e("57287"),
                            n.e("40394"),
                            n.e("53378"),
                        ]).then(n.bind(n, 698193));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                et(ee({}, n), {
                                    channel: t,
                                    guild: l,
                                }),
                            );
                    });
            }),
            $(this, "handleMouseEnter", () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0,
                    });
            }),
            $(this, "handleMouseLeave", () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1,
                    }),
                );
            }),
            $(this, "closePopout", () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !1,
                    });
            }),
            $(this, "handleClick", () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, C.V)(t) && (0, _.Ze)(t), this.handleVoiceConnect();
            }),
            $(this, "handleVoiceStatusClick", (e) => {
                let { connected: t, channel: n } = this.props;
                t &&
                    (e.stopPropagation(),
                    (0, g.A)({
                        channel: n,
                    }));
            }),
            $(this, "renderPopout", () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: i, guild: a } = this.props,
                    { shouldShowActivities: s, shouldShowGuildVerificationPopout: o } = this.state;
                if (s && !n && !l && !o) {
                    let n = D.JG.getSetting().includes(a.id);
                    return (0, r.jsx)(z.A, {
                        onAction: this.closePopout,
                        guild: a,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: i,
                        shouldShowSettingNudge: n,
                    });
                }
                if (o)
                    return (0, r.jsx)(N.A, {
                        type: N.H.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                throw Error("VoiceChannel.renderPopout: There must always be something to render");
            }),
            $(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.m, {
                        asContainer: !0,
                        text: Q.intl.string(Q.t.ZXxLQg),
                        children: (0, r.jsx)(u.DUT, {
                            className: a()(Z.Xs, n ? Z.Tf : null),
                            onClick: () => {
                                d.A.updateChatOpen(e.id, !0), (0, w.iN)(e.id);
                            },
                            "aria-label": Q.intl.string(Q.t.ZXxLQg),
                            children: (0, r.jsx)(u.oyn, {
                                size: "xs",
                                color: "currentColor",
                                className: Z.gE,
                            }),
                        }),
                    });
            }),
            $(this, "getTooltipText", () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNq) : null;
            });
    }
}
let er = (0, p.a)((0, h.F)(en));

function el(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: a,
            collapsed: o,
            voiceStates: c,
        } = e,
        u = (0, s.cf)([U.Ay], () => ({
            unread: U.Ay.hasUnread(n.id),
            mentionCount: U.Ay.getMentionCount(n.id),
        })),
        d = (0, s.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        f = (0, s.cf)([M.A, G.A, k.A], () => {
            let e = M.A.getChannel(n.parent_id),
                r = G.A.getCheck(n.guild_id);
            return {
                canManageChannel: k.A.can(X.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === J.V ||
                        (null != e ? k.A.can(X.xBc.MANAGE_CHANNELS, e) : k.A.can(X.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: k.A.can(X.xBc.MOVE_MEMBERS, n),
                locked: !k.A.can(X.xBc.CONNECT, n),
                bypassLimit: k.A.can(X.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        p = (0, s.bG)([F.A], () => F.A.hasVideo(n.id)),
        h = (0, b.Ay)(n),
        g = (0, j.Ay)(n),
        y = (0, I.Qs)(n.id),
        O = (0, s.bG)([A.A], () => null != A.A.getStartTime(n), [n]),
        { isSubscriptionGated: v, needSubscriptionToAccess: x } = (0, S.A)(n.id),
        _ = (0, E.A)(),
        C = (0, s.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        N = e.connected || (null == _ ? void 0 : _.channelId) === n.id,
        { enableHangStatus: w, showEmptyChannelTopic: R } = (0, T.$j)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: D } = P.m.useExperiment(
            {
                guildId: n.guild_id,
                location: "VoiceChannel",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { enableHighlight: L, enableWaveformIcon: H } = (0, m.b)(t.id, "VoiceChannel"),
        B = null != c && c.length > 0,
        W = L && B,
        z = H && B,
        Y = (0, K.A)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: v,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        q = N && null == Y;
    return (0, r.jsx)(
        er,
        et(
            ee(
                {
                    channelName: g,
                    embeddedApps: h,
                    embeddedActivityType: X.$pd.PLAYING,
                    video: p,
                    hasActiveEvent: null != y,
                    isSubscriptionGated: v,
                    needSubscriptionToAccess: x,
                },
                u,
                f,
                e,
            ),
            {
                connected: N,
                isFavoriteSuggestion: i && !C,
                forceShowButtons: q,
                channelInfo: Y,
                resolvedUnreadSetting: d,
                enableHangStatus: w,
                showEmptyChannelTopic: R,
                enableOpenTIVForPing: D,
                hasChannelInfo: null != Y,
                hasStartTime: O,
                shouldHighlightChannel: W,
                shouldUseAnimatedWaveform: z,
            },
        ),
    );
}
