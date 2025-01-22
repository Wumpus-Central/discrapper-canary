var i = r(223428),
    a = r(706178),
    o = r(108381),
    s = r(855467),
    l = r(972566),
    u = r(814033),
    c = r(895598),
    d = r(530917),
    f = r(957578).Buffer;
function p(e, n) {
    var r = e.modulus.byteLength(),
        i = n.length,
        c = o('sha1').update(f.alloc(0)).digest(),
        d = c.length,
        p = 2 * d;
    if (i > r - p - 2) throw Error('message too long');
    var h = f.alloc(r - i - p - 2),
        _ = r - d - 1,
        m = a(d),
        g = l(f.concat([c, h, f.alloc(1, 1), n], _), s(m, _)),
        E = l(m, s(g, d));
    return new u(f.concat([f.alloc(1), E, g], r));
}
function h(e, n, r) {
    var i,
        a = n.length,
        o = e.modulus.byteLength();
    if (a > o - 11) throw Error('message too long');
    return (i = r ? f.alloc(o - a - 3, 255) : _(o - a - 3)), new u(f.concat([f.from([0, r ? 1 : 2]), i, f.alloc(1), n], o));
}
function _(e) {
    for (var n, r = f.allocUnsafe(e), i = 0, o = a(2 * e), s = 0; i < e; ) s === o.length && ((o = a(2 * e)), (s = 0)), (n = o[s++]) && (r[i++] = n);
    return r;
}
e.exports = function (e, n, r) {
    a = e.padding ? e.padding : r ? 1 : 4;
    var a,
        o,
        s = i(e);
    if (4 === a) o = p(s, n);
    else if (1 === a) o = h(s, n, r);
    else if (3 === a) {
        if ((o = new u(n)).cmp(s.modulus) >= 0) throw Error('data too long for modulus');
    } else throw Error('unknown padding');
    return r ? d(o, s) : c(o, s);
};
