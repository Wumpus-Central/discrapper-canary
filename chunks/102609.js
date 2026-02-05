"use strict";
n.d(t, { LQ: () => o, Ut: () => u, l5: () => c, t$: () => d, wh: () => l });
var r = n(73153),
    i = n(49463),
    a = n(688151);
let s = !1;
function o(e, t, n) {
    if (s) {
        let s = n?.location,
            o = n?.exposureType === a.vf.AUTO_FALLBACK,
            l = i.A.hasExperimentTrackedExposure(e, t, s, o);
        r.h.dispatch({
            type: "TRACK_TRIGGER",
            experimentId: e,
            descriptor: t,
            previouslyTracked: l,
            exposureType: n?.exposureType ?? "unknown",
            excluded: n?.excluded ?? !1,
            location: s ?? "unknown",
        });
    }
    i.A.trackExposure({
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
    let { id: t, title: n, description: r, buckets: s, commonTriggerPoint: o } = e;
    return (
        (0, i.N)({
            experimentId: t,
            experimentType: a.Vh.USER,
            title: n,
            description: r,
            buckets: s,
            commonTriggerPoint: o,
        }),
        { id: t }
    );
}
function u(e) {
    let { id: t, title: n, description: r, buckets: s, commonTriggerPoint: o } = e;
    return (
        (0, i.N)({
            experimentId: t,
            experimentType: a.Vh.GUILD,
            title: n,
            description: r,
            buckets: s,
            commonTriggerPoint: o,
        }),
        { id: t }
    );
}
var c = (function (e) {
    return (e.LEGACY = "legacy"), (e.APEX = "apex"), e;
})({});
function d(e, t, n) {
    "legacy" === e
        ? r.h.dispatch({ type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: t, experimentBucket: null != n ? n : null })
        : "apex" === e &&
          (null == n
              ? r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: t })
              : r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: t, variantId: n }));
}
