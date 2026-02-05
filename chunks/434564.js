"use strict";
n.d(t, { A: () => l, G: () => o });
var r = n(311907),
    i = n(71393),
    a = n(864310),
    s = n(652215);
function o(e) {
    let t = (0, a.Z)(e),
        n = i.A.getGuild(e)?.premiumTier ?? s.TVA.NONE;
    return s.M2T[n] + t.available;
}
function l(e) {
    let t = (0, a.A)(e),
        n = (0, r.bG)([i.A], () => i.A.getGuild(e)?.premiumTier ?? s.TVA.NONE);
    return (
        ((0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? 0
            : s.M2T[n]) + t.available
    );
}
