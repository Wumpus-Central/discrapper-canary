n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    i = n(884697),
    s = n(409116),
    c = n(200615),
    u = n(981631),
    d = n(388032),
    b = n(561197);
function p() {
    return (p =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { product: t, isPremiumUser: n, discount: l, className: h, nitroUpsell: m = !1, hideStrikethroughPrice: _ = !1 } = e,
        v = (0, i.ql)(t, u.tuJ.DEFAULT);
    if (null == v) return null;
    if (v.amount <= 0)
        return (0, r.jsx)('div', {
            className: a()(b.priceTagsContainer, h),
            children: (0, r.jsx)(s.F, { price: v })
        });
    let C = (0, i.ql)(t, u.tuJ.PREMIUM_TIER_2),
        x = !n && !(0, i.x6)(t),
        O = (0, i.x6)(t) && n ? g(f({}, v), { amount: l.original }) : v,
        y = _ && n,
        j = _ && !n;
    return (0, r.jsxs)('div', {
        className: a()(b.priceTagsContainer, h),
        children: [
            !y &&
                (0, r.jsx)(s.F, {
                    price: O,
                    discount: n ? i.f_ : l,
                    className: a()(b.price, {
                        [b.striked]: n,
                        [b.dimmed]: n,
                        [b.fullPrice]: x
                    })
                }),
            null != C &&
                !j &&
                (0, r.jsx)(s.F, {
                    price: C,
                    discount: n ? l : i.f_,
                    renderPrice: m
                        ? (e) =>
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.NW.format(d.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : x
                          ? (e) => d.NW.formatToPlainString(d.t.W3gIWF, { price: e })
                          : void 0,
                    className: a()(b.price, {
                        [b.dimmed]: !n,
                        [b.fullPrice]: x
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(o.ua7, {
                        text: d.NW.string(d.t.MPFyJy),
                        'aria-label': d.NW.string(d.t.X3Ekj4),
                        children: (e) => {
                            var t = p(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            );
                            return (0, r.jsx)(
                                o.SrA,
                                g(
                                    f(
                                        {
                                            size: 'md',
                                            color: 'currentColor'
                                        },
                                        t
                                    ),
                                    { className: a()(b.premiumIcon, { [b.fullPrice]: x }) }
                                )
                            );
                        }
                    })
                })
        ]
    });
}
