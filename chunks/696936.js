n.d(t, {
    W: () => a,
    Z: () => u,
});
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    o = n(762641);
let a = {
    RED: o.redMessageBlock,
    YELLOW: o.yellowMessageBlock,
    BROWN: o.brownMessageBlock,
};
function u(e) {
    let { color: t, icon: n, children: r, className: a } = e;
    return (0, i.jsx)(l.kzN, {
        icon: (e) =>
            (0, i.jsx)(
                n,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })(
                    {
                        height: 20,
                        width: 20,
                    },
                    e,
                ),
            ),
        iconClassName: o.messageBlockIcon,
        className: s()(t, a),
        children: r,
    });
}
