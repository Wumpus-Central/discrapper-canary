var i = n(413135).Buffer,
    r = n(28704),
    a = n(706178);
function s(e) {
    var t = o(e);
    return {
        blinder: t.toRed(r.mont(e.modulus)).redPow(new r(e.publicExponent)).fromRed(),
        unblinder: t.invm(e.modulus)
    };
}
function o(e) {
    var t,
        n = e.modulus.byteLength();
    do t = new r(a(n));
    while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
    return t;
}
function l(e, t) {
    var n = s(t),
        a = t.modulus.byteLength(),
        o = new r(e).mul(n.blinder).umod(t.modulus),
        l = o.toRed(r.mont(t.prime1)),
        u = o.toRed(r.mont(t.prime2)),
        c = t.coefficient,
        d = t.prime1,
        f = t.prime2,
        _ = l.redPow(t.exponent1).fromRed(),
        p = u.redPow(t.exponent2).fromRed(),
        h = _.isub(p).imul(c).umod(d).imul(f);
    return p.iadd(h).imul(n.unblinder).umod(t.modulus).toArrayLike(i, 'be', a);
}
(l.getr = o), (e.exports = l);
