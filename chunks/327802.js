n.d(t, {
    X: () => c,
    Z: () => d,
}),
    n(415506);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(372129),
    a = n(205822),
    s = n(731994),
    o = n(388032);
let c = (e) => {
        let { className: t, onSuccess: c, onError: d } = e,
            u = async (e) => {
                try {
                    let { dataURI: t } = await (0, l.po)(e);
                    c({
                        file: e,
                        data: t,
                    });
                } catch (e) {
                    d(Error("Failed to read file", { cause: e }));
                }
            };
        return (0, r.jsx)(a.Z, {
            className: t,
            title: o.intl.string(o.t["DU0dy/"]),
            description: o.intl.string(o.t.bpycfA),
            icons: s.pA,
            onDrop: (e) => {
                let t = null == e ? void 0 : e[0];
                null != t &&
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e("16169").then(n.bind(n, 935333));
                        return (n) =>
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
                                })({ processFiles: () => u(t) }, n),
                            );
                    });
            },
        });
    },
    d = function (e) {
        let { className: t, style: n, onDrop: i } = e;
        return (0, r.jsx)(a.Z, {
            className: t,
            style: n,
            title: o.intl.string(o.t["DU0dy/"]),
            description: o.intl.string(o.t.bpycfA),
            icons: s.pA,
            onDrop: i,
        });
    };
