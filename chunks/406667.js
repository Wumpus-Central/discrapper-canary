n.d(t, { Z: () => j });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(91192),
    s = n(536895),
    c = n(979554),
    u = n(866442),
    d = n(793030),
    f = n(692547),
    g = n(28664),
    p = n(209613),
    m = n(429368),
    h = n(724994),
    C = n(786040),
    _ = n(388032),
    b = n(963458);
function v(e) {
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
function x(e, t) {
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
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let O = (e) => {
        var t, n;
        let { product: i, onVariantEnter: c, onVariantExit: u, isCollapsed: d } = e,
            f = (0, m.o)(i),
            g = null != (n = null == (t = i.variants) ? void 0 : t.length) ? n : 0,
            h = l.useCallback(
                (e, t) => {
                    e.stopPropagation(), (0, m.$)(i, t);
                },
                [i],
            ),
            C = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), s.hy.HORIZONTAL);
        return 0 === g
            ? null
            : (0, r.jsx)(a.bG, {
                  navigator: C,
                  children: (0, r.jsx)(a.SJ, {
                      children: (e) => {
                          var t,
                              { ref: n } = e,
                              l = E(e, ["ref"]);
                          return (0, r.jsx)(
                              "div",
                              x(
                                  v(
                                      {
                                          className: o()(
                                              {
                                                  [b.collapsed]: d,
                                                  [b.expanded]: !d,
                                              },
                                              b.productVariantsContainer,
                                          ),
                                          ref: n,
                                      },
                                      l,
                                  ),
                                  {
                                      children:
                                          null == (t = i.variants)
                                              ? void 0
                                              : t.map((e, t) =>
                                                    (0, r.jsx)(
                                                        S,
                                                        {
                                                            variant: e,
                                                            isSelected: t === f,
                                                            onVariantEnter: () => c(t),
                                                            onVariantExit: u,
                                                            zIndex: g - Math.abs(f - t),
                                                            onClick: (e) => h(e, t),
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
        let { variant: t, isSelected: n, onClick: l, onVariantEnter: i, onVariantExit: s, zIndex: c } = e,
            u = (0, a.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)),
            { onFocus: f } = u,
            p = E(u, ["onFocus"]),
            { isPurchased: m } = (0, h.L)(t);
        return (0, r.jsx)(g.u, {
            text: _.intl.string(_.t["6cfuDj"]),
            shouldShow: m,
            children: (0, r.jsx)(
                d.P3F,
                x(
                    v(
                        {
                            "aria-label": t.variantLabel,
                            onClick: (e) => {
                                l(e), f();
                            },
                            onMouseEnter: i,
                            onMouseLeave: s,
                            onFocus: i,
                            onBlur: s,
                            className: o()(b.productVariant, { [b.selected]: n }),
                            style: {
                                backgroundColor: t.variantValue,
                                zIndex: c,
                            },
                        },
                        p,
                    ),
                    { children: m && (0, r.jsx)(y, { variant: t }) },
                ),
            ),
        });
    },
    y = (e) => {
        let { variant: t } = e,
            n = l.useMemo(
                () =>
                    (0, u.FX)(t.variantValue) && 0.3 > (0, u.Bd)((0, u._i)(t.variantValue))
                        ? f.Z.colors.BLACK.css
                        : f.Z.colors.WHITE.css,
                [t.variantValue],
            );
        return (0, r.jsx)(d.kSu, {
            className: b.productVariantCheckmark,
            color: n,
        });
    },
    j = (e) => {
        let { skuId: t, isCollapsed: n = !1, showLabel: l = !1, onVariantEnter: i, onVariantExit: a, className: s } = e,
            u = (0, C.LJ)(t),
            f = (0, m.o)(u);
        return null == u || u.type !== c.Z.VARIANTS_GROUP || null == u.variants || 0 === u.variants.length
            ? null
            : (0, r.jsxs)("div", {
                  className: o()(b.productVariantsOuterContainer, s),
                  children: [
                      (0, r.jsx)(O, {
                          product: u,
                          onVariantEnter: i,
                          onVariantExit: a,
                          isCollapsed: n,
                      }),
                      l &&
                          (0, r.jsx)(d.xvT, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              children: u.variants[f].variantLabel,
                          }),
                  ],
              });
    };
