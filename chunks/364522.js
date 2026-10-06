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
    return function (n) {
        let {
                children: a,
                className: u,
                dir: _ = "ltr",
                orientation: E = "vertical",
                scrollbarGutter: A = "stable",
                fade: h = !1,
                disableFocusRingScope: f = !1,
                onScroll: I,
                style: p,
                ref: T,
                ...m
            } = n,
            g = r.useRef(null),
            S = (0, o.A)({ scrollbarGutter: A, orientation: E, className: u, scrollerRef: g }),
            N = !1 === A || "vertical" !== E ? void 0 : "stable" === A ? c.x2 : c.GV;
        return (0, i.jsx)("div", {
            ref: (e) => {
                ("function" == typeof T ? T(e) : null != T && (T.current = e), (g.current = e));
            },
            className: s()(u, N, { [e]: !0, [t]: h }),
            style: (0, d.Ay)(p, E),
            dir: _,
            ...m,
            children: (0, i.jsxs)(l.t, { disableFocusRingScope: f, containerRef: g, children: [a, S] }),
        });
    };
}
let _ = u(c.yL, c.Rv),
    E = u(c.qZ, c.Rv),
    A = u(c.dv, c.Rv);
