n.d(t, { BV: () => o, IL: () => d, Uf: () => l });
var i = n(17928),
    r = n(734057),
    a = n(824492);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    if (null == e) return null;
    if (e.isSpoilerChannel()) return t.didAgree(e.id) ? null : e.id;
    if (null != e.parent_id) {
        let i = n.getChannel(e.parent_id);
        if (null != i && i.isSpoilerChannel() && !t.didAgree(i.id)) return i.id;
    }
    return null;
}
function l(e) {
    return (0, i.bG)([a.A, r.A], () => s(e, a.A, r.A), [e]);
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    return null != s(e, t, n);
}
function d(e) {
    return (0, i.bG)([a.A, r.A], () => o(e, a.A, r.A), [e]);
}
