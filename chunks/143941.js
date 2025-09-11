n.d(t, { s: () => m });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(727637),
    c = n(607550),
    u = n(388032),
    d = n(890088);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = (e) => {
    let { skuId: t, className: n } = e,
        a = (0, c.ny)(t),
        f = i.useRef(null),
        p = a ? u.intl.string(u.t.yr9TTU) : u.intl.string(u.t["8DkMER"]),
        m = (0, l.Z)(f),
        g = a ? s.h_8 : s.Pzh,
        E = a || m ? d.wishlistedOrHoveredIconColor : d.normalIconColor,
        b = i.useCallback(
            (e) => {
                e.stopPropagation(), a ? (0, c.yj)(t) : (0, c.iI)(t);
            },
            [a, t],
        );
    return (0, r.jsx)(s.ua7, {
        text: p,
        children: (e) =>
            (0, r.jsx)(
                s.P3F,
                h(_({}, e), {
                    className: o()(n, d.wishlistButton),
                    innerRef: f,
                    onClick: b,
                    "aria-label": p,
                    children: (0, r.jsx)(g, {
                        colorClass: E,
                        size: "custom",
                        height: 20,
                        width: 20,
                    }),
                }),
            ),
    });
};
