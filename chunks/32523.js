var i = n(582128),
    r = n(855986),
    a = n(637450),
    s = n(220478),
    l = n(102609),
    o = n(343446),
    d = n(688151);
n.d(
    t,
    {},
    {
        hI: function () {
            let e = (0, r.cf)([o.A], () => o.A.getRegisteredExperiments()),
                t = (0, r.cf)([o.A], () => o.A.getAllExperimentOverrideDescriptors());
            return {
                experiments: (0, i.useMemo)(
                    () =>
                        (function (e) {
                            let t = {};
                            for (let [n, i] of Object.entries(e))
                                t[n] = {
                                    system: l.l5.LEGACY,
                                    kind: i.type === d.Vh.USER ? "user" : "guild",
                                    name: n,
                                    title: i.title,
                                    variants: i.buckets.map((e, t) => ({
                                        id: e.valueOf(),
                                        label:
                                            "object" == typeof i.description
                                                ? i.description[t]
                                                : s.A.getExperimentBucketName(e),
                                        shortLabel: s.A.getExperimentBucketName(e),
                                        type:
                                            e === d.RE.CONTROL
                                                ? a.FZ.CONTROL
                                                : e === d.RE.NOT_ELIGIBLE
                                                  ? a.FZ.UNSPECIFIED
                                                  : a.FZ.TREATMENT,
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
        },
    },
);
