var i = n(223428),
    r = n(706178),
    a = n(108381),
    s = n(855467),
    o = n(972566),
    l = n(814033),
    u = n(895598),
    c = n(530917),
    d = n(957578).Buffer;
function f(e, t) {
    var n = e.modulus.byteLength(),
        i = t.length,
        u = a('sha1').update(d.alloc(0)).digest(),
        c = u.length,
        f = 2 * c;
    if (i > n - f - 2) throw Error('message too long');
    var _ = d.alloc(n - i - f - 2),
        p = n - c - 1,
        h = r(c),
        m = o(d.concat([u, _, d.alloc(1, 1), t], p), s(h, p)),
        g = o(h, s(m, c));
    return new l(d.concat([d.alloc(1), g, m], n));
}
function _(e, t, n) {
    var i,
        r = t.length,
        a = e.modulus.byteLength();
    if (r > a - 11) throw Error('message too long');
    return (i = n ? d.alloc(a - r - 3, 255) : p(a - r - 3)), new l(d.concat([d.from([0, n ? 1 : 2]), i, d.alloc(1), t], a));
}
function p(e) {
    for (var t, n = d.allocUnsafe(e), i = 0, a = r(2 * e), s = 0; i < e; ) s === a.length && ((a = r(2 * e)), (s = 0)), (t = a[s++]) && (n[i++] = t);
    return n;
}
e.exports = function (e, t, n) {
    r = e.padding ? e.padding : n ? 1 : 4;
    var r,
        a,
        s = i(e);
    if (4 === r) a = f(s, t);
    else if (1 === r) a = _(s, t, n);
    else if (3 === r) {
        if ((a = new l(t)).cmp(s.modulus) >= 0) throw Error('data too long for modulus');
    } else throw Error('unknown padding');
    return n ? c(a, s) : u(a, s);
};
