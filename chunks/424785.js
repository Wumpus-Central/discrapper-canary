n.d(t, { Z: () => K }), n(388685), n(415506);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    a = n(475179),
    c = n(239091),
    u = n(146773),
    d = n(888651),
    h = n(201895),
    p = n(111028),
    f = n(305325),
    g = n(281956),
    m = n(66999),
    b = n(378844),
    y = n(359110),
    _ = n(922482),
    v = n(431328),
    O = n(501655),
    C = n(427679),
    S = n(368442),
    j = n(201469),
    E = n(680089),
    x = n(592125),
    I = n(430824),
    N = n(607744),
    P = n(496675),
    w = n(306680),
    Z = n(9156),
    T = n(979651),
    A = n(934415),
    R = n(98597),
    D = n(648501),
    L = n(473403),
    k = n(207055),
    M = n(981631),
    U = n(647086),
    G = n(388032),
    B = n(653084),
    W = n(318798);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
class z extends R.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, A.rY)(e, T.Z, I.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return B.containerUserOver;
        if (null != t)
            if (e > t) return B.containerDragAfter;
            else return B.containerDragBefore;
        return B.containerDefault;
    }
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, r.jsx)(k.Z, {
            channel: e,
            voiceStates: i,
            collapsed: t,
            tabIndex: n,
            location: M.Sbl.GUILD_CHANNEL_LIST,
            numAudience: l
        });
    }
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    render() {
        let { channel: e, selected: t, connected: n, locked: i, connectChannelDropTarget: o, connectChannelDragSource: a, connectUserDropTarget: c, connectDragPreview: u, canReorderChannel: d, canMoveMembers: p, stageInstance: f, isSubscriptionGated: g, needSubscriptionToAccess: m, unread: b, resolvedUnreadSetting: y, mentionCount: _, isFavoriteSuggestion: v } = this.props,
            { shouldShowGuildVerificationPopout: O } = this.state,
            C = this.getVoiceStatesCount(),
            S = (0, r.jsxs)('li', {
                className: l()(this.getModeClass(), { [B.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, r.jsx)(s.yRy, {
                        position: 'right',
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: O,
                        children: () =>
                            (0, r.jsx)(s.ua7, {
                                text: this.getTooltipText(),
                                children: (o) => {
                                    var { onClick: s, onContextMenu: a } = o,
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
                                                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                    return i;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                            }
                                            return i;
                                        })(o, ['onClick', 'onContextMenu']);
                                    return (0, r.jsxs)(
                                        L.ZP,
                                        F(
                                            H(
                                                {
                                                    className: B.iconVisibility,
                                                    iconClassName: l()({ [W.iconLive]: null != f }),
                                                    channel: e,
                                                    selected: !v && t,
                                                    connected: n,
                                                    unread: n ? b : void 0,
                                                    resolvedUnreadSetting: y,
                                                    mentionCount: _,
                                                    locked: i,
                                                    onClick: () => {
                                                        this.handleClick(), null == s || s();
                                                    },
                                                    onContextMenu: (e) => {
                                                        this.handleContextMenu(e), null == a || a();
                                                    },
                                                    connectDragPreview: u,
                                                    subtitle: this.renderSubtitle(),
                                                    isFavoriteSuggestion: v,
                                                    'aria-label': (0, h.ZP)({
                                                        channel: e,
                                                        unread: b,
                                                        mentionCount: _,
                                                        userCount: C,
                                                        isSubscriptionGated: g,
                                                        needSubscriptionToAccess: m
                                                    })
                                                },
                                                c
                                            ),
                                            {
                                                children: [v && this.renderAcceptSuggestionButton(), v && this.renderRemoveSuggestionButton(), !v && this.renderOpenChatButton(), !v && this.renderInviteButton(), !v && this.renderEditButton(), !v && this.renderChannelInfo()]
                                            }
                                        )
                                    );
                                }
                            })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return p && (S = c(S)), d && (S = o(a(S))), S;
    }
    constructor(...e) {
        super(...e),
            V(this, 'state', { shouldShowGuildVerificationPopout: !1 }),
            V(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            V(this, 'handleClick', () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: r } = this.props,
                    i = e.getGuildId();
                null != i && (0, g.n)(i) && (0, f.hk)(i), r && this.setState({ shouldShowGuildVerificationPopout: !0 }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, _.Cq)(e), __OVERLAY__ || (0, y.Kh)(e.id);
            }),
            V(this, 'handleClickChat', () => {
                let { channel: e, locked: t } = this.props;
                __OVERLAY__ || t || (0, y.Kh)(e.id);
            }),
            V(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = I.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('26881'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                F(H({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            V(this, 'renderPopout', () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, r.jsx)(b.Z, {
                        type: b.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            V(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(s.ua7, {
                        text: G.NW.string(G.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: o, onFocus: c, onBlur: u } = t;
                            return (0, r.jsx)(s.P3F, {
                                className: l()(B.iconItem, n ? B.alwaysShown : null),
                                onClick: () => {
                                    a.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                                },
                                'aria-label': G.NW.string(G.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: o,
                                onFocus: c,
                                onBlur: u,
                                children: (0, r.jsx)(s.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: B.actionIcon
                                })
                            });
                        }
                    });
            }),
            V(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? G.NW.string(G.t.rZfiNj) : null;
            }),
            V(this, 'renderSubtitle', () => {
                var e;
                let t = null == (e = this.props.stageInstance) ? void 0 : e.topic;
                return null == t ? null : (0, r.jsx)(p.Z, { children: t });
            });
    }
}
let Y = (0, u.B)((0, d.Q)(z));
function K(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, collapsed: s, voiceStates: a } = e,
        c = (0, o.cj)([w.ZP], () => ({
            unread: w.ZP.hasUnread(n.id),
            mentionCount: w.ZP.getMentionCount(n.id)
        })),
        u = (0, o.e7)([Z.ZP], () => Z.ZP.resolveUnreadSetting(n)),
        d = (0, o.cj)([x.Z, N.Z, P.Z], () => {
            let e = x.Z.getChannel(n.parent_id),
                r = N.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && P.Z.can(M.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === U._ || (null != e ? P.Z.can(M.Plq.MANAGE_CHANNELS, e) : P.Z.can(M.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: P.Z.can(M.Plq.MOVE_MEMBERS, n),
                locked: !P.Z.can(M.Plq.CONNECT, n),
                bypassLimit: P.Z.can(M.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        h = (0, o.e7)([E.Z], () => E.Z.isCollapsed(n.parent_id)),
        p = (0, j.ZP)(n.id),
        f = (0, o.e7)([C.Z], () => C.Z.getStageInstanceByChannel(n.id), [n.id]),
        g = (0, v.Rk)(n.id, O.pV.AUDIENCE),
        { isSubscriptionGated: b, needSubscriptionToAccess: y } = (0, m.Z)(n.id),
        _ = (0, o.e7)([Z.ZP], () => Z.ZP.isFavorite(t.id, n.id)),
        I = (0, S.xJ)(n.id),
        T = (0, D.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: s,
            voiceStates: a,
            isSubscriptionGated: b,
            needSubscriptionToAccess: y,
            enableConnectedUserLimit: I || (n.userLimit > 0 && n.userLimit < M.xGv)
        }),
        A = e.connected && null == T;
    return (0, r.jsx)(
        Y,
        F(
            H(
                {
                    categoryCollapsed: h,
                    connectAction: p,
                    numAudience: g,
                    stageInstance: f,
                    isSubscriptionGated: b,
                    needSubscriptionToAccess: y
                },
                c,
                d,
                e
            ),
            {
                isFavoriteSuggestion: l && !_,
                forceShowButtons: A,
                channelInfo: T,
                resolvedUnreadSetting: u
            }
        )
    );
}
