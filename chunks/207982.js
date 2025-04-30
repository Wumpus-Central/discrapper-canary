r.d(t, { G: () => a }), r(388685), r(192379);
var n = r(374470),
    o = r(730606),
    i = r(312097),
    s = r(52824);
function a(e, t, r) {
    let a = {},
        l = {};
    for (let [c, d] of e.entries()) {
        let u = (0, s.q)({
            proxyURL: d.proxyUrl,
            url: d.url
        });
        (a[u] = (o) =>
            (function (e, t, r) {
                var o, s;
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    l = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.K)(
                        ((o = (function (e) {
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
                        })({}, a)),
                        (s = s =
                            {
                                items: t,
                                startingIndex: r,
                                location: null != l ? l : 'zoomedMediaModalHelper'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        o)
                    );
            })(o, e, c, t, r)),
            (l[u] = () => (0, o.WG)(d, e.length > 1));
    }
    return {
        srcToOnClickOverride: a,
        srcToHandlePreloadImage: l
    };
}
