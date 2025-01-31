var i = n(685053),
    r = n(814033),
    a = n(689118),
    s = n(806981),
    o = i.assert;
function l(e) {
    s.call(this, 'short', e), (this.a = new r(e.a, 16).toRed(this.red)), (this.b = new r(e.b, 16).toRed(this.red)), (this.tinv = this.two.redInvm()), (this.zeroA = 0 === this.a.fromRed().cmpn(0)), (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)), (this.endo = this._getEndomorphism(e)), (this._endoWnafT1 = [, , , ,]), (this._endoWnafT2 = [, , , ,]);
}
function u(e, t, n, i) {
    s.BasePoint.call(this, e, 'affine'), null === t && null === n ? ((this.x = null), (this.y = null), (this.inf = !0)) : ((this.x = new r(t, 16)), (this.y = new r(n, 16)), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), (this.inf = !1));
}
function c(e, t, n, i) {
    s.BasePoint.call(this, e, 'jacobian'), null === t && null === n && null === i ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new r(0))) : ((this.x = new r(t, 16)), (this.y = new r(n, 16)), (this.z = new r(i, 16))), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one);
}
a(l, s),
    (e.exports = l),
    (l.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new r(e.beta, 16).toRed(this.red);
            else {
                var t,
                    n,
                    i,
                    a = this._getEndoRoots(this.p);
                t = (t = 0 > a[0].cmp(a[1]) ? a[0] : a[1]).toRed(this.red);
            }
            if (e.lambda) n = new r(e.lambda, 16);
            else {
                var s = this._getEndoRoots(this.n);
                0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(t)) ? (n = s[0]) : ((n = s[1]), o(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))));
            }
            return (
                (i = e.basis
                    ? e.basis.map(function (e) {
                          return {
                              a: new r(e.a, 16),
                              b: new r(e.b, 16)
                          };
                      })
                    : this._getEndoBasis(n)),
                {
                    beta: t,
                    lambda: n,
                    basis: i
                }
            );
        }
    }),
    (l.prototype._getEndoRoots = function (e) {
        var t = e === this.p ? this.red : r.mont(e),
            n = new r(2).toRed(t).redInvm(),
            i = n.redNeg(),
            a = new r(3).toRed(t).redNeg().redSqrt().redMul(n);
        return [i.redAdd(a).fromRed(), i.redSub(a).fromRed()];
    }),
    (l.prototype._getEndoBasis = function (e) {
        for (var t, n, i, a, s, o, l, u, c, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = e, _ = this.n.clone(), p = new r(1), h = new r(0), m = new r(0), g = new r(1), E = 0; 0 !== f.cmpn(0); ) {
            var v = _.div(f);
            (u = _.sub(v.mul(f))), (c = m.sub(v.mul(p)));
            var y = g.sub(v.mul(h));
            if (!i && 0 > u.cmp(d)) (t = l.neg()), (n = p), (i = u.neg()), (a = c);
            else if (i && 2 == ++E) break;
            (l = u), (_ = f), (f = u), (m = p), (p = c), (g = h), (h = y);
        }
        (s = u.neg()), (o = c);
        var I = i.sqr().add(a.sqr());
        return (
            s.sqr().add(o.sqr()).cmp(I) >= 0 && ((s = t), (o = n)),
            i.negative && ((i = i.neg()), (a = a.neg())),
            s.negative && ((s = s.neg()), (o = o.neg())),
            [
                {
                    a: i,
                    b: a
                },
                {
                    a: s,
                    b: o
                }
            ]
        );
    }),
    (l.prototype._endoSplit = function (e) {
        var t = this.endo.basis,
            n = t[0],
            i = t[1],
            r = i.b.mul(e).divRound(this.n),
            a = n.b.neg().mul(e).divRound(this.n),
            s = r.mul(n.a),
            o = a.mul(i.a),
            l = r.mul(n.b),
            u = a.mul(i.b);
        return {
            k1: e.sub(s).sub(o),
            k2: l.add(u).neg()
        };
    }),
    (l.prototype.pointFromX = function (e, t) {
        (e = new r(e, 16)).red || (e = e.toRed(this.red));
        var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            i = n.redSqrt();
        if (0 !== i.redSqr().redSub(n).cmp(this.zero)) throw Error('invalid point');
        var a = i.fromRed().isOdd();
        return ((t && !a) || (!t && a)) && (i = i.redNeg()), this.point(e, i);
    }),
    (l.prototype.validate = function (e) {
        if (e.inf) return !0;
        var t = e.x,
            n = e.y,
            i = this.a.redMul(t),
            r = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
        return 0 === n.redSqr().redISub(r).cmpn(0);
    }),
    (l.prototype._endoWnafMulAdd = function (e, t, n) {
        for (var i = this._endoWnafT1, r = this._endoWnafT2, a = 0; a < e.length; a++) {
            var s = this._endoSplit(t[a]),
                o = e[a],
                l = o._getBeta();
            s.k1.negative && (s.k1.ineg(), (o = o.neg(!0))), s.k2.negative && (s.k2.ineg(), (l = l.neg(!0))), (i[2 * a] = o), (i[2 * a + 1] = l), (r[2 * a] = s.k1), (r[2 * a + 1] = s.k2);
        }
        for (var u = this._wnafMulAdd(1, i, r, 2 * a, n), c = 0; c < 2 * a; c++) (i[c] = null), (r[c] = null);
        return u;
    }),
    a(u, s.BasePoint),
    (l.prototype.point = function (e, t, n) {
        return new u(this, e, t, n);
    }),
    (l.prototype.pointFromJSON = function (e, t) {
        return u.fromJSON(this, e, t);
    }),
    (u.prototype._getBeta = function () {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var n = this.curve,
                    i = function (e) {
                        return n.point(e.x.redMul(n.endo.beta), e.y);
                    };
                (e.beta = t),
                    (t.precomputed = {
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
            return t;
        }
    }),
    (u.prototype.toJSON = function () {
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
    (u.fromJSON = function (e, t, n) {
        'string' == typeof t && (t = JSON.parse(t));
        var i = e.point(t[0], t[1], n);
        if (!t[2]) return i;
        function r(t) {
            return e.point(t[0], t[1], n);
        }
        var a = t[2];
        return (
            (i.precomputed = {
                beta: null,
                doubles: a.doubles && {
                    step: a.doubles.step,
                    points: [i].concat(a.doubles.points.map(r))
                },
                naf: a.naf && {
                    wnd: a.naf.wnd,
                    points: [i].concat(a.naf.points.map(r))
                }
            }),
            i
        );
    }),
    (u.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
    }),
    (u.prototype.isInfinity = function () {
        return this.inf;
    }),
    (u.prototype.add = function (e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var n = t.redSqr().redISub(this.x).redISub(e.x),
            i = t.redMul(this.x.redSub(n)).redISub(this.y);
        return this.curve.point(n, i);
    }),
    (u.prototype.dbl = function () {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
            n = this.x.redSqr(),
            i = e.redInvm(),
            r = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(i),
            a = r.redSqr().redISub(this.x.redAdd(this.x)),
            s = r.redMul(this.x.redSub(a)).redISub(this.y);
        return this.curve.point(a, s);
    }),
    (u.prototype.getX = function () {
        return this.x.fromRed();
    }),
    (u.prototype.getY = function () {
        return this.y.fromRed();
    }),
    (u.prototype.mul = function (e) {
        return ((e = new r(e, 16)), this.isInfinity()) ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
    }),
    (u.prototype.mulAdd = function (e, t, n) {
        var i = [this, t],
            r = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, r) : this.curve._wnafMulAdd(1, i, r, 2);
    }),
    (u.prototype.jmulAdd = function (e, t, n) {
        var i = [this, t],
            r = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, r, !0) : this.curve._wnafMulAdd(1, i, r, 2, !0);
    }),
    (u.prototype.eq = function (e) {
        return this === e || (this.inf === e.inf && (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))));
    }),
    (u.prototype.neg = function (e) {
        if (this.inf) return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var n = this.precomputed,
                i = function (e) {
                    return e.neg();
                };
            t.precomputed = {
                naf: n.naf && {
                    wnd: n.naf.wnd,
                    points: n.naf.points.map(i)
                },
                doubles: n.doubles && {
                    step: n.doubles.step,
                    points: n.doubles.points.map(i)
                }
            };
        }
        return t;
    }),
    (u.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
    }),
    a(c, s.BasePoint),
    (l.prototype.jpoint = function (e, t, n) {
        return new c(this, e, t, n);
    }),
    (c.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            t = e.redSqr(),
            n = this.x.redMul(t),
            i = this.y.redMul(t).redMul(e);
        return this.curve.point(n, i);
    }),
    (c.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }),
    (c.prototype.add = function (e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
            n = this.z.redSqr(),
            i = this.x.redMul(t),
            r = e.x.redMul(n),
            a = this.y.redMul(t.redMul(e.z)),
            s = e.y.redMul(n.redMul(this.z)),
            o = i.redSub(r),
            l = a.redSub(s);
        if (0 === o.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = o.redSqr(),
            c = u.redMul(o),
            d = i.redMul(u),
            f = l.redSqr().redIAdd(c).redISub(d).redISub(d),
            _ = l.redMul(d.redISub(f)).redISub(a.redMul(c)),
            p = this.z.redMul(e.z).redMul(o);
        return this.curve.jpoint(f, _, p);
    }),
    (c.prototype.mixedAdd = function (e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
            n = this.x,
            i = e.x.redMul(t),
            r = this.y,
            a = e.y.redMul(t).redMul(this.z),
            s = n.redSub(i),
            o = r.redSub(a);
        if (0 === s.cmpn(0)) return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var l = s.redSqr(),
            u = l.redMul(s),
            c = n.redMul(l),
            d = o.redSqr().redIAdd(u).redISub(c).redISub(c),
            f = o.redMul(c.redISub(d)).redISub(r.redMul(u)),
            _ = this.z.redMul(s);
        return this.curve.jpoint(d, f, _);
    }),
    (c.prototype.dblp = function (e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var t,
                n = this;
            for (t = 0; t < e; t++) n = n.dbl();
            return n;
        }
        var i = this.curve.a,
            r = this.curve.tinv,
            a = this.x,
            s = this.y,
            o = this.z,
            l = o.redSqr().redSqr(),
            u = s.redAdd(s);
        for (t = 0; t < e; t++) {
            var c = a.redSqr(),
                d = u.redSqr(),
                f = d.redSqr(),
                _ = c.redAdd(c).redIAdd(c).redIAdd(i.redMul(l)),
                p = a.redMul(d),
                h = _.redSqr().redISub(p.redAdd(p)),
                m = p.redISub(h),
                g = _.redMul(m);
            g = g.redIAdd(g).redISub(f);
            var E = u.redMul(o);
            t + 1 < e && (l = l.redMul(f)), (a = h), (o = E), (u = g);
        }
        return this.curve.jpoint(a, u.redMul(r), o);
    }),
    (c.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    }),
    (c.prototype._zeroDbl = function () {
        if (this.zOne) {
            var e,
                t,
                n,
                i = this.x.redSqr(),
                r = this.y.redSqr(),
                a = r.redSqr(),
                s = this.x.redAdd(r).redSqr().redISub(i).redISub(a);
            s = s.redIAdd(s);
            var o = i.redAdd(i).redIAdd(i),
                l = o.redSqr().redISub(s).redISub(s),
                u = a.redIAdd(a);
            (u = (u = u.redIAdd(u)).redIAdd(u)), (e = l), (t = o.redMul(s.redISub(l)).redISub(u)), (n = this.y.redAdd(this.y));
        } else {
            var c = this.x.redSqr(),
                d = this.y.redSqr(),
                f = d.redSqr(),
                _ = this.x.redAdd(d).redSqr().redISub(c).redISub(f);
            _ = _.redIAdd(_);
            var p = c.redAdd(c).redIAdd(c),
                h = p.redSqr(),
                m = f.redIAdd(f);
            (m = (m = m.redIAdd(m)).redIAdd(m)), (e = h.redISub(_).redISub(_)), (t = p.redMul(_.redISub(e)).redISub(m)), (n = (n = this.y.redMul(this.z)).redIAdd(n));
        }
        return this.curve.jpoint(e, t, n);
    }),
    (c.prototype._threeDbl = function () {
        if (this.zOne) {
            var e,
                t,
                n,
                i = this.x.redSqr(),
                r = this.y.redSqr(),
                a = r.redSqr(),
                s = this.x.redAdd(r).redSqr().redISub(i).redISub(a);
            s = s.redIAdd(s);
            var o = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                l = o.redSqr().redISub(s).redISub(s);
            e = l;
            var u = a.redIAdd(a);
            (u = (u = u.redIAdd(u)).redIAdd(u)), (t = o.redMul(s.redISub(l)).redISub(u)), (n = this.y.redAdd(this.y));
        } else {
            var c = this.z.redSqr(),
                d = this.y.redSqr(),
                f = this.x.redMul(d),
                _ = this.x.redSub(c).redMul(this.x.redAdd(c));
            _ = _.redAdd(_).redIAdd(_);
            var p = f.redIAdd(f),
                h = (p = p.redIAdd(p)).redAdd(p);
            (e = _.redSqr().redISub(h)), (n = this.y.redAdd(this.z).redSqr().redISub(d).redISub(c));
            var m = d.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)), (t = _.redMul(p.redISub(e)).redISub(m));
        }
        return this.curve.jpoint(e, t, n);
    }),
    (c.prototype._dbl = function () {
        var e = this.curve.a,
            t = this.x,
            n = this.y,
            i = this.z,
            r = i.redSqr().redSqr(),
            a = t.redSqr(),
            s = n.redSqr(),
            o = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(r)),
            l = t.redAdd(t),
            u = (l = l.redIAdd(l)).redMul(s),
            c = o.redSqr().redISub(u.redAdd(u)),
            d = u.redISub(c),
            f = s.redSqr();
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var _ = o.redMul(d).redISub(f),
            p = n.redAdd(n).redMul(i);
        return this.curve.jpoint(c, _, p);
    }),
    (c.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr(),
            i = t.redSqr(),
            r = e.redAdd(e).redIAdd(e),
            a = r.redSqr(),
            s = this.x.redAdd(t).redSqr().redISub(e).redISub(i),
            o = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(a)).redSqr(),
            l = i.redIAdd(i);
        l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
        var u = r.redIAdd(s).redSqr().redISub(a).redISub(o).redISub(l),
            c = t.redMul(u);
        c = (c = c.redIAdd(c)).redIAdd(c);
        var d = this.x.redMul(o).redISub(c);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var f = this.y.redMul(u.redMul(l.redISub(u)).redISub(s.redMul(o)));
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var _ = this.z.redAdd(s).redSqr().redISub(n).redISub(o);
        return this.curve.jpoint(d, f, _);
    }),
    (c.prototype.mul = function (e, t) {
        return (e = new r(e, t)), this.curve._wnafMul(this, e);
    }),
    (c.prototype.eq = function (e) {
        if ('affine' === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
            n = e.z.redSqr();
        if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var i = t.redMul(this.z),
            r = n.redMul(e.z);
        return 0 === this.y.redMul(r).redISub(e.y.redMul(i)).cmpn(0);
    }),
    (c.prototype.eqXToP = function (e) {
        var t = this.z.redSqr(),
            n = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(n)) return !0;
        for (var i = e.clone(), r = this.curve.redN.redMul(t); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((n.redIAdd(r), 0 === this.x.cmp(n))) return !0;
        }
    }),
    (c.prototype.inspect = function () {
        return this.isInfinity() ? '<EC JPoint Infinity>' : '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
    }),
    (c.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    });
