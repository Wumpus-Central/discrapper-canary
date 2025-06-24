t.d(n, { default: () => O });
var l = t(255367);
t(73800);
var r = t(120356),
    a = t.n(r),
    i = t(793030),
    u = t(481060),
    d = t(100527),
    s = t(906732),
    o = t(313201),
    c = t(703656),
    m = t(594174),
    g = t(111361),
    v = t(784238),
    b = t(176237),
    f = t(553896),
    _ = t(848572),
    p = t(787528),
    E = t(474936),
    x = t(981631),
    N = t(388032),
    T = t(840052);
let O = (e) => {
    var n, t;
    let { transitionState: r, onClose: O, displayProfile: P } = e,
        { analyticsLocations: j } = (0, s.ZP)(d.Z.TIERED_TENURE_BADGES_MODAL),
        h = (0, o.Dt)(),
        S = Object.values(E.vK),
        M = (0, _.SI)(null == P ? void 0 : P.userId),
        R = (0, _.Rw)(),
        U = m.default.getCurrentUser(),
        I = null != (t = (0, _.a1)(null != (n = null == P ? void 0 : P.userId) ? n : null == U ? void 0 : U.id)) ? t : new Date(),
        y = (0, g.yd)(null == U ? void 0 : U.premiumType, E.p9.TIER_2),
        Z = S.map((e) => {
            let { id: n, nameUnformatted: t, tenureReqNumMonths: r } = e,
                u = N.intl.string(t),
                d = (0, p.J)(n),
                s = (0, f.q)(n, r),
                o = null == P,
                c = o && (null == R ? void 0 : R.id) === n,
                m = !o && (null == M ? void 0 : M.id) === n,
                g = c && (null == R ? void 0 : R.status) === _.Vq.EARNED,
                v = c && (null == R ? void 0 : R.status) === _.Vq.UPCOMING,
                b = m || g;
            return (0, l.jsxs)(
                'div',
                {
                    className: a()(T.badge, { [T.earnedBadge]: b || v }),
                    children: [
                        (0, l.jsx)('img', {
                            src: d,
                            alt: u,
                            className: T.badgeImage
                        }),
                        (0, l.jsxs)('div', {
                            className: T.badgeText,
                            children: [
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: T.badgeName,
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
                                        className: T.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.Hu4jfn, { date: I })
                                    }),
                                v &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: T.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.PPL1Ii, { days: null == R ? void 0 : R.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                n
            );
        }),
        B = () => {
            (0, c.uL)(x.Z5c.APPLICATION_STORE, {
                source: d.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: j
            }),
                null == O || O();
        },
        { enabled: A } = b.$.useExperiment({ location: 'evolving_tenure_badge_modal_web' }, { autoTrackExposure: !1 });
    return (0, l.jsxs)(u.Y0X, {
        transitionState: r,
        'aria-labelledby': h,
        className: a()(T.container, 'theme-dark'),
        parentComponent: 'EvolvingTenureBadgeModal',
        children: [
            (0, l.jsx)(u.olH, {
                onClick: O,
                className: T.closeButton
            }),
            (0, l.jsxs)(u.hzk, {
                className: T.content,
                children: [
                    y
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(i.xv, {
                                      variant: 'display-md',
                                      className: T.header,
                                      children: N.intl.string(N.t.Og62j4)
                                  }),
                                  (0, l.jsx)(i.xv, {
                                      variant: 'text-md/medium',
                                      className: T.subHeader,
                                      children: N.intl.string(N.t['IdAP9/'])
                                  }),
                                  (0, l.jsx)('div', {
                                      className: T.badgeList,
                                      children: Z
                                  }),
                                  null != P &&
                                      P.userId !== (null == U ? void 0 : U.id) &&
                                      (0, l.jsx)(u.gtL, {
                                          className: T.learnMoreButton,
                                          onClick: B,
                                          children: N.intl.string(N.t.hvVgAQ)
                                      })
                              ]
                          })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(i.xv, {
                                      variant: 'display-md',
                                      className: T.header,
                                      children: N.intl.string(N.t.RtGeFR)
                                  }),
                                  (0, l.jsx)(i.xv, {
                                      variant: 'text-md/medium',
                                      className: T.subHeader,
                                      children: N.intl.format(N.t.ffatnZ, { onClick: B })
                                  }),
                                  (0, l.jsx)('div', {
                                      className: T.badgeList,
                                      children: Z
                                  }),
                                  (0, l.jsx)(v.Z, {
                                      className: T.subscribeButton,
                                      premiumModalAnalyticsLocation: { page: x.ZY5.TIERED_TENURE_BADGES_MODAL },
                                      textOptions: { subscribeText: N.intl.string(N.t.JST6jo) },
                                      subscriptionTier: E.Si.TIER_2,
                                      showGradient: !0,
                                      color: u.Ttl.BRAND
                                  })
                              ]
                          }),
                    A && (0, l.jsx)(() => (b.D.useConfig({ location: 'evolving_tenure_badge_modal_web' }), (0, l.jsx)(l.Fragment, {})), {})
                ]
            })
        ]
    });
};
