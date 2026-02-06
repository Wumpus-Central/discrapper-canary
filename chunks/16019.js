n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(877624),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(560138),
    A = n(526292),
    g = n(236834),
    h = n(549996),
    x = n(371764),
    p = n(65470),
    E = n(792656),
    C = n(224850),
    T = n(552554),
    S = n(797255),
    I = n(288351),
    f = n(103733),
    N = n(326180),
    b = n(788868),
    j = n(985018),
    v = n(136423);
let O = s.memo(
    s.forwardRef((e, t) => {
        let { className: n, subscriptionTier: s, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: O } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
            R = (0, T.N)(),
            y = (0, g.A)(),
            P = null != y,
            L = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            { visibilityPercentageRef: D, visibilityPercentage: M } = (0, f.U)(!L),
            G = (0, o.bG)([m.A], () => m.A.affinities),
            U = !P && G.length > 0,
            k = (0, h.c)(r.C.MARKETING_PAGE_BANNER),
            V = null != k && "marketingPageBanner" === k.properties.properties.oneofKind,
            H = (0, A.ar)() && !V;
        return (0, i.jsx)(_.f5, {
            value: O,
            children: (0, i.jsx)("div", {
                ref: t,
                className: l()(v.kL, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, i.jsx)("div", {
                    ref: D,
                    children: (0, i.jsxs)("div", {
                        className: v.hQ,
                        children: [
                            (0, i.jsx)(N.A, { containerVisibilityPercentage: M }),
                            H &&
                                (0, i.jsx)("div", {
                                    className: v.XN,
                                    children: (0, i.jsx)(I.A, { enablePremiumBrandRefresh: !0 }),
                                }),
                            (0, i.jsx)("div", {
                                className: v.s8,
                                children: (0, i.jsx)(c.Heading, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: v.wx,
                                    children: j.intl.string(j.t.YCZldK),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: v.rf,
                                children: [
                                    P &&
                                        (0, i.jsx)("div", {
                                            className: v.eZ,
                                            children: (0, i.jsx)(S.A, { referrer: y, enablePremiumBrandRefresh: !0 }),
                                        }),
                                    U &&
                                        (0, i.jsx)("div", {
                                            className: v.Qn,
                                            children: (0, i.jsx)(C.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: H ? v.es : v.UJ,
                                        children: [
                                            (0, i.jsx)(E.A, {
                                                size: "md",
                                                fullWidth: H,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: V ? b.pe.NONE : s,
                                                buttonTextOverride: V ? j.intl.string(j.t["2pG5Ga"]) : void 0,
                                            }),
                                            !H && (0, i.jsx)(p.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: v.iQ,
                                        children: (0, i.jsx)(c.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: j.intl.format(j.t.kt9wxs, { cheapestMonthlyPrice: R }),
                                        }),
                                    }),
                                    null != k &&
                                        "marketingPageBanner" === k.properties.properties.oneofKind &&
                                        (0, i.jsx)(x.x, {
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
