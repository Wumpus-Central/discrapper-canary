t.d(s, { A: () => p });
var e = t(627968);
t(64700);
var a = t(734660),
    c = t(369163),
    i = t(359286),
    u = t(652215);
function p(r) {
    let { tier: s, ...t } = r;
    switch (s) {
        case u.TVA.NONE:
        case u.TVA.TIER_1:
            return (0, e.jsx)(a.E, { ...t });
        case u.TVA.TIER_2:
            return (0, e.jsx)(c.v, { ...t });
        case u.TVA.TIER_3:
            return (0, e.jsx)(i.q, { ...t });
        default:
            throw Error("Not a valid tier type");
    }
}
