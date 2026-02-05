n.d(t, { Ay: () => b, KN: () => S, U9: () => N });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    _ = n(953143),
    m = n(560138),
    A = n(40185),
    g = n(526292),
    E = n(89366),
    h = n(194509),
    p = n(396375),
    C = n(224850),
    x = n(552554),
    T = n(985018),
    I = n(413515);
let S = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: n,
                containerClassName: s,
                buttonClassName: r,
                isApplicationHome: l,
                isDarkMode: c,
                isEligibleForBogoPromotion: d,
            } = e,
            u = d
                ? (0, i.jsx)(p.A, {
                      color: c ? o.XD.BRAND_INVERTED : void 0,
                      className: a()(I.x6, I.Ph, r, { [I.Sq]: t && l, [I.MF]: l && !c }),
                      shinyButtonClassName: c ? void 0 : I.PJ,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, i.jsx)(p.A, {
                      color: c || !l ? o.XD.BRAND_INVERTED : void 0,
                      className: a()(I.x6, I.Ph, r, { [I.Sq]: t && l, [I.MF]: l && !c }),
                      subscriptionTier: n,
                  }),
            _ = t && l ? null : (0, i.jsx)(h.A, { className: a()(I.x6, r), color: l ? void 0 : o.XD.WHITE });
        return (0, i.jsxs)("div", { className: a()(I.UD, s), children: [u, " ", _] });
    },
    f = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.p, { className: I.zd }),
                (0, i.jsx)(_.p, { className: I.G }),
                (0, i.jsx)(_.p, { className: I.zy }),
                (0, i.jsx)(_.p, { className: I.GX }),
            ],
        });
function N(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: s } = e,
        r = (0, x.N)();
    return (0, i.jsx)(c.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: a()(I.h_, { [I.If]: n, [I.jn]: s }),
        children: T.intl.format(T.t.kt9wxs, { cheapestMonthlyPrice: r }),
    });
}
let b = s.forwardRef((e, t) => {
    let { className: n, buttonClassName: s, subscriptionTier: r, isDarkMode: _ } = e,
        { analyticsLocations: p } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, E.QQ)(),
        b = (0, g.ar)(),
        R = (0, A.cg)(),
        v = (0, l.bG)([m.A], () => m.A.affinities).length > 0,
        O = T.intl.string(T.t.YCZldK);
    return (0, i.jsx)(u.f5, {
        value: p,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: a()(I.kL, n, { [I.V1]: !b, [I.Q4]: !b && v }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, i.jsxs)("div", {
                    className: b ? I.I6 : I.G1,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: b ? "display-lg" : "display-md",
                            color: "always-white",
                            children: O,
                        }),
                        v
                            ? (0, i.jsx)("div", {
                                  className: I.DF,
                                  children: (0, i.jsx)(C.A, { textColor: "always-white", smallerText: !b }),
                              })
                            : (0, i.jsx)(N, {}),
                        R || x
                            ? (0, i.jsx)("div", {
                                  className: I.UD,
                                  children: (0, i.jsx)(h.A, { className: a()(I.x6, s), color: o.XD.WHITE }),
                              })
                            : (0, i.jsx)(S, {
                                  subscriptionTier: r,
                                  inOfferExperience: b,
                                  buttonClassName: s,
                                  isDarkMode: _,
                              }),
                        v && (0, i.jsx)(N, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !b && (0, i.jsx)(f, {}),
            ],
        }),
    });
});
