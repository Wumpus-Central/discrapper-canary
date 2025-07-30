(n.d(t, {
    ZP: () => V,
    eJ: () => U,
    nm: () => R
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
    A = n(981631),
    w = n(354459),
    D = n(927923),
    Z = n(388032),
    L = n(850999);
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
let k = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  s.DY3,
                  {
                      className: L.iconSpacing,
                      text: Z.intl.string(Z.t.qstQub),
                      children: (0, r.jsx)(s.svS, { className: a()(L.icon, n) })
                  },
                  'add-status'
              )
            : (0, r.jsx)(
                  s.DY3,
                  {
                      className: L.iconSpacing,
                      text: (0, y.O8)(t),
                      children: (0, r.jsx)(O.Z, {
                          hangStatusActivity: t,
                          className: a()(L.hangStatusIcon, n)
                      })
                  },
                  'hang-status'
              );
    },
    U = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)('div', {
            className: a()(i, L.list, n ? L.listCollapse : L.listDefault),
            role: 'group',
            children: t
        });
    };
function R(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: l, serverMute: o, deaf: c, serverDeaf: u, collapsed: p, video: m, isStreaming: g, disabled: h, isWatching: v, iconClassName: _, embeddedApplication: y, otherClientSessionType: O, voicePlatform: S, application: I, guildId: j, channelId: x, user: E, disconnected: N, hangStatusActivity: M, showHangStatus: U, isSelf: R, handleHoverHangStatus: V, handleHoverIcons: B } = e,
        { enabled: W } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (p || h) return null;
    let H = [],
        Y = (0, r.jsx)(G, {
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
                          className: L.iconSpacing,
                          text: Z.intl.string(Z.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(L.icon, _),
                              colorClass: L.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : H.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: L.iconSpacing,
                          text: Z.intl.string(Z.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(L.icon, _)
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
                        className: L.iconSpacing,
                        text: Z.intl.string(Z.t.HFwRpq),
                        children: (0, r.jsx)(s.Mgn, {
                            className: a()(L.icon, _),
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
                    className: L.iconSpacing,
                    children: (0, r.jsx)(z, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(L.icon, _)
                    })
                },
                'activity'
            )
        ),
        O === D.YE.XBOX || S === w.wR.XBOX
            ? H.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: L.iconSpacing,
                          children: (0, r.jsx)(C.Z, { className: a()(L.icon, _) })
                      },
                      'xbox'
                  )
              )
            : (O === D.YE.PLAYSTATION || S === w.wR.PLAYSTATION) &&
              H.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: L.iconSpacing,
                          children: (0, r.jsx)(P.Z, { className: a()(L.icon, _) })
                      },
                      'playstation'
                  )
              ),
        v &&
            H.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: L.iconSpacing,
                        text: Z.intl.string(Z.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(L.icon, _)
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
                        className: a()(L.iconSpacing, L.liveIconSpacing),
                        children: (0, r.jsx)(b.ZP, { size: b.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            ));
    let J = null != I && !(0, T.yE)(I.flags, A.udG.EMBEDDED),
        K = null == M && J;
    return 0 !== H.length || null != Y || U || K
        ? (0, r.jsxs)('div', {
              className: a()(L.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: L.iconGroup,
                      onMouseEnter: () => (null == B ? void 0 : B(!0)),
                      onMouseLeave: () => (null == B ? void 0 : B(!1)),
                      children: [Y, H]
                  }),
                  U || K
                      ? (0, r.jsx)('div', {
                            className: L.iconGroup,
                            onMouseEnter: () => (null == V ? void 0 : V(!0)),
                            onMouseLeave: () => (null == V ? void 0 : V(!1)),
                            children: K
                                ? (0, r.jsx)(
                                      F,
                                      {
                                          application: I,
                                          iconClassName: _,
                                          guildId: j,
                                          channelId: x,
                                          userId: E.id
                                      },
                                      ''.concat(E.id, '-game')
                                  )
                                : (0, r.jsx)(k, {
                                      hangStatusActivity: M,
                                      iconClassName: _,
                                      isSelf: R
                                  })
                        })
                      : null
              ]
          })
        : null;
}
let V = i.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: l = L.avatarContainer, userNameClassName: c = L.usernameFont, size: d = A.ipw.SMALL, selected: f = !1, disabled: p = !1, isOverlay: b = !1 } = e,
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
    let { onClick: y, onKeyDown: O, onDoubleClick: P, onContextMenu: C, onMouseLeave: T, onMouseDown: D, priority: k, speaking: U, collapsed: V, mute: F, serverMute: G, guildId: B, nick: W, isGuest: H, flipped: Y, className: z, overlap: J, 'aria-label': K, ringing: q, user: X, channelId: Q } = v,
        { parentAnalyticsLocation: $ } = (0, m.ZP)(),
        ee = (0, u.bp)(),
        et = null != Q ? j.Z.getChannel(Q) : null,
        en = (0, o.e7)([I.default, x.Z], () => x.Z.isInChannel(Q, I.default.getId())),
        [er, ei] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== E.Z.isOpen() && ((e = E.Z.isOpen()) || ei(!1));
                };
            return (E.Z.addChangeListener(t), () => E.Z.removeChangeListener(t));
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: a()(z, {
                [L.voiceUser]: !0,
                [L.overlap]: J,
                [L.selected]: f,
                [L.clickable]: null != y,
                [L.userSmall]: d === A.ipw.SMALL,
                [L.userLarge]: d === A.ipw.LARGE,
                [L.disabled]: !f && p,
                [L.ringing]: q
            }),
            onClick: (e) => {
                null == y || y(e, X);
            },
            onDoubleClick: (e) => {
                null == P || P(e, X);
            },
            onContextMenu: (e) => {
                null == C || C(e, X);
            },
            onMouseLeave: (e) => {
                null == T || T(e, X);
            },
            onMouseDown: (e) => {
                null == D || D(e, X);
            },
            onKeyDown: O,
            'aria-label': null != (n = null != K ? K : W) ? n : X.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: a()(L.content, { [L.flipped]: Y }),
                children: [
                    k && !V
                        ? (0, r.jsx)(s.ua7, {
                              text: Z.intl.string(Z.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', M({ className: a()(L.iconPriortySpeaker, { [L.iconPriortySpeakerSpeaking]: !F && !G && U }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: a()(l, L.avatar, {
                            [L.avatarLarge]: d === A.ipw.LARGE,
                            [L.avatarSmall]: d === A.ipw.SMALL,
                            [L.avatarSpeaking]: U
                        }),
                        style: { backgroundImage: 'url('.concat(X.getAvatarURL(B, d === A.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: a()(c, {
                                    [L.username]: !0,
                                    [L.usernameSpeaking]: !F && !G && U
                                }),
                                children: [
                                    null != W ? W : N.ZP.getName(X),
                                    H
                                        ? (0, r.jsxs)('span', {
                                              className: L.guestSuffix,
                                              children: ['\xA0', Z.intl.string(Z.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            i = {
                                primaryGuild: X.primaryGuild,
                                userId: X.id,
                                contextGuildId: B,
                                isOverlay: b,
                                disableTooltip: !0,
                                className: a()(L.clanTag, b && L.isOverlay),
                                profileViewedAnalytics: { source: b ? A.jXE.OVERLAY : A.Sbl.VOICE_PANEL }
                            };
                        return !V || b
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
                    (0, r.jsx)(R, M({ disabled: p }, v)),
                    !V && en
                        ? (0, r.jsx)(s.DY3, {
                              text: Z.intl.string(Z.t['+1H47u']),
                              className: a()(L.optionsButtonContainer, { [L.optionsContainerActive]: er }),
                              children: (0, r.jsx)(s.P3F, {
                                  className: a()(L.optionsButton, { [L.optionsActive]: er }),
                                  onClick: function (e) {
                                      null != B &&
                                          null != et &&
                                          ((0, g.v)($, g.d.MORE),
                                          ei(!0),
                                          (0, S.D)(e, X, et, { context: ee }, (e, t) => {
                                              (0, h.o)({
                                                  menuName: e,
                                                  menuItemProps: t,
                                                  entrypoint: w.A5.THREE_DOT,
                                                  location: $,
                                                  targetUserId: X.id
                                              });
                                          }));
                                  },
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'md',
                                      className: L.icon
                                  })
                              })
                          })
                        : null
                ]
            })
        })
    );
});
function F(e) {
    let { application: t, iconClassName: n, guildId: l, channelId: o, userId: u } = e,
        [d, f] = i.useState(!1),
        m = (0, c.O)((e) => f(e));
    return (
        i.useEffect(() => {
            d &&
                p.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u
                });
        }, [t.id, o, l, u, d]),
        (0, r.jsx)(s.DY3, {
            text: Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            'aria-label': Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            className: L.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(v.Z, {
                    className: a()(L.icon, n),
                    game: t,
                    size: v.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        p.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function G(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: l, deaf: o, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e;
        e = l || i ? s.v0G : s.nRN;
        let n = (0, r.jsx)(e, {
            className: a()(L.icon, t, { [L.iconServer]: l }),
            color: 'currentColor'
        });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: i ? Z.intl.string(Z.t.Q8Uzoa) : l ? Z.intl.string(Z.t.uLddbW) : Z.intl.string(Z.t.tjtv3N),
                    className: L.iconSpacing,
                    children: n
                },
                'mute'
            )
        );
    }
    if (c || o) {
        let e = c ? s.Vm4 : s.wE8,
            n = (0, r.jsx)(e, {
                className: a()(L.icon, t, { [L.iconServer]: c }),
                color: 'currentColor'
            });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    className: L.iconSpacing,
                    text: c ? Z.intl.string(Z.t.btxSdH) : Z.intl.string(Z.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
