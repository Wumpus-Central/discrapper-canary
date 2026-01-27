n.d(t, {
    A: () => w,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(837381),
    l = n(741918),
    c = n(158954),
    u = n(827734),
    d = n(990078),
    f = n(260762),
    p = n(298072),
    _ = n(274590),
    h = n(466459),
    m = n(623373),
    g = n(561769),
    E = n(985018),
    y = n(219974);

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

function O(e) {
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

function v(e, t) {
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

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let T = (e) => {
        var t, n;
        let { product: a, onVariantEnter: c, onVariantExit: u, isCollapsed: d } = e,
            _ = (0, p.Q)(a),
            h = null != (t = null == (n = a.variants) ? void 0 : n.length) ? t : 0,
            m = i.useCallback(
                (e, t) => {
                    e.stopPropagation(), (0, p.n)(a, t);
                },
                [a],
            ),
            g = (0, f.A)("shop-variants-group-".concat(a.storeListingId), l.Gl.HORIZONTAL);
        return 0 === h
            ? null
            : (0, r.jsx)(s.hD, {
                  navigator: g,
                  children: (0, r.jsx)(s.PR, {
                      children: (e) => {
                          var t;
                          let { ref: n } = e,
                              i = I(e, ["ref"]);
                          return (0, r.jsx)(
                              "div",
                              A(
                                  O(
                                      {
                                          className: o()(
                                              {
                                                  [y.yZ]: d,
                                                  [y.sz]: !d,
                                              },
                                              y.lO,
                                          ),
                                          ref: n,
                                      },
                                      i,
                                  ),
                                  {
                                      children:
                                          null == (t = a.variants)
                                              ? void 0
                                              : t.map((e, t) =>
                                                    (0, r.jsx)(
                                                        C,
                                                        {
                                                            variant: e,
                                                            isSelected: t === _,
                                                            onVariantEnter: () => c(t),
                                                            onVariantExit: u,
                                                            zIndex: h - Math.abs(_ - t),
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
    C = (e) => {
        let { variant: t, isSelected: n, onClick: i, onVariantEnter: a, onVariantExit: l, zIndex: u } = e,
            f = (0, s.rm)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)),
            { onFocus: p } = f,
            _ = I(f, ["onFocus"]),
            { isPurchased: m } = (0, h.h)(t);
        return (0, r.jsx)(d.m, {
            text: E.intl.string(E.t["6cfuDj"]),
            shouldShow: m,
            children: (0, r.jsx)(
                c.DUT,
                A(
                    O(
                        {
                            "aria-label": t.variantLabel,
                            onClick: (e) => {
                                i(e), p();
                            },
                            onMouseEnter: a,
                            onMouseLeave: l,
                            onFocus: a,
                            onBlur: l,
                            className: o()(y.bP, {
                                [y.wH]: n,
                            }),
                            style: {
                                backgroundColor: t.variantValue,
                                zIndex: u,
                            },
                        },
                        _,
                    ),
                    {
                        children:
                            m &&
                            (0, r.jsx)(N, {
                                variant: t,
                            }),
                    },
                ),
            ),
        });
    },
    N = (e) => {
        let { variant: t } = e,
            n = (0, _.A)(t);
        return (0, r.jsx)(c.BNr, {
            className: y.U,
            color: n ? u.A.colors.BLACK.css : u.A.colors.WHITE.css,
        });
    },
    w = (e) => {
        let { skuId: t, isCollapsed: n = !1, onVariantEnter: i, onVariantExit: a } = e,
            o = (0, g.Vm)(t);
        return null != o && (0, m.B1)(o)
            ? (0, r.jsx)(T, {
                  product: o,
                  onVariantEnter: i,
                  onVariantExit: a,
                  isCollapsed: n,
              })
            : null;
    };
