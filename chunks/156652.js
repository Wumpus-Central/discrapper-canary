t.d(n, { A: () => C, x: () => m });
var i,
    l = t(477900),
    a = t(582128),
    s = t(503698),
    o = t.n(s),
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
            renderBottomCenter: s,
            renderBottomRight: o,
            renderCenter: d,
        } = e,
        m = a.useRef(null),
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
                            (0, l.jsx)("div", { className: A.Kz, children: s?.() }),
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
        onForceIdle: a,
        idle: s,
        children: r,
        renderChatToasts: c,
        renderVoiceChannelEffects: u,
        style: m,
        hideControls: C = !1,
        ...p
    } = e;
    return (0, l.jsxs)("div", {
        className: o()(A.zr, { [A.N7]: s }),
        style: m,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: a,
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
