n.d(t, { Z: () => O });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(91192),
    o = n(536895),
    c = n(979554),
    d = n(866442),
    u = n(793030),
    m = n(692547),
    p = n(28664),
    h = n(209613),
    x = n(429368),
    f = n(724994),
    g = n(786040),
    b = n(388032),
    v = n(963458);
function j(e) {
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
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        a,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = {},
                i = Object.keys(e);
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++)
            (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let C = (e) => {
        var t, n;
        let { product: i, onVariantEnter: c, onVariantExit: d, isCollapsed: u } = e,
            m = (0, x.o)(i),
            p = null != (n = null == (t = i.variants) ? void 0 : t.length) ? n : 0,
            f = r.useCallback(
                (e, t) => {
                    e.stopPropagation(), (0, x.$)(i, t);
                },
                [i],
            ),
            g = (0, h.Z)("shop-variants-group-".concat(i.storeListingId), o.hy.HORIZONTAL);
        return 0 === p
            ? null
            : (0, a.jsx)(s.bG, {
                  navigator: g,
                  children: (0, a.jsx)(s.SJ, {
                      children: (e) => {
                          var t,
                              { ref: n } = e,
                              r = y(e, ["ref"]);
                          return (0, a.jsx)(
                              "div",
                              _(
                                  j(
                                      {
                                          className: l()(
                                              {
                                                  [v.collapsed]: u,
                                                  [v.expanded]: !u,
                                              },
                                              v.productVariantsContainer,
                                          ),
                                          ref: n,
                                      },
                                      r,
                                  ),
                                  {
                                      children:
                                          null == (t = i.variants)
                                              ? void 0
                                              : t.map((e, t) =>
                                                    (0, a.jsx)(
                                                        S,
                                                        {
                                                            variant: e,
                                                            isSelected: t === m,
                                                            onVariantEnter: () => c(t),
                                                            onVariantExit: d,
                                                            zIndex: p - Math.abs(m - t),
                                                            onClick: (e) => f(e, t),
                                                        },
                                                        e.variantValue,
                                                    ),
                                                ),
                                  },
                              ),
                          );
                      },
                  }),
              });
    },
    S = (e) => {
        let { variant: t, isSelected: n, onClick: r, onVariantEnter: i, onVariantExit: o, zIndex: c } = e,
            d = (0, s.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)),
            { onFocus: m } = d,
            h = y(d, ["onFocus"]),
            { isPurchased: x } = (0, f.L)(t);
        return (0, a.jsx)(p.u, {
            text: b.intl.string(b.t["6cfuDj"]),
            shouldShow: x,
            children: (0, a.jsx)(
                u.P3F,
                _(
                    j(
                        {
                            "aria-label": t.variantLabel,
                            onClick: (e) => {
                                r(e), m();
                            },
                            onMouseEnter: i,
                            onMouseLeave: o,
                            onFocus: i,
                            onBlur: o,
                            className: l()(v.productVariant, { [v.selected]: n }),
                            style: {
                                backgroundColor: t.variantValue,
                                zIndex: c,
                            },
                        },
                        h,
                    ),
                    { children: x && (0, a.jsx)(E, { variant: t }) },
                ),
            ),
        });
    },
    E = (e) => {
        let { variant: t } = e,
            n = r.useMemo(
                () =>
                    (0, d.FX)(t.variantValue) && 0.3 > (0, d.Bd)((0, d._i)(t.variantValue))
                        ? m.Z.colors.BLACK.css
                        : m.Z.colors.WHITE.css,
                [t.variantValue],
            );
        return (0, a.jsx)(u.kSu, {
            className: v.productVariantCheckmark,
            color: n,
        });
    },
    O = (e) => {
        let { skuId: t, isCollapsed: n = !1, showLabel: r = !1, onVariantEnter: i, onVariantExit: s, className: o } = e,
            d = (0, g.LJ)(t),
            m = (0, x.o)(d);
        return null == d || d.type !== c.Z.VARIANTS_GROUP || null == d.variants || 0 === d.variants.length
            ? null
            : (0, a.jsxs)("div", {
                  className: l()(v.productVariantsOuterContainer, o),
                  children: [
                      (0, a.jsx)(C, {
                          product: d,
                          onVariantEnter: i,
                          onVariantExit: s,
                          isCollapsed: n,
                      }),
                      r &&
                          (0, a.jsx)(u.xvT, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              children: d.variants[m].variantLabel,
                          }),
                  ],
              });
    };
