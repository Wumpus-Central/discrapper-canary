var r = n(413135).Buffer,
    i = n(28704),
    o = n(706178);
function a(e) {
    var t = s(e);
    return {
        blinder: t.toRed(i.mont(e.modulus)).redPow(new i(e.publicExponent)).fromRed(),
        unblinder: t.invm(e.modulus)
    };
}
function s(e) {
    var t,
        n = e.modulus.byteLength();
    do t = new i(o(n));
    while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
    return t;
}
function l(e, t) {
    var n = a(t),
        o = t.modulus.byteLength(),
        s = new i(e).mul(n.blinder).umod(t.modulus),
        l = s.toRed(i.mont(t.prime1)),
        c = s.toRed(i.mont(t.prime2)),
        u = t.coefficient,
        d = t.prime1,
        f = t.prime2,
        p = l.redPow(t.exponent1).fromRed(),
        _ = c.redPow(t.exponent2).fromRed(),
        h = p.isub(_).imul(u).umod(d).imul(f);
    return _.iadd(h).imul(n.unblinder).umod(t.modulus).toArrayLike(r, 'be', o);
}
(l.getr = s), (e.exports = l);
