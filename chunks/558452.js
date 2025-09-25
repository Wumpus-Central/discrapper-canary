n.d(t, { Y: () => l }), n(388685);
var r = n(647438),
    i = n(6383),
    a = n(793030);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        o = arguments.length > 3 ? arguments[3] : void 0,
        l = r.useContext(a.Sfi).reducedMotion.enabled,
        c = t;
    "animate-always" !== n && ("respect-motion-settings" !== n || l) && (c = s({}, t, a.FWm));
    let [u, d, f] = (0, i.useTransition)(e, c, o);
    return 4 == arguments.length ? [u, d, f] : u;
}
