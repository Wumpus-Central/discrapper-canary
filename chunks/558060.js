r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var a = r(120356),
    l = r.n(a),
    i = r(884697),
    o = r(754433),
    s = r(409116),
    c = r(981631),
    u = r(561197);
function d(e) {
    var t, r;
    let { product: a, isPremiumUser: d, discount: p, className: b, discountOfferAmount: h, hideStrikethroughPrice: f = !1, nitroIconType: v, nitroIconSize: m = 'md' } = e,
        _ = (0, i.ql)(a, c.tuJ.DEFAULT);
    if (null == _) return null;
    if (_.amount <= 0)
        return (0, n.jsx)('div', {
            className: l()(u.priceTagsContainer, b),
            children: (0, n.jsx)(s.F, { price: _ })
        });
    let O = (0, i.ql)(a, c.tuJ.PREMIUM_TIER_2),
        y =
            (0, i.x6)(a) && d
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
                  })({}, _)),
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
                : _,
        g = d && null != O;
    return (0, n.jsxs)('div', {
        className: l()(u.priceTagsContainer, b),
        children: [
            f
                ? null
                : (0, n.jsx)(o.y, {
                      price: y,
                      className: u.price
                  }),
            (0, n.jsx)(s.F, {
                price: g ? O : y,
                discount: p,
                className: l()({ [u.price]: null == h }),
                nitroIconType: g ? v : void 0,
                nitroIconSize: m,
                discountOfferAmount: h
            })
        ]
    });
}
