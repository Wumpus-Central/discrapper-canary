n.d(t, { BV: () => o, IL: () => d, Uf: () => l });
var i = n(17928),
    a = n(734057),
    r = n(824492);
let s = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A;
    if (null == e) return null;
    if (null != e.parent_id && !e.isSpoilerChannel()) {
        let i = n.getChannel(e.parent_id);
        if (null != i && i.isSpoilerChannel() && !t.didAgree(i.id)) return i.id;
    }
    return !e.isSpoilerChannel() || t.didAgree(e.id) ? null : e.id;
};
function l(e) {
    return (0, i.bG)([r.A, a.A], () => s(e, r.A, a.A), [e]);
}
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A;
    return null != s(e, t, n);
};
function d(e) {
    return (0, i.bG)([r.A, a.A], () => o(e, r.A, a.A), [e]);
}
