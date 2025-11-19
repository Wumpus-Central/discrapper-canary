n.d(t, { Z: () => p }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(481060),
    c = n(481051),
    u = n(612641);
function d(e) {
    let { width: t = 24, height: n = 24, isBadged: l = !1, isTyping: a = !1 } = e,
        [c] = r.useState(() => (0, o.Z)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: c,
                    children: [
                        (0, i.jsx)("rect", {
                            fill: "white",
                            width: "100%",
                            height: "100%",
                        }),
                        a &&
                            (0, i.jsx)("g", {
                                fill: "black",
                                transform: "translate(5.5, ".concat(10.5, ") scale(").concat(11 / 24, ")"),
                                children: (0, i.jsx)(s.IJ0, {
                                    dotRadius: 3.5,
                                    spacing: 3,
                                    fill: "black",
                                }),
                            }),
                        l &&
                            (0, i.jsx)("circle", {
                                cx: "20",
                                cy: "19",
                                r: "10",
                                fill: "red",
                            }),
                    ],
                }),
            }),
            (0, i.jsx)("g", {
                mask: "url(#".concat(c, ")"),
                children: (0, i.jsx)(s.kBi, {
                    size: "custom",
                    width: t,
                    height: n,
                    color: "currentColor",
                }),
            }),
        ],
    });
}
function p(e) {
    var t;
    let { className: n, unreadCount: r, mentionCount: l, isTyping: o, canBadge: s } = e,
        p = null != l && l > 0,
        h = null != (t = p ? l : r) ? t : 0,
        f = s && null != r && r > 0;
    return (0, i.jsxs)("div", {
        className: a()(u.chatIcon, n),
        children: [
            (0, i.jsx)(d, {
                isBadged: f,
                isTyping: o,
            }),
            f &&
                (0, i.jsx)(c.Z, {
                    hasMentions: p,
                    truncatedCount: h > 99 ? "99+" : h,
                    className: u.badge,
                }),
        ],
    });
}
