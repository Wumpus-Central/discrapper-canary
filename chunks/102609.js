"use strict";
n.d(t, { LQ: () => o, Ut: () => u, l5: () => c, t$: () => d, wh: () => l });
var i,
    r = n(228366),
    s = n(736056),
    a = n(688151);
function o(e, t, n) {
    s.A.trackExposure({
        experimentId: e,
        descriptor: t,
        location: n?.location,
        location_stack: n?.analyticsLocations,
        fingerprint: n?.fingerprint,
        excluded: n?.excluded,
        exposureType: n?.exposureType,
    });
}
function l(e) {
    let { id: t, title: n, description: i, buckets: r, commonTriggerPoint: o } = e;
    return (
        (0, s.N)({
            experimentId: t,
            experimentType: a.Vh.USER,
            title: n,
            description: i,
            buckets: r,
            commonTriggerPoint: o,
        }),
        { id: t }
    );
}
function u(e) {
    let { id: t, title: n, description: i, buckets: r, commonTriggerPoint: o } = e;
    return (
        (0, s.N)({
            experimentId: t,
            experimentType: a.Vh.GUILD,
            title: n,
            description: i,
            buckets: r,
            commonTriggerPoint: o,
        }),
        { id: t }
    );
}
var c = (((i = {}).LEGACY = "legacy"), (i.APEX = "apex"), i);
function d(e, t, n) {
    switch (e) {
        case "legacy":
            r.h.dispatch({
                type: "EXPERIMENT_OVERRIDE_BUCKET",
                experimentId: t,
                experimentBucket: null != n ? n : null,
            });
            break;
        case "apex":
            null == n
                ? r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: t })
                : r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: t, variantId: n });
    }
}
