n.d(t, {
    W9: () => o,
    Xz: () => l,
    gK: () => u,
    rX: () => c
});
var i = n(570140),
    r = n(353926),
    a = n(987338);
let s = !1;
function o(e, t, n) {
    if (s) {
        var o, l;
        let s = null == n ? void 0 : n.location,
            u = (null == n ? void 0 : n.exposureType) === a.a0.AUTO_FALLBACK,
            c = r.Z.hasExperimentTrackedExposure(e, t, s, u);
        i.Z.dispatch({
            type: 'TRACK_TRIGGER',
            experimentId: e,
            descriptor: t,
            previouslyTracked: c,
            exposureType: null !== (o = null == n ? void 0 : n.exposureType) && void 0 !== o ? o : 'unknown',
            excluded: null !== (l = null == n ? void 0 : n.excluded) && void 0 !== l && l,
            location: null != s ? s : 'unknown'
        });
    }
    r.Z.trackExposure({
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
    let { id: t, title: n, description: i, buckets: s, commonTriggerPoint: o } = e;
    return (
        (0, r.V)({
            experimentId: t,
            experimentType: a.xY.USER,
            title: n,
            description: i,
            buckets: s,
            commonTriggerPoint: o
        }),
        { id: t }
    );
}
function u(e) {
    let { id: t, title: n, description: i, buckets: s, commonTriggerPoint: o } = e;
    return (
        (0, r.V)({
            experimentId: t,
            experimentType: a.xY.GUILD,
            title: n,
            description: i,
            buckets: s,
            commonTriggerPoint: o
        }),
        { id: t }
    );
}
function c(e, t) {
    i.Z.dispatch({
        type: 'EXPERIMENT_OVERRIDE_BUCKET',
        experimentId: e,
        experimentBucket: t
    });
}
