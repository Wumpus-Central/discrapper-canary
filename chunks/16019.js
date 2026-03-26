n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(877624),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(793574),
    m = n(688810),
    _ = n(560138),
    g = n(526292),
    x = n(236834),
    A = n(549996),
    h = n(371764),
    p = n(65470),
    f = n(792656),
    T = n(224850),
    S = n(552554),
    E = n(797255),
    b = n(288351),
    C = n(103733),
    v = n(326180),
    N = n(788868),
    I = n(985018),
    j = n(58288);
let y = s.memo(
    s.forwardRef((e, t) => {
        let { className: n, subscriptionTier: s, isEligibleForBogoPromotion: l } = e,
            { analyticsLocations: y } = (0, m.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
            O = (0, S.N)(),
            R = (0, x.A)(),
            L = null != R,
            P = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            { visibilityPercentageRef: D, visibilityPercentage: G } = (0, C.U)(!P),
            M = (0, o.bG)([_.A], () => _.A.affinities),
            U = !L && M.length > 0,
            k = (0, A.c)(r.C.MARKETING_PAGE_BANNER),
            w = null != k && "marketingPageBanner" === k.properties.properties.oneofKind,
            V = (0, g.ar)() && !w;
        return (0, i.jsx)(m.f5, {
            value: y,
            children: (0, i.jsx)("div", {
                ref: t,
                className: a()(j.kL, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, i.jsx)("div", {
                    ref: D,
                    children: (0, i.jsxs)("div", {
                        className: j.hQ,
                        children: [
                            (0, i.jsx)(v.A, { containerVisibilityPercentage: G }),
                            V &&
                                (0, i.jsx)("div", {
                                    className: j.XN,
                                    children: (0, i.jsx)(b.A, { enablePremiumBrandRefresh: !0 }),
                                }),
                            (0, i.jsx)("div", {
                                className: j.s8,
                                children: (0, i.jsx)(d.Heading, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: j.wx,
                                    children: I.intl.string(I.t.YCZldK),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: j.rf,
                                children: [
                                    L &&
                                        (0, i.jsx)("div", {
                                            className: j.eZ,
                                            children: (0, i.jsx)(E.A, { referrer: R, enablePremiumBrandRefresh: !0 }),
                                        }),
                                    U &&
                                        (0, i.jsx)("div", {
                                            className: j.Qn,
                                            children: (0, i.jsx)(T.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: V ? j.es : j.UJ,
                                        children: [
                                            (0, i.jsx)(f.A, {
                                                size: "md",
                                                fullWidth: V,
                                                hasActivePromotion: !!l,
                                                subscriptionTier: w ? N.pe.NONE : s,
                                                buttonTextOverride: w ? I.intl.string(I.t["2pG5Ga"]) : void 0,
                                            }),
                                            !V && (0, i.jsx)(p.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: j.iQ,
                                        children: (0, i.jsx)(d.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: I.intl.format(I.t.kt9wxs, { cheapestMonthlyPrice: O }),
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
