var i = r(689118),
    a = r(292735),
    o = r(335613),
    s = r(315893),
    l = r(764900);
function u(e) {
    l.call(this, 'digest'), (this._hash = e);
}
i(u, l),
    (u.prototype._update = function (e) {
        this._hash.update(e);
    }),
    (u.prototype._final = function () {
        return this._hash.digest();
    }),
    (e.exports = function (e) {
        return 'md5' === (e = e.toLowerCase()) ? new a() : 'rmd160' === e || 'ripemd160' === e ? new o() : new u(s(e));
    });
