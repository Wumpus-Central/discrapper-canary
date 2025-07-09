n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    a = n(884697),
    i = n(409116),
    s = n(981631),
    c = n(561197);
function u(e) {
    var t, n;
    let { product: l, isPremiumUser: u, discount: d, className: p, hideStrikethroughPrice: g = !1, nitroIconType: f, nitroIconSize: h = 'md' } = e,
        b = (0, a.ql)(l, s.tuJ.DEFAULT);
    if (null == b) return null;
    if (b.amount <= 0)
        return (0, r.jsx)('div', {
            className: o()(c.priceTagsContainer, p),
            children: (0, r.jsx)(i.F, { price: b })
        });
    let m = (0, a.ql)(l, s.tuJ.PREMIUM_TIER_2),
        _ =
            (0, a.x6)(l) && u
                ? ((t = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                          ('function' == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  })
                              )),
                              r.forEach(function (t) {
                                  var r;
                                  ((r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            })
                                          : (e[t] = r));
                              }));
                      }
                      return e;
                  })({}, b)),
                  (n = n = { amount: d.original }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                      : (function (e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r);
                            }
                            return n;
                        })(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        }),
                  t)
                : b,
        C = u && null != m;
    return (0, r.jsxs)('div', {
        className: o()(c.priceTagsContainer, p),
        children: [
            g
                ? null
                : (0, r.jsx)(i.F, {
                      price: _,
                      className: o()(c.price, c.striked)
                  }),
            (0, r.jsx)(i.F, {
                price: C ? m : _,
                discount: d,
                className: c.price,
                nitroIconType: C ? f : void 0,
                nitroIconSize: h
            })
        ]
    });
}
