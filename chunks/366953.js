r.d(n, {
    Z: function () {
        return l;
    },
    j: function () {
        return s;
    }
});
var i = r(47120);
var a = r(433517);
let o = 'recentBuildOverrides';
function s() {
    var e;
    return (null !== (e = a.K.get(o)) && void 0 !== e ? e : []).filter((e) => null == e.exp || e.exp > Date.now());
}
function l(e, n) {
    if (null == n || null == e || null == e.targetBuildOverride.discord_web) return;
    let r = {
            id: e.targetBuildOverride.discord_web.id,
            payload: n,
            exp: Date.parse(e.expiresAt)
        },
        i = [r, ...s().filter((e) => r.id !== e.id)].slice(0, 5);
    a.K.set(o, i);
}
