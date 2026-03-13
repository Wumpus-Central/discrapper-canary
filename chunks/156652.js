"use strict";
n.d(t, { A: () => p, x: () => A });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(397927),
    c = n(765671),
    d = n(401685),
    u = n(919706),
    h = n(678536),
    A = (((i = {})[(i.TOP = 0)] = "TOP"), (i[(i.BOTTOM = 1)] = "BOTTOM"), i);
function m(e) {
    let {
            disableGradients: t = !1,
            renderHeader: n,
            renderBottomLeft: i,
            renderBottomCenter: r,
            renderBottomRight: a,
            renderCenter: u,
        } = e,
        A = l.useRef(null),
        { width: m, ref: p } = (0, c.Ay)(),
        g = (0, d.bf)(m);
    return (0, s.jsx)(o.xpW, {
        containerRef: A,
        children: (0, s.jsxs)("div", {
            className: h._v,
            ref: A,
            children: [
                0 !== t && !0 !== t && (0, s.jsx)("div", { className: h.aw }),
                1 !== t && !0 !== t && (0, s.jsx)("div", { className: h.YA }),
                (0, s.jsx)("div", { className: h.K1, children: n?.() }),
                u?.(),
                (0, s.jsx)(d.Ay.Provider, {
                    value: g,
                    children: (0, s.jsxs)("div", {
                        className: h.q6,
                        ref: p,
                        children: [
                            (0, s.jsx)("div", { className: h.i$, children: i?.() }),
                            (0, s.jsx)("div", { className: h.Kz, children: r?.() }),
                            (0, s.jsx)("div", { className: h.i$, children: a?.() }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function p(e) {
    let {
        screenMessage: t,
        onDoubleClick: n,
        onActive: i,
        onForceIdle: l,
        idle: r,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: d,
        style: A,
        ...p
    } = e;
    return (0, s.jsxs)("div", {
        className: a()(h.zr, { [h.N7]: r }),
        style: A,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [
            o,
            null != t ? (0, s.jsx)(u.A, { size: "large", ...t }) : null,
            (0, s.jsx)(m, { ...p }),
            c?.(),
            d?.(),
        ],
    });
}
