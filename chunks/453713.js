n.d(t, { P: () => E });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    o = n(404759),
    s = n.n(o),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    p = n(28664),
    f = n(481060),
    b = n(209613),
    y = n(429368),
    O = n(724994),
    v = n(388032),
    g = n(270132);
function m(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let x = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? f.TVs.unsafe_rawColors.PRIMARY_700.css : f.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    P = (e) => {
        let {
                variantGroupProduct: t,
                variant: n,
                variantIndex: a,
                totalVariants: o,
                selectedVariantIndex: s,
                onEnter: d,
                onLeave: b,
                minimal: P,
            } = e,
            { isPurchased: E } = (0, O.L)(n),
            _ = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)),
            { onFocus: C } = _,
            S = j(_, ["onFocus"]),
            A = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, y.$)(t, a), C();
                },
                [C, t, a],
            );
        return (0, r.jsx)(p.u, {
            text: v.intl.string(v.t["6cfuDj"]),
            "aria-label": !1,
            shouldShow: !P && E,
            asContainer: !0,
            children: (0, r.jsx)(
                f.P3F,
                h(m({}, S), {
                    tag: "li",
                    onMouseEnter: () => {
                        d();
                    },
                    onMouseLeave: () => {
                        b();
                    },
                    onFocus: () => {
                        d();
                    },
                    onBlur: () => {
                        b();
                    },
                    onClick: A,
                    onKeyDown: (e) => {
                        e.key === u.R8.ENTER && A(e);
                    },
                    className: g.colorVariant,
                    children: (0, r.jsx)("div", {
                        className: i()(g.colorSwatch, {
                            [g.open]: !P,
                            [g.selected]: a === s,
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: o - a,
                        },
                        children: E
                            ? (0, r.jsx)(f.kSu, {
                                  className: g.purchasedIndicator,
                                  color: x(n.variantValue),
                              })
                            : null,
                    }),
                }),
            ),
        });
    },
    E = (e) => {
        var t, n;
        let {
                variantGroupProduct: l,
                className: a,
                previewingVariantIndexProps: o,
                setIsHoveringOnSwitch: s,
                minimal: d,
                selectedVariantIndex: p,
                alternativeBackgroundColor: y,
            } = e,
            O = o.previewingVariantIndex,
            x = null == (t = l.variants) ? void 0 : t[p],
            E = null !== O ? (null == (n = l.variants) ? void 0 : n[O]) : void 0,
            _ = (0, b.Z)("shop-variants-group-".concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == x) return null;
        let C = null != E ? E.variantLabel : null == x ? void 0 : x.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: _,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = j(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        h(m({ ref: n }, c), {
                            className: i()(g.variantsPanel, a, {
                                [g.minimalState]: d,
                                [g.alternativeColor]: y,
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, r.jsx)("ol", {
                                    className: g.variantsList,
                                    children:
                                        null == (t = l.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, a;
                                                  return (0, r.jsx)(
                                                      P,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: p,
                                                          totalVariants:
                                                              null != (a = null == (n = l.variants) ? void 0 : n.length)
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
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-secondary",
                                    className: g.variantLabel,
                                    children: d ? v.intl.string(v.t.wbgaj6) : C,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
