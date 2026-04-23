"use strict";
n.d(t, { d_: () => m, Ip: () => E, Ar: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(936005),
    d = n(518898),
    _ = n(751591);
function u(e, t) {
    let n = (0, l.A)(e);
    return r.forwardRef(function (s, l) {
        let {
                children: u,
                className: c,
                dir: E = "ltr",
                orientation: h = "vertical",
                paddingFix: m = !0,
                fade: f = !1,
                onScroll: g,
                style: p,
                ...A
            } = s,
            I = r.useRef(null),
            T = (0, d.A)({ paddingFix: m, orientation: h, dir: E, className: c, scrollerRef: I, specs: n });
        return (0, i.jsx)("div", {
            ref: (e) => {
                "function" == typeof l ? l(e) : null != l && (l.current = e), (I.current = e);
            },
            className: a()(c, { [e]: !0, [t]: f }),
            style: (0, _.Ay)(p, h),
            dir: E,
            ...A,
            children: (0, i.jsxs)(o.xp, { containerRef: I, children: [u, T] }),
        });
    });
}
var c = n(45596);
let E = u(c.yL, c.Rv),
    h = u(c.qZ, c.Rv),
    m = u(c.dv, c.Rv);
