n.d(t, {
    W: () => u,
    Z: () => d,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(762641);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {
    RED: s.redMessageBlock,
    YELLOW: s.yellowMessageBlock,
    BROWN: s.brownMessageBlock,
};
function d(e) {
    let { color: t, icon: n, children: i, className: l } = e;
    return (0, r.jsx)(o.kzN, {
        icon: (e) =>
            (0, r.jsx)(
                n,
                c(
                    {
                        height: 20,
                        width: 20,
                    },
                    e,
                ),
            ),
        iconClassName: s.messageBlockIcon,
        className: a()(t, l),
        children: i,
    });
}
