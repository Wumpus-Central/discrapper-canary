var r = n(21841);
function i(e) {
    (this.options = e), (this.type = this.options.type), (this.blockSize = 8), this._init(), (this.buffer = Array(this.blockSize)), (this.bufferOff = 0), (this.padding = !1 !== e.padding);
}
(e.exports = i),
    (i.prototype._init = function () {}),
    (i.prototype.update = function (e) {
        return 0 === e.length ? [] : 'decrypt' === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e);
    }),
    (i.prototype._buffer = function (e, t) {
        for (var n = Math.min(this.buffer.length - this.bufferOff, e.length - t), r = 0; r < n; r++) this.buffer[this.bufferOff + r] = e[t + r];
        return (this.bufferOff += n), n;
    }),
    (i.prototype._flushBuffer = function (e, t) {
        return this._update(this.buffer, 0, e, t), (this.bufferOff = 0), this.blockSize;
    }),
    (i.prototype._updateEncrypt = function (e) {
        var t = 0,
            n = 0,
            r = Array((((this.bufferOff + e.length) / this.blockSize) | 0) * this.blockSize);
        0 !== this.bufferOff && ((t += this._buffer(e, t)), this.bufferOff === this.buffer.length && (n += this._flushBuffer(r, n)));
        for (var i = e.length - ((e.length - t) % this.blockSize); t < i; t += this.blockSize) this._update(e, t, r, n), (n += this.blockSize);
        for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
        return r;
    }),
    (i.prototype._updateDecrypt = function (e) {
        for (var t = 0, n = 0, r = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, i = Array(r * this.blockSize); r > 0; r--) (t += this._buffer(e, t)), (n += this._flushBuffer(i, n));
        return (t += this._buffer(e, t)), i;
    }),
    (i.prototype.final = function (e) {
        var t, n;
        return (e && (t = this.update(e)), (n = 'encrypt' === this.type ? this._finalEncrypt() : this._finalDecrypt()), t) ? t.concat(n) : n;
    }),
    (i.prototype._pad = function (e, t) {
        if (0 === t) return !1;
        for (; t < e.length; ) e[t++] = 0;
        return !0;
    }),
    (i.prototype._finalEncrypt = function () {
        if (!this._pad(this.buffer, this.bufferOff)) return [];
        var e = Array(this.blockSize);
        return this._update(this.buffer, 0, e, 0), e;
    }),
    (i.prototype._unpad = function (e) {
        return e;
    }),
    (i.prototype._finalDecrypt = function () {
        r.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
        var e = Array(this.blockSize);
        return this._flushBuffer(e, 0), this._unpad(e);
    });
