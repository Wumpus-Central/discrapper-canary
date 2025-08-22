n.d(t, { Z: () => C });
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
    g = n(422034),
    E = n(206127),
    b = n(710220),
    y = n(164662),
    O = n(638631),
    v = n(946749),
    I = n(254139),
    T = n(388032),
    S = n(350169);
let A = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: A } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            C = (0, _.Nx)(),
            N = (0, E.$)(),
            R = (0, p.Z)(),
            P = null != R,
            w = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: D, visibilityPercentage: x } = (0, y.E)(!w),
            L = (0, s.e7)([f.Z], () => f.Z.affinities),
            j = !P && L.length > 0;
        return (0, r.jsx)(d.Gt, {
            value: A,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(S.container, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: D,
                    children: (0, r.jsxs)("div", {
                        className: S.contentContainer,
                        children: [
                            (0, r.jsx)(I.Z, { containerVisibilityPercentage: x }),
                            C &&
                                (0, r.jsx)("div", {
                                    className: S.offerPillContainer,
                                    children: (0, r.jsx)(O.Z, { enablePremiumBrandRefresh: !0 }),
                                }),
                            (0, r.jsx)("div", {
                                className: S.marketingPageTextContainer,
                                children: (0, r.jsx)(v.Z, { children: T.intl.string(T.t["EW+VIS"]) }),
                            }),
                            (0, r.jsxs)("div", {
                                className: S.body,
                                children: [
                                    P &&
                                        (0, r.jsx)("div", {
                                            className: S.referrerAttributionContainer,
                                            children: (0, r.jsx)(b.Z, {
                                                referrer: R,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    j &&
                                        (0, r.jsx)("div", {
                                            className: S.affinitiesContainer,
                                            children: (0, r.jsx)(g.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: C ? S.singleButtonContainer : S.twoButtonContainer,
                                        children: [
                                            (0, r.jsx)(m.Z, {
                                                size: "md",
                                                fullWidth: C,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: i,
                                            }),
                                            !C &&
                                                (0, r.jsx)(h.Z, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.descriptionContainer,
                                        children: (0, r.jsx)(l.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: T.intl.format(T.t.kt9wxs, { cheapestMonthlyPrice: N }),
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
    C = i.memo(i.forwardRef(A));
