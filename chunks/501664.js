n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(993408),
    s = n(506742),
    c = n(219103),
    o = n(652215),
    d = n(258470);
function u(e) {
    var t, n;
    let {
            product: l,
            isPremiumUser: u,
            discount: m,
            className: f,
            discountOfferAmount: b,
            hideStrikethroughPrice: p = !1,
            nitroIconType: x,
            nitroIconSize: h = "md",
        } = e,
        g = (0, i.yt)(l, o.lid.DEFAULT);
    if (null == g) return null;
    if (g.amount <= 0)
        return (0, r.jsx)("div", {
            className: a()(d.kG, f),
            children: (0, r.jsx)(c.x, { price: g }),
        });
    let j = (0, i.yt)(l, o.lid.PREMIUM_TIER_2),
        v =
            (0, i.aw)(l) && u
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
                : g,
        O = u && null != j;
    return (0, r.jsxs)("div", {
        className: a()(d.kG, f),
        children: [
            p
                ? null
                : (0, r.jsx)(s.a, {
                      price: v,
                      className: d.q9,
                  }),
            (0, r.jsx)(c.x, {
                price: O ? j : v,
                discount: m,
                className: a()({ [d.q9]: null == b }),
                nitroIconType: O ? x : void 0,
                nitroIconSize: h,
                discountOfferAmount: b,
            }),
        ],
    });
}
