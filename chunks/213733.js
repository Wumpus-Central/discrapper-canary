"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(652215);
function r(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case l.TVA.TIER_1:
            return (0, i.jsx)(s.QmH, { ...n });
        case l.TVA.TIER_2:
            return (0, i.jsx)(s._Jp, { ...n });
        case l.TVA.TIER_3:
            return (0, i.jsx)(s._KU, { ...n });
        case l.TVA.NONE:
            return null;
        default:
            throw Error("Not a valid tier type");
    }
}
