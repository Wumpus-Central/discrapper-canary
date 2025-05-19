n.d(t, {
    ZP: () => M,
    eJ: () => L,
    nm: () => k
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    c = n(434650),
    u = n(40851),
    d = n(456100),
    p = n(657305),
    f = n(367907),
    m = n(906732),
    g = n(522651),
    b = n(795318),
    O = n(194082),
    h = n(925329),
    y = n(340044),
    v = n(880395),
    S = n(314897),
    j = n(592125),
    P = n(979651),
    I = n(574254),
    E = n(374129),
    Z = n(639351),
    x = n(630388),
    C = n(51144),
    T = n(981631),
    A = n(354459),
    N = n(927923),
    w = n(388032),
    _ = n(518995);
function D(e) {
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
let L = (e) => {
    let { children: t, collapsed: n = !1, className: l } = e;
    return (0, r.jsx)('div', {
        className: o()(l, _.list, n ? _.listCollapse : _.listDefault),
        role: 'group',
        children: t
    });
};
function k(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: a, deaf: c, serverDeaf: u, collapsed: f, video: m, isStreaming: g, disabled: b, isWatching: h, iconClassName: y, embeddedApplication: v, otherClientSessionType: S, voicePlatform: j, application: P, guildId: I, channelId: C, user: D, disconnected: L } = e,
        { enabled: k } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (f || b) return null;
    let M = [],
        V = (0, r.jsx)(R, {
            iconClassName: y,
            mute: n,
            localMute: l,
            serverMute: a,
            deaf: c,
            serverDeaf: u
        });
    m &&
        (i
            ? M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: _.iconSpacing,
                          text: w.intl.string(w.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(_.icon, y),
                              colorClass: _.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: _.iconSpacing,
                          text: w.intl.string(w.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(_.icon, y)
                          })
                      },
                      'video'
                  )
              )),
        L &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: w.intl.string(w.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: o()(_.icon, y),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            );
    let Y = k ? s.iWm : s.nG3;
    null != v &&
        M.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, p.Z)(v.name),
                    className: _.iconSpacing,
                    children: (0, r.jsx)(Y, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(_.icon, y)
                    })
                },
                'activity'
            )
        ),
        S === N.YE.XBOX || j === A.wR.XBOX
            ? M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(Z.Z, { className: o()(_.icon, y) })
                      },
                      'xbox'
                  )
              )
            : (S === N.YE.PLAYSTATION || j === A.wR.PLAYSTATION) &&
              M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(E.Z, { className: o()(_.icon, y) })
                      },
                      'playstation'
                  )
              ),
        h &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: w.intl.string(w.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(_.icon, y)
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
                        className: o()(_.iconSpacing, _.liveIconSpacing),
                        children: (0, r.jsx)(O.ZP, { size: O.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let F = null != P && !(0, x.yE)(P.flags, T.udG.EMBEDDED);
    return 0 !== M.length || null != V || F
        ? (0, r.jsxs)('div', {
              className: o()(_.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: _.iconGroup,
                      children: [V, M]
                  }),
                  F &&
                      (0, r.jsx)('div', {
                          className: _.iconGroup,
                          children: (0, r.jsx)(
                              U,
                              {
                                  application: P,
                                  iconClassName: y,
                                  guildId: I,
                                  channelId: C,
                                  userId: D.id
                              },
                              ''.concat(D.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let M = l.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: i = _.avatarContainer, userNameClassName: c = _.usernameFont, size: d = T.ipw.SMALL, selected: p = !1, disabled: f = !1, isOverlay: O = !1 } = e,
        h = (function (e, t) {
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
    let { onClick: E, onKeyDown: Z, onDoubleClick: x, onContextMenu: N, onMouseLeave: L, onMouseDown: M, priority: U, speaking: R, collapsed: V, mute: Y, serverMute: F, guildId: B, nick: G, isGuest: W, flipped: z, className: H, overlap: J, 'aria-label': X, ringing: K, user: q, channelId: Q } = h,
        { parentAnalyticsLocation: $ } = (0, m.ZP)(),
        ee = (0, u.bp)(),
        et = null != Q ? j.Z.getChannel(Q) : null,
        en = (0, a.e7)([S.default, P.Z], () => P.Z.isInChannel(Q, S.default.getId())),
        [er, el] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== I.Z.isOpen() && ((e = I.Z.isOpen()) || el(!1));
                };
            return I.Z.addChangeListener(t), () => I.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: o()(H, {
                [_.voiceUser]: !0,
                [_.overlap]: J,
                [_.selected]: p,
                [_.clickable]: null != E,
                [_.userSmall]: d === T.ipw.SMALL,
                [_.userLarge]: d === T.ipw.LARGE,
                [_.disabled]: !p && f,
                [_.ringing]: K
            }),
            onClick: (e) => {
                null == E || E(e, q);
            },
            onDoubleClick: (e) => {
                null == x || x(e, q);
            },
            onContextMenu: (e) => {
                null == N || N(e, q);
            },
            onMouseLeave: (e) => {
                null == L || L(e, q);
            },
            onMouseDown: (e) => {
                null == M || M(e, q);
            },
            onKeyDown: Z,
            'aria-label': null != (n = null != X ? X : G) ? n : q.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: o()(_.content, { [_.flipped]: z }),
                children: [
                    U && !V
                        ? (0, r.jsx)(s.ua7, {
                              text: w.intl.string(w.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', D({ className: o()(_.iconPriortySpeaker, { [_.iconPriortySpeakerSpeaking]: !Y && !F && R }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(i, _.avatar, {
                            [_.avatarLarge]: d === T.ipw.LARGE,
                            [_.avatarSmall]: d === T.ipw.SMALL,
                            [_.avatarSpeaking]: R
                        }),
                        style: { backgroundImage: 'url('.concat(q.getAvatarURL(B, d === T.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: o()(c, {
                                    [_.username]: !0,
                                    [_.usernameSpeaking]: !Y && !F && R
                                }),
                                children: [
                                    null != G ? G : C.ZP.getName(q),
                                    W
                                        ? (0, r.jsxs)('span', {
                                              className: _.guestSuffix,
                                              children: ['\xA0', w.intl.string(w.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            l = {
                                primaryGuild: q.primaryGuild,
                                userId: q.id,
                                contextGuildId: B,
                                isOverlay: O,
                                disableTooltip: !0,
                                className: o()(_.clanTag, O && _.isOverlay),
                                profileViewedAnalytics: { source: O ? T.jXE.OVERLAY : T.Sbl.VOICE_PANEL }
                            };
                        return !V || O
                            ? (0, r.jsx)(
                                  y.Z,
                                  ((e = D({}, l)),
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
                    (0, r.jsx)(k, D({ disabled: f }, h)),
                    !V && en
                        ? (0, r.jsx)(s.DY3, {
                              text: w.intl.string(w.t['+1H47u']),
                              className: o()(_.optionsButtonContainer, { [_.optionsContainerActive]: er }),
                              children: (0, r.jsx)(s.P3F, {
                                  className: o()(_.optionsButton, { [_.optionsActive]: er }),
                                  onClick: function (e) {
                                      null != B &&
                                          null != et &&
                                          ((0, g.v)($, g.d.MORE),
                                          el(!0),
                                          (0, v.D)(e, q, et, { context: ee }, (e, t) => {
                                              (0, b.o)({
                                                  menuName: e,
                                                  menuItemProps: t,
                                                  entrypoint: A.A5.THREE_DOT,
                                                  location: $,
                                                  targetUserId: q.id
                                              });
                                          }));
                                  },
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'md',
                                      className: _.icon
                                  })
                              })
                          })
                        : null
                ]
            })
        })
    );
});
function U(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: a, userId: u } = e,
        [d, p] = l.useState(!1),
        m = (0, c.O)((e) => p(e));
    return (
        l.useEffect(() => {
            d &&
                f.ZP.trackWithMetadata(T.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: a,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, a, i, u, d]),
        (0, r.jsx)(s.DY3, {
            text: w.intl.formatToPlainString(w.t.Sq9xJy, { game: t.name }),
            'aria-label': w.intl.formatToPlainString(w.t.Sq9xJy, { game: t.name }),
            className: _.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(h.Z, {
                    className: o()(_.icon, n),
                    game: t,
                    size: h.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        f.ZP.trackWithMetadata(T.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: a,
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
function R(e) {
    let { iconClassName: t, mute: n, localMute: l, serverMute: i, deaf: a, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e;
        e = i || l ? s.v0G : s.nRN;
        let n = (0, r.jsx)(e, {
            className: o()(_.icon, t, { [_.iconServer]: i }),
            color: 'currentColor'
        });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: l ? w.intl.string(w.t.Q8Uzoa) : i ? w.intl.string(w.t.uLddbW) : w.intl.string(w.t.tjtv3N),
                    className: _.iconSpacing,
                    children: n
                },
                'mute'
            )
        );
    }
    if (c || a) {
        let e = c ? s.Vm4 : s.wE8,
            n = (0, r.jsx)(e, {
                className: o()(_.icon, t, { [_.iconServer]: c }),
                color: 'currentColor'
            });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    className: _.iconSpacing,
                    text: c ? w.intl.string(w.t.btxSdH) : w.intl.string(w.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
