n.d(t, { Z: () => X }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(194983),
    c = n(28664),
    u = n(481060),
    d = n(475179),
    p = n(239091),
    h = n(146773),
    f = n(888651),
    g = n(201895),
    m = n(305325),
    b = n(281956),
    _ = n(66999),
    y = n(378844),
    O = n(359110),
    v = n(922482),
    j = n(431328),
    C = n(501655),
    x = n(427679),
    E = n(368442),
    S = n(201469),
    I = n(680089),
    P = n(592125),
    N = n(430824),
    Z = n(607744),
    w = n(496675),
    T = n(306680),
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
                connectUserDropTarget: s,
                connectDragPreview: d,
                canReorderChannel: p,
                canMoveMembers: h,
                stageInstance: f,
                isSubscriptionGated: m,
                needSubscriptionToAccess: b,
                unread: _,
                resolvedUnreadSetting: y,
                mentionCount: O,
                isFavoriteSuggestion: v,
            } = this.props,
            { shouldShowGuildVerificationPopout: j } = this.state,
            C = this.getVoiceStatesCount(),
            x = (0, r.jsxs)("li", {
                className: o()(this.getModeClass(), { [V.disabled]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: [
                    (0, r.jsx)(u.yRy, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: j,
                        children: () =>
                            (0, r.jsx)(c.u, {
                                text: this.getTooltipText(),
                                children: (0, r.jsxs)(k.ZP, {
                                    ref: this.channelItemRef,
                                    className: V.iconVisibility,
                                    iconClassName: o()({ [H.iconLive]: null != f }),
                                    channel: e,
                                    selected: !v && t,
                                    connected: n,
                                    unread: n ? _ : void 0,
                                    resolvedUnreadSetting: y,
                                    mentionCount: O,
                                    locked: i,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: d,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: v,
                                    "aria-label": (0, g.ZP)({
                                        channel: e,
                                        unread: _,
                                        mentionCount: O,
                                        userCount: C,
                                        isSubscriptionGated: m,
                                        needSubscriptionToAccess: b,
                                    }),
                                    children: [
                                        v && this.renderAcceptSuggestionButton(),
                                        v && this.renderRemoveSuggestionButton(),
                                        !v && this.renderOpenChatButton(),
                                        !v && this.renderInviteButton(),
                                        !v && this.renderEditButton(),
                                        !v && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return h && (x = s(x)), p && (x = l(a(x))), x;
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
                    t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, v.Cq)(e),
                    __OVERLAY__ || (0, O.Kh)(e.id);
            }),
            z(this, "handleClickChat", () => {
                let { channel: e, locked: t } = this.props;
                __OVERLAY__ || t || (0, O.Kh)(e.id);
            }),
            z(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    i = N.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, p.jW)(e, async () => {
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
                    return (0, r.jsx)(y.Z, {
                        type: y.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                throw Error("VoiceChannel.renderPopout: There must always be something to render");
            }),
            z(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.u, {
                        asContainer: !0,
                        text: F.intl.string(F.t.ZXxLQg),
                        children: (0, r.jsx)(u.P3F, {
                            className: o()(V.iconItem, n ? V.alwaysShown : null),
                            onClick: () => {
                                d.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                            },
                            "aria-label": F.intl.string(F.t.ZXxLQg),
                            children: (0, r.jsx)(u.kBi, {
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
                return null == t ? null : (0, r.jsx)(s.Z, { children: t });
            });
    }
}
let q = (0, h.B)((0, f.Q)(Y));
function X(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, collapsed: o, voiceStates: s } = e,
        c = (0, a.cj)([T.ZP], () => ({
            unread: T.ZP.hasUnread(n.id),
            mentionCount: T.ZP.getMentionCount(n.id),
        })),
        u = (0, a.e7)([A.ZP], () => A.ZP.resolveUnreadSetting(n)),
        d = (0, a.cj)([P.Z, Z.Z, w.Z], () => {
            let e = P.Z.getChannel(n.parent_id),
                r = Z.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && w.Z.can(U.Plq.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    (t.id === B._ ||
                        (null != e ? w.Z.can(U.Plq.MANAGE_CHANNELS, e) : w.Z.can(U.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: w.Z.can(U.Plq.MOVE_MEMBERS, n),
                locked: !w.Z.can(U.Plq.CONNECT, n),
                bypassLimit: w.Z.can(U.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        p = (0, a.e7)([I.Z], () => I.Z.isCollapsed(n.parent_id)),
        h = (0, S.ZP)(n.id),
        f = (0, a.e7)([x.Z], () => x.Z.getStageInstanceByChannel(n.id), [n.id]),
        g = (0, j.Rk)(n.id, C.pV.AUDIENCE),
        { isSubscriptionGated: m, needSubscriptionToAccess: b } = (0, _.Z)(n.id),
        y = (0, a.e7)([A.ZP], () => A.ZP.isFavorite(t.id, n.id)),
        O = (0, E.xJ)(n.id),
        v = (0, M.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: m,
            needSubscriptionToAccess: b,
            enableConnectedUserLimit: O || (n.userLimit > 0 && n.userLimit < U.xGv),
        }),
        N = e.connected && null == v;
    return (0, r.jsx)(
        q,
        K(
            W(
                {
                    categoryCollapsed: p,
                    connectAction: h,
                    numAudience: g,
                    stageInstance: f,
                    isSubscriptionGated: m,
                    needSubscriptionToAccess: b,
                },
                c,
                d,
                e,
            ),
            {
                isFavoriteSuggestion: l && !y,
                forceShowButtons: N,
                channelInfo: v,
                resolvedUnreadSetting: u,
            },
        ),
    );
}
