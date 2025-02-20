var r = n(689118),
    i = n(997290),
    o = n(764900),
    a = n(957578).Buffer,
    s = n(877024),
    l = n(335613),
    c = n(315893),
    u = a.alloc(128);
function d(e, t) {
    o.call(this, 'digest'), 'string' == typeof t && (t = a.from(t));
    var n = 'sha512' === e || 'sha384' === e ? 128 : 64;
    (this._alg = e), (this._key = t), t.length > n ? (t = ('rmd160' === e ? new l() : c(e)).update(t).digest()) : t.length < n && (t = a.concat([t, u], n));
    for (var r = (this._ipad = a.allocUnsafe(n)), i = (this._opad = a.allocUnsafe(n)), s = 0; s < n; s++) (r[s] = 54 ^ t[s]), (i[s] = 92 ^ t[s]);
    (this._hash = 'rmd160' === e ? new l() : c(e)), this._hash.update(r);
}
r(d, o),
    (d.prototype._update = function (e) {
        this._hash.update(e);
    }),
    (d.prototype._final = function () {
        var e = this._hash.digest();
        return ('rmd160' === this._alg ? new l() : c(this._alg)).update(this._opad).update(e).digest();
    }),
    (e.exports = function (e, t) {
        return 'rmd160' === (e = e.toLowerCase()) || 'ripemd160' === e ? new d('rmd160', t) : 'md5' === e ? new i(s, t) : new d(e, t);
    });
