n.d(t, {
    ZP: () => M,
    eJ: () => L,
    nm: () => W
}),
    n(653041),
    n(789020),
    n(47120);
var r = n(200651),
    l = n(192379),
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
    y = n(282256),
    h = n(925329),
    v = n(880395),
    j = n(221241),
    S = n(314897),
    P = n(592125),
    N = n(979651),
    I = n(574254),
    E = n(374129),
    Z = n(639351),
    x = n(630388),
    w = n(51144),
    C = n(981631),
    T = n(354459),
    A = n(927923),
    D = n(388032),
    _ = n(850999);
function k(e) {
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
function W(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: a, deaf: c, serverDeaf: u, collapsed: f, video: m, isStreaming: g, disabled: b, isWatching: y, iconClassName: h, embeddedApplication: v, otherClientSessionType: j, voicePlatform: S, application: P, guildId: N, channelId: I, user: w, disconnected: k } = e,
        { enabled: L } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (f || b) return null;
    let W = [],
        M = (0, r.jsx)(R, {
            iconClassName: h,
            mute: n,
            localMute: l,
            serverMute: a,
            deaf: c,
            serverDeaf: u
        });
    m &&
        (i
            ? W.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: _.iconSpacing,
                          text: D.NW.string(D.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(_.icon, h),
                              colorClass: _.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : W.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: _.iconSpacing,
                          text: D.NW.string(D.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(_.icon, h)
                          })
                      },
                      'video'
                  )
              )),
        k &&
            W.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: D.NW.string(D.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: o()(_.icon, h),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            );
    let V = L ? s.iWm : s.nG3;
    null != v &&
        W.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, p.Z)(v.name),
                    className: _.iconSpacing,
                    children: (0, r.jsx)(V, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(_.icon, h)
                    })
                },
                'activity'
            )
        ),
        j === A.YE.XBOX || S === T.wR.XBOX
            ? W.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(Z.Z, { className: o()(_.icon, h) })
                      },
                      'xbox'
                  )
              )
            : (j === A.YE.PLAYSTATION || S === T.wR.PLAYSTATION) &&
              W.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(E.Z, { className: o()(_.icon, h) })
                      },
                      'playstation'
                  )
              ),
        y &&
            W.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: D.NW.string(D.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(_.icon, h)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            W.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: o()(_.iconSpacing, _.liveIconSpacing),
                        children: (0, r.jsx)(O.ZP, { size: O.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let F = null != P && !(0, x.yE)(P.flags, C.udG.EMBEDDED);
    return 0 !== W.length || null != M || F
        ? (0, r.jsxs)('div', {
              className: o()(_.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: _.iconGroup,
                      children: [M, W]
                  }),
                  F &&
                      (0, r.jsx)('div', {
                          className: _.iconGroup,
                          children: (0, r.jsx)(
                              U,
                              {
                                  application: P,
                                  iconClassName: h,
                                  guildId: N,
                                  channelId: I,
                                  userId: w.id
                              },
                              ''.concat(w.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let M = l.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: i = _.avatarContainer, userNameClassName: c = _.usernameFont, size: d = C.ipw.SMALL, selected: p = !1, disabled: f = !1, isOverlay: O = !1 } = e,
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
    let { onClick: E, onKeyDown: Z, onDoubleClick: x, onContextMenu: A, onMouseLeave: L, onMouseDown: M, priority: U, speaking: R, collapsed: V, mute: F, serverMute: B, guildId: Y, nick: G, isGuest: z, flipped: H, className: J, overlap: K, 'aria-label': X, ringing: Q, user: q, channelId: $ } = h,
        { parentAnalyticsLocation: ee } = (0, m.ZP)(),
        et = (0, u.bp)(),
        en = null != $ ? P.Z.getChannel($) : null,
        { simplifiedSettingsEnabled: er } = (0, j.Z)({ location: 'VoiceUser' }),
        el = (0, a.e7)([S.default, N.Z], () => N.Z.isInChannel($, S.default.getId())),
        [ei, eo] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== I.Z.isOpen() && ((e = I.Z.isOpen()) || eo(!1));
                };
            return I.Z.addChangeListener(t), () => I.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: o()(J, {
                [_.voiceUser]: !0,
                [_.overlap]: K,
                [_.selected]: p,
                [_.clickable]: null != E,
                [_.userSmall]: d === C.ipw.SMALL,
                [_.userLarge]: d === C.ipw.LARGE,
                [_.disabled]: !p && f,
                [_.ringing]: Q
            }),
            onClick: (e) => {
                null == E || E(e, q);
            },
            onDoubleClick: (e) => {
                null == x || x(e, q);
            },
            onContextMenu: (e) => {
                null == A || A(e, q);
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
                className: o()(_.content, { [_.flipped]: H }),
                children: [
                    U && !V
                        ? (0, r.jsx)(s.ua7, {
                              text: D.NW.string(D.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', k({ className: o()(_.iconPriortySpeaker, { [_.iconPriortySpeakerSpeaking]: !F && !B && R }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(i, _.avatar, {
                            [_.avatarLarge]: d === C.ipw.LARGE,
                            [_.avatarSmall]: d === C.ipw.SMALL,
                            [_.avatarSpeaking]: R
                        }),
                        style: { backgroundImage: 'url('.concat(q.getAvatarURL(Y, d === C.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: o()(c, {
                                    [_.username]: !0,
                                    [_.usernameSpeaking]: !F && !B && R
                                }),
                                children: [
                                    null != G ? G : w.ZP.getName(q),
                                    z
                                        ? (0, r.jsxs)('span', {
                                              className: _.guestSuffix,
                                              children: ['\xA0', D.NW.string(D.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            l = {
                                primaryGuild: q.primaryGuild,
                                userId: q.id,
                                contextGuildId: Y,
                                isOverlay: O,
                                disableTooltip: !0,
                                className: o()(_.clanTag, O && _.isOverlay),
                                profileViewedAnalytics: { source: O ? C.jXE.OVERLAY : C.Sbl.VOICE_PANEL }
                            };
                        return !V || O
                            ? (0, r.jsx)(
                                  y.Z,
                                  ((e = k({}, l)),
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
                    (0, r.jsx)(W, k({ disabled: f }, h)),
                    er &&
                        (!V && el
                            ? (0, r.jsx)(s.DY3, {
                                  text: D.NW.string(D.t['+1H47u']),
                                  className: o()(_.optionsButtonContainer, { [_.optionsContainerActive]: ei }),
                                  children: (0, r.jsx)(s.P3F, {
                                      className: o()(_.optionsButton, { [_.optionsActive]: ei }),
                                      onClick: function (e) {
                                          null != Y &&
                                              null != en &&
                                              ((0, g.v)(ee, g.d.MORE),
                                              eo(!0),
                                              (0, v.D)(e, q, en, { context: et }, (e, t) => {
                                                  (0, b.o)({
                                                      menuName: e,
                                                      menuItemProps: t,
                                                      entrypoint: T.A5.THREE_DOT,
                                                      location: ee,
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
                            : null)
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
                f.ZP.trackWithMetadata(C.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: a,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, a, i, u, d]),
        (0, r.jsx)(s.DY3, {
            text: D.NW.formatToPlainString(D.t.Sq9xJy, { game: t.name }),
            'aria-label': D.NW.formatToPlainString(D.t.Sq9xJy, { game: t.name }),
            className: _.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(h.Z, {
                    className: o()(_.icon, n),
                    game: t,
                    size: h.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        f.ZP.trackWithMetadata(C.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
                    text: l ? D.NW.string(D.t.Q8Uzoa) : i ? D.NW.string(D.t.uLddbW) : D.NW.string(D.t.tjtv3N),
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
                    text: c ? D.NW.string(D.t.btxSdH) : D.NW.string(D.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
