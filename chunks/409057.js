n.d(t, { Z: () => V });
var r = n(255367);
n(73800);
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
    m = n(313201),
    g = n(769654),
    E = n(750154),
    b = n(960870),
    y = n(139793),
    O = n(994746),
    v = n(232174),
    I = n(652853),
    S = n(979038),
    T = n(448980),
    A = n(336383),
    N = n(194811),
    C = n(373826),
    R = n(668700),
    P = n(262210),
    w = n(670451),
    D = n(881530),
    L = n(228168),
    x = n(981631),
    k = n(701488),
    M = n(388032),
    j = n(227832);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    let { user: t, currentUser: n, activity: i, application: U, voiceGuild: B, voiceChannel: V, className: Z, onClose: H, appContext: Y } = e,
        W = (0, m.Dt)(),
        K = (0, m.Dt)(),
        { analyticsLocations: z } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: q } = (0, I.z)(),
        X = (0, h.Z)({
            activity: i,
            user: t
        }),
        Q = (0, b.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: X,
            analyticsLocations: z
        }),
        J = (0, y.Z)({
            userId: t.id,
            onAction: Q
        }),
        $ = (0, O.Z)(i),
        ee = null != $.text && '' !== $.text,
        { largeImage: et, smallImage: en } = (0, _.FO)(i, U),
        er = (0, D.Z)({
            location: 'UserProfileActivityCard',
            user: t,
            currentUser: n,
            activity: i,
            application: U,
            entry: X,
            onClose: H
        }),
        ei = () => {
            let e = (0, s.Z)(i) ? 'crunchyroll' : 'default',
                t = q === L.lY.MODAL_V2 ? p.J.SIZE_100 : p.J.SIZE_60;
            return null == er
                ? (0, r.jsx)(p.E, {
                      image: et,
                      smallImage: en,
                      size: t,
                      aspectRatio: e,
                      className: j.image
                  })
                : (0, r.jsx)(p.E, {
                      image: et,
                      smallImage: en,
                      size: t,
                      className: j.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          Q({ action: 'PRESS_IMAGE' }), er(e);
                      }
                  });
        },
        ea = () => {
            var e;
            return (0, u.Z)(i) && null != V
                ? (0, r.jsxs)('div', {
                      className: j.voiceChannelText,
                      children: [
                          (0, r.jsx)(o.gj8, {
                              size: 'xxs',
                              color: o.TVs.colors.TEXT_NORMAL,
                              className: j.voiceIcon
                          }),
                          (0, r.jsx)(C.f, {
                              variant: 'heading-sm/semibold',
                              text: V.name,
                              id: W
                          })
                      ]
                  })
                : (0, c.Z)(i) || (0, E.dS)(i)
                  ? (0, r.jsx)(C.f, {
                        variant: 'heading-sm/semibold',
                        text: i.name,
                        id: W
                    })
                  : (0, r.jsx)(C.f, {
                        variant: 'heading-sm/semibold',
                        text: null != (e = i.details) ? e : i.name,
                        id: W
                    });
        },
        eo = () => {
            if ((0, u.Z)(i) && null != B)
                return (0, r.jsx)(C.Z, {
                    variant: 'text-xs/normal',
                    text: M.intl.formatToPlainString(M.t['hq/Qzc'], { guildName: B.name }),
                    onClick: () => {
                        (0, g.X)(B.id), Q({ action: 'OPEN_VOICE_GUILD' }), null == H || H();
                    }
                });
            if ((0, c.Z)(i))
                return (0, r.jsx)(C.Z, {
                    variant: 'text-xs/normal',
                    text: i.details
                });
            if ((0, E.dS)(i)) {
                var e;
                return (0, r.jsx)(C.Z, {
                    variant: 'text-xs/normal',
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(C.Z, {
                variant: 'text-xs/normal',
                text: i.state
            });
        },
        es = () => {
            var e, t, n, a, o, s;
            if (i.type === x.IIU.WATCHING) return null;
            if ((0, c.Z)(i)) return el();
            if ((0, E.dS)(i) && (null == (e = i.party) ? void 0 : e.size) != null && (null == (t = i.party) ? void 0 : t.size.length) >= 2) {
                let e = M.intl.formatToPlainString(M.t['JC/3x8'], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners: (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0])
                });
                return (0, r.jsx)(C.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (0, r.jsx)(C.Z, {
                text: null == (n = i.assets) ? void 0 : n.large_text,
                variant: 'text-xs/normal'
            });
        },
        el = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === k.Zc
                ? (0, r.jsxs)('div', {
                      className: j.gameState,
                      children: [
                          (0, r.jsx)(C.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(C.Z, {
                              variant: 'text-xs/normal',
                              text: M.intl.formatToPlainString(M.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (a = null == U ? void 0 : U.getMaxParticipants()) ? a : 0
                              })
                          })
                      ]
                  })
                : (0, l.Z)(i) && (null == (t = i.party) ? void 0 : t.size) != null && (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: j.gameState,
                        children: [
                            (0, r.jsx)(C.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(C.Z, {
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
                    ? (0, r.jsx)(C.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        ec = () => {
            if (!(0, v.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(P.Z, {
                start: e,
                end: t
            });
        },
        eu = () =>
            null == er
                ? (0, r.jsxs)('div', {
                      children: [ea(), eo(), es()]
                  })
                : (0, r.jsxs)(o.P3F, {
                      className: j.clickableText,
                      onClick: (e) => {
                          Q({ action: 'PRESS_TEXT' }), er(e);
                      },
                      children: [ea(), eo(), es()]
                  }),
        ed = () =>
            null == B || null == V
                ? null
                : (0, r.jsx)(R.Z, {
                      user: t,
                      guild: B,
                      channel: V,
                      onAction: Q,
                      onClose: H
                  }),
        ef = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: j.actions,
                      children: (0, r.jsx)(S.Z, {
                          activity: i,
                          user: t,
                          onAction: Q,
                          onClose: H
                      })
                  });
    return (0, r.jsx)(f.Gt, {
        value: z,
        children: (0, r.jsxs)(A.Z, {
            ref: J,
            className: a()(j.card, Z),
            onAction: Q,
            onClose: H,
            'aria-labelledby': ee ? ''.concat(K, ' ').concat(W) : W,
            children: [
                (0, r.jsx)(
                    N.Z,
                    F(G({ textId: K }, $), {
                        contextMenu: (0, r.jsx)(w.Z, {
                            display: 'live',
                            user: t,
                            activity: i,
                            entry: X,
                            onClose: H,
                            appContext: Y
                        })
                    })
                ),
                (0, r.jsxs)('div', {
                    className: j.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: j.content,
                            children: [
                                !t.bot && ei(),
                                (0, r.jsxs)('div', {
                                    className: j.details,
                                    children: [
                                        eu(),
                                        !t.bot &&
                                            (0, r.jsx)(T.Z, {
                                                user: t,
                                                activity: i,
                                                className: j.badges
                                            }),
                                        ec(),
                                        q === L.lY.MODAL_V2 && ef()
                                    ]
                                }),
                                q === L.lY.MODAL && ef()
                            ]
                        }),
                        ed()
                    ]
                }),
                q !== L.lY.MODAL && q !== L.lY.MODAL_V2 && ef()
            ]
        })
    });
}
