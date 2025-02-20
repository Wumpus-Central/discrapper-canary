var r = n(546299),
    i = n(21841);
function o(e, t, n) {
    if (!(this instanceof o)) return new o(e, t, n);
    (this.Hash = e), (this.blockSize = e.blockSize / 8), (this.outSize = e.outSize / 8), (this.inner = null), (this.outer = null), this._init(r.toArray(t, n));
}
(e.exports = o),
    (o.prototype._init = function (e) {
        e.length > this.blockSize && (e = new this.Hash().update(e).digest()), i(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++) e.push(0);
        for (t = 0; t < e.length; t++) e[t] ^= 54;
        for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++) e[t] ^= 106;
        this.outer = new this.Hash().update(e);
    }),
    (o.prototype.update = function (e, t) {
        return this.inner.update(e, t), this;
    }),
    (o.prototype.digest = function (e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e);
    });
