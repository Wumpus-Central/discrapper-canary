"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(835245),
    o = n(397927),
    c = n(315502),
    d = n(12008);
function u(e) {
    let { width: t = 24, height: n = 24, isBadged: l = !1, isTyping: a = !1 } = e,
        [c] = s.useState(() => (0, r.A)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: c,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        a &&
                            (0, i.jsx)("g", {
                                fill: "black",
                                transform: `translate(5.5, 10.5) scale(${11 / 24})`,
                                children: (0, i.jsx)(o.UBN, { dotRadius: 3.5, spacing: 3, fill: "black" }),
                            }),
                        l && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "red" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", {
                mask: `url(#${c})`,
                children: (0, i.jsx)(o.oyn, { size: "custom", width: t, height: n, color: "currentColor" }),
            }),
        ],
    });
}
function h(e) {
    let { className: t, unreadCount: n, mentionCount: s, isTyping: l, canBadge: r } = e,
        o = null != s && s > 0,
        h = (o ? s : n) ?? 0,
        A = r && null != n && n > 0;
    return (0, i.jsxs)("div", {
        className: a()(d.Or, t),
        children: [
            (0, i.jsx)(u, { isBadged: A, isTyping: l }),
            A && (0, i.jsx)(c.A, { hasMentions: o, truncatedCount: h > 99 ? "99+" : h, className: d.qS }),
        ],
    });
}
