"use strict";
n.d(t, { A: () => q });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(3026),
    c = n(990078),
    d = n(397927),
    u = n(367513),
    h = n(442433),
    A = n(676002),
    m = n(296216),
    _ = n(963027),
    g = n(202384),
    p = n(51758),
    f = n(721592),
    x = n(214660),
    E = n(824865),
    C = n(378570),
    I = n(323443),
    N = n(113783),
    b = n(69407),
    S = n(446600),
    T = n(96566),
    v = n(175452),
    y = n(924985),
    j = n(734057),
    R = n(71393),
    O = n(834942),
    L = n(576705),
    M = n(222823),
    D = n(543465),
    G = n(977997),
    U = n(147036),
    P = n(557534),
    w = n(68437),
    k = n(166444),
    V = n(588224);
n(281405);
var B = n(652215),
    H = n(349828),
    F = n(985018),
    K = n(928409),
    W = n(822294);
class Y extends P.Ay {
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
        return (0, U.Pd)(e, G.A, R.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return K.ZS;
        if (null != t)
            if (e > t) return K.mU;
            else return K.TR;
        return K.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: i, isSuggestedSection: s } = this.props,
            l = e.getGuildId();
        null != l && (0, p.V)(l) && (0, g.Ze)(l),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, I.av)(e),
            __OVERLAY__ || (0, C.iN)(e.id, s ? { source: E.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, C.iN)(e.id, n ? { source: E.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            s = R.A.getGuild(t.getGuildId());
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
        return (0, i.jsx)(V.A, { channel: e, voiceStates: s, collapsed: t, tabIndex: n, numAudience: l });
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
                text: F.intl.string(F.t.ZXxLQg),
                children: (0, i.jsx)(d.DUT, {
                    className: a()(K.Xs, n ? K.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": F.intl.string(F.t.ZXxLQg),
                    children: (0, i.jsx)(d.oyn, { size: "xs", color: "currentColor", className: K.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? F.intl.string(F.t.rZfiNq) : null;
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
                connectChannelDragSource: r,
                connectUserDropTarget: o,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: A,
                stageInstance: m,
                isSubscriptionGated: g,
                needSubscriptionToAccess: p,
                unread: f,
                resolvedUnreadSetting: x,
                mentionCount: E,
                isFavoriteSuggestion: C,
            } = this.props,
            { shouldShowGuildVerificationPopout: I } = this.state,
            N = (0, i.jsxs)("li", {
                className: a()(this.getModeClass(), { [K.r9]: this.isDisabled() }),
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
                                children: (0, i.jsxs)(k.Ay, {
                                    ref: this.channelItemRef,
                                    className: K.Ki,
                                    iconClassName: a()({ [W.G]: null != m }),
                                    channel: e,
                                    selected: !C && t,
                                    connected: n,
                                    unread: n ? f : void 0,
                                    resolvedUnreadSetting: x,
                                    mentionCount: E,
                                    locked: s,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: u,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: C,
                                    "aria-label": (0, _.Ay)({
                                        channel: e,
                                        unread: f,
                                        mentionCount: E,
                                        isSubscriptionGated: g,
                                        needSubscriptionToAccess: p,
                                    }),
                                    children: [
                                        C && this.renderAcceptSuggestionButton(),
                                        C && this.renderRemoveSuggestionButton(),
                                        !C && this.renderOpenChatButton(),
                                        !C && this.renderInviteButton(),
                                        !C && this.renderEditButton(),
                                        !C && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return A && (N = o(N)), h && (N = l(r(N))), N;
    }
}
let z = (0, A.a)((0, m.F)(Y));
function q(e) {
    let { guild: t, channel: n, disableSorting: s, isFavoriteCategory: l, collapsed: a, voiceStates: o } = e,
        c = (0, r.cf)([M.Ay], () => ({ unread: M.Ay.hasUnread(n.id), mentionCount: M.Ay.getMentionCount(n.id) })),
        d = (0, r.bG)([D.Ay], () => D.Ay.resolveUnreadSetting(n)),
        u = (0, r.cf)([j.A, O.A, L.A], () => {
            let e = j.A.getChannel(n.parent_id),
                i = O.A.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && L.A.can(B.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== s &&
                    (t.id === H.Vc ||
                        (null != e ? L.A.can(B.xBc.MANAGE_CHANNELS, e) : L.A.can(B.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: L.A.can(B.xBc.MOVE_MEMBERS, n),
                locked: !L.A.can(B.xBc.CONNECT, n),
                bypassLimit: L.A.can(B.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        h = (0, r.bG)([y.A], () => y.A.isCollapsed(n.parent_id)),
        A = (0, v.Ay)(n.id),
        m = (0, r.bG)([S.A], () => S.A.getStageInstanceByChannel(n.id), [n.id]),
        _ = (0, N.zy)(n.id, b.ip.AUDIENCE),
        { isSubscriptionGated: g, needSubscriptionToAccess: p } = (0, f.A)(n.id),
        x = (0, r.bG)([D.Ay], () => D.Ay.isFavorite(t.id, n.id)),
        E = (0, T.xn)(n.id),
        C = (0, w.A)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: p,
            enableConnectedUserLimit: E || (n.userLimit > 0 && n.userLimit < B.RCc),
        }),
        I = e.connected && null == C;
    return (0, i.jsx)(z, {
        categoryCollapsed: h,
        connectAction: A,
        numAudience: _,
        stageInstance: m,
        isSubscriptionGated: g,
        needSubscriptionToAccess: p,
        ...c,
        ...u,
        ...e,
        isFavoriteSuggestion: l && !x,
        forceShowButtons: I,
        channelInfo: C,
        resolvedUnreadSetting: d,
    });
}
