var r = n(903799),
    i = n(609513),
    o = n(685053),
    a = o.assert,
    s = o.parseBytes,
    l = n(226140),
    c = n(452610);
function u(e) {
    if ((a('ed25519' === e, 'only tested with ed25519 so far'), !(this instanceof u))) return new u(e);
    (e = i[e].curve), (this.curve = e), (this.g = e.g), this.g.precompute(e.n.bitLength() + 1), (this.pointClass = e.point().constructor), (this.encodingLength = Math.ceil(e.n.bitLength() / 8)), (this.hash = r.sha512);
}
(e.exports = u),
    (u.prototype.sign = function (e, t) {
        e = s(e);
        var n = this.keyFromSecret(t),
            r = this.hashInt(n.messagePrefix(), e),
            i = this.g.mul(r),
            o = this.encodePoint(i),
            a = this.hashInt(o, n.pubBytes(), e).mul(n.priv()),
            l = r.add(a).umod(this.curve.n);
        return this.makeSignature({
            R: i,
            S: l,
            Rencoded: o
        });
    }),
    (u.prototype.verify = function (e, t, n) {
        (e = s(e)), (t = this.makeSignature(t));
        var r = this.keyFromPublic(n),
            i = this.hashInt(t.Rencoded(), r.pubBytes(), e),
            o = this.g.mul(t.S());
        return t.R().add(r.pub().mul(i)).eq(o);
    }),
    (u.prototype.hashInt = function () {
        for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
        return o.intFromLE(e.digest()).umod(this.curve.n);
    }),
    (u.prototype.keyFromPublic = function (e) {
        return l.fromPublic(this, e);
    }),
    (u.prototype.keyFromSecret = function (e) {
        return l.fromSecret(this, e);
    }),
    (u.prototype.makeSignature = function (e) {
        return e instanceof c ? e : new c(this, e);
    }),
    (u.prototype.encodePoint = function (e) {
        var t = e.getY().toArray('le', this.encodingLength);
        return (t[this.encodingLength - 1] |= 128 * !!e.getX().isOdd()), t;
    }),
    (u.prototype.decodePoint = function (e) {
        var t = (e = o.parseBytes(e)).length - 1,
            n = e.slice(0, t).concat(-129 & e[t]),
            r = (128 & e[t]) != 0,
            i = o.intFromLE(n);
        return this.curve.pointFromY(i, r);
    }),
    (u.prototype.encodeInt = function (e) {
        return e.toArray('le', this.encodingLength);
    }),
    (u.prototype.decodeInt = function (e) {
        return o.intFromLE(e);
    }),
    (u.prototype.isPoint = function (e) {
        return e instanceof this.pointClass;
    });
