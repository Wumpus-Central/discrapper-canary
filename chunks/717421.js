n.d(t, {
    z: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(108531),
    a = n(844222),
    s = n(384494);

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

function l(e) {
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

function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "respect-motion-settings",
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = r.useContext(a.C).reducedMotion.enabled,
        c = e;
    "animate-always" !== t &&
        ("respect-motion-settings" !== t || o) &&
        (c = "function" == typeof e ? () => l({}, e(), s.W) : l({}, e, s.W));
    let u = "function" == typeof c,
        [d, f, p] = (0, i.useSpring)(c, n);
    return u || 3 == arguments.length ? [d, f, p] : d;
}
