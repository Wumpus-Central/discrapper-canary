t.d(a, { default: () => M });
var s = t(200651);
t(192379);
var n = t(120356),
    d = t.n(n),
    r = t(793030),
    i = t(481060),
    l = t(100527),
    c = t(906732),
    o = t(313201),
    u = t(703656),
    m = t(594174),
    N = t(111361),
    _ = t(409100),
    g = t(553896),
    x = t(848572),
    E = t(787528),
    b = t(474936),
    T = t(981631),
    v = t(388032),
    h = t(840052);
let M = (e) => {
    var a, t;
    let { transitionState: n, onClose: M, displayProfile: U } = e,
        { analyticsLocations: R } = (0, c.ZP)(l.Z.TIERED_TENURE_BADGES_MODAL),
        I = (0, o.Dt)(),
        j = Object.values(b.vK),
        S = (0, x.SI)(null == U ? void 0 : U.userId),
        B = (0, x.Rw)(),
        P = m.default.getCurrentUser(),
        f = null != (t = (0, x.a1)(null != (a = null == U ? void 0 : U.userId) ? a : null == P ? void 0 : P.id)) ? t : new Date(),
        p = (0, N.yd)(null == P ? void 0 : P.premiumType, b.p9.TIER_2),
        O = j.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: n } = e,
                i = v.NW.string(t),
                l = (0, E.J)(a),
                c = (0, g.q)(a, n),
                o = null == U,
                u = o && (null == B ? void 0 : B.id) === a,
                m = !o && (null == S ? void 0 : S.id) === a,
                N = u && (null == B ? void 0 : B.status) === x.Vq.EARNED,
                _ = u && (null == B ? void 0 : B.status) === x.Vq.UPCOMING,
                b = m || N;
            return (0, s.jsxs)(
                'div',
                {
                    className: d()(h.badge, { [h.earnedBadge]: b || _ }),
                    children: [
                        (0, s.jsx)('img', {
                            src: l,
                            alt: i,
                            className: h.badgeImage
                        }),
                        (0, s.jsxs)('div', {
                            className: h.badgeText,
                            children: [
                                (0, s.jsx)(r.xv, {
                                    variant: 'text-md/semibold',
                                    className: h.badgeName,
                                    children: i
                                }),
                                (0, s.jsx)(r.xv, {
                                    variant: 'text-xs/normal',
                                    children: c
                                }),
                                b &&
                                    (0, s.jsx)(r.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: h.earnedBadgeSubSince,
                                        children: v.NW.formatToPlainString(v.t.Hu4jfn, { date: f })
                                    }),
                                _ &&
                                    (0, s.jsx)(r.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: h.earnedBadgeSubSince,
                                        children: v.NW.formatToPlainString(v.t.PPL1Ii, { days: null == B ? void 0 : B.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                a
            );
        }),
        H = () => {
            (0, u.uL)(T.Z5c.APPLICATION_STORE, {
                source: l.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: R
            }),
                null == M || M();
        };
    return (0, s.jsxs)(i.Y0X, {
        transitionState: n,
        'aria-labelledby': I,
        className: d()(h.container, 'theme-dark'),
        children: [
            (0, s.jsx)(i.olH, {
                onClick: M,
                className: h.closeButton
            }),
            (0, s.jsx)(i.hzk, {
                className: h.content,
                children: p
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(r.xv, {
                                  variant: 'display-md',
                                  className: h.header,
                                  children: v.NW.string(v.t.Og62j4)
                              }),
                              (0, s.jsx)(r.xv, {
                                  variant: 'text-md/medium',
                                  className: h.subHeader,
                                  children: v.NW.string(v.t['IdAP9/'])
                              }),
                              (0, s.jsx)('div', {
                                  className: h.badgeList,
                                  children: O
                              }),
                              null != U &&
                                  U.userId !== (null == P ? void 0 : P.id) &&
                                  (0, s.jsx)(i.gtL, {
                                      className: h.learnMoreButton,
                                      onClick: H,
                                      children: v.NW.string(v.t.hvVgAQ)
                                  })
                          ]
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(r.xv, {
                                  variant: 'display-md',
                                  className: h.header,
                                  children: v.NW.string(v.t.RtGeFR)
                              }),
                              (0, s.jsx)(r.xv, {
                                  variant: 'text-md/medium',
                                  className: h.subHeader,
                                  children: v.NW.format(v.t.ffatnZ, { onClick: H })
                              }),
                              (0, s.jsx)('div', {
                                  className: h.badgeList,
                                  children: O
                              }),
                              (0, s.jsx)(_.Z, {
                                  className: h.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: T.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  subscribeButtonText: v.NW.string(v.t.JST6jo),
                                  subscriptionTier: b.Si.TIER_2,
                                  showGradient: !0
                              })
                          ]
                      })
            })
        ]
    });
};
