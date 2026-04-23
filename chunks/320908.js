s.d(t, { Ay: () => v });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(862482),
    o = s(534514),
    c = s(834730),
    d = s(793574),
    m = s(688810),
    u = s(953143),
    _ = s(40185),
    x = s(526292),
    p = s(89366),
    g = s(848245),
    h = s(194509),
    f = s(396375),
    C = s(224850),
    b = s(552554),
    j = s(985018),
    A = s(360101);
let N = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: s,
                containerClassName: a,
                buttonClassName: i,
                isApplicationHome: o,
                isDarkMode: c,
                isEligibleForBogoPromotion: d,
            } = e,
            m = d
                ? (0, r.jsx)(f.A, {
                      color: c ? l.XD.BRAND_INVERTED : void 0,
                      className: n()(A.x6, A.Ph, i, { [A.Sq]: t && o, [A.MF]: o && !c }),
                      shinyButtonClassName: c ? void 0 : A.PJ,
                      subscriptionTier: s,
                      hasActivePromotion: !0,
                  })
                : (0, r.jsx)(f.A, {
                      color: c || !o ? l.XD.BRAND_INVERTED : void 0,
                      className: n()(A.x6, A.Ph, i, { [A.Sq]: t && o, [A.MF]: o && !c }),
                      subscriptionTier: s,
                  }),
            u = t && o ? null : (0, r.jsx)(h.A, { className: n()(A.x6, i), color: o ? void 0 : l.XD.WHITE });
        return (0, r.jsxs)("div", { className: n()(A.UD, a), children: [m, " ", u] });
    },
    I = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.p, { className: A.zd }),
                (0, r.jsx)(u.p, { className: A.G }),
                (0, r.jsx)(u.p, { className: A.zy }),
                (0, r.jsx)(u.p, { className: A.GX }),
            ],
        });
function T(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: a } = e,
        i = (0, b.N)();
    return (0, r.jsx)(c.E, {
        variant: t,
        color: a ? "text-subtle" : "always-white",
        className: n()(A.h_, { [A.If]: s, [A.jn]: a }),
        children: j.intl.format(j.t.kt9wxs, { cheapestMonthlyPrice: i }),
    });
}
let v = a.forwardRef((e, t) => {
    let { className: s, buttonClassName: a, subscriptionTier: i, isDarkMode: c } = e,
        { analyticsLocations: u } = (0, m.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA),
        f = (0, p.QQ)(),
        b = (0, x.ar)(),
        v = (0, _.cg)(),
        E = (0, g.b)().length > 0,
        R = j.intl.string(j.t.YCZldK);
    return (0, r.jsx)(m.f5, {
        value: u,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: n()(A.kL, s, { [A.V1]: !b, [A.Q4]: !b && E }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, r.jsxs)("div", {
                    className: b ? A.I6 : A.G1,
                    children: [
                        (0, r.jsx)(o.D, {
                            variant: b ? "display-lg" : "display-md",
                            color: "always-white",
                            children: R,
                        }),
                        E
                            ? (0, r.jsx)("div", {
                                  className: A.DF,
                                  children: (0, r.jsx)(C.A, { textColor: "always-white", smallerText: !b }),
                              })
                            : (0, r.jsx)(T, {}),
                        v || f
                            ? (0, r.jsx)("div", {
                                  className: A.UD,
                                  children: (0, r.jsx)(h.A, { className: n()(A.x6, a), color: l.XD.WHITE }),
                              })
                            : (0, r.jsx)(N, {
                                  subscriptionTier: i,
                                  inOfferExperience: b,
                                  buttonClassName: a,
                                  isDarkMode: c,
                              }),
                        E && (0, r.jsx)(T, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !b && (0, r.jsx)(I, {}),
            ],
        }),
    });
});
