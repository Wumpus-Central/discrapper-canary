(n.d(t, {
    ZP: () => F,
    eJ: () => R,
    nm: () => V
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
    h = n(795318),
    b = n(194082),
    v = n(925329),
    _ = n(340044),
    y = n(833858),
    O = n(223135),
    S = n(880395),
    I = n(314897),
    j = n(592125),
    x = n(979651),
    E = n(574254),
    P = n(374129),
    C = n(639351),
    T = n(630388),
    N = n(51144),
    A = n(91088),
    w = n(981631),
    D = n(354459),
    Z = n(927923),
    L = n(388032),
    k = n(850999);
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
let U = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  s.DY3,
                  {
                      className: k.iconSpacing,
                      text: L.intl.string(L.t.qstQub),
                      children: (0, r.jsx)(s.svS, { className: a()(k.icon, n) })
                  },
                  'add-status'
              )
            : (0, r.jsx)(
                  s.DY3,
                  {
                      className: k.iconSpacing,
                      text: (0, y.O8)(t),
                      children: (0, r.jsx)(O.Z, {
                          hangStatusActivity: t,
                          className: a()(k.hangStatusIcon, n)
                      })
                  },
                  'hang-status'
              );
    },
    R = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)('div', {
            className: a()(i, k.list, n ? k.listCollapse : k.listDefault),
            role: 'group',
            children: t
        });
    };
function V(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: l, serverMute: o, deaf: c, serverDeaf: u, collapsed: p, video: m, isStreaming: g, disabled: h, isWatching: v, iconClassName: _, embeddedApplication: y, otherClientSessionType: O, voicePlatform: S, application: I, guildId: j, channelId: x, user: E, disconnected: N, hangStatusActivity: A, showHangStatus: M, isSelf: R, handleHoverHangStatus: V, handleHoverIcons: F } = e,
        { enabled: W } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (p || h) return null;
    let H = [],
        Y = (0, r.jsx)(B, {
            iconClassName: _,
            mute: n,
            localMute: i,
            serverMute: o,
            deaf: c,
            serverDeaf: u
        });
    (m &&
        (l
            ? H.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: k.iconSpacing,
                          text: L.intl.string(L.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(k.icon, _),
                              colorClass: k.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : H.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: k.iconSpacing,
                          text: L.intl.string(L.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(k.icon, _)
                          })
                      },
                      'video'
                  )
              )),
        N &&
            H.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: k.iconSpacing,
                        text: L.intl.string(L.t.HFwRpq),
                        children: (0, r.jsx)(s.Mgn, {
                            className: a()(k.icon, _),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ));
    let z = W ? s.iWm : s.nG3;
    (null != y &&
        H.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, f.Z)(y.name),
                    className: k.iconSpacing,
                    children: (0, r.jsx)(z, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(k.icon, _)
                    })
                },
                'activity'
            )
        ),
        O === Z.YE.XBOX || S === D.wR.XBOX
            ? H.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(C.Z, { className: a()(k.icon, _) })
                      },
                      'xbox'
                  )
              )
            : (O === Z.YE.PLAYSTATION || S === D.wR.PLAYSTATION) &&
              H.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(P.Z, { className: a()(k.icon, _) })
                      },
                      'playstation'
                  )
              ),
        v &&
            H.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: k.iconSpacing,
                        text: L.intl.string(L.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(k.icon, _)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            H.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: a()(k.iconSpacing, k.liveIconSpacing),
                        children: (0, r.jsx)(b.ZP, { size: b.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            ));
    let J = null != I && !(0, T.yE)(I.flags, w.udG.EMBEDDED),
        K = null == A && J;
    return 0 !== H.length || null != Y || M || K
        ? (0, r.jsxs)('div', {
              className: a()(k.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: k.iconGroup,
                      onMouseEnter: () => (null == F ? void 0 : F(!0)),
                      onMouseLeave: () => (null == F ? void 0 : F(!1)),
                      children: [Y, H]
                  }),
                  M || K
                      ? (0, r.jsx)('div', {
                            className: k.iconGroup,
                            onMouseEnter: () => (null == V ? void 0 : V(!0)),
                            onMouseLeave: () => (null == V ? void 0 : V(!1)),
                            children: K
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          application: I,
                                          iconClassName: _,
                                          guildId: j,
                                          channelId: x,
                                          userId: E.id
                                      },
                                      ''.concat(E.id, '-game')
                                  )
                                : (0, r.jsx)(U, {
                                      hangStatusActivity: A,
                                      iconClassName: _,
                                      isSelf: R
                                  })
                        })
                      : null
              ]
          })
        : null;
}
let F = i.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: l = k.avatarContainer, userNameClassName: c = k.usernameFont, size: d = w.ipw.SMALL, selected: f = !1, disabled: p = !1, isOverlay: b = !1 } = e,
        v = (function (e, t) {
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
    let { onClick: y, onKeyDown: O, onDoubleClick: P, onContextMenu: C, onMouseLeave: T, onMouseDown: Z, priority: U, speaking: R, collapsed: F, mute: G, serverMute: B, guildId: W, nick: H, isGuest: Y, flipped: z, className: J, overlap: K, 'aria-label': q, ringing: X, user: Q, channelId: $ } = v,
        { parentAnalyticsLocation: ee } = (0, m.ZP)(),
        et = (0, u.bp)(),
        en = null != $ ? j.Z.getChannel($) : null,
        er = (0, o.e7)([I.default, x.Z], () => x.Z.isInChannel($, I.default.getId())),
        { enabled: ei } = A.P.useExperiment({ location: 'VoiceUser' }),
        [el, ea] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== E.Z.isOpen() && ((e = E.Z.isOpen()) || ea(!1));
                };
            return (E.Z.addChangeListener(t), () => E.Z.removeChangeListener(t));
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: a()(J, {
                [k.voiceUser]: !0,
                [k.overlap]: K,
                [k.selected]: f,
                [k.clickable]: null != y,
                [k.userSmall]: d === w.ipw.SMALL,
                [k.userLarge]: d === w.ipw.LARGE,
                [k.disabled]: !f && p,
                [k.ringing]: X
            }),
            onClick: (e) => {
                null == y || y(e, Q);
            },
            onDoubleClick: (e) => {
                null == P || P(e, Q);
            },
            onContextMenu: (e) => {
                null == C || C(e, Q);
            },
            onMouseLeave: (e) => {
                null == T || T(e, Q);
            },
            onMouseDown: (e) => {
                null == Z || Z(e, Q);
            },
            onKeyDown: O,
            'aria-label': null != (n = null != q ? q : H) ? n : Q.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: a()(k.content, { [k.flipped]: z }),
                children: [
                    U && !F
                        ? (0, r.jsx)(s.ua7, {
                              text: L.intl.string(L.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', M({ className: a()(k.iconPriortySpeaker, { [k.iconPriortySpeakerSpeaking]: !G && !B && R }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: a()(l, k.avatar, {
                            [k.avatarLarge]: d === w.ipw.LARGE,
                            [k.avatarSmall]: d === w.ipw.SMALL,
                            [k.avatarSpeaking]: R
                        }),
                        style: { backgroundImage: 'url('.concat(Q.getAvatarURL(W, d === w.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: a()(c, {
                                    [k.username]: !0,
                                    [k.usernameSpeaking]: !G && !B && R
                                }),
                                children: [
                                    null != H ? H : N.ZP.getName(Q),
                                    Y
                                        ? (0, r.jsxs)('span', {
                                              className: k.guestSuffix,
                                              children: ['\xA0', L.intl.string(L.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            i = {
                                primaryGuild: Q.primaryGuild,
                                userId: Q.id,
                                contextGuildId: W,
                                isOverlay: b,
                                disableTooltip: !0,
                                className: a()(k.clanTag, b && k.isOverlay),
                                profileViewedAnalytics: { source: b ? w.jXE.OVERLAY : w.Sbl.VOICE_PANEL }
                            };
                        return !F || b
                            ? (0, r.jsx)(
                                  _.Z,
                                  ((e = M({}, i)),
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
                    (0, r.jsx)(V, M({ disabled: p }, v)),
                    F || !er || ei
                        ? null
                        : (0, r.jsx)(s.DY3, {
                              text: L.intl.string(L.t['+1H47u']),
                              className: a()(k.optionsButtonContainer, { [k.optionsContainerActive]: el }),
                              children: (0, r.jsx)(s.P3F, {
                                  className: a()(k.optionsButton, { [k.optionsActive]: el }),
                                  onClick: function (e) {
                                      null != W &&
                                          null != en &&
                                          ((0, g.v)(ee, g.d.MORE),
                                          ea(!0),
                                          (0, S.D)(e, Q, en, { context: et }, (e, t) => {
                                              (0, h.o)({
                                                  menuName: e,
                                                  menuItemProps: t,
                                                  entrypoint: D.A5.THREE_DOT,
                                                  location: ee,
                                                  targetUserId: Q.id
                                              });
                                          }));
                                  },
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'md',
                                      className: k.icon
                                  })
                              })
                          })
                ]
            })
        })
    );
});
function G(e) {
    let { application: t, iconClassName: n, guildId: l, channelId: o, userId: u } = e,
        [d, f] = i.useState(!1),
        m = (0, c.O)((e) => f(e));
    return (
        i.useEffect(() => {
            d &&
                p.ZP.trackWithMetadata(w.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u
                });
        }, [t.id, o, l, u, d]),
        (0, r.jsx)(s.DY3, {
            text: L.intl.formatToPlainString(L.t.Sq9xJy, { game: t.name }),
            'aria-label': L.intl.formatToPlainString(L.t.Sq9xJy, { game: t.name }),
            className: k.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(v.Z, {
                    className: a()(k.icon, n),
                    game: t,
                    size: v.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        p.ZP.trackWithMetadata(w.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function B(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: l, deaf: o, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e;
        e = l || i ? s.v0G : s.nRN;
        let n = (0, r.jsx)(e, {
            className: a()(k.icon, t, { [k.iconServer]: l }),
            color: 'currentColor'
        });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: i ? L.intl.string(L.t.Q8Uzoa) : l ? L.intl.string(L.t.uLddbW) : L.intl.string(L.t.tjtv3N),
                    className: k.iconSpacing,
                    children: n
                },
                'mute'
            )
        );
    }
    if (c || o) {
        let e = c ? s.Vm4 : s.wE8,
            n = (0, r.jsx)(e, {
                className: a()(k.icon, t, { [k.iconServer]: c }),
                color: 'currentColor'
            });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    className: k.iconSpacing,
                    text: c ? L.intl.string(L.t.btxSdH) : L.intl.string(L.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
