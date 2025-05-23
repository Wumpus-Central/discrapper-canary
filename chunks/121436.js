n.d(t, { default: () => P });
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
    _ = n(787528),
    p = n(474936),
    E = n(981631),
    x = n(388032),
    N = n(840052);
let P = (e) => {
    var t, n;
    let { transitionState: r, onClose: P, displayProfile: O } = e,
        { analyticsLocations: T } = (0, d.ZP)(s.Z.TIERED_TENURE_BADGES_MODAL),
        j = (0, c.Dt)(),
        h = Object.values(p.vK),
        S = (0, v.SI)(null == O ? void 0 : O.userId),
        U = (0, v.Rw)(),
        M = m.default.getCurrentUser(),
        R = null != (n = (0, v.a1)(null != (t = null == O ? void 0 : O.userId) ? t : null == M ? void 0 : M.id)) ? n : new Date(),
        y = (0, g.yd)(null == M ? void 0 : M.premiumType, p.p9.TIER_2),
        I = h.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: r } = e,
                u = x.intl.string(n),
                s = (0, _.J)(t),
                d = (0, f.q)(t, r),
                c = null == O,
                o = c && (null == U ? void 0 : U.id) === t,
                m = !c && (null == S ? void 0 : S.id) === t,
                g = o && (null == U ? void 0 : U.status) === v.Vq.EARNED,
                b = o && (null == U ? void 0 : U.status) === v.Vq.UPCOMING,
                p = m || g;
            return (0, l.jsxs)(
                'div',
                {
                    className: a()(N.badge, { [N.earnedBadge]: p || b }),
                    children: [
                        (0, l.jsx)('img', {
                            src: s,
                            alt: u,
                            className: N.badgeImage
                        }),
                        (0, l.jsxs)('div', {
                            className: N.badgeText,
                            children: [
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: N.badgeName,
                                    children: u
                                }),
                                (0, l.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: d
                                }),
                                p &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: N.earnedBadgeSubSince,
                                        children: x.intl.formatToPlainString(x.t.Hu4jfn, { date: R })
                                    }),
                                b &&
                                    (0, l.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: N.earnedBadgeSubSince,
                                        children: x.intl.formatToPlainString(x.t.PPL1Ii, { days: null == U ? void 0 : U.daysLeft })
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
                sourceLocationStack: T
            }),
                null == P || P();
        };
    return (0, l.jsxs)(u.Y0X, {
        transitionState: r,
        'aria-labelledby': j,
        className: a()(N.container, 'theme-dark'),
        children: [
            (0, l.jsx)(u.olH, {
                onClick: P,
                className: N.closeButton
            }),
            (0, l.jsx)(u.hzk, {
                className: N.content,
                children: y
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: N.header,
                                  children: x.intl.string(x.t.Og62j4)
                              }),
                              (0, l.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: N.subHeader,
                                  children: x.intl.string(x.t['IdAP9/'])
                              }),
                              (0, l.jsx)('div', {
                                  className: N.badgeList,
                                  children: I
                              }),
                              null != O &&
                                  O.userId !== (null == M ? void 0 : M.id) &&
                                  (0, l.jsx)(u.gtL, {
                                      className: N.learnMoreButton,
                                      onClick: B,
                                      children: x.intl.string(x.t.hvVgAQ)
                                  })
                          ]
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: N.header,
                                  children: x.intl.string(x.t.RtGeFR)
                              }),
                              (0, l.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: N.subHeader,
                                  children: x.intl.format(x.t.ffatnZ, { onClick: B })
                              }),
                              (0, l.jsx)('div', {
                                  className: N.badgeList,
                                  children: I
                              }),
                              (0, l.jsx)(b.Z, {
                                  className: N.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: E.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: x.intl.string(x.t.JST6jo) },
                                  subscriptionTier: p.Si.TIER_2,
                                  showGradient: !0
                              })
                          ]
                      })
            })
        ]
    });
};
