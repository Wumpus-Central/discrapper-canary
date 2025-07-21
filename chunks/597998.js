(n.d(t, {
    ZP: () => M,
    eJ: () => k,
    nm: () => L
}),
    n(539854),
    n(997841),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(434650),
    u = n(40851),
    d = n(456100),
    f = n(657305),
    p = n(367907),
    m = n(906732),
    g = n(522651),
    _ = n(795318),
    v = n(194082),
    b = n(925329),
    y = n(340044),
    h = n(880395),
    O = n(314897),
    j = n(592125),
    S = n(979651),
    x = n(574254),
    I = n(374129),
    P = n(639351),
    C = n(630388),
    w = n(51144),
    E = n(981631),
    T = n(354459),
    N = n(927923),
    Z = n(388032),
    D = n(850999);
function A(e) {
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
let k = (e) => {
    let { children: t, collapsed: n = !1, className: i } = e;
    return (0, r.jsx)('div', {
        className: a()(i, D.list, n ? D.listCollapse : D.listDefault),
        role: 'group',
        children: t
    });
};
function L(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: l, serverMute: o, deaf: c, serverDeaf: u, collapsed: p, video: m, isStreaming: g, disabled: _, isWatching: b, iconClassName: y, embeddedApplication: h, otherClientSessionType: O, voicePlatform: j, application: S, guildId: x, channelId: w, user: A, disconnected: k } = e,
        { enabled: L } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (p || _) return null;
    let M = [],
        V = (0, r.jsx)(U, {
            iconClassName: y,
            mute: n,
            localMute: i,
            serverMute: o,
            deaf: c,
            serverDeaf: u
        });
    (m &&
        (l
            ? M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: D.iconSpacing,
                          text: Z.intl.string(Z.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(D.icon, y),
                              colorClass: D.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: D.iconSpacing,
                          text: Z.intl.string(Z.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(D.icon, y)
                          })
                      },
                      'video'
                  )
              )),
        k &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: D.iconSpacing,
                        text: Z.intl.string(Z.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: a()(D.icon, y),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ));
    let F = L ? s.iWm : s.nG3;
    (null != h &&
        M.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, f.Z)(h.name),
                    className: D.iconSpacing,
                    children: (0, r.jsx)(F, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(D.icon, y)
                    })
                },
                'activity'
            )
        ),
        O === N.YE.XBOX || j === T.wR.XBOX
            ? M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: D.iconSpacing,
                          children: (0, r.jsx)(P.Z, { className: a()(D.icon, y) })
                      },
                      'xbox'
                  )
              )
            : (O === N.YE.PLAYSTATION || j === T.wR.PLAYSTATION) &&
              M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: D.iconSpacing,
                          children: (0, r.jsx)(I.Z, { className: a()(D.icon, y) })
                      },
                      'playstation'
                  )
              ),
        b &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: D.iconSpacing,
                        text: Z.intl.string(Z.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(D.icon, y)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            M.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: a()(D.iconSpacing, D.liveIconSpacing),
                        children: (0, r.jsx)(v.ZP, { size: v.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            ));
    let W = null != S && !(0, C.yE)(S.flags, E.udG.EMBEDDED);
    return 0 !== M.length || null != V || W
        ? (0, r.jsxs)('div', {
              className: a()(D.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: D.iconGroup,
                      children: [V, M]
                  }),
                  W &&
                      (0, r.jsx)('div', {
                          className: D.iconGroup,
                          children: (0, r.jsx)(
                              R,
                              {
                                  application: S,
                                  iconClassName: y,
                                  guildId: x,
                                  channelId: w,
                                  userId: A.id
                              },
                              ''.concat(A.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let M = i.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: l = D.avatarContainer, userNameClassName: c = D.usernameFont, size: d = E.ipw.SMALL, selected: f = !1, disabled: p = !1, isOverlay: v = !1 } = e,
        b = (function (e, t) {
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
        })(e, ['avatarContainerClass', 'userNameClassName', 'size', 'selected', 'disabled', 'isOverlay']);
    let { onClick: I, onKeyDown: P, onDoubleClick: C, onContextMenu: N, onMouseLeave: k, onMouseDown: M, priority: R, speaking: U, collapsed: V, mute: F, serverMute: W, guildId: Y, nick: B, isGuest: z, flipped: G, className: H, overlap: J, 'aria-label': X, ringing: q, user: K, channelId: Q } = b,
        { parentAnalyticsLocation: $ } = (0, m.ZP)(),
        ee = (0, u.bp)(),
        et = null != Q ? j.Z.getChannel(Q) : null,
        en = (0, o.e7)([O.default, S.Z], () => S.Z.isInChannel(Q, O.default.getId())),
        [er, ei] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== x.Z.isOpen() && ((e = x.Z.isOpen()) || ei(!1));
                };
            return (x.Z.addChangeListener(t), () => x.Z.removeChangeListener(t));
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: a()(H, {
                [D.voiceUser]: !0,
                [D.overlap]: J,
                [D.selected]: f,
                [D.clickable]: null != I,
                [D.userSmall]: d === E.ipw.SMALL,
                [D.userLarge]: d === E.ipw.LARGE,
                [D.disabled]: !f && p,
                [D.ringing]: q
            }),
            onClick: (e) => {
                null == I || I(e, K);
            },
            onDoubleClick: (e) => {
                null == C || C(e, K);
            },
            onContextMenu: (e) => {
                null == N || N(e, K);
            },
            onMouseLeave: (e) => {
                null == k || k(e, K);
            },
            onMouseDown: (e) => {
                null == M || M(e, K);
            },
            onKeyDown: P,
            'aria-label': null != (n = null != X ? X : B) ? n : K.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: a()(D.content, { [D.flipped]: G }),
                children: [
                    R && !V
                        ? (0, r.jsx)(s.ua7, {
                              text: Z.intl.string(Z.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', A({ className: a()(D.iconPriortySpeaker, { [D.iconPriortySpeakerSpeaking]: !F && !W && U }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: a()(l, D.avatar, {
                            [D.avatarLarge]: d === E.ipw.LARGE,
                            [D.avatarSmall]: d === E.ipw.SMALL,
                            [D.avatarSpeaking]: U
                        }),
                        style: { backgroundImage: 'url('.concat(K.getAvatarURL(Y, d === E.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: a()(c, {
                                    [D.username]: !0,
                                    [D.usernameSpeaking]: !F && !W && U
                                }),
                                children: [
                                    null != B ? B : w.ZP.getName(K),
                                    z
                                        ? (0, r.jsxs)('span', {
                                              className: D.guestSuffix,
                                              children: ['\xA0', Z.intl.string(Z.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            i = {
                                primaryGuild: K.primaryGuild,
                                userId: K.id,
                                contextGuildId: Y,
                                isOverlay: v,
                                disableTooltip: !0,
                                className: a()(D.clanTag, v && D.isOverlay),
                                profileViewedAnalytics: { source: v ? E.jXE.OVERLAY : E.Sbl.VOICE_PANEL }
                            };
                        return !V || v
                            ? (0, r.jsx)(
                                  y.Z,
                                  ((e = A({}, i)),
                                  (t = t = { children: n }),
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
                    (0, r.jsx)(L, A({ disabled: p }, b)),
                    !V && en
                        ? (0, r.jsx)(s.DY3, {
                              text: Z.intl.string(Z.t['+1H47u']),
                              className: a()(D.optionsButtonContainer, { [D.optionsContainerActive]: er }),
                              children: (0, r.jsx)(s.P3F, {
                                  className: a()(D.optionsButton, { [D.optionsActive]: er }),
                                  onClick: function (e) {
                                      null != Y &&
                                          null != et &&
                                          ((0, g.v)($, g.d.MORE),
                                          ei(!0),
                                          (0, h.D)(e, K, et, { context: ee }, (e, t) => {
                                              (0, _.o)({
                                                  menuName: e,
                                                  menuItemProps: t,
                                                  entrypoint: T.A5.THREE_DOT,
                                                  location: $,
                                                  targetUserId: K.id
                                              });
                                          }));
                                  },
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'md',
                                      className: D.icon
                                  })
                              })
                          })
                        : null
                ]
            })
        })
    );
});
function R(e) {
    let { application: t, iconClassName: n, guildId: l, channelId: o, userId: u } = e,
        [d, f] = i.useState(!1),
        m = (0, c.O)((e) => f(e));
    return (
        i.useEffect(() => {
            d &&
                p.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u
                });
        }, [t.id, o, l, u, d]),
        (0, r.jsx)(s.DY3, {
            text: Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            'aria-label': Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            className: D.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(b.Z, {
                    className: a()(D.icon, n),
                    game: t,
                    size: b.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        p.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: o,
                            guild_id: l,
                            game_name: t.name,
                            user_id: u
                        });
                    }
                })
            })
        })
    );
}
function U(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: l, deaf: o, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e;
        e = l || i ? s.v0G : s.nRN;
        let n = (0, r.jsx)(e, {
            className: a()(D.icon, t, { [D.iconServer]: l }),
            color: 'currentColor'
        });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: i ? Z.intl.string(Z.t.Q8Uzoa) : l ? Z.intl.string(Z.t.uLddbW) : Z.intl.string(Z.t.tjtv3N),
                    className: D.iconSpacing,
                    children: n
                },
                'mute'
            )
        );
    }
    if (c || o) {
        let e = c ? s.Vm4 : s.wE8,
            n = (0, r.jsx)(e, {
                className: a()(D.icon, t, { [D.iconServer]: c }),
                color: 'currentColor'
            });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    className: D.iconSpacing,
                    text: c ? Z.intl.string(Z.t.btxSdH) : Z.intl.string(Z.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
