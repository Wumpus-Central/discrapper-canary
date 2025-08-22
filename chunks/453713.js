n.d(t, { P: () => A });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(404759),
    l = n.n(s),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    f = n(481060),
    _ = n(209613),
    p = n(429368),
    h = n(724994),
    m = n(388032),
    g = n(270132);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = l()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? f.TVs.unsafe_rawColors.PRIMARY_700.css : f.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    S = (e) => {
        let {
                variantGroupProduct: t,
                variant: n,
                variantIndex: a,
                totalVariants: s,
                selectedVariantIndex: l,
                onEnter: d,
                onLeave: _,
                minimal: E,
            } = e,
            { isPurchased: y } = (0, h.L)(n),
            I = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)),
            { onFocus: S } = I,
            A = v(I, ["onFocus"]),
            C = i.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, a), S();
                },
                [S, t, a],
            );
        return (0, r.jsx)(f.ua7, {
            text: m.intl.string(m.t["6cfuDg"]),
            "aria-label": !1,
            shouldShow: !E && y,
            children: (e) =>
                (0, r.jsx)(
                    f.P3F,
                    O(b({}, A), {
                        tag: "li",
                        onMouseEnter: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onMouseLeave: () => {
                            var t;
                            _(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onBlur: () => {
                            var t;
                            _(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onClick: C,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && C(e);
                        },
                        className: g.colorVariant,
                        children: (0, r.jsx)("div", {
                            className: o()(g.colorSwatch, {
                                [g.open]: !E,
                                [g.selected]: a === l,
                            }),
                            style: {
                                backgroundColor: n.variantValue,
                                zIndex: s - a,
                            },
                            children: y
                                ? (0, r.jsx)(f.kSu, {
                                      className: g.purchasedIndicator,
                                      color: T(n.variantValue),
                                  })
                                : null,
                        }),
                    }),
                ),
        });
    },
    A = (e) => {
        var t, n;
        let {
                variantGroupProduct: i,
                className: a,
                previewingVariantIndexProps: s,
                setIsHoveringOnSwitch: l,
                minimal: d,
                selectedVariantIndex: p,
                alternativeBackgroundColor: h,
            } = e,
            E = s.previewingVariantIndex,
            y = null == (t = i.variants) ? void 0 : t[p],
            I = null !== E ? (null == (n = i.variants) ? void 0 : n[E]) : void 0,
            T = (0, _.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
        if (null == y) return null;
        let A = null != I ? I.variantLabel : null == y ? void 0 : y.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: T,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = v(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        O(b({ ref: n }, c), {
                            className: o()(g.variantsPanel, a, {
                                [g.minimalState]: d,
                                [g.alternativeColor]: h,
                            }),
                            onMouseEnter: () => (null == l ? void 0 : l(!0)),
                            onMouseLeave: () => (null == l ? void 0 : l(!1)),
                            children: [
                                (0, r.jsx)("ol", {
                                    className: g.variantsList,
                                    children:
                                        null == (t = i.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, a;
                                                  return (0, r.jsx)(
                                                      S,
                                                      {
                                                          variantGroupProduct: i,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: p,
                                                          totalVariants:
                                                              null != (a = null == (n = i.variants) ? void 0 : n.length)
                                                                  ? a
                                                                  : 0,
                                                          onEnter: () => s.handleEntering(t),
                                                          onLeave: s.handleLeaving,
                                                          minimal: d,
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-secondary",
                                    className: g.variantLabel,
                                    children: d ? m.intl.string(m.t.wbgaj4) : A,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
