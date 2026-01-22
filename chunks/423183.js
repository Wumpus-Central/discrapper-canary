n.d(t, { A: () => c });
var r = n(311907),
    i = n(469993),
    l = n(260509),
    a = n(71393),
    s = n(287809),
    o = n(652215);
function c(e) {
    var t;
    let n = (0, r.bG)([a.A], () => a.A.getGuild(e)),
        c = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        u = null != n && (0, l.bM)(n, c),
        d = (0, i.oS)();
    return (
        u &&
        null != (t = null == n ? void 0 : n.features.has(o.GuildFeatures.COMMUNITY)) &&
        t &&
        d &&
        !(
            (null == n ? void 0 : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE)) ||
            (null == n ? void 0 : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ||
            (null == n ? void 0 : n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_DISABLED))
        )
    );
}
