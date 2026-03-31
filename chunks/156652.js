n.d(t, { A: () => m, x: () => A });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(397927),
    c = n(765671),
    d = n(401685),
    u = n(919706),
    h = n(366797),
    A = (((i = {})[(i.TOP = 0)] = "TOP"), (i[(i.BOTTOM = 1)] = "BOTTOM"), i);
function _(e) {
    let {
            disableGradients: t = !1,
            renderHeader: n,
            renderBottomLeft: i,
            renderBottomCenter: a,
            renderBottomRight: r,
            renderCenter: u,
        } = e,
        A = s.useRef(null),
        { width: _, ref: m } = (0, c.Ay)(),
        g = (0, d.bf)(_);
    return (0, l.jsx)(o.xpW, {
        containerRef: A,
        children: (0, l.jsxs)("div", {
            className: h._v,
            ref: A,
            children: [
                0 !== t && !0 !== t && (0, l.jsx)("div", { className: h.aw }),
                1 !== t && !0 !== t && (0, l.jsx)("div", { className: h.YA }),
                (0, l.jsx)("div", { className: h.K1, children: n?.() }),
                u?.(),
                (0, l.jsx)(d.Ay.Provider, {
                    value: g,
                    children: (0, l.jsxs)("div", {
                        className: h.q6,
                        ref: m,
                        children: [
                            (0, l.jsx)("div", { className: h.i$, children: i?.() }),
                            (0, l.jsx)("div", { className: h.Kz, children: a?.() }),
                            (0, l.jsx)("div", { className: h.i$, children: r?.() }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function m(e) {
    let {
        screenMessage: t,
        onDoubleClick: n,
        onActive: i,
        onForceIdle: s,
        idle: a,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: d,
        style: A,
        ...m
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(h.zr, { [h.N7]: a }),
        style: A,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: s,
        onDoubleClick: n,
        children: [
            o,
            null != t ? (0, l.jsx)(u.A, { size: "large", ...t }) : null,
            (0, l.jsx)(_, { ...m }),
            c?.(),
            d?.(),
        ],
    });
}
