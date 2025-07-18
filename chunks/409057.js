n.d(t, { Z: () => Z });
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
    E = n(769654),
    b = n(750154),
    y = n(960870),
    O = n(139793),
    v = n(994746),
    I = n(232174),
    T = n(652853),
    S = n(979038),
    A = n(448980),
    N = n(336383),
    C = n(194811),
    R = n(373826),
    P = n(668700),
    w = n(262210),
    D = n(670451),
    L = n(881530),
    x = n(228168),
    M = n(981631),
    k = n(701488),
    j = n(388032),
    U = n(227832);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    let { user: t, currentUser: n, activity: i, application: G, voiceGuild: V, voiceChannel: Z, className: H, onClose: Y, appContext: W } = e,
        K = (0, g.Dt)(),
        z = (0, g.Dt)(),
        { analyticsLocations: q } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: X } = (0, T.z)(),
        Q = (0, m.Z)({
            activity: i,
            user: t
        }),
        J = (0, y.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: Q,
            analyticsLocations: q
        }),
        $ = (0, O.Z)({
            userId: t.id,
            onAction: J
        }),
        ee = (0, v.Z)(i),
        et = null != ee.text && '' !== ee.text,
        { largeImage: en, smallImage: er } = (0, _.FO)(i, G),
        ei = (0, L.Z)({
            location: 'UserProfileActivityCard',
            user: t,
            currentUser: n,
            activity: i,
            application: G,
            entry: Q,
            onClose: Y
        }),
        ea = () => {
            let e = (0, s.Z)(i) ? 'crunchyroll' : 'default',
                t = X === x.lY.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
            return null == ei
                ? (0, r.jsx)(h.E, {
                      image: en,
                      smallImage: er,
                      size: t,
                      aspectRatio: e,
                      className: U.image
                  })
                : (0, r.jsx)(h.E, {
                      image: en,
                      smallImage: er,
                      size: t,
                      className: U.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          (J({ action: 'PRESS_IMAGE' }), ei(e));
                      }
                  });
        },
        eo = () =>
            (0, u.Z)(i) && null != Z
                ? (0, r.jsxs)('div', {
                      className: U.voiceChannelText,
                      children: [
                          (0, r.jsx)(o.gj8, {
                              size: 'xxs',
                              color: o.TVs.colors.TEXT_DEFAULT,
                              className: U.voiceIcon
                          }),
                          (0, r.jsx)(R.f, {
                              variant: 'heading-sm/semibold',
                              text: Z.name,
                              id: K
                          })
                      ]
                  })
                : (0, c.Z)(i) || (0, b.dS)(i)
                  ? (0, r.jsx)(R.f, {
                        variant: 'heading-sm/semibold',
                        text: i.name,
                        id: K
                    })
                  : null != i.details
                    ? (0, r.jsx)(p._, {
                          href: i.details_url,
                          children: (0, r.jsx)(R.f, {
                              variant: 'heading-sm/semibold',
                              text: i.details,
                              id: K
                          })
                      })
                    : (0, r.jsx)(R.f, {
                          variant: 'heading-sm/semibold',
                          text: i.name,
                          id: K
                      }),
        es = () => {
            if ((0, u.Z)(i) && null != V)
                return (0, r.jsx)(R.Z, {
                    variant: 'text-xs/normal',
                    text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: V.name }),
                    onClick: () => {
                        ((0, E.X)(V.id), J({ action: 'OPEN_VOICE_GUILD' }), null == Y || Y());
                    }
                });
            if ((0, c.Z)(i))
                return (0, r.jsx)(p._, {
                    href: i.details_url,
                    children: (0, r.jsx)(R.Z, {
                        variant: 'text-xs/normal',
                        text: i.details
                    })
                });
            if ((0, b.dS)(i)) {
                var e;
                return (0, r.jsx)(R.Z, {
                    variant: 'text-xs/normal',
                    text: null == i || null == (e = i.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(p._, {
                href: i.state_url,
                children: (0, r.jsx)(R.Z, {
                    variant: 'text-xs/normal',
                    text: i.state
                })
            });
        },
        el = () => {
            var e, t, n, a, o, s, l, u;
            if (i.type === M.IIU.WATCHING) return null;
            if ((0, c.Z)(i)) return ec();
            if ((0, b.dS)(i) && (null == (e = i.party) ? void 0 : e.size) != null && (null == (t = i.party) ? void 0 : t.size.length) >= 2) {
                let e = j.intl.formatToPlainString(j.t['JC/3x8'], {
                    numSpeakers: null == (a = i.party) ? void 0 : a.size[0],
                    numListeners: (null == (o = i.party) ? void 0 : o.size[1]) - (null == (s = i.party) ? void 0 : s.size[0])
                });
                return (0, r.jsx)(R.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (null == (n = i.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(p._, {
                      href: null == (l = i.assets) ? void 0 : l.large_url,
                      children: (0, r.jsx)(R.Z, {
                          text: null == (u = i.assets) ? void 0 : u.large_text,
                          variant: 'text-xs/normal'
                      })
                  })
                : null;
        },
        ec = () => {
            var e, t, n, a;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === k.Zc
                ? (0, r.jsxs)('div', {
                      className: U.gameState,
                      children: [
                          (0, r.jsx)(p._, {
                              href: i.state_url,
                              children: (0, r.jsx)(R.Z, {
                                  variant: 'text-xs/normal',
                                  text: i.state
                              })
                          }),
                          (0, r.jsx)(R.Z, {
                              variant: 'text-xs/normal',
                              text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (a = null == G ? void 0 : G.getMaxParticipants()) ? a : 0
                              })
                          })
                      ]
                  })
                : (0, l.Z)(i) && (null == (t = i.party) ? void 0 : t.size) != null && (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: U.gameState,
                        children: [
                            (0, r.jsx)(p._, {
                                href: i.state_url,
                                children: (0, r.jsx)(R.Z, {
                                    variant: 'text-xs/normal',
                                    text: i.state
                                })
                            }),
                            (0, r.jsx)(R.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === i.party.size[1]
                                        ? j.intl.formatToPlainString(j.t.IM4J4e, { count: i.party.size[0] })
                                        : j.intl.formatToPlainString(j.t['u//9Bw'], {
                                              count: i.party.size[0],
                                              max: i.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(p._, {
                          href: i.state_url,
                          children: (0, r.jsx)(R.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          })
                      })
                    : null;
        },
        eu = () => {
            if (!(0, I.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(w.Z, {
                start: e,
                end: t
            });
        },
        ed = () =>
            null == ei
                ? (0, r.jsxs)('div', {
                      children: [eo(), es(), el()]
                  })
                : (0, r.jsxs)(o.P3F, {
                      className: U.clickableText,
                      onClick: (e) => {
                          (J({ action: 'PRESS_TEXT' }), ei(e));
                      },
                      children: [eo(), es(), el()]
                  }),
        ef = () =>
            null == V || null == Z
                ? null
                : (0, r.jsx)(P.Z, {
                      user: t,
                      guild: V,
                      channel: Z,
                      onAction: J,
                      onClose: Y
                  }),
        e_ = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: U.actions,
                      children: (0, r.jsx)(S.Z, {
                          activity: i,
                          user: t,
                          onAction: J,
                          onClose: Y,
                          application: G
                      })
                  });
    return (0, r.jsx)(f.Gt, {
        value: q,
        children: (0, r.jsxs)(N.Z, {
            ref: $,
            className: a()(U.card, H),
            onAction: J,
            onClose: Y,
            'aria-labelledby': et ? ''.concat(z, ' ').concat(K) : K,
            children: [
                (0, r.jsx)(
                    C.Z,
                    F(B({ textId: z }, ee), {
                        contextMenu: (0, r.jsx)(D.Z, {
                            display: 'live',
                            user: t,
                            activity: i,
                            entry: Q,
                            onClose: Y,
                            appContext: W
                        })
                    })
                ),
                (0, r.jsxs)('div', {
                    className: U.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: U.content,
                            children: [
                                !t.bot && ea(),
                                (0, r.jsxs)('div', {
                                    className: U.details,
                                    children: [
                                        ed(),
                                        !t.bot &&
                                            (0, r.jsx)(A.Z, {
                                                user: t,
                                                activity: i,
                                                className: U.badges
                                            }),
                                        eu(),
                                        X === x.lY.MODAL_V2 && e_()
                                    ]
                                }),
                                X === x.lY.MODAL && e_()
                            ]
                        }),
                        ef()
                    ]
                }),
                X !== x.lY.MODAL && X !== x.lY.MODAL_V2 && e_()
            ]
        })
    });
}
