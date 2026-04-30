n.d(t, { T: () => s });
var i = n(17928),
    a = n(498642);
n(424994);
var r = n(652215);
function s(e) {
    return (0, i.bG)([a.A], () => {
        if (null == e) return;
        let t = a.A.getMemberCount(e.id),
            n = e.features.has(r.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
            i = e.features.has(r.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER);
        return n || i ? n : null != t && t < 1e4;
    });
}
