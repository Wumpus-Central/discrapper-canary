"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(496885),
    a = n(313375),
    o = n(652215),
    d = n(484840);
let c = { [o.TVA.NONE]: d.md, [o.TVA.TIER_1]: d.Yl, [o.TVA.TIER_2]: d.ut, [o.TVA.TIER_3]: d.UB },
    u = { [o.TVA.NONE]: d.W7, [o.TVA.TIER_1]: d.A1, [o.TVA.TIER_2]: d.kO, [o.TVA.TIER_3]: d.uq };
function _(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: s, size: o } = e;
    return (0, i.jsx)(r.A, {
        className: l()(n, c[t]),
        size: o,
        children: (0, i.jsx)(a.A, { tier: t, color: "currentColor", className: l()(s, d.AH, u[t]) }),
    });
}
