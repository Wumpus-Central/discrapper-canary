t.d(n, {
    k3: () => l.k,
    sO: () => r,
    xo: () => i
}),
    t(47120);
var l = t(580685);
function i(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: e.brand_color_primary,
        traits: []
    };
}
let a = { brandColorPrimary: 'brand_color_primary' };
function r(e) {
    let n = {};
    for (let [l, i] of Object.entries(e))
        if (null != i) {
            var t;
            n[null !== (t = a[l]) && void 0 !== t ? t : l] = i;
        }
    return n;
}
