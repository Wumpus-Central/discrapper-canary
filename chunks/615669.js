n.d(t, {
    Z: () => o,
    z: () => s
}),
    n(653041);
var i,
    l = n(442837),
    a = n(314897),
    s = (((i = {})[(i.END_EARLY = 0)] = 'END_EARLY'), i);
let r = [];
function o(e) {
    let t = (0, l.e7)([a.default], () => a.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return r;
    let i = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
}
