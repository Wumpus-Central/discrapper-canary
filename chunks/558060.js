n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(884697),
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
        x = (0, a.ql)(i, c.tuJ.DEFAULT);
    if (null == x) return null;
    if (x.amount <= 0)
        return (0, r.jsx)("div", {
            className: l()(u.priceTagsContainer, p),
            children: (0, r.jsx)(s.F, { price: x }),
        });
    let b = (0, a.ql)(i, c.tuJ.PREMIUM_TIER_2),
        P =
            (0, a.x6)(i) && d
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
                  })({}, x)),
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
                : x,
        j = d && null != b;
    return (0, r.jsxs)("div", {
        className: l()(u.priceTagsContainer, p),
        children: [
            v
                ? null
                : (0, r.jsx)(o.y, {
                      price: P,
                      className: u.price,
                  }),
            (0, r.jsx)(s.F, {
                price: j ? b : P,
                discount: m,
                className: l()({ [u.price]: null == f }),
                nitroIconType: j ? h : void 0,
                nitroIconSize: g,
                discountOfferAmount: f,
            }),
        ],
    });
}
