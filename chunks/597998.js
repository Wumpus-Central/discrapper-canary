n.d(t, {
    ZP: () => M,
    eJ: () => k,
    nm: () => W
}),
    n(539854),
    n(997841),
    n(388685);
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
    h = n(282256),
    y = n(925329),
    v = n(880395),
    S = n(221241),
    j = n(314897),
    N = n(592125),
    P = n(979651),
    E = n(574254),
    Z = n(374129),
    I = n(639351),
    x = n(630388),
    C = n(51144),
    T = n(981631),
    A = n(354459),
    w = n(927923),
    D = n(388032),
    _ = n(850999);
function L(e) {
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
let k = (e) => {
    let { children: t, collapsed: n = !1, className: l } = e;
    return (0, r.jsx)('div', {
        className: o()(l, _.list, n ? _.listCollapse : _.listDefault),
        role: 'group',
        children: t
    });
};
function W(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: a, deaf: c, serverDeaf: u, collapsed: f, video: m, isStreaming: g, disabled: b, isWatching: h, iconClassName: y, embeddedApplication: v, otherClientSessionType: S, voicePlatform: j, application: N, guildId: P, channelId: E, user: C, disconnected: L } = e,
        { enabled: k } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (f || b) return null;
    let W = [],
        M = (0, r.jsx)(R, {
            iconClassName: y,
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
                              className: o()(_.icon, y),
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
                              className: o()(_.icon, y)
                          })
                      },
                      'video'
                  )
              )),
        L &&
            W.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: D.NW.string(D.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: o()(_.icon, y),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            );
    let V = k ? s.iWm : s.nG3;
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
                        className: o()(_.icon, y)
                    })
                },
                'activity'
            )
        ),
        S === w.YE.XBOX || j === A.wR.XBOX
            ? W.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(I.Z, { className: o()(_.icon, y) })
                      },
                      'xbox'
                  )
              )
            : (S === w.YE.PLAYSTATION || j === A.wR.PLAYSTATION) &&
              W.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(Z.Z, { className: o()(_.icon, y) })
                      },
                      'playstation'
                  )
              ),
        h &&
            W.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: D.NW.string(D.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(_.icon, y)
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
    let F = null != N && !(0, x.yE)(N.flags, T.udG.EMBEDDED);
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
                                  application: N,
                                  iconClassName: y,
                                  guildId: P,
                                  channelId: E,
                                  userId: C.id
                              },
                              ''.concat(C.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let M = l.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: i = _.avatarContainer, userNameClassName: c = _.usernameFont, size: d = T.ipw.SMALL, selected: p = !1, disabled: f = !1, isOverlay: O = !1 } = e,
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
    let { onClick: Z, onKeyDown: I, onDoubleClick: x, onContextMenu: w, onMouseLeave: k, onMouseDown: M, priority: U, speaking: R, collapsed: V, mute: F, serverMute: Y, guildId: B, nick: G, isGuest: z, flipped: H, className: J, overlap: X, 'aria-label': K, ringing: q, user: Q, channelId: $ } = y,
        { parentAnalyticsLocation: ee } = (0, m.ZP)(),
        et = (0, u.bp)(),
        en = null != $ ? N.Z.getChannel($) : null,
        { simplifiedSettingsEnabled: er } = (0, S.Z)({ location: 'VoiceUser' }),
        el = (0, a.e7)([j.default, P.Z], () => P.Z.isInChannel($, j.default.getId())),
        [ei, eo] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== E.Z.isOpen() && ((e = E.Z.isOpen()) || eo(!1));
                };
            return E.Z.addChangeListener(t), () => E.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: o()(J, {
                [_.voiceUser]: !0,
                [_.overlap]: X,
                [_.selected]: p,
                [_.clickable]: null != Z,
                [_.userSmall]: d === T.ipw.SMALL,
                [_.userLarge]: d === T.ipw.LARGE,
                [_.disabled]: !p && f,
                [_.ringing]: q
            }),
            onClick: (e) => {
                null == Z || Z(e, Q);
            },
            onDoubleClick: (e) => {
                null == x || x(e, Q);
            },
            onContextMenu: (e) => {
                null == w || w(e, Q);
            },
            onMouseLeave: (e) => {
                null == k || k(e, Q);
            },
            onMouseDown: (e) => {
                null == M || M(e, Q);
            },
            onKeyDown: I,
            'aria-label': null != (n = null != K ? K : G) ? n : Q.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: o()(_.content, { [_.flipped]: H }),
                children: [
                    U && !V
                        ? (0, r.jsx)(s.ua7, {
                              text: D.NW.string(D.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', L({ className: o()(_.iconPriortySpeaker, { [_.iconPriortySpeakerSpeaking]: !F && !Y && R }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(i, _.avatar, {
                            [_.avatarLarge]: d === T.ipw.LARGE,
                            [_.avatarSmall]: d === T.ipw.SMALL,
                            [_.avatarSpeaking]: R
                        }),
                        style: { backgroundImage: 'url('.concat(Q.getAvatarURL(B, d === T.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: o()(c, {
                                    [_.username]: !0,
                                    [_.usernameSpeaking]: !F && !Y && R
                                }),
                                children: [
                                    null != G ? G : C.ZP.getName(Q),
                                    z
                                        ? (0, r.jsxs)('span', {
                                              className: _.guestSuffix,
                                              children: ['\xA0', D.NW.string(D.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            l = {
                                primaryGuild: Q.primaryGuild,
                                userId: Q.id,
                                contextGuildId: B,
                                isOverlay: O,
                                disableTooltip: !0,
                                className: o()(_.clanTag, O && _.isOverlay),
                                profileViewedAnalytics: { source: O ? T.jXE.OVERLAY : T.Sbl.VOICE_PANEL }
                            };
                        return !V || O
                            ? (0, r.jsx)(
                                  h.Z,
                                  ((e = L({}, l)),
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
                    (0, r.jsx)(W, L({ disabled: f }, y)),
                    er &&
                        (!V && el
                            ? (0, r.jsx)(s.DY3, {
                                  text: D.NW.string(D.t['+1H47u']),
                                  className: o()(_.optionsButtonContainer, { [_.optionsContainerActive]: ei }),
                                  children: (0, r.jsx)(s.P3F, {
                                      className: o()(_.optionsButton, { [_.optionsActive]: ei }),
                                      onClick: function (e) {
                                          null != B &&
                                              null != en &&
                                              ((0, g.v)(ee, g.d.MORE),
                                              eo(!0),
                                              (0, v.D)(e, Q, en, { context: et }, (e, t) => {
                                                  (0, b.o)({
                                                      menuName: e,
                                                      menuItemProps: t,
                                                      entrypoint: A.A5.THREE_DOT,
                                                      location: ee,
                                                      targetUserId: Q.id
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
                f.ZP.trackWithMetadata(T.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
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
                children: (0, r.jsx)(y.Z, {
                    className: o()(_.icon, n),
                    game: t,
                    size: y.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        f.ZP.trackWithMetadata(T.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
