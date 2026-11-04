var i,
    r = n(73153),
    a = n(343446),
    s = n(688151),
    l = (((i = {}).LEGACY = "legacy"), (i.APEX = "apex"), i);
n.d(
    t,
    {},
    {
        LQ: function (e, t, n) {
            a.A.trackExposure({
                experimentId: e,
                descriptor: t,
                location: n?.location,
                location_stack: n?.analyticsLocations,
                fingerprint: n?.fingerprint,
                excluded: n?.excluded,
                exposureType: n?.exposureType,
            });
        },
        Ut: function (e) {
            let { id: t, title: n, description: i, buckets: r, commonTriggerPoint: l } = e;
            return (
                (0, a.N)({
                    experimentId: t,
                    experimentType: s.Vh.GUILD,
                    title: n,
                    description: i,
                    buckets: r,
                    commonTriggerPoint: l,
                }),
                { id: t }
            );
        },
        l5: l,
        t$: function (e, t, n) {
            switch (e) {
                case "legacy":
                    r.h.dispatch({
                        type: "EXPERIMENT_OVERRIDE_BUCKET",
                        experimentId: t,
                        experimentBucket: null != n ? n : null,
                    });
                    break;
                case "apex":
                    null == n
                        ? r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: t })
                        : r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: t, variantId: n });
            }
        },
        wh: function (e) {
            let { id: t, title: n, description: i, buckets: r, commonTriggerPoint: l } = e;
            return (
                (0, a.N)({
                    experimentId: t,
                    experimentType: s.Vh.USER,
                    title: n,
                    description: i,
                    buckets: r,
                    commonTriggerPoint: l,
                }),
                { id: t }
            );
        },
    },
);
