n.d(t, { Z: () => X }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    p = n(146773),
    f = n(888651),
    h = n(201895),
    g = n(111028),
    m = n(305325),
    b = n(281956),
    _ = n(66999),
    O = n(378844),
    y = n(359110),
    j = n(922482),
    v = n(431328),
    x = n(501655),
    C = n(427679),
    E = n(368442),
    S = n(201469),
    I = n(680089),
    P = n(592125),
    N = n(430824),
    Z = n(607744),
    T = n(496675),
    w = n(306680),
    A = n(9156),
    R = n(979651),
    D = n(934415),
    L = n(98597),
    M = n(648501),
    k = n(473403),
    G = n(207055),
    U = n(981631),
    B = n(647086),
    F = n(388032),
    V = n(55940),
    H = n(556295);
function z(e, t, n) {
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
function W(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
class Y extends L.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, D.rY)(e, R.Z, N.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return V.containerUserOver;
        if (null != t)
            if (e > t) return V.containerDragAfter;
            else return V.containerDragBefore;
        return V.containerDefault;
    }
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, r.jsx)(G.Z, {
            channel: e,
            voiceStates: i,
            collapsed: t,
            tabIndex: n,
            location: U.Sbl.GUILD_CHANNEL_LIST,
            numAudience: l,
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
                locked: i,
                connectChannelDropTarget: l,
                connectChannelDragSource: a,
                connectUserDropTarget: u,
                connectDragPreview: d,
                canReorderChannel: p,
                canMoveMembers: f,
                stageInstance: g,
                isSubscriptionGated: m,
                needSubscriptionToAccess: b,
                unread: _,
                resolvedUnreadSetting: O,
                mentionCount: y,
                isFavoriteSuggestion: j,
            } = this.props,
            { shouldShowGuildVerificationPopout: v } = this.state,
            x = this.getVoiceStatesCount(),
            C = (0, r.jsxs)("li", {
                className: o()(this.getModeClass(), { [V.disabled]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: [
                    (0, r.jsx)(c.yRy, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: v,
                        children: () =>
                            (0, r.jsx)(s.u, {
                                text: this.getTooltipText(),
                                children: (0, r.jsxs)(k.ZP, {
                                    ref: this.channelItemRef,
                                    className: V.iconVisibility,
                                    iconClassName: o()({ [H.iconLive]: null != g }),
                                    channel: e,
                                    selected: !j && t,
                                    connected: n,
                                    unread: n ? _ : void 0,
                                    resolvedUnreadSetting: O,
                                    mentionCount: y,
                                    locked: i,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: d,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: j,
                                    "aria-label": (0, h.ZP)({
                                        channel: e,
                                        unread: _,
                                        mentionCount: y,
                                        userCount: x,
                                        isSubscriptionGated: m,
                                        needSubscriptionToAccess: b,
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
        return f && (C = u(C)), p && (C = l(a(C))), C;
    }
    constructor(...e) {
        super(...e),
            z(this, "channelItemRef", i.createRef()),
            z(this, "state", { shouldShowGuildVerificationPopout: !1 }),
            z(this, "closeGuildVerificationPopout", () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            z(this, "handleClick", () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: r } = this.props,
                    i = e.getGuildId();
                null != i && (0, b.n)(i) && (0, m.hk)(i),
                    r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, j.Cq)(e),
                    __OVERLAY__ || (0, y.Kh)(e.id);
            }),
            z(this, "handleClickChat", () => {
                let { channel: e, locked: t } = this.props;
                __OVERLAY__ || t || (0, y.Kh)(e.id);
            }),
            z(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    i = N.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("79695"),
                            n.e("18320"),
                            n.e("83331"),
                            n.e("81070"),
                        ]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                K(W({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            }),
            z(this, "renderPopout", () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, r.jsx)(O.Z, {
                        type: O.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                throw Error("VoiceChannel.renderPopout: There must always be something to render");
            }),
            z(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(s.u, {
                        asContainer: !0,
                        text: F.intl.string(F.t.ZXxLQg),
                        children: (0, r.jsx)(c.P3F, {
                            className: o()(V.iconItem, n ? V.alwaysShown : null),
                            onClick: () => {
                                u.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                            },
                            "aria-label": F.intl.string(F.t.ZXxLQg),
                            children: (0, r.jsx)(c.kBi, {
                                size: "xs",
                                color: "currentColor",
                                className: V.actionIcon,
                            }),
                        }),
                    });
            }),
            z(this, "getTooltipText", () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? F.intl.string(F.t.rZfiNq) : null;
            }),
            z(this, "renderSubtitle", () => {
                var e;
                let t = null == (e = this.props.stageInstance) ? void 0 : e.topic;
                return null == t ? null : (0, r.jsx)(g.Z, { children: t });
            });
    }
}
let q = (0, p.B)((0, f.Q)(Y));
function X(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, collapsed: o, voiceStates: s } = e,
        c = (0, a.cj)([w.ZP], () => ({
            unread: w.ZP.hasUnread(n.id),
            mentionCount: w.ZP.getMentionCount(n.id),
        })),
        u = (0, a.e7)([A.ZP], () => A.ZP.resolveUnreadSetting(n)),
        d = (0, a.cj)([P.Z, Z.Z, T.Z], () => {
            let e = P.Z.getChannel(n.parent_id),
                r = Z.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && T.Z.can(U.Plq.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    (t.id === B._ ||
                        (null != e ? T.Z.can(U.Plq.MANAGE_CHANNELS, e) : T.Z.can(U.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: T.Z.can(U.Plq.MOVE_MEMBERS, n),
                locked: !T.Z.can(U.Plq.CONNECT, n),
                bypassLimit: T.Z.can(U.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        p = (0, a.e7)([I.Z], () => I.Z.isCollapsed(n.parent_id)),
        f = (0, S.ZP)(n.id),
        h = (0, a.e7)([C.Z], () => C.Z.getStageInstanceByChannel(n.id), [n.id]),
        g = (0, v.Rk)(n.id, x.pV.AUDIENCE),
        { isSubscriptionGated: m, needSubscriptionToAccess: b } = (0, _.Z)(n.id),
        O = (0, a.e7)([A.ZP], () => A.ZP.isFavorite(t.id, n.id)),
        y = (0, E.xJ)(n.id),
        j = (0, M.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: m,
            needSubscriptionToAccess: b,
            enableConnectedUserLimit: y || (n.userLimit > 0 && n.userLimit < U.xGv),
        }),
        N = e.connected && null == j;
    return (0, r.jsx)(
        q,
        K(
            W(
                {
                    categoryCollapsed: p,
                    connectAction: f,
                    numAudience: g,
                    stageInstance: h,
                    isSubscriptionGated: m,
                    needSubscriptionToAccess: b,
                },
                c,
                d,
                e,
            ),
            {
                isFavoriteSuggestion: l && !O,
                forceShowButtons: N,
                channelInfo: j,
                resolvedUnreadSetting: u,
            },
        ),
    );
}
