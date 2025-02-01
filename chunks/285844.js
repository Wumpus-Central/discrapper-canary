var i = n(957578).Buffer,
    r = i.alloc(16, 0);
function a(e) {
    return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)];
}
function s(e) {
    var t = i.allocUnsafe(16);
    return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t;
}
function o(e) {
    (this.h = e), (this.state = i.alloc(16, 0)), (this.cache = i.allocUnsafe(0));
}
(o.prototype.ghash = function (e) {
    for (var t = -1; ++t < e.length; ) this.state[t] ^= e[t];
    this._multiply();
}),
    (o.prototype._multiply = function () {
        for (var e, t, n = a(this.h), i = [0, 0, 0, 0], r = -1; ++r < 128; ) {
            for ((this.state[~~(r / 8)] & (1 << (7 - (r % 8)))) != 0 && ((i[0] ^= n[0]), (i[1] ^= n[1]), (i[2] ^= n[2]), (i[3] ^= n[3])), t = (1 & n[3]) != 0, e = 3; e > 0; e--) n[e] = (n[e] >>> 1) | ((1 & n[e - 1]) << 31);
            (n[0] = n[0] >>> 1), t && (n[0] = -520093696 ^ n[0]);
        }
        this.state = s(i);
    }),
    (o.prototype.update = function (e) {
        var t;
        for (this.cache = i.concat([this.cache, e]); this.cache.length >= 16; ) (t = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), this.ghash(t);
    }),
    (o.prototype.final = function (e, t) {
        return this.cache.length && this.ghash(i.concat([this.cache, r], 16)), this.ghash(s([0, e, 0, t])), this.state;
    }),
    (e.exports = o);
