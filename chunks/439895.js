n.d(t, { A: () => g });
var a = n(627968),
    i = n(64700),
    s = n(417597),
    l = n(397927),
    r = n(793574),
    o = n(287809),
    d = n(590180),
    c = n(4227),
    u = n(841702),
    m = n(751304),
    h = n(61750),
    x = n(841015);
let p = (e) => {
        let [t, n] = i.useState(0);
        return (
            i.useLayoutEffect(() => {
                let e = c.A.getPurchase;
                return (
                    (c.A.getPurchase = (e) => void 0),
                    c.A.emitChange(),
                    n(1),
                    () => {
                        (c.A.getPurchase = e), c.A.emitChange();
                    }
                );
            }, []),
            (0, a.jsx)("div", { className: x.Do, children: (0, a.jsx)(m.A, { ...e }, t) })
        );
    },
    g = () => {
        let e = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            t = (0, s.bG)([d.A], () => d.A.categories),
            n = (0, s.bG)([c.A], () => c.A.purchases),
            m = (0, s.bG)([d.A], () => d.A.lastSuccessfulFetch),
            g = t.size > 0 && n.size > 0 && null != m,
            { isFetching: _, categories: f } = (0, u.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: g }),
            b = g ? t : f,
            v = g || (!_ && b.size > 0),
            [j, C] = i.useState(""),
            [A, T] = i.useState(null),
            [S, y] = i.useState(null);
        return (i.useEffect(() => {
            if ("" === j.trim() || !v) {
                T(null), y(null);
                return;
            }
            let e = d.A.getProduct(j),
                t = d.A.getCategoryForProduct(j);
            null != e && null != t ? (T(e), y(t)) : (T(null), y(null));
        }, [j, v]),
        _)
            ? (0, a.jsx)(l.Text, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, a.jsx)(l.Text, { variant: "text-md/normal", children: "No user found" })
              : (0, a.jsxs)("div", {
                    className: x.kL,
                    children: [
                        (0, a.jsxs)("div", {
                            className: x.uW,
                            children: [
                                (0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Configuration",
                                }),
                                (0, a.jsxs)("div", {
                                    className: x.qp,
                                    children: [
                                        (0, a.jsx)(l.Text, {
                                            variant: "text-md/semibold",
                                            className: x.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, a.jsx)(l.ksK, {
                                            value: j,
                                            onChange: C,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !v &&
                                            "" !== j.trim() &&
                                            (0, a.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: x.KQ,
                                                children: "Loading products...",
                                            }),
                                        v &&
                                            "" !== j.trim() &&
                                            null == A &&
                                            (0, a.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: x.kc,
                                                children: "Product not found",
                                            }),
                                        null != A &&
                                            (0, a.jsxs)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: x.xT,
                                                children: ["Found: ", A.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: x.uW,
                            children: [
                                (0, a.jsx)(l.Heading, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != A && null != S
                                    ? (0, a.jsxs)("div", {
                                          className: x.i1,
                                          children: [
                                              (0, a.jsx)(p, { skuId: A.skuId }),
                                              (0, a.jsx)(l.Button, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != A &&
                                                          null != e &&
                                                          (0, h.A)({
                                                              product: A,
                                                              analyticsLocations: [r.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)("div", {
                                          className: x.qf,
                                          children: (0, a.jsx)(l.Text, {
                                              variant: "text-md/normal",
                                              className: x.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
