(n.d(t, { Z: () => l }), n(388685));
var r = n(73800),
    i = n(442837),
    o = n(314897),
    a = n(823379),
    s = n(633289);
function l(e) {
    let t = e,
        { name: n, kind: o, variations: a, defaultConfig: l } = t;
    return (
        s.Z.registerExperiment(t),
        {
            definition: t,
            useConfig: function (e) {
                let t = c(o, e),
                    [u, d] = (0, i.Wu)([s.Z], () => s.Z.getEvaluationAndAssignment(o, t, n), [t]),
                    f = null == d ? void 0 : d.variantId,
                    _ = null == d ? void 0 : d.revision,
                    p = null == d ? void 0 : d.isOverride;
                if (
                    ((0, r.useEffect)(() => {
                        null != u && null != f && null != _ && !1 === p && s.Z.trackExperimentExposure(u, n, e.location, o, _, f);
                    }, [t, u, f, _, e.location, p]),
                    null == f)
                )
                    return l;
                {
                    let e = a[f];
                    return null != e ? e : l;
                }
            },
            getConfig: function (e) {
                let t = c(o, e),
                    [r, i] = s.Z.getEvaluationAndAssignment(o, t, n),
                    u = null == i ? void 0 : i.variantId,
                    d = null == i ? void 0 : i.revision,
                    f = null == i ? void 0 : i.isOverride;
                if ((null != r && null != u && null != d && !1 === f && s.Z.trackExperimentExposure(r, n, e.location, o, d, u), null == u)) return l;
                {
                    let e = a[u];
                    return null != e ? e : l;
                }
            }
        }
    );
}
function c(e, t) {
    switch (e) {
        case 'guild':
            return t.guildId;
        case 'user':
            return o.default.getId();
        default:
            (0, a.vE)(e);
    }
}
