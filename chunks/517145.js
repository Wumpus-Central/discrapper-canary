var i = n(957578).Buffer,
    r = n(28704),
    a = n(136924).ec,
    s = n(223428),
    o = n(733345);
function l(e, t, n, a, o) {
    var l = s(n);
    if ('ec' === l.type) {
        if ('ecdsa' !== a && 'ecdsa/rsa' !== a) throw Error('wrong public key type');
        return u(e, t, l);
    }
    if ('dsa' === l.type) {
        if ('dsa' !== a) throw Error('wrong public key type');
        return c(e, t, l);
    }
    if ('rsa' !== a && 'ecdsa/rsa' !== a) throw Error('wrong public key type');
    t = i.concat([o, t]);
    for (var d = l.modulus.byteLength(), f = [1], _ = 0; t.length + f.length + 2 < d; ) f.push(255), _++;
    f.push(0);
    for (var p = -1; ++p < t.length; ) f.push(t[p]);
    f = i.from(f);
    var h = r.mont(l.modulus);
    e = (e = new r(e).toRed(h)).redPow(new r(l.publicExponent));
    var m = _ < 8 ? 1 : 0;
    for (d = Math.min((e = i.from(e.fromRed().toArray())).length, f.length), e.length !== f.length && (m = 1), p = -1; ++p < d; ) m |= e[p] ^ f[p];
    return 0 === m;
}
function u(e, t, n) {
    var i = o[n.data.algorithm.curve.join('.')];
    if (!i) throw Error('unknown curve ' + n.data.algorithm.curve.join('.'));
    var r = new a(i),
        s = n.data.subjectPrivateKey.data;
    return r.verify(t, e, s);
}
function c(e, t, n) {
    var i = n.data.p,
        a = n.data.q,
        o = n.data.g,
        l = n.data.pub_key,
        u = s.signature.decode(e, 'der'),
        c = u.s,
        f = u.r;
    d(c, a), d(f, a);
    var _ = r.mont(i),
        p = c.invm(a);
    return (
        0 ===
        o
            .toRed(_)
            .redPow(new r(t).mul(p).mod(a))
            .fromRed()
            .mul(l.toRed(_).redPow(f.mul(p).mod(a)).fromRed())
            .mod(i)
            .mod(a)
            .cmp(f)
    );
}
function d(e, t) {
    if (0 >= e.cmpn(0) || e.cmp(t) >= t) throw Error('invalid sig');
}
e.exports = l;
