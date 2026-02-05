n.d(t, { A: () => z });
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
    g = n(296216),
    m = n(963027),
    p = n(202384),
    _ = n(51758),
    x = n(721592),
    f = n(214660),
    E = n(378570),
    C = n(323443),
    I = n(113783),
    S = n(69407),
    b = n(446600),
    N = n(96566),
    T = n(175452),
    j = n(924985),
    v = n(734057),
    y = n(71393),
    R = n(834942),
    O = n(576705),
    L = n(222823),
    D = n(543465),
    M = n(977997),
    G = n(147036),
    U = n(557534),
    P = n(68437),
    k = n(166444),
    w = n(588224),
    V = n(652215),
    B = n(349828),
    H = n(985018),
    F = n(728444),
    Y = n(834201);
class W extends U.Ay {
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
        return (0, G.Pd)(e, M.A, y.A);
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
            l = e.getGuildId();
        null != l && (0, _.V)(l) && (0, p.Ze)(l),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, C.av)(e),
            __OVERLAY__ || (0, E.iN)(e.id);
    };
    handleClickChat = () => {
        let { channel: e, locked: t } = this.props;
        __OVERLAY__ || t || (0, E.iN)(e.id);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = y.A.getGuild(t.getGuildId());
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
        return (0, i.jsx)(w.A, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: V.ThZ.GUILD_CHANNEL_LIST,
            numAudience: s,
        });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, i.jsx)(f.A, {
                type: f.H.VOICE,
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
                text: H.intl.string(H.t.ZXxLQg),
                children: (0, i.jsx)(c.DUT, {
                    className: a()(F.Xs, n ? F.Tf : null),
                    onClick: () => {
                        u.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": H.intl.string(H.t.ZXxLQg),
                    children: (0, i.jsx)(c.oyn, { size: "xs", color: "currentColor", className: F.gE }),
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
                locked: l,
                connectChannelDropTarget: s,
                connectChannelDragSource: r,
                connectUserDropTarget: o,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: A,
                stageInstance: g,
                isSubscriptionGated: p,
                needSubscriptionToAccess: _,
                unread: x,
                resolvedUnreadSetting: f,
                mentionCount: E,
                isFavoriteSuggestion: C,
            } = this.props,
            { shouldShowGuildVerificationPopout: I } = this.state,
            S = this.getVoiceStatesCount(),
            b = (0, i.jsxs)("li", {
                className: a()(this.getModeClass(), { [F.r9]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: [
                    (0, i.jsx)(c.YNO, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: I,
                        children: () =>
                            (0, i.jsx)(d.m, {
                                text: this.getTooltipText(),
                                children: (0, i.jsxs)(k.Ay, {
                                    ref: this.channelItemRef,
                                    className: F.Ki,
                                    iconClassName: a()({ [Y.G]: null != g }),
                                    channel: e,
                                    selected: !C && t,
                                    connected: n,
                                    unread: n ? x : void 0,
                                    resolvedUnreadSetting: f,
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
                                    isFavoriteSuggestion: C,
                                    "aria-label": (0, m.Ay)({
                                        channel: e,
                                        unread: x,
                                        mentionCount: E,
                                        userCount: S,
                                        isSubscriptionGated: p,
                                        needSubscriptionToAccess: _,
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
        return A && (b = o(b)), h && (b = s(r(b))), b;
    }
}
let K = (0, A.a)((0, g.F)(W));
function z(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: s, collapsed: a, voiceStates: o } = e,
        d = (0, r.cf)([L.Ay], () => ({ unread: L.Ay.hasUnread(n.id), mentionCount: L.Ay.getMentionCount(n.id) })),
        c = (0, r.bG)([D.Ay], () => D.Ay.resolveUnreadSetting(n)),
        u = (0, r.cf)([v.A, R.A, O.A], () => {
            let e = v.A.getChannel(n.parent_id),
                i = R.A.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && O.A.can(V.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === B.V ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(V.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(V.xBc.CONNECT, n),
                bypassLimit: O.A.can(V.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        h = (0, r.bG)([j.A], () => j.A.isCollapsed(n.parent_id)),
        A = (0, T.Ay)(n.id),
        g = (0, r.bG)([b.A], () => b.A.getStageInstanceByChannel(n.id), [n.id]),
        m = (0, I.zy)(n.id, S.ip.AUDIENCE),
        { isSubscriptionGated: p, needSubscriptionToAccess: _ } = (0, x.A)(n.id),
        f = (0, r.bG)([D.Ay], () => D.Ay.isFavorite(t.id, n.id)),
        E = (0, N.xn)(n.id),
        C = (0, P.A)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: _,
            enableConnectedUserLimit: E || (n.userLimit > 0 && n.userLimit < V.RCc),
        }),
        y = e.connected && null == C;
    return (0, i.jsx)(K, {
        categoryCollapsed: h,
        connectAction: A,
        numAudience: m,
        stageInstance: g,
        isSubscriptionGated: p,
        needSubscriptionToAccess: _,
        ...d,
        ...u,
        ...e,
        isFavoriteSuggestion: s && !f,
        forceShowButtons: y,
        channelInfo: C,
        resolvedUnreadSetting: c,
    });
}
