n.d(t, {
    ZP: () => L,
    eJ: () => k,
    nm: () => M
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
    y = n(194082),
    O = n(282256),
    v = n(925329),
    h = n(880395),
    j = n(221241),
    S = n(314897),
    P = n(592125),
    N = n(979651),
    x = n(574254),
    I = n(374129),
    Z = n(639351),
    E = n(630388),
    w = n(51144),
    T = n(981631),
    C = n(354459),
    A = n(927923),
    D = n(388032),
    _ = n(277961);
function W(e) {
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
function M(e) {
    let { className: t, mute: n, localMute: l, localVideoDisabled: i, serverMute: a, deaf: c, serverDeaf: u, collapsed: f, video: m, isStreaming: g, disabled: b, isWatching: O, iconClassName: v, embeddedApplication: h, otherClientSessionType: j, voicePlatform: S, application: P, guildId: N, channelId: x, user: w, disconnected: W } = e,
        { enabled: k } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (f || b) return null;
    let M = [],
        L = (0, r.jsx)(R, {
            iconClassName: v,
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
                          className: _.iconSpacing,
                          text: D.NW.string(D.t['PXMZ//']),
                          children: (0, r.jsx)(s.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(_.icon, v),
                              colorClass: _.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : M.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: _.iconSpacing,
                          text: D.NW.string(D.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(_.icon, v)
                          })
                      },
                      'video'
                  )
              )),
        W &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: D.NW.string(D.t.HFwRpq),
                        children: (0, r.jsx)(s.P4T, {
                            className: o()(_.icon, v),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            );
    let V = k ? s.iWm : s.nG3;
    null != h &&
        M.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, p.Z)(h.name),
                    className: _.iconSpacing,
                    children: (0, r.jsx)(V, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(_.icon, v)
                    })
                },
                'activity'
            )
        ),
        j === A.YE.XBOX || S === C.wR.XBOX
            ? M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(Z.Z, { className: o()(_.icon, v) })
                      },
                      'xbox'
                  )
              )
            : (j === A.YE.PLAYSTATION || S === C.wR.PLAYSTATION) &&
              M.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: _.iconSpacing,
                          children: (0, r.jsx)(I.Z, { className: o()(_.icon, v) })
                      },
                      'playstation'
                  )
              ),
        O &&
            M.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: _.iconSpacing,
                        text: D.NW.string(D.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(_.icon, v)
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
                        className: o()(_.iconSpacing, _.liveIconSpacing),
                        children: (0, r.jsx)(y.ZP, { size: y.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            );
    let Y = null != P && !(0, E.yE)(P.flags, T.udG.EMBEDDED);
    return 0 !== M.length || null != L || Y
        ? (0, r.jsxs)('div', {
              className: o()(_.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: _.iconGroup,
                      children: [L, M]
                  }),
                  Y &&
                      (0, r.jsx)('div', {
                          className: _.iconGroup,
                          children: (0, r.jsx)(
                              U,
                              {
                                  application: P,
                                  iconClassName: v,
                                  guildId: N,
                                  channelId: x,
                                  userId: w.id
                              },
                              ''.concat(w.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
let L = l.forwardRef(function (e, t) {
    var n,
        { avatarContainerClass: i = _.avatarContainer, userNameClassName: c = _.usernameFont, size: d = T.ipw.SMALL, selected: p = !1, disabled: f = !1, isOverlay: y = !1 } = e,
        v = (function (e, t) {
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
    let { onClick: I, onKeyDown: Z, onDoubleClick: E, onContextMenu: A, onMouseLeave: k, onMouseDown: L, priority: U, speaking: R, collapsed: V, mute: Y, serverMute: G, guildId: B, nick: F, isGuest: z, flipped: J, className: H, overlap: X, 'aria-label': K, ringing: Q, user: q, channelId: $ } = v,
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
                    e === x.Z.isOpen() || (e = x.Z.isOpen()) || eo(!1);
                };
            return x.Z.addChangeListener(t), () => x.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: o()(H, {
                [_.voiceUser]: !0,
                [_.overlap]: X,
                [_.selected]: p,
                [_.clickable]: null != I,
                [_.userSmall]: d === T.ipw.SMALL,
                [_.userLarge]: d === T.ipw.LARGE,
                [_.disabled]: !p && f,
                [_.ringing]: Q
            }),
            onClick: (e) => {
                null == I || I(e, q);
            },
            onDoubleClick: (e) => {
                null == E || E(e, q);
            },
            onContextMenu: (e) => {
                null == A || A(e, q);
            },
            onMouseLeave: (e) => {
                null == k || k(e, q);
            },
            onMouseDown: (e) => {
                null == L || L(e, q);
            },
            onKeyDown: Z,
            'aria-label': null !== (n = null != K ? K : F) && void 0 !== n ? n : q.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)('div', {
                className: o()(_.content, { [_.flipped]: J }),
                children: [
                    U && !V
                        ? (0, r.jsx)(s.ua7, {
                              text: D.NW.string(D.t.BVK71t),
                              children: (e) => (0, r.jsx)('div', W({ className: o()(_.iconPriortySpeaker, { [_.iconPriortySpeakerSpeaking]: !Y && !G && R }) }, e))
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(i, _.avatar, {
                            [_.avatarLarge]: d === T.ipw.LARGE,
                            [_.avatarSmall]: d === T.ipw.SMALL,
                            [_.avatarSpeaking]: R
                        }),
                        style: { backgroundImage: 'url('.concat(q.getAvatarURL(B, d === T.ipw.LARGE ? 38 : 24), ')') }
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)('div', {
                                className: o()(c, {
                                    [_.username]: !0,
                                    [_.usernameSpeaking]: !Y && !G && R
                                }),
                                children: [
                                    null != F ? F : w.ZP.getName(q),
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
                                contextGuildId: B,
                                isOverlay: y,
                                disableTooltip: !0,
                                className: o()(_.clanTag, y && _.isOverlay),
                                profileViewedAnalytics: { source: y ? T.jXE.OVERLAY : T.Sbl.VOICE_PANEL }
                            };
                        return !V || y
                            ? (0, r.jsx)(
                                  O.Z,
                                  ((e = W({}, l)),
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
                    (0, r.jsx)(M, W({ disabled: f }, v)),
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
                                              (0, h.D)(e, q, en, { context: et }, (e, t) => {
                                                  (0, b.o)({
                                                      menuName: e,
                                                      menuItemProps: t,
                                                      entrypoint: C.A5.THREE_DOT,
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
                children: (0, r.jsx)(v.Z, {
                    className: o()(_.icon, n),
                    game: t,
                    size: v.Z.Sizes.XSMALL,
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
        e = i ? s.v0G : l ? s.v0G : s.nRN;
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
