n.d(t, {
    z: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(92674),
    a = n(844222),
    o = n(384494);

function s(e, t, n) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}

function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "respect-motion-settings",
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = r.useContext(a.C).reducedMotion.enabled,
        c = e;
    "animate-always" !== t &&
        ("respect-motion-settings" !== t || s) &&
        (c = "function" == typeof e ? () => l({}, e(), o.W) : l({}, e, o.W));
    let u = "function" == typeof c,
        [d, f, p] = (0, i.useSpring)(c, n);
    return u || 3 == arguments.length ? [d, f, p] : d;
}
