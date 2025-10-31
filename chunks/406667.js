n.d(t, { Z: () => k });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(91192),
    o = n(536895),
    c = n(979554),
    u = n(866442),
    d = n(793030),
    p = n(28664),
    g = n(209613),
    f = n(44315),
    h = n(429368),
    C = n(724994),
    m = n(786040),
    _ = n(981631),
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
            u = (0, h.o)(i),
            d = null != (n = null == (t = i.variants) ? void 0 : t.length) ? n : 0,
            p = l.useCallback(
                (e, t) => {
                    e.stopPropagation(), (0, h.$)(i, t);
                },
                [i],
            ),
            f = (0, g.Z)("shop-variants-group-".concat(i.storeListingId), o.hy.HORIZONTAL);
        return 0 === d
            ? null
            : (0, r.jsx)(a.bG, {
                  navigator: f,
                  children: (0, r.jsx)(a.SJ, {
                      children: (e) => {
                          var t,
                              { ref: n } = e,
                              l = O(e, ["ref"]);
                          return (0, r.jsx)(
                              "div",
                              x(
                                  E(
                                      {
                                          className: s()(
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
                                                            onClick: (e) => p(e, t),
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
            o = (0, a.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)),
            { onFocus: c } = o,
            u = O(o, ["onFocus"]),
            { isPurchased: g } = (0, C.L)(t);
        return (0, r.jsx)(p.u, {
            text: b.intl.string(b.t["6cfuDj"]),
            shouldShow: g,
            children: (0, r.jsx)(
                d.P3F,
                x(
                    E(
                        {
                            "aria-label": t.variantLabel,
                            onClick: (e) => {
                                l(e), c();
                            },
                            className: s()(v.productVariant, { [v.selected]: n }),
                            style: {
                                backgroundColor: t.variantValue,
                                zIndex: i,
                            },
                        },
                        u,
                    ),
                    { children: g && (0, r.jsx)(j, { variant: t }) },
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
        let { skuId: t, isCollapsed: n = !1, showLabel: l = !1, className: i } = e,
            a = (0, m.LJ)(t),
            o = (0, h.o)(a);
        return null == a || a.type !== c.Z.VARIANTS_GROUP || null == a.variants || 0 === a.variants.length
            ? null
            : (0, r.jsxs)("div", {
                  className: s()(v.productVariantsOuterContainer, i),
                  children: [
                      (0, r.jsx)(S, {
                          product: a,
                          isCollapsed: n,
                      }),
                      l &&
                          (0, r.jsx)(d.xvT, {
                              variant: "text-xs/medium",
                              color: "text-secondary",
                              children: a.variants[o].variantLabel,
                          }),
                  ],
              });
    };
