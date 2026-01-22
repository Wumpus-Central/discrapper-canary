n.d(t, {
    A: () => c,
    G: () => o,
}),
    n(321073);
var r,
    l = n(311907),
    i = n(961350),
    o = (((r = {})[(r.END_EARLY = 0)] = "END_EARLY"), r);
let a = [];
function c(e) {
    let t = (0, l.bG)([i.default], () => i.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return a;
    let r = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r;
}
