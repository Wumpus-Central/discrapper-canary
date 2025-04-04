n.d(t, { q: () => c }), n(47120);
var r = n(192379),
    i = n(642128),
    o = n(186325),
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
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'respect-motion-settings',
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = r.useContext(o.S).reducedMotion.enabled,
        c = e;
    'animate-always' !== t && ('respect-motion-settings' !== t || s) && (c = 'function' == typeof e ? () => l({}, e(), a.F) : l({}, e, a.F));
    let u = 'function' == typeof c,
        [d, f, _] = (0, i.useSpring)(c, n);
    return u || 3 == arguments.length ? [d, f, _] : d;
}
