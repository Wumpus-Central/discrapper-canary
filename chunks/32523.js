n.d(t, {
    hI: () => p,
}),
    n(896048),
    n(228524);
var r = n(64700),
    i = n(311907),
    a = n(949355),
    s = n(220478),
    o = n(102609),
    l = n(49463),
    c = n(688151);

function u(e) {
    return e === c.RE.CONTROL ? a.FZ.CONTROL : e === c.RE.NOT_ELIGIBLE ? a.FZ.UNSPECIFIED : a.FZ.TREATMENT;
}

function d(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            system: o.l5.LEGACY,
            kind: r.type === c.Vh.USER ? "user" : "guild",
            name: n,
            title: r.title,
            variants: r.buckets.map((e, t) => ({
                id: e.valueOf(),
                label: "object" == typeof r.description ? r.description[t] : s.A.getExperimentBucketName(e),
                shortLabel: s.A.getExperimentBucketName(e),
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

function p() {
    let e = (0, i.cf)([l.A], () => l.A.getRegisteredExperiments()),
        t = (0, i.cf)([l.A], () => l.A.getAllExperimentOverrideDescriptors());
    return {
        experiments: (0, r.useMemo)(() => d(e), [e]),
        overridesInfo: (0, r.useMemo)(() => f(t), [t]),
    };
}
