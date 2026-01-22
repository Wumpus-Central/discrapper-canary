n.d(t, {
    A: () => R,
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(837381),
    s = n(741918),
    c = n(317097),
    u = n(158954),
    d = n(827734),
    p = n(990078),
    v = n(260762),
    b = n(298072),
    y = n(466459),
    m = n(623373),
    f = n(561769),
    g = n(985018),
    O = n(219974);

function j(e) {
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

function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (
        ((a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
let P = (e) => {
        var t, n;
        let { product: a, onVariantEnter: c, onVariantExit: u, isCollapsed: d } = e,
            p = (0, b.Q)(a),
            y = null != (t = null == (n = a.variants) ? void 0 : n.length) ? t : 0,
            m = l.useCallback(
                (e, t) => {
                    e.stopPropagation(), (0, b.n)(a, t);
                },
                [a],
            ),
            f = (0, v.A)("shop-variants-group-".concat(a.storeListingId), s.Gl.HORIZONTAL);
        return 0 === y
            ? null
            : (0, r.jsx)(o.hD, {
                  navigator: f,
                  children: (0, r.jsx)(o.PR, {
                      children: (e) => {
                          var t;
                          let { ref: n } = e,
                              l = x(e, ["ref"]);
                          return (0, r.jsx)(
                              "div",
                              h(
                                  j(
                                      {
                                          className: i()(
                                              {
                                                  [O.yZ]: d,
                                                  [O.sz]: !d,
                                              },
                                              O.lO,
                                          ),
                                          ref: n,
                                      },
                                      l,
                                  ),
                                  {
                                      children:
                                          null == (t = a.variants)
                                              ? void 0
                                              : t.map((e, t) =>
                                                    (0, r.jsx)(
                                                        A,
                                                        {
                                                            variant: e,
                                                            isSelected: t === p,
                                                            onVariantEnter: () => c(t),
                                                            onVariantExit: u,
                                                            zIndex: y - Math.abs(p - t),
                                                            onClick: (e) => m(e, t),
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
    A = (e) => {
        let { variant: t, isSelected: n, onClick: l, onVariantEnter: a, onVariantExit: s, zIndex: c } = e,
            d = (0, o.rm)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)),
            { onFocus: v } = d,
            b = x(d, ["onFocus"]),
            { isPurchased: m } = (0, y.h)(t);
        return (0, r.jsx)(p.m, {
            text: g.intl.string(g.t["6cfuDj"]),
            shouldShow: m,
            children: (0, r.jsx)(
                u.DUT,
                h(
                    j(
                        {
                            "aria-label": t.variantLabel,
                            onClick: (e) => {
                                l(e), v();
                            },
                            onMouseEnter: a,
                            onMouseLeave: s,
                            onFocus: a,
                            onBlur: s,
                            className: i()(O.bP, {
                                [O.wH]: n,
                            }),
                            style: {
                                backgroundColor: t.variantValue,
                                zIndex: c,
                            },
                        },
                        b,
                    ),
                    {
                        children:
                            m &&
                            (0, r.jsx)(C, {
                                variant: t,
                            }),
                    },
                ),
            ),
        });
    },
    C = (e) => {
        let { variant: t } = e,
            n = l.useMemo(
                () =>
                    (0, c.qt)(t.variantValue) && 0.3 > (0, c.OK)((0, c.LX)(t.variantValue))
                        ? d.A.colors.BLACK.css
                        : d.A.colors.WHITE.css,
                [t.variantValue],
            );
        return (0, r.jsx)(u.BNr, {
            className: O.U,
            color: n,
        });
    },
    R = (e) => {
        let { skuId: t, isCollapsed: n = !1, onVariantEnter: l, onVariantExit: a } = e,
            i = (0, f.Vm)(t);
        return null != i && (0, m.B1)(i)
            ? (0, r.jsx)(P, {
                  product: i,
                  onVariantEnter: l,
                  onVariantExit: a,
                  isCollapsed: n,
              })
            : null;
    };
