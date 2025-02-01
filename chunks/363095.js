var i = n(546299),
    r = n(21841);
function a(e, t, n) {
    if (!(this instanceof a)) return new a(e, t, n);
    (this.Hash = e), (this.blockSize = e.blockSize / 8), (this.outSize = e.outSize / 8), (this.inner = null), (this.outer = null), this._init(i.toArray(t, n));
}
(e.exports = a),
    (a.prototype._init = function (e) {
        e.length > this.blockSize && (e = new this.Hash().update(e).digest()), r(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++) e.push(0);
        for (t = 0; t < e.length; t++) e[t] ^= 54;
        for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++) e[t] ^= 106;
        this.outer = new this.Hash().update(e);
    }),
    (a.prototype.update = function (e, t) {
        return this.inner.update(e, t), this;
    }),
    (a.prototype.digest = function (e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e);
    });
