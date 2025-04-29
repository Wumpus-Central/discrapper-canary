n.d(t, { default: () => h });
var a = n(255367);
n(73800);
var r = n(120356),
    i = n.n(r),
    l = n(793030),
    s = n(481060),
    d = n(100527),
    u = n(906732),
    o = n(313201),
    c = n(703656),
    g = n(594174),
    m = n(111361),
    E = n(409100),
    x = n(176237),
    _ = n(553896),
    f = n(848572),
    v = n(787528),
    b = n(474936),
    p = n(981631),
    N = n(388032),
    T = n(840052);
let h = (e) => {
    var t, n;
    let { transitionState: r, onClose: h, displayProfile: I } = e,
        { analyticsLocations: M } = (0, u.ZP)(d.Z.TIERED_TENURE_BADGES_MODAL),
        U = (0, o.Dt)(),
        C = Object.values(b.vK),
        R = (0, f.SI)(null == I ? void 0 : I.userId),
        S = (0, f.Rw)(),
        j = g.default.getCurrentUser(),
        O = null != (n = (0, f.a1)(null != (t = null == I ? void 0 : I.userId) ? t : null == j ? void 0 : j.id)) ? n : new Date(),
        P = (0, m.yd)(null == j ? void 0 : j.premiumType, b.p9.TIER_2),
        A = C.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: r } = e,
                s = N.intl.string(n),
                d = (0, v.J)(t),
                u = (0, _.q)(t, r),
                o = null == I,
                c = o && (null == S ? void 0 : S.id) === t,
                g = !o && (null == R ? void 0 : R.id) === t,
                m = c && (null == S ? void 0 : S.status) === f.Vq.EARNED,
                E = c && (null == S ? void 0 : S.status) === f.Vq.UPCOMING,
                x = g || m;
            return (0, a.jsxs)(
                'div',
                {
                    className: i()(T.badge, { [T.earnedBadge]: x || E }),
                    children: [
                        (0, a.jsx)('img', {
                            src: d,
                            alt: s,
                            className: T.badgeImage
                        }),
                        (0, a.jsxs)('div', {
                            className: T.badgeText,
                            children: [
                                (0, a.jsx)(l.xv, {
                                    variant: 'text-md/semibold',
                                    className: T.badgeName,
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
                                        className: T.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.Hu4jfn, { date: O })
                                    }),
                                E &&
                                    (0, a.jsx)(l.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: T.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.PPL1Ii, { days: null == S ? void 0 : S.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                t
            );
        }),
        k = () => {
            (0, c.uL)(p.Z5c.APPLICATION_STORE, {
                source: d.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: M
            }),
                null == h || h();
        },
        { enabled: Z } = (0, x.w)({ location: 'evolving_tenure_badge_modal_web' });
    return (0, a.jsxs)(s.Y0X, {
        transitionState: r,
        'aria-labelledby': U,
        className: i()(T.container, 'theme-dark'),
        children: [
            (0, a.jsx)(s.olH, {
                onClick: h,
                className: T.closeButton
            }),
            (0, a.jsxs)(s.hzk, {
                className: T.content,
                children: [
                    P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(l.xv, {
                                      variant: 'display-md',
                                      className: T.header,
                                      children: N.intl.string(N.t.Og62j4)
                                  }),
                                  (0, a.jsx)(l.xv, {
                                      variant: 'text-md/medium',
                                      className: T.subHeader,
                                      children: N.intl.string(N.t['IdAP9/'])
                                  }),
                                  (0, a.jsx)('div', {
                                      className: T.badgeList,
                                      children: A
                                  }),
                                  null != I &&
                                      I.userId !== (null == j ? void 0 : j.id) &&
                                      (0, a.jsx)(s.gtL, {
                                          className: T.learnMoreButton,
                                          onClick: k,
                                          children: N.intl.string(N.t.hvVgAQ)
                                      })
                              ]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(l.xv, {
                                      variant: 'display-md',
                                      className: T.header,
                                      children: N.intl.string(N.t.RtGeFR)
                                  }),
                                  (0, a.jsx)(l.xv, {
                                      variant: 'text-md/medium',
                                      className: T.subHeader,
                                      children: N.intl.format(N.t.ffatnZ, { onClick: k })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: T.badgeList,
                                      children: A
                                  }),
                                  (0, a.jsx)(E.Z, {
                                      className: T.subscribeButton,
                                      premiumModalAnalyticsLocation: { page: p.ZY5.TIERED_TENURE_BADGES_MODAL },
                                      subscribeButtonText: N.intl.string(N.t.JST6jo),
                                      subscriptionTier: b.Si.TIER_2,
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
