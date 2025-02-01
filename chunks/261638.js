var i = n(546299),
    r = n(21841);
function a() {
    (this.pending = null), (this.pendingTotal = 0), (this.blockSize = this.constructor.blockSize), (this.outSize = this.constructor.outSize), (this.hmacStrength = this.constructor.hmacStrength), (this.padLength = this.constructor.padLength / 8), (this.endian = 'big'), (this._delta8 = this.blockSize / 8), (this._delta32 = this.blockSize / 32);
}
(t.BlockHash = a),
    (a.prototype.update = function (e, t) {
        if (((e = i.toArray(e, t)), this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e), (this.pendingTotal += e.length), this.pending.length >= this._delta8)) {
            var n = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - n, e.length)), 0 === this.pending.length && (this.pending = null), (e = i.join32(e, 0, e.length - n, this.endian));
            for (var r = 0; r < e.length; r += this._delta32) this._update(e, r, r + this._delta32);
        }
        return this;
    }),
    (a.prototype.digest = function (e) {
        return this.update(this._pad()), r(null === this.pending), this._digest(e);
    }),
    (a.prototype._pad = function () {
        var e = this.pendingTotal,
            t = this._delta8,
            n = t - ((e + this.padLength) % t),
            i = Array(n + this.padLength);
        i[0] = 128;
        for (var r = 1; r < n; r++) i[r] = 0;
        if (((e <<= 3), 'big' === this.endian)) {
            for (var a = 8; a < this.padLength; a++) i[r++] = 0;
            (i[r++] = 0), (i[r++] = 0), (i[r++] = 0), (i[r++] = 0), (i[r++] = (e >>> 24) & 255), (i[r++] = (e >>> 16) & 255), (i[r++] = (e >>> 8) & 255), (i[r++] = 255 & e);
        } else for (a = 8, i[r++] = 255 & e, i[r++] = (e >>> 8) & 255, i[r++] = (e >>> 16) & 255, i[r++] = (e >>> 24) & 255, i[r++] = 0, i[r++] = 0, i[r++] = 0, i[r++] = 0; a < this.padLength; a++) i[r++] = 0;
        return i;
    });
