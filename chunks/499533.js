n.d(t, { Z: () => c }), n(47120);
var i = n(392711),
    s = n.n(i),
    r = n(492435),
    l = n(353926),
    a = n(987338);
function o(e) {
    for (let t of e) {
        let e = l.Z.getUserExperimentDescriptor(t);
        if (null != e) return [t, e];
    }
    return null;
}
let c = {
    getFirstEligibleUserExperiment: o,
    isInExperimentBucket: function (e, t) {
        return l.Z.getUserExperimentBucket(e) === t;
    },
    experimentDescriptorEquals: function (e, t) {
        if ((null == e && null == t) || e === t) return !0;
        if ((null == e && null != t) || (null != e && null == t)) return !1;
        if (null != e && null != t) {
            if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) return !1;
            if (e.type === a.xY.USER && t.type === a.xY.USER) return s().isEqual(e.context, t.context);
        }
        return !0;
    },
    trackExposureToFirstEligibleUserExperiment: function (e) {
        let t = o(e);
        if (null != t) {
            let [e, n] = t;
            return (0, r.W9)(e, n), n;
        }
    },
    getExperimentBucketName: function (e) {
        let t;
        return e === a.NZ.CONTROL ? 'Control' : e === a.NZ.NOT_ELIGIBLE ? 'Not Eligible' : 'Treatment '.concat(e);
    }
};
