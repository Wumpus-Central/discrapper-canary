(n.d(t, { Z: () => l }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(314897),
    o = n(823379),
    s = n(633289);
function l(e) {
    let t = e,
        { name: n, kind: a, variations: o, defaultConfig: l } = t,
        u = s.Z.getHash(n);
    return (
        s.Z.registerExperiment(t),
        {
            definition: t,
            useConfig: function (e) {
                let t = c(a, e),
                    [d, f] = (0, i.Wu)([s.Z], () => s.Z.getEvaluationAndAssignment(a, t, u), [t]),
                    _ = null == f ? void 0 : f.variantId,
                    p = null == f ? void 0 : f.revision,
                    h = null == f ? void 0 : f.isOverride;
                if (
                    ((0, r.useEffect)(() => {
                        null != d && null != _ && null != p && !1 === h && s.Z.trackExperimentExposure(d, n, e.location, a, p, _);
                    }, [t, d, _, p, e.location, h]),
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
                    [r, i] = s.Z.getEvaluationAndAssignment(a, t, u),
                    d = null == i ? void 0 : i.variantId,
                    f = null == i ? void 0 : i.revision,
                    _ = null == i ? void 0 : i.isOverride;
                if ((null != r && null != d && null != f && !1 === _ && s.Z.trackExperimentExposure(r, n, e.location, a, f, d), null == d)) return l;
                {
                    let e = o[d];
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
