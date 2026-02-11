"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(311907);
function a(e, t, n, a) {
    let s = e,
        { name: o, kind: l, variations: u, defaultConfig: c } = s;
    return (
        t.registerExperiment(s),
        {
            definition: s,
            useConfig: function (e) {
                let n = a(l, e),
                    s = a("user", e),
                    [d, _] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(l, n, o, s), [n, s]),
                    f = _?.variantId,
                    h = _?.trackedVariantId ?? f,
                    p = _?.revision,
                    g = _?.isOverride,
                    E = _?.exposureTrackingEnabled,
                    A = _?.useAsEligibility;
                return ((0, r.useEffect)(() => {
                    null != d &&
                        null != h &&
                        null != p &&
                        !1 === g &&
                        !0 === E &&
                        !0 !== A &&
                        t.trackExperimentExposure(d, o, e.location, l, p, h, n);
                }, [n, d, h, p, e.location, g, E, A]),
                null == f || !0 === A)
                    ? c
                    : (u[f] ?? c);
            },
            getConfig: function (e) {
                let r = n(l, e),
                    i = "guild" === l ? n("user", { location: e.location }) : void 0,
                    [a, s] = t.getEvaluationAndAssignment(l, r, o, i),
                    d = s?.variantId,
                    _ = s?.trackedVariantId ?? d,
                    f = s?.revision,
                    h = s?.isOverride,
                    p = s?.exposureTrackingEnabled,
                    g = s?.useAsEligibility;
                return (null != a &&
                    null != _ &&
                    null != f &&
                    !1 === h &&
                    !0 === p &&
                    !0 !== g &&
                    t.trackExperimentExposure(a, o, e.location, l, f, _, r),
                null == d || !0 === g)
                    ? c
                    : (u[d] ?? c);
            },
        }
    );
}
