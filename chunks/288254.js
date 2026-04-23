"use strict";
n.d(t, { BV: () => l, IL: () => u, Uf: () => o });
var r = n(311907),
    i = n(734057),
    s = n(824492);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A;
    if (null == e) return null;
    if (null != e.parent_id && !e.isSpoilerChannel()) {
        let r = n.getChannel(e.parent_id);
        if (null != r && r.isSpoilerChannel() && !t.didAgree(r.id)) return r.id;
    }
    return !e.isSpoilerChannel() || t.didAgree(e.id) ? null : e.id;
};
function o(e) {
    return (0, r.bG)([s.A, i.A], () => a(e, s.A, i.A), [e]);
}
let l = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A;
    return null != a(e, t, n);
};
function u(e) {
    return (0, r.bG)([s.A, i.A], () => l(e, s.A, i.A), [e]);
}
