n.d(t, {
    T: () => s,
});
var r = n(311907),
    i = n(498642);
n(424994);
var a = n(652215);

function s(e) {
    return (0, r.bG)([i.A], () => {
        if (null == e) return;
        let t = i.A.getMemberCount(e.id),
            n = e.features.has(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.features.has(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
            s = null != t && t < 1e4;
        return n || r ? n : s;
    });
}
