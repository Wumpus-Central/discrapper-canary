"use strict";
n.d(t, { B9: () => u, Et: () => l, _z: () => c });
var i,
    r = n(441574),
    s = n(349871),
    a = n(428262),
    o = n(646917),
    l = (((i = {}).NITRO = "nitro"), (i.CREPE = "crepe"), i);
function u(e) {
    return e !== o.M.UPSELL && e !== o.M.INELIGIBLE;
}
function c(e) {
    if (!a.Ay.canUseMoreQuestOrbs(e)) return null;
    if (a.Ay.canUseQuestOrbMultiplier(e)) return "nitro";
    let t = (0, s.kQ)(e?.perks, r.bb.MORE_QUEST_ORBS);
    return t?.includes(r.g$.SOURCE_NITRO) ? "nitro" : null;
}
