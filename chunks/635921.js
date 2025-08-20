n.d(t, {
    PK: () => T,
    ZP: () => N,
    _O: () => C,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
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
    g = n(47280),
    E = n(736519),
    b = n(784238),
    y = n(422034),
    O = n(206127),
    v = n(388032),
    I = n(876544);
let T = (e) => {
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
                ? (0, r.jsx)(b.Z, {
                      color: c ? l.Tt.BRAND_INVERTED : void 0,
                      className: o()(I.button, I.subButton, a, {
                          [I.extendedButton]: t && s,
                          [I.whiteSubButton]: s && !c,
                      }),
                      shinyButtonClassName: c ? void 0 : I.tier2Gradient,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, r.jsx)(b.Z, {
                      color: c || !s ? l.Tt.BRAND_INVERTED : void 0,
                      className: o()(I.button, I.subButton, a, {
                          [I.extendedButton]: t && s,
                          [I.whiteSubButton]: s && !c,
                      }),
                      subscriptionTier: n,
                  }),
            f =
                t && s
                    ? null
                    : (0, r.jsx)(E.Z, {
                          className: o()(I.button, a),
                          color: s ? void 0 : l.Tt.WHITE,
                      });
        return (0, r.jsxs)("div", {
            className: o()(I.buttonContainer, i),
            children: [d, " ", f],
        });
    },
    S = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.A, { className: I.settingsSparkleStar1 }),
                (0, r.jsx)(f.A, { className: I.settingsSparkleStar2 }),
                (0, r.jsx)(f.A, { className: I.settingsSparkleStar3 }),
                (0, r.jsx)(f.A, { className: I.settingsSparkleStar4 }),
            ],
        }),
    A = (e, t) => {
        let { className: n, buttonClassName: i, subscriptionTier: a, isDarkMode: f } = e,
            { analyticsLocations: b } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            O = (0, m._O)(),
            A = (0, h.Nx)(),
            N = (0, p.Vi)(),
            R = (0, s.e7)([_.Z], () => _.Z.affinities).length > 0,
            P = (0, g.ZP)({ location: "HeroHeading" }) ? v.intl.string(v.t["EW+VIS"]) : v.intl.string(v.t.YCZldH);
        return (0, r.jsx)(d.Gt, {
            value: b,
            children: (0, r.jsxs)("div", {
                ref: t,
                className: o()(I.container, n, {
                    [I.settingsContainer]: !A,
                    [I.affinityHeight]: !A && R,
                }),
                "data-testid": "v2-marketing-page-hero-header",
                children: [
                    (0, r.jsxs)("div", {
                        className: A ? I.fullscreenTextContainer : I.settingsTextContainer,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: A ? "display-lg" : "display-md",
                                color: "always-white",
                                children: P,
                            }),
                            R
                                ? (0, r.jsx)("div", {
                                      className: I.affinityDescription,
                                      children: (0, r.jsx)(y.Z, {
                                          textColor: "always-white",
                                          smallerText: !A,
                                      }),
                                  })
                                : (0, r.jsx)(C, {}),
                            N || O
                                ? (0, r.jsx)("div", {
                                      className: I.buttonContainer,
                                      children: (0, r.jsx)(E.Z, {
                                          className: o()(I.button, i),
                                          color: l.Tt.WHITE,
                                      }),
                                  })
                                : (0, r.jsx)(T, {
                                      subscriptionTier: a,
                                      inOfferExperience: A,
                                      buttonClassName: i,
                                      isDarkMode: f,
                                  }),
                            R &&
                                (0, r.jsx)(C, {
                                    variant: "text-md/normal",
                                    withBottomMargin: !1,
                                }),
                        ],
                    }),
                    !A && (0, r.jsx)(S, {}),
                ],
            }),
        });
    };
function C(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: i } = e,
        a = (0, O.$)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-secondary" : "always-white",
        className: o()(I.description, {
            [I.descriptionBottomMargin]: n,
            [I.descriptionV2]: i,
        }),
        children: v.intl.format(v.t.kt9wxs, { cheapestMonthlyPrice: a }),
    });
}
let N = i.forwardRef(A);
