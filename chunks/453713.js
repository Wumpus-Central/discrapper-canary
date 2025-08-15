r.d(t, { P: () => y });
var n = r(951288),
    l = r(647438),
    a = r(120356),
    i = r.n(a),
    o = r(404759),
    s = r.n(o),
    c = r(91192),
    u = r(536895),
    d = r(866442),
    p = r(481060),
    g = r(209613),
    f = r(429368),
    b = r(724994),
    m = r(388032),
    h = r(270132);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
            (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let C = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let r = (0, d._i)(e);
            null != r && (t = 0.3 >= (0, d.Bd)(r));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    E = (e) => {
        let {
                variantGroupProduct: t,
                variant: r,
                variantIndex: a,
                totalVariants: o,
                selectedVariantIndex: s,
                onEnter: d,
                onLeave: g,
                minimal: E,
            } = e,
            { isPurchased: y } = (0, b.L)(r),
            S = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)),
            { onFocus: x } = S,
            j = O(S, ["onFocus"]),
            P = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, f.$)(t, a), x();
                },
                [x, t, a],
            );
        return (0, n.jsx)(p.ua7, {
            text: m.intl.string(m.t["6cfuDg"]),
            "aria-label": !1,
            shouldShow: !E && y,
            children: (e) =>
                (0, n.jsx)(
                    p.P3F,
                    v(_({}, j), {
                        tag: "li",
                        onMouseEnter: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onMouseLeave: () => {
                            var t;
                            g(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onBlur: () => {
                            var t;
                            g(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onClick: P,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && P(e);
                        },
                        className: h.colorVariant,
                        children: (0, n.jsx)("div", {
                            className: i()(h.colorSwatch, {
                                [h.open]: !E,
                                [h.selected]: a === s,
                            }),
                            style: {
                                backgroundColor: r.variantValue,
                                zIndex: o - a,
                            },
                            children: y
                                ? (0, n.jsx)(p.kSu, {
                                      className: h.purchasedIndicator,
                                      color: C(r.variantValue),
                                  })
                                : null,
                        }),
                    }),
                ),
        });
    },
    y = (e) => {
        var t, r;
        let {
                variantGroupProduct: l,
                className: a,
                previewingVariantIndexProps: o,
                setIsHoveringOnSwitch: s,
                minimal: d,
                selectedVariantIndex: f,
                alternativeBackgroundColor: b,
            } = e,
            C = o.previewingVariantIndex,
            y = null == (t = l.variants) ? void 0 : t[f],
            S = null !== C ? (null == (r = l.variants) ? void 0 : r[C]) : void 0,
            x = (0, g.Z)("shop-variants-group-".concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == y) return null;
        let j = null != S ? S.variantLabel : null == y ? void 0 : y.variantLabel;
        return (0, n.jsx)(c.bG, {
            navigator: x,
            children: (0, n.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: r } = e,
                        c = O(e, ["ref"]);
                    return (0, n.jsxs)(
                        "div",
                        v(_({ ref: r }, c), {
                            className: i()(h.variantsPanel, a, {
                                [h.minimalState]: d,
                                [h.alternativeColor]: b,
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, n.jsx)("ol", {
                                    className: h.variantsList,
                                    children:
                                        null == (t = l.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var r, a;
                                                  return (0, n.jsx)(
                                                      E,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: f,
                                                          totalVariants:
                                                              null != (a = null == (r = l.variants) ? void 0 : r.length)
                                                                  ? a
                                                                  : 0,
                                                          onEnter: () => o.handleEntering(t),
                                                          onLeave: o.handleLeaving,
                                                          minimal: d,
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                                (0, n.jsx)(p.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-secondary",
                                    className: h.variantLabel,
                                    children: d ? m.intl.string(m.t.wbgaj4) : j,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
