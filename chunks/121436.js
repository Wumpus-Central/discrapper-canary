t.r(a);
var s = t(200651);
t(192379);
var n = t(120356),
    i = t.n(n),
    r = t(793030),
    d = t(481060),
    c = t(100527),
    l = t(906732),
    _ = t(313201),
    E = t(703656),
    N = t(594174),
    m = t(111361),
    o = t(471309),
    M = t(197115),
    T = t(553896),
    b = t(848572),
    u = t(787528),
    R = t(474936),
    g = t(981631),
    x = t(388032),
    U = t(837005);
a.default = (e) => {
    let { transitionState: a, onClose: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        h = (0, _.Dt)(),
        I = (0, b.j_)(),
        f = N.default.getCurrentUser(),
        v = (0, m.yd)(null == f ? void 0 : f.premiumType, R.p9.TIER_2),
        { version: j } = (0, o.Z)(),
        O = I.map((e) => {
            let { id: a, badgeVersion: t, nameUnformatted: n, tenureReqNumMonths: d } = e,
                c = x.intl.string(n),
                l = (0, u.J)(a),
                _ = (0, T.q)(a, d);
            return (0, s.jsxs)(
                'div',
                {
                    className: i()(U.badge, { [U.badgeV2]: 2 === t }),
                    children: [
                        (0, s.jsx)('img', {
                            src: l,
                            alt: c,
                            className: U.badgeImage
                        }),
                        (0, s.jsxs)('div', {
                            className: i()(U.badgeText, { [U.badgeTextV2]: 2 === t }),
                            children: [
                                (0, s.jsx)(r.xv, {
                                    variant: 'text-md/semibold',
                                    className: U.badgeName,
                                    children: c
                                }),
                                (0, s.jsx)(r.xv, {
                                    variant: 'text-xs/normal',
                                    children: _
                                })
                            ]
                        })
                    ]
                },
                a
            );
        }),
        P = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(r.xv, {
                    variant: 'display-md',
                    className: U.header,
                    children: x.intl.string(x.t['rmUN7+'])
                }),
                (0, s.jsx)(r.xv, {
                    variant: 'text-md/medium',
                    className: U.subHeader,
                    children: x.intl.string(x.t.OI50am)
                }),
                (0, s.jsx)('div', {
                    className: U.badgeList,
                    children: O
                })
            ]
        }),
        H = v
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(r.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: x.intl.string(x.t.Og62j4)
                      }),
                      (0, s.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: x.intl.string(x.t['IdAP9/'])
                      }),
                      (0, s.jsx)('div', {
                          className: U.badgeList,
                          children: O
                      })
                  ]
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(r.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: x.intl.string(x.t.RtGeFR)
                      }),
                      (0, s.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: x.intl.format(x.t.ffatnZ, {
                              onClick: () => {
                                  (0, E.uL)(g.Z5c.APPLICATION_STORE, {
                                      source: c.Z.TIERED_TENURE_BADGES_MODAL,
                                      sourceLocationStack: n
                                  }),
                                      null == t || t();
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
                          buttonText: x.intl.string(x.t.JST6jo),
                          subscriptionTier: R.Si.TIER_2,
                          showGradient: !0
                      })
                  ]
              });
    return (0, s.jsxs)(d.ModalRoot, {
        transitionState: a,
        'aria-labelledby': h,
        className: i()(U.container, 'theme-dark'),
        children: [
            (0, s.jsx)(d.ModalCloseButton, {
                onClick: t,
                className: U.closeButton
            }),
            (0, s.jsx)(d.ModalContent, {
                className: U.content,
                children: 2 === j ? H : P
            })
        ]
    });
};
