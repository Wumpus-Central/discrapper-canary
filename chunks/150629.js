n.d(t, { Z: () => u });
var r = n(822632),
    i = n(553890),
    a = n(765859),
    o = n(554684);
let s = "Exif IFD Pointer",
    l = "GPS Info IFD Pointer",
    c = "Interoperability IFD Pointer",
    u = { read: d };
function d(e, t, n) {
    let r = i.Z.getByteOrder(e, t),
        a = f(e, t, r, n);
    return {
        tags: (a = m((a = _((a = p(a, e, t, r, n)), e, t, r, n)), e, t, r, n)),
        byteOrder: r,
    };
}
function f(e, t, n, r) {
    return (0, o.N)(e, a.n1, t, (0, o.a)(e, t, n), n, r);
}
function p(e, t, n, i, l) {
    return void 0 !== e[s] ? (0, r.wB)(e, (0, o.N)(t, a.nR, n, n + e[s].value, i, l)) : e;
}
function _(e, t, n, i, s) {
    return void 0 !== e[l] ? (0, r.wB)(e, (0, o.N)(t, a.C9, n, n + e[l].value, i, s)) : e;
}
function m(e, t, n, i, s) {
    return void 0 !== e[c] ? (0, r.wB)(e, (0, o.N)(t, a.$8, n, n + e[c].value, i, s)) : e;
}
