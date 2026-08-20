t.d(r, { A: () => h, U: () => a });
var o,
    i = t(17928),
    l = t(228366),
    n = t(380610),
    a =
        (((o = {})[(o.NotResolved = 0)] = "NotResolved"),
        (o[(o.Resolving = 1)] = "Resolving"),
        (o[(o.Resolved = 2)] = "Resolved"),
        (o[(o.Invalid = 3)] = "Invalid"),
        o);
let u = 0,
    d = null,
    s = {};
class c extends i.Ay.Store {
    static displayName = "BuildOverrideStore";
    getCurrentBuildOverride() {
        return (
            0 === u &&
                ((u = 1),
                (0, n.bD)().then((e) => {
                    l.h.dispatch({ type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides: e });
                })),
            { state: u, overrides: d }
        );
    }
    getBuildOverride(e) {
        return (
            !(function (e) {
                if (e in s) return;
                let r = (0, n.qU)(e);
                if (null == r) {
                    s = { ...s, [e]: { url: e, state: 3 } };
                    return;
                }
                (s = { ...s, [e]: { url: e, validatedURL: r.url, payload: String(r.payload), state: 1 } }),
                    (0, n.k9)(r.url).then((r) => {
                        l.h.dispatch({ type: "BUILD_OVERRIDE_RESOLVED", url: e, override: r });
                    });
            })(e),
            s[e]
        );
    }
    getBuildOverrides() {
        return s;
    }
}
let h = new c(l.h, {
    BUILD_OVERRIDE_RESOLVED: function (e) {
        let { url: r, override: t } = e;
        s = { ...s, [r]: { ...s[r], state: null == t ? 3 : 2, override: t } };
    },
    CURRENT_BUILD_OVERRIDE_RESOLVED: function (e) {
        let { overrides: r } = e;
        (u = 2), (d = r);
    },
});
