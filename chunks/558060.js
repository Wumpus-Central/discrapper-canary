n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(481060),
    s = n(884697),
    a = n(409116),
    c = n(200615),
    u = n(981631),
    d = n(388032),
    h = n(302841);
function b() {
    return (b =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function p(e) {
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
function f(e, t) {
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
function g(e) {
    let { product: t, isPremiumUser: n, discount: i, className: g, nitroUpsell: O = !1, hideStrikethroughPrice: v = !1 } = e,
        m = (0, s.ql)(t, u.tuJ.DEFAULT);
    if (null == m) return null;
    if (m.amount <= 0)
        return (0, r.jsx)('div', {
            className: o()(h.priceTagsContainer, g),
            children: (0, r.jsx)(a.F, { price: m })
        });
    let E = (0, s.ql)(t, u.tuJ.PREMIUM_TIER_2),
        y = !n && !(0, s.x6)(t),
        _ = (0, s.x6)(t) && n ? f(p({}, m), { amount: i.original }) : m,
        C = v && n,
        P = v && !n;
    return (0, r.jsxs)('div', {
        className: o()(h.priceTagsContainer, g),
        children: [
            !C &&
                (0, r.jsx)(a.F, {
                    price: _,
                    discount: n ? s.f_ : i,
                    className: o()(h.price, {
                        [h.striked]: n,
                        [h.dimmed]: n,
                        [h.fullPrice]: y
                    })
                }),
            null != E &&
                !P &&
                (0, r.jsx)(a.F, {
                    price: E,
                    discount: n ? i : s.f_,
                    renderPrice: O
                        ? (e) =>
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.NW.format(d.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : y
                          ? (e) => d.NW.formatToPlainString(d.t.W3gIWF, { price: e })
                          : void 0,
                    className: o()(h.price, {
                        [h.dimmed]: !n,
                        [h.fullPrice]: y
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(l.ua7, {
                        text: d.NW.string(d.t.MPFyJy),
                        'aria-label': d.NW.string(d.t.X3Ekj4),
                        children: (e) => {
                            var t = b(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            );
                            return (0, r.jsx)(
                                l.SrA,
                                f(
                                    p(
                                        {
                                            size: 'md',
                                            color: 'currentColor'
                                        },
                                        t
                                    ),
                                    { className: o()(h.premiumIcon, { [h.fullPrice]: y }) }
                                )
                            );
                        }
                    })
                })
        ]
    });
}
