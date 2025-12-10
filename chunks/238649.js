n.d(t, { Z: () => R });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(79766),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    p = n(357355),
    _ = n(140465),
    m = n(105759),
    h = n(715130),
    g = n(179918),
    E = n(117791),
    b = n(638212),
    y = n(403503),
    O = n(422034),
    v = n(206127),
    S = n(710220),
    I = n(164662),
    T = n(638631),
    C = n(254139),
    A = n(388032),
    N = n(350169);
let P = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a, offerExpiresAt: P } = e,
            { analyticsLocations: R } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, _.Nx)(),
            w = (0, v.$)(),
            x = (0, m.Z)(),
            L = null != x,
            j = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            { visibilityPercentageRef: M, visibilityPercentage: k } = (0, I.E)(!j),
            U = (0, l.e7)([p.Z], () => p.Z.affinities),
            G = !L && U.length > 0,
            Z = (0, h.H)(s.I.MARKETING_PAGE_BANNER);
        return (0, r.jsx)(f.Gt, {
            value: R,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(N.container, null != P && N.containerWithOfferCountdown, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: M,
                    children: (0, r.jsxs)("div", {
                        className: N.contentContainer,
                        children: [
                            (0, r.jsx)(C.Z, { containerVisibilityPercentage: k }),
                            D &&
                                (null != P
                                    ? (0, r.jsx)(y.Z, {
                                          expiresAt: P,
                                          className: N.heroOfferCountdown,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: N.offerPillContainer,
                                          children: (0, r.jsx)(T.Z, { enablePremiumBrandRefresh: !0 }),
                                      })),
                            (0, r.jsx)("div", {
                                className: N.marketingPageTextContainer,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "header-primary",
                                    className: N.header,
                                    children: A.intl.string(A.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: N.body,
                                children: [
                                    L &&
                                        (0, r.jsx)("div", {
                                            className: N.referrerAttributionContainer,
                                            children: (0, r.jsx)(S.Z, {
                                                referrer: x,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    G &&
                                        (0, r.jsx)("div", {
                                            className: N.affinitiesContainer,
                                            children: (0, r.jsx)(O.Z, {
                                                textColor: "text-strong",
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
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: A.intl.format(A.t.kt9wxs, { cheapestMonthlyPrice: w }),
                                        }),
                                    }),
                                    null != Z &&
                                        "marketingPageBanner" === Z.properties.properties.oneofKind &&
                                        (0, r.jsx)(g.u, {
                                            componentId: Z.id,
                                            promotionBannerMarketingComponentFields:
                                                Z.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    R = i.memo(i.forwardRef(P));
