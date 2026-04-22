"use strict";
n.d(t, { A: () => _, U: () => o });
var r,
    i = n(311907),
    s = n(73153),
    a = n(380610),
    o =
        (((r = {})[(r.NotResolved = 0)] = "NotResolved"),
        (r[(r.Resolving = 1)] = "Resolving"),
        (r[(r.Resolved = 2)] = "Resolved"),
        (r[(r.Invalid = 3)] = "Invalid"),
        r);
let l = 0,
    u = null,
    d = {};
class c extends i.Ay.Store {
    static displayName = "BuildOverrideStore";
    getCurrentBuildOverride() {
        return (
            0 === l &&
                ((l = 1),
                (0, a.bD)().then((e) => {
                    s.h.dispatch({ type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides: e });
                })),
            { state: l, overrides: u }
        );
    }
    getBuildOverride(e) {
        return (
            !(function (e) {
                if (e in d) return;
                let t = (0, a.qU)(e);
                if (null == t) {
                    d = { ...d, [e]: { url: e, state: 3 } };
                    return;
                }
                (d = { ...d, [e]: { url: e, validatedURL: t.url, payload: String(t.payload), state: 1 } }),
                    (0, a.k9)(t.url).then((t) => {
                        s.h.dispatch({ type: "BUILD_OVERRIDE_RESOLVED", url: e, override: t });
                    });
            })(e),
            d[e]
        );
    }
    getBuildOverrides() {
        return d;
    }
}
let _ = new c(s.h, {
    BUILD_OVERRIDE_RESOLVED: function (e) {
        let { url: t, override: n } = e;
        d = { ...d, [t]: { ...d[t], state: null == n ? 3 : 2, override: n } };
    },
    CURRENT_BUILD_OVERRIDE_RESOLVED: function (e) {
        let { overrides: t } = e;
        (l = 2), (u = t);
    },
});
