n.d(t, { A: () => a }), n(747238), n(65821), n(896048);
var r = n(64700),
    i = n(311907);
function a(e, t, n) {
    let a = e,
        { name: s, kind: o, variations: l, defaultConfig: c } = a;
    return (
        t.registerExperiment(a),
        {
            definition: a,
            useConfig: function (e) {
                var a;
                let u = n(o, e),
                    [d, f] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(o, u, s), [u]),
                    p = null == f ? void 0 : f.variantId,
                    _ = null != (a = null == f ? void 0 : f.trackedVariantId) ? a : p,
                    h = null == f ? void 0 : f.revision,
                    m = null == f ? void 0 : f.isOverride,
                    g = null == f ? void 0 : f.exposureTrackingEnabled;
                if (
                    ((0, r.useEffect)(() => {
                        null != d &&
                            null != _ &&
                            null != h &&
                            !1 === m &&
                            !0 === g &&
                            t.trackExperimentExposure(d, s, e.location, o, h, _, u);
                    }, [u, d, _, h, e.location, m, g]),
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
                let i = n(o, e),
                    [a, u] = t.getEvaluationAndAssignment(o, i, s),
                    d = null == u ? void 0 : u.variantId,
                    f = null != (r = null == u ? void 0 : u.trackedVariantId) ? r : d,
                    p = null == u ? void 0 : u.revision,
                    _ = null == u ? void 0 : u.isOverride,
                    h = null == u ? void 0 : u.exposureTrackingEnabled;
                if (
                    (null != a &&
                        null != f &&
                        null != p &&
                        !1 === _ &&
                        !0 === h &&
                        t.trackExperimentExposure(a, s, e.location, o, p, f, i),
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
