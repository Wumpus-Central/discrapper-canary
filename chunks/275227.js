var r = n(877024),
    i = n(335613),
    o = n(315893),
    a = n(957578).Buffer,
    s = n(180756),
    l = n(138031),
    c = n(871230),
    u = a.alloc(128),
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
    var r = p(e),
        i = 'sha512' === e || 'sha384' === e ? 128 : 64;
    t.length > i ? (t = r(t)) : t.length < i && (t = a.concat([t, u], i));
    for (var o = a.allocUnsafe(i + d[e]), s = a.allocUnsafe(i + d[e]), l = 0; l < i; l++) (o[l] = 54 ^ t[l]), (s[l] = 92 ^ t[l]);
    var c = a.allocUnsafe(i + n + 4);
    o.copy(c, 0, 0, i), (this.ipad1 = c), (this.ipad2 = o), (this.opad = s), (this.alg = e), (this.blocksize = i), (this.hash = r), (this.size = d[e]);
}
function p(e) {
    function t(t) {
        return o(e).update(t).digest();
    }
    function n(e) {
        return new i().update(e).digest();
    }
    return 'rmd160' === e || 'ripemd160' === e ? n : 'md5' === e ? r : t;
}
function _(e, t, n, r, i) {
    s(n, r), (e = c(e, l, 'Password'));
    var o = new f((i = i || 'sha1'), e, (t = c(t, l, 'Salt')).length),
        u = a.allocUnsafe(r),
        p = a.allocUnsafe(t.length + 4);
    t.copy(p, 0, 0, t.length);
    for (var _ = 0, h = d[i], m = Math.ceil(r / h), g = 1; g <= m; g++) {
        p.writeUInt32BE(g, t.length);
        for (var E = o.run(p, o.ipad1), v = E, b = 1; b < n; b++) {
            v = o.run(v, o.ipad2);
            for (var y = 0; y < h; y++) E[y] ^= v[y];
        }
        E.copy(u, _), (_ += h);
    }
    return u;
}
(f.prototype.run = function (e, t) {
    return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad);
}),
    (e.exports = _);
