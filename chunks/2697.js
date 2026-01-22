n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(496885),
    o = n(313375),
    l = n(652215),
    c = n(643849);
let u = {
        [l.TVA.NONE]: c.md,
        [l.TVA.TIER_1]: c.Yl,
        [l.TVA.TIER_2]: c.ut,
        [l.TVA.TIER_3]: c.UB,
    },
    d = {
        [l.TVA.NONE]: c.W7,
        [l.TVA.TIER_1]: c.A1,
        [l.TVA.TIER_2]: c.kO,
        [l.TVA.TIER_3]: c.uq,
    };
function f(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: i, size: l } = e;
    return (0, r.jsx)(s.A, {
        className: a()(n, u[t]),
        size: l,
        children: (0, r.jsx)(o.A, {
            tier: t,
            color: "currentColor",
            className: a()(i, c.AH, d[t]),
        }),
    });
}
