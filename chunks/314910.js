n.d(t, {
    Un: () => p,
    W5: () => h,
    ZP: () => g,
    nz: () => m,
    yP: () => _,
});
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060);
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
let { Layer: c, LayerContainer: u, LayerProvider: d, layerContext: f } = (0, a.Xvx)("App"),
    p = u,
    _ = d,
    m = f,
    h = i.forwardRef(function (e, t) {
        return (0, r.jsx)(c, { children: (0, r.jsx)(o.jRF, l({ ref: t }, e)) });
    }),
    g = c;
