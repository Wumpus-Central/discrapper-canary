n.d(t, { default: () => T });
var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(793030),
    s = n(481060),
    d = n(100527),
    u = n(906732),
    o = n(313201),
    c = n(703656),
    g = n(594174),
    E = n(111361),
    m = n(409100),
    x = n(176237),
    _ = n(553896),
    v = n(848572),
    f = n(787528),
    p = n(474936),
    b = n(981631),
    N = n(388032),
    h = n(840052);
let T = (e) => {
    var t, n;
    let { transitionState: i, onClose: T, displayProfile: I } = e,
        { analyticsLocations: C } = (0, u.ZP)(d.Z.TIERED_TENURE_BADGES_MODAL),
        M = (0, o.Dt)(),
        U = Object.values(p.vK),
        R = (0, v.SI)(null == I ? void 0 : I.userId),
        O = (0, v.Rw)(),
        S = g.default.getCurrentUser(),
        j = null != (n = (0, v.a1)(null != (t = null == I ? void 0 : I.userId) ? t : null == S ? void 0 : S.id)) ? n : new Date(),
        P = (0, E.yd)(null == S ? void 0 : S.premiumType, p.p9.TIER_2),
        k = U.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: i } = e,
                s = N.intl.string(n),
                d = (0, f.J)(t),
                u = (0, _.q)(t, i),
                o = null == I,
                c = o && (null == O ? void 0 : O.id) === t,
                g = !o && (null == R ? void 0 : R.id) === t,
                E = c && (null == O ? void 0 : O.status) === v.Vq.EARNED,
                m = c && (null == O ? void 0 : O.status) === v.Vq.UPCOMING,
                x = g || E;
            return (0, a.jsxs)(
                'div',
                {
                    className: r()(h.badge, { [h.earnedBadge]: x || m }),
                    children: [
                        (0, a.jsx)('img', {
                            src: d,
                            alt: s,
                            className: h.badgeImage
                        }),
                        (0, a.jsxs)('div', {
                            className: h.badgeText,
                            children: [
                                (0, a.jsx)(l.xv, {
                                    variant: 'text-md/semibold',
                                    className: h.badgeName,
                                    children: s
                                }),
                                (0, a.jsx)(l.xv, {
                                    variant: 'text-xs/normal',
                                    children: u
                                }),
                                x &&
                                    (0, a.jsx)(l.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: h.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.Hu4jfn, { date: j })
                                    }),
                                m &&
                                    (0, a.jsx)(l.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: h.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.PPL1Ii, { days: null == O ? void 0 : O.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                t
            );
        }),
        A = () => {
            (0, c.uL)(b.Z5c.APPLICATION_STORE, {
                source: d.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: C
            }),
                null == T || T();
        },
        { enabled: Z } = (0, x.w)({ location: 'evolving_tenure_badge_modal_web' });
    return (0, a.jsxs)(s.Y0X, {
        transitionState: i,
        'aria-labelledby': M,
        className: r()(h.container, 'theme-dark'),
        children: [
            (0, a.jsx)(s.olH, {
                onClick: T,
                className: h.closeButton
            }),
            (0, a.jsxs)(s.hzk, {
                className: h.content,
                children: [
                    P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(l.xv, {
                                      variant: 'display-md',
                                      className: h.header,
                                      children: N.intl.string(N.t.Og62j4)
                                  }),
                                  (0, a.jsx)(l.xv, {
                                      variant: 'text-md/medium',
                                      className: h.subHeader,
                                      children: N.intl.string(N.t['IdAP9/'])
                                  }),
                                  (0, a.jsx)('div', {
                                      className: h.badgeList,
                                      children: k
                                  }),
                                  null != I &&
                                      I.userId !== (null == S ? void 0 : S.id) &&
                                      (0, a.jsx)(s.gtL, {
                                          className: h.learnMoreButton,
                                          onClick: A,
                                          children: N.intl.string(N.t.hvVgAQ)
                                      })
                              ]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(l.xv, {
                                      variant: 'display-md',
                                      className: h.header,
                                      children: N.intl.string(N.t.RtGeFR)
                                  }),
                                  (0, a.jsx)(l.xv, {
                                      variant: 'text-md/medium',
                                      className: h.subHeader,
                                      children: N.intl.format(N.t.ffatnZ, { onClick: A })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: h.badgeList,
                                      children: k
                                  }),
                                  (0, a.jsx)(m.Z, {
                                      className: h.subscribeButton,
                                      premiumModalAnalyticsLocation: { page: b.ZY5.TIERED_TENURE_BADGES_MODAL },
                                      subscribeButtonText: N.intl.string(N.t.JST6jo),
                                      subscriptionTier: p.Si.TIER_2,
                                      showGradient: !0
                                  })
                              ]
                          }),
                    Z && (0, a.jsx)(() => ((0, x.x)({ location: 'evolving_tenure_badge_modal_web' }), (0, a.jsx)(a.Fragment, {})), {})
                ]
            })
        ]
    });
};
