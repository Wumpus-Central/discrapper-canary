n.d(t, { Ay: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    _ = n(953143),
    g = n(560138),
    A = n(40185),
    m = n(526292),
    h = n(89366),
    p = n(194509),
    x = n(396375),
    E = n(224850),
    T = n(552554),
    S = n(985018),
    C = n(986970);
let I = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: n,
                containerClassName: s,
                buttonClassName: l,
                isApplicationHome: r,
                isDarkMode: d,
                isEligibleForBogoPromotion: c,
            } = e,
            u = c
                ? (0, i.jsx)(x.A, {
                      color: d ? o.XD.BRAND_INVERTED : void 0,
                      className: a()(C.x6, C.Ph, l, { [C.Sq]: t && r, [C.MF]: r && !d }),
                      shinyButtonClassName: d ? void 0 : C.PJ,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, i.jsx)(x.A, {
                      color: d || !r ? o.XD.BRAND_INVERTED : void 0,
                      className: a()(C.x6, C.Ph, l, { [C.Sq]: t && r, [C.MF]: r && !d }),
                      subscriptionTier: n,
                  }),
            _ = t && r ? null : (0, i.jsx)(p.A, { className: a()(C.x6, l), color: r ? void 0 : o.XD.WHITE });
        return (0, i.jsxs)("div", { className: a()(C.UD, s), children: [u, " ", _] });
    },
    f = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.p, { className: C.zd }),
                (0, i.jsx)(_.p, { className: C.G }),
                (0, i.jsx)(_.p, { className: C.zy }),
                (0, i.jsx)(_.p, { className: C.GX }),
            ],
        });
function b(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: s } = e,
        l = (0, T.N)();
    return (0, i.jsx)(d.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: a()(C.h_, { [C.If]: n, [C.jn]: s }),
        children: S.intl.format(S.t.kt9wxs, { cheapestMonthlyPrice: l }),
    });
}
let N = s.forwardRef((e, t) => {
    let { className: n, buttonClassName: s, subscriptionTier: l, isDarkMode: _ } = e,
        { analyticsLocations: x } = (0, u.Ay)(c.A.PREMIUM_MARKETING_HERO_CTA),
        T = (0, h.QQ)(),
        N = (0, m.ar)(),
        v = (0, A.cg)(),
        O = (0, r.bG)([g.A], () => g.A.affinities).length > 0,
        j = S.intl.string(S.t.YCZldK);
    return (0, i.jsx)(u.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: a()(C.kL, n, { [C.V1]: !N, [C.Q4]: !N && O }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, i.jsxs)("div", {
                    className: N ? C.I6 : C.G1,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: N ? "display-lg" : "display-md",
                            color: "always-white",
                            children: j,
                        }),
                        O
                            ? (0, i.jsx)("div", {
                                  className: C.DF,
                                  children: (0, i.jsx)(E.A, { textColor: "always-white", smallerText: !N }),
                              })
                            : (0, i.jsx)(b, {}),
                        v || T
                            ? (0, i.jsx)("div", {
                                  className: C.UD,
                                  children: (0, i.jsx)(p.A, { className: a()(C.x6, s), color: o.XD.WHITE }),
                              })
                            : (0, i.jsx)(I, {
                                  subscriptionTier: l,
                                  inOfferExperience: N,
                                  buttonClassName: s,
                                  isDarkMode: _,
                              }),
                        O && (0, i.jsx)(b, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !N && (0, i.jsx)(f, {}),
            ],
        }),
    });
});
