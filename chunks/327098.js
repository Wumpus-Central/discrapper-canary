n.d(e, { A: () => a });
var l = n(17928),
    r = n(933958),
    i = n(429913),
    o = n(574520);
function a(t) {
    let e = (0, l.bG)([o.A], () => o.A.getMatchingActivity(t)),
        [n, a] = (0, i.A)([e?.application_id, "application_id" in t.extra ? t.extra.application_id : void 0]);
    return {
        activity: e,
        embeddedActivity: (0, l.bG)([r.Ay], () => r.Ay.getEmbeddedActivityForUserId(t.author_id, n?.id)),
        anyMatchingApplication: n ?? a,
        activityApplication: n,
        fallbackApplication: a,
    };
}
