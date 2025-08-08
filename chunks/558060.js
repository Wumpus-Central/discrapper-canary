n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(884697),
    o = n(754433),
    s = n(409116),
    c = n(981631),
    u = n(561197);
function d(e) {
    var t, n;
    let {
            product: l,
            isPremiumUser: d,
            discount: p,
            className: g,
            discountOfferAmount: f,
            hideStrikethroughPrice: b = !1,
            nitroIconType: h,
            nitroIconSize: m = "md",
        } = e,
        _ = (0, i.ql)(l, c.tuJ.DEFAULT);
    if (null == _) return null;
    if (_.amount <= 0)
        return (0, r.jsx)("div", {
            className: a()(u.priceTagsContainer, g),
            children: (0, r.jsx)(s.F, { price: _ }),
        });
    let v = (0, i.ql)(l, c.tuJ.PREMIUM_TIER_2),
        O =
            (0, i.x6)(l) && d
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
                  })({}, _)),
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
                : _,
        C = d && null != v;
    return (0, r.jsxs)("div", {
        className: a()(u.priceTagsContainer, g),
        children: [
            b
                ? null
                : (0, r.jsx)(o.y, {
                      price: O,
                      className: u.price,
                  }),
            (0, r.jsx)(s.F, {
                price: C ? v : O,
                discount: p,
                className: a()({ [u.price]: null == f }),
                nitroIconType: C ? h : void 0,
                nitroIconSize: m,
                discountOfferAmount: f,
            }),
        ],
    });
}
