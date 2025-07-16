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
    p = n(657305),
    f = n(367907),
    m = n(906732),
    g = n(522651),
    _ = n(795318),
    v = n(194082),
    b = n(925329),
    h = n(340044),
    y = n(880395),
    O = n(314897),
    j = n(592125),
    x = n(979651),
    S = n(574254),
    I = n(374129),
    P = n(639351),
    C = n(630388),
    E = n(51144),
    w = n(981631),
    N = n(354459),
    T = n(927923),
    Z = n(388032),
    A = n(850999);
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
let k = (e) => {
    let { children: t, collapsed: n = !1, className: i } = e;
    return (0, r.jsx)('div', {
        className: a()(i, A.list, n ? A.listCollapse : A.listDefault),
        role: 'group',
        children: t
    });
};
function L(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: l, serverMute: o, deaf: c, serverDeaf: u, collapsed: f, video: m, isStreaming: g, disabled: _, isWatching: b, iconClassName: h, embeddedApplication: y, otherClientSessionType: O, voicePlatform: j, application: x, guildId: S, channelId: E, user: D, disconnected: k } = e,
        { enabled: L } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (f || _) return null;
    let M = [],
        U = (0, r.jsx)(F, {
            iconClassName: h,
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
                          className: A.iconSpacing,
                          text: Z.intl.string(Z.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(A.icon, h),
                              colorClass: A.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: A.iconSpacing,
                          text: Z.intl.string(Z.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(A.icon, h)
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
                        className: A.iconSpacing,
                        text: Z.intl.string(Z.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: a()(A.icon, h),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ));
    let V = L ? s.iWm : s.nG3;
    (null != y &&
        M.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, p.Z)(y.name),
                    className: A.iconSpacing,
                    children: (0, r.jsx)(V, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(A.icon, h)
                    })
                },
                'activity'
            )
        ),
        O === T.YE.XBOX || j === N.wR.XBOX
            ? M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: A.iconSpacing,
                          children: (0, r.jsx)(P.Z, { className: a()(A.icon, h) })
                      },
                      'xbox'
                  )
              )
            : (O === T.YE.PLAYSTATION || j === N.wR.PLAYSTATION) &&
              M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: A.iconSpacing,
                          children: (0, r.jsx)(I.Z, { className: a()(A.icon, h) })
                      },
                      'playstation'
                  )
              ),
        b &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: A.iconSpacing,
                        text: Z.intl.string(Z.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(A.icon, h)
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
                        className: a()(A.iconSpacing, A.liveIconSpacing),
                        children: (0, r.jsx)(v.ZP, { size: v.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            ));
    let B = null != x && !(0, C.yE)(x.flags, w.udG.EMBEDDED);
    return 0 !== M.length || null != U || B
        ? (0, r.jsxs)('div', {
              className: a()(A.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: A.iconGroup,
                      children: [U, M]
                  }),
                  B &&
                      (0, r.jsx)('div', {
                          className: A.iconGroup,
                          children: (0, r.jsx)(
                              R,
                              {
                                  application: x,
                                  iconClassName: h,
                                  guildId: S,
                                  channelId: E,
                                  userId: D.id
                              },
                              ''.concat(D.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let M = i.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: l = A.avatarContainer, userNameClassName: c = A.usernameFont, size: d = w.ipw.SMALL, selected: p = !1, disabled: f = !1, isOverlay: v = !1 } = e,
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
    let { onClick: I, onKeyDown: P, onDoubleClick: C, onContextMenu: T, onMouseLeave: k, onMouseDown: M, priority: R, speaking: F, collapsed: U, mute: V, serverMute: B, guildId: Y, nick: W, isGuest: z, flipped: G, className: H, overlap: J, 'aria-label': X, ringing: q, user: K, channelId: Q } = b,
        { parentAnalyticsLocation: $ } = (0, m.ZP)(),
        ee = (0, u.bp)(),
        et = null != Q ? j.Z.getChannel(Q) : null,
        en = (0, o.e7)([O.default, x.Z], () => x.Z.isInChannel(Q, O.default.getId())),
        [er, ei] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== S.Z.isOpen() && ((e = S.Z.isOpen()) || ei(!1));
                };
            return (S.Z.addChangeListener(t), () => S.Z.removeChangeListener(t));
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: a()(H, {
                [A.voiceUser]: !0,
                [A.overlap]: J,
                [A.selected]: p,
                [A.clickable]: null != I,
                [A.userSmall]: d === w.ipw.SMALL,
                [A.userLarge]: d === w.ipw.LARGE,
                [A.disabled]: !p && f,
                [A.ringing]: q
            }),
            onClick: (e) => {
                null == I || I(e, K);
            },
            onDoubleClick: (e) => {
                null == C || C(e, K);
            },
            onContextMenu: (e) => {
                null == T || T(e, K);
            },
            onMouseLeave: (e) => {
                null == k || k(e, K);
            },
            onMouseDown: (e) => {
                null == M || M(e, K);
            },
            onKeyDown: P,
            'aria-label': null != (n = null != X ? X : W) ? n : K.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: a()(A.content, { [A.flipped]: G }),
                children: [
                    R && !U
                        ? (0, r.jsx)(s.ua7, {
                              text: Z.intl.string(Z.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', D({ className: a()(A.iconPriortySpeaker, { [A.iconPriortySpeakerSpeaking]: !V && !B && F }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: a()(l, A.avatar, {
                            [A.avatarLarge]: d === w.ipw.LARGE,
                            [A.avatarSmall]: d === w.ipw.SMALL,
                            [A.avatarSpeaking]: F
                        }),
                        style: { backgroundImage: 'url('.concat(K.getAvatarURL(Y, d === w.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: a()(c, {
                                    [A.username]: !0,
                                    [A.usernameSpeaking]: !V && !B && F
                                }),
                                children: [
                                    null != W ? W : E.ZP.getName(K),
                                    z
                                        ? (0, r.jsxs)('span', {
                                              className: A.guestSuffix,
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
                                className: a()(A.clanTag, v && A.isOverlay),
                                profileViewedAnalytics: { source: v ? w.jXE.OVERLAY : w.Sbl.VOICE_PANEL }
                            };
                        return !U || v
                            ? (0, r.jsx)(
                                  h.Z,
                                  ((e = D({}, i)),
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
                    (0, r.jsx)(L, D({ disabled: f }, b)),
                    !U && en
                        ? (0, r.jsx)(s.DY3, {
                              text: Z.intl.string(Z.t['+1H47u']),
                              className: a()(A.optionsButtonContainer, { [A.optionsContainerActive]: er }),
                              children: (0, r.jsx)(s.P3F, {
                                  className: a()(A.optionsButton, { [A.optionsActive]: er }),
                                  onClick: function (e) {
                                      null != Y &&
                                          null != et &&
                                          ((0, g.v)($, g.d.MORE),
                                          ei(!0),
                                          (0, y.D)(e, K, et, { context: ee }, (e, t) => {
                                              (0, _.o)({
                                                  menuName: e,
                                                  menuItemProps: t,
                                                  entrypoint: N.A5.THREE_DOT,
                                                  location: $,
                                                  targetUserId: K.id
                                              });
                                          }));
                                  },
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'md',
                                      className: A.icon
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
        [d, p] = i.useState(!1),
        m = (0, c.O)((e) => p(e));
    return (
        i.useEffect(() => {
            d &&
                f.ZP.trackWithMetadata(w.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u
                });
        }, [t.id, o, l, u, d]),
        (0, r.jsx)(s.DY3, {
            text: Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            'aria-label': Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            className: A.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(b.Z, {
                    className: a()(A.icon, n),
                    game: t,
                    size: b.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        f.ZP.trackWithMetadata(w.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function F(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: l, deaf: o, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e;
        e = l || i ? s.v0G : s.nRN;
        let n = (0, r.jsx)(e, {
            className: a()(A.icon, t, { [A.iconServer]: l }),
            color: 'currentColor'
        });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: i ? Z.intl.string(Z.t.Q8Uzoa) : l ? Z.intl.string(Z.t.uLddbW) : Z.intl.string(Z.t.tjtv3N),
                    className: A.iconSpacing,
                    children: n
                },
                'mute'
            )
        );
    }
    if (c || o) {
        let e = c ? s.Vm4 : s.wE8,
            n = (0, r.jsx)(e, {
                className: a()(A.icon, t, { [A.iconServer]: c }),
                color: 'currentColor'
            });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    className: A.iconSpacing,
                    text: c ? Z.intl.string(Z.t.btxSdH) : Z.intl.string(Z.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
