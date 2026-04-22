t.d(n, { A: () => m, x: () => h });
var l,
    i = t(627968),
    a = t(64700),
    s = t(503698),
    r = t.n(s),
    o = t(187322),
    c = t(765671),
    u = t(401685),
    d = t(919706),
    A = t(499997),
    h = (((l = {})[(l.TOP = 0)] = "TOP"), (l[(l.BOTTOM = 1)] = "BOTTOM"), l);
function p(e) {
    let {
            disableGradients: n = !1,
            renderHeader: t,
            renderBottomLeft: l,
            renderBottomCenter: s,
            renderBottomRight: r,
            renderCenter: d,
        } = e,
        h = a.useRef(null),
        { width: p, ref: m } = (0, c.Ay)(),
        g = (0, u.bf)(p);
    return (0, i.jsx)(o.xp, {
        containerRef: h,
        children: (0, i.jsxs)("div", {
            className: A._v,
            ref: h,
            children: [
                0 !== n && !0 !== n && (0, i.jsx)("div", { className: A.aw }),
                1 !== n && !0 !== n && (0, i.jsx)("div", { className: A.YA }),
                (0, i.jsx)("div", { className: A.K1, children: t?.() }),
                d?.(),
                (0, i.jsx)(u.Ay.Provider, {
                    value: g,
                    children: (0, i.jsxs)("div", {
                        className: A.q6,
                        ref: m,
                        children: [
                            (0, i.jsx)("div", { className: A.i$, children: l?.() }),
                            (0, i.jsx)("div", { className: A.Kz, children: s?.() }),
                            (0, i.jsx)("div", { className: A.i$, children: r?.() }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function m(e) {
    let {
        screenMessage: n,
        onDoubleClick: t,
        onActive: l,
        onForceIdle: a,
        idle: s,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: u,
        style: h,
        ...m
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(A.zr, { [A.N7]: s }),
        style: h,
        onMouseMove: l,
        onMouseDown: l,
        onMouseLeave: a,
        onDoubleClick: t,
        children: [
            o,
            null != n ? (0, i.jsx)(d.A, { size: "large", ...n }) : null,
            (0, i.jsx)(p, { ...m }),
            c?.(),
            u?.(),
        ],
    });
}
