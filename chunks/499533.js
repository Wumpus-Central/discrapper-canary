n.d(t, { Z: () => d }), n(388685), n(35282);
var r = n(392711),
    i = n.n(r),
    a = n(492435),
    o = n(353926),
    s = n(987338);
function l(e) {
    for (let t of e) {
        let e = o.Z.getUserExperimentDescriptor(t);
        if (null != e) return [t, e];
    }
    return null;
}
function c(e) {
    let t = l(e);
    if (null != t) {
        let [e, n] = t;
        return (0, a.W9)(e, n), n;
    }
}
function u(e, t) {
    try {
        let [n, r] = e.split("-");
        if (null == r) return !1;
        let i = r.slice(0, 2);
        return new Date("".concat(n, "-").concat(i, "-01")) > t;
    } catch (e) {
        return !1;
    }
}
let d = {
    getFirstEligibleUserExperiment: l,
    isInExperimentBucket: function (e, t) {
        return o.Z.getUserExperimentBucket(e) === t;
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
        return e === s.NZ.CONTROL ? "Control" : e === s.NZ.NOT_ELIGIBLE ? "Not Eligible" : "Treatment ".concat(e);
    },
    getRecentExperimentBuckets: function (e, t) {
        return Object.entries(e).reduce((e, n) => {
            let [r, i] = n;
            return u(r, t) && i > s.NZ.CONTROL && (e[r] = i), e;
        }, {});
    },
};
