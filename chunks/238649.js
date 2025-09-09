n.d(t, { Z: () => N });
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
    T = n(254139),
    S = n(388032),
    A = n(350169);
let C = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: C } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            N = (0, _.Nx)(),
            R = (0, y.$)(),
            P = (0, p.Z)(),
            w = null != P,
            D = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: x, visibilityPercentage: L } = (0, v.E)(!D),
            j = (0, s.e7)([f.Z], () => f.Z.affinities),
            M = !w && j.length > 0,
            { isEligible: k, cohort: U } = (0, g.Q1)();
        return (0, r.jsx)(d.Gt, {
            value: C,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(A.container, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: x,
                    children: (0, r.jsxs)("div", {
                        className: A.contentContainer,
                        children: [
                            (0, r.jsx)(T.Z, { containerVisibilityPercentage: L }),
                            N &&
                                (0, r.jsx)("div", {
                                    className: A.offerPillContainer,
                                    children: (0, r.jsx)(I.Z, { enablePremiumBrandRefresh: !0 }),
                                }),
                            (0, r.jsx)("div", {
                                className: A.marketingPageTextContainer,
                                children: (0, r.jsx)(l.X6q, {
                                    variant: "display-md",
                                    color: "header-primary",
                                    className: A.header,
                                    children: S.intl.string(S.t.YCZldH),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: A.body,
                                children: [
                                    w &&
                                        (0, r.jsx)("div", {
                                            className: A.referrerAttributionContainer,
                                            children: (0, r.jsx)(O.Z, {
                                                referrer: P,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    M &&
                                        (0, r.jsx)("div", {
                                            className: A.affinitiesContainer,
                                            children: (0, r.jsx)(b.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    k && (0, r.jsx)(E.A, { cohort: U }),
                                    !k &&
                                        (0, r.jsxs)("div", {
                                            className: N ? A.singleButtonContainer : A.twoButtonContainer,
                                            children: [
                                                (0, r.jsx)(m.Z, {
                                                    size: "md",
                                                    fullWidth: N,
                                                    hasActivePromotion: !!a,
                                                    subscriptionTier: i,
                                                }),
                                                !N &&
                                                    (0, r.jsx)(h.Z, {
                                                        variant: "secondary",
                                                        size: "md",
                                                    }),
                                            ],
                                        }),
                                    (0, r.jsx)("div", {
                                        className: A.descriptionContainer,
                                        children: (0, r.jsx)(l.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: k
                                                ? S.intl.string(S.t["6V7qRk"])
                                                : S.intl.format(S.t.kt9wxs, { cheapestMonthlyPrice: R }),
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
    N = i.memo(i.forwardRef(C));
