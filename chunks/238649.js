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
    g = n(403503),
    E = n(422034),
    b = n(206127),
    y = n(710220),
    O = n(164662),
    v = n(638631),
    I = n(254139),
    T = n(388032),
    S = n(350169);
let A = (e, t) => {
        let { className: n, subscriptionTier: i, isEligibleForBogoPromotion: a, offerExpiresAt: A } = e,
            { analyticsLocations: C } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            N = (0, _.Nx)(),
            R = (0, b.$)(),
            P = (0, p.Z)(),
            D = null != P,
            w = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: L, visibilityPercentage: x } = (0, O.E)(!w),
            M = (0, s.e7)([f.Z], () => f.Z.affinities),
            k = !D && M.length > 0;
        return (0, r.jsx)(d.Gt, {
            value: C,
            children: (0, r.jsx)("div", {
                ref: t,
                className: o()(S.container, null != A && S.containerWithOfferCountdown, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: L,
                    children: (0, r.jsxs)("div", {
                        className: S.contentContainer,
                        children: [
                            (0, r.jsx)(I.Z, { containerVisibilityPercentage: x }),
                            N &&
                                (null != A
                                    ? (0, r.jsx)(g.Z, {
                                          expiresAt: A,
                                          className: S.heroOfferCountdown,
                                      })
                                    : (0, r.jsx)("div", {
                                          className: S.offerPillContainer,
                                          children: (0, r.jsx)(v.Z, { enablePremiumBrandRefresh: !0 }),
                                      })),
                            (0, r.jsx)("div", {
                                className: S.marketingPageTextContainer,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "display-md",
                                    color: "header-primary",
                                    className: S.header,
                                    children: T.intl.string(T.t.YCZldK),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: S.body,
                                children: [
                                    D &&
                                        (0, r.jsx)("div", {
                                            className: S.referrerAttributionContainer,
                                            children: (0, r.jsx)(y.Z, {
                                                referrer: P,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    k &&
                                        (0, r.jsx)("div", {
                                            className: S.affinitiesContainer,
                                            children: (0, r.jsx)(E.Z, {
                                                textColor: "text-primary",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: N ? S.singleButtonContainer : S.twoButtonContainer,
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
                                        className: S.descriptionContainer,
                                        children: (0, r.jsx)(l.Text, {
                                            color: "text-tertiary",
                                            variant: "text-xs/medium",
                                            children: T.intl.format(T.t.kt9wxs, { cheapestMonthlyPrice: R }),
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
