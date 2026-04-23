"use strict";
n.d(t, { H: () => s, R: () => a });
var r = n(506774);
let i = "recentBuildOverrides";
function s() {
    return (r.w.get(i) ?? []).filter((e) => null == e.exp || e.exp > Date.now());
}
function a(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let n = { id: e.targetBuildOverride.discord_web.id, payload: t, exp: Date.parse(e.expiresAt) },
        a = [n, ...s().filter((e) => n.id !== e.id)].slice(0, 5);
    r.w.set(i, a);
}
