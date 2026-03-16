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
    p = n(841015);
let x = (e) => {
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
            (0, a.jsx)("div", { className: p.Do, children: (0, a.jsx)(m.A, { ...e }, t) })
        );
    },
    g = () => {
        let e = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            t = (0, s.bG)([d.A], () => d.A.categories),
            n = (0, s.bG)([c.A], () => c.A.purchases),
            m = (0, s.bG)([d.A], () => d.A.lastSuccessfulFetch),
            g = t.size > 0 && n.size > 0 && null != m,
            { isFetching: _, categories: f } = (0, u.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: g }),
            v = g ? t : f,
            b = g || (!_ && v.size > 0),
            [j, A] = i.useState(""),
            [C, T] = i.useState(null),
            [y, S] = i.useState(null);
        return (i.useEffect(() => {
            if ("" === j.trim() || !b) {
                T(null), S(null);
                return;
            }
            let e = d.A.getProduct(j),
                t = d.A.getCategoryForProduct(j);
            null != e && null != t ? (T(e), S(t)) : (T(null), S(null));
        }, [j, b]),
        _)
            ? (0, a.jsx)(l.Text, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, a.jsx)(l.Text, { variant: "text-md/normal", children: "No user found" })
              : (0, a.jsxs)("div", {
                    className: p.kL,
                    children: [
                        (0, a.jsxs)("div", {
                            className: p.uW,
                            children: [
                                (0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Configuration",
                                }),
                                (0, a.jsxs)("div", {
                                    className: p.qp,
                                    children: [
                                        (0, a.jsx)(l.Text, {
                                            variant: "text-md/semibold",
                                            className: p.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, a.jsx)(l.ksK, {
                                            value: j,
                                            onChange: A,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !b &&
                                            "" !== j.trim() &&
                                            (0, a.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: p.KQ,
                                                children: "Loading products...",
                                            }),
                                        b &&
                                            "" !== j.trim() &&
                                            null == C &&
                                            (0, a.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: p.kc,
                                                children: "Product not found",
                                            }),
                                        null != C &&
                                            (0, a.jsxs)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: p.xT,
                                                children: ["Found: ", C.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: p.uW,
                            children: [
                                (0, a.jsx)(l.Heading, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != C && null != y
                                    ? (0, a.jsxs)("div", {
                                          className: p.i1,
                                          children: [
                                              (0, a.jsx)(x, { skuId: C.skuId }),
                                              (0, a.jsx)(l.Button, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != C &&
                                                          null != e &&
                                                          (0, h.A)({
                                                              product: C,
                                                              analyticsLocations: [r.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)("div", {
                                          className: p.qf,
                                          children: (0, a.jsx)(l.Text, {
                                              variant: "text-md/normal",
                                              className: p.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
