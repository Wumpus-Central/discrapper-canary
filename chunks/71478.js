n.d(t, { A: () => a });
var r = n(311907),
    l = n(71393),
    i = n(652215),
    s = n(333354),
    o = n(985018);
function a(e) {
    return (0, r.bG)([l.A], () => l.A.getGuild(e)?.features.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
        ? { shouldShow: !0, text: o.intl.string(s.default.l9n4QZ) }
        : { shouldShow: !1, text: "" };
}
