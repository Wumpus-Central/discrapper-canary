n.d(t, {
    A: () => ei,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(451988),
    c = n(990078),
    u = n(397927),
    d = n(367513),
    p = n(442433),
    h = n(676002),
    f = n(296216),
    g = n(685399),
    m = n(271683),
    b = n(186369),
    A = n(725613),
    y = n(963027),
    _ = n(844262),
    O = n(47167),
    j = n(262763),
    v = n(5932),
    x = n(857253),
    E = n(202384),
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
    k = n(834942),
    G = n(576705),
    U = n(222823),
    B = n(543465),
    V = n(977997),
    F = n(147036),
    H = n(338234),
    K = n(557534),
    W = n(68437),
    z = n(166444),
    Y = n(439282),
    q = n(562991),
    X = n(588224),
    J = n(652215),
    Q = n(349828),
    Z = n(985018),
    $ = n(728444);

function ee(e, t, n) {
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

function et(e) {
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
                ee(e, t, n[t]);
            });
    }
    return e;
}

function en(e, t) {
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
class er extends K.Ay {
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
        return (0, F.Pd)(e, V.A, L.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return $.ZS;
        if (null != t)
            if (e > t) return $.mU;
            else return $.TR;
        return $.fx;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, showEmptyChannelTopic: l } = this.props,
            i = null == (e = (0, v.M)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: s } = this.state;
        return (0, r.jsx)(q.A, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: s,
            showEmptyChannelTopic: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, r.jsx)(X.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: i,
            location: J.ThZ.GUILD_CHANNEL_LIST,
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)("div", {
                  className: $.yW,
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
                mentionCount: a,
                locked: o,
                sorting: d,
                isUserOver: p,
                connectChannelDropTarget: h,
                connectChannelDragSource: f,
                connectUserDropTarget: g,
                connectDragPreview: m,
                canReorderChannel: b,
                canMoveMembers: A,
                showTutorial: O,
                hasActiveEvent: j,
                embeddedApps: v,
                isSubscriptionGated: x,
                isFavoriteSuggestion: E,
                withGuildIcon: C,
                hasStartTime: S,
                shouldHighlightChannel: I,
                shouldUseAnimatedWaveform: N,
            } = this.props,
            { shouldShowGuildVerificationPopout: T } = this.state,
            { enableUserHoverActivities: P } = (0, H.Uw)({
                guildId: e.guild_id,
                location: "VoiceChannel",
            }),
            w = I || N,
            D = this.getVoiceStatesCount(),
            M = (0, r.jsxs)("li", {
                ref: this.ref,
                className: s()(this.getModeClass(), {
                    [$.r9]: this.isDisabled(),
                    [$.fy]: I,
                }),
                "data-dnd-name": e.name,
                children: [
                    I &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    className: $.UQ,
                                }),
                                (0, r.jsx)("div", {
                                    className: $.l0,
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
                            shouldShow: T || (!P && this.state.shouldShowActivities && !d && !p),
                            children: () =>
                                (0, r.jsx)(c.m, {
                                    text: this.getTooltipText(),
                                    children: (0, r.jsxs)(z.Ay, {
                                        ref: this.channelItemRef,
                                        className: $.Ki,
                                        iconClassName: s()({
                                            [$.Gj]: j || S || w,
                                        }),
                                        hasActiveEvent: j,
                                        channel: e,
                                        selected: !E && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: i,
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
                                        isFavoriteSuggestion: E,
                                        "aria-label": (0, y.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: a,
                                            userCount: D,
                                            embeddedActivitiesCount: v.length,
                                            isSubscriptionGated: x,
                                        }),
                                        "aria-describedby": (0, _.A)({
                                            channel: e,
                                            embeddedApps: v,
                                        }),
                                        withGuildIcon: C,
                                        children: [
                                            E &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !E &&
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
            A && (M = g(M)),
            b && (M = h(f(M))),
            O &&
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
            ee(this, "state", {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1,
            }),
            ee(this, "ref", l.createRef()),
            ee(this, "channelItemRef", l.createRef()),
            ee(this, "activitiesHideTimeout", new o.Ep()),
            ee(this, "closeGuildVerificationPopout", () => {
                this.setState({
                    shouldShowGuildVerificationPopout: !1,
                });
            }),
            ee(this, "handleVoiceConnect", () => {
                let {
                    locked: e,
                    connected: t,
                    channel: n,
                    unverifiedAccount: r,
                    needSubscriptionToAccess: l,
                    enableOpenTIVForPing: i,
                    mentionCount: s,
                } = this.props;
                r &&
                    this.setState({
                        shouldShowGuildVerificationPopout: !0,
                    });
                let a = i && s > 0;
                a && d.A.updateChatOpen(n.id, !0),
                    j.A.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        routeDirectlyToChannel: a,
                        locked: e,
                    });
            }),
            ee(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    l = L.A.getGuild(t.getGuildId());
                null != l &&
                    (0, p.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97262"),
                            n.e("57287"),
                            n.e("40394"),
                            n.e("53378"),
                        ]).then(n.bind(n, 698193));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                en(et({}, n), {
                                    channel: t,
                                    guild: l,
                                }),
                            );
                    });
            }),
            ee(this, "handleMouseEnter", () => {
                let { enableUserHoverActivities: e } = (0, H.Uw)({
                    guildId: this.props.channel.guild_id,
                    location: "VoiceChannel",
                });
                e
                    ? this.setState({
                          hovered: !0,
                      })
                    : (this.activitiesHideTimeout.stop(),
                      this.setState({
                          shouldShowActivities: !0,
                          hovered: !0,
                      }));
            }),
            ee(this, "handleMouseLeave", () => {
                let { enableUserHoverActivities: e } = (0, H.Uw)({
                    guildId: this.props.channel.guild_id,
                    location: "VoiceChannel",
                });
                e
                    ? this.setState({
                          hovered: !1,
                      })
                    : this.activitiesHideTimeout.start(100, () =>
                          this.setState({
                              shouldShowActivities: !1,
                              hovered: !1,
                          }),
                      );
            }),
            ee(this, "closePopout", () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !1,
                    });
            }),
            ee(this, "handleClick", () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, C.V)(t) && (0, E.Ze)(t), this.handleVoiceConnect();
            }),
            ee(this, "handleVoiceStatusClick", (e) => {
                let { connected: t, channel: n } = this.props;
                t &&
                    (e.stopPropagation(),
                    (0, m.A)({
                        channel: n,
                    }));
            }),
            ee(this, "renderPopout", () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: i, guild: s } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: o } = this.state,
                    { enableUserHoverActivities: c } = (0, H.Uw)({
                        guildId: e.guild_id,
                        location: "VoiceChannel",
                    });
                if (o)
                    return (0, r.jsx)(N.A, {
                        type: N.H.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                if (!c && a && !n && !l) {
                    let n = D.JG.getSetting().includes(s.id);
                    return (0, r.jsx)(Y.A, {
                        onAction: this.closePopout,
                        guild: s,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: i,
                        shouldShowSettingNudge: n,
                    });
                }
                return null;
            }),
            ee(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.m, {
                        asContainer: !0,
                        text: Z.intl.string(Z.t.ZXxLQg),
                        children: (0, r.jsx)(u.DUT, {
                            className: s()($.Xs, n ? $.Tf : null),
                            onClick: () => {
                                d.A.updateChatOpen(e.id, !0), (0, w.iN)(e.id);
                            },
                            "aria-label": Z.intl.string(Z.t.ZXxLQg),
                            children: (0, r.jsx)(u.oyn, {
                                size: "xs",
                                color: "currentColor",
                                className: $.gE,
                            }),
                        }),
                    });
            }),
            ee(this, "getTooltipText", () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? Z.intl.string(Z.t.rZfiNq) : null;
            });
    }
}
let el = (0, h.a)((0, f.F)(er));

function ei(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: s,
            collapsed: o,
            voiceStates: c,
        } = e,
        u = (0, a.cf)([U.Ay], () => ({
            unread: U.Ay.hasUnread(n.id),
            mentionCount: U.Ay.getMentionCount(n.id),
        })),
        d = (0, a.bG)([B.Ay], () => B.Ay.resolveUnreadSetting(n)),
        p = (0, a.cf)([M.A, k.A, G.A], () => {
            let e = M.A.getChannel(n.parent_id),
                r = k.A.getCheck(n.guild_id);
            return {
                canManageChannel: G.A.can(J.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === Q.V ||
                        (null != e ? G.A.can(J.xBc.MANAGE_CHANNELS, e) : G.A.can(J.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: G.A.can(J.xBc.MOVE_MEMBERS, n),
                locked: !G.A.can(J.xBc.CONNECT, n),
                bypassLimit: G.A.can(J.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        h = (0, a.bG)([V.A], () => V.A.hasVideo(n.id)),
        f = (0, g.Ay)(n),
        m = (0, O.Ay)(n),
        y = (0, I.Qs)(n.id),
        _ = (0, a.bG)([A.A], () => null != A.A.getStartTime(n), [n]),
        { isSubscriptionGated: j, needSubscriptionToAccess: v } = (0, S.A)(n.id),
        E = (0, x.A)(),
        C = (0, a.bG)([B.Ay], () => B.Ay.isFavorite(t.id, n.id)),
        N = e.connected || (null == E ? void 0 : E.channelId) === n.id,
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
        { enableHighlight: L, enableWaveformIcon: F } = (0, b.b)(t.id, "VoiceChannel"),
        H = null != c && c.length > 0,
        K = L && H,
        z = F && H,
        Y = (0, W.A)({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: j,
            needSubscriptionToAccess: v,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        q = N && null == Y;
    return (0, r.jsx)(
        el,
        en(
            et(
                {
                    channelName: m,
                    embeddedApps: f,
                    embeddedActivityType: J.$pd.PLAYING,
                    video: h,
                    hasActiveEvent: null != y,
                    isSubscriptionGated: j,
                    needSubscriptionToAccess: v,
                },
                u,
                p,
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
                hasStartTime: _,
                shouldHighlightChannel: K,
                shouldUseAnimatedWaveform: z,
            },
        ),
    );
}
