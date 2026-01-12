n.d(t, { Z: () => w });
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
    A = n(474936),
    N = n(388032),
    P = n(466127);
let R = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a, offerExpiresAt: R } = e,
            { analyticsLocations: w } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, v.$)(),
            x = (0, m.Z)(),
            L = null != x,
            j = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            { visibilityPercentageRef: M, visibilityPercentage: k } = (0, I.E)(!j),
            U = (0, l.e7)([p.Z], () => p.Z.affinities),
            G = !L && U.length > 0,
            Z = (0, h.H)(s.I.MARKETING_PAGE_BANNER),
            F = null != Z && "marketingPageBanner" === Z.properties.properties.oneofKind,
            B = (0, _.Nx)() && !F;
        return (0, r.jsx)(f.Gt, {
            value: w,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(P.container, null != R && P.containerWithOfferCountdown, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: M,
                    children: (0, r.jsxs)("div", {
                        className: P.contentContainer,
                        children: [
                            (0, r.jsx)(C.Z, { containerVisibilityPercentage: k }),
                            B &&
                                (null != R
                                    ? (0, r.jsx)(y.Z, {
                                          expiresAt: R,
                                          className: P.heroOfferCountdown,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: P.offerPillContainer,
                                          children: (0, r.jsx)(T.Z, { enablePremiumBrandRefresh: !0 }),
                                      })),
                            (0, r.jsx)("div", {
                                className: P.marketingPageTextContainer,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: P.header,
                                    children: N.intl.string(N.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.body,
                                children: [
                                    L &&
                                        (0, r.jsx)("div", {
                                            className: P.referrerAttributionContainer,
                                            children: (0, r.jsx)(S.Z, {
                                                referrer: x,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    G &&
                                        (0, r.jsx)("div", {
                                            className: P.affinitiesContainer,
                                            children: (0, r.jsx)(O.Z, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: B ? P.singleButtonContainer : P.twoButtonContainer,
                                        children: [
                                            (0, r.jsx)(b.Z, {
                                                size: "md",
                                                fullWidth: B,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: F ? A.Si.NONE : i,
                                                buttonTextOverride: F ? N.intl.string(N.t["2pG5Ga"]) : void 0,
                                            }),
                                            !B &&
                                                (0, r.jsx)(E.Z, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: P.descriptionContainer,
                                        children: (0, r.jsx)(c.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: N.intl.format(N.t.kt9wxs, { cheapestMonthlyPrice: D }),
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
    w = i.memo(i.forwardRef(R));
