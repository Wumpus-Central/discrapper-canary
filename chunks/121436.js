t.d(n, { default: () => j });
var l = t(255367);
t(73800);
var r = t(120356),
    a = t.n(r),
    i = t(793030),
    u = t(755721),
    d = t(481060),
    s = t(100527),
    o = t(906732),
    c = t(313201),
    m = t(703656),
    g = t(594174),
    v = t(111361),
    b = t(784238),
    f = t(176237),
    _ = t(553896),
    p = t(848572),
    E = t(787528),
    x = t(474936),
    N = t(981631),
    T = t(388032),
    O = t(840052);
let j = (e) => {
    var n, t;
    let { transitionState: r, onClose: j, displayProfile: h } = e,
        { analyticsLocations: S } = (0, o.ZP)(s.Z.TIERED_TENURE_BADGES_MODAL),
        M = (0, c.Dt)(),
        P = Object.values(x.vK),
        R = (0, p.SI)(null == h ? void 0 : h.userId),
        U = (0, p.Rw)(),
        I = g.default.getCurrentUser(),
        y = null != (t = (0, p.a1)(null != (n = null == h ? void 0 : h.userId) ? n : null == I ? void 0 : I.id)) ? t : new Date(),
        Z = (0, v.yd)(null == I ? void 0 : I.premiumType, x.p9.TIER_2),
        B = P.map((e) => {
            let { id: n, nameUnformatted: t, tenureReqNumMonths: r } = e,
                u = T.intl.string(t),
                d = (0, E.J)(n),
                s = (0, _.q)(n, r),
                o = null == h,
                c = o && (null == U ? void 0 : U.id) === n,
                m = !o && (null == R ? void 0 : R.id) === n,
                g = c && (null == U ? void 0 : U.status) === p.Vq.EARNED,
                v = c && (null == U ? void 0 : U.status) === p.Vq.UPCOMING,
                b = m || g;
            return (0, l.jsxs)(
                'div',
                {
                    className: a()(O.badge, { [O.earnedBadge]: b || v }),
                    children: [
                        (0, l.jsx)('img', {
                            src: d,
                            alt: u,
                            className: O.badgeImage
                        }),
                        (0, l.jsxs)('div', {
                            className: O.badgeText,
                            children: [
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: O.badgeName,
                                    children: u
                                }),
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: s
                                }),
                                b &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: O.earnedBadgeSubSince,
                                        children: T.intl.formatToPlainString(T.t.Hu4jfn, { date: y })
                                    }),
                                v &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: O.earnedBadgeSubSince,
                                        children: T.intl.formatToPlainString(T.t.PPL1Ii, { days: null == U ? void 0 : U.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                n
            );
        }),
        A = () => {
            ((0, m.uL)(N.Z5c.APPLICATION_STORE, {
                source: s.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: S
            }),
                null == j || j());
        },
        { enabled: D } = f.$.useExperiment({ location: 'evolving_tenure_badge_modal_web' }, { autoTrackExposure: !1 });
    return (0, l.jsxs)(d.Y0X, {
        transitionState: r,
        'aria-labelledby': M,
        className: a()(O.container, 'theme-dark'),
        parentComponent: 'EvolvingTenureBadgeModal',
        children: [
            (0, l.jsx)(d.olH, {
                onClick: j,
                className: O.closeButton
            }),
            (0, l.jsxs)(d.hzk, {
                className: O.content,
                children: [
                    Z
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(i.xv, {
                                      variant: 'display-md',
                                      className: O.header,
                                      children: T.intl.string(T.t.Og62j4)
                                  }),
                                  (0, l.jsx)(i.xv, {
                                      variant: 'text-md/medium',
                                      className: O.subHeader,
                                      children: T.intl.string(T.t['IdAP9/'])
                                  }),
                                  (0, l.jsx)('div', {
                                      className: O.badgeList,
                                      children: B
                                  }),
                                  null != h &&
                                      h.userId !== (null == I ? void 0 : I.id) &&
                                      (0, l.jsx)(d.gtL, {
                                          className: O.learnMoreButton,
                                          onClick: A,
                                          children: T.intl.string(T.t.hvVgAQ)
                                      })
                              ]
                          })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(i.xv, {
                                      variant: 'display-md',
                                      className: O.header,
                                      children: T.intl.string(T.t.RtGeFR)
                                  }),
                                  (0, l.jsx)(i.xv, {
                                      variant: 'text-md/medium',
                                      className: O.subHeader,
                                      children: T.intl.format(T.t.ffatnZ, { onClick: A })
                                  }),
                                  (0, l.jsx)('div', {
                                      className: O.badgeList,
                                      children: B
                                  }),
                                  (0, l.jsx)(b.Z, {
                                      className: O.subscribeButton,
                                      premiumModalAnalyticsLocation: { page: N.ZY5.TIERED_TENURE_BADGES_MODAL },
                                      textOptions: { subscribeText: T.intl.string(T.t.JST6jo) },
                                      subscriptionTier: x.Si.TIER_2,
                                      showGradient: !0,
                                      color: u.Tt.BRAND
                                  })
                              ]
                          }),
                    D && (0, l.jsx)(() => (f.D.useConfig({ location: 'evolving_tenure_badge_modal_web' }), (0, l.jsx)(l.Fragment, {})), {})
                ]
            })
        ]
    });
};
