"use strict";
n.d(t, { t: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(936005),
    u = n(518898),
    c = n(751591);
function d(e, t) {
    let n = (0, l.A)(e);
    return i.forwardRef(function (s, l) {
        let {
                children: d,
                className: _,
                dir: f = "ltr",
                orientation: p = "vertical",
                paddingFix: h = !0,
                fade: E = !1,
                onScroll: m,
                style: g,
                ...A
            } = s,
            I = i.useRef(null),
            T = (0, u.A)({ paddingFix: h, orientation: p, dir: f, className: _, scrollerRef: I, specs: n });
        return (0, r.jsx)("div", {
            ref: (e) => {
                "function" == typeof l ? l(e) : null != l && (l.current = e), (I.current = e);
            },
            className: a()(_, { [e]: !0, [t]: E }),
            style: (0, c.Ay)(g, p),
            dir: f,
            ...A,
            children: (0, r.jsxs)(o.xp, { containerRef: I, children: [d, T] }),
        });
    });
}
