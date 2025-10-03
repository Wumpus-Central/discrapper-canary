n.d(t, { P: () => C });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(404759),
    l = n.n(s),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    f = n(28664),
    _ = n(481060),
    p = n(209613),
    h = n(429368),
    m = n(724994),
    g = n(388032),
    E = n(270132);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = l()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? _.TVs.unsafe_rawColors.PRIMARY_700.css : _.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    A = (e) => {
        let {
                variantGroupProduct: t,
                variant: n,
                variantIndex: a,
                totalVariants: s,
                selectedVariantIndex: l,
                onEnter: d,
                onLeave: p,
                minimal: b,
            } = e,
            { isPurchased: O } = (0, m.L)(n),
            T = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)),
            { onFocus: A } = T,
            C = I(T, ["onFocus"]),
            N = i.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, h.$)(t, a), A();
                },
                [A, t, a],
            );
        return (0, r.jsx)(f.u, {
            text: g.intl.string(g.t["6cfuDg"]),
            "aria-label": !1,
            shouldShow: !b && O,
            asContainer: !0,
            children: (0, r.jsx)(
                _.P3F,
                v(y({}, C), {
                    tag: "li",
                    onMouseEnter: () => {
                        d();
                    },
                    onMouseLeave: () => {
                        p();
                    },
                    onFocus: () => {
                        d();
                    },
                    onBlur: () => {
                        p();
                    },
                    onClick: N,
                    onKeyDown: (e) => {
                        e.key === u.R8.ENTER && N(e);
                    },
                    className: E.colorVariant,
                    children: (0, r.jsx)("div", {
                        className: o()(E.colorSwatch, {
                            [E.open]: !b,
                            [E.selected]: a === l,
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: s - a,
                        },
                        children: O
                            ? (0, r.jsx)(_.kSu, {
                                  className: E.purchasedIndicator,
                                  color: S(n.variantValue),
                              })
                            : null,
                    }),
                }),
            ),
        });
    },
    C = (e) => {
        var t, n;
        let {
                variantGroupProduct: i,
                className: a,
                previewingVariantIndexProps: s,
                setIsHoveringOnSwitch: l,
                minimal: d,
                selectedVariantIndex: f,
                alternativeBackgroundColor: h,
            } = e,
            m = s.previewingVariantIndex,
            b = null == (t = i.variants) ? void 0 : t[f],
            O = null !== m ? (null == (n = i.variants) ? void 0 : n[m]) : void 0,
            T = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
        if (null == b) return null;
        let S = null != O ? O.variantLabel : null == b ? void 0 : b.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: T,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = I(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        v(y({ ref: n }, c), {
                            className: o()(E.variantsPanel, a, {
                                [E.minimalState]: d,
                                [E.alternativeColor]: h,
                            }),
                            onMouseEnter: () => (null == l ? void 0 : l(!0)),
                            onMouseLeave: () => (null == l ? void 0 : l(!1)),
                            children: [
                                (0, r.jsx)("ol", {
                                    className: E.variantsList,
                                    children:
                                        null == (t = i.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, a;
                                                  return (0, r.jsx)(
                                                      A,
                                                      {
                                                          variantGroupProduct: i,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: f,
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
                                (0, r.jsx)(_.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-secondary",
                                    className: E.variantLabel,
                                    children: d ? g.intl.string(g.t.wbgaj4) : S,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
