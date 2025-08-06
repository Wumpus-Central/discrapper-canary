n.d(t, {
    Z: () => s,
    z: () => o,
}),
    n(539854);
var r = n(442837),
    i = n(314897),
    o = (function (e) {
        return (e[(e.END_EARLY = 0)] = "END_EARLY"), e;
    })({});
let a = [];
function s(e) {
    let t = (0, r.e7)([i.default], () => i.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return a;
    let o = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || o.push(0), o;
}
