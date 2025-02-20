var r = n(685053),
    i = r.assert,
    o = r.parseBytes,
    a = r.cachedProperty;
function s(e, t) {
    (this.eddsa = e), (this._secret = o(t.secret)), e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = o(t.pub));
}
(s.fromPublic = function (e, t) {
    return t instanceof s ? t : new s(e, { pub: t });
}),
    (s.fromSecret = function (e, t) {
        return t instanceof s ? t : new s(e, { secret: t });
    }),
    (s.prototype.secret = function () {
        return this._secret;
    }),
    a(s, 'pubBytes', function () {
        return this.eddsa.encodePoint(this.pub());
    }),
    a(s, 'pub', function () {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
    }),
    a(s, 'privBytes', function () {
        var e = this.eddsa,
            t = this.hash(),
            n = e.encodingLength - 1,
            r = t.slice(0, e.encodingLength);
        return (r[0] &= 248), (r[n] &= 127), (r[n] |= 64), r;
    }),
    a(s, 'priv', function () {
        return this.eddsa.decodeInt(this.privBytes());
    }),
    a(s, 'hash', function () {
        return this.eddsa.hash().update(this.secret()).digest();
    }),
    a(s, 'messagePrefix', function () {
        return this.hash().slice(this.eddsa.encodingLength);
    }),
    (s.prototype.sign = function (e) {
        return i(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this);
    }),
    (s.prototype.verify = function (e, t) {
        return this.eddsa.verify(e, t, this);
    }),
    (s.prototype.getSecret = function (e) {
        return i(this._secret, 'KeyPair is public only'), r.encode(this.secret(), e);
    }),
    (s.prototype.getPublic = function (e) {
        return r.encode(this.pubBytes(), e);
    }),
    (e.exports = s);
