n.d(t, { A: () => d });
var i = n(311907),
    r = n(469993),
    a = n(260509),
    l = n(71393),
    s = n(287809),
    o = n(652215);
function d(e) {
    let t = (0, i.bG)([l.A], () => l.A.getGuild(e)),
        n = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        d = null != t && (0, a.bM)(t, n),
        u = (0, r.oS)();
    return (
        d &&
        (t?.features.has(o.GuildFeatures.COMMUNITY) ?? !1) &&
        u &&
        !(
            t?.features.has(o.GuildFeatures.CREATOR_MONETIZABLE) ||
            t?.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
            t?.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
        )
    );
}
