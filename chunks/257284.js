r.d(t, { A: () => g });
var i = r(627968);
r(64700);
var n = r(311907),
    a = r(462887),
    s = r(289873),
    l = r(834730),
    o = r(736653),
    c = r(97352),
    d = r(927578),
    u = r(788868),
    m = r(378874);
let g = function (e) {
    let { isGift: t = !1, priceOptions: r } = e,
        g = (0, n.bG)([c.A], () => c.A.get(u.gD.PREMIUM_GROUP_MONTH)),
        x = (0, a.q)((0, o.Ay)());
    if (null == g) return (0, i.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS, className: m.xB });
    let p = (0, d.sS)(g, r, !1, t),
        T = u.WT.MONTH;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.E, {
                variant: "heading-xxl/extrabold",
                color: x ? "text-strong" : "always-white",
                tag: "span",
                children: p,
            }),
            (0, i.jsxs)(l.E, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, d.FJ)(T)],
            }),
        ],
    });
};
