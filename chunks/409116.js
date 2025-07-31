r.d(t, { F: () => p });
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    a = r(481060),
    o = r(937615),
    s = r(884697),
    c = r(388032),
    u = r(864356);
function d() {
    return (d =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
let p = (e) => {
    let {
            price: { amount: t, currency: r },
            nitroIconType: l,
            nitroIconSize: p = 'md',
            className: f,
            discountOfferAmount: g,
            discount: h = s.f_,
            variant: b = 'heading-md/semibold'
        } = e,
        m = null != g,
        _ = (0, o.qr)(t, r),
        O =
            h !== s.f_ && h.discountPercentage >= 5 && !m
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(a.nn4, {
                              children: c.intl.format(c.t.niC6DA, {
                                  price: _,
                                  discountPercentage: h.discountPercentage
                              })
                          }),
                          (0, n.jsx)('span', {
                              'aria-hidden': !0,
                              children: _
                          }),
                          (0, n.jsxs)(a.Text, {
                              variant: b,
                              color: 'text-feedback-positive',
                              className: u.discount,
                              'aria-hidden': !0,
                              children: ['(-', h.discountPercentage, '%)']
                          })
                      ]
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(a.nn4, { children: c.intl.format(c.t['6C36MD'], { price: _ }) }),
                          (0, n.jsx)('span', {
                              'aria-hidden': !0,
                              className: i()({ [u.priceStrikethrough]: m }, f),
                              children: _
                          })
                      ]
                  });
    return (0, n.jsxs)(a.Text, {
        variant: b,
        className: i()({ [u.discountBackgroundColor]: m }, u.container, f),
        children: [
            'tooltip' === l
                ? (0, n.jsx)(a.ua7, {
                      text: c.intl.string(c.t.MPFyJy),
                      'aria-label': c.intl.string(c.t.X3Ekj4),
                      children: (e) => {
                          var t,
                              r,
                              l = d(
                                  {},
                                  (function (e) {
                                      if (null == e) throw TypeError('Cannot destructure ' + e);
                                      return e;
                                  })(e)
                              );
                          return (0, n.jsx)(
                              a.SrA,
                              ((t = (function (e) {
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
                              })(
                                  {
                                      size: p,
                                      color: 'currentColor'
                                  },
                                  l
                              )),
                              (r = r = { className: u.nitroIcon }),
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
                          );
                      }
                  })
                : 'default' === l
                  ? (0, n.jsx)(a.SrA, {
                        size: p,
                        color: 'currentColor',
                        className: u.nitroIcon
                    })
                  : null,
            O,
            m &&
                (0, n.jsxs)(a.X6q, {
                    variant: 'heading-md/semibold',
                    className: u.discountPill,
                    children: [
                        (0, n.jsx)(a.nn4, { children: c.intl.format(c.t.rItDb2, { discountOfferAmount: g }) }),
                        (0, n.jsx)('span', {
                            'aria-hidden': !0,
                            children: c.intl.formatToPlainString(c.t.AYcXGR, { discountOfferAmount: g })
                        })
                    ]
                })
        ]
    });
};
