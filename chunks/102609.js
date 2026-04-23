"use strict";
n.d(t, { LQ: () => o, Ut: () => d, l5: () => _, t$: () => u, wh: () => l });
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
function d(e) {
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
var _ = (((i = {}).LEGACY = "legacy"), (i.APEX = "apex"), i);
function u(e, t, n) {
    "legacy" === e
        ? r.h.dispatch({ type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: t, experimentBucket: null != n ? n : null })
        : "apex" === e &&
          (null == n
              ? r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: t })
              : r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: t, variantId: n }));
}
