var i = n(957578).Buffer;
function r(e, t) {
    (this._block = i.alloc(e)), (this._finalSize = t), (this._blockSize = e), (this._len = 0);
}
(r.prototype.update = function (e, t) {
    'string' == typeof e && ((t = t || 'utf8'), (e = i.from(e, t)));
    for (var n = this._block, r = this._blockSize, a = e.length, s = this._len, o = 0; o < a; ) {
        for (var l = s % r, u = Math.min(a - o, r - l), c = 0; c < u; c++) n[l + c] = e[o + c];
        (s += u), (o += u), s % r == 0 && this._update(n);
    }
    return (this._len += a), this;
}),
    (r.prototype.digest = function (e) {
        var t = this._len % this._blockSize;
        (this._block[t] = 128), this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var n = 8 * this._len;
        if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);
        else {
            var i = (4294967295 & n) >>> 0,
                r = (n - i) / 4294967296;
            this._block.writeUInt32BE(r, this._blockSize - 8), this._block.writeUInt32BE(i, this._blockSize - 4);
        }
        this._update(this._block);
        var a = this._hash();
        return e ? a.toString(e) : a;
    }),
    (r.prototype._update = function () {
        throw Error('_update must be implemented by subclass');
    }),
    (e.exports = r);
