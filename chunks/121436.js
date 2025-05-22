n.d(t, { default: () => x });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(793030),
    u = n(481060),
    d = n(100527),
    s = n(906732),
    c = n(313201),
    o = n(703656),
    m = n(594174),
    g = n(111361),
    b = n(784238),
    f = n(553896),
    v = n(848572),
    _ = n(787528),
    E = n(474936),
    p = n(981631),
    N = n(388032),
    T = n(840052);
let x = (e) => {
    var t, n;
    let { transitionState: l, onClose: x, displayProfile: P } = e,
        { analyticsLocations: O } = (0, s.ZP)(d.Z.TIERED_TENURE_BADGES_MODAL),
        h = (0, c.Dt)(),
        j = Object.values(E.vK),
        S = (0, v.SI)(null == P ? void 0 : P.userId),
        U = (0, v.Rw)(),
        M = m.default.getCurrentUser(),
        R = null != (n = (0, v.a1)(null != (t = null == P ? void 0 : P.userId) ? t : null == M ? void 0 : M.id)) ? n : new Date(),
        y = (0, g.yd)(null == M ? void 0 : M.premiumType, E.p9.TIER_2),
        I = j.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: l } = e,
                u = N.intl.string(n),
                d = (0, _.J)(t),
                s = (0, f.q)(t, l),
                c = null == P,
                o = c && (null == U ? void 0 : U.id) === t,
                m = !c && (null == S ? void 0 : S.id) === t,
                g = o && (null == U ? void 0 : U.status) === v.Vq.EARNED,
                b = o && (null == U ? void 0 : U.status) === v.Vq.UPCOMING,
                E = m || g;
            return (0, r.jsxs)(
                'div',
                {
                    className: a()(T.badge, { [T.earnedBadge]: E || b }),
                    children: [
                        (0, r.jsx)('img', {
                            src: d,
                            alt: u,
                            className: T.badgeImage
                        }),
                        (0, r.jsxs)('div', {
                            className: T.badgeText,
                            children: [
                                (0, r.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: T.badgeName,
                                    children: u
                                }),
                                (0, r.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: s
                                }),
                                E &&
                                    (0, r.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: T.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.Hu4jfn, { date: R })
                                    }),
                                b &&
                                    (0, r.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: T.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.PPL1Ii, { days: null == U ? void 0 : U.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                t
            );
        }),
        B = () => {
            (0, o.uL)(p.Z5c.APPLICATION_STORE, {
                source: d.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: O
            }),
                null == x || x();
        };
    return (0, r.jsxs)(u.Y0X, {
        transitionState: l,
        'aria-labelledby': h,
        className: a()(T.container, 'theme-dark'),
        children: [
            (0, r.jsx)(u.olH, {
                onClick: x,
                className: T.closeButton
            }),
            (0, r.jsx)(u.hzk, {
                className: T.content,
                children: y
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: T.header,
                                  children: N.intl.string(N.t.Og62j4)
                              }),
                              (0, r.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: T.subHeader,
                                  children: N.intl.string(N.t['IdAP9/'])
                              }),
                              (0, r.jsx)('div', {
                                  className: T.badgeList,
                                  children: I
                              }),
                              null != P &&
                                  P.userId !== (null == M ? void 0 : M.id) &&
                                  (0, r.jsx)(u.gtL, {
                                      className: T.learnMoreButton,
                                      onClick: B,
                                      children: N.intl.string(N.t.hvVgAQ)
                                  })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: T.header,
                                  children: N.intl.string(N.t.RtGeFR)
                              }),
                              (0, r.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: T.subHeader,
                                  children: N.intl.format(N.t.ffatnZ, { onClick: B })
                              }),
                              (0, r.jsx)('div', {
                                  className: T.badgeList,
                                  children: I
                              }),
                              (0, r.jsx)(b.Z, {
                                  className: T.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: p.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: N.intl.string(N.t.JST6jo) },
                                  subscriptionTier: E.Si.TIER_2,
                                  showGradient: !0
                              })
                          ]
                      })
            })
        ]
    });
};
