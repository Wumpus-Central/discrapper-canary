"use strict";
n.d(t, { BV: () => l, IL: () => u, Uf: () => o });
var i = n(17928),
    r = n(734057),
    s = n(824492);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    if (null == e) return null;
    if (e.isSpoilerChannel()) return t.didAgree(e.id) ? null : e.id;
    if (null != e.parent_id) {
        let i = n.getChannel(e.parent_id);
        if (null != i && i.isSpoilerChannel() && !t.didAgree(i.id)) return i.id;
    }
    return null;
}
function o(e) {
    return (0, i.bG)([s.A, r.A], () => a(e, s.A, r.A), [e]);
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    return null != a(e, t, n);
}
function u(e) {
    return (0, i.bG)([s.A, r.A], () => l(e, s.A, r.A), [e]);
}
