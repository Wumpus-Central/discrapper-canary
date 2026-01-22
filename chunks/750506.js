n.d(t, {
    Ay: () => g,
    C8: () => p,
    Yf: () => _,
    nE: () => m,
    uY: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927);

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
let { Layer: c, LayerContainer: u, LayerProvider: d, layerContext: f } = (0, a.AyR)("App"),
    p = u,
    _ = d,
    h = f,
    m = i.forwardRef(function (e, t) {
        return (0, r.jsx)(c, {
            children: (0, r.jsx)(
                s.QCO,
                l(
                    {
                        ref: t,
                    },
                    e,
                ),
            ),
        });
    }),
    g = c;
