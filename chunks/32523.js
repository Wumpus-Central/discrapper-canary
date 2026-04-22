"use strict";
n.d(t, { hI: () => d });
var r = n(64700),
    i = n(311907),
    s = n(949355),
    a = n(220478),
    o = n(102609),
    l = n(49463),
    u = n(688151);
function d() {
    let e = (0, i.cf)([l.A], () => l.A.getRegisteredExperiments()),
        t = (0, i.cf)([l.A], () => l.A.getAllExperimentOverrideDescriptors());
    return {
        experiments: (0, r.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, r] of Object.entries(e))
                        t[n] = {
                            system: o.l5.LEGACY,
                            kind: r.type === u.Vh.USER ? "user" : "guild",
                            name: n,
                            title: r.title,
                            variants: r.buckets.map((e, t) => ({
                                id: e.valueOf(),
                                label:
                                    "object" == typeof r.description
                                        ? r.description[t]
                                        : a.A.getExperimentBucketName(e),
                                shortLabel: a.A.getExperimentBucketName(e),
                                type:
                                    e === u.RE.CONTROL
                                        ? s.FZ.CONTROL
                                        : e === u.RE.NOT_ELIGIBLE
                                          ? s.FZ.UNSPECIFIED
                                          : s.FZ.TREATMENT,
                            })),
                        };
                    return t;
                })(e),
            [e],
        ),
        overridesInfo: (0, r.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, r] of Object.entries(e))
                        t[n] = { experimentId: n, variantId: r.bucket.valueOf(), originalDescriptor: r };
                    return t;
                })(t),
            [t],
        ),
    };
}
