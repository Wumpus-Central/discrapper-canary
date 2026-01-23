n.d(t, {
    A: () => a,
}),
    n(747238),
    n(65821),
    n(896048);
var r = n(64700),
    i = n(311907);

function a(e, t, n, a) {
    let s = e,
        { name: o, kind: l, variations: c, defaultConfig: u } = s;
    return (
        t.registerExperiment(s),
        {
            definition: s,
            useConfig: function (e) {
                var n;
                let s = a(l, e),
                    [d, f] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(l, s, o), [s]),
                    p = null == f ? void 0 : f.variantId,
                    _ = null != (n = null == f ? void 0 : f.trackedVariantId) ? n : p,
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
                            t.trackExperimentExposure(d, o, e.location, l, h, _, s);
                    }, [s, d, _, h, e.location, m, g]),
                    null == p)
                )
                    return u;
                {
                    let e = c[p];
                    return null != e ? e : u;
                }
            },
            getConfig: function (e) {
                var r;
                let i = n(l, e),
                    [a, s] = t.getEvaluationAndAssignment(l, i, o),
                    d = null == s ? void 0 : s.variantId,
                    f = null != (r = null == s ? void 0 : s.trackedVariantId) ? r : d,
                    p = null == s ? void 0 : s.revision,
                    _ = null == s ? void 0 : s.isOverride,
                    h = null == s ? void 0 : s.exposureTrackingEnabled;
                if (
                    (null != a &&
                        null != f &&
                        null != p &&
                        !1 === _ &&
                        !0 === h &&
                        t.trackExperimentExposure(a, o, e.location, l, p, f, i),
                    null == d)
                )
                    return u;
                {
                    let e = c[d];
                    return null != e ? e : u;
                }
            },
        }
    );
}
