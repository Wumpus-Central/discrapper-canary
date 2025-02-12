n.d(t, {
    XX: () => k,
    ZP: () => w,
    ul: () => O
}),
    n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(149765),
    c = n(481060),
    d = n(475179),
    u = n(239091),
    h = n(287734),
    p = n(872810),
    m = n(888651),
    f = n(100527),
    g = n(258609),
    _ = n(257115),
    C = n(569545),
    x = n(102172),
    v = n(525925),
    E = n(701362),
    I = n(184301),
    b = n(347475),
    Z = n(597998),
    N = n(314897),
    T = n(430824),
    S = n(496675),
    j = n(979651),
    y = n(981631),
    A = n(927923),
    P = n(70722),
    R = n(388032),
    M = n(840758);
function L(e, t, n) {
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
function k(e) {
    let { numUsers: t } = e;
    return (0, l.jsx)('div', {
        className: M.moreContainer,
        children: (0, l.jsxs)(c.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function O(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : R.intl.formatToPlainString(R.t['+v2pNz'], { count: t });
    return (0, l.jsxs)('div', {
        className: s()(M.audienceContainer, { [M.audienceContainerCollapsed]: n }),
        children: [
            (0, l.jsx)('div', {
                className: M.audienceIconContainer,
                children: (0, l.jsx)(c.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: M.audienceIcon
                })
            }),
            (0, l.jsx)(c.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
class D extends (i = a.PureComponent) {
    get canWatchStream() {
        let { channel: e, isStreaming: t } = this.props;
        return t && (0, x.p9)(e, j.Z, T.Z, S.Z, g.Z)[0];
    }
    render() {
        let { userPopoutOpen: e } = this.state,
            { connectUserDragSource: t, canDrag: n, isSelfOnOtherClient: i, user: a, channel: r } = this.props,
            s = (0, l.jsx)('div', {
                className: M.draggable,
                'data-dnd-name': r.name,
                onMouseEnter: i ? void 0 : this.handleMouseEnter,
                onMouseLeave: i ? void 0 : this.handleHidePreview,
                children: (0, l.jsx)(c.yRy, {
                    preload: () =>
                        (0, I.Z)(a.id, a.getAvatarURL(r.guild_id, 80), {
                            guildId: r.guild_id,
                            channelId: r.id
                        }),
                    position: 'right',
                    renderPopout: this.renderUserPopout,
                    shouldShow: e,
                    onRequestClose: this.handleCloseUserPopout,
                    children: (e) => this.renderUser(e)
                })
            });
        return n ? t(s) : s;
    }
    constructor(...e) {
        super(...e),
            L(this, 'domElementRef', a.createRef()),
            L(this, 'state', { userPopoutOpen: !1 }),
            L(this, 'handleClickUser', () => {
                this.setState({ userPopoutOpen: !this.state.userPopoutOpen });
            }),
            L(this, 'handleCloseUserPopout', () => {
                this.setState({ userPopoutOpen: !1 });
            }),
            L(this, 'handleHidePreview', () => {
                let { hidePreview: e, isStreaming: t, user: n } = this.props;
                t && (null == e || e(n.id));
            }),
            L(this, 'handleMouseEnter', () => {
                let { user: e, showPreview: t, isStreaming: n } = this.props;
                n && !this.state.userPopoutOpen && (null == t || t(e.id));
            }),
            L(this, 'handleWatchStream', () => {
                let { user: e, channel: t, isWatching: n, hidePreview: i } = this.props;
                if (!this.canWatchStream) return;
                let l = {
                    streamType: P.lo.GUILD,
                    ownerId: e.id,
                    channelId: t.id,
                    guildId: t.guild_id
                };
                N.default.getId() !== e.id && h.default.selectVoiceChannel(t.id), n ? ((0, v.Z)(l), d.Z.selectParticipant(l.channelId, (0, C.V9)(l))) : (0, p.iV)(l), null == i || i(e.id);
            }),
            L(this, 'handleJoinVoice', () => {
                let { user: e, channel: t, hidePreview: n } = this.props;
                S.Z.can(o.$e(y.Plq.CONNECT, y.Plq.VIEW_CHANNEL), t) && (h.default.selectVoiceChannel(t.id), null == n || n(e.id));
            }),
            L(this, 'handleUserContextMenu', (e) => {
                let { channel: t, user: i } = this.props;
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('7717'), n.e('65023')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            user: i,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: t.isGuildStageVoice()
                        });
                });
            }),
            L(this, 'renderUserPopout', (e) => {
                let { channel: t, user: n } = this.props,
                    i = t.getGuildId();
                return (0, l.jsx)(b.Z, {
                    userId: n.id,
                    guildId: null != i ? i : void 0,
                    channelId: t.id,
                    newAnalyticsLocations: [f.Z.VOICE_USER],
                    ...e
                });
            }),
            L(this, 'renderStreamPopout', () => {
                let { user: e, channel: t, previewIsOpen: n, location: i } = this.props;
                return (0, l.jsx)(E.Z, {
                    user: e,
                    channel: t,
                    onWatch: this.handleWatchStream,
                    previewIsOpen: n,
                    location: i
                });
            }),
            L(this, 'renderUser', (e) => {
                let { isSelfOnOtherClient: t, otherClientSessionType: n, voicePlatform: i, shouldShowPreview: a, mute: r, localMute: o, localVideoDisabled: d, speaking: u, disconnected: h, user: p, deaf: m, priority: f, collapsed: g, isStreaming: C, isGuest: x, nick: v, video: E, serverMute: I, serverDeaf: b, tabIndex: N, embeddedApplication: T, channel: S, ringing: j, isSelf: y, application: P } = this.props,
                    { userPopoutOpen: L } = this.state,
                    k = A.al.has(null != n ? n : ''),
                    O = {
                        user: p,
                        speaking: u,
                        disconnected: h,
                        mute: r,
                        localMute: o,
                        localVideoDisabled: d,
                        isStreaming: C,
                        isGuest: x,
                        video: E,
                        priority: f,
                        ringing: j,
                        deaf: m,
                        nick: v,
                        collapsed: g,
                        overlap: g,
                        serverMute: I,
                        serverDeaf: b,
                        tabIndex: N,
                        otherClientSessionType: n,
                        voicePlatform: i,
                        embeddedApplication: T,
                        avatarContainerClass: s()({ [M.userAvatar]: !0 }),
                        disabled: t && !k,
                        selected: L,
                        onClick: k ? void 0 : this.handleClickUser,
                        onDoubleClick: this.handleWatchStream,
                        onContextMenu: this.handleUserContextMenu,
                        guildId: S.guild_id,
                        isSelf: y,
                        application: P,
                        channelId: S.id
                    };
                if (t) {
                    var D;
                    return (0, l.jsx)(c.ua7, {
                        text: null !== (D = (0, _.Z)(n)) && void 0 !== D ? D : R.intl.string(R.t.IyYqqa),
                        children: (e) => {
                            let { onClick: t, onContextMenu: n, ...i } = e;
                            return (0, l.jsx)(Z.ZP, {
                                ...O,
                                ...i
                            });
                        }
                    });
                }
                return (0, l.jsx)(c.yRy, {
                    position: 'right',
                    renderPopout: this.renderStreamPopout,
                    shouldShow: a && !L,
                    onRequestClose: this.handleHidePreview,
                    spacing: 0,
                    children: () =>
                        (0, l.jsx)(Z.ZP, {
                            ...O,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown
                        })
                });
            });
    }
}
L(D, 'defaultProps', { isSelfOnOtherClient: !1 });
let w = (0, m.$)(D);
