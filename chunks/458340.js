var i = n(957578).Buffer;
function r(e) {
    i.isBuffer(e) || (e = i.from(e));
    for (var t = (e.length / 4) | 0, n = Array(t), r = 0; r < t; r++) n[r] = e.readUInt32BE(4 * r);
    return n;
}
function a(e) {
    for (var t = 0; t < e.length; e++) e[t] = 0;
}
function s(e, t, n, i, r) {
    for (var a, s, o, l, u = n[0], c = n[1], d = n[2], f = n[3], _ = e[0] ^ t[0], p = e[1] ^ t[1], h = e[2] ^ t[2], m = e[3] ^ t[3], g = 4, E = 1; E < r; E++) (a = u[_ >>> 24] ^ c[(p >>> 16) & 255] ^ d[(h >>> 8) & 255] ^ f[255 & m] ^ t[g++]), (s = u[p >>> 24] ^ c[(h >>> 16) & 255] ^ d[(m >>> 8) & 255] ^ f[255 & _] ^ t[g++]), (o = u[h >>> 24] ^ c[(m >>> 16) & 255] ^ d[(_ >>> 8) & 255] ^ f[255 & p] ^ t[g++]), (l = u[m >>> 24] ^ c[(_ >>> 16) & 255] ^ d[(p >>> 8) & 255] ^ f[255 & h] ^ t[g++]), (_ = a), (p = s), (h = o), (m = l);
    return (a = ((i[_ >>> 24] << 24) | (i[(p >>> 16) & 255] << 16) | (i[(h >>> 8) & 255] << 8) | i[255 & m]) ^ t[g++]), (s = ((i[p >>> 24] << 24) | (i[(h >>> 16) & 255] << 16) | (i[(m >>> 8) & 255] << 8) | i[255 & _]) ^ t[g++]), (o = ((i[h >>> 24] << 24) | (i[(m >>> 16) & 255] << 16) | (i[(_ >>> 8) & 255] << 8) | i[255 & p]) ^ t[g++]), [(a >>>= 0), (s >>>= 0), (o >>>= 0), (l = (((i[m >>> 24] << 24) | (i[(_ >>> 16) & 255] << 16) | (i[(p >>> 8) & 255] << 8) | i[255 & h]) ^ t[g++]) >>> 0)];
}
var o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    l = (function () {
        for (var e = Array(256), t = 0; t < 256; t++) t < 128 ? (e[t] = t << 1) : (e[t] = (t << 1) ^ 283);
        for (var n = [], i = [], r = [[], [], [], []], a = [[], [], [], []], s = 0, o = 0, l = 0; l < 256; ++l) {
            var u = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4);
            (u = (u >>> 8) ^ (255 & u) ^ 99), (n[s] = u), (i[u] = s);
            var c = e[s],
                d = e[c],
                f = e[d],
                _ = (257 * e[u]) ^ (16843008 * u);
            (r[0][s] = (_ << 24) | (_ >>> 8)), (r[1][s] = (_ << 16) | (_ >>> 16)), (r[2][s] = (_ << 8) | (_ >>> 24)), (r[3][s] = _), (_ = (16843009 * f) ^ (65537 * d) ^ (257 * c) ^ (16843008 * s)), (a[0][u] = (_ << 24) | (_ >>> 8)), (a[1][u] = (_ << 16) | (_ >>> 16)), (a[2][u] = (_ << 8) | (_ >>> 24)), (a[3][u] = _), 0 === s ? (s = o = 1) : ((s = c ^ e[e[e[f ^ c]]]), (o ^= e[e[o]]));
        }
        return {
            SBOX: n,
            INV_SBOX: i,
            SUB_MIX: r,
            INV_SUB_MIX: a
        };
    })();
function u(e) {
    (this._key = r(e)), this._reset();
}
(u.blockSize = 16),
    (u.keySize = 32),
    (u.prototype.blockSize = u.blockSize),
    (u.prototype.keySize = u.keySize),
    (u.prototype._reset = function () {
        for (var e = this._key, t = e.length, n = t + 6, i = (n + 1) * 4, r = [], a = 0; a < t; a++) r[a] = e[a];
        for (a = t; a < i; a++) {
            var s = r[a - 1];
            a % t == 0 ? ((s = (s << 8) | (s >>> 24)), (s = ((l.SBOX[s >>> 24] << 24) | (l.SBOX[(s >>> 16) & 255] << 16) | (l.SBOX[(s >>> 8) & 255] << 8) | l.SBOX[255 & s]) ^ (o[(a / t) | 0] << 24))) : t > 6 && a % t == 4 && (s = (l.SBOX[s >>> 24] << 24) | (l.SBOX[(s >>> 16) & 255] << 16) | (l.SBOX[(s >>> 8) & 255] << 8) | l.SBOX[255 & s]), (r[a] = r[a - t] ^ s);
        }
        for (var u = [], c = 0; c < i; c++) {
            var d = i - c,
                f = r[d - (c % 4 ? 0 : 4)];
            c < 4 || d <= 4 ? (u[c] = f) : (u[c] = l.INV_SUB_MIX[0][l.SBOX[f >>> 24]] ^ l.INV_SUB_MIX[1][l.SBOX[(f >>> 16) & 255]] ^ l.INV_SUB_MIX[2][l.SBOX[(f >>> 8) & 255]] ^ l.INV_SUB_MIX[3][l.SBOX[255 & f]]);
        }
        (this._nRounds = n), (this._keySchedule = r), (this._invKeySchedule = u);
    }),
    (u.prototype.encryptBlockRaw = function (e) {
        return s((e = r(e)), this._keySchedule, l.SUB_MIX, l.SBOX, this._nRounds);
    }),
    (u.prototype.encryptBlock = function (e) {
        var t = this.encryptBlockRaw(e),
            n = i.allocUnsafe(16);
        return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n;
    }),
    (u.prototype.decryptBlock = function (e) {
        var t = (e = r(e))[1];
        (e[1] = e[3]), (e[3] = t);
        var n = s(e, this._invKeySchedule, l.INV_SUB_MIX, l.INV_SBOX, this._nRounds),
            a = i.allocUnsafe(16);
        return a.writeUInt32BE(n[0], 0), a.writeUInt32BE(n[3], 4), a.writeUInt32BE(n[2], 8), a.writeUInt32BE(n[1], 12), a;
    }),
    (u.prototype.scrub = function () {
        a(this._keySchedule), a(this._invKeySchedule), a(this._key);
    }),
    (e.exports.AES = u);
