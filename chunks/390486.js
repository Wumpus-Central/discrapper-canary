t.d(l, { H: () => i, R: () => a });
var r = t(506774);
let n = "recentBuildOverrides";
function i() {
    return (r.w.get(n) ?? []).filter((e) => null == e.exp || e.exp > Date.now());
}
function a(e, l) {
    if (null == l || null == e || null == e.targetBuildOverride.discord_web) return;
    let t = { id: e.targetBuildOverride.discord_web.id, payload: l, exp: Date.parse(e.expiresAt) },
        a = [t, ...i().filter((e) => t.id !== e.id)].slice(0, 5);
    r.w.set(n, a);
}
