n.d(t, { A: () => d });
var i = n(435558),
    r = n.n(i),
    a = n(102609),
    s = n(736056),
    l = n(688151);
function o(e) {
    for (let t of e) {
        let e = s.A.getUserExperimentDescriptor(t);
        if (null != e) return [t, e];
    }
    return null;
}
let d = {
    getFirstEligibleUserExperiment: o,
    isInExperimentBucket: function (e, t) {
        return s.A.getUserExperimentBucket(e) === t;
    },
    experimentDescriptorEquals: function (e, t) {
        if ((null == e && null == t) || e === t) return !0;
        if ((null == e && null != t) || (null != e && null == t)) return !1;
        if (null != e && null != t) {
            if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) return !1;
            if (e.type === l.Vh.USER && t.type === l.Vh.USER) return r().isEqual(e.context, t.context);
        }
        return !0;
    },
    trackExposureToFirstEligibleUserExperiment: function (e) {
        let t = o(e);
        if (null != t) {
            let [e, n] = t;
            return (0, a.LQ)(e, n), n;
        }
    },
    getExperimentBucketName: function (e) {
        return e === l.RE.CONTROL ? "Control" : e === l.RE.NOT_ELIGIBLE ? "Not Eligible" : `Treatment ${e}`;
    },
    getRecentExperimentBuckets: function (e, t) {
        return Object.entries(e).reduce((e, n) => {
            let [i, r] = n;
            return (
                (function (e, t) {
                    try {
                        let [n, i] = e.split("-");
                        if (null == i) return !1;
                        let r = i.slice(0, 2);
                        return new Date(`${n}-${r}-01`) > t;
                    } catch (e) {
                        return !1;
                    }
                })(i, t) &&
                    r > l.RE.CONTROL &&
                    (e[i] = r),
                e
            );
        }, {});
    },
};
