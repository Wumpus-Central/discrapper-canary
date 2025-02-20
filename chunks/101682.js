var r = n(685053),
    i = n(814033),
    o = n(689118),
    a = n(806981),
    s = r.assert;
function l(e) {
    a.call(this, 'short', e), (this.a = new i(e.a, 16).toRed(this.red)), (this.b = new i(e.b, 16).toRed(this.red)), (this.tinv = this.two.redInvm()), (this.zeroA = 0 === this.a.fromRed().cmpn(0)), (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)), (this.endo = this._getEndomorphism(e)), (this._endoWnafT1 = [, , , ,]), (this._endoWnafT2 = [, , , ,]);
}
function c(e, t, n, r) {
    a.BasePoint.call(this, e, 'affine'), null === t && null === n ? ((this.x = null), (this.y = null), (this.inf = !0)) : ((this.x = new i(t, 16)), (this.y = new i(n, 16)), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), (this.inf = !1));
}
function u(e, t, n, r) {
    a.BasePoint.call(this, e, 'jacobian'), null === t && null === n && null === r ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new i(0))) : ((this.x = new i(t, 16)), (this.y = new i(n, 16)), (this.z = new i(r, 16))), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one);
}
o(l, a),
    (e.exports = l),
    (l.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);
            else {
                var t,
                    n,
                    r,
                    o = this._getEndoRoots(this.p);
                t = (t = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red);
            }
            if (e.lambda) n = new i(e.lambda, 16);
            else {
                var a = this._getEndoRoots(this.n);
                0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t)) ? (n = a[0]) : ((n = a[1]), s(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))));
            }
            return (
                (r = e.basis
                    ? e.basis.map(function (e) {
                          return {
                              a: new i(e.a, 16),
                              b: new i(e.b, 16)
                          };
                      })
                    : this._getEndoBasis(n)),
                {
                    beta: t,
                    lambda: n,
                    basis: r
                }
            );
        }
    }),
    (l.prototype._getEndoRoots = function (e) {
        var t = e === this.p ? this.red : i.mont(e),
            n = new i(2).toRed(t).redInvm(),
            r = n.redNeg(),
            o = new i(3).toRed(t).redNeg().redSqrt().redMul(n);
        return [r.redAdd(o).fromRed(), r.redSub(o).fromRed()];
    }),
    (l.prototype._getEndoBasis = function (e) {
        for (var t, n, r, o, a, s, l, c, u, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = e, p = this.n.clone(), _ = new i(1), h = new i(0), m = new i(0), g = new i(1), E = 0; 0 !== f.cmpn(0); ) {
            var v = p.div(f);
            (c = p.sub(v.mul(f))), (u = m.sub(v.mul(_)));
            var b = g.sub(v.mul(h));
            if (!r && 0 > c.cmp(d)) (t = l.neg()), (n = _), (r = c.neg()), (o = u);
            else if (r && 2 == ++E) break;
            (l = c), (p = f), (f = c), (m = _), (_ = u), (g = h), (h = b);
        }
        (a = c.neg()), (s = u);
        var y = r.sqr().add(o.sqr());
        return (
            a.sqr().add(s.sqr()).cmp(y) >= 0 && ((a = t), (s = n)),
            r.negative && ((r = r.neg()), (o = o.neg())),
            a.negative && ((a = a.neg()), (s = s.neg())),
            [
                {
                    a: r,
                    b: o
                },
                {
                    a: a,
                    b: s
                }
            ]
        );
    }),
    (l.prototype._endoSplit = function (e) {
        var t = this.endo.basis,
            n = t[0],
            r = t[1],
            i = r.b.mul(e).divRound(this.n),
            o = n.b.neg().mul(e).divRound(this.n),
            a = i.mul(n.a),
            s = o.mul(r.a),
            l = i.mul(n.b),
            c = o.mul(r.b);
        return {
            k1: e.sub(a).sub(s),
            k2: l.add(c).neg()
        };
    }),
    (l.prototype.pointFromX = function (e, t) {
        (e = new i(e, 16)).red || (e = e.toRed(this.red));
        var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            r = n.redSqrt();
        if (0 !== r.redSqr().redSub(n).cmp(this.zero)) throw Error('invalid point');
        var o = r.fromRed().isOdd();
        return ((t && !o) || (!t && o)) && (r = r.redNeg()), this.point(e, r);
    }),
    (l.prototype.validate = function (e) {
        if (e.inf) return !0;
        var t = e.x,
            n = e.y,
            r = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);
        return 0 === n.redSqr().redISub(i).cmpn(0);
    }),
    (l.prototype._endoWnafMulAdd = function (e, t, n) {
        for (var r = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
            var a = this._endoSplit(t[o]),
                s = e[o],
                l = s._getBeta();
            a.k1.negative && (a.k1.ineg(), (s = s.neg(!0))), a.k2.negative && (a.k2.ineg(), (l = l.neg(!0))), (r[2 * o] = s), (r[2 * o + 1] = l), (i[2 * o] = a.k1), (i[2 * o + 1] = a.k2);
        }
        for (var c = this._wnafMulAdd(1, r, i, 2 * o, n), u = 0; u < 2 * o; u++) (r[u] = null), (i[u] = null);
        return c;
    }),
    o(c, a.BasePoint),
    (l.prototype.point = function (e, t, n) {
        return new c(this, e, t, n);
    }),
    (l.prototype.pointFromJSON = function (e, t) {
        return c.fromJSON(this, e, t);
    }),
    (c.prototype._getBeta = function () {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var n = this.curve,
                    r = function (e) {
                        return n.point(e.x.redMul(n.endo.beta), e.y);
                    };
                (e.beta = t),
                    (t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(r)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(r)
                        }
                    });
            }
            return t;
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
    (c.fromJSON = function (e, t, n) {
        'string' == typeof t && (t = JSON.parse(t));
        var r = e.point(t[0], t[1], n);
        if (!t[2]) return r;
        function i(t) {
            return e.point(t[0], t[1], n);
        }
        var o = t[2];
        return (
            (r.precomputed = {
                beta: null,
                doubles: o.doubles && {
                    step: o.doubles.step,
                    points: [r].concat(o.doubles.points.map(i))
                },
                naf: o.naf && {
                    wnd: o.naf.wnd,
                    points: [r].concat(o.naf.points.map(i))
                }
            }),
            r
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
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var n = t.redSqr().redISub(this.x).redISub(e.x),
            r = t.redMul(this.x.redSub(n)).redISub(this.y);
        return this.curve.point(n, r);
    }),
    (c.prototype.dbl = function () {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
            n = this.x.redSqr(),
            r = e.redInvm(),
            i = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, a);
    }),
    (c.prototype.getX = function () {
        return this.x.fromRed();
    }),
    (c.prototype.getY = function () {
        return this.y.fromRed();
    }),
    (c.prototype.mul = function (e) {
        return ((e = new i(e, 16)), this.isInfinity()) ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
    }),
    (c.prototype.mulAdd = function (e, t, n) {
        var r = [this, t],
            i = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2);
    }),
    (c.prototype.jmulAdd = function (e, t, n) {
        var r = [this, t],
            i = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0);
    }),
    (c.prototype.eq = function (e) {
        return this === e || (this.inf === e.inf && (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))));
    }),
    (c.prototype.neg = function (e) {
        if (this.inf) return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var n = this.precomputed,
                r = function (e) {
                    return e.neg();
                };
            t.precomputed = {
                naf: n.naf && {
                    wnd: n.naf.wnd,
                    points: n.naf.points.map(r)
                },
                doubles: n.doubles && {
                    step: n.doubles.step,
                    points: n.doubles.points.map(r)
                }
            };
        }
        return t;
    }),
    (c.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
    }),
    o(u, a.BasePoint),
    (l.prototype.jpoint = function (e, t, n) {
        return new u(this, e, t, n);
    }),
    (u.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            t = e.redSqr(),
            n = this.x.redMul(t),
            r = this.y.redMul(t).redMul(e);
        return this.curve.point(n, r);
    }),
    (u.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }),
    (u.prototype.add = function (e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
            n = this.z.redSqr(),
            r = this.x.redMul(t),
            i = e.x.redMul(n),
            o = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(n.redMul(this.z)),
            s = r.redSub(i),
            l = o.redSub(a);
        if (0 === s.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = s.redSqr(),
            u = c.redMul(s),
            d = r.redMul(c),
            f = l.redSqr().redIAdd(u).redISub(d).redISub(d),
            p = l.redMul(d.redISub(f)).redISub(o.redMul(u)),
            _ = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(f, p, _);
    }),
    (u.prototype.mixedAdd = function (e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
            n = this.x,
            r = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            a = n.redSub(r),
            s = i.redSub(o);
        if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var l = a.redSqr(),
            c = l.redMul(a),
            u = n.redMul(l),
            d = s.redSqr().redIAdd(c).redISub(u).redISub(u),
            f = s.redMul(u.redISub(d)).redISub(i.redMul(c)),
            p = this.z.redMul(a);
        return this.curve.jpoint(d, f, p);
    }),
    (u.prototype.dblp = function (e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var t,
                n = this;
            for (t = 0; t < e; t++) n = n.dbl();
            return n;
        }
        var r = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            a = this.y,
            s = this.z,
            l = s.redSqr().redSqr(),
            c = a.redAdd(a);
        for (t = 0; t < e; t++) {
            var u = o.redSqr(),
                d = c.redSqr(),
                f = d.redSqr(),
                p = u.redAdd(u).redIAdd(u).redIAdd(r.redMul(l)),
                _ = o.redMul(d),
                h = p.redSqr().redISub(_.redAdd(_)),
                m = _.redISub(h),
                g = p.redMul(m);
            g = g.redIAdd(g).redISub(f);
            var E = c.redMul(s);
            t + 1 < e && (l = l.redMul(f)), (o = h), (s = E), (c = g);
        }
        return this.curve.jpoint(o, c.redMul(i), s);
    }),
    (u.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    }),
    (u.prototype._zeroDbl = function () {
        if (this.zOne) {
            var e,
                t,
                n,
                r = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                a = this.x.redAdd(i).redSqr().redISub(r).redISub(o);
            a = a.redIAdd(a);
            var s = r.redAdd(r).redIAdd(r),
                l = s.redSqr().redISub(a).redISub(a),
                c = o.redIAdd(o);
            (c = (c = c.redIAdd(c)).redIAdd(c)), (e = l), (t = s.redMul(a.redISub(l)).redISub(c)), (n = this.y.redAdd(this.y));
        } else {
            var u = this.x.redSqr(),
                d = this.y.redSqr(),
                f = d.redSqr(),
                p = this.x.redAdd(d).redSqr().redISub(u).redISub(f);
            p = p.redIAdd(p);
            var _ = u.redAdd(u).redIAdd(u),
                h = _.redSqr(),
                m = f.redIAdd(f);
            (m = (m = m.redIAdd(m)).redIAdd(m)), (e = h.redISub(p).redISub(p)), (t = _.redMul(p.redISub(e)).redISub(m)), (n = (n = this.y.redMul(this.z)).redIAdd(n));
        }
        return this.curve.jpoint(e, t, n);
    }),
    (u.prototype._threeDbl = function () {
        if (this.zOne) {
            var e,
                t,
                n,
                r = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                a = this.x.redAdd(i).redSqr().redISub(r).redISub(o);
            a = a.redIAdd(a);
            var s = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
                l = s.redSqr().redISub(a).redISub(a);
            e = l;
            var c = o.redIAdd(o);
            (c = (c = c.redIAdd(c)).redIAdd(c)), (t = s.redMul(a.redISub(l)).redISub(c)), (n = this.y.redAdd(this.y));
        } else {
            var u = this.z.redSqr(),
                d = this.y.redSqr(),
                f = this.x.redMul(d),
                p = this.x.redSub(u).redMul(this.x.redAdd(u));
            p = p.redAdd(p).redIAdd(p);
            var _ = f.redIAdd(f),
                h = (_ = _.redIAdd(_)).redAdd(_);
            (e = p.redSqr().redISub(h)), (n = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u));
            var m = d.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)), (t = p.redMul(_.redISub(e)).redISub(m));
        }
        return this.curve.jpoint(e, t, n);
    }),
    (u.prototype._dbl = function () {
        var e = this.curve.a,
            t = this.x,
            n = this.y,
            r = this.z,
            i = r.redSqr().redSqr(),
            o = t.redSqr(),
            a = n.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            l = t.redAdd(t),
            c = (l = l.redIAdd(l)).redMul(a),
            u = s.redSqr().redISub(c.redAdd(c)),
            d = c.redISub(u),
            f = a.redSqr();
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var p = s.redMul(d).redISub(f),
            _ = n.redAdd(n).redMul(r);
        return this.curve.jpoint(u, p, _);
    }),
    (u.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr(),
            r = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            a = this.x.redAdd(t).redSqr().redISub(e).redISub(r),
            s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
            l = r.redIAdd(r);
        l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
        var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(l),
            u = t.redMul(c);
        u = (u = u.redIAdd(u)).redIAdd(u);
        var d = this.x.redMul(s).redISub(u);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var f = this.y.redMul(c.redMul(l.redISub(c)).redISub(a.redMul(s)));
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var p = this.z.redAdd(a).redSqr().redISub(n).redISub(s);
        return this.curve.jpoint(d, f, p);
    }),
    (u.prototype.mul = function (e, t) {
        return (e = new i(e, t)), this.curve._wnafMul(this, e);
    }),
    (u.prototype.eq = function (e) {
        if ('affine' === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
            n = e.z.redSqr();
        if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var r = t.redMul(this.z),
            i = n.redMul(e.z);
        return 0 === this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0);
    }),
    (u.prototype.eqXToP = function (e) {
        var t = this.z.redSqr(),
            n = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(n)) return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((n.redIAdd(i), 0 === this.x.cmp(n))) return !0;
        }
    }),
    (u.prototype.inspect = function () {
        return this.isInfinity() ? '<EC JPoint Infinity>' : '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
    }),
    (u.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    });
