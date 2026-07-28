"use strict";
n.d(t, { Ay: () => c });
var i = n(64700),
    r = n(17928);
let a = new (n(118356).Vy)("ApexExperiment");
var s = n(80703),
    l = n(280450),
    o = n(403362),
    d = n(710195);
function c(e) {
    return (function (e, t, n, s) {
        let l,
            { name: o, kind: d, variations: c, defaultConfig: u } = e;
        t.registerExperiment(e);
        let _ = null;
        function E(e) {
            return null == e
                ? null
                : (e !== l &&
                      ((l = e),
                      (_ = (function (e) {
                          let t = c[e.variantId] ?? u;
                          if ("function" != typeof t) return t;
                          if (null == e.config) return u;
                          try {
                              return t(e.config);
                          } catch (e) {
                              return a.error(`Failed to parse dynamic config for experiment ${o}`, e), null;
                          }
                      })(e))),
                  _);
        }
        return {
            definition: e,
            useConfig: function (e) {
                let n = s(d, e),
                    a = s("user", e),
                    [l, c] = (0, r.yK)([t], () => t.getEvaluationAndAssignment(d, n, o, a), [n, a]),
                    _ = c?.variantId,
                    A = c?.trackedVariantId ?? _,
                    h = c?.revision,
                    I = c?.isOverride,
                    f = c?.exposureTrackingEnabled,
                    p = c?.useAsEligibility,
                    T = E(c),
                    m = null == T;
                return ((0, i.useEffect)(() => {
                    null == l ||
                        null == A ||
                        null == h ||
                        !1 !== I ||
                        !0 !== f ||
                        !0 === p ||
                        m ||
                        t.trackExperimentExposure(l, o, e.location, d, h, A, n);
                }, [n, l, A, h, e.location, I, f, p, m]),
                null == _ || !0 === p || null == T)
                    ? u
                    : T;
            },
            getConfig: function (e) {
                let i = n(d, e),
                    r = "guild" === d ? n("user", { location: e.location }) : void 0,
                    [a, s] = t.getEvaluationAndAssignment(d, i, o, r),
                    l = s?.variantId,
                    c = s?.trackedVariantId ?? l,
                    _ = s?.revision,
                    A = s?.isOverride,
                    h = s?.exposureTrackingEnabled,
                    I = s?.useAsEligibility,
                    f = E(s);
                return (null != a &&
                    null != c &&
                    null != _ &&
                    !1 === A &&
                    !0 === h &&
                    !0 !== I &&
                    null != f &&
                    t.trackExperimentExposure(a, o, e.location, d, _, c, i),
                null == l || !0 === I || null == f)
                    ? u
                    : f;
            },
        };
    })(e, d.A, u, _);
}
function u(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return l.default.getId();
        case "installation":
            return (0, s.v)(l.default.getInstallationForTracking()) ?? "";
        default:
            (0, o.xb)(e);
    }
}
function _(e, t) {
    let [n, i] = (0, r.yK)([l.default], () => [l.default.getId(), l.default.getInstallationForTracking()]);
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
