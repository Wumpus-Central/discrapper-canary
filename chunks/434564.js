"use strict";
n.d(t, { A: () => l, G: () => o });
var r = n(311907),
    i = n(71393),
    s = n(864310),
    a = n(652215);
function o(e) {
    let t = (0, s.Z)(e),
        n = i.A.getGuild(e)?.premiumTier ?? a.TVA.NONE;
    return a.M2T[n] + t.available;
}
function l(e) {
    let t = (0, s.A)(e),
        n = (0, r.bG)([i.A], () => i.A.getGuild(e)?.premiumTier ?? a.TVA.NONE);
    return (
        ((0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(a.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? 0
            : a.M2T[n]) + t.available
    );
}
