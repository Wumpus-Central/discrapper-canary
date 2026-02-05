n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(877624),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(560138),
    A = n(526292),
    g = n(236834),
    E = n(549996),
    h = n(371764),
    p = n(65470),
    C = n(792656),
    x = n(224850),
    T = n(552554),
    I = n(797255),
    S = n(103733),
    f = n(288351),
    N = n(160321),
    b = n(788868),
    R = n(985018),
    v = n(232285);
let O = s.memo(
    s.forwardRef((e, t) => {
        let { className: n, subscriptionTier: s, isEligibleForBogoPromotion: r } = e,
            { analyticsLocations: O } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
            j = (0, T.N)(),
            P = (0, g.A)(),
            y = null != P,
            L = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            { visibilityPercentageRef: D, visibilityPercentage: M } = (0, S.U)(!L),
            G = (0, o.bG)([m.A], () => m.A.affinities),
            U = !y && G.length > 0,
            k = (0, E.c)(l.C.MARKETING_PAGE_BANNER),
            B = null != k && "marketingPageBanner" === k.properties.properties.oneofKind,
            w = (0, A.ar)() && !B;
        return (0, i.jsx)(_.f5, {
            value: O,
            children: (0, i.jsx)("div", {
                ref: t,
                className: a()(v.kL, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, i.jsx)("div", {
                    ref: D,
                    children: (0, i.jsxs)("div", {
                        className: v.hQ,
                        children: [
                            (0, i.jsx)(N.A, { containerVisibilityPercentage: M }),
                            w &&
                                (0, i.jsx)("div", {
                                    className: v.XN,
                                    children: (0, i.jsx)(f.A, { enablePremiumBrandRefresh: !0 }),
                                }),
                            (0, i.jsx)("div", {
                                className: v.s8,
                                children: (0, i.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: v.wx,
                                    children: R.intl.string(R.t.YCZldK),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: v.rf,
                                children: [
                                    y &&
                                        (0, i.jsx)("div", {
                                            className: v.eZ,
                                            children: (0, i.jsx)(I.A, { referrer: P, enablePremiumBrandRefresh: !0 }),
                                        }),
                                    U &&
                                        (0, i.jsx)("div", {
                                            className: v.Qn,
                                            children: (0, i.jsx)(x.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: w ? v.es : v.UJ,
                                        children: [
                                            (0, i.jsx)(C.A, {
                                                size: "md",
                                                fullWidth: w,
                                                hasActivePromotion: !!r,
                                                subscriptionTier: B ? b.pe.NONE : s,
                                                buttonTextOverride: B ? R.intl.string(R.t["2pG5Ga"]) : void 0,
                                            }),
                                            !w && (0, i.jsx)(p.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: v.iQ,
                                        children: (0, i.jsx)(c.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: R.intl.format(R.t.kt9wxs, { cheapestMonthlyPrice: j }),
                                        }),
                                    }),
                                    null != k &&
                                        "marketingPageBanner" === k.properties.properties.oneofKind &&
                                        (0, i.jsx)(h.x, {
                                            componentId: k.id,
                                            promotionBannerMarketingComponentFields:
                                                k.properties.properties.marketingPageBanner,
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
