(n.d(t, { s: () => d }), n(388685), n(953529));
var r = n(73800),
    i = n(442837),
    a = n(588486),
    o = n(499533),
    s = n(492435),
    l = n(353926),
    c = n(987338);
function u(e) {
    return e === c.NZ.CONTROL ? a.k3.CONTROL : e === c.NZ.NOT_ELIGIBLE ? a.k3.UNSPECIFIED : a.k3.TREATMENT;
}
function d() {
    let e = (0, i.cj)([l.Z], () => l.Z.getRegisteredExperiments()),
        t = (0, i.cj)([l.Z], () => l.Z.getAllExperimentOverrideDescriptors());
    return {
        experiments: (0, r.useMemo)(() => {
            let t = {};
            for (let [n, r] of Object.entries(e))
                t[n] = {
                    system: s.I.LEGACY,
                    kind: r.type === c.xY.USER ? 'user' : 'guild',
                    name: n,
                    title: r.title,
                    variants: r.buckets.map((e, t) => ({
                        id: e.valueOf(),
                        label: 'object' == typeof r.description ? r.description[t] : o.Z.getExperimentBucketName(e),
                        shortLabel: o.Z.getExperimentBucketName(e),
                        type: u(e)
                    }))
                };
            return t;
        }, [e]),
        overridesInfo: (0, r.useMemo)(() => {
            let e = {};
            for (let [n, r] of Object.entries(t))
                e[n] = {
                    experimentId: n,
                    variantId: r.bucket.valueOf(),
                    originalDescriptor: r
                };
            return e;
        }, [t])
    };
}
