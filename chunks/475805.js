n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(877624),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    p = n(688810),
    _ = n(560138),
    m = n(526292),
    g = n(236834),
    f = n(549996),
    b = n(371764),
    h = n(65470),
    A = n(792656),
    E = n(224850),
    x = n(552554),
    O = n(797255),
    C = n(103733),
    y = n(288351),
    j = n(160321),
    T = n(788868),
    v = n(985018),
    S = n(232285);
let I = i.memo(
    i.forwardRef((e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: l } = e,
            { analyticsLocations: I } = (0, p.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
            N = (0, x.N)(),
            P = (0, g.A)(),
            R = null != P,
            D = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            { visibilityPercentageRef: w, visibilityPercentage: L } = (0, C.U)(!D),
            M = (0, o.bG)([_.A], () => _.A.affinities),
            G = !R && M.length > 0,
            U = (0, f.c)(a.C.MARKETING_PAGE_BANNER),
            k = null != U && "marketingPageBanner" === U.properties.properties.oneofKind,
            H = (0, m.ar)() && !k;
        return (0, r.jsx)(p.f5, {
            value: I,
            children: (0, r.jsx)("div", {
                ref: t,
                className: s()(S.kL, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: w,
                    children: (0, r.jsxs)("div", {
                        className: S.hQ,
                        children: [
                            (0, r.jsx)(j.A, {
                                containerVisibilityPercentage: L,
                            }),
                            H &&
                                (0, r.jsx)("div", {
                                    className: S.XN,
                                    children: (0, r.jsx)(y.A, {
                                        enablePremiumBrandRefresh: !0,
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: S.s8,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: S.wx,
                                    children: v.intl.string(v.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: S.rf,
                                children: [
                                    R &&
                                        (0, r.jsx)("div", {
                                            className: S.eZ,
                                            children: (0, r.jsx)(O.A, {
                                                referrer: P,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    G &&
                                        (0, r.jsx)("div", {
                                            className: S.Qn,
                                            children: (0, r.jsx)(E.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: H ? S.es : S.UJ,
                                        children: [
                                            (0, r.jsx)(A.A, {
                                                size: "md",
                                                fullWidth: H,
                                                hasActivePromotion: !!l,
                                                subscriptionTier: k ? T.pe.NONE : i,
                                                buttonTextOverride: k ? v.intl.string(v.t["2pG5Ga"]) : void 0,
                                            }),
                                            !H &&
                                                (0, r.jsx)(h.A, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.iQ,
                                        children: (0, r.jsx)(c.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: v.intl.format(v.t.kt9wxs, {
                                                cheapestMonthlyPrice: N,
                                            }),
                                        }),
                                    }),
                                    null != U &&
                                        "marketingPageBanner" === U.properties.properties.oneofKind &&
                                        (0, r.jsx)(b.x, {
                                            componentId: U.id,
                                            promotionBannerMarketingComponentFields:
                                                U.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    }),
);
