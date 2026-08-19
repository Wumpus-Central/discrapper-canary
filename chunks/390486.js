r.d(t, { H: () => i, R: () => a });
var l = r(506774);
let n = "recentBuildOverrides";
function i() {
    return (l.w.get(n) ?? []).filter((e) => null == e.exp || e.exp > Date.now());
}
function a(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let r = { id: e.targetBuildOverride.discord_web.id, payload: t, exp: Date.parse(e.expiresAt) },
        a = [r, ...i().filter((e) => r.id !== e.id)].slice(0, 5);
    l.w.set(n, a);
}
