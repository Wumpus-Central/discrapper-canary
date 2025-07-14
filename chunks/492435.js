(n.d(t, {
    I: () => u,
    W9: () => s,
    Xz: () => l,
    gK: () => c,
    rX: () => d
}),
    n(953529));
var r = n(570140),
    i = n(353926),
    a = n(987338);
let o = !1;
function s(e, t, n) {
    if (o) {
        var s, l;
        let o = null == n ? void 0 : n.location,
            c = (null == n ? void 0 : n.exposureType) === a.a0.AUTO_FALLBACK,
            u = i.Z.hasExperimentTrackedExposure(e, t, o, c);
        r.Z.dispatch({
            type: 'TRACK_TRIGGER',
            experimentId: e,
            descriptor: t,
            previouslyTracked: u,
            exposureType: null != (s = null == n ? void 0 : n.exposureType) ? s : 'unknown',
            excluded: null != (l = null == n ? void 0 : n.excluded) && l,
            location: null != o ? o : 'unknown'
        });
    }
    i.Z.trackExposure({
        experimentId: e,
        descriptor: t,
        location: null == n ? void 0 : n.location,
        location_stack: null == n ? void 0 : n.analyticsLocations,
        fingerprint: null == n ? void 0 : n.fingerprint,
        excluded: null == n ? void 0 : n.excluded,
        exposureType: null == n ? void 0 : n.exposureType
    });
}
function l(e) {
    let { id: t, title: n, description: r, buckets: o, commonTriggerPoint: s } = e;
    return (
        (0, i.V)({
            experimentId: t,
            experimentType: a.xY.USER,
            title: n,
            description: r,
            buckets: o,
            commonTriggerPoint: s
        }),
        { id: t }
    );
}
function c(e) {
    let { id: t, title: n, description: r, buckets: o, commonTriggerPoint: s } = e;
    return (
        (0, i.V)({
            experimentId: t,
            experimentType: a.xY.GUILD,
            title: n,
            description: r,
            buckets: o,
            commonTriggerPoint: s
        }),
        { id: t }
    );
}
var u = (function (e) {
    return ((e.LEGACY = 'legacy'), (e.APEX = 'apex'), e);
})({});
function d(e, t, n) {
    'legacy' === e
        ? r.Z.dispatch({
              type: 'EXPERIMENT_OVERRIDE_BUCKET',
              experimentId: t,
              experimentBucket: null != n ? n : null
          })
        : 'apex' === e &&
          (null == n
              ? r.Z.dispatch({
                    type: 'APEX_EXPERIMENT_OVERRIDE_DELETE',
                    experimentName: t
                })
              : r.Z.dispatch({
                    type: 'APEX_EXPERIMENT_OVERRIDE_CREATE',
                    experimentName: t,
                    variantId: n
                }));
}
