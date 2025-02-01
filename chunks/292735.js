var i = n(689118),
    r = n(258922),
    a = n(957578).Buffer,
    s = Array(16);
function o() {
    r.call(this, 64), (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878);
}
function l(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function u(e, t, n, i, r, a, s) {
    return (l((e + ((t & n) | (~t & i)) + r + a) | 0, s) + t) | 0;
}
function c(e, t, n, i, r, a, s) {
    return (l((e + ((t & i) | (n & ~i)) + r + a) | 0, s) + t) | 0;
}
function d(e, t, n, i, r, a, s) {
    return (l((e + (t ^ n ^ i) + r + a) | 0, s) + t) | 0;
}
function f(e, t, n, i, r, a, s) {
    return (l((e + (n ^ (t | ~i)) + r + a) | 0, s) + t) | 0;
}
i(o, r),
    (o.prototype._update = function () {
        for (var e = s, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
        var n = this._a,
            i = this._b,
            r = this._c,
            a = this._d;
        (n = u(n, i, r, a, e[0], 3614090360, 7)), (a = u(a, n, i, r, e[1], 3905402710, 12)), (r = u(r, a, n, i, e[2], 606105819, 17)), (i = u(i, r, a, n, e[3], 3250441966, 22)), (n = u(n, i, r, a, e[4], 4118548399, 7)), (a = u(a, n, i, r, e[5], 1200080426, 12)), (r = u(r, a, n, i, e[6], 2821735955, 17)), (i = u(i, r, a, n, e[7], 4249261313, 22)), (n = u(n, i, r, a, e[8], 1770035416, 7)), (a = u(a, n, i, r, e[9], 2336552879, 12)), (r = u(r, a, n, i, e[10], 4294925233, 17)), (i = u(i, r, a, n, e[11], 2304563134, 22)), (n = u(n, i, r, a, e[12], 1804603682, 7)), (a = u(a, n, i, r, e[13], 4254626195, 12)), (r = u(r, a, n, i, e[14], 2792965006, 17)), (i = u(i, r, a, n, e[15], 1236535329, 22)), (n = c(n, i, r, a, e[1], 4129170786, 5)), (a = c(a, n, i, r, e[6], 3225465664, 9)), (r = c(r, a, n, i, e[11], 643717713, 14)), (i = c(i, r, a, n, e[0], 3921069994, 20)), (n = c(n, i, r, a, e[5], 3593408605, 5)), (a = c(a, n, i, r, e[10], 38016083, 9)), (r = c(r, a, n, i, e[15], 3634488961, 14)), (i = c(i, r, a, n, e[4], 3889429448, 20)), (n = c(n, i, r, a, e[9], 568446438, 5)), (a = c(a, n, i, r, e[14], 3275163606, 9)), (r = c(r, a, n, i, e[3], 4107603335, 14)), (i = c(i, r, a, n, e[8], 1163531501, 20)), (n = c(n, i, r, a, e[13], 2850285829, 5)), (a = c(a, n, i, r, e[2], 4243563512, 9)), (r = c(r, a, n, i, e[7], 1735328473, 14)), (i = c(i, r, a, n, e[12], 2368359562, 20)), (n = d(n, i, r, a, e[5], 4294588738, 4)), (a = d(a, n, i, r, e[8], 2272392833, 11)), (r = d(r, a, n, i, e[11], 1839030562, 16)), (i = d(i, r, a, n, e[14], 4259657740, 23)), (n = d(n, i, r, a, e[1], 2763975236, 4)), (a = d(a, n, i, r, e[4], 1272893353, 11)), (r = d(r, a, n, i, e[7], 4139469664, 16)), (i = d(i, r, a, n, e[10], 3200236656, 23)), (n = d(n, i, r, a, e[13], 681279174, 4)), (a = d(a, n, i, r, e[0], 3936430074, 11)), (r = d(r, a, n, i, e[3], 3572445317, 16)), (i = d(i, r, a, n, e[6], 76029189, 23)), (n = d(n, i, r, a, e[9], 3654602809, 4)), (a = d(a, n, i, r, e[12], 3873151461, 11)), (r = d(r, a, n, i, e[15], 530742520, 16)), (i = d(i, r, a, n, e[2], 3299628645, 23)), (n = f(n, i, r, a, e[0], 4096336452, 6)), (a = f(a, n, i, r, e[7], 1126891415, 10)), (r = f(r, a, n, i, e[14], 2878612391, 15)), (i = f(i, r, a, n, e[5], 4237533241, 21)), (n = f(n, i, r, a, e[12], 1700485571, 6)), (a = f(a, n, i, r, e[3], 2399980690, 10)), (r = f(r, a, n, i, e[10], 4293915773, 15)), (i = f(i, r, a, n, e[1], 2240044497, 21)), (n = f(n, i, r, a, e[8], 1873313359, 6)), (a = f(a, n, i, r, e[15], 4264355552, 10)), (r = f(r, a, n, i, e[6], 2734768916, 15)), (i = f(i, r, a, n, e[13], 1309151649, 21)), (n = f(n, i, r, a, e[4], 4149444226, 6)), (a = f(a, n, i, r, e[11], 3174756917, 10)), (r = f(r, a, n, i, e[2], 718787259, 15)), (i = f(i, r, a, n, e[9], 3951481745, 21)), (this._a = (this._a + n) | 0), (this._b = (this._b + i) | 0), (this._c = (this._c + r) | 0), (this._d = (this._d + a) | 0);
    }),
    (o.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128), this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), (this._blockOffset = 0)), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = a.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e;
    }),
    (e.exports = o);
