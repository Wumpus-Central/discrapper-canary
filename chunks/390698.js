n.d(t, { U: () => c });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(388032),
    s = n(477315);
let c = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(a.ua7, {
              tooltipClassName: s.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: o.intl.string(o.t.y1VWkZ),
              children: (e) => {
                  var n, l;
                  return (0, r.jsxs)(
                      'div',
                      ((n = (function (e) {
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
                      })({ className: i()(s.partialOwnStateContainer, t) }, e)),
                      (l = l =
                          {
                              children: [
                                  (0, r.jsx)('span', {
                                      className: s.iconWrapper,
                                      children: (0, r.jsx)(a.d3s, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: s.infoIcon
                                      })
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-md/semibold',
                                      children: o.intl.string(o.t.BEjTio)
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(l)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                            }),
                      n)
                  );
              }
          })
        : (0, r.jsx)(a.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: o.intl.string(o.t['6cfuDg'])
          });
};
