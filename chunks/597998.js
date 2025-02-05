n.d(t, {
    ZP: () => b,
    eJ: () => j,
    nm: () => P
}),
    n(653041),
    n(789020),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(434650),
    c = n(40851),
    u = n(657305),
    d = n(367907),
    m = n(682901),
    p = n(194082),
    h = n(282256),
    g = n(925329),
    f = n(648384),
    v = n(592125),
    S = n(574254),
    x = n(374129),
    I = n(639351),
    y = n(630388),
    T = n(51144),
    N = n(981631),
    A = n(354459),
    E = n(927923),
    Z = n(388032),
    C = n(939214);
let j = (e) => {
    let { children: t, collapsed: n = !1, className: i } = e;
    return (0, l.jsx)('div', {
        className: a()(i, C.list, n ? C.listCollapse : C.listDefault),
        role: 'group',
        children: t
    });
};
function P(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: r, serverMute: o, deaf: c, serverDeaf: d, collapsed: m, video: h, isStreaming: g, disabled: f, isWatching: v, iconClassName: S, embeddedApplication: T, otherClientSessionType: j, voicePlatform: P, application: b, guildId: R, channelId: L, user: M, disconnected: U } = e;
    if (m || f) return null;
    let k = [],
        O = (0, l.jsx)(_, {
            iconClassName: S,
            mute: n,
            localMute: i,
            serverMute: o,
            deaf: c,
            serverDeaf: d
        });
    h &&
        (r
            ? k.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: C.iconSpacing,
                          text: Z.intl.string(Z.t['PXMZ//']),
                          children: (0, l.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(C.icon, S),
                              colorClass: C.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : k.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: C.iconSpacing,
                          text: Z.intl.string(Z.t.FlNoSU),
                          children: (0, l.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(C.icon, S)
                          })
                      },
                      'video'
                  )
              )),
        U &&
            k.push(
                (0, l.jsx)(
                    s.DY3,
                    {
                        className: C.iconSpacing,
                        text: Z.intl.string(Z.t.HFwRpq),
                        children: (0, l.jsx)(s.P4T, {
                            className: a()(C.icon, S),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != T &&
            k.push(
                (0, l.jsx)(
                    s.DY3,
                    {
                        text: (0, u.Z)(T.name),
                        className: C.iconSpacing,
                        children: (0, l.jsx)(s.nG3, {
                            size: 'md',
                            color: 'currentColor',
                            className: a()(C.icon, S)
                        })
                    },
                    'activity'
                )
            ),
        j === E.YE.XBOX || P === A.wR.XBOX
            ? k.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(C.iconSpacing),
                          children: (0, l.jsx)(I.Z, { className: a()(C.icon, S) })
                      },
                      'xbox'
                  )
              )
            : (j === E.YE.PLAYSTATION || P === A.wR.PLAYSTATION) &&
              k.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(C.iconSpacing),
                          children: (0, l.jsx)(x.Z, { className: a()(C.icon, S) })
                      },
                      'playstation'
                  )
              ),
        g
            ? k.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(C.iconSpacing, C.liveIconSpacing),
                          children: (0, l.jsx)(p.ZP, { size: p.ZP.Sizes.SMALL })
                      },
                      'stream'
                  )
              )
            : v &&
              k.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: C.iconSpacing,
                          text: Z.intl.string(Z.t.JH1SJy),
                          children: (0, l.jsx)(s.tEF, {
                              size: 'xs',
                              color: 'currentColor',
                              className: a()(C.icon, S)
                          })
                      },
                      'watch'
                  )
              );
    let D = null != b && !(0, y.yE)(b.flags, N.udG.EMBEDDED);
    return 0 !== k.length || null != O || D
        ? (0, l.jsxs)('div', {
              className: a()(C.icons, t),
              children: [
                  (0, l.jsxs)('div', {
                      className: C.iconGroup,
                      children: [O, k]
                  }),
                  D &&
                      (0, l.jsx)('div', {
                          className: C.iconGroup,
                          children: (0, l.jsx)(
                              w,
                              {
                                  application: b,
                                  iconClassName: S,
                                  guildId: R,
                                  channelId: L,
                                  userId: M.id
                              },
                              ''.concat(M.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let b = function (e) {
    let { avatarContainerClass: t = C.avatarContainer, userNameClassName: n = C.usernameFont, size: r = N.ipw.SMALL, selected: o = !1, disabled: u = !1, isOverlay: d = !1, ...p } = e,
        { onClick: g, onKeyDown: x, onDoubleClick: I, onContextMenu: y, onMouseEnter: A, onMouseLeave: E, onMouseDown: j, priority: b, speaking: w, collapsed: _, mute: R, serverMute: L, guildId: M, nick: U, isGuest: k, flipped: O, className: D, overlap: G, 'aria-label': Y, tabIndex: z, ringing: B, user: F, channelId: V } = p,
        W = (0, c.bp)(),
        J = null != V ? v.Z.getChannel(V) : null,
        { enabled: H } = (0, m.Z)({ location: 'VoiceUser' }),
        [X, K] = i.useState(!1),
        [q, Q] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                t = () => {
                    e === S.Z.isOpen() || (e = S.Z.isOpen()) || Q(!1);
                };
            return S.Z.addChangeListener(t), () => S.Z.removeChangeListener(t);
        }, []),
        (0, l.jsx)(s.P3F, {
            className: a()(D, {
                [C.voiceUser]: !0,
                [C.overlap]: G,
                [C.selected]: o,
                [C.clickable]: null != g,
                [C.userSmall]: r === N.ipw.SMALL,
                [C.userLarge]: r === N.ipw.LARGE,
                [C.disabled]: !o && u,
                [C.ringing]: B
            }),
            onClick: (e) => {
                null == g || g(e, F);
            },
            onDoubleClick: (e) => {
                null == I || I(e, F);
            },
            onContextMenu: (e) => {
                null == y || y(e, F);
            },
            onMouseEnter: (e) => {
                K(!0), null == A || A(e, F);
            },
            onMouseLeave: (e) => {
                K(!1), null == E || E(e, F);
            },
            onMouseDown: (e) => {
                null == j || j(e, F);
            },
            onKeyDown: x,
            'aria-label': Y,
            tabIndex: z,
            children: (0, l.jsxs)('div', {
                className: a()(C.content, { [C.flipped]: O }),
                children: [
                    b && !_
                        ? (0, l.jsx)(s.ua7, {
                              text: Z.intl.string(Z.t.BVK71t),
                              children: (e) =>
                                  (0, l.jsx)('div', {
                                      className: a()(C.iconPriortySpeaker, { [C.iconPriortySpeakerSpeaking]: !R && !L && w }),
                                      ...e
                                  })
                          })
                        : null,
                    (0, l.jsx)('div', {
                        className: a()(t, C.avatar, {
                            [C.avatarLarge]: r === N.ipw.LARGE,
                            [C.avatarSmall]: r === N.ipw.SMALL,
                            [C.avatarSpeaking]: w
                        }),
                        style: { backgroundImage: 'url('.concat(F.getAvatarURL(M, r === N.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        let e = (0, l.jsxs)('div', {
                                className: a()(n, {
                                    [C.username]: !0,
                                    [C.usernameSpeaking]: !R && !L && w
                                }),
                                children: [
                                    null != U ? U : T.ZP.getName(F),
                                    k
                                        ? (0, l.jsxs)('span', {
                                              className: C.guestSuffix,
                                              children: ['\xA0', Z.intl.string(Z.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            t = {
                                primaryGuild: F.primaryGuild,
                                userId: F.id,
                                contextGuildId: M,
                                isOverlay: d,
                                disableTooltip: !0,
                                className: a()(C.clanTag, d && C.isOverlay),
                                profileViewedAnalytics: { source: d ? N.jXE.OVERLAY : N.Sbl.VOICE_PANEL }
                            };
                        return !_ || d
                            ? (0, l.jsx)(l.Fragment, {
                                  children: (0, l.jsx)(h.Z, {
                                      ...t,
                                      children: e
                                  })
                              })
                            : null;
                    })(),
                    (0, l.jsx)(P, {
                        disabled: u,
                        ...p
                    }),
                    H &&
                        (X || q
                            ? (0, l.jsx)(s.P3F, {
                                  className: a()(C.moreClickable, q && C.moreActive),
                                  onClick: function (e) {
                                      null != M && null != J && (Q(!0), (0, f.p)(e, F, J, M, { context: W }));
                                  },
                                  children: (0, l.jsx)(s.xhG, {
                                      size: 'md',
                                      className: a()(C.icon)
                                  })
                              })
                            : null)
                ]
            })
        })
    );
};
function w(e) {
    let { application: t, iconClassName: n, guildId: r, channelId: c, userId: u } = e,
        [m, p] = i.useState(!1),
        h = (0, o.O)((e) => p(e));
    return (
        i.useEffect(() => {
            m &&
                d.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: r,
                    user_id: u
                });
        }, [t.id, c, r, u, m]),
        (0, l.jsx)(s.DY3, {
            text: Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            'aria-label': Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            className: C.iconSpacing,
            children: (0, l.jsx)('div', {
                ref: h,
                children: (0, l.jsx)(g.Z, {
                    className: a()(C.icon, n),
                    game: t,
                    size: g.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: c,
                            guild_id: r,
                            game_name: t.name,
                            user_id: u
                        });
                    }
                })
            })
        })
    );
}
function _(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: r, deaf: o, serverDeaf: c } = e,
        u = (0, s.bWb)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = r ? s.v0G : i ? s.v0G : s.nRN),
                (e = (0, l.jsx)(n, {
                    className: a()(C.icon, t, { [C.iconServer]: r }),
                    color: 'currentColor'
                }));
        } else
            e = (0, l.jsx)(s.nRN, {
                size: 'md',
                color: 'currentColor',
                className: a()(C.icon, t, { [C.iconServer]: r }),
                colorClass: i ? C.strikethrough : void 0
            });
        d.push(
            (0, l.jsx)(
                s.DY3,
                {
                    text: i ? Z.intl.string(Z.t.Q8Uzoa) : r ? Z.intl.string(Z.t.uLddbW) : Z.intl.string(Z.t.tjtv3N),
                    className: C.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || o) {
        let e;
        if (u) {
            let n = c ? s.Vm4 : s.wE8;
            e = (0, l.jsx)(n, {
                className: a()(C.icon, t, { [C.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, l.jsx)(s.wE8, {
                size: 'md',
                color: 'currentColor',
                className: a()(C.icon, t, { [C.iconServer]: c })
            });
        d.push(
            (0, l.jsx)(
                s.DY3,
                {
                    className: C.iconSpacing,
                    text: c ? Z.intl.string(Z.t.btxSdH) : Z.intl.string(Z.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
}
