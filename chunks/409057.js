n.d(t, { Z: () => Y });
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
    p = n(264832),
    h = n(358696),
    m = n(649700),
    g = n(313201),
    E = n(833858),
    b = n(223135),
    y = n(769654),
    O = n(750154),
    v = n(960870),
    I = n(139793),
    T = n(994746),
    S = n(232174),
    A = n(652853),
    N = n(979038),
    C = n(448980),
    R = n(336383),
    P = n(194811),
    w = n(373826),
    D = n(668700),
    L = n(262210),
    x = n(670451),
    M = n(881530),
    k = n(228168),
    j = n(981631),
    U = n(701488),
    G = n(388032),
    B = n(227832);
function V(e, t, n) {
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
function F(e) {
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
                V(e, t, n[t]);
            }));
    }
    return e;
}
function Z(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Y(e) {
    let { user: t, currentUser: n, activity: i, application: V, voiceGuild: Z, voiceChannel: Y, className: W, onClose: K, appContext: z } = e,
        q = (0, g.Dt)(),
        X = (0, g.Dt)(),
        { analyticsLocations: Q } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: J } = (0, A.z)(),
        $ = (0, m.Z)({
            activity: i,
            user: t
        }),
        ee = (0, v.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: $,
            analyticsLocations: Q
        }),
        et = (0, I.Z)({
            userId: t.id,
            onAction: ee
        }),
        en = (0, T.Z)(i),
        er = null != en.text && '' !== en.text,
        { largeImage: ei, smallImage: ea } = (0, _.FO)(i, V),
        eo = (0, M.Z)({
            location: 'UserProfileActivityCard',
            user: t,
            currentUser: n,
            activity: i,
            application: V,
            entry: $,
            onClose: K
        }),
        es = () => {
            let e = (0, s.Z)(i) ? 'crunchyroll' : 'default',
                t = J === k.lY.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
            return i.type === j.IIU.HANG_STATUS
                ? (0, r.jsx)(b.Z, {
                      hangStatusActivity: i,
                      className: a()(B.hangStatusIcon, B.image, { [B.small]: J !== k.lY.MODAL_V2 })
                  })
                : null == eo
                  ? (0, r.jsx)(h.E, {
                        image: ei,
                        smallImage: ea,
                        size: t,
                        aspectRatio: e,
                        className: B.image
                    })
                  : (0, r.jsx)(h.E, {
                        image: ei,
                        smallImage: ea,
                        size: t,
                        className: B.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            (ee({ action: 'PRESS_IMAGE' }), eo(e));
                        }
                    });
        },
        el = () =>
            i.type === j.IIU.HANG_STATUS
                ? (0, r.jsx)(w.f, {
                      variant: 'heading-sm/semibold',
                      text: (0, E.O8)(i),
                      id: q
                  })
                : (0, u.Z)(i) && null != Y
                  ? (0, r.jsxs)('div', {
                        className: B.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.gj8, {
                                size: 'xxs',
                                color: o.TVs.colors.TEXT_DEFAULT,
                                className: B.voiceIcon
                            }),
                            (0, r.jsx)(w.f, {
                                variant: 'heading-sm/semibold',
                                text: Y.name,
                                id: q
                            })
                        ]
                    })
                  : (0, c.Z)(i) || (0, O.dS)(i)
                    ? (0, r.jsx)(w.f, {
                          variant: 'heading-sm/semibold',
                          text: i.name,
                          id: q
                      })
                    : null != i.details
                      ? (0, r.jsx)(p._, {
                            href: i.details_url,
                            children: (0, r.jsx)(w.f, {
                                variant: 'heading-sm/semibold',
                                text: i.details,
                                id: q
                            })
                        })
                      : (0, r.jsx)(w.f, {
                            variant: 'heading-sm/semibold',
                            text: i.name,
                            id: q
                        }),
        ec = () => {
            if (i.type === j.IIU.HANG_STATUS) return null;
            if ((0, u.Z)(i) && null != Z)
                return (0, r.jsx)(w.Z, {
                    variant: 'text-xs/normal',
                    text: G.intl.formatToPlainString(G.t['hq/Qzc'], { guildName: Z.name }),
                    onClick: () => {
                        ((0, y.X)(Z.id), ee({ action: 'OPEN_VOICE_GUILD' }), null == K || K());
                    }
                });
            if ((0, c.Z)(i))
                return (0, r.jsx)(p._, {
                    href: i.details_url,
                    children: (0, r.jsx)(w.Z, {
                        variant: 'text-xs/normal',
                        text: i.details
                    })
                });
            if ((0, O.dS)(i)) {
                var e;
                return (0, r.jsx)(w.Z, {
                    variant: 'text-xs/normal',
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(p._, {
                href: i.state_url,
                children: (0, r.jsx)(w.Z, {
                    variant: 'text-xs/normal',
                    text: i.state
                })
            });
        },
        eu = () => {
            var e, t, n, a, o, s, l, u;
            if (i.type === j.IIU.WATCHING) return null;
            if ((0, c.Z)(i)) return ed();
            if ((0, O.dS)(i) && (null == (e = i.party) ? void 0 : e.size) != null && (null == (t = i.party) ? void 0 : t.size.length) >= 2) {
                let e = G.intl.formatToPlainString(G.t['JC/3x8'], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners: (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0])
                });
                return (0, r.jsx)(w.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(p._, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(w.Z, {
                          text: null == (u = i.assets) ? void 0 : u.large_text,
                          variant: 'text-xs/normal'
                      })
                  })
                : null;
        },
        ed = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === U.Zc
                ? (0, r.jsxs)('div', {
                      className: B.gameState,
                      children: [
                          (0, r.jsx)(p._, {
                              href: i.state_url,
                              children: (0, r.jsx)(w.Z, {
                                  variant: 'text-xs/normal',
                                  text: i.state
                              })
                          }),
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: G.intl.formatToPlainString(G.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (a = null == V ? void 0 : V.getMaxParticipants()) ? a : 0
                              })
                          })
                      ]
                  })
                : (0, l.Z)(i) && (null == (t = i.party) ? void 0 : t.size) != null && (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: B.gameState,
                        children: [
                            (0, r.jsx)(p._, {
                                href: i.state_url,
                                children: (0, r.jsx)(w.Z, {
                                    variant: 'text-xs/normal',
                                    text: i.state
                                })
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === i.party.size[1]
                                        ? G.intl.formatToPlainString(G.t.IM4J4e, { count: i.party.size[0] })
                                        : G.intl.formatToPlainString(G.t['u//9Bw'], {
                                              count: i.party.size[0],
                                              max: i.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(p._, {
                          href: i.state_url,
                          children: (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          })
                      })
                    : null;
        },
        ef = () => {
            if (!(0, S.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(L.Z, {
                start: e,
                end: t
            });
        },
        e_ = () =>
            null == eo
                ? (0, r.jsxs)('div', {
                      children: [el(), ec(), eu()]
                  })
                : (0, r.jsxs)(o.P3F, {
                      className: B.clickableText,
                      onClick: (e) => {
                          (ee({ action: 'PRESS_TEXT' }), eo(e));
                      },
                      children: [el(), ec(), eu()]
                  }),
        ep = () =>
            null == Z || null == Y
                ? null
                : (0, r.jsx)(D.Z, {
                      user: t,
                      guild: Z,
                      channel: Y,
                      onAction: ee,
                      onClose: K
                  }),
        eh = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: B.actions,
                      children: (0, r.jsx)(N.Z, {
                          activity: i,
                          user: t,
                          onAction: ee,
                          onClose: K,
                          application: V
                      })
                  });
    return (0, r.jsx)(f.Gt, {
        value: Q,
        children: (0, r.jsxs)(R.Z, {
            ref: et,
            className: a()(B.card, W),
            onAction: ee,
            onClose: K,
            'aria-labelledby': er ? ''.concat(X, ' ').concat(q) : q,
            children: [
                (0, r.jsx)(
                    P.Z,
                    H(F({ textId: X }, en), {
                        contextMenu: (0, r.jsx)(x.Z, {
                            display: 'live',
                            user: t,
                            activity: i,
                            entry: $,
                            onClose: K,
                            appContext: z
                        })
                    })
                ),
                (0, r.jsxs)('div', {
                    className: B.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: B.content,
                            children: [
                                !t.bot && es(),
                                (0, r.jsxs)('div', {
                                    className: B.details,
                                    children: [
                                        e_(),
                                        !t.bot &&
                                            (0, r.jsx)(C.Z, {
                                                user: t,
                                                activity: i,
                                                className: B.badges
                                            }),
                                        ef(),
                                        J === k.lY.MODAL_V2 && eh()
                                    ]
                                }),
                                J === k.lY.MODAL && eh()
                            ]
                        }),
                        ep()
                    ]
                }),
                J !== k.lY.MODAL && J !== k.lY.MODAL_V2 && eh()
            ]
        })
    });
}
