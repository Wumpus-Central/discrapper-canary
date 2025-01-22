r.d(n, {
    W9: function () {
        return l;
    },
    Xz: function () {
        return u;
    },
    gK: function () {
        return c;
    },
    rX: function () {
        return d;
    }
});
var i = r(570140),
    a = r(353926),
    o = r(987338);
let s = !1;
function l(e, n, r) {
    if (s) {
        var l, u;
        let s = null == r ? void 0 : r.location,
            c = (null == r ? void 0 : r.exposureType) === o.a0.AUTO_FALLBACK,
            d = a.Z.hasExperimentTrackedExposure(e, n, s, c);
        i.Z.dispatch({
            type: 'TRACK_TRIGGER',
            experimentId: e,
            descriptor: n,
            previouslyTracked: d,
            exposureType: null !== (l = null == r ? void 0 : r.exposureType) && void 0 !== l ? l : 'unknown',
            excluded: null !== (u = null == r ? void 0 : r.excluded) && void 0 !== u && u,
            location: null != s ? s : 'unknown'
        });
    }
    a.Z.trackExposure({
        experimentId: e,
        descriptor: n,
        location: null == r ? void 0 : r.location,
        location_stack: null == r ? void 0 : r.analyticsLocations,
        fingerprint: null == r ? void 0 : r.fingerprint,
        excluded: null == r ? void 0 : r.excluded,
        exposureType: null == r ? void 0 : r.exposureType
    });
}
function u(e) {
    let { id: n, title: r, description: i, buckets: s, commonTriggerPoint: l } = e;
    return (
        (0, a.V)({
            experimentId: n,
            experimentType: o.xY.USER,
            title: r,
            description: i,
            buckets: s,
            commonTriggerPoint: l
        }),
        { id: n }
    );
}
function c(e) {
    let { id: n, title: r, description: i, buckets: s, commonTriggerPoint: l } = e;
    return (
        (0, a.V)({
            experimentId: n,
            experimentType: o.xY.GUILD,
            title: r,
            description: i,
            buckets: s,
            commonTriggerPoint: l
        }),
        { id: n }
    );
}
function d(e, n) {
    i.Z.dispatch({
        type: 'EXPERIMENT_OVERRIDE_BUCKET',
        experimentId: e,
        experimentBucket: n
    });
}
