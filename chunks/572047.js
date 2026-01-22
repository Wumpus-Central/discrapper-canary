n.d(t, { w: () => _ });
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(990078),
    s = n(732955),
    o = n(397927),
    l = n(457417),
    c = n(520650),
    u = n(985018);
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
                let { CustomThemesShareModalWrapper: e } = await Promise.all([n.e("96758"), n.e("83006")]).then(
                    n.bind(n, 277978),
                );
                return (t) => (0, r.jsx)(e, f({}, t));
            },
            { modalKey: l.dJ },
        );
    },
    _ = () =>
        (0, r.jsx)(a.m, {
            text: u.intl.string(u.t.RDE0Sc),
            children: (0, r.jsx)(s.K0, {
                "aria-label": u.intl.string(c.default.zgFs8C),
                icon: o.liv,
                variant: "icon-only",
                onClick: () => {
                    p();
                },
            }),
        });
