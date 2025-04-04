n.d(t, {
    XX: () => W,
    ZP: () => H,
    ul: () => U
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
    g = n(795318),
    b = n(258609),
    _ = n(257115),
    C = n(569545),
    y = n(102172),
    x = n(525925),
    v = n(701362),
    j = n(184301),
    O = n(347475),
    E = n(597998),
    N = n(314897),
    I = n(430824),
    P = n(496675),
    S = n(594174),
    Z = n(979651),
    T = n(981631),
    A = n(927923),
    w = n(70722),
    R = n(388032),
    k = n(587382);
function M(e, t, n) {
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
function L(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function W(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)('div', {
        className: k.moreContainer,
        children: (0, i.jsxs)(c.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function U(e) {
    let { numAudience: t, collapsed: n } = e,
        r = n ? t : R.NW.formatToPlainString(R.t['+v2pNz'], { count: t });
    return (0, i.jsxs)('div', {
        className: a()(k.audienceContainer, { [k.audienceContainerCollapsed]: n }),
        children: [
            (0, i.jsx)('div', {
                className: k.audienceIconContainer,
                children: (0, i.jsx)(c.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: k.audienceIcon
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
class B extends (r = l.PureComponent) {
    get canWatchStream() {
        let { channel: e, isStreaming: t } = this.props;
        return t && (0, y.p9)(e, Z.Z, I.Z, P.Z, b.Z)[0];
    }
    render() {
        var e;
        let { userPopoutOpen: t } = this.state,
            { connectUserDragSource: n, canDrag: r, isSelfOnOtherClient: l, user: o, channel: a } = this.props,
            s = (0, i.jsx)('div', {
                className: k.draggable,
                'data-dnd-name': a.name,
                onMouseEnter: l ? void 0 : this.handleMouseEnter,
                onMouseLeave: l ? void 0 : this.handleHidePreview,
                children: (0, i.jsx)(c.yRy, {
                    clickTrap: (null == o ? void 0 : o.id) === (null == (e = S.default.getCurrentUser()) ? void 0 : e.id),
                    targetElementRef: this.domElementRef,
                    preload: () =>
                        (0, j.Z)(o.id, o.getAvatarURL(a.guild_id, 80), {
                            guildId: a.guild_id,
                            channelId: a.id
                        }),
                    position: 'right',
                    renderPopout: this.renderUserPopout,
                    shouldShow: t,
                    onRequestClose: this.handleCloseUserPopout,
                    children: (e) => this.renderUser(e)
                })
            });
        return r ? n(s) : s;
    }
    constructor(...e) {
        super(...e),
            M(this, 'domElementRef', l.createRef()),
            M(this, 'state', { userPopoutOpen: !1 }),
            M(this, 'handleClickUser', () => {
                this.setState({ userPopoutOpen: !this.state.userPopoutOpen });
            }),
            M(this, 'handleCloseUserPopout', () => {
                this.setState({ userPopoutOpen: !1 });
            }),
            M(this, 'handleHidePreview', () => {
                let { hidePreview: e, isStreaming: t, user: n } = this.props;
                t && (null == e || e(n.id));
            }),
            M(this, 'handleMouseEnter', () => {
                let { user: e, showPreview: t, isStreaming: n } = this.props;
                n && !this.state.userPopoutOpen && (null == t || t(e.id));
            }),
            M(this, 'handleWatchStream', () => {
                let { user: e, channel: t, isWatching: n, hidePreview: r } = this.props;
                if (!this.canWatchStream) return;
                let i = {
                    streamType: w.lo.GUILD,
                    ownerId: e.id,
                    channelId: t.id,
                    guildId: t.guild_id
                };
                N.default.getId() !== e.id && p.default.selectVoiceChannel(t.id), n ? ((0, x.Z)(i), u.Z.selectParticipant(i.channelId, (0, C.V9)(i))) : (0, h.iV)(i), null == r || r(e.id);
            }),
            M(this, 'handleJoinVoice', () => {
                let { user: e, channel: t, hidePreview: n } = this.props;
                P.Z.can(s.$e(T.Plq.CONNECT, T.Plq.VIEW_CHANNEL), t) && (p.default.selectVoiceChannel(t.id), null == n || n(e.id));
            }),
            M(this, 'handleUserContextMenu', (e) => {
                let { channel: t, user: r } = this.props;
                (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            D(L({}, n), {
                                user: r,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: t.isGuildStageVoice(),
                                onInteraction: (0, g.u)('GuildChannelUserContextMenu', m.Z.VOICE_USER, { targetUserId: r.id })
                            })
                        );
                });
            }),
            M(this, 'renderUserPopout', (e) => {
                let { channel: t, user: n } = this.props,
                    r = t.getGuildId();
                return (0, i.jsx)(
                    O.Z,
                    L(
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
            M(this, 'renderStreamPopout', () => {
                let { user: e, channel: t, previewIsOpen: n, location: r } = this.props;
                return (0, i.jsx)(v.Z, {
                    user: e,
                    channel: t,
                    onWatch: this.handleWatchStream,
                    previewIsOpen: n,
                    location: r
                });
            }),
            M(this, 'renderUser', (e) => {
                let { isSelfOnOtherClient: t, otherClientSessionType: n, voicePlatform: r, shouldShowPreview: l, mute: o, localMute: s, localVideoDisabled: u, speaking: d, disconnected: p, user: h, deaf: f, priority: m, collapsed: g, isStreaming: b, isGuest: C, nick: y, video: x, serverMute: v, serverDeaf: j, tabIndex: O, embeddedApplication: N, channel: I, ringing: P, isSelf: S, application: Z } = this.props,
                    { userPopoutOpen: T } = this.state,
                    w = A.al.has(null != n ? n : ''),
                    M = {
                        user: h,
                        speaking: d,
                        disconnected: p,
                        mute: o,
                        localMute: s,
                        localVideoDisabled: u,
                        isStreaming: b,
                        isGuest: C,
                        video: x,
                        priority: m,
                        ringing: P,
                        deaf: f,
                        nick: y,
                        collapsed: g,
                        overlap: g,
                        serverMute: v,
                        serverDeaf: j,
                        tabIndex: O,
                        otherClientSessionType: n,
                        voicePlatform: r,
                        embeddedApplication: N,
                        avatarContainerClass: a()({ [k.userAvatar]: !0 }),
                        disabled: t && !w,
                        selected: T,
                        onClick: w ? void 0 : this.handleClickUser,
                        onDoubleClick: this.handleWatchStream,
                        onContextMenu: this.handleUserContextMenu,
                        guildId: I.guild_id,
                        isSelf: S,
                        application: Z,
                        channelId: I.id
                    };
                if (t) {
                    var W;
                    return (0, i.jsx)(c.ua7, {
                        text: null != (W = (0, _.Z)(n)) ? W : R.NW.string(R.t.IyYqqa),
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
                            return (0, i.jsx)(E.ZP, L({ ref: this.domElementRef }, M, r));
                        }
                    });
                }
                return (0, i.jsx)(c.yRy, {
                    targetElementRef: this.domElementRef,
                    position: 'right',
                    renderPopout: this.renderStreamPopout,
                    shouldShow: l && !T,
                    onRequestClose: this.handleHidePreview,
                    spacing: 0,
                    children: () =>
                        (0, i.jsx)(
                            E.ZP,
                            D(L({}, M), {
                                ref: this.domElementRef,
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown
                            })
                        )
                });
            });
    }
}
M(B, 'defaultProps', { isSelfOnOtherClient: !1 });
let H = (0, f.$)(B);
