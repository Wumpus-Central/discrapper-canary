n.d(t, { V: () => d });
var r = n(536001),
    l = n(260981),
    i = n(540418),
    a = n(907085),
    s = n(179820),
    o = n(375708);
function d(e) {
    if (null == e) return null;
    switch (e) {
        case r.x.COMMON:
            return { type: { text: o.intl.string(o.t.L0K5ci) }, variant: "rarity-common", icon: l.p };
        case r.x.RARE:
            return { type: { text: o.intl.string(o.t["sTx/5z"]) }, variant: "rarity-rare", icon: i.A };
        case r.x.EPIC:
            return { type: { text: o.intl.string(o.t.RD8RiN) }, variant: "rarity-epic", icon: a.b };
        case r.x.MYTHIC:
            return { type: { text: o.intl.string(o.t.vqc1ol) }, variant: "rarity-mythic", icon: s.O };
        case r.x.LEGENDARY:
        default:
            return null;
    }
}
