n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(993408),
    s = n(506742),
    o = n(219103),
    c = n(652215),
    u = n(258470);

function d(e) {
    var t, n;
    let {
            product: l,
            isPremiumUser: d,
            discount: m,
            className: p,
            discountOfferAmount: f,
            hideStrikethroughPrice: x = !1,
            nitroIconType: h,
            nitroIconSize: v = "md",
        } = e,
        g = (0, a.yt)(l, c.lid.DEFAULT);
    if (null == g) return null;
    if (g.amount <= 0)
        return (0, r.jsx)("div", {
            className: i()(u.kG, p),
            children: (0, r.jsx)(o.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
            }),
        });
    let b = (0, a.yt)(l, c.lid.PREMIUM_TIER_2),
        j =
            (0, a.aw)(l) && d
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
                  (n = n =
                      {
                          amount: m.original,
                      }),
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
        A = d && null != b,
        _ = A ? b : j;
    return (0, r.jsxs)("div", {
        className: i()(u.kG, p),
        children: [
            x
                ? null
                : (0, r.jsx)(s.a, {
                      price: j,
                      className: u.q9,
                  }),
            (0, r.jsx)(o.x, {
                priceAmount: _.amount,
                priceCurrency: _.currency,
                discount: m,
                className: i()({
                    [u.q9]: null == f,
                }),
                nitroIconType: A ? h : void 0,
                nitroIconSize: v,
                discountOfferAmount: f,
            }),
        ],
    });
}
