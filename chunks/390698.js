r.d(t, { U: () => c });
var n = r(255367);
r(73800);
var i = r(120356),
    o = r.n(i),
    l = r(481060),
    a = r(388032),
    s = r(44615);
let c = (e) => {
    let { className: t, isPartiallyPurchased: r } = e;
    return r
        ? (0, n.jsx)(l.ua7, {
              tooltipClassName: s.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: a.intl.string(a.t.y1VWkZ),
              children: (e) => {
                  var r, i;
                  return (0, n.jsxs)(
                      'div',
                      ((r = (function (e) {
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
                      })({ className: o()(s.partialOwnStateContainer, t) }, e)),
                      (i = i =
                          {
                              children: [
                                  (0, n.jsx)('span', {
                                      className: s.iconWrapper,
                                      children: (0, n.jsx)(l.d3s, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: s.infoIcon
                                      })
                                  }),
                                  (0, n.jsx)(l.Text, {
                                      variant: 'text-md/semibold',
                                      children: a.intl.string(a.t.BEjTio)
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      r)
                  );
              }
          })
        : (0, n.jsx)(l.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: a.intl.string(a.t['6cfuDg'])
          });
};
