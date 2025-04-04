n.d(t, {
    W9: () => s,
    Xz: () => l,
    gK: () => c,
    rX: () => u
}),
    n(266796);
var r = n(570140),
    i = n(353926),
    o = n(987338);
let a = !1;
function s(e, t, n) {
    if (a) {
        var s, l;
        let a = null == n ? void 0 : n.location,
            c = (null == n ? void 0 : n.exposureType) === o.a0.AUTO_FALLBACK,
            u = i.Z.hasExperimentTrackedExposure(e, t, a, c);
        r.Z.dispatch({
            type: 'TRACK_TRIGGER',
            experimentId: e,
            descriptor: t,
            previouslyTracked: u,
            exposureType: null != (s = null == n ? void 0 : n.exposureType) ? s : 'unknown',
            excluded: null != (l = null == n ? void 0 : n.excluded) && l,
            location: null != a ? a : 'unknown'
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
    let { id: t, title: n, description: r, buckets: a, commonTriggerPoint: s } = e;
    return (
        (0, i.V)({
            experimentId: t,
            experimentType: o.xY.USER,
            title: n,
            description: r,
            buckets: a,
            commonTriggerPoint: s
        }),
        { id: t }
    );
}
function c(e) {
    let { id: t, title: n, description: r, buckets: a, commonTriggerPoint: s } = e;
    return (
        (0, i.V)({
            experimentId: t,
            experimentType: o.xY.GUILD,
            title: n,
            description: r,
            buckets: a,
            commonTriggerPoint: s
        }),
        { id: t }
    );
}
function u(e, t) {
    r.Z.dispatch({
        type: 'EXPERIMENT_OVERRIDE_BUCKET',
        experimentId: e,
        experimentBucket: t
    });
}
