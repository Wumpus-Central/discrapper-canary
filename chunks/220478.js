"use strict";
n.d(t, { A: () => d });
var r = n(735438),
    i = n.n(r),
    a = n(102609),
    s = n(49463),
    o = n(688151);
function l(e) {
    for (let t of e) {
        let e = s.A.getUserExperimentDescriptor(t);
        if (null != e) return [t, e];
    }
    return null;
}
function u(e) {
    let t = l(e);
    if (null != t) {
        let [e, n] = t;
        return (0, a.LQ)(e, n), n;
    }
}
function c(e, t) {
    try {
        let [n, r] = e.split("-");
        if (null == r) return !1;
        let i = r.slice(0, 2);
        return new Date(`${n}-${i}-01`) > t;
    } catch (e) {
        return !1;
    }
}
let d = {
    getFirstEligibleUserExperiment: l,
    isInExperimentBucket: function (e, t) {
        return s.A.getUserExperimentBucket(e) === t;
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
    trackExposureToFirstEligibleUserExperiment: u,
    getExperimentBucketName: function (e) {
        let t;
        return e === o.RE.CONTROL ? "Control" : e === o.RE.NOT_ELIGIBLE ? "Not Eligible" : `Treatment ${e}`;
    },
    getRecentExperimentBuckets: function (e, t) {
        return Object.entries(e).reduce((e, n) => {
            let [r, i] = n;
            return c(r, t) && i > o.RE.CONTROL && (e[r] = i), e;
        }, {});
    },
};
