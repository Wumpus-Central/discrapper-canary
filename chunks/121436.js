t.d(a, { default: () => I });
var s = t(200651);
t(192379);
var d = t(120356),
    n = t.n(d),
    i = t(793030),
    r = t(481060),
    c = t(100527),
    l = t(906732),
    _ = t(313201),
    E = t(703656),
    N = t(594174),
    m = t(63063),
    T = t(111361),
    M = t(197115),
    o = t(943180),
    g = t(553896),
    R = t(848572),
    u = t(787528),
    x = t(474936),
    b = t(981631),
    U = t(388032),
    h = t(837005);
let I = (e) => {
    let { transitionState: a, onClose: t } = e,
        { analyticsLocations: d } = (0, l.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        I = (0, _.Dt)(),
        v = (0, R.j_)(),
        j = (0, R.Rw)(),
        O = N.default.getCurrentUser(),
        P = (0, T.yd)(null == O ? void 0 : O.premiumType, x.p9.TIER_2),
        { version: H } = (0, o.D)(),
        p = v.map((e) => {
            let { id: a, badgeVersion: t, nameUnformatted: d, tenureReqNumMonths: c } = e,
                l = U.intl.string(d),
                _ = (0, u.J)(a),
                E = (0, g.q)(a, c),
                N = (null == j ? void 0 : j.id) === a && 2 === t;
            return (0, s.jsxs)(
                'div',
                {
                    className: n()(h.badge, {
                        [h.badgeV2]: 2 === t,
                        [h.earnedBadge]: N
                    }),
                    children: [
                        (0, s.jsx)('img', {
                            src: _,
                            alt: l,
                            className: h.badgeImage
                        }),
                        (0, s.jsxs)('div', {
                            className: n()(h.badgeText, { [h.badgeTextV2]: 2 === t }),
                            children: [
                                (0, s.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: h.badgeName,
                                    children: l
                                }),
                                (0, s.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: E
                                }),
                                N && (0, s.jsx)(r.kmB, {})
                            ]
                        })
                    ]
                },
                a
            );
        }),
        B = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(i.xv, {
                    variant: 'display-md',
                    className: h.header,
                    children: U.intl.string(U.t['rmUN7+'])
                }),
                (0, s.jsx)(i.xv, {
                    variant: 'text-md/medium',
                    className: h.subHeader,
                    children: U.intl.string(U.t.OI50am)
                }),
                (0, s.jsx)('div', {
                    className: h.badgeList,
                    children: p
                })
            ]
        }),
        f = P
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(i.xv, {
                          variant: 'display-md',
                          className: h.header,
                          children: U.intl.string(U.t.Og62j4)
                      }),
                      (0, s.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: h.subHeader,
                          children: U.intl.string(U.t['IdAP9/'])
                      }),
                      (0, s.jsx)('div', {
                          className: h.badgeList,
                          children: p
                      })
                  ]
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(i.xv, {
                          variant: 'display-md',
                          className: h.header,
                          children: U.intl.string(U.t.RtGeFR)
                      }),
                      (0, s.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: h.subHeader,
                          children: U.intl.format(U.t.ffatnZ, {
                              onClick: () => {
                                  (0, E.uL)(b.Z5c.APPLICATION_STORE, {
                                      source: c.Z.TIERED_TENURE_BADGES_MODAL,
                                      sourceLocationStack: d
                                  }),
                                      null == t || t();
                              },
                              helpdeskArticle: m.Z.getArticleURL(b.BhN.TIERED_TENURE_BADGES)
                          })
                      }),
                      (0, s.jsx)('div', {
                          className: h.badgeList,
                          children: p
                      }),
                      (0, s.jsx)(M.Z, {
                          className: h.subscribeButton,
                          premiumModalAnalyticsLocation: { page: b.ZY5.TIERED_TENURE_BADGES_MODAL },
                          buttonText: U.intl.string(U.t.JST6jo),
                          subscriptionTier: x.Si.TIER_2,
                          showGradient: !0
                      })
                  ]
              });
    return (0, s.jsxs)(r.Y0X, {
        transitionState: a,
        'aria-labelledby': I,
        className: n()(h.container, 'theme-dark'),
        children: [
            (0, s.jsx)(r.olH, {
                onClick: t,
                className: h.closeButton
            }),
            (0, s.jsx)(r.hzk, {
                className: h.content,
                children: 2 === H ? f : B
            })
        ]
    });
};
