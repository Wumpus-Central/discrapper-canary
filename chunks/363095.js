var i = r(546299),
    a = r(21841);
function o(e, n, r) {
    if (!(this instanceof o)) return new o(e, n, r);
    (this.Hash = e), (this.blockSize = e.blockSize / 8), (this.outSize = e.outSize / 8), (this.inner = null), (this.outer = null), this._init(i.toArray(n, r));
}
(e.exports = o),
    (o.prototype._init = function (e) {
        e.length > this.blockSize && (e = new this.Hash().update(e).digest()), a(e.length <= this.blockSize);
        for (var n = e.length; n < this.blockSize; n++) e.push(0);
        for (n = 0; n < e.length; n++) e[n] ^= 54;
        for (n = 0, this.inner = new this.Hash().update(e); n < e.length; n++) e[n] ^= 106;
        this.outer = new this.Hash().update(e);
    }),
    (o.prototype.update = function (e, n) {
        return this.inner.update(e, n), this;
    }),
    (o.prototype.digest = function (e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e);
    });
