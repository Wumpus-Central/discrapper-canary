r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var i = r(120356),
    l = r.n(i),
    a = r(884697),
    o = r(754433),
    s = r(409116),
    c = r(981631),
    u = r(561197);
function d(e) {
    var t, r;
    let { product: i, isPremiumUser: d, discount: p, className: v, hideStrikethroughPrice: b = !1, nitroIconType: f, nitroIconSize: m = 'md' } = e,
        h = (0, a.ql)(i, c.tuJ.DEFAULT);
    if (null == h) return null;
    if (h.amount <= 0)
        return (0, n.jsx)('div', {
            className: l()(u.priceTagsContainer, v),
            children: (0, n.jsx)(s.F, { price: h })
        });
    let g = (0, a.ql)(i, c.tuJ.PREMIUM_TIER_2),
        y =
            (0, a.x6)(i) && d
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
                  })({}, h)),
                  (r = r = { amount: p.original }),
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
                : h,
        O = d && null != g;
    return (0, n.jsxs)('div', {
        className: l()(u.priceTagsContainer, v),
        children: [
            b
                ? null
                : (0, n.jsx)(o.y, {
                      price: y,
                      className: u.price
                  }),
            (0, n.jsx)(s.F, {
                price: O ? g : y,
                discount: p,
                className: u.price,
                nitroIconType: O ? f : void 0,
                nitroIconSize: m
            })
        ]
    });
}
