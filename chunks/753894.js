n.d(t, {
    Ay: () => S,
    KN: () => C,
    U9: () => T,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    _ = n(953143),
    p = n(560138),
    m = n(40185),
    g = n(526292),
    A = n(89366),
    f = n(194509),
    h = n(396375),
    b = n(224850),
    E = n(552554),
    x = n(985018),
    O = n(413515);
let C = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: n,
                containerClassName: i,
                buttonClassName: l,
                isApplicationHome: a,
                isDarkMode: c,
                isEligibleForBogoPromotion: d,
            } = e,
            u = d
                ? (0, r.jsx)(h.A, {
                      color: c ? o.XD.BRAND_INVERTED : void 0,
                      className: s()(O.x6, O.Ph, l, {
                          [O.Sq]: t && a,
                          [O.MF]: a && !c,
                      }),
                      shinyButtonClassName: c ? void 0 : O.PJ,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, r.jsx)(h.A, {
                      color: c || !a ? o.XD.BRAND_INVERTED : void 0,
                      className: s()(O.x6, O.Ph, l, {
                          [O.Sq]: t && a,
                          [O.MF]: a && !c,
                      }),
                      subscriptionTier: n,
                  }),
            _ =
                t && a
                    ? null
                    : (0, r.jsx)(f.A, {
                          className: s()(O.x6, l),
                          color: a ? void 0 : o.XD.WHITE,
                      });
        return (0, r.jsxs)("div", {
            className: s()(O.UD, i),
            children: [u, " ", _],
        });
    },
    I = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.p, {
                    className: O.zd,
                }),
                (0, r.jsx)(_.p, {
                    className: O.G,
                }),
                (0, r.jsx)(_.p, {
                    className: O.zy,
                }),
                (0, r.jsx)(_.p, {
                    className: O.GX,
                }),
            ],
        });

function T(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: i } = e,
        l = (0, E.N)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: s()(O.h_, {
            [O.If]: n,
            [O.jn]: i,
        }),
        children: x.intl.format(x.t.kt9wxs, {
            cheapestMonthlyPrice: l,
        }),
    });
}
let S = i.forwardRef((e, t) => {
    let { className: n, buttonClassName: i, subscriptionTier: l, isDarkMode: _ } = e,
        { analyticsLocations: h } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA),
        E = (0, A.QQ)(),
        S = (0, g.ar)(),
        j = (0, m.cg)(),
        v = (0, a.bG)([p.A], () => p.A.affinities).length > 0,
        N = x.intl.string(x.t.YCZldK);
    return (0, r.jsx)(u.f5, {
        value: h,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: s()(O.kL, n, {
                [O.V1]: !S,
                [O.Q4]: !S && v,
            }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, r.jsxs)("div", {
                    className: S ? O.I6 : O.G1,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: S ? "display-lg" : "display-md",
                            color: "always-white",
                            children: N,
                        }),
                        v
                            ? (0, r.jsx)("div", {
                                  className: O.DF,
                                  children: (0, r.jsx)(b.A, {
                                      textColor: "always-white",
                                      smallerText: !S,
                                  }),
                              })
                            : (0, r.jsx)(T, {}),
                        j || E
                            ? (0, r.jsx)("div", {
                                  className: O.UD,
                                  children: (0, r.jsx)(f.A, {
                                      className: s()(O.x6, i),
                                      color: o.XD.WHITE,
                                  }),
                              })
                            : (0, r.jsx)(C, {
                                  subscriptionTier: l,
                                  inOfferExperience: S,
                                  buttonClassName: i,
                                  isDarkMode: _,
                              }),
                        v &&
                            (0, r.jsx)(T, {
                                variant: "text-md/normal",
                                withBottomMargin: !1,
                            }),
                    ],
                }),
                !S && (0, r.jsx)(I, {}),
            ],
        }),
    });
});
