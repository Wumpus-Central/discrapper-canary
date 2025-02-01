var i = n(814033),
    r = n(685053),
    a = r.assert,
    s = r.cachedProperty,
    o = r.parseBytes;
function l(e, t) {
    (this.eddsa = e),
        'object' != typeof t && (t = o(t)),
        Array.isArray(t) &&
            (t = {
                R: t.slice(0, e.encodingLength),
                S: t.slice(e.encodingLength)
            }),
        a(t.R && t.S, 'Signature without R or S'),
        e.isPoint(t.R) && (this._R = t.R),
        t.S instanceof i && (this._S = t.S),
        (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
        (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
}
s(l, 'S', function () {
    return this.eddsa.decodeInt(this.Sencoded());
}),
    s(l, 'R', function () {
        return this.eddsa.decodePoint(this.Rencoded());
    }),
    s(l, 'Rencoded', function () {
        return this.eddsa.encodePoint(this.R());
    }),
    s(l, 'Sencoded', function () {
        return this.eddsa.encodeInt(this.S());
    }),
    (l.prototype.toBytes = function () {
        return this.Rencoded().concat(this.Sencoded());
    }),
    (l.prototype.toHex = function () {
        return r.encode(this.toBytes(), 'hex').toUpperCase();
    }),
    (e.exports = l);
