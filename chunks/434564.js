"use strict";
n.d(t, { A: () => l, G: () => o });
var i = n(17928),
    r = n(71393),
    s = n(864310),
    a = n(652215);
function o(e) {
    let t = (0, s.Z)(e),
        n = r.A.getGuild(e)?.premiumTier ?? a.TVA.NONE;
    return a.M2T[n] + t.available;
}
function l(e) {
    let t = (0, s.A)(e),
        n = (0, i.bG)([r.A], () => r.A.getGuild(e)?.premiumTier ?? a.TVA.NONE);
    return (
        ((0, i.bG)([r.A], () => r.A.getGuild(e)?.features.has(a.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? 0
            : a.M2T[n]) + t.available
    );
}
