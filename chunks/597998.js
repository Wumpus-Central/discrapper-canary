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
    _ = n(795318),
    v = n(194082),
    h = n(925329),
    b = n(340044),
    y = n(833858),
    O = n(223135),
    j = n(880395),
    S = n(314897),
    x = n(592125),
    I = n(979651),
    P = n(574254),
    C = n(374129),
    E = n(639351),
    w = n(630388),
    T = n(51144),
    N = n(981631),
    Z = n(354459),
    A = n(927923),
    D = n(388032),
    k = n(850999);
function L(e) {
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
let M = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  s.DY3,
                  {
                      className: k.iconSpacing,
                      text: D.intl.string(D.t.qstQub),
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
    U = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)('div', {
            className: a()(i, k.list, n ? k.listCollapse : k.listDefault),
            role: 'group',
            children: t
        });
    };
function R(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: l, serverMute: o, deaf: c, serverDeaf: u, collapsed: p, video: m, isStreaming: g, disabled: _, isWatching: h, iconClassName: b, embeddedApplication: y, otherClientSessionType: O, voicePlatform: j, application: S, guildId: x, channelId: I, user: P, disconnected: T, hangStatusActivity: L, showHangStatus: U, isSelf: R, handleHoverHangStatus: V, handleHoverIcons: Y } = e,
        { enabled: B } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (p || _) return null;
    let G = [],
        H = (0, r.jsx)(W, {
            iconClassName: b,
            mute: n,
            localMute: i,
            serverMute: o,
            deaf: c,
            serverDeaf: u
        });
    (m &&
        (l
            ? G.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: k.iconSpacing,
                          text: D.intl.string(D.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(k.icon, b),
                              colorClass: k.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : G.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: k.iconSpacing,
                          text: D.intl.string(D.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(k.icon, b)
                          })
                      },
                      'video'
                  )
              )),
        T &&
            G.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: k.iconSpacing,
                        text: D.intl.string(D.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: a()(k.icon, b),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ));
    let z = B ? s.iWm : s.nG3;
    (null != y &&
        G.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, f.Z)(y.name),
                    className: k.iconSpacing,
                    children: (0, r.jsx)(z, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(k.icon, b)
                    })
                },
                'activity'
            )
        ),
        O === A.YE.XBOX || j === Z.wR.XBOX
            ? G.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(E.Z, { className: a()(k.icon, b) })
                      },
                      'xbox'
                  )
              )
            : (O === A.YE.PLAYSTATION || j === Z.wR.PLAYSTATION) &&
              G.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(C.Z, { className: a()(k.icon, b) })
                      },
                      'playstation'
                  )
              ),
        h &&
            G.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: k.iconSpacing,
                        text: D.intl.string(D.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(k.icon, b)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            G.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: a()(k.iconSpacing, k.liveIconSpacing),
                        children: (0, r.jsx)(v.ZP, { size: v.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            ));
    let J = null != S && !(0, w.yE)(S.flags, N.udG.EMBEDDED),
        X = null == L && J;
    return 0 !== G.length || null != H || U || X
        ? (0, r.jsxs)('div', {
              className: a()(k.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: k.iconGroup,
                      onMouseEnter: () => (null == Y ? void 0 : Y(!0)),
                      onMouseLeave: () => (null == Y ? void 0 : Y(!1)),
                      children: [H, G]
                  }),
                  U || X
                      ? (0, r.jsx)('div', {
                            className: k.iconGroup,
                            onMouseEnter: () => (null == V ? void 0 : V(!0)),
                            onMouseLeave: () => (null == V ? void 0 : V(!1)),
                            children: X
                                ? (0, r.jsx)(
                                      F,
                                      {
                                          application: S,
                                          iconClassName: b,
                                          guildId: x,
                                          channelId: I,
                                          userId: P.id
                                      },
                                      ''.concat(P.id, '-game')
                                  )
                                : (0, r.jsx)(M, {
                                      hangStatusActivity: L,
                                      iconClassName: b,
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
        { avatarContainerClass: l = k.avatarContainer, userNameClassName: c = k.usernameFont, size: d = N.ipw.SMALL, selected: f = !1, disabled: p = !1, isOverlay: v = !1 } = e,
        h = (function (e, t) {
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
    let { onClick: y, onKeyDown: O, onDoubleClick: C, onContextMenu: E, onMouseLeave: w, onMouseDown: A, priority: M, speaking: U, collapsed: V, mute: F, serverMute: W, guildId: Y, nick: B, isGuest: G, flipped: H, className: z, overlap: J, 'aria-label': X, ringing: q, user: K, channelId: Q } = h,
        { parentAnalyticsLocation: $ } = (0, m.ZP)(),
        ee = (0, u.bp)(),
        et = null != Q ? x.Z.getChannel(Q) : null,
        en = (0, o.e7)([S.default, I.Z], () => I.Z.isInChannel(Q, S.default.getId())),
        [er, ei] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== P.Z.isOpen() && ((e = P.Z.isOpen()) || ei(!1));
                };
            return (P.Z.addChangeListener(t), () => P.Z.removeChangeListener(t));
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: a()(z, {
                [k.voiceUser]: !0,
                [k.overlap]: J,
                [k.selected]: f,
                [k.clickable]: null != y,
                [k.userSmall]: d === N.ipw.SMALL,
                [k.userLarge]: d === N.ipw.LARGE,
                [k.disabled]: !f && p,
                [k.ringing]: q
            }),
            onClick: (e) => {
                null == y || y(e, K);
            },
            onDoubleClick: (e) => {
                null == C || C(e, K);
            },
            onContextMenu: (e) => {
                null == E || E(e, K);
            },
            onMouseLeave: (e) => {
                null == w || w(e, K);
            },
            onMouseDown: (e) => {
                null == A || A(e, K);
            },
            onKeyDown: O,
            'aria-label': null != (n = null != X ? X : B) ? n : K.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: a()(k.content, { [k.flipped]: H }),
                children: [
                    M && !V
                        ? (0, r.jsx)(s.ua7, {
                              text: D.intl.string(D.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', L({ className: a()(k.iconPriortySpeaker, { [k.iconPriortySpeakerSpeaking]: !F && !W && U }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: a()(l, k.avatar, {
                            [k.avatarLarge]: d === N.ipw.LARGE,
                            [k.avatarSmall]: d === N.ipw.SMALL,
                            [k.avatarSpeaking]: U
                        }),
                        style: { backgroundImage: 'url('.concat(K.getAvatarURL(Y, d === N.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: a()(c, {
                                    [k.username]: !0,
                                    [k.usernameSpeaking]: !F && !W && U
                                }),
                                children: [
                                    null != B ? B : T.ZP.getName(K),
                                    G
                                        ? (0, r.jsxs)('span', {
                                              className: k.guestSuffix,
                                              children: ['\xA0', D.intl.string(D.t['pFO/Pj'])]
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
                                className: a()(k.clanTag, v && k.isOverlay),
                                profileViewedAnalytics: { source: v ? N.jXE.OVERLAY : N.Sbl.VOICE_PANEL }
                            };
                        return !V || v
                            ? (0, r.jsx)(
                                  b.Z,
                                  ((e = L({}, i)),
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
                    (0, r.jsx)(R, L({ disabled: p }, h)),
                    !V && en
                        ? (0, r.jsx)(s.DY3, {
                              text: D.intl.string(D.t['+1H47u']),
                              className: a()(k.optionsButtonContainer, { [k.optionsContainerActive]: er }),
                              children: (0, r.jsx)(s.P3F, {
                                  className: a()(k.optionsButton, { [k.optionsActive]: er }),
                                  onClick: function (e) {
                                      null != Y &&
                                          null != et &&
                                          ((0, g.v)($, g.d.MORE),
                                          ei(!0),
                                          (0, j.D)(e, K, et, { context: ee }, (e, t) => {
                                              (0, _.o)({
                                                  menuName: e,
                                                  menuItemProps: t,
                                                  entrypoint: Z.A5.THREE_DOT,
                                                  location: $,
                                                  targetUserId: K.id
                                              });
                                          }));
                                  },
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'md',
                                      className: k.icon
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
                p.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u
                });
        }, [t.id, o, l, u, d]),
        (0, r.jsx)(s.DY3, {
            text: D.intl.formatToPlainString(D.t.Sq9xJy, { game: t.name }),
            'aria-label': D.intl.formatToPlainString(D.t.Sq9xJy, { game: t.name }),
            className: k.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(h.Z, {
                    className: a()(k.icon, n),
                    game: t,
                    size: h.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        p.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function W(e) {
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
                    text: i ? D.intl.string(D.t.Q8Uzoa) : l ? D.intl.string(D.t.uLddbW) : D.intl.string(D.t.tjtv3N),
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
                    text: c ? D.intl.string(D.t.btxSdH) : D.intl.string(D.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
