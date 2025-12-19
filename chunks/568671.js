n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(626135),
    o = n(292352),
    s = n(981631),
    l = n(517319),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f() {
    let e = c.intl.string(l.default["8SLtqb"]),
        t = () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("61283"), n.e("48168")]).then(n.bind(n, 978305));
                return (t) => (0, r.jsx)(e, d({}, t));
            }),
                a.default.track(s.rMx.FAMILY_CENTER_ACTION, { action: o.YC.ShowQRCodeModal });
        };
    return (0, r.jsx)(i.Button, {
        icon: i.IkH,
        variant: "primary",
        text: e,
        onClick: t,
    });
}
