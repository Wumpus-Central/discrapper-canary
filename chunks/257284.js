i.d(t, { A: () => u });
var r = i(627968);
i(64700);
var n = i(311907),
    s = i(582754),
    a = i(397927),
    l = i(736653),
    o = i(97352),
    c = i(927578),
    d = i(788868),
    m = i(696389);
let u = function (e) {
    let { isGift: t = !1, priceOptions: i } = e,
        u = (0, n.bG)([o.A], () => o.A.get(d.gD.PREMIUM_GROUP_MONTH)),
        x = (0, s.qB)((0, l.Ay)());
    if (null == u) return (0, r.jsx)(a.y$y, { type: a.y$y.Type.PULSING_ELLIPSIS, className: m.xB });
    let C = (0, c.sS)(u, i, !1, t),
        g = d.WT.MONTH;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(a.Text, {
                variant: "heading-xxl/extrabold",
                color: x ? "text-strong" : "always-white",
                tag: "span",
                children: C,
            }),
            (0, r.jsxs)(a.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, c.FJ)(g)],
            }),
        ],
    });
};
