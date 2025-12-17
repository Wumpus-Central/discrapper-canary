n.d(t, {
    PK: () => S,
    ZP: () => A,
    _O: () => C,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(535322),
    p = n(357355),
    _ = n(367074),
    m = n(140465),
    h = n(775412),
    g = n(736519),
    E = n(784238),
    b = n(422034),
    y = n(206127),
    O = n(388032),
    v = n(904256);
let S = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: n,
                containerClassName: i,
                buttonClassName: a,
                isApplicationHome: s,
                isDarkMode: c,
                isEligibleForBogoPromotion: u,
            } = e,
            d = u
                ? (0, r.jsx)(E.Z, {
                      color: c ? l.Tt.BRAND_INVERTED : void 0,
                      className: o()(v.button, v.subButton, a, {
                          [v.extendedButton]: t && s,
                          [v.whiteSubButton]: s && !c,
                      }),
                      shinyButtonClassName: c ? void 0 : v.tier2Gradient,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, r.jsx)(E.Z, {
                      color: c || !s ? l.Tt.BRAND_INVERTED : void 0,
                      className: o()(v.button, v.subButton, a, {
                          [v.extendedButton]: t && s,
                          [v.whiteSubButton]: s && !c,
                      }),
                      subscriptionTier: n,
                  }),
            f =
                t && s
                    ? null
                    : (0, r.jsx)(g.Z, {
                          className: o()(v.button, a),
                          color: s ? void 0 : l.Tt.WHITE,
                      });
        return (0, r.jsxs)("div", {
            className: o()(v.buttonContainer, i),
            children: [d, " ", f],
        });
    },
    I = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar1 }),
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar2 }),
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar3 }),
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar4 }),
            ],
        }),
    T = (e, t) => {
        let { className: n, buttonClassName: i, subscriptionTier: a, isDarkMode: f } = e,
            { analyticsLocations: E } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            y = (0, h._O)(),
            T = (0, m.Nx)(),
            A = (0, _.Vi)(),
            N = (0, s.e7)([p.Z], () => p.Z.affinities).length > 0,
            P = O.intl.string(O.t.YCZldK);
        return (0, r.jsx)(d.Gt, {
            value: E,
            children: (0, r.jsxs)("div", {
                ref: t,
                className: o()(v.container, n, {
                    [v.settingsContainer]: !T,
                    [v.affinityHeight]: !T && N,
                }),
                "data-testid": "v2-marketing-page-hero-header",
                children: [
                    (0, r.jsxs)("div", {
                        className: T ? v.fullscreenTextContainer : v.settingsTextContainer,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: T ? "display-lg" : "display-md",
                                color: "always-white",
                                children: P,
                            }),
                            N
                                ? (0, r.jsx)("div", {
                                      className: v.affinityDescription,
                                      children: (0, r.jsx)(b.Z, {
                                          textColor: "always-white",
                                          smallerText: !T,
                                      }),
                                  })
                                : (0, r.jsx)(C, {}),
                            A || y
                                ? (0, r.jsx)("div", {
                                      className: v.buttonContainer,
                                      children: (0, r.jsx)(g.Z, {
                                          className: o()(v.button, i),
                                          color: l.Tt.WHITE,
                                      }),
                                  })
                                : (0, r.jsx)(S, {
                                      subscriptionTier: a,
                                      inOfferExperience: T,
                                      buttonClassName: i,
                                      isDarkMode: f,
                                  }),
                            N &&
                                (0, r.jsx)(C, {
                                    variant: "text-md/normal",
                                    withBottomMargin: !1,
                                }),
                        ],
                    }),
                    !T && (0, r.jsx)(I, {}),
                ],
            }),
        });
    };
function C(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: i } = e,
        a = (0, y.$)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: o()(v.description, {
            [v.descriptionBottomMargin]: n,
            [v.descriptionV2]: i,
        }),
        children: O.intl.format(O.t.kt9wxs, { cheapestMonthlyPrice: a }),
    });
}
let A = i.forwardRef(T);
