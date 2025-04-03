r.d(t, { Z: () => i });
var n = r(200651);
r(192379);
var a = r(481060),
    o = r(141675);
function i(e) {
    let { onClick: t, Icon: r, 'aria-label': i } = e,
        l = (0, a.dQu)(a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        s = (0, n.jsx)(r, {
            color: l.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == t
        ? (0, n.jsx)('div', {
              className: o.container,
              'aria-label': i,
              children: s
          })
        : (0, n.jsx)(a.ua7, {
              text: i,
              children: (e) => {
                  var r, i;
                  return (0, n.jsx)(
                      a.P3F,
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
                      })({ className: o.container }, e)),
                      (i = i =
                          {
                              onClick: t,
                              children: s
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
          });
}
