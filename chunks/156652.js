t.d(n, { A: () => g, x: () => h });
var i,
    l = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(559106),
    c = t(765671),
    u = t(401685),
    d = t(919706),
    A = t(297468),
    h = (((i = {})[(i.TOP = 0)] = "TOP"), (i[(i.BOTTOM = 1)] = "BOTTOM"), i);
function m(e) {
    let {
            disableGradients: n = !1,
            renderHeader: t,
            renderBottomLeft: i,
            renderBottomCenter: a,
            renderBottomRight: r,
            renderCenter: d,
        } = e,
        h = s.useRef(null),
        { width: m, ref: g } = (0, c.Ay)(),
        x = (0, u.bf)(m);
    return (0, l.jsx)(o.xp, {
        containerRef: h,
        children: (0, l.jsxs)("div", {
            className: A._v,
            ref: h,
            children: [
                0 !== n && !0 !== n && (0, l.jsx)("div", { className: A.aw }),
                1 !== n && !0 !== n && (0, l.jsx)("div", { className: A.YA }),
                (0, l.jsx)("div", { className: A.K1, children: t?.() }),
                d?.(),
                (0, l.jsx)(u.Ay.Provider, {
                    value: x,
                    children: (0, l.jsxs)("div", {
                        className: A.q6,
                        ref: g,
                        children: [
                            (0, l.jsx)("div", { className: A.i$, children: i?.() }),
                            (0, l.jsx)("div", { className: A.Kz, children: a?.() }),
                            (0, l.jsx)("div", { className: A.He, children: r?.() }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function g(e) {
    let {
        screenMessage: n,
        onDoubleClick: t,
        onActive: i,
        onForceIdle: s,
        idle: a,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: u,
        style: h,
        hideControls: g = !1,
        ...x
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(A.zr, { [A.N7]: a }),
        style: h,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: s,
        onDoubleClick: t,
        children: [
            !g && (0, l.jsx)(m, { ...x }),
            o,
            null != n ? (0, l.jsx)(d.A, { size: "large", ...n }) : null,
            c?.(),
            u?.(),
        ],
    });
}
