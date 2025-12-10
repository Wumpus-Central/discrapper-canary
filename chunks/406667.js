t.d(n, { Z: () => k });
var r = t(54381),
    l = t(473749),
    i = t(120356),
    a = t.n(i),
    o = t(91192),
    s = t(536895),
    c = t(866442),
    u = t(793030),
    d = t(692547),
    p = t(28664),
    f = t(209613),
    v = t(429368),
    b = t(724994),
    g = t(27123),
    h = t(786040),
    m = t(388032),
    j = t(963458);
function y(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function O(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function x(e, n) {
    if (null == e) return {};
    var t,
        r,
        l = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
            return l;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
    }
    return l;
}
let P = (e) => {
        var n, t;
        let { product: i, onVariantEnter: c, onVariantExit: u, isCollapsed: d } = e,
            p = (0, v.o)(i),
            b = null != (t = null == (n = i.variants) ? void 0 : n.length) ? t : 0,
            g = l.useCallback(
                (e, n) => {
                    e.stopPropagation(), (0, v.$)(i, n);
                },
                [i],
            ),
            h = (0, f.Z)("shop-variants-group-".concat(i.storeListingId), s.hy.HORIZONTAL);
        return 0 === b
            ? null
            : (0, r.jsx)(o.bG, {
                  navigator: h,
                  children: (0, r.jsx)(o.SJ, {
                      children: (e) => {
                          var n,
                              { ref: t } = e,
                              l = x(e, ["ref"]);
                          return (0, r.jsx)(
                              "div",
                              O(
                                  y(
                                      {
                                          className: a()(
                                              {
                                                  [j.collapsed]: d,
                                                  [j.expanded]: !d,
                                              },
                                              j.productVariantsContainer,
                                          ),
                                          ref: t,
                                      },
                                      l,
                                  ),
                                  {
                                      children:
                                          null == (n = i.variants)
                                              ? void 0
                                              : n.map((e, n) =>
                                                    (0, r.jsx)(
                                                        C,
                                                        {
                                                            variant: e,
                                                            isSelected: n === p,
                                                            onVariantEnter: () => c(n),
                                                            onVariantExit: u,
                                                            zIndex: b - Math.abs(p - n),
                                                            onClick: (e) => g(e, n),
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
    C = (e) => {
        let { variant: n, isSelected: t, onClick: l, onVariantEnter: i, onVariantExit: s, zIndex: c } = e,
            d = (0, o.JA)("shop-variants-group-".concat(n.storeListingId, "-").concat(n.variantLabel)),
            { onFocus: f } = d,
            v = x(d, ["onFocus"]),
            { isPurchased: g } = (0, b.L)(n);
        return (0, r.jsx)(p.u, {
            text: m.intl.string(m.t["6cfuDj"]),
            shouldShow: g,
            children: (0, r.jsx)(
                u.P3F,
                O(
                    y(
                        {
                            "aria-label": n.variantLabel,
                            onClick: (e) => {
                                l(e), f();
                            },
                            onMouseEnter: i,
                            onMouseLeave: s,
                            onFocus: i,
                            onBlur: s,
                            className: a()(j.productVariant, { [j.selected]: t }),
                            style: {
                                backgroundColor: n.variantValue,
                                zIndex: c,
                            },
                        },
                        v,
                    ),
                    { children: g && (0, r.jsx)(S, { variant: n }) },
                ),
            ),
        });
    },
    S = (e) => {
        let { variant: n } = e,
            t = l.useMemo(
                () =>
                    (0, c.FX)(n.variantValue) && 0.3 > (0, c.Bd)((0, c._i)(n.variantValue))
                        ? d.Z.colors.BLACK.css
                        : d.Z.colors.WHITE.css,
                [n.variantValue],
            );
        return (0, r.jsx)(u.kSu, {
            className: j.productVariantCheckmark,
            color: t,
        });
    },
    k = (e) => {
        let { skuId: n, isCollapsed: t = !1, onVariantEnter: l, onVariantExit: i } = e,
            a = (0, h.LJ)(n);
        return null != a && (0, g.ox)(a)
            ? (0, r.jsx)(P, {
                  product: a,
                  onVariantEnter: l,
                  onVariantExit: i,
                  isCollapsed: t,
              })
            : null;
    };
