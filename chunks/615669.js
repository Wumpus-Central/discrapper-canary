n.d(t, {
    Z: () => s,
    z: () => a
}),
    n(653041);
var r,
    i = n(442837),
    l = n(314897),
    a = (((r = {})[(r.END_EARLY = 0)] = 'END_EARLY'), r);
let o = [];
function s(e) {
    let t = (0, i.e7)([l.default], () => l.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return o;
    let r = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r;
}
