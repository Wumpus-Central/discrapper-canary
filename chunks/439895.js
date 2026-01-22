n.d(t, {
    A: () => x,
}),
    n(896048),
    n(733351);
var a = n(627968),
    l = n(64700),
    i = n(417597),
    r = n(397927),
    s = n(793574),
    o = n(287809),
    c = n(590180),
    d = n(4227),
    u = n(841702),
    m = n(751304),
    p = n(61750),
    h = n(841015);
let f = (e) => {
        let [t, n] = l.useState(0);
        return (
            l.useLayoutEffect(() => {
                let e = d.A.getPurchase;
                return (
                    (d.A.getPurchase = (e) => void 0),
                    d.A.emitChange(),
                    n(1),
                    () => {
                        (d.A.getPurchase = e), d.A.emitChange();
                    }
                );
            }, []),
            (0, a.jsx)("div", {
                className: h.Do,
                children: (0, a.jsx)(
                    m.A,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({}, e),
                    t,
                ),
            })
        );
    },
    x = () => {
        let e = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
            t = (0, i.bG)([c.A], () => c.A.categories),
            n = (0, i.bG)([d.A], () => d.A.purchases),
            m = (0, i.bG)([c.A], () => c.A.lastSuccessfulFetch),
            x = t.size > 0 && n.size > 0 && null != m,
            { isFetching: b, categories: g } = (0, u.Ay)({
                logPerf: !1,
                stalePurchasesOK: !0,
                noOp: x,
            }),
            v = x ? t : g,
            j = x || (!b && v.size > 0),
            [y, _] = l.useState(""),
            [A, C] = l.useState(null),
            [S, O] = l.useState(null);
        return (l.useEffect(() => {
            if ("" === y.trim() || !j) {
                C(null), O(null);
                return;
            }
            let e = c.A.getProduct(y),
                t = c.A.getCategoryForProduct(y);
            null != e && null != t ? (C(e), O(t)) : (C(null), O(null));
        }, [y, j]),
        b)
            ? (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: "Loading categories and collectibles...",
              })
            : null == e
              ? (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: "No user found",
                })
              : (0, a.jsxs)("div", {
                    className: h.kL,
                    children: [
                        (0, a.jsxs)("div", {
                            className: h.uW,
                            children: [
                                (0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Configuration",
                                }),
                                (0, a.jsxs)("div", {
                                    className: h.qp,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-md/semibold",
                                            className: h.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, a.jsx)(r.ksK, {
                                            value: y,
                                            onChange: _,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !j &&
                                            "" !== y.trim() &&
                                            (0, a.jsx)(r.Text, {
                                                variant: "text-sm/normal",
                                                className: h.KQ,
                                                children: "Loading products...",
                                            }),
                                        j &&
                                            "" !== y.trim() &&
                                            null == A &&
                                            (0, a.jsx)(r.Text, {
                                                variant: "text-sm/normal",
                                                className: h.kc,
                                                children: "Product not found",
                                            }),
                                        null != A &&
                                            (0, a.jsxs)(r.Text, {
                                                variant: "text-sm/normal",
                                                className: h.xT,
                                                children: ["Found: ", A.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: h.uW,
                            children: [
                                (0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Preview",
                                }),
                                null != A && null != S
                                    ? (0, a.jsxs)("div", {
                                          className: h.i1,
                                          children: [
                                              (0, a.jsx)(f, {
                                                  skuId: A.skuId,
                                              }),
                                              (0, a.jsx)(r.Button, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != A &&
                                                          null != e &&
                                                          (0, p.A)({
                                                              product: A,
                                                              analyticsLocations: [s.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)("div", {
                                          className: h.qf,
                                          children: (0, a.jsx)(r.Text, {
                                              variant: "text-md/normal",
                                              className: h.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
