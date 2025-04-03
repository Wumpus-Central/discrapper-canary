n.d(t, { Z: () => u }), n(757143), n(301563);
var r = n(192379),
    l = n(442837),
    i = n(131951),
    o = n(65154),
    a = n(388032);
function s(e) {
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
}
let c = /^Default/;
function u() {
    let e = (0, l.e7)([i.Z], () => i.Z.getOutputDevices());
    return r.useMemo(() => {
        var t, n;
        let r = s({}, e),
            l = r[o.w5];
        return null == l
            ? r
            : ((r[o.w5] =
                  ((t = s({}, l)),
                  (n = n = { name: l.disabled ? a.NW.string(a.t.xlUg0t) : l.name.replace(c, a.NW.string(a.t.bBvAEB)) }),
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
                  t)),
              r);
    }, [e]);
}
