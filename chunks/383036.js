n.d(t, { Z: () => b }), n(388685), n(781311);
var a = n(951288),
    r = n(647438),
    l = n(399606),
    i = n(481060),
    o = n(100527),
    s = n(594174),
    c = n(597688),
    d = n(1870),
    u = n(223143),
    m = n(709999),
    p = n(832149),
    h = n(215023),
    x = n(277790);
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
            (0, a.jsx)(
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
            )
        );
    },
    b = () => {
        let e = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
            t = (0, l.e7)([c.Z], () => c.Z.categories),
            n = (0, l.e7)([d.Z], () => d.Z.purchases),
            m = (0, l.e7)([c.Z], () => c.Z.lastSuccessfulFetch),
            b = t.size > 0 && n.size > 0 && null != m,
            { isFetching: g, categories: v } = (0, u.ZP)({
                logPerf: !1,
                stalePurchasesOK: !0,
                noOp: b,
            }),
            j = b ? t : v,
            _ = b || (!g && j.size > 0),
            [y, C] = r.useState(""),
            [S, E] = r.useState(null),
            [T, O] = r.useState(null);
        return (r.useEffect(() => {
            if ("" === y.trim() || !_) {
                E(null), O(null);
                return;
            }
            let e = c.Z.getProduct(y),
                t = c.Z.getCategoryForProduct(y);
            null != e && null != t ? (E(e), O(t)) : (E(null), O(null));
        }, [y, _]),
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
                    className: x.container,
                    children: [
                        (0, a.jsxs)("div", {
                            className: x.section,
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Configuration",
                                }),
                                (0, a.jsxs)("div", {
                                    className: x.inputSection,
                                    children: [
                                        (0, a.jsx)(i.Text, {
                                            variant: "text-md/semibold",
                                            className: x.inputLabel,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, a.jsx)(i.oil, {
                                            value: y,
                                            onChange: C,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !_ &&
                                            "" !== y.trim() &&
                                            (0, a.jsx)(i.Text, {
                                                variant: "text-sm/normal",
                                                className: x.loadingText,
                                                children: "Loading products...",
                                            }),
                                        _ &&
                                            "" !== y.trim() &&
                                            null == S &&
                                            (0, a.jsx)(i.Text, {
                                                variant: "text-sm/normal",
                                                className: x.errorText,
                                                children: "Product not found",
                                            }),
                                        null != S &&
                                            (0, a.jsxs)(i.Text, {
                                                variant: "text-sm/normal",
                                                className: x.successText,
                                                children: ["Found: ", S.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: x.section,
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Preview",
                                }),
                                null != S && null != T
                                    ? (0, a.jsxs)("div", {
                                          className: x.previewContainer,
                                          children: [
                                              (0, a.jsx)(f, {
                                                  product: S,
                                                  user: e,
                                                  category: T,
                                                  tab: h.AW.HOME,
                                              }),
                                              (0, a.jsx)(i.Button, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != S &&
                                                          null != e &&
                                                          (0, p.Z)({
                                                              product: S,
                                                              analyticsLocations: [o.Z.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)("div", {
                                          className: x.placeholder,
                                          children: (0, a.jsx)(i.Text, {
                                              variant: "text-md/normal",
                                              className: x.mutedText,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
