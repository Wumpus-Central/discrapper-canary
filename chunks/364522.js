n.d(t, { d_: () => A, Ip: () => _, Ar: () => E });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(330573),
    o = n(518898),
    d = n(751591),
    c = n(6095);
function u(e, t) {
    return r.forwardRef(function (n, a) {
        let {
                children: u,
                className: _,
                dir: E = "ltr",
                orientation: A = "vertical",
                scrollbarGutter: h = "stable",
                fade: I = !1,
                disableFocusRingScope: f = !1,
                onScroll: p,
                style: T,
                ...m
            } = n,
            g = r.useRef(null),
            S = (0, o.A)({ scrollbarGutter: h, orientation: A, className: _, scrollerRef: g }),
            N = !1 === h || "vertical" !== A ? void 0 : "stable" === h ? c.x2 : c.GV;
        return (0, i.jsx)("div", {
            ref: (e) => {
                "function" == typeof a ? a(e) : null != a && (a.current = e), (g.current = e);
            },
            className: s()(_, N, { [e]: !0, [t]: I }),
            style: (0, d.Ay)(T, A),
            dir: E,
            ...m,
            children: (0, i.jsxs)(l.t, { disableFocusRingScope: f, containerRef: g, children: [u, S] }),
        });
    });
}
let _ = u(c.yL, c.Rv),
    E = u(c.qZ, c.Rv),
    A = u(c.dv, c.Rv);
