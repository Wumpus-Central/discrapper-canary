n.d(t, {
    Ay: () => C,
    KN: () => v,
    U9: () => T,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(793574),
    d = n(688810),
    f = n(953143),
    p = n(560138),
    _ = n(40185),
    h = n(526292),
    m = n(89366),
    g = n(194509),
    E = n(396375),
    b = n(224850),
    y = n(552554),
    O = n(985018),
    A = n(413515);
let v = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: n,
                containerClassName: i,
                buttonClassName: a,
                isApplicationHome: o,
                isDarkMode: c,
                isEligibleForBogoPromotion: u,
            } = e,
            d = u
                ? (0, r.jsx)(E.A, {
                      color: c ? l.XD.BRAND_INVERTED : void 0,
                      className: s()(A.x6, A.Ph, a, {
                          [A.Sq]: t && o,
                          [A.MF]: o && !c,
                      }),
                      shinyButtonClassName: c ? void 0 : A.PJ,
                      subscriptionTier: n,
                      hasActivePromotion: !0,
                  })
                : (0, r.jsx)(E.A, {
                      color: c || !o ? l.XD.BRAND_INVERTED : void 0,
                      className: s()(A.x6, A.Ph, a, {
                          [A.Sq]: t && o,
                          [A.MF]: o && !c,
                      }),
                      subscriptionTier: n,
                  }),
            f =
                t && o
                    ? null
                    : (0, r.jsx)(g.A, {
                          className: s()(A.x6, a),
                          color: o ? void 0 : l.XD.WHITE,
                      });
        return (0, r.jsxs)("div", {
            className: s()(A.UD, i),
            children: [d, " ", f],
        });
    },
    S = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.p, {
                    className: A.zd,
                }),
                (0, r.jsx)(f.p, {
                    className: A.G,
                }),
                (0, r.jsx)(f.p, {
                    className: A.zy,
                }),
                (0, r.jsx)(f.p, {
                    className: A.GX,
                }),
            ],
        }),
    I = (e, t) => {
        let { className: n, buttonClassName: i, subscriptionTier: a, isDarkMode: f } = e,
            { analyticsLocations: E } = (0, d.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
            y = (0, m.QQ)(),
            I = (0, h.ar)(),
            C = (0, _.cg)(),
            N = (0, o.bG)([p.A], () => p.A.affinities).length > 0,
            R = O.intl.string(O.t.YCZldK);
        return (0, r.jsx)(d.f5, {
            value: E,
            children: (0, r.jsxs)("div", {
                ref: t,
                className: s()(A.kL, n, {
                    [A.V1]: !I,
                    [A.Q4]: !I && N,
                }),
                "data-testid": "v2-marketing-page-hero-header",
                children: [
                    (0, r.jsxs)("div", {
                        className: I ? A.I6 : A.G1,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: I ? "display-lg" : "display-md",
                                color: "always-white",
                                children: R,
                            }),
                            N
                                ? (0, r.jsx)("div", {
                                      className: A.DF,
                                      children: (0, r.jsx)(b.A, {
                                          textColor: "always-white",
                                          smallerText: !I,
                                      }),
                                  })
                                : (0, r.jsx)(T, {}),
                            C || y
                                ? (0, r.jsx)("div", {
                                      className: A.UD,
                                      children: (0, r.jsx)(g.A, {
                                          className: s()(A.x6, i),
                                          color: l.XD.WHITE,
                                      }),
                                  })
                                : (0, r.jsx)(v, {
                                      subscriptionTier: a,
                                      inOfferExperience: I,
                                      buttonClassName: i,
                                      isDarkMode: f,
                                  }),
                            N &&
                                (0, r.jsx)(T, {
                                    variant: "text-md/normal",
                                    withBottomMargin: !1,
                                }),
                        ],
                    }),
                    !I && (0, r.jsx)(S, {}),
                ],
            }),
        });
    };

function T(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: n = !0, isApplicationHome: i } = e,
        a = (0, y.N)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: s()(A.h_, {
            [A.If]: n,
            [A.jn]: i,
        }),
        children: O.intl.format(O.t.kt9wxs, {
            cheapestMonthlyPrice: a,
        }),
    });
}
let C = i.forwardRef(I);
