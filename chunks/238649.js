n.d(t, { Z: () => R });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(100527),
    d = n(906732),
    f = n(357355),
    _ = n(140465),
    p = n(105759),
    h = n(117791),
    m = n(638212),
    g = n(951570),
    E = n(343287),
    b = n(422034),
    y = n(206127),
    O = n(710220),
    v = n(164662),
    I = n(638631),
    T = n(946749),
    S = n(254139),
    A = n(388032),
    C = n(200605);
let N = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: N } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            R = (0, _.Nx)(),
            P = (0, y.$)(),
            w = (0, p.Z)(),
            D = null != w,
            x = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: L, visibilityPercentage: j } = (0, v.E)(!x),
            k = (0, s.e7)([f.Z], () => f.Z.affinities),
            M = !D && k.length > 0,
            { isEligible: U, cohort: G } = (0, g.Q1)();
        return (0, r.jsx)(d.Gt, {
            value: N,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(C.container, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: L,
                    children: (0, r.jsxs)("div", {
                        className: C.contentContainer,
                        children: [
                            (0, r.jsx)(S.Z, { containerVisibilityPercentage: j }),
                            R &&
                                (0, r.jsx)("div", {
                                    className: C.offerPillContainer,
                                    children: (0, r.jsx)(I.Z, { enablePremiumBrandRefresh: !0 }),
                                }),
                            (0, r.jsx)("div", {
                                className: C.marketingPageTextContainer,
                                children: (0, r.jsx)(T.Z, { children: A.intl.string(A.t["EW+VIS"]) }),
                            }),
                            (0, r.jsxs)("div", {
                                className: C.body,
                                children: [
                                    D &&
                                        (0, r.jsx)("div", {
                                            className: C.referrerAttributionContainer,
                                            children: (0, r.jsx)(O.Z, {
                                                referrer: w,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    M &&
                                        (0, r.jsx)("div", {
                                            className: C.affinitiesContainer,
                                            children: (0, r.jsx)(b.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    U && (0, r.jsx)(E.A, { cohort: G }),
                                    !U &&
                                        (0, r.jsxs)("div", {
                                            className: R ? C.singleButtonContainer : C.twoButtonContainer,
                                            children: [
                                                (0, r.jsx)(m.Z, {
                                                    size: "md",
                                                    fullWidth: R,
                                                    hasActivePromotion: !!a,
                                                    subscriptionTier: i,
                                                }),
                                                !R &&
                                                    (0, r.jsx)(h.Z, {
                                                        variant: "secondary",
                                                        size: "md",
                                                    }),
                                            ],
                                        }),
                                    (0, r.jsx)("div", {
                                        className: C.descriptionContainer,
                                        children: (0, r.jsx)(l.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: A.intl.format(A.t.kt9wxs, { cheapestMonthlyPrice: P }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    R = i.memo(i.forwardRef(N));
