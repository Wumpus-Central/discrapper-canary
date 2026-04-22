a.r(n), a.d(n, { default: () => u });
var t = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(770178),
    _ = a(765548),
    d = a(685073),
    c = a(534400),
    o = a(329157);
let u = i.memo(function (e) {
    let { children: n, isOverlay: a, contextGuildId: l, ...u } = e,
        [g, m] = i.useState({ maskImage: "none" }),
        h = i.useRef(null),
        p = (0, _.A)(() => {
            let e = b.current?.getBoundingClientRect() ?? null,
                n = h.current?.getBoundingClientRect() ?? null;
            if (a || null == e || null == n) return void m({ maskImage: "none" });
            let t = n.right - e.right,
                i = n.width - t;
            i > n.width
                ? m({ maskImage: "none" })
                : m({ maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ${i}px)` });
        }),
        b = (0, r.w)(p),
        x = (0, d.Wb)(u.userId, l);
    return (0, t.jsxs)("div", {
        className: s()(o.kL, a && o.ur),
        ref: b,
        children: [
            (0, t.jsx)("div", { className: o.QV, children: n }),
            (0, t.jsx)("div", {
                className: o.Qz,
                children: (0, t.jsx)("span", {
                    className: s()(o.Tm, !x && a && o.pN),
                    ref: h,
                    style: g,
                    children: (0, t.jsx)(c.Ay, {
                        ...u,
                        contextGuildId: l,
                        className: s()(u.className, a && o.ZW),
                        disableGuildProfile: !0,
                    }),
                }),
            }),
        ],
    });
});
