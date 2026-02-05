"use strict";
n.d(t, { t: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(187322),
    l = n(842867);
function u(e, t) {
    let n = (0, l.dG)(e);
    return i.forwardRef(function (a, u) {
        let {
                children: c,
                className: d,
                dir: _ = "ltr",
                orientation: f = "vertical",
                paddingFix: p = !0,
                fade: h = !1,
                onScroll: m,
                style: g,
                ...E
            } = a,
            A = i.useRef(null),
            I = (0, l._I)({ paddingFix: p, orientation: f, dir: _, className: d, scrollerRef: A, specs: n });
        return (0, r.jsx)("div", {
            ref: (e) => {
                "function" == typeof u ? u(e) : null != u && (u.current = e), (A.current = e);
            },
            className: s()(d, { [e]: !0, [t]: h }),
            style: (0, l.Ze)(g, f),
            dir: _,
            ...E,
            children: (0, r.jsxs)(o.xp, { containerRef: A, children: [c, I] }),
        });
    });
}
