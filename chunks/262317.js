n.d(t, {
    XX: () => D,
    ZP: () => B,
    ul: () => W
}),
    n(388685);
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
    j = n(670188),
    O = n(597998),
    E = n(314897),
    N = n(430824),
    I = n(496675),
    P = n(594174),
    S = n(979651),
    Z = n(981631),
    T = n(927923),
    A = n(70722),
    w = n(388032),
    R = n(587382);
function k(e, t, n) {
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
function M(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function D(e) {
    let { numUsers: t } = e;
    return (0, i.jsx)('div', {
        className: R.moreContainer,
        children: (0, i.jsxs)(c.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function W(e) {
    let { numAudience: t, collapsed: n } = e,
        r = n ? t : w.NW.formatToPlainString(w.t['+v2pNz'], { count: t });
    return (0, i.jsxs)('div', {
        className: a()(R.audienceContainer, { [R.audienceContainerCollapsed]: n }),
        children: [
            (0, i.jsx)('div', {
                className: R.audienceIconContainer,
                children: (0, i.jsx)(c.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: R.audienceIcon
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
class U extends (r = l.PureComponent) {
    get canWatchStream() {
        let { channel: e, isStreaming: t } = this.props;
        return t && (0, y.p9)(e, S.Z, N.Z, I.Z, b.Z)[0];
    }
    render() {
        var e;
        let { userPopoutOpen: t } = this.state,
            { connectUserDragSource: n, canDrag: r, isSelfOnOtherClient: l, user: o, channel: a } = this.props,
            s = (0, i.jsx)('div', {
                className: R.draggable,
                'data-dnd-name': a.name,
                onMouseEnter: l ? void 0 : this.handleMouseEnter,
                onMouseLeave: l ? void 0 : this.handleHidePreview,
                children: (0, i.jsx)(j.Z, {
                    clickTrap: (null == o ? void 0 : o.id) === (null == (e = P.default.getCurrentUser()) ? void 0 : e.id),
                    targetElementRef: this.domElementRef,
                    user: o,
                    guildId: a.guild_id,
                    channelId: a.id,
                    newAnalyticsLocations: [m.Z.VOICE_USER],
                    shouldShow: t,
                    onRequestClose: this.handleCloseUserPopout,
                    children: (e) => this.renderUser(e)
                })
            });
        return r ? n(s) : s;
    }
    constructor(...e) {
        super(...e),
            k(this, 'domElementRef', l.createRef()),
            k(this, 'state', { userPopoutOpen: !1 }),
            k(this, 'handleClickUser', () => {
                this.setState({ userPopoutOpen: !this.state.userPopoutOpen });
            }),
            k(this, 'handleCloseUserPopout', () => {
                this.setState({ userPopoutOpen: !1 });
            }),
            k(this, 'handleHidePreview', () => {
                let { hidePreview: e, isStreaming: t, user: n } = this.props;
                t && (null == e || e(n.id));
            }),
            k(this, 'handleMouseEnter', () => {
                let { user: e, showPreview: t, isStreaming: n } = this.props;
                n && !this.state.userPopoutOpen && (null == t || t(e.id));
            }),
            k(this, 'handleWatchStream', () => {
                let { user: e, channel: t, isWatching: n, hidePreview: r } = this.props;
                if (!this.canWatchStream) return;
                let i = {
                    streamType: A.lo.GUILD,
                    ownerId: e.id,
                    channelId: t.id,
                    guildId: t.guild_id
                };
                E.default.getId() !== e.id && p.default.selectVoiceChannel(t.id), n ? ((0, x.Z)(i), u.Z.selectParticipant(i.channelId, (0, C.V9)(i))) : (0, h.iV)(i), null == r || r(e.id);
            }),
            k(this, 'handleJoinVoice', () => {
                let { user: e, channel: t, hidePreview: n } = this.props;
                I.Z.can(s.$e(Z.Plq.CONNECT, Z.Plq.VIEW_CHANNEL), t) && (p.default.selectVoiceChannel(t.id), null == n || n(e.id));
            }),
            k(this, 'handleUserContextMenu', (e) => {
                let { channel: t, user: r } = this.props;
                (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            L(M({}, n), {
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
            k(this, 'renderStreamPopout', () => {
                let { user: e, channel: t, previewIsOpen: n, location: r } = this.props;
                return (0, i.jsx)(v.Z, {
                    user: e,
                    channel: t,
                    onWatch: this.handleWatchStream,
                    previewIsOpen: n,
                    location: r
                });
            }),
            k(this, 'renderUser', (e) => {
                let { isSelfOnOtherClient: t, otherClientSessionType: n, voicePlatform: r, shouldShowPreview: l, mute: o, localMute: s, localVideoDisabled: u, speaking: d, disconnected: p, user: h, deaf: f, priority: m, collapsed: g, isStreaming: b, isGuest: C, nick: y, video: x, serverMute: v, serverDeaf: j, tabIndex: E, embeddedApplication: N, channel: I, ringing: P, isSelf: S, application: Z } = this.props,
                    { userPopoutOpen: A } = this.state,
                    k = T.al.has(null != n ? n : ''),
                    D = {
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
                        tabIndex: E,
                        otherClientSessionType: n,
                        voicePlatform: r,
                        embeddedApplication: N,
                        avatarContainerClass: a()({ [R.userAvatar]: !0 }),
                        disabled: t && !k,
                        selected: A,
                        onClick: k ? void 0 : this.handleClickUser,
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
                        text: null != (W = (0, _.Z)(n)) ? W : w.NW.string(w.t.IyYqqa),
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
                            return (0, i.jsx)(O.ZP, M({ ref: this.domElementRef }, D, r));
                        }
                    });
                }
                return (0, i.jsx)(c.yRy, {
                    targetElementRef: this.domElementRef,
                    position: 'right',
                    renderPopout: this.renderStreamPopout,
                    shouldShow: l && !A,
                    onRequestClose: this.handleHidePreview,
                    spacing: 0,
                    children: () =>
                        (0, i.jsx)(
                            O.ZP,
                            L(M({}, D), {
                                ref: this.domElementRef,
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown
                            })
                        )
                });
            });
    }
}
k(U, 'defaultProps', { isSelfOnOtherClient: !1 });
let B = (0, f.$)(U);
