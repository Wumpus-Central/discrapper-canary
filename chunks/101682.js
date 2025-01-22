var i = r(685053),
    a = r(814033),
    o = r(689118),
    s = r(806981),
    l = i.assert;
function u(e) {
    s.call(this, 'short', e), (this.a = new a(e.a, 16).toRed(this.red)), (this.b = new a(e.b, 16).toRed(this.red)), (this.tinv = this.two.redInvm()), (this.zeroA = 0 === this.a.fromRed().cmpn(0)), (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)), (this.endo = this._getEndomorphism(e)), (this._endoWnafT1 = [, , , ,]), (this._endoWnafT2 = [, , , ,]);
}
function c(e, n, r, i) {
    s.BasePoint.call(this, e, 'affine'), null === n && null === r ? ((this.x = null), (this.y = null), (this.inf = !0)) : ((this.x = new a(n, 16)), (this.y = new a(r, 16)), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), (this.inf = !1));
}
function d(e, n, r, i) {
    s.BasePoint.call(this, e, 'jacobian'), null === n && null === r && null === i ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new a(0))) : ((this.x = new a(n, 16)), (this.y = new a(r, 16)), (this.z = new a(i, 16))), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one);
}
o(u, s),
    (e.exports = u),
    (u.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) n = new a(e.beta, 16).toRed(this.red);
            else {
                var n,
                    r,
                    i,
                    o = this._getEndoRoots(this.p);
                n = (n = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red);
            }
            if (e.lambda) r = new a(e.lambda, 16);
            else {
                var s = this._getEndoRoots(this.n);
                0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(n)) ? (r = s[0]) : ((r = s[1]), l(0 === this.g.mul(r).x.cmp(this.g.x.redMul(n))));
            }
            return (
                (i = e.basis
                    ? e.basis.map(function (e) {
                          return {
                              a: new a(e.a, 16),
                              b: new a(e.b, 16)
                          };
                      })
                    : this._getEndoBasis(r)),
                {
                    beta: n,
                    lambda: r,
                    basis: i
                }
            );
        }
    }),
    (u.prototype._getEndoRoots = function (e) {
        var n = e === this.p ? this.red : a.mont(e),
            r = new a(2).toRed(n).redInvm(),
            i = r.redNeg(),
            o = new a(3).toRed(n).redNeg().redSqrt().redMul(r);
        return [i.redAdd(o).fromRed(), i.redSub(o).fromRed()];
    }),
    (u.prototype._getEndoBasis = function (e) {
        for (var n, r, i, o, s, l, u, c, d, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), p = e, h = this.n.clone(), _ = new a(1), m = new a(0), g = new a(0), E = new a(1), v = 0; 0 !== p.cmpn(0); ) {
            var y = h.div(p);
            (c = h.sub(y.mul(p))), (d = g.sub(y.mul(_)));
            var b = E.sub(y.mul(m));
            if (!i && 0 > c.cmp(f)) (n = u.neg()), (r = _), (i = c.neg()), (o = d);
            else if (i && 2 == ++v) break;
            (u = c), (h = p), (p = c), (g = _), (_ = d), (E = m), (m = b);
        }
        (s = c.neg()), (l = d);
        var I = i.sqr().add(o.sqr());
        return (
            s.sqr().add(l.sqr()).cmp(I) >= 0 && ((s = n), (l = r)),
            i.negative && ((i = i.neg()), (o = o.neg())),
            s.negative && ((s = s.neg()), (l = l.neg())),
            [
                {
                    a: i,
                    b: o
                },
                {
                    a: s,
                    b: l
                }
            ]
        );
    }),
    (u.prototype._endoSplit = function (e) {
        var n = this.endo.basis,
            r = n[0],
            i = n[1],
            a = i.b.mul(e).divRound(this.n),
            o = r.b.neg().mul(e).divRound(this.n),
            s = a.mul(r.a),
            l = o.mul(i.a),
            u = a.mul(r.b),
            c = o.mul(i.b);
        return {
            k1: e.sub(s).sub(l),
            k2: u.add(c).neg()
        };
    }),
    (u.prototype.pointFromX = function (e, n) {
        !(e = new a(e, 16)).red && (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            i = r.redSqrt();
        if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error('invalid point');
        var o = i.fromRed().isOdd();
        return ((n && !o) || (!n && o)) && (i = i.redNeg()), this.point(e, i);
    }),
    (u.prototype.validate = function (e) {
        if (e.inf) return !0;
        var n = e.x,
            r = e.y,
            i = this.a.redMul(n),
            a = n.redSqr().redMul(n).redIAdd(i).redIAdd(this.b);
        return 0 === r.redSqr().redISub(a).cmpn(0);
    }),
    (u.prototype._endoWnafMulAdd = function (e, n, r) {
        for (var i = this._endoWnafT1, a = this._endoWnafT2, o = 0; o < e.length; o++) {
            var s = this._endoSplit(n[o]),
                l = e[o],
                u = l._getBeta();
            s.k1.negative && (s.k1.ineg(), (l = l.neg(!0))), s.k2.negative && (s.k2.ineg(), (u = u.neg(!0))), (i[2 * o] = l), (i[2 * o + 1] = u), (a[2 * o] = s.k1), (a[2 * o + 1] = s.k2);
        }
        for (var c = this._wnafMulAdd(1, i, a, 2 * o, r), d = 0; d < 2 * o; d++) (i[d] = null), (a[d] = null);
        return c;
    }),
    o(c, s.BasePoint),
    (u.prototype.point = function (e, n, r) {
        return new c(this, e, n, r);
    }),
    (u.prototype.pointFromJSON = function (e, n) {
        return c.fromJSON(this, e, n);
    }),
    (c.prototype._getBeta = function () {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var n = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve,
                    i = function (e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y);
                    };
                (e.beta = n),
                    (n.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(i)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(i)
                        }
                    });
            }
            return n;
        }
    }),
    (c.prototype.toJSON = function () {
        return this.precomputed
            ? [
                  this.x,
                  this.y,
                  this.precomputed && {
                      doubles: this.precomputed.doubles && {
                          step: this.precomputed.doubles.step,
                          points: this.precomputed.doubles.points.slice(1)
                      },
                      naf: this.precomputed.naf && {
                          wnd: this.precomputed.naf.wnd,
                          points: this.precomputed.naf.points.slice(1)
                      }
                  }
              ]
            : [this.x, this.y];
    }),
    (c.fromJSON = function (e, n, r) {
        'string' == typeof n && (n = JSON.parse(n));
        var i = e.point(n[0], n[1], r);
        if (!n[2]) return i;
        function a(n) {
            return e.point(n[0], n[1], r);
        }
        var o = n[2];
        return (
            (i.precomputed = {
                beta: null,
                doubles: o.doubles && {
                    step: o.doubles.step,
                    points: [i].concat(o.doubles.points.map(a))
                },
                naf: o.naf && {
                    wnd: o.naf.wnd,
                    points: [i].concat(o.naf.points.map(a))
                }
            }),
            i
        );
    }),
    (c.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
    }),
    (c.prototype.isInfinity = function () {
        return this.inf;
    }),
    (c.prototype.add = function (e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var n = this.y.redSub(e.y);
        0 !== n.cmpn(0) && (n = n.redMul(this.x.redSub(e.x).redInvm()));
        var r = n.redSqr().redISub(this.x).redISub(e.x),
            i = n.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, i);
    }),
    (c.prototype.dbl = function () {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var n = this.curve.a,
            r = this.x.redSqr(),
            i = e.redInvm(),
            a = r.redAdd(r).redIAdd(r).redIAdd(n).redMul(i),
            o = a.redSqr().redISub(this.x.redAdd(this.x)),
            s = a.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, s);
    }),
    (c.prototype.getX = function () {
        return this.x.fromRed();
    }),
    (c.prototype.getY = function () {
        return this.y.fromRed();
    }),
    (c.prototype.mul = function (e) {
        if (((e = new a(e, 16)), this.isInfinity())) return this;
        if (this._hasDoubles(e)) return this.curve._fixedNafMul(this, e);
        if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [e]);
        else return this.curve._wnafMul(this, e);
    }),
    (c.prototype.mulAdd = function (e, n, r) {
        var i = [this, n],
            a = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, a) : this.curve._wnafMulAdd(1, i, a, 2);
    }),
    (c.prototype.jmulAdd = function (e, n, r) {
        var i = [this, n],
            a = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, a, !0) : this.curve._wnafMulAdd(1, i, a, 2, !0);
    }),
    (c.prototype.eq = function (e) {
        return this === e || (this.inf === e.inf && (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))));
    }),
    (c.prototype.neg = function (e) {
        if (this.inf) return this;
        var n = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var r = this.precomputed,
                i = function (e) {
                    return e.neg();
                };
            n.precomputed = {
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(i)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(i)
                }
            };
        }
        return n;
    }),
    (c.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
    }),
    o(d, s.BasePoint),
    (u.prototype.jpoint = function (e, n, r) {
        return new d(this, e, n, r);
    }),
    (d.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            n = e.redSqr(),
            r = this.x.redMul(n),
            i = this.y.redMul(n).redMul(e);
        return this.curve.point(r, i);
    }),
    (d.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }),
    (d.prototype.add = function (e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var n = e.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(n),
            a = e.x.redMul(r),
            o = this.y.redMul(n.redMul(e.z)),
            s = e.y.redMul(r.redMul(this.z)),
            l = i.redSub(a),
            u = o.redSub(s);
        if (0 === l.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = l.redSqr(),
            d = c.redMul(l),
            f = i.redMul(c),
            p = u.redSqr().redIAdd(d).redISub(f).redISub(f),
            h = u.redMul(f.redISub(p)).redISub(o.redMul(d)),
            _ = this.z.redMul(e.z).redMul(l);
        return this.curve.jpoint(p, h, _);
    }),
    (d.prototype.mixedAdd = function (e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var n = this.z.redSqr(),
            r = this.x,
            i = e.x.redMul(n),
            a = this.y,
            o = e.y.redMul(n).redMul(this.z),
            s = r.redSub(i),
            l = a.redSub(o);
        if (0 === s.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = s.redSqr(),
            c = u.redMul(s),
            d = r.redMul(u),
            f = l.redSqr().redIAdd(c).redISub(d).redISub(d),
            p = l.redMul(d.redISub(f)).redISub(a.redMul(c)),
            h = this.z.redMul(s);
        return this.curve.jpoint(f, p, h);
    }),
    (d.prototype.dblp = function (e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var n,
                r = this;
            for (n = 0; n < e; n++) r = r.dbl();
            return r;
        }
        var i = this.curve.a,
            a = this.curve.tinv,
            o = this.x,
            s = this.y,
            l = this.z,
            u = l.redSqr().redSqr(),
            c = s.redAdd(s);
        for (n = 0; n < e; n++) {
            var d = o.redSqr(),
                f = c.redSqr(),
                p = f.redSqr(),
                h = d.redAdd(d).redIAdd(d).redIAdd(i.redMul(u)),
                _ = o.redMul(f),
                m = h.redSqr().redISub(_.redAdd(_)),
                g = _.redISub(m),
                E = h.redMul(g);
            E = E.redIAdd(E).redISub(p);
            var v = c.redMul(l);
            n + 1 < e && (u = u.redMul(p)), (o = m), (l = v), (c = E);
        }
        return this.curve.jpoint(o, c.redMul(a), l);
    }),
    (d.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    }),
    (d.prototype._zeroDbl = function () {
        if (this.zOne) {
            var e,
                n,
                r,
                i = this.x.redSqr(),
                a = this.y.redSqr(),
                o = a.redSqr(),
                s = this.x.redAdd(a).redSqr().redISub(i).redISub(o);
            s = s.redIAdd(s);
            var l = i.redAdd(i).redIAdd(i),
                u = l.redSqr().redISub(s).redISub(s),
                c = o.redIAdd(o);
            (c = (c = c.redIAdd(c)).redIAdd(c)), (e = u), (n = l.redMul(s.redISub(u)).redISub(c)), (r = this.y.redAdd(this.y));
        } else {
            var d = this.x.redSqr(),
                f = this.y.redSqr(),
                p = f.redSqr(),
                h = this.x.redAdd(f).redSqr().redISub(d).redISub(p);
            h = h.redIAdd(h);
            var _ = d.redAdd(d).redIAdd(d),
                m = _.redSqr(),
                g = p.redIAdd(p);
            (g = (g = g.redIAdd(g)).redIAdd(g)), (e = m.redISub(h).redISub(h)), (n = _.redMul(h.redISub(e)).redISub(g)), (r = (r = this.y.redMul(this.z)).redIAdd(r));
        }
        return this.curve.jpoint(e, n, r);
    }),
    (d.prototype._threeDbl = function () {
        if (this.zOne) {
            var e,
                n,
                r,
                i = this.x.redSqr(),
                a = this.y.redSqr(),
                o = a.redSqr(),
                s = this.x.redAdd(a).redSqr().redISub(i).redISub(o);
            s = s.redIAdd(s);
            var l = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                u = l.redSqr().redISub(s).redISub(s);
            e = u;
            var c = o.redIAdd(o);
            (c = (c = c.redIAdd(c)).redIAdd(c)), (n = l.redMul(s.redISub(u)).redISub(c)), (r = this.y.redAdd(this.y));
        } else {
            var d = this.z.redSqr(),
                f = this.y.redSqr(),
                p = this.x.redMul(f),
                h = this.x.redSub(d).redMul(this.x.redAdd(d));
            h = h.redAdd(h).redIAdd(h);
            var _ = p.redIAdd(p),
                m = (_ = _.redIAdd(_)).redAdd(_);
            (e = h.redSqr().redISub(m)), (r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(d));
            var g = f.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)), (n = h.redMul(_.redISub(e)).redISub(g));
        }
        return this.curve.jpoint(e, n, r);
    }),
    (d.prototype._dbl = function () {
        var e = this.curve.a,
            n = this.x,
            r = this.y,
            i = this.z,
            a = i.redSqr().redSqr(),
            o = n.redSqr(),
            s = r.redSqr(),
            l = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(a)),
            u = n.redAdd(n),
            c = (u = u.redIAdd(u)).redMul(s),
            d = l.redSqr().redISub(c.redAdd(c)),
            f = c.redISub(d),
            p = s.redSqr();
        p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p);
        var h = l.redMul(f).redISub(p),
            _ = r.redAdd(r).redMul(i);
        return this.curve.jpoint(d, h, _);
    }),
    (d.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            n = this.y.redSqr(),
            r = this.z.redSqr(),
            i = n.redSqr(),
            a = e.redAdd(e).redIAdd(e),
            o = a.redSqr(),
            s = this.x.redAdd(n).redSqr().redISub(e).redISub(i),
            l = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
            u = i.redIAdd(i);
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var c = a.redIAdd(s).redSqr().redISub(o).redISub(l).redISub(u),
            d = n.redMul(c);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var f = this.x.redMul(l).redISub(d);
        f = (f = f.redIAdd(f)).redIAdd(f);
        var p = this.y.redMul(c.redMul(u.redISub(c)).redISub(s.redMul(l)));
        p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p);
        var h = this.z.redAdd(s).redSqr().redISub(r).redISub(l);
        return this.curve.jpoint(f, p, h);
    }),
    (d.prototype.mul = function (e, n) {
        return (e = new a(e, n)), this.curve._wnafMul(this, e);
    }),
    (d.prototype.eq = function (e) {
        if ('affine' === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var n = this.z.redSqr(),
            r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(n)).cmpn(0)) return !1;
        var i = n.redMul(this.z),
            a = r.redMul(e.z);
        return 0 === this.y.redMul(a).redISub(e.y.redMul(i)).cmpn(0);
    }),
    (d.prototype.eqXToP = function (e) {
        var n = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(n);
        if (0 === this.x.cmp(r)) return !0;
        for (var i = e.clone(), a = this.curve.redN.redMul(n); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(a), 0 === this.x.cmp(r))) return !0;
        }
    }),
    (d.prototype.inspect = function () {
        return this.isInfinity() ? '<EC JPoint Infinity>' : '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
    }),
    (d.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    });
