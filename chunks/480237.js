n.d(t, {
    A: () => i,
});
var a = n(627968);
n(64700);
var l = n(397927);

function i(e) {
    (0, l.mMO)(
        async () => {
            let { default: e } = await n.e("25810").then(n.bind(n, 114857));
            return (t) =>
                (0, a.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({}, t),
                );
        },
        {
            onCloseCallback: e,
        },
    );
}
