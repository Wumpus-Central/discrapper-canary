n.d(t, { sI: () => _ }), n(388685), n(953529);
var r = n(473749),
    i = n(442837),
    a = n(588486),
    o = n(499533),
    s = n(492435),
    l = n(353926),
    c = n(987338);
function u(e) {
    return e === c.NZ.CONTROL ? a.qK.CONTROL : e === c.NZ.NOT_ELIGIBLE ? a.qK.UNSPECIFIED : a.qK.TREATMENT;
}
function d(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            system: s.I.LEGACY,
            kind: r.type === c.xY.USER ? "user" : "guild",
            name: n,
            title: r.title,
            variants: r.buckets.map((e, t) => ({
                id: e.valueOf(),
                label: "object" == typeof r.description ? r.description[t] : o.Z.getExperimentBucketName(e),
                shortLabel: o.Z.getExperimentBucketName(e),
                type: u(e),
            })),
        };
    return t;
}
function f(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            experimentId: n,
            variantId: r.bucket.valueOf(),
            originalDescriptor: r,
        };
    return t;
}
function _() {
    let e = (0, i.cj)([l.Z], () => l.Z.getRegisteredExperiments()),
        t = (0, i.cj)([l.Z], () => l.Z.getAllExperimentOverrideDescriptors());
    return {
        experiments: (0, r.useMemo)(() => d(e), [e]),
        overridesInfo: (0, r.useMemo)(() => f(t), [t]),
    };
}
