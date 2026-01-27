r.d(t, {
    A: () => m,
});
var n = r(627968);
r(64700);
var i = r(311907),
    l = r(582754),
    a = r(397927),
    s = r(736653),
    o = r(97352),
    c = r(927578),
    u = r(788868),
    d = r(696389);
let m = function (e) {
    let { isGift: t = !1, priceOptions: r } = e,
        m = (0, i.bG)([o.A], () => o.A.get(u.gD.PREMIUM_GROUP_MONTH)),
        p = (0, l.qB)((0, s.Ay)());
    if (null == m)
        return (0, n.jsx)(a.y$y, {
            type: a.y$y.Type.PULSING_ELLIPSIS,
            className: d.xB,
        });
    let g = (0, c.sS)(m, r, !1, t),
        x = u.WT.MONTH;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(a.Text, {
                variant: "heading-xxl/extrabold",
                color: p ? "text-strong" : "always-white",
                tag: "span",
                children: g,
            }),
            (0, n.jsxs)(a.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, c.FJ)(x)],
            }),
        ],
    });
};
