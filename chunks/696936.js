n.d(t, {
    W: () => a,
    Z: () => l
});
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    o = n(481060),
    c = n(621660);
let a = {
    RED: c.redMessageBlock,
    YELLOW: c.yellowMessageBlock,
    BROWN: c.brownMessageBlock
};
function l(e) {
    let { color: t, icon: n, children: r, className: a } = e;
    return (0, s.jsx)(o.kzN, {
        icon: (e) =>
            (0, s.jsx)(
                n,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            s = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (s = s.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            s.forEach(function (t) {
                                var s;
                                (s = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: s,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = s);
                            });
                    }
                    return e;
                })(
                    {
                        height: 20,
                        width: 20
                    },
                    e
                )
            ),
        iconClassName: c.messageBlockIcon,
        className: i()(t, a),
        children: r
    });
}
