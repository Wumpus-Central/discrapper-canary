n.d(t, {
    A: () => z,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(582754),
    c = n(421380),
    u = n(397927),
    d = n(736653),
    f = n(793574),
    p = n(688810),
    _ = n(531260),
    h = n(160946),
    m = n(287809),
    g = n(166403),
    E = n(927578),
    b = n(40185),
    y = n(89366),
    O = n(411268),
    A = n(422936),
    v = n(234419),
    S = n(863156),
    I = n(194509),
    T = n(396375),
    C = n(511484),
    N = n(231265),
    R = n(795269),
    w = n(38720),
    P = n(788868),
    D = n(985018),
    x = n(562628),
    L = n(196093),
    j = n(979653),
    M = n(255631),
    k = n(193023);

function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

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
                U(e, t, n[t]);
            });
    }
    return e;
}

function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = () => {
        let e = (0, N._)();
        return (0, r.jsx)(R.ir, {
            text: e,
            className: x.QR,
            colorOptions: R.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
        });
    },
    H = () =>
        (0, r.jsx)("div", {
            className: x.Wm,
            children: (0, r.jsx)(u.Heading, {
                className: x.uC,
                variant: "heading-deprecated-12/extrabold",
                children: D.intl.string(D.t["o/oRJB"]),
            }),
        }),
    Y = (e) => {
        let t,
            { premiumType: n, isPremiumGroup: i } = e,
            a = (0, d.Ay)();
        if (i)
            if (n === P.PremiumTypes.TIER_0)
                return (0, r.jsx)(u.Heading, {
                    variant: "display-md",
                    className: x.dW,
                    children: D.intl.string(D.t.tUbSDK),
                });
            else
                return (0, r.jsx)(u.Heading, {
                    variant: "display-md",
                    className: x.dW,
                    children: D.intl.string(D.t.Ipxkog),
                });
        t = n === P.PremiumTypes.TIER_0 ? ((0, l.Mw)(a) ? L : j) : (0, l.Mw)(a) ? M : k;
        let s = (0, E.Dd)(n);
        return (0, r.jsx)("img", {
            src: t,
            className: x.wm,
            alt: s,
        });
    },
    W = (e) => {
        let { label: t, column1: n, column2: i } = e;
        return (0, r.jsxs)("tr", {
            className: s()(x.U1, x.YI, x.Y9),
            children: [
                (0, r.jsx)("th", {
                    scope: "col",
                    className: x.Cr,
                    children: t,
                }),
                (0, r.jsx)("th", {
                    scope: "col",
                    className: x.e4,
                    children: n,
                }),
                (0, r.jsx)("th", {
                    scope: "col",
                    className: s()(x.e4, x.Y9),
                    children: i,
                }),
            ],
        });
    },
    K = (e) => {
        let {
            label: t,
            column1: n,
            column2: i,
            withBottomBorder: a = !0,
            withTopBorderRadius: o = !1,
            withBottomBorderRadius: l = !1,
            buttonsRow: c = !1,
            shortRow: u = !1,
        } = e;
        return (0, r.jsxs)("tr", {
            className: s()(x.nM, {
                [x.EE]: c,
                [x.Y9]: o,
                [x.kS]: l,
                [x.YI]: a,
                [x.vs]: u,
            }),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: x.nx,
                    children: t,
                }),
                (0, r.jsx)("td", {
                    className: s()(x.Hn, {
                        [x.SD]: c,
                    }),
                    children: n,
                }),
                (0, r.jsx)("td", {
                    className: s()(x.Hn, {
                        [x.Y9]: o,
                        [x.kS]: l,
                        [x.SD]: c,
                    }),
                    children: i,
                }),
            ],
        });
    },
    z = (e) => {
        var t;
        let n,
            {
                className: a,
                hideCTAs: N = !1,
                headingOverride: L,
                hidePill: j = !1,
                selectedPlanColumnClassName: M,
                selectedPlanTier: k = P.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: U } = (0, p.Ay)(f.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            V = (0, o.bG)([g.A], () => g.A.hasFetchedSubscriptions()),
            z = (0, h.Y)(P.T7),
            q = (0, d.Ay)(),
            X = (0, l.qB)(q),
            Z = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
            Q = null != Z && Z.isPremiumWithPremiumGroup(),
            $ = (0, E.YE)(Z, P.PremiumTypes.TIER_2),
            J = (0, v.V)(),
            ee = null == J || null == (t = J.subscription_trial) ? void 0 : t.sku_id,
            et = (0, y.Us)(),
            en = (0, A.O)(),
            er = null != en && (0, C.U9)(en, P.pe.TIER_2),
            ei = (0, C.N1)(P.gD.PREMIUM_MONTH_TIER_2),
            ea = "".concat(ei, "/").concat((0, E.FJ)(P.WT.MONTH)),
            es = (0, E.JM)(P.gD.PREMIUM_MONTH_TIER_0),
            eo = (0, E.JM)(P.gD.PREMIUM_MONTH_TIER_2),
            el = (0, _.A)(),
            ec = (0, w.R)(es, eo, er, ea, el.fractionalState),
            eu = (0, b.cg)(),
            { enabled: ed } = O.K.useExperiment({
                location: "PlanComparisonTable",
            });
        if (!V || !z) return null;
        let ef = ed ? D.intl.string(D.t.XXENra) : D.intl.string(D.t.ED4UVD),
            ep = {
                label: (0, r.jsx)(u.Heading, {
                    className: x.__invalid_textColor,
                    variant: "heading-lg/extrabold",
                    children: ef,
                }),
                column1: (0, r.jsx)(Y, {
                    premiumType: P.PremiumTypes.TIER_0,
                    isPremiumGroup: Q,
                }),
                column2: (0, r.jsx)(Y, {
                    premiumType: P.PremiumTypes.TIER_2,
                    isPremiumGroup: Q,
                }),
            };
        N
            ? ec.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0,
              })
            : ec.push({
                  label: null,
                  column1: (0, r.jsxs)(r.Fragment, {
                      children: [
                          ee === P.pe.TIER_2 || eu
                              ? (0, r.jsx)(T.A, {
                                    className: x.x6,
                                    subscriptionTier: P.pe.TIER_0,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: X ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, r.jsx)(T.A, {
                                    className: x.x6,
                                    subscriptionTier: P.pe.TIER_0,
                                    showIcon: !1,
                                }),
                          et === P.PremiumTypes.TIER_2 || null != ee
                              ? null
                              : (0, r.jsx)(I.A, {
                                    className: x.x6,
                                    subscriptionTier: P.pe.TIER_0,
                                }),
                      ],
                  }),
                  column2: (0, r.jsxs)(r.Fragment, {
                      children: [
                          ee === P.pe.TIER_0
                              ? (0, r.jsx)(T.A, {
                                    className: x.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: X ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, r.jsx)(T.A, {
                                    className: x.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: eu,
                                }),
                          et === P.PremiumTypes.TIER_0 || null != ee
                              ? null
                              : (0, r.jsx)(I.A, {
                                    className: x.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == ee,
              }),
            (n = j
                ? null
                : null != ee || null != et
                  ? (0, r.jsx)(R.ir, {
                        text: null != ee ? D.intl.string(D.t.IBYG5U) : D.intl.string(D.t.ce1v3V),
                        className: x.ls,
                        colorOptions:
                            ee === P.pe.TIER_0
                                ? X
                                    ? R.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : R.at.PREMIUM_TIER_0_WHITE_FILL
                                : X
                                  ? $
                                      ? R.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : R.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : R.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : eu
                    ? (0, r.jsx)(B, {})
                    : (0, r.jsx)(H, {}));
        let e_ = ee === P.pe.TIER_0 || et === P.PremiumTypes.TIER_0 || k === P.PremiumTypes.TIER_0;
        return (0, r.jsx)(p.f5, {
            value: U,
            children: (0, r.jsxs)("div", {
                className: s()(x.zr, a),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, r.jsx)(u.Heading, {
                        className: s()(x.Qw, x.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: null != L ? L : D.intl.string(D.t.FIbMh9),
                    }),
                    Q &&
                        (0, r.jsx)(S.A, {
                            premiumGroupRole: Z.premiumGroupRole,
                            className: x.vg,
                        }),
                    (0, r.jsxs)("div", {
                        className: x.wY,
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(M, {
                                    [x.A9]: e_,
                                    [x.ce]: !e_ && !Q,
                                }),
                                children: !e_ && n,
                            }),
                            (0, r.jsxs)("table", {
                                className: x.tp,
                                children: [
                                    (0, r.jsx)("thead", {
                                        children: (0, r.jsx)(W, G({}, ep)),
                                    }),
                                    (0, r.jsx)("tbody", {
                                        children: ec.map((e, t) =>
                                            (0, i.createElement)(
                                                K,
                                                F(G({}, e), {
                                                    key: t,
                                                }),
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
