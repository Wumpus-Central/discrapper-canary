n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(397927),
    u = n(367513),
    h = n(442433),
    A = n(676002),
    _ = n(296216),
    m = n(963027),
    g = n(202384),
    p = n(51758),
    f = n(721592),
    x = n(214660),
    E = n(824865),
    I = n(378570),
    C = n(323443),
    N = n(113783),
    T = n(69407),
    S = n(446600),
    b = n(96566),
    y = n(175452),
    v = n(924985),
    j = n(734057),
    R = n(71393),
    O = n(834942),
    L = n(576705),
    M = n(222823),
    D = n(543465),
    U = n(977997),
    G = n(147036),
    P = n(557534),
    k = n(68437),
    w = n(166444),
    B = n(588224);
n(281405);
var V = n(652215),
    H = n(349828),
    F = n(985018),
    K = n(99566),
    W = n(799535);
class Y extends P.Ay {
    channelItemRef = l.createRef();
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
        return (0, G.Pd)(e, U.A, R.A);
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
        let { channel: e, locked: t, connected: n, unverifiedAccount: i, isSuggestedSection: l } = this.props,
            s = e.getGuildId();
        null != s && (0, p.V)(s) && (0, g.Ze)(s),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, C.av)(e),
            __OVERLAY__ || (0, I.iN)(e.id, l ? { source: E.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, I.iN)(e.id, n ? { source: E.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = R.A.getGuild(t.getGuildId());
        null != l &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("30997")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: s } = this.props;
        return (0, i.jsx)(B.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: s });
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
            return (0, i.jsx)(d.m, {
                asContainer: !0,
                text: F.intl.string(F.t.ZXxLQg),
                children: (0, i.jsx)(c.DUT, {
                    className: a()(K.Xs, n ? K.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": F.intl.string(F.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: K.gE }),
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
                locked: l,
                connectChannelDropTarget: s,
                connectChannelDragSource: r,
                connectUserDropTarget: o,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: A,
                stageInstance: _,
                isSubscriptionGated: g,
                needSubscriptionToAccess: p,
                unread: f,
                resolvedUnreadSetting: x,
                mentionCount: E,
                isFavoriteSuggestion: I,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            N = (0, i.jsxs)("li", {
                className: a()(this.getModeClass(), { [K.r9]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: [
                    (0, i.jsx)(c.YNO, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, i.jsx)(d.m, {
                                text: this.getTooltipText(),
                                children: (0, i.jsxs)(w.Ay, {
                                    ref: this.channelItemRef,
                                    className: K.Ki,
                                    iconClassName: a()({ [W.G]: null != _ }),
                                    channel: e,
                                    selected: !I && t,
                                    connected: n,
                                    unread: n ? f : void 0,
                                    resolvedUnreadSetting: x,
                                    mentionCount: E,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: u,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: I,
                                    "aria-label": (0, m.Ay)({
                                        channel: e,
                                        unread: f,
                                        mentionCount: E,
                                        isSubscriptionGated: g,
                                        needSubscriptionToAccess: p,
                                    }),
                                    children: [
                                        I && this.renderAcceptSuggestionButton(),
                                        I && this.renderRemoveSuggestionButton(),
                                        !I && this.renderOpenChatButton(),
                                        !I && this.renderInviteButton(),
                                        !I && this.renderEditButton(),
                                        !I && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return A && (N = o(N)), h && (N = s(r(N))), N;
    }
}
let z = (0, A.a)((0, _.F)(Y));
function q(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: s, collapsed: a, voiceStates: o } = e,
        d = (0, r.cf)([M.Ay], () => ({ unread: M.Ay.hasUnread(n.id), mentionCount: M.Ay.getMentionCount(n.id) })),
        c = (0, r.bG)([D.Ay], () => D.Ay.resolveUnreadSetting(n)),
        u = (0, r.cf)([j.A, O.A, L.A], () => {
            let e = j.A.getChannel(n.parent_id),
                i = O.A.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && L.A.can(V.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === H.Vc ||
                        (null != e ? L.A.can(V.xBc.MANAGE_CHANNELS, e) : L.A.can(V.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: L.A.can(V.xBc.MOVE_MEMBERS, n),
                locked: !L.A.can(V.xBc.CONNECT, n),
                bypassLimit: L.A.can(V.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        h = (0, r.bG)([v.A], () => v.A.isCollapsed(n.parent_id)),
        A = (0, y.Ay)(n.id),
        _ = (0, r.bG)([S.A], () => S.A.getStageInstanceByChannel(n.id), [n.id]),
        m = (0, N.zy)(n.id, T.ip.AUDIENCE),
        { isSubscriptionGated: g, needSubscriptionToAccess: p } = (0, f.A)(n.id),
        x = (0, r.bG)([D.Ay], () => D.Ay.isFavorite(t.id, n.id)),
        E = (0, b.xn)(n.id),
        I = (0, k.A)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: p,
            enableConnectedUserLimit: E || (n.userLimit > 0 && n.userLimit < V.RCc),
        }),
        C = e.connected && null == I;
    return (0, i.jsx)(z, {
        categoryCollapsed: h,
        connectAction: A,
        numAudience: m,
        stageInstance: _,
        isSubscriptionGated: g,
        needSubscriptionToAccess: p,
        ...d,
        ...u,
        ...e,
        isFavoriteSuggestion: s && !x,
        forceShowButtons: C,
        channelInfo: I,
        resolvedUnreadSetting: c,
    });
}
