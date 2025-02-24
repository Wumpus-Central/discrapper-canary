n.d(t, {
    ZP: () => C,
    eJ: () => T,
    nm: () => A
}),
    n(653041),
    n(789020),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(434650),
    c = n(40851),
    u = n(657305),
    d = n(367907),
    f = n(682901),
    p = n(795318),
    m = n(194082),
    g = n(282256),
    y = n(925329),
    b = n(880395),
    h = n(592125),
    v = n(574254),
    O = n(374129),
    j = n(639351),
    S = n(630388),
    N = n(51144),
    P = n(981631),
    I = n(354459),
    x = n(927923),
    E = n(388032),
    w = n(79921);
function Z(e) {
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
let T = (e) => {
    let { children: t, collapsed: n = !1, className: l } = e;
    return (0, r.jsx)('div', {
        className: a()(l, w.list, n ? w.listCollapse : w.listDefault),
        role: 'group',
        children: t
    });
};
function A(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: s, deaf: c, serverDeaf: d, collapsed: f, video: p, isStreaming: g, disabled: y, isWatching: b, iconClassName: h, embeddedApplication: v, otherClientSessionType: N, voicePlatform: Z, application: T, guildId: A, channelId: C, user: k, disconnected: W } = e;
    if (f || y) return null;
    let R = [],
        M = (0, r.jsx)(_, {
            iconClassName: h,
            mute: n,
            localMute: l,
            serverMute: s,
            deaf: c,
            serverDeaf: d
        });
    p &&
        (i
            ? R.push(
                  (0, r.jsx)(
                      o.DY3,
                      {
                          className: w.iconSpacing,
                          text: E.NW.string(E.t['PXMZ//']),
                          children: (0, r.jsx)(o.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(w.icon, h),
                              colorClass: w.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : R.push(
                  (0, r.jsx)(
                      o.DY3,
                      {
                          className: w.iconSpacing,
                          text: E.NW.string(E.t.FlNoSU),
                          children: (0, r.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(w.icon, h)
                          })
                      },
                      'video'
                  )
              )),
        W &&
            R.push(
                (0, r.jsx)(
                    o.DY3,
                    {
                        className: w.iconSpacing,
                        text: E.NW.string(E.t.HFwRpq),
                        children: (0, r.jsx)(o.P4T, {
                            className: a()(w.icon, h),
                            color: o.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != v &&
            R.push(
                (0, r.jsx)(
                    o.DY3,
                    {
                        text: (0, u.Z)(v.name),
                        className: w.iconSpacing,
                        children: (0, r.jsx)(o.nG3, {
                            size: 'md',
                            color: 'currentColor',
                            className: a()(w.icon, h)
                        })
                    },
                    'activity'
                )
            ),
        N === x.YE.XBOX || Z === I.wR.XBOX
            ? R.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: a()(w.iconSpacing),
                          children: (0, r.jsx)(j.Z, { className: a()(w.icon, h) })
                      },
                      'xbox'
                  )
              )
            : (N === x.YE.PLAYSTATION || Z === I.wR.PLAYSTATION) &&
              R.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: a()(w.iconSpacing),
                          children: (0, r.jsx)(O.Z, { className: a()(w.icon, h) })
                      },
                      'playstation'
                  )
              ),
        b &&
            R.push(
                (0, r.jsx)(
                    o.DY3,
                    {
                        className: w.iconSpacing,
                        text: E.NW.string(E.t.JH1SJy),
                        children: (0, r.jsx)(o.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a()(w.icon, h)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            R.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: a()(w.iconSpacing, w.liveIconSpacing),
                        children: (0, r.jsx)(m.ZP, { size: m.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let L = null != T && !(0, S.yE)(T.flags, P.udG.EMBEDDED);
    return 0 !== R.length || null != M || L
        ? (0, r.jsxs)('div', {
              className: a()(w.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: w.iconGroup,
                      children: [M, R]
                  }),
                  L &&
                      (0, r.jsx)('div', {
                          className: w.iconGroup,
                          children: (0, r.jsx)(
                              D,
                              {
                                  application: T,
                                  iconClassName: h,
                                  guildId: A,
                                  channelId: C,
                                  userId: k.id
                              },
                              ''.concat(k.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let C = function (e) {
    var { avatarContainerClass: t = w.avatarContainer, userNameClassName: n = w.usernameFont, size: i = P.ipw.SMALL, selected: s = !1, disabled: u = !1, isOverlay: d = !1 } = e,
        m = (function (e, t) {
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
    let { onClick: y, onKeyDown: O, onDoubleClick: j, onContextMenu: S, onMouseEnter: x, onMouseLeave: T, onMouseDown: C, priority: D, speaking: _, collapsed: k, mute: W, serverMute: R, guildId: M, nick: L, isGuest: U, flipped: V, className: G, overlap: F, 'aria-label': B, tabIndex: Y, ringing: z, user: H, channelId: J } = m,
        X = (0, c.bp)(),
        K = null != J ? h.Z.getChannel(J) : null,
        { enabled: q } = (0, f.Z)({ location: 'VoiceUser' }),
        [Q, $] = l.useState(!1),
        [ee, et] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e === v.Z.isOpen() || (e = v.Z.isOpen()) || et(!1);
                };
            return v.Z.addChangeListener(t), () => v.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(o.P3F, {
            className: a()(G, {
                [w.voiceUser]: !0,
                [w.overlap]: F,
                [w.selected]: s,
                [w.clickable]: null != y,
                [w.userSmall]: i === P.ipw.SMALL,
                [w.userLarge]: i === P.ipw.LARGE,
                [w.disabled]: !s && u,
                [w.ringing]: z
            }),
            onClick: (e) => {
                null == y || y(e, H);
            },
            onDoubleClick: (e) => {
                null == j || j(e, H);
            },
            onContextMenu: (e) => {
                null == S || S(e, H);
            },
            onMouseEnter: (e) => {
                $(!0), null == x || x(e, H);
            },
            onMouseLeave: (e) => {
                $(!1), null == T || T(e, H);
            },
            onMouseDown: (e) => {
                null == C || C(e, H);
            },
            onKeyDown: O,
            'aria-label': B,
            tabIndex: Y,
            children: (0, r.jsxs)('div', {
                className: a()(w.content, { [w.flipped]: V }),
                children: [
                    D && !k
                        ? (0, r.jsx)(o.ua7, {
                              text: E.NW.string(E.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', Z({ className: a()(w.iconPriortySpeaker, { [w.iconPriortySpeakerSpeaking]: !W && !R && _ }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: a()(t, w.avatar, {
                            [w.avatarLarge]: i === P.ipw.LARGE,
                            [w.avatarSmall]: i === P.ipw.SMALL,
                            [w.avatarSpeaking]: _
                        }),
                        style: { backgroundImage: 'url('.concat(H.getAvatarURL(M, i === P.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let l = (0, r.jsxs)('div', {
                                className: a()(n, {
                                    [w.username]: !0,
                                    [w.usernameSpeaking]: !W && !R && _
                                }),
                                children: [
                                    null != L ? L : N.ZP.getName(H),
                                    U
                                        ? (0, r.jsxs)('span', {
                                              className: w.guestSuffix,
                                              children: ['\xA0', E.NW.string(E.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            i = {
                                primaryGuild: H.primaryGuild,
                                userId: H.id,
                                contextGuildId: M,
                                isOverlay: d,
                                disableTooltip: !0,
                                className: a()(w.clanTag, d && w.isOverlay),
                                profileViewedAnalytics: { source: d ? P.jXE.OVERLAY : P.Sbl.VOICE_PANEL }
                            };
                        return !k || d
                            ? (0, r.jsx)(
                                  g.Z,
                                  ((e = Z({}, i)),
                                  (t = t = { children: l }),
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
                    (0, r.jsx)(A, Z({ disabled: u }, m)),
                    q &&
                        ((Q || ee) && !k
                            ? (0, r.jsx)(o.DY3, {
                                  text: E.NW.string(E.t['+1H47u']),
                                  children: (0, r.jsx)(o.P3F, {
                                      className: a()(w.moreClickable, ee && w.moreActive),
                                      onClick: function (e) {
                                          null != M &&
                                              null != K &&
                                              (et(!0),
                                              (0, b.D)(e, H, K, { context: X }, (e, t) => {
                                                  (0, p.o)({
                                                      menuName: e,
                                                      menuItemProps: t,
                                                      entrypoint: I.A5.THREE_DOT,
                                                      location: 'VoiceUser',
                                                      targetUserId: H.id
                                                  });
                                              }));
                                      },
                                      children: (0, r.jsx)(o.xhG, {
                                          size: 'md',
                                          className: a()(w.icon)
                                      })
                                  })
                              })
                            : null)
                ]
            })
        })
    );
};
function D(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: c, userId: u } = e,
        [f, p] = l.useState(!1),
        m = (0, s.O)((e) => p(e));
    return (
        l.useEffect(() => {
            f &&
                d.ZP.trackWithMetadata(P.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, c, i, u, f]),
        (0, r.jsx)(o.DY3, {
            text: E.NW.formatToPlainString(E.t.Sq9xJy, { game: t.name }),
            'aria-label': E.NW.formatToPlainString(E.t.Sq9xJy, { game: t.name }),
            className: w.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(y.Z, {
                    className: a()(w.icon, n),
                    game: t,
                    size: y.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(P.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function _(e) {
    let { iconClassName: t, mute: n, localMute: l, serverMute: i, deaf: s, serverDeaf: c } = e,
        u = (0, o.bWb)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = i ? o.v0G : l ? o.v0G : o.nRN),
                (e = (0, r.jsx)(n, {
                    className: a()(w.icon, t, { [w.iconServer]: i }),
                    color: 'currentColor'
                }));
        } else
            e = (0, r.jsx)(o.nRN, {
                size: 'md',
                color: 'currentColor',
                className: a()(w.icon, t, { [w.iconServer]: i }),
                colorClass: l ? w.strikethrough : void 0
            });
        d.push(
            (0, r.jsx)(
                o.DY3,
                {
                    text: l ? E.NW.string(E.t.Q8Uzoa) : i ? E.NW.string(E.t.uLddbW) : E.NW.string(E.t.tjtv3N),
                    className: w.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || s) {
        let e;
        if (u) {
            let n = c ? o.Vm4 : o.wE8;
            e = (0, r.jsx)(n, {
                className: a()(w.icon, t, { [w.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, r.jsx)(o.wE8, {
                size: 'md',
                color: 'currentColor',
                className: a()(w.icon, t, { [w.iconServer]: c })
            });
        d.push(
            (0, r.jsx)(
                o.DY3,
                {
                    className: w.iconSpacing,
                    text: c ? E.NW.string(E.t.btxSdH) : E.NW.string(E.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, r.jsx)(r.Fragment, { children: d });
}
