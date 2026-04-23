"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(734660),
    l = n(369163),
    r = n(359286),
    a = n(652215);
function o(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case a.TVA.NONE:
        case a.TVA.TIER_1:
            return (0, i.jsx)(s.E, { ...n });
        case a.TVA.TIER_2:
            return (0, i.jsx)(l.v, { ...n });
        case a.TVA.TIER_3:
            return (0, i.jsx)(r.q, { ...n });
        default:
            throw Error("Not a valid tier type");
    }
}
