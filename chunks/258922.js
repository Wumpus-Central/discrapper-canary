var i = n(957578).Buffer,
    r = n(477260).Transform;
function a(e, t) {
    if (!i.isBuffer(e) && 'string' != typeof e) throw TypeError(t + ' must be a string or a buffer');
}
function s(e) {
    r.call(this), (this._block = i.allocUnsafe(e)), (this._blockSize = e), (this._blockOffset = 0), (this._length = [0, 0, 0, 0]), (this._finalized = !1);
}
n(689118)(s, r),
    (s.prototype._transform = function (e, t, n) {
        var i = null;
        try {
            this.update(e, t);
        } catch (e) {
            i = e;
        }
        n(i);
    }),
    (s.prototype._flush = function (e) {
        var t = null;
        try {
            this.push(this.digest());
        } catch (e) {
            t = e;
        }
        e(t);
    }),
    (s.prototype.update = function (e, t) {
        if ((a(e, 'Data'), this._finalized)) throw Error('Digest already called');
        i.isBuffer(e) || (e = i.from(e, t));
        for (var n = this._block, r = 0; this._blockOffset + e.length - r >= this._blockSize; ) {
            for (var s = this._blockOffset; s < this._blockSize; ) n[s++] = e[r++];
            this._update(), (this._blockOffset = 0);
        }
        for (; r < e.length; ) n[this._blockOffset++] = e[r++];
        for (var o = 0, l = 8 * e.length; l > 0; ++o) (this._length[o] += l), (l = (this._length[o] / 4294967296) | 0) > 0 && (this._length[o] -= 4294967296 * l);
        return this;
    }),
    (s.prototype._update = function () {
        throw Error('_update is not implemented');
    }),
    (s.prototype.digest = function (e) {
        if (this._finalized) throw Error('Digest already called');
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)), this._block.fill(0), (this._blockOffset = 0);
        for (var n = 0; n < 4; ++n) this._length[n] = 0;
        return t;
    }),
    (s.prototype._digest = function () {
        throw Error('_digest is not implemented');
    }),
    (e.exports = s);
