t.d(a, { default: () => h });
var s = t(200651);
t(192379);
var d = t(120356),
    n = t.n(d),
    r = t(793030),
    i = t(481060),
    c = t(100527),
    l = t(906732),
    N = t(313201),
    _ = t(703656),
    o = t(594174),
    E = t(63063),
    u = t(111361),
    m = t(197115),
    T = t(943180),
    g = t(553896),
    M = t(848572),
    x = t(787528),
    R = t(474936),
    b = t(981631),
    v = t(388032),
    U = t(242987);
let h = (e) => {
    var a, t;
    let { transitionState: d, onClose: h, displayProfile: I } = e,
        { analyticsLocations: j } = (0, l.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        P = (0, N.Dt)(),
        O = (0, M.j_)(),
        S = (0, M.SI)(null == I ? void 0 : I.userId),
        H = (0, M.Rw)(),
        B = o.default.getCurrentUser(),
        p = null !== (t = (0, M.a1)(null !== (a = null == I ? void 0 : I.userId) && void 0 !== a ? a : null == B ? void 0 : B.id)) && void 0 !== t ? t : new Date(),
        f = (0, u.yd)(null == B ? void 0 : B.premiumType, R.p9.TIER_2),
        { isBadgeVersion2: L } = (0, T.D)(),
        A = O.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: d } = e,
                i = v.NW.string(t),
                c = (0, x.J)(a),
                l = (0, g.q)(a, d),
                N = null == I,
                _ = N && (null == H ? void 0 : H.id) === a,
                o = !N && (null == S ? void 0 : S.id) === a,
                E = _ && (null == H ? void 0 : H.status) === M.Vq.EARNED,
                u = _ && (null == H ? void 0 : H.status) === M.Vq.UPCOMING,
                m = (o || E) && L,
                T = u && L;
            return (0, s.jsxs)(
                'div',
                {
                    className: n()(U.badge, {
                        [U.badgeV2]: L,
                        [U.earnedBadge]: m || T
                    }),
                    children: [
                        (0, s.jsx)('img', {
                            src: c,
                            alt: i,
                            className: U.badgeImage
                        }),
                        (0, s.jsxs)('div', {
                            className: n()(U.badgeText, { [U.badgeTextV2]: L }),
                            children: [
                                (0, s.jsx)(r.xv, {
                                    variant: 'text-md/semibold',
                                    className: U.badgeName,
                                    children: i
                                }),
                                (0, s.jsx)(r.xv, {
                                    variant: 'text-xs/normal',
                                    children: l
                                }),
                                m &&
                                    (0, s.jsx)(r.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: U.earnedBadgeSubSince,
                                        children: v.NW.formatToPlainString(v.t.Hu4jfn, { date: p })
                                    }),
                                T &&
                                    (0, s.jsx)(r.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: U.earnedBadgeSubSince,
                                        children: v.NW.formatToPlainString(v.t.PPL1Ii, { days: null == H ? void 0 : H.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                a
            );
        }),
        D = () => {
            (0, _.uL)(b.Z5c.APPLICATION_STORE, {
                source: c.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: j
            }),
                null == h || h();
        },
        w = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(r.xv, {
                    variant: 'display-md',
                    className: U.header,
                    children: v.NW.string(v.t['rmUN7+'])
                }),
                (0, s.jsx)(r.xv, {
                    variant: 'text-md/medium',
                    className: U.subHeader,
                    children: v.NW.string(v.t.OI50am)
                }),
                (0, s.jsx)('div', {
                    className: U.badgeList,
                    children: A
                })
            ]
        }),
        W = f
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(r.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: v.NW.string(v.t.Og62j4)
                      }),
                      (0, s.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: v.NW.string(v.t['IdAP9/'])
                      }),
                      (0, s.jsx)('div', {
                          className: U.badgeList,
                          children: A
                      }),
                      null != I &&
                          I.userId !== (null == B ? void 0 : B.id) &&
                          (0, s.jsx)(i.gtL, {
                              className: U.learnMoreButton,
                              onClick: D,
                              children: v.NW.string(v.t.hvVgAQ)
                          })
                  ]
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(r.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: v.NW.string(v.t.RtGeFR)
                      }),
                      (0, s.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: v.NW.format(v.t.ffatnZ, {
                              onClick: D,
                              helpdeskArticle: E.Z.getArticleURL(b.BhN.TIERED_TENURE_BADGES)
                          })
                      }),
                      (0, s.jsx)('div', {
                          className: U.badgeList,
                          children: A
                      }),
                      (0, s.jsx)(m.Z, {
                          className: U.subscribeButton,
                          premiumModalAnalyticsLocation: { page: b.ZY5.TIERED_TENURE_BADGES_MODAL },
                          buttonText: v.NW.string(v.t.JST6jo),
                          subscriptionTier: R.Si.TIER_2,
                          showGradient: !0
                      })
                  ]
              });
    return (0, s.jsxs)(i.Y0X, {
        transitionState: d,
        'aria-labelledby': P,
        className: n()(U.container, 'theme-dark'),
        children: [
            (0, s.jsx)(i.olH, {
                onClick: h,
                className: U.closeButton
            }),
            (0, s.jsx)(i.hzk, {
                className: U.content,
                children: L ? W : w
            })
        ]
    });
};
