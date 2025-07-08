n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(884697),
    s = n(409116),
    c = n(200615),
    u = n(981631),
    d = n(388032),
    p = n(561197);
function v() {
    return (v =
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
function m(e, t) {
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
    let { product: t, isPremiumUser: n, discount: i, className: b, nitroUpsell: h = !1, hideStrikethroughPrice: g = !1 } = e,
        _ = (0, o.ql)(t, u.tuJ.DEFAULT);
    if (null == _) return null;
    if (_.amount <= 0)
        return (0, r.jsx)('div', {
            className: l()(p.priceTagsContainer, b),
            children: (0, r.jsx)(s.F, { price: _ })
        });
    let y = (0, o.ql)(t, u.tuJ.PREMIUM_TIER_2),
        O = !n && !(0, o.x6)(t),
        x = (0, o.x6)(t) && n ? m(f({}, _), { amount: i.original }) : _,
        j = g && n,
        P = g && !n;
    return (0, r.jsxs)('div', {
        className: l()(p.priceTagsContainer, b),
        children: [
            !j &&
                (0, r.jsx)(s.F, {
                    price: x,
                    discount: n ? o.f_ : i,
                    className: l()(p.price, {
                        [p.striked]: n,
                        [p.dimmed]: n,
                        [p.fullPrice]: O
                    })
                }),
            null != y &&
                !P &&
                (0, r.jsx)(s.F, {
                    price: y,
                    discount: n ? i : o.f_,
                    renderPrice: h
                        ? (e) =>
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.intl.format(d.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : O
                          ? (e) => d.intl.formatToPlainString(d.t.W3gIWF, { price: e })
                          : void 0,
                    className: l()(p.price, {
                        [p.dimmed]: !n,
                        [p.fullPrice]: O
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(a.ua7, {
                        text: d.intl.string(d.t.MPFyJy),
                        'aria-label': d.intl.string(d.t.X3Ekj4),
                        children: (e) => {
                            var t = v(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            );
                            return (0, r.jsx)(
                                a.SrA,
                                m(
                                    f(
                                        {
                                            size: 'md',
                                            color: 'currentColor'
                                        },
                                        t
                                    ),
                                    { className: l()(p.premiumIcon, { [p.fullPrice]: O }) }
                                )
                            );
                        }
                    })
                })
        ]
    });
}
