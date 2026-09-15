t.d(n, { A: () => m });
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(132500),
    o = t(863610),
    c = t(534890),
    u = t(315502),
    d = t(344204);
function A(e) {
    let { width: n = 24, height: t = 24, isBadged: s = !1, isTyping: a = !1 } = e,
        [u] = i.useState(() => (0, r.A)());
    return (0, l.jsxs)("svg", {
        width: n,
        height: t,
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("mask", {
                    id: u,
                    children: [
                        (0, l.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        a &&
                            (0, l.jsx)("g", {
                                fill: "black",
                                transform: `translate(5.5, 10.5) scale(${11 / 24})`,
                                children: (0, l.jsx)(o.U, { dotRadius: 3.5, spacing: 3, fill: "black" }),
                            }),
                        s && (0, l.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "red" }),
                    ],
                }),
            }),
            (0, l.jsx)("g", {
                mask: `url(#${u})`,
                children: (0, l.jsx)(c.ChatIcon, { size: "custom", width: n, height: t, color: "currentColor" }),
            }),
        ],
    });
}
function m(e) {
    let { className: n, unreadCount: t, mentionCount: i, isTyping: s, canBadge: r } = e,
        o = null != i && i > 0,
        c = (o ? i : t) ?? 0,
        m = r && null != t && t > 0;
    return (0, l.jsxs)("div", {
        className: a()(d.Or, n),
        children: [
            (0, l.jsx)(A, { isBadged: m, isTyping: s }),
            m && (0, l.jsx)(u.A, { hasMentions: o, truncatedCount: c > 99 ? "99+" : c, className: d.qS }),
        ],
    });
}
