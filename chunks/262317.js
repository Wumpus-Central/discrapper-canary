n.d(t, {
    XX: () => L,
    ZP: () => U,
    ul: () => D
}),
    n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(149765),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    p = n(287734),
    h = n(872810),
    f = n(888651),
    m = n(100527),
    g = n(258609),
    b = n(257115),
    _ = n(569545),
    C = n(102172),
    v = n(525925),
    y = n(701362),
    x = n(184301),
    j = n(347475),
    O = n(597998),
    N = n(314897),
    E = n(430824),
    P = n(496675),
    I = n(979651),
    S = n(981631),
    Z = n(927923),
    T = n(70722),
    A = n(388032),
    w = n(473563);
function R(e, t, n) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function L(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)('div', {
        className: w.moreContainer,
        children: (0, i.jsxs)(c.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function D(e) {
    let { numAudience: t, collapsed: n } = e,
        r = n ? t : A.NW.formatToPlainString(A.t['+v2pNz'], { count: t });
    return (0, i.jsxs)('div', {
        className: a()(w.audienceContainer, { [w.audienceContainerCollapsed]: n }),
        children: [
            (0, i.jsx)('div', {
                className: w.audienceIconContainer,
                children: (0, i.jsx)(c.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: w.audienceIcon
                })
            }),
            (0, i.jsx)(c.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: r
            })
        ]
    });
}
class W extends (r = l.PureComponent) {
    get canWatchStream() {
        let { channel: e, isStreaming: t } = this.props;
        return t && (0, C.p9)(e, I.Z, E.Z, P.Z, g.Z)[0];
    }
    render() {
        let { userPopoutOpen: e } = this.state,
            { connectUserDragSource: t, canDrag: n, isSelfOnOtherClient: r, user: l, channel: o } = this.props,
            a = (0, i.jsx)('div', {
                className: w.draggable,
                'data-dnd-name': o.name,
                onMouseEnter: r ? void 0 : this.handleMouseEnter,
                onMouseLeave: r ? void 0 : this.handleHidePreview,
                children: (0, i.jsx)(c.yRy, {
                    preload: () =>
                        (0, x.Z)(l.id, l.getAvatarURL(o.guild_id, 80), {
                            guildId: o.guild_id,
                            channelId: o.id
                        }),
                    position: 'right',
                    renderPopout: this.renderUserPopout,
                    shouldShow: e,
                    onRequestClose: this.handleCloseUserPopout,
                    children: (e) => this.renderUser(e)
                })
            });
        return n ? t(a) : a;
    }
    constructor(...e) {
        super(...e),
            R(this, 'domElementRef', l.createRef()),
            R(this, 'state', { userPopoutOpen: !1 }),
            R(this, 'handleClickUser', () => {
                this.setState({ userPopoutOpen: !this.state.userPopoutOpen });
            }),
            R(this, 'handleCloseUserPopout', () => {
                this.setState({ userPopoutOpen: !1 });
            }),
            R(this, 'handleHidePreview', () => {
                let { hidePreview: e, isStreaming: t, user: n } = this.props;
                t && (null == e || e(n.id));
            }),
            R(this, 'handleMouseEnter', () => {
                let { user: e, showPreview: t, isStreaming: n } = this.props;
                n && !this.state.userPopoutOpen && (null == t || t(e.id));
            }),
            R(this, 'handleWatchStream', () => {
                let { user: e, channel: t, isWatching: n, hidePreview: r } = this.props;
                if (!this.canWatchStream) return;
                let i = {
                    streamType: T.lo.GUILD,
                    ownerId: e.id,
                    channelId: t.id,
                    guildId: t.guild_id
                };
                N.default.getId() !== e.id && p.default.selectVoiceChannel(t.id), n ? ((0, v.Z)(i), u.Z.selectParticipant(i.channelId, (0, _.V9)(i))) : (0, h.iV)(i), null == r || r(e.id);
            }),
            R(this, 'handleJoinVoice', () => {
                let { user: e, channel: t, hidePreview: n } = this.props;
                P.Z.can(s.$e(S.Plq.CONNECT, S.Plq.VIEW_CHANNEL), t) && (p.default.selectVoiceChannel(t.id), null == n || n(e.id));
            }),
            R(this, 'handleUserContextMenu', (e) => {
                let { channel: t, user: r } = this.props;
                (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            M(k({}, n), {
                                user: r,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: t.isGuildStageVoice()
                            })
                        );
                });
            }),
            R(this, 'renderUserPopout', (e) => {
                let { channel: t, user: n } = this.props,
                    r = t.getGuildId();
                return (0, i.jsx)(
                    j.Z,
                    k(
                        {
                            userId: n.id,
                            guildId: null != r ? r : void 0,
                            channelId: t.id,
                            newAnalyticsLocations: [m.Z.VOICE_USER]
                        },
                        e
                    )
                );
            }),
            R(this, 'renderStreamPopout', () => {
                let { user: e, channel: t, previewIsOpen: n, location: r } = this.props;
                return (0, i.jsx)(y.Z, {
                    user: e,
                    channel: t,
                    onWatch: this.handleWatchStream,
                    previewIsOpen: n,
                    location: r
                });
            }),
            R(this, 'renderUser', (e) => {
                let { isSelfOnOtherClient: t, otherClientSessionType: n, voicePlatform: r, shouldShowPreview: l, mute: o, localMute: s, localVideoDisabled: u, speaking: d, disconnected: p, user: h, deaf: f, priority: m, collapsed: g, isStreaming: _, isGuest: C, nick: v, video: y, serverMute: x, serverDeaf: j, tabIndex: N, embeddedApplication: E, channel: P, ringing: I, isSelf: S, application: T } = this.props,
                    { userPopoutOpen: R } = this.state,
                    L = Z.al.has(null != n ? n : ''),
                    D = {
                        user: h,
                        speaking: d,
                        disconnected: p,
                        mute: o,
                        localMute: s,
                        localVideoDisabled: u,
                        isStreaming: _,
                        isGuest: C,
                        video: y,
                        priority: m,
                        ringing: I,
                        deaf: f,
                        nick: v,
                        collapsed: g,
                        overlap: g,
                        serverMute: x,
                        serverDeaf: j,
                        tabIndex: N,
                        otherClientSessionType: n,
                        voicePlatform: r,
                        embeddedApplication: E,
                        avatarContainerClass: a()({ [w.userAvatar]: !0 }),
                        disabled: t && !L,
                        selected: R,
                        onClick: L ? void 0 : this.handleClickUser,
                        onDoubleClick: this.handleWatchStream,
                        onContextMenu: this.handleUserContextMenu,
                        guildId: P.guild_id,
                        isSelf: S,
                        application: T,
                        channelId: P.id
                    };
                if (t) {
                    var W;
                    return (0, i.jsx)(c.ua7, {
                        text: null !== (W = (0, b.Z)(n)) && void 0 !== W ? W : A.NW.string(A.t.IyYqqa),
                        children: (e) => {
                            var { onClick: t, onContextMenu: n } = e,
                                r = (function (e, t) {
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
                                })(e, ['onClick', 'onContextMenu']);
                            return (0, i.jsx)(O.ZP, k({}, D, r));
                        }
                    });
                }
                return (0, i.jsx)(c.yRy, {
                    position: 'right',
                    renderPopout: this.renderStreamPopout,
                    shouldShow: l && !R,
                    onRequestClose: this.handleHidePreview,
                    spacing: 0,
                    children: () =>
                        (0, i.jsx)(
                            O.ZP,
                            M(k({}, D), {
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown
                            })
                        )
                });
            });
    }
}
R(W, 'defaultProps', { isSelfOnOtherClient: !1 });
let U = (0, f.$)(W);
