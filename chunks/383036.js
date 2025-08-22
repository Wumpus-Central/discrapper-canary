n.d(t, { Z: () => b }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(399606),
    o = n(481060),
    s = n(100527),
    l = n(594174),
    c = n(597688),
    u = n(1870),
    d = n(223143),
    f = n(709999),
    _ = n(832149),
    p = n(215023),
    h = n(277790);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = (e) => {
        let [t, n] = i.useState(0);
        return (
            i.useLayoutEffect(() => {
                let e = u.Z.getPurchase;
                return (
                    (u.Z.getPurchase = (e) => void 0),
                    u.Z.emitChange(),
                    n(1),
                    () => {
                        (u.Z.getPurchase = e), u.Z.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)(f.Z, g({}, e), t)
        );
    },
    b = () => {
        let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
            t = (0, a.e7)([c.Z], () => c.Z.categories),
            n = (0, a.e7)([u.Z], () => u.Z.purchases),
            f = (0, a.e7)([c.Z], () => c.Z.lastSuccessfulFetch),
            m = t.size > 0 && n.size > 0 && null != f,
            { isFetching: g, categories: b } = (0, d.ZP)({
                logPerf: !1,
                stalePurchasesOK: !0,
                noOp: m,
            }),
            y = m ? t : b,
            O = m || (!g && y.size > 0),
            [v, I] = i.useState(""),
            [T, S] = i.useState(null),
            [A, C] = i.useState(null);
        i.useEffect(() => {
            if ("" === v.trim() || !O) {
                S(null), C(null);
                return;
            }
            let e = c.Z.getProduct(v),
                t = c.Z.getCategoryForProduct(v);
            null != e && null != t ? (S(e), C(t)) : (S(null), C(null));
        }, [v, O]);
        let N = () => {
            null != T &&
                null != e &&
                (0, _.Z)({
                    product: T,
                    analyticsLocations: [s.Z.COLLECTIBLES_SHOP_CARD],
                });
        };
        return g
            ? (0, r.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: "Loading categories and collectibles...",
              })
            : null == e
              ? (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: "No user found",
                })
              : (0, r.jsxs)("div", {
                    className: h.container,
                    children: [
                        (0, r.jsxs)("div", {
                            className: h.leftPanel,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: h.section,
                                    children: "Product Configuration",
                                }),
                                (0, r.jsxs)("div", {
                                    className: h.inputSection,
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/semibold",
                                            className: h.inputLabel,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(o.oil, {
                                            value: v,
                                            onChange: I,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !O &&
                                            "" !== v.trim() &&
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                className: h.loadingText,
                                                children: "Loading products...",
                                            }),
                                        O &&
                                            "" !== v.trim() &&
                                            null == T &&
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                className: h.errorText,
                                                children: "Product not found",
                                            }),
                                        null != T &&
                                            (0, r.jsxs)(o.Text, {
                                                variant: "text-sm/normal",
                                                className: h.successText,
                                                children: ["Found: ", T.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: h.rightPanel,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: h.section,
                                    children: "Product Preview",
                                }),
                                null != T && null != A
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: h.previewContainer,
                                                  children: (0, r.jsx)(E, {
                                                      product: T,
                                                      user: e,
                                                      category: A,
                                                      tab: p.AW.HOME,
                                                  }),
                                              }),
                                              (0, r.jsx)(o.zxk, {
                                                  variant: "primary",
                                                  onClick: N,
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: h.placeholder,
                                          children: (0, r.jsx)(o.Text, {
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
