t.d(n, { A: () => C, x: () => m });
var i,
    l = t(477900),
    s = t(582128),
    a = t(503698),
    o = t.n(a),
    r = t(559106),
    c = t(765671),
    u = t(401685),
    d = t(919706),
    A = t(297468),
    m = (((i = {})[(i.TOP = 0)] = "TOP"), (i[(i.BOTTOM = 1)] = "BOTTOM"), i);
function h(e) {
    let {
            disableGradients: n = !1,
            renderHeader: t,
            renderBottomLeft: i,
            renderBottomCenter: a,
            renderBottomRight: o,
            renderCenter: d,
        } = e,
        m = s.useRef(null),
        { width: h, ref: C } = (0, c.Ay)(),
        p = (0, u.bf)(h);
    return (0, l.jsx)(r.xp, {
        containerRef: m,
        children: (0, l.jsxs)("div", {
            className: A._v,
            ref: m,
            children: [
                0 !== n && !0 !== n && (0, l.jsx)("div", { className: A.aw }),
                1 !== n && !0 !== n && (0, l.jsx)("div", { className: A.YA }),
                (0, l.jsx)("div", { className: A.K1, children: t?.() }),
                d?.(),
                (0, l.jsx)(u.Ay.Provider, {
                    value: p,
                    children: (0, l.jsxs)("div", {
                        className: A.q6,
                        ref: C,
                        children: [
                            (0, l.jsx)("div", { className: A.i$, children: i?.() }),
                            (0, l.jsx)("div", { className: A.Kz, children: a?.() }),
                            (0, l.jsx)("div", { className: A.He, children: o?.() }),
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
        onActive: i,
        onForceIdle: s,
        idle: a,
        children: r,
        renderChatToasts: c,
        renderVoiceChannelEffects: u,
        style: m,
        hideControls: C = !1,
        ...p
    } = e;
    return (0, l.jsxs)("div", {
        className: o()(A.zr, { [A.N7]: a }),
        style: m,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: s,
        onDoubleClick: t,
        children: [
            !C && (0, l.jsx)(h, { ...p }),
            r,
            null != n ? (0, l.jsx)(d.A, { size: "large", ...n }) : null,
            c?.(),
            u?.(),
        ],
    });
}
