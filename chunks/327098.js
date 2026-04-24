"use strict";
n.d(t, { A: () => r });
var l = n(17928),
    i = n(933958),
    s = n(429913),
    a = n(352139);
function r(e) {
    let t = (0, l.bG)([a.A], () => a.A.getMatchingActivity(e)),
        [n, r] = (0, s.A)([t?.application_id, "application_id" in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, l.bG)([i.Ay], () => i.Ay.getEmbeddedActivityForUserId(e.author_id, n?.id)),
        anyMatchingApplication: n ?? r,
        activityApplication: n,
        fallbackApplication: r,
    };
}
