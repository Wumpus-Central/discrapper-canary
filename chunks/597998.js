n.d(t, {
    ZP: () => L,
    eJ: () => _,
    nm: () => D
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
    u = n(456100),
    d = n(657305),
    f = n(367907),
    p = n(906732),
    m = n(522651),
    g = n(795318),
    y = n(194082),
    b = n(282256),
    O = n(925329),
    h = n(880395),
    v = n(221241),
    j = n(592125),
    S = n(574254),
    P = n(374129),
    N = n(639351),
    E = n(630388),
    I = n(51144),
    x = n(981631),
    A = n(354459),
    Z = n(927923),
    T = n(388032),
    w = n(277961);
function C(e) {
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
let _ = (e) => {
    let { children: t, collapsed: n = !1, className: l } = e;
    return (0, r.jsx)('div', {
        className: o()(l, w.list, n ? w.listCollapse : w.listDefault),
        role: 'group',
        children: t
    });
};
function D(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: s, deaf: c, serverDeaf: f, collapsed: p, video: m, isStreaming: g, disabled: b, isWatching: O, iconClassName: h, embeddedApplication: v, otherClientSessionType: j, voicePlatform: S, application: I, guildId: C, channelId: _, user: D, disconnected: L } = e,
        { enabled: M } = u.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (p || b) return null;
    let U = [],
        R = (0, r.jsx)(W, {
            iconClassName: h,
            mute: n,
            localMute: l,
            serverMute: s,
            deaf: c,
            serverDeaf: f
        });
    m &&
        (i
            ? U.push(
                  (0, r.jsx)(
                      a.DY3,
                      {
                          className: w.iconSpacing,
                          text: T.NW.string(T.t['PXMZ//']),
                          children: (0, r.jsx)(a.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(w.icon, h),
                              colorClass: w.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : U.push(
                  (0, r.jsx)(
                      a.DY3,
                      {
                          className: w.iconSpacing,
                          text: T.NW.string(T.t.FlNoSU),
                          children: (0, r.jsx)(a.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(w.icon, h)
                          })
                      },
                      'video'
                  )
              )),
        L &&
            U.push(
                (0, r.jsx)(
                    a.DY3,
                    {
                        className: w.iconSpacing,
                        text: T.NW.string(T.t.HFwRpq),
                        children: (0, r.jsx)(a.P4T, {
                            className: o()(w.icon, h),
                            color: a.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            );
    let F = M ? a.iWm : a.nG3;
    null != v &&
        U.push(
            (0, r.jsx)(
                a.DY3,
                {
                    text: (0, d.Z)(v.name),
                    className: w.iconSpacing,
                    children: (0, r.jsx)(F, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(w.icon, h)
                    })
                },
                'activity'
            )
        ),
        j === Z.YE.XBOX || S === A.wR.XBOX
            ? U.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: w.iconSpacing,
                          children: (0, r.jsx)(N.Z, { className: o()(w.icon, h) })
                      },
                      'xbox'
                  )
              )
            : (j === Z.YE.PLAYSTATION || S === A.wR.PLAYSTATION) &&
              U.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: w.iconSpacing,
                          children: (0, r.jsx)(P.Z, { className: o()(w.icon, h) })
                      },
                      'playstation'
                  )
              ),
        O &&
            U.push(
                (0, r.jsx)(
                    a.DY3,
                    {
                        className: w.iconSpacing,
                        text: T.NW.string(T.t.JH1SJy),
                        children: (0, r.jsx)(a.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(w.icon, h)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            U.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: o()(w.iconSpacing, w.liveIconSpacing),
                        children: (0, r.jsx)(y.ZP, { size: y.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let G = null != I && !(0, E.yE)(I.flags, x.udG.EMBEDDED);
    return 0 !== U.length || null != R || G
        ? (0, r.jsxs)('div', {
              className: o()(w.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: w.iconGroup,
                      children: [R, U]
                  }),
                  G &&
                      (0, r.jsx)('div', {
                          className: w.iconGroup,
                          children: (0, r.jsx)(
                              k,
                              {
                                  application: I,
                                  iconClassName: h,
                                  guildId: C,
                                  channelId: _,
                                  userId: D.id
                              },
                              ''.concat(D.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let L = function (e) {
    var t,
        { avatarContainerClass: n = w.avatarContainer, userNameClassName: i = w.usernameFont, size: s = x.ipw.SMALL, selected: u = !1, disabled: d = !1, isOverlay: f = !1 } = e,
        y = (function (e, t) {
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
    let { onClick: O, onKeyDown: P, onDoubleClick: N, onContextMenu: E, onMouseLeave: Z, onMouseDown: _, priority: L, speaking: k, collapsed: W, mute: M, serverMute: U, guildId: R, nick: F, isGuest: G, flipped: Y, className: V, overlap: B, 'aria-label': z, ringing: H, user: J, channelId: Q } = y,
        { parentAnalyticsLocation: X } = (0, p.ZP)(),
        K = (0, c.bp)(),
        q = null != Q ? j.Z.getChannel(Q) : null,
        { simplifiedSettingsEnabled: $ } = (0, v.Z)({ location: 'VoiceUser' }),
        [ee, et] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e === S.Z.isOpen() || (e = S.Z.isOpen()) || et(!1);
                };
            return S.Z.addChangeListener(t), () => S.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(a.kL8, {
            className: o()(V, {
                [w.voiceUser]: !0,
                [w.overlap]: B,
                [w.selected]: u,
                [w.clickable]: null != O,
                [w.userSmall]: s === x.ipw.SMALL,
                [w.userLarge]: s === x.ipw.LARGE,
                [w.disabled]: !u && d,
                [w.ringing]: H
            }),
            onClick: (e) => {
                null == O || O(e, J);
            },
            onDoubleClick: (e) => {
                null == N || N(e, J);
            },
            onContextMenu: (e) => {
                null == E || E(e, J);
            },
            onMouseLeave: (e) => {
                null == Z || Z(e, J);
            },
            onMouseDown: (e) => {
                null == _ || _(e, J);
            },
            onKeyDown: P,
            'aria-label': null !== (t = null != z ? z : F) && void 0 !== t ? t : J.username,
            children: (0, r.jsxs)('div', {
                className: o()(w.content, { [w.flipped]: Y }),
                children: [
                    L && !W
                        ? (0, r.jsx)(a.ua7, {
                              text: T.NW.string(T.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', C({ className: o()(w.iconPriortySpeaker, { [w.iconPriortySpeakerSpeaking]: !M && !U && k }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(n, w.avatar, {
                            [w.avatarLarge]: s === x.ipw.LARGE,
                            [w.avatarSmall]: s === x.ipw.SMALL,
                            [w.avatarSpeaking]: k
                        }),
                        style: { backgroundImage: 'url('.concat(J.getAvatarURL(R, s === x.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: o()(i, {
                                    [w.username]: !0,
                                    [w.usernameSpeaking]: !M && !U && k
                                }),
                                children: [
                                    null != F ? F : I.ZP.getName(J),
                                    G
                                        ? (0, r.jsxs)('span', {
                                              className: w.guestSuffix,
                                              children: ['\xA0', T.NW.string(T.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            l = {
                                primaryGuild: J.primaryGuild,
                                userId: J.id,
                                contextGuildId: R,
                                isOverlay: f,
                                disableTooltip: !0,
                                className: o()(w.clanTag, f && w.isOverlay),
                                profileViewedAnalytics: { source: f ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL }
                            };
                        return !W || f
                            ? (0, r.jsx)(
                                  b.Z,
                                  ((e = C({}, l)),
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
                    (0, r.jsx)(D, C({ disabled: d }, y)),
                    $ &&
                        (W
                            ? null
                            : (0, r.jsx)(a.DY3, {
                                  text: T.NW.string(T.t['+1H47u']),
                                  className: o()(w.optionsButtonContainer, { [w.optionsContainerActive]: ee }),
                                  children: (0, r.jsx)(a.P3F, {
                                      className: o()(w.optionsButton, { [w.optionsActive]: ee }),
                                      onClick: function (e) {
                                          null != R &&
                                              null != q &&
                                              ((0, m.v)(X, m.d.MORE),
                                              et(!0),
                                              (0, h.D)(e, J, q, { context: K }, (e, t) => {
                                                  (0, g.o)({
                                                      menuName: e,
                                                      menuItemProps: t,
                                                      entrypoint: A.A5.THREE_DOT,
                                                      location: X,
                                                      targetUserId: J.id
                                                  });
                                              }));
                                      },
                                      children: (0, r.jsx)(a.xhG, {
                                          size: 'md',
                                          className: w.icon
                                      })
                                  })
                              }))
                ]
            })
        })
    );
};
function k(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: c, userId: u } = e,
        [d, p] = l.useState(!1),
        m = (0, s.O)((e) => p(e));
    return (
        l.useEffect(() => {
            d &&
                f.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, c, i, u, d]),
        (0, r.jsx)(a.DY3, {
            text: T.NW.formatToPlainString(T.t.Sq9xJy, { game: t.name }),
            'aria-label': T.NW.formatToPlainString(T.t.Sq9xJy, { game: t.name }),
            className: w.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(O.Z, {
                    className: o()(w.icon, n),
                    game: t,
                    size: O.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        f.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function W(e) {
    let { iconClassName: t, mute: n, localMute: l, serverMute: i, deaf: s, serverDeaf: c } = e,
        u = (0, a.bWb)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = i ? a.v0G : l ? a.v0G : a.nRN),
                (e = (0, r.jsx)(n, {
                    className: o()(w.icon, t, { [w.iconServer]: i }),
                    color: 'currentColor'
                }));
        } else
            e = (0, r.jsx)(a.nRN, {
                size: 'md',
                color: 'currentColor',
                className: o()(w.icon, t, { [w.iconServer]: i }),
                colorClass: l ? w.strikethrough : void 0
            });
        d.push(
            (0, r.jsx)(
                a.DY3,
                {
                    text: l ? T.NW.string(T.t.Q8Uzoa) : i ? T.NW.string(T.t.uLddbW) : T.NW.string(T.t.tjtv3N),
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
            let n = c ? a.Vm4 : a.wE8;
            e = (0, r.jsx)(n, {
                className: o()(w.icon, t, { [w.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, r.jsx)(a.wE8, {
                size: 'md',
                color: 'currentColor',
                className: o()(w.icon, t, { [w.iconServer]: c })
            });
        d.push(
            (0, r.jsx)(
                a.DY3,
                {
                    className: w.iconSpacing,
                    text: c ? T.NW.string(T.t.btxSdH) : T.NW.string(T.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : d;
}
