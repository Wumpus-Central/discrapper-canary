n.d(t, { Z: () => A });
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
    v = n(254139),
    I = n(388032),
    T = n(350169);
let S = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: S } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            A = (0, _.Nx)(),
            C = (0, E.$)(),
            N = (0, p.Z)(),
            R = null != N,
            P = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: w, visibilityPercentage: D } = (0, y.E)(!P),
            L = (0, s.e7)([f.Z], () => f.Z.affinities),
            x = !R && L.length > 0;
        return (0, r.jsx)(d.Gt, {
            value: S,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(T.container, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: w,
                    children: (0, r.jsxs)("div", {
                        className: T.contentContainer,
                        children: [
                            (0, r.jsx)(v.Z, { containerVisibilityPercentage: D }),
                            A &&
                                (0, r.jsx)("div", {
                                    className: T.offerPillContainer,
                                    children: (0, r.jsx)(O.Z, { enablePremiumBrandRefresh: !0 }),
                                }),
                            (0, r.jsx)("div", {
                                className: T.marketingPageTextContainer,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "display-md",
                                    color: "header-primary",
                                    className: T.header,
                                    children: I.intl.string(I.t.YCZldH),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: T.body,
                                children: [
                                    R &&
                                        (0, r.jsx)("div", {
                                            className: T.referrerAttributionContainer,
                                            children: (0, r.jsx)(b.Z, {
                                                referrer: N,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    x &&
                                        (0, r.jsx)("div", {
                                            className: T.affinitiesContainer,
                                            children: (0, r.jsx)(g.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: A ? T.singleButtonContainer : T.twoButtonContainer,
                                        children: [
                                            (0, r.jsx)(m.Z, {
                                                size: "md",
                                                fullWidth: A,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: i,
                                            }),
                                            !A &&
                                                (0, r.jsx)(h.Z, {
                                                    variant: "secondary",
                                                    size: "md",
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: T.descriptionContainer,
                                        children: (0, r.jsx)(l.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: I.intl.format(I.t.kt9wxs, { cheapestMonthlyPrice: C }),
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
    A = i.memo(i.forwardRef(S));
