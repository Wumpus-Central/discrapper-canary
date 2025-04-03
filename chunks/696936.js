s.d(t, {
    W: () => a,
    Z: () => c
});
var r = s(200651);
s(192379);
var n = s(120356),
    i = s.n(n),
    o = s(481060),
    l = s(956542);
let a = {
    RED: l.redMessageBlock,
    YELLOW: l.yellowMessageBlock,
    BROWN: l.brownMessageBlock
};
function c(e) {
    let { color: t, icon: s, children: n, className: a } = e;
    return (0, r.jsx)(o.kzN, {
        icon: (e) =>
            (0, r.jsx)(
                s,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(s);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(s).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = s[t]),
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
        children: n
    });
}
