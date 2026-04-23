n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(496885),
    r = n(313375),
    o = n(652215),
    d = n(484840);
let c = { [o.TVA.NONE]: d.md, [o.TVA.TIER_1]: d.Yl, [o.TVA.TIER_2]: d.ut, [o.TVA.TIER_3]: d.UB },
    u = { [o.TVA.NONE]: d.W7, [o.TVA.TIER_1]: d.A1, [o.TVA.TIER_2]: d.kO, [o.TVA.TIER_3]: d.uq };
function h(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: l, size: o } = e;
    return (0, i.jsx)(a.A, {
        className: s()(n, c[t]),
        size: o,
        children: (0, i.jsx)(r.A, { tier: t, color: "currentColor", className: s()(l, d.AH, u[t]) }),
    });
}
