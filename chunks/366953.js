n.d(t, {
    Z: () => o,
    j: () => a
}),
    n(388685);
var r = n(433517);
let i = 'recentBuildOverrides';
function a() {
    var e;
    return (null != (e = r.K.get(i)) ? e : []).filter((e) => null == e.exp || e.exp > Date.now());
}
function o(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let n = {
            id: e.targetBuildOverride.discord_web.id,
            payload: t,
            exp: Date.parse(e.expiresAt)
        },
        o = [n, ...a().filter((e) => n.id !== e.id)].slice(0, 5);
    r.K.set(i, o);
}
