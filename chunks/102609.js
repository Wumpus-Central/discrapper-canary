"use strict";
n.d(t, { LQ: () => o, Ut: () => u, l5: () => c, t$: () => d, wh: () => l });
var r,
    i = n(73153),
    s = n(49463),
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
    let { id: t, title: n, description: r, buckets: i, commonTriggerPoint: o } = e;
    return (
        (0, s.N)({
            experimentId: t,
            experimentType: a.Vh.USER,
            title: n,
            description: r,
            buckets: i,
            commonTriggerPoint: o,
        }),
        { id: t }
    );
}
function u(e) {
    let { id: t, title: n, description: r, buckets: i, commonTriggerPoint: o } = e;
    return (
        (0, s.N)({
            experimentId: t,
            experimentType: a.Vh.GUILD,
            title: n,
            description: r,
            buckets: i,
            commonTriggerPoint: o,
        }),
        { id: t }
    );
}
var c = (((r = {}).LEGACY = "legacy"), (r.APEX = "apex"), r);
function d(e, t, n) {
    "legacy" === e
        ? i.h.dispatch({ type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: t, experimentBucket: null != n ? n : null })
        : "apex" === e &&
          (null == n
              ? i.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: t })
              : i.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: t, variantId: n }));
}
