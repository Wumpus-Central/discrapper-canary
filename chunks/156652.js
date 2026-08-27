t.d(n, { A: () => C, x: () => m });
var l,
    i = t(477900),
    a = t(582128),
    s = t(503698),
    r = t.n(s),
    o = t(259678),
    c = t(765671),
    u = t(401685),
    d = t(919706),
    A = t(297468),
    m = (((l = {})[(l.TOP = 0)] = "TOP"), (l[(l.BOTTOM = 1)] = "BOTTOM"), l);
function h(e) {
    let {
            disableGradients: n = !1,
            renderHeader: t,
            renderBottomLeft: l,
            renderBottomCenter: s,
            renderBottomRight: r,
            renderCenter: d,
        } = e,
        m = a.useRef(null),
        { width: h, ref: C } = (0, c.Ay)(),
        f = (0, u.bf)(h);
    return (0, i.jsx)(o.xp, {
        containerRef: m,
        children: (0, i.jsxs)("div", {
            className: A._v,
            ref: m,
            children: [
                0 !== n && !0 !== n && (0, i.jsx)("div", { className: A.aw }),
                1 !== n && !0 !== n && (0, i.jsx)("div", { className: A.YA }),
                (0, i.jsx)("div", { className: A.K1, children: t?.() }),
                d?.(),
                (0, i.jsx)(u.Ay.Provider, {
                    value: f,
                    children: (0, i.jsxs)("div", {
                        className: A.q6,
                        ref: C,
                        children: [
                            (0, i.jsx)("div", { className: A.i$, children: l?.() }),
                            (0, i.jsx)("div", { className: A.Kz, children: s?.() }),
                            (0, i.jsx)("div", { className: A.He, children: r?.() }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function C(e) {
    let {
        screenMessage: n,
        onDoubleClick: t,
        onActive: l,
        onForceIdle: a,
        idle: s,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: u,
        style: m,
        hideControls: C = !1,
        ...f
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(A.zr, { [A.N7]: s }),
        style: m,
        onMouseMove: l,
        onMouseDown: l,
        onMouseLeave: a,
        onDoubleClick: t,
        children: [
            !C && (0, i.jsx)(h, { ...f }),
            o,
            null != n ? (0, i.jsx)(d.A, { size: "large", ...n }) : null,
            c?.(),
            u?.(),
        ],
    });
}
