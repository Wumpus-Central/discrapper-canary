n.d(t, { Z: () => K });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(278074),
    s = n(481060),
    l = n(394821),
    c = n(841784),
    u = n(833664),
    d = n(420660),
    f = n(100527),
    p = n(906732),
    _ = n(499254),
    h = n(827498),
    m = n(541716),
    g = n(379357),
    E = n(358696),
    v = n(649700),
    b = n(810568),
    y = n(168524),
    O = n(769654),
    S = n(960870),
    I = n(139793),
    T = n(994746),
    N = n(232174),
    A = n(652853),
    C = n(979038),
    R = n(448980),
    P = n(336383),
    w = n(194811),
    D = n(373826),
    x = n(315324),
    L = n(262210),
    M = n(103479),
    k = n(670451),
    j = n(553375),
    U = n(228168),
    G = n(981631),
    B = n(701488),
    Z = n(388032),
    F = n(481736);
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    let { user: t, currentUser: n, activity: i, application: V, voiceGuild: W, voiceChannel: K, className: z, onClose: q, appContext: Q } = e,
        { analyticsLocations: X } = (0, p.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: J } = (0, A.z)(),
        $ = { [F.fullSize]: J === U.y0.FULL_SIZE },
        ee = (0, v.Z)({
            activity: i,
            user: t
        }),
        et = (0, y.Z)(
            H(
                {
                    location: 'UserProfileActivityCard',
                    source: b.m1.UserProfile,
                    trackEntryPointImpression: !0
                },
                (0, j.nK)({
                    user: t,
                    activity: i,
                    entry: ee
                })
            )
        ),
        en = (0, S.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: ee,
            analyticsLocations: X
        }),
        er = (0, I.Z)({
            userId: t.id,
            onAction: en
        }),
        ei = () => {
            null != V && (null == q || q(), _.__(h._b.TEXT, m.Ie.NORMAL, { applicationId: V.id }));
        },
        eo = (0, T.Z)(i),
        { largeImage: ea, smallImage: es } = (0, g.FO)(i, V),
        el = (0, a.EQ)(i)
            .when(c.Z, () => (null != V ? ei : void 0))
            .when(u.Z, () => et)
            .when(l.Z, () => {
                if (t.id !== n.id)
                    return () =>
                        (0, M.s)({
                            activity: i,
                            user: t,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ec = () => {
            let e = (0, l.Z)(i) ? 'crunchyroll' : 'default';
            return null == el
                ? (0, r.jsx)(E.E, {
                      image: ea,
                      smallImage: es,
                      size: E.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(E.E, {
                      image: ea,
                      smallImage: es,
                      size: E.J.SIZE_60,
                      className: F.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          en({ action: 'PRESS_IMAGE' }), el(e);
                      }
                  });
        },
        eu = () => {
            var e;
            return (0, d.Z)(i) && null != K
                ? (0, r.jsxs)('div', {
                      className: F.voiceChannelText,
                      children: [
                          (0, r.jsx)(s.gj8, {
                              size: 'xxs',
                              color: s.TVs.colors.TEXT_NORMAL,
                              className: F.voiceIcon
                          }),
                          (0, r.jsx)(D.Z, {
                              variant: 'heading-sm/semibold',
                              text: K.name
                          })
                      ]
                  })
                : (0, u.Z)(i)
                  ? (0, r.jsx)(D.Z, {
                        variant: 'heading-sm/semibold',
                        text: i.name
                    })
                  : (0, r.jsx)(D.Z, {
                        variant: 'heading-sm/semibold',
                        text: null !== (e = i.details) && void 0 !== e ? e : i.name
                    });
        },
        ed = () =>
            (0, d.Z)(i) && null != W
                ? (0, r.jsx)(D.Z, {
                      variant: 'text-xs/normal',
                      text: Z.NW.formatToPlainString(Z.t['hq/Qzc'], { guildName: W.name }),
                      onClick: () => {
                          (0, O.X)(W.id), en({ action: 'OPEN_VOICE_GUILD' }), null == q || q();
                      }
                  })
                : (0, u.Z)(i)
                  ? (0, r.jsx)(D.Z, {
                        variant: 'text-xs/normal',
                        text: i.details
                    })
                  : (0, r.jsx)(D.Z, {
                        text: i.state,
                        variant: 'text-xs/normal'
                    }),
        ef = () => {
            var e;
            return i.type === G.IIU.WATCHING
                ? null
                : (0, u.Z)(i)
                  ? ep()
                  : (0, r.jsx)(D.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ep = () => {
            var e, t, n, o;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === B.Zc
                ? (0, r.jsxs)('div', {
                      className: F.gameState,
                      children: [
                          (0, r.jsx)(D.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(D.Z, {
                              variant: 'text-xs/normal',
                              text: Z.NW.formatToPlainString(Z.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (o = null == V ? void 0 : V.getMaxParticipants()) && void 0 !== o ? o : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: F.gameState,
                        children: [
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === i.party.size[1]
                                        ? Z.NW.formatToPlainString(Z.t.IM4J4e, { count: i.party.size[0] })
                                        : Z.NW.formatToPlainString(Z.t['u//9Bw'], {
                                              count: i.party.size[0],
                                              max: i.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(D.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        e_ = () => {
            if (!(0, N.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(L.Z, {
                start: e,
                end: t
            });
        },
        eh = () =>
            null == el
                ? (0, r.jsxs)('div', {
                      children: [eu(), ed(), ef()]
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: F.clickableText,
                      onClick: (e) => {
                          en({ action: 'PRESS_TEXT' }), el(e);
                      },
                      children: [eu(), ed(), ef()]
                  }),
        em = () =>
            null == W || null == K
                ? null
                : (0, r.jsx)(x.Z, {
                      user: t,
                      guild: W,
                      channel: K,
                      onAction: en,
                      onClose: q
                  }),
        eg = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(F.actions, $),
                      children: (0, r.jsx)(C.Z, {
                          activity: i,
                          user: t,
                          onAction: en,
                          onClose: q
                      })
                  });
    return (0, r.jsx)(p.Gt, {
        value: X,
        children: (0, r.jsxs)(P.Z, {
            ref: er,
            className: o()(F.card, z),
            onAction: en,
            onClose: q,
            children: [
                (0, r.jsx)(
                    w.Z,
                    Y(H({}, eo), {
                        contextMenu: (0, r.jsx)(k.Z, {
                            display: 'live',
                            user: t,
                            activity: i,
                            entry: ee,
                            onClose: q,
                            appContext: Q
                        })
                    })
                ),
                (0, r.jsxs)('div', {
                    className: F.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(F.content, $),
                            children: [
                                !t.bot && ec(),
                                (0, r.jsxs)('div', {
                                    className: F.details,
                                    children: [
                                        eh(),
                                        !t.bot &&
                                            (0, r.jsx)(R.Z, {
                                                user: t,
                                                activity: i,
                                                className: F.badges
                                            }),
                                        e_()
                                    ]
                                }),
                                J === U.y0.FULL_SIZE && eg()
                            ]
                        }),
                        em()
                    ]
                }),
                J !== U.y0.FULL_SIZE && eg()
            ]
        })
    });
}
