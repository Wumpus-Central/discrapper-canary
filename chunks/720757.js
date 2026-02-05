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
                    [s, d] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(l, n, o), [n]),
                    _ = d?.variantId,
                    f = d?.trackedVariantId ?? _,
                    p = d?.revision,
                    h = d?.isOverride,
                    m = d?.exposureTrackingEnabled;
                return ((0, r.useEffect)(() => {
                    null != s &&
                        null != f &&
                        null != p &&
                        !1 === h &&
                        !0 === m &&
                        t.trackExperimentExposure(s, o, e.location, l, p, f, n);
                }, [n, s, f, p, e.location, h, m]),
                null == _)
                    ? c
                    : (u[_] ?? c);
            },
            getConfig: function (e) {
                let r = n(l, e),
                    [i, a] = t.getEvaluationAndAssignment(l, r, o),
                    s = a?.variantId,
                    d = a?.trackedVariantId ?? s,
                    _ = a?.revision,
                    f = a?.isOverride,
                    p = a?.exposureTrackingEnabled;
                return (null != i &&
                    null != d &&
                    null != _ &&
                    !1 === f &&
                    !0 === p &&
                    t.trackExperimentExposure(i, o, e.location, l, _, d, r),
                null == s)
                    ? c
                    : (u[s] ?? c);
            },
        }
    );
}
