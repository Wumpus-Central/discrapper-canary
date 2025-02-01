s.d(a, { default: () => h });
var t = s(200651);
s(192379);
var d = s(120356),
    n = s.n(d),
    i = s(793030),
    r = s(481060),
    c = s(100527),
    l = s(906732),
    _ = s(313201),
    E = s(703656),
    N = s(594174),
    m = s(111361),
    T = s(197115),
    M = s(943180),
    o = s(553896),
    g = s(848572),
    u = s(787528),
    x = s(474936),
    R = s(981631),
    b = s(388032),
    U = s(837005);
let h = (e) => {
    let { transitionState: a, onClose: s } = e,
        { analyticsLocations: d } = (0, l.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        h = (0, _.Dt)(),
        I = (0, g.j_)(),
        v = (0, g.Rw)(),
        j = N.default.getCurrentUser(),
        O = (0, m.yd)(null == j ? void 0 : j.premiumType, x.p9.TIER_2),
        { version: P } = (0, M.D)(),
        H = I.map((e) => {
            let { id: a, badgeVersion: s, nameUnformatted: d, tenureReqNumMonths: c } = e,
                l = b.intl.string(d),
                _ = (0, u.J)(a),
                E = (0, o.q)(a, c),
                N = (null == v ? void 0 : v.id) === a && 2 === s;
            return (0, t.jsxs)(
                'div',
                {
                    className: n()(U.badge, {
                        [U.badgeV2]: 2 === s,
                        [U.earnedBadge]: N
                    }),
                    children: [
                        (0, t.jsx)('img', {
                            src: _,
                            alt: l,
                            className: U.badgeImage
                        }),
                        (0, t.jsxs)('div', {
                            className: n()(U.badgeText, { [U.badgeTextV2]: 2 === s }),
                            children: [
                                (0, t.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: U.badgeName,
                                    children: l
                                }),
                                (0, t.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: E
                                }),
                                N && (0, t.jsx)(r.kmB, {})
                            ]
                        })
                    ]
                },
                a
            );
        }),
        p = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(i.xv, {
                    variant: 'display-md',
                    className: U.header,
                    children: b.intl.string(b.t['rmUN7+'])
                }),
                (0, t.jsx)(i.xv, {
                    variant: 'text-md/medium',
                    className: U.subHeader,
                    children: b.intl.string(b.t.OI50am)
                }),
                (0, t.jsx)('div', {
                    className: U.badgeList,
                    children: H
                })
            ]
        }),
        f = O
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(i.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: b.intl.string(b.t.Og62j4)
                      }),
                      (0, t.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: b.intl.string(b.t['IdAP9/'])
                      }),
                      (0, t.jsx)('div', {
                          className: U.badgeList,
                          children: H
                      })
                  ]
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(i.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: b.intl.string(b.t.RtGeFR)
                      }),
                      (0, t.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: b.intl.format(b.t.ffatnZ, {
                              onClick: () => {
                                  (0, E.uL)(R.Z5c.APPLICATION_STORE, {
                                      source: c.Z.TIERED_TENURE_BADGES_MODAL,
                                      sourceLocationStack: d
                                  }),
                                      null == s || s();
                              }
                          })
                      }),
                      (0, t.jsx)('div', {
                          className: U.badgeList,
                          children: H
                      }),
                      (0, t.jsx)(T.Z, {
                          className: U.subscribeButton,
                          premiumModalAnalyticsLocation: { page: R.ZY5.TIERED_TENURE_BADGES_MODAL },
                          buttonText: b.intl.string(b.t.JST6jo),
                          subscriptionTier: x.Si.TIER_2,
                          showGradient: !0
                      })
                  ]
              });
    return (0, t.jsxs)(r.Y0X, {
        transitionState: a,
        'aria-labelledby': h,
        className: n()(U.container, 'theme-dark'),
        children: [
            (0, t.jsx)(r.olH, {
                onClick: s,
                className: U.closeButton
            }),
            (0, t.jsx)(r.hzk, {
                className: U.content,
                children: 2 === P ? f : p
            })
        ]
    });
};
