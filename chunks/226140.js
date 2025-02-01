var i = n(685053),
    r = i.assert,
    a = i.parseBytes,
    s = i.cachedProperty;
function o(e, t) {
    (this.eddsa = e), (this._secret = a(t.secret)), e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = a(t.pub));
}
(o.fromPublic = function (e, t) {
    return t instanceof o ? t : new o(e, { pub: t });
}),
    (o.fromSecret = function (e, t) {
        return t instanceof o ? t : new o(e, { secret: t });
    }),
    (o.prototype.secret = function () {
        return this._secret;
    }),
    s(o, 'pubBytes', function () {
        return this.eddsa.encodePoint(this.pub());
    }),
    s(o, 'pub', function () {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
    }),
    s(o, 'privBytes', function () {
        var e = this.eddsa,
            t = this.hash(),
            n = e.encodingLength - 1,
            i = t.slice(0, e.encodingLength);
        return (i[0] &= 248), (i[n] &= 127), (i[n] |= 64), i;
    }),
    s(o, 'priv', function () {
        return this.eddsa.decodeInt(this.privBytes());
    }),
    s(o, 'hash', function () {
        return this.eddsa.hash().update(this.secret()).digest();
    }),
    s(o, 'messagePrefix', function () {
        return this.hash().slice(this.eddsa.encodingLength);
    }),
    (o.prototype.sign = function (e) {
        return r(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this);
    }),
    (o.prototype.verify = function (e, t) {
        return this.eddsa.verify(e, t, this);
    }),
    (o.prototype.getSecret = function (e) {
        return r(this._secret, 'KeyPair is public only'), i.encode(this.secret(), e);
    }),
    (o.prototype.getPublic = function (e) {
        return i.encode(this.pubBytes(), e);
    }),
    (e.exports = o);
