n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(603592),
    o = n(388032);
let a = "DOWNLOAD_APPS";
function s() {
    let e = (0, i.s9z)((e) => (0, i.DEQ)(e, a));
    return (0, r.jsx)(l.Z, {
        id: "app-download-button",
        onClick: () => {
            (0, i.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({ source: "Guilds" }, t),
                        );
                },
                { modalKey: a },
            );
        },
        selected: e,
        tooltip: o.intl.string(o.t.Z7jwrJ),
        icon: i._8t,
    });
}
