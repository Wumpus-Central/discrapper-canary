n.d(t, {
    Z: () => s,
    z: () => o,
}),
    n(539854);
var r,
    i = n(442837),
    l = n(314897),
    o = (((r = {})[(r.END_EARLY = 0)] = "END_EARLY"), r);
let a = [];
function s(e) {
    let t = (0, i.e7)([l.default], () => l.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return a;
    let r = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r;
}
