n.r(t);
var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(793030),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(313201),
    _ = n(703656),
    o = n(594174),
    E = n(111361),
    N = n(471309),
    M = n(197115),
    T = n(553896),
    f = n(848572),
    b = n(787528),
    R = n(474936),
    g = n(981631),
    m = n(388032),
    U = n(837005);
t.default = (e) => {
    let { transitionState: t, onClose: n } = e,
        { analyticsLocations: a } = (0, c.ZP)(u.Z.TIERED_TENURE_BADGES_MODAL),
        x = (0, d.Dt)(),
        v = (0, f.j_)(),
        p = o.default.getCurrentUser(),
        P = (0, E.yd)(null == p ? void 0 : p.premiumType, R.p9.TIER_2),
        { version: I } = (0, N.Z)(),
        O = v.map((e) => {
            let { id: t, badgeVersion: n, nameUnformatted: a, tenureReqNumMonths: l } = e,
                u = m.intl.string(a),
                c = (0, b.J)(t),
                d = (0, T.q)(t, l);
            return (0, s.jsxs)(
                'div',
                {
                    className: r()(U.badge, { [U.badgeV2]: 2 === n }),
                    children: [
                        (0, s.jsx)('img', {
                            src: c,
                            alt: u,
                            className: U.badgeImage
                        }),
                        (0, s.jsxs)('div', {
                            className: r()(U.badgeText, { [U.badgeTextV2]: 2 === n }),
                            children: [
                                (0, s.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: U.badgeName,
                                    children: u
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
                    children: m.intl.string(m.t['rmUN7+'])
                }),
                (0, s.jsx)(i.xv, {
                    variant: 'text-md/medium',
                    className: U.subHeader,
                    children: m.intl.string(m.t.OI50am)
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
                          children: m.intl.string(m.t.Og62j4)
                      }),
                      (0, s.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: m.intl.string(m.t['IdAP9/'])
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
                          children: m.intl.string(m.t.RtGeFR)
                      }),
                      (0, s.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: m.intl.format(m.t.ffatnZ, {
                              onClick: () => {
                                  (0, _.uL)(g.Z5c.APPLICATION_STORE, {
                                      source: u.Z.TIERED_TENURE_BADGES_MODAL,
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
                          premiumModalAnalyticsLocation: { page: g.ZY5.TIERED_TENURE_BADGES_MODAL },
                          buttonText: m.intl.string(m.t.JST6jo),
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
