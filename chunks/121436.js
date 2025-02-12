t.d(a, { default: () => h });
var n = t(200651);
t(192379);
var s = t(120356),
    d = t.n(s),
    i = t(793030),
    r = t(481060),
    l = t(100527),
    c = t(906732),
    _ = t(313201),
    o = t(703656),
    E = t(594174),
    u = t(63063),
    N = t(111361),
    m = t(197115),
    T = t(943180),
    g = t(553896),
    M = t(848572),
    x = t(787528),
    R = t(474936),
    b = t(981631),
    v = t(388032),
    U = t(669271);
let h = (e) => {
    var a, t;
    let { transitionState: s, onClose: h, displayProfile: I } = e,
        { analyticsLocations: j } = (0, c.ZP)(l.Z.TIERED_TENURE_BADGES_MODAL),
        P = (0, _.Dt)(),
        O = (0, M.j_)(),
        S = (0, M.SI)(null == I ? void 0 : I.userId),
        H = (0, M.Rw)(),
        B = E.default.getCurrentUser(),
        p = null !== (t = (0, M.a1)(null !== (a = null == I ? void 0 : I.userId) && void 0 !== a ? a : null == B ? void 0 : B.id)) && void 0 !== t ? t : new Date(),
        f = (0, N.yd)(null == B ? void 0 : B.premiumType, R.p9.TIER_2),
        { isBadgeVersion2: L } = (0, T.D)(),
        A = O.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: s } = e,
                r = v.intl.string(t),
                l = (0, x.J)(a),
                c = (0, g.q)(a, s),
                _ = null == I,
                o = _ && (null == H ? void 0 : H.id) === a,
                E = !_ && (null == S ? void 0 : S.id) === a,
                u = o && (null == H ? void 0 : H.status) === M.Vq.EARNED,
                N = o && (null == H ? void 0 : H.status) === M.Vq.UPCOMING,
                m = (E || u) && L,
                T = N && L;
            return (0, n.jsxs)(
                'div',
                {
                    className: d()(U.badge, {
                        [U.badgeV2]: L,
                        [U.earnedBadge]: m || T
                    }),
                    children: [
                        (0, n.jsx)('img', {
                            src: l,
                            alt: r,
                            className: U.badgeImage
                        }),
                        (0, n.jsxs)('div', {
                            className: d()(U.badgeText, { [U.badgeTextV2]: L }),
                            children: [
                                (0, n.jsx)(i.xv, {
                                    variant: 'text-md/semibold',
                                    className: U.badgeName,
                                    children: r
                                }),
                                (0, n.jsx)(i.xv, {
                                    variant: 'text-xs/normal',
                                    children: c
                                }),
                                m &&
                                    (0, n.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: U.earnedBadgeSubSince,
                                        children: v.intl.formatToPlainString(v.t.Hu4jfn, { date: p })
                                    }),
                                T &&
                                    (0, n.jsx)(i.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: U.earnedBadgeSubSince,
                                        children: v.intl.formatToPlainString(v.t.PPL1Ii, { days: null == H ? void 0 : H.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                a
            );
        }),
        D = () => {
            (0, o.uL)(b.Z5c.APPLICATION_STORE, {
                source: l.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: j
            }),
                null == h || h();
        },
        w = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(i.xv, {
                    variant: 'display-md',
                    className: U.header,
                    children: v.intl.string(v.t['rmUN7+'])
                }),
                (0, n.jsx)(i.xv, {
                    variant: 'text-md/medium',
                    className: U.subHeader,
                    children: v.intl.string(v.t.OI50am)
                }),
                (0, n.jsx)('div', {
                    className: U.badgeList,
                    children: A
                })
            ]
        }),
        k = f
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(i.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: v.intl.string(v.t.Og62j4)
                      }),
                      (0, n.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: v.intl.string(v.t['IdAP9/'])
                      }),
                      (0, n.jsx)('div', {
                          className: U.badgeList,
                          children: A
                      }),
                      null != I &&
                          I.userId !== (null == B ? void 0 : B.id) &&
                          (0, n.jsx)(r.gtL, {
                              className: U.learnMoreButton,
                              onClick: D,
                              children: v.intl.string(v.t.hvVgAQ)
                          })
                  ]
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(i.xv, {
                          variant: 'display-md',
                          className: U.header,
                          children: v.intl.string(v.t.RtGeFR)
                      }),
                      (0, n.jsx)(i.xv, {
                          variant: 'text-md/medium',
                          className: U.subHeader,
                          children: v.intl.format(v.t.ffatnZ, {
                              onClick: D,
                              helpdeskArticle: u.Z.getArticleURL(b.BhN.TIERED_TENURE_BADGES)
                          })
                      }),
                      (0, n.jsx)('div', {
                          className: U.badgeList,
                          children: A
                      }),
                      (0, n.jsx)(m.Z, {
                          className: U.subscribeButton,
                          premiumModalAnalyticsLocation: { page: b.ZY5.TIERED_TENURE_BADGES_MODAL },
                          buttonText: v.intl.string(v.t.JST6jo),
                          subscriptionTier: R.Si.TIER_2,
                          showGradient: !0
                      })
                  ]
              });
    return (0, n.jsxs)(r.Y0X, {
        transitionState: s,
        'aria-labelledby': P,
        className: d()(U.container, 'theme-dark'),
        children: [
            (0, n.jsx)(r.olH, {
                onClick: h,
                className: U.closeButton
            }),
            (0, n.jsx)(r.hzk, {
                className: U.content,
                children: L ? k : w
            })
        ]
    });
};
