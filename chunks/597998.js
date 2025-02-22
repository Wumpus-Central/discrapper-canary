n.d(t, {
    ZP: () => A,
    eJ: () => Z,
    nm: () => T
}),
    n(653041),
    n(789020),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(434650),
    c = n(40851),
    u = n(657305),
    d = n(367907),
    f = n(682901),
    p = n(194082),
    m = n(282256),
    g = n(925329),
    y = n(880395),
    b = n(592125),
    h = n(574254),
    v = n(374129),
    O = n(639351),
    j = n(630388),
    S = n(51144),
    N = n(981631),
    P = n(354459),
    I = n(927923),
    x = n(388032),
    E = n(79921);
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
let Z = (e) => {
    let { children: t, collapsed: n = !1, className: l } = e;
    return (0, r.jsx)('div', {
        className: a()(l, E.list, n ? E.listCollapse : E.listDefault),
        role: 'group',
        children: t
    });
};
function T(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: s, deaf: c, serverDeaf: d, collapsed: f, video: m, isStreaming: g, disabled: y, isWatching: b, iconClassName: h, embeddedApplication: S, otherClientSessionType: w, voicePlatform: Z, application: T, guildId: A, channelId: _, user: k, disconnected: W } = e;
    if (f || y) return null;
    let R = [],
        M = (0, r.jsx)(D, {
            iconClassName: h,
            mute: n,
            localMute: l,
            serverMute: s,
            deaf: c,
            serverDeaf: d
        });
    m &&
        (i
            ? R.push(
                  (0, r.jsx)(
                      o.DY3,
                      {
                          className: E.iconSpacing,
                          text: x.NW.string(x.t['PXMZ//']),
                          children: (0, r.jsx)(o.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(E.icon, h),
                              colorClass: E.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : R.push(
                  (0, r.jsx)(
                      o.DY3,
                      {
                          className: E.iconSpacing,
                          text: x.NW.string(x.t.FlNoSU),
                          children: (0, r.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(E.icon, h)
                          })
                      },
                      'video'
                  )
              )),
        W &&
            R.push(
                (0, r.jsx)(
                    o.DY3,
                    {
                        className: E.iconSpacing,
                        text: x.NW.string(x.t.HFwRpq),
                        children: (0, r.jsx)(o.P4T, {
                            className: a()(E.icon, h),
                            color: o.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != S &&
            R.push(
                (0, r.jsx)(
                    o.DY3,
                    {
                        text: (0, u.Z)(S.name),
                        className: E.iconSpacing,
                        children: (0, r.jsx)(o.nG3, {
                            size: 'md',
                            color: 'currentColor',
                            className: a()(E.icon, h)
                        })
                    },
                    'activity'
                )
            ),
        w === I.YE.XBOX || Z === P.wR.XBOX
            ? R.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: a()(E.iconSpacing),
                          children: (0, r.jsx)(O.Z, { className: a()(E.icon, h) })
                      },
                      'xbox'
                  )
              )
            : (w === I.YE.PLAYSTATION || Z === P.wR.PLAYSTATION) &&
              R.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: a()(E.iconSpacing),
                          children: (0, r.jsx)(v.Z, { className: a()(E.icon, h) })
                      },
                      'playstation'
                  )
              ),
        b &&
            R.push(
                (0, r.jsx)(
                    o.DY3,
                    {
                        className: E.iconSpacing,
                        text: x.NW.string(x.t.JH1SJy),
                        children: (0, r.jsx)(o.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(E.icon, h)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            R.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: a()(E.iconSpacing, E.liveIconSpacing),
                        children: (0, r.jsx)(p.ZP, { size: p.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let L = null != T && !(0, j.yE)(T.flags, N.udG.EMBEDDED);
    return 0 !== R.length || null != M || L
        ? (0, r.jsxs)('div', {
              className: a()(E.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: E.iconGroup,
                      children: [M, R]
                  }),
                  L &&
                      (0, r.jsx)('div', {
                          className: E.iconGroup,
                          children: (0, r.jsx)(
                              C,
                              {
                                  application: T,
                                  iconClassName: h,
                                  guildId: A,
                                  channelId: _,
                                  userId: k.id
                              },
                              ''.concat(k.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let A = function (e) {
    var { avatarContainerClass: t = E.avatarContainer, userNameClassName: n = E.usernameFont, size: i = N.ipw.SMALL, selected: s = !1, disabled: u = !1, isOverlay: d = !1 } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['avatarContainerClass', 'userNameClassName', 'size', 'selected', 'disabled', 'isOverlay']);
    let { onClick: g, onKeyDown: v, onDoubleClick: O, onContextMenu: j, onMouseEnter: P, onMouseLeave: I, onMouseDown: Z, priority: A, speaking: C, collapsed: D, mute: _, serverMute: k, guildId: W, nick: R, isGuest: M, flipped: L, className: U, overlap: G, 'aria-label': V, tabIndex: F, ringing: Y, user: B, channelId: z } = p,
        H = (0, c.bp)(),
        J = null != z ? b.Z.getChannel(z) : null,
        { enabled: X } = (0, f.Z)({ location: 'VoiceUser' }),
        [K, q] = l.useState(!1),
        [Q, $] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e === h.Z.isOpen() || (e = h.Z.isOpen()) || $(!1);
                };
            return h.Z.addChangeListener(t), () => h.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(o.P3F, {
            className: a()(U, {
                [E.voiceUser]: !0,
                [E.overlap]: G,
                [E.selected]: s,
                [E.clickable]: null != g,
                [E.userSmall]: i === N.ipw.SMALL,
                [E.userLarge]: i === N.ipw.LARGE,
                [E.disabled]: !s && u,
                [E.ringing]: Y
            }),
            onClick: (e) => {
                null == g || g(e, B);
            },
            onDoubleClick: (e) => {
                null == O || O(e, B);
            },
            onContextMenu: (e) => {
                null == j || j(e, B);
            },
            onMouseEnter: (e) => {
                q(!0), null == P || P(e, B);
            },
            onMouseLeave: (e) => {
                q(!1), null == I || I(e, B);
            },
            onMouseDown: (e) => {
                null == Z || Z(e, B);
            },
            onKeyDown: v,
            'aria-label': V,
            tabIndex: F,
            children: (0, r.jsxs)('div', {
                className: a()(E.content, { [E.flipped]: L }),
                children: [
                    A && !D
                        ? (0, r.jsx)(o.ua7, {
                              text: x.NW.string(x.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', w({ className: a()(E.iconPriortySpeaker, { [E.iconPriortySpeakerSpeaking]: !_ && !k && C }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: a()(t, E.avatar, {
                            [E.avatarLarge]: i === N.ipw.LARGE,
                            [E.avatarSmall]: i === N.ipw.SMALL,
                            [E.avatarSpeaking]: C
                        }),
                        style: { backgroundImage: 'url('.concat(B.getAvatarURL(W, i === N.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let l = (0, r.jsxs)('div', {
                                className: a()(n, {
                                    [E.username]: !0,
                                    [E.usernameSpeaking]: !_ && !k && C
                                }),
                                children: [
                                    null != R ? R : S.ZP.getName(B),
                                    M
                                        ? (0, r.jsxs)('span', {
                                              className: E.guestSuffix,
                                              children: ['\xA0', x.NW.string(x.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            i = {
                                primaryGuild: B.primaryGuild,
                                userId: B.id,
                                contextGuildId: W,
                                isOverlay: d,
                                disableTooltip: !0,
                                className: a()(E.clanTag, d && E.isOverlay),
                                profileViewedAnalytics: { source: d ? N.jXE.OVERLAY : N.Sbl.VOICE_PANEL }
                            };
                        return !D || d
                            ? (0, r.jsx)(
                                  m.Z,
                                  ((e = w({}, i)),
                                  (t = t = { children: l }),
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
                                  e)
                              )
                            : null;
                    })(),
                    (0, r.jsx)(T, w({ disabled: u }, p)),
                    X &&
                        ((K || Q) && !D
                            ? (0, r.jsx)(o.DY3, {
                                  text: x.NW.string(x.t['+1H47u']),
                                  children: (0, r.jsx)(o.P3F, {
                                      className: a()(E.moreClickable, Q && E.moreActive),
                                      onClick: function (e) {
                                          null != W && null != J && ($(!0), (0, y.D)(e, B, J, { context: H }));
                                      },
                                      children: (0, r.jsx)(o.xhG, {
                                          size: 'md',
                                          className: a()(E.icon)
                                      })
                                  })
                              })
                            : null)
                ]
            })
        })
    );
};
function C(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: c, userId: u } = e,
        [f, p] = l.useState(!1),
        m = (0, s.O)((e) => p(e));
    return (
        l.useEffect(() => {
            f &&
                d.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, c, i, u, f]),
        (0, r.jsx)(o.DY3, {
            text: x.NW.formatToPlainString(x.t.Sq9xJy, { game: t.name }),
            'aria-label': x.NW.formatToPlainString(x.t.Sq9xJy, { game: t.name }),
            className: E.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(g.Z, {
                    className: a()(E.icon, n),
                    game: t,
                    size: g.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: c,
                            guild_id: i,
                            game_name: t.name,
                            user_id: u
                        });
                    }
                })
            })
        })
    );
}
function D(e) {
    let { iconClassName: t, mute: n, localMute: l, serverMute: i, deaf: s, serverDeaf: c } = e,
        u = (0, o.bWb)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = i ? o.v0G : l ? o.v0G : o.nRN),
                (e = (0, r.jsx)(n, {
                    className: a()(E.icon, t, { [E.iconServer]: i }),
                    color: 'currentColor'
                }));
        } else
            e = (0, r.jsx)(o.nRN, {
                size: 'md',
                color: 'currentColor',
                className: a()(E.icon, t, { [E.iconServer]: i }),
                colorClass: l ? E.strikethrough : void 0
            });
        d.push(
            (0, r.jsx)(
                o.DY3,
                {
                    text: l ? x.NW.string(x.t.Q8Uzoa) : i ? x.NW.string(x.t.uLddbW) : x.NW.string(x.t.tjtv3N),
                    className: E.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || s) {
        let e;
        if (u) {
            let n = c ? o.Vm4 : o.wE8;
            e = (0, r.jsx)(n, {
                className: a()(E.icon, t, { [E.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, r.jsx)(o.wE8, {
                size: 'md',
                color: 'currentColor',
                className: a()(E.icon, t, { [E.iconServer]: c })
            });
        d.push(
            (0, r.jsx)(
                o.DY3,
                {
                    className: E.iconSpacing,
                    text: c ? x.NW.string(x.t.btxSdH) : x.NW.string(x.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, r.jsx)(r.Fragment, { children: d });
}
