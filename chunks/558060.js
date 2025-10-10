n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(884697),
    o = n(754433),
    s = n(409116),
    c = n(981631),
    u = n(492851);
function d(e) {
    var t, n;
    let {
            product: l,
            isPremiumUser: d,
            discount: p,
            className: f,
            discountOfferAmount: b,
            hideStrikethroughPrice: y = !1,
            nitroIconType: m,
            nitroIconSize: O = "md",
        } = e,
        g = (0, a.ql)(l, c.tuJ.DEFAULT);
    if (null == g) return null;
    if (g.amount <= 0)
        return (0, r.jsx)("div", {
            className: i()(u.priceTagsContainer, f),
            children: (0, r.jsx)(s.F, { price: g }),
        });
    let j = (0, a.ql)(l, c.tuJ.PREMIUM_TIER_2),
        h =
            (0, a.x6)(l) && d
                ? ((t = (function (e) {
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
                  })({}, g)),
                  (n = n = { amount: p.original }),
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
                : g,
        v = d && null != j;
    return (0, r.jsxs)("div", {
        className: i()(u.priceTagsContainer, f),
        children: [
            y
                ? null
                : (0, r.jsx)(o.y, {
                      price: h,
                      className: u.price,
                  }),
            (0, r.jsx)(s.F, {
                price: v ? j : h,
                discount: p,
                className: i()({ [u.price]: null == b }),
                nitroIconType: v ? m : void 0,
                nitroIconSize: O,
                discountOfferAmount: b,
            }),
        ],
    });
}
