(n.d(t, {
    XX: () => k,
    ZP: () => U,
    ul: () => L
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
    O = n(670188),
    E = n(597998),
    S = n(314897),
    I = n(430824),
    P = n(496675),
    Z = n(594174),
    T = n(979651),
    N = n(927923),
    A = n(70722),
    w = n(388032),
    R = n(587382);
function M(e) {
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
function k(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)('div', {
        className: R.moreContainer,
        children: (0, r.jsxs)(s.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function L(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : w.intl.formatToPlainString(w.t['+v2pNz'], { count: t });
    return (0, r.jsxs)('div', {
        className: a()(R.audienceContainer, { [R.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)('div', {
                className: R.audienceIconContainer,
                children: (0, r.jsx)(s.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: R.audienceIcon
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
let U = (0, h.$)(function (e) {
    var t;
    let { collapsed: l, user: h, channel: k, mute: L, localMute: U, localVideoDisabled: B, deaf: F, video: H, embeddedApplication: G, serverMute: V, serverDeaf: z, nick: W, ringing: Y, speaking: q, disconnected: K, connectUserDragSource: X, canDrag: Q, isStreaming: J, isWatching: $, isGuest: ee, priority: et, showPreview: en, hidePreview: er, shouldShowPreview: ei, previewIsOpen: el, otherClientSessionType: ea, voicePlatform: eo, isSelfOnOtherClient: es = !1, tabIndex: ec, location: eu, isSelf: ed, application: ep, hangStatusActivity: eh, showHangStatus: ef } = e,
        em = i.useRef(null),
        [eg, eb] = i.useState(!1),
        [e_, ey] = i.useState(!1),
        eC = () => {
            eb(!eg);
        },
        ex = () => {
            (J || ef) && (null == er || er(h.id));
        },
        ev = i.useMemo(
            () =>
                new o.sW(500, () => {
                    ey(!0);
                }),
            []
        ),
        ej = (e) => {
            e && el ? ev.delay() : !e && ev.isDelayed() && ev.cancel();
        },
        eO = (e) => {
            e && (ev.cancel(), ey(!1));
        },
        eE = () => J && (0, C.p9)(k, T.Z, I.Z, P.Z, b.Z)[0],
        eS = () => {
            if (!eE()) return;
            let e = {
                streamType: A.lo.GUILD,
                ownerId: h.id,
                channelId: k.id,
                guildId: k.guild_id
            };
            (S.default.getId() !== h.id && d.default.selectVoiceChannel(k.id), $ ? ((0, x.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e), null == er || er(h.id));
        },
        eI = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        D(M({}, t), {
                            user: h,
                            guildId: k.guild_id,
                            channel: k,
                            showMediaItems: !0,
                            showStageChannelItems: k.isGuildStageVoice(),
                            onInteraction: (0, g.u)('GuildChannelUserContextMenu', m.Z.VOICE_USER, { targetUserId: h.id })
                        })
                    );
            });
        },
        eP = () =>
            (0, r.jsx)(j.Z, {
                previewIsOpen: el,
                channel: k,
                hangStatusActivity: eh,
                userId: h.id,
                targetElementRef: em
            }),
        eZ = () =>
            (0, f.dl)() && (0, f.zd)(k.id)
                ? null
                : (0, r.jsx)(v.Z, {
                      user: h,
                      channel: k,
                      onWatch: eS,
                      previewIsOpen: el,
                      location: eu
                  }),
        eT = (e) => {
            let t = N.al.has(null != ea ? ea : ''),
                n = {
                    user: h,
                    speaking: q,
                    disconnected: K,
                    mute: L,
                    localMute: U,
                    localVideoDisabled: B,
                    isStreaming: J,
                    isGuest: ee,
                    video: H,
                    priority: et,
                    ringing: Y,
                    deaf: F,
                    nick: W,
                    collapsed: l,
                    overlap: l,
                    serverMute: V,
                    serverDeaf: z,
                    tabIndex: ec,
                    otherClientSessionType: ea,
                    voicePlatform: eo,
                    embeddedApplication: G,
                    avatarContainerClass: a()({ [R.userAvatar]: !0 }),
                    disabled: es && !t,
                    selected: eg,
                    onClick: t ? void 0 : eC,
                    onDoubleClick: eS,
                    onContextMenu: eI,
                    guildId: k.guild_id,
                    isSelf: ed,
                    application: ep,
                    channelId: k.id,
                    hangStatusActivity: eh,
                    showHangStatus: ef
                };
            if (es) {
                var i;
                return (0, r.jsx)(s.ua7, {
                    text: null != (i = (0, _.Z)(ea)) ? i : w.intl.string(w.t.IyYqqa),
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
                        return (0, r.jsx)(E.ZP, M({ ref: em }, n, l));
                    }
                });
            }
            return (0, r.jsx)(s.yRy, {
                targetElementRef: em,
                position: 'right',
                renderPopout: (ef && e_) || !J ? eP : eZ,
                shouldShow: ei && !eg,
                onRequestClose: ex,
                spacing: 0,
                children: () =>
                    (0, r.jsx)(
                        E.ZP,
                        D(M({}, n), {
                            ref: em,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            handleHoverHangStatus: ej,
                            handleHoverIcons: eO
                        })
                    )
            });
        },
        eN = (0, r.jsx)('div', {
            className: R.draggable,
            'data-dnd-name': k.name,
            onMouseEnter: es
                ? void 0
                : () => {
                      (J || ef) && !eg && (null == en || en(h.id));
                  },
            onMouseLeave: es ? void 0 : ex,
            children: (0, r.jsx)(O.Z, {
                clickTrap: (null == h ? void 0 : h.id) === (null == (t = Z.default.getCurrentUser()) ? void 0 : t.id) && eg,
                targetElementRef: em,
                user: h,
                guildId: k.guild_id,
                channelId: k.id,
                newAnalyticsLocations: [m.Z.VOICE_USER],
                shouldShow: eg,
                onRequestClose: () => eb(!1),
                children: (e) => eT(e)
            })
        });
    return Q ? X(eN) : eN;
});
