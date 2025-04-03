n.d(t, { D: () => l });
var r = n(200651);
n(192379);
var i = n(734530),
    s = n(622999),
    a = n(246652);
let l = (e) => {
    let { errorLabel: t, children: n, elementOptions: l } = e,
        o = Date.now();
    return (0, r.jsx)(
        a.k,
        {
            label: t,
            children: (0, r.jsx)(i.Elements, {
                stripe: (0, s.d2)(),
                options: (function (e) {
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
                })(
                    {
                        mode: 'setup',
                        currency: 'usd',
                        setup_future_usage: 'off_session'
                    },
                    l
                ),
                children: n
            })
        },
        o
    );
};
