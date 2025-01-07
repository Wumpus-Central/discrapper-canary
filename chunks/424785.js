n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120),
    n(411104);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(475179),
    c = n(239091),
    u = n(146773),
    d = n(888651),
    h = n(201895),
    p = n(111028),
    f = n(305325),
    m = n(281956),
    g = n(66999),
    v = n(378844),
    C = n(359110),
    x = n(922482),
    I = n(431328),
    _ = n(501655),
    Z = n(427679),
    b = n(368442),
    S = n(201469),
    N = n(680089),
    E = n(592125),
    y = n(430824),
    j = n(607744),
    T = n(496675),
    P = n(306680),
    A = n(9156),
    w = n(979651),
    M = n(934415),
    L = n(98597),
    R = n(648501),
    D = n(473403),
    G = n(207055),
    B = n(981631),
    k = n(647086),
    U = n(388032),
    O = n(831746),
    V = n(645693);
function H(e, t, n) {
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
class F extends L.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, M.rY)(e, w.Z, y.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return O.containerUserOver;
        if (null != t) return e > t ? O.containerDragAfter : O.containerDragBefore;
        return O.containerDefault;
    }
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: r } = this.props;
        return (0, i.jsx)(G.Z, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: B.Sbl.GUILD_CHANNEL_LIST,
            numAudience: r
        });
    }
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    render() {
        let { channel: e, selected: t, connected: n, locked: l, connectChannelDropTarget: a, connectChannelDragSource: s, connectUserDropTarget: c, connectDragPreview: u, canReorderChannel: d, canMoveMembers: p, stageInstance: f, isSubscriptionGated: m, needSubscriptionToAccess: g, unread: v, resolvedUnreadSetting: C, mentionCount: x, isFavoriteSuggestion: I } = this.props,
            { shouldShowGuildVerificationPopout: _ } = this.state,
            Z = this.getVoiceStatesCount(),
            b = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [O.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)(o.Popout, {
                        position: 'right',
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: _,
                        children: () =>
                            (0, i.jsx)(o.Tooltip, {
                                text: this.getTooltipText(),
                                children: (a) => {
                                    let { onClick: o, onContextMenu: s, ...c } = a;
                                    return (0, i.jsxs)(D.Z, {
                                        className: O.iconVisibility,
                                        iconClassName: r()({ [V.iconLive]: null != f }),
                                        channel: e,
                                        selected: !I && t,
                                        connected: n,
                                        unread: n ? v : void 0,
                                        resolvedUnreadSetting: C,
                                        mentionCount: x,
                                        locked: l,
                                        onClick: () => {
                                            this.handleClick(), null == o || o();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e), null == s || s();
                                        },
                                        connectDragPreview: u,
                                        subtitle: this.renderSubtitle(),
                                        isFavoriteSuggestion: I,
                                        'aria-label': (0, h.ZP)({
                                            channel: e,
                                            unread: v,
                                            mentionCount: x,
                                            userCount: Z,
                                            isSubscriptionGated: m,
                                            needSubscriptionToAccess: g
                                        }),
                                        ...c,
                                        children: [I && this.renderAcceptSuggestionButton(), I && this.renderRemoveSuggestionButton(), !I && this.renderOpenChatButton(), !I && this.renderInviteButton(), !I && this.renderEditButton(), !I && this.renderChannelInfo()]
                                    });
                                }
                            })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return p && (b = c(b)), d && (b = a(s(b))), b;
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', { shouldShowGuildVerificationPopout: !1 }),
            H(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            H(this, 'handleClick', () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: i } = this.props,
                    l = e.getGuildId();
                null != l && (0, m.n)(l) && (0, f.hk)(l), i && this.setState({ shouldShowGuildVerificationPopout: !0 }), !t && !n && !e.isRoleSubscriptionTemplatePreviewChannel() && (0, x.Cq)(e), !__OVERLAY__ && (0, C.Kh)(e.id);
            }),
            H(this, 'handleClickChat', () => {
                let { channel: e, locked: t } = this.props;
                !__OVERLAY__ && !t && (0, C.Kh)(e.id);
            }),
            H(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = y.Z.getGuild(t.getGuildId());
                if (null != l)
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            H(this, 'renderPopout', () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, i.jsx)(v.Z, {
                        type: v.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            H(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(o.Tooltip, {
                        text: U.intl.string(U.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: c, onBlur: u } = t;
                            return (0, i.jsx)(o.Clickable, {
                                className: r()(O.iconItem, n ? O.alwaysShown : null),
                                onClick: () => {
                                    s.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                                },
                                'aria-label': U.intl.string(U.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: c,
                                onBlur: u,
                                children: (0, i.jsx)(o.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: O.actionIcon
                                })
                            });
                        }
                    });
            }),
            H(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? U.intl.string(U.t.rZfiNj) : null;
            }),
            H(this, 'renderSubtitle', () => {
                var e;
                let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
                return null == t ? null : (0, i.jsx)(p.Z, { children: t });
            });
    }
}
let W = (0, u.B)((0, d.Q)(F));
function z(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, collapsed: o, voiceStates: s } = e,
        c = (0, a.cj)([P.ZP], () => ({
            unread: P.ZP.hasUnread(n.id),
            mentionCount: P.ZP.getMentionCount(n.id)
        })),
        u = (0, a.e7)([A.ZP], () => A.ZP.resolveUnreadSetting(n)),
        d = (0, a.cj)([E.Z, j.Z, T.Z], () => {
            let e = E.Z.getChannel(n.parent_id),
                i = j.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && T.Z.can(B.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === k._ || (null != e ? T.Z.can(B.Plq.MANAGE_CHANNELS, e) : T.Z.can(B.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: T.Z.can(B.Plq.MOVE_MEMBERS, n),
                locked: !T.Z.can(B.Plq.CONNECT, n),
                bypassLimit: T.Z.can(B.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        h = (0, a.e7)([N.Z], () => N.Z.isCollapsed(n.parent_id)),
        p = (0, S.ZP)(n.id),
        f = (0, a.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(n.id), [n.id]),
        m = (0, I.Rk)(n.id, _.pV.AUDIENCE),
        { isSubscriptionGated: v, needSubscriptionToAccess: C } = (0, g.Z)(n.id),
        x = (0, a.e7)([A.ZP], () => A.ZP.isFavorite(t.id, n.id)),
        y = (0, b.xJ)(n.id),
        w = (0, R.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: v,
            needSubscriptionToAccess: C,
            enableConnectedUserLimit: y || (n.userLimit > 0 && n.userLimit < B.xGv)
        }),
        M = e.connected && null == w;
    return (0, i.jsx)(W, {
        categoryCollapsed: h,
        connectAction: p,
        numAudience: m,
        stageInstance: f,
        isSubscriptionGated: v,
        needSubscriptionToAccess: C,
        ...c,
        ...d,
        ...e,
        isFavoriteSuggestion: r && !x,
        forceShowButtons: M,
        channelInfo: w,
        resolvedUnreadSetting: u
    });
}
