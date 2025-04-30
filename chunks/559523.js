n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(307876),
    a = n(894257),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = new o.Z(() =>
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e('96075').then(n.bind(n, 520615));
            return (t) => (0, r.jsx)(e, c({}, t));
        },
        {
            modalKey: a._,
            onCloseRequest: s.VqG
        }
    )
);
