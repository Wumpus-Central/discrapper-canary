t.d(n, { A: () => m });
var i = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(132500),
    r = t(863610),
    c = t(534890),
    u = t(315502),
    d = t(344204);
function A(e) {
    let { width: n = 24, height: t = 24, isBadged: a = !1, isTyping: s = !1 } = e,
        [u] = l.useState(() => (0, o.A)());
    return (0, i.jsxs)("svg", {
        width: n,
        height: t,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: u,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        s &&
                            (0, i.jsx)("g", {
                                fill: "black",
                                transform: `translate(5.5, 10.5) scale(${11 / 24})`,
                                children: (0, i.jsx)(r.U, { dotRadius: 3.5, spacing: 3, fill: "black" }),
                            }),
                        a && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "red" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", {
                mask: `url(#${u})`,
                children: (0, i.jsx)(c.ChatIcon, { size: "custom", width: n, height: t, color: "currentColor" }),
            }),
        ],
    });
}
function m(e) {
    let { className: n, unreadCount: t, mentionCount: l, isTyping: a, canBadge: o } = e,
        r = null != l && l > 0,
        c = (r ? l : t) ?? 0,
        m = o && null != t && t > 0;
    return (0, i.jsxs)("div", {
        className: s()(d.Or, n),
        children: [
            (0, i.jsx)(A, { isBadged: m, isTyping: a }),
            m && (0, i.jsx)(u.A, { hasMentions: r, truncatedCount: c > 99 ? "99+" : c, className: d.qS }),
        ],
    });
}
