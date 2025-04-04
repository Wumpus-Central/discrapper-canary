n.d(t, { b: () => c }), n(47120);
var r = n(192379),
    i = n(642128),
    o = n(481060),
    a = n(717495);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'respect-motion-settings',
        s = arguments.length > 3 ? arguments[3] : void 0,
        c = r.useContext(o.Sfi).reducedMotion.enabled,
        u = t;
    'animate-always' !== n && ('respect-motion-settings' !== n || c) && (u = 'function' == typeof t ? (e, n) => l({}, t(e, n), a.F) : t.map((e) => l({}, e, a.F)));
    let d = 'function' == typeof u,
        [f, _, p] = (0, i.useSprings)(e, u, s);
    return d || 4 == arguments.length ? [f, _, p] : f;
}
