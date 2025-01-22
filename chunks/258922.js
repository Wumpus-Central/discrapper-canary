var i = r(957578).Buffer,
    a = r(477260).Transform;
function o(e, n) {
    if (!i.isBuffer(e) && 'string' != typeof e) throw TypeError(n + ' must be a string or a buffer');
}
function s(e) {
    a.call(this), (this._block = i.allocUnsafe(e)), (this._blockSize = e), (this._blockOffset = 0), (this._length = [0, 0, 0, 0]), (this._finalized = !1);
}
r(689118)(s, a),
    (s.prototype._transform = function (e, n, r) {
        var i = null;
        try {
            this.update(e, n);
        } catch (e) {
            i = e;
        }
        r(i);
    }),
    (s.prototype._flush = function (e) {
        var n = null;
        try {
            this.push(this.digest());
        } catch (e) {
            n = e;
        }
        e(n);
    }),
    (s.prototype.update = function (e, n) {
        if ((o(e, 'Data'), this._finalized)) throw Error('Digest already called');
        !i.isBuffer(e) && (e = i.from(e, n));
        for (var r = this._block, a = 0; this._blockOffset + e.length - a >= this._blockSize; ) {
            for (var s = this._blockOffset; s < this._blockSize; ) r[s++] = e[a++];
            this._update(), (this._blockOffset = 0);
        }
        for (; a < e.length; ) r[this._blockOffset++] = e[a++];
        for (var l = 0, u = 8 * e.length; u > 0; ++l) (this._length[l] += u), (u = (this._length[l] / 4294967296) | 0) > 0 && (this._length[l] -= 4294967296 * u);
        return this;
    }),
    (s.prototype._update = function () {
        throw Error('_update is not implemented');
    }),
    (s.prototype.digest = function (e) {
        if (this._finalized) throw Error('Digest already called');
        this._finalized = !0;
        var n = this._digest();
        void 0 !== e && (n = n.toString(e)), this._block.fill(0), (this._blockOffset = 0);
        for (var r = 0; r < 4; ++r) this._length[r] = 0;
        return n;
    }),
    (s.prototype._digest = function () {
        throw Error('_digest is not implemented');
    }),
    (e.exports = s);
