n.d(t, {
    E: function () {
        return a;
    }
});
var r = n(442837),
    l = n(650774),
    i = n(206583),
    s = n(981631);
function a(e) {
    return (0, r.e7)([l.Z], () => {
        if (null == e) return;
        let t = l.Z.getMemberCount(e.id),
            n = e.hasFeature(s.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
            r = e.hasFeature(s.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
            a = null != t && t < i.k4;
        return n || r ? n : a;
    });
}
