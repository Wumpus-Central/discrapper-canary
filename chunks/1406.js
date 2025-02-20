var r = n(685053),
    i = n(814033),
    o = n(689118),
    a = n(806981),
    s = r.assert;
function l(e) {
    (this.twisted = (0 | e.a) != 1), (this.mOneA = this.twisted && (0 | e.a) == -1), (this.extended = this.mOneA), a.call(this, 'edwards', e), (this.a = new i(e.a, 16).umod(this.red.m)), (this.a = this.a.toRed(this.red)), (this.c = new i(e.c, 16).toRed(this.red)), (this.c2 = this.c.redSqr()), (this.d = new i(e.d, 16).toRed(this.red)), (this.dd = this.d.redAdd(this.d)), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), (this.oneC = (0 | e.c) == 1);
}
function c(e, t, n, r, o) {
    a.BasePoint.call(this, e, 'projective'), null === t && null === n && null === r ? ((this.x = this.curve.zero), (this.y = this.curve.one), (this.z = this.curve.one), (this.t = this.curve.zero), (this.zOne = !0)) : ((this.x = new i(t, 16)), (this.y = new i(n, 16)), (this.z = r ? new i(r, 16) : this.curve.one), (this.t = o && new i(o, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one), !this.curve.extended || this.t || ((this.t = this.x.redMul(this.y)), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
}
o(l, a),
    (e.exports = l),
    (l.prototype._mulA = function (e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e);
    }),
    (l.prototype._mulC = function (e) {
        return this.oneC ? e : this.c.redMul(e);
    }),
    (l.prototype.jpoint = function (e, t, n, r) {
        return this.point(e, t, n, r);
    }),
    (l.prototype.pointFromX = function (e, t) {
        (e = new i(e, 16)).red || (e = e.toRed(this.red));
        var n = e.redSqr(),
            r = this.c2.redSub(this.a.redMul(n)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            a = r.redMul(o.redInvm()),
            s = a.redSqrt();
        if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw Error('invalid point');
        var l = s.fromRed().isOdd();
        return ((t && !l) || (!t && l)) && (s = s.redNeg()), this.point(e, s);
    }),
    (l.prototype.pointFromY = function (e, t) {
        (e = new i(e, 16)).red || (e = e.toRed(this.red));
        var n = e.redSqr(),
            r = n.redSub(this.c2),
            o = n.redMul(this.d).redMul(this.c2).redSub(this.a),
            a = r.redMul(o.redInvm());
        if (0 === a.cmp(this.zero)) {
            if (!t) return this.point(this.zero, e);
            throw Error('invalid point');
        }
        var s = a.redSqrt();
        if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw Error('invalid point');
        return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e);
    }),
    (l.prototype.validate = function (e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var t = e.x.redSqr(),
            n = e.y.redSqr(),
            r = t.redMul(this.a).redAdd(n),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));
        return 0 === r.cmp(i);
    }),
    o(c, a.BasePoint),
    (l.prototype.pointFromJSON = function (e) {
        return c.fromJSON(this, e);
    }),
    (l.prototype.point = function (e, t, n, r) {
        return new c(this, e, t, n, r);
    }),
    (c.fromJSON = function (e, t) {
        return new c(e, t[0], t[1], t[2]);
    }),
    (c.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }),
    (c.prototype.isInfinity = function () {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || (this.zOne && 0 === this.y.cmp(this.curve.c)));
    }),
    (c.prototype._extDbl = function () {
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr();
        n = n.redIAdd(n);
        var r = this.curve._mulA(e),
            i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            o = r.redAdd(t),
            a = o.redSub(n),
            s = r.redSub(t),
            l = i.redMul(a),
            c = o.redMul(s),
            u = i.redMul(s),
            d = a.redMul(o);
        return this.curve.point(l, c, d, u);
    }),
    (c.prototype._projDbl = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = this.x.redAdd(this.y).redSqr(),
            s = this.x.redSqr(),
            l = this.y.redSqr();
        if (this.curve.twisted) {
            var c = (r = this.curve._mulA(s)).redAdd(l);
            this.zOne ? ((e = a.redSub(s).redSub(l).redMul(c.redSub(this.curve.two))), (t = c.redMul(r.redSub(l))), (n = c.redSqr().redSub(c).redSub(c))) : ((i = this.z.redSqr()), (o = c.redSub(i).redISub(i)), (e = a.redSub(s).redISub(l).redMul(o)), (t = c.redMul(r.redSub(l))), (n = c.redMul(o)));
        } else (r = s.redAdd(l)), (i = this.curve._mulC(this.z).redSqr()), (o = r.redSub(i).redSub(i)), (e = this.curve._mulC(a.redISub(r)).redMul(o)), (t = this.curve._mulC(r).redMul(s.redISub(l))), (n = r.redMul(o));
        return this.curve.point(e, t, n);
    }),
    (c.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    }),
    (c.prototype._extAdd = function (e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            r = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            o = n.redSub(t),
            a = i.redSub(r),
            s = i.redAdd(r),
            l = n.redAdd(t),
            c = o.redMul(a),
            u = s.redMul(l),
            d = o.redMul(l),
            f = a.redMul(s);
        return this.curve.point(c, u, f, d);
    }),
    (c.prototype._projAdd = function (e) {
        var t,
            n,
            r = this.z.redMul(e.z),
            i = r.redSqr(),
            o = this.x.redMul(e.x),
            a = this.y.redMul(e.y),
            s = this.curve.d.redMul(o).redMul(a),
            l = i.redSub(s),
            c = i.redAdd(s),
            u = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
            d = r.redMul(l).redMul(u);
        return this.curve.twisted ? ((t = r.redMul(c).redMul(a.redSub(this.curve._mulA(o)))), (n = l.redMul(c))) : ((t = r.redMul(c).redMul(a.redSub(o))), (n = this.curve._mulC(l).redMul(c))), this.curve.point(d, t, n);
    }),
    (c.prototype.add = function (e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
    }),
    (c.prototype.mul = function (e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
    }),
    (c.prototype.mulAdd = function (e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1);
    }),
    (c.prototype.jmulAdd = function (e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0);
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
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t)) return !0;
        for (var n = e.clone(), r = this.curve.redN.redMul(this.z); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(r), 0 === this.x.cmp(t))) return !0;
        }
    }),
    (c.prototype.toP = c.prototype.normalize),
    (c.prototype.mixedAdd = c.prototype.add);
