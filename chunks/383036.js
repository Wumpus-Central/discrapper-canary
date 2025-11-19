n.d(t, { Z: () => f }), n(388685), n(781311);
var a = n(54381),
    l = n(473749),
    i = n(399606),
    r = n(481060),
    s = n(100527),
    o = n(594174),
    c = n(597688),
    d = n(1870),
    u = n(223143),
    m = n(709999),
    p = n(832149),
    h = n(215023),
    x = n(277790);
let g = (e) => {
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
    f = () => {
        let e = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            t = (0, i.e7)([c.Z], () => c.Z.categories),
            n = (0, i.e7)([d.Z], () => d.Z.purchases),
            m = (0, i.e7)([c.Z], () => c.Z.lastSuccessfulFetch),
            f = t.size > 0 && n.size > 0 && null != m,
            { isFetching: b, categories: v } = (0, u.ZP)({
                logPerf: !1,
                stalePurchasesOK: !0,
                noOp: f,
            }),
            j = f ? t : v,
            _ = f || (!b && j.size > 0),
            [y, C] = l.useState(""),
            [S, E] = l.useState(null),
            [N, T] = l.useState(null);
        return (l.useEffect(() => {
            if ("" === y.trim() || !_) {
                E(null), T(null);
                return;
            }
            let e = c.Z.getProduct(y),
                t = c.Z.getCategoryForProduct(y);
            null != e && null != t ? (E(e), T(t)) : (E(null), T(null));
        }, [y, _]),
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
                    className: x.container,
                    children: [
                        (0, a.jsxs)("div", {
                            className: x.section,
                            children: [
                                (0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Configuration",
                                }),
                                (0, a.jsxs)("div", {
                                    className: x.inputSection,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-md/semibold",
                                            className: x.inputLabel,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, a.jsx)(r.oil, {
                                            value: y,
                                            onChange: C,
                                            placeholder: "Enter product SKU ID",
                                        }),
                                        !_ &&
                                            "" !== y.trim() &&
                                            (0, a.jsx)(r.Text, {
                                                variant: "text-sm/normal",
                                                className: x.loadingText,
                                                children: "Loading products...",
                                            }),
                                        _ &&
                                            "" !== y.trim() &&
                                            null == S &&
                                            (0, a.jsx)(r.Text, {
                                                variant: "text-sm/normal",
                                                className: x.errorText,
                                                children: "Product not found",
                                            }),
                                        null != S &&
                                            (0, a.jsxs)(r.Text, {
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
                                (0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: "Product Preview",
                                }),
                                null != S && null != N
                                    ? (0, a.jsxs)("div", {
                                          className: x.previewContainer,
                                          children: [
                                              (0, a.jsx)(g, {
                                                  product: S,
                                                  user: e,
                                                  category: N,
                                                  tab: h.AW.HOME,
                                              }),
                                              (0, a.jsx)(r.Button, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != S &&
                                                          null != e &&
                                                          (0, p.Z)({
                                                              product: S,
                                                              analyticsLocations: [s.Z.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)("div", {
                                          className: x.placeholder,
                                          children: (0, a.jsx)(r.Text, {
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
