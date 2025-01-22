var i = r(413135).Buffer,
    a = r(28704),
    o = r(706178);
function s(e) {
    var n = l(e);
    return {
        blinder: n.toRed(a.mont(e.modulus)).redPow(new a(e.publicExponent)).fromRed(),
        unblinder: n.invm(e.modulus)
    };
}
function l(e) {
    var n,
        r = e.modulus.byteLength();
    do n = new a(o(r));
    while (n.cmp(e.modulus) >= 0 || !n.umod(e.prime1) || !n.umod(e.prime2));
    return n;
}
function u(e, n) {
    var r = s(n),
        o = n.modulus.byteLength(),
        l = new a(e).mul(r.blinder).umod(n.modulus),
        u = l.toRed(a.mont(n.prime1)),
        c = l.toRed(a.mont(n.prime2)),
        d = n.coefficient,
        f = n.prime1,
        p = n.prime2,
        h = u.redPow(n.exponent1).fromRed(),
        _ = c.redPow(n.exponent2).fromRed(),
        m = h.isub(_).imul(d).umod(f).imul(p);
    return _.iadd(m).imul(r.unblinder).umod(n.modulus).toArrayLike(i, 'be', o);
}
(u.getr = l), (e.exports = u);
