n.d(t, { Z: () => k });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(91192),
    o = n(536895),
    c = n(979554),
    u = n(866442),
    d = n(793030),
    g = n(28664),
    p = n(209613),
    f = n(44315),
    m = n(429368),
    h = n(724994),
    C = n(786040),
    _ = n(981631),
    b = n(388032),
    v = n(922948);
function x(e) {
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
function E(e, t) {
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
function O(e, t) {
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
let S = (e) => {
        var t, n;
        let { product: i, onVariantEnter: c, onVariantExit: u, isCollapsed: d } = e,
            g = (0, m.o)(i),
            f = null != (n = null == (t = i.variants) ? void 0 : t.length) ? n : 0,
            h = l.useCallback(
                (e, t) => {
                    e.stopPropagation(), (0, m.$)(i, t);
                },
                [i],
            ),
            C = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), o.hy.HORIZONTAL);
        return 0 === f
            ? null
            : (0, r.jsx)(s.bG, {
                  navigator: C,
                  children: (0, r.jsx)(s.SJ, {
                      children: (e) => {
                          var t,
                              { ref: n } = e,
                              l = O(e, ["ref"]);
                          return (0, r.jsx)(
                              "div",
                              E(
                                  x(
                                      {
                                          className: a()(
                                              {
                                                  [v.collapsed]: d,
                                                  [v.expanded]: !d,
                                              },
                                              v.productVariantsContainer,
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
                                                        y,
                                                        {
                                                            variant: e,
                                                            isSelected: t === g,
                                                            onVariantEnter: () => c(t),
                                                            onVariantExit: u,
                                                            zIndex: f - Math.abs(g - t),
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
    y = (e) => {
        let { variant: t, isSelected: n, onClick: l, onVariantEnter: i, onVariantExit: o, zIndex: c } = e,
            u = (0, s.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)),
            { onFocus: p } = u,
            f = O(u, ["onFocus"]),
            { isPurchased: m } = (0, h.L)(t);
        return (0, r.jsx)(g.u, {
            text: b.intl.string(b.t["6cfuDj"]),
            shouldShow: m,
            children: (0, r.jsx)(
                d.P3F,
                E(
                    x(
                        {
                            "aria-label": t.variantLabel,
                            onClick: (e) => {
                                l(e), p();
                            },
                            onMouseEnter: i,
                            onMouseLeave: o,
                            onFocus: i,
                            onBlur: o,
                            className: a()(v.productVariant, { [v.selected]: n }),
                            style: {
                                backgroundColor: t.variantValue,
                                zIndex: c,
                            },
                        },
                        f,
                    ),
                    { children: m && (0, r.jsx)(j, { variant: t }) },
                ),
            ),
        });
    },
    j = (e) => {
        let { variant: t } = e,
            n = l.useMemo(() => {
                let e = (0, u.FX)(t.variantValue) && 0.3 > (0, u.Bd)((0, u._i)(t.variantValue));
                return (0, f.Lq)(e ? _.Ilk.BLACK_500 : _.Ilk.WHITE_500);
            }, [t.variantValue]);
        return (0, r.jsx)(d.kSu, {
            className: v.productVariantCheckmark,
            color: n,
        });
    },
    k = (e) => {
        let { skuId: t, isCollapsed: n = !1, showLabel: l = !1, onVariantEnter: i, onVariantExit: s, className: o } = e,
            u = (0, C.LJ)(t),
            g = (0, m.o)(u);
        return null == u || u.type !== c.Z.VARIANTS_GROUP || null == u.variants || 0 === u.variants.length
            ? null
            : (0, r.jsxs)("div", {
                  className: a()(v.productVariantsOuterContainer, o),
                  children: [
                      (0, r.jsx)(S, {
                          product: u,
                          onVariantEnter: i,
                          onVariantExit: s,
                          isCollapsed: n,
                      }),
                      l &&
                          (0, r.jsx)(d.xvT, {
                              variant: "text-xs/medium",
                              color: "text-secondary",
                              children: u.variants[g].variantLabel,
                          }),
                  ],
              });
    };
