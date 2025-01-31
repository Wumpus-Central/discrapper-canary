n.d(t, { Z: () => o }), n(47120);
var i = n(442837),
    r = n(317381),
    a = n(835473),
    s = n(719247);
function o(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getMatchingActivity(e)),
        [n, o] = (0, a.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, i.e7)([r.ZP], () => r.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id)),
        anyMatchingApplication: null != n ? n : o,
        activityApplication: n,
        fallbackApplication: o
    };
}
