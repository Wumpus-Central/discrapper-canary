t.d(a, { default: () => U });
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
    u = t(111361),
    E = t(197115),
    m = t(943180),
    T = t(553896),
    M = t(848572),
    g = t(787528),
    x = t(474936),
    b = t(981631),
    R = t(388032),
    v = t(319438);
let U = (e) => {
    var a, t;
    let { transitionState: d, onClose: U, displayProfile: h } = e,
        { analyticsLocations: I } = (0, l.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        j = (0, N.Dt)(),
        P = (0, M.j_)(),
        O = (0, M.SI)(null == h ? void 0 : h.userId),
        H = (0, M.Rw)(),
        S = o.default.getCurrentUser(),
        B = null !== (t = (0, M.a1)(null !== (a = null == h ? void 0 : h.userId) && void 0 !== a ? a : null == S ? void 0 : S.id)) && void 0 !== t ? t : new Date(),
        f = (0, u.yd)(null == S ? void 0 : S.premiumType, x.p9.TIER_2),
        { isBadgeVersion2: p } = (0, m.D)(),
        L = P.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: d } = e,
                i = R.NW.string(t),
                c = (0, g.J)(a),
                l = (0, T.q)(a, d),
                N = null == h,
                _ = N && (null == H ? void 0 : H.id) === a,
                o = !N && (null == O ? void 0 : O.id) === a,
                u = _ && (null == H ? void 0 : H.status) === M.Vq.EARNED,
                E = _ && (null == H ? void 0 : H.status) === M.Vq.UPCOMING,
                m = (o || u) && p,
                x = E && p;
            return (0, s.jsxs)(
                'div',
                {
                    className: n()(v.badge, {
                        [v.badgeV2]: p,
                        [v.earnedBadge]: m || x
                    }),
                    children: [
                        (0, s.jsx)('img', {
                            src: c,
                            alt: i,
                            className: v.badgeImage
                        }),
                        (0, s.jsxs)('div', {
                            className: n()(v.badgeText, { [v.badgeTextV2]: p }),
                            children: [
                                (0, s.jsx)(r.xv, {
                                    variant: 'text-md/semibold',
                                    className: v.badgeName,
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
                                        className: v.earnedBadgeSubSince,
                                        children: R.NW.formatToPlainString(R.t.Hu4jfn, { date: B })
                                    }),
                                x &&
                                    (0, s.jsx)(r.xv, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: v.earnedBadgeSubSince,
                                        children: R.NW.formatToPlainString(R.t.PPL1Ii, { days: null == H ? void 0 : H.daysLeft })
                                    })
                            ]
                        })
                    ]
                },
                a
            );
        }),
        w = () => {
            (0, _.uL)(b.Z5c.APPLICATION_STORE, {
                source: c.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: I
            }),
                null == U || U();
        },
        W = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(r.xv, {
                    variant: 'display-md',
                    className: v.header,
                    children: R.NW.string(R.t['rmUN7+'])
                }),
                (0, s.jsx)(r.xv, {
                    variant: 'text-md/medium',
                    className: v.subHeader,
                    children: R.NW.string(R.t.OI50am)
                }),
                (0, s.jsx)('div', {
                    className: v.badgeList,
                    children: L
                })
            ]
        }),
        D = f
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(r.xv, {
                          variant: 'display-md',
                          className: v.header,
                          children: R.NW.string(R.t.Og62j4)
                      }),
                      (0, s.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          className: v.subHeader,
                          children: R.NW.string(R.t['IdAP9/'])
                      }),
                      (0, s.jsx)('div', {
                          className: v.badgeList,
                          children: L
                      }),
                      null != h &&
                          h.userId !== (null == S ? void 0 : S.id) &&
                          (0, s.jsx)(i.gtL, {
                              className: v.learnMoreButton,
                              onClick: w,
                              children: R.NW.string(R.t.hvVgAQ)
                          })
                  ]
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(r.xv, {
                          variant: 'display-md',
                          className: v.header,
                          children: R.NW.string(R.t.RtGeFR)
                      }),
                      (0, s.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          className: v.subHeader,
                          children: R.NW.format(R.t.ffatnZ, { onClick: w })
                      }),
                      (0, s.jsx)('div', {
                          className: v.badgeList,
                          children: L
                      }),
                      (0, s.jsx)(E.Z, {
                          className: v.subscribeButton,
                          premiumModalAnalyticsLocation: { page: b.ZY5.TIERED_TENURE_BADGES_MODAL },
                          buttonText: R.NW.string(R.t.JST6jo),
                          subscriptionTier: x.Si.TIER_2,
                          showGradient: !0
                      })
                  ]
              });
    return (0, s.jsxs)(i.Y0X, {
        transitionState: d,
        'aria-labelledby': j,
        className: n()(v.container, 'theme-dark'),
        children: [
            (0, s.jsx)(i.olH, {
                onClick: U,
                className: v.closeButton
            }),
            (0, s.jsx)(i.hzk, {
                className: v.content,
                children: p ? D : W
            })
        ]
    });
};
