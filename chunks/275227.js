var i = n(877024),
    r = n(335613),
    a = n(315893),
    s = n(957578).Buffer,
    o = n(180756),
    l = n(138031),
    u = n(871230),
    c = s.alloc(128),
    d = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
    };
function f(e, t, n) {
    var i = _(e),
        r = 'sha512' === e || 'sha384' === e ? 128 : 64;
    t.length > r ? (t = i(t)) : t.length < r && (t = s.concat([t, c], r));
    for (var a = s.allocUnsafe(r + d[e]), o = s.allocUnsafe(r + d[e]), l = 0; l < r; l++) (a[l] = 54 ^ t[l]), (o[l] = 92 ^ t[l]);
    var u = s.allocUnsafe(r + n + 4);
    a.copy(u, 0, 0, r), (this.ipad1 = u), (this.ipad2 = a), (this.opad = o), (this.alg = e), (this.blocksize = r), (this.hash = i), (this.size = d[e]);
}
function _(e) {
    function t(t) {
        return a(e).update(t).digest();
    }
    function n(e) {
        return new r().update(e).digest();
    }
    return 'rmd160' === e || 'ripemd160' === e ? n : 'md5' === e ? i : t;
}
function p(e, t, n, i, r) {
    o(n, i), (e = u(e, l, 'Password'));
    var a = new f((r = r || 'sha1'), e, (t = u(t, l, 'Salt')).length),
        c = s.allocUnsafe(i),
        _ = s.allocUnsafe(t.length + 4);
    t.copy(_, 0, 0, t.length);
    for (var p = 0, h = d[r], m = Math.ceil(i / h), g = 1; g <= m; g++) {
        _.writeUInt32BE(g, t.length);
        for (var E = a.run(_, a.ipad1), v = E, y = 1; y < n; y++) {
            v = a.run(v, a.ipad2);
            for (var I = 0; I < h; I++) E[I] ^= v[I];
        }
        E.copy(c, p), (p += h);
    }
    return c;
}
(f.prototype.run = function (e, t) {
    return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad);
}),
    (e.exports = p);
