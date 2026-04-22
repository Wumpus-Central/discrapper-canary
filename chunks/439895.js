a.d(t, { A: () => _ });
var n = a(627968),
    l = a(64700),
    i = a(417597),
    s = a(834730),
    r = a(534514),
    o = a(292666),
    d = a(821609),
    c = a(793574),
    u = a(287809),
    m = a(590180),
    h = a(4227),
    p = a(841702),
    x = a(751304),
    g = a(61750),
    v = a(328762);
let b = (e) => {
        let [t, a] = l.useState(0);
        return (
            l.useLayoutEffect(() => {
                let e = h.A.getPurchase;
                return (
                    (h.A.getPurchase = (e) => void 0),
                    h.A.emitChange(),
                    a(1),
                    () => {
                        (h.A.getPurchase = e), h.A.emitChange();
                    }
                );
            }, []),
            (0, n.jsx)("div", { className: v.Do, children: (0, n.jsx)(x.A, { ...e }, t) })
        );
    },
    _ = () => {
        let e = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
            t = (0, i.bG)([m.A], () => m.A.categories),
            a = (0, i.bG)([h.A], () => h.A.purchases),
            x = (0, i.bG)([m.A], () => m.A.lastSuccessfulFetch),
            _ = t.size > 0 && a.size > 0 && null != x,
            { isFetching: f, categories: j } = (0, p.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: _ }),
            A = _ ? t : j,
            y = _ || (!f && A.size > 0),
            [C, E] = l.useState(""),
            [S, N] = l.useState(null),
            [k, I] = l.useState(null);
        return (l.useEffect(() => {
            if ("" === C.trim() || !y) {
                N(null), I(null);
                return;
            }
            let e = m.A.getProduct(C),
                t = m.A.getCategoryForProduct(C);
            null != e && null != t ? (N(e), I(t)) : (N(null), I(null));
        }, [C, y]),
        f)
            ? (0, n.jsx)(s.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, n.jsx)(s.E, { variant: "text-md/normal", children: "No user found" })
              : (0, n.jsxs)("div", {
                    className: v.kL,
                    children: [
                        (0, n.jsxs)("div", {
                            className: v.uW,
                            children: [
                                (0, n.jsx)(r.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, n.jsxs)("div", {
                                    className: v.qp,
                                    children: [
                                        (0, n.jsx)(s.E, {
                                            variant: "text-md/semibold",
                                            className: v.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, n.jsx)(o.k, { value: C, onChange: E, placeholder: "Enter product SKU ID" }),
                                        !y &&
                                            "" !== C.trim() &&
                                            (0, n.jsx)(s.E, {
                                                variant: "text-sm/normal",
                                                className: v.KQ,
                                                children: "Loading products...",
                                            }),
                                        y &&
                                            "" !== C.trim() &&
                                            null == S &&
                                            (0, n.jsx)(s.E, {
                                                variant: "text-sm/normal",
                                                className: v.kc,
                                                children: "Product not found",
                                            }),
                                        null != S &&
                                            (0, n.jsxs)(s.E, {
                                                variant: "text-sm/normal",
                                                className: v.xT,
                                                children: ["Found: ", S.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: v.uW,
                            children: [
                                (0, n.jsx)(r.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != S && null != k
                                    ? (0, n.jsxs)("div", {
                                          className: v.i1,
                                          children: [
                                              (0, n.jsx)(b, { skuId: S.skuId }),
                                              (0, n.jsx)(d.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != S &&
                                                          null != e &&
                                                          (0, g.A)({
                                                              product: S,
                                                              analyticsLocations: [c.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)("div", {
                                          className: v.qf,
                                          children: (0, n.jsx)(s.E, {
                                              variant: "text-md/normal",
                                              className: v.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
