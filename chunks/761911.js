n.d(t, { D: () => o });
var a = n(951288);
n(647438);
var r = n(289008),
    i = n(622999),
    l = n(955926);
let o = (e) => {
    let { errorLabel: t, children: n, elementOptions: o } = e,
        s = Date.now();
    return (0, a.jsx)(
        l.k,
        {
            label: t,
            children: (0, a.jsx)(r.Elements, {
                stripe: (0, i.d2)(),
                options: (function (e) {
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
                })(
                    {
                        mode: "setup",
                        currency: "usd",
                        setup_future_usage: "off_session",
                    },
                    o,
                ),
                children: n,
            }),
        },
        s,
    );
};
