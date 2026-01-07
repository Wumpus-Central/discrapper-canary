n.d(t, { E: () => s });
var r = n(442837),
    i = n(650774),
    a = n(206583),
    o = n(981631);
function s(e) {
    return (0, r.e7)([i.Z], () => {
        if (null == e) return;
        let t = i.Z.getMemberCount(e.id),
            n = e.features.has(o.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.features.has(o.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
            s = n || r,
            l = null != t && t < a.k4;
        return s ? n : l;
    });
}
