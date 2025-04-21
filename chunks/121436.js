t.d(a, { default: () => M });
var n = t(200651);
t(192379);
var s = t(120356),
    d = t.n(s),
    i = t(793030),
    r = t(481060),
    l = t(100527),
    c = t(906732),
    o = t(313201),
    u = t(703656),
    m = t(594174),
    _ = t(111361),
    g = t(409100),
    x = t(553896),
    E = t(848572),
    N = t(787528),
    b = t(474936),
    T = t(981631),
    v = t(388032),
    h = t(840052);
let M = (e) => {
    var a, t;
    let { transitionState: s, onClose: M, displayProfile: U } = e,
        { analyticsLocations: R } = (0, c.ZP)(l.Z.TIERED_TENURE_BADGES_MODAL),
        I = (0, o.Dt)(),
        j = Object.values(b.vK),
        S = (0, E.SI)(null == U ? void 0 : U.userId),
        B = (0, E.Rw)(),
        P = m.default.getCurrentUser(),
        f = null != (t = (0, E.a1)(null != (a = null == U ? void 0 : U.userId) ? a : null == P ? void 0 : P.id)) ? t : new Date(),
        p = (0, _.yd)(null == P ? void 0 : P.premiumType, b.p9.TIER_2),
        O = j.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: s } = e,
                r = v.intl.string(t),
                l = (0, N.J)(a),
                c = (0, x.q)(a, s),
                o = null == U,
                u = o && (null == B ? void 0 : B.id) === a,
                m = !o && (null == S ? void 0 : S.id) === a,
                _ = u && (null == B ? void 0 : B.status) === E.Vq.EARNED,
                g = u && (null == B ? void 0 : B.status) === E.Vq.UPCOMING,
                b = m || _;
            return (0, n.jsxs)(
                'div',
                {
                    className: d()(h.badge, { [h.earnedBadge]: b || g }),
                    children: [
                        (0, n.jsx)('img', {
                            src: l,
                            alt: r,
                            className: h.badgeImage
                        }),
                        (0, n.jsxs)('div', {
                            className: h.badgeText,
                            children: [
                                (0, n.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: h.badgeName,
                                    children: r
                                }),
                                (0, n.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: c
                                }),
                                b &&
                                    (0, n.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: h.earnedBadgeSubSince,
                                        children: v.intl.formatToPlainString(v.t.Hu4jfn, { date: f })
                                    }),
                                g &&
                                    (0, n.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: h.earnedBadgeSubSince,
                                        children: v.intl.formatToPlainString(v.t.PPL1Ii, { days: null == B ? void 0 : B.daysLeft })
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
    return (0, n.jsxs)(r.Y0X, {
        transitionState: s,
        'aria-labelledby': I,
        className: d()(h.container, 'theme-dark'),
        children: [
            (0, n.jsx)(r.olH, {
                onClick: M,
                className: h.closeButton
            }),
            (0, n.jsx)(r.hzk, {
                className: h.content,
                children: p
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: h.header,
                                  children: v.intl.string(v.t.Og62j4)
                              }),
                              (0, n.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: h.subHeader,
                                  children: v.intl.string(v.t['IdAP9/'])
                              }),
                              (0, n.jsx)('div', {
                                  className: h.badgeList,
                                  children: O
                              }),
                              null != U &&
                                  U.userId !== (null == P ? void 0 : P.id) &&
                                  (0, n.jsx)(r.gtL, {
                                      className: h.learnMoreButton,
                                      onClick: H,
                                      children: v.intl.string(v.t.hvVgAQ)
                                  })
                          ]
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(i.xv, {
                                  variant: 'display-md',
                                  className: h.header,
                                  children: v.intl.string(v.t.RtGeFR)
                              }),
                              (0, n.jsx)(i.xv, {
                                  variant: 'text-md/medium',
                                  className: h.subHeader,
                                  children: v.intl.format(v.t.ffatnZ, { onClick: H })
                              }),
                              (0, n.jsx)('div', {
                                  className: h.badgeList,
                                  children: O
                              }),
                              (0, n.jsx)(g.Z, {
                                  className: h.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: T.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  subscribeButtonText: v.intl.string(v.t.JST6jo),
                                  subscriptionTier: b.Si.TIER_2,
                                  showGradient: !0
                              })
                          ]
                      })
            })
        ]
    });
};
