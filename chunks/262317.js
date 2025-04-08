n.d(t, {
    XX: () => k,
    ZP: () => L,
    ul: () => M
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(475179),
    c = n(239091),
    u = n(287734),
    d = n(872810),
    p = n(888651),
    h = n(100527),
    f = n(795318),
    m = n(258609),
    g = n(257115),
    b = n(569545),
    _ = n(102172),
    C = n(525925),
    y = n(701362),
    x = n(823415),
    v = n(670188),
    j = n(597998),
    O = n(314897),
    E = n(430824),
    N = n(496675),
    I = n(594174),
    P = n(979651),
    S = n(927923),
    Z = n(70722),
    T = n(388032),
    A = n(587382);
function w(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
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
function k(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)('div', {
        className: A.moreContainer,
        children: (0, r.jsxs)(a.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function M(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : T.NW.formatToPlainString(T.t['+v2pNz'], { count: t });
    return (0, r.jsxs)('div', {
        className: o()(A.audienceContainer, { [A.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)('div', {
                className: A.audienceIconContainer,
                children: (0, r.jsx)(a.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.audienceIcon
                })
            }),
            (0, r.jsx)(a.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
let L = (0, p.$)(function (e) {
    var t;
    let { collapsed: l, user: p, channel: k, mute: M, localMute: L, localVideoDisabled: D, deaf: W, video: U, embeddedApplication: B, serverMute: H, serverDeaf: F, nick: G, ringing: V, speaking: z, disconnected: Y, connectUserDragSource: q, canDrag: K, isStreaming: X, isWatching: Q, isGuest: J, priority: $, showPreview: ee, hidePreview: et, shouldShowPreview: en, previewIsOpen: er, otherClientSessionType: ei, voicePlatform: el, isSelfOnOtherClient: eo = !1, tabIndex: ea, location: es, isSelf: ec, application: eu } = e,
        ed = i.useRef(null),
        [ep, eh] = i.useState(!1),
        ef = (0, x.ic)({ location: 'VoiceUser' }),
        em = () => {
            eh(!ep);
        },
        eg = () => {
            X && (null == et || et(p.id));
        },
        eb = () => X && (0, _.p9)(k, P.Z, E.Z, N.Z, m.Z)[0],
        e_ = () => {
            if (!eb()) return;
            let e = {
                streamType: Z.lo.GUILD,
                ownerId: p.id,
                channelId: k.id,
                guildId: k.guild_id
            };
            O.default.getId() !== p.id && u.default.selectVoiceChannel(k.id), Q ? ((0, C.Z)(e), s.Z.selectParticipant(e.channelId, (0, b.V9)(e))) : (0, d.iV)(e), null == et || et(p.id);
        },
        eC = (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        R(w({}, t), {
                            user: p,
                            guildId: k.guild_id,
                            channel: k,
                            showMediaItems: !0,
                            showStageChannelItems: k.isGuildStageVoice(),
                            onInteraction: (0, f.u)('GuildChannelUserContextMenu', h.Z.VOICE_USER, { targetUserId: p.id })
                        })
                    );
            });
        },
        ey = () =>
            (0, r.jsx)(y.Z, {
                user: p,
                channel: k,
                onWatch: e_,
                previewIsOpen: er,
                location: es
            }),
        ex = (e) => {
            let t = S.al.has(null != ei ? ei : ''),
                n = {
                    user: p,
                    speaking: z,
                    disconnected: Y,
                    mute: M,
                    localMute: L,
                    localVideoDisabled: D,
                    isStreaming: X,
                    isGuest: J,
                    video: U,
                    priority: $,
                    ringing: V,
                    deaf: W,
                    nick: G,
                    collapsed: l,
                    overlap: l,
                    serverMute: H,
                    serverDeaf: F,
                    tabIndex: ea,
                    otherClientSessionType: ei,
                    voicePlatform: el,
                    embeddedApplication: B,
                    avatarContainerClass: o()({ [A.userAvatar]: !0 }),
                    disabled: eo && !t,
                    selected: ep,
                    onClick: t ? void 0 : em,
                    onDoubleClick: e_,
                    onContextMenu: eC,
                    guildId: k.guild_id,
                    isSelf: ec,
                    application: eu,
                    channelId: k.id
                };
            if (eo) {
                var i;
                return (0, r.jsx)(a.ua7, {
                    text: null != (i = (0, g.Z)(ei)) ? i : T.NW.string(T.t.IyYqqa),
                    children: (e) => {
                        var { onClick: t, onContextMenu: i } = e,
                            l = (function (e, t) {
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
                        return (0, r.jsx)(j.ZP, w({ ref: ed }, n, l));
                    }
                });
            }
            return (0, r.jsx)(a.yRy, {
                targetElementRef: ed,
                position: 'right',
                renderPopout: ey,
                shouldShow: en && !ep,
                onRequestClose: eg,
                spacing: 0,
                children: () =>
                    (0, r.jsx)(
                        j.ZP,
                        R(w({}, n), {
                            ref: ed,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown
                        })
                    )
            });
        },
        ev = (0, r.jsx)('div', {
            className: A.draggable,
            'data-dnd-name': k.name,
            onMouseEnter: eo
                ? void 0
                : () => {
                      X && !ep && (null == ee || ee(p.id));
                  },
            onMouseLeave: eo ? void 0 : eg,
            children: (0, r.jsx)(v.Z, {
                clickTrap: (null == p ? void 0 : p.id) === (null == (t = I.default.getCurrentUser()) ? void 0 : t.id) && ep,
                targetElementRef: ed,
                user: p,
                guildId: k.guild_id,
                channelId: k.id,
                newAnalyticsLocations: [h.Z.VOICE_USER],
                shouldShow: ep,
                onRequestClose: () => eh(!1),
                shouldShowOnHover: ef && !X,
                children: (e) => ex(e)
            })
        });
    return K ? q(ev) : ev;
});
