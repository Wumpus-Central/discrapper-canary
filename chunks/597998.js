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
    u = n(40851),
    c = n(657305),
    d = n(367907),
    m = n(682901),
    h = n(194082),
    g = n(282256),
    f = n(925329),
    p = n(648384),
    v = n(592125),
    S = n(574254),
    I = n(374129),
    x = n(639351),
    T = n(630388),
    Z = n(51144),
    y = n(981631),
    N = n(354459),
    E = n(927923),
    C = n(388032),
    A = n(880598);
let j = (e) => {
    let { children: t, collapsed: n = !1, className: i } = e;
    return (0, l.jsx)('div', {
        className: a()(i, A.list, n ? A.listCollapse : A.listDefault),
        role: 'group',
        children: t
    });
};
function P(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: r, serverMute: o, deaf: u, serverDeaf: d, collapsed: m, video: g, isStreaming: f, disabled: p, isWatching: v, iconClassName: S, embeddedApplication: Z, otherClientSessionType: j, voicePlatform: P, application: b, guildId: R, channelId: L, user: M, disconnected: O } = e;
    if (m || p) return null;
    let U = [],
        D = (0, l.jsx)(_, {
            iconClassName: S,
            mute: n,
            localMute: i,
            serverMute: o,
            deaf: u,
            serverDeaf: d
        });
    g &&
        (r
            ? U.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: A.iconSpacing,
                          text: C.intl.string(C.t['PXMZ//']),
                          children: (0, l.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(A.icon, S),
                              colorClass: A.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : U.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: A.iconSpacing,
                          text: C.intl.string(C.t.FlNoSU),
                          children: (0, l.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(A.icon, S)
                          })
                      },
                      'video'
                  )
              )),
        O &&
            U.push(
                (0, l.jsx)(
                    s.DY3,
                    {
                        className: A.iconSpacing,
                        text: C.intl.string(C.t.HFwRpq),
                        children: (0, l.jsx)(s.P4T, {
                            className: a()(A.icon, S),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != Z &&
            U.push(
                (0, l.jsx)(
                    s.DY3,
                    {
                        text: (0, c.Z)(Z.name),
                        className: A.iconSpacing,
                        children: (0, l.jsx)(s.nG3, {
                            size: 'md',
                            color: 'currentColor',
                            className: a()(A.icon, S)
                        })
                    },
                    'activity'
                )
            ),
        j === E.YE.XBOX || P === N.wR.XBOX
            ? U.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(A.iconSpacing),
                          children: (0, l.jsx)(x.Z, { className: a()(A.icon, S) })
                      },
                      'xbox'
                  )
              )
            : (j === E.YE.PLAYSTATION || P === N.wR.PLAYSTATION) &&
              U.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(A.iconSpacing),
                          children: (0, l.jsx)(I.Z, { className: a()(A.icon, S) })
                      },
                      'playstation'
                  )
              ),
        f
            ? U.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(A.iconSpacing, A.liveIconSpacing),
                          children: (0, l.jsx)(h.ZP, { size: h.ZP.Sizes.SMALL })
                      },
                      'stream'
                  )
              )
            : v &&
              U.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: A.iconSpacing,
                          text: C.intl.string(C.t.JH1SJy),
                          children: (0, l.jsx)(s.tEF, {
                              size: 'xs',
                              color: 'currentColor',
                              className: a()(A.icon, S)
                          })
                      },
                      'watch'
                  )
              );
    let k = null != b && !(0, T.yE)(b.flags, y.udG.EMBEDDED);
    return 0 !== U.length || null != D || k
        ? (0, l.jsxs)('div', {
              className: a()(A.icons, t),
              children: [
                  (0, l.jsxs)('div', {
                      className: A.iconGroup,
                      children: [D, U]
                  }),
                  k &&
                      (0, l.jsx)('div', {
                          className: A.iconGroup,
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
    let { avatarContainerClass: t = A.avatarContainer, userNameClassName: n = A.usernameFont, size: r = y.ipw.SMALL, selected: o = !1, disabled: c = !1, isOverlay: d = !1, ...h } = e,
        { onClick: f, onKeyDown: I, onDoubleClick: x, onContextMenu: T, onMouseEnter: N, onMouseLeave: E, onMouseDown: j, priority: b, speaking: w, collapsed: _, mute: R, serverMute: L, guildId: M, nick: O, isGuest: U, flipped: D, className: k, overlap: G, 'aria-label': Y, tabIndex: z, ringing: F, user: B, channelId: V } = h,
        W = (0, u.bp)(),
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
            className: a()(k, {
                [A.voiceUser]: !0,
                [A.overlap]: G,
                [A.selected]: o,
                [A.clickable]: null != f,
                [A.userSmall]: r === y.ipw.SMALL,
                [A.userLarge]: r === y.ipw.LARGE,
                [A.disabled]: !o && c,
                [A.ringing]: F
            }),
            onClick: (e) => {
                null == f || f(e, B);
            },
            onDoubleClick: (e) => {
                null == x || x(e, B);
            },
            onContextMenu: (e) => {
                null == T || T(e, B);
            },
            onMouseEnter: (e) => {
                K(!0), null == N || N(e, B);
            },
            onMouseLeave: (e) => {
                K(!1), null == E || E(e, B);
            },
            onMouseDown: (e) => {
                null == j || j(e, B);
            },
            onKeyDown: I,
            'aria-label': Y,
            tabIndex: z,
            children: (0, l.jsxs)('div', {
                className: a()(A.content, { [A.flipped]: D }),
                children: [
                    b && !_
                        ? (0, l.jsx)(s.ua7, {
                              text: C.intl.string(C.t.BVK71t),
                              children: (e) =>
                                  (0, l.jsx)('div', {
                                      className: a()(A.iconPriortySpeaker, { [A.iconPriortySpeakerSpeaking]: !R && !L && w }),
                                      ...e
                                  })
                          })
                        : null,
                    (0, l.jsx)('div', {
                        className: a()(t, A.avatar, {
                            [A.avatarLarge]: r === y.ipw.LARGE,
                            [A.avatarSmall]: r === y.ipw.SMALL,
                            [A.avatarSpeaking]: w
                        }),
                        style: { backgroundImage: 'url('.concat(B.getAvatarURL(M, r === y.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        let e = (0, l.jsxs)('div', {
                                className: a()(n, {
                                    [A.username]: !0,
                                    [A.usernameSpeaking]: !R && !L && w
                                }),
                                children: [
                                    null != O ? O : Z.ZP.getName(B),
                                    U
                                        ? (0, l.jsxs)('span', {
                                              className: A.guestSuffix,
                                              children: ['\xA0', C.intl.string(C.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            t = {
                                primaryGuild: B.primaryGuild,
                                userId: B.id,
                                contextGuildId: M,
                                isOverlay: d,
                                disableTooltip: !0,
                                className: a()(A.clanTag, d && A.isOverlay),
                                profileViewedAnalytics: { source: d ? y.jXE.OVERLAY : y.Sbl.VOICE_PANEL }
                            };
                        return !_ || d
                            ? (0, l.jsx)(l.Fragment, {
                                  children: (0, l.jsx)(g.Z, {
                                      ...t,
                                      children: e
                                  })
                              })
                            : null;
                    })(),
                    (0, l.jsx)(P, {
                        disabled: c,
                        ...h
                    }),
                    H &&
                        (X || q
                            ? (0, l.jsx)(s.P3F, {
                                  className: a()(A.moreClickable, q && A.moreActive),
                                  onClick: function (e) {
                                      null != M && null != J && (Q(!0), (0, p.p)(e, B, J, M, { context: W }));
                                  },
                                  children: (0, l.jsx)(s.xhG, {
                                      size: 'md',
                                      className: a()(A.icon)
                                  })
                              })
                            : null)
                ]
            })
        })
    );
};
function w(e) {
    let { application: t, iconClassName: n, guildId: r, channelId: u, userId: c } = e,
        [m, h] = i.useState(!1),
        g = (0, o.O)((e) => h(e));
    return (
        i.useEffect(() => {
            m &&
                d.ZP.trackWithMetadata(y.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: u,
                    guild_id: r,
                    user_id: c
                });
        }, [t.id, u, r, c, m]),
        (0, l.jsx)(s.DY3, {
            text: C.intl.formatToPlainString(C.t.Sq9xJy, { game: t.name }),
            'aria-label': C.intl.formatToPlainString(C.t.Sq9xJy, { game: t.name }),
            className: A.iconSpacing,
            children: (0, l.jsx)('div', {
                ref: g,
                children: (0, l.jsx)(f.Z, {
                    className: a()(A.icon, n),
                    game: t,
                    size: f.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(y.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: u,
                            guild_id: r,
                            game_name: t.name,
                            user_id: c
                        });
                    }
                })
            })
        })
    );
}
function _(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: r, deaf: o, serverDeaf: u } = e,
        c = (0, s.bWb)().enabled,
        d = [];
    if (n) {
        let e;
        if (c) {
            let n;
            (n = r ? s.v0G : i ? s.v0G : s.nRN),
                (e = (0, l.jsx)(n, {
                    className: a()(A.icon, t, { [A.iconServer]: r }),
                    color: 'currentColor'
                }));
        } else
            e = (0, l.jsx)(s.nRN, {
                size: 'md',
                color: 'currentColor',
                className: a()(A.icon, t, { [A.iconServer]: r }),
                colorClass: i ? A.strikethrough : void 0
            });
        d.push(
            (0, l.jsx)(
                s.DY3,
                {
                    text: i ? C.intl.string(C.t.Q8Uzoa) : r ? C.intl.string(C.t.uLddbW) : C.intl.string(C.t.tjtv3N),
                    className: A.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (u || o) {
        let e;
        if (c) {
            let n = u ? s.Vm4 : s.wE8;
            e = (0, l.jsx)(n, {
                className: a()(A.icon, t, { [A.iconServer]: u }),
                color: 'currentColor'
            });
        } else
            e = (0, l.jsx)(s.wE8, {
                size: 'md',
                color: 'currentColor',
                className: a()(A.icon, t, { [A.iconServer]: u })
            });
        d.push(
            (0, l.jsx)(
                s.DY3,
                {
                    className: A.iconSpacing,
                    text: u ? C.intl.string(C.t.btxSdH) : C.intl.string(C.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
}
