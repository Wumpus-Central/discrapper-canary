var r = n(957578).Buffer;
function i(e) {
    r.isBuffer(e) || (e = r.from(e));
    for (var t = (e.length / 4) | 0, n = Array(t), i = 0; i < t; i++) n[i] = e.readUInt32BE(4 * i);
    return n;
}
function o(e) {
    for (var t = 0; t < e.length; e++) e[t] = 0;
}
function a(e, t, n, r, i) {
    for (var o, a, s, l, c = n[0], u = n[1], d = n[2], f = n[3], p = e[0] ^ t[0], _ = e[1] ^ t[1], h = e[2] ^ t[2], m = e[3] ^ t[3], g = 4, E = 1; E < i; E++) (o = c[p >>> 24] ^ u[(_ >>> 16) & 255] ^ d[(h >>> 8) & 255] ^ f[255 & m] ^ t[g++]), (a = c[_ >>> 24] ^ u[(h >>> 16) & 255] ^ d[(m >>> 8) & 255] ^ f[255 & p] ^ t[g++]), (s = c[h >>> 24] ^ u[(m >>> 16) & 255] ^ d[(p >>> 8) & 255] ^ f[255 & _] ^ t[g++]), (l = c[m >>> 24] ^ u[(p >>> 16) & 255] ^ d[(_ >>> 8) & 255] ^ f[255 & h] ^ t[g++]), (p = o), (_ = a), (h = s), (m = l);
    return (o = ((r[p >>> 24] << 24) | (r[(_ >>> 16) & 255] << 16) | (r[(h >>> 8) & 255] << 8) | r[255 & m]) ^ t[g++]), (a = ((r[_ >>> 24] << 24) | (r[(h >>> 16) & 255] << 16) | (r[(m >>> 8) & 255] << 8) | r[255 & p]) ^ t[g++]), (s = ((r[h >>> 24] << 24) | (r[(m >>> 16) & 255] << 16) | (r[(p >>> 8) & 255] << 8) | r[255 & _]) ^ t[g++]), [(o >>>= 0), (a >>>= 0), (s >>>= 0), (l = (((r[m >>> 24] << 24) | (r[(p >>> 16) & 255] << 16) | (r[(_ >>> 8) & 255] << 8) | r[255 & h]) ^ t[g++]) >>> 0)];
}
var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    l = (function () {
        for (var e = Array(256), t = 0; t < 256; t++) t < 128 ? (e[t] = t << 1) : (e[t] = (t << 1) ^ 283);
        for (var n = [], r = [], i = [[], [], [], []], o = [[], [], [], []], a = 0, s = 0, l = 0; l < 256; ++l) {
            var c = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
            (c = (c >>> 8) ^ (255 & c) ^ 99), (n[a] = c), (r[c] = a);
            var u = e[a],
                d = e[u],
                f = e[d],
                p = (257 * e[c]) ^ (16843008 * c);
            (i[0][a] = (p << 24) | (p >>> 8)), (i[1][a] = (p << 16) | (p >>> 16)), (i[2][a] = (p << 8) | (p >>> 24)), (i[3][a] = p), (p = (16843009 * f) ^ (65537 * d) ^ (257 * u) ^ (16843008 * a)), (o[0][c] = (p << 24) | (p >>> 8)), (o[1][c] = (p << 16) | (p >>> 16)), (o[2][c] = (p << 8) | (p >>> 24)), (o[3][c] = p), 0 === a ? (a = s = 1) : ((a = u ^ e[e[e[f ^ u]]]), (s ^= e[e[s]]));
        }
        return {
            SBOX: n,
            INV_SBOX: r,
            SUB_MIX: i,
            INV_SUB_MIX: o
        };
    })();
function c(e) {
    (this._key = i(e)), this._reset();
}
(c.blockSize = 16),
    (c.keySize = 32),
    (c.prototype.blockSize = c.blockSize),
    (c.prototype.keySize = c.keySize),
    (c.prototype._reset = function () {
        for (var e = this._key, t = e.length, n = t + 6, r = (n + 1) * 4, i = [], o = 0; o < t; o++) i[o] = e[o];
        for (o = t; o < r; o++) {
            var a = i[o - 1];
            o % t == 0 ? ((a = (a << 8) | (a >>> 24)), (a = ((l.SBOX[a >>> 24] << 24) | (l.SBOX[(a >>> 16) & 255] << 16) | (l.SBOX[(a >>> 8) & 255] << 8) | l.SBOX[255 & a]) ^ (s[(o / t) | 0] << 24))) : t > 6 && o % t == 4 && (a = (l.SBOX[a >>> 24] << 24) | (l.SBOX[(a >>> 16) & 255] << 16) | (l.SBOX[(a >>> 8) & 255] << 8) | l.SBOX[255 & a]), (i[o] = i[o - t] ^ a);
        }
        for (var c = [], u = 0; u < r; u++) {
            var d = r - u,
                f = i[d - (u % 4 ? 0 : 4)];
            u < 4 || d <= 4 ? (c[u] = f) : (c[u] = l.INV_SUB_MIX[0][l.SBOX[f >>> 24]] ^ l.INV_SUB_MIX[1][l.SBOX[(f >>> 16) & 255]] ^ l.INV_SUB_MIX[2][l.SBOX[(f >>> 8) & 255]] ^ l.INV_SUB_MIX[3][l.SBOX[255 & f]]);
        }
        (this._nRounds = n), (this._keySchedule = i), (this._invKeySchedule = c);
    }),
    (c.prototype.encryptBlockRaw = function (e) {
        return a((e = i(e)), this._keySchedule, l.SUB_MIX, l.SBOX, this._nRounds);
    }),
    (c.prototype.encryptBlock = function (e) {
        var t = this.encryptBlockRaw(e),
            n = r.allocUnsafe(16);
        return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n;
    }),
    (c.prototype.decryptBlock = function (e) {
        var t = (e = i(e))[1];
        (e[1] = e[3]), (e[3] = t);
        var n = a(e, this._invKeySchedule, l.INV_SUB_MIX, l.INV_SBOX, this._nRounds),
            o = r.allocUnsafe(16);
        return o.writeUInt32BE(n[0], 0), o.writeUInt32BE(n[3], 4), o.writeUInt32BE(n[2], 8), o.writeUInt32BE(n[1], 12), o;
    }),
    (c.prototype.scrub = function () {
        o(this._keySchedule), o(this._invKeySchedule), o(this._key);
    }),
    (e.exports.AES = c);
