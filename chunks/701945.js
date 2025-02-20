var r = n(689118),
    i = n(676972),
    o = n(957578).Buffer,
    a = [1518500249, 1859775393, -1894007588, -899497514],
    s = Array(80);
function l() {
    this.init(), (this._w = s), i.call(this, 64, 56);
}
function c(e) {
    return (e << 1) | (e >>> 31);
}
function u(e) {
    return (e << 5) | (e >>> 27);
}
function d(e) {
    return (e << 30) | (e >>> 2);
}
function f(e, t, n, r) {
    return 0 === e ? (t & n) | (~t & r) : 2 === e ? (t & n) | (t & r) | (n & r) : t ^ n ^ r;
}
r(l, i),
    (l.prototype.init = function () {
        return (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878), (this._e = 3285377520), this;
    }),
    (l.prototype._update = function (e) {
        for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, o = 0 | this._d, s = 0 | this._e, l = 0; l < 16; ++l) t[l] = e.readInt32BE(4 * l);
        for (; l < 80; ++l) t[l] = c(t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]);
        for (var p = 0; p < 80; ++p) {
            var _ = ~~(p / 20),
                h = (u(n) + f(_, r, i, o) + s + t[p] + a[_]) | 0;
            (s = o), (o = i), (i = d(r)), (r = n), (n = h);
        }
        (this._a = (n + this._a) | 0), (this._b = (r + this._b) | 0), (this._c = (i + this._c) | 0), (this._d = (o + this._d) | 0), (this._e = (s + this._e) | 0);
    }),
    (l.prototype._hash = function () {
        var e = o.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
    }),
    (e.exports = l);
