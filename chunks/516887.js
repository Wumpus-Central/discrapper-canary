n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(826298),
    c = n(540059),
    u = n(881046);
let d = i.memo(function (e) {
    var t;
    let { className: n, channel: i, section: l } = e,
        d = (0, c.R6)('ChannelApplicationIcon'),
        p = null != l ? (0, s.ky)(l) : null,
        h =
            null != p
                ? (0, r.jsx)(a.ua7, {
                      text: null != (t = null == l ? void 0 : l.name) ? t : '',
                      position: 'top',
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              p,
                              ((t = (function (e) {
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
    return d
        ? h
        : (0, r.jsx)('div', {
              className: o()(n, u.wrapper),
              children: (0, r.jsx)('div', {
                  className: u.icon,
                  children: h
              })
          });
});
