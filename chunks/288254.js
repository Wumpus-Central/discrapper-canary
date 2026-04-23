n.d(t, { BV: () => l, IL: () => o, Uf: () => _ });
var i = n(17928),
    r = n(734057),
    a = n(824492);
let s = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    if (null == e) return null;
    if (null != e.parent_id && !e.isSpoilerChannel()) {
        let i = n.getChannel(e.parent_id);
        if (null != i && i.isSpoilerChannel() && !t.didAgree(i.id)) return i.id;
    }
    return !e.isSpoilerChannel() || t.didAgree(e.id) ? null : e.id;
};
function _(e) {
    return (0, i.bG)([a.A, r.A], () => s(e, a.A, r.A), [e]);
}
let l = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    return null != s(e, t, n);
};
function o(e) {
    return (0, i.bG)([a.A, r.A], () => l(e, a.A, r.A), [e]);
}
