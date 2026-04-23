"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(17928);
function s(e, t, n, s) {
    let { name: a, kind: o, variations: l, defaultConfig: d } = e;
    return (
        t.registerExperiment(e),
        {
            definition: e,
            useConfig: function (e) {
                let n = s(o, e),
                    _ = s("user", e),
                    [u, c] = (0, r.yK)([t], () => t.getEvaluationAndAssignment(o, n, a, _), [n, _]),
                    E = c?.variantId,
                    h = c?.trackedVariantId ?? E,
                    m = c?.revision,
                    f = c?.isOverride,
                    g = c?.exposureTrackingEnabled,
                    p = c?.useAsEligibility;
                return ((0, i.useEffect)(() => {
                    null != u &&
                        null != h &&
                        null != m &&
                        !1 === f &&
                        !0 === g &&
                        !0 !== p &&
                        t.trackExperimentExposure(u, a, e.location, o, m, h, n);
                }, [n, u, h, m, e.location, f, g, p]),
                null == E || !0 === p)
                    ? d
                    : (l[E] ?? d);
            },
            getConfig: function (e) {
                let i = n(o, e),
                    r = "guild" === o ? n("user", { location: e.location }) : void 0,
                    [s, _] = t.getEvaluationAndAssignment(o, i, a, r),
                    u = _?.variantId,
                    c = _?.trackedVariantId ?? u,
                    E = _?.revision,
                    h = _?.isOverride,
                    m = _?.exposureTrackingEnabled,
                    f = _?.useAsEligibility;
                return (null != s &&
                    null != c &&
                    null != E &&
                    !1 === h &&
                    !0 === m &&
                    !0 !== f &&
                    t.trackExperimentExposure(s, a, e.location, o, E, c, i),
                null == u || !0 === f)
                    ? d
                    : (l[u] ?? d);
            },
        }
    );
}
