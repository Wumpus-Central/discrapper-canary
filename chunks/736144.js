n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(451478),
    s = n(576125),
    l = n(465858),
    c = n(112843);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        r = (0, o.e7)([a.Z], () => a.Z.isFocused()),
        s = (0, c.Z)(),
        u = (0, l.Z)(t);
    return (
        i.useEffect(() => {
            r && n && null != u && s.fire(u.x, u.y);
        }, [s, r, u, n]),
        null
    );
}
function _(e) {
    return (0, r.jsx)(s.Z, {
        confettiLocation: e.confettiLocation,
        children: (0, r.jsx)(f, d({}, e))
    });
}
