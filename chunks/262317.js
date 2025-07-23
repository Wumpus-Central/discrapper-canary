(n.d(t, {
    XX: () => D,
    ZP: () => L,
    ul: () => k
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
    f = n(100527),
    m = n(795318),
    g = n(258609),
    b = n(257115),
    _ = n(569545),
    y = n(102172),
    C = n(525925),
    x = n(701362),
    v = n(224184),
    j = n(670188),
    O = n(597998),
    E = n(314897),
    S = n(430824),
    I = n(496675),
    P = n(594174),
    Z = n(979651),
    T = n(927923),
    N = n(70722),
    A = n(388032),
    w = n(587382);
function R(e) {
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
function D(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)('div', {
        className: w.moreContainer,
        children: (0, r.jsxs)(s.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function k(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : A.intl.formatToPlainString(A.t['+v2pNz'], { count: t });
    return (0, r.jsxs)('div', {
        className: a()(w.audienceContainer, { [w.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)('div', {
                className: w.audienceIconContainer,
                children: (0, r.jsx)(s.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: w.audienceIcon
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
let L = (0, h.$)(function (e) {
    var t;
    let { collapsed: l, user: h, channel: D, mute: k, localMute: L, localVideoDisabled: U, deaf: B, video: F, embeddedApplication: H, serverMute: G, serverDeaf: V, nick: z, ringing: W, speaking: Y, disconnected: q, connectUserDragSource: K, canDrag: X, isStreaming: Q, isWatching: J, isGuest: $, priority: ee, showPreview: et, hidePreview: en, shouldShowPreview: er, previewIsOpen: ei, otherClientSessionType: el, voicePlatform: ea, isSelfOnOtherClient: eo = !1, tabIndex: es, location: ec, isSelf: eu, application: ed, hangStatusActivity: ep, showHangStatus: eh } = e,
        ef = i.useRef(null),
        [em, eg] = i.useState(!1),
        [eb, e_] = i.useState(!1),
        ey = () => {
            eg(!em);
        },
        eC = () => {
            (Q || eh) && (null == en || en(h.id));
        },
        ex = i.useMemo(
            () =>
                new o.sW(500, () => {
                    e_(!0);
                }),
            []
        ),
        ev = (e) => {
            e && ei ? ex.delay() : !e && ex.isDelayed() && ex.cancel();
        },
        ej = (e) => {
            e && (ex.cancel(), e_(!1));
        },
        eO = () => Q && (0, y.p9)(D, Z.Z, S.Z, I.Z, g.Z)[0],
        eE = () => {
            if (!eO()) return;
            let e = {
                streamType: N.lo.GUILD,
                ownerId: h.id,
                channelId: D.id,
                guildId: D.guild_id
            };
            (E.default.getId() !== h.id && d.default.selectVoiceChannel(D.id), J ? ((0, C.Z)(e), c.Z.selectParticipant(e.channelId, (0, _.V9)(e))) : (0, p.iV)(e), null == en || en(h.id));
        },
        eS = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        M(R({}, t), {
                            user: h,
                            guildId: D.guild_id,
                            channel: D,
                            showMediaItems: !0,
                            showStageChannelItems: D.isGuildStageVoice(),
                            onInteraction: (0, m.u)('GuildChannelUserContextMenu', f.Z.VOICE_USER, { targetUserId: h.id })
                        })
                    );
            });
        },
        eI = () =>
            (0, r.jsx)(v.Z, {
                previewIsOpen: ei,
                channel: D,
                hangStatusActivity: ep,
                userId: h.id,
                targetElementRef: ef
            }),
        eP = () =>
            (0, r.jsx)(x.Z, {
                user: h,
                channel: D,
                onWatch: eE,
                previewIsOpen: ei,
                location: ec
            }),
        eZ = (e) => {
            let t = T.al.has(null != el ? el : ''),
                n = {
                    user: h,
                    speaking: Y,
                    disconnected: q,
                    mute: k,
                    localMute: L,
                    localVideoDisabled: U,
                    isStreaming: Q,
                    isGuest: $,
                    video: F,
                    priority: ee,
                    ringing: W,
                    deaf: B,
                    nick: z,
                    collapsed: l,
                    overlap: l,
                    serverMute: G,
                    serverDeaf: V,
                    tabIndex: es,
                    otherClientSessionType: el,
                    voicePlatform: ea,
                    embeddedApplication: H,
                    avatarContainerClass: a()({ [w.userAvatar]: !0 }),
                    disabled: eo && !t,
                    selected: em,
                    onClick: t ? void 0 : ey,
                    onDoubleClick: eE,
                    onContextMenu: eS,
                    guildId: D.guild_id,
                    isSelf: eu,
                    application: ed,
                    channelId: D.id,
                    hangStatusActivity: ep,
                    showHangStatus: eh
                };
            if (eo) {
                var i;
                return (0, r.jsx)(s.ua7, {
                    text: null != (i = (0, b.Z)(el)) ? i : A.intl.string(A.t.IyYqqa),
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
                        return (0, r.jsx)(O.ZP, R({ ref: ef }, n, l));
                    }
                });
            }
            return (0, r.jsx)(s.yRy, {
                targetElementRef: ef,
                position: 'right',
                renderPopout: (eh && eb) || !Q ? eI : eP,
                shouldShow: er && !em,
                onRequestClose: eC,
                spacing: 0,
                children: () =>
                    (0, r.jsx)(
                        O.ZP,
                        M(R({}, n), {
                            ref: ef,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            handleHoverHangStatus: ev,
                            handleHoverIcons: ej
                        })
                    )
            });
        },
        eT = (0, r.jsx)('div', {
            className: w.draggable,
            'data-dnd-name': D.name,
            onMouseEnter: eo
                ? void 0
                : () => {
                      (Q || eh) && !em && (null == et || et(h.id));
                  },
            onMouseLeave: eo ? void 0 : eC,
            children: (0, r.jsx)(j.Z, {
                clickTrap: (null == h ? void 0 : h.id) === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && em,
                targetElementRef: ef,
                user: h,
                guildId: D.guild_id,
                channelId: D.id,
                newAnalyticsLocations: [f.Z.VOICE_USER],
                shouldShow: em,
                onRequestClose: () => eg(!1),
                children: (e) => eZ(e)
            })
        });
    return X ? K(eT) : eT;
});
