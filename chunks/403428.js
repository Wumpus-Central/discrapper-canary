n.d(t, { Z: () => a }), n(35282), n(415506), n(388685);
var r = n(473749),
    i = n(442837);
function a(e, t, n) {
    let a = e,
        { name: o, kind: s, variations: l, defaultConfig: c } = a;
    return (
        t.registerExperiment(a),
        {
            definition: a,
            useConfig: function (e) {
                var a;
                let u = n(s, e),
                    [d, f] = (0, i.Wu)([t], () => t.getEvaluationAndAssignment(s, u, o), [u]),
                    _ = null == f ? void 0 : f.variantId,
                    p = null != (a = null == f ? void 0 : f.trackedVariantId) ? a : _,
                    h = null == f ? void 0 : f.revision,
                    m = null == f ? void 0 : f.isOverride,
                    g = null == f ? void 0 : f.exposureTrackingEnabled;
                if (
                    ((0, r.useEffect)(() => {
                        null != d &&
                            null != p &&
                            null != h &&
                            !1 === m &&
                            !0 === g &&
                            t.trackExperimentExposure(d, o, e.location, s, h, p);
                    }, [u, d, p, h, e.location, m, g]),
                    null == _)
                )
                    return c;
                {
                    let e = l[_];
                    return null != e ? e : c;
                }
            },
            getConfig: function (e) {
                var r;
                let i = n(s, e),
                    [a, u] = t.getEvaluationAndAssignment(s, i, o),
                    d = null == u ? void 0 : u.variantId,
                    f = null != (r = null == u ? void 0 : u.trackedVariantId) ? r : d,
                    _ = null == u ? void 0 : u.revision,
                    p = null == u ? void 0 : u.isOverride,
                    h = null == u ? void 0 : u.exposureTrackingEnabled;
                if (
                    (null != a &&
                        null != f &&
                        null != _ &&
                        !1 === p &&
                        !0 === h &&
                        t.trackExperimentExposure(a, o, e.location, s, _, f),
                    null == d)
                )
                    return c;
                {
                    let e = l[d];
                    return null != e ? e : c;
                }
            },
        }
    );
}
