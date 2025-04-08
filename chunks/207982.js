r.d(t, { G: () => a }), r(388685), r(192379);
var n = r(374470),
    l = r(730606),
    i = r(312097),
    o = r(52824);
function a(e, t, r) {
    let a = {},
        c = {};
    for (let [s, u] of e.entries()) {
        let p = (0, o.q)({
            proxyURL: u.proxyUrl,
            url: u.url
        });
        (a[p] = (l) =>
            (function (e, t, r) {
                var l, o;
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    c = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.K)(
                        ((l = (function (e) {
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
                        (o = o =
                            {
                                items: t,
                                startingIndex: r,
                                location: null != c ? c : 'zoomedMediaModalHelper'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        l)
                    );
            })(l, e, s, t, r)),
            (c[p] = () => (0, l.WG)(u, e.length > 1));
    }
    return {
        srcToOnClickOverride: a,
        srcToHandlePreloadImage: c
    };
}
