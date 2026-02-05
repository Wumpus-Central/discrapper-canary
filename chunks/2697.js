"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(496885),
    o = n(313375),
    l = n(652215),
    u = n(643849);
let c = { [l.TVA.NONE]: u.md, [l.TVA.TIER_1]: u.Yl, [l.TVA.TIER_2]: u.ut, [l.TVA.TIER_3]: u.UB },
    d = { [l.TVA.NONE]: u.W7, [l.TVA.TIER_1]: u.A1, [l.TVA.TIER_2]: u.kO, [l.TVA.TIER_3]: u.uq };
function _(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: i, size: l } = e;
    return (0, r.jsx)(s.A, {
        className: a()(n, c[t]),
        size: l,
        children: (0, r.jsx)(o.A, { tier: t, color: "currentColor", className: a()(i, u.AH, d[t]) }),
    });
}
