(n.d(t, {
    ZP: () => K,
    eJ: () => H,
    nm: () => Y
}),
    n(539854),
    n(997841),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(434650),
    u = n(40851),
    d = n(456100),
    f = n(657305),
    _ = n(367907),
    p = n(906732),
    h = n(522651),
    m = n(795318),
    g = n(194082),
    E = n(925329),
    b = n(340044),
    y = n(833858),
    O = n(223135),
    v = n(880395),
    I = n(314897),
    T = n(592125),
    S = n(979651),
    A = n(574254),
    N = n(374129),
    C = n(639351),
    w = n(630388),
    R = n(51144),
    P = n(91088),
    D = n(981631),
    L = n(354459),
    x = n(927923),
    k = n(388032),
    j = n(850999);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            }));
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let V = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  l.DY3,
                  {
                      className: j.iconSpacing,
                      text: k.intl.string(k.t.qstQub),
                      children: (0, r.jsx)(l.svS, { className: o()(j.icon, n) })
                  },
                  'add-status'
              )
            : (0, r.jsx)(
                  l.DY3,
                  {
                      className: j.iconSpacing,
                      text: (0, y.O8)(t),
                      children: (0, r.jsx)(O.Z, {
                          hangStatusActivity: t,
                          className: o()(j.hangStatusIcon, n)
                      })
                  },
                  'hang-status'
              );
    },
    H = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)('div', {
            className: o()(i, j.list, n ? j.listCollapse : j.listDefault),
            role: 'group',
            children: t
        });
    };
function Y(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: a, serverMute: s, deaf: c, serverDeaf: u, collapsed: _, video: p, isStreaming: h, disabled: m, isWatching: E, iconClassName: b, embeddedApplication: y, otherClientSessionType: O, voicePlatform: v, application: I, guildId: T, channelId: S, user: A, disconnected: R, hangStatusActivity: P, showHangStatus: M, isSelf: U, handleHoverHangStatus: G, handleHoverIcons: B } = e,
        { enabled: Z } = d.c.getCurrentConfig({ location: 'VoiceUserIcons' }, { autoTrackExposure: !0 });
    if (_ || m) return null;
    let F = [],
        H = (0, r.jsx)(q, {
            iconClassName: b,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: c,
            serverDeaf: u
        });
    (p &&
        (a
            ? F.push(
                  (0, r.jsx)(
                      l.DY3,
                      {
                          className: j.iconSpacing,
                          text: k.intl.string(k.t['PXMZ//']),
                          children: (0, r.jsx)(l.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(j.icon, b),
                              colorClass: j.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : F.push(
                  (0, r.jsx)(
                      l.DY3,
                      {
                          className: j.iconSpacing,
                          text: k.intl.string(k.t.FlNoSU),
                          children: (0, r.jsx)(l.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(j.icon, b)
                          })
                      },
                      'video'
                  )
              )),
        R &&
            F.push(
                (0, r.jsx)(
                    l.DY3,
                    {
                        className: j.iconSpacing,
                        text: k.intl.string(k.t.HFwRpq),
                        children: (0, r.jsx)(l.Mgn, {
                            className: o()(j.icon, b),
                            color: l.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ));
    let Y = Z ? l.iWm : l.nG3;
    (null != y &&
        F.push(
            (0, r.jsx)(
                l.DY3,
                {
                    text: (0, f.Z)(y.name),
                    className: j.iconSpacing,
                    children: (0, r.jsx)(Y, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(j.icon, b)
                    })
                },
                'activity'
            )
        ),
        O === x.YE.XBOX || v === L.wR.XBOX
            ? F.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: j.iconSpacing,
                          children: (0, r.jsx)(C.Z, { className: o()(j.icon, b) })
                      },
                      'xbox'
                  )
              )
            : (O === x.YE.PLAYSTATION || v === L.wR.PLAYSTATION) &&
              F.push(
                  (0, r.jsx)(
                      'div',
                      {
                          className: j.iconSpacing,
                          children: (0, r.jsx)(N.Z, { className: o()(j.icon, b) })
                      },
                      'playstation'
                  )
              ),
        E &&
            F.push(
                (0, r.jsx)(
                    l.DY3,
                    {
                        className: j.iconSpacing,
                        text: k.intl.string(k.t.JH1SJy),
                        children: (0, r.jsx)(l.tEF, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o()(j.icon, b)
                        })
                    },
                    'watch'
                )
            ),
        h &&
            F.push(
                (0, r.jsx)(
                    'div',
                    {
                        className: o()(j.iconSpacing, j.liveIconSpacing),
                        children: (0, r.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL })
                    },
                    'stream'
                )
            ));
    let W = null != I && !(0, w.yE)(I.flags, D.udG.EMBEDDED),
        K = null == P && W;
    return 0 !== F.length || null != H || M || K
        ? (0, r.jsxs)('div', {
              className: o()(j.icons, t),
              children: [
                  (0, r.jsxs)('div', {
                      className: j.iconGroup,
                      onMouseEnter: () => (null == B ? void 0 : B(!0)),
                      onMouseLeave: () => (null == B ? void 0 : B(!1)),
                      children: [H, F]
                  }),
                  M || K
                      ? (0, r.jsx)('div', {
                            className: j.iconGroup,
                            onMouseEnter: () => (null == G ? void 0 : G(!0)),
                            onMouseLeave: () => (null == G ? void 0 : G(!1)),
                            children: K
                                ? (0, r.jsx)(
                                      z,
                                      {
                                          application: I,
                                          iconClassName: b,
                                          guildId: T,
                                          channelId: S,
                                          userId: A.id
                                      },
                                      ''.concat(A.id, '-game')
                                  )
                                : (0, r.jsx)(V, {
                                      hangStatusActivity: P,
                                      iconClassName: b,
                                      isSelf: U
                                  })
                        })
                      : null
              ]
          })
        : null;
}
function W(e, t) {
    var n,
        { avatarContainerClass: a = j.avatarContainer, userNameClassName: c = j.usernameFont, size: d = D.ipw.SMALL, selected: f = !1, disabled: _ = !1, isOverlay: g = !1 } = e,
        E = Z(e, ['avatarContainerClass', 'userNameClassName', 'size', 'selected', 'disabled', 'isOverlay']);
    let { onClick: y, onKeyDown: O, onDoubleClick: N, onContextMenu: C, onMouseLeave: w, onMouseDown: x, priority: M, speaking: G, collapsed: F, mute: V, serverMute: H, guildId: W, nick: K, isGuest: z, flipped: q, className: $, overlap: X, 'aria-label': Q, ringing: J, user: ee, channelId: et } = E,
        { parentAnalyticsLocation: en } = (0, p.ZP)(),
        er = (0, u.bp)(),
        ei = null != et ? T.Z.getChannel(et) : null,
        ea = (0, s.e7)([I.default, S.Z], () => S.Z.isInChannel(et, I.default.getId())),
        { enabled: eo } = P.P.useExperiment({ location: 'VoiceUser' }),
        [es, el] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== A.Z.isOpen() && ((e = A.Z.isOpen()) || el(!1));
            };
        return (A.Z.addChangeListener(t), () => A.Z.removeChangeListener(t));
    }, []);
    let ec = (e) => {
            null == y || y(e, ee);
        },
        eu = (e) => {
            null == N || N(e, ee);
        },
        ed = (e) => {
            null == C || C(e, ee);
        },
        ef = (e) => {
            null == w || w(e, ee);
        },
        e_ = (e) => {
            null == x || x(e, ee);
        };
    function ep() {
        return M && !F
            ? (0, r.jsx)(l.ua7, {
                  text: k.intl.string(k.t.BVK71t),
                  children: (e) => (0, r.jsx)('div', U({ className: o()(j.iconPriortySpeaker, { [j.iconPriortySpeakerSpeaking]: !V && !H && G }) }, e))
              })
            : null;
    }
    function eh() {
        return (0, r.jsx)('div', {
            className: o()(a, j.avatar, {
                [j.avatarLarge]: d === D.ipw.LARGE,
                [j.avatarSmall]: d === D.ipw.SMALL,
                [j.avatarSpeaking]: G
            }),
            style: { backgroundImage: 'url('.concat(ee.getAvatarURL(W, d === D.ipw.LARGE ? 38 : 24), ')') }
        });
    }
    function em() {
        let e = (0, r.jsxs)('div', {
                className: o()(c, {
                    [j.username]: !0,
                    [j.usernameSpeaking]: !V && !H && G
                }),
                children: [
                    null != K ? K : R.ZP.getName(ee),
                    z
                        ? (0, r.jsxs)('span', {
                              className: j.guestSuffix,
                              children: ['\xA0', k.intl.string(k.t['pFO/Pj'])]
                          })
                        : ''
                ]
            }),
            t = {
                primaryGuild: ee.primaryGuild,
                userId: ee.id,
                contextGuildId: W,
                isOverlay: g,
                disableTooltip: !0,
                className: o()(j.clanTag, g && j.isOverlay),
                profileViewedAnalytics: { source: g ? D.jXE.OVERLAY : D.Sbl.VOICE_PANEL }
            };
        return !F || g ? (0, r.jsx)(b.Z, B(U({}, t), { children: e })) : null;
    }
    function eg() {
        return (0, r.jsx)(Y, U({ disabled: _ }, E));
    }
    function eE(e) {
        null != W &&
            null != ei &&
            ((0, h.v)(en, h.d.MORE),
            el(!0),
            (0, v.D)(e, ee, ei, { context: er }, (e, t) => {
                (0, m.o)({
                    menuName: e,
                    menuItemProps: t,
                    entrypoint: L.A5.THREE_DOT,
                    location: en,
                    targetUserId: ee.id
                });
            }));
    }
    function eb() {
        return F || !ea || eo
            ? null
            : (0, r.jsx)(l.DY3, {
                  text: k.intl.string(k.t['+1H47u']),
                  className: o()(j.optionsButtonContainer, { [j.optionsContainerActive]: es }),
                  children: (0, r.jsx)(l.P3F, {
                      className: o()(j.optionsButton, { [j.optionsActive]: es }),
                      onClick: eE,
                      children: (0, r.jsx)(l.xhG, {
                          size: 'md',
                          className: j.icon
                      })
                  })
              });
    }
    return (0, r.jsx)(l.kL8, {
        ref: t,
        className: o()($, {
            [j.voiceUser]: !0,
            [j.overlap]: X,
            [j.selected]: f,
            [j.clickable]: null != y,
            [j.userSmall]: d === D.ipw.SMALL,
            [j.userLarge]: d === D.ipw.LARGE,
            [j.disabled]: !f && _,
            [j.ringing]: J
        }),
        onClick: ec,
        onDoubleClick: eu,
        onContextMenu: ed,
        onMouseLeave: ef,
        onMouseDown: e_,
        onKeyDown: O,
        'aria-label': null != (n = null != Q ? Q : K) ? n : ee.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)('div', {
            className: o()(j.content, { [j.flipped]: q }),
            children: [ep(), eh(), em(), eg(), eb()]
        })
    });
}
let K = i.forwardRef(W);
function z(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: s, userId: u } = e,
        [d, f] = i.useState(!1),
        p = (0, c.O)((e) => f(e));
    i.useEffect(() => {
        d &&
            _.ZP.trackWithMetadata(D.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: s,
                guild_id: a,
                user_id: u
            });
    }, [t.id, s, a, u, d]);
    let h = () => {
        _.ZP.trackWithMetadata(D.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: s,
            guild_id: a,
            game_name: t.name,
            user_id: u
        });
    };
    return (0, r.jsx)(l.DY3, {
        text: k.intl.formatToPlainString(k.t.Sq9xJy, { game: t.name }),
        'aria-label': k.intl.formatToPlainString(k.t.Sq9xJy, { game: t.name }),
        className: j.iconSpacing,
        children: (0, r.jsx)('div', {
            ref: p,
            children: (0, r.jsx)(E.Z, {
                className: o()(j.icon, n),
                game: t,
                size: E.Z.Sizes.XSMALL,
                onMouseEnter: h
            })
        })
    });
}
function q(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? k.intl.string(k.t.Q8Uzoa) : a ? k.intl.string(k.t.uLddbW) : k.intl.string(k.t.tjtv3N));
        e = a || i ? l.v0G : l.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(j.icon, t, { [j.iconServer]: a }),
            color: 'currentColor'
        });
        u.push(
            (0, r.jsx)(
                l.DY3,
                {
                    text: n(),
                    className: j.iconSpacing,
                    children: s
                },
                'mute'
            )
        );
    }
    if (c || s) {
        let e = c ? l.Vm4 : l.wE8,
            n = (0, r.jsx)(e, {
                className: o()(j.icon, t, { [j.iconServer]: c }),
                color: 'currentColor'
            });
        u.push(
            (0, r.jsx)(
                l.DY3,
                {
                    className: j.iconSpacing,
                    text: c ? k.intl.string(k.t.btxSdH) : k.intl.string(k.t.NjmiOD),
                    children: n
                },
                'deaf'
            )
        );
    }
    return 0 === u.length ? null : u;
}
