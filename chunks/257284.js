n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(582754),
    s = n(397927),
    o = n(736653),
    l = n(97352),
    c = n(927578),
    u = n(788868),
    d = n(696389);
let f = function (e) {
    let { isGift: t = !1, priceOptions: n } = e,
        f = (0, i.bG)([l.A], () => l.A.get(u.gD.PREMIUM_GROUP_MONTH)),
        p = (0, a.qB)((0, o.Ay)());
    if (null == f)
        return (0, r.jsx)(s.y$y, {
            type: s.y$y.Type.PULSING_ELLIPSIS,
            className: d.xB,
        });
    let _ = (0, c.sS)(f, n, !1, t),
        h = u.WT.MONTH,
        m = p ? "text-strong" : "always-white";
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Text, {
                variant: "heading-xxl/extrabold",
                color: m,
                tag: "span",
                children: _,
            }),
            (0, r.jsxs)(s.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, c.FJ)(h)],
            }),
        ],
    });
};
