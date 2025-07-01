r.d(t, { Z: () => b });
var n = r(255367);
r(73800);
var i = r(120356),
    l = r.n(i),
    a = r(481060),
    o = r(884697),
    s = r(409116),
    c = r(200615),
    u = r(981631),
    d = r(388032),
    p = r(561197);
function v() {
    return (v =
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
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
function b(e) {
    let { product: t, isPremiumUser: r, discount: i, className: b, nitroUpsell: h = !1, hideStrikethroughPrice: g = !1 } = e,
        _ = (0, o.ql)(t, u.tuJ.DEFAULT);
    if (null == _) return null;
    if (_.amount <= 0)
        return (0, n.jsx)('div', {
            className: l()(p.priceTagsContainer, b),
            children: (0, n.jsx)(s.F, { price: _ })
        });
    let y = (0, o.ql)(t, u.tuJ.PREMIUM_TIER_2),
        O = !r && !(0, o.x6)(t),
        x = (0, o.x6)(t) && r ? m(f({}, _), { amount: i.original }) : _,
        j = g && r,
        P = g && !r;
    return (0, n.jsxs)('div', {
        className: l()(p.priceTagsContainer, b),
        children: [
            !j &&
                (0, n.jsx)(s.F, {
                    price: x,
                    discount: r ? o.f_ : i,
                    className: l()(p.price, {
                        [p.striked]: r,
                        [p.dimmed]: r,
                        [p.fullPrice]: O
                    })
                }),
            null != y &&
                !P &&
                (0, n.jsx)(s.F, {
                    price: y,
                    discount: r ? i : o.f_,
                    renderPrice: h
                        ? (e) =>
                              (0, n.jsx)(a.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.intl.format(d.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, n.jsx)(c.F, { text: e })
                                  })
                              })
                        : O
                          ? (e) => d.intl.formatToPlainString(d.t.W3gIWF, { price: e })
                          : void 0,
                    className: l()(p.price, {
                        [p.dimmed]: !r,
                        [p.fullPrice]: O
                    }),
                    variant: r ? void 0 : 'text-xs/semibold',
                    icon: (0, n.jsx)(a.ua7, {
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
                            return (0, n.jsx)(
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
