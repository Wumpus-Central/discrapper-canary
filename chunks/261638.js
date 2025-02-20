var r = n(546299),
    i = n(21841);
function o() {
    (this.pending = null), (this.pendingTotal = 0), (this.blockSize = this.constructor.blockSize), (this.outSize = this.constructor.outSize), (this.hmacStrength = this.constructor.hmacStrength), (this.padLength = this.constructor.padLength / 8), (this.endian = 'big'), (this._delta8 = this.blockSize / 8), (this._delta32 = this.blockSize / 32);
}
(t.BlockHash = o),
    (o.prototype.update = function (e, t) {
        if (((e = r.toArray(e, t)), this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e), (this.pendingTotal += e.length), this.pending.length >= this._delta8)) {
            var n = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - n, e.length)), 0 === this.pending.length && (this.pending = null), (e = r.join32(e, 0, e.length - n, this.endian));
            for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32);
        }
        return this;
    }),
    (o.prototype.digest = function (e) {
        return this.update(this._pad()), i(null === this.pending), this._digest(e);
    }),
    (o.prototype._pad = function () {
        var e = this.pendingTotal,
            t = this._delta8,
            n = t - ((e + this.padLength) % t),
            r = Array(n + this.padLength);
        r[0] = 128;
        for (var i = 1; i < n; i++) r[i] = 0;
        if (((e <<= 3), 'big' === this.endian)) {
            for (var o = 8; o < this.padLength; o++) r[i++] = 0;
            (r[i++] = 0), (r[i++] = 0), (r[i++] = 0), (r[i++] = 0), (r[i++] = (e >>> 24) & 255), (r[i++] = (e >>> 16) & 255), (r[i++] = (e >>> 8) & 255), (r[i++] = 255 & e);
        } else for (o = 8, r[i++] = 255 & e, r[i++] = (e >>> 8) & 255, r[i++] = (e >>> 16) & 255, r[i++] = (e >>> 24) & 255, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0; o < this.padLength; o++) r[i++] = 0;
        return r;
    });
