n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877624),
    l = n(311907),
    c = n(397927),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(560138),
    _ = n(526292),
    h = n(236834),
    m = n(549996),
    g = n(371764),
    E = n(65470),
    b = n(792656),
    y = n(939724),
    O = n(224850),
    A = n(552554),
    v = n(797255),
    S = n(103733),
    I = n(288351),
    T = n(160321),
    C = n(788868),
    N = n(985018),
    R = n(232285);
let w = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a, offerExpiresAt: w } = e,
            { analyticsLocations: P } = (0, f.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA),
            D = (0, A.N)(),
            x = (0, h.A)(),
            L = null != x,
            j = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            { visibilityPercentageRef: M, visibilityPercentage: k } = (0, S.U)(!j),
            U = (0, l.bG)([p.A], () => p.A.affinities),
            G = !L && U.length > 0,
            V = (0, m.c)(o.C.MARKETING_PAGE_BANNER),
            F = null != V && "marketingPageBanner" === V.properties.properties.oneofKind,
            B = (0, _.ar)() && !F;
        return (0, r.jsx)(f.f5, {
            value: P,
            children: (0, r.jsx)("div", {
                ref: t,
                className: s()(R.kL, null != w && R.VW, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: M,
                    children: (0, r.jsxs)("div", {
                        className: R.hQ,
                        children: [
                            (0, r.jsx)(T.A, { containerVisibilityPercentage: k }),
                            B &&
                                (null != w
                                    ? (0, r.jsx)(y.A, {
                                          expiresAt: w,
                                          className: R.IZ,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: R.XN,
                                          children: (0, r.jsx)(I.A, { enablePremiumBrandRefresh: !0 }),
                                      })),
                            (0, r.jsx)("div", {
                                className: R.s8,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: R.wx,
                                    children: N.intl.string(N.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: R.rf,
                                children: [
                                    L &&
                                        (0, r.jsx)("div", {
                                            className: R.eZ,
                                            children: (0, r.jsx)(v.A, {
                                                referrer: x,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    G &&
                                        (0, r.jsx)("div", {
                                            className: R.Qn,
                                            children: (0, r.jsx)(O.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: B ? R.es : R.UJ,
                                        children: [
                                            (0, r.jsx)(b.A, {
                                                size: "md",
                                                fullWidth: B,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: F ? C.pe.NONE : i,
                                                buttonTextOverride: F ? N.intl.string(N.t["2pG5Ga"]) : void 0,
                                            }),
                                            !B &&
                                                (0, r.jsx)(E.A, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: R.iQ,
                                        children: (0, r.jsx)(c.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: N.intl.format(N.t.kt9wxs, { cheapestMonthlyPrice: D }),
                                        }),
                                    }),
                                    null != V &&
                                        "marketingPageBanner" === V.properties.properties.oneofKind &&
                                        (0, r.jsx)(g.x, {
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
    },
    P = i.memo(i.forwardRef(w));
