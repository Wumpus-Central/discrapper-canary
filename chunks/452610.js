var i = r(814033),
    a = r(685053),
    o = a.assert,
    s = a.cachedProperty,
    l = a.parseBytes;
function u(e, n) {
    (this.eddsa = e),
        'object' != typeof n && (n = l(n)),
        Array.isArray(n) &&
            (n = {
                R: n.slice(0, e.encodingLength),
                S: n.slice(e.encodingLength)
            }),
        o(n.R && n.S, 'Signature without R or S'),
        e.isPoint(n.R) && (this._R = n.R),
        n.S instanceof i && (this._S = n.S),
        (this._Rencoded = Array.isArray(n.R) ? n.R : n.Rencoded),
        (this._Sencoded = Array.isArray(n.S) ? n.S : n.Sencoded);
}
s(u, 'S', function () {
    return this.eddsa.decodeInt(this.Sencoded());
}),
    s(u, 'R', function () {
        return this.eddsa.decodePoint(this.Rencoded());
    }),
    s(u, 'Rencoded', function () {
        return this.eddsa.encodePoint(this.R());
    }),
    s(u, 'Sencoded', function () {
        return this.eddsa.encodeInt(this.S());
    }),
    (u.prototype.toBytes = function () {
        return this.Rencoded().concat(this.Sencoded());
    }),
    (u.prototype.toHex = function () {
        return a.encode(this.toBytes(), 'hex').toUpperCase();
    }),
    (e.exports = u);
