n.d(t, { G: () => o });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(844477),
    a = n(946598);
function o(e) {
    let { leading: t, actions: n = [], actionsFullWidth: r = !1 } = e;
    if (null != t || null != n)
        return (0, i.jsxs)('footer', {
            className: s()(a.actionBar, a.section),
            children: [
                null != t &&
                    (0, i.jsx)('div', {
                        className: a.actionBarLeading,
                        children: t
                    }),
                (0, i.jsx)('div', {
                    className: s()(a.actionBarTrailing, { [a.actionBarTrailingFullWidth]: r }),
                    children:
                        null == n
                            ? void 0
                            : n.map((e, t) => {
                                  var n, s;
                                  return (0, i.jsx)(
                                      l.z,
                                      ((n = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  i = Object.keys(n);
                                              'function' == typeof Object.getOwnPropertySymbols &&
                                                  (i = i.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      })
                                                  )),
                                                  i.forEach(function (t) {
                                                      var i;
                                                      (i = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: i,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                })
                                                              : (e[t] = i);
                                                  });
                                          }
                                          return e;
                                      })({}, e)),
                                      (s = s = { fullWidth: r }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, i);
                                                }
                                                return n;
                                            })(Object(s)).forEach(function (e) {
                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                                            }),
                                      n),
                                      'modal-button-'.concat(t)
                                  );
                              })
                })
            ]
        });
}
