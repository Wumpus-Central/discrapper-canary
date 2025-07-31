r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    a = r(884697),
    o = r(754433),
    s = r(409116),
    c = r(981631),
    u = r(561197);
function d(e) {
    var t, r;
    let { product: l, isPremiumUser: d, discount: p, className: f, discountOfferAmount: g, hideStrikethroughPrice: h = !1, nitroIconType: b, nitroIconSize: m = 'md' } = e,
        _ = (0, a.ql)(l, c.tuJ.DEFAULT);
    if (null == _) return null;
    if (_.amount <= 0)
        return (0, n.jsx)('div', {
            className: i()(u.priceTagsContainer, f),
            children: (0, n.jsx)(s.F, { price: _ })
        });
    let O = (0, a.ql)(l, c.tuJ.PREMIUM_TIER_2),
        C =
            (0, a.x6)(l) && d
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
        v = d && null != O;
    return (0, n.jsxs)('div', {
        className: i()(u.priceTagsContainer, f),
        children: [
            h
                ? null
                : (0, n.jsx)(o.y, {
                      price: C,
                      className: u.price
                  }),
            (0, n.jsx)(s.F, {
                price: v ? O : C,
                discount: p,
                className: i()({ [u.price]: null == g }),
                nitroIconType: v ? b : void 0,
                nitroIconSize: m,
                discountOfferAmount: g
            })
        ]
    });
}
