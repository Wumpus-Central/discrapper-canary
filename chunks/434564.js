n.d(t, { A: () => o, G: () => l });
var i = n(17928),
    r = n(71393),
    a = n(864310),
    s = n(652215);
function l(e) {
    let t = (0, a.Z)(e),
        n = r.A.getGuild(e)?.premiumTier ?? s.TVA.NONE;
    return s.M2T[n] + t.available;
}
function o(e) {
    let t = (0, a.A)(e),
        n = (0, i.bG)([r.A], () => r.A.getGuild(e)?.premiumTier ?? s.TVA.NONE);
    return (
        ((0, i.bG)([r.A], () => r.A.getGuild(e)?.features.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? 0
            : s.M2T[n]) + t.available
    );
}
