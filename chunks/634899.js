var i = r(546299),
    a = r(261638),
    o = i.rotl32,
    s = i.sum32,
    l = i.sum32_3,
    u = i.sum32_4,
    c = a.BlockHash;
function d() {
    if (!(this instanceof d)) return new d();
    c.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.endian = 'little');
}
function f(e, n, r, i) {
    if (e <= 15) return n ^ r ^ i;
    if (e <= 31) return (n & r) | (~n & i);
    if (e <= 47) return (n | ~r) ^ i;
    else if (e <= 63) return (n & i) | (r & ~i);
    else return n ^ (r | ~i);
}
function p(e) {
    if (e <= 15) return 0;
    if (e <= 31) return 1518500249;
    if (e <= 47) return 1859775393;
    else if (e <= 63) return 2400959708;
    else return 2840853838;
}
function h(e) {
    if (e <= 15) return 1352829926;
    if (e <= 31) return 1548603684;
    if (e <= 47) return 1836072691;
    else if (e <= 63) return 2053994217;
    else return 0;
}
i.inherits(d, c),
    (n.ripemd160 = d),
    (d.blockSize = 512),
    (d.outSize = 160),
    (d.hmacStrength = 192),
    (d.padLength = 64),
    (d.prototype._update = function (e, n) {
        for (var r = this.h[0], i = this.h[1], a = this.h[2], c = this.h[3], d = this.h[4], v = r, y = i, b = a, I = c, T = d, S = 0; S < 80; S++) {
            var A = s(o(u(r, f(S, i, a, c), e[_[S] + n], p(S)), g[S]), d);
            (r = d), (d = c), (c = o(a, 10)), (a = i), (i = A), (A = s(o(u(v, f(79 - S, y, b, I), e[m[S] + n], h(S)), E[S]), T)), (v = T), (T = I), (I = o(b, 10)), (b = y), (y = A);
        }
        (A = l(this.h[1], a, I)), (this.h[1] = l(this.h[2], c, T)), (this.h[2] = l(this.h[3], d, v)), (this.h[3] = l(this.h[4], r, y)), (this.h[4] = l(this.h[0], i, b)), (this.h[0] = A);
    }),
    (d.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h, 'little') : i.split32(this.h, 'little');
    });
var _ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
    m = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
    g = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
    E = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
