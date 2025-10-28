n.d(t, { Z: () => k });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(91192),
    a = n(536895),
    c = n(979554),
    u = n(866442),
    d = n(793030),
    g = n(28664),
    p = n(209613),
    f = n(44315),
    C = n(429368),
    h = n(724994),
    _ = n(786040),
    m = n(981631),
    b = n(388032),
    v = n(963458);
function E(e) {
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
        let { product: i, isCollapsed: c } = e,
            u = (0, C.o)(i),
            d = null != (n = null == (t = i.variants) ? void 0 : t.length) ? n : 0,
            g = l.useCallback(
                (e, t) => {
                    e.stopPropagation(), (0, C.$)(i, t);
                },
                [i],
            ),
            f = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), a.hy.HORIZONTAL);
        return 0 === d
            ? null
            : (0, r.jsx)(s.bG, {
                  navigator: f,
                  children: (0, r.jsx)(s.SJ, {
                      children: (e) => {
                          var t,
                              { ref: n } = e,
                              l = O(e, ["ref"]);
                          return (0, r.jsx)(
                              "div",
                              x(
                                  E(
                                      {
                                          className: o()(
                                              {
                                                  [v.collapsed]: c,
                                                  [v.expanded]: !c,
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
                                                            isSelected: t === u,
                                                            zIndex: d - Math.abs(u - t),
                                                            onClick: (e) => g(e, t),
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
        let { variant: t, isSelected: n, onClick: l, zIndex: i } = e,
            a = (0, s.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)),
            { onFocus: c } = a,
            u = O(a, ["onFocus"]),
            { isPurchased: p } = (0, h.L)(t);
        return (0, r.jsx)(g.u, {
            text: b.intl.string(b.t["6cfuDj"]),
            shouldShow: p,
            children: (0, r.jsx)(
                d.P3F,
                x(
                    E(
                        {
                            "aria-label": t.variantLabel,
                            onClick: (e) => {
                                l(e), c();
                            },
                            className: o()(v.productVariant, { [v.selected]: n }),
                            style: {
                                backgroundColor: t.variantValue,
                                zIndex: i,
                            },
                        },
                        u,
                    ),
                    { children: p && (0, r.jsx)(j, { variant: t }) },
                ),
            ),
        });
    },
    j = (e) => {
        let { variant: t } = e,
            n = l.useMemo(() => {
                let e = (0, u.FX)(t.variantValue) && 0.3 > (0, u.Bd)((0, u._i)(t.variantValue));
                return (0, f.Lq)(e ? m.Ilk.BLACK_500 : m.Ilk.WHITE_500);
            }, [t.variantValue]);
        return (0, r.jsx)(d.kSu, {
            className: v.productVariantCheckmark,
            color: n,
        });
    },
    k = (e) => {
        let { skuId: t, isCollapsed: n = !1, showLabel: l = !1, className: i } = e,
            s = (0, _.LJ)(t),
            a = (0, C.o)(s);
        return null == s || s.type !== c.Z.VARIANTS_GROUP || null == s.variants || 0 === s.variants.length
            ? null
            : (0, r.jsxs)("div", {
                  className: o()(v.productVariantsOuterContainer, i),
                  children: [
                      (0, r.jsx)(S, {
                          product: s,
                          isCollapsed: n,
                      }),
                      l &&
                          (0, r.jsx)(d.xvT, {
                              variant: "text-xs/medium",
                              color: "text-secondary",
                              children: s.variants[a].variantLabel,
                          }),
                  ],
              });
    };
