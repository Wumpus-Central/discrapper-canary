n.d(t, {
    Z: () => s,
    z: () => a
}),
    n(539854);
var i,
    r = n(442837),
    l = n(314897),
    a = (((i = {})[(i.END_EARLY = 0)] = 'END_EARLY'), i);
let o = [];
function s(e) {
    let t = (0, r.e7)([l.default], () => l.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return o;
    let i = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
}
