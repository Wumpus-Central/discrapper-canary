var i = n(546299),
    r = n(261638),
    a = n(411108),
    s = i.rotl32,
    o = i.sum32,
    l = i.sum32_5,
    u = a.ft_1,
    c = r.BlockHash,
    d = [1518500249, 1859775393, 2400959708, 3395469782];
function f() {
    if (!(this instanceof f)) return new f();
    c.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = Array(80));
}
i.inherits(f, c),
    (e.exports = f),
    (f.blockSize = 512),
    (f.outSize = 160),
    (f.hmacStrength = 80),
    (f.padLength = 64),
    (f.prototype._update = function (e, t) {
        for (var n = this.W, i = 0; i < 16; i++) n[i] = e[t + i];
        for (; i < n.length; i++) n[i] = s(n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16], 1);
        var r = this.h[0],
            a = this.h[1],
            c = this.h[2],
            f = this.h[3],
            _ = this.h[4];
        for (i = 0; i < n.length; i++) {
            var p = ~~(i / 20),
                h = l(s(r, 5), u(p, a, c, f), _, n[i], d[p]);
            (_ = f), (f = c), (c = s(a, 30)), (a = r), (r = h);
        }
        (this.h[0] = o(this.h[0], r)), (this.h[1] = o(this.h[1], a)), (this.h[2] = o(this.h[2], c)), (this.h[3] = o(this.h[3], f)), (this.h[4] = o(this.h[4], _));
    }),
    (f.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
    });
