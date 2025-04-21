n.d(t, { Z: () => F });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(394821),
    l = n(841784),
    c = n(833664),
    u = n(420660),
    d = n(100527),
    f = n(906732),
    _ = n(379357),
    p = n(358696),
    h = n(649700),
    m = n(769654),
    g = n(750154),
    E = n(960870),
    b = n(139793),
    y = n(994746),
    v = n(232174),
    O = n(652853),
    I = n(979038),
    S = n(448980),
    T = n(336383),
    A = n(194811),
    N = n(373826),
    C = n(315324),
    R = n(262210),
    P = n(670451),
    w = n(881530),
    D = n(228168),
    L = n(981631),
    x = n(701488),
    M = n(388032),
    k = n(227832);
function j(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
function F(e) {
    let { user: t, currentUser: n, activity: i, application: j, voiceGuild: G, voiceChannel: F, className: V, onClose: Z, appContext: H } = e,
        { analyticsLocations: Y } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: W } = (0, O.z)(),
        K = { [k.fullSize]: W === D.y0.FULL_SIZE },
        z = (0, h.Z)({
            activity: i,
            user: t
        }),
        q = (0, E.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: z,
            analyticsLocations: Y
        }),
        Q = (0, b.Z)({
            userId: t.id,
            onAction: q
        }),
        X = (0, y.Z)(i),
        { largeImage: J, smallImage: $ } = (0, _.FO)(i, j),
        ee = (0, w.Z)({
            location: 'UserProfileActivityCard',
            user: t,
            currentUser: n,
            activity: i,
            application: j,
            entry: z,
            onClose: Z
        }),
        et = () => {
            let e = (0, s.Z)(i) ? 'crunchyroll' : 'default';
            return null == ee
                ? (0, r.jsx)(p.E, {
                      image: J,
                      smallImage: $,
                      size: p.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: J,
                      smallImage: $,
                      size: p.J.SIZE_60,
                      className: k.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          q({ action: 'PRESS_IMAGE' }), ee(e);
                      }
                  });
        },
        en = () => {
            var e;
            return (0, u.Z)(i) && null != F
                ? (0, r.jsxs)('div', {
                      className: k.voiceChannelText,
                      children: [
                          (0, r.jsx)(o.gj8, {
                              size: 'xxs',
                              color: o.TVs.colors.TEXT_NORMAL,
                              className: k.voiceIcon
                          }),
                          (0, r.jsx)(N.Z, {
                              variant: 'heading-sm/semibold',
                              text: F.name
                          })
                      ]
                  })
                : (0, c.Z)(i) || (0, g.dS)(i)
                  ? (0, r.jsx)(N.Z, {
                        variant: 'heading-sm/semibold',
                        text: i.name
                    })
                  : (0, r.jsx)(N.Z, {
                        variant: 'heading-sm/semibold',
                        text: null != (e = i.details) ? e : i.name
                    });
        },
        er = () => {
            if ((0, u.Z)(i) && null != G)
                return (0, r.jsx)(N.Z, {
                    variant: 'text-xs/normal',
                    text: M.intl.formatToPlainString(M.t['hq/Qzc'], { guildName: G.name }),
                    onClick: () => {
                        (0, m.X)(G.id), q({ action: 'OPEN_VOICE_GUILD' }), null == Z || Z();
                    }
                });
            if ((0, c.Z)(i))
                return (0, r.jsx)(N.Z, {
                    variant: 'text-xs/normal',
                    text: i.details
                });
            if ((0, g.dS)(i)) {
                var e;
                return (0, r.jsx)(N.Z, {
                    variant: 'text-xs/normal',
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(N.Z, {
                variant: 'text-xs/normal',
                text: i.state
            });
        },
        ei = () => {
            var e, t, n, a, o, s;
            if (i.type === L.IIU.WATCHING) return null;
            if ((0, c.Z)(i)) return ea();
            if ((0, g.dS)(i) && (null == (e = i.party) ? void 0 : e.size) != null && (null == (t = i.party) ? void 0 : t.size.length) >= 2) {
                let e = M.intl.formatToPlainString(M.t['JC/3x8'], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners: (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0])
                });
                return (0, r.jsx)(N.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (0, r.jsx)(N.Z, {
                text: null == (n = i.assets) ? void 0 : n.large_text,
                variant: 'text-xs/normal'
            });
        },
        ea = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === x.Zc
                ? (0, r.jsxs)('div', {
                      className: k.gameState,
                      children: [
                          (0, r.jsx)(N.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(N.Z, {
                              variant: 'text-xs/normal',
                              text: M.intl.formatToPlainString(M.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (a = null == j ? void 0 : j.getMaxParticipants()) ? a : 0
                              })
                          })
                      ]
                  })
                : (0, l.Z)(i) && (null == (t = i.party) ? void 0 : t.size) != null && (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: k.gameState,
                        children: [
                            (0, r.jsx)(N.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(N.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === i.party.size[1]
                                        ? M.intl.formatToPlainString(M.t.IM4J4e, { count: i.party.size[0] })
                                        : M.intl.formatToPlainString(M.t['u//9Bw'], {
                                              count: i.party.size[0],
                                              max: i.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(N.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        eo = () => {
            if (!(0, v.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(R.Z, {
                start: e,
                end: t
            });
        },
        es = () =>
            null == ee
                ? (0, r.jsxs)('div', {
                      children: [en(), er(), ei()]
                  })
                : (0, r.jsxs)(o.P3F, {
                      className: k.clickableText,
                      onClick: (e) => {
                          q({ action: 'PRESS_TEXT' }), ee(e);
                      },
                      children: [en(), er(), ei()]
                  }),
        el = () =>
            null == G || null == F
                ? null
                : (0, r.jsx)(C.Z, {
                      user: t,
                      guild: G,
                      channel: F,
                      onAction: q,
                      onClose: Z
                  }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(k.actions, K),
                      children: (0, r.jsx)(I.Z, {
                          activity: i,
                          user: t,
                          onAction: q,
                          onClose: Z
                      })
                  });
    return (0, r.jsx)(f.Gt, {
        value: Y,
        children: (0, r.jsxs)(T.Z, {
            ref: Q,
            className: a()(k.card, V),
            onAction: q,
            onClose: Z,
            children: [
                (0, r.jsx)(
                    A.Z,
                    B(U({}, X), {
                        contextMenu: (0, r.jsx)(P.Z, {
                            display: 'live',
                            user: t,
                            activity: i,
                            entry: z,
                            onClose: Z,
                            appContext: H
                        })
                    })
                ),
                (0, r.jsxs)('div', {
                    className: k.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(k.content, K),
                            children: [
                                !t.bot && et(),
                                (0, r.jsxs)('div', {
                                    className: k.details,
                                    children: [
                                        es(),
                                        !t.bot &&
                                            (0, r.jsx)(S.Z, {
                                                user: t,
                                                activity: i,
                                                className: k.badges
                                            }),
                                        eo()
                                    ]
                                }),
                                W === D.y0.FULL_SIZE && ec()
                            ]
                        }),
                        el()
                    ]
                }),
                W !== D.y0.FULL_SIZE && ec()
            ]
        })
    });
}
