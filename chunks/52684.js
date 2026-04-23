n.d(t, { A: () => o, G: () => r }), n(321073);
var i,
    l = n(311907),
    a = n(961350),
    r = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let s = [];
function o(e) {
    let t = (0, l.bG)([a.default], () => a.default.getId()),
        { poll: n } = e;
    if (!e.isPoll() || null == n) return s;
    let i = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
}
