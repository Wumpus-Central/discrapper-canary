t.d(e, { E: () => s });
var n = t(442837),
    r = t(650774),
    l = t(206583),
    i = t(981631);
function s(A) {
    return (0, n.e7)([r.Z], () => {
        if (null == A) return;
        let e = r.Z.getMemberCount(A.id),
            t = A.features.has(i.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
            n = A.features.has(i.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
            s = null != e && e < l.k4;
        return t || n ? t : s;
    });
}
