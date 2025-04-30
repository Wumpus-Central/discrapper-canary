n.d(t, { default: () => l });
var r = n(200651);
n(192379);
var a = n(481060),
    o = n(239091),
    c = n(231338);
let l = (e) =>
    (0, r.jsx)(a.v2r, {
        onClose: o.Zy,
        navId: 'staff-only-entry-debug',
        'aria-label': 'staff only content inventory debug',
        onSelect: c.dG,
        children: (0, r.jsx)(a.sNh, {
            id: 'test',
            label: 'Debug (Staff-Only)',
            action: () => {
                (0, a.ZDy)(async () => {
                    let { default: t } = await n.e('43057').then(n.bind(n, 968650));
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
                            })({}, n, e)
                        );
                });
            },
            icon: a.R0
        })
    });
