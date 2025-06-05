n.d(t, { Z: () => u }), n(704826), n(35282);
var r = n(73800),
    i = n(442837),
    l = n(131951),
    a = n(65154),
    o = n(388032);
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
    let e = (0, i.e7)([l.Z], () => l.Z.getInputDevices());
    return r.useMemo(() => {
        var t, n;
        let r = s({}, e),
            i = r[a.w5];
        return null == i
            ? r
            : ((r[a.w5] =
                  ((t = s({}, i)),
                  (n = n = { name: i.disabled ? o.intl.string(o.t['/QIjDA']) : i.name.replace(c, o.intl.string(o.t.bBvAEB)) }),
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
