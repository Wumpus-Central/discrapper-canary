n.d(t, { Z: () => q }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(146773),
    p = n(888651),
    f = n(201895),
    h = n(111028),
    g = n(305325),
    m = n(281956),
    b = n(66999),
    O = n(378844),
    _ = n(359110),
    y = n(922482),
    v = n(431328),
    j = n(501655),
    C = n(427679),
    x = n(368442),
    E = n(201469),
    S = n(680089),
    I = n(592125),
    P = n(430824),
    N = n(607744),
    w = n(496675),
    Z = n(306680),
    T = n(9156),
    A = n(979651),
    R = n(934415),
    D = n(98597),
    M = n(648501),
    L = n(473403),
    k = n(207055),
    U = n(981631),
    G = n(647086),
    B = n(388032),
    V = n(55940),
    F = n(556295);
function H(e, t, n) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
class K extends D.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, R.rY)(e, A.Z, P.Z);
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
        return (0, r.jsx)(k.Z, {
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
                connectUserDropTarget: c,
                connectDragPreview: u,
                canReorderChannel: d,
                canMoveMembers: p,
                stageInstance: h,
                isSubscriptionGated: g,
                needSubscriptionToAccess: m,
                unread: b,
                resolvedUnreadSetting: O,
                mentionCount: _,
                isFavoriteSuggestion: y,
            } = this.props,
            { shouldShowGuildVerificationPopout: v } = this.state,
            j = this.getVoiceStatesCount(),
            C = (0, r.jsxs)("li", {
                className: o()(this.getModeClass(), { [V.disabled]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: [
                    (0, r.jsx)(s.yRy, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: v,
                        children: () =>
                            (0, r.jsx)(s.ua7, {
                                text: this.getTooltipText(),
                                children: (l) => {
                                    var { onClick: a, onContextMenu: s } = l,
                                        c = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        i = {},
                                                        l = Object.keys(e);
                                                    for (r = 0; r < l.length; r++)
                                                        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                    return i;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < l.length; r++)
                                                    (n = l[r]),
                                                        !(t.indexOf(n) >= 0) &&
                                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                            (i[n] = e[n]);
                                            }
                                            return i;
                                        })(l, ["onClick", "onContextMenu"]);
                                    return (0, r.jsxs)(
                                        L.ZP,
                                        W(
                                            z(
                                                {
                                                    ref: this.channelItemRef,
                                                    className: V.iconVisibility,
                                                    iconClassName: o()({ [F.iconLive]: null != h }),
                                                    channel: e,
                                                    selected: !y && t,
                                                    connected: n,
                                                    unread: n ? b : void 0,
                                                    resolvedUnreadSetting: O,
                                                    mentionCount: _,
                                                    locked: i,
                                                    onClick: () => {
                                                        this.handleClick(), null == a || a();
                                                    },
                                                    onContextMenu: (e) => {
                                                        this.handleContextMenu(e), null == s || s();
                                                    },
                                                    connectDragPreview: u,
                                                    subtitle: this.renderSubtitle(),
                                                    isFavoriteSuggestion: y,
                                                    "aria-label": (0, f.ZP)({
                                                        channel: e,
                                                        unread: b,
                                                        mentionCount: _,
                                                        userCount: j,
                                                        isSubscriptionGated: g,
                                                        needSubscriptionToAccess: m,
                                                    }),
                                                },
                                                c,
                                            ),
                                            {
                                                children: [
                                                    y && this.renderAcceptSuggestionButton(),
                                                    y && this.renderRemoveSuggestionButton(),
                                                    !y && this.renderOpenChatButton(),
                                                    !y && this.renderInviteButton(),
                                                    !y && this.renderEditButton(),
                                                    !y && this.renderChannelInfo(),
                                                ],
                                            },
                                        ),
                                    );
                                },
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return p && (C = c(C)), d && (C = l(a(C))), C;
    }
    constructor(...e) {
        super(...e),
            H(this, "channelItemRef", i.createRef()),
            H(this, "state", { shouldShowGuildVerificationPopout: !1 }),
            H(this, "closeGuildVerificationPopout", () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            H(this, "handleClick", () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: r } = this.props,
                    i = e.getGuildId();
                null != i && (0, m.n)(i) && (0, g.hk)(i),
                    r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, y.Cq)(e),
                    __OVERLAY__ || (0, _.Kh)(e.id);
            }),
            H(this, "handleClickChat", () => {
                let { channel: e, locked: t } = this.props;
                __OVERLAY__ || t || (0, _.Kh)(e.id);
            }),
            H(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    i = P.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("79695"),
                            n.e("18320"),
                            n.e("83331"),
                            n.e("81070"),
                        ]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                W(z({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            }),
            H(this, "renderPopout", () => {
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
            H(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(s.ua7, {
                        text: B.intl.string(B.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: a, onBlur: u } = t;
                            return (0, r.jsx)(s.P3F, {
                                className: o()(V.iconItem, n ? V.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                                },
                                "aria-label": B.intl.string(B.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: a,
                                onBlur: u,
                                children: (0, r.jsx)(s.kBi, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: V.actionIcon,
                                }),
                            });
                        },
                    });
            }),
            H(this, "getTooltipText", () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? B.intl.string(B.t.rZfiNj) : null;
            }),
            H(this, "renderSubtitle", () => {
                var e;
                let t = null == (e = this.props.stageInstance) ? void 0 : e.topic;
                return null == t ? null : (0, r.jsx)(h.Z, { children: t });
            });
    }
}
let Y = (0, d.B)((0, p.Q)(K));
function q(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, collapsed: o, voiceStates: s } = e,
        c = (0, a.cj)([Z.ZP], () => ({
            unread: Z.ZP.hasUnread(n.id),
            mentionCount: Z.ZP.getMentionCount(n.id),
        })),
        u = (0, a.e7)([T.ZP], () => T.ZP.resolveUnreadSetting(n)),
        d = (0, a.cj)([I.Z, N.Z, w.Z], () => {
            let e = I.Z.getChannel(n.parent_id),
                r = N.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && w.Z.can(U.Plq.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    (t.id === G._ ||
                        (null != e ? w.Z.can(U.Plq.MANAGE_CHANNELS, e) : w.Z.can(U.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: w.Z.can(U.Plq.MOVE_MEMBERS, n),
                locked: !w.Z.can(U.Plq.CONNECT, n),
                bypassLimit: w.Z.can(U.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        p = (0, a.e7)([S.Z], () => S.Z.isCollapsed(n.parent_id)),
        f = (0, E.ZP)(n.id),
        h = (0, a.e7)([C.Z], () => C.Z.getStageInstanceByChannel(n.id), [n.id]),
        g = (0, v.Rk)(n.id, j.pV.AUDIENCE),
        { isSubscriptionGated: m, needSubscriptionToAccess: O } = (0, b.Z)(n.id),
        _ = (0, a.e7)([T.ZP], () => T.ZP.isFavorite(t.id, n.id)),
        y = (0, x.xJ)(n.id),
        P = (0, M.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: m,
            needSubscriptionToAccess: O,
            enableConnectedUserLimit: y || (n.userLimit > 0 && n.userLimit < U.xGv),
        }),
        A = e.connected && null == P;
    return (0, r.jsx)(
        Y,
        W(
            z(
                {
                    categoryCollapsed: p,
                    connectAction: f,
                    numAudience: g,
                    stageInstance: h,
                    isSubscriptionGated: m,
                    needSubscriptionToAccess: O,
                },
                c,
                d,
                e,
            ),
            {
                isFavoriteSuggestion: l && !_,
                forceShowButtons: A,
                channelInfo: P,
                resolvedUnreadSetting: u,
            },
        ),
    );
}
