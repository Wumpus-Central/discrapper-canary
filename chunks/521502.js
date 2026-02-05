"use strict";
n.d(t, { A: () => h, U: () => s });
var r = n(311907),
    i = n(73153),
    a = n(380610),
    s = (function (e) {
        return (
            (e[(e.NotResolved = 0)] = "NotResolved"),
            (e[(e.Resolving = 1)] = "Resolving"),
            (e[(e.Resolved = 2)] = "Resolved"),
            (e[(e.Invalid = 3)] = "Invalid"),
            e
        );
    })({});
let o = 0,
    l = null,
    u = {};
function c() {
    0 === o &&
        ((o = 1),
        (0, a.bD)().then((e) => {
            i.h.dispatch({ type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides: e });
        }));
}
function d(e) {
    let { overrides: t } = e;
    (o = 2), (l = t);
}
function _(e) {
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
}
function f(e) {
    let { url: t, override: n } = e,
        r = null == n ? 3 : 2;
    u = { ...u, [t]: { ...u[t], state: r, override: n } };
}
class p extends r.Ay.Store {
    static displayName = "BuildOverrideStore";
    getCurrentBuildOverride() {
        return c(), { state: o, overrides: l };
    }
    getBuildOverride(e) {
        return _(e), u[e];
    }
    getBuildOverrides() {
        return u;
    }
}
let h = new p(i.h, { BUILD_OVERRIDE_RESOLVED: f, CURRENT_BUILD_OVERRIDE_RESOLVED: d });
