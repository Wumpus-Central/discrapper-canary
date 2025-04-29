n.d(t, { Z: () => V });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
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
    O = n(232174),
    v = n(652853),
    I = n(979038),
    S = n(448980),
    T = n(336383),
    A = n(194811),
    N = n(373826),
    C = n(668700),
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
function V(e) {
    let { user: t, currentUser: n, activity: i, application: j, voiceGuild: G, voiceChannel: V, className: F, onClose: Z, appContext: H } = e,
        { analyticsLocations: Y } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: W } = (0, v.z)(),
        K = (0, h.Z)({
            activity: i,
            user: t
        }),
        z = (0, E.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: K,
            analyticsLocations: Y
        }),
        q = (0, b.Z)({
            userId: t.id,
            onAction: z
        }),
        Q = (0, y.Z)(i),
        { largeImage: X, smallImage: J } = (0, _.FO)(i, j),
        $ = (0, w.Z)({
            location: 'UserProfileActivityCard',
            user: t,
            currentUser: n,
            activity: i,
            application: j,
            entry: K,
            onClose: Z
        }),
        ee = () => {
            let e = (0, s.Z)(i) ? 'crunchyroll' : 'default',
                t = W === D.lY.MODAL_V2 ? p.J.SIZE_100 : p.J.SIZE_60;
            return null == $
                ? (0, r.jsx)(p.E, {
                      image: X,
                      smallImage: J,
                      size: t,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: X,
                      smallImage: J,
                      size: t,
                      className: k.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          z({ action: 'PRESS_IMAGE' }), $(e);
                      }
                  });
        },
        et = () => {
            var e;
            return (0, u.Z)(i) && null != V
                ? (0, r.jsxs)('div', {
                      className: k.voiceChannelText,
                      children: [
                          (0, r.jsx)(a.gj8, {
                              size: 'xxs',
                              color: a.TVs.colors.TEXT_NORMAL,
                              className: k.voiceIcon
                          }),
                          (0, r.jsx)(N.Z, {
                              variant: 'heading-sm/semibold',
                              text: V.name
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
        en = () => {
            if ((0, u.Z)(i) && null != G)
                return (0, r.jsx)(N.Z, {
                    variant: 'text-xs/normal',
                    text: M.intl.formatToPlainString(M.t['hq/Qzc'], { guildName: G.name }),
                    onClick: () => {
                        (0, m.X)(G.id), z({ action: 'OPEN_VOICE_GUILD' }), null == Z || Z();
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
        er = () => {
            var e, t, n, o, a, s;
            if (i.type === L.IIU.WATCHING) return null;
            if ((0, c.Z)(i)) return ei();
            if ((0, g.dS)(i) && (null == (e = i.party) ? void 0 : e.size) != null && (null == (t = i.party) ? void 0 : t.size.length) >= 2) {
                let e = M.intl.formatToPlainString(M.t['JC/3x8'], {
                    numSpeakers: null == (o = i.party) ? void 0 : o.size[0],
                    numListeners: (null == (a = i.party) ? void 0 : a.size[1]) - (null == (s = i.party) ? void 0 : s.size[0])
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
        ei = () => {
            var e, t, n, o;
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
                                  max: null != (o = null == j ? void 0 : j.getMaxParticipants()) ? o : 0
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
            if (!(0, O.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(R.Z, {
                start: e,
                end: t
            });
        },
        ea = () =>
            null == $
                ? (0, r.jsxs)('div', {
                      children: [et(), en(), er()]
                  })
                : (0, r.jsxs)(a.P3F, {
                      className: k.clickableText,
                      onClick: (e) => {
                          z({ action: 'PRESS_TEXT' }), $(e);
                      },
                      children: [et(), en(), er()]
                  }),
        es = () =>
            null == G || null == V
                ? null
                : (0, r.jsx)(C.Z, {
                      user: t,
                      guild: G,
                      channel: V,
                      onAction: z,
                      onClose: Z
                  }),
        el = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: k.actions,
                      children: (0, r.jsx)(I.Z, {
                          activity: i,
                          user: t,
                          onAction: z,
                          onClose: Z
                      })
                  });
    return (0, r.jsx)(f.Gt, {
        value: Y,
        children: (0, r.jsxs)(T.Z, {
            ref: q,
            className: o()(k.card, F),
            onAction: z,
            onClose: Z,
            children: [
                (0, r.jsx)(
                    A.Z,
                    B(U({}, Q), {
                        contextMenu: (0, r.jsx)(P.Z, {
                            display: 'live',
                            user: t,
                            activity: i,
                            entry: K,
                            onClose: Z,
                            appContext: H
                        })
                    })
                ),
                (0, r.jsxs)('div', {
                    className: k.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.content,
                            children: [
                                !t.bot && ee(),
                                (0, r.jsxs)('div', {
                                    className: k.details,
                                    children: [
                                        ea(),
                                        !t.bot &&
                                            (0, r.jsx)(S.Z, {
                                                user: t,
                                                activity: i,
                                                className: k.badges
                                            }),
                                        eo(),
                                        W === D.lY.MODAL_V2 && el()
                                    ]
                                }),
                                W === D.lY.MODAL && el()
                            ]
                        }),
                        es()
                    ]
                }),
                W !== D.lY.MODAL && W !== D.lY.MODAL_V2 && el()
            ]
        })
    });
}
