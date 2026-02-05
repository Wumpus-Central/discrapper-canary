n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(770178),
    o = n(765548),
    d = n(685073),
    c = n(534400),
    u = n(277150);
let h = l.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: s, ...h } = e,
        [A, g] = l.useState({ maskImage: "none" }),
        m = l.useRef(null),
        p = (0, o.A)(() => {
            let e = _.current?.getBoundingClientRect() ?? null,
                t = m.current?.getBoundingClientRect() ?? null;
            if (n || null == e || null == t) return void g({ maskImage: "none" });
            let i = t.right - e.right,
                l = t.width - i;
            l > t.width
                ? g({ maskImage: "none" })
                : g({ maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ${l}px)` });
        }),
        _ = (0, r.w)(p),
        x = (0, d.Wb)(h.userId, s);
    return (0, i.jsxs)("div", {
        className: a()(u.kL, n && u.ur),
        ref: _,
        children: [
            (0, i.jsx)("div", { className: u.QV, children: t }),
            (0, i.jsx)("div", {
                className: u.Qz,
                children: (0, i.jsx)("span", {
                    className: a()(u.Tm, !x && n && u.pN),
                    ref: m,
                    style: A,
                    children: (0, i.jsx)(c.Ay, {
                        ...h,
                        contextGuildId: s,
                        className: a()(h.className, n && u.ZW),
                        disableGuildProfile: !0,
                    }),
                }),
            }),
        ],
    });
});
