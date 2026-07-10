"use strict";
n.d(t, { d_: () => h, Ip: () => E, Ar: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(187322),
    o = n(936005),
    d = n(518898),
    c = n(751591);
function u(e, t) {
    let n = (0, o.A)(e);
    return r.forwardRef(function (a, o) {
        let {
                children: u,
                className: _,
                dir: E = "ltr",
                orientation: A = "vertical",
                paddingFix: h = !0,
                fade: I = !1,
                onScroll: f,
                style: p,
                ...T
            } = a,
            m = r.useRef(null),
            g = (0, d.A)({ paddingFix: h, orientation: A, dir: E, className: _, scrollerRef: m, specs: n });
        return (0, i.jsx)("div", {
            ref: (e) => {
                "function" == typeof o ? o(e) : null != o && (o.current = e), (m.current = e);
            },
            className: s()(_, { [e]: !0, [t]: I }),
            style: (0, c.Ay)(p, A),
            dir: E,
            ...T,
            children: (0, i.jsxs)(l.xp, { containerRef: m, children: [u, g] }),
        });
    });
}
var _ = n(45596);
let E = u(_.yL, _.Rv),
    A = u(_.qZ, _.Rv),
    h = u(_.dv, _.Rv);
