n.d(t, { E: () => i });
var r = n(442837),
    l = n(650774),
    a = n(206583),
    s = n(981631);
function i(e) {
    return (0, r.e7)([l.Z], () => {
        if (null == e) return;
        let t = l.Z.getMemberCount(e.id),
            n = e.hasFeature(s.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.hasFeature(s.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
            i = null != t && t < a.k4;
        return n || r ? n : i;
    });
}
