r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var l = r(120356),
    a = r.n(l),
    i = r(884697),
    o = r(754433),
    s = r(409116),
    c = r(981631),
    u = r(561197);
function d(e) {
    var t, r;
    let { product: l, isPremiumUser: d, discount: p, className: g, discountOfferAmount: f, hideStrikethroughPrice: h = !1, nitroIconType: b, nitroIconSize: _ = 'md' } = e,
        m = (0, i.ql)(l, c.tuJ.DEFAULT);
    if (null == m) return null;
    if (m.amount <= 0)
        return (0, n.jsx)('div', {
            className: a()(u.priceTagsContainer, g),
            children: (0, n.jsx)(s.F, { price: m })
        });
    let v = (0, i.ql)(l, c.tuJ.PREMIUM_TIER_2),
        C =
            (0, i.x6)(l) && d
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
                : m,
        O = d && null != v;
    return (0, n.jsxs)('div', {
        className: a()(u.priceTagsContainer, g),
        children: [
            h
                ? null
                : (0, n.jsx)(o.y, {
                      price: C,
                      className: u.price
                  }),
            (0, n.jsx)(s.F, {
                price: O ? v : C,
                discount: p,
                className: a()({ [u.price]: null == f }),
                nitroIconType: O ? b : void 0,
                nitroIconSize: _,
                discountOfferAmount: f
            })
        ]
    });
}
