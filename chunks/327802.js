r.d(e, {
    X: () => c,
    Z: () => u
}),
    r(415506);
var n = r(255367);
r(73800);
var i = r(481060),
    l = r(372129),
    o = r(205822),
    a = r(731994),
    s = r(388032);
let c = (t) => {
        let { className: e, onSuccess: c, onError: u } = t,
            f = async (t) => {
                try {
                    let { dataURI: e } = await (0, l.po)(t);
                    c({
                        file: t,
                        data: e
                    });
                } catch (t) {
                    u(Error('Failed to read file', { cause: t }));
                }
            };
        return (0, n.jsx)(o.Z, {
            className: e,
            title: s.intl.string(s.t.DU0dy8),
            description: s.intl.string(s.t.bpycfH),
            icons: a.pA,
            onDrop: (t) => {
                let e = null == t ? void 0 : t[0];
                null != e &&
                    (0, i.ZDy)(async () => {
                        let { default: t } = await r.e('16169').then(r.bind(r, 935333));
                        return (r) =>
                            (0, n.jsx)(
                                t,
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = null != arguments[e] ? arguments[e] : {},
                                            n = Object.keys(r);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(r).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                                })
                                            )),
                                            n.forEach(function (e) {
                                                var n;
                                                (n = r[e]),
                                                    e in t
                                                        ? Object.defineProperty(t, e, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (t[e] = n);
                                            });
                                    }
                                    return t;
                                })({ processFiles: () => f(e) }, r)
                            );
                    });
            }
        });
    },
    u = function (t) {
        let { className: e, style: r, onDrop: i } = t;
        return (0, n.jsx)(o.Z, {
            className: e,
            style: r,
            title: s.intl.string(s.t.DU0dy8),
            description: s.intl.string(s.t.bpycfH),
            icons: a.pA,
            onDrop: i
        });
    };
