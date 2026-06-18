"use strict";
n.d(t, { d_: () => p, Ip: () => h, Ar: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(936005),
    u = n(518898),
    c = n(751591);
function d(e, t) {
    let n = (0, l.A)(e);
    return r.forwardRef(function (s, l) {
        let {
                children: d,
                className: _,
                dir: h = "ltr",
                orientation: f = "vertical",
                paddingFix: p = !0,
                fade: E = !1,
                onScroll: m,
                style: g,
                ...A
            } = s,
            I = r.useRef(null),
            T = (0, u.A)({ paddingFix: p, orientation: f, dir: h, className: _, scrollerRef: I, specs: n });
        return (0, i.jsx)("div", {
            ref: (e) => {
                "function" == typeof l ? l(e) : null != l && (l.current = e), (I.current = e);
            },
            className: a()(_, { [e]: !0, [t]: E }),
            style: (0, c.Ay)(g, f),
            dir: h,
            ...A,
            children: (0, i.jsxs)(o.xp, { containerRef: I, children: [d, T] }),
        });
    });
}
var _ = n(45596);
let h = d(_.yL, _.Rv),
    f = d(_.qZ, _.Rv),
    p = d(_.dv, _.Rv);
