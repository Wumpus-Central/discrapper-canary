n.d(t, {
    A: () => y,
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
    _ = n(688810),
    p = n(560138),
    m = n(526292),
    g = n(236834),
    A = n(549996),
    f = n(371764),
    h = n(65470),
    b = n(792656),
    E = n(939724),
    x = n(224850),
    O = n(552554),
    C = n(797255),
    I = n(103733),
    T = n(288351),
    S = n(160321),
    j = n(788868),
    v = n(985018),
    N = n(232285);
let y = i.memo(
    i.forwardRef((e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: l, offerExpiresAt: y } = e,
            { analyticsLocations: P } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
            R = (0, O.N)(),
            D = (0, g.A)(),
            w = null != D,
            L = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            { visibilityPercentageRef: M, visibilityPercentage: U } = (0, I.U)(!L),
            G = (0, o.bG)([p.A], () => p.A.affinities),
            k = !w && G.length > 0,
            V = (0, A.c)(a.C.MARKETING_PAGE_BANNER),
            H = null != V && "marketingPageBanner" === V.properties.properties.oneofKind,
            B = (0, m.ar)() && !H;
        return (0, r.jsx)(_.f5, {
            value: P,
            children: (0, r.jsx)("div", {
                ref: t,
                className: s()(N.kL, null != y && N.VW, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: M,
                    children: (0, r.jsxs)("div", {
                        className: N.hQ,
                        children: [
                            (0, r.jsx)(S.A, {
                                containerVisibilityPercentage: U,
                            }),
                            B &&
                                (null != y
                                    ? (0, r.jsx)(E.A, {
                                          expiresAt: y,
                                          className: N.IZ,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: N.XN,
                                          children: (0, r.jsx)(T.A, {
                                              enablePremiumBrandRefresh: !0,
                                          }),
                                      })),
                            (0, r.jsx)("div", {
                                className: N.s8,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: N.wx,
                                    children: v.intl.string(v.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: N.rf,
                                children: [
                                    w &&
                                        (0, r.jsx)("div", {
                                            className: N.eZ,
                                            children: (0, r.jsx)(C.A, {
                                                referrer: D,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    k &&
                                        (0, r.jsx)("div", {
                                            className: N.Qn,
                                            children: (0, r.jsx)(x.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: B ? N.es : N.UJ,
                                        children: [
                                            (0, r.jsx)(b.A, {
                                                size: "md",
                                                fullWidth: B,
                                                hasActivePromotion: !!l,
                                                subscriptionTier: H ? j.pe.NONE : i,
                                                buttonTextOverride: H ? v.intl.string(v.t["2pG5Ga"]) : void 0,
                                            }),
                                            !B &&
                                                (0, r.jsx)(h.A, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: N.iQ,
                                        children: (0, r.jsx)(c.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: v.intl.format(v.t.kt9wxs, {
                                                cheapestMonthlyPrice: R,
                                            }),
                                        }),
                                    }),
                                    null != V &&
                                        "marketingPageBanner" === V.properties.properties.oneofKind &&
                                        (0, r.jsx)(f.x, {
                                            componentId: V.id,
                                            promotionBannerMarketingComponentFields:
                                                V.properties.properties.marketingPageBanner,
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
