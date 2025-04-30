r.r(t), r.d(t, { default: () => o });
var n = r(200651);
r(192379);
var c = r(952265);
function o(e) {
    (0, c.ZD)(async () => {
        let { default: t } = await r.e('2045').then(r.bind(r, 754233));
        return (r) => {
            var c, o;
            return (0, n.jsx)(
                t,
                ((c = (function (e) {
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
                })({}, r)),
                (o = o = { guildId: e }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                c)
            );
        };
    });
}
