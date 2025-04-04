n.d(t, { Z: () => B });
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
    g = n(960870),
    E = n(139793),
    b = n(994746),
    y = n(232174),
    v = n(652853),
    O = n(979038),
    I = n(448980),
    S = n(336383),
    T = n(194811),
    N = n(373826),
    A = n(315324),
    C = n(262210),
    R = n(670451),
    P = n(881530),
    w = n(228168),
    D = n(981631),
    L = n(701488),
    x = n(388032),
    M = n(227832);
function k(e, t, n) {
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
function j(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let { user: t, currentUser: n, activity: i, application: k, voiceGuild: U, voiceChannel: B, className: F, onClose: V, appContext: Z } = e,
        { analyticsLocations: H } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: W } = (0, v.z)(),
        Y = { [M.fullSize]: W === w.y0.FULL_SIZE },
        K = (0, h.Z)({
            activity: i,
            user: t
        }),
        z = (0, g.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: K,
            analyticsLocations: H
        }),
        q = (0, E.Z)({
            userId: t.id,
            onAction: z
        }),
        Q = (0, b.Z)(i),
        { largeImage: X, smallImage: J } = (0, _.FO)(i, k),
        $ = (0, P.Z)({
            location: 'UserProfileActivityCard',
            user: t,
            currentUser: n,
            activity: i,
            application: k,
            entry: K,
            onClose: V
        }),
        ee = () => {
            let e = (0, s.Z)(i) ? 'crunchyroll' : 'default';
            return null == $
                ? (0, r.jsx)(p.E, {
                      image: X,
                      smallImage: J,
                      size: p.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: X,
                      smallImage: J,
                      size: p.J.SIZE_60,
                      className: M.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          z({ action: 'PRESS_IMAGE' }), $(e);
                      }
                  });
        },
        et = () => {
            var e;
            return (0, u.Z)(i) && null != B
                ? (0, r.jsxs)('div', {
                      className: M.voiceChannelText,
                      children: [
                          (0, r.jsx)(a.gj8, {
                              size: 'xxs',
                              color: a.TVs.colors.TEXT_NORMAL,
                              className: M.voiceIcon
                          }),
                          (0, r.jsx)(N.Z, {
                              variant: 'heading-sm/semibold',
                              text: B.name
                          })
                      ]
                  })
                : (0, c.Z)(i)
                  ? (0, r.jsx)(N.Z, {
                        variant: 'heading-sm/semibold',
                        text: i.name
                    })
                  : (0, r.jsx)(N.Z, {
                        variant: 'heading-sm/semibold',
                        text: null != (e = i.details) ? e : i.name
                    });
        },
        en = () =>
            (0, u.Z)(i) && null != U
                ? (0, r.jsx)(N.Z, {
                      variant: 'text-xs/normal',
                      text: x.NW.formatToPlainString(x.t['hq/Qzc'], { guildName: U.name }),
                      onClick: () => {
                          (0, m.X)(U.id), z({ action: 'OPEN_VOICE_GUILD' }), null == V || V();
                      }
                  })
                : (0, c.Z)(i)
                  ? (0, r.jsx)(N.Z, {
                        variant: 'text-xs/normal',
                        text: i.details
                    })
                  : (0, r.jsx)(N.Z, {
                        text: i.state,
                        variant: 'text-xs/normal'
                    }),
        er = () => {
            var e;
            return i.type === D.IIU.WATCHING
                ? null
                : (0, c.Z)(i)
                  ? ei()
                  : (0, r.jsx)(N.Z, {
                        text: null == (e = i.assets) ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ei = () => {
            var e, t, n, o;
            return (null == (e = i.party) ? void 0 : e.size) == null && i.application_id === L.Zc
                ? (0, r.jsxs)('div', {
                      className: M.gameState,
                      children: [
                          (0, r.jsx)(N.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(N.Z, {
                              variant: 'text-xs/normal',
                              text: x.NW.formatToPlainString(x.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (o = null == k ? void 0 : k.getMaxParticipants()) ? o : 0
                              })
                          })
                      ]
                  })
                : (0, l.Z)(i) && (null == (t = i.party) ? void 0 : t.size) != null && (null == (n = i.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: M.gameState,
                        children: [
                            (0, r.jsx)(N.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(N.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === i.party.size[1]
                                        ? x.NW.formatToPlainString(x.t.IM4J4e, { count: i.party.size[0] })
                                        : x.NW.formatToPlainString(x.t['u//9Bw'], {
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
            if (!(0, y.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(C.Z, {
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
                      className: M.clickableText,
                      onClick: (e) => {
                          z({ action: 'PRESS_TEXT' }), $(e);
                      },
                      children: [et(), en(), er()]
                  }),
        es = () =>
            null == U || null == B
                ? null
                : (0, r.jsx)(A.Z, {
                      user: t,
                      guild: U,
                      channel: B,
                      onAction: z,
                      onClose: V
                  }),
        el = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(M.actions, Y),
                      children: (0, r.jsx)(O.Z, {
                          activity: i,
                          user: t,
                          onAction: z,
                          onClose: V
                      })
                  });
    return (0, r.jsx)(f.Gt, {
        value: H,
        children: (0, r.jsxs)(S.Z, {
            ref: q,
            className: o()(M.card, F),
            onAction: z,
            onClose: V,
            children: [
                (0, r.jsx)(
                    T.Z,
                    G(j({}, Q), {
                        contextMenu: (0, r.jsx)(R.Z, {
                            display: 'live',
                            user: t,
                            activity: i,
                            entry: K,
                            onClose: V,
                            appContext: Z
                        })
                    })
                ),
                (0, r.jsxs)('div', {
                    className: M.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(M.content, Y),
                            children: [
                                !t.bot && ee(),
                                (0, r.jsxs)('div', {
                                    className: M.details,
                                    children: [
                                        ea(),
                                        !t.bot &&
                                            (0, r.jsx)(I.Z, {
                                                user: t,
                                                activity: i,
                                                className: M.badges
                                            }),
                                        eo()
                                    ]
                                }),
                                W === w.y0.FULL_SIZE && el()
                            ]
                        }),
                        es()
                    ]
                }),
                W !== w.y0.FULL_SIZE && el()
            ]
        })
    });
}
