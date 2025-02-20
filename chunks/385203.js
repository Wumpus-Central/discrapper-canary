var r = n(223428),
    i = n(855467),
    o = n(972566),
    a = n(814033),
    s = n(530917),
    l = n(108381),
    c = n(895598),
    u = n(957578).Buffer;
function d(e, t) {
    var n = e.modulus.byteLength(),
        r = l('sha1').update(u.alloc(0)).digest(),
        a = r.length;
    if (0 !== t[0]) throw Error('decryption error');
    var s = t.slice(1, a + 1),
        c = t.slice(a + 1),
        d = o(s, i(c, a)),
        f = o(c, i(d, n - a - 1));
    if (p(r, f.slice(0, a))) throw Error('decryption error');
    for (var _ = a; 0 === f[_]; ) _++;
    if (1 !== f[_++]) throw Error('decryption error');
    return f.slice(_);
}
function f(e, t, n) {
    for (var r = t.slice(0, 2), i = 2, o = 0; 0 !== t[i++]; )
        if (i >= t.length) {
            o++;
            break;
        }
    var a = t.slice(2, i - 1);
    if (((('0002' !== r.toString('hex') && !n) || ('0001' !== r.toString('hex') && n)) && o++, a.length < 8 && o++, o)) throw Error('decryption error');
    return t.slice(i);
}
function p(e, t) {
    (e = u.from(e)), (t = u.from(t));
    var n = 0,
        r = e.length;
    e.length !== t.length && (n++, (r = Math.min(e.length, t.length)));
    for (var i = -1; ++i < r; ) n += e[i] ^ t[i];
    return n;
}
e.exports = function (e, t, n) {
    i = e.padding ? e.padding : n ? 1 : 4;
    var i,
        o,
        l = r(e),
        p = l.modulus.byteLength();
    if (t.length > p || new a(t).cmp(l.modulus) >= 0) throw Error('decryption error');
    o = n ? c(new a(t), l) : s(t, l);
    var _ = u.alloc(p - o.length);
    if (((o = u.concat([_, o], p)), 4 === i)) return d(l, o);
    if (1 === i) return f(l, o, n);
    if (3 === i) return o;
    throw Error('unknown padding');
};
