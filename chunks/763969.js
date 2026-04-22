"use strict";
n.d(t, { t: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(936005),
    u = n(518898),
    d = n(751591);
function c(e, t) {
    let n = (0, l.A)(e);
    return i.forwardRef(function (s, l) {
        let {
                children: c,
                className: _,
                dir: f = "ltr",
                orientation: E = "vertical",
                paddingFix: h = !0,
                fade: p = !1,
                onScroll: m,
                style: g,
                ...A
            } = s,
            I = i.useRef(null),
            T = (0, u.A)({ paddingFix: h, orientation: E, dir: f, className: _, scrollerRef: I, specs: n });
        return (0, r.jsx)("div", {
            ref: (e) => {
                "function" == typeof l ? l(e) : null != l && (l.current = e), (I.current = e);
            },
            className: a()(_, { [e]: !0, [t]: p }),
            style: (0, d.Ay)(g, E),
            dir: f,
            ...A,
            children: (0, r.jsxs)(o.xp, { containerRef: I, children: [c, T] }),
        });
    });
}
