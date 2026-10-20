r.d(t, { A: () => h, U: () => u });
var l,
    n = r(17928),
    o = r(73153),
    i = r(380610),
    u =
        (((l = {})[(l.NotResolved = 0)] = "NotResolved"),
        (l[(l.Resolving = 1)] = "Resolving"),
        (l[(l.Resolved = 2)] = "Resolved"),
        (l[(l.Invalid = 3)] = "Invalid"),
        l);
let a = 0,
    s = null,
    d = {};
class c extends n.Ay.Store {
    static displayName = "BuildOverrideStore";
    getCurrentBuildOverride() {
        return (
            0 === a &&
                ((a = 1),
                (0, i.bD)().then((e) => {
                    o.h.dispatch({ type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides: e });
                })),
            { state: a, overrides: s }
        );
    }
    getBuildOverride(e) {
        return (
            !(function (e) {
                if (e in d) return;
                let t = (0, i.qU)(e);
                if (null == t) {
                    d = { ...d, [e]: { url: e, state: 3 } };
                    return;
                }
                ((d = { ...d, [e]: { url: e, validatedURL: t.url, payload: String(t.payload), state: 1 } }),
                    (0, i.k9)(t.url).then((t) => {
                        o.h.dispatch({ type: "BUILD_OVERRIDE_RESOLVED", url: e, override: t });
                    }));
            })(e),
            d[e]
        );
    }
    getBuildOverrides() {
        return d;
    }
}
let h = new c(o.h, {
    BUILD_OVERRIDE_RESOLVED: function (e) {
        let { url: t, override: r } = e;
        d = { ...d, [t]: { ...d[t], state: null == r ? 3 : 2, override: r } };
    },
    CURRENT_BUILD_OVERRIDE_RESOLVED: function (e) {
        let { overrides: t } = e;
        ((a = 2), (s = t));
    },
});
