n.d(t, {
    A: () => l,
    G: () => o,
});
var r = n(311907),
    i = n(71393),
    a = n(864310),
    s = n(652215);

function o(e) {
    var t, n;
    let r = (0, a.Z)(e),
        o = null != (t = null == (n = i.A.getGuild(e)) ? void 0 : n.premiumTier) ? t : s.TVA.NONE;
    return s.M2T[o] + r.available;
}

function l(e) {
    let t = (0, a.A)(e),
        n = (0, r.bG)([i.A], () => {
            var t, n;
            return null != (t = null == (n = i.A.getGuild(e)) ? void 0 : n.premiumTier) ? t : s.TVA.NONE;
        });
    return (
        ((0, r.bG)([i.A], () => {
            var t;
            return (
                (null == (t = i.A.getGuild(e)) ? void 0 : t.features.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) ===
                !0
            );
        })
            ? 0
            : s.M2T[n]) + t.available
    );
}
