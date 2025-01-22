var i = r(903799),
    a = r(609513),
    o = r(685053),
    s = o.assert,
    l = o.parseBytes,
    u = r(226140),
    c = r(452610);
function d(e) {
    if ((s('ed25519' === e, 'only tested with ed25519 so far'), !(this instanceof d))) return new d(e);
    (e = a[e].curve), (this.curve = e), (this.g = e.g), this.g.precompute(e.n.bitLength() + 1), (this.pointClass = e.point().constructor), (this.encodingLength = Math.ceil(e.n.bitLength() / 8)), (this.hash = i.sha512);
}
(e.exports = d),
    (d.prototype.sign = function (e, n) {
        e = l(e);
        var r = this.keyFromSecret(n),
            i = this.hashInt(r.messagePrefix(), e),
            a = this.g.mul(i),
            o = this.encodePoint(a),
            s = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
            u = i.add(s).umod(this.curve.n);
        return this.makeSignature({
            R: a,
            S: u,
            Rencoded: o
        });
    }),
    (d.prototype.verify = function (e, n, r) {
        (e = l(e)), (n = this.makeSignature(n));
        var i = this.keyFromPublic(r),
            a = this.hashInt(n.Rencoded(), i.pubBytes(), e),
            o = this.g.mul(n.S());
        return n.R().add(i.pub().mul(a)).eq(o);
    }),
    (d.prototype.hashInt = function () {
        for (var e = this.hash(), n = 0; n < arguments.length; n++) e.update(arguments[n]);
        return o.intFromLE(e.digest()).umod(this.curve.n);
    }),
    (d.prototype.keyFromPublic = function (e) {
        return u.fromPublic(this, e);
    }),
    (d.prototype.keyFromSecret = function (e) {
        return u.fromSecret(this, e);
    }),
    (d.prototype.makeSignature = function (e) {
        return e instanceof c ? e : new c(this, e);
    }),
    (d.prototype.encodePoint = function (e) {
        var n = e.getY().toArray('le', this.encodingLength);
        return (n[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), n;
    }),
    (d.prototype.decodePoint = function (e) {
        var n = (e = o.parseBytes(e)).length - 1,
            r = e.slice(0, n).concat(-129 & e[n]),
            i = (128 & e[n]) != 0,
            a = o.intFromLE(r);
        return this.curve.pointFromY(a, i);
    }),
    (d.prototype.encodeInt = function (e) {
        return e.toArray('le', this.encodingLength);
    }),
    (d.prototype.decodeInt = function (e) {
        return o.intFromLE(e);
    }),
    (d.prototype.isPoint = function (e) {
        return e instanceof this.pointClass;
    });
