n.d(t, { Z: () => P });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(79766),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(357355),
    p = n(140465),
    h = n(105759),
    m = n(715130),
    g = n(179918),
    E = n(117791),
    b = n(638212),
    y = n(403503),
    O = n(422034),
    v = n(206127),
    I = n(710220),
    T = n(164662),
    S = n(638631),
    A = n(254139),
    C = n(388032),
    N = n(350169);
let R = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a, offerExpiresAt: R } = e,
            { analyticsLocations: P } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, p.Nx)(),
            w = (0, v.$)(),
            x = (0, h.Z)(),
            L = null != x,
            M = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            { visibilityPercentageRef: j, visibilityPercentage: k } = (0, T.E)(!M),
            U = (0, l.e7)([_.Z], () => _.Z.affinities),
            G = !L && U.length > 0,
            B = (0, m.H)(s.I.MARKETING_PAGE_BANNER);
        return (0, r.jsx)(f.Gt, {
            value: P,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(N.container, null != R && N.containerWithOfferCountdown, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: j,
                    children: (0, r.jsxs)("div", {
                        className: N.contentContainer,
                        children: [
                            (0, r.jsx)(A.Z, { containerVisibilityPercentage: k }),
                            D &&
                                (null != R
                                    ? (0, r.jsx)(y.Z, {
                                          expiresAt: R,
                                          className: N.heroOfferCountdown,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: N.offerPillContainer,
                                          children: (0, r.jsx)(S.Z, { enablePremiumBrandRefresh: !0 }),
                                      })),
                            (0, r.jsx)("div", {
                                className: N.marketingPageTextContainer,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "header-primary",
                                    className: N.header,
                                    children: C.intl.string(C.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: N.body,
                                children: [
                                    L &&
                                        (0, r.jsx)("div", {
                                            className: N.referrerAttributionContainer,
                                            children: (0, r.jsx)(I.Z, {
                                                referrer: x,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    G &&
                                        (0, r.jsx)("div", {
                                            className: N.affinitiesContainer,
                                            children: (0, r.jsx)(O.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: D ? N.singleButtonContainer : N.twoButtonContainer,
                                        children: [
                                            (0, r.jsx)(b.Z, {
                                                size: "md",
                                                fullWidth: D,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: i,
                                            }),
                                            !D &&
                                                (0, r.jsx)(E.Z, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: N.descriptionContainer,
                                        children: (0, r.jsx)(c.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: C.intl.format(C.t.kt9wxs, { cheapestMonthlyPrice: w }),
                                        }),
                                    }),
                                    null != B &&
                                        "marketingPageBanner" === B.properties.properties.oneofKind &&
                                        (0, r.jsx)(g.u, {
                                            componentId: B.id,
                                            promotionBannerMarketingComponentFields:
                                                B.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    P = i.memo(i.forwardRef(R));
