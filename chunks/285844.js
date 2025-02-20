var r = n(957578).Buffer,
    i = r.alloc(16, 0);
function o(e) {
    return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)];
}
function a(e) {
    var t = r.allocUnsafe(16);
    return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t;
}
function s(e) {
    (this.h = e), (this.state = r.alloc(16, 0)), (this.cache = r.allocUnsafe(0));
}
(s.prototype.ghash = function (e) {
    for (var t = -1; ++t < e.length; ) this.state[t] ^= e[t];
    this._multiply();
}),
    (s.prototype._multiply = function () {
        for (var e, t, n = o(this.h), r = [0, 0, 0, 0], i = -1; ++i < 128; ) {
            for ((this.state[~~(i / 8)] & (1 << (7 - (i % 8)))) != 0 && ((r[0] ^= n[0]), (r[1] ^= n[1]), (r[2] ^= n[2]), (r[3] ^= n[3])), t = (1 & n[3]) != 0, e = 3; e > 0; e--) n[e] = (n[e] >>> 1) | ((1 & n[e - 1]) << 31);
            (n[0] = n[0] >>> 1), t && (n[0] = -520093696 ^ n[0]);
        }
        this.state = a(r);
    }),
    (s.prototype.update = function (e) {
        var t;
        for (this.cache = r.concat([this.cache, e]); this.cache.length >= 16; ) (t = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), this.ghash(t);
    }),
    (s.prototype.final = function (e, t) {
        return this.cache.length && this.ghash(r.concat([this.cache, i], 16)), this.ghash(a([0, e, 0, t])), this.state;
    }),
    (e.exports = s);
