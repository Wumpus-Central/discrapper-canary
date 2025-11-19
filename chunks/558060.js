n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(884697),
    o = n(754433),
    s = n(409116),
    c = n(981631),
    u = n(492851);
function d(e) {
    var t, n;
    let {
            product: i,
            isPremiumUser: d,
            discount: m,
            className: p,
            discountOfferAmount: f,
            hideStrikethroughPrice: v = !1,
            nitroIconType: h,
            nitroIconSize: g = "md",
        } = e,
        b = (0, l.ql)(i, c.tuJ.DEFAULT);
    if (null == b) return null;
    if (b.amount <= 0)
        return (0, r.jsx)("div", {
            className: a()(u.priceTagsContainer, p),
            children: (0, r.jsx)(s.F, { price: b }),
        });
    let x = (0, l.ql)(i, c.tuJ.PREMIUM_TIER_2),
        P =
            (0, l.x6)(i) && d
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
                  })({}, b)),
                  (n = n = { amount: m.original }),
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
        _ = d && null != x;
    return (0, r.jsxs)("div", {
        className: a()(u.priceTagsContainer, p),
        children: [
            v
                ? null
                : (0, r.jsx)(o.y, {
                      price: P,
                      className: u.price,
                  }),
            (0, r.jsx)(s.F, {
                price: _ ? x : P,
                discount: m,
                className: a()({ [u.price]: null == f }),
                nitroIconType: _ ? h : void 0,
                nitroIconSize: g,
                discountOfferAmount: f,
            }),
        ],
    });
}
