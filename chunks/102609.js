n.d(t, {
    LQ: () => o,
    Ut: () => c,
    l5: () => u,
    t$: () => d,
    wh: () => l,
}),
    n(228524);
var r = n(73153),
    i = n(49463),
    a = n(688151);
let s = !1;
function o(e, t, n) {
    if (s) {
        var o, l;
        let s = null == n ? void 0 : n.location,
            c = (null == n ? void 0 : n.exposureType) === a.vf.AUTO_FALLBACK,
            u = i.A.hasExperimentTrackedExposure(e, t, s, c);
        r.h.dispatch({
            type: "TRACK_TRIGGER",
            experimentId: e,
            descriptor: t,
            previouslyTracked: u,
            exposureType: null != (o = null == n ? void 0 : n.exposureType) ? o : "unknown",
            excluded: null != (l = null == n ? void 0 : n.excluded) && l,
            location: null != s ? s : "unknown",
        });
    }
    i.A.trackExposure({
        experimentId: e,
        descriptor: t,
        location: null == n ? void 0 : n.location,
        location_stack: null == n ? void 0 : n.analyticsLocations,
        fingerprint: null == n ? void 0 : n.fingerprint,
        excluded: null == n ? void 0 : n.excluded,
        exposureType: null == n ? void 0 : n.exposureType,
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
function c(e) {
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
var u = (function (e) {
    return (e.LEGACY = "legacy"), (e.APEX = "apex"), e;
})({});
function d(e, t, n) {
    "legacy" === e
        ? r.h.dispatch({
              type: "EXPERIMENT_OVERRIDE_BUCKET",
              experimentId: t,
              experimentBucket: null != n ? n : null,
          })
        : "apex" === e &&
          (null == n
              ? r.h.dispatch({
                    type: "APEX_EXPERIMENT_OVERRIDE_DELETE",
                    experimentName: t,
                })
              : r.h.dispatch({
                    type: "APEX_EXPERIMENT_OVERRIDE_CREATE",
                    experimentName: t,
                    variantId: n,
                }));
}
