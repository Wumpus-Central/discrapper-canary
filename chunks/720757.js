"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(17928);
function s(e, t, n, s) {
    let { name: a, kind: o, variations: l, defaultConfig: _ } = e;
    return (
        t.registerExperiment(e),
        {
            definition: e,
            useConfig: function (e) {
                let n = s(o, e),
                    d = s("user", e),
                    [u, c] = (0, r.yK)([t], () => t.getEvaluationAndAssignment(o, n, a, d), [n, d]),
                    E = c?.variantId,
                    h = c?.trackedVariantId ?? E,
                    m = c?.revision,
                    f = c?.isOverride,
                    g = c?.exposureTrackingEnabled,
                    A = c?.useAsEligibility;
                return ((0, i.useEffect)(() => {
                    null != u &&
                        null != h &&
                        null != m &&
                        !1 === f &&
                        !0 === g &&
                        !0 !== A &&
                        t.trackExperimentExposure(u, a, e.location, o, m, h, n);
                }, [n, u, h, m, e.location, f, g, A]),
                null == E || !0 === A)
                    ? _
                    : (l[E] ?? _);
            },
            getConfig: function (e) {
                let i = n(o, e),
                    r = "guild" === o ? n("user", { location: e.location }) : void 0,
                    [s, d] = t.getEvaluationAndAssignment(o, i, a, r),
                    u = d?.variantId,
                    c = d?.trackedVariantId ?? u,
                    E = d?.revision,
                    h = d?.isOverride,
                    m = d?.exposureTrackingEnabled,
                    f = d?.useAsEligibility;
                return (null != s &&
                    null != c &&
                    null != E &&
                    !1 === h &&
                    !0 === m &&
                    !0 !== f &&
                    t.trackExperimentExposure(s, a, e.location, o, E, c, i),
                null == u || !0 === f)
                    ? _
                    : (l[u] ?? _);
            },
        }
    );
}
