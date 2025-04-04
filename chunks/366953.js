n.d(t, {
    Z: () => a,
    j: () => o
}),
    n(47120);
var r = n(433517);
let i = 'recentBuildOverrides';
function o() {
    var e;
    return (null != (e = r.K.get(i)) ? e : []).filter((e) => null == e.exp || e.exp > Date.now());
}
function a(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let n = {
            id: e.targetBuildOverride.discord_web.id,
            payload: t,
            exp: Date.parse(e.expiresAt)
        },
        a = [n, ...o().filter((e) => n.id !== e.id)].slice(0, 5);
    r.K.set(i, a);
}
