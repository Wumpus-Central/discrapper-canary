"use strict";
n.d(t, { A: () => a });
var l = n(17928),
    i = n(933958),
    s = n(429913),
    r = n(574520);
function a(e) {
    let t = (0, l.bG)([r.A], () => r.A.getMatchingActivity(e)),
        [n, a] = (0, s.A)([t?.application_id, "application_id" in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, l.bG)([i.Ay], () => i.Ay.getEmbeddedActivityForUserId(e.author_id, n?.id)),
        anyMatchingApplication: n ?? a,
        activityApplication: n,
        fallbackApplication: a,
    };
}
