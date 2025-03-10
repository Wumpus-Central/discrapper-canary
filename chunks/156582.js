n.d(t, { E: () => i });
var r = n(200651);
n(192379);
var l = n(481060);
let i = (e) => {
    let { analyticsLocation: t } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) => {
            var l, i;
            return (0, r.jsx)(
                e,
                ((l = (function (e) {
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
                })({}, n)),
                (i = i = { analyticsSource: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l)
            );
        };
    });
};
