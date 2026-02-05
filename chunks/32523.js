"use strict";
n.d(t, { hI: () => f });
var r = n(64700),
    i = n(311907),
    a = n(949355),
    s = n(220478),
    o = n(102609),
    l = n(49463),
    u = n(688151);
function c(e) {
    return e === u.RE.CONTROL ? a.FZ.CONTROL : e === u.RE.NOT_ELIGIBLE ? a.FZ.UNSPECIFIED : a.FZ.TREATMENT;
}
function d(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            system: o.l5.LEGACY,
            kind: r.type === u.Vh.USER ? "user" : "guild",
            name: n,
            title: r.title,
            variants: r.buckets.map((e, t) => ({
                id: e.valueOf(),
                label: "object" == typeof r.description ? r.description[t] : s.A.getExperimentBucketName(e),
                shortLabel: s.A.getExperimentBucketName(e),
                type: c(e),
            })),
        };
    return t;
}
function _(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = { experimentId: n, variantId: r.bucket.valueOf(), originalDescriptor: r };
    return t;
}
function f() {
    let e = (0, i.cf)([l.A], () => l.A.getRegisteredExperiments()),
        t = (0, i.cf)([l.A], () => l.A.getAllExperimentOverrideDescriptors());
    return { experiments: (0, r.useMemo)(() => d(e), [e]), overridesInfo: (0, r.useMemo)(() => _(t), [t]) };
}
