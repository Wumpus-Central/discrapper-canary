var i = r(685053),
    a = i.assert,
    o = i.parseBytes,
    s = i.cachedProperty;
function l(e, n) {
    (this.eddsa = e), (this._secret = o(n.secret)), e.isPoint(n.pub) ? (this._pub = n.pub) : (this._pubBytes = o(n.pub));
}
(l.fromPublic = function (e, n) {
    return n instanceof l ? n : new l(e, { pub: n });
}),
    (l.fromSecret = function (e, n) {
        return n instanceof l ? n : new l(e, { secret: n });
    }),
    (l.prototype.secret = function () {
        return this._secret;
    }),
    s(l, 'pubBytes', function () {
        return this.eddsa.encodePoint(this.pub());
    }),
    s(l, 'pub', function () {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
    }),
    s(l, 'privBytes', function () {
        var e = this.eddsa,
            n = this.hash(),
            r = e.encodingLength - 1,
            i = n.slice(0, e.encodingLength);
        return (i[0] &= 248), (i[r] &= 127), (i[r] |= 64), i;
    }),
    s(l, 'priv', function () {
        return this.eddsa.decodeInt(this.privBytes());
    }),
    s(l, 'hash', function () {
        return this.eddsa.hash().update(this.secret()).digest();
    }),
    s(l, 'messagePrefix', function () {
        return this.hash().slice(this.eddsa.encodingLength);
    }),
    (l.prototype.sign = function (e) {
        return a(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this);
    }),
    (l.prototype.verify = function (e, n) {
        return this.eddsa.verify(e, n, this);
    }),
    (l.prototype.getSecret = function (e) {
        return a(this._secret, 'KeyPair is public only'), i.encode(this.secret(), e);
    }),
    (l.prototype.getPublic = function (e) {
        return i.encode(this.pubBytes(), e);
    }),
    (e.exports = l);
