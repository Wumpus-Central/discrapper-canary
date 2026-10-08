t.d(n, { A: () => C, x: () => h });
var l,
    i = t(477900),
    a = t(582128),
    s = t(503698),
    o = t.n(s),
    r = t(559106),
    c = t(765671),
    u = t(401685),
    d = t(919706),
    A = t(297468),
    h = (((l = {})[(l.TOP = 0)] = "TOP"), (l[(l.BOTTOM = 1)] = "BOTTOM"), l);
function m(e) {
    let {
            disableGradients: n = !1,
            renderHeader: t,
            renderBottomLeft: l,
            renderBottomCenter: s,
            renderBottomRight: o,
            renderCenter: d,
        } = e,
        h = a.useRef(null),
        { width: m, ref: C } = (0, c.Ay)(),
        p = (0, u.bf)(m);
    return (0, i.jsx)(r.xp, {
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
                    value: p,
                    children: (0, i.jsxs)("div", {
                        className: A.q6,
                        ref: C,
                        children: [
                            (0, i.jsx)("div", { className: A.i$, children: l?.() }),
                            (0, i.jsx)("div", { className: A.Kz, children: s?.() }),
                            (0, i.jsx)("div", { className: A.He, children: o?.() }),
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
        children: r,
        renderChatToasts: c,
        renderVoiceChannelEffects: u,
        style: h,
        hideControls: C = !1,
        ...p
    } = e;
    return (0, i.jsxs)("div", {
        className: o()(A.zr, { [A.N7]: s }),
        style: h,
        onMouseMove: l,
        onMouseDown: l,
        onMouseLeave: a,
        onDoubleClick: t,
        children: [
            !C && (0, i.jsx)(m, { ...p }),
            r,
            null != n ? (0, i.jsx)(d.A, { size: "large", ...n }) : null,
            c?.(),
            u?.(),
        ],
    });
}
