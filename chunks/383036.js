n.d(t, { Z: () => x }), n(388685), n(781311);
var a = n(54381),
    r = n(473749),
    i = n(399606),
    l = n(481060),
    s = n(100527),
    o = n(594174),
    c = n(597688),
    d = n(1870),
    u = n(223143),
    m = n(653126),
    p = n(832149),
    h = n(627911);
let f = (e) => {
        let [t, n] = r.useState(0);
        return (
            r.useLayoutEffect(() => {
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
    x = () => {
        let e = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            t = (0, i.e7)([c.Z], () => c.Z.categories),
            n = (0, i.e7)([d.Z], () => d.Z.purchases),
            m = (0, i.e7)([c.Z], () => c.Z.lastSuccessfulFetch),
            x = t.size > 0 && n.size > 0 && null != m,
            { isFetching: b, categories: g } = (0, u.ZP)({
                logPerf: !1,
                stalePurchasesOK: !0,
                noOp: x,
            }),
            v = x ? t : g,
            j = x || (!b && v.size > 0),
            [y, C] = r.useState(""),
            [_, S] = r.useState(null),
            [E, T] = r.useState(null);
        return (r.useEffect(() => {
            if ("" === y.trim() || !j) {
                S(null), T(null);
                return;
            }
            let e = c.Z.getProduct(y),
                t = c.Z.getCategoryForProduct(y);
            null != e && null != t ? (S(e), T(t)) : (S(null), T(null));
        }, [y, j]),
        b)
            ? (0, a.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: "Loading categories and collectibles...",
              })
            : null == e
              ? (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: "No user found",
                })
              : (0, a.jsxs)("div", {
                    className: h.container,
                    children: [
                        (0, a.jsxs)("div", {
                            className: h.section,
                            children: [
                                (0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Configuration",
                                }),
                                (0, a.jsxs)("div", {
                                    className: h.inputSection,
                                    children: [
                                        (0, a.jsx)(l.Text, {
                                            variant: "text-md/semibold",
                                            className: h.inputLabel,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, a.jsx)(l.oil, {
                                            value: y,
                                            onChange: C,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !j &&
                                            "" !== y.trim() &&
                                            (0, a.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: h.loadingText,
                                                children: "Loading products...",
                                            }),
                                        j &&
                                            "" !== y.trim() &&
                                            null == _ &&
                                            (0, a.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: h.errorText,
                                                children: "Product not found",
                                            }),
                                        null != _ &&
                                            (0, a.jsxs)(l.Text, {
                                                variant: "text-sm/normal",
                                                className: h.successText,
                                                children: ["Found: ", _.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: h.section,
                            children: [
                                (0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Preview",
                                }),
                                null != _ && null != E
                                    ? (0, a.jsxs)("div", {
                                          className: h.previewContainer,
                                          children: [
                                              (0, a.jsx)(f, { skuId: _.skuId }),
                                              (0, a.jsx)(l.Button, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != _ &&
                                                          null != e &&
                                                          (0, p.Z)({
                                                              product: _,
                                                              analyticsLocations: [s.Z.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)("div", {
                                          className: h.placeholder,
                                          children: (0, a.jsx)(l.Text, {
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
