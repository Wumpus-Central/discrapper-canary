n.d(t, { Ay: () => b, KN: () => I, U9: () => N });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    _ = n(953143),
    m = n(560138),
    A = n(40185),
    g = n(526292),
    h = n(89366),
    x = n(194509),
    p = n(396375),
    E = n(224850),
    C = n(552554),
    T = n(985018),
    S = n(986970);
let I = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: n,
                containerClassName: s,
                buttonClassName: a,
                isApplicationHome: r,
                isDarkMode: c,
                isEligibleForBogoPromotion: d,
            } = e,
            u = d
                ? (0, i.jsx)(p.A, {
                      color: c ? o.XD.BRAND_INVERTED : void 0,
                      className: l()(S.x6, S.Ph, a, { [S.Sq]: t && r, [S.MF]: r && !c }),
                      shinyButtonClassName: c ? void 0 : S.PJ,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, i.jsx)(p.A, {
                      color: c || !r ? o.XD.BRAND_INVERTED : void 0,
                      className: l()(S.x6, S.Ph, a, { [S.Sq]: t && r, [S.MF]: r && !c }),
                      subscriptionTier: n,
                  }),
            _ = t && r ? null : (0, i.jsx)(x.A, { className: l()(S.x6, a), color: r ? void 0 : o.XD.WHITE });
        return (0, i.jsxs)("div", { className: l()(S.UD, s), children: [u, " ", _] });
    },
    f = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.p, { className: S.zd }),
                (0, i.jsx)(_.p, { className: S.G }),
                (0, i.jsx)(_.p, { className: S.zy }),
                (0, i.jsx)(_.p, { className: S.GX }),
            ],
        });
function N(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: s } = e,
        a = (0, C.N)();
    return (0, i.jsx)(c.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: l()(S.h_, { [S.If]: n, [S.jn]: s }),
        children: T.intl.format(T.t.kt9wxs, { cheapestMonthlyPrice: a }),
    });
}
let b = s.forwardRef((e, t) => {
    let { className: n, buttonClassName: s, subscriptionTier: a, isDarkMode: _ } = e,
        { analyticsLocations: p } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA),
        C = (0, h.QQ)(),
        b = (0, g.ar)(),
        j = (0, A.cg)(),
        v = (0, r.bG)([m.A], () => m.A.affinities).length > 0,
        O = T.intl.string(T.t.YCZldK);
    return (0, i.jsx)(u.f5, {
        value: p,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: l()(S.kL, n, { [S.V1]: !b, [S.Q4]: !b && v }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, i.jsxs)("div", {
                    className: b ? S.I6 : S.G1,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: b ? "display-lg" : "display-md",
                            color: "always-white",
                            children: O,
                        }),
                        v
                            ? (0, i.jsx)("div", {
                                  className: S.DF,
                                  children: (0, i.jsx)(E.A, { textColor: "always-white", smallerText: !b }),
                              })
                            : (0, i.jsx)(N, {}),
                        j || C
                            ? (0, i.jsx)("div", {
                                  className: S.UD,
                                  children: (0, i.jsx)(x.A, { className: l()(S.x6, s), color: o.XD.WHITE }),
                              })
                            : (0, i.jsx)(I, {
                                  subscriptionTier: a,
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
