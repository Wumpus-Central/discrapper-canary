var i = r(413135).Buffer,
    a = r(689118),
    o = r(258922),
    s = Array(16),
    l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
    u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
    c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
    d = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
    f = [0, 1518500249, 1859775393, 2400959708, 2840853838],
    p = [1352829926, 1548603684, 1836072691, 2053994217, 0];
function h() {
    o.call(this, 64), (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878), (this._e = 3285377520);
}
function _(e, n) {
    return (e << n) | (e >>> (32 - n));
}
function m(e, n, r, i, a, o, s, l) {
    return (_((e + (n ^ r ^ i) + o + s) | 0, l) + a) | 0;
}
function g(e, n, r, i, a, o, s, l) {
    return (_((e + ((n & r) | (~n & i)) + o + s) | 0, l) + a) | 0;
}
function E(e, n, r, i, a, o, s, l) {
    return (_((e + ((n | ~r) ^ i) + o + s) | 0, l) + a) | 0;
}
function v(e, n, r, i, a, o, s, l) {
    return (_((e + ((n & i) | (r & ~i)) + o + s) | 0, l) + a) | 0;
}
function y(e, n, r, i, a, o, s, l) {
    return (_((e + (n ^ (r | ~i)) + o + s) | 0, l) + a) | 0;
}
a(h, o),
    (h.prototype._update = function () {
        for (var e, n, r = s, i = 0; i < 16; ++i) r[i] = this._block.readInt32LE(4 * i);
        for (var a = 0 | this._a, o = 0 | this._b, h = 0 | this._c, b = 0 | this._d, I = 0 | this._e, T = 0 | this._a, S = 0 | this._b, A = 0 | this._c, C = 0 | this._d, N = 0 | this._e, R = 0; R < 80; R += 1) R < 16 ? ((e = m(a, o, h, b, I, r[l[R]], f[0], c[R])), (n = y(T, S, A, C, N, r[u[R]], p[0], d[R]))) : R < 32 ? ((e = g(a, o, h, b, I, r[l[R]], f[1], c[R])), (n = v(T, S, A, C, N, r[u[R]], p[1], d[R]))) : R < 48 ? ((e = E(a, o, h, b, I, r[l[R]], f[2], c[R])), (n = E(T, S, A, C, N, r[u[R]], p[2], d[R]))) : R < 64 ? ((e = v(a, o, h, b, I, r[l[R]], f[3], c[R])), (n = g(T, S, A, C, N, r[u[R]], p[3], d[R]))) : ((e = y(a, o, h, b, I, r[l[R]], f[4], c[R])), (n = m(T, S, A, C, N, r[u[R]], p[4], d[R]))), (a = I), (I = b), (b = _(h, 10)), (h = o), (o = e), (T = N), (N = C), (C = _(A, 10)), (A = S), (S = n);
        var O = (this._b + h + C) | 0;
        (this._b = (this._c + b + N) | 0), (this._c = (this._d + I + T) | 0), (this._d = (this._e + a + S) | 0), (this._e = (this._a + o + A) | 0), (this._a = O);
    }),
    (h.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128), this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), (this._blockOffset = 0)), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = i.alloc ? i.alloc(20) : new i(20);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e;
    }),
    (e.exports = h);
