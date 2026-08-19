r.d(t, { A: () => v, U: () => s });
var l,
    n = r(17928),
    i = r(228366),
    a = r(380610),
    s =
        (((l = {})[(l.NotResolved = 0)] = "NotResolved"),
        (l[(l.Resolving = 1)] = "Resolving"),
        (l[(l.Resolved = 2)] = "Resolved"),
        (l[(l.Invalid = 3)] = "Invalid"),
        l);
let d = 0,
    o = null,
    u = {};
class c extends n.Ay.Store {
    static displayName = "BuildOverrideStore";
    getCurrentBuildOverride() {
        return (
            0 === d &&
                ((d = 1),
                (0, a.bD)().then((e) => {
                    i.h.dispatch({ type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides: e });
                })),
            { state: d, overrides: o }
        );
    }
    getBuildOverride(e) {
        return (
            !(function (e) {
                if (e in u) return;
                let t = (0, a.qU)(e);
                if (null == t) {
                    u = { ...u, [e]: { url: e, state: 3 } };
                    return;
                }
                (u = { ...u, [e]: { url: e, validatedURL: t.url, payload: String(t.payload), state: 1 } }),
                    (0, a.k9)(t.url).then((t) => {
                        i.h.dispatch({ type: "BUILD_OVERRIDE_RESOLVED", url: e, override: t });
                    });
            })(e),
            u[e]
        );
    }
    getBuildOverrides() {
        return u;
    }
}
let v = new c(i.h, {
    BUILD_OVERRIDE_RESOLVED: function (e) {
        let { url: t, override: r } = e;
        u = { ...u, [t]: { ...u[t], state: null == r ? 3 : 2, override: r } };
    },
    CURRENT_BUILD_OVERRIDE_RESOLVED: function (e) {
        let { overrides: t } = e;
        (d = 2), (o = t);
    },
});
