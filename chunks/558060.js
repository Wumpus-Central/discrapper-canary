r.d(t, { Z: () => m });
var n = r(255367);
r(73800);
var i = r(120356),
    o = r.n(i),
    l = r(481060),
    a = r(884697),
    s = r(409116),
    c = r(200615),
    u = r(981631),
    d = r(388032),
    p = r(561197);
function b() {
    return (b =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function m(e) {
    let { product: t, isPremiumUser: r, discount: i, className: m, nitroUpsell: h = !1, hideStrikethroughPrice: g = !1 } = e,
        x = (0, a.ql)(t, u.tuJ.DEFAULT);
    if (null == x) return null;
    if (x.amount <= 0)
        return (0, n.jsx)('div', {
            className: o()(p.priceTagsContainer, m),
            children: (0, n.jsx)(s.F, { price: x })
        });
    let _ = (0, a.ql)(t, u.tuJ.PREMIUM_TIER_2),
        O = !r && !(0, a.x6)(t),
        y = (0, a.x6)(t) && r ? v(f({}, x), { amount: i.original }) : x,
        j = g && r,
        P = g && !r;
    return (0, n.jsxs)('div', {
        className: o()(p.priceTagsContainer, m),
        children: [
            !j &&
                (0, n.jsx)(s.F, {
                    price: y,
                    discount: r ? a.f_ : i,
                    className: o()(p.price, {
                        [p.striked]: r,
                        [p.dimmed]: r,
                        [p.fullPrice]: O
                    })
                }),
            null != _ &&
                !P &&
                (0, n.jsx)(s.F, {
                    price: _,
                    discount: r ? i : a.f_,
                    renderPrice: h
                        ? (e) =>
                              (0, n.jsx)(l.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.intl.format(d.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, n.jsx)(c.F, { text: e })
                                  })
                              })
                        : O
                          ? (e) => d.intl.formatToPlainString(d.t.W3gIWF, { price: e })
                          : void 0,
                    className: o()(p.price, {
                        [p.dimmed]: !r,
                        [p.fullPrice]: O
                    }),
                    variant: r ? void 0 : 'text-xs/semibold',
                    icon: (0, n.jsx)(l.ua7, {
                        text: d.intl.string(d.t.MPFyJy),
                        'aria-label': d.intl.string(d.t.X3Ekj4),
                        children: (e) => {
                            var t = b(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            );
                            return (0, n.jsx)(
                                l.SrA,
                                v(
                                    f(
                                        {
                                            size: 'md',
                                            color: 'currentColor'
                                        },
                                        t
                                    ),
                                    { className: o()(p.premiumIcon, { [p.fullPrice]: O }) }
                                )
                            );
                        }
                    })
                })
        ]
    });
}
