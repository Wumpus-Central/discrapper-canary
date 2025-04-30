n.r(t), n.d(t, { default: () => c });
var r = n(200651);
n(192379);
var o = n(481060);
let c = {
    open: function (e) {
        (0, o.ZDy)(async () => {
            let { default: t } = await n.e('57424').then(n.bind(n, 498298));
            return (n) =>
                (0, r.jsx)(
                    t,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ onConfirm: e }, n)
                );
        });
    }
};
