(n.d(t, { Z: () => c }), n(388685));
var r = n(442837),
    i = n(317381),
    a = n(835473),
    o = n(158776),
    s = n(719247),
    l = n(567493);
function c(e) {
    let t = (0, r.e7)([s.Z, o.Z], () => ((0, l.KF)(e) ? (0, l.hQ)(e, o.Z) : s.Z.getMatchingActivity(e))),
        [n, c] = (0, a.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, r.e7)([i.ZP], () => i.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id)),
        anyMatchingApplication: null != n ? n : c,
        activityApplication: n,
        fallbackApplication: c
    };
}
