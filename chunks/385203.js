var i = r(223428),
    a = r(855467),
    o = r(972566),
    s = r(814033),
    l = r(530917),
    u = r(108381),
    c = r(895598),
    d = r(957578).Buffer;
function f(e, n) {
    var r = e.modulus.byteLength(),
        i = u('sha1').update(d.alloc(0)).digest(),
        s = i.length;
    if (0 !== n[0]) throw Error('decryption error');
    var l = n.slice(1, s + 1),
        c = n.slice(s + 1),
        f = o(l, a(c, s)),
        p = o(c, a(f, r - s - 1));
    if (h(i, p.slice(0, s))) throw Error('decryption error');
    for (var _ = s; 0 === p[_]; ) _++;
    if (1 !== p[_++]) throw Error('decryption error');
    return p.slice(_);
}
function p(e, n, r) {
    for (var i = n.slice(0, 2), a = 2, o = 0; 0 !== n[a++]; )
        if (a >= n.length) {
            o++;
            break;
        }
    var s = n.slice(2, a - 1);
    if (((('0002' !== i.toString('hex') && !r) || ('0001' !== i.toString('hex') && r)) && o++, s.length < 8 && o++, o)) throw Error('decryption error');
    return n.slice(a);
}
function h(e, n) {
    (e = d.from(e)), (n = d.from(n));
    var r = 0,
        i = e.length;
    e.length !== n.length && (r++, (i = Math.min(e.length, n.length)));
    for (var a = -1; ++a < i; ) r += e[a] ^ n[a];
    return r;
}
e.exports = function (e, n, r) {
    a = e.padding ? e.padding : r ? 1 : 4;
    var a,
        o,
        u = i(e),
        h = u.modulus.byteLength();
    if (n.length > h || new s(n).cmp(u.modulus) >= 0) throw Error('decryption error');
    o = r ? c(new s(n), u) : l(n, u);
    var _ = d.alloc(h - o.length);
    if (((o = d.concat([_, o], h)), 4 === a)) return f(u, o);
    if (1 === a) return p(u, o, r);
    if (3 === a) return o;
    else throw Error('unknown padding');
};
