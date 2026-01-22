n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(311907),
    i = n(933958),
    a = n(429913),
    s = n(574520);

function o(e) {
    let t = (0, r.bG)([s.A], () => s.A.getMatchingActivity(e)),
        [n, o] = (0, a.A)([
            null == t ? void 0 : t.application_id,
            "application_id" in e.extra ? e.extra.application_id : void 0,
        ]);
    return {
        activity: t,
        embeddedActivity: (0, r.bG)([i.Ay], () =>
            i.Ay.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id),
        ),
        anyMatchingApplication: null != n ? n : o,
        activityApplication: n,
        fallbackApplication: o,
    };
}
