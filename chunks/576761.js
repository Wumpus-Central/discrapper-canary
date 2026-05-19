"use strict";
n.d(t, { B9: () => _, Et: () => c, MA: () => u, _z: () => f });
var i,
    r,
    s = n(441574),
    a = n(968671),
    o = n(349871),
    l = n(428262),
    u = (((i = {}).UPSELL = "UPSELL"), (i.NITRO = "NITRO"), (i.CREPE = "CREPE"), (i.INELIGIBLE = "INELIGIBLE"), i),
    c = (((r = {}).NITRO = "nitro"), (r.CREPE = "crepe"), r);
let d = ["CREPE", "NITRO"];
function _(e) {
    return d.includes(e);
}
function f(e) {
    if (!l.Ay.canUseMoreQuestOrbs(e)) return null;
    if (l.Ay.canUseQuestOrbMultiplier(e)) return "nitro";
    let t = (0, o.kQ)(e?.perks, s.bb.MORE_QUEST_ORBS);
    return t?.includes(s.g$.SOURCE_NITRO)
        ? "nitro"
        : (0, a.f0)("getQuestOrbMultiplierSource") && t?.includes(s.g$.SOURCE_THIRDPARTY_CROISSANT)
          ? "crepe"
          : null;
}
