var r = n(814033),
    i = n(685053),
    o = i.assert,
    a = i.cachedProperty,
    s = i.parseBytes;
function l(e, t) {
    (this.eddsa = e),
        'object' != typeof t && (t = s(t)),
        Array.isArray(t) &&
            (t = {
                R: t.slice(0, e.encodingLength),
                S: t.slice(e.encodingLength)
            }),
        o(t.R && t.S, 'Signature without R or S'),
        e.isPoint(t.R) && (this._R = t.R),
        t.S instanceof r && (this._S = t.S),
        (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
        (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
}
a(l, 'S', function () {
    return this.eddsa.decodeInt(this.Sencoded());
}),
    a(l, 'R', function () {
        return this.eddsa.decodePoint(this.Rencoded());
    }),
    a(l, 'Rencoded', function () {
        return this.eddsa.encodePoint(this.R());
    }),
    a(l, 'Sencoded', function () {
        return this.eddsa.encodeInt(this.S());
    }),
    (l.prototype.toBytes = function () {
        return this.Rencoded().concat(this.Sencoded());
    }),
    (l.prototype.toHex = function () {
        return i.encode(this.toBytes(), 'hex').toUpperCase();
    }),
    (e.exports = l);
