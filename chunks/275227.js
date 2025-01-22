var i = r(877024),
    a = r(335613),
    o = r(315893),
    s = r(957578).Buffer,
    l = r(180756),
    u = r(138031),
    c = r(871230),
    d = s.alloc(128),
    f = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
    };
function p(e, n, r) {
    var i = h(e),
        a = 'sha512' === e || 'sha384' === e ? 128 : 64;
    n.length > a ? (n = i(n)) : n.length < a && (n = s.concat([n, d], a));
    for (var o = s.allocUnsafe(a + f[e]), l = s.allocUnsafe(a + f[e]), u = 0; u < a; u++) (o[u] = 54 ^ n[u]), (l[u] = 92 ^ n[u]);
    var c = s.allocUnsafe(a + r + 4);
    o.copy(c, 0, 0, a), (this.ipad1 = c), (this.ipad2 = o), (this.opad = l), (this.alg = e), (this.blocksize = a), (this.hash = i), (this.size = f[e]);
}
function h(e) {
    function n(n) {
        return o(e).update(n).digest();
    }
    function r(e) {
        return new a().update(e).digest();
    }
    return 'rmd160' === e || 'ripemd160' === e ? r : 'md5' === e ? i : n;
}
function _(e, n, r, i, a) {
    l(r, i), (e = c(e, u, 'Password')), (n = c(n, u, 'Salt'));
    var o = new p((a = a || 'sha1'), e, n.length),
        d = s.allocUnsafe(i),
        h = s.allocUnsafe(n.length + 4);
    n.copy(h, 0, 0, n.length);
    for (var _ = 0, m = f[a], g = Math.ceil(i / m), E = 1; E <= g; E++) {
        h.writeUInt32BE(E, n.length);
        for (var v = o.run(h, o.ipad1), y = v, b = 1; b < r; b++) {
            y = o.run(y, o.ipad2);
            for (var I = 0; I < m; I++) v[I] ^= y[I];
        }
        v.copy(d, _), (_ += m);
    }
    return d;
}
(p.prototype.run = function (e, n) {
    return e.copy(n, this.blocksize), this.hash(n).copy(this.opad, this.blocksize), this.hash(this.opad);
}),
    (e.exports = _);
