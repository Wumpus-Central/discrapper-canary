t.d(n, { A: () => C, x: () => m });
var l,
    i = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(259678),
    c = t(765671),
    u = t(401685),
    d = t(919706),
    A = t(434405),
    m = (((l = {})[(l.TOP = 0)] = "TOP"), (l[(l.BOTTOM = 1)] = "BOTTOM"), l);
function h(e) {
    let {
            disableGradients: n = !1,
            renderHeader: t,
            renderBottomLeft: l,
            renderBottomCenter: a,
            renderBottomRight: r,
            renderCenter: d,
        } = e,
        m = s.useRef(null),
        { width: h, ref: C } = (0, c.Ay)(),
        E = (0, u.bf)(h);
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
                    value: E,
                    children: (0, i.jsxs)("div", {
                        className: A.q6,
                        ref: C,
                        children: [
                            (0, i.jsx)("div", { className: A.i$, children: l?.() }),
                            (0, i.jsx)("div", { className: A.Kz, children: a?.() }),
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
        onForceIdle: s,
        idle: a,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: u,
        style: m,
        hideControls: C = !1,
        ...E
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(A.zr, { [A.N7]: a }),
        style: m,
        onMouseMove: l,
        onMouseDown: l,
        onMouseLeave: s,
        onDoubleClick: t,
        children: [
            !C && (0, i.jsx)(h, { ...E }),
            o,
            null != n ? (0, i.jsx)(d.A, { size: "large", ...n }) : null,
            c?.(),
            u?.(),
        ],
    });
}
