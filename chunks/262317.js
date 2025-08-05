(n.d(t, {
    XX: () => L,
    ZP: () => B,
    ul: () => U
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(846519),
    s = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(287734),
    p = n(872810),
    h = n(888651),
    f = n(622822),
    m = n(100527),
    g = n(795318),
    b = n(258609),
    _ = n(257115),
    y = n(569545),
    C = n(102172),
    x = n(525925),
    v = n(701362),
    j = n(224184),
    O = n(953787),
    E = n(670188),
    S = n(597998),
    P = n(314897),
    I = n(430824),
    Z = n(496675),
    T = n(594174),
    N = n(979651),
    A = n(927923),
    w = n(70722),
    R = n(388032),
    M = n(587382);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function k(e, t) {
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
    return (0, r.jsx)('div', {
        className: M.moreContainer,
        children: (0, r.jsxs)(s.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function U(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : R.intl.formatToPlainString(R.t['+v2pNz'], { count: t });
    return (0, r.jsxs)('div', {
        className: a()(M.audienceContainer, { [M.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)('div', {
                className: M.audienceIconContainer,
                children: (0, r.jsx)(s.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: M.audienceIcon
                })
            }),
            (0, r.jsx)(s.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
let B = (0, h.$)(function (e) {
    var t;
    let { collapsed: l, user: h, channel: L, mute: U, localMute: B, localVideoDisabled: F, deaf: H, video: G, embeddedApplication: V, serverMute: z, serverDeaf: W, nick: Y, ringing: q, speaking: K, disconnected: X, connectUserDragSource: Q, canDrag: J, isStreaming: $, isWatching: ee, isGuest: et, priority: en, showPreview: er, hidePreview: ei, shouldShowHoverPopout: el, previewIsOpen: ea, otherClientSessionType: eo, voicePlatform: es, isSelfOnOtherClient: ec = !1, tabIndex: eu, location: ed, isSelf: ep, application: eh, hangStatusActivity: ef, requestToStreamActivity: em, showHangStatus: eg } = e,
        eb = i.useRef(null),
        [e_, ey] = i.useState(!1),
        [eC, ex] = i.useState(!1),
        ev = null != em,
        ej = () => {
            ey(!e_);
        },
        eO = () => {
            ($ || eg || ev) && (null == ei || ei(h.id));
        },
        eE = i.useMemo(
            () =>
                new o.sW(500, () => {
                    ex(!0);
                }),
            []
        ),
        eS = (e) => {
            e && ea ? eE.delay() : !e && eE.isDelayed() && eE.cancel();
        },
        eP = (e) => {
            e && (eE.cancel(), ex(!1));
        },
        eI = () => $ && (0, C.p9)(L, N.Z, I.Z, Z.Z, b.Z)[0],
        eZ = () => {
            if (!eI()) return;
            let e = {
                streamType: w.lo.GUILD,
                ownerId: h.id,
                channelId: L.id,
                guildId: L.guild_id
            };
            (P.default.getId() !== h.id && d.default.selectVoiceChannel(L.id), ee ? ((0, x.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e), null == ei || ei(h.id));
        },
        eT = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('8982'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        k(D({}, t), {
                            user: h,
                            guildId: L.guild_id,
                            channel: L,
                            showMediaItems: !0,
                            showStageChannelItems: L.isGuildStageVoice(),
                            onInteraction: (0, g.u)('GuildChannelUserContextMenu', m.Z.VOICE_USER, { targetUserId: h.id })
                        })
                    );
            });
        },
        eN = () =>
            (0, r.jsx)(j.Z, {
                previewIsOpen: ea,
                channel: L,
                hangStatusActivity: ef,
                userId: h.id,
                targetElementRef: eb
            }),
        eA = () =>
            (0, r.jsx)(O.Z, {
                userId: h.id,
                channel: L
            }),
        ew = () =>
            (0, f.dl)() && (0, f.zd)(L.id)
                ? null
                : (0, r.jsx)(v.Z, {
                      user: h,
                      channel: L,
                      onWatch: eZ,
                      previewIsOpen: ea,
                      location: ed
                  }),
        eR = (e) => {
            let t = A.al.has(null != eo ? eo : ''),
                n = {
                    user: h,
                    speaking: K,
                    disconnected: X,
                    mute: U,
                    localMute: B,
                    localVideoDisabled: F,
                    isStreaming: $,
                    isGuest: et,
                    video: G,
                    priority: en,
                    ringing: q,
                    deaf: H,
                    nick: Y,
                    collapsed: l,
                    overlap: l,
                    serverMute: z,
                    serverDeaf: W,
                    tabIndex: eu,
                    otherClientSessionType: eo,
                    voicePlatform: es,
                    embeddedApplication: V,
                    avatarContainerClass: a()({ [M.userAvatar]: !0 }),
                    disabled: ec && !t,
                    selected: e_,
                    onClick: t ? void 0 : ej,
                    onDoubleClick: eZ,
                    onContextMenu: eT,
                    guildId: L.guild_id,
                    isSelf: ep,
                    application: eh,
                    channelId: L.id,
                    hangStatusActivity: ef,
                    showHangStatus: eg
                };
            if (ec) {
                var i;
                return (0, r.jsx)(s.ua7, {
                    text: null != (i = (0, _.Z)(eo)) ? i : R.intl.string(R.t.IyYqqa),
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
                                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                }
                                return i;
                            })(e, ['onClick', 'onContextMenu']);
                        return (0, r.jsx)(S.ZP, D({ ref: eb }, n, l));
                    }
                });
            }
            let o = () => null;
            return (
                eg && eC ? (o = eN) : $ ? (o = ew) : ev && h.id !== P.default.getId() && (o = eA),
                (0, r.jsx)(s.yRy, {
                    targetElementRef: eb,
                    position: 'right',
                    renderPopout: o,
                    shouldShow: el && !e_,
                    onRequestClose: eO,
                    spacing: 0,
                    children: () =>
                        (0, r.jsx)(
                            S.ZP,
                            k(D({}, n), {
                                ref: eb,
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown,
                                handleHoverHangStatus: eS,
                                handleHoverIcons: eP
                            })
                        )
                })
            );
        },
        eM = (0, r.jsx)('div', {
            className: M.draggable,
            'data-dnd-name': L.name,
            onMouseEnter: ec
                ? void 0
                : () => {
                      ($ || eg || ev) && !e_ && (null == er || er(h.id));
                  },
            onMouseLeave: ec ? void 0 : eO,
            children: (0, r.jsx)(E.Z, {
                clickTrap: (null == h ? void 0 : h.id) === (null == (t = T.default.getCurrentUser()) ? void 0 : t.id) && e_,
                targetElementRef: eb,
                user: h,
                guildId: L.guild_id,
                channelId: L.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: e_,
                onRequestClose: () => ey(!1),
                children: (e) => eR(e)
            })
        });
    return J ? Q(eM) : eM;
});
