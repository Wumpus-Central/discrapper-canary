"use strict";
n.d(t, { hI: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(785401),
    a = n(220478),
    o = n(102609),
    l = n(736056),
    d = n(688151);
function _() {
    let e = (0, r.cf)([l.A], () => l.A.getRegisteredExperiments()),
        t = (0, r.cf)([l.A], () => l.A.getAllExperimentOverrideDescriptors());
    return {
        experiments: (0, i.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, i] of Object.entries(e))
                        t[n] = {
                            system: o.l5.LEGACY,
                            kind: i.type === d.Vh.USER ? "user" : "guild",
                            name: n,
                            title: i.title,
                            variants: i.buckets.map((e, t) => ({
                                id: e.valueOf(),
                                label:
                                    "object" == typeof i.description
                                        ? i.description[t]
                                        : a.A.getExperimentBucketName(e),
                                shortLabel: a.A.getExperimentBucketName(e),
                                type:
                                    e === d.RE.CONTROL
                                        ? s.FZ.CONTROL
                                        : e === d.RE.NOT_ELIGIBLE
                                          ? s.FZ.UNSPECIFIED
                                          : s.FZ.TREATMENT,
                            })),
                        };
                    return t;
                })(e),
            [e],
        ),
        overridesInfo: (0, i.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, i] of Object.entries(e))
                        t[n] = { experimentId: n, variantId: i.bucket.valueOf(), originalDescriptor: i };
                    return t;
                })(t),
            [t],
        ),
    };
}
