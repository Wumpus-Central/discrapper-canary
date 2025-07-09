n.d(t, { default: () => O });
var l = n(255367);
n(73800);
var r = n(120356),
    a = n.n(r),
    i = n(793030),
    u = n(755721),
    s = n(481060),
    d = n(100527),
    c = n(906732),
    o = n(313201),
    m = n(703656),
    g = n(594174),
    b = n(111361),
    v = n(784238),
    f = n(176237),
    _ = n(553896),
    p = n(848572),
    E = n(787528),
    x = n(474936),
    N = n(981631),
    T = n(388032),
    j = n(840052);
let O = (e) => {
    var t, n;
    let { transitionState: r, onClose: O, displayProfile: h } = e,
        { analyticsLocations: S } = (0, c.ZP)(d.Z.TIERED_TENURE_BADGES_MODAL),
        M = (0, o.Dt)(),
        P = Object.values(x.vK),
        R = (0, p.SI)(null == h ? void 0 : h.userId),
        U = (0, p.Rw)(),
        y = g.default.getCurrentUser(),
        I = null != (n = (0, p.a1)(null != (t = null == h ? void 0 : h.userId) ? t : null == y ? void 0 : y.id)) ? n : new Date(),
        B = (0, b.yd)(null == y ? void 0 : y.premiumType, x.p9.TIER_2),
        D = P.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: r } = e,
                u = T.intl.string(n),
                s = (0, E.J)(t),
                d = (0, _.q)(t, r),
                c = null == h,
                o = c && (null == U ? void 0 : U.id) === t,
                m = !c && (null == R ? void 0 : R.id) === t,
                g = o && (null == U ? void 0 : U.status) === p.Vq.EARNED,
                b = o && (null == U ? void 0 : U.status) === p.Vq.UPCOMING,
                v = m || g;
            return (0, l.jsxs)(
                'div',
                {
                    className: a()(j.badge, { [j.earnedBadge]: v || b }),
                    children: [
                        (0, l.jsx)('img', {
                            src: s,
                            alt: u,
                            className: j.badgeImage
                        }),
                        (0, l.jsxs)('div', {
                            className: j.badgeText,
                            children: [
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: j.badgeName,
                                    children: u
                                }),
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: d
                                }),
                                v &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: j.earnedBadgeSubSince,
                                        children: T.intl.formatToPlainString(T.t.Hu4jfn, { date: I })
                                    }),
                                b &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: j.earnedBadgeSubSince,
                                        children: T.intl.formatToPlainString(T.t.PPL1Ii, { days: null == U ? void 0 : U.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                t
            );
        }),
        w = () => {
            ((0, m.uL)(N.Z5c.APPLICATION_STORE, {
                source: d.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: S
            }),
                null == O || O());
        },
        { enabled: C } = f.$.useExperiment({ location: 'evolving_tenure_badge_modal_web' }, { autoTrackExposure: !1 });
    return (0, l.jsxs)(s.Y0X, {
        transitionState: r,
        'aria-labelledby': M,
        className: a()(j.container, 'theme-dark'),
        parentComponent: 'EvolvingTenureBadgeModal',
        children: [
            (0, l.jsx)(s.olH, {
                onClick: O,
                className: j.closeButton
            }),
            (0, l.jsxs)(s.hzk, {
                className: j.content,
                children: [
                    B
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(i.xv, {
                                      variant: 'display-md',
                                      className: j.header,
                                      children: T.intl.string(T.t.Og62j4)
                                  }),
                                  (0, l.jsx)(i.xv, {
                                      variant: 'text-md/medium',
                                      className: j.subHeader,
                                      children: T.intl.string(T.t['IdAP9/'])
                                  }),
                                  (0, l.jsx)('div', {
                                      className: j.badgeList,
                                      children: D
                                  }),
                                  null != h &&
                                      h.userId !== (null == y ? void 0 : y.id) &&
                                      (0, l.jsx)(s.gtL, {
                                          className: j.learnMoreButton,
                                          onClick: w,
                                          children: T.intl.string(T.t.hvVgAQ)
                                      })
                              ]
                          })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(i.xv, {
                                      variant: 'display-md',
                                      className: j.header,
                                      children: T.intl.string(T.t.RtGeFR)
                                  }),
                                  (0, l.jsx)(i.xv, {
                                      variant: 'text-md/medium',
                                      className: j.subHeader,
                                      children: T.intl.format(T.t.ffatnZ, { onClick: w })
                                  }),
                                  (0, l.jsx)('div', {
                                      className: j.badgeList,
                                      children: D
                                  }),
                                  (0, l.jsx)(v.Z, {
                                      className: j.subscribeButton,
                                      premiumModalAnalyticsLocation: { page: N.ZY5.TIERED_TENURE_BADGES_MODAL },
                                      textOptions: { subscribeText: T.intl.string(T.t.JST6jo) },
                                      subscriptionTier: x.Si.TIER_2,
                                      showGradient: !0,
                                      color: u.Tt.BRAND
                                  })
                              ]
                          }),
                    C && (0, l.jsx)(() => (f.D.useConfig({ location: 'evolving_tenure_badge_modal_web' }), (0, l.jsx)(l.Fragment, {})), {})
                ]
            })
        ]
    });
};
