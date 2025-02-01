var i = n(413135).Buffer,
    r = n(689118),
    a = n(258922),
    s = Array(16),
    o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
    l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
    u = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
    c = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
    d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
    f = [1352829926, 1548603684, 1836072691, 2053994217, 0];
function _() {
    a.call(this, 64), (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878), (this._e = 3285377520);
}
function p(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function h(e, t, n, i, r, a, s, o) {
    return (p((e + (t ^ n ^ i) + a + s) | 0, o) + r) | 0;
}
function m(e, t, n, i, r, a, s, o) {
    return (p((e + ((t & n) | (~t & i)) + a + s) | 0, o) + r) | 0;
}
function g(e, t, n, i, r, a, s, o) {
    return (p((e + ((t | ~n) ^ i) + a + s) | 0, o) + r) | 0;
}
function E(e, t, n, i, r, a, s, o) {
    return (p((e + ((t & i) | (n & ~i)) + a + s) | 0, o) + r) | 0;
}
function v(e, t, n, i, r, a, s, o) {
    return (p((e + (t ^ (n | ~i)) + a + s) | 0, o) + r) | 0;
}
r(_, a),
    (_.prototype._update = function () {
        for (var e, t, n = s, i = 0; i < 16; ++i) n[i] = this._block.readInt32LE(4 * i);
        for (var r = 0 | this._a, a = 0 | this._b, _ = 0 | this._c, y = 0 | this._d, I = 0 | this._e, T = 0 | this._a, b = 0 | this._b, S = 0 | this._c, A = 0 | this._d, N = 0 | this._e, C = 0; C < 80; C += 1) C < 16 ? ((e = h(r, a, _, y, I, n[o[C]], d[0], u[C])), (t = v(T, b, S, A, N, n[l[C]], f[0], c[C]))) : C < 32 ? ((e = m(r, a, _, y, I, n[o[C]], d[1], u[C])), (t = E(T, b, S, A, N, n[l[C]], f[1], c[C]))) : C < 48 ? ((e = g(r, a, _, y, I, n[o[C]], d[2], u[C])), (t = g(T, b, S, A, N, n[l[C]], f[2], c[C]))) : C < 64 ? ((e = E(r, a, _, y, I, n[o[C]], d[3], u[C])), (t = m(T, b, S, A, N, n[l[C]], f[3], c[C]))) : ((e = v(r, a, _, y, I, n[o[C]], d[4], u[C])), (t = h(T, b, S, A, N, n[l[C]], f[4], c[C]))), (r = I), (I = y), (y = p(_, 10)), (_ = a), (a = e), (T = N), (N = A), (A = p(S, 10)), (S = b), (b = t);
        var R = (this._b + _ + A) | 0;
        (this._b = (this._c + y + N) | 0), (this._c = (this._d + I + T) | 0), (this._d = (this._e + r + b) | 0), (this._e = (this._a + a + S) | 0), (this._a = R);
    }),
    (_.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128), this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), (this._blockOffset = 0)), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = i.alloc ? i.alloc(20) : new i(20);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e;
    }),
    (e.exports = _);
