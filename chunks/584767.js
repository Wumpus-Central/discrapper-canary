n.d(t, {
    A: () => G,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(582754),
    c = n(397927),
    d = n(736653),
    u = n(793574),
    _ = n(688810),
    p = n(160946),
    m = n(166403),
    g = n(927578),
    A = n(422936),
    f = n(234419),
    h = n(511484),
    b = n(121304),
    E = n(788868),
    x = n(985018),
    O = n(976543),
    C = n(196093),
    I = n(979653),
    T = n(255631),
    S = n(193023);

function j(e) {
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

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = () =>
        (0, r.jsx)("div", {
            className: O.Zr,
            children: (0, r.jsx)(c.Heading, {
                className: O.uC,
                variant: "text-xs/bold",
                children: x.intl.string(x.t.TR2B4T),
            }),
        }),
    y = () =>
        (0, r.jsx)("div", {
            className: O.Zr,
            children: (0, r.jsx)(c.Heading, {
                className: O.uC,
                variant: "heading-deprecated-12/extrabold",
                children: x.intl.string(x.t.IBYG5U),
            }),
        }),
    P = (e) => {
        let { text: t, badge: n, variant: i } = e;
        return (0, r.jsxs)(c.Text, {
            color: "none",
            variant: null != i ? i : "text-md/medium",
            className: O.wb,
            children: [
                t,
                null != n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [" ", n],
                    }),
            ],
        });
    },
    R = (e) => {
        let { isIncluded: t, isTier0: n } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.A9s, {
                          size: "md",
                          color: "currentColor",
                          className: n ? O.M0 : O.PE,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(c.AC4, {
                          children: x.intl.string(x.t["tq+6t/"]),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.PGe, {
                          size: "md",
                          color: "currentColor",
                          className: O.ut,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(c.AC4, {
                          children: x.intl.string(x.t.l4qZrp),
                      }),
                  ],
              });
    },
    D = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: i, withBottomMargin: l } = e;
        return (0, r.jsxs)("tr", {
            className: s()(O.nM, O.YI, {
                [O.ML]: l,
            }),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: O.nx,
                    children: (0, r.jsx)(P, {
                        text: t,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: O.Hn,
                    children:
                        null != n.text
                            ? (0, r.jsx)(P, {
                                  text: n.text,
                              })
                            : (0, r.jsx)(R, {
                                  isIncluded: !!n.includes,
                                  isTier0: !0,
                              }),
                }),
                (0, r.jsx)("td", {
                    className: O.Hn,
                    children:
                        null != i.text
                            ? (0, r.jsx)(P, {
                                  text: i.text,
                              })
                            : (0, r.jsx)(R, {
                                  isIncluded: !!i.includes,
                              }),
                }),
            ],
        });
    },
    w = (e) => {
        let { title: t, rows: n } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("tr", {
                    className: O.nM,
                    children: [
                        (0, r.jsx)("th", {
                            scope: "row",
                            className: O.nx,
                            children: (0, r.jsx)(P, {
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
                        D,
                        v(j({}, e), {
                            withBottomMargin: t === n.length - 1,
                        }),
                        e.id,
                    ),
                ),
            ],
        });
    },
    L = (e) => {
        let t,
            { premiumType: n } = e,
            i = (0, d.Ay)();
        t = n === E.PremiumTypes.TIER_0 ? ((0, o.Mw)(i) ? C : I) : (0, o.Mw)(i) ? T : S;
        let l = (0, g.Dd)(n);
        return (0, r.jsx)("img", {
            src: t,
            className: O.wm,
            alt: l,
        });
    },
    M = () =>
        (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: s()(O.U1, O.Y9),
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: O.Cr,
                        children: (0, r.jsx)(c.Heading, {
                            className: O.__invalid_textColor,
                            variant: "heading-xl/semibold",
                            children: x.intl.string(x.t.XXENra),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: O.e4,
                        children: (0, r.jsx)(L, {
                            premiumType: E.PremiumTypes.TIER_0,
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: s()(O.e4, O.Y9),
                        children: (0, r.jsx)(L, {
                            premiumType: E.PremiumTypes.TIER_2,
                        }),
                    }),
                ],
            }),
        }),
    U = (e) => {
        let {
            tier0MonthlyPrice: t,
            tier2MonthlyPrice: n,
            shouldUseDiscountPrice: i,
            tier2DiscountedPriceString: l,
        } = e;
        return (0, r.jsxs)("tr", {
            className: s()(O.nM, O.YI, O.ML),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: O.nx,
                    children: (0, r.jsx)(P, {
                        text: x.intl.string(x.t["09yRK3"]),
                        variant: "text-lg/bold",
                    }),
                }),
                (0, r.jsx)("td", {
                    className: O.Hn,
                    children: (0, r.jsx)(P, {
                        text: g.Ay.formatPriceString(t, E.WT.MONTH),
                    }),
                }),
                (0, r.jsx)("td", {
                    className: O.Hn,
                    children: (0, r.jsx)(P, {
                        text: i ? l : g.Ay.formatPriceString(n, E.WT.MONTH),
                    }),
                }),
            ],
        });
    },
    G = (e) => {
        var t;
        let n,
            {
                className: l,
                hidePill: o = !1,
                selectedPlanColumnClassName: c,
                selectedPlanTier: d = E.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: x } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            C = (0, a.bG)([m.A], () => m.A.hasFetchedSubscriptions()),
            I = (0, p.Y)(E.T7),
            T = (0, f.V)(),
            S = null == T || null == (t = T.subscription_trial) ? void 0 : t.sku_id,
            P = (0, A.O)(),
            R = null != P && (0, h.U9)(P, E.pe.TIER_2),
            D = (0, h.N1)(E.gD.PREMIUM_MONTH_TIER_2),
            L = "".concat(D, "/").concat((0, g.FJ)(E.WT.MONTH)),
            G = (0, g.JM)(E.gD.PREMIUM_MONTH_TIER_0),
            k = (0, g.JM)(E.gD.PREMIUM_MONTH_TIER_2),
            V = (0, b.g)();
        if (!C || !I) return null;
        n = o ? null : null != T ? (0, r.jsx)(y, {}) : (0, r.jsx)(N, {});
        let H = S === E.pe.TIER_0 || d === E.PremiumTypes.TIER_0;
        return (0, r.jsx)(_.f5, {
            value: x,
            children: (0, r.jsx)("div", {
                className: s()(O.zr, l),
                "data-testid": "application-home-marketing-page-comparison-table",
                children: (0, r.jsxs)("div", {
                    className: O.wY,
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(c, {
                                [O.sO]: H,
                                [O.Yr]: !H,
                            }),
                            children: [
                                !H && n,
                                (0, r.jsx)("div", {
                                    className: s()({
                                        [O.A9]: H,
                                        [O.ce]: !H,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("table", {
                            className: O.tp,
                            children: [
                                (0, r.jsx)(M, {}),
                                (0, r.jsxs)("tbody", {
                                    children: [
                                        (0, r.jsx)(U, {
                                            tier0MonthlyPrice: G,
                                            tier2MonthlyPrice: k,
                                            shouldUseDiscountPrice: R,
                                            tier2DiscountedPriceString: L,
                                        }),
                                        V.map((e) =>
                                            (0, i.createElement)(
                                                w,
                                                v(j({}, e), {
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
