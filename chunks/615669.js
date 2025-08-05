(n.d(t, {
    Z: () => s,
    z: () => a
}),
    n(539854));
var r = n(442837),
    i = n(314897),
    a = (function (e) {
        return ((e[(e.END_EARLY = 0)] = 'END_EARLY'), e);
    })({});
let o = [];
function s(e) {
    let t = (0, r.e7)([i.default], () => i.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return o;
    let a = [];
    return (n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || a.push(0), a);
}
