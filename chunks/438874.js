"use strict";
n.d(t, { A: () => r });
var i = n(294384),
    s = n(998418),
    l = n(568065);
function r(e, t) {
    let n = (0, s.Ay)(e, t),
        r = n.type !== l.b_.INACTIVE,
        a = n.type === l.b_.TIER_OVERRIDE_ACTIVATED,
        o = (0, i.A)(e, t, "GuildPowerupCardFooterAdmin"),
        c = l.HO;
    return { showToggleButton: (r || !o) && !a, showConfigureButton: r && c.has(t.skuId), isPowerupActive: r };
}
