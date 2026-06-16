s.d(e, { A: () => u });
var t = s(627968);
s(64700);
var T = s(734660),
    a = s(369163),
    A = s(359286),
    c = s(652215);
function u(r) {
    let { tier: e, ...s } = r;
    switch (e) {
        case c.TVA.NONE:
        case c.TVA.TIER_1:
            return (0, t.jsx)(T.E, { ...s });
        case c.TVA.TIER_2:
            return (0, t.jsx)(a.v, { ...s });
        case c.TVA.TIER_3:
            return (0, t.jsx)(A.q, { ...s });
        default:
            throw Error("Not a valid tier type");
    }
}
