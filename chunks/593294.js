n.d(t, { Z: () => s }), n(47120);
var r = n(442837),
    i = n(317381),
    o = n(835473),
    a = n(719247);
function s(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.getMatchingActivity(e)),
        [n, s] = (0, o.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, r.e7)([i.ZP], () => i.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id)),
        anyMatchingApplication: null != n ? n : s,
        activityApplication: n,
        fallbackApplication: s
    };
}
