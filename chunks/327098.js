"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(933958),
    s = n(429913),
    a = n(352139);
function o(e) {
    let t = (0, i.bG)([a.A], () => a.A.getMatchingActivity(e)),
        [n, o] = (0, s.A)([t?.application_id, "application_id" in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, i.bG)([r.Ay], () => r.Ay.getEmbeddedActivityForUserId(e.author_id, n?.id)),
        anyMatchingApplication: n ?? o,
        activityApplication: n,
        fallbackApplication: o,
    };
}
