n.d(t, { T: () => a });
var r = n(311907),
    l = n(498642);
n(424994);
var i = n(652215);
function a(e) {
    return (0, r.bG)([l.A], () => {
        if (null == e) return;
        let t = l.A.getMemberCount(e.id),
            n = e.features.has(i.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.features.has(i.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER);
        return n || r ? n : null != t && t < 1e4;
    });
}
