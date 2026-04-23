n.d(t, { A: () => o });
var r = n(311907),
    i = n(71393),
    l = n(652215),
    s = n(853513),
    a = n(985018);
function o(e) {
    return (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
        ? { shouldShow: !0, text: a.intl.string(s.default.l9n4QZ) }
        : { shouldShow: !1, text: "" };
}
