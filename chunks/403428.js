n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(442837);
function o(e, t, n) {
    let o = e,
        { name: a, kind: s, variations: l, defaultConfig: c } = o;
    return (
        t.registerExperiment(o),
        {
            definition: o,
            useConfig: function (e) {
                let o = n(s, e),
                    [u, d] = (0, i.Wu)([t], () => t.getEvaluationAndAssignment(s, o, a), [o]),
                    f = null == d ? void 0 : d.variantId,
                    _ = null == d ? void 0 : d.revision,
                    p = null == d ? void 0 : d.isOverride;
                if (
                    ((0, r.useEffect)(() => {
                        null != u &&
                            null != f &&
                            null != _ &&
                            !1 === p &&
                            t.trackExperimentExposure(u, a, e.location, s, _, f);
                    }, [o, u, f, _, e.location, p]),
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
                    [i, o] = t.getEvaluationAndAssignment(s, r, a),
                    u = null == o ? void 0 : o.variantId,
                    d = null == o ? void 0 : o.revision,
                    f = null == o ? void 0 : o.isOverride;
                if (
                    (null != i &&
                        null != u &&
                        null != d &&
                        !1 === f &&
                        t.trackExperimentExposure(i, a, e.location, s, d, u),
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
