var r = n(223428),
    i = n(706178),
    o = n(108381),
    a = n(855467),
    s = n(972566),
    l = n(814033),
    c = n(895598),
    u = n(530917),
    d = n(957578).Buffer;
function f(e, t) {
    var n = e.modulus.byteLength(),
        r = t.length,
        c = o('sha1').update(d.alloc(0)).digest(),
        u = c.length,
        f = 2 * u;
    if (r > n - f - 2) throw Error('message too long');
    var p = d.alloc(n - r - f - 2),
        _ = n - u - 1,
        h = i(u),
        m = s(d.concat([c, p, d.alloc(1, 1), t], _), a(h, _)),
        g = s(h, a(m, u));
    return new l(d.concat([d.alloc(1), g, m], n));
}
function p(e, t, n) {
    var r,
        i = t.length,
        o = e.modulus.byteLength();
    if (i > o - 11) throw Error('message too long');
    return (r = n ? d.alloc(o - i - 3, 255) : _(o - i - 3)), new l(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], o));
}
function _(e) {
    for (var t, n = d.allocUnsafe(e), r = 0, o = i(2 * e), a = 0; r < e; ) a === o.length && ((o = i(2 * e)), (a = 0)), (t = o[a++]) && (n[r++] = t);
    return n;
}
e.exports = function (e, t, n) {
    i = e.padding ? e.padding : n ? 1 : 4;
    var i,
        o,
        a = r(e);
    if (4 === i) o = f(a, t);
    else if (1 === i) o = p(a, t, n);
    else if (3 === i) {
        if ((o = new l(t)).cmp(a.modulus) >= 0) throw Error('data too long for modulus');
    } else throw Error('unknown padding');
    return n ? u(o, a) : c(o, a);
};
