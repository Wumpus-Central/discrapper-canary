n.d(t, { Ay: () => v });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    m = n(953143),
    g = n(560138),
    _ = n(40185),
    x = n(526292),
    A = n(89366),
    h = n(194509),
    p = n(396375),
    T = n(224850),
    f = n(552554),
    S = n(985018),
    b = n(580373);
let E = (e) => {
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
                ? (0, i.jsx)(p.A, {
                      color: d ? o.XD.BRAND_INVERTED : void 0,
                      className: a()(b.x6, b.Ph, l, { [b.Sq]: t && r, [b.MF]: r && !d }),
                      shinyButtonClassName: d ? void 0 : b.PJ,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, i.jsx)(p.A, {
                      color: d || !r ? o.XD.BRAND_INVERTED : void 0,
                      className: a()(b.x6, b.Ph, l, { [b.Sq]: t && r, [b.MF]: r && !d }),
                      subscriptionTier: n,
                  }),
            m = t && r ? null : (0, i.jsx)(h.A, { className: a()(b.x6, l), color: r ? void 0 : o.XD.WHITE });
        return (0, i.jsxs)("div", { className: a()(b.UD, s), children: [u, " ", m] });
    },
    C = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.p, { className: b.zd }),
                (0, i.jsx)(m.p, { className: b.G }),
                (0, i.jsx)(m.p, { className: b.zy }),
                (0, i.jsx)(m.p, { className: b.GX }),
            ],
        });
function N(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: s } = e,
        l = (0, f.N)();
    return (0, i.jsx)(d.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: a()(b.h_, { [b.If]: n, [b.jn]: s }),
        children: S.intl.format(S.t.kt9wxs, { cheapestMonthlyPrice: l }),
    });
}
let v = s.forwardRef((e, t) => {
    let { className: n, buttonClassName: s, subscriptionTier: l, isDarkMode: m } = e,
        { analyticsLocations: p } = (0, u.Ay)(c.A.PREMIUM_MARKETING_HERO_CTA),
        f = (0, A.QQ)(),
        v = (0, x.ar)(),
        I = (0, _.cg)(),
        j = (0, r.bG)([g.A], () => g.A.affinities).length > 0,
        y = S.intl.string(S.t.YCZldK);
    return (0, i.jsx)(u.f5, {
        value: p,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: a()(b.kL, n, { [b.V1]: !v, [b.Q4]: !v && j }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, i.jsxs)("div", {
                    className: v ? b.I6 : b.G1,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: v ? "display-lg" : "display-md",
                            color: "always-white",
                            children: y,
                        }),
                        j
                            ? (0, i.jsx)("div", {
                                  className: b.DF,
                                  children: (0, i.jsx)(T.A, { textColor: "always-white", smallerText: !v }),
                              })
                            : (0, i.jsx)(N, {}),
                        I || f
                            ? (0, i.jsx)("div", {
                                  className: b.UD,
                                  children: (0, i.jsx)(h.A, { className: a()(b.x6, s), color: o.XD.WHITE }),
                              })
                            : (0, i.jsx)(E, {
                                  subscriptionTier: l,
                                  inOfferExperience: v,
                                  buttonClassName: s,
                                  isDarkMode: m,
                              }),
                        j && (0, i.jsx)(N, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !v && (0, i.jsx)(C, {}),
            ],
        }),
    });
});
