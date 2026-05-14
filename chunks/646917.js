"use strict";
n.d(t, { M: () => l, z: () => u });
var i,
    r = n(17928),
    s = n(287809),
    a = n(428262),
    o = n(576761),
    l = (((i = {}).UPSELL = "UPSELL"), (i.NITRO = "NITRO"), (i.CREPE = "CREPE"), (i.INELIGIBLE = "INELIGIBLE"), i);
function u() {
    return (0, r.bG)([s.default], () => {
        let e = s.default.getCurrentUser();
        return a.Ay.canUseMoreQuestOrbs(e)
            ? (0, o._z)(e) === o.Et.CREPE
                ? "CREPE"
                : "NITRO"
            : e?.isFractionalPremiumWithNoStandardSub()
              ? "INELIGIBLE"
              : "UPSELL";
    });
}
