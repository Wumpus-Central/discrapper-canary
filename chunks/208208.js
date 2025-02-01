var i = n(903799),
    r = n(609513),
    a = n(685053),
    s = a.assert,
    o = a.parseBytes,
    l = n(226140),
    u = n(452610);
function c(e) {
    if ((s('ed25519' === e, 'only tested with ed25519 so far'), !(this instanceof c))) return new c(e);
    (e = r[e].curve), (this.curve = e), (this.g = e.g), this.g.precompute(e.n.bitLength() + 1), (this.pointClass = e.point().constructor), (this.encodingLength = Math.ceil(e.n.bitLength() / 8)), (this.hash = i.sha512);
}
(e.exports = c),
    (c.prototype.sign = function (e, t) {
        e = o(e);
        var n = this.keyFromSecret(t),
            i = this.hashInt(n.messagePrefix(), e),
            r = this.g.mul(i),
            a = this.encodePoint(r),
            s = this.hashInt(a, n.pubBytes(), e).mul(n.priv()),
            l = i.add(s).umod(this.curve.n);
        return this.makeSignature({
            R: r,
            S: l,
            Rencoded: a
        });
    }),
    (c.prototype.verify = function (e, t, n) {
        (e = o(e)), (t = this.makeSignature(t));
        var i = this.keyFromPublic(n),
            r = this.hashInt(t.Rencoded(), i.pubBytes(), e),
            a = this.g.mul(t.S());
        return t.R().add(i.pub().mul(r)).eq(a);
    }),
    (c.prototype.hashInt = function () {
        for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
        return a.intFromLE(e.digest()).umod(this.curve.n);
    }),
    (c.prototype.keyFromPublic = function (e) {
        return l.fromPublic(this, e);
    }),
    (c.prototype.keyFromSecret = function (e) {
        return l.fromSecret(this, e);
    }),
    (c.prototype.makeSignature = function (e) {
        return e instanceof u ? e : new u(this, e);
    }),
    (c.prototype.encodePoint = function (e) {
        var t = e.getY().toArray('le', this.encodingLength);
        return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t;
    }),
    (c.prototype.decodePoint = function (e) {
        var t = (e = a.parseBytes(e)).length - 1,
            n = e.slice(0, t).concat(-129 & e[t]),
            i = (128 & e[t]) != 0,
            r = a.intFromLE(n);
        return this.curve.pointFromY(r, i);
    }),
    (c.prototype.encodeInt = function (e) {
        return e.toArray('le', this.encodingLength);
    }),
    (c.prototype.decodeInt = function (e) {
        return a.intFromLE(e);
    }),
    (c.prototype.isPoint = function (e) {
        return e instanceof this.pointClass;
    });
