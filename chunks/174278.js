n.d(t, { q: () => _ });
var r = n(54381);
n(473749);
var i = n(952265),
    a = n(28664),
    o = n(159691),
    s = n(481060),
    l = n(135102),
    c = n(831989),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = () => {
        (0, i.openModalLazy)(
            async () => {
                let { CustomThemesShareModalWrapper: e } = await Promise.all([n.e("36653"), n.e("58973")]).then(
                    n.bind(n, 433359),
                );
                return (t) => (0, r.jsx)(e, f({}, t));
            },
            { modalKey: l.tj },
        );
    },
    _ = () =>
        (0, r.jsx)(a.u, {
            text: u.intl.string(u.t.RDE0Sc),
            children: (0, r.jsx)(o.hU, {
                "aria-label": u.intl.string(c.default.zgFs8C),
                icon: s.aAc,
                variant: "icon-only",
                onClick: () => {
                    p();
                },
            }),
        });
