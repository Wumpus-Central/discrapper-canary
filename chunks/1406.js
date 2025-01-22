var i = r(685053),
    a = r(814033),
    o = r(689118),
    s = r(806981),
    l = i.assert;
function u(e) {
    (this.twisted = (0 | e.a) != 1), (this.mOneA = this.twisted && (0 | e.a) == -1), (this.extended = this.mOneA), s.call(this, 'edwards', e), (this.a = new a(e.a, 16).umod(this.red.m)), (this.a = this.a.toRed(this.red)), (this.c = new a(e.c, 16).toRed(this.red)), (this.c2 = this.c.redSqr()), (this.d = new a(e.d, 16).toRed(this.red)), (this.dd = this.d.redAdd(this.d)), l(!this.twisted || 0 === this.c.fromRed().cmpn(1)), (this.oneC = (0 | e.c) == 1);
}
function c(e, n, r, i, o) {
    s.BasePoint.call(this, e, 'projective'), null === n && null === r && null === i ? ((this.x = this.curve.zero), (this.y = this.curve.one), (this.z = this.curve.one), (this.t = this.curve.zero), (this.zOne = !0)) : ((this.x = new a(n, 16)), (this.y = new a(r, 16)), (this.z = i ? new a(i, 16) : this.curve.one), (this.t = o && new a(o, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one), this.curve.extended && !this.t && ((this.t = this.x.redMul(this.y)), !this.zOne && (this.t = this.t.redMul(this.z.redInvm()))));
}
o(u, s),
    (e.exports = u),
    (u.prototype._mulA = function (e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e);
    }),
    (u.prototype._mulC = function (e) {
        return this.oneC ? e : this.c.redMul(e);
    }),
    (u.prototype.jpoint = function (e, n, r, i) {
        return this.point(e, n, r, i);
    }),
    (u.prototype.pointFromX = function (e, n) {
        !(e = new a(e, 16)).red && (e = e.toRed(this.red));
        var r = e.redSqr(),
            i = this.c2.redSub(this.a.redMul(r)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            s = i.redMul(o.redInvm()),
            l = s.redSqrt();
        if (0 !== l.redSqr().redSub(s).cmp(this.zero)) throw Error('invalid point');
        var u = l.fromRed().isOdd();
        return ((n && !u) || (!n && u)) && (l = l.redNeg()), this.point(e, l);
    }),
    (u.prototype.pointFromY = function (e, n) {
        !(e = new a(e, 16)).red && (e = e.toRed(this.red));
        var r = e.redSqr(),
            i = r.redSub(this.c2),
            o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            s = i.redMul(o.redInvm());
        if (0 === s.cmp(this.zero)) {
            if (!n) return this.point(this.zero, e);
            throw Error('invalid point');
        }
        var l = s.redSqrt();
        if (0 !== l.redSqr().redSub(s).cmp(this.zero)) throw Error('invalid point');
        return l.fromRed().isOdd() !== n && (l = l.redNeg()), this.point(l, e);
    }),
    (u.prototype.validate = function (e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var n = e.x.redSqr(),
            r = e.y.redSqr(),
            i = n.redMul(this.a).redAdd(r),
            a = this.c2.redMul(this.one.redAdd(this.d.redMul(n).redMul(r)));
        return 0 === i.cmp(a);
    }),
    o(c, s.BasePoint),
    (u.prototype.pointFromJSON = function (e) {
        return c.fromJSON(this, e);
    }),
    (u.prototype.point = function (e, n, r, i) {
        return new c(this, e, n, r, i);
    }),
    (c.fromJSON = function (e, n) {
        return new c(e, n[0], n[1], n[2]);
    }),
    (c.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }),
    (c.prototype.isInfinity = function () {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || (this.zOne && 0 === this.y.cmp(this.curve.c)));
    }),
    (c.prototype._extDbl = function () {
        var e = this.x.redSqr(),
            n = this.y.redSqr(),
            r = this.z.redSqr();
        r = r.redIAdd(r);
        var i = this.curve._mulA(e),
            a = this.x.redAdd(this.y).redSqr().redISub(e).redISub(n),
            o = i.redAdd(n),
            s = o.redSub(r),
            l = i.redSub(n),
            u = a.redMul(s),
            c = o.redMul(l),
            d = a.redMul(l),
            f = s.redMul(o);
        return this.curve.point(u, c, f, d);
    }),
    (c.prototype._projDbl = function () {
        var e,
            n,
            r,
            i,
            a,
            o,
            s = this.x.redAdd(this.y).redSqr(),
            l = this.x.redSqr(),
            u = this.y.redSqr();
        if (this.curve.twisted) {
            var c = (i = this.curve._mulA(l)).redAdd(u);
            this.zOne ? ((e = s.redSub(l).redSub(u).redMul(c.redSub(this.curve.two))), (n = c.redMul(i.redSub(u))), (r = c.redSqr().redSub(c).redSub(c))) : ((a = this.z.redSqr()), (o = c.redSub(a).redISub(a)), (e = s.redSub(l).redISub(u).redMul(o)), (n = c.redMul(i.redSub(u))), (r = c.redMul(o)));
        } else (i = l.redAdd(u)), (a = this.curve._mulC(this.z).redSqr()), (o = i.redSub(a).redSub(a)), (e = this.curve._mulC(s.redISub(i)).redMul(o)), (n = this.curve._mulC(i).redMul(l.redISub(u))), (r = i.redMul(o));
        return this.curve.point(e, n, r);
    }),
    (c.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    }),
    (c.prototype._extAdd = function (e) {
        var n = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            i = this.t.redMul(this.curve.dd).redMul(e.t),
            a = this.z.redMul(e.z.redAdd(e.z)),
            o = r.redSub(n),
            s = a.redSub(i),
            l = a.redAdd(i),
            u = r.redAdd(n),
            c = o.redMul(s),
            d = l.redMul(u),
            f = o.redMul(u),
            p = s.redMul(l);
        return this.curve.point(c, d, p, f);
    }),
    (c.prototype._projAdd = function (e) {
        var n,
            r,
            i = this.z.redMul(e.z),
            a = i.redSqr(),
            o = this.x.redMul(e.x),
            s = this.y.redMul(e.y),
            l = this.curve.d.redMul(o).redMul(s),
            u = a.redSub(l),
            c = a.redAdd(l),
            d = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(s),
            f = i.redMul(u).redMul(d);
        return this.curve.twisted ? ((n = i.redMul(c).redMul(s.redSub(this.curve._mulA(o)))), (r = u.redMul(c))) : ((n = i.redMul(c).redMul(s.redSub(o))), (r = this.curve._mulC(u).redMul(c))), this.curve.point(f, n, r);
    }),
    (c.prototype.add = function (e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
    }),
    (c.prototype.mul = function (e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
    }),
    (c.prototype.mulAdd = function (e, n, r) {
        return this.curve._wnafMulAdd(1, [this, n], [e, r], 2, !1);
    }),
    (c.prototype.jmulAdd = function (e, n, r) {
        return this.curve._wnafMulAdd(1, [this, n], [e, r], 2, !0);
    }),
    (c.prototype.normalize = function () {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return (this.x = this.x.redMul(e)), (this.y = this.y.redMul(e)), this.t && (this.t = this.t.redMul(e)), (this.z = this.curve.one), (this.zOne = !0), this;
    }),
    (c.prototype.neg = function () {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    }),
    (c.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    }),
    (c.prototype.getY = function () {
        return this.normalize(), this.y.fromRed();
    }),
    (c.prototype.eq = function (e) {
        return this === e || (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()));
    }),
    (c.prototype.eqXToP = function (e) {
        var n = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(n)) return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((n.redIAdd(i), 0 === this.x.cmp(n))) return !0;
        }
    }),
    (c.prototype.toP = c.prototype.normalize),
    (c.prototype.mixedAdd = c.prototype.add);
