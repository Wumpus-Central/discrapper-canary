n.d(t, { default: () => T });
var l = n(255367);
n(73800);
var r = n(120356),
    a = n.n(r),
    i = n(793030),
    u = n(481060),
    s = n(100527),
    d = n(906732),
    c = n(313201),
    o = n(703656),
    m = n(594174),
    g = n(111361),
    b = n(784238),
    f = n(553896),
    v = n(848572),
    p = n(787528),
    _ = n(474936),
    E = n(981631),
    N = n(388032),
    x = n(840052);
let T = (e) => {
    var t, n;
    let { transitionState: r, onClose: T, displayProfile: P } = e,
        { analyticsLocations: O } = (0, d.ZP)(s.Z.TIERED_TENURE_BADGES_MODAL),
        j = (0, c.Dt)(),
        h = Object.values(_.vK),
        S = (0, v.SI)(null == P ? void 0 : P.userId),
        M = (0, v.Rw)(),
        U = m.default.getCurrentUser(),
        R = null != (n = (0, v.a1)(null != (t = null == P ? void 0 : P.userId) ? t : null == U ? void 0 : U.id)) ? n : new Date(),
        y = (0, g.yd)(null == U ? void 0 : U.premiumType, _.p9.TIER_2),
        I = h.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: r } = e,
                u = N.intl.string(n),
                s = (0, p.J)(t),
                d = (0, f.q)(t, r),
                c = null == P,
                o = c && (null == M ? void 0 : M.id) === t,
                m = !c && (null == S ? void 0 : S.id) === t,
                g = o && (null == M ? void 0 : M.status) === v.Vq.EARNED,
                b = o && (null == M ? void 0 : M.status) === v.Vq.UPCOMING,
                _ = m || g;
            return (0, l.jsxs)(
                'div',
                {
                    className: a()(x.badge, { [x.earnedBadge]: _ || b }),
                    children: [
                        (0, l.jsx)('img', {
                            src: s,
                            alt: u,
                            className: x.badgeImage
                        }),
                        (0, l.jsxs)('div', {
                            className: x.badgeText,
                            children: [
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: x.badgeName,
                                    children: u
                                }),
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: d
                                }),
                                _ &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: x.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.Hu4jfn, { date: R })
                                    }),
                                b &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: x.earnedBadgeSubSince,
                                        children: N.intl.formatToPlainString(N.t.PPL1Ii, { days: null == M ? void 0 : M.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                t
            );
        }),
        B = () => {
            (0, o.uL)(E.Z5c.APPLICATION_STORE, {
                source: s.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: O
            }),
                null == T || T();
        };
    return (0, l.jsxs)(u.Y0X, {
        transitionState: r,
        'aria-labelledby': j,
        className: a()(x.container, 'theme-dark'),
        parentComponent: 'EvolvingTenureBadgeModal',
        children: [
            (0, l.jsx)(u.olH, {
                onClick: T,
                className: x.closeButton
            }),
            (0, l.jsx)(u.hzk, {
                className: x.content,
                children: y
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: x.header,
                                  children: N.intl.string(N.t.Og62j4)
                              }),
                              (0, l.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: x.subHeader,
                                  children: N.intl.string(N.t['IdAP9/'])
                              }),
                              (0, l.jsx)('div', {
                                  className: x.badgeList,
                                  children: I
                              }),
                              null != P &&
                                  P.userId !== (null == U ? void 0 : U.id) &&
                                  (0, l.jsx)(u.gtL, {
                                      className: x.learnMoreButton,
                                      onClick: B,
                                      children: N.intl.string(N.t.hvVgAQ)
                                  })
                          ]
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: x.header,
                                  children: N.intl.string(N.t.RtGeFR)
                              }),
                              (0, l.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: x.subHeader,
                                  children: N.intl.format(N.t.ffatnZ, { onClick: B })
                              }),
                              (0, l.jsx)('div', {
                                  className: x.badgeList,
                                  children: I
                              }),
                              (0, l.jsx)(b.Z, {
                                  className: x.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: E.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: N.intl.string(N.t.JST6jo) },
                                  subscriptionTier: _.Si.TIER_2,
                                  showGradient: !0,
                                  color: u.Ttl.BRAND
                              })
                          ]
                      })
            })
        ]
    });
};
