n.d(t, { Z: () => u }), n(388685);
var r = n(392711),
    i = n.n(r),
    o = n(492435),
    a = n(353926),
    s = n(987338);
function l(e) {
    for (let t of e) {
        let e = a.Z.getUserExperimentDescriptor(t);
        if (null != e) return [t, e];
    }
    return null;
}
function c(e) {
    let t = l(e);
    if (null != t) {
        let [e, n] = t;
        return (0, o.W9)(e, n), n;
    }
}
let u = {
    getFirstEligibleUserExperiment: l,
    isInExperimentBucket: function (e, t) {
        return a.Z.getUserExperimentBucket(e) === t;
    },
    experimentDescriptorEquals: function (e, t) {
        if ((null == e && null == t) || e === t) return !0;
        if ((null == e && null != t) || (null != e && null == t)) return !1;
        if (null != e && null != t) {
            if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) return !1;
            if (e.type === s.xY.USER && t.type === s.xY.USER) return i().isEqual(e.context, t.context);
        }
        return !0;
    },
    trackExposureToFirstEligibleUserExperiment: c,
    getExperimentBucketName: function (e) {
        let t;
        return e === s.NZ.CONTROL ? 'Control' : e === s.NZ.NOT_ELIGIBLE ? 'Not Eligible' : 'Treatment '.concat(e);
    }
};
