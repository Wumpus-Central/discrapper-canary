r.d(t, { P: () => _ });
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(404759),
    s = r.n(o),
    c = r(91192),
    u = r(536895),
    d = r(866442),
    p = r(481060),
    f = r(209613),
    b = r(429368),
    h = r(724994),
    g = r(388032),
    O = r(341086);
function v(e) {
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
function y(e, t) {
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
function m(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let j = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let r = (0, d._i)(e);
            null != r && (t = 0.3 >= (0, d.Bd)(r));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    P = (e) => {
        let {
                variantGroupProduct: t,
                variant: r,
                variantIndex: i,
                totalVariants: o,
                selectedVariantIndex: s,
                onEnter: d,
                onLeave: f,
                minimal: P,
            } = e,
            { isPurchased: _ } = (0, h.L)(r),
            E = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)),
            { onFocus: x } = E,
            C = m(E, ["onFocus"]),
            S = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, b.$)(t, i), x();
                },
                [x, t, i],
            );
        return (0, n.jsx)(p.ua7, {
            text: g.intl.string(g.t["6cfuDg"]),
            "aria-label": !1,
            shouldShow: !P && _,
            children: (e) =>
                (0, n.jsx)(
                    p.P3F,
                    y(v({}, C), {
                        tag: "li",
                        onMouseEnter: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onMouseLeave: () => {
                            var t;
                            f(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onBlur: () => {
                            var t;
                            f(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onClick: S,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && S(e);
                        },
                        className: O.colorVariant,
                        children: (0, n.jsx)("div", {
                            className: a()(O.colorSwatch, {
                                [O.open]: !P,
                                [O.selected]: i === s,
                            }),
                            style: {
                                backgroundColor: r.variantValue,
                                zIndex: o - i,
                            },
                            children: _
                                ? (0, n.jsx)(p.kSu, {
                                      className: O.purchasedIndicator,
                                      color: j(r.variantValue),
                                  })
                                : null,
                        }),
                    }),
                ),
        });
    },
    _ = (e) => {
        var t, r;
        let {
                variantGroupProduct: l,
                className: i,
                previewingVariantIndexProps: o,
                setIsHoveringOnSwitch: s,
                minimal: d,
                selectedVariantIndex: b,
                alternativeBackgroundColor: h,
            } = e,
            j = o.previewingVariantIndex,
            _ = null == (t = l.variants) ? void 0 : t[b],
            E = null !== j ? (null == (r = l.variants) ? void 0 : r[j]) : void 0,
            x = (0, f.Z)("shop-variants-group-".concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == _) return null;
        let C = null != E ? E.variantLabel : null == _ ? void 0 : _.variantLabel;
        return (0, n.jsx)(c.bG, {
            navigator: x,
            children: (0, n.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: r } = e,
                        c = m(e, ["ref"]);
                    return (0, n.jsxs)(
                        "div",
                        y(v({ ref: r }, c), {
                            className: a()(O.variantsPanel, i, {
                                [O.minimalState]: d,
                                [O.alternativeColor]: h,
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, n.jsx)("ol", {
                                    className: O.variantsList,
                                    children:
                                        null == (t = l.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var r, i;
                                                  return (0, n.jsx)(
                                                      P,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: b,
                                                          totalVariants:
                                                              null != (i = null == (r = l.variants) ? void 0 : r.length)
                                                                  ? i
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
                                    className: O.variantLabel,
                                    children: d ? g.intl.string(g.t.wbgaj4) : C,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
