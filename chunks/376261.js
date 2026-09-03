n.d(t, { T: () => r });
var l = n(17928),
    i = n(498642);
n(424994);
var s = n(652215);
function r(e) {
    return (0, l.bG)([i.A], () => {
        if (null == e) return;
        let t = i.A.getMemberCount(e.id),
            n = e.features.has(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
            l = e.features.has(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER);
        return n || l ? n : null != t && t < 1e4;
    });
}
