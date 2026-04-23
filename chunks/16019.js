s.d(t, { A: () => S });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(877624),
    o = s(311907),
    c = s(534514),
    d = s(834730),
    m = s(775602),
    u = s(793574),
    _ = s(688810),
    x = s(526292),
    p = s(848245),
    g = s(236834),
    h = s(549996),
    f = s(371764),
    C = s(379040),
    b = s(65470),
    j = s(792656),
    A = s(224850),
    N = s(552554),
    I = s(288351),
    T = s(103733),
    v = s(326180),
    E = s(788868),
    R = s(985018),
    M = s(469408);
let S = a.memo(
    a.forwardRef((e, t) => {
        let { className: s, subscriptionTier: a, isEligibleForBogoPromotion: i } = e,
            { analyticsLocations: S } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
            y = (0, N.N)(),
            P = (0, g.A)(),
            k = null != P,
            B = (0, o.bG)([m.A], () => m.A.useReducedMotion),
            { visibilityPercentageRef: w, visibilityPercentage: G } = (0, T.U)(!B),
            O = (0, p.b)(),
            D = !k && O.length > 0,
            L = (0, h.c)(l.C.MARKETING_PAGE_BANNER),
            H = null != L && "marketingPageBanner" === L.properties.properties.oneofKind,
            U = (0, x.ar)() && !H;
        return (0, r.jsx)(_.f5, {
            value: S,
            children: (0, r.jsx)("div", {
                ref: t,
                className: n()(M.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: w,
                    children: (0, r.jsxs)("div", {
                        className: M.hQ,
                        children: [
                            (0, r.jsx)(v.A, { containerVisibilityPercentage: G }),
                            U && (0, r.jsx)("div", { className: M.XN, children: (0, r.jsx)(I.A, {}) }),
                            (0, r.jsx)("div", {
                                className: M.s8,
                                children: (0, r.jsx)(c.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: M.wx,
                                    children: R.intl.string(R.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: M.rf,
                                children: [
                                    k &&
                                        (0, r.jsx)("div", {
                                            className: M.eZ,
                                            children: (0, r.jsx)(C.A, { referrer: P }),
                                        }),
                                    D &&
                                        (0, r.jsx)("div", {
                                            className: M.Qn,
                                            children: (0, r.jsx)(A.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: U ? M.es : M.UJ,
                                        children: [
                                            (0, r.jsx)(j.A, {
                                                size: "md",
                                                fullWidth: U,
                                                hasActivePromotion: !!i,
                                                subscriptionTier: H && null == a ? E.pe.NONE : a,
                                                buttonTextOverride: H ? R.intl.string(R.t["2pG5Ga"]) : void 0,
                                            }),
                                            !U && (0, r.jsx)(b.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: M.iQ,
                                        children: (0, r.jsx)(d.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: R.intl.format(R.t.kt9wxs, { cheapestMonthlyPrice: y }),
                                        }),
                                    }),
                                    null != L &&
                                        "marketingPageBanner" === L.properties.properties.oneofKind &&
                                        (0, r.jsx)(f.x, {
                                            componentId: L.id,
                                            promotionBannerMarketingComponentFields:
                                                L.properties.properties.marketingPageBanner,
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
