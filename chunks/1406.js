var i = n(685053),
    r = n(814033),
    a = n(689118),
    s = n(806981),
    o = i.assert;
function l(e) {
    (this.twisted = (0 | e.a) != 1), (this.mOneA = this.twisted && (0 | e.a) == -1), (this.extended = this.mOneA), s.call(this, 'edwards', e), (this.a = new r(e.a, 16).umod(this.red.m)), (this.a = this.a.toRed(this.red)), (this.c = new r(e.c, 16).toRed(this.red)), (this.c2 = this.c.redSqr()), (this.d = new r(e.d, 16).toRed(this.red)), (this.dd = this.d.redAdd(this.d)), o(!this.twisted || 0 === this.c.fromRed().cmpn(1)), (this.oneC = (0 | e.c) == 1);
}
function u(e, t, n, i, a) {
    s.BasePoint.call(this, e, 'projective'), null === t && null === n && null === i ? ((this.x = this.curve.zero), (this.y = this.curve.one), (this.z = this.curve.one), (this.t = this.curve.zero), (this.zOne = !0)) : ((this.x = new r(t, 16)), (this.y = new r(n, 16)), (this.z = i ? new r(i, 16) : this.curve.one), (this.t = a && new r(a, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one), !this.curve.extended || this.t || ((this.t = this.x.redMul(this.y)), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
}
a(l, s),
    (e.exports = l),
    (l.prototype._mulA = function (e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e);
    }),
    (l.prototype._mulC = function (e) {
        return this.oneC ? e : this.c.redMul(e);
    }),
    (l.prototype.jpoint = function (e, t, n, i) {
        return this.point(e, t, n, i);
    }),
    (l.prototype.pointFromX = function (e, t) {
        (e = new r(e, 16)).red || (e = e.toRed(this.red));
        var n = e.redSqr(),
            i = this.c2.redSub(this.a.redMul(n)),
            a = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            s = i.redMul(a.redInvm()),
            o = s.redSqrt();
        if (0 !== o.redSqr().redSub(s).cmp(this.zero)) throw Error('invalid point');
        var l = o.fromRed().isOdd();
        return ((t && !l) || (!t && l)) && (o = o.redNeg()), this.point(e, o);
    }),
    (l.prototype.pointFromY = function (e, t) {
        (e = new r(e, 16)).red || (e = e.toRed(this.red));
        var n = e.redSqr(),
            i = n.redSub(this.c2),
            a = n.redMul(this.d).redMul(this.c2).redSub(this.a),
            s = i.redMul(a.redInvm());
        if (0 === s.cmp(this.zero)) {
            if (!t) return this.point(this.zero, e);
            throw Error('invalid point');
        }
        var o = s.redSqrt();
        if (0 !== o.redSqr().redSub(s).cmp(this.zero)) throw Error('invalid point');
        return o.fromRed().isOdd() !== t && (o = o.redNeg()), this.point(o, e);
    }),
    (l.prototype.validate = function (e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var t = e.x.redSqr(),
            n = e.y.redSqr(),
            i = t.redMul(this.a).redAdd(n),
            r = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));
        return 0 === i.cmp(r);
    }),
    a(u, s.BasePoint),
    (l.prototype.pointFromJSON = function (e) {
        return u.fromJSON(this, e);
    }),
    (l.prototype.point = function (e, t, n, i) {
        return new u(this, e, t, n, i);
    }),
    (u.fromJSON = function (e, t) {
        return new u(e, t[0], t[1], t[2]);
    }),
    (u.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }),
    (u.prototype.isInfinity = function () {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || (this.zOne && 0 === this.y.cmp(this.curve.c)));
    }),
    (u.prototype._extDbl = function () {
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr();
        n = n.redIAdd(n);
        var i = this.curve._mulA(e),
            r = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            a = i.redAdd(t),
            s = a.redSub(n),
            o = i.redSub(t),
            l = r.redMul(s),
            u = a.redMul(o),
            c = r.redMul(o),
            d = s.redMul(a);
        return this.curve.point(l, u, d, c);
    }),
    (u.prototype._projDbl = function () {
        var e,
            t,
            n,
            i,
            r,
            a,
            s = this.x.redAdd(this.y).redSqr(),
            o = this.x.redSqr(),
            l = this.y.redSqr();
        if (this.curve.twisted) {
            var u = (i = this.curve._mulA(o)).redAdd(l);
            this.zOne ? ((e = s.redSub(o).redSub(l).redMul(u.redSub(this.curve.two))), (t = u.redMul(i.redSub(l))), (n = u.redSqr().redSub(u).redSub(u))) : ((r = this.z.redSqr()), (a = u.redSub(r).redISub(r)), (e = s.redSub(o).redISub(l).redMul(a)), (t = u.redMul(i.redSub(l))), (n = u.redMul(a)));
        } else (i = o.redAdd(l)), (r = this.curve._mulC(this.z).redSqr()), (a = i.redSub(r).redSub(r)), (e = this.curve._mulC(s.redISub(i)).redMul(a)), (t = this.curve._mulC(i).redMul(o.redISub(l))), (n = i.redMul(a));
        return this.curve.point(e, t, n);
    }),
    (u.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    }),
    (u.prototype._extAdd = function (e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            i = this.t.redMul(this.curve.dd).redMul(e.t),
            r = this.z.redMul(e.z.redAdd(e.z)),
            a = n.redSub(t),
            s = r.redSub(i),
            o = r.redAdd(i),
            l = n.redAdd(t),
            u = a.redMul(s),
            c = o.redMul(l),
            d = a.redMul(l),
            f = s.redMul(o);
        return this.curve.point(u, c, f, d);
    }),
    (u.prototype._projAdd = function (e) {
        var t,
            n,
            i = this.z.redMul(e.z),
            r = i.redSqr(),
            a = this.x.redMul(e.x),
            s = this.y.redMul(e.y),
            o = this.curve.d.redMul(a).redMul(s),
            l = r.redSub(o),
            u = r.redAdd(o),
            c = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(s),
            d = i.redMul(l).redMul(c);
        return this.curve.twisted ? ((t = i.redMul(u).redMul(s.redSub(this.curve._mulA(a)))), (n = l.redMul(u))) : ((t = i.redMul(u).redMul(s.redSub(a))), (n = this.curve._mulC(l).redMul(u))), this.curve.point(d, t, n);
    }),
    (u.prototype.add = function (e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
    }),
    (u.prototype.mul = function (e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
    }),
    (u.prototype.mulAdd = function (e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1);
    }),
    (u.prototype.jmulAdd = function (e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0);
    }),
    (u.prototype.normalize = function () {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return (this.x = this.x.redMul(e)), (this.y = this.y.redMul(e)), this.t && (this.t = this.t.redMul(e)), (this.z = this.curve.one), (this.zOne = !0), this;
    }),
    (u.prototype.neg = function () {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    }),
    (u.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    }),
    (u.prototype.getY = function () {
        return this.normalize(), this.y.fromRed();
    }),
    (u.prototype.eq = function (e) {
        return this === e || (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()));
    }),
    (u.prototype.eqXToP = function (e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t)) return !0;
        for (var n = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(i), 0 === this.x.cmp(t))) return !0;
        }
    }),
    (u.prototype.toP = u.prototype.normalize),
    (u.prototype.mixedAdd = u.prototype.add);
