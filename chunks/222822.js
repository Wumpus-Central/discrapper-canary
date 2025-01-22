var i = r(458340),
    a = r(957578).Buffer,
    o = r(764900);
function s(e, n, r, s) {
    o.call(this), (this._cipher = new i.AES(n)), (this._prev = a.from(r)), (this._cache = a.allocUnsafe(0)), (this._secCache = a.allocUnsafe(0)), (this._decrypt = s), (this._mode = e);
}
r(689118)(s, o),
    (s.prototype._update = function (e) {
        return this._mode.encrypt(this, e, this._decrypt);
    }),
    (s.prototype._final = function () {
        this._cipher.scrub();
    }),
    (e.exports = s);
