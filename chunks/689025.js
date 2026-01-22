n.d(t, {
    A: () => J,
}),
    n(896048),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(3026),
    c = n(990078),
    u = n(397927),
    d = n(367513),
    f = n(442433),
    p = n(676002),
    h = n(296216),
    b = n(963027),
    g = n(202384),
    m = n(51758),
    A = n(721592),
    y = n(214660),
    O = n(378570),
    j = n(323443),
    v = n(113783),
    x = n(69407),
    E = n(446600),
    _ = n(96566),
    C = n(175452),
    S = n(924985),
    I = n(734057),
    N = n(71393),
    T = n(834942),
    P = n(576705),
    w = n(222823),
    R = n(543465),
    D = n(977997),
    M = n(147036),
    L = n(557534),
    G = n(68437),
    k = n(166444),
    U = n(588224),
    V = n(652215),
    F = n(349828),
    H = n(985018),
    B = n(728444),
    K = n(834201);

function W(e, t, n) {
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

function z(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}

function Y(e, t) {
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
class q extends L.Ay {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, M.Pd)(e, D.A, N.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return B.ZS;
        if (null != t)
            if (e > t) return B.mU;
            else return B.TR;
        return B.fx;
    }
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
        return (0, r.jsx)(U.A, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: V.ThZ.GUILD_CHANNEL_LIST,
            numAudience: i,
        });
    }
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: l,
                connectChannelDropTarget: i,
                connectChannelDragSource: s,
                connectUserDropTarget: o,
                connectDragPreview: d,
                canReorderChannel: f,
                canMoveMembers: p,
                stageInstance: h,
                isSubscriptionGated: g,
                needSubscriptionToAccess: m,
                unread: A,
                resolvedUnreadSetting: y,
                mentionCount: O,
                isFavoriteSuggestion: j,
            } = this.props,
            { shouldShowGuildVerificationPopout: v } = this.state,
            x = this.getVoiceStatesCount(),
            E = (0, r.jsxs)("li", {
                className: a()(this.getModeClass(), {
                    [B.r9]: this.isDisabled(),
                }),
                "data-dnd-name": e.name,
                children: [
                    (0, r.jsx)(u.YNO, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: v,
                        children: () =>
                            (0, r.jsx)(c.m, {
                                text: this.getTooltipText(),
                                children: (0, r.jsxs)(k.Ay, {
                                    ref: this.channelItemRef,
                                    className: B.Ki,
                                    iconClassName: a()({
                                        [K.G]: null != h,
                                    }),
                                    channel: e,
                                    selected: !j && t,
                                    connected: n,
                                    unread: n ? A : void 0,
                                    resolvedUnreadSetting: y,
                                    mentionCount: O,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: d,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: j,
                                    "aria-label": (0, b.Ay)({
                                        channel: e,
                                        unread: A,
                                        mentionCount: O,
                                        userCount: x,
                                        isSubscriptionGated: g,
                                        needSubscriptionToAccess: m,
                                    }),
                                    children: [
                                        j && this.renderAcceptSuggestionButton(),
                                        j && this.renderRemoveSuggestionButton(),
                                        !j && this.renderOpenChatButton(),
                                        !j && this.renderInviteButton(),
                                        !j && this.renderEditButton(),
                                        !j && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return p && (E = o(E)), f && (E = i(s(E))), E;
    }
    constructor(...e) {
        super(...e),
            W(this, "channelItemRef", l.createRef()),
            W(this, "state", {
                shouldShowGuildVerificationPopout: !1,
            }),
            W(this, "closeGuildVerificationPopout", () => {
                this.setState({
                    shouldShowGuildVerificationPopout: !1,
                });
            }),
            W(this, "handleClick", () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: r } = this.props,
                    l = e.getGuildId();
                null != l && (0, m.V)(l) && (0, g.Ze)(l),
                    r &&
                        this.setState({
                            shouldShowGuildVerificationPopout: !0,
                        }),
                    t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, j.av)(e),
                    __OVERLAY__ || (0, O.iN)(e.id);
            }),
            W(this, "handleClickChat", () => {
                let { channel: e, locked: t } = this.props;
                __OVERLAY__ || t || (0, O.iN)(e.id);
            }),
            W(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    l = N.A.getGuild(t.getGuildId());
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
                                Y(z({}, n), {
                                    channel: t,
                                    guild: l,
                                }),
                            );
                    });
            }),
            W(this, "renderPopout", () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, r.jsx)(y.A, {
                        type: y.H.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                throw Error("VoiceChannel.renderPopout: There must always be something to render");
            }),
            W(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.m, {
                        asContainer: !0,
                        text: H.intl.string(H.t.ZXxLQg),
                        children: (0, r.jsx)(u.DUT, {
                            className: a()(B.Xs, n ? B.Tf : null),
                            onClick: () => {
                                d.A.updateChatOpen(e.id, !0), this.handleClickChat();
                            },
                            "aria-label": H.intl.string(H.t.ZXxLQg),
                            children: (0, r.jsx)(u.oyn, {
                                size: "xs",
                                color: "currentColor",
                                className: B.gE,
                            }),
                        }),
                    });
            }),
            W(this, "getTooltipText", () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? H.intl.string(H.t.rZfiNq) : null;
            }),
            W(this, "renderSubtitle", () => {
                var e;
                let t = null == (e = this.props.stageInstance) ? void 0 : e.topic;
                return null == t
                    ? null
                    : (0, r.jsx)(o.A, {
                          children: t,
                      });
            });
    }
}
let X = (0, p.a)((0, h.F)(q));

function J(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: i, collapsed: a, voiceStates: o } = e,
        c = (0, s.cf)([w.Ay], () => ({
            unread: w.Ay.hasUnread(n.id),
            mentionCount: w.Ay.getMentionCount(n.id),
        })),
        u = (0, s.bG)([R.Ay], () => R.Ay.resolveUnreadSetting(n)),
        d = (0, s.cf)([I.A, T.A, P.A], () => {
            let e = I.A.getChannel(n.parent_id),
                r = T.A.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && P.A.can(V.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === F.V ||
                        (null != e ? P.A.can(V.xBc.MANAGE_CHANNELS, e) : P.A.can(V.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: P.A.can(V.xBc.MOVE_MEMBERS, n),
                locked: !P.A.can(V.xBc.CONNECT, n),
                bypassLimit: P.A.can(V.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        f = (0, s.bG)([S.A], () => S.A.isCollapsed(n.parent_id)),
        p = (0, C.Ay)(n.id),
        h = (0, s.bG)([E.A], () => E.A.getStageInstanceByChannel(n.id), [n.id]),
        b = (0, v.zy)(n.id, x.ip.AUDIENCE),
        { isSubscriptionGated: g, needSubscriptionToAccess: m } = (0, A.A)(n.id),
        y = (0, s.bG)([R.Ay], () => R.Ay.isFavorite(t.id, n.id)),
        O = (0, _.xn)(n.id),
        j = (0, G.A)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: m,
            enableConnectedUserLimit: O || (n.userLimit > 0 && n.userLimit < V.RCc),
        }),
        N = e.connected && null == j;
    return (0, r.jsx)(
        X,
        Y(
            z(
                {
                    categoryCollapsed: f,
                    connectAction: p,
                    numAudience: b,
                    stageInstance: h,
                    isSubscriptionGated: g,
                    needSubscriptionToAccess: m,
                },
                c,
                d,
                e,
            ),
            {
                isFavoriteSuggestion: i && !y,
                forceShowButtons: N,
                channelInfo: j,
                resolvedUnreadSetting: u,
            },
        ),
    );
}
