n.d(t, { U: () => c });
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    i = n(388032),
    s = n(44615);
let c = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(o.ua7, {
              tooltipClassName: s.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: i.NW.string(i.t['2MCxfX']),
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
                      })({ className: a()(s.partialOwnStateContainer, t) }, e)),
                      (l = l =
                          {
                              children: [
                                  (0, r.jsx)('span', {
                                      className: s.iconWrapper,
                                      children: (0, r.jsx)(o.d3s, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: s.infoIcon
                                      })
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      children: i.NW.string(i.t['5b+JhY'])
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
        : (0, r.jsx)(o.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: i.NW.string(i.t['/bUsx8'])
          });
};
