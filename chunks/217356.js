"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(770178),
    l = n(765548),
    u = n(685073),
    c = n(534400),
    d = n(277150);
let _ = i.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: a, ..._ } = e,
        [f, h] = i.useState({ maskImage: "none" }),
        p = i.useRef(null),
        g = (0, l.A)(() => {
            let e = E.current?.getBoundingClientRect() ?? null,
                t = p.current?.getBoundingClientRect() ?? null;
            if (n || null == e || null == t) return void h({ maskImage: "none" });
            let r = t.right - e.right,
                i = t.width - r;
            i > t.width
                ? h({ maskImage: "none" })
                : h({ maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ${i}px)` });
        }),
        E = (0, o.w)(g),
        A = (0, u.Wb)(_.userId, a);
    return (0, r.jsxs)("div", {
        className: s()(d.kL, n && d.ur),
        ref: E,
        children: [
            (0, r.jsx)("div", { className: d.QV, children: t }),
            (0, r.jsx)("div", {
                className: d.Qz,
                children: (0, r.jsx)("span", {
                    className: s()(d.Tm, !A && n && d.pN),
                    ref: p,
                    style: f,
                    children: (0, r.jsx)(c.Ay, {
                        ..._,
                        contextGuildId: a,
                        className: s()(_.className, n && d.ZW),
                        disableGuildProfile: !0,
                    }),
                }),
            }),
        ],
    });
});
