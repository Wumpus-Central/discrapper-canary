r.d(t, { Z: () => s }), r(704826), r(35282);
var n = r(192379),
    l = r(442837),
    o = r(131951),
    i = r(65154),
    u = r(388032);
function a(e) {
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
}
let c = /^Default/;
function s() {
    let e = (0, l.e7)([o.Z], () => o.Z.getInputDevices());
    return n.useMemo(() => {
        var t, r;
        let n = a({}, e),
            l = n[i.w5];
        return null == l
            ? n
            : ((n[i.w5] =
                  ((t = a({}, l)),
                  (r = r = { name: l.disabled ? u.intl.string(u.t['/QIjDA']) : l.name.replace(c, u.intl.string(u.t.bBvAEB)) }),
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
                  t)),
              n);
    }, [e]);
}
