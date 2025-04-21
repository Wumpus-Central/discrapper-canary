n.d(t, { E: () => a });
var r = n(442837),
    l = n(650774),
    s = n(206583),
    i = n(981631);
function a(e) {
    return (0, r.e7)([l.Z], () => {
        if (null == e) return;
        let t = l.Z.getMemberCount(e.id),
            n = e.hasFeature(i.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.hasFeature(i.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
            a = null != t && t < s.k4;
        return n || r ? n : a;
    });
}
