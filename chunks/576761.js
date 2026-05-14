"use strict";
n.d(t, { B9: () => c, Et: () => u, _z: () => d });
var i,
    r = n(441574),
    s = n(968671),
    a = n(349871),
    o = n(428262),
    l = n(646917),
    u = (((i = {}).NITRO = "nitro"), (i.CREPE = "crepe"), i);
function c(e) {
    return e !== l.M.UPSELL && e !== l.M.INELIGIBLE;
}
function d(e) {
    if (!o.Ay.canUseMoreQuestOrbs(e)) return null;
    if (o.Ay.canUseQuestOrbMultiplier(e)) return "nitro";
    let t = (0, a.kQ)(e?.perks, r.bb.MORE_QUEST_ORBS);
    return t?.includes(r.g$.SOURCE_NITRO)
        ? "nitro"
        : (0, s.getIsCrepeEnabled)("getQuestOrbMultiplierSource") && t?.includes(r.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "crepe"
          : null;
}
