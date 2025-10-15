n.d(t, { Z: () => w });
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
    h = n(104494),
    m = n(639119),
    g = n(105759),
    E = n(117791),
    b = n(638212),
    y = n(403503),
    O = n(422034),
    v = n(206127),
    I = n(710220),
    T = n(164662),
    S = n(638631),
    A = n(254139),
    C = n(474936),
    N = n(388032),
    R = n(350169);
let P = (e, t) => {
        var n;
        let { className: i, subscriptionTier: a, isEligibleForBogoPromotion: P } = e,
            { analyticsLocations: w } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, p.Nx)(),
            L = (0, v.$)(),
            x = (0, g.Z)(),
            M = null != x,
            j = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: k, visibilityPercentage: U } = (0, T.E)(!j),
            G = (0, s.e7)([_.Z], () => _.Z.affinities),
            B = !M && G.length > 0,
            Z = (0, m.N)(),
            F = (0, h.Ng)(),
            V = null != (n = null == Z ? void 0 : Z.expires_at) ? n : null == F ? void 0 : F.expires_at,
            H = f.Z.getAlmostExpiringTrialOffers([C.Si.TIER_2]),
            Y = f.Z.getAlmostExpiringDiscountOffers([C.Si.TIER_2]),
            W = null != V && (H.length > 0 || Y.length > 0);
        return (0, r.jsx)(d.Gt, {
            value: w,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(R.container, W && R.containerWithOfferCountdown, i),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: k,
                    children: (0, r.jsxs)("div", {
                        className: R.contentContainer,
                        children: [
                            (0, r.jsx)(A.Z, { containerVisibilityPercentage: U }),
                            D &&
                                (W
                                    ? (0, r.jsx)(y.Z, {
                                          expiresAt: V,
                                          className: R.heroOfferCountdown,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: R.offerPillContainer,
                                          children: (0, r.jsx)(S.Z, { enablePremiumBrandRefresh: !0 }),
                                      })),
                            (0, r.jsx)("div", {
                                className: R.marketingPageTextContainer,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "display-md",
                                    color: "header-primary",
                                    className: R.header,
                                    children: N.intl.string(N.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: R.body,
                                children: [
                                    M &&
                                        (0, r.jsx)("div", {
                                            className: R.referrerAttributionContainer,
                                            children: (0, r.jsx)(I.Z, {
                                                referrer: x,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    B &&
                                        (0, r.jsx)("div", {
                                            className: R.affinitiesContainer,
                                            children: (0, r.jsx)(O.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: D ? R.singleButtonContainer : R.twoButtonContainer,
                                        children: [
                                            (0, r.jsx)(b.Z, {
                                                size: "md",
                                                fullWidth: D,
                                                hasActivePromotion: !!P,
                                                subscriptionTier: a,
                                            }),
                                            !D &&
                                                (0, r.jsx)(E.Z, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: R.descriptionContainer,
                                        children: (0, r.jsx)(l.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: N.intl.format(N.t.kt9wxs, { cheapestMonthlyPrice: L }),
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
    w = i.memo(i.forwardRef(P));
