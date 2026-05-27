"use strict";
n.d(t, { V: () => u });
var i = n(536001),
    r = n(260981),
    s = n(540418),
    a = n(907085),
    o = n(179820),
    l = n(375708);
function u(e) {
    if (null == e) return null;
    switch (e) {
        case i.x.COMMON:
            return { type: { text: l.intl.string(l.t.L0K5ci) }, variant: "rarity-common", icon: r.p };
        case i.x.RARE:
            return { type: { text: l.intl.string(l.t["sTx/5z"]) }, variant: "rarity-rare", icon: s.A };
        case i.x.EPIC:
            return { type: { text: l.intl.string(l.t.RD8RiN) }, variant: "rarity-epic", icon: a.b };
        case i.x.MYTHIC:
            return { type: { text: l.intl.string(l.t.vqc1ol) }, variant: "rarity-mythic", icon: o.O };
        case i.x.LEGENDARY:
        default:
            return null;
    }
}
