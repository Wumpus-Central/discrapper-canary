n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(884697),
    s = n(409116),
    c = n(200615),
    u = n(981631),
    d = n(388032),
    p = n(561197);
function g() {
    return (g =
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function h(e, t) {
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
function b(e) {
    let { product: t, isPremiumUser: n, discount: l, className: b, nitroUpsell: m = !1, hideStrikethroughPrice: _ = !1 } = e,
        C = (0, a.ql)(t, u.tuJ.DEFAULT);
    if (null == C) return null;
    if (C.amount <= 0)
        return (0, r.jsx)('div', {
            className: i()(p.priceTagsContainer, b),
            children: (0, r.jsx)(s.F, { price: C })
        });
    let O = (0, a.ql)(t, u.tuJ.PREMIUM_TIER_2),
        E = !n && !(0, a.x6)(t),
        v = (0, a.x6)(t) && n ? h(f({}, C), { amount: l.original }) : C,
        S = _ && n,
        x = _ && !n;
    return (0, r.jsxs)('div', {
        className: i()(p.priceTagsContainer, b),
        children: [
            !S &&
                (0, r.jsx)(s.F, {
                    price: v,
                    discount: n ? a.f_ : l,
                    className: i()(p.price, {
                        [p.striked]: n,
                        [p.dimmed]: n,
                        [p.fullPrice]: E
                    })
                }),
            null != O &&
                !x &&
                (0, r.jsx)(s.F, {
                    price: O,
                    discount: n ? l : a.f_,
                    renderPrice: m
                        ? (e) =>
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.intl.format(d.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : E
                          ? (e) => d.intl.formatToPlainString(d.t.W3gIWF, { price: e })
                          : void 0,
                    className: i()(p.price, {
                        [p.dimmed]: !n,
                        [p.fullPrice]: E
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(o.ua7, {
                        text: d.intl.string(d.t.MPFyJy),
                        'aria-label': d.intl.string(d.t.X3Ekj4),
                        children: (e) => {
                            var t = g(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            );
                            return (0, r.jsx)(
                                o.SrA,
                                h(
                                    f(
                                        {
                                            size: 'md',
                                            color: 'currentColor'
                                        },
                                        t
                                    ),
                                    { className: i()(p.premiumIcon, { [p.fullPrice]: E }) }
                                )
                            );
                        }
                    })
                })
        ]
    });
}
