n.d(t, { A: () => $ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(939249),
    u = n(534890),
    h = n(265872),
    A = n(367513),
    _ = n(442433),
    m = n(676002),
    g = n(296216),
    p = n(963027),
    f = n(47167),
    E = n(202384),
    x = n(51758),
    I = n(721592),
    C = n(214660),
    b = n(824865),
    N = n(378570),
    S = n(323443),
    v = n(113783),
    T = n(69407),
    y = n(446600),
    R = n(96566),
    j = n(175452),
    L = n(924985),
    O = n(734057),
    G = n(71393),
    D = n(834942),
    M = n(576705),
    U = n(222823),
    P = n(994500),
    w = n(543465),
    k = n(287809),
    V = n(977997),
    B = n(147036),
    H = n(557534),
    F = n(68437),
    W = n(166444),
    Y = n(588224);
n(281405);
var K = n(652215),
    z = n(349828),
    q = n(985018),
    X = n(907305),
    Q = n(582630);
class J extends H.Ay {
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
        return (0, B.Pd)(e, V.A, G.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return X.ZS;
        if (null != t)
            if (e > t) return X.mU;
            else return X.TR;
        return X.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: i, isSuggestedSection: l } = this.props,
            s = e.getGuildId();
        null != s && (0, x.V)(s) && (0, E.Ze)(s),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, S.av)(e),
            __OVERLAY__ || (0, N.iN)(e.id, l ? { source: b.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, N.iN)(e.id, n ? { source: b.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = G.A.getGuild(t.getGuildId());
        null != l &&
            (0, _.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("2381"), n.e("40394"), n.e("53378")]).then(
                    n.bind(n, 698193),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: s } = this.props;
        return (0, i.jsx)(Y.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: s });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, i.jsx)(C.A, {
                type: C.H.VOICE,
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
                text: q.intl.string(q.t.ZXxLQg),
                children: (0, i.jsx)(c.D, {
                    className: a()(X.Xs, n ? X.Tf : null),
                    onClick: () => {
                        A.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": q.intl.string(q.t.ZXxLQg),
                    children: (0, i.jsx)(u.o, { size: "xs", color: "currentColor", className: X.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? q.intl.string(q.t.rZfiNq) : null;
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
                connectDragPreview: c,
                canReorderChannel: u,
                canMoveMembers: A,
                stageInstance: _,
                isSubscriptionGated: m,
                needSubscriptionToAccess: g,
                unread: E,
                resolvedUnreadSetting: x,
                mentionCount: I,
                isFavoriteSuggestion: C,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            N = (0, i.jsxs)("li", {
                className: a()(this.getModeClass(), { [X.r9]: this.isDisabled() }),
                "data-dnd-name": (0, f.m1)(e, k.default, P.A),
                children: [
                    (0, i.jsx)(h.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: b,
                        children: () =>
                            (0, i.jsx)(d.m, {
                                text: this.getTooltipText(),
                                children: (0, i.jsxs)(W.Ay, {
                                    ref: this.channelItemRef,
                                    className: X.Ki,
                                    iconClassName: a()({ [Q.G]: null != _ }),
                                    channel: e,
                                    selected: !C && t,
                                    connected: n,
                                    unread: n ? E : void 0,
                                    resolvedUnreadSetting: x,
                                    mentionCount: I,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: c,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: C,
                                    "aria-label": (0, p.Ay)({
                                        channel: e,
                                        unread: E,
                                        mentionCount: I,
                                        isSubscriptionGated: m,
                                        needSubscriptionToAccess: g,
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
        return A && (N = o(N)), u && (N = s(r(N))), N;
    }
}
let Z = (0, m.a)((0, g.F)(J));
function $(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: s, collapsed: a, voiceStates: o } = e,
        d = (0, r.cf)([U.Ay], () => ({ unread: U.Ay.hasUnread(n.id), mentionCount: U.Ay.getMentionCount(n.id) })),
        c = (0, r.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        u = (0, r.cf)([O.A, D.A, M.A], () => {
            let e = O.A.getChannel(n.parent_id),
                i = D.A.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && M.A.can(K.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === z.Vc ||
                        (null != e ? M.A.can(K.xBc.MANAGE_CHANNELS, e) : M.A.can(K.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: M.A.can(K.xBc.MOVE_MEMBERS, n),
                locked: !M.A.can(K.xBc.CONNECT, n),
                bypassLimit: M.A.can(K.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        h = (0, r.bG)([L.A], () => L.A.isCollapsed(n.parent_id)),
        A = (0, j.Ay)(n.id),
        _ = (0, r.bG)([y.A], () => y.A.getStageInstanceByChannel(n.id), [n.id]),
        m = (0, v.zy)(n.id, T.ip.AUDIENCE),
        { isSubscriptionGated: g, needSubscriptionToAccess: p } = (0, I.A)(n.id),
        f = (0, r.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        E = (0, R.xn)(n.id),
        x = (0, F.A)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: p,
            enableConnectedUserLimit: E || (n.userLimit > 0 && n.userLimit < K.RCc),
        }),
        C = e.connected && null == x;
    return (0, i.jsx)(Z, {
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
        channelInfo: x,
        resolvedUnreadSetting: c,
    });
}
