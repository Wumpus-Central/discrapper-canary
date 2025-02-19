r.d(t, { Z: () => m });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    a = r(481060),
    o = r(884697),
    s = r(409116),
    c = r(200615),
    d = r(981631),
    u = r(388032),
    p = r(851387);
function f() {
    return (f =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function h(e) {
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
function C(e, t) {
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
    let { product: t, isPremiumUser: r, discount: l, className: m, nitroUpsell: b = !1 } = e,
        g = (0, o.ql)(t, d.tuJ.DEFAULT);
    if (null == g) return null;
    if (g.amount <= 0)
        return (0, n.jsx)('div', {
            className: i()(p.priceTagsContainer, m),
            children: (0, n.jsx)(s.F, { price: g })
        });
    let v = (0, o.ql)(t, d.tuJ.PREMIUM_TIER_2),
        x = !r && !(0, o.x6)(t),
        _ = (0, o.x6)(t) && r ? C(h({}, g), { amount: l.original }) : g;
    return (0, n.jsxs)('div', {
        className: i()(p.priceTagsContainer, m),
        children: [
            (0, n.jsx)(s.F, {
                price: _,
                discount: r ? o.f_ : l,
                className: i()(p.price, {
                    [p.striked]: r,
                    [p.dimmed]: r,
                    [p.fullPrice]: x
                })
            }),
            null != v &&
                (0, n.jsx)(s.F, {
                    price: v,
                    discount: r ? l : o.f_,
                    renderPrice: b
                        ? (e) =>
                              (0, n.jsx)(a.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.NW.format(u.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, n.jsx)(c.F, { text: e })
                                  })
                              })
                        : x
                          ? (e) => u.NW.formatToPlainString(u.t.W3gIWF, { price: e })
                          : void 0,
                    className: i()(p.price, {
                        [p.dimmed]: !r,
                        [p.fullPrice]: x
                    }),
                    variant: r ? void 0 : 'text-xs/semibold',
                    icon: (0, n.jsx)(a.ua7, {
                        text: u.NW.string(u.t.MPFyJy),
                        'aria-label': u.NW.string(u.t.X3Ekj4),
                        children: (e) => {
                            var t = f(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            );
                            return (0, n.jsx)(
                                a.SrA,
                                C(
                                    h(
                                        {
                                            size: 'md',
                                            color: 'currentColor'
                                        },
                                        t
                                    ),
                                    { className: i()(p.premiumIcon, { [p.fullPrice]: x }) }
                                )
                            );
                        }
                    })
                })
        ]
    });
}
