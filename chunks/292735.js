var r = n(689118),
    i = n(258922),
    o = n(957578).Buffer,
    a = Array(16);
function s() {
    i.call(this, 64), (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878);
}
function l(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function c(e, t, n, r, i, o, a) {
    return (l((e + ((t & n) | (~t & r)) + i + o) | 0, a) + t) | 0;
}
function u(e, t, n, r, i, o, a) {
    return (l((e + ((t & r) | (n & ~r)) + i + o) | 0, a) + t) | 0;
}
function d(e, t, n, r, i, o, a) {
    return (l((e + (t ^ n ^ r) + i + o) | 0, a) + t) | 0;
}
function f(e, t, n, r, i, o, a) {
    return (l((e + (n ^ (t | ~r)) + i + o) | 0, a) + t) | 0;
}
r(s, i),
    (s.prototype._update = function () {
        for (var e = a, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
        var n = this._a,
            r = this._b,
            i = this._c,
            o = this._d;
        (n = c(n, r, i, o, e[0], 3614090360, 7)), (o = c(o, n, r, i, e[1], 3905402710, 12)), (i = c(i, o, n, r, e[2], 606105819, 17)), (r = c(r, i, o, n, e[3], 3250441966, 22)), (n = c(n, r, i, o, e[4], 4118548399, 7)), (o = c(o, n, r, i, e[5], 1200080426, 12)), (i = c(i, o, n, r, e[6], 2821735955, 17)), (r = c(r, i, o, n, e[7], 4249261313, 22)), (n = c(n, r, i, o, e[8], 1770035416, 7)), (o = c(o, n, r, i, e[9], 2336552879, 12)), (i = c(i, o, n, r, e[10], 4294925233, 17)), (r = c(r, i, o, n, e[11], 2304563134, 22)), (n = c(n, r, i, o, e[12], 1804603682, 7)), (o = c(o, n, r, i, e[13], 4254626195, 12)), (i = c(i, o, n, r, e[14], 2792965006, 17)), (r = c(r, i, o, n, e[15], 1236535329, 22)), (n = u(n, r, i, o, e[1], 4129170786, 5)), (o = u(o, n, r, i, e[6], 3225465664, 9)), (i = u(i, o, n, r, e[11], 643717713, 14)), (r = u(r, i, o, n, e[0], 3921069994, 20)), (n = u(n, r, i, o, e[5], 3593408605, 5)), (o = u(o, n, r, i, e[10], 38016083, 9)), (i = u(i, o, n, r, e[15], 3634488961, 14)), (r = u(r, i, o, n, e[4], 3889429448, 20)), (n = u(n, r, i, o, e[9], 568446438, 5)), (o = u(o, n, r, i, e[14], 3275163606, 9)), (i = u(i, o, n, r, e[3], 4107603335, 14)), (r = u(r, i, o, n, e[8], 1163531501, 20)), (n = u(n, r, i, o, e[13], 2850285829, 5)), (o = u(o, n, r, i, e[2], 4243563512, 9)), (i = u(i, o, n, r, e[7], 1735328473, 14)), (r = u(r, i, o, n, e[12], 2368359562, 20)), (n = d(n, r, i, o, e[5], 4294588738, 4)), (o = d(o, n, r, i, e[8], 2272392833, 11)), (i = d(i, o, n, r, e[11], 1839030562, 16)), (r = d(r, i, o, n, e[14], 4259657740, 23)), (n = d(n, r, i, o, e[1], 2763975236, 4)), (o = d(o, n, r, i, e[4], 1272893353, 11)), (i = d(i, o, n, r, e[7], 4139469664, 16)), (r = d(r, i, o, n, e[10], 3200236656, 23)), (n = d(n, r, i, o, e[13], 681279174, 4)), (o = d(o, n, r, i, e[0], 3936430074, 11)), (i = d(i, o, n, r, e[3], 3572445317, 16)), (r = d(r, i, o, n, e[6], 76029189, 23)), (n = d(n, r, i, o, e[9], 3654602809, 4)), (o = d(o, n, r, i, e[12], 3873151461, 11)), (i = d(i, o, n, r, e[15], 530742520, 16)), (r = d(r, i, o, n, e[2], 3299628645, 23)), (n = f(n, r, i, o, e[0], 4096336452, 6)), (o = f(o, n, r, i, e[7], 1126891415, 10)), (i = f(i, o, n, r, e[14], 2878612391, 15)), (r = f(r, i, o, n, e[5], 4237533241, 21)), (n = f(n, r, i, o, e[12], 1700485571, 6)), (o = f(o, n, r, i, e[3], 2399980690, 10)), (i = f(i, o, n, r, e[10], 4293915773, 15)), (r = f(r, i, o, n, e[1], 2240044497, 21)), (n = f(n, r, i, o, e[8], 1873313359, 6)), (o = f(o, n, r, i, e[15], 4264355552, 10)), (i = f(i, o, n, r, e[6], 2734768916, 15)), (r = f(r, i, o, n, e[13], 1309151649, 21)), (n = f(n, r, i, o, e[4], 4149444226, 6)), (o = f(o, n, r, i, e[11], 3174756917, 10)), (i = f(i, o, n, r, e[2], 718787259, 15)), (r = f(r, i, o, n, e[9], 3951481745, 21)), (this._a = (this._a + n) | 0), (this._b = (this._b + r) | 0), (this._c = (this._c + i) | 0), (this._d = (this._d + o) | 0);
    }),
    (s.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128), this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), (this._blockOffset = 0)), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = o.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e;
    }),
    (e.exports = s);
