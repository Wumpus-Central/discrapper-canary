n.d(t, { Z: () => a }), n(388685);
var r = n(73800),
    i = n(442837);
function a(e, t, n) {
    let a = e,
        { name: o, kind: s, variations: l, defaultConfig: c } = a;
    return (
        t.registerExperiment(a),
        {
            definition: a,
            useConfig: function (e) {
                let a = n(s, e),
                    [u, d] = (0, i.Wu)([t], () => t.getEvaluationAndAssignment(s, a, o), [a]),
                    f = null == d ? void 0 : d.variantId,
                    _ = null == d ? void 0 : d.revision,
                    p = null == d ? void 0 : d.isOverride;
                if (
                    ((0, r.useEffect)(() => {
                        null != u &&
                            null != f &&
                            null != _ &&
                            !1 === p &&
                            t.trackExperimentExposure(u, o, e.location, s, _, f);
                    }, [a, u, f, _, e.location, p]),
                    null == f)
                )
                    return c;
                {
                    let e = l[f];
                    return null != e ? e : c;
                }
            },
            getConfig: function (e) {
                let r = n(s, e),
                    [i, a] = t.getEvaluationAndAssignment(s, r, o),
                    u = null == a ? void 0 : a.variantId,
                    d = null == a ? void 0 : a.revision,
                    f = null == a ? void 0 : a.isOverride;
                if (
                    (null != i &&
                        null != u &&
                        null != d &&
                        !1 === f &&
                        t.trackExperimentExposure(i, o, e.location, s, d, u),
                    null == u)
                )
                    return c;
                {
                    let e = l[u];
                    return null != e ? e : c;
                }
            },
        }
    );
}
