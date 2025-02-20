var r = n(689118),
    i = n(292735),
    o = n(335613),
    a = n(315893),
    s = n(764900);
function l(e) {
    s.call(this, 'digest'), (this._hash = e);
}
r(l, s),
    (l.prototype._update = function (e) {
        this._hash.update(e);
    }),
    (l.prototype._final = function () {
        return this._hash.digest();
    }),
    (e.exports = function (e) {
        return 'md5' === (e = e.toLowerCase()) ? new i() : 'rmd160' === e || 'ripemd160' === e ? new o() : new l(a(e));
    });
