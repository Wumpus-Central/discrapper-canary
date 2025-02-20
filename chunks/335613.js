var r = n(413135).Buffer,
    i = n(689118),
    o = n(258922),
    a = Array(16),
    s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
    l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
    c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
    u = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
    d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
    f = [1352829926, 1548603684, 1836072691, 2053994217, 0];
function p() {
    o.call(this, 64), (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878), (this._e = 3285377520);
}
function _(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function h(e, t, n, r, i, o, a, s) {
    return (_((e + (t ^ n ^ r) + o + a) | 0, s) + i) | 0;
}
function m(e, t, n, r, i, o, a, s) {
    return (_((e + ((t & n) | (~t & r)) + o + a) | 0, s) + i) | 0;
}
function g(e, t, n, r, i, o, a, s) {
    return (_((e + ((t | ~n) ^ r) + o + a) | 0, s) + i) | 0;
}
function E(e, t, n, r, i, o, a, s) {
    return (_((e + ((t & r) | (n & ~r)) + o + a) | 0, s) + i) | 0;
}
function v(e, t, n, r, i, o, a, s) {
    return (_((e + (t ^ (n | ~r)) + o + a) | 0, s) + i) | 0;
}
i(p, o),
    (p.prototype._update = function () {
        for (var e, t, n = a, r = 0; r < 16; ++r) n[r] = this._block.readInt32LE(4 * r);
        for (var i = 0 | this._a, o = 0 | this._b, p = 0 | this._c, b = 0 | this._d, y = 0 | this._e, O = 0 | this._a, S = 0 | this._b, I = 0 | this._c, T = 0 | this._d, N = 0 | this._e, A = 0; A < 80; A += 1) A < 16 ? ((e = h(i, o, p, b, y, n[s[A]], d[0], c[A])), (t = v(O, S, I, T, N, n[l[A]], f[0], u[A]))) : A < 32 ? ((e = m(i, o, p, b, y, n[s[A]], d[1], c[A])), (t = E(O, S, I, T, N, n[l[A]], f[1], u[A]))) : A < 48 ? ((e = g(i, o, p, b, y, n[s[A]], d[2], c[A])), (t = g(O, S, I, T, N, n[l[A]], f[2], u[A]))) : A < 64 ? ((e = E(i, o, p, b, y, n[s[A]], d[3], c[A])), (t = m(O, S, I, T, N, n[l[A]], f[3], u[A]))) : ((e = v(i, o, p, b, y, n[s[A]], d[4], c[A])), (t = h(O, S, I, T, N, n[l[A]], f[4], u[A]))), (i = y), (y = b), (b = _(p, 10)), (p = o), (o = e), (O = N), (N = T), (T = _(I, 10)), (I = S), (S = t);
        var C = (this._b + p + T) | 0;
        (this._b = (this._c + b + N) | 0), (this._c = (this._d + y + O) | 0), (this._d = (this._e + i + S) | 0), (this._e = (this._a + o + I) | 0), (this._a = C);
    }),
    (p.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128), this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), (this._blockOffset = 0)), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = r.alloc ? r.alloc(20) : new r(20);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e;
    }),
    (e.exports = p);
