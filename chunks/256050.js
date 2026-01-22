n.d(t, {
    default: () => a,
});
var r = n(627968);
n(64700);
var o = n(397927);
let a = {
    open: function (e) {
        (0, o.mMO)(async () => {
            let { default: t } = await n.e("83152").then(n.bind(n, 468403));
            return (n) =>
                (0, r.jsx)(
                    t,
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
                    })(
                        {
                            onConfirm: e,
                        },
                        n,
                    ),
                );
        });
    },
};
