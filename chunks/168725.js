var i = n(413135).Buffer,
    r = n(814033),
    a = new (n(687363))(),
    s = new r(24),
    o = new r(11),
    l = new r(10),
    u = new r(3),
    c = new r(7),
    d = n(988608),
    f = n(706178);
function _(e, t) {
    return (t = t || 'utf8'), i.isBuffer(e) || (e = new i(e, t)), (this._pub = new r(e)), this;
}
function p(e, t) {
    return (t = t || 'utf8'), i.isBuffer(e) || (e = new i(e, t)), (this._priv = new r(e)), this;
}
e.exports = g;
var h = {};
function m(e, t) {
    var n,
        i = t.toString('hex'),
        r = [i, e.toString(16)].join('_');
    if (r in h) return h[r];
    var f = 0;
    if (e.isEven() || !d.simpleSieve || !d.fermatTest(e) || !a.test(e)) return (f += 1), '02' === i || '05' === i ? (f += 8) : (f += 4), (h[r] = f), f;
    switch ((a.test(e.shrn(1)) || (f += 2), i)) {
        case '02':
            e.mod(s).cmp(o) && (f += 8);
            break;
        case '05':
            (n = e.mod(l)).cmp(u) && n.cmp(c) && (f += 8);
            break;
        default:
            f += 4;
    }
    return (h[r] = f), f;
}
function g(e, t, n) {
    this.setGenerator(t), (this.__prime = new r(e)), (this._prime = r.mont(this.__prime)), (this._primeLen = e.length), (this._pub = void 0), (this._priv = void 0), (this._primeCode = void 0), n ? ((this.setPublicKey = _), (this.setPrivateKey = p)) : (this._primeCode = 8);
}
function E(e, t) {
    var n = new i(e.toArray());
    return t ? n.toString(t) : n;
}
Object.defineProperty(g.prototype, 'verifyError', {
    enumerable: !0,
    get: function () {
        return 'number' != typeof this._primeCode && (this._primeCode = m(this.__prime, this.__gen)), this._primeCode;
    }
}),
    (g.prototype.generateKeys = function () {
        return this._priv || (this._priv = new r(f(this._primeLen))), (this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed()), this.getPublicKey();
    }),
    (g.prototype.computeSecret = function (e) {
        var t = new i((e = (e = new r(e)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
            n = this.getPrime();
        if (t.length < n.length) {
            var a = new i(n.length - t.length);
            a.fill(0), (t = i.concat([a, t]));
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
        return (t = t || 'utf8'), i.isBuffer(e) || (e = new i(e, t)), (this.__gen = e), (this._gen = new r(e)), this;
    });
