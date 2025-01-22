var i = r(957578).Buffer,
    a = i.alloc(16, 0);
function o(e) {
    return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)];
}
function s(e) {
    var n = i.allocUnsafe(16);
    return n.writeUInt32BE(e[0] >>> 0, 0), n.writeUInt32BE(e[1] >>> 0, 4), n.writeUInt32BE(e[2] >>> 0, 8), n.writeUInt32BE(e[3] >>> 0, 12), n;
}
function l(e) {
    (this.h = e), (this.state = i.alloc(16, 0)), (this.cache = i.allocUnsafe(0));
}
(l.prototype.ghash = function (e) {
    for (var n = -1; ++n < e.length; ) this.state[n] ^= e[n];
    this._multiply();
}),
    (l.prototype._multiply = function () {
        for (var e, n, r = o(this.h), i = [0, 0, 0, 0], a = -1; ++a < 128; ) {
            for ((this.state[~~(a / 8)] & (1 << (7 - (a % 8)))) != 0 && ((i[0] ^= r[0]), (i[1] ^= r[1]), (i[2] ^= r[2]), (i[3] ^= r[3])), n = (1 & r[3]) != 0, e = 3; e > 0; e--) r[e] = (r[e] >>> 1) | ((1 & r[e - 1]) << 31);
            (r[0] = r[0] >>> 1), n && (r[0] = -520093696 ^ r[0]);
        }
        this.state = s(i);
    }),
    (l.prototype.update = function (e) {
        var n;
        for (this.cache = i.concat([this.cache, e]); this.cache.length >= 16; ) (n = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), this.ghash(n);
    }),
    (l.prototype.final = function (e, n) {
        return this.cache.length && this.ghash(i.concat([this.cache, a], 16)), this.ghash(s([0, e, 0, n])), this.state;
    }),
    (e.exports = l);
