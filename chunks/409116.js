r.d(t, { F: () => p });
var n = r(255367);
r(73800);
var l = r(120356),
    o = r.n(l),
    i = r(481060),
    a = r(937615),
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
            discount: g = s.f_,
            variant: h = 'heading-md/semibold'
        } = e,
        b = (0, a.qr)(t, r),
        m =
            g !== s.f_ && g.discountPercentage >= 5
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(i.nn4, {
                              children: c.intl.format(c.t.niC6DA, {
                                  price: b,
                                  discountPercentage: g.discountPercentage
                              })
                          }),
                          (0, n.jsx)('span', {
                              'aria-hidden': !0,
                              children: b
                          }),
                          (0, n.jsxs)(i.Text, {
                              variant: h,
                              color: 'text-feedback-positive',
                              className: u.discount,
                              'aria-hidden': !0,
                              children: ['(-', g.discountPercentage, '%)']
                          })
                      ]
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(i.nn4, { children: c.intl.format(c.t['6C36MD'], { price: b }) }),
                          (0, n.jsx)('span', {
                              'aria-hidden': !0,
                              children: b
                          })
                      ]
                  });
    return (0, n.jsxs)(i.Text, {
        variant: h,
        className: o()(u.container, f),
        children: [
            'tooltip' === l
                ? (0, n.jsx)(i.ua7, {
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
                              i.SrA,
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
                  ? (0, n.jsx)(i.SrA, {
                        size: p,
                        color: 'currentColor',
                        className: u.nitroIcon
                    })
                  : null,
            m
        ]
    });
};
