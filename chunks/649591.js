n.d(t, { j: () => s });
var r = n(200651);
n(192379);
var i = n(481060);
function a(e, t, n) {
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
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e) {
    let { application: t, onConfirm: a, onCancel: s } = e;
    return (
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('18367').then(n.bind(n, 557751));
            return (n) =>
                (0, r.jsx)(
                    e,
                    o(
                        {
                            application: t,
                            onConfirm: a,
                            onCancel: s
                        },
                        n
                    )
                );
        }),
        Promise.resolve()
    );
}
