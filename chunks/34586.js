n.d(t, { E: () => o });
var r = n(442837),
    l = n(650774),
    s = n(206583),
    a = n(981631);
function o(e) {
    return (0, r.e7)([l.Z], () => {
        if (null == e) return;
        let t = l.Z.getMemberCount(e.id),
            n = e.hasFeature(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.hasFeature(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
            o = null != t && t < s.k4;
        return n || r ? n : o;
    });
}
