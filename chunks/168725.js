var i = r(413135).Buffer,
    a = r(814033),
    o = new (r(687363))(),
    s = new a(24),
    l = new a(11),
    u = new a(10),
    c = new a(3),
    d = new a(7),
    f = r(988608),
    p = r(706178);
function h(e, n) {
    return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), (this._pub = new a(e)), this;
}
function _(e, n) {
    return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), (this._priv = new a(e)), this;
}
e.exports = E;
var m = {};
function g(e, n) {
    var r,
        i = n.toString('hex'),
        a = [i, e.toString(16)].join('_');
    if (a in m) return m[a];
    var p = 0;
    if (e.isEven() || !f.simpleSieve || !f.fermatTest(e) || !o.test(e)) return (p += 1), '02' === i || '05' === i ? (p += 8) : (p += 4), (m[a] = p), p;
    switch ((!o.test(e.shrn(1)) && (p += 2), i)) {
        case '02':
            e.mod(s).cmp(l) && (p += 8);
            break;
        case '05':
            (r = e.mod(u)).cmp(c) && r.cmp(d) && (p += 8);
            break;
        default:
            p += 4;
    }
    return (m[a] = p), p;
}
function E(e, n, r) {
    this.setGenerator(n), (this.__prime = new a(e)), (this._prime = a.mont(this.__prime)), (this._primeLen = e.length), (this._pub = void 0), (this._priv = void 0), (this._primeCode = void 0), r ? ((this.setPublicKey = h), (this.setPrivateKey = _)) : (this._primeCode = 8);
}
function v(e, n) {
    var r = new i(e.toArray());
    return n ? r.toString(n) : r;
}
Object.defineProperty(E.prototype, 'verifyError', {
    enumerable: !0,
    get: function () {
        return 'number' != typeof this._primeCode && (this._primeCode = g(this.__prime, this.__gen)), this._primeCode;
    }
}),
    (E.prototype.generateKeys = function () {
        return !this._priv && (this._priv = new a(p(this._primeLen))), (this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed()), this.getPublicKey();
    }),
    (E.prototype.computeSecret = function (e) {
        var n = new i((e = (e = new a(e)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
            r = this.getPrime();
        if (n.length < r.length) {
            var o = new i(r.length - n.length);
            o.fill(0), (n = i.concat([o, n]));
        }
        return n;
    }),
    (E.prototype.getPublicKey = function (e) {
        return v(this._pub, e);
    }),
    (E.prototype.getPrivateKey = function (e) {
        return v(this._priv, e);
    }),
    (E.prototype.getPrime = function (e) {
        return v(this.__prime, e);
    }),
    (E.prototype.getGenerator = function (e) {
        return v(this._gen, e);
    }),
    (E.prototype.setGenerator = function (e, n) {
        return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), (this.__gen = e), (this._gen = new a(e)), this;
    });
