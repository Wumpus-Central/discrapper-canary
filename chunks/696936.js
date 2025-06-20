n.d(t, {
    W: () => l,
    Z: () => c
});
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(956542);
let l = {
    RED: a.redMessageBlock,
    YELLOW: a.yellowMessageBlock,
    BROWN: a.brownMessageBlock
};
function c(e) {
    let { color: t, icon: n, children: i, className: l } = e;
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
        iconClassName: a.messageBlockIcon,
        className: s()(t, l),
        children: i
    });
}
