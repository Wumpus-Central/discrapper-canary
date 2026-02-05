n.d(t, { A: () => g, x: () => h });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(397927),
    d = n(235986),
    c = n(919706),
    u = n(985010),
    h = (((i = {})[(i.TOP = 0)] = "TOP"), (i[(i.BOTTOM = 1)] = "BOTTOM"), i);
function A(e) {
    let {
            disableGradients: t = !1,
            renderHeader: n,
            renderBottomLeft: i,
            renderBottomCenter: a,
            renderBottomRight: r,
            renderCenter: c,
        } = e,
        h = s.useRef(null);
    return (0, l.jsx)(o.xpW, {
        containerRef: h,
        children: (0, l.jsxs)("div", {
            className: u._v,
            ref: h,
            children: [
                0 !== t && !0 !== t && (0, l.jsx)("div", { className: u.aw }),
                1 !== t && !0 !== t && (0, l.jsx)("div", { className: u.YA }),
                (0, l.jsx)("div", { className: u.K1, children: n?.() }),
                c?.(),
                (0, l.jsxs)("div", {
                    className: u.q6,
                    children: [
                        (0, l.jsx)(d.A, { grow: 1, align: d.A.Align.CENTER, className: u.i$, children: i?.() }),
                        (0, l.jsx)(d.A, {
                            grow: 1,
                            justify: d.A.Justify.CENTER,
                            align: d.A.Align.CENTER,
                            children: a?.(),
                        }),
                        (0, l.jsx)(d.A, {
                            grow: 1,
                            justify: d.A.Justify.END,
                            align: d.A.Align.CENTER,
                            className: u.i$,
                            children: r?.(),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function g(e) {
    let {
        screenMessage: t,
        onDoubleClick: n,
        onActive: i,
        onForceIdle: s,
        idle: a,
        children: o,
        renderChatToasts: d,
        renderVoiceChannelEffects: h,
        style: g,
        ...m
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(u.zr, { [u.N7]: a }),
        style: g,
        onMouseMove: i,
        onMouseDown: i,
        onMouseLeave: s,
        onDoubleClick: n,
        children: [
            o,
            null != t ? (0, l.jsx)(c.A, { size: "large", ...t }) : null,
            (0, l.jsx)(A, { ...m }),
            d?.(),
            h?.(),
        ],
    });
}
