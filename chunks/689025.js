n.d(t, { A: () => J });
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
    g = n(47167),
    p = n(202384),
    f = n(51758),
    x = n(721592),
    E = n(214660),
    I = n(824865),
    C = n(378570),
    N = n(323443),
    T = n(113783),
    S = n(69407),
    b = n(446600),
    y = n(96566),
    v = n(175452),
    j = n(924985),
    R = n(734057),
    O = n(71393),
    L = n(834942),
    M = n(576705),
    D = n(222823),
    U = n(994500),
    G = n(543465),
    P = n(287809),
    k = n(977997),
    w = n(147036),
    B = n(557534),
    V = n(68437),
    H = n(166444),
    F = n(588224);
n(281405);
var W = n(652215),
    K = n(349828),
    Y = n(985018),
    z = n(928409),
    q = n(822294);
class X extends B.Ay {
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
        return (0, w.Pd)(e, k.A, O.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return z.ZS;
        if (null != t)
            if (e > t) return z.mU;
            else return z.TR;
        return z.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: i, isSuggestedSection: l } = this.props,
            s = e.getGuildId();
        null != s && (0, f.V)(s) && (0, p.Ze)(s),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, N.av)(e),
            __OVERLAY__ || (0, C.iN)(e.id, l ? { source: I.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, C.iN)(e.id, n ? { source: I.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = O.A.getGuild(t.getGuildId());
        null != l &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("2381"), n.e("40394"), n.e("30997")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: s } = this.props;
        return (0, i.jsx)(F.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: s });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, i.jsx)(E.A, {
                type: E.H.VOICE,
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
                text: Y.intl.string(Y.t.ZXxLQg),
                children: (0, i.jsx)(c.DUT, {
                    className: a()(z.Xs, n ? z.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": Y.intl.string(Y.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: z.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? Y.intl.string(Y.t.rZfiNq) : null;
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
                isSubscriptionGated: p,
                needSubscriptionToAccess: f,
                unread: x,
                resolvedUnreadSetting: E,
                mentionCount: I,
                isFavoriteSuggestion: C,
            } = this.props,
            { shouldShowGuildVerificationPopout: N } = this.state,
            T = (0, i.jsxs)("li", {
                className: a()(this.getModeClass(), { [z.r9]: this.isDisabled() }),
                "data-dnd-name": (0, g.m1)(e, P.default, U.A),
                children: [
                    (0, i.jsx)(c.YNO, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: N,
                        children: () =>
                            (0, i.jsx)(d.m, {
                                text: this.getTooltipText(),
                                children: (0, i.jsxs)(H.Ay, {
                                    ref: this.channelItemRef,
                                    className: z.Ki,
                                    iconClassName: a()({ [q.G]: null != _ }),
                                    channel: e,
                                    selected: !C && t,
                                    connected: n,
                                    unread: n ? x : void 0,
                                    resolvedUnreadSetting: E,
                                    mentionCount: I,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: u,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: C,
                                    "aria-label": (0, m.Ay)({
                                        channel: e,
                                        unread: x,
                                        mentionCount: I,
                                        isSubscriptionGated: p,
                                        needSubscriptionToAccess: f,
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
        return A && (T = o(T)), h && (T = s(r(T))), T;
    }
}
let $ = (0, A.a)((0, _.F)(X));
function J(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: s, collapsed: a, voiceStates: o } = e,
        d = (0, r.cf)([D.Ay], () => ({ unread: D.Ay.hasUnread(n.id), mentionCount: D.Ay.getMentionCount(n.id) })),
        c = (0, r.bG)([G.Ay], () => G.Ay.resolveUnreadSetting(n)),
        u = (0, r.cf)([R.A, L.A, M.A], () => {
            let e = R.A.getChannel(n.parent_id),
                i = L.A.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && M.A.can(W.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === K.Vc ||
                        (null != e ? M.A.can(W.xBc.MANAGE_CHANNELS, e) : M.A.can(W.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: M.A.can(W.xBc.MOVE_MEMBERS, n),
                locked: !M.A.can(W.xBc.CONNECT, n),
                bypassLimit: M.A.can(W.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        h = (0, r.bG)([j.A], () => j.A.isCollapsed(n.parent_id)),
        A = (0, v.Ay)(n.id),
        _ = (0, r.bG)([b.A], () => b.A.getStageInstanceByChannel(n.id), [n.id]),
        m = (0, T.zy)(n.id, S.ip.AUDIENCE),
        { isSubscriptionGated: g, needSubscriptionToAccess: p } = (0, x.A)(n.id),
        f = (0, r.bG)([G.Ay], () => G.Ay.isFavorite(t.id, n.id)),
        E = (0, y.xn)(n.id),
        I = (0, V.A)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: p,
            enableConnectedUserLimit: E || (n.userLimit > 0 && n.userLimit < W.RCc),
        }),
        C = e.connected && null == I;
    return (0, i.jsx)($, {
        categoryCollapsed: h,
        connectAction: A,
        numAudience: m,
        stageInstance: _,
        isSubscriptionGated: g,
        needSubscriptionToAccess: p,
        ...d,
        ...u,
        ...e,
        isFavoriteSuggestion: s && !f,
        forceShowButtons: C,
        channelInfo: I,
        resolvedUnreadSetting: c,
    });
}
