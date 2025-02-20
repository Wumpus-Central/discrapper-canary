var r = n(413135).Buffer,
    i = n(814033),
    o = new (n(687363))(),
    a = new i(24),
    s = new i(11),
    l = new i(10),
    c = new i(3),
    u = new i(7),
    d = n(988608),
    f = n(706178);
function p(e, t) {
    return (t = t || 'utf8'), r.isBuffer(e) || (e = new r(e, t)), (this._pub = new i(e)), this;
}
function _(e, t) {
    return (t = t || 'utf8'), r.isBuffer(e) || (e = new r(e, t)), (this._priv = new i(e)), this;
}
e.exports = g;
var h = {};
function m(e, t) {
    var n,
        r = t.toString('hex'),
        i = [r, e.toString(16)].join('_');
    if (i in h) return h[i];
    var f = 0;
    if (e.isEven() || !d.simpleSieve || !d.fermatTest(e) || !o.test(e)) return (f += 1), '02' === r || '05' === r ? (f += 8) : (f += 4), (h[i] = f), f;
    switch ((o.test(e.shrn(1)) || (f += 2), r)) {
        case '02':
            e.mod(a).cmp(s) && (f += 8);
            break;
        case '05':
            (n = e.mod(l)).cmp(c) && n.cmp(u) && (f += 8);
            break;
        default:
            f += 4;
    }
    return (h[i] = f), f;
}
function g(e, t, n) {
    this.setGenerator(t), (this.__prime = new i(e)), (this._prime = i.mont(this.__prime)), (this._primeLen = e.length), (this._pub = void 0), (this._priv = void 0), (this._primeCode = void 0), n ? ((this.setPublicKey = p), (this.setPrivateKey = _)) : (this._primeCode = 8);
}
function E(e, t) {
    var n = new r(e.toArray());
    return t ? n.toString(t) : n;
}
Object.defineProperty(g.prototype, 'verifyError', {
    enumerable: !0,
    get: function () {
        return 'number' != typeof this._primeCode && (this._primeCode = m(this.__prime, this.__gen)), this._primeCode;
    }
}),
    (g.prototype.generateKeys = function () {
        return this._priv || (this._priv = new i(f(this._primeLen))), (this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed()), this.getPublicKey();
    }),
    (g.prototype.computeSecret = function (e) {
        var t = new r((e = (e = new i(e)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
            n = this.getPrime();
        if (t.length < n.length) {
            var o = new r(n.length - t.length);
            o.fill(0), (t = r.concat([o, t]));
        }
        return t;
    }),
    (g.prototype.getPublicKey = function (e) {
        return E(this._pub, e);
    }),
    (g.prototype.getPrivateKey = function (e) {
        return E(this._priv, e);
    }),
    (g.prototype.getPrime = function (e) {
        return E(this.__prime, e);
    }),
    (g.prototype.getGenerator = function (e) {
        return E(this._gen, e);
    }),
    (g.prototype.setGenerator = function (e, t) {
        return (t = t || 'utf8'), r.isBuffer(e) || (e = new r(e, t)), (this.__gen = e), (this._gen = new i(e)), this;
    });
