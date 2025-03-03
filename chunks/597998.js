n.d(t, {
    ZP: () => D,
    eJ: () => C,
    nm: () => _
}),
    n(653041),
    n(789020),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(434650),
    c = n(40851),
    u = n(657305),
    d = n(367907),
    f = n(906732),
    p = n(522651),
    m = n(795318),
    g = n(194082),
    y = n(282256),
    b = n(925329),
    O = n(880395),
    h = n(221241),
    v = n(592125),
    j = n(574254),
    S = n(374129),
    P = n(639351),
    N = n(630388),
    I = n(51144),
    E = n(981631),
    x = n(354459),
    A = n(927923),
    Z = n(388032),
    T = n(277961);
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
let C = (e) => {
    let { children: t, collapsed: n = !1, className: l } = e;
    return (0, r.jsx)('div', {
        className: o()(l, T.list, n ? T.listCollapse : T.listDefault),
        role: 'group',
        children: t
    });
};
function _(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: s, deaf: c, serverDeaf: d, collapsed: f, video: p, isStreaming: m, disabled: y, isWatching: b, iconClassName: O, embeddedApplication: h, otherClientSessionType: v, voicePlatform: j, application: I, guildId: w, channelId: C, user: _, disconnected: D } = e;
    if (f || y) return null;
    let W = [],
        M = (0, r.jsx)(k, {
            iconClassName: O,
            mute: n,
            localMute: l,
            serverMute: s,
            deaf: c,
            serverDeaf: d
        });
    p &&
        (i
            ? W.push(
                  (0, r.jsx)(
                      a.DY3,
                      {
                          className: T.iconSpacing,
                          text: Z.NW.string(Z.t['PXMZ//']),
                          children: (0, r.jsx)(a.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(T.icon, O),
                              colorClass: T.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : W.push(
                  (0, r.jsx)(
                      a.DY3,
                      {
                          className: T.iconSpacing,
                          text: Z.NW.string(Z.t.FlNoSU),
                          children: (0, r.jsx)(a.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(T.icon, O)
                          })
                      },
                      'video'
                  )
              )),
        D &&
            W.push(
                (0, r.jsx)(
                    a.DY3,
                    {
                        className: T.iconSpacing,
                        text: Z.NW.string(Z.t.HFwRpq),
                        children: (0, r.jsx)(a.P4T, {
                            className: o()(T.icon, O),
                            color: a.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != h &&
            W.push(
                (0, r.jsx)(
                    a.DY3,
                    {
                        text: (0, u.Z)(h.name),
                        className: T.iconSpacing,
                        children: (0, r.jsx)(a.nG3, {
                            size: 'md',
                            color: 'currentColor',
                            className: o()(T.icon, O)
                        })
                    },
                    'activity'
                )
            ),
        v === A.YE.XBOX || j === x.wR.XBOX
            ? W.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: o()(T.iconSpacing),
                          children: (0, r.jsx)(P.Z, { className: o()(T.icon, O) })
                      },
                      'xbox'
                  )
              )
            : (v === A.YE.PLAYSTATION || j === x.wR.PLAYSTATION) &&
              W.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: o()(T.iconSpacing),
                          children: (0, r.jsx)(S.Z, { className: o()(T.icon, O) })
                      },
                      'playstation'
                  )
              ),
        b &&
            W.push(
                (0, r.jsx)(
                    a.DY3,
                    {
                        className: T.iconSpacing,
                        text: Z.NW.string(Z.t.JH1SJy),
                        children: (0, r.jsx)(a.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(T.icon, O)
                        })
                    },
                    'watch'
                )
            ),
        m &&
            W.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: o()(T.iconSpacing, T.liveIconSpacing),
                        children: (0, r.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let U = null != I && !(0, N.yE)(I.flags, E.udG.EMBEDDED);
    return 0 !== W.length || null != M || U
        ? (0, r.jsxs)('div', {
              className: o()(T.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: T.iconGroup,
                      children: [M, W]
                  }),
                  U &&
                      (0, r.jsx)('div', {
                          className: T.iconGroup,
                          children: (0, r.jsx)(
                              L,
                              {
                                  application: I,
                                  iconClassName: O,
                                  guildId: w,
                                  channelId: C,
                                  userId: _.id
                              },
                              ''.concat(_.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let D = function (e) {
    var t,
        { avatarContainerClass: n = T.avatarContainer, userNameClassName: i = T.usernameFont, size: s = E.ipw.SMALL, selected: u = !1, disabled: d = !1, isOverlay: g = !1 } = e,
        b = (function (e, t) {
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
    let { onClick: S, onKeyDown: P, onDoubleClick: N, onContextMenu: A, onMouseLeave: C, onMouseDown: D, priority: L, speaking: k, collapsed: W, mute: M, serverMute: U, guildId: R, nick: G, isGuest: F, flipped: V, className: Y, overlap: B, 'aria-label': z, ringing: H, user: J, channelId: Q } = b,
        { parentAnalyticsLocation: X } = (0, f.ZP)(),
        K = (0, c.bp)(),
        q = null != Q ? v.Z.getChannel(Q) : null,
        { simplifiedSettingsEnabled: $ } = (0, h.Z)({ location: 'VoiceUser' }),
        [ee, et] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e === j.Z.isOpen() || (e = j.Z.isOpen()) || et(!1);
                };
            return j.Z.addChangeListener(t), () => j.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(a.kL8, {
            className: o()(Y, {
                [T.voiceUser]: !0,
                [T.overlap]: B,
                [T.selected]: u,
                [T.clickable]: null != S,
                [T.userSmall]: s === E.ipw.SMALL,
                [T.userLarge]: s === E.ipw.LARGE,
                [T.disabled]: !u && d,
                [T.ringing]: H
            }),
            onClick: (e) => {
                null == S || S(e, J);
            },
            onDoubleClick: (e) => {
                null == N || N(e, J);
            },
            onContextMenu: (e) => {
                null == A || A(e, J);
            },
            onMouseLeave: (e) => {
                null == C || C(e, J);
            },
            onMouseDown: (e) => {
                null == D || D(e, J);
            },
            onKeyDown: P,
            'aria-label': null !== (t = null != z ? z : G) && void 0 !== t ? t : J.username,
            children: (0, r.jsxs)('div', {
                className: o()(T.content, { [T.flipped]: V }),
                children: [
                    L && !W
                        ? (0, r.jsx)(a.ua7, {
                              text: Z.NW.string(Z.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', w({ className: o()(T.iconPriortySpeaker, { [T.iconPriortySpeakerSpeaking]: !M && !U && k }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(n, T.avatar, {
                            [T.avatarLarge]: s === E.ipw.LARGE,
                            [T.avatarSmall]: s === E.ipw.SMALL,
                            [T.avatarSpeaking]: k
                        }),
                        style: { backgroundImage: 'url('.concat(J.getAvatarURL(R, s === E.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: o()(i, {
                                    [T.username]: !0,
                                    [T.usernameSpeaking]: !M && !U && k
                                }),
                                children: [
                                    null != G ? G : I.ZP.getName(J),
                                    F
                                        ? (0, r.jsxs)('span', {
                                              className: T.guestSuffix,
                                              children: ['\xA0', Z.NW.string(Z.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            l = {
                                primaryGuild: J.primaryGuild,
                                userId: J.id,
                                contextGuildId: R,
                                isOverlay: g,
                                disableTooltip: !0,
                                className: o()(T.clanTag, g && T.isOverlay),
                                profileViewedAnalytics: { source: g ? E.jXE.OVERLAY : E.Sbl.VOICE_PANEL }
                            };
                        return !W || g
                            ? (0, r.jsx)(
                                  y.Z,
                                  ((e = w({}, l)),
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
                    (0, r.jsx)(_, w({ disabled: d }, b)),
                    $ &&
                        (W
                            ? null
                            : (0, r.jsx)(a.DY3, {
                                  text: Z.NW.string(Z.t['+1H47u']),
                                  children: (0, r.jsx)(a.P3F, {
                                      className: o()(T.optionsButton, { [T.optionsActive]: ee }),
                                      onClick: function (e) {
                                          null != R &&
                                              null != q &&
                                              ((0, p.v)(X, p.d.MORE),
                                              et(!0),
                                              (0, O.D)(e, J, q, { context: K }, (e, t) => {
                                                  (0, m.o)({
                                                      menuName: e,
                                                      menuItemProps: t,
                                                      entrypoint: x.A5.THREE_DOT,
                                                      location: X,
                                                      targetUserId: J.id
                                                  });
                                              }));
                                      },
                                      children: (0, r.jsx)(a.xhG, {
                                          size: 'md',
                                          className: o()(T.icon)
                                      })
                                  })
                              }))
                ]
            })
        })
    );
};
function L(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: c, userId: u } = e,
        [f, p] = l.useState(!1),
        m = (0, s.O)((e) => p(e));
    return (
        l.useEffect(() => {
            f &&
                d.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, c, i, u, f]),
        (0, r.jsx)(a.DY3, {
            text: Z.NW.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            'aria-label': Z.NW.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            className: T.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(b.Z, {
                    className: o()(T.icon, n),
                    game: t,
                    size: b.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function k(e) {
    let { iconClassName: t, mute: n, localMute: l, serverMute: i, deaf: s, serverDeaf: c } = e,
        u = (0, a.bWb)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = i ? a.v0G : l ? a.v0G : a.nRN),
                (e = (0, r.jsx)(n, {
                    className: o()(T.icon, t, { [T.iconServer]: i }),
                    color: 'currentColor'
                }));
        } else
            e = (0, r.jsx)(a.nRN, {
                size: 'md',
                color: 'currentColor',
                className: o()(T.icon, t, { [T.iconServer]: i }),
                colorClass: l ? T.strikethrough : void 0
            });
        d.push(
            (0, r.jsx)(
                a.DY3,
                {
                    text: l ? Z.NW.string(Z.t.Q8Uzoa) : i ? Z.NW.string(Z.t.uLddbW) : Z.NW.string(Z.t.tjtv3N),
                    className: T.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || s) {
        let e;
        if (u) {
            let n = c ? a.Vm4 : a.wE8;
            e = (0, r.jsx)(n, {
                className: o()(T.icon, t, { [T.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, r.jsx)(a.wE8, {
                size: 'md',
                color: 'currentColor',
                className: o()(T.icon, t, { [T.iconServer]: c })
            });
        d.push(
            (0, r.jsx)(
                a.DY3,
                {
                    className: T.iconSpacing,
                    text: c ? Z.NW.string(Z.t.btxSdH) : Z.NW.string(Z.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : d;
}
