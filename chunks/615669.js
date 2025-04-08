n.d(t, {
    Z: () => s,
    z: () => l
}),
    n(539854);
var r,
    i = n(442837),
    a = n(314897),
    l = (((r = {})[(r.END_EARLY = 0)] = 'END_EARLY'), r);
let o = [];
function s(e) {
    let t = (0, i.e7)([a.default], () => a.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return o;
    let r = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r;
}
