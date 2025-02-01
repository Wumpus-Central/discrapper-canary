var i = n(689118),
    r = n(676972),
    a = n(957578).Buffer,
    s = [1518500249, 1859775393, -1894007588, -899497514],
    o = Array(80);
function l() {
    this.init(), (this._w = o), r.call(this, 64, 56);
}
function u(e) {
    return (e << 5) | (e >>> 27);
}
function c(e) {
    return (e << 30) | (e >>> 2);
}
function d(e, t, n, i) {
    return 0 === e ? (t & n) | (~t & i) : 2 === e ? (t & n) | (t & i) | (n & i) : t ^ n ^ i;
}
i(l, r),
    (l.prototype.init = function () {
        return (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878), (this._e = 3285377520), this;
    }),
    (l.prototype._update = function (e) {
        for (var t = this._w, n = 0 | this._a, i = 0 | this._b, r = 0 | this._c, a = 0 | this._d, o = 0 | this._e, l = 0; l < 16; ++l) t[l] = e.readInt32BE(4 * l);
        for (; l < 80; ++l) t[l] = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16];
        for (var f = 0; f < 80; ++f) {
            var _ = ~~(f / 20),
                p = (u(n) + d(_, i, r, a) + o + t[f] + s[_]) | 0;
            (o = a), (a = r), (r = c(i)), (i = n), (n = p);
        }
        (this._a = (n + this._a) | 0), (this._b = (i + this._b) | 0), (this._c = (r + this._c) | 0), (this._d = (a + this._d) | 0), (this._e = (o + this._e) | 0);
    }),
    (l.prototype._hash = function () {
        var e = a.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
    }),
    (e.exports = l);
