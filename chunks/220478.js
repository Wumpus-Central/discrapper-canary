"use strict";
n.d(t, { A: () => u });
var r = n(735438),
    i = n.n(r),
    s = n(102609),
    a = n(49463),
    o = n(688151);
function l(e) {
    for (let t of e) {
        let e = a.A.getUserExperimentDescriptor(t);
        if (null != e) return [t, e];
    }
    return null;
}
let u = {
    getFirstEligibleUserExperiment: l,
    isInExperimentBucket: function (e, t) {
        return a.A.getUserExperimentBucket(e) === t;
    },
    experimentDescriptorEquals: function (e, t) {
        if ((null == e && null == t) || e === t) return !0;
        if ((null == e && null != t) || (null != e && null == t)) return !1;
        if (null != e && null != t) {
            if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) return !1;
            if (e.type === o.Vh.USER && t.type === o.Vh.USER) return i().isEqual(e.context, t.context);
        }
        return !0;
    },
    trackExposureToFirstEligibleUserExperiment: function (e) {
        let t = l(e);
        if (null != t) {
            let [e, n] = t;
            return (0, s.LQ)(e, n), n;
        }
    },
    getExperimentBucketName: function (e) {
        return e === o.RE.CONTROL ? "Control" : e === o.RE.NOT_ELIGIBLE ? "Not Eligible" : `Treatment ${e}`;
    },
    getRecentExperimentBuckets: function (e, t) {
        return Object.entries(e).reduce((e, n) => {
            let [r, i] = n;
            return (
                (function (e, t) {
                    try {
                        let [n, r] = e.split("-");
                        if (null == r) return !1;
                        let i = r.slice(0, 2);
                        return new Date(`${n}-${i}-01`) > t;
                    } catch (e) {
                        return !1;
                    }
                })(r, t) &&
                    i > o.RE.CONTROL &&
                    (e[r] = i),
                e
            );
        }, {});
    },
};
