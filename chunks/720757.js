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
                    c = s("user", e),
                    [d, _] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(o, n, a, c), [n, c]),
                    f = _?.variantId,
                    p = _?.trackedVariantId ?? f,
                    h = _?.revision,
                    E = _?.isOverride,
                    m = _?.exposureTrackingEnabled,
                    g = _?.useAsEligibility;
                return ((0, r.useEffect)(() => {
                    null != d &&
                        null != p &&
                        null != h &&
                        !1 === E &&
                        !0 === m &&
                        !0 !== g &&
                        t.trackExperimentExposure(d, a, e.location, o, h, p, n);
                }, [n, d, p, h, e.location, E, m, g]),
                null == f || !0 === g)
                    ? u
                    : (l[f] ?? u);
            },
            getConfig: function (e) {
                let r = n(o, e),
                    i = "guild" === o ? n("user", { location: e.location }) : void 0,
                    [s, c] = t.getEvaluationAndAssignment(o, r, a, i),
                    d = c?.variantId,
                    _ = c?.trackedVariantId ?? d,
                    f = c?.revision,
                    p = c?.isOverride,
                    h = c?.exposureTrackingEnabled,
                    E = c?.useAsEligibility;
                return (null != s &&
                    null != _ &&
                    null != f &&
                    !1 === p &&
                    !0 === h &&
                    !0 !== E &&
                    t.trackExperimentExposure(s, a, e.location, o, f, _, r),
                null == d || !0 === E)
                    ? u
                    : (l[d] ?? u);
            },
        }
    );
}
