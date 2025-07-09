n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(826298),
    c = n(881046);
let u = i.memo(function (e) {
    var t;
    let { className: n, channel: i, section: l } = e,
        u = null != l ? (0, s.ky)(l) : null,
        d =
            null != u
                ? (0, r.jsx)(o.ua7, {
                      text: null != (t = null == l ? void 0 : l.name) ? t : '',
                      position: 'top',
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              u,
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
                              })({}, e)),
                              (n = n =
                                  {
                                      channel: i,
                                      section: l,
                                      width: 24,
                                      height: 24
                                  }),
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
                : null;
    return (0, r.jsx)('div', {
        className: a()(n, c.wrapper),
        children: (0, r.jsx)('div', {
            className: c.icon,
            children: d
        })
    });
});
