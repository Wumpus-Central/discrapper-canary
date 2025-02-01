var i = n(21841);
function r(e) {
    (this.options = e), (this.type = this.options.type), (this.blockSize = 8), this._init(), (this.buffer = Array(this.blockSize)), (this.bufferOff = 0), (this.padding = !1 !== e.padding);
}
(e.exports = r),
    (r.prototype._init = function () {}),
    (r.prototype.update = function (e) {
        return 0 === e.length ? [] : 'decrypt' === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e);
    }),
    (r.prototype._buffer = function (e, t) {
        for (var n = Math.min(this.buffer.length - this.bufferOff, e.length - t), i = 0; i < n; i++) this.buffer[this.bufferOff + i] = e[t + i];
        return (this.bufferOff += n), n;
    }),
    (r.prototype._flushBuffer = function (e, t) {
        return this._update(this.buffer, 0, e, t), (this.bufferOff = 0), this.blockSize;
    }),
    (r.prototype._updateEncrypt = function (e) {
        var t = 0,
            n = 0,
            i = Array((((this.bufferOff + e.length) / this.blockSize) | 0) * this.blockSize);
        0 !== this.bufferOff && ((t += this._buffer(e, t)), this.bufferOff === this.buffer.length && (n += this._flushBuffer(i, n)));
        for (var r = e.length - ((e.length - t) % this.blockSize); t < r; t += this.blockSize) this._update(e, t, i, n), (n += this.blockSize);
        for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
        return i;
    }),
    (r.prototype._updateDecrypt = function (e) {
        for (var t = 0, n = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, r = Array(i * this.blockSize); i > 0; i--) (t += this._buffer(e, t)), (n += this._flushBuffer(r, n));
        return (t += this._buffer(e, t)), r;
    }),
    (r.prototype.final = function (e) {
        var t, n;
        return (e && (t = this.update(e)), (n = 'encrypt' === this.type ? this._finalEncrypt() : this._finalDecrypt()), t) ? t.concat(n) : n;
    }),
    (r.prototype._pad = function (e, t) {
        if (0 === t) return !1;
        for (; t < e.length; ) e[t++] = 0;
        return !0;
    }),
    (r.prototype._finalEncrypt = function () {
        if (!this._pad(this.buffer, this.bufferOff)) return [];
        var e = Array(this.blockSize);
        return this._update(this.buffer, 0, e, 0), e;
    }),
    (r.prototype._unpad = function (e) {
        return e;
    }),
    (r.prototype._finalDecrypt = function () {
        i.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
        var e = Array(this.blockSize);
        return this._flushBuffer(e, 0), this._unpad(e);
    });
