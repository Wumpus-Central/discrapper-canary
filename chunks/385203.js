var i = n(223428),
    r = n(855467),
    a = n(972566),
    s = n(814033),
    o = n(530917),
    l = n(108381),
    u = n(895598),
    c = n(957578).Buffer;
function d(e, t) {
    var n = e.modulus.byteLength(),
        i = l('sha1').update(c.alloc(0)).digest(),
        s = i.length;
    if (0 !== t[0]) throw Error('decryption error');
    var o = t.slice(1, s + 1),
        u = t.slice(s + 1),
        d = a(o, r(u, s)),
        f = a(u, r(d, n - s - 1));
    if (_(i, f.slice(0, s))) throw Error('decryption error');
    for (var p = s; 0 === f[p]; ) p++;
    if (1 !== f[p++]) throw Error('decryption error');
    return f.slice(p);
}
function f(e, t, n) {
    for (var i = t.slice(0, 2), r = 2, a = 0; 0 !== t[r++]; )
        if (r >= t.length) {
            a++;
            break;
        }
    var s = t.slice(2, r - 1);
    if (((('0002' !== i.toString('hex') && !n) || ('0001' !== i.toString('hex') && n)) && a++, s.length < 8 && a++, a)) throw Error('decryption error');
    return t.slice(r);
}
function _(e, t) {
    (e = c.from(e)), (t = c.from(t));
    var n = 0,
        i = e.length;
    e.length !== t.length && (n++, (i = Math.min(e.length, t.length)));
    for (var r = -1; ++r < i; ) n += e[r] ^ t[r];
    return n;
}
e.exports = function (e, t, n) {
    r = e.padding ? e.padding : n ? 1 : 4;
    var r,
        a,
        l = i(e),
        _ = l.modulus.byteLength();
    if (t.length > _ || new s(t).cmp(l.modulus) >= 0) throw Error('decryption error');
    a = n ? u(new s(t), l) : o(t, l);
    var p = c.alloc(_ - a.length);
    if (((a = c.concat([p, a], _)), 4 === r)) return d(l, a);
    if (1 === r) return f(l, a, n);
    if (3 === r) return a;
    throw Error('unknown padding');
};
