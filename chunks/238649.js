n.d(t, { Z: () => D });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(100527),
    d = n(906732),
    f = n(431),
    _ = n(357355),
    p = n(140465),
    h = n(931118),
    m = n(104494),
    g = n(639119),
    E = n(105759),
    b = n(117791),
    y = n(638212),
    O = n(403503),
    v = n(422034),
    I = n(206127),
    T = n(710220),
    S = n(164662),
    A = n(638631),
    C = n(254139),
    N = n(474936),
    R = n(388032),
    P = n(350169);
let w = (e, t) => {
        var n;
        let { className: i, subscriptionTier: a, isEligibleForBogoPromotion: w } = e,
            { analyticsLocations: D } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            L = (0, p.Nx)(),
            x = (0, I.$)(),
            M = (0, E.Z)(),
            j = null != M,
            k = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: U, visibilityPercentage: G } = (0, S.E)(!k),
            B = (0, s.e7)([_.Z], () => _.Z.affinities),
            Z = !j && B.length > 0,
            { variant: F } = (0, h.ZP)("PremiumBrandRefreshMarketingHeroHeading"),
            V = (0, g.N)(),
            H = (0, m.Ng)(),
            Y = null != (n = null == V ? void 0 : V.expires_at) ? n : null == H ? void 0 : H.expires_at,
            W = f.Z.getAlmostExpiringTrialOffers([N.Si.TIER_2]),
            K = f.Z.getAlmostExpiringDiscountOffers([N.Si.TIER_2]),
            z = F === h.tE.HERO_COUNTDOWN && null != Y && (W.length > 0 || K.length > 0);
        return (0, r.jsx)(d.Gt, {
            value: D,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(P.container, z && P.containerWithOfferCountdown, i),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: U,
                    children: (0, r.jsxs)("div", {
                        className: P.contentContainer,
                        children: [
                            (0, r.jsx)(C.Z, { containerVisibilityPercentage: G }),
                            L &&
                                (z
                                    ? (0, r.jsx)(O.Z, {
                                          expiresAt: Y,
                                          className: P.heroOfferCountdown,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: P.offerPillContainer,
                                          children: (0, r.jsx)(A.Z, { enablePremiumBrandRefresh: !0 }),
                                      })),
                            (0, r.jsx)("div", {
                                className: P.marketingPageTextContainer,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "display-md",
                                    color: "header-primary",
                                    className: P.header,
                                    children: R.intl.string(R.t.YCZldH),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.body,
                                children: [
                                    j &&
                                        (0, r.jsx)("div", {
                                            className: P.referrerAttributionContainer,
                                            children: (0, r.jsx)(T.Z, {
                                                referrer: M,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    Z &&
                                        (0, r.jsx)("div", {
                                            className: P.affinitiesContainer,
                                            children: (0, r.jsx)(v.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: L ? P.singleButtonContainer : P.twoButtonContainer,
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                size: "md",
                                                fullWidth: L,
                                                hasActivePromotion: !!w,
                                                subscriptionTier: a,
                                            }),
                                            !L &&
                                                (0, r.jsx)(b.Z, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: P.descriptionContainer,
                                        children: (0, r.jsx)(l.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: R.intl.format(R.t.kt9wxs, { cheapestMonthlyPrice: x }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    D = i.memo(i.forwardRef(w));
