r.d(t, { Z: () => d });
var n = r(951288);
r(647438);
var l = r(120356),
    i = r.n(l),
    a = r(884697),
    o = r(754433),
    s = r(409116),
    c = r(981631),
    u = r(859040);
function d(e) {
    var t, r;
    let {
            product: l,
            isPremiumUser: d,
            discount: p,
            className: f,
            discountOfferAmount: b,
            hideStrikethroughPrice: h = !1,
            nitroIconType: g,
            nitroIconSize: O = "md",
        } = e,
        v = (0, a.ql)(l, c.tuJ.DEFAULT);
    if (null == v) return null;
    if (v.amount <= 0)
        return (0, n.jsx)("div", {
            className: i()(u.priceTagsContainer, f),
            children: (0, n.jsx)(s.F, { price: v }),
        });
    let y = (0, a.ql)(l, c.tuJ.PREMIUM_TIER_2),
        m =
            (0, a.x6)(l) && d
                ? ((t = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {},
                              n = Object.keys(r);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (n = n.concat(
                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                  }),
                              )),
                              n.forEach(function (t) {
                                  var n;
                                  (n = r[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: n,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = n);
                              });
                      }
                      return e;
                  })({}, v)),
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
                : v,
        j = d && null != y;
    return (0, n.jsxs)("div", {
        className: i()(u.priceTagsContainer, f),
        children: [
            h
                ? null
                : (0, n.jsx)(o.y, {
                      price: m,
                      className: u.price,
                  }),
            (0, n.jsx)(s.F, {
                price: j ? y : m,
                discount: p,
                className: i()({ [u.price]: null == b }),
                nitroIconType: j ? g : void 0,
                nitroIconSize: O,
                discountOfferAmount: b,
            }),
        ],
    });
}
