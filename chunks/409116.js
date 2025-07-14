n.d(t, { F: () => p });
var r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    i = n(481060),
    a = n(937615),
    s = n(884697),
    c = n(388032),
    u = n(864356);
function d() {
    return (d =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
let p = (e) => {
    let {
            price: { amount: t, currency: n },
            nitroIconType: l,
            nitroIconSize: p = 'md',
            className: g,
            discount: f = s.f_,
            variant: h = 'heading-md/semibold'
        } = e,
        b = (0, a.qr)(t, n),
        m =
            f !== s.f_ && f.discountPercentage >= 5
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(i.nn4, {
                              children: c.intl.format(c.t.niC6DA, {
                                  price: b,
                                  discountPercentage: f.discountPercentage
                              })
                          }),
                          (0, r.jsx)('span', {
                              'aria-hidden': !0,
                              children: b
                          }),
                          (0, r.jsxs)(i.Text, {
                              variant: h,
                              color: 'text-feedback-positive',
                              className: u.discount,
                              'aria-hidden': !0,
                              children: ['(-', f.discountPercentage, '%)']
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(i.nn4, { children: c.intl.format(c.t['6C36MD'], { price: b }) }),
                          (0, r.jsx)('span', {
                              'aria-hidden': !0,
                              children: b
                          })
                      ]
                  });
    return (0, r.jsxs)(i.Text, {
        variant: h,
        className: o()(u.container, g),
        children: [
            'tooltip' === l
                ? (0, r.jsx)(i.ua7, {
                      text: c.intl.string(c.t.MPFyJy),
                      'aria-label': c.intl.string(c.t.X3Ekj4),
                      children: (e) => {
                          var t,
                              n,
                              l = d(
                                  {},
                                  (function (e) {
                                      if (null == e) throw TypeError('Cannot destructure ' + e);
                                      return e;
                                  })(e)
                              );
                          return (0, r.jsx)(
                              i.SrA,
                              ((t = (function (e) {
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
                              })(
                                  {
                                      size: p,
                                      color: 'currentColor'
                                  },
                                  l
                              )),
                              (n = n = { className: u.nitroIcon }),
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
                          );
                      }
                  })
                : 'default' === l
                  ? (0, r.jsx)(i.SrA, {
                        size: p,
                        color: 'currentColor',
                        className: u.nitroIcon
                    })
                  : null,
            m
        ]
    });
};
