var i = r(957578).Buffer;
function a(e) {
    !i.isBuffer(e) && (e = i.from(e));
    for (var n = (e.length / 4) | 0, r = Array(n), a = 0; a < n; a++) r[a] = e.readUInt32BE(4 * a);
    return r;
}
function o(e) {
    for (var n = 0; n < e.length; e++) e[n] = 0;
}
function s(e, n, r, i, a) {
    for (var o, s, l, u, c = r[0], d = r[1], f = r[2], p = r[3], h = e[0] ^ n[0], _ = e[1] ^ n[1], m = e[2] ^ n[2], g = e[3] ^ n[3], E = 4, v = 1; v < a; v++) (o = c[h >>> 24] ^ d[(_ >>> 16) & 255] ^ f[(m >>> 8) & 255] ^ p[255 & g] ^ n[E++]), (s = c[_ >>> 24] ^ d[(m >>> 16) & 255] ^ f[(g >>> 8) & 255] ^ p[255 & h] ^ n[E++]), (l = c[m >>> 24] ^ d[(g >>> 16) & 255] ^ f[(h >>> 8) & 255] ^ p[255 & _] ^ n[E++]), (u = c[g >>> 24] ^ d[(h >>> 16) & 255] ^ f[(_ >>> 8) & 255] ^ p[255 & m] ^ n[E++]), (h = o), (_ = s), (m = l), (g = u);
    return (o = ((i[h >>> 24] << 24) | (i[(_ >>> 16) & 255] << 16) | (i[(m >>> 8) & 255] << 8) | i[255 & g]) ^ n[E++]), (s = ((i[_ >>> 24] << 24) | (i[(m >>> 16) & 255] << 16) | (i[(g >>> 8) & 255] << 8) | i[255 & h]) ^ n[E++]), (l = ((i[m >>> 24] << 24) | (i[(g >>> 16) & 255] << 16) | (i[(h >>> 8) & 255] << 8) | i[255 & _]) ^ n[E++]), (u = ((i[g >>> 24] << 24) | (i[(h >>> 16) & 255] << 16) | (i[(_ >>> 8) & 255] << 8) | i[255 & m]) ^ n[E++]), [(o >>>= 0), (s >>>= 0), (l >>>= 0), (u >>>= 0)];
}
var l = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    u = (function () {
        for (var e = Array(256), n = 0; n < 256; n++) n < 128 ? (e[n] = n << 1) : (e[n] = (n << 1) ^ 283);
        for (var r = [], i = [], a = [[], [], [], []], o = [[], [], [], []], s = 0, l = 0, u = 0; u < 256; ++u) {
            var c = l ^ (l << 1) ^ (l << 2) ^ (l << 3) ^ (l << 4);
            (c = (c >>> 8) ^ (255 & c) ^ 99), (r[s] = c), (i[c] = s);
            var d = e[s],
                f = e[d],
                p = e[f],
                h = (257 * e[c]) ^ (16843008 * c);
            (a[0][s] = (h << 24) | (h >>> 8)), (a[1][s] = (h << 16) | (h >>> 16)), (a[2][s] = (h << 8) | (h >>> 24)), (a[3][s] = h), (h = (16843009 * p) ^ (65537 * f) ^ (257 * d) ^ (16843008 * s)), (o[0][c] = (h << 24) | (h >>> 8)), (o[1][c] = (h << 16) | (h >>> 16)), (o[2][c] = (h << 8) | (h >>> 24)), (o[3][c] = h), 0 === s ? (s = l = 1) : ((s = d ^ e[e[e[p ^ d]]]), (l ^= e[e[l]]));
        }
        return {
            SBOX: r,
            INV_SBOX: i,
            SUB_MIX: a,
            INV_SUB_MIX: o
        };
    })();
function c(e) {
    (this._key = a(e)), this._reset();
}
(c.blockSize = 16),
    (c.keySize = 32),
    (c.prototype.blockSize = c.blockSize),
    (c.prototype.keySize = c.keySize),
    (c.prototype._reset = function () {
        for (var e = this._key, n = e.length, r = n + 6, i = (r + 1) * 4, a = [], o = 0; o < n; o++) a[o] = e[o];
        for (o = n; o < i; o++) {
            var s = a[o - 1];
            o % n == 0 ? ((s = (s << 8) | (s >>> 24)), (s = ((u.SBOX[s >>> 24] << 24) | (u.SBOX[(s >>> 16) & 255] << 16) | (u.SBOX[(s >>> 8) & 255] << 8) | u.SBOX[255 & s]) ^ (l[(o / n) | 0] << 24))) : n > 6 && o % n == 4 && (s = (u.SBOX[s >>> 24] << 24) | (u.SBOX[(s >>> 16) & 255] << 16) | (u.SBOX[(s >>> 8) & 255] << 8) | u.SBOX[255 & s]), (a[o] = a[o - n] ^ s);
        }
        for (var c = [], d = 0; d < i; d++) {
            var f = i - d,
                p = a[f - (d % 4 ? 0 : 4)];
            d < 4 || f <= 4 ? (c[d] = p) : (c[d] = u.INV_SUB_MIX[0][u.SBOX[p >>> 24]] ^ u.INV_SUB_MIX[1][u.SBOX[(p >>> 16) & 255]] ^ u.INV_SUB_MIX[2][u.SBOX[(p >>> 8) & 255]] ^ u.INV_SUB_MIX[3][u.SBOX[255 & p]]);
        }
        (this._nRounds = r), (this._keySchedule = a), (this._invKeySchedule = c);
    }),
    (c.prototype.encryptBlockRaw = function (e) {
        return s((e = a(e)), this._keySchedule, u.SUB_MIX, u.SBOX, this._nRounds);
    }),
    (c.prototype.encryptBlock = function (e) {
        var n = this.encryptBlockRaw(e),
            r = i.allocUnsafe(16);
        return r.writeUInt32BE(n[0], 0), r.writeUInt32BE(n[1], 4), r.writeUInt32BE(n[2], 8), r.writeUInt32BE(n[3], 12), r;
    }),
    (c.prototype.decryptBlock = function (e) {
        var n = (e = a(e))[1];
        (e[1] = e[3]), (e[3] = n);
        var r = s(e, this._invKeySchedule, u.INV_SUB_MIX, u.INV_SBOX, this._nRounds),
            o = i.allocUnsafe(16);
        return o.writeUInt32BE(r[0], 0), o.writeUInt32BE(r[3], 4), o.writeUInt32BE(r[2], 8), o.writeUInt32BE(r[1], 12), o;
    }),
    (c.prototype.scrub = function () {
        o(this._keySchedule), o(this._invKeySchedule), o(this._key);
    }),
    (e.exports.AES = c);
