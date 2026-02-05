"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(652215);
function s(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case a.TVA.NONE:
        case a.TVA.TIER_1:
            return (0, r.jsx)(i.EX7, { ...n });
        case a.TVA.TIER_2:
            return (0, r.jsx)(i.vRF, { ...n });
        case a.TVA.TIER_3:
            return (0, r.jsx)(i.q1I, { ...n });
        default:
            throw Error("Not a valid tier type");
    }
}
