"use strict";
n.d(t, { A: () => _, U: () => o });
var i,
    r = n(17928),
    s = n(228366),
    a = n(380610),
    o =
        (((i = {})[(i.NotResolved = 0)] = "NotResolved"),
        (i[(i.Resolving = 1)] = "Resolving"),
        (i[(i.Resolved = 2)] = "Resolved"),
        (i[(i.Invalid = 3)] = "Invalid"),
        i);
let l = 0,
    u = null,
    c = {};
class d extends r.Ay.Store {
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
                if (e in c) return;
                let t = (0, a.qU)(e);
                if (null == t) {
                    c = { ...c, [e]: { url: e, state: 3 } };
                    return;
                }
                (c = { ...c, [e]: { url: e, validatedURL: t.url, payload: String(t.payload), state: 1 } }),
                    (0, a.k9)(t.url).then((t) => {
                        s.h.dispatch({ type: "BUILD_OVERRIDE_RESOLVED", url: e, override: t });
                    });
            })(e),
            c[e]
        );
    }
    getBuildOverrides() {
        return c;
    }
}
let _ = new d(s.h, {
    BUILD_OVERRIDE_RESOLVED: function (e) {
        let { url: t, override: n } = e;
        c = { ...c, [t]: { ...c[t], state: null == n ? 3 : 2, override: n } };
    },
    CURRENT_BUILD_OVERRIDE_RESOLVED: function (e) {
        let { overrides: t } = e;
        (l = 2), (u = t);
    },
});
