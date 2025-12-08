n.d(t, { Z: () => f }), n(388685), n(781311);
var a = n(54381),
    l = n(473749),
    r = n(399606),
    i = n(481060),
    s = n(100527),
    o = n(594174),
    c = n(597688),
    d = n(1870),
    u = n(223143),
    m = n(653126),
    p = n(832149),
    h = n(277790);
let x = (e) => {
        let [t, n] = l.useState(0);
        return (
            l.useLayoutEffect(() => {
                let e = d.Z.getPurchase;
                return (
                    (d.Z.getPurchase = (e) => void 0),
                    d.Z.emitChange(),
                    n(1),
                    () => {
                        (d.Z.getPurchase = e), d.Z.emitChange();
                    }
                );
            }, []),
            (0, a.jsx)("div", {
                className: h.previewProductCardContainer,
                children: (0, a.jsx)(
                    m.Z,
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
    f = () => {
        let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
            t = (0, r.e7)([c.Z], () => c.Z.categories),
            n = (0, r.e7)([d.Z], () => d.Z.purchases),
            m = (0, r.e7)([c.Z], () => c.Z.lastSuccessfulFetch),
            f = t.size > 0 && n.size > 0 && null != m,
            { isFetching: g, categories: b } = (0, u.ZP)({
                logPerf: !1,
                stalePurchasesOK: !0,
                noOp: f,
            }),
            v = f ? t : b,
            j = f || (!g && v.size > 0),
            [_, y] = l.useState(""),
            [C, S] = l.useState(null),
            [E, O] = l.useState(null);
        return (l.useEffect(() => {
            if ("" === _.trim() || !j) {
                S(null), O(null);
                return;
            }
            let e = c.Z.getProduct(_),
                t = c.Z.getCategoryForProduct(_);
            null != e && null != t ? (S(e), O(t)) : (S(null), O(null));
        }, [_, j]),
        g)
            ? (0, a.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: "Loading categories and collectibles...",
              })
            : null == e
              ? (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: "No user found",
                })
              : (0, a.jsxs)("div", {
                    className: h.container,
                    children: [
                        (0, a.jsxs)("div", {
                            className: h.section,
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Configuration",
                                }),
                                (0, a.jsxs)("div", {
                                    className: h.inputSection,
                                    children: [
                                        (0, a.jsx)(i.Text, {
                                            variant: "text-md/semibold",
                                            className: h.inputLabel,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, a.jsx)(i.oil, {
                                            value: _,
                                            onChange: y,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !j &&
                                            "" !== _.trim() &&
                                            (0, a.jsx)(i.Text, {
                                                variant: "text-sm/normal",
                                                className: h.loadingText,
                                                children: "Loading products...",
                                            }),
                                        j &&
                                            "" !== _.trim() &&
                                            null == C &&
                                            (0, a.jsx)(i.Text, {
                                                variant: "text-sm/normal",
                                                className: h.errorText,
                                                children: "Product not found",
                                            }),
                                        null != C &&
                                            (0, a.jsxs)(i.Text, {
                                                variant: "text-sm/normal",
                                                className: h.successText,
                                                children: ["Found: ", C.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: h.section,
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Preview",
                                }),
                                null != C && null != E
                                    ? (0, a.jsxs)("div", {
                                          className: h.previewContainer,
                                          children: [
                                              (0, a.jsx)(x, { skuId: C.skuId }),
                                              (0, a.jsx)(i.Button, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != C &&
                                                          null != e &&
                                                          (0, p.Z)({
                                                              product: C,
                                                              analyticsLocations: [s.Z.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)("div", {
                                          className: h.placeholder,
                                          children: (0, a.jsx)(i.Text, {
                                              variant: "text-md/normal",
                                              className: h.mutedText,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
