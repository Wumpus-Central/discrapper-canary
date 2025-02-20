var r = n(413135).Buffer,
    i = n(136924),
    o = n(814033);
e.exports = function (e) {
    return new s(e);
};
var a = {
    secp256k1: {
        name: 'secp256k1',
        byteLength: 32
    },
    secp224r1: {
        name: 'p224',
        byteLength: 28
    },
    prime256v1: {
        name: 'p256',
        byteLength: 32
    },
    prime192v1: {
        name: 'p192',
        byteLength: 24
    },
    ed25519: {
        name: 'ed25519',
        byteLength: 32
    },
    secp384r1: {
        name: 'p384',
        byteLength: 48
    },
    secp521r1: {
        name: 'p521',
        byteLength: 66
    }
};
function s(e) {
    (this.curveType = a[e]), this.curveType || (this.curveType = { name: e }), (this.curve = new i.ec(this.curveType.name)), (this.keys = void 0);
}
function l(e, t, n) {
    Array.isArray(e) || (e = e.toArray());
    var i = new r(e);
    if (n && i.length < n) {
        var o = new r(n - i.length);
        o.fill(0), (i = r.concat([o, i]));
    }
    return t ? i.toString(t) : i;
}
(a.p224 = a.secp224r1),
    (a.p256 = a.secp256r1 = a.prime256v1),
    (a.p192 = a.secp192r1 = a.prime192v1),
    (a.p384 = a.secp384r1),
    (a.p521 = a.secp521r1),
    (s.prototype.generateKeys = function (e, t) {
        return (this.keys = this.curve.genKeyPair()), this.getPublicKey(e, t);
    }),
    (s.prototype.computeSecret = function (e, t, n) {
        return (t = t || 'utf8'), r.isBuffer(e) || (e = new r(e, t)), l(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), n, this.curveType.byteLength);
    }),
    (s.prototype.getPublicKey = function (e, t) {
        var n = this.keys.getPublic('compressed' === t, !0);
        return 'hybrid' === t && (n[n.length - 1] % 2 ? (n[0] = 7) : (n[0] = 6)), l(n, e);
    }),
    (s.prototype.getPrivateKey = function (e) {
        return l(this.keys.getPrivate(), e);
    }),
    (s.prototype.setPublicKey = function (e, t) {
        return (t = t || 'utf8'), r.isBuffer(e) || (e = new r(e, t)), this.keys._importPublic(e), this;
    }),
    (s.prototype.setPrivateKey = function (e, t) {
        (t = t || 'utf8'), r.isBuffer(e) || (e = new r(e, t));
        var n = new o(e);
        return (n = n.toString(16)), (this.keys = this.curve.genKeyPair()), this.keys._importPrivate(n), this;
    });
