n.d(t, {
    PK: () => I,
    ZP: () => C,
    _O: () => A,
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
    _ = n(357355),
    p = n(367074),
    h = n(140465),
    m = n(775412),
    g = n(736519),
    E = n(784238),
    b = n(422034),
    y = n(206127),
    O = n(388032),
    v = n(876544);
let I = (e) => {
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
    T = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar1 }),
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar2 }),
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar3 }),
                (0, r.jsx)(f.A, { className: v.settingsSparkleStar4 }),
            ],
        }),
    S = (e, t) => {
        let { className: n, buttonClassName: i, subscriptionTier: a, isDarkMode: f } = e,
            { analyticsLocations: E } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            y = (0, m._O)(),
            S = (0, h.Nx)(),
            C = (0, p.Vi)(),
            N = (0, s.e7)([_.Z], () => _.Z.affinities).length > 0,
            R = O.intl.string(O.t.YCZldK);
        return (0, r.jsx)(d.Gt, {
            value: E,
            children: (0, r.jsxs)("div", {
                ref: t,
                className: o()(v.container, n, {
                    [v.settingsContainer]: !S,
                    [v.affinityHeight]: !S && N,
                }),
                "data-testid": "v2-marketing-page-hero-header",
                children: [
                    (0, r.jsxs)("div", {
                        className: S ? v.fullscreenTextContainer : v.settingsTextContainer,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: S ? "display-lg" : "display-md",
                                color: "always-white",
                                children: R,
                            }),
                            N
                                ? (0, r.jsx)("div", {
                                      className: v.affinityDescription,
                                      children: (0, r.jsx)(b.Z, {
                                          textColor: "always-white",
                                          smallerText: !S,
                                      }),
                                  })
                                : (0, r.jsx)(A, {}),
                            C || y
                                ? (0, r.jsx)("div", {
                                      className: v.buttonContainer,
                                      children: (0, r.jsx)(g.Z, {
                                          className: o()(v.button, i),
                                          color: l.Tt.WHITE,
                                      }),
                                  })
                                : (0, r.jsx)(I, {
                                      subscriptionTier: a,
                                      inOfferExperience: S,
                                      buttonClassName: i,
                                      isDarkMode: f,
                                  }),
                            N &&
                                (0, r.jsx)(A, {
                                    variant: "text-md/normal",
                                    withBottomMargin: !1,
                                }),
                        ],
                    }),
                    !S && (0, r.jsx)(T, {}),
                ],
            }),
        });
    };
function A(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: i } = e,
        a = (0, y.$)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-secondary" : "always-white",
        className: o()(v.description, {
            [v.descriptionBottomMargin]: n,
            [v.descriptionV2]: i,
        }),
        children: O.intl.format(O.t.kt9wxs, { cheapestMonthlyPrice: a }),
    });
}
let C = i.forwardRef(S);
