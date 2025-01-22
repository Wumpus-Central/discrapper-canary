var i = r(957578).Buffer,
    a = r(28704),
    o = r(136924).ec,
    s = r(223428),
    l = r(733345);
function u(e, n, r, o, l) {
    var u = s(r);
    if ('ec' === u.type) {
        if ('ecdsa' !== o && 'ecdsa/rsa' !== o) throw Error('wrong public key type');
        return c(e, n, u);
    }
    if ('dsa' === u.type) {
        if ('dsa' !== o) throw Error('wrong public key type');
        return d(e, n, u);
    }
    if ('rsa' !== o && 'ecdsa/rsa' !== o) throw Error('wrong public key type');
    n = i.concat([l, n]);
    for (var f = u.modulus.byteLength(), p = [1], h = 0; n.length + p.length + 2 < f; ) p.push(255), h++;
    p.push(0);
    for (var _ = -1; ++_ < n.length; ) p.push(n[_]);
    p = i.from(p);
    var m = a.mont(u.modulus);
    (e = (e = new a(e).toRed(m)).redPow(new a(u.publicExponent))), (e = i.from(e.fromRed().toArray()));
    var g = h < 8 ? 1 : 0;
    for (f = Math.min(e.length, p.length), e.length !== p.length && (g = 1), _ = -1; ++_ < f; ) g |= e[_] ^ p[_];
    return 0 === g;
}
function c(e, n, r) {
    var i = l[r.data.algorithm.curve.join('.')];
    if (!i) throw Error('unknown curve ' + r.data.algorithm.curve.join('.'));
    var a = new o(i),
        s = r.data.subjectPrivateKey.data;
    return a.verify(n, e, s);
}
function d(e, n, r) {
    var i = r.data.p,
        o = r.data.q,
        l = r.data.g,
        u = r.data.pub_key,
        c = s.signature.decode(e, 'der'),
        d = c.s,
        p = c.r;
    f(d, o), f(p, o);
    var h = a.mont(i),
        _ = d.invm(o);
    return (
        0 ===
        l
            .toRed(h)
            .redPow(new a(n).mul(_).mod(o))
            .fromRed()
            .mul(u.toRed(h).redPow(p.mul(_).mod(o)).fromRed())
            .mod(i)
            .mod(o)
            .cmp(p)
    );
}
function f(e, n) {
    if (0 >= e.cmpn(0) || e.cmp(n) >= n) throw Error('invalid sig');
}
e.exports = u;
