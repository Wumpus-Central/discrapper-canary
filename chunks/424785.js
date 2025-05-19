n.d(t, { Z: () => q }), n(388685), n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(146773),
    h = n(888651),
    p = n(201895),
    f = n(111028),
    g = n(305325),
    m = n(281956),
    b = n(66999),
    y = n(378844),
    O = n(359110),
    v = n(922482),
    _ = n(431328),
    C = n(501655),
    j = n(427679),
    S = n(368442),
    E = n(201469),
    x = n(680089),
    P = n(592125),
    I = n(430824),
    w = n(607744),
    N = n(496675),
    Z = n(306680),
    T = n(9156),
    A = n(979651),
    R = n(934415),
    D = n(98597),
    L = n(648501),
    k = n(473403),
    M = n(207055),
    U = n(981631),
    G = n(647086),
    B = n(388032),
    V = n(915887),
    H = n(185346);
function F(e, t, n) {
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
function z(e) {
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
                F(e, t, n[t]);
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
class Y extends D.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, R.rY)(e, A.Z, I.Z);
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
        return (0, r.jsx)(M.Z, {
            channel: e,
            voiceStates: i,
            collapsed: t,
            tabIndex: n,
            location: U.Sbl.GUILD_CHANNEL_LIST,
            numAudience: l
        });
    }
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    render() {
        let { channel: e, selected: t, connected: n, locked: i, connectChannelDropTarget: l, connectChannelDragSource: s, connectUserDropTarget: c, connectDragPreview: u, canReorderChannel: d, canMoveMembers: h, stageInstance: f, isSubscriptionGated: g, needSubscriptionToAccess: m, unread: b, resolvedUnreadSetting: y, mentionCount: O, isFavoriteSuggestion: v } = this.props,
            { shouldShowGuildVerificationPopout: _ } = this.state,
            C = this.getVoiceStatesCount(),
            j = (0, r.jsxs)('li', {
                className: o()(this.getModeClass(), { [V.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, r.jsx)(a.yRy, {
                        targetElementRef: this.channelItemRef,
                        position: 'right',
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: _,
                        children: () =>
                            (0, r.jsx)(a.ua7, {
                                text: this.getTooltipText(),
                                children: (l) => {
                                    var { onClick: s, onContextMenu: a } = l,
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
                                        })(l, ['onClick', 'onContextMenu']);
                                    return (0, r.jsxs)(
                                        k.ZP,
                                        W(
                                            z(
                                                {
                                                    ref: this.channelItemRef,
                                                    className: V.iconVisibility,
                                                    iconClassName: o()({ [H.iconLive]: null != f }),
                                                    channel: e,
                                                    selected: !v && t,
                                                    connected: n,
                                                    unread: n ? b : void 0,
                                                    resolvedUnreadSetting: y,
                                                    mentionCount: O,
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
                                                    'aria-label': (0, p.ZP)({
                                                        channel: e,
                                                        unread: b,
                                                        mentionCount: O,
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
        return h && (j = c(j)), d && (j = l(s(j))), j;
    }
    constructor(...e) {
        super(...e),
            F(this, 'channelItemRef', i.createRef()),
            F(this, 'state', { shouldShowGuildVerificationPopout: !1 }),
            F(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            F(this, 'handleClick', () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: r } = this.props,
                    i = e.getGuildId();
                null != i && (0, m.n)(i) && (0, g.hk)(i), r && this.setState({ shouldShowGuildVerificationPopout: !0 }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, v.Cq)(e), __OVERLAY__ || (0, O.Kh)(e.id);
            }),
            F(this, 'handleClickChat', () => {
                let { channel: e, locked: t } = this.props;
                __OVERLAY__ || t || (0, O.Kh)(e.id);
            }),
            F(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = I.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                W(z({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            F(this, 'renderPopout', () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, r.jsx)(y.Z, {
                        type: y.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            F(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(a.ua7, {
                        text: B.intl.string(B.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: s, onBlur: u } = t;
                            return (0, r.jsx)(a.P3F, {
                                className: o()(V.iconItem, n ? V.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                                },
                                'aria-label': B.intl.string(B.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: s,
                                onBlur: u,
                                children: (0, r.jsx)(a.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: V.actionIcon
                                })
                            });
                        }
                    });
            }),
            F(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? B.intl.string(B.t.rZfiNj) : null;
            }),
            F(this, 'renderSubtitle', () => {
                var e;
                let t = null == (e = this.props.stageInstance) ? void 0 : e.topic;
                return null == t ? null : (0, r.jsx)(f.Z, { children: t });
            });
    }
}
let K = (0, d.B)((0, h.Q)(Y));
function q(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, collapsed: o, voiceStates: a } = e,
        c = (0, s.cj)([Z.ZP], () => ({
            unread: Z.ZP.hasUnread(n.id),
            mentionCount: Z.ZP.getMentionCount(n.id)
        })),
        u = (0, s.e7)([T.ZP], () => T.ZP.resolveUnreadSetting(n)),
        d = (0, s.cj)([P.Z, w.Z, N.Z], () => {
            let e = P.Z.getChannel(n.parent_id),
                r = w.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && N.Z.can(U.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === G._ || (null != e ? N.Z.can(U.Plq.MANAGE_CHANNELS, e) : N.Z.can(U.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: N.Z.can(U.Plq.MOVE_MEMBERS, n),
                locked: !N.Z.can(U.Plq.CONNECT, n),
                bypassLimit: N.Z.can(U.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        h = (0, s.e7)([x.Z], () => x.Z.isCollapsed(n.parent_id)),
        p = (0, E.ZP)(n.id),
        f = (0, s.e7)([j.Z], () => j.Z.getStageInstanceByChannel(n.id), [n.id]),
        g = (0, _.Rk)(n.id, C.pV.AUDIENCE),
        { isSubscriptionGated: m, needSubscriptionToAccess: y } = (0, b.Z)(n.id),
        O = (0, s.e7)([T.ZP], () => T.ZP.isFavorite(t.id, n.id)),
        v = (0, S.xJ)(n.id),
        I = (0, L.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: a,
            isSubscriptionGated: m,
            needSubscriptionToAccess: y,
            enableConnectedUserLimit: v || (n.userLimit > 0 && n.userLimit < U.xGv)
        }),
        A = e.connected && null == I;
    return (0, r.jsx)(
        K,
        W(
            z(
                {
                    categoryCollapsed: h,
                    connectAction: p,
                    numAudience: g,
                    stageInstance: f,
                    isSubscriptionGated: m,
                    needSubscriptionToAccess: y
                },
                c,
                d,
                e
            ),
            {
                isFavoriteSuggestion: l && !O,
                forceShowButtons: A,
                channelInfo: I,
                resolvedUnreadSetting: u
            }
        )
    );
}
