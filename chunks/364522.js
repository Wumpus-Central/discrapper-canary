"use strict";
n.d(t, { d_: () => h, Ip: () => E, Ar: () => A });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(330573),
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
                disableFocusRingScope: f = !1,
                onScroll: p,
                style: T,
                ...m
            } = a,
            g = r.useRef(null),
            S = (0, d.A)({ paddingFix: h, orientation: A, dir: E, className: _, scrollerRef: g, specs: n });
        return (0, i.jsx)("div", {
            ref: (e) => {
                "function" == typeof o ? o(e) : null != o && (o.current = e), (g.current = e);
            },
            className: s()(_, { [e]: !0, [t]: I }),
            style: (0, c.Ay)(T, A),
            dir: E,
            ...m,
            children: (0, i.jsxs)(l.t, { disableFocusRingScope: f, containerRef: g, children: [u, S] }),
        });
    });
}
var _ = n(947876);
let E = u(_.yL, _.Rv),
    A = u(_.qZ, _.Rv),
    h = u(_.dv, _.Rv);
