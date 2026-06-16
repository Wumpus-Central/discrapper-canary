"use strict";
n.d(t, { H: () => s, R: () => a });
var i = n(506774);
let r = "recentBuildOverrides";
function s() {
    return (i.w.get(r) ?? []).filter((e) => null == e.exp || e.exp > Date.now());
}
function a(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let n = { id: e.targetBuildOverride.discord_web.id, payload: t, exp: Date.parse(e.expiresAt) },
        a = [n, ...s().filter((e) => n.id !== e.id)].slice(0, 5);
    i.w.set(r, a);
}
