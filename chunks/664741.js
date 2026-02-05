"use strict";
n.d(t, { A: () => c });
var r = n(643479),
    i = n(890167),
    a = n(105423),
    s = n(801765);
let o = "Exif IFD Pointer",
    l = "GPS Info IFD Pointer",
    u = "Interoperability IFD Pointer",
    c = { read: d };
function d(e, t, n) {
    let r = i.A.getByteOrder(e, t),
        a = _(e, t, r, n);
    return { tags: (a = h((a = p((a = f(a, e, t, r, n)), e, t, r, n)), e, t, r, n)), byteOrder: r };
}
function _(e, t, n, r) {
    return (0, s.y)(e, a.eY, t, (0, s.x)(e, t, n), n, r);
}
function f(e, t, n, i, l) {
    return void 0 !== e[o] ? (0, r.dP)(e, (0, s.y)(t, a.Ct, n, n + e[o].value, i, l)) : e;
}
function p(e, t, n, i, o) {
    return void 0 !== e[l] ? (0, r.dP)(e, (0, s.y)(t, a.eU, n, n + e[l].value, i, o)) : e;
}
function h(e, t, n, i, o) {
    return void 0 !== e[u] ? (0, r.dP)(e, (0, s.y)(t, a.MJ, n, n + e[u].value, i, o)) : e;
}
