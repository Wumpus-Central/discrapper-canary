"use strict";
n.d(t, { cT: () => c, Ay: () => u });
var i = n(64700),
    r = n(17928),
    s = n(80703),
    a = n(495544),
    o = n(403362),
    l = n(710195);
function u(e) {
    return (function (e, t, n, s) {
        let { name: a, kind: o, variations: l, defaultConfig: u } = e;
        return (
            t.registerExperiment(e),
            {
                definition: e,
                useConfig: function (e) {
                    let n = s(o, e),
                        c = s("user", e),
                        [d, _] = (0, r.yK)([t], () => t.getEvaluationAndAssignment(o, n, a, c), [n, c]),
                        f = _?.variantId,
                        h = _?.trackedVariantId ?? f,
                        p = _?.revision,
                        E = _?.isOverride,
                        m = _?.exposureTrackingEnabled,
                        g = _?.useAsEligibility;
                    return ((0, i.useEffect)(() => {
                        null != d &&
                            null != h &&
                            null != p &&
                            !1 === E &&
                            !0 === m &&
                            !0 !== g &&
                            t.trackExperimentExposure(d, a, e.location, o, p, h, n);
                    }, [n, d, h, p, e.location, E, m, g]),
                    null == f || !0 === g)
                        ? u
                        : (l[f] ?? u);
                },
                getConfig: function (e) {
                    let i = n(o, e),
                        r = "guild" === o ? n("user", { location: e.location }) : void 0,
                        [s, c] = t.getEvaluationAndAssignment(o, i, a, r),
                        d = c?.variantId,
                        _ = c?.trackedVariantId ?? d,
                        f = c?.revision,
                        h = c?.isOverride,
                        p = c?.exposureTrackingEnabled,
                        E = c?.useAsEligibility;
                    return (null != s &&
                        null != _ &&
                        null != f &&
                        !1 === h &&
                        !0 === p &&
                        !0 !== E &&
                        t.trackExperimentExposure(s, a, e.location, o, f, _, i),
                    null == d || !0 === E)
                        ? u
                        : (l[d] ?? u);
                },
            }
        );
    })(e, l.A, c, d);
}
function c(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return a.default.getId();
        case "installation":
            return (0, s.v)(a.default.getInstallationForTracking()) ?? "";
        default:
            (0, o.xb)(e);
    }
}
function d(e, t) {
    let [n, i] = (0, r.yK)([a.default], () => [a.default.getId(), a.default.getInstallationForTracking()]);
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return n;
        case "installation":
            return (0, s.v)(i) ?? "";
        default:
            (0, o.xb)(e);
    }
}
