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
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: w } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, p.Nx)(),
            L = (0, I.$)(),
            x = (0, E.Z)(),
            M = null != x,
            k = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: j, visibilityPercentage: U } = (0, S.E)(!k),
            G = (0, s.e7)([_.Z], () => _.Z.affinities),
            B = !M && G.length > 0,
            { variant: Z } = (0, h.ZP)("PremiumBrandRefreshMarketingHeroHeading"),
            F = (0, g.N)(),
            V = (0, m.Ng)(),
            H =
                f.Z.getAlmostExpiringTrialOffers([N.Si.TIER_2]).length > 0 &&
                null != F &&
                null != F.expires_at &&
                F.trial_id !== N.a7,
            Y = f.Z.getAlmostExpiringDiscountOffers([N.Si.TIER_2]).length > 0 && null != V && null != V.expires_at,
            W = Z === h.tE.HERO_COUNTDOWN && (H || Y),
            K = H ? F.expires_at : Y ? V.expires_at : null;
        return (0, r.jsx)(d.Gt, {
            value: w,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(P.container, W && P.containerWithOfferCountdown, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: j,
                    children: (0, r.jsxs)("div", {
                        className: P.contentContainer,
                        children: [
                            (0, r.jsx)(C.Z, { containerVisibilityPercentage: U }),
                            D &&
                                (W && null != K
                                    ? (0, r.jsx)(O.Z, {
                                          expiresAt: K,
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
                                    M &&
                                        (0, r.jsx)("div", {
                                            className: P.referrerAttributionContainer,
                                            children: (0, r.jsx)(T.Z, {
                                                referrer: x,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    B &&
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
                                        className: D ? P.singleButtonContainer : P.twoButtonContainer,
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                size: "md",
                                                fullWidth: D,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: i,
                                            }),
                                            !D &&
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
                                            children: R.intl.format(R.t.kt9wxs, { cheapestMonthlyPrice: L }),
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
