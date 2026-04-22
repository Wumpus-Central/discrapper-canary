n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(532804),
    s = n(104510),
    r = n(899784),
    a = n(652215);
function o(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case a.TVA.TIER_1:
            return (0, i.jsx)(l.Q, { ...n });
        case a.TVA.TIER_2:
            return (0, i.jsx)(s._, { ...n });
        case a.TVA.TIER_3:
            return (0, i.jsx)(r._, { ...n });
        case a.TVA.NONE:
            return null;
        default:
            throw Error("Not a valid tier type");
    }
}
