n.d(t, {
    ZP: () => U,
    eJ: () => k,
    nm: () => M
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(255367),
    l = n(73800),
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
    h = n(925329),
    y = n(340044),
    v = n(880395),
    S = n(221241),
    j = n(314897),
    P = n(592125),
    I = n(979651),
    E = n(574254),
    Z = n(374129),
    x = n(639351),
    C = n(630388),
    T = n(51144),
    A = n(981631),
    N = n(354459),
    w = n(927923),
    _ = n(388032),
    D = n(850999);
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
        className: o()(l, D.list, n ? D.listCollapse : D.listDefault),
        role: 'group',
        children: t
    });
};
function M(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: a, deaf: c, serverDeaf: u, collapsed: f, video: m, isStreaming: g, disabled: b, isWatching: h, iconClassName: y, embeddedApplication: v, otherClientSessionType: S, voicePlatform: j, application: P, guildId: I, channelId: E, user: T, disconnected: L } = e,
        { enabled: k } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (f || b) return null;
    let M = [],
        U = (0, r.jsx)(V, {
            iconClassName: y,
            mute: n,
            localMute: l,
            serverMute: a,
            deaf: c,
            serverDeaf: u
        });
    m &&
        (i
            ? M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: D.iconSpacing,
                          text: _.intl.string(_.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(D.icon, y),
                              colorClass: D.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: D.iconSpacing,
                          text: _.intl.string(_.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(D.icon, y)
                          })
                      },
                      'video'
                  )
              )),
        L &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: D.iconSpacing,
                        text: _.intl.string(_.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: o()(D.icon, y),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            );
    let F = k ? s.iWm : s.nG3;
    null != v &&
        M.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, p.Z)(v.name),
                    className: D.iconSpacing,
                    children: (0, r.jsx)(F, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(D.icon, y)
                    })
                },
                'activity'
            )
        ),
        S === w.YE.XBOX || j === N.wR.XBOX
            ? M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: D.iconSpacing,
                          children: (0, r.jsx)(x.Z, { className: o()(D.icon, y) })
                      },
                      'xbox'
                  )
              )
            : (S === w.YE.PLAYSTATION || j === N.wR.PLAYSTATION) &&
              M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: D.iconSpacing,
                          children: (0, r.jsx)(Z.Z, { className: o()(D.icon, y) })
                      },
                      'playstation'
                  )
              ),
        h &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: D.iconSpacing,
                        text: _.intl.string(_.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(D.icon, y)
                        })
                    },
                    'watch'
                )
            ),
        g &&
            M.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: o()(D.iconSpacing, D.liveIconSpacing),
                        children: (0, r.jsx)(O.ZP, { size: O.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let Y = null != P && !(0, C.yE)(P.flags, A.udG.EMBEDDED);
    return 0 !== M.length || null != U || Y
        ? (0, r.jsxs)('div', {
              className: o()(D.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: D.iconGroup,
                      children: [U, M]
                  }),
                  Y &&
                      (0, r.jsx)('div', {
                          className: D.iconGroup,
                          children: (0, r.jsx)(
                              R,
                              {
                                  application: P,
                                  iconClassName: y,
                                  guildId: I,
                                  channelId: E,
                                  userId: T.id
                              },
                              ''.concat(T.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let U = l.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: i = D.avatarContainer, userNameClassName: c = D.usernameFont, size: d = A.ipw.SMALL, selected: p = !1, disabled: f = !1, isOverlay: O = !1 } = e,
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
    let { onClick: Z, onKeyDown: x, onDoubleClick: C, onContextMenu: w, onMouseLeave: k, onMouseDown: U, priority: R, speaking: V, collapsed: F, mute: Y, serverMute: B, guildId: G, nick: z, isGuest: W, flipped: H, className: J, overlap: X, 'aria-label': K, ringing: Q, user: q, channelId: $ } = h,
        { parentAnalyticsLocation: ee } = (0, m.ZP)(),
        et = (0, u.bp)(),
        en = null != $ ? P.Z.getChannel($) : null,
        { simplifiedSettingsEnabled: er } = (0, S.Z)({ location: 'VoiceUser' }),
        el = (0, a.e7)([j.default, I.Z], () => I.Z.isInChannel($, j.default.getId())),
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
                [D.voiceUser]: !0,
                [D.overlap]: X,
                [D.selected]: p,
                [D.clickable]: null != Z,
                [D.userSmall]: d === A.ipw.SMALL,
                [D.userLarge]: d === A.ipw.LARGE,
                [D.disabled]: !p && f,
                [D.ringing]: Q
            }),
            onClick: (e) => {
                null == Z || Z(e, q);
            },
            onDoubleClick: (e) => {
                null == C || C(e, q);
            },
            onContextMenu: (e) => {
                null == w || w(e, q);
            },
            onMouseLeave: (e) => {
                null == k || k(e, q);
            },
            onMouseDown: (e) => {
                null == U || U(e, q);
            },
            onKeyDown: x,
            'aria-label': null != (n = null != K ? K : z) ? n : q.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: o()(D.content, { [D.flipped]: H }),
                children: [
                    R && !F
                        ? (0, r.jsx)(s.ua7, {
                              text: _.intl.string(_.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', L({ className: o()(D.iconPriortySpeaker, { [D.iconPriortySpeakerSpeaking]: !Y && !B && V }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(i, D.avatar, {
                            [D.avatarLarge]: d === A.ipw.LARGE,
                            [D.avatarSmall]: d === A.ipw.SMALL,
                            [D.avatarSpeaking]: V
                        }),
                        style: { backgroundImage: 'url('.concat(q.getAvatarURL(G, d === A.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: o()(c, {
                                    [D.username]: !0,
                                    [D.usernameSpeaking]: !Y && !B && V
                                }),
                                children: [
                                    null != z ? z : T.ZP.getName(q),
                                    W
                                        ? (0, r.jsxs)('span', {
                                              className: D.guestSuffix,
                                              children: ['\xA0', _.intl.string(_.t['pFO/Pj'])]
                                          })
                                        : ''
                                ]
                            }),
                            l = {
                                primaryGuild: q.primaryGuild,
                                userId: q.id,
                                contextGuildId: G,
                                isOverlay: O,
                                disableTooltip: !0,
                                className: o()(D.clanTag, O && D.isOverlay),
                                profileViewedAnalytics: { source: O ? A.jXE.OVERLAY : A.Sbl.VOICE_PANEL }
                            };
                        return !F || O
                            ? (0, r.jsx)(
                                  y.Z,
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
                    (0, r.jsx)(M, L({ disabled: f }, h)),
                    er &&
                        (!F && el
                            ? (0, r.jsx)(s.DY3, {
                                  text: _.intl.string(_.t['+1H47u']),
                                  className: o()(D.optionsButtonContainer, { [D.optionsContainerActive]: ei }),
                                  children: (0, r.jsx)(s.P3F, {
                                      className: o()(D.optionsButton, { [D.optionsActive]: ei }),
                                      onClick: function (e) {
                                          null != G &&
                                              null != en &&
                                              ((0, g.v)(ee, g.d.MORE),
                                              eo(!0),
                                              (0, v.D)(e, q, en, { context: et }, (e, t) => {
                                                  (0, b.o)({
                                                      menuName: e,
                                                      menuItemProps: t,
                                                      entrypoint: N.A5.THREE_DOT,
                                                      location: ee,
                                                      targetUserId: q.id
                                                  });
                                              }));
                                      },
                                      children: (0, r.jsx)(s.xhG, {
                                          size: 'md',
                                          className: D.icon
                                      })
                                  })
                              })
                            : null)
                ]
            })
        })
    );
});
function R(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: a, userId: u } = e,
        [d, p] = l.useState(!1),
        m = (0, c.O)((e) => p(e));
    return (
        l.useEffect(() => {
            d &&
                f.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: a,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, a, i, u, d]),
        (0, r.jsx)(s.DY3, {
            text: _.intl.formatToPlainString(_.t.Sq9xJy, { game: t.name }),
            'aria-label': _.intl.formatToPlainString(_.t.Sq9xJy, { game: t.name }),
            className: D.iconSpacing,
            children: (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(h.Z, {
                    className: o()(D.icon, n),
                    game: t,
                    size: h.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        f.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function V(e) {
    let { iconClassName: t, mute: n, localMute: l, serverMute: i, deaf: a, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e;
        e = i || l ? s.v0G : s.nRN;
        let n = (0, r.jsx)(e, {
            className: o()(D.icon, t, { [D.iconServer]: i }),
            color: 'currentColor'
        });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: l ? _.intl.string(_.t.Q8Uzoa) : i ? _.intl.string(_.t.uLddbW) : _.intl.string(_.t.tjtv3N),
                    className: D.iconSpacing,
                    children: n
                },
                'mute'
            )
        );
    }
    if (c || a) {
        let e = c ? s.Vm4 : s.wE8,
            n = (0, r.jsx)(e, {
                className: o()(D.icon, t, { [D.iconServer]: c }),
                color: 'currentColor'
            });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    className: D.iconSpacing,
                    text: c ? _.intl.string(_.t.btxSdH) : _.intl.string(_.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
