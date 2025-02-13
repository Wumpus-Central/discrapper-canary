n.d(t, {
    ZP: () => b,
    eJ: () => P,
    nm: () => j
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
    f = n(194082),
    h = n(282256),
    g = n(925329),
    p = n(648384),
    v = n(592125),
    S = n(574254),
    I = n(374129),
    x = n(639351),
    E = n(630388),
    T = n(51144),
    Z = n(981631),
    y = n(354459),
    N = n(927923),
    A = n(388032),
    C = n(868396);
let P = (e) => {
    let { children: t, collapsed: n = !1, className: i } = e;
    return (0, l.jsx)('div', {
        className: a()(i, C.list, n ? C.listCollapse : C.listDefault),
        role: 'group',
        children: t
    });
};
function j(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: r, serverMute: o, deaf: u, serverDeaf: d, collapsed: m, video: h, isStreaming: g, disabled: p, isWatching: v, iconClassName: S, embeddedApplication: T, otherClientSessionType: P, voicePlatform: j, application: b, guildId: R, channelId: L, user: M, disconnected: O } = e;
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
    h &&
        (r
            ? U.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: C.iconSpacing,
                          text: A.intl.string(A.t['PXMZ//']),
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
            : U.push(
                  (0, l.jsx)(
                      s.DY3,
                      {
                          className: C.iconSpacing,
                          text: A.intl.string(A.t.FlNoSU),
                          children: (0, l.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(C.icon, S)
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
                        className: C.iconSpacing,
                        text: A.intl.string(A.t.HFwRpq),
                        children: (0, l.jsx)(s.P4T, {
                            className: a()(C.icon, S),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != T &&
            U.push(
                (0, l.jsx)(
                    s.DY3,
                    {
                        text: (0, c.Z)(T.name),
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
        P === N.YE.XBOX || j === y.wR.XBOX
            ? U.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(C.iconSpacing),
                          children: (0, l.jsx)(x.Z, { className: a()(C.icon, S) })
                      },
                      'xbox'
                  )
              )
            : (P === N.YE.PLAYSTATION || j === y.wR.PLAYSTATION) &&
              U.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: a()(C.iconSpacing),
                          children: (0, l.jsx)(I.Z, { className: a()(C.icon, S) })
                      },
                      'playstation'
                  )
              ),
        v &&
            U.push(
                (0, l.jsx)(
                    s.DY3,
                    {
                        className: C.iconSpacing,
                        text: A.intl.string(A.t.JH1SJy),
                        children: (0, l.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(C.icon, S)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            U.push(
                (0, l.jsx)(
                    'div',
                    {
                        className: a()(C.iconSpacing, C.liveIconSpacing),
                        children: (0, l.jsx)(f.ZP, { size: f.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let k = null != b && !(0, E.yE)(b.flags, Z.udG.EMBEDDED);
    return 0 !== U.length || null != D || k
        ? (0, l.jsxs)('div', {
              className: a()(C.icons, t),
              children: [
                  (0, l.jsxs)('div', {
                      className: C.iconGroup,
                      children: [D, U]
                  }),
                  k &&
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
    let { avatarContainerClass: t = C.avatarContainer, userNameClassName: n = C.usernameFont, size: r = Z.ipw.SMALL, selected: o = !1, disabled: c = !1, isOverlay: d = !1, ...f } = e,
        { onClick: g, onKeyDown: I, onDoubleClick: x, onContextMenu: E, onMouseEnter: y, onMouseLeave: N, onMouseDown: P, priority: b, speaking: w, collapsed: _, mute: R, serverMute: L, guildId: M, nick: O, isGuest: U, flipped: D, className: k, overlap: G, 'aria-label': Y, tabIndex: B, ringing: F, user: z, channelId: V } = f,
        W = (0, u.bp)(),
        H = null != V ? v.Z.getChannel(V) : null,
        { enabled: J } = (0, m.Z)({ location: 'VoiceUser' }),
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
                [C.voiceUser]: !0,
                [C.overlap]: G,
                [C.selected]: o,
                [C.clickable]: null != g,
                [C.userSmall]: r === Z.ipw.SMALL,
                [C.userLarge]: r === Z.ipw.LARGE,
                [C.disabled]: !o && c,
                [C.ringing]: F
            }),
            onClick: (e) => {
                null == g || g(e, z);
            },
            onDoubleClick: (e) => {
                null == x || x(e, z);
            },
            onContextMenu: (e) => {
                null == E || E(e, z);
            },
            onMouseEnter: (e) => {
                K(!0), null == y || y(e, z);
            },
            onMouseLeave: (e) => {
                K(!1), null == N || N(e, z);
            },
            onMouseDown: (e) => {
                null == P || P(e, z);
            },
            onKeyDown: I,
            'aria-label': Y,
            tabIndex: B,
            children: (0, l.jsxs)('div', {
                className: a()(C.content, { [C.flipped]: D }),
                children: [
                    b && !_
                        ? (0, l.jsx)(s.ua7, {
                              text: A.intl.string(A.t.BVK71t),
                              children: (e) =>
                                  (0, l.jsx)('div', {
                                      className: a()(C.iconPriortySpeaker, { [C.iconPriortySpeakerSpeaking]: !R && !L && w }),
                                      ...e
                                  })
                          })
                        : null,
                    (0, l.jsx)('div', {
                        className: a()(t, C.avatar, {
                            [C.avatarLarge]: r === Z.ipw.LARGE,
                            [C.avatarSmall]: r === Z.ipw.SMALL,
                            [C.avatarSpeaking]: w
                        }),
                        style: { backgroundImage: 'url('.concat(z.getAvatarURL(M, r === Z.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        let e = (0, l.jsxs)('div', {
                                className: a()(n, {
                                    [C.username]: !0,
                                    [C.usernameSpeaking]: !R && !L && w
                                }),
                                children: [
                                    null != O ? O : T.ZP.getName(z),
                                    U
                                        ? (0, l.jsxs)('span', {
                                              className: C.guestSuffix,
                                              children: ['\xA0', A.intl.string(A.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            t = {
                                primaryGuild: z.primaryGuild,
                                userId: z.id,
                                contextGuildId: M,
                                isOverlay: d,
                                disableTooltip: !0,
                                className: a()(C.clanTag, d && C.isOverlay),
                                profileViewedAnalytics: { source: d ? Z.jXE.OVERLAY : Z.Sbl.VOICE_PANEL }
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
                    (0, l.jsx)(j, {
                        disabled: c,
                        ...f
                    }),
                    J &&
                        (X || q
                            ? (0, l.jsx)(s.P3F, {
                                  className: a()(C.moreClickable, q && C.moreActive),
                                  onClick: function (e) {
                                      null != M && null != H && (Q(!0), (0, p.p)(e, z, H, M, { context: W }));
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
    let { application: t, iconClassName: n, guildId: r, channelId: u, userId: c } = e,
        [m, f] = i.useState(!1),
        h = (0, o.O)((e) => f(e));
    return (
        i.useEffect(() => {
            m &&
                d.ZP.trackWithMetadata(Z.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: u,
                    guild_id: r,
                    user_id: c
                });
        }, [t.id, u, r, c, m]),
        (0, l.jsx)(s.DY3, {
            text: A.intl.formatToPlainString(A.t.Sq9xJy, { game: t.name }),
            'aria-label': A.intl.formatToPlainString(A.t.Sq9xJy, { game: t.name }),
            className: C.iconSpacing,
            children: (0, l.jsx)('div', {
                ref: h,
                children: (0, l.jsx)(g.Z, {
                    className: a()(C.icon, n),
                    game: t,
                    size: g.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(Z.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
                    text: i ? A.intl.string(A.t.Q8Uzoa) : r ? A.intl.string(A.t.uLddbW) : A.intl.string(A.t.tjtv3N),
                    className: C.iconSpacing,
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
                className: a()(C.icon, t, { [C.iconServer]: u }),
                color: 'currentColor'
            });
        } else
            e = (0, l.jsx)(s.wE8, {
                size: 'md',
                color: 'currentColor',
                className: a()(C.icon, t, { [C.iconServer]: u })
            });
        d.push(
            (0, l.jsx)(
                s.DY3,
                {
                    className: C.iconSpacing,
                    text: u ? A.intl.string(A.t.btxSdH) : A.intl.string(A.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
}
