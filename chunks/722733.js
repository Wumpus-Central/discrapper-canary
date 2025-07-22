(n.d(t, { Z: () => l }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(314897),
    o = n(823379),
    s = n(633289);
function l(e) {
    let t = e,
        { name: n, kind: a, variations: o, defaultConfig: l } = t;
    return (
        s.Z.registerExperiment(t),
        {
            definition: t,
            useConfig: function (e) {
                let t = c(a, e),
                    [u, d] = (0, i.Wu)([s.Z], () => s.Z.getEvaluationAndAssignment(a, t, n), [t]),
                    _ = null == d ? void 0 : d.variantId,
                    f = null == d ? void 0 : d.revision,
                    p = null == d ? void 0 : d.isOverride;
                if (
                    ((0, r.useEffect)(() => {
                        null != u && null != _ && null != f && !1 === p && s.Z.trackExperimentExposure(u, n, e.location, a, f, _);
                    }, [t, u, _, f, e.location, p]),
                    null == _)
                )
                    return l;
                {
                    let e = o[_];
                    return null != e ? e : l;
                }
            },
            getConfig: function (e) {
                let t = c(a, e),
                    [r, i] = s.Z.getEvaluationAndAssignment(a, t, n),
                    u = null == i ? void 0 : i.variantId,
                    d = null == i ? void 0 : i.revision,
                    _ = null == i ? void 0 : i.isOverride;
                if ((null != r && null != u && null != d && !1 === _ && s.Z.trackExperimentExposure(r, n, e.location, a, d, u), null == u)) return l;
                {
                    let e = o[u];
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
            return a.default.getId();
        default:
            (0, o.vE)(e);
    }
}
