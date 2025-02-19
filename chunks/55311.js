r.d(t, { Z: () => c });
var n = r(200651);
r(192379);
var i = r(481060),
    o = r(846027),
    l = r(468026),
    a = r(388032);
function c(e, t) {
    if (e) {
        (0, i.h7j)((e) => {
            var t, r;
            return (0, n.jsx)(
                l.default,
                ((t = (function (e) {
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
                })({}, e)),
                (r = r =
                    {
                        title: a.NW.string(a.t.QZ7WSU),
                        body: a.NW.string(a.t.Tl9JpK)
                    }),
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
        });
        return;
    }
    o.Z.toggleSelfDeaf({ location: t });
}
