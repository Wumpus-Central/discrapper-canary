n.d(t, {
    W: () => a,
    Z: () => c
});
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    l = n(956542);
let a = {
    RED: l.redMessageBlock,
    YELLOW: l.yellowMessageBlock,
    BROWN: l.brownMessageBlock
};
function c(e) {
    let { color: t, icon: n, children: s, className: a } = e;
    return (0, r.jsx)(o.kzN, {
        icon: (e) =>
            (0, r.jsx)(
                n,
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
                })(
                    {
                        height: 20,
                        width: 20
                    },
                    e
                )
            ),
        iconClassName: l.messageBlockIcon,
        className: i()(t, a),
        children: s
    });
}
