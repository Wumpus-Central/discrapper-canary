n.r(t);
var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(793030),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(313201),
    _ = n(703656),
    E = n(594174),
    o = n(111361),
    N = n(471309),
    M = n(197115),
    T = n(553896),
    b = n(848572),
    f = n(787528),
    R = n(474936),
    m = n(981631),
    g = n(388032),
    U = n(837005);
t.default = (e) => {
    let { transitionState: t, onClose: n } = e,
        { analyticsLocations: a } = (0, u.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        x = (0, d.Dt)(),
        v = (0, b.j_)(),
        p = E.default.getCurrentUser(),
        P = (0, o.yd)(null == p ? void 0 : p.premiumType, R.p9.TIER_2),
        { version: I } = (0, N.Z)(),
        O = v.map((e) => {
            let { id: t, badgeVersion: n, nameUnformatted: a, tenureReqNumMonths: l } = e,
                c = g.intl.string(a),
                u = (0, f.J)(t),
                d = (0, T.q)(t, l);
            return (0, s.jsxs)(
                'div',
                {
                    className: r()(U.badge, { [U.badgeV2]: 2 === n }),
                    children: [
                        (0, s.jsx)('img', {
                            src: u,
                            alt: c,
                            className: U.badgeImage
                        }),
                        (0, s.jsxs)('div', {
                            className: r()(U.badgeText, { [U.badgeTextV2]: 2 === n }),
                            children: [
                                (0, s.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: U.badgeName,
                                    children: c
                                }),
                                (0, s.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: d
                                })
                            ]
                        })
                    ]
                },
                t
            );
        }),
        h = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(i.xv, {
                    variant: 'display-md',
                    className: U.header,
                    children: g.intl.string(g.t['rmUN7+'])
                }),
                (0, s.jsx)(i.xv, {
                    variant: 'text-md/medium',
                    className: U.subHeader,
                    children: g.intl.string(g.t.OI50am)
                }),
                (0, s.jsx)('div', {
                    className: U.badgeList,
                    children: O
                })
            ]
        }),
        H = P
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(i.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: g.intl.string(g.t.Og62j4)
                      }),
                      (0, s.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: g.intl.string(g.t['IdAP9/'])
                      }),
                      (0, s.jsx)('div', {
                          className: U.badgeList,
                          children: O
                      })
                  ]
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(i.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: g.intl.string(g.t.RtGeFR)
                      }),
                      (0, s.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: g.intl.format(g.t.ffatnZ, {
                              onClick: () => {
                                  (0, _.uL)(m.Z5c.APPLICATION_STORE, {
                                      source: c.Z.TIERED_TENURE_BADGES_MODAL,
                                      sourceLocationStack: a
                                  }),
                                      null == n || n();
                              }
                          })
                      }),
                      (0, s.jsx)('div', {
                          className: U.badgeList,
                          children: O
                      }),
                      (0, s.jsx)(M.Z, {
                          className: U.subscribeButton,
                          premiumModalAnalyticsLocation: { page: m.ZY5.TIERED_TENURE_BADGES_MODAL },
                          buttonText: g.intl.string(g.t.JST6jo),
                          subscriptionTier: R.Si.TIER_2,
                          showGradient: !0
                      })
                  ]
              });
    return (0, s.jsxs)(l.ModalRoot, {
        transitionState: t,
        'aria-labelledby': x,
        className: r()(U.container, 'theme-dark'),
        children: [
            (0, s.jsx)(l.ModalCloseButton, {
                onClick: n,
                className: U.closeButton
            }),
            (0, s.jsx)(l.ModalContent, {
                className: U.content,
                children: 2 === I ? H : h
            })
        ]
    });
};
