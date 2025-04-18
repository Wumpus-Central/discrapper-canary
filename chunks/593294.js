n.d(t, { Z: () => s }), n(388685);
var r = n(442837),
    i = n(317381),
    a = n(835473),
    o = n(719247);
function s(e) {
    let t = (0, r.e7)([o.Z], () => o.Z.getMatchingActivity(e)),
        [n, s] = (0, a.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, r.e7)([i.ZP], () => i.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id)),
        anyMatchingApplication: null != n ? n : s,
        activityApplication: n,
        fallbackApplication: s
    };
}
