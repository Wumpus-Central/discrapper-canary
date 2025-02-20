var r = n(957578).Buffer;
function i(e, t) {
    (this._block = r.alloc(e)), (this._finalSize = t), (this._blockSize = e), (this._len = 0);
}
(i.prototype.update = function (e, t) {
    'string' == typeof e && ((t = t || 'utf8'), (e = r.from(e, t)));
    for (var n = this._block, i = this._blockSize, o = e.length, a = this._len, s = 0; s < o; ) {
        for (var l = a % i, c = Math.min(o - s, i - l), u = 0; u < c; u++) n[l + u] = e[s + u];
        (a += c), (s += c), a % i == 0 && this._update(n);
    }
    return (this._len += o), this;
}),
    (i.prototype.digest = function (e) {
        var t = this._len % this._blockSize;
        (this._block[t] = 128), this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var n = 8 * this._len;
        if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);
        else {
            var r = (4294967295 & n) >>> 0,
                i = (n - r) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4);
        }
        this._update(this._block);
        var o = this._hash();
        return e ? o.toString(e) : o;
    }),
    (i.prototype._update = function () {
        throw Error('_update must be implemented by subclass');
    }),
    (e.exports = i);
