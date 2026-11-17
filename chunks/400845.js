n.d(t, { Ay: () => u });
var i = n(582128),
    r = n(855986);
let a = new (n(611599).Vy)("ApexExperiment");
var s = n(80703),
    l = n(46653),
    o = n(403362),
    d = n(340344),
    c = n(319771);
function u(e) {
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
                              return (a.error(`Failed to parse dynamic config for experiment ${o}`, e), null);
                          }
                      })(e))),
                  _);
        }
        return {
            definition: e,
            useConfig: function (e, n) {
                let a = s(d, e),
                    l = s("user", e),
                    [c, _] = (0, r.yK)([t], () => t.getConfigEvaluationAndAssignment(d, a, o, l), [a, l]),
                    A = _?.variantId,
                    f = _?.trackedVariantId ?? A,
                    h = _?.revision,
                    I = _?.isOverride,
                    p = _?.exposureTrackingEnabled,
                    m = _?.useAsEligibility,
                    g = E(_),
                    T = null == g,
                    S = n?.autoTrackExposure !== !1;
                return ((0, i.useEffect)(() => {
                    (T || !0 === m || t.onConfigApplied(d, a, o),
                        S &&
                            null != c &&
                            null != f &&
                            null != h &&
                            !1 === I &&
                            !0 === p &&
                            !0 !== m &&
                            !T &&
                            t.trackExperimentExposure(c, o, e.location, d, h, f, a));
                }, [S, a, c, f, h, e.location, I, p, m, T]),
                null == A || !0 === m || null == g)
                    ? u
                    : g;
            },
            getConfig: function (e, i) {
                let r = n(d, e),
                    a = "guild" === d ? n("user", { location: e.location }) : void 0,
                    [s, l] = t.getConfigEvaluationAndAssignment(d, r, o, a),
                    c = l?.variantId,
                    _ = l?.trackedVariantId ?? c,
                    A = l?.revision,
                    f = l?.isOverride,
                    h = l?.exposureTrackingEnabled,
                    I = l?.useAsEligibility,
                    p = E(l);
                return (null != p && !0 !== I && t.onConfigApplied(d, r, o),
                i?.autoTrackExposure !== !1 &&
                    null != s &&
                    null != _ &&
                    null != A &&
                    !1 === f &&
                    !0 === h &&
                    !0 !== I &&
                    null != p &&
                    t.trackExperimentExposure(s, o, e.location, d, A, _, r),
                null == c || !0 === I || null == p)
                    ? u
                    : p;
            },
        };
    })(e, d.A, c.c, _);
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
