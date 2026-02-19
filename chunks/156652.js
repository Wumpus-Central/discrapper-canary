"use strict";
n.d(t, { A: () => p, x: () => h });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(397927),
    c = n(235986),
    d = n(919706),
    u = n(985010),
    h = (((i = {})[(i.TOP = 0)] = "TOP"), (i[(i.BOTTOM = 1)] = "BOTTOM"), i);
function A(e) {
    let {
            disableGradients: t = !1,
            renderHeader: n,
            renderBottomLeft: i,
            renderBottomCenter: r,
            renderBottomRight: a,
            renderCenter: d,
        } = e,
        h = l.useRef(null);
    return (0, s.jsx)(o.xpW, {
        containerRef: h,
        children: (0, s.jsxs)("div", {
            className: u._v,
            ref: h,
            children: [
                0 !== t && !0 !== t && (0, s.jsx)("div", { className: u.aw }),
                1 !== t && !0 !== t && (0, s.jsx)("div", { className: u.YA }),
                (0, s.jsx)("div", { className: u.K1, children: n?.() }),
                d?.(),
                (0, s.jsxs)("div", {
                    className: u.q6,
                    children: [
                        (0, s.jsx)(c.A, { grow: 1, align: c.A.Align.CENTER, className: u.i$, children: i?.() }),
                        (0, s.jsx)(c.A, {
                            grow: 1,
                            justify: c.A.Justify.CENTER,
                            align: c.A.Align.CENTER,
                            children: r?.(),
                        }),
                        (0, s.jsx)(c.A, {
                            grow: 1,
                            justify: c.A.Justify.END,
                            align: c.A.Align.CENTER,
                            className: u.i$,
                            children: a?.(),
                        }),
                    ],
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
        renderVoiceChannelEffects: h,
        style: p,
        ...g
    } = e;
    return (0, s.jsxs)("div", {
        className: a()(u.zr, { [u.N7]: r }),
        style: p,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: n,
        children: [
            o,
            null != t ? (0, s.jsx)(d.A, { size: "large", ...t }) : null,
            (0, s.jsx)(A, { ...g }),
            c?.(),
            h?.(),
        ],
    });
}
