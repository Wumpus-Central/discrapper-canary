r.d(t, { Z: () => u });
var n = r(255367);
r(73800);
var i = r(120356),
    l = r.n(i),
    a = r(884697),
    o = r(409116),
    s = r(981631),
    c = r(561197);
function u(e) {
    var t, r;
    let { product: i, isPremiumUser: u, discount: d, className: p, hideStrikethroughPrice: v = !1, nitroIconType: b, nitroIconSize: f = 'md' } = e,
        m = (0, a.ql)(i, s.tuJ.DEFAULT);
    if (null == m) return null;
    if (m.amount <= 0)
        return (0, n.jsx)('div', {
            className: l()(c.priceTagsContainer, p),
            children: (0, n.jsx)(o.F, { price: m })
        });
    let h = (0, a.ql)(i, s.tuJ.PREMIUM_TIER_2),
        g =
            (0, a.x6)(i) && u
                ? ((t = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {},
                              n = Object.keys(r);
                          ('function' == typeof Object.getOwnPropertySymbols &&
                              (n = n.concat(
                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                  })
                              )),
                              n.forEach(function (t) {
                                  var n;
                                  ((n = r[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: n,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            })
                                          : (e[t] = n));
                              }));
                      }
                      return e;
                  })({}, m)),
                  (r = r = { amount: d.original }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                      : (function (e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n);
                            }
                            return r;
                        })(Object(r)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                        }),
                  t)
                : m,
        y = u && null != h;
    return (0, n.jsxs)('div', {
        className: l()(c.priceTagsContainer, p),
        children: [
            v
                ? null
                : (0, n.jsx)(o.F, {
                      price: g,
                      className: l()(c.price, c.striked)
                  }),
            (0, n.jsx)(o.F, {
                price: y ? h : g,
                discount: d,
                className: c.price,
                nitroIconType: y ? b : void 0,
                nitroIconSize: f
            })
        ]
    });
}
