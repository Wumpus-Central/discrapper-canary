n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(723765),
    s = n(716371),
    o = n(652215);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = new a.A(() =>
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("88077").then(n.bind(n, 187964));
            return (t) => (0, r.jsx)(e, c({}, t));
        },
        {
            modalKey: s.r,
            onCloseRequest: o.FXj,
        },
    ),
);
