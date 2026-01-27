n.d(t, {
    A: () => Y,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(582754),
    c = n(421380),
    d = n(397927),
    u = n(736653),
    _ = n(793574),
    p = n(688810),
    m = n(531260),
    g = n(160946),
    A = n(287809),
    f = n(166403),
    h = n(927578),
    b = n(40185),
    E = n(89366),
    x = n(411268),
    O = n(422936),
    C = n(234419),
    I = n(863156),
    T = n(194509),
    S = n(396375),
    j = n(511484),
    v = n(231265),
    N = n(795269),
    y = n(38720),
    P = n(788868),
    R = n(985018),
    D = n(562628),
    w = n(196093),
    L = n(979653),
    M = n(255631),
    U = n(193023);

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let k = () => {
        let e = (0, v._)();
        return (0, r.jsx)(N.ir, {
            text: e,
            className: D.QR,
            colorOptions: N.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
        });
    },
    V = () =>
        (0, r.jsx)("div", {
            className: D.Wm,
            children: (0, r.jsx)(d.Heading, {
                className: D.uC,
                variant: "heading-deprecated-12/extrabold",
                children: R.intl.string(R.t["o/oRJB"]),
            }),
        }),
    H = (e) => {
        let t,
            { premiumType: n, isPremiumGroup: i } = e,
            l = (0, u.Ay)();
        if (i)
            if (n === P.PremiumTypes.TIER_0)
                return (0, r.jsx)(d.Heading, {
                    variant: "display-md",
                    className: D.dW,
                    children: R.intl.string(R.t.tUbSDK),
                });
            else
                return (0, r.jsx)(d.Heading, {
                    variant: "display-md",
                    className: D.dW,
                    children: R.intl.string(R.t.Ipxkog),
                });
        t = n === P.PremiumTypes.TIER_0 ? ((0, o.Mw)(l) ? w : L) : (0, o.Mw)(l) ? M : U;
        let s = (0, h.Dd)(n);
        return (0, r.jsx)("img", {
            src: t,
            className: D.wm,
            alt: s,
        });
    },
    B = (e) => {
        let { label: t, column1: n, column2: i } = e;
        return (0, r.jsxs)("tr", {
            className: s()(D.U1, D.YI, D.Y9),
            children: [
                (0, r.jsx)("th", {
                    scope: "col",
                    className: D.Cr,
                    children: t,
                }),
                (0, r.jsx)("th", {
                    scope: "col",
                    className: D.e4,
                    children: n,
                }),
                (0, r.jsx)("th", {
                    scope: "col",
                    className: s()(D.e4, D.Y9),
                    children: i,
                }),
            ],
        });
    },
    F = (e) => {
        let {
            label: t,
            column1: n,
            column2: i,
            withBottomBorder: l = !0,
            withTopBorderRadius: a = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: c = !1,
            shortRow: d = !1,
        } = e;
        return (0, r.jsxs)("tr", {
            className: s()(D.nM, {
                [D.EE]: c,
                [D.Y9]: a,
                [D.kS]: o,
                [D.YI]: l,
                [D.vs]: d,
            }),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: D.nx,
                    children: t,
                }),
                (0, r.jsx)("td", {
                    className: s()(D.Hn, {
                        [D.SD]: c,
                    }),
                    children: n,
                }),
                (0, r.jsx)("td", {
                    className: s()(D.Hn, {
                        [D.Y9]: a,
                        [D.kS]: o,
                        [D.SD]: c,
                    }),
                    children: i,
                }),
            ],
        });
    },
    Y = (e) => {
        var t;
        let n,
            {
                className: l,
                hideCTAs: v = !1,
                headingOverride: w,
                hidePill: L = !1,
                selectedPlanColumnClassName: M,
                selectedPlanTier: U = P.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: Y } = (0, p.Ay)(_.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            W = (0, a.bG)([f.A], () => f.A.hasFetchedSubscriptions()),
            z = (0, g.Y)(P.T7),
            K = (0, u.Ay)(),
            Z = (0, o.qB)(K),
            X = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
            q = null != X && X.isPremiumWithPremiumGroup(),
            J = (0, h.YE)(X, P.PremiumTypes.TIER_2),
            Q = (0, C.V)(),
            $ = null == Q || null == (t = Q.subscription_trial) ? void 0 : t.sku_id,
            ee = (0, E.Us)(),
            et = (0, O.O)(),
            en = null != et && (0, j.U9)(et, P.pe.TIER_2),
            er = (0, j.N1)(P.gD.PREMIUM_MONTH_TIER_2),
            ei = "".concat(er, "/").concat((0, h.FJ)(P.WT.MONTH)),
            el = (0, h.JM)(P.gD.PREMIUM_MONTH_TIER_0),
            es = (0, h.JM)(P.gD.PREMIUM_MONTH_TIER_2),
            ea = (0, m.A)(),
            eo = (0, y.R)(el, es, en, ei, ea.fractionalState),
            ec = (0, b.cg)(),
            { enabled: ed } = x.K.useExperiment({
                location: "PlanComparisonTable",
            });
        if (!W || !z) return null;
        let eu = ed ? R.intl.string(R.t.XXENra) : R.intl.string(R.t.ED4UVD),
            e_ = {
                label: (0, r.jsx)(d.Heading, {
                    className: D.__invalid_textColor,
                    variant: "heading-lg/extrabold",
                    children: eu,
                }),
                column1: (0, r.jsx)(H, {
                    premiumType: P.PremiumTypes.TIER_0,
                    isPremiumGroup: q,
                }),
                column2: (0, r.jsx)(H, {
                    premiumType: P.PremiumTypes.TIER_2,
                    isPremiumGroup: q,
                }),
            };
        v
            ? eo.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0,
              })
            : eo.push({
                  label: null,
                  column1: (0, r.jsxs)(r.Fragment, {
                      children: [
                          $ === P.pe.TIER_2 || ec
                              ? (0, r.jsx)(S.A, {
                                    className: D.x6,
                                    subscriptionTier: P.pe.TIER_0,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: Z ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, r.jsx)(S.A, {
                                    className: D.x6,
                                    subscriptionTier: P.pe.TIER_0,
                                    showIcon: !1,
                                }),
                          ee === P.PremiumTypes.TIER_2 || null != $
                              ? null
                              : (0, r.jsx)(T.A, {
                                    className: D.x6,
                                    subscriptionTier: P.pe.TIER_0,
                                }),
                      ],
                  }),
                  column2: (0, r.jsxs)(r.Fragment, {
                      children: [
                          $ === P.pe.TIER_0
                              ? (0, r.jsx)(S.A, {
                                    className: D.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: Z ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, r.jsx)(S.A, {
                                    className: D.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ec,
                                }),
                          ee === P.PremiumTypes.TIER_0 || null != $
                              ? null
                              : (0, r.jsx)(T.A, {
                                    className: D.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == $,
              }),
            (n = L
                ? null
                : null != $ || null != ee
                  ? (0, r.jsx)(N.ir, {
                        text: null != $ ? R.intl.string(R.t.IBYG5U) : R.intl.string(R.t.ce1v3V),
                        className: D.ls,
                        colorOptions:
                            $ === P.pe.TIER_0
                                ? Z
                                    ? N.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : N.at.PREMIUM_TIER_0_WHITE_FILL
                                : Z
                                  ? J
                                      ? N.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : N.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : N.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : ec
                    ? (0, r.jsx)(k, {})
                    : (0, r.jsx)(V, {}));
        let ep = $ === P.pe.TIER_0 || ee === P.PremiumTypes.TIER_0 || U === P.PremiumTypes.TIER_0;
        return (0, r.jsx)(p.f5, {
            value: Y,
            children: (0, r.jsxs)("div", {
                className: s()(D.zr, l),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, r.jsx)(d.Heading, {
                        className: s()(D.Qw, D.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: null != w ? w : R.intl.string(R.t.FIbMh9),
                    }),
                    q &&
                        (0, r.jsx)(I.A, {
                            premiumGroupRole: X.premiumGroupRole,
                            className: D.vg,
                        }),
                    (0, r.jsxs)("div", {
                        className: D.wY,
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(M, {
                                    [D.A9]: ep,
                                    [D.ce]: !ep && !q,
                                }),
                                children: !ep && n,
                            }),
                            (0, r.jsxs)("table", {
                                className: D.tp,
                                children: [
                                    (0, r.jsx)("thead", {
                                        children: (0, r.jsx)(B, G({}, e_)),
                                    }),
                                    (0, r.jsx)("tbody", {
                                        children: eo.map((e, t) => {
                                            var n, r;
                                            return (0, i.createElement)(
                                                F,
                                                ((n = G({}, e)),
                                                (r = r =
                                                    {
                                                        key: t,
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(r)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              n,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(r, e),
                                                          );
                                                      }),
                                                n),
                                            );
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
