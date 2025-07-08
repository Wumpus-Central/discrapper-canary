r.d(t, { F: () => p });
var n = r(255367);
r(73800);
var i = r(120356),
    l = r.n(i),
    o = r(481060),
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
            nitroIconType: i,
            nitroIconSize: p = 'md',
            className: v,
            discount: b = s.f_,
            variant: f = 'heading-md/semibold'
        } = e,
        m = (0, a.qr)(t, r),
        h =
            b !== s.f_ && b.discountPercentage >= 5
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          m,
                          (0, n.jsx)(o.Text, {
                              variant: f,
                              color: 'text-feedback-positive',
                              className: u.discount,
                              children: ' (-'.concat(b.discountPercentage, '%)')
                          })
                      ]
                  })
                : (0, n.jsx)(o.Text, {
                      variant: f,
                      children: m
                  });
    return (0, n.jsxs)(o.X6q, {
        variant: f,
        className: l()(u.container, v),
        children: [
            'tooltip' === i
                ? (0, n.jsx)(o.ua7, {
                      text: c.intl.string(c.t.MPFyJy),
                      'aria-label': c.intl.string(c.t.X3Ekj4),
                      children: (e) => {
                          var t,
                              r,
                              i = d(
                                  {},
                                  (function (e) {
                                      if (null == e) throw TypeError('Cannot destructure ' + e);
                                      return e;
                                  })(e)
                              );
                          return (0, n.jsx)(
                              o.SrA,
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
                                  i
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
                : 'default' === i
                  ? (0, n.jsx)(o.SrA, {
                        size: p,
                        color: 'currentColor',
                        className: u.nitroIcon
                    })
                  : null,
            h
        ]
    });
};
