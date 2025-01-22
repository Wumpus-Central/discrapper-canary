var i = r(814033),
    a = r(789188),
    o = r(685053),
    s = r(609513),
    l = r(526808),
    u = o.assert,
    c = r(175671),
    d = r(361879);
function f(e) {
    if (!(this instanceof f)) return new f(e);
    'string' == typeof e && (u(Object.prototype.hasOwnProperty.call(s, e), 'Unknown curve ' + e), (e = s[e])), e instanceof s.PresetCurve && (e = { curve: e }), (this.curve = e.curve.curve), (this.n = this.curve.n), (this.nh = this.n.ushrn(1)), (this.g = this.curve.g), (this.g = e.curve.g), this.g.precompute(e.curve.n.bitLength() + 1), (this.hash = e.hash || e.curve.hash);
}
(e.exports = f),
    (f.prototype.keyPair = function (e) {
        return new c(this, e);
    }),
    (f.prototype.keyFromPrivate = function (e, n) {
        return c.fromPrivate(this, e, n);
    }),
    (f.prototype.keyFromPublic = function (e, n) {
        return c.fromPublic(this, e, n);
    }),
    (f.prototype.genKeyPair = function (e) {
        !e && (e = {});
        for (
            var n = new a({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || 'utf8',
                    entropy: e.entropy || l(this.hash.hmacStrength),
                    entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                    nonce: this.n.toArray()
                }),
                r = this.n.byteLength(),
                o = this.n.sub(new i(2));
            ;

        ) {
            var s = new i(n.generate(r));
            if (!(s.cmp(o) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
        }
    }),
    (f.prototype._truncateToN = function (e, n) {
        var r = 8 * e.byteLength() - this.n.bitLength();
        return (r > 0 && (e = e.ushrn(r)), !n && e.cmp(this.n) >= 0) ? e.sub(this.n) : e;
    }),
    (f.prototype.sign = function (e, n, r, o) {
        'object' == typeof r && ((o = r), (r = null)), !o && (o = {}), (n = this.keyFromPrivate(n, r)), (e = this._truncateToN(new i(e, 16)));
        for (
            var s = this.n.byteLength(),
                l = n.getPrivate().toArray('be', s),
                u = e.toArray('be', s),
                c = new a({
                    hash: this.hash,
                    entropy: l,
                    nonce: u,
                    pers: o.pers,
                    persEnc: o.persEnc || 'utf8'
                }),
                f = this.n.sub(new i(1)),
                p = 0;
            ;
            p++
        ) {
            var h = o.k ? o.k(p) : new i(c.generate(this.n.byteLength()));
            if (0 >= (h = this._truncateToN(h, !0)).cmpn(1) || h.cmp(f) >= 0) continue;
            var _ = this.g.mul(h);
            if (_.isInfinity()) continue;
            var m = _.getX(),
                g = m.umod(this.n);
            if (0 !== g.cmpn(0)) {
                var E = h.invm(this.n).mul(g.mul(n.getPrivate()).iadd(e));
                if (0 !== (E = E.umod(this.n)).cmpn(0)) {
                    var v = (_.getY().isOdd() ? 1 : 0) | (0 !== m.cmp(g) ? 2 : 0);
                    return (
                        o.canonical && E.cmp(this.nh) > 0 && ((E = this.n.sub(E)), (v ^= 1)),
                        new d({
                            r: g,
                            s: E,
                            recoveryParam: v
                        })
                    );
                }
            }
        }
    }),
    (f.prototype.verify = function (e, n, r, a) {
        (e = this._truncateToN(new i(e, 16))), (r = this.keyFromPublic(r, a));
        var o,
            s = (n = new d(n, 'hex')).r,
            l = n.s;
        if (0 > s.cmpn(1) || s.cmp(this.n) >= 0 || 0 > l.cmpn(1) || l.cmp(this.n) >= 0) return !1;
        var u = l.invm(this.n),
            c = u.mul(e).umod(this.n),
            f = u.mul(s).umod(this.n);
        if (!this.curve._maxwellTrick) return !(o = this.g.mulAdd(c, r.getPublic(), f)).isInfinity() && 0 === o.getX().umod(this.n).cmp(s);
        return !(o = this.g.jmulAdd(c, r.getPublic(), f)).isInfinity() && o.eqXToP(s);
    }),
    (f.prototype.recoverPubKey = function (e, n, r, a) {
        u((3 & r) === r, 'The recovery param is more than two bits'), (n = new d(n, a));
        var o = this.n,
            s = new i(e),
            l = n.r,
            c = n.s,
            f = 1 & r,
            p = r >> 1;
        if (l.cmp(this.curve.p.umod(this.curve.n)) >= 0 && p) throw Error('Unable to find sencond key candinate');
        l = p ? this.curve.pointFromX(l.add(this.curve.n), f) : this.curve.pointFromX(l, f);
        var h = n.r.invm(o),
            _ = o.sub(s).mul(h).umod(o),
            m = c.mul(h).umod(o);
        return this.g.mulAdd(_, l, m);
    }),
    (f.prototype.getKeyRecoveryParam = function (e, n, r, i) {
        if (null !== (n = new d(n, i)).recoveryParam) return n.recoveryParam;
        for (var a, o = 0; o < 4; o++) {
            try {
                a = this.recoverPubKey(e, n, o);
            } catch (e) {
                continue;
            }
            if (a.eq(r)) return o;
        }
        throw Error('Unable to find valid recovery factor');
    });
