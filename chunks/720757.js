"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(311907);
function s(e, t, n, s) {
    let { name: a, kind: o, variations: l, defaultConfig: u } = e;
    return (
        t.registerExperiment(e),
        {
            definition: e,
            useConfig: function (e) {
                let n = s(o, e),
                    d = s("user", e),
                    [c, _] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(o, n, a, d), [n, d]),
                    f = _?.variantId,
                    E = _?.trackedVariantId ?? f,
                    h = _?.revision,
                    p = _?.isOverride,
                    m = _?.exposureTrackingEnabled,
                    g = _?.useAsEligibility;
                return ((0, r.useEffect)(() => {
                    null != c &&
                        null != E &&
                        null != h &&
                        !1 === p &&
                        !0 === m &&
                        !0 !== g &&
                        t.trackExperimentExposure(c, a, e.location, o, h, E, n);
                }, [n, c, E, h, e.location, p, m, g]),
                null == f || !0 === g)
                    ? u
                    : (l[f] ?? u);
            },
            getConfig: function (e) {
                let r = n(o, e),
                    i = "guild" === o ? n("user", { location: e.location }) : void 0,
                    [s, d] = t.getEvaluationAndAssignment(o, r, a, i),
                    c = d?.variantId,
                    _ = d?.trackedVariantId ?? c,
                    f = d?.revision,
                    E = d?.isOverride,
                    h = d?.exposureTrackingEnabled,
                    p = d?.useAsEligibility;
                return (null != s &&
                    null != _ &&
                    null != f &&
                    !1 === E &&
                    !0 === h &&
                    !0 !== p &&
                    t.trackExperimentExposure(s, a, e.location, o, f, _, r),
                null == c || !0 === p)
                    ? u
                    : (l[c] ?? u);
            },
        }
    );
}
