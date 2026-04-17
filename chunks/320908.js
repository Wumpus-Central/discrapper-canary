n.d(t, { Ay: () => v });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(421380),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(953143),
    m = n(40185),
    g = n(526292),
    _ = n(89366),
    x = n(848245),
    h = n(194509),
    A = n(396375),
    p = n(224850),
    T = n(552554),
    f = n(985018),
    S = n(360101);
let E = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: n,
                containerClassName: s,
                buttonClassName: l,
                isApplicationHome: o,
                isDarkMode: d,
                isEligibleForBogoPromotion: c,
            } = e,
            u = c
                ? (0, i.jsx)(A.A, {
                      color: d ? a.XD.BRAND_INVERTED : void 0,
                      className: r()(S.x6, S.Ph, l, { [S.Sq]: t && o, [S.MF]: o && !d }),
                      shinyButtonClassName: d ? void 0 : S.PJ,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, i.jsx)(A.A, {
                      color: d || !o ? a.XD.BRAND_INVERTED : void 0,
                      className: r()(S.x6, S.Ph, l, { [S.Sq]: t && o, [S.MF]: o && !d }),
                      subscriptionTier: n,
                  }),
            m = t && o ? null : (0, i.jsx)(h.A, { className: r()(S.x6, l), color: o ? void 0 : a.XD.WHITE });
        return (0, i.jsxs)("div", { className: r()(S.UD, s), children: [u, " ", m] });
    },
    b = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.p, { className: S.zd }),
                (0, i.jsx)(u.p, { className: S.G }),
                (0, i.jsx)(u.p, { className: S.zy }),
                (0, i.jsx)(u.p, { className: S.GX }),
            ],
        });
function C(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: s } = e,
        l = (0, T.N)();
    return (0, i.jsx)(o.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: r()(S.h_, { [S.If]: n, [S.jn]: s }),
        children: f.intl.format(f.t.kt9wxs, { cheapestMonthlyPrice: l }),
    });
}
let v = s.forwardRef((e, t) => {
    let { className: n, buttonClassName: s, subscriptionTier: l, isDarkMode: u } = e,
        { analyticsLocations: A } = (0, c.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA),
        T = (0, _.QQ)(),
        v = (0, g.ar)(),
        N = (0, m.cg)(),
        I = (0, x.b)().length > 0,
        j = f.intl.string(f.t.YCZldK);
    return (0, i.jsx)(c.f5, {
        value: A,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: r()(S.kL, n, { [S.V1]: !v, [S.Q4]: !v && I }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, i.jsxs)("div", {
                    className: v ? S.I6 : S.G1,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: v ? "display-lg" : "display-md",
                            color: "always-white",
                            children: j,
                        }),
                        I
                            ? (0, i.jsx)("div", {
                                  className: S.DF,
                                  children: (0, i.jsx)(p.A, { textColor: "always-white", smallerText: !v }),
                              })
                            : (0, i.jsx)(C, {}),
                        N || T
                            ? (0, i.jsx)("div", {
                                  className: S.UD,
                                  children: (0, i.jsx)(h.A, { className: r()(S.x6, s), color: a.XD.WHITE }),
                              })
                            : (0, i.jsx)(E, {
                                  subscriptionTier: l,
                                  inOfferExperience: v,
                                  buttonClassName: s,
                                  isDarkMode: u,
                              }),
                        I && (0, i.jsx)(C, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !v && (0, i.jsx)(b, {}),
            ],
        }),
    });
});
