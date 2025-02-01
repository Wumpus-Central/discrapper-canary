var i = n(458340),
    r = n(957578).Buffer,
    a = n(764900);
function s(e, t, n, s) {
    a.call(this), (this._cipher = new i.AES(t)), (this._prev = r.from(n)), (this._cache = r.allocUnsafe(0)), (this._secCache = r.allocUnsafe(0)), (this._decrypt = s), (this._mode = e);
}
n(689118)(s, a),
    (s.prototype._update = function (e) {
        return this._mode.encrypt(this, e, this._decrypt);
    }),
    (s.prototype._final = function () {
        this._cipher.scrub();
    }),
    (e.exports = s);
