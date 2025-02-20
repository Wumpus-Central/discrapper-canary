var r = n(814033),
    i = n(789188),
    o = n(685053),
    a = n(609513),
    s = n(526808),
    l = o.assert,
    c = n(175671),
    u = n(361879);
function d(e) {
    if (!(this instanceof d)) return new d(e);
    'string' == typeof e && (l(Object.prototype.hasOwnProperty.call(a, e), 'Unknown curve ' + e), (e = a[e])), e instanceof a.PresetCurve && (e = { curve: e }), (this.curve = e.curve.curve), (this.n = this.curve.n), (this.nh = this.n.ushrn(1)), (this.g = this.curve.g), (this.g = e.curve.g), this.g.precompute(e.curve.n.bitLength() + 1), (this.hash = e.hash || e.curve.hash);
}
(e.exports = d),
    (d.prototype.keyPair = function (e) {
        return new c(this, e);
    }),
    (d.prototype.keyFromPrivate = function (e, t) {
        return c.fromPrivate(this, e, t);
    }),
    (d.prototype.keyFromPublic = function (e, t) {
        return c.fromPublic(this, e, t);
    }),
    (d.prototype.genKeyPair = function (e) {
        e || (e = {});
        for (
            var t = new i({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || 'utf8',
                    entropy: e.entropy || s(this.hash.hmacStrength),
                    entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                    nonce: this.n.toArray()
                }),
                n = this.n.byteLength(),
                o = this.n.sub(new r(2));
            ;

        ) {
            var a = new r(t.generate(n));
            if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
        }
    }),
    (d.prototype._truncateToN = function (e, t) {
        var n = 8 * e.byteLength() - this.n.bitLength();
        return (n > 0 && (e = e.ushrn(n)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e;
    }),
    (d.prototype.sign = function (e, t, n, o) {
        'object' == typeof n && ((o = n), (n = null)), o || (o = {}), (t = this.keyFromPrivate(t, n)), (e = this._truncateToN(new r(e, 16)));
        for (
            var a = this.n.byteLength(),
                s = t.getPrivate().toArray('be', a),
                l = e.toArray('be', a),
                c = new i({
                    hash: this.hash,
                    entropy: s,
                    nonce: l,
                    pers: o.pers,
                    persEnc: o.persEnc || 'utf8'
                }),
                d = this.n.sub(new r(1)),
                f = 0;
            ;
            f++
        ) {
            var p = o.k ? o.k(f) : new r(c.generate(this.n.byteLength()));
            if (!(0 >= (p = this._truncateToN(p, !0)).cmpn(1) || p.cmp(d) >= 0)) {
                var _ = this.g.mul(p);
                if (!_.isInfinity()) {
                    var h = _.getX(),
                        m = h.umod(this.n);
                    if (0 !== m.cmpn(0)) {
                        var g = p.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                        if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                            var E = +!!_.getY().isOdd() | (2 * (0 !== h.cmp(m)));
                            return (
                                o.canonical && g.cmp(this.nh) > 0 && ((g = this.n.sub(g)), (E ^= 1)),
                                new u({
                                    r: m,
                                    s: g,
                                    recoveryParam: E
                                })
                            );
                        }
                    }
                }
            }
        }
    }),
    (d.prototype.verify = function (e, t, n, i) {
        (e = this._truncateToN(new r(e, 16))), (n = this.keyFromPublic(n, i));
        var o,
            a = (t = new u(t, 'hex')).r,
            s = t.s;
        if (0 > a.cmpn(1) || a.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0) return !1;
        var l = s.invm(this.n),
            c = l.mul(e).umod(this.n),
            d = l.mul(a).umod(this.n);
        return this.curve._maxwellTrick ? !(o = this.g.jmulAdd(c, n.getPublic(), d)).isInfinity() && o.eqXToP(a) : !(o = this.g.mulAdd(c, n.getPublic(), d)).isInfinity() && 0 === o.getX().umod(this.n).cmp(a);
    }),
    (d.prototype.recoverPubKey = function (e, t, n, i) {
        l((3 & n) === n, 'The recovery param is more than two bits'), (t = new u(t, i));
        var o = this.n,
            a = new r(e),
            s = t.r,
            c = t.s,
            d = 1 & n,
            f = n >> 1;
        if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw Error('Unable to find sencond key candinate');
        s = f ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d);
        var p = t.r.invm(o),
            _ = o.sub(a).mul(p).umod(o),
            h = c.mul(p).umod(o);
        return this.g.mulAdd(_, s, h);
    }),
    (d.prototype.getKeyRecoveryParam = function (e, t, n, r) {
        if (null !== (t = new u(t, r)).recoveryParam) return t.recoveryParam;
        for (var i, o = 0; o < 4; o++) {
            try {
                i = this.recoverPubKey(e, t, o);
            } catch (e) {
                continue;
            }
            if (i.eq(n)) return o;
        }
        throw Error('Unable to find valid recovery factor');
    });
