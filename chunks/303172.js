n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
async function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    await (0, i.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('85342'), n.e('50855')]).then(n.bind(n, 193049));
        return (n) =>
            (0, r.jsx)(
                i,
                a(
                    {
                        source: e,
                        oneClickFlow: t
                    },
                    n
                )
            );
    });
}
