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
                    p = null == f ? void 0 : f.variantId,
                    _ = null != (a = null == f ? void 0 : f.trackedVariantId) ? a : p,
                    m = null == f ? void 0 : f.revision,
                    h = null == f ? void 0 : f.isOverride,
                    g = null == f ? void 0 : f.exposureTrackingEnabled;
                if (
                    ((0, r.useEffect)(() => {
                        null != d &&
                            null != _ &&
                            null != m &&
                            !1 === h &&
                            !0 === g &&
                            t.trackExperimentExposure(d, o, e.location, s, m, _);
                    }, [u, d, _, m, e.location, h, g]),
                    null == p)
                )
                    return c;
                {
                    let e = l[p];
                    return null != e ? e : c;
                }
            },
            getConfig: function (e) {
                var r;
                let i = n(s, e),
                    [a, u] = t.getEvaluationAndAssignment(s, i, o),
                    d = null == u ? void 0 : u.variantId,
                    f = null != (r = null == u ? void 0 : u.trackedVariantId) ? r : d,
                    p = null == u ? void 0 : u.revision,
                    _ = null == u ? void 0 : u.isOverride,
                    m = null == u ? void 0 : u.exposureTrackingEnabled;
                if (
                    (null != a &&
                        null != f &&
                        null != p &&
                        !1 === _ &&
                        !0 === m &&
                        t.trackExperimentExposure(a, o, e.location, s, p, f),
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
