"use strict";
n.d(t, { B9: () => _, Et: () => c, MA: () => d, _z: () => E });
var i,
    r,
    a = n(441574),
    s = n(968671),
    l = n(349871),
    o = n(158045),
    d = (((i = {}).UPSELL = "UPSELL"), (i.NITRO = "NITRO"), (i.CREPE = "CREPE"), (i.INELIGIBLE = "INELIGIBLE"), i),
    c = (((r = {}).NITRO = "nitro"), (r.CREPE = "crepe"), r);
let u = ["CREPE", "NITRO"];
function _(e) {
    return u.includes(e);
}
function E(e) {
    if (!o.Ay.canUseMoreQuestOrbs(e)) return null;
    if (o.Ay.canUseQuestOrbMultiplier(e)) return "nitro";
    let t = (0, l.kQ)(e?.perks, a.bb.MORE_QUEST_ORBS);
    return t?.includes(a.g$.SOURCE_NITRO)
        ? "nitro"
        : (0, s.f0)("getQuestOrbMultiplierSource") && t?.includes(a.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "crepe"
          : null;
}
