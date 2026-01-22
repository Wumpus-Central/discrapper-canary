n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    c = n(315502),
    u = n(545290);

function d(e) {
    let { width: t = 24, height: n = 24, isBadged: i = !1, isTyping: a = !1 } = e,
        [c] = l.useState(() => (0, s.A)());
    return (0, r.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("mask", {
                    id: c,
                    children: [
                        (0, r.jsx)("rect", {
                            fill: "white",
                            width: "100%",
                            height: "100%",
                        }),
                        a &&
                            (0, r.jsx)("g", {
                                fill: "black",
                                transform: "translate(5.5, ".concat(10.5, ") scale(").concat(11 / 24, ")"),
                                children: (0, r.jsx)(o.UBN, {
                                    dotRadius: 3.5,
                                    spacing: 3,
                                    fill: "black",
                                }),
                            }),
                        i &&
                            (0, r.jsx)("circle", {
                                cx: "20",
                                cy: "19",
                                r: "10",
                                fill: "red",
                            }),
                    ],
                }),
            }),
            (0, r.jsx)("g", {
                mask: "url(#".concat(c, ")"),
                children: (0, r.jsx)(o.oyn, {
                    size: "custom",
                    width: t,
                    height: n,
                    color: "currentColor",
                }),
            }),
        ],
    });
}

function f(e) {
    var t;
    let { className: n, unreadCount: l, mentionCount: i, isTyping: s, canBadge: o } = e,
        f = null != i && i > 0,
        p = null != (t = f ? i : l) ? t : 0,
        h = o && null != l && l > 0;
    return (0, r.jsxs)("div", {
        className: a()(u.Or, n),
        children: [
            (0, r.jsx)(d, {
                isBadged: h,
                isTyping: s,
            }),
            h &&
                (0, r.jsx)(c.A, {
                    hasMentions: f,
                    truncatedCount: p > 99 ? "99+" : p,
                    className: u.qS,
                }),
        ],
    });
}
