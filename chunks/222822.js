var r = n(458340),
    i = n(957578).Buffer,
    o = n(764900);
function a(e, t, n, a) {
    o.call(this), (this._cipher = new r.AES(t)), (this._prev = i.from(n)), (this._cache = i.allocUnsafe(0)), (this._secCache = i.allocUnsafe(0)), (this._decrypt = a), (this._mode = e);
}
n(689118)(a, o),
    (a.prototype._update = function (e) {
        return this._mode.encrypt(this, e, this._decrypt);
    }),
    (a.prototype._final = function () {
        this._cipher.scrub();
    }),
    (e.exports = a);
