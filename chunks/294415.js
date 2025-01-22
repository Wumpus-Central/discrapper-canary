var i = r(689118),
    a = r(997290),
    o = r(764900),
    s = r(957578).Buffer,
    l = r(877024),
    u = r(335613),
    c = r(315893),
    d = s.alloc(128);
function f(e, n) {
    o.call(this, 'digest'), 'string' == typeof n && (n = s.from(n));
    var r = 'sha512' === e || 'sha384' === e ? 128 : 64;
    (this._alg = e), (this._key = n), n.length > r ? (n = ('rmd160' === e ? new u() : c(e)).update(n).digest()) : n.length < r && (n = s.concat([n, d], r));
    for (var i = (this._ipad = s.allocUnsafe(r)), a = (this._opad = s.allocUnsafe(r)), l = 0; l < r; l++) (i[l] = 54 ^ n[l]), (a[l] = 92 ^ n[l]);
    (this._hash = 'rmd160' === e ? new u() : c(e)), this._hash.update(i);
}
i(f, o),
    (f.prototype._update = function (e) {
        this._hash.update(e);
    }),
    (f.prototype._final = function () {
        var e = this._hash.digest();
        return ('rmd160' === this._alg ? new u() : c(this._alg)).update(this._opad).update(e).digest();
    }),
    (e.exports = function (e, n) {
        return 'rmd160' === (e = e.toLowerCase()) || 'ripemd160' === e ? new f('rmd160', n) : 'md5' === e ? new a(l, n) : new f(e, n);
    });
