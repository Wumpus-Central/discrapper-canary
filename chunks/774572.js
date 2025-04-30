n.d(t, { D: () => a });
var i = n(200651);
n(192379);
var r = n(734530),
    s = n(622999),
    l = n(246652);
let a = (e) => {
    let { errorLabel: t, children: n, elementOptions: a } = e,
        o = Date.now();
    return (0, i.jsx)(
        l.k,
        {
            label: t,
            children: (0, i.jsx)(r.Elements, {
                stripe: (0, s.d2)(),
                options: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })(
                    {
                        mode: 'setup',
                        currency: 'usd',
                        setup_future_usage: 'off_session'
                    },
                    a
                ),
                children: n
            })
        },
        o
    );
};
