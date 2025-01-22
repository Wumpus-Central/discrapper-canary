var i = r(546299),
    a = r(21841);
function o() {
    (this.pending = null), (this.pendingTotal = 0), (this.blockSize = this.constructor.blockSize), (this.outSize = this.constructor.outSize), (this.hmacStrength = this.constructor.hmacStrength), (this.padLength = this.constructor.padLength / 8), (this.endian = 'big'), (this._delta8 = this.blockSize / 8), (this._delta32 = this.blockSize / 32);
}
(n.BlockHash = o),
    (o.prototype.update = function (e, n) {
        if (((e = i.toArray(e, n)), this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e), (this.pendingTotal += e.length), this.pending.length >= this._delta8)) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)), 0 === this.pending.length && (this.pending = null), (e = i.join32(e, 0, e.length - r, this.endian));
            for (var a = 0; a < e.length; a += this._delta32) this._update(e, a, a + this._delta32);
        }
        return this;
    }),
    (o.prototype.digest = function (e) {
        return this.update(this._pad()), a(null === this.pending), this._digest(e);
    }),
    (o.prototype._pad = function () {
        var e = this.pendingTotal,
            n = this._delta8,
            r = n - ((e + this.padLength) % n),
            i = Array(r + this.padLength);
        i[0] = 128;
        for (var a = 1; a < r; a++) i[a] = 0;
        if (((e <<= 3), 'big' === this.endian)) {
            for (var o = 8; o < this.padLength; o++) i[a++] = 0;
            (i[a++] = 0), (i[a++] = 0), (i[a++] = 0), (i[a++] = 0), (i[a++] = (e >>> 24) & 255), (i[a++] = (e >>> 16) & 255), (i[a++] = (e >>> 8) & 255), (i[a++] = 255 & e);
        } else for (o = 8, i[a++] = 255 & e, i[a++] = (e >>> 8) & 255, i[a++] = (e >>> 16) & 255, i[a++] = (e >>> 24) & 255, i[a++] = 0, i[a++] = 0, i[a++] = 0, i[a++] = 0; o < this.padLength; o++) i[a++] = 0;
        return i;
    });
