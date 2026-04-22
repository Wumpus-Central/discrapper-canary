n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(734660),
    s = n(369163),
    a = n(359286),
    r = n(652215);
function o(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case r.TVA.NONE:
        case r.TVA.TIER_1:
            return (0, i.jsx)(l.E, { ...n });
        case r.TVA.TIER_2:
            return (0, i.jsx)(s.v, { ...n });
        case r.TVA.TIER_3:
            return (0, i.jsx)(a.q, { ...n });
        default:
            throw Error("Not a valid tier type");
    }
}
