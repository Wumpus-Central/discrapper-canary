var r = n(957578).Buffer,
    i = n(28704),
    o = n(136924).ec,
    a = n(223428),
    s = n(733345);
function l(e, t, n, o, s) {
    var l = a(n);
    if ('ec' === l.type) {
        if ('ecdsa' !== o && 'ecdsa/rsa' !== o) throw Error('wrong public key type');
        return c(e, t, l);
    }
    if ('dsa' === l.type) {
        if ('dsa' !== o) throw Error('wrong public key type');
        return u(e, t, l);
    }
    if ('rsa' !== o && 'ecdsa/rsa' !== o) throw Error('wrong public key type');
    t = r.concat([s, t]);
    for (var d = l.modulus.byteLength(), f = [1], p = 0; t.length + f.length + 2 < d; ) f.push(255), p++;
    f.push(0);
    for (var _ = -1; ++_ < t.length; ) f.push(t[_]);
    f = r.from(f);
    var h = i.mont(l.modulus);
    e = (e = new i(e).toRed(h)).redPow(new i(l.publicExponent));
    var m = +(p < 8);
    for (d = Math.min((e = r.from(e.fromRed().toArray())).length, f.length), e.length !== f.length && (m = 1), _ = -1; ++_ < d; ) m |= e[_] ^ f[_];
    return 0 === m;
}
function c(e, t, n) {
    var r = s[n.data.algorithm.curve.join('.')];
    if (!r) throw Error('unknown curve ' + n.data.algorithm.curve.join('.'));
    var i = new o(r),
        a = n.data.subjectPrivateKey.data;
    return i.verify(t, e, a);
}
function u(e, t, n) {
    var r = n.data.p,
        o = n.data.q,
        s = n.data.g,
        l = n.data.pub_key,
        c = a.signature.decode(e, 'der'),
        u = c.s,
        f = c.r;
    d(u, o), d(f, o);
    var p = i.mont(r),
        _ = u.invm(o);
    return (
        0 ===
        s
            .toRed(p)
            .redPow(new i(t).mul(_).mod(o))
            .fromRed()
            .mul(l.toRed(p).redPow(f.mul(_).mod(o)).fromRed())
            .mod(r)
            .mod(o)
            .cmp(f)
    );
}
function d(e, t) {
    if (0 >= e.cmpn(0) || e.cmp(t) >= t) throw Error('invalid sig');
}
e.exports = l;
