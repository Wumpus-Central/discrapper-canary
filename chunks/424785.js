n.d(t, { Z: () => W }), n(47120), n(411104);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(475179),
    c = n(239091),
    d = n(146773),
    u = n(888651),
    h = n(201895),
    p = n(111028),
    m = n(305325),
    g = n(281956),
    f = n(66999),
    _ = n(378844),
    v = n(359110),
    C = n(922482),
    x = n(431328),
    I = n(501655),
    Z = n(427679),
    b = n(368442),
    S = n(201469),
    N = n(680089),
    E = n(592125),
    j = n(430824),
    y = n(607744),
    T = n(496675),
    A = n(306680),
    P = n(9156),
    R = n(979651),
    w = n(934415),
    L = n(98597),
    M = n(648501),
    D = n(473403),
    G = n(207055),
    k = n(981631),
    B = n(647086),
    O = n(388032),
    U = n(952107),
    V = n(154357);
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
class H extends L.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, w.rY)(e, R.Z, j.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        return n ? U.containerUserOver : null != t ? (e > t ? U.containerDragAfter : U.containerDragBefore) : U.containerDefault;
    }
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: r } = this.props;
        return (0, i.jsx)(G.Z, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: k.Sbl.GUILD_CHANNEL_LIST,
            numAudience: r
        });
    }
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    render() {
        let { channel: e, selected: t, connected: n, locked: l, connectChannelDropTarget: a, connectChannelDragSource: s, connectUserDropTarget: c, connectDragPreview: d, canReorderChannel: u, canMoveMembers: p, stageInstance: m, isSubscriptionGated: g, needSubscriptionToAccess: f, unread: _, resolvedUnreadSetting: v, mentionCount: C, isFavoriteSuggestion: x } = this.props,
            { shouldShowGuildVerificationPopout: I } = this.state,
            Z = this.getVoiceStatesCount(),
            b = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [U.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)(o.yRy, {
                        position: 'right',
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: I,
                        children: () =>
                            (0, i.jsx)(o.ua7, {
                                text: this.getTooltipText(),
                                children: (a) => {
                                    let { onClick: o, onContextMenu: s, ...c } = a;
                                    return (0, i.jsxs)(D.Z, {
                                        className: U.iconVisibility,
                                        iconClassName: r()({ [V.iconLive]: null != m }),
                                        channel: e,
                                        selected: !x && t,
                                        connected: n,
                                        unread: n ? _ : void 0,
                                        resolvedUnreadSetting: v,
                                        mentionCount: C,
                                        locked: l,
                                        onClick: () => {
                                            this.handleClick(), null == o || o();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e), null == s || s();
                                        },
                                        connectDragPreview: d,
                                        subtitle: this.renderSubtitle(),
                                        isFavoriteSuggestion: x,
                                        'aria-label': (0, h.ZP)({
                                            channel: e,
                                            unread: _,
                                            mentionCount: C,
                                            userCount: Z,
                                            isSubscriptionGated: g,
                                            needSubscriptionToAccess: f
                                        }),
                                        ...c,
                                        children: [x && this.renderAcceptSuggestionButton(), x && this.renderRemoveSuggestionButton(), !x && this.renderOpenChatButton(), !x && this.renderInviteButton(), !x && this.renderEditButton(), !x && this.renderChannelInfo()]
                                    });
                                }
                            })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return p && (b = c(b)), u && (b = a(s(b))), b;
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { shouldShowGuildVerificationPopout: !1 }),
            F(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            F(this, 'handleClick', () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: i } = this.props,
                    l = e.getGuildId();
                null != l && (0, g.n)(l) && (0, m.hk)(l), i && this.setState({ shouldShowGuildVerificationPopout: !0 }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, C.Cq)(e), __OVERLAY__ || (0, v.Kh)(e.id);
            }),
            F(this, 'handleClickChat', () => {
                let { channel: e, locked: t } = this.props;
                __OVERLAY__ || t || (0, v.Kh)(e.id);
            }),
            F(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = j.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            F(this, 'renderPopout', () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, i.jsx)(_.Z, {
                        type: _.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            F(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(o.ua7, {
                        text: O.intl.string(O.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: c, onBlur: d } = t;
                            return (0, i.jsx)(o.P3F, {
                                className: r()(U.iconItem, n ? U.alwaysShown : null),
                                onClick: () => {
                                    s.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                                },
                                'aria-label': O.intl.string(O.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: c,
                                onBlur: d,
                                children: (0, i.jsx)(o.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: U.actionIcon
                                })
                            });
                        }
                    });
            }),
            F(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? O.intl.string(O.t.rZfiNj) : null;
            }),
            F(this, 'renderSubtitle', () => {
                var e;
                let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
                return null == t ? null : (0, i.jsx)(p.Z, { children: t });
            });
    }
}
let z = (0, d.B)((0, u.Q)(H));
function W(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, collapsed: o, voiceStates: s } = e,
        c = (0, a.cj)([A.ZP], () => ({
            unread: A.ZP.hasUnread(n.id),
            mentionCount: A.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([P.ZP], () => P.ZP.resolveUnreadSetting(n)),
        u = (0, a.cj)([E.Z, y.Z, T.Z], () => {
            let e = E.Z.getChannel(n.parent_id),
                i = y.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && T.Z.can(k.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === B._ || (null != e ? T.Z.can(k.Plq.MANAGE_CHANNELS, e) : T.Z.can(k.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: T.Z.can(k.Plq.MOVE_MEMBERS, n),
                locked: !T.Z.can(k.Plq.CONNECT, n),
                bypassLimit: T.Z.can(k.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        h = (0, a.e7)([N.Z], () => N.Z.isCollapsed(n.parent_id)),
        p = (0, S.ZP)(n.id),
        m = (0, a.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(n.id), [n.id]),
        g = (0, x.Rk)(n.id, I.pV.AUDIENCE),
        { isSubscriptionGated: _, needSubscriptionToAccess: v } = (0, f.Z)(n.id),
        C = (0, a.e7)([P.ZP], () => P.ZP.isFavorite(t.id, n.id)),
        j = (0, b.xJ)(n.id),
        R = (0, M.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: _,
            needSubscriptionToAccess: v,
            enableConnectedUserLimit: j || (n.userLimit > 0 && n.userLimit < k.xGv)
        }),
        w = e.connected && null == R;
    return (0, i.jsx)(z, {
        categoryCollapsed: h,
        connectAction: p,
        numAudience: g,
        stageInstance: m,
        isSubscriptionGated: _,
        needSubscriptionToAccess: v,
        ...c,
        ...u,
        ...e,
        isFavoriteSuggestion: r && !C,
        forceShowButtons: w,
        channelInfo: R,
        resolvedUnreadSetting: d
    });
}
