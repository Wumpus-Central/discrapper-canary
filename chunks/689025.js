"use strict";
n.d(t, { A: () => z });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(3026),
    c = n(990078),
    d = n(397927),
    u = n(367513),
    h = n(442433),
    A = n(676002),
    m = n(296216),
    p = n(963027),
    g = n(202384),
    _ = n(51758),
    f = n(721592),
    x = n(214660),
    C = n(378570),
    E = n(323443),
    I = n(113783),
    N = n(69407),
    b = n(446600),
    S = n(96566),
    T = n(175452),
    v = n(924985),
    y = n(734057),
    j = n(71393),
    R = n(834942),
    O = n(576705),
    L = n(222823),
    M = n(543465),
    D = n(977997),
    G = n(147036),
    U = n(557534),
    P = n(68437),
    w = n(166444),
    k = n(588224);
n(281405);
var V = n(652215),
    B = n(349828),
    H = n(985018),
    F = n(728444),
    K = n(834201);
class Y extends U.Ay {
    channelItemRef = s.createRef();
    state = { shouldShowGuildVerificationPopout: !1 };
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, G.Pd)(e, D.A, j.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return F.ZS;
        if (null != t)
            if (e > t) return F.mU;
            else return F.TR;
        return F.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: i } = this.props,
            s = e.getGuildId();
        null != s && (0, _.V)(s) && (0, g.Ze)(s),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, E.av)(e),
            __OVERLAY__ || (0, C.iN)(e.id);
    };
    handleClickChat = () => {
        let { channel: e, locked: t } = this.props;
        __OVERLAY__ || t || (0, C.iN)(e.id);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            s = j.A.getGuild(t.getGuildId());
        null != s &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("30997")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: s, numAudience: l } = this.props;
        return (0, i.jsx)(k.A, {
            channel: e,
            voiceStates: s,
            collapsed: t,
            tabIndex: n,
            location: V.ThZ.GUILD_CHANNEL_LIST,
            numAudience: l,
        });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, i.jsx)(x.A, {
                type: x.H.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, i.jsx)(c.m, {
                asContainer: !0,
                text: H.intl.string(H.t.ZXxLQg),
                children: (0, i.jsx)(d.DUT, {
                    className: r()(F.Xs, n ? F.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": H.intl.string(H.t.ZXxLQg),
                    children: (0, i.jsx)(d.oyn, { size: "xs", color: "currentColor", className: F.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? H.intl.string(H.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, i.jsx)(o.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: s,
                connectChannelDropTarget: l,
                connectChannelDragSource: a,
                connectUserDropTarget: o,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: A,
                stageInstance: m,
                isSubscriptionGated: g,
                needSubscriptionToAccess: _,
                unread: f,
                resolvedUnreadSetting: x,
                mentionCount: C,
                isFavoriteSuggestion: E,
            } = this.props,
            { shouldShowGuildVerificationPopout: I } = this.state,
            N = (0, i.jsxs)("li", {
                className: r()(this.getModeClass(), { [F.r9]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: [
                    (0, i.jsx)(d.YNO, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: I,
                        children: () =>
                            (0, i.jsx)(c.m, {
                                text: this.getTooltipText(),
                                children: (0, i.jsxs)(w.Ay, {
                                    ref: this.channelItemRef,
                                    className: F.Ki,
                                    iconClassName: r()({ [K.G]: null != m }),
                                    channel: e,
                                    selected: !E && t,
                                    connected: n,
                                    unread: n ? f : void 0,
                                    resolvedUnreadSetting: x,
                                    mentionCount: C,
                                    locked: s,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: u,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: E,
                                    "aria-label": (0, p.Ay)({
                                        channel: e,
                                        unread: f,
                                        mentionCount: C,
                                        isSubscriptionGated: g,
                                        needSubscriptionToAccess: _,
                                    }),
                                    children: [
                                        E && this.renderAcceptSuggestionButton(),
                                        E && this.renderRemoveSuggestionButton(),
                                        !E && this.renderOpenChatButton(),
                                        !E && this.renderInviteButton(),
                                        !E && this.renderEditButton(),
                                        !E && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return A && (N = o(N)), h && (N = l(a(N))), N;
    }
}
let W = (0, A.a)((0, m.F)(Y));
function z(e) {
    let { guild: t, channel: n, disableSorting: s, isFavoriteCategory: l, collapsed: r, voiceStates: o } = e,
        c = (0, a.cf)([L.Ay], () => ({ unread: L.Ay.hasUnread(n.id), mentionCount: L.Ay.getMentionCount(n.id) })),
        d = (0, a.bG)([M.Ay], () => M.Ay.resolveUnreadSetting(n)),
        u = (0, a.cf)([y.A, R.A, O.A], () => {
            let e = y.A.getChannel(n.parent_id),
                i = R.A.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && O.A.can(V.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === B.Vc ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(V.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(V.xBc.CONNECT, n),
                bypassLimit: O.A.can(V.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        h = (0, a.bG)([v.A], () => v.A.isCollapsed(n.parent_id)),
        A = (0, T.Ay)(n.id),
        m = (0, a.bG)([b.A], () => b.A.getStageInstanceByChannel(n.id), [n.id]),
        p = (0, I.zy)(n.id, N.ip.AUDIENCE),
        { isSubscriptionGated: g, needSubscriptionToAccess: _ } = (0, f.A)(n.id),
        x = (0, a.bG)([M.Ay], () => M.Ay.isFavorite(t.id, n.id)),
        C = (0, S.xn)(n.id),
        E = (0, P.A)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: r,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: _,
            enableConnectedUserLimit: C || (n.userLimit > 0 && n.userLimit < V.RCc),
        }),
        j = e.connected && null == E;
    return (0, i.jsx)(W, {
        categoryCollapsed: h,
        connectAction: A,
        numAudience: p,
        stageInstance: m,
        isSubscriptionGated: g,
        needSubscriptionToAccess: _,
        ...c,
        ...u,
        ...e,
        isFavoriteSuggestion: l && !x,
        forceShowButtons: j,
        channelInfo: E,
        resolvedUnreadSetting: d,
    });
}
