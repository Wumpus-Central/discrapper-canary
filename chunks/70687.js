var i = r(546299),
    a = r(261638),
    o = r(411108),
    s = i.rotl32,
    l = i.sum32,
    u = i.sum32_5,
    c = o.ft_1,
    d = a.BlockHash,
    f = [1518500249, 1859775393, 2400959708, 3395469782];
function p() {
    if (!(this instanceof p)) return new p();
    d.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = Array(80));
}
i.inherits(p, d),
    (e.exports = p),
    (p.blockSize = 512),
    (p.outSize = 160),
    (p.hmacStrength = 80),
    (p.padLength = 64),
    (p.prototype._update = function (e, n) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = e[n + i];
        for (; i < r.length; i++) r[i] = s(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
        var a = this.h[0],
            o = this.h[1],
            d = this.h[2],
            p = this.h[3],
            h = this.h[4];
        for (i = 0; i < r.length; i++) {
            var _ = ~~(i / 20),
                m = u(s(a, 5), c(_, o, d, p), h, r[i], f[_]);
            (h = p), (p = d), (d = s(o, 30)), (o = a), (a = m);
        }
        (this.h[0] = l(this.h[0], a)), (this.h[1] = l(this.h[1], o)), (this.h[2] = l(this.h[2], d)), (this.h[3] = l(this.h[3], p)), (this.h[4] = l(this.h[4], h));
    }),
    (p.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
    });
