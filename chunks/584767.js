n.d(t, {
    A: () => V,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(793574),
    f = n(688810),
    p = n(160946),
    _ = n(166403),
    h = n(927578),
    m = n(422936),
    g = n(234419),
    E = n(511484),
    b = n(121304),
    y = n(788868),
    O = n(985018),
    A = n(976543),
    v = n(196093),
    S = n(979653),
    I = n(255631),
    T = n(193023);

function C(e, t, n) {
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

function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}

function R(e, t) {
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

function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = () =>
        (0, r.jsx)("div", {
            className: A.Zr,
            children: (0, r.jsx)(c.Heading, {
                className: A.uC,
                variant: "text-xs/bold",
                children: O.intl.string(O.t.TR2B4T),
            }),
        }),
    D = () =>
        (0, r.jsx)("div", {
            className: A.Zr,
            children: (0, r.jsx)(c.Heading, {
                className: A.uC,
                variant: "heading-deprecated-12/extrabold",
                children: O.intl.string(O.t.IBYG5U),
            }),
        }),
    x = (e) => {
        let { text: t, badge: n, variant: i } = e;
        return (0, r.jsxs)(c.Text, {
            color: "none",
            variant: null != i ? i : "text-md/medium",
            className: A.wb,
            children: [
                t,
                null != n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [" ", n],
                    }),
            ],
        });
    },
    L = (e) => {
        let { isIncluded: t, isTier0: n } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.A9s, {
                          size: "md",
                          color: "currentColor",
                          className: n ? A.M0 : A.PE,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(c.AC4, {
                          children: O.intl.string(O.t["tq+6t/"]),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.PGe, {
                          size: "md",
                          color: "currentColor",
                          className: A.ut,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(c.AC4, {
                          children: O.intl.string(O.t.l4qZrp),
                      }),
                  ],
              });
    },
    j = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: i, withBottomMargin: a } = e;
        return (0, r.jsxs)("tr", {
            className: s()(A.nM, A.YI, {
                [A.ML]: a,
            }),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: A.nx,
                    children: (0, r.jsx)(x, {
                        text: t,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: A.Hn,
                    children:
                        null != n.text
                            ? (0, r.jsx)(x, {
                                  text: n.text,
                              })
                            : (0, r.jsx)(L, {
                                  isIncluded: !!n.includes,
                                  isTier0: !0,
                              }),
                }),
                (0, r.jsx)("td", {
                    className: A.Hn,
                    children:
                        null != i.text
                            ? (0, r.jsx)(x, {
                                  text: i.text,
                              })
                            : (0, r.jsx)(L, {
                                  isIncluded: !!i.includes,
                              }),
                }),
            ],
        });
    },
    M = (e) => {
        let { title: t, rows: n } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("tr", {
                    className: A.nM,
                    children: [
                        (0, r.jsx)("th", {
                            scope: "row",
                            className: A.nx,
                            children: (0, r.jsx)(x, {
                                text: t,
                                variant: "text-lg/bold",
                            }),
                        }),
                        (0, r.jsx)("td", {}),
                        (0, r.jsx)("td", {}),
                    ],
                }),
                n.map((e, t) =>
                    (0, r.jsx)(
                        j,
                        w(N({}, e), {
                            withBottomMargin: t === n.length - 1,
                        }),
                        e.id,
                    ),
                ),
            ],
        });
    },
    k = (e) => {
        let t,
            { premiumType: n } = e,
            i = (0, u.Ay)();
        t = n === y.PremiumTypes.TIER_0 ? ((0, l.Mw)(i) ? v : S) : (0, l.Mw)(i) ? I : T;
        let a = (0, h.Dd)(n);
        return (0, r.jsx)("img", {
            src: t,
            className: A.wm,
            alt: a,
        });
    },
    U = () =>
        (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: s()(A.U1, A.Y9),
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: A.Cr,
                        children: (0, r.jsx)(c.Heading, {
                            className: A.__invalid_textColor,
                            variant: "heading-xl/semibold",
                            children: O.intl.string(O.t.XXENra),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: A.e4,
                        children: (0, r.jsx)(k, {
                            premiumType: y.PremiumTypes.TIER_0,
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: s()(A.e4, A.Y9),
                        children: (0, r.jsx)(k, {
                            premiumType: y.PremiumTypes.TIER_2,
                        }),
                    }),
                ],
            }),
        }),
    G = (e) => {
        let {
            tier0MonthlyPrice: t,
            tier2MonthlyPrice: n,
            shouldUseDiscountPrice: i,
            tier2DiscountedPriceString: a,
        } = e;
        return (0, r.jsxs)("tr", {
            className: s()(A.nM, A.YI, A.ML),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: A.nx,
                    children: (0, r.jsx)(x, {
                        text: O.intl.string(O.t["09yRK3"]),
                        variant: "text-lg/bold",
                    }),
                }),
                (0, r.jsx)("td", {
                    className: A.Hn,
                    children: (0, r.jsx)(x, {
                        text: h.Ay.formatPriceString(t, y.WT.MONTH),
                    }),
                }),
                (0, r.jsx)("td", {
                    className: A.Hn,
                    children: (0, r.jsx)(x, {
                        text: i ? a : h.Ay.formatPriceString(n, y.WT.MONTH),
                    }),
                }),
            ],
        });
    },
    V = (e) => {
        var t;
        let n,
            {
                className: a,
                hidePill: l = !1,
                selectedPlanColumnClassName: c,
                selectedPlanTier: u = y.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: O } = (0, f.Ay)(d.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            v = (0, o.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
            S = (0, p.Y)(y.T7),
            I = (0, g.V)(),
            T = null == I || null == (t = I.subscription_trial) ? void 0 : t.sku_id,
            C = (0, m.O)(),
            R = null != C && (0, E.U9)(C, y.pe.TIER_2),
            x = (0, E.N1)(y.gD.PREMIUM_MONTH_TIER_2),
            L = "".concat(x, "/").concat((0, h.FJ)(y.WT.MONTH)),
            j = (0, h.JM)(y.gD.PREMIUM_MONTH_TIER_0),
            k = (0, h.JM)(y.gD.PREMIUM_MONTH_TIER_2),
            V = (0, b.g)();
        if (!v || !S) return null;
        n = l ? null : null != I ? (0, r.jsx)(D, {}) : (0, r.jsx)(P, {});
        let F = T === y.pe.TIER_0 || u === y.PremiumTypes.TIER_0;
        return (0, r.jsx)(f.f5, {
            value: O,
            children: (0, r.jsx)("div", {
                className: s()(A.zr, a),
                "data-testid": "application-home-marketing-page-comparison-table",
                children: (0, r.jsxs)("div", {
                    className: A.wY,
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(c, {
                                [A.sO]: F,
                                [A.Yr]: !F,
                            }),
                            children: [
                                !F && n,
                                (0, r.jsx)("div", {
                                    className: s()({
                                        [A.A9]: F,
                                        [A.ce]: !F,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("table", {
                            className: A.tp,
                            children: [
                                (0, r.jsx)(U, {}),
                                (0, r.jsxs)("tbody", {
                                    children: [
                                        (0, r.jsx)(G, {
                                            tier0MonthlyPrice: j,
                                            tier2MonthlyPrice: k,
                                            shouldUseDiscountPrice: R,
                                            tier2DiscountedPriceString: L,
                                        }),
                                        V.map((e) =>
                                            (0, i.createElement)(
                                                M,
                                                w(N({}, e), {
                                                    key: e.id,
                                                }),
                                            ),
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    };
