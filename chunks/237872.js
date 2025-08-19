n.d(t, { u: () => d });
var r = n(951288),
    i = n(647438),
    a = n(146187),
    o = n(681803),
    s = n(388032),
    l = n(254477);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    let { onClick: t, "aria-label": n = s.intl.string(s.t.cpT0Cg), variant: c } = e,
        { firstFocusableItemProps: d } = i.useContext(o.M);
    return (0, r.jsx)("div", {
        className: l.closeButton,
        children: (0, r.jsx)(
            a.P,
            u(
                {
                    size: "sm",
                    "aria-label": n,
                    onClick: t,
                    variant: c,
                },
                d,
            ),
        ),
    });
}
