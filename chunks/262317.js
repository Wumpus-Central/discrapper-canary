n.d(t, {
    XX: () => R,
    ZP: () => M,
    ul: () => k
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
    y = n(525925),
    C = n(701362),
    x = n(670188),
    v = n(597998),
    j = n(314897),
    O = n(430824),
    E = n(496675),
    N = n(594174),
    I = n(979651),
    P = n(927923),
    S = n(70722),
    Z = n(388032),
    T = n(587382);
function A(e) {
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
function w(e, t) {
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
function R(e) {
    let { numUsers: t } = e;
    return (0, r.jsx)('div', {
        className: T.moreContainer,
        children: (0, r.jsxs)(a.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function k(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : Z.NW.formatToPlainString(Z.t['+v2pNz'], { count: t });
    return (0, r.jsxs)('div', {
        className: o()(T.audienceContainer, { [T.audienceContainerCollapsed]: n }),
        children: [
            (0, r.jsx)('div', {
                className: T.audienceIconContainer,
                children: (0, r.jsx)(a.VWR, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.audienceIcon
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
let M = (0, p.$)(function (e) {
    var t;
    let { collapsed: l, user: p, channel: R, mute: k, localMute: M, localVideoDisabled: L, deaf: D, video: W, embeddedApplication: U, serverMute: B, serverDeaf: G, nick: F, ringing: H, speaking: V, disconnected: z, connectUserDragSource: Y, canDrag: q, isStreaming: K, isWatching: X, isGuest: Q, priority: J, showPreview: $, hidePreview: ee, shouldShowPreview: et, previewIsOpen: en, otherClientSessionType: er, voicePlatform: ei, isSelfOnOtherClient: el = !1, tabIndex: eo, location: ea, isSelf: es, application: ec } = e,
        eu = i.useRef(null),
        [ed, ep] = i.useState(!1),
        eh = () => {
            ep(!ed);
        },
        ef = () => {
            K && (null == ee || ee(p.id));
        },
        em = () => K && (0, _.p9)(R, I.Z, O.Z, E.Z, m.Z)[0],
        eg = () => {
            if (!em()) return;
            let e = {
                streamType: S.lo.GUILD,
                ownerId: p.id,
                channelId: R.id,
                guildId: R.guild_id
            };
            j.default.getId() !== p.id && u.default.selectVoiceChannel(R.id), X ? ((0, y.Z)(e), s.Z.selectParticipant(e.channelId, (0, b.V9)(e))) : (0, d.iV)(e), null == ee || ee(p.id);
        },
        eb = (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        w(A({}, t), {
                            user: p,
                            guildId: R.guild_id,
                            channel: R,
                            showMediaItems: !0,
                            showStageChannelItems: R.isGuildStageVoice(),
                            onInteraction: (0, f.u)('GuildChannelUserContextMenu', h.Z.VOICE_USER, { targetUserId: p.id })
                        })
                    );
            });
        },
        e_ = () =>
            (0, r.jsx)(C.Z, {
                user: p,
                channel: R,
                onWatch: eg,
                previewIsOpen: en,
                location: ea
            }),
        ey = (e) => {
            let t = P.al.has(null != er ? er : ''),
                n = {
                    user: p,
                    speaking: V,
                    disconnected: z,
                    mute: k,
                    localMute: M,
                    localVideoDisabled: L,
                    isStreaming: K,
                    isGuest: Q,
                    video: W,
                    priority: J,
                    ringing: H,
                    deaf: D,
                    nick: F,
                    collapsed: l,
                    overlap: l,
                    serverMute: B,
                    serverDeaf: G,
                    tabIndex: eo,
                    otherClientSessionType: er,
                    voicePlatform: ei,
                    embeddedApplication: U,
                    avatarContainerClass: o()({ [T.userAvatar]: !0 }),
                    disabled: el && !t,
                    selected: ed,
                    onClick: t ? void 0 : eh,
                    onDoubleClick: eg,
                    onContextMenu: eb,
                    guildId: R.guild_id,
                    isSelf: es,
                    application: ec,
                    channelId: R.id
                };
            if (el) {
                var i;
                return (0, r.jsx)(a.ua7, {
                    text: null != (i = (0, g.Z)(er)) ? i : Z.NW.string(Z.t.IyYqqa),
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
                        return (0, r.jsx)(v.ZP, A({ ref: eu }, n, l));
                    }
                });
            }
            return (0, r.jsx)(a.yRy, {
                targetElementRef: eu,
                position: 'right',
                renderPopout: e_,
                shouldShow: et && !ed,
                onRequestClose: ef,
                spacing: 0,
                children: () =>
                    (0, r.jsx)(
                        v.ZP,
                        w(A({}, n), {
                            ref: eu,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown
                        })
                    )
            });
        },
        eC = (0, r.jsx)('div', {
            className: T.draggable,
            'data-dnd-name': R.name,
            onMouseEnter: el
                ? void 0
                : () => {
                      K && !ed && (null == $ || $(p.id));
                  },
            onMouseLeave: el ? void 0 : ef,
            children: (0, r.jsx)(x.Z, {
                clickTrap: (null == p ? void 0 : p.id) === (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) && ed,
                targetElementRef: eu,
                user: p,
                guildId: R.guild_id,
                channelId: R.id,
                newAnalyticsLocations: [h.Z.VOICE_USER],
                shouldShow: ed,
                onRequestClose: () => ep(!1),
                children: (e) => ey(e)
            })
        });
    return q ? Y(eC) : eC;
});
